class CreateHeroines < ActiveRecord::Migration[5.2]
  def change
    create_table :heroines do |t|
      t.string :name
      t.string :supername
      t.references :power, foreign_key: true

      t.timestamps
    end
  end
end
