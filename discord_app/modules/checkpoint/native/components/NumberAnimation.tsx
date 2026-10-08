// discord_app/modules/checkpoint/native/components/NumberAnimation.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = fn;
const noop = fn(19);
({ useEffect: closure_4, useState: hasOwnProperty } = noop);
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(5433).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles({ animation: { height: 100, justifyContent: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/NumberAnimation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NumberAnimation(arg0) {
  const cResult = end(stateFromStores[8]).c(19);
  ({ start, end } = arg0);
  let num = 0;
  if (undefined !== start) {
    num = start;
  }
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class M {
      constructor() {
        return closure_1_7.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = M;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = end(stateFromStores[8]);
  stateFromStores = end(stateFromStores[9]).useStateFromStores(tmp5, M);
  const tmpResult = end(stateFromStores[9]);
  [tmp10, _slicedToArray] = closure_5(num);
  if (cResult[2] === end) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === num) {
        let tmp11 = cResult[5];
        let tmp12 = cResult[6];
      }
      closure_4(tmp11, tmp12);
      class M {
        constructor() {
          return closure_1_7.useReducedMotion;
        }
      }
      if (cResult[7] !== end) {
        const obj2 = { DisplayValue: end, TextColor: null };
        class M {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        cResult[7] = end;
        cResult[8] = obj2;
        let tmp16 = obj2;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] !== end) {
        const toLocaleStringResult = end.toLocaleString();
        cResult[9] = end;
        class M {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        cResult[10] = toLocaleStringResult;
        let tmp18 = toLocaleStringResult;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] !== tmp18) {
        class M {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        const tmp23 = jsx(num(tmp2[10]), { variant: "display-lg", children: null });
        cResult[11] = tmp18;
        cResult[12] = tmp23;
        let tmp20 = tmp23;
        const obj3 = { variant: "display-lg", children: null };
      } else {
        tmp20 = cResult[12];
      }
      if (cResult[13] === tmp16) {
        if (cResult[14] === tmp20) {
          let tmp24 = cResult[15];
        }
        if (cResult[16] === tmp4.animation) {
          if (cResult[17] === tmp24) {
            let tmp27 = cResult[18];
          }
          return tmp27;
        }
        class M {
          constructor() {
            return closure_1_7.useReducedMotion;
          }
        }
        const obj4 = { style: tmp15, children: tmp24 };
        const tmp29 = <View style={tmp15}>{tmp24}</View>;
        cResult[16] = tmp4.animation;
        cResult[17] = tmp24;
        cResult[18] = tmp29;
        tmp27 = tmp29;
      }
      const obj5 = { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: tmp16, fallback: tmp20 };
      const tmp26 = jsx(end(tmp2[11]).CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: tmp16, fallback: tmp20 });
      cResult[13] = tmp16;
      cResult[14] = tmp20;
      cResult[15] = tmp26;
      tmp24 = tmp26;
    }
  }
  class C {
    constructor() {
      if (closure_2) {
        return;
      } else {
        tmp = globalThis;
        _Date = Date;
        closure_0 = Date.now();
        _setInterval = setInterval;
        num = 32;
        closure_1 = setInterval(() => { ... }, 32);
        return () => { ... };
      }
    }
  }
  const items1 = [end, stateFromStores, num];
  cResult[2] = end;
  cResult[3] = stateFromStores;
  cResult[4] = num;
  cResult[5] = C;
  cResult[6] = items1;
  tmp12 = items1;
  tmp11 = C;
  const tmp9 = _slicedToArray(closure_5(num), 2);
}) : (function NumberAnimation(start) {
  let num = start.start;
  if (num === undefined) {
    num = 0;
  }
  const end = start.end;
  let stateFromStores;
  _slicedToArray = undefined;
  const tmp = closure_10();
  const tmp2 = num;
  const items = [AccessibilityStore];
  stateFromStores = num(stateFromStores[9]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = num(stateFromStores[9]);
  [tmp6, c3] = closure_5(num);
  if (stateFromStores) {
    tmp6 = end;
  }
  const items1 = [end, stateFromStores, num];
  closure_4(() => {
    if (!stateFromStores) {
      const _Date = Date;
      closure_0 = Date.now();
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        const bound = Math.min((Date.now() - closure_0) / 500, 1);
        if (1 === bound) {
          let rounded = end;
        } else {
          const _Math = Math;
          rounded = Math.round((end - num) * bound + num);
        }
        c3(rounded);
        if (1 === bound) {
          const _clearInterval = clearInterval;
          clearInterval(closure_1);
        }
      }, 32);
      return () => clearInterval(closure_1);
    }
  }, items1);
  const obj2 = { style: tmp.animation, children: null };
  const obj3 = { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: { DisplayValue: tmp6, TextColor: CHECKPOINT_PRIMARY }, fallback: null };
  const obj5 = { variant: "display-lg", children: null };
  const obj4 = { DisplayValue: tmp6, TextColor: CHECKPOINT_PRIMARY };
  const tmp5 = _slicedToArray(closure_5(num), 2);
  obj5.children = end.toLocaleString();
  obj3.fallback = jsx(end(stateFromStores[10]), { variant: "display-lg", children: null });
  obj2.children = jsx(tmp2(stateFromStores[11]).CheckpointNumbersRive, { stateMachine: "State Machine 1", fit: "contain", alignment: "center-left", dataBinding: { DisplayValue: tmp6, TextColor: CHECKPOINT_PRIMARY }, fallback: null });
  return <View style={tmp.animation}>{null}</View>;
});