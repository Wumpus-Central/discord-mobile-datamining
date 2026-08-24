// === Module 13853: ? ===

// Module 13853
arg5.default = () => (startTimer) => {
  closure_0 = startTimer;
  startTimer = startTimer.startTimer;
  const features = {
    benchmark(title) {
      closure_0 = title;
      const items = [];
      closure_2 = items();
      function step(title) {
        let arr = items;
        let num = 0;
        if (0 !== items.length) {
          num = arr[arr.length - 1].time;
        }
        const tmp = callback();
        arr = arr.push({ title, time: tmp, delta: tmp - num });
      }
      items.push({ title, time: 0, delta: 0 });
      function stop(title) {
        if (typeof step !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let arr = items;
        let num = 0;
        if (0 !== items.length) {
          num = arr[arr.length - 1].time;
        }
        const tmp = callback();
        let obj = { title, time: tmp, delta: tmp - num };
        arr = arr.push(obj);
        obj = { title, steps: arr };
        title.send("benchmark.report", obj);
      }
      return { step, stop, last: stop };
    }
  };
  return { features };
};