// === Module 1843: useKeyboardAnimation ===

// Module 1843 (useKeyboardAnimation)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import noop from "noop" /* 19 */;

const useLayoutEffect = noop.useLayoutEffect;
const Platform = get_ActivityIndicator.Platform;
const android = "android";
let closure_4 = { code: "function pnpm_hooksTs1(e){const{isClosed,heightWhenOpened}=this.__closure;if(e.height>0){isClosed.value=false;heightWhenOpened.value=e.height;}}" };
let closure_5 = { code: "function pnpm_hooksTs2(e){const{progress,height}=this.__closure;progress.value=e.progress;height.value=e.height;}" };
let closure_6 = { code: "function pnpm_hooksTs3(e){const{progress,height}=this.__closure;progress.value=e.progress;height.value=e.height;}" };
let closure_7 = { code: "function pnpm_hooksTs4(e){const{isClosed,height,progress}=this.__closure;isClosed.value=e.height===0;height.value=e.height;progress.value=e.progress;}" };
let closure_8 = { code: "function pnpm_hooksTs5(e){const{padding,OS,translate}=this.__closure;if(e.height===0){padding.value=0;}if(OS===\"ios\"){translate.value=e.progress;}}" };
let closure_9 = { code: "function pnpm_hooksTs6(e){const{OS,translate}=this.__closure;if(OS!==\"ios\"){translate.value=e.progress;}}" };
let closure_10 = { code: "function pnpm_hooksTs7(e){const{padding,translate}=this.__closure;padding.value=0;translate.value=e.progress;}" };
let closure_11 = { code: "function pnpm_hooksTs8(e){const{padding,OS,translate}=this.__closure;padding.value=e.progress;if(OS!==\"ios\"){translate.value=e.progress;}}" };

export const useKeyboardAnimation = () => {
  reanimated = reanimated(heightWhenOpened[2]).useKeyboardContext().reanimated;
  const obj = reanimated(heightWhenOpened[2]);
  heightWhenOpened = reanimated(heightWhenOpened[3]).useSharedValue(0);
  const obj2 = reanimated(heightWhenOpened[3]);
  const height = reanimated(heightWhenOpened[3]).useSharedValue(0);
  const obj3 = reanimated(heightWhenOpened[3]);
  const progress = reanimated(heightWhenOpened[3]).useSharedValue(0);
  const obj4 = reanimated(heightWhenOpened[3]);
  const isClosed = reanimated(heightWhenOpened[3]).useSharedValue(true);
  height(() => {
    const value = reanimated.progress.value;
    heightWhenOpened.value = -reanimated.height.value;
    height.value = -reanimated.height.value;
    progress.value = value;
    isClosed.value = 0 === value;
  }, []);
  const obj5 = reanimated(heightWhenOpened[3]);
  const fn = function _(height) {
    if (height.height > 0) {
      isClosed.value = false;
      heightWhenOpened.value = height.height;
    }
  };
  fn.__closure = { isClosed, heightWhenOpened };
  fn.__workletHash = 12249381939606;
  fn.__initData = isClosed;
  const fn2 = function h(progress) {
    progress.value = progress.progress;
    height.value = progress.height;
  };
  fn2.__closure = { progress, height };
  fn2.__workletHash = 6522928191084;
  fn2.__initData = closure_5;
  const fn3 = function l(progress) {
    progress.value = progress.progress;
    height.value = progress.height;
  };
  fn3.__closure = { progress, height };
  fn3.__workletHash = 4743203414413;
  fn3.__initData = closure_6;
  const fn4 = function s(height) {
    isClosed.value = 0 === height.height;
    height.value = height.height;
    progress.value = height.progress;
  };
  fn4.__closure = { isClosed, height, progress };
  fn4.__workletHash = 7189399485148;
  fn4.__initData = closure_7;
  reanimated(heightWhenOpened[4]).useKeyboardHandler({ onStart: fn, onMove: fn2, onInteractive: fn3, onEnd: fn4 }, []);
  return { height, progress, heightWhenOpened, isClosed };
};
export const useTranslateAnimation = () => {
  let obj = reanimated(padding[2]);
  reanimated = obj.useKeyboardContext().reanimated;
  padding = reanimated(padding[3]).useSharedValue(0);
  const obj2 = reanimated(padding[3]);
  const translate = reanimated(padding[3]).useSharedValue(0);
  translate(() => {
    padding.value = reanimated.progress.value;
  }, []);
  const obj3 = reanimated(padding[3]);
  const fn = function u(height) {
    if (0 === height.height) {
      padding.value = 0;
    }
  };
  obj = { padding, OS: android, translate };
  fn.__closure = obj;
  fn.__workletHash = 12261942243858;
  fn.__initData = closure_8;
  const fn2 = function n(progress) {
    translate.value = progress.progress;
  };
  fn2.__closure = { OS: android, translate };
  fn2.__workletHash = 4704193858755;
  fn2.__initData = closure_9;
  const fn3 = function o(progress) {
    padding.value = 0;
    translate.value = progress.progress;
  };
  fn3.__closure = { padding, translate };
  fn3.__workletHash = 3250463859117;
  fn3.__initData = closure_10;
  const fn4 = function t(progress) {
    padding.value = progress.progress;
    translate.value = progress.progress;
  };
  fn4.__closure = { padding, OS: android, translate };
  fn4.__workletHash = 14425204766932;
  fn4.__initData = closure_11;
  reanimated(padding[4]).useKeyboardHandler({ onStart: fn, onMove: fn2, onInteractive: fn3, onEnd: fn4 }, []);
  return { translate, padding };
};