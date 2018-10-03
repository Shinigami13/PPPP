Rails.application.routes.draw do
  root 'pokemon#homepage'
  get 'pokemon/index'
  get 'pokemon/show'
  get 'aerodactyl' => 'pokemon#aerodactyl'
  get 'dragonite' => 'pokemon#dragonite'
  get 'pikachu' => 'pokemon#pikachu'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
