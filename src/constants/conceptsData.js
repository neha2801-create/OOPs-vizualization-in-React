export const concepts = {
    class: {
      title: 'Class',
      description: 'Think of a class as a cookie cutter - it\'s a template that defines what properties and actions your objects will have!',
      color: 'bg-blue-500',
      example: {
        name: 'Animal',
        properties: ['name', 'age', 'sound'],
        methods: ['makeSound()', 'eat()']
      }
    },
    inheritance: {
      title: 'Inheritance',
      description: 'Like how a puppy inherits traits from its parents, classes can inherit properties and methods from other classes!',
      color: 'bg-green-500',
      example: {
        parent: 'Animal',
        child: 'Dog',
        inherited: ['name', 'age', 'sound'],
        added: ['breed', 'wagTail()']
      }
    },
    encapsulation: {
      title: 'Encapsulation',
      description: 'Just like how a wrapped present hides its contents, encapsulation bundles data and methods that work on that data within a single unit!',
      color: 'bg-purple-500',
      example: {
        private: ['_balance', '_pin'],
        public: ['deposit()', 'withdraw()']
      }
    },
    polymorphism: {
      title: 'Polymorphism',
      description: 'Like how a shape-shifter can take many forms, polymorphism lets objects take different forms while sharing common behaviors!',
      color: 'bg-pink-500',
      example: {
        method: 'makeSound()',
        variations: ['Dog: "Woof!"', 'Cat: "Meow!"', 'Duck: "Quack!"']
      }
    }
  };