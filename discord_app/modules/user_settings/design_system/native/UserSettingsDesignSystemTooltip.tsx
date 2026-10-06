// === Module 15684: UserSettingsDesignSystemTooltip ===

// Module 15684 (UserSettingsDesignSystemTooltip)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import LayerScope2 from "LayerScope" /* 6658 */;
import TableSwitchRow from "TableSwitchRow" /* 6705 */;
import DeviceOrientation from "DeviceOrientation" /* 8018 */;
import useTooltip from "useTooltip" /* 9896 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let obj = first(576);
  const cResult = obj.c(6);
  [first, tmp4] = react.useState(false);
  if (cResult[0] !== first) {
    const fn = function n() {
      const obj = DeviceOrientation;
      if (first) {
        obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
      } else {
        const result = obj.lockOrientationForiOS();
      }
    };
    cResult[0] = first;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const effect = react.useEffect(tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      return () => {
        const obj = first(closure_1_1[7]);
        return obj.lockOrientationForiOS();
      };
    };
    const items = [];
    cResult[2] = fn2;
    cResult[3] = items;
    tmp8 = items;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect1 = react.useEffect(tmp7, tmp8);
  if (cResult[4] !== first) {
    const items1 = [first, tmp4];
    cResult[4] = first;
    cResult[5] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : (() => {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(false);
  const effect = react.useEffect(() => {
    const obj = DeviceOrientation;
    if (first) {
      obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    } else {
      const result = obj.lockOrientationForiOS();
    }
  });
  const effect1 = react.useEffect(() => () => {
    const obj = first(closure_1_1[7]);
    return obj.lockOrientationForiOS();
  }, []);
  const items = [first, tmp3];
  return items;
});
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let first1;
  let first2;
  let items;
  let tmp12;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(22);
  const tmp4 = closure_8();
  [first, dependencyMap] = react.useState(false);
  [tmp8, tmp9] = closure_9();
  _slicedToArray(closure_9(), 2);
  [first1, tmp12] = react.useState(false);
  let str = "Show tooltip";
  if (first) {
    str = "Hide tooltip";
  }
  const ref = react.useRef(null);
  let str2 = "top";
  if (first1) {
    str2 = "bottom";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return closure_1(false);
    };
    cResult[0] = fn;
    first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] === first) {
    let tmp15;
    if (cResult[2] === str2) {
      tmp15 = cResult[3];
    }
    const tmpResult = useTooltip;
    const tooltip = tmpResult.useTooltip(ref, tmp15);
    if (cResult[4] !== first) {
      class N {
        constructor() {
          closure_1(!first);
        }
      }
      cResult[4] = first;
      cResult[5] = N;
    } else {
      class N {
        constructor() {
          closure_1(!first);
        }
      }
    }
    if (cResult[6] === N) {
      class N {
        constructor() {
          closure_1(!first);
        }
      }
      if (cResult[9] === tmp4.container) {
        class N {
          constructor() {
            closure_1(!first);
          }
        }
        if (cResult[12] === tmp8) {
          let tmp30;
          class N {
            constructor() {
              closure_1(!first);
            }
          }
          if (cResult[15] !== first1) {
            class N {
              constructor() {
                closure_1(!first);
              }
            }
            const obj3 = { label: "Enable Bottom Position", value: first1, onValueChange: tmp12 };
            cResult[15] = first1;
            cResult[16] = hasOwnProperty(TableSwitchRow.TableSwitchRow, obj3);
            const tmp29 = hasOwnProperty(TableSwitchRow.TableSwitchRow, obj3);
          } else {
            class N {
              constructor() {
                closure_1(!first);
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class N {
              constructor() {
                closure_1(!first);
              }
            }
            const tmp32 = hasOwnProperty(closure_11, {});
            cResult[17] = tmp32;
            tmp30 = tmp32;
          } else {
            class N {
              constructor() {
                closure_1(!first);
              }
            }
          }
          if (cResult[18] === tmp21) {
            class N {
              constructor() {
                closure_1(!first);
              }
            }
          }
          const obj4 = { children: items };
          items = [tmp21, tmp25, tmp28, tmp30];
          cResult[18] = tmp21;
          cResult[19] = tmp25;
          cResult[20] = tmp28;
          cResult[21] = metroImportDefault(metroRequire, obj4);
          const tmp36 = metroImportDefault(metroRequire, obj4);
        }
        const obj5 = { label: "Unlock Orientation", value: tmp8, onValueChange: tmp9 };
        cResult[12] = tmp8;
        cResult[13] = tmp9;
        cResult[14] = hasOwnProperty(TableSwitchRow.TableSwitchRow, obj5);
        const tmp27 = hasOwnProperty(TableSwitchRow.TableSwitchRow, obj5);
      }
      const obj6 = { style: tmp4.container, children: tmp18 };
      cResult[9] = tmp4.container;
      cResult[10] = tmp18;
      cResult[11] = hasOwnProperty(View, obj6);
      const tmp24 = hasOwnProperty(View, obj6);
    }
    const obj7 = { ref, onPress: N, variant: "primary", text: str, size: "md" };
    cResult[6] = N;
    cResult[7] = str;
    cResult[8] = hasOwnProperty(components_Button_Button.Button, obj7);
    const tmp20 = hasOwnProperty(components_Button_Button.Button, obj7);
  }
  const obj8 = { label: "NEW", position: str2, visible: first, onPress: first2 };
  cResult[1] = first;
  cResult[2] = str2;
  cResult[3] = obj8;
  tmp15 = obj8;
}) : (() => {
  let closure_1;
  let first;
  let first1;
  let items1;
  let obj5;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = closure_8();
  [first, closure_1] = react.useState(false);
  [tmp5, tmp6] = closure_9();
  _slicedToArray(closure_9(), 2);
  [first1, tmp9] = react.useState(false);
  let str = "Show tooltip";
  if (first) {
    str = "Hide tooltip";
  }
  const ref = react.useRef(null);
  const items = [first1, first];
  const memo = react.useMemo(() => {
    let str = "top";
    if (first1) {
      str = "bottom";
    }
    return {
      label: "NEW",
      position: str,
      visible,
      onPress() {
        return closure_1_1(false);
      }
    };
  }, items);
  const obj2 = useTooltip;
  const tooltip = obj2.useTooltip(ref, memo);
  const obj3 = { children: items1 };
  const obj4 = { style: tmp.container, children: hasOwnProperty(components_Button_Button.Button, obj5) };
  obj5 = {
    ref,
    onPress() {
      closure_1(!first);
    },
    variant: "primary",
    text: str,
    size: "md"
  };
  items1 = [hasOwnProperty(View, obj4), hasOwnProperty(TableSwitchRow.TableSwitchRow, { label: "Unlock Orientation", value: tmp5, onValueChange: tmp6 }), hasOwnProperty(TableSwitchRow.TableSwitchRow, { label: "Enable Bottom Position", value: first1, onValueChange: tmp9 }), hasOwnProperty(closure_11, {})];
  return metroImportDefault(metroRequire, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { padding: 16, paddingTop: 16 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/normal", style: first, children: items };
    const Text = Text_Text.Text;
    items = ["Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing", hasOwnProperty(Text_Text.Text, { variant: "text-sm/bold", children: " <LayerScope/>" }), " on the surface you expect to see the tooltip."];
    const tmp8 = metroImportDefault(Text, obj3);
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  let items;
  const obj = { variant: "text-sm/normal", style: { padding: 16, paddingTop: 16 }, children: items };
  const Text = Text_Text.Text;
  items = ["Note: If your tooltip is not displaying or it is not in the right position/zIndex, consider adding or moving an existing", hasOwnProperty(Text_Text.Text, { variant: "text-sm/bold", children: " <LayerScope/>" }), " on the surface you expect to see the tooltip."];
  return metroImportDefault(Text, obj);
});
let closure_11 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: hasOwnProperty(closure_10, {}) };
    const LayerScope = LayerScope2.LayerScope;
    const tmp8 = hasOwnProperty(LayerScope, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.flex) {
    const obj3 = { style: tmp4.flex, bottom: true, children: first };
    const tmp11 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj3);
    cResult[1] = tmp4.flex;
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  let LayerScope;
  let obj2;
  const obj = { style: closure_8().flex, bottom: true, children: hasOwnProperty(LayerScope, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { children: hasOwnProperty(closure_10, {}) };
  LayerScope = LayerScope2.LayerScope;
  return hasOwnProperty(SafeAreaPaddingView, obj);
});
let result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTooltip.tsx");

export default tmp5;
export const useCanRotate = tmp3;
export const TooltipNote = tmp4;