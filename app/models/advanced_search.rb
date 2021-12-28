class AdvancedSearch < ApplicationRecord
    def search_tasks
        tasks = Task.all
        
        tasks = tasks.where(["lower(task_name) LIKE lower(?)", "%#{keywords}%"]) if keywords.present?
        tasks = tasks.where(["lower(tag) LIKE lower(?)", "%#{tag}%"]) if tag.present?
        tasks = tasks.where(["deadline >= ?", "%#{min_date}%"]) if min_date.present?
        tasks = tasks.where(["deadline <= ?", "%#{max_date}%"]) if max_date.present?
        tasks = tasks.where(["is_done LIKE ?", "%#{status}%"]) if status.present?
        tasks = tasks.sort_by {|t| [t.is_done ? 0 : 1, t.deadline]}

        return tasks
    end
end
