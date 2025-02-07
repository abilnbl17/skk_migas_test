// 1. Pseudocode
/*
    FUNC logicTestCondition PARAM n 
        FOR LOOP let i = 1; i <= n; INCREMENT i
            LET str = i
        IF i MODULUS 3 EQUAL VALUE AND EQUAL TYPE LOGICAL AND i  MODULUS 4 EQUAL VALUE AND EQUAL TYPE 0
            str INCREMENT STRING OKYES
        ELSE IF i MODULUS 3 EQUAL VALUE AND EQUAL TYPE 0
            str INCREMENT STRING OK
        ELSE IF i MODULUS 4 EQUAL VALUE AND EQUAL TYPE 0
            str INCREMENT STRING YES
        END IF
    LOG str

    END FUNC loginTestCondition VALUE n = 15
*/

const logicTestCondition = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = `${i}`;

    if (i % 3 === 0 && i % 4 === 0) {
      str += ` OKYES`;
    } else if (i % 3 === 0) {
      str += ` OK`;
    } else if (i % 4 === 0) {
      str += " YES";
    }
    console.log(str);
  }
};
logicTestCondition(15);
