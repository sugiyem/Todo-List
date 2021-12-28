class AddMaxDateToAdvancedSearches < ActiveRecord::Migration[6.1]
  def change
    add_column :advanced_searches, :max_date, :datetime
  end
end
