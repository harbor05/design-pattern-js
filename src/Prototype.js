/**
 * Prototype pattern
 * @description
 * 객체(자신)를 복사하여 인터페이스를 생성한다.
 * [MDN Link] {@link https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Classes_in_JavaScript}
 * 자바스크립트에서 기본적으로 제공하는 프로토타입 참고
 */
class UserPrototype {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    let user = new User();
    console.log("New User for clone", user);
    user.firstName = this.proto.firstName;
    user.lastName = this.proto.lastName;
    user.status = this.proto.status;
    return user;
  }
}

// 초기 객체
class User {
  constructor(firstName, lastName, status) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.status = status;
  }

  introduce() {
    console.log(
      `My name is ${this.firstName}-${this.lastName} \n status: ${this.status}`
    );
  }
}

let proto = new User("David", "moon", "pending");
let prototype = new UserPrototype(proto);
let user = prototype.clone();

console.log("Cloned User", user);

user.introduce();
