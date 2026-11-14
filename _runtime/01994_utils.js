// === Module 1994: utils ===

// Module 1994 (utils)
let items = [{ code: "(function pnpm_utilsTs2(worklet,wait=0){let[_worklet_1776212651220_init_data]=this.__closure;const value={time:0};return function pnpm_utilsTs1Factory([_worklet_1776212651220_init_data,value,wait,worklet]){const pnpm_utilsTs1=function(...args){const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);};pnpm_utilsTs1.__closure=[value,wait,worklet];pnpm_utilsTs1.__workletHash=1776212651220;pnpm_utilsTs1.__initData=_worklet_1776212651220_init_data;return pnpm_utilsTs1;}([_worklet_1776212651220_init_data,value,wait,worklet]);})" }, { code: "(function pnpm_utilsTs1(...args){let[value,wait,worklet]=this.__closure;const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);})" }];
let c0;
[tmp2, tmp3] = items;
function pnpm_utilsTs2(c7, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  items = [c0, { time: 0 }, num, c7];
  [tmp, tmp2, tmp3, tmp4] = items;
  function pnpm_utilsTs1() {
    items = [...arguments];
    const timestamp = Date.now();
    if (timestamp - time.time < closure_1_1) {
      time.time = timestamp;
    } else {
      time.time = timestamp;
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      return HermesBuiltin.apply(items1, undefined);
    }
  }
  let items1 = [tmp2, tmp3, tmp4];
  pnpm_utilsTs1.__closure = items1;
  pnpm_utilsTs1.__workletHash = 1776212651220;
  pnpm_utilsTs1.__initData = tmp;
  return pnpm_utilsTs1;
}
let items1 = [tmp3];
pnpm_utilsTs2.__closure = items1;
pnpm_utilsTs2.__workletHash = 14609779194377;
pnpm_utilsTs2.__initData = tmp2;
const items2 = [{ code: "(function pnpm_utilsTs3(defaultScrollValue,snapPoints){let snapPoint;if(snapPoints){snapPoint=snapPoints.find(function(offset){return offset>=defaultScrollValue;});}return snapPoint!==null&&snapPoint!==void 0?snapPoint:defaultScrollValue;})" }];
[tmp4] = items2;
function pnpm_utilsTs3(arg0, arr) {
  closure_0 = arg0;
  let found;
  if (arr) {
    found = arr.find((item) => item >= closure_0);
  }
  if (found == null) {
    found = arg0;
  }
  return found;
}
pnpm_utilsTs3.__workletHash = 958296456080;
pnpm_utilsTs3.__initData = tmp4;

export const debounce = pnpm_utilsTs2;
export const scrollDistanceWithRespectToSnapPoints = pnpm_utilsTs3;