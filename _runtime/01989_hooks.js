// _runtime/01989_hooks.js
import _mod17 from "metro/00017__.js";
import _mod19 from "metro/00019__.js";
import _mod1655 from "metro/01655__.js";
import NOOP from "01975_NOOP.js";
import _mod1976 from "metro/01976__.js";

const useLayoutEffect = _mod19.useLayoutEffect;
const Platform = _mod17.Platform;
const android = "android";
let closure_4 = { code: "(function pnpm_hooksTs1(e){let[isClosed,heightWhenOpened]=this.__closure;if(e.height>0){isClosed.value=false;heightWhenOpened.value=e.height;}})" };
let closure_5 = { code: "(function pnpm_hooksTs2(e){let[progress,height]=this.__closure;progress.value=e.progress;height.value=e.height;})" };
let closure_6 = { code: "(function pnpm_hooksTs3(e){let[progress,height]=this.__closure;progress.value=e.progress;height.value=e.height;})" };
let closure_7 = { code: "(function pnpm_hooksTs4(e){let[isClosed,height,progress]=this.__closure;isClosed.value=e.height===0;height.value=e.height;progress.value=e.progress;})" };
let closure_8 = { code: "(function pnpm_hooksTs5(e){let[padding,OS,translate]=this.__closure;if(e.height===0){padding.value=0;}if(OS===\"ios\"){translate.value=e.progress;}})" };
let closure_9 = { code: "(function pnpm_hooksTs6(e){let[OS,translate]=this.__closure;if(OS!==\"ios\"){translate.value=e.progress;}})" };
let closure_10 = { code: "(function pnpm_hooksTs7(e){let[padding,translate]=this.__closure;padding.value=0;translate.value=e.progress;})" };
let closure_11 = { code: "(function pnpm_hooksTs8(e){let[padding,OS,translate]=this.__closure;padding.value=e.progress;if(OS!==\"ios\"){translate.value=e.progress;}})" };

export () => {
  NOOP.useKeyboardContext().reanimated;
  const heightWhenOpened = _mod1655.useSharedValue(0);
  const height = _mod1655.useSharedValue(0);
  const progress = _mod1655.useSharedValue(0);
  const isClosed = _mod1655.useSharedValue(true);
  useLayoutEffect(() => {
    value = _undefined.progress.value;
    c1.value = -_undefined.height.value;
    c2.value = -_undefined.height.value;
    progress.value = value;
    isClosed.value = 0 === value;
  }, []);
  items = [closure_4, isClosed, heightWhenOpened];
  [tmp6, tmp7, tmp8] = items;
  const obj7 = { onStart: null, onMove: null, onInteractive: null, onEnd: null };
  function pnpm_hooksTs1(height) {
    if (height.height > 0) {
      c0.value = false;
      c1.value = height.height;
    }
  }
  const items1 = [tmp7, tmp8];
  pnpm_hooksTs1.__closure = items1;
  pnpm_hooksTs1.__workletHash = 14137564493551;
  pnpm_hooksTs1.__initData = tmp6;
  obj7.onStart = pnpm_hooksTs1;
  const items2 = [closure_5, progress, height];
  [tmp9, tmp10, tmp11] = items2;
  function pnpm_hooksTs2(progress) {
    c0.value = progress.progress;
    c1.value = progress.height;
  }
  const items3 = [tmp10, tmp11];
  pnpm_hooksTs2.__closure = items3;
  pnpm_hooksTs2.__workletHash = 10302284383733;
  pnpm_hooksTs2.__initData = tmp9;
  obj7.onMove = pnpm_hooksTs2;
  const items4 = [closure_6, progress, height];
  [tmp12, tmp13, tmp14] = items4;
  function pnpm_hooksTs3(progress) {
    c0.value = progress.progress;
    c1.value = progress.height;
  }
  const items5 = [tmp13, tmp14];
  pnpm_hooksTs3.__closure = items5;
  pnpm_hooksTs3.__workletHash = 13364400114228;
  pnpm_hooksTs3.__initData = tmp12;
  obj7.onInteractive = pnpm_hooksTs3;
  const items6 = [closure_7, isClosed, height, progress];
  let reanimated;
  c1 = undefined;
  c2 = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items6;
  function pnpm_hooksTs4(height) {
    c0.value = 0 === height.height;
    c1.value = height.height;
    c2.value = height.progress;
  }
  const items7 = [tmp16, tmp17, tmp18];
  pnpm_hooksTs4.__closure = items7;
  pnpm_hooksTs4.__workletHash = 5463524107365;
  pnpm_hooksTs4.__initData = tmp15;
  obj7.onEnd = pnpm_hooksTs4;
  _mod1976.useKeyboardHandler(obj7, []);
  return { height, progress, heightWhenOpened, isClosed };
}
export () => {
  NOOP.useKeyboardContext().reanimated;
  const padding = _mod1655.useSharedValue(0);
  const translate = _mod1655.useSharedValue(0);
  useLayoutEffect(() => {
    c1.value = _undefined.progress.value;
  }, []);
  items = [closure_8, padding, android, translate];
  [tmp5, tmp6, tmp7, tmp8] = items;
  const obj5 = { onStart: null, onMove: null, onInteractive: null, onEnd: null };
  function pnpm_hooksTs5(height) {
    if (0 === height.height) {
      c0.value = 0;
    }
    if ("ios" === c1) {
      c2.value = height.progress;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  pnpm_hooksTs5.__closure = items1;
  pnpm_hooksTs5.__workletHash = 10725823667851;
  pnpm_hooksTs5.__initData = tmp5;
  obj5.onStart = pnpm_hooksTs5;
  const items2 = [closure_9, android, translate];
  [tmp9, tmp10, tmp11] = items2;
  function pnpm_hooksTs6(progress) {
    if ("ios" !== c0) {
      c1.value = progress.progress;
    }
  }
  const items3 = [tmp10, tmp11];
  pnpm_hooksTs6.__closure = items3;
  pnpm_hooksTs6.__workletHash = 11503767003962;
  pnpm_hooksTs6.__initData = tmp9;
  obj5.onMove = pnpm_hooksTs6;
  const items4 = [closure_10, padding, translate];
  [tmp12, tmp13, tmp14] = items4;
  function pnpm_hooksTs7(progress) {
    c0.value = 0;
    c1.value = progress.progress;
  }
  const items5 = [tmp13, tmp14];
  pnpm_hooksTs7.__closure = items5;
  pnpm_hooksTs7.__workletHash = 4497127469172;
  pnpm_hooksTs7.__initData = tmp12;
  obj5.onInteractive = pnpm_hooksTs7;
  const items6 = [closure_11, padding, android, translate];
  let reanimated;
  c1 = undefined;
  c2 = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items6;
  function pnpm_hooksTs8(progress) {
    c0.value = progress.progress;
    if ("ios" !== c1) {
      c2.value = progress.progress;
    }
  }
  const items7 = [tmp16, tmp17, tmp18];
  pnpm_hooksTs8.__closure = items7;
  pnpm_hooksTs8.__workletHash = 13125145210541;
  pnpm_hooksTs8.__initData = tmp15;
  obj5.onEnd = pnpm_hooksTs8;
  _mod1976.useKeyboardHandler(obj5, []);
  return { translate, padding };
}