// === Module 1986: compat ===

// Module 1986 (compat)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1976 from "module_1976" /* 1976 */;

require = arg1;
const dependencyMap = arg6;
const KeyboardState = { UNKNOWN: 0, OPENING: 1, OPEN: 2, CLOSING: 3, CLOSED: 4 };
let closure_3 = { code: "(function pnpm_compatTs1(e){let[state,KeyboardState]=this.__closure;state.set(e.height>0?KeyboardState.OPENING:KeyboardState.CLOSING);})" };
let closure_4 = { code: "(function pnpm_compatTs2(e){let[height]=this.__closure;height.set(e.height);})" };
let closure_5 = { code: "(function pnpm_compatTs3(e){let[height]=this.__closure;height.set(e.height);})" };
let closure_6 = { code: "(function pnpm_compatTs4(e){let[state,KeyboardState,height]=this.__closure;state.set(e.height>0?KeyboardState.OPEN:KeyboardState.CLOSED);height.set(e.height);})" };

export { KeyboardState };
export () => {
  const obj = _mod1655;
  const height = obj.useSharedValue(0);
  state = _mod1655.useSharedValue(obj.UNKNOWN);
  const tmp2 = obj;
  items = [closure_3, state, obj];
  [tmp4, tmp5, tmp6] = items;
  const obj4 = { onStart: null, onMove: null, onInteractive: null, onEnd: null };
  function pnpm_compatTs1(height) {
    if (height.height > 0) {
      let CLOSING = _undefined2.OPENING;
    } else {
      CLOSING = _undefined2.CLOSING;
    }
    const result = _undefined.set(CLOSING);
  }
  const items1 = [tmp5, tmp6];
  pnpm_compatTs1.__closure = items1;
  pnpm_compatTs1.__workletHash = 10497121628788;
  pnpm_compatTs1.__initData = tmp4;
  obj4.onStart = pnpm_compatTs1;
  const items2 = [closure_4, height];
  [tmp7, tmp8] = items2;
  function pnpm_compatTs2(height) {
    const result = _undefined.set(height.height);
  }
  const items3 = [tmp8];
  pnpm_compatTs2.__closure = items3;
  pnpm_compatTs2.__workletHash = 9483006283757;
  pnpm_compatTs2.__initData = tmp7;
  obj4.onMove = pnpm_compatTs2;
  const items4 = [closure_5, height];
  [tmp9, tmp10] = items4;
  function pnpm_compatTs3(height) {
    const result = _undefined.set(height.height);
  }
  const items5 = [tmp10];
  pnpm_compatTs3.__closure = items5;
  pnpm_compatTs3.__workletHash = 4400657500364;
  pnpm_compatTs3.__initData = tmp9;
  obj4.onInteractive = pnpm_compatTs3;
  const items6 = [closure_6, state, tmp2, height];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items6;
  function pnpm_compatTs4(height) {
    if (height.height > 0) {
      let CLOSED = _undefined2.OPEN;
    } else {
      CLOSED = _undefined2.CLOSED;
    }
    const result = _undefined.set(CLOSED);
    const result1 = _undefined3.set(height.height);
  }
  const items7 = [tmp12, tmp13, tmp14];
  pnpm_compatTs4.__closure = items7;
  pnpm_compatTs4.__workletHash = 7109015193822;
  pnpm_compatTs4.__initData = tmp11;
  obj4.onEnd = pnpm_compatTs4;
  _mod1976.useKeyboardHandler(obj4, []);
  return { height, state };
}