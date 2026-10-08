// === Module 15966: UserSettingsDesignSystemCoachmark ===

// Module 15966 (UserSettingsDesignSystemCoachmark)
import c from "c" /* 576 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6803 */;
import LayerScope from "LayerScope" /* 6835 */;
import _modDef15967 from "module_15967" /* 15967 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles({ container: { paddingTop: 240, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1, padding: 16 } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function Content() {
  const cResult = visible(576).c(58);
  closure_10();
  [visible, importDefault] = noop.useState(true);
  const obj = visible(576);
  [tmp7, r10024] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp9, r10029] = noop.useState(false);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const obj3 = visible(15964);
  [r10035, r10036] = visible(15964).useCanRotate();
  const tmp10 = _slicedToArray(visible(15964).useCanRotate(), 2);
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  const first1 = _slicedToArray(noop.useState("primary"), 2)[0];
  const tmp12 = _slicedToArray(noop.useState("primary"), 2);
  const tmp14 = _slicedToArray(noop.useState("none"), 2);
  const first2 = _slicedToArray(noop.useState("16/9"), 2)[0];
  noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = ["21/9", "16/9", "6/4", "2/1", "1/1"];
    cResult[0] = items;
    let first3 = items;
  } else {
    first3 = cResult[0];
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
    tmp21[0] = _modDef15967;
    cResult[2] = tmp21;
  } else {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if (cResult[3] !== first2) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
    tmp24[1] = tmp21;
    tmp24[2] = first2;
    cResult[3] = first2;
    cResult[4] = tmp24;
  } else {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if (tmp11[0]) {
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
    cResult[5] = tmp27;
  } else {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if ("none" !== tmp14[0]) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  if (cResult[6] === first1) {
    class Y {
      constructor() {
        return closure_1(false);
      }
    }
  }
  cResult[6] = first1;
  cResult[7] = visible;
  cResult[8] = str2;
  cResult[9] = tmp24;
  cResult[10] = undefined;
  cResult[11] = undefined;
  cResult[12] = tmp7;
  cResult[13] = { title: "Title goes here, and it can get really long so we should handle that", description: "Body copy goes here", position: str2, visible, onDismiss: Y, graphic: tmp24, experimental_withBlurBackground: tmp7, buttonLabel: undefined, onButtonPress: tmp27, buttonVariant: first1, gradientColor: undefined };
  const obj4 = { title: "Title goes here, and it can get really long so we should handle that", description: "Body copy goes here", position: str2, visible, onDismiss: Y, graphic: tmp24, experimental_withBlurBackground: tmp7, buttonLabel: undefined, onButtonPress: tmp27, buttonVariant: first1, gradientColor: undefined };
  const tmp15 = _slicedToArray(noop.useState("16/9"), 2);
}) : (function Content() {
  let tmp = closure_10();
  const tmp2 = first2(first3.useState(true), 2);
  const visible = tmp2[0];
  importDefault = tmp2[1];
  const tmp4 = first2(first3.useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = first2(first3.useState(false), 2);
  first2 = tmp6[0];
  let obj2 = visible(first1[7]);
  [tmp11, tmp12] = first2(visible(first1[7]).useCanRotate(), 2);
  const tmp13 = first2(first3.useState(false), 2);
  first3 = tmp13[0];
  const tmp15 = first2(first3.useState("primary"), 2);
  let str = tmp15[0];
  const tmp16 = first2(first3.useState("none"), 2);
  const first4 = tmp16[0];
  const tmp18 = first2(first3.useState("16/9"), 2);
  const first5 = tmp18[0];
  let str2 = "Show tooltip";
  if (visible) {
    str2 = "Hide tooltip";
  }
  const ref = first3.useRef(null);
  const items = [first3, first2, visible, first1, str, first4, first5];
  const memo = obj.useMemo(() => {
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
      graphic: null,
      experimental_withBlurBackground: null,
      buttonLabel: null,
      onButtonPress: null,
      buttonVariant: null,
      gradientColor: null
    };
    const obj2 = { type: "image", src: { uri: _modDef15967 }, aspectRatio: first5 };
    obj.graphic = obj2;
    obj.experimental_withBlurBackground = first1;
    let str2;
    if (first3) {
      str2 = "Button";
    }
    obj.buttonLabel = str2;
    obj.onButtonPress = function onButtonPress() {
      return closure_1_1(false);
    };
    obj.buttonVariant = str;
    let tmp;
    if ("none" !== first4) {
      tmp = first4;
    }
    obj.gradientColor = tmp;
    return obj;
  }, items);
  const tmp10 = first2(visible(first1[7]).useCanRotate(), 2);
  const coachmark = visible(first1[9]).useCoachmark(ref, memo);
  const tmp24 = first5(visible(first1[10]).Button, {
    ref,
    onPress() {
      closure_1(!first);
    },
    variant: "primary",
    text: str2,
    size: "md"
  });
  if (first1) {
    const obj4 = { style: null, start: null, end: null, colors: null, children: null };
    const items1 = [{ height: 300 }, tmp.container];
    obj4.style = items1;
    obj4.start = { x: 0, y: 0 };
    obj4.end = { x: 1, y: 0 };
    obj4.colors = ["red", "orange", "yellow", "green", "teal", "blue", "purple"];
    obj4.children = tmp24;
    let tmp23Result = tmp23(require("LinearGradient"), obj4);
  } else {
    const obj5 = { style: null, children: null };
    const items2 = [{ height: 360 }, tmp.container];
    obj5.style = items2;
    obj5.children = tmp24;
    tmp23Result = tmp23(str, obj5);
  }
  const items3 = [tmp23Result, , , , , , , ];
  const obj6 = { hasIcons: false, children: null };
  const items4 = [first5(visible(first1[12]).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp6[1] }), first5(visible(first1[12]).TableSwitchRow, { label: "Enable Button", value: first3, onValueChange: tmp13[1] })];
  obj6.children = items4;
  items3[1] = closure_8(visible(first1[13]).TableRowGroup, obj6);
  const obj7 = { style: { marginVertical: 16 }, children: null };
  if (str == null) {
    str = "secondary";
  }
  const obj8 = { children: null };
  const obj9 = { title: "Button Variant", defaultValue: str, onChange: tmp15[1], hasIcons: false, children: null };
  const items5 = ["primary", "secondary", "experimental_premium-primary"];
  obj9.children = items5.map((value) => first5(first(first1[14]).TableRadioRow, { value, label: value }, value));
  obj7.children = first5(visible(first1[15]).TableRadioGroup, obj9);
  items3[2] = first5(str, obj7);
  const obj10 = { style: { marginVertical: 16 }, children: null };
  const obj11 = { title: "Gradient Color", defaultValue: first4, onChange: tmp16[1], hasIcons: false, children: null };
  const items6 = [{ label: "None", value: "none" }, { label: "Purple", value: "purple" }, { label: "Blue", value: "blue" }, { label: "Green", value: "green" }, { label: "Pink", value: "pink" }, { label: "Nitro Pink", value: "nitro-pink" }, { label: "Nitro Green", value: "nitro-green" }];
  obj11.children = items6.map((value) => {
    const label = value.label;
    return first5(first(first1[14]).TableRadioRow, { value: value.value, label }, label);
  });
  obj10.children = first5(visible(first1[15]).TableRadioGroup, obj11);
  items3[3] = first5(str, obj10);
  const obj12 = { style: { marginVertical: 16 }, children: null };
  const obj13 = { title: "Aspect Ratio", defaultValue: first5, onChange: tmp18[1], hasIcons: false, children: null };
  const items7 = ["21/9", "16/9", "6/4", "2/1", "1/1"];
  obj13.children = items7.map((value) => first5(first(first1[14]).TableRadioRow, { value, label: value }, value));
  obj12.children = first5(visible(first1[15]).TableRadioGroup, obj13);
  items3[4] = first5(str, obj12);
  items3[5] = first5(visible(first1[12]).TableSwitchRow, { label: "Enable Blur Background", value: first1, onValueChange: tmp4[1] });
  items3[6] = first5(visible(first1[12]).TableSwitchRow, { label: "Unlock Orientation", value: tmp11, onValueChange: tmp12 });
  items3[7] = first5(visible(first1[7]).TooltipNote, {});
  obj8.children = items3;
  return closure_8(closure_9, obj8);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsDesignSystemCoachmark() {
  const cResult = c.c(3);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const obj3 = { children: React5(closure_11, {}) };
    obj2.children = React5(LayerScope.LayerScope, obj3);
    const tmp9 = React5(timestampProducer, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.flex) {
    const obj4 = { style: tmp4.flex, bottom: true, children: first };
    const tmp12 = React5(common_SafeAreaView.SafeAreaPaddingView, obj4);
    cResult[1] = tmp4.flex;
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  return tmp10;
}) : (function UserSettingsDesignSystemCoachmark() {
  const obj = { style: closure_10().flex, bottom: true, children: null };
  const obj2 = { children: null };
  const tmp = closure_10();
  obj2.children = React5(LayerScope.LayerScope, { children: React5(closure_11, {}) });
  obj.children = React5(timestampProducer, obj2);
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj);
});