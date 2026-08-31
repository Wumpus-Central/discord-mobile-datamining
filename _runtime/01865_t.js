// _runtime/01865_t.js
let closure_0 = { code: "function pnpm_utilsTs2(...args){const{value,wait,worklet}=this.__closure;const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);}" };
let fn = function t(worklet) {
  closure_0 = worklet;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const obj = { time: 0 };
  const fn = function o() {
    const items = [...arguments];
    const timestamp = Date.now();
    if (timestamp - obj.time < num) {
      tmp2.time = timestamp;
    } else {
      tmp2.time = timestamp;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      return HermesBuiltin.apply(items1, undefined);
    }
  };
  fn.__closure = { value: obj, wait: num, worklet };
  fn.__workletHash = 8768898864142;
  fn.__initData = closure_0;
  return fn;
};
fn.__closure = {};
fn.__workletHash = 1678132827161;
fn.__initData = { code: "function pnpm_utilsTs1(worklet,wait=0){const value={time:0};return function(...args){\"worklet\";const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);};}" };
const fn2 = function n(arg0, arr) {
  closure_0 = arg0;
  let found;
  if (arr) {
    found = arr.find((arg0) => arg0 >= closure_0);
  }
  if (found == null) {
    found = arg0;
  }
  return found;
};
fn2.__closure = {};
fn2.__workletHash = 10680474034033;
fn2.__initData = { code: "function pnpm_utilsTs3(defaultScrollValue,snapPoints){let snapPoint;if(snapPoints){snapPoint=snapPoints.find(function(offset){return offset>=defaultScrollValue;});}return snapPoint!==null&&snapPoint!==void 0?snapPoint:defaultScrollValue;}" };
arg5.debounce = fn;
arg5.scrollDistanceWithRespectToSnapPoints = fn2;