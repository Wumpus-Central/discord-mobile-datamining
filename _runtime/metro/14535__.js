// _runtime/metro/14535__.js

export default () => (startTimer) => {
  closure_0 = startTimer;
  startTimer = startTimer.startTimer;
  return {
    features: {
      benchmark(title) {
        const items = [];
        closure_2 = items();
        function step(title) {
          let num = 0;
          if (0 !== items.length) {
            num = items[items.length - 1].time;
          }
          const tmp = closure_2();
          items.push({ title, time: tmp, delta: tmp - num });
          const obj = { title, time: tmp, delta: tmp - num };
        }
        items.push({ title, time: 0, delta: 0 });
        function stop(title) {
          if (typeof step === "function") {
            let num = 0;
            if (0 !== items.length) {
              num = items[items.length - 1].time;
            }
            const tmp3 = closure_2();
            const obj = { title, time: tmp3, delta: tmp3 - num };
            items.push(obj);
            const obj2 = { title, steps: items };
            title.send("benchmark.report", obj2);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        return { step, stop, last: stop };
      },
    },
  };
};
