# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Heroine.destroy_all
Power.destroy_all

flight = Power.create(
    name: "Flight",
    description: "The power to fly at supersonic speeds, even up into outer space"
    )
strength = Power.create(
    name: "Super Strength", 
    description: "Lift heavy objects that no mere mortal can manage and leap vast distances with a single bound!"
    )
psychic = Power.create(
    name: "Psychic Strength",
    description: "Control people and objects with one's thoughts and impulses"
    )

Heroine.create(name: "Wanda", supername: "Scarlett Witch", power: psychic)
Heroine.create(name: "Carol", supername: "Captain Marvel", power: flight)
Heroine.create(name: "Diana", supername: "Wonder Woman", power: strength)


