class CreatePhones < ActiveRecord::Migration[7.1]
  def change
    create_table :phones do |t|
      t.string :name
      t.string :brand
      t.integer :price

      t.timestamps
    end
  end
end
