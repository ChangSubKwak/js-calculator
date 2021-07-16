describe("calculator", () => {
	beforeEach(()=>{
		cy.visit("http://localhost:8080");
	});

	const clickNumber = (number) => {
		String(number)
			.split("")
			.map((num) => cy.get(".digits").contains(num).click());
	};

	it("더하기 테스트", () => {
		clickNumber(123);
		cy.contains("+").click();
		clickNumber(234);
		cy.contains("=").click();
		cy.get("#total").should("have.text", 357);
	});

	it("빼기 테스트", () => {
		clickNumber(123);
		cy.contains("-").click();
		clickNumber(234);
		cy.contains("=").click();
		cy.get("#total").should("have.text", -111);
	});

	it("곱셈 테스트", () => {
		clickNumber(123);
		cy.contains("X").click();
		clickNumber(234);
		cy.contains("=").click();
		cy.get("#total").should("have.text", 28782);
	});

	it("나눗셈 테스트", () => {
		clickNumber(930);
		cy.contains("/").click();
		clickNumber(234);
		cy.contains("=").click();
		cy.get("#total").should("have.text", Math.floor(930 / 234));
	});

	it("AC버튼 클릭시 0으로 초기화", () => {
    clickNumber(999);
    cy.contains("AC").click();
    cy.get("#total").should("have.text", 0);
	});

	it("숫자는 한번에 최대 3자리 수까지 입력이 가능하다.", () => {
		clickNumber(1);
		clickNumber(2);
		clickNumber(3);
		clickNumber(4);
		cy.get("#total").should("have.text", 123);
	});


});

