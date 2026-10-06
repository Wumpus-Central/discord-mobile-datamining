// _runtime/metro/12631__.js
const require = globalThis.__r;
let _require, closure_3, dependencyMap;

export const notifyEventProcessors = function notifyEventProcessors(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let num;
  const f112616 = function (fn, arg1) {
    closure_0 = fn;
    let tmp3 = closure_0[closure_3];
    let tmp4 = closure_1;
    if (null !== closure_1) {
      if (typeof tmp3 === "function") {
        let obj = {};
        let tmp13 = obj;
        let tmp14 = tmp4;
        let merged = Object.assign(tmp4);
        let tmp16 = closure_2;
        let tmp3Result = tmp3(obj, closure_2);
        let tmp17 = closure_0;
        let tmp18 = closure_1;
        let tmp5 = closure_0(closure_1[1]).DEBUG_BUILD && tmp3.id && null === tmp3Result;
        if (tmp5) {
          let logger = tmp17(tmp18[2]).logger;
          let tmp6 = globalThis;
          let _HermesInternal = HermesInternal;
          let str = '" dropped event';
          let str2 = 'Event processor "';
          let logResult = logger.log('Event processor "' + tmp3.id + '" dropped event');
        }
        let tmp8 = arg1;
        let tmp17Result = tmp17(tmp18[3]);
        if (tmp17Result.isThenable(tmp3Result)) {
          let nextPromise = tmp3Result.then(f142915);
          let nextPromise1 = nextPromise.then(null, arg1);
        } else {
          let num = 1;
          closure_0 = tmp;
          closure_1 = tmp3Result;
          closure_2 = tmp16;
          closure_3 = tmp2 + 1;
          let self = this;
          let self2 = this;
          let syncPromise = new tmp17(tmp18[0]).SyncPromise(f112616);
          let tmp9 = syncPromise;
          let nextPromise2 = syncPromise.then(fn);
          let nextPromise3 = nextPromise2.then(null, arg1);
        }
      }
    }
    let tmp12 = fn(tmp4);
  };
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  const syncPromise = new require("12604__.js").SyncPromise(f112616);
  return syncPromise;
};
