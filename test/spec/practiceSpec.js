//Test Suite

describe("js1-mini-project", function () {
	describe("Problem 1 - greeting and farewell", function () {
		it("greeting variable should exist", function () {
			expect(greeting).toBeDefined();
		});
		it('greeting should equal "Hi"', function () {
			expect(greeting).toBe("Hi");
		});
		it("farewell variable should exist", function () {
			expect(farewell).toBeDefined();
		});
		it('farewell should equal "Goodbye"', function () {
			expect(farewell).toBe("Goodbye");
		});
	});
	describe("Problem 2 - concatenating strings", function () {
		it("hello variable should exist", function () {
			expect(hello).toBeDefined();
		});
		it("userName variable should exist", function () {
			expect(userName).toBeDefined();
		});
		it("salutation variable should exist", function () {
			expect(salutation).toBeDefined();
		});
		it("salutation should combine hello and userName", function () {
			expect(salutation).toContain("Hello");
			expect(salutation).toContain(userName);
		});
	});
	describe("Problem 3 - seven", function () {
		it("seven variable should exist", function () {
			expect(seven).toBeDefined();
		});
		it("should be the correct data type and value", function () {
			expect(typeof seven).toBe("number");
			expect(seven).toBe(7);
		});
	});
	describe("Problem 4 - money", function () {
		it("money variable should exist", function () {
			expect(money).toBeDefined();
		});
		it("should be the correct data type", function () {
			expect(typeof money).toBe("number");
		});
	});
	describe("Problem 5 - awesome", function () {
		it("awesome variable should exist", function () {
			expect(awesome).toBeDefined();
		});
		it("should be the the boolean data type of true", function () {
			expect(awesome).toBe(true);
		});
	});
	describe("Problem 6 - myCar", function () {
		it("myCar should be null", function () {
			expect(myCar).toBe(null);
		});
	});
	describe("Problem 7 - users", function () {
		it("users should exist", function () {
			expect(users).toBeDefined();
		});
		it("users should have 4 items", function () {
			expect(users.length).toBe(4);
		});
		it("each user object name should be a string", function () {
			expect(typeof users[0].name).toBe("string");
			expect(typeof users[1].name).toBe("string");
			expect(typeof users[2].name).toBe("string");
			expect(typeof users[3].name).toBe("string");
		});
		it("each user object age should be a number", function () {
			expect(typeof users[0].age).toBe("number");
			expect(typeof users[1].age).toBe("number");
			expect(typeof users[2].age).toBe("number");
			expect(typeof users[3].age).toBe("number");
		});
	});
	describe("Problem 8 - family", function () {
		it("family should exist", function () {
			expect(family).toBeDefined();
		});
		it("family should have 3 properties", function () {
			let count = 0;
			for (key in family) {
				count++;
			}
			expect(count).toBe(3);
		});
		it("each person should have a hobbies property", function () {
			for (key in family) {
				for (newKey in family[key]) {
					expect(newKey).toBe("hobbies");
				}
			}
		});
		it("hobbies property should have a value with the data type of object", function () {
			for (key in family) {
				for (newKey in family[key]) {
					expect(typeof family[key][newKey]).toBe("object");
				}
			}
		});
	});
	describe("Problem 9 - gameScores", function () {
		it("gameScores should exist", function () {
			expect(gameScores).toBeDefined();
		});
		it("gameScores should be an array with 3 items", function () {
			expect(gameScores.length).toBe(3);
		});
		it("each item should be an array with 2 scores (numbers)", function () {
			gameScores.forEach((element) => {
				expect(element.length).toBe(2);
				expect(typeof element[0]).toBe("number");
				expect(typeof element[1]).toBe("number");
			});
		});
	});
	describe("Problem 10 - people", function () {
		it("people should exist", function () {
			expect(people).toBeDefined();
		});
		it("people should be an array with 3 objects", function () {
			expect(people.length).toBe(3);
			expect(typeof people[0]).toBe("object");
			expect(typeof people[1]).toBe("object");
			expect(typeof people[2]).toBe("object");
		});
		it("each object should have names (str), gender (str) and height (num) properties", function () {
			people.forEach((element) => {
				expect(element.name).toBeDefined();
				expect(element.gender).toBeDefined();
				expect(element.height).toBeDefined();
				expect(typeof element.name).toBe("string");
				expect(typeof element.gender).toBe("string");
				expect(typeof element.height).toBe("number");
			});
		});
	});
	describe("Problem 11 - cowboy", function () {
		it("cowboy should exist", function () {
			expect(cowboy).toBeDefined();
		});
		it("should have name (str), state (str) and favoriteCountrySong (str) properties", function () {
			let values = ['name', 'state', 'favoriteCountrySong']
			let count = 0
			for(key in cowboy){
				count++
				expect(values.includes(key)).toBe(true);
				expect(typeof cowboy[key]).toBe("string");
			}
			expect(count).toBe(3)
		});
	});
	describe("Problem 12 - dataTypes", function () {
		it("dataTypes should exist", function () {
			expect(dataTypes).toBeDefined();
		});
		it("should have 6 items of correct data types", function () {
			let values = [42, 'meaning', true, spaceship, launch]
			dataTypes.forEach(element => {
				if(!values.includes(element)){
					expect(element.length).toBe(5)
					element.forEach(number => expect(typeof number).toBe('number'))
				} else {
					expect(values.includes(element)).toBe(true)
				}
			})
		});
	});
	describe("Problem 13 - sum", function () {
		it("sum should exist", function () {
			expect(sum).toBeDefined();
			expect(typeof sum).toBe("function");
		});
		it("should equal the sum of number1 and number2", function () {
			expect(sum(number1, number2)).toBe(number1 + number2);
		});
	});
	describe("Problem 14 - multiply", function () {
		it("multiply should exist", function () {
			expect(multiply).toBeDefined();
			expect(typeof multiply).toBe("function");
		});
		it("should equal the multiplication of number1 and number2", function () {
			expect(multiply()).toBe(number1 * number2);
		});
	});
	describe("Problem 15 - favFood", function () {
		it("favFood should return the correct string", function () {
			food = "dynamic-pizza";
			expect(typeof favFood()).toBe("string");
			expect(favFood()).toBe("My favorite food is dynamic-pizza");
		});
	});
	describe("Problem 16 - assignName", function () {
		it("assignName should update theBoss to be the value of theName", function () {
			assignName(theName);
			expect(theBoss).toBe(theName);
		});
	});
	describe("Problem 17 - getName", function () {
		it("getName should return the name property from the user object", function () {
			expect(getName(user)).toBe(user.name);
		});
	});
	describe("Problem 18 - getWeekDay", function () {
		it("getWeekDay should return the 3rd item in the weekDays array from the calendar object", function () {
			expect(getWeekDay({ weekDays: [1, 2, "dynamic", 4] })).toBe("dynamic");
			expect(getWeekDay(calendar)).toBe(calendar.weekDays[2]);
		});
	});
	describe("Problem 19 - fn function", function () {
		it('fn should exist', function() {
			expect(fn).toBeDefined()
			expect(typeof fn).toBe('function')
		})
		it("should return the parameter", function () {
			let result = fn('dynamic-parameter');
			expect(result).toBe('dynamic-parameter');
		});
	});
	describe("Problem 20 - createName", function () {
		it('createName should exist', function() {
			expect(createName).toBeDefined()
			expect(typeof createName).toBe('function')
		})
		it("should return the correct first and last name combination", function () {
			expect(createName()).toBe(`${firstName} ${lastName}`);
			firstName='firstName';
			lastName='lastName';
			expect(createName()).toBe(`${firstName} ${lastName}`);
		});
	});
	describe("Problem 21 - showMeSeven", function () {
		it('showMeSeven should exist', function() {
			expect(showMeSeven).toBeDefined()
			expect(typeof showMeSeven).toBe('function')
		})
		it("should return the number 7", function () {
			expect(showMeSeven()).toBe(7);
			expect(typeof showMeSeven()).toBe('number');
		});
	});
	describe("Problem 22 - multiplier", function () {
		it('multiplier should exist', function() {
			expect(multiplier).toBeDefined()
			expect(typeof multiplier).toBe('function')
		})
		it("should return the product of the two parameters", function () {
			expect(multiplier(1,2)).toBe(2);
			expect(multiplier(2,2)).toBe(4);
		});
	});
	describe("Problem 23 - sayHello", function () {
		it('sayHello should exist', function() {
			expect(sayHello).toBeDefined()
			expect(typeof sayHello).toBe('function')
		})
		it("should return the concatenated string of the two parameters", function () {
			expect(sayHello("Testing", "Here")).toBe("Testing Here");
		});
	});
	describe("Problem 24 - makeExercise", function () {
		it('makeExercise should exist', function() {
			expect(makeExercise).toBeDefined()
			expect(typeof makeExercise).toBe('function')
		})
		it("should return an object with exerciseName and duration properties and correct values", function () {
			let result = makeExercise("pushups", 300);
			expect(typeof makeExercise("pushups", 300)).toBe('object')
			expect(result.exerciseName).toBe("pushups")
			expect(result.duration).toBe(300)
		});
	});
	describe("Problem 25 - isOldEnough", function () {
		it(`isOldEnough should return "old enough" if age is greater than 21`, function () {
			age = 23
			expect(isOldEnough()).toBe('old enough')
		});
		it(`isOldEnough should return "not yet" if age is not greater than 21`, function () {
			age = 2
			expect(isOldEnough()).toBe('not yet')
		});
	});
	describe("Problem 26 - successPredictor", function () {
		it(`successPredictor should return "success at DevMountain" if workEthic is "great"`, function () {
			workEthic = "great"
			expect(successPredictor()).toBe('success at DevMountain')
		});
		it(`successPredictor should return "failure at DevMountain" if workEthic is not "great"`, function () {
			workEthic = "something else";
			expect(successPredictor()).toBe("failure at DevMountain");
		});
	});
	describe("Problem 27 - eatOrTrash", function () {
		it(`eatOrTrash should return "throw in trash" if cookieType is "raisin"`, function () {
			cookieType = "raisin"
			expect(eatOrTrash()).toBe('throw in trash')
		});
		it(`eatOrTrash should return "eat" if cookieType is not "raisin"`, function () {
			cookieType = "something else";
			expect(eatOrTrash()).toBe("eat");
		});
	});
	describe("Problem 28 - finalScore", function () {
		it(`finalScore should return "we are the champions" if myTeamScore is greater than yourTeamScore`, function () {
			myTeamScore = 1;
			yourTeamScore = 0;
			expect(finalScore()).toBe('we are the champions')
		});
		it(`finalScore should return ":(" if myTeamScore is not greater than yourTeamScore`, function () {
			yourTeamScore = 2;
			expect(finalScore()).toBe(":(");
		});
	});
	describe("Problem 29 - findCorrectTransportation", function () {
		it(`should return "tricycle" if age is from 3 to 7`, function () {
			age = 3;
			expect(findCorrectTransportation()).toBe('tricycle')
			age = 7;
			expect(findCorrectTransportation()).toBe('tricycle')
		});
		it(`should return "bicycle" if age is from 8 to 15`, function () {
			age = 8;
			expect(findCorrectTransportation()).toBe('bicycle')
			age = 15;
			expect(findCorrectTransportation()).toBe('bicycle')
		});
		it(`should return "car" if age is greater than 15`, function () {
			age = 16;
			expect(findCorrectTransportation()).toBe('car')
			age = 100;
			expect(findCorrectTransportation()).toBe('car')
		});
	});
	describe("Problem 30 - doIGetIceCream", function () {
		it(`should return "Get Ice Cream!" if temp is "hot" and cash is true`, function () {
			temp = "hot";
			cash = true;
			expect(doIGetIceCream()).toBe("Get Ice Cream!");
		});
		it(`should return "Save up for another day." otherwise`, function () {
			temp = "cool";
			cash = false;
			expect(doIGetIceCream()).toBe("Save up for another day.");
			temp = "hot";
			cash = false;
			expect(doIGetIceCream()).toBe("Save up for another day.");
			temp = "cool";
			cash = true;
			expect(doIGetIceCream()).toBe("Save up for another day.");
		});
	});
	describe("Problem 31 - doIHaveFreeTime", function () {
		it(`should return "free time!" if work or chores are false`, function () {
			work = false;
			chores = false;
			expect(doIHaveFreeTime()).toBe("free time!");
			work = true;
			chores = false;
			expect(doIHaveFreeTime()).toBe("free time!");
			work = false;
			chores = true;
			expect(doIHaveFreeTime()).toBe("free time!");
		});
		it(`should return nothing otherwise`, function () {
			work = true;
			chores = true;
			expect(doIHaveFreeTime()).toBeUndefined();
		});
	});
	describe("Problem 32 - setCrash", function () {
		it(`crash should be true if currentSpeed is "fast" and brakes is false`, function () {
			currentSpeed = "fast";
			brakes = false;
			setCrash();
			expect(crash).toBe(true);
		});
		it(`should do nothing otherwise`, function () {
			crash = false;
			currentSpeed = "fast";
			brakes = true;
			setCrash();
			expect(crash).toBe(false);
			currentSpeed = "something else";
			brakes = true;
			setCrash();
			expect(crash).toBe(false);
			currentSpeed = "something else";
			brakes = false;
			setCrash();
			expect(crash).toBe(false);
		});
	});
	describe("Problem 33 - makePurchase", function () {
		it("makePurchase should exist", function () {
			expect(makePurchase).toBeDefined();
			expect(typeof makePurchase).toBe("function");
		});
		it(`should change the user total if item price is less than or equal to total`, function () {
			makePurchase(14);
			expect(user.total).toBe(36);
		});
		it(`should return "not enough funds" if item price is greater than user total`, function () {
			expect(makePurchase(50)).toBe("not enough funds");
		});
	});
	describe("Problem 34 - decisionMaker", function () {
		it("decisionMaker should exist", function () {
			expect(decisionMaker).toBeDefined();
			expect(typeof decisionMaker).toBe("function");
		});
		it(`should return "yum yum" if hungry is true and tired is false`, function () {
			expect(decisionMaker(true, false)).toBe("yum yum");
			expect(hunger).toBe("gone");
		});
		it(`should return "zzz zzz zzz" if hungry is false and tired is true`, function () {
			expect(decisionMaker(false, true)).toBe("zzz zzz zzz");
			expect(fatigue).toBe("gone")
		});
		it(`should return "undecided" otherwise`, function () {
			expect(decisionMaker(false, false)).toBe("undecided");
			expect(decisionMaker(true, true)).toBe("undecided");
		});
	});
});