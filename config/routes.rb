IAmGifted::Application.routes.draw do
  root to: "staticpages#home"

  get "comments/index"
  get "comments/create"
  get "comments/show"
  get "comments/edit"
  get "comments/new"
  get "staticpages/tieup"
  get "staticpages/fame"
  get "staticpages/distributions"
  get "staticpages/events"
  get "staticpages/home"
  get "staticpages/programs"
  get "staticpages/ngoservices"
  get "staticpages/boardofeducation"
  get "staticpages/aboutus"
  get "staticpages/search"
  get "staticpages/level"
  get "staticpages/testpage"
  get "staticpages/verb"
  get "staticpages/adjective"
  get "staticpages/alphabet"
  get "staticpages/vowel"
  get "staticpages/consonants" 
  get "staticpages/capital_letters"
  get "staticpages/singular_pluralnouns"
  get "staticpages/singular_excercise" 
  get "staticpages/singular_plural"
  get "staticpages/adjectives"
  get "staticpages/adjimage"
  get "staticpages/article"
  get "staticpages/verb1"
  get "staticpages/verbimage"
  get "staticpages/prepositions"
  get "staticpages/punctuation"
  get "staticpages/punctuation1"
  get "staticpages/punctuation2"
  get "staticpages/punctuation3"
  get "staticpages/activity1"
  get "staticpages/activity2"
  get "staticpages/activity3"
  get "staticpages/activity4"
  get "staticpages/activity5"
  get "staticpages/activity6"
  get "staticpages/activity7"
  get "staticpages/activity8"
  get "staticpages/activity9"
  get "staticpages/activity10"
  get "staticpages/activity11"
  get "staticpages/activity12"
  get "staticpages/activity13"
  get "staticpages/activity14"
  get "staticpages/activity15"
  get "staticpages/activity16"
  get "staticpages/activity17"
  get "staticpages/test"
  get "staticpages/testfile"
  get "staticpages/team"

get '/programs', to: 'staticpages#programs'
get '/ngoservices', to: 'staticpages#ngoservices'
get '/boardofeducation', to: 'staticpages#boardofeducation'
get '/aboutus', to: 'staticpages#aboutus' 

resources :comments
get "nouns/noun" 
get "pronouns/pronoun"
get "pronouns/pronoun1"
get "pronouns/pronoun2"
get "pronouns/pronoun3"
get "nouns/noun_exercise"
get "nouns/common_noun"
get "nouns/proper_nouns"
 # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
