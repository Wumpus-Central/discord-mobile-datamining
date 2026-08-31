// _runtime/01883_t.js
import cancelAnimation from "01653_cancelAnimation.js";

require = arg1;
const dependencyMap = arg6;
const fn = function t(arg0, arg1, arg2) {
  let interpolateResult = arg0;
  if (0 !== arg2) {
    interpolateResult = arg0;
    if (0 !== arg1) {
      const items = [0, arg1];
      const _Math = Math;
      const items1 = [0, Math.max(arg1 - arg2, 0)];
      interpolateResult = cancelAnimation.interpolate(arg0, items, items1);
      const obj = cancelAnimation;
    }
  }
  return interpolateResult;
};
fn.__closure = { interpolate: require("cancelAnimation").interpolate };
fn.__workletHash = 1787304919616;
fn.__initData = { code: "function pnpm_helpersTs1(height,targetKeyboardHeight,offset){const{interpolate}=this.__closure;if(offset===0||targetKeyboardHeight===0){return height;}return interpolate(height,[0,targetKeyboardHeight],[0,Math.max(targetKeyboardHeight-offset,0)]);}" };
const fn2 = function n(arg0, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  if (flag) {
    let tmp3 = arg0 <= 20;
  } else {
    tmp3 = arg0 + arg1 >= arg2 - 20;
  }
  return tmp3;
};
fn2.__closure = { AT_END_THRESHOLD: 20 };
fn2.__workletHash = 3738364082991;
fn2.__initData = { code: "function pnpm_helpersTs2(scrollOffset,layoutHeight,contentHeight,inverted=false){const{AT_END_THRESHOLD}=this.__closure;if(inverted){return scrollOffset<=AT_END_THRESHOLD;}return scrollOffset+layoutHeight>=contentHeight-AT_END_THRESHOLD;}" };
const fn3 = function o(arg0, arg1) {
  if ("always" !== arg0) {
    if ("persistent" !== arg0) {
      if ("never" === arg0) {
        return false;
      } else if ("whenAtEnd" === arg0) {
        return arg1;
      }
    }
  }
  return true;
};
fn3.__closure = {};
fn3.__workletHash = 14230532945867;
fn3.__initData = { code: "function pnpm_helpersTs3(behavior,isAtEnd){switch(behavior){case\"always\":return true;case\"never\":return false;case\"whenAtEnd\":return isAtEnd;case\"persistent\":return true;}}" };
const fn4 = function l(arg0, arg1, arg2, arg3, arg4) {
  if (arg3 <= 0) {
    return 0;
  } else if (arg4) {
    const _Math3 = Math;
    const _Math4 = Math;
    return Math.max(0, Math.min(1, -arg0 / arg3));
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, Math.min(1, (arg0 + arg1 - arg2) / arg3));
  }
};
fn4.__closure = {};
fn4.__workletHash = 10144434118496;
fn4.__initData = { code: "function pnpm_helpersTs4(scrollOffset,layoutHeight,contentHeight,blankSpace,inverted){if(blankSpace<=0){return 0;}if(inverted){return Math.max(0,Math.min(1,-scrollOffset/blankSpace));}const pastContentEnd=scrollOffset+layoutHeight-contentHeight;return Math.max(0,Math.min(1,pastContentEnd/blankSpace));}" };
const fn5 = function c(arg0, arg1) {
  return Math.max(0, arg0 - arg1);
};
fn5.__closure = {};
fn5.__workletHash = 7722221146206;
fn5.__initData = { code: "function pnpm_helpersTs5(blankSpace,extraContentPadding){return Math.max(0,blankSpace-extraContentPadding);}" };
const fn6 = function h(arg0, arg1) {
  return Math.max(0, arg0 - arg1);
};
fn6.__closure = {};
fn6.__workletHash = 8723258054557;
fn6.__initData = { code: "function pnpm_helpersTs6(rawEffective,minimumPaddingAbsorbed){return Math.max(0,rawEffective-minimumPaddingAbsorbed);}" };
const fn7 = function s(arg0, arg1, arg2, arg3, arg4) {
  let tmp = arg1;
  if (undefined !== arg4) {
    tmp = arg4;
  }
  const bound = Math.max(arg2 - arg3 + tmp, 0);
  return Math.min(Math.max(arg0 + arg1, 0), bound);
};
fn7.__closure = {};
fn7.__workletHash = 16148763282691;
fn7.__initData = { code: "function pnpm_helpersTs7(offsetBeforeScroll,keyboardHeight,contentHeight,layoutHeight,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(offsetBeforeScroll+keyboardHeight,0),maxScroll);}" };
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
fn8.__initData = { code: "function pnpm_helpersTs8(relativeScroll,keyboardHeight,contentHeight,layoutHeight,inverted,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;if(inverted){const maxScroll=Math.max(contentHeight-layoutHeight,0);return Math.max(Math.min(relativeScroll-keyboardHeight,maxScroll),-paddingForMax);}const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(keyboardHeight+relativeScroll,0),maxScroll);}" };
arg5.getEffectiveHeight = fn;
arg5.isScrollAtEnd = fn2;
arg5.shouldShiftContent = fn3;
arg5.getVisibleMinimumPaddingFraction = fn4;
arg5.getMinimumPaddingAbsorbed = fn5;
arg5.getScrollEffective = fn6;
arg5.clampedScrollTarget = fn7;
arg5.computeIOSContentOffset = fn8;