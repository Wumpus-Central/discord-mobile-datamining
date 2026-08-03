const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  vibrate(arg0) {
    let num = arg0;
    if (arg0 === undefined) {
      num = 400;
    }
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (typeof num === "Object") {
      module(497).vibrate(num);
      const obj2 = module(497);
    } else {
      const _Array = Array;
      if (Array.isArray(num)) {
        let num2 = -1;
        if (flag) {
          num2 = 0;
        }
        module(497).vibrateByPattern(num, num2);
        const obj = module(497);
      } else {
        const _Error = Error;
        const error = new Error("Vibration pattern should be a number or array");
        throw error;
      }
    }
  },
  cancel() {
    module(497).cancel();
  }
};