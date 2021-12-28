json.extract! task, :id, :task_name, :tag, :is_done, :created_at, :updated_at
json.url task_url(task, format: :json)
