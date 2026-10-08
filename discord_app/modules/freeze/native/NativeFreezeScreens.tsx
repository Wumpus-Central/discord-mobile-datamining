// discord_app/modules/freeze/native/NativeFreezeScreens.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import enableScreens from "../../../../_runtime/05305_enableScreens.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({ screens: { flex: 1, overflow: "hidden" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/freeze/native/NativeFreezeScreens.tsx");

export const NativeFreezeScreens = ReactCompilerGating.isReactCompilerEnabled()
  ? function NativeFreezeScreens(arg0) {
      const cResult = activeIndex(576).c(27);
      ({ children, activeIndex } = arg0);
      ({ detachInactiveScreens, lazy, unmountOnBlur, freezeOnBlur, preloadIndices } = arg0);
      importDefault = tmp4;
      dependencyMap = tmp5;
      _slicedToArray = tmp6;
      noop = tmp7;
      if (cResult[0] !== preloadIndices) {
        let items = preloadIndices;
        if (undefined === preloadIndices) {
          items = [];
        }
        cResult[0] = preloadIndices;
        cResult[1] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[1];
      }
      StyleSheet = tmp8;
      const tmp9 = closure_7();
      let tmp11 = activeIndex >= 0;
      const obj = activeIndex(576);
      const tmp = activeIndex;
      if (tmp11) {
        const _Array = Array;
        let num3 = 1;
        if (Array.isArray(children)) {
          num3 = children.length;
        }
        tmp11 = activeIndex < num3;
      }
      _modDef38(tmp11, "NativeFreezeScreens: invalid activeIndex");
      if (cResult[2] !== activeIndex) {
        const items1 = [activeIndex];
        cResult[2] = activeIndex;
        cResult[3] = items1;
        let tmp14 = items1;
      } else {
        tmp14 = cResult[3];
      }
      const tmp15 = _slicedToArray(noop.useState(tmp14), 2);
      const first = tmp15[0];
      if (!first.includes(activeIndex)) {
        const items2 = [];
        items2[HermesBuiltin.arraySpread(first, 0)] = activeIndex;
        tmp15[1](items2);
      }
      if (cResult[4] !== children) {
        const _Array2 = Array;
        let tmp20 = children;
        if (!Array.isArray(children)) {
          const items3 = [children];
          tmp20 = items3;
        }
        cResult[4] = children;
        cResult[5] = tmp20;
        let arr4 = tmp20;
      } else {
        arr4 = cResult[5];
      }
      if (cResult[6] === activeIndex) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp7) {
            if (cResult[9] === tmp5) {
              if (cResult[10] === first) {
                if (cResult[11] === tmp8) {
                  if (cResult[12] === arr4) {
                    if (cResult[13] === tmp6) {
                      if (cResult[23] === tmp4) {
                        if (cResult[24] === tmp9.screens) {
                          if (cResult[25] === tmp21) {
                            let tmp25 = cResult[26];
                          }
                          return tmp25;
                        }
                      }
                      const obj2 = {
                        enabled: tmp4,
                        hasTwoStates: true,
                        style: tmp9.screens,
                        nativeID: "native-freeze-screens-container",
                        children: cResult[14],
                      };
                      const tmp27 = first(tmp(5305).ScreenContainer, obj2);
                      cResult[23] = tmp4;
                      cResult[24] = tmp9.screens;
                      cResult[25] = cResult[14];
                      cResult[26] = tmp27;
                      tmp25 = tmp27;
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (cResult[15] === activeIndex) {
        if (cResult[16] === tmp4) {
          if (cResult[17] === tmp7) {
            if (cResult[18] === tmp5) {
              if (cResult[19] === first) {
                if (cResult[20] === tmp8) {
                  if (cResult[21] === tmp6) {
                    let tmp22 = cResult[22];
                  }
                  const mapped = arr4.map(tmp22);
                  cResult[6] = activeIndex;
                  cResult[7] = tmp4;
                  cResult[8] = tmp7;
                  cResult[9] = tmp5;
                  cResult[10] = first;
                  cResult[11] = tmp8;
                  cResult[12] = arr4;
                  cResult[13] = tmp6;
                  cResult[14] = mapped;
                }
              }
            }
          }
        }
      }
      class E {
        constructor(arg0, arg1) {
          tmp = activeIndex === arg1;
          if (unmountOnBlur) {
            if (!tmp) {
              tmp2 = null;
              return null;
            }
          }
          if (lazy) {
            tmp3 = closure_6;
            if (!closure_6.includes(arg1)) {
              if (!tmp) {
                tmp4 = closure_5;
                if (!closure_5.includes(arg1)) {
                  tmp5 = null;
                  return null;
                }
              }
            }
          }
          num = 0;
          if (tmp) {
            num = 2;
          }
          tmp6 = jsx;
          items = [,];
          items[0] = StyleSheet.absoluteFill;
          num2 = -1;
          if (tmp) {
            num2 = 0;
          }
          obj = { style: items, activityState: num, enabled: detachInactiveScreens, freezeOnBlur, children: arg0 };
          items[1] = { zIndex: num2 };
          return tmp6(closure_0(closure_2[7]).Screen, obj, arg1);
        }
      }
      cResult[15] = activeIndex;
      cResult[16] = undefined === detachInactiveScreens || detachInactiveScreens;
      cResult[17] = undefined === freezeOnBlur || freezeOnBlur;
      cResult[18] = undefined === lazy || lazy;
      cResult[19] = first;
      cResult[20] = tmp8;
      cResult[21] = undefined !== unmountOnBlur && unmountOnBlur;
      cResult[22] = E;
      tmp22 = E;
    }
  : function NativeFreezeScreens(detachInactiveScreens) {
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
      let tmp4 = activeIndex >= 0;
      const tmp = closure_7();
      const tmp2 = flag2;
      if (tmp4) {
        const _Array = Array;
        let num = 1;
        if (Array.isArray(children)) {
          num = children.length;
        }
        tmp4 = activeIndex < num;
      }
      flag(flag2[6])(tmp4, "NativeFreezeScreens: invalid activeIndex");
      let items = [activeIndex];
      const tmp7 = flag3(flag4.useState(items), 2);
      first = tmp7[0];
      if (!first.includes(activeIndex)) {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(first, 0)] = activeIndex;
        tmp7[1](items1);
      }
      const obj = {
        enabled: flag,
        hasTwoStates: true,
        style: tmp.screens,
        nativeID: "native-freeze-screens-container",
        children: null,
      };
      let arr4 = children;
      if (!Array.isArray(children)) {
        const items2 = [children];
        arr4 = items2;
      }
      obj.children = arr4.map((children, index) => {
        if (flag3) {
          if (!tmp) {
            return null;
          }
        }
        if (flag2) {
          if (!first.includes(index)) {
            if (!tmp) {
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
        const items = [StyleSheet.absoluteFill];
        let num2 = -1;
        if (activeIndex === index) {
          num2 = 0;
        }
        items[1] = { zIndex: num2 };
        return jsx(
          enableScreens.Screen,
          { style: items, activityState: num, enabled: flag, freezeOnBlur: flag4, children },
          index,
        );
      });
      return first(activeIndex(tmp2[7]).ScreenContainer, obj);
    };
