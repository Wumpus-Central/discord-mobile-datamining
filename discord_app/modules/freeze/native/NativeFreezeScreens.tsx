// === Module 16220: NativeFreezeScreens ===

// Module 16220 (NativeFreezeScreens)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import enableScreens from "enableScreens" /* 5715 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, tmp, tmp6, tmp7;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let activeIndex;
  let arr4;
  let children;
  let closure_2;
  let closure_3;
  let closure_5;
  let detachInactiveScreens;
  let enabled;
  let first;
  let freezeOnBlur;
  let lazy;
  let preloadIndices;
  let tmp15;
  let tmp17;
  let tmp23;
  let tmp9;
  let unmountOnBlur;
  const obj = activeIndex(576);
  const cResult = obj.c(27);
  const tmp2 = activeIndex;
  ({ children, activeIndex } = arg0);
  ({ detachInactiveScreens, lazy, unmountOnBlur, freezeOnBlur, preloadIndices } = arg0);
  importDefault = tmp5;
  dependencyMap = tmp6;
  _slicedToArray = tmp7;
  react = tmp8;
  if (cResult[0] !== preloadIndices) {
    let items = preloadIndices;
    if (undefined === preloadIndices) {
      items = [];
    }
    let num = 0;
    cResult[0] = preloadIndices;
    let num2 = 1;
    cResult[1] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  StyleSheet = tmp9;
  const tmp10 = closure_7();
  let tmp12 = activeIndex >= 0;
  const tmp11 = _modDef38;
  if (tmp12) {
    const _Array = Array;
    let num3 = 1;
    if (Array.isArray(children)) {
      num3 = children.length;
    }
    tmp12 = activeIndex < num3;
  }
  tmp11(tmp12, "NativeFreezeScreens: invalid activeIndex");
  if (cResult[2] !== activeIndex) {
    const items1 = [activeIndex];
    cResult[2] = activeIndex;
    cResult[3] = items1;
    tmp15 = items1;
  } else {
    tmp15 = cResult[3];
  }
  [first, tmp17] = react.useState(tmp15);
  if (!first.includes(activeIndex)) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(items2, first, 0)] = activeIndex;
    tmp17(items2);
  }
  const screens = tmp10.screens;
  if (cResult[4] !== children) {
    const _Array2 = Array;
    let tmp22 = children;
    if (!Array.isArray(children)) {
      const items3 = [children];
      tmp22 = items3;
    }
    cResult[4] = children;
    cResult[5] = tmp22;
    arr4 = tmp22;
  } else {
    arr4 = cResult[5];
  }
  if (cResult[6] === activeIndex) {
    if (cResult[7] === (undefined === detachInactiveScreens || detachInactiveScreens)) {
      if (cResult[8] === (undefined === freezeOnBlur || freezeOnBlur)) {
        if (cResult[9] === (undefined === lazy || lazy)) {
          if (cResult[10] === first) {
            if (cResult[11] === tmp9) {
              if (cResult[12] === arr4) {
                if (cResult[13] === (undefined !== unmountOnBlur && unmountOnBlur)) {
                  tmp23 = cResult[14];
                }
                if (cResult[23] === (undefined === detachInactiveScreens || detachInactiveScreens)) {
                  if (cResult[24] === tmp10.screens) {
                    let tmp26;
                    if (cResult[25] === tmp23) {
                      tmp26 = cResult[26];
                    }
                    return tmp26;
                  }
                }
                const obj2 = { enabled: undefined === detachInactiveScreens || detachInactiveScreens, hasTwoStates: true, style: screens, nativeID: "native-freeze-screens-container", children: tmp23 };
                const tmp28 = first(tmp2(5715).ScreenContainer, obj2);
                cResult[23] = undefined === detachInactiveScreens || detachInactiveScreens;
                cResult[24] = tmp10.screens;
                cResult[25] = tmp23;
                cResult[26] = tmp28;
                tmp26 = tmp28;
              }
            }
          }
        }
      }
    }
  }
  if (cResult[15] === activeIndex) {
    if (cResult[16] === (undefined === detachInactiveScreens || detachInactiveScreens)) {
      if (cResult[17] === (undefined === freezeOnBlur || freezeOnBlur)) {
        if (cResult[18] === (undefined === lazy || lazy)) {
          if (cResult[19] === first) {
            if (cResult[20] === tmp9) {
              let tmp24;
              if (cResult[21] === (undefined !== unmountOnBlur && unmountOnBlur)) {
                tmp24 = cResult[22];
              }
              const mapped = arr4.map(tmp24);
              cResult[6] = activeIndex;
              cResult[7] = undefined === detachInactiveScreens || detachInactiveScreens;
              cResult[8] = undefined === freezeOnBlur || freezeOnBlur;
              cResult[9] = undefined === lazy || lazy;
              cResult[10] = first;
              cResult[11] = tmp9;
              cResult[12] = arr4;
              cResult[13] = undefined !== unmountOnBlur && unmountOnBlur;
              cResult[14] = mapped;
              tmp23 = mapped;
            }
          }
        }
      }
    }
  }
  class E {
    constructor(arg0, arg1) {
      tmp = activeIndex === arg1;
      tmp2 = unmountOnBlur;
      if (tmp2) {
        if (!tmp) {
          tmp3 = null;
          return null;
        }
      }
      tmp4 = lazy;
      if (tmp4) {
        tmp5 = closure_6;
        if (!closure_6.includes(arg1)) {
          if (!tmp) {
            tmp6 = closure_5;
            if (!closure_5.includes(arg1)) {
              tmp7 = null;
              return null;
            }
          }
        }
      }
      num = 0;
      if (tmp) {
        num = 2;
      }
      tmp8 = jsx;
      items = [, ];
      items[0] = StyleSheet.absoluteFill;
      num2 = -1;
      Screen = closure_0(closure_2[7]).Screen;
      if (tmp) {
        num2 = 0;
      }
      obj = { style: items, activityState: num, enabled: detachInactiveScreens, freezeOnBlur, children: arg0 };
      items[1] = { zIndex: num2 };
      return tmp8(Screen, obj, arg1);
    }
  }
  cResult[15] = activeIndex;
  cResult[16] = undefined === detachInactiveScreens || detachInactiveScreens;
  cResult[17] = undefined === freezeOnBlur || freezeOnBlur;
  cResult[18] = undefined === lazy || lazy;
  cResult[19] = first;
  cResult[20] = tmp9;
  cResult[21] = undefined !== unmountOnBlur && unmountOnBlur;
  cResult[22] = E;
  tmp24 = E;
}) : ((detachInactiveScreens) => {
  let activeIndex;
  let arr4;
  let children;
  ({ children, activeIndex } = detachInactiveScreens);
  let flag = detachInactiveScreens.detachInactiveScreens;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = detachInactiveScreens.lazy;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = detachInactiveScreens.unmountOnBlur;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = detachInactiveScreens.freezeOnBlur;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let preloadIndices = detachInactiveScreens.preloadIndices;
  if (preloadIndices === undefined) {
    preloadIndices = [];
  }
  let first;
  let tmp5 = activeIndex >= 0;
  const tmp2 = closure_7();
  const tmp3 = flag2;
  const tmp4 = flag(flag2[6]);
  if (tmp5) {
    const _Array = Array;
    let num = 1;
    if (Array.isArray(children)) {
      num = children.length;
    }
    tmp5 = activeIndex < num;
  }
  tmp4(tmp5, "NativeFreezeScreens: invalid activeIndex");
  let items = [activeIndex];
  const tmp8 = flag3(flag4.useState(items), 2);
  first = tmp8[0];
  const tmp9 = tmp8[1];
  if (!first.includes(activeIndex)) {
    const items1 = [];
    let num2 = 0;
    items1[HermesBuiltin.arraySpread(items1, first, 0)] = activeIndex;
    tmp9(items1);
  }
  const obj = {
    enabled: flag,
    hasTwoStates: true,
    style: tmp2.screens,
    nativeID: "native-freeze-screens-container",
    children: arr4.map((children, index) => {
      if (flag3) {
        if (activeIndex !== index) {
          return null;
        }
      }
      if (flag2) {
        if (!first.includes(index)) {
          if (activeIndex !== index) {
            if (!preloadIndices.includes(index)) {
              return null;
            }
          }
        }
      }
      let num = 0;
      if (activeIndex === index) {
        num = 2;
      }
      const items = [StyleSheet.absoluteFill, ];
      let num2 = -1;
      const Screen = enableScreens.Screen;
      if (activeIndex === index) {
        num2 = 0;
      }
      items[1] = { zIndex: num2 };
      return <Screen key={index} style={items} activityState={num} enabled={flag} freezeOnBlur={flag4}>{children}</Screen>;
    })
  };
  const ScreenContainer = activeIndex(tmp3[7]).ScreenContainer;
  arr4 = children;
  const tmp13 = first;
  if (!Array.isArray(children)) {
    const items2 = [children];
    arr4 = items2;
  }
  return tmp13(ScreenContainer, obj);
});
let closure_7 = createStyles.createStyles({ screens: { flex: 1, overflow: "hidden" } });
const result = size.fileFinishedImporting("modules/freeze/native/NativeFreezeScreens.tsx");

export const NativeFreezeScreens = tmp2;