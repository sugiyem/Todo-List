class Task < ApplicationRecord
    belongs_to :user

    def self.search(search)
        if search 
            where("lower(task_name) LIKE lower(?)", "%#{search}%")
        
        else
            all
        end
    end
end
