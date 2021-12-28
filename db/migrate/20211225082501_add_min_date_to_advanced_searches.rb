class AddMinDateToAdvancedSearches < ActiveRecord::Migration[6.1]
  def change
    add_column :advanced_searches, :min_date, :datetime
  end
end
