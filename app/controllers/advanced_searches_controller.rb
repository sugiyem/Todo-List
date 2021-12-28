class AdvancedSearchesController < ApplicationController

    def new
        @advanced_search = AdvancedSearch.new
        @tags = Task.distinct.pluck(:tag)
    end

    def create
        @advanced_search = AdvancedSearch.create(search_params)
        redirect_to @advanced_search
    end

    def show
        @advanced_search = AdvancedSearch.find(params[:id])
    end

    private
    def search_params
        params.require(:advanced_search).permit(:keywords, :tag, :min_date, :max_date, :status)
    end

end
