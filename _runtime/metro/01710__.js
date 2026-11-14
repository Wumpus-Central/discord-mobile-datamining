// _runtime/metro/01710__.js
const obj = { ReactNative: 1, [1]: "ReactNative", UI: 2, [2]: "UI", Worker: 3, [3]: "Worker" };
const items = [{ code: "(function getRuntimeKind_Pnpm_runtimeKindTs1(){return globalThis.__RUNTIME_KIND;})" }];
[tmp2] = items;
function getRuntimeKind() {
  return globalThis.__RUNTIME_KIND;
}
getRuntimeKind.__workletHash = 14246769391097;
getRuntimeKind.__initData = tmp2;
const items1 = [{ code: "(function isRNRuntime_Pnpm_runtimeKindTs2(){return globalThis.__RUNTIME_KIND===1;})" }];
[tmp3] = items1;
function isRNRuntime() {
  return 1 === globalThis.__RUNTIME_KIND;
}
isRNRuntime.__workletHash = 267943890542;
isRNRuntime.__initData = tmp3;
const items2 = [{ code: "(function isWorkletRuntime_Pnpm_runtimeKindTs3(){return globalThis.__RUNTIME_KIND!==1;})" }];
[tmp4] = items2;
function isWorkletRuntime() {
  return 1 !== globalThis.__RUNTIME_KIND;
}
isWorkletRuntime.__workletHash = 9385234667507;
isWorkletRuntime.__initData = tmp4;
const items3 = [{ code: "(function isUIRuntime_Pnpm_runtimeKindTs4(){return globalThis.__RUNTIME_KIND===2;})" }];
[tmp5] = items3;
function isUIRuntime() {
  return 2 === globalThis.__RUNTIME_KIND;
}
isUIRuntime.__workletHash = 15353895308651;
isUIRuntime.__initData = tmp5;
const items4 = [{ code: "(function isWorkerRuntime_Pnpm_runtimeKindTs5(){return globalThis.__RUNTIME_KIND===3;})" }];
[tmp6] = items4;
function isWorkerRuntime() {
  return 3 === globalThis.__RUNTIME_KIND;
}
isWorkerRuntime.__workletHash = 15479002839105;
isWorkerRuntime.__initData = tmp6;
if (undefined === globalThis.__RUNTIME_KIND) {
  const _globalThis = globalThis;
  globalThis.__RUNTIME_KIND = obj.ReactNative;
}

export const RuntimeKind = obj;
export { getRuntimeKind };
export { isRNRuntime };
export { isWorkletRuntime };
export { isUIRuntime };
export { isWorkerRuntime };
