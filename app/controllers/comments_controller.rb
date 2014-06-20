class CommentsController < ApplicationController
  def index
    @comments = Comment.paginate(:page => params[:page].present? ? params[:page] : 1)
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      flash[:success] = I18n.t :success, :scope => [:comment, :create]
      redirect_to staticpages_ngoservices_path
    else
      render "index"
    end
  end
  

  def show
  end

  def edit
  end

  def new
    @comment = Comment.new
  end

  private

  def comment_params
    params.require(:comment).permit( :name, :email, :comment)
  end
end
