// === Module 9950: _profileFetch ===

// Module 9950 (_profileFetch)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_2 = async function _profileFetch(arg0) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_6 = tmp7;
          closure_134_0 = undefined;
          closure_134_1 = undefined;
          closure_134_2 = undefined;
          closure_134_3 = undefined;
          const _HermesInternal2 = _HermesInternal.HermesInternal;
          closure_134_0 = _HermesInternal2;
          let prop;
          if (_HermesInternal2 != null) {
            prop = _HermesInternal2.enableSamplingProfiler;
          }
          if (typeof prop === "function") {
            if (typeof _HermesInternal2.disableSamplingProfiler === "function") {
              if (typeof _HermesInternal2.dumpSamplingProfiler === "function") {
                closure_2 = closure_1;
                if (closure_1 == null) {
                  const _Date = Date;
                  _HermesInternal = HermesInternal;
                  closure_2 = "/tmp/nitrofetch-profile-" + Date.now() + ".cpuprofile";
                }
                closure_134_3 = closure_2;
                const result = _HermesInternal2.enableSamplingProfiler();
                c7 = 1;
                c9 = 4;
                c10 = 1;
                const obj4 = { value: _global(), done: false };
                return obj4;
              }
            }
          }
          value = {};
          c9 = 1;
          c10 = 1;
          const obj5 = { value: _global(), done: false };
          return obj5;
        }
      } else if (1 === tmp10) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          value.result = value;
          c10 = 3;
          const obj7 = { value, done: true };
          return obj7;
        }
      } else {
        if (2 === tmp10) {
          closure_4 = closure_8;
          c7 = 0;
          const result1 = closure_134_0.disableSamplingProfiler();
          c7 = 2;
          closure_134_0.dumpSamplingProfiler(closure_134_3);
          closure_134_1 = closure_134_3;
          c7 = 0;
        } else if (3 === tmp10) {
          c7 = 0;
        } else {
          if (4 === tmp10) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else {
              closure_3 = value;
              if (arg0 === 2) {
                c7 = 0;
                const result2 = closure_134_0.disableSamplingProfiler();
                c7 = 3;
                closure_134_0.dumpSamplingProfiler(closure_134_3);
                closure_134_1 = closure_134_3;
                c7 = 0;
              } else {
                closure_134_2 = value;
                c7 = 0;
                const result3 = closure_134_0.disableSamplingProfiler();
                c7 = 4;
                closure_134_0.dumpSamplingProfiler(closure_134_3);
                closure_134_1 = closure_134_3;
                c7 = 0;
                if (closure_134_1) {
                  const obj = { result: closure_134_2, profilePath: closure_134_1 };
                } else {
                  { result: null }[0] = closure_134_2;
                }
                c10 = 3;
              }
            }
          } else if (5 === tmp10) {
            c7 = 0;
          } else {
            c7 = 0;
          }
          c10 = 3;
        }
        throw closure_4;
      }
    } catch (tmp41) {
      closure_8 = tmp41;
      if (tmp4 === c7) {
        c10 = tmp3;
        throw tmp41;
      } else if (tmp2 === tmp43) {
        c9 = tmp;
      } else if (tmp === tmp43) {
        c9 = tmp3;
      } else if (tmp3 === tmp43) {
        c9 = tmp6;
      } else {
        c9 = tmp5;
      }
    }
  }
};

export function profileFetch(arg0, arg1) {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}