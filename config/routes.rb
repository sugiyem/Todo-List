Rails.application.routes.draw do
  devise_for :users
  resources :tasks
  resources :advanced_searches
  get 'welcome/about'
  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
