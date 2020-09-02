class HeroinesController < ApplicationController
    def index
        @heroines = Heroine.all
        render json: @heroines, include: :power
    end

    def show
        @heroine = Heroine.find(params[:id])
        render json: @heroine, include: :power
    end

    def create 
        Heroine.create(
            name: params[:name],
            supername: params[:supername],
            power_id: params[:power_id],
        )
        redirect_to "http://localhost:3001"
    end
end
