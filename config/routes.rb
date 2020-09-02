Rails.application.routes.draw do
  resources :heroines, only: [:index, :show, :create]
  resources :powers, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
