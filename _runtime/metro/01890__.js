// _runtime/metro/01890__.js
const items = [
  {
    code: "(function isAnimated_Pnpm_utilsTs1(prop){const isAnimated_Pnpm_utilsTs1=this._recur;if(Array.isArray(prop)){return prop.some(isAnimated_Pnpm_utilsTs1);}else if(typeof prop==='object'&&prop!==null){if(prop.onFrame!==undefined){return true;}else{return Object.values(prop).some(isAnimated_Pnpm_utilsTs1);}}return false;})",
  },
];
[tmp2] = items;
function isAnimated(onFrame) {
  if (Array.isArray(onFrame)) {
    let someResult = onFrame.some(isAnimated);
  } else {
    someResult = typeof onFrame === "object";
    if (typeof onFrame === "object") {
      someResult = null !== onFrame;
    }
    if (someResult) {
      let someResult1 = undefined !== onFrame.onFrame;
      if (!someResult1) {
        const _Object = Object;
        const values = Object.values(onFrame);
        someResult1 = values.some(isAnimated);
      }
      someResult = someResult1;
    }
  }
  return someResult;
}
isAnimated.__workletHash = 13904973389953;
isAnimated.__initData = tmp2;
const items1 = [
  {
    code: "(function shallowEqual_Pnpm_utilsTs2(a,b){const aKeys=Object.keys(a);const bKeys=Object.keys(b);if(aKeys.length!==bKeys.length){return false;}for(let i=0;i<aKeys.length;i++){if(a[aKeys[i]]!==b[aKeys[i]]){return false;}}return true;})",
  },
];
[tmp3] = items1;
function shallowEqual(arg0, arg1) {
  const keys = Object.keys(arg0);
  if (keys.length !== Object.keys(arg1).length) {
    return false;
  } else {
    let num = 0;
    if (0 < keys.length) {
      while (arg0[keys[num]] === arg1[keys[num]]) {
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
shallowEqual.__workletHash = 7180778618090;
shallowEqual.__initData = tmp3;
const items2 = [
  {
    code: "(function validateAnimatedStyles_Pnpm_utilsTs3(styles){if(typeof styles!=='object'){throw new Error(\"[Reanimated] `useAnimatedStyle` has to return an object, found \"+typeof styles+\" instead.\");}else if(Array.isArray(styles)){throw new Error('[Reanimated] `useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.');}})",
  },
];
[tmp4] = items2;
function validateAnimatedStyles(obj) {
  if (typeof obj !== "object") {
    const _Error2 = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error(
      "[Reanimated] `useAnimatedStyle` has to return an object, found " + typeof obj + " instead.",
    );
    throw error;
  } else {
    const _Array = Array;
    if (Array.isArray(obj)) {
      const _Error = Error;
      const error1 = new Error(
        "[Reanimated] `useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.",
      );
      throw error1;
    }
  }
}
validateAnimatedStyles.__workletHash = 1141515875736;
validateAnimatedStyles.__initData = tmp4;

export { isAnimated };
export { shallowEqual };
export { validateAnimatedStyles };
