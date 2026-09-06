// _runtime/metro/01866__.js
import cancelAnimation from "../01636_cancelAnimation.js";

require = fn;
const dependencyMap = arg6;
fn = function t(height, value, offset) {
  let interpolateResult = height;
  if (0 !== offset) {
    interpolateResult = height;
    if (0 !== value) {
      const items = [0, value];
      const _Math = Math;
      const items1 = [0, Math.max(value - offset, 0)];
      interpolateResult = cancelAnimation.interpolate(height, items, items1);
    }
  }
  return interpolateResult;
};
fn.__closure = { interpolate: fn(1636).interpolate };
fn.__workletHash = 1787304919616;
fn.__initData = {
  code: "function pnpm_helpersTs1(height,targetKeyboardHeight,offset){const{interpolate}=this.__closure;if(offset===0||targetKeyboardHeight===0){return height;}return interpolate(height,[0,targetKeyboardHeight],[0,Math.max(targetKeyboardHeight-offset,0)]);}",
};
const fn2 = function n(value, height, height2) {
  let flag = inverted;
  if (inverted === undefined) {
    flag = false;
  }
  if (flag) {
    let tmp3 = value <= 20;
  } else {
    tmp3 = value + height >= height2 - 20;
  }
  return tmp3;
};
fn2.__closure = { AT_END_THRESHOLD: 20 };
fn2.__workletHash = 3738364082991;
fn2.__initData = {
  code: "function pnpm_helpersTs2(scrollOffset,layoutHeight,contentHeight,inverted=false){const{AT_END_THRESHOLD}=this.__closure;if(inverted){return scrollOffset<=AT_END_THRESHOLD;}return scrollOffset+layoutHeight>=contentHeight-AT_END_THRESHOLD;}",
};
const fn3 = function o(keyboardLiftBehavior, isScrollAtEndResult) {
  if ("always" !== keyboardLiftBehavior) {
    if ("persistent" !== keyboardLiftBehavior) {
      if ("never" === keyboardLiftBehavior) {
        return false;
      } else if ("whenAtEnd" === keyboardLiftBehavior) {
        return isScrollAtEndResult;
      }
    }
  }
  return true;
};
fn3.__closure = {};
fn3.__workletHash = 14230532945867;
fn3.__initData = {
  code: 'function pnpm_helpersTs3(behavior,isAtEnd){switch(behavior){case"always":return true;case"never":return false;case"whenAtEnd":return isAtEnd;case"persistent":return true;}}',
};
const fn4 = function l(value, height, height2, value2, inverted) {
  if (value2 <= 0) {
    return 0;
  } else if (inverted) {
    const _Math3 = Math;
    const _Math4 = Math;
    return Math.max(0, Math.min(1, -value / value2));
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, Math.min(1, (value + height - height2) / value2));
  }
};
fn4.__closure = {};
fn4.__workletHash = 10144434118496;
fn4.__initData = {
  code: "function pnpm_helpersTs4(scrollOffset,layoutHeight,contentHeight,blankSpace,inverted){if(blankSpace<=0){return 0;}if(inverted){return Math.max(0,Math.min(1,-scrollOffset/blankSpace));}const pastContentEnd=scrollOffset+layoutHeight-contentHeight;return Math.max(0,Math.min(1,pastContentEnd/blankSpace));}",
};
const fn5 = function c(value, value2) {
  return Math.max(0, value - value2);
};
fn5.__closure = {};
fn5.__workletHash = 7722221146206;
fn5.__initData = {
  code: "function pnpm_helpersTs5(blankSpace,extraContentPadding){return Math.max(0,blankSpace-extraContentPadding);}",
};
const fn6 = function h(effectiveHeight, minimumPaddingAbsorbed) {
  return Math.max(0, effectiveHeight - minimumPaddingAbsorbed);
};
fn6.__closure = {};
fn6.__workletHash = 8723258054557;
fn6.__initData = {
  code: "function pnpm_helpersTs6(rawEffective,minimumPaddingAbsorbed){return Math.max(0,rawEffective-minimumPaddingAbsorbed);}",
};
const fn7 = function s(value, scrollEffective1, height, height2, bound3) {
  let tmp = scrollEffective1;
  if (undefined !== bound3) {
    tmp = bound3;
  }
  const bound = Math.max(height - height2 + tmp, 0);
  return Math.min(Math.max(value + scrollEffective1, 0), bound);
};
fn7.__closure = {};
fn7.__workletHash = 16148763282691;
fn7.__initData = {
  code: "function pnpm_helpersTs7(offsetBeforeScroll,keyboardHeight,contentHeight,layoutHeight,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(offsetBeforeScroll+keyboardHeight,0),maxScroll);}",
};
const fn8 = function u(arg0, arg1, arg2, arg3, arg4, arg5) {
  let tmp = arg1;
  if (undefined !== arg5) {
    tmp = arg5;
  }
  const _Math = Math;
  const diff = arg2 - arg3;
  if (arg4) {
    const _Math4 = Math;
    const _Math5 = Math;
    return Math.max(Math.min(arg0 - arg1, max(diff, 0)), -tmp);
  } else {
    const _Math2 = Math;
    const _Math3 = Math;
    return Math.min(Math.max(arg1 + arg0, 0), max(diff + tmp, 0));
  }
};
fn8.__closure = {};
fn8.__workletHash = 11573218187512;
fn8.__initData = {
  code: "function pnpm_helpersTs8(relativeScroll,keyboardHeight,contentHeight,layoutHeight,inverted,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;if(inverted){const maxScroll=Math.max(contentHeight-layoutHeight,0);return Math.max(Math.min(relativeScroll-keyboardHeight,maxScroll),-paddingForMax);}const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(keyboardHeight+relativeScroll,0),maxScroll);}",
};

export const getEffectiveHeight = fn;
export const isScrollAtEnd = fn2;
export const shouldShiftContent = fn3;
export const getVisibleMinimumPaddingFraction = fn4;
export const getMinimumPaddingAbsorbed = fn5;
export const getScrollEffective = fn6;
export const clampedScrollTarget = fn7;
export const computeIOSContentOffset = fn8;
