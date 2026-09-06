// === Module 15787: UserSettingsDesignSystemCoachmark ===

// Module 15787 (UserSettingsDesignSystemCoachmark)
import _modDef5754 from "module_5754" /* 5754 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import LayerScope from "LayerScope" /* 7156 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Content() {
  let tmp = closure_10();
  let obj = first3;
  const tmp2 = first2(first3.useState(true), 2);
  const visible = tmp2[0];
  importDefault = tmp2[1];
  const tmp4 = first2(first3.useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = first2(first3.useState(false), 2);
  first2 = tmp6[0];
  let obj1 = visible(first1[5]);
  [tmp11, tmp12] = first2(obj1.useCanRotate(), 2);
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
  const ref = obj.useRef(null);
  const items = [first3, first2, visible, first1, str, first4, first5];
  const memo = obj.useMemo(() => {
    str = "top";
    if (first2) {
      str = "bottom";
    }
    let obj = {
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
    obj = { type: "image", src: null, aspectRatio: null };
    obj = { uri: _modDef5754 };
    obj.src = obj;
    obj.aspectRatio = first5;
    obj.graphic = obj;
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
  const tmp10 = first2(obj1.useCanRotate(), 2);
  const coachmark = visible(first1[7]).useCoachmark(ref, memo);
  obj = {
    ref,
    onPress() {
      closure_1(!first);
    },
    variant: "primary",
    text: str2,
    size: "md"
  };
  const tmp24 = first5(visible(first1[8]).Button, obj);
  if (first1) {
    obj = { style: null, start: null, end: null, colors: null, children: null };
    const items1 = [{ height: 300 }, tmp.container];
    obj.style = items1;
    obj.start = { x: 0, y: 0 };
    obj.end = { x: 1, y: 0 };
    obj.colors = ["red", "orange", "yellow", "green", "teal", "blue", "purple"];
    obj.children = tmp24;
    let tmp23Result = tmp23(require("LinearGradient"), obj);
  } else {
    obj1 = { style: null, children: null };
    const items2 = [{ height: 360 }, tmp.container];
    obj1.style = items2;
    obj1.children = tmp24;
    tmp23Result = tmp23(str, obj1);
  }
  const items3 = [tmp23Result, , , , , , , ];
  const obj2 = { hasIcons: false, children: null };
  const items4 = [first5(visible(first1[11]).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp6[1] }), first5(visible(first1[11]).TableSwitchRow, { label: "Enable Button", value: first3, onValueChange: tmp13[1] })];
  obj2.children = items4;
  items3[1] = closure_8(visible(first1[10]).TableRowGroup, obj2);
  const obj3 = { style: { marginVertical: 16 }, children: null };
  if (str == null) {
    str = "secondary";
  }
  const obj4 = { children: null };
  const obj5 = { title: "Button Variant", defaultValue: str, onChange: tmp15[1], hasIcons: false, children: null };
  const items5 = ["primary", "secondary", "experimental_premium-primary"];
  obj5.children = items5.map((value) => first5(first(first1[13]).TableRadioRow, { value, label: value }, value));
  obj3.children = first5(visible(first1[12]).TableRadioGroup, obj5);
  items3[2] = first5(str, obj3);
  const obj6 = { style: { marginVertical: 16 }, children: null };
  const obj7 = { title: "Gradient Color", defaultValue: first4, onChange: tmp16[1], hasIcons: false, children: null };
  const items6 = [{ label: "None", value: "none" }, { label: "Purple", value: "purple" }, { label: "Blue", value: "blue" }, { label: "Green", value: "green" }, { label: "Pink", value: "pink" }, { label: "Nitro Pink", value: "nitro-pink" }, { label: "Nitro Green", value: "nitro-green" }];
  obj7.children = items6.map((value) => {
    const label = value.label;
    return first5(first(first1[13]).TableRadioRow, { value: value.value, label }, label);
  });
  obj6.children = first5(visible(first1[12]).TableRadioGroup, obj7);
  items3[3] = first5(str, obj6);
  const obj8 = { style: { marginVertical: 16 }, children: null };
  const obj9 = { title: "Aspect Ratio", defaultValue: first5, onChange: tmp18[1], hasIcons: false, children: null };
  const items7 = ["21/9", "16/9", "6/4", "2/1", "1/1"];
  obj9.children = items7.map((value) => first5(first(first1[13]).TableRadioRow, { value, label: value }, value));
  obj8.children = first5(visible(first1[12]).TableRadioGroup, obj9);
  items3[4] = first5(str, obj8);
  items3[5] = first5(visible(first1[11]).TableSwitchRow, { label: "Enable Blur Background", value: first1, onValueChange: tmp4[1] });
  items3[6] = first5(visible(first1[11]).TableSwitchRow, { label: "Unlock Orientation", value: tmp11, onValueChange: tmp12 });
  items3[7] = first5(visible(first1[5]).TooltipNote, {});
  obj4.children = items3;
  return closure_8(closure_9, obj4);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { paddingTop: 240, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1, padding: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemCoachmark.tsx");

export default function UserSettingsDesignSystemCoachmark() {
  let obj = { style: closure_10().flex, bottom: true, children: null };
  obj = { children: null };
  obj = { children: React5(Content, {}) };
  obj.children = React5(LayerScope.LayerScope, obj);
  obj.children = React5(timestampProducer, obj);
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj);
};