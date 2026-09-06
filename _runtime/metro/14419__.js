// _runtime/metro/14419__.js

export default () => (startTimer) => {
  closure_0 = startTimer;
  startTimer = startTimer.startTimer;
  return {
    features: {
      benchmark(title) {
        const items = [];
        closure_2 = items();
        function step(title) {
          let arr = items;
          let num = 0;
          if (0 !== items.length) {
            num = arr[arr.length - 1].time;
          }
          const tmp = closure_2();
          arr = arr.push({ title, time: tmp, delta: tmp - num });
        }
        items.push({ title, time: 0, delta: 0 });
        function stop(title) {
          if (typeof step === "function") {
            let arr = items;
            let num = 0;
            if (0 !== items.length) {
              num = arr[arr.length - 1].time;
            }
            const tmp3 = closure_2();
            let obj = { title, time: tmp3, delta: tmp3 - num };
            arr = arr.push(obj);
            obj = { title, steps: arr };
            title.send("benchmark.report", obj);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return { step, stop, last: stop };
      },
    },
  };
};
