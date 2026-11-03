// === Module 2009: helpers ===

// Module 2009 (helpers)
import _mod1652 from "module_1652" /* 1652 */;

let items = [{ code: "(function pnpm_helpersTs1(height,targetKeyboardHeight,offset){let[interpolate]=this.__closure;if(offset===0||targetKeyboardHeight===0){return height;}return interpolate(height,[0,targetKeyboardHeight],[0,Math.max(targetKeyboardHeight-offset,0)]);})" }, _mod1652.interpolate];
let c0;
[tmp2, tmp3] = items;
function pnpm_helpersTs1(arg0, arg1, arg2) {
  let tmp = arg0;
  if (0 !== arg2) {
    tmp = arg0;
    if (0 !== arg1) {
      items = [0, arg1];
      const _Math = Math;
      const items1 = [0, Math.max(arg1 - arg2, 0)];
      tmp = _undefined(arg0, items, items1);
    }
  }
  return tmp;
}
let items1 = [tmp3];
pnpm_helpersTs1.__closure = items1;
pnpm_helpersTs1.__workletHash = 15271359678457;
pnpm_helpersTs1.__initData = tmp2;
const items2 = [{ code: "(function pnpm_helpersTs2(scrollOffset,layoutHeight,contentHeight,inverted=false){let[AT_END_THRESHOLD]=this.__closure;if(inverted){return scrollOffset<=AT_END_THRESHOLD;}return scrollOffset+layoutHeight>=contentHeight-AT_END_THRESHOLD;})" }, 20];
let closure_129_0;
[tmp4, tmp5] = items2;
function pnpm_helpersTs2(arg0, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  if (flag) {
    let tmp4 = arg0 <= c0;
  } else {
    tmp4 = arg0 + arg1 >= arg2 - c0;
  }
  return tmp4;
}
const items3 = [tmp5];
pnpm_helpersTs2.__closure = items3;
pnpm_helpersTs2.__workletHash = 1687350692150;
pnpm_helpersTs2.__initData = tmp4;
const items4 = [{ code: "(function pnpm_helpersTs3(behavior,isAtEnd){switch(behavior){case\"always\":return true;case\"never\":return false;case\"whenAtEnd\":return isAtEnd;case\"persistent\":return true;}})" }];
[tmp6] = items4;
function pnpm_helpersTs3(arg0, arg1) {
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
}
pnpm_helpersTs3.__workletHash = 16308928161130;
pnpm_helpersTs3.__initData = tmp6;
const items5 = [{ code: "(function pnpm_helpersTs4(scrollOffset,layoutHeight,contentHeight,blankSpace,inverted){if(blankSpace<=0){return 0;}if(inverted){return Math.max(0,Math.min(1,-scrollOffset/blankSpace));}const pastContentEnd=scrollOffset+layoutHeight-contentHeight;return Math.max(0,Math.min(1,pastContentEnd/blankSpace));})" }];
[tmp7] = items5;
function pnpm_helpersTs4(arg0, arg1, arg2, arg3, arg4) {
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
}
pnpm_helpersTs4.__workletHash = 8493749147649;
pnpm_helpersTs4.__initData = tmp7;
const items6 = [{ code: "(function pnpm_helpersTs5(blankSpace,extraContentPadding){return Math.max(0,blankSpace-extraContentPadding);})" }];
[tmp8] = items6;
function pnpm_helpersTs5(arg0, arg1) {
  return Math.max(0, arg0 - arg1);
}
pnpm_helpersTs5.__workletHash = 13737989313055;
pnpm_helpersTs5.__initData = tmp8;
const items7 = [{ code: "(function pnpm_helpersTs6(rawEffective,minimumPaddingAbsorbed){return Math.max(0,rawEffective-minimumPaddingAbsorbed);})" }];
[tmp9] = items7;
function pnpm_helpersTs6(arg0, arg1) {
  return Math.max(0, arg0 - arg1);
}
pnpm_helpersTs6.__workletHash = 6806321256508;
pnpm_helpersTs6.__initData = tmp9;
const items8 = [{ code: "(function pnpm_helpersTs7(offsetBeforeScroll,keyboardHeight,contentHeight,layoutHeight,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(offsetBeforeScroll+keyboardHeight,0),maxScroll);})" }];
[tmp10] = items8;
function pnpm_helpersTs7(arg0, arg1, arg2, arg3, arg4) {
  let tmp = arg1;
  if (undefined !== arg4) {
    tmp = arg4;
  }
  const bound = Math.max(arg2 - arg3 + tmp, 0);
  return Math.min(Math.max(arg0 + arg1, 0), bound);
}
pnpm_helpersTs7.__workletHash = 6282298606178;
pnpm_helpersTs7.__initData = tmp10;
const items9 = [{ code: "(function pnpm_helpersTs8(relativeScroll,keyboardHeight,contentHeight,layoutHeight,inverted,totalPaddingForMaxScroll){const paddingForMax=totalPaddingForMaxScroll!==undefined?totalPaddingForMaxScroll:keyboardHeight;if(inverted){const maxScroll=Math.max(contentHeight-layoutHeight,0);return Math.max(Math.min(relativeScroll-keyboardHeight,maxScroll),-paddingForMax);}const maxScroll=Math.max(contentHeight-layoutHeight+paddingForMax,0);return Math.min(Math.max(keyboardHeight+relativeScroll,0),maxScroll);})" }];
[tmp11] = items9;
function pnpm_helpersTs8(arg0, arg1, arg2, arg3, arg4, arg5) {
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
}
pnpm_helpersTs8.__workletHash = 8383118814777;
pnpm_helpersTs8.__initData = tmp11;

export const getEffectiveHeight = pnpm_helpersTs1;
export const isScrollAtEnd = pnpm_helpersTs2;
export const shouldShiftContent = pnpm_helpersTs3;
export const getVisibleMinimumPaddingFraction = pnpm_helpersTs4;
export const getMinimumPaddingAbsorbed = pnpm_helpersTs5;
export const getScrollEffective = pnpm_helpersTs6;
export const clampedScrollTarget = pnpm_helpersTs7;
export const computeIOSContentOffset = pnpm_helpersTs8;