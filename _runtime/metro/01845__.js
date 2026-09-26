// _runtime/metro/01845__.js
import _mod17 from "00017__.js";
import _mod19 from "00019__.js";
import cancelAnimation from "../01638_cancelAnimation.js";
import NOOP from "../01831_NOOP.js";
import _mod1832 from "01832__.js";

const useLayoutEffect = _mod19.useLayoutEffect;
const Platform = _mod17.Platform;
const android = "android";
const __initData = {
  code: "function pnpm_hooksTs1(e){const{isClosed,heightWhenOpened}=this.__closure;if(e.height>0){isClosed.value=false;heightWhenOpened.value=e.height;}}",
};
const __initData2 = {
  code: "function pnpm_hooksTs2(e){const{progress,height}=this.__closure;progress.value=e.progress;height.value=e.height;}",
};
const __initData3 = {
  code: "function pnpm_hooksTs3(e){const{progress,height}=this.__closure;progress.value=e.progress;height.value=e.height;}",
};
const __initData4 = {
  code: "function pnpm_hooksTs4(e){const{isClosed,height,progress}=this.__closure;isClosed.value=e.height===0;height.value=e.height;progress.value=e.progress;}",
};
const __initData5 = {
  code: 'function pnpm_hooksTs5(e){const{padding,OS,translate}=this.__closure;if(e.height===0){padding.value=0;}if(OS==="ios"){translate.value=e.progress;}}',
};
const __initData6 = {
  code: 'function pnpm_hooksTs6(e){const{OS,translate}=this.__closure;if(OS!=="ios"){translate.value=e.progress;}}',
};
const __initData7 = {
  code: "function pnpm_hooksTs7(e){const{padding,translate}=this.__closure;padding.value=0;translate.value=e.progress;}",
};
const __initData8 = {
  code: 'function pnpm_hooksTs8(e){const{padding,OS,translate}=this.__closure;padding.value=e.progress;if(OS!=="ios"){translate.value=e.progress;}}',
};

export const useKeyboardAnimation = () => {
  const reanimated = NOOP.useKeyboardContext().reanimated;
  const heightWhenOpened = cancelAnimation.useSharedValue(0);
  const height = cancelAnimation.useSharedValue(0);
  const progress = cancelAnimation.useSharedValue(0);
  const isClosed = cancelAnimation.useSharedValue(true);
  useLayoutEffect(() => {
    value = reanimated.progress.value;
    heightWhenOpened.value = -reanimated.height.value;
    height.value = -reanimated.height.value;
    progress.value = value;
    isClosed.value = 0 === value;
  }, []);
  const obj7 = { onStart: null, onMove: null, onInteractive: null, onEnd: null };
  const fn = function _(height) {
    if (height.height > 0) {
      isClosed.value = false;
      heightWhenOpened.value = height.height;
    }
  };
  fn.__closure = { isClosed, heightWhenOpened };
  fn.__workletHash = 12249381939606;
  fn.__initData = __initData;
  obj7.onStart = fn;
  const fn2 = function h(progress) {
    progress.value = progress.progress;
    height.value = progress.height;
  };
  fn2.__closure = { progress, height };
  fn2.__workletHash = 6522928191084;
  fn2.__initData = __initData2;
  obj7.onMove = fn2;
  const fn3 = function l(progress) {
    progress.value = progress.progress;
    height.value = progress.height;
  };
  fn3.__closure = { progress, height };
  fn3.__workletHash = 4743203414413;
  fn3.__initData = __initData3;
  obj7.onInteractive = fn3;
  const fn4 = function s(height) {
    isClosed.value = 0 === height.height;
    height.value = height.height;
    progress.value = height.progress;
  };
  fn4.__closure = { isClosed, height, progress };
  fn4.__workletHash = 7189399485148;
  fn4.__initData = __initData4;
  obj7.onEnd = fn4;
  _mod1832.useKeyboardHandler(obj7, []);
  return { height, progress, heightWhenOpened, isClosed };
};
export const useTranslateAnimation = () => {
  const reanimated = NOOP.useKeyboardContext().reanimated;
  const padding = cancelAnimation.useSharedValue(0);
  const translate = cancelAnimation.useSharedValue(0);
  useLayoutEffect(() => {
    padding.value = reanimated.progress.value;
  }, []);
  const obj5 = { onStart: null, onMove: null, onInteractive: null, onEnd: null };
  const fn = function u(height) {
    if (0 === height.height) {
      padding.value = 0;
    }
  };
  fn.__closure = { padding, OS: android, translate };
  fn.__workletHash = 12261942243858;
  fn.__initData = __initData5;
  obj5.onStart = fn;
  const fn2 = function n(progress) {
    translate.value = progress.progress;
  };
  fn2.__closure = { OS: android, translate };
  fn2.__workletHash = 4704193858755;
  fn2.__initData = __initData6;
  obj5.onMove = fn2;
  const fn3 = function o(progress) {
    padding.value = 0;
    translate.value = progress.progress;
  };
  fn3.__closure = { padding, translate };
  fn3.__workletHash = 3250463859117;
  fn3.__initData = __initData7;
  obj5.onInteractive = fn3;
  const fn4 = function t(progress) {
    padding.value = progress.progress;
    translate.value = progress.progress;
  };
  fn4.__closure = { padding, OS: android, translate };
  fn4.__workletHash = 14425204766932;
  fn4.__initData = __initData8;
  obj5.onEnd = fn4;
  _mod1832.useKeyboardHandler(obj5, []);
  return { translate, padding };
};
