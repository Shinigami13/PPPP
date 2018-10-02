// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
function elementNearViewport(t) {
var e=t.getBoundingClientRect();
return-500<=e.bottom&&-500<=e.right&&e.top<=500+(window.innerHeight||document.documentElement.clientHeight)&&e.left<=500+(window.innerWidth||document.documentElement.clientWidth)
}

function lazyLoadImages() {
var t=0,
e=!1;
$(".lazyload-resp[data-src], .img-fixed[data-src]").each(function() {
  if(elementNearViewport(this)) {
    e=!0;
    var i=$(this);
    i.replaceWith(function() {
      var t=i.attr("title")||"", e=t?' title="'+t+'"': "", n=i.attr("class")||"", a=i.attr("style")||"", r=a?' style="'+a+'"':"";
      return'<img class="'+n+'" src="'+i.data("src")+'" alt="'+i.data("alt")+'"'+e+r+">"
    }
    )
  }
  else e&&t++;
  return t<100
}
)
}

!function(d) {
d.fn.hoverIntent=function(t, e, n) {
  var a,
  r,
  i,
  s,
  o= {
    interval: 100, sensitivity:7, timeout:0
  }
  ;
  o="object"==typeof t?d.extend(o, t):d.isFunction(e)?d.extend(o, {
    over: t, out:e, selector:n
  }
  ):d.extend(o, {
    over: t, out:t, selector:e
  }
  );
  var l=function(t) {
    a=t.pageX,
    r=t.pageY
  }
  ,
  u=function(t, e) {
    if(e.hoverIntent_t=clearTimeout(e.hoverIntent_t), Math.abs(i-a)+Math.abs(s-r)<o.sensitivity)return d(e).off("mousemove.hoverIntent", l),
    e.hoverIntent_s=1,
    o.over.apply(e, [t]);
    i=a,
    s=r,
    e.hoverIntent_t=setTimeout(function() {
      u(t, e)
    }
    , o.interval)
  }
  ,
  c=function(t) {
    var n=jQuery.extend( {}
    , t),
    a=this;
    a.hoverIntent_t&&(a.hoverIntent_t=clearTimeout(a.hoverIntent_t)),
    "mouseenter"==t.type?(i=n.pageX, s=n.pageY, d(a).on("mousemove.hoverIntent", l), 1!=a.hoverIntent_s&&(a.hoverIntent_t=setTimeout(function() {
      u(n, a)
    }
    , o.interval))):(d(a).off("mousemove.hoverIntent", l), 1==a.hoverIntent_s&&(a.hoverIntent_t=setTimeout(function() {
      var t, e;
      t=n, (e=a).hoverIntent_t=clearTimeout(e.hoverIntent_t), e.hoverIntent_s=0, o.out.apply(e, [t])
    }
    , o.timeout)))
  }
  ;
  return this.on( {
    "mouseenter.hoverIntent": c, "mouseleave.hoverIntent":c
  }
  , o.selector)
}
}

(jQuery),
function(i) {
i.fn.stupidtable=function(e) {
  return this.each(function() {
    var t=i(this);
    e=e|| {}
    , e=i.extend( {}
    , i.fn.stupidtable.default_sort_fns, e), t.data("sortFns", e), t.stupidtable_build(), t.on("click.stupidtable", "thead th", function() {
      i(this).stupidsort()
    }
    ), t.find("th[data-sort-onload=yes]").eq(0).stupidsort()
  }
  )
}
,
i.fn.stupidtable.default_settings= {
  should_redraw:function(t) {
    return!0
  }
  ,
  will_manually_build_table:!1
}
,
i.fn.stupidtable.dir= {
  ASC: "asc", DESC:"desc"
}
,
i.fn.stupidtable.default_sort_fns= {
  int:function(t, e) {
    return parseInt(t, 10)-parseInt(e, 10)
  }
  ,
  float:function(t, e) {
    return parseFloat(t)-parseFloat(e)
  }
  ,
  string:function(t, e) {
    return t.toString().localeCompare(e.toString())
  }
  ,
  "string-ins":function(t, e) {
    return t=t.toString().toLocaleLowerCase(),
    e=e.toString().toLocaleLowerCase(),
    t.localeCompare(e)
  }
}
,
i.fn.stupidtable_settings=function(n) {
  return this.each(function() {
    var t=i(this), e=i.extend( {}
    , i.fn.stupidtable.default_settings, n);
    t.stupidtable.settings=e
  }
  )
}
,
i.fn.stupidsort=function(t) {
  var n=i(this),
  e=n.data("sort")||null;
  if(null!==e) {
    i.fn.stupidtable.dir;
    var a=n.closest("table"),
    r= {
      $th: n, $table:a, datatype:e
    }
    ;
    return a.stupidtable.settings||(a.stupidtable.settings=i.extend( {}
    , i.fn.stupidtable.default_settings)),
    r.compare_fn=a.data("sortFns")[e],
    r.th_index=c(r),
    r.sort_dir=u(t, r),
    n.data("sort-dir", r.sort_dir),
    a.trigger("beforetablesort", {
      column: r.th_index, direction:r.sort_dir, $th:n
    }
    ),
    a.css("display"),
    setTimeout(function() {
      a.stupidtable.settings.will_manually_build_table||a.stupidtable_build();
      var t=s(r), e=o(t, r);
      a.stupidtable.settings.should_redraw(r)&&(a.children("tbody").append(e), l(r), a.trigger("aftertablesort", {
        column: r.th_index, direction:r.sort_dir, $th:n
      }
      ), a.css("display"))
    }
    , 10),
    n
  }
}
,
i.fn.updateSortVal=function(t) {
  var e=i(this);
  return e.is("[data-sort-value]")&&e.attr("data-sort-value", t),
  e.data("sort-value", t),
  e
}
,
i.fn.stupidtable_build=function() {
  return this.each(function() {
    var t=i(this), n=[];
    t.children("tbody").children("tr").each(function(t, e) {
      var r= {
        $tr: i(e), columns:[], index:t
      }
      ;
      i(e).children("td").each(function(t, e) {
        var n=i(e).data("sort-value");
        if(void 0===n) {
          var a=i(e).text();
          i(e).data("sort-value", a), n=a
        }
        r.columns.push(n)
      }
      ), n.push(r)
    }
    ), t.data("stupidsort_internaltable", n)
  }
  )
}
;
var s=function(s) {
  var t,
  e=s.$table.data("stupidsort_internaltable"),
  o=s.th_index,
  n=s.$th.data("sort-multicolumn");
  t=n?n.split(","): [];
  var l=i.map(t, function(t, e) {
    return a(s.$table, t)
  }
  );
  return e.sort(function(t, e) {
    for(var n=l.slice(0), a=s.compare_fn(t.columns[o], e.columns[o]);
    0===a&&n.length;
    ) {
      var r=n[0], i=r.$e.data("sort");
      a=(0, s.$table.data("sortFns")[i])(t.columns[r.index], e.columns[r.index]), n.shift()
    }
    return 0===a?t.index-e.index:a
  }
  ),
  s.sort_dir!=i.fn.stupidtable.dir.ASC&&e.reverse(),
  e
}
,
a=function(t, e) {
  var n,
  a=t.find("th"),
  r=parseInt(e, 10);
  return r||0===r?n=a.eq(r):(n=a.siblings("#"+e), r=a.index(n)),
  {
    index: r, $e:n
  }
}
,
o=function(t, n) {
  var e=i.map(t, function(t, e) {
    return[[t.columns[n.th_index], t.$tr, e]]
  }
  );
  return n.column=e,
  i.map(t, function(t) {
    return t.$tr
  }
  )
}
,
l=function(t) {
  var e=t.$table,
  n=t.$th,
  a=n.data("sort-dir");
  t.th_index;
  e.find("th").data("sort-dir", null).removeClass("sorting-desc sorting-asc"),
  n.data("sort-dir", a).addClass("sorting-"+a)
}
,
u=function(t, e) {
  var n,
  a=e.$th,
  r=i.fn.stupidtable.dir;
  return t?n=t: (n=t||a.data("sort-default")||r.ASC, a.data("sort-dir")&&(n=a.data("sort-dir")===r.ASC?r.DESC:r.ASC)), n
}
,
c=function(t) {
  var e=0,
  n=t.$th.index();
  return t.$th.parents("tr").find("th").slice(0, n).each(function() {
    var t=i(this).attr("colspan")||1;
    e+=parseInt(t, 10)
  }
  ),
  e
}
}

(jQuery),
function(r) {
var u=[],
c= {
  text: {
    selector: 'input[type="text"]', event:"keyup"
  }
  ,
  select: {
    selector: "select", event:"change"
  }
  ,
  checkbox: {
    selector: 'input[type="checkbox"]', event:"click"
  }
}
,
d= {
  init:function(t) {
    t=r.extend( {
      controlPanel: null
    }
    , t);
    var a=r(this);
    return this.each(function() {
      for(var n in c)r(c[n].selector, t.controlPanel).each(function() {
        var t=n, e=r(this);
        u.push(e), e.on(c[t].event, function() {
          "select"===t&&d.updateFilterHash(e.data("filter-hash"), e.val()), d.createAndRunFilters(a)
        }
        )
      }
      );
      r(window).on("hashchange", function() {
        d.applyHashFilters(t.controlPanel), d.createAndRunFilters(a)
      }
      ), d.applyHashFilters(t.controlPanel), d.createAndRunFilters(a)
    }
    )
  }
  ,
  filter:function(n) {
    return n=r.extend( {
      filters: []
    }
    , n),
    this.each(function() {
      var t=r(this);
      t.trigger("beforetablefilter"), setTimeout(function() {
        var e=t.find("> tbody");
        e.each(function() {
          var t=e.clone();
          t.find("> tr").each(function() {
            var t=r(this);
            d.filterRow(t, n)?t.removeClass("hidden"): t.addClass("hidden")
          }
          ), e.replaceWith(t)
        }
        ), t.trigger("aftertablefilter")
      }
      , 10)
    }
    )
  }
  ,
  filterRow:function(t, e) {
    for(var n=0, a=e.filters.length;
    n<a;
    n++) {
      for(var r=e.filters[n].columns, i=e.filters[n].value.toString().toLowerCase(), s=!1, o=0, l=r.length;
      o<l;
      o++) {
        var u=t.find("td").eq(r[o]),
        c=u.data("filter-val");
        0<=(void 0===c?u.text(): c).toString().toLowerCase().indexOf(i)&&(s=!0)
      }
      if(!s)return!1
    }
    return!0
  }
  ,
  createAndRunFilters:function(t) {
    for(var e=[], n=0, a=u.length;
    n<a;
    n++) {
      var r=u[n],
      i=r.data("filter-col");
      if(void 0!==i) {
        var s=i.toString().split(","),
        o="";
        u[n].is(c.checkbox.selector)?u[n].is(":checked")&&(o=r.data("filter-val")):o=r.val(),
        e.push( {
          columns: s, value:o
        }
        )
      }
    }
    var l=[ {				filters: e			}			];
    d.filter.apply(t, l)
  }
  ,
  parseFilterHash:function() {
    var t=window.location.hash.replace("#", "");
    if(0===t.length)return {}
    ;
    var e= {}
    ,
    n=t.split("&");
    for(var a in n) {
      var r=n[a].split("=");
      2===r.length&&(e[r[0]]=r[1])
    }
    return e
  }
  ,
  applyHashFilters:function(t) {
    var e=d.parseFilterHash();
    for(var n in e)r('[data-filter-hash="'+n+'"]', t).val(e[n])
  }
  ,
  updateFilterHash:function(t, e) {
    var n=d.parseFilterHash();
    n[t]=e;
    var a="#";
    for(var r in n)0!==n[r].length&&("#"!==a&&(a+="&"), a+=r+"="+n[r]);
    window.history.replaceState(void 0, void 0, a)
  }
}
;
r.fn.filtable=function(t) {
  return"filter"===t?d.filter.apply(this, Array.prototype.slice.call(arguments, 1)): "object"!=typeof t&&t?void r.error("Unknown method `"+t+"` on jQuery.filtable"):d.init.apply(this, arguments)
}
}

(jQuery),
function(i) {
i.extend( {
  localDb:function(t, l) {
    var u= {}
    ;
    function n(t, e) {
      var n, a, r= {}
      ;
      try {
        r=JSON.parse(t)
      }
      catch(t) {
        return i.error("Server response was not JSON"), !1
      }
      u[e]=r, localStorage[e]=t, n=e, (a=JSON.parse(localStorage.versions))[n]=l, localStorage.versions=JSON.stringify(a)
    }
    function s(e) {
      i.ajax( {
        url:t+e, success:function(t) {
          n(t, e)
        }
        , error:function() {
          i.error("Error fetching data from server")
        }
      }
      )
    }
    return localStorage||(localStorage= {}
    ), {
      load:function(t, e) {
        var n=[];
        if(localStorage.versions) {
          var a=JSON.parse(localStorage.versions);
          for(var r in t) {
            var i=t[r];
            (!localStorage[i]||a[i]<l)&&n.push(i)
          }
        }
        else localStorage.versions="{}", n=t;
        for(var r in n)s(n[r]);
        !function t(e, n) {
          var a=JSON.parse(localStorage.versions), r=!0;
          for(var i in e) {
            var s=e[i], o=localStorage[s];
            !o||a[s]<l?r=!1: u[s]||(u[s]=JSON.parse(o))
          }
          r?setTimeout(n, 10):setTimeout(function() {
            t(e, n)
          }
          , 1e3)
        }
        (t, e)
      }
      , table:function(t) {
        return u[t]
      }
    }
  }
}
)
}

(jQuery),
function(l) {
l.fn.svTabs=function(o) {
  return this.each(function() {
    o=l.extend( {
      useAnchors: !1
    }
    , o);
    var t=l(this), i=t.find("> .tabs-tab-list > .tabs-tab"), s=t.find("> .tabs-panel-list > .tabs-panel"), e=i.length, n=s.length;
    if(e===n) {
      i.each(function(n) {
        var a=l(this), r=a.attr("href");
        a.on("click", function(t) {
          if(i.removeClass("active"), s.removeClass("active"), i.eq(n).addClass("active"), s.eq(n).addClass("active"), o.useAnchors&&history.replaceState) {
            var e=0<a.index()?r: window.location.pathname+window.location.search;
            history.replaceState(null, null, e)
          }
          t.preventDefault()
        }
        )
      }
      );
      var a=l('[href="'+location.hash+'"]', t);
      o.useAnchors&&a.length&&a.click()
    }
    else l.error("Number of tabs ("+e+") does not match number of panels ("+n+")")
  }
  )
}
}

(jQuery),
function(r) {
r.extend( {
  svModal:function(t) {
    var a=null;
    function e() {
      a&&a.fadeOut("", function() {
        r(".modal-title", a).html(""), r(".modal-content", a).html("")
      }
      )
    }
    return a=r('<div id="'+t+'" class="whiteout" style="display:none"><div class="modal"><span class="modal-close" title="Close">×</span><h3 class="modal-title"></h3><div class="modal-content"></div></div></div>').appendTo("body"), r(".whiteout, .modal-close").click(function(t) {
      t.target===this&&e()
    }
    ), {
      inject:function(t, e) {
        a&&(r(".modal-title", a).html(e), r(".modal-content", a).html(t))
      }
      , show:function() {
        a&&a.fadeIn()
      }
      , resizeContent:function(t, e, n) {
        a&&t&&e&&r(".modal-content", a).animate( {
          width: t, height:e
        }
        , {
          complete: n
        }
        )
      }
      , close:function() {
        e()
      }
    }
  }
}
)
}

(jQuery),
String.prototype.contains=function(t) {
return-1!=this.toLowerCase().indexOf(t.toLowerCase())
}

,
String.prototype.escapeHtml=function() {
return this.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g,""
")};var cmpPokemonNatlDex=function(t,e){return t.national==e.national?t.id-e.id:t.national-e.national};$(function(){$(".main-menu-list > li > a").removeAttr("href");var e,n="main-menu-item-active";$(".main-menu-item > .main-menu-heading").on("touchstart click",function(t){return $menuItem=$(this).parent(".main-menu-item"),$menuItem.hasClass(n)?$menuItem.removeClass(n):($(".main-menu-item").removeClass(n),$menuItem.addClass(n)),t.preventDefault(),!1}),$(".main-menu-item").hoverIntent(function(){$(".main-menu-item").removeClass(n),clearTimeout(e),$(this).addClass(n)},function(){var t=$(this);e=setTimeout(function(){t.removeClass(n)},800)});var a=13,i=38,s=40,o={maxResults:12,tmplResult:function(t){var e="egg_group"==t.type?"mechanics/egg-groups":t.type,n=t.type.charAt(0).toUpperCase()+t.type.substr(1).replace("_"," ");return'<a class="sitesearch-results-item" href="/'+e+"/"+t.alias+'"><span class="ent-name" >'+t.name+'</span> <small class="sitesearch-results-type">'+n+"</small></a>"},outputResults:function(t,e){if(0!==e.length){var n="";for(var a in e)n+=o.tmplResult(e[a]);t.html(n).addClass("sitesearch-active")}else t.html("").removeClass("sitesearch-active")},searchResults:function(t){var e=l.table("searchdata"),n=[];for(var a in e){for(var r in e[a]){var i=e[a][r];if((i[0].contains(t)||i[1].contains(t))&&(n.push({type:a,name:e[a][r][0],alias:e[a][r][1]}),n.length>=o.maxResults))break}if(n.length>=o.maxResults)break}return n},selectResultsItem:function(t,e){$(".sitesearch-results-item",t).removeClass("sitesearch-results-item-active"),0<e&&$(".sitesearch-results-item",t).eq(e-1).addClass("sitesearch-results-item-active")},appMain:function(){var r=0;$(".sitesearch-input").on("keyup focus",function(t){var e=$(this).nextAll(".sitesearch-results").first(),n=$(this).val();if(1<n.length){var a=o.searchResults(n);o.outputResults(e,a)}else o.outputResults(e,[]);t.which==i?r=Math.max(r-1,0):t.which==s&&(r=Math.min(r+1,a.length)),o.selectResultsItem(e,r)}).on("blur",function(){setTimeout(function(){$(".sitesearch-results").html("").removeClass("sitesearch-active")},200)}).on("keydown",function(t){if(t.which==a){var e=$(this).nextAll(".sitesearch-results").find(".sitesearch-results-item-active").attr("href");e&&(t.preventDefault(),window.location.href=e)}else t.which==i?t.preventDefault():t.which==s&&t.preventDefault()}),$(".sitesearch-results").on("mouseover",".sitesearch-results-item",function(t){var e=$(this);r=e.index()+1,o.selectResultsItem(e.parent(),r)})}},l=$.localDb("/json/",localDbVersions),t=!1;$(".sitesearch-input").on("focus",function(){t||(l.load(["searchdata"],o.appMain),t=!0)}),$.fn.disableBlock=function(t){"on"==t?$(this).css("opacity",.5):"off"==t&&$(this).css("opacity",1)},$.fn.stupidTableBlanks=function(n){var t=n.column+1;1==$("thead th: nth-child("+t+")",this).data("blanks")&&$("tbody td:nth-child("+t+")",this).each(function(){var t=$(this),e=$.trim(t.text());0<=$.inArray(e,["","-","N/A","—"])&&t.updateSortVal(n.direction==$.fn.stupidtable.dir.ASC?999999:-1)})}}),$(window).on("load",function(){$(".pki, .pkg").each(function(){var t=$(this);t.addClass(t.data("sprite"))})}),$(window).on("load scroll resize",function(){setTimeout(lazyLoadImages,10),$(".lazyload[data-original]").each(function(){if(elementNearViewport(this)){var t=$(this);t.on("load",function(){t.addClass("img-resp")}),t.attr("src",t.data("original")),t.removeAttr("data-original")}})}),$(".resp-scroll").on("scroll",function(){setTimeout(lazyLoadImages,10)});