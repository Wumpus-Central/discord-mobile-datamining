// === Module 15686: UserSettingsDesignSystemCoachmark ===

// Module 15686 (UserSettingsDesignSystemCoachmark)
import react2 from "react" /* 576 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import LayerScope2 from "LayerScope" /* 6658 */;
import _modDef15687 from "module_15687" /* 15687 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { paddingTop: 240, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1, padding: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let tmp7;
  let tmp9;
  let visible;
  let obj = visible(576);
  const cResult = obj.c(58);
  closure_10();
  [visible, importDefault] = react.useState(true);
  [tmp7, r10024] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp9, r10029] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj3 = visible(15684);
  [r10035, r10036] = obj3.useCanRotate();
  _slicedToArray(obj3.useCanRotate(), 2);
  const first1 = _slicedToArray(react.useState(false), 2)[0];
  _slicedToArray(react.useState(false), 2);
  const first2 = _slicedToArray(react.useState("primary"), 2)[0];
  _slicedToArray(react.useState("primary"), 2);
  const first3 = _slicedToArray(react.useState("none"), 2)[0];
  _slicedToArray(react.useState("none"), 2);
  const first4 = _slicedToArray(react.useState("16/9"), 2)[0];
  _slicedToArray(react.useState("16/9"), 2);
  react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = ["21/9", "16/9", "6/4", "2/1", "1/1"];
    cResult[0] = items;
    let first5 = items;
  } else {
    first5 = cResult[0];
  }
  let str2 = "top";
  if (tmp9) {
    str2 = "bottom";
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
    cResult[1] = Y;
  } else {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
    tmp23[0] = _modDef15687;
    cResult[2] = tmp23;
  } else {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if (cResult[3] !== first4) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
    tmp26[1] = tmp23;
    tmp26[2] = first4;
    cResult[3] = first4;
    cResult[4] = tmp26;
  } else {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if (first1) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
    cResult[5] = tmp29;
  } else {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if ("none" !== first3) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if (cResult[6] === first2) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  const obj4 = { title: "Title goes here, and it can get really long so we should handle that", description: "Body copy goes here", position: str2, visible, onDismiss: Y, graphic: tmp26, experimental_withBlurBackground: tmp7, buttonLabel: undefined, onButtonPress: tmp29, buttonVariant: first2, gradientColor: undefined };
  cResult[6] = first2;
  cResult[7] = visible;
  cResult[8] = str2;
  cResult[9] = tmp26;
  cResult[10] = undefined;
  cResult[11] = undefined;
  cResult[12] = tmp7;
  cResult[13] = obj4;
}) : (() => {
  let TableRadioGroup;
  let TableRadioGroup2;
  let TableRadioGroup3;
  let closure_1;
  let first2;
  let first3;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj13;
  let obj9;
  let tmp13;
  let tmp14;
  let tmp29Result;
  let tmp = closure_10();
  let obj = first3;
  const tmp2 = first2(first3.useState(true), 2);
  const visible = tmp2[0];
  importDefault = tmp2[1];
  const tmp4 = first2(first3.useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = tmp4[1];
  const tmp7 = first2(first3.useState(false), 2);
  first2 = tmp7[0];
  const tmp9 = tmp7[1];
  let obj2 = visible(first1[7]);
  [tmp13, tmp14] = first2(obj2.useCanRotate(), 2);
  first2(obj2.useCanRotate(), 2);
  const tmp15 = first2(first3.useState(false), 2);
  first3 = tmp15[0];
  const tmp17 = tmp15[1];
  const tmp18 = first2(first3.useState("primary"), 2);
  let str = tmp18[0];
  const tmp19 = tmp18[1];
  const tmp20 = first2(first3.useState("none"), 2);
  const first4 = tmp20[0];
  const tmp22 = tmp20[1];
  const tmp23 = first2(first3.useState("16/9"), 2);
  const first5 = tmp23[0];
  let str2 = "Show tooltip";
  const tmp25 = tmp23[1];
  if (visible) {
    str2 = "Hide tooltip";
  }
  const ref = obj.useRef(null);
  const items = [first3, first2, visible, first1, str, first4, first5];
  const memo = obj.useMemo(() => {
    let obj2;
    let str2;
    let tmp;
    str = "top";
    if (first2) {
      str = "bottom";
    }
    const obj = {
      title: "Title goes here, and it can get really long so we should handle that",
      description: "Body copy goes here",
      position: str,
      visible,
      onDismiss() {
        return closure_1_1(false);
      },
      graphic: obj2,
      experimental_withBlurBackground: first1,
      buttonLabel: str2,
      onButtonPress() {
        return closure_1_1(false);
      },
      buttonVariant: str,
      gradientColor: tmp
    };
    str2 = undefined;
    obj2 = { type: "image", src: { uri: _modDef15687 }, aspectRatio: first5 };
    ({ uri: _modDef15687 });
    if (first3) {
      str2 = "Button";
    }
    tmp = undefined;
    if ("none" !== first4) {
      tmp = first4;
    }
    return obj;
  }, items);
  const tmp10Result = visible(first1[9]);
  const coachmark = tmp10Result.useCoachmark(ref, memo);
  const obj3 = {
    ref,
    onPress() {
      closure_1(!first);
    },
    variant: "primary",
    text: str2,
    size: "md"
  };
  const tmp30 = first5(visible(first1[10]).Button, obj3);
  if (first1) {
    const obj4 = { style: items1, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: tmp30 };
    items1 = [{ height: 300 }, tmp.container];
    tmp29Result = tmp29(require("LinearGradient"), obj4);
  } else {
    const obj5 = { style: items2, children: tmp30 };
    items2 = [{ height: 360 }, tmp.container];
    tmp29Result = tmp29(str, obj5);
  }
  const items3 = [tmp29Result, , , , , , , ];
  const obj6 = { hasIcons: false, children: items4 };
  const TableRowGroup = tmp10(tmp11[13]).TableRowGroup;
  items4 = [first5(visible(first1[12]).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp9 }), first5(visible(first1[12]).TableSwitchRow, { label: "Enable Button", value: first3, onValueChange: tmp17 })];
  items3[1] = closure_8(TableRowGroup, obj6);
  const obj7 = { style: { marginVertical: 16 }, children: first5(TableRadioGroup, obj9) };
  TableRadioGroup = tmp10(tmp11[15]).TableRadioGroup;
  if (str == null) {
    str = "secondary";
  }
  const obj8 = { children: items3 };
  obj9 = {
    title: "Button Variant",
    defaultValue: str,
    onChange: tmp19,
    hasIcons: false,
    children: items5.map((value) => {
      const obj = { value, label: value };
      return first5(first(first1[14]).TableRadioRow, obj, value);
    })
  };
  items5 = ["primary", "secondary", "experimental_premium-primary"];
  items3[2] = first5(str, obj7);
  const obj10 = { style: { marginVertical: 16 }, children: first5(TableRadioGroup2, obj11) };
  obj11 = {
    title: "Gradient Color",
    defaultValue: first4,
    onChange: tmp22,
    hasIcons: false,
    children: items6.map((value) => {
      const label = value.label;
      return first5(first(first1[14]).TableRadioRow, { value: value.value, label }, label);
    })
  };
  items6 = [{ label: "None", value: "none" }, { label: "Purple", value: "purple" }, { label: "Blue", value: "blue" }, { label: "Green", value: "green" }, { label: "Pink", value: "pink" }, { label: "Nitro Pink", value: "nitro-pink" }, { label: "Nitro Green", value: "nitro-green" }];
  TableRadioGroup2 = tmp10(tmp11[15]).TableRadioGroup;
  items3[3] = first5(str, obj10);
  const obj12 = { style: { marginVertical: 16 }, children: first5(TableRadioGroup3, obj13) };
  obj13 = {
    title: "Aspect Ratio",
    defaultValue: first5,
    onChange: tmp25,
    hasIcons: false,
    children: items7.map((value) => {
      const obj = { value, label: value };
      return first5(first(first1[14]).TableRadioRow, obj, value);
    })
  };
  items7 = ["21/9", "16/9", "6/4", "2/1", "1/1"];
  TableRadioGroup3 = tmp10(tmp11[15]).TableRadioGroup;
  items3[4] = first5(str, obj12);
  items3[5] = first5(visible(first1[12]).TableSwitchRow, { label: "Enable Blur Background", value: first1, onValueChange: tmp6 });
  items3[6] = first5(visible(first1[12]).TableSwitchRow, { label: "Unlock Orientation", value: tmp13, onValueChange: tmp14 });
  items3[7] = first5(visible(first1[7]).TooltipNote, {});
  return closure_8(closure_9, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let LayerScope;
  let first;
  let obj3;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: metroImportDefault(LayerScope, obj3) };
    obj3 = { children: metroImportDefault(closure_11, {}) };
    LayerScope = LayerScope2.LayerScope;
    const tmp9 = metroImportDefault(metroRequire, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.flex) {
    const obj4 = { style: tmp4.flex, bottom: true, children: first };
    const tmp12 = metroImportDefault(common_SafeAreaView.SafeAreaPaddingView, obj4);
    cResult[1] = tmp4.flex;
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  return tmp10;
}) : (() => {
  let LayerScope;
  let obj2;
  let obj3;
  const obj = { style: closure_10().flex, bottom: true, children: metroImportDefault(metroRequire, obj2) };
  obj2 = { children: metroImportDefault(LayerScope, obj3) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj3 = { children: metroImportDefault(closure_11, {}) };
  LayerScope = LayerScope2.LayerScope;
  return metroImportDefault(SafeAreaPaddingView, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemCoachmark.tsx");

export default tmp4;