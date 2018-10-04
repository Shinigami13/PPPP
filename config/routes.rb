Rails.application.routes.draw do
  root 'pokemon#homepage'
  get 'pokemon/index'
  get 'pokemon/show'
  get 'aerodactyl' => 'pokemon#aerodactyl'
  get 'dragonite' => 'pokemon#dragonite'
  get 'bulbasaur' => 'pokemon#bulbasaur'
  get 'dratini' => 'pokemon#dratini'
  get 'dragonair' => 'pokemon#dragonair'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
