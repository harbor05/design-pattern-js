/*! *****************************************************************************
- Adapter Pattern(Wrapper pattern)
  인터페이스가 일치하지 않는 컴포넌트를 함께 사용할 수 있게 도와준다.
  새로운 컴포넌트가 기존에 만들어진 컴포넌트를 통합하거나 리팩토링하여 사용한다.
***************************************************************************** */

// Old interface
class Onboarding {
  // return Onboarding message
  request(name, age) {
    return `Member ${name} is ${age} years old`;
  }
}

// New interface
class AdvancedOnboarding {
  /**
   * 학교 등록
   * @param {String} college 학교 이름
   */
  setCollege(college) {
    this.college = college;
  }

  /**
   * 도시 등록
   * @param {String} city 출신 도시 이름
   */
  setCity(city) {
    this.city = city;
  }

  /**
   * @param {Number} siblings 형제, 자매 인원
   */
  setSiblings(siblings) {
    this.siblings = siblings;
  }

  // return New Onboarding message
  setRegistration(name, age) {
    return `Member ${name} is ${age} years old and has ${this.siblings} siblings,  ${this.city} also graduated ${this.college}`;
  }
}

// Adapter
class OnboardingAdapter {
  onboarding = new AdvancedOnboarding(); // New Onboarding Class
  request(name, age, college, city, siblings) {
    this.onboarding.setCity(city);
    this.onboarding.setCollege(college);
    this.onboarding.setSiblings(siblings);
    return this.onboarding.setRegistration(name, age);
  }
}

let onboarding = new Onboarding();
let member = onboarding.request("bill", 25);
console.log("Old Message:", member);

let _onboarding = new OnboardingAdapter();
let _member = _onboarding.request("bill", 25, "MIT", "Boston", 0);
console.log("New Message:", _member);
