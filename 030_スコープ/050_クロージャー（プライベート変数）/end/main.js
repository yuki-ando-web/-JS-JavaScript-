function incrementFactory() {
    
    let num = 0

    function increment() {
        num = num + 1;
        console.log(num);
    }

    return increment;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();

// incrementFactory()()
// incrementFactory()()


// increment();
// increment();
// increment();


// console.log(incrementFactory)


// コンソールに以下が出力
/* function incrementFactory() {
  
  let num = 0;

  function a() {
      num = num + 1;
      console.log(num);
  }

  return a;
} */


// console.log(incrementFactory()) 

// コンソールに以下が出力
// function a() {
  /*       num = num + 1;
        console.log(num);
            } */
// console.log(increment())
//incrementが実行されて1が出るが、increment() = a()になるのでundefind
// console.log(increment())
