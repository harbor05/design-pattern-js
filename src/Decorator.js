/**
 * @class User
 *
 * @description
 * Decorator를 통해서 기능이 정의 될 컴포넌트
 *
 * @param {String} name
 */
class User {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log("User:", this.name);
  }
}

/**
 * @class DecoratedUser - Decorator
 *
 * @description
 * User 컴포넌트의 기능을 정의
 *
 * @param {Class} User - Target component
 * @param {String} street
 * @param {String} city
 */
class DecoratedUser {
  constructor(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
  }

  say() {
    console.log(
      "Decorated User:" + this.name + ", " + this.street + ", " + this.city
    );
  }
}

const user = new User("Tom");

user.say();

const decoratedUser = new DecoratedUser(user, "Broadway", "Seoul");

decoratedUser.say();
