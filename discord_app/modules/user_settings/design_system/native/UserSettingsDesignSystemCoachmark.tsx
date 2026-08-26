// === Module 15104: Content ===

// Module 15104 (Content)
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5500 */;
import Layer from "Layer" /* 5887 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function Content() {
  let tmp = callback2();
  let obj = first3;
  const tmp2 = first2(first3.useState(true), 2);
  const first = tmp2[0];
  importDefault = tmp2[1];
  const tmp4 = first2(first3.useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = first2(first3.useState(false), 2);
  first2 = tmp6[0];
  obj1 = first(first1[5]);
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
  if (first) {
    str2 = "Hide tooltip";
  }
  const ref = obj.useRef(null);
  const items = [first3, first2, first, first1, str, first4, first5];
  const memo = obj.useMemo(() => {
    str = "top";
    if (first2) {
      str = "bottom";
    }
    let obj = {
      title: "Title goes here, and it can get really long so we should handle that",
      description: "Body copy goes here",
      position: str,
      visible: first,
      onDismiss() {
        return callback(false);
      },
      graphic: null,
      experimental_withBlurBackground: null,
      buttonLabel: null,
      onButtonPress: null,
      buttonVariant: null,
      gradientColor: null
    };
    obj = { type: "image", src: null, aspectRatio: null };
    obj = { uri: callback(first1[6]) };
    obj[1] = obj;
    obj[2] = first5;
    obj[5] = obj;
    obj[6] = first1;
    let str2;
    if (first3) {
      str2 = "Button";
    }
    obj[7] = str2;
    obj[8] = function onButtonPress() {
      return callback(false);
    };
    obj[9] = str;
    let tmp;
    if ("none" !== first4) {
      tmp = first4;
    }
    obj[10] = tmp;
    return obj;
  }, items);
  const tmp10 = first2(obj1.useCanRotate(), 2);
  const coachmark = first(first1[7]).useCoachmark(ref, memo);
  obj = {
    ref,
    onPress() {
      callback(!first);
    },
    variant: "primary",
    text: str2,
    size: "md"
  };
  const tmp24 = first5(first(first1[8]).Button, obj);
  const tmp26 = importDefault(first1[9])("Coachmark");
  if (first1) {
    obj = { style: null, start: null, end: null, colors: null, children: null };
    const items1 = [{ height: 300 }, tmp.container];
    obj[0] = items1;
    obj[1] = { x: 0, y: 0 };
    obj[2] = { x: 1, y: 0 };
    obj[3] = ["red", "orange", "yellow", "green", "teal", "blue", "purple"];
    obj[4] = tmp24;
    let tmp23Result = tmp23(tmp25(tmp9[10]), obj);
  } else {
    obj1 = { style: null, children: null };
    const items2 = [{ height: 360 }, tmp.container];
    obj1[0] = items2;
    obj1[1] = tmp24;
    tmp23Result = tmp23(str, obj1);
  }
  const items3 = [tmp23Result, , , , , , , ];
  const obj2 = { hasIcons: false, children: null };
  const items4 = [first5(first(first1[12]).TableSwitchRow, { label: "Enable Bottom Position", value: first2, onValueChange: tmp6[1] }), first5(first(first1[12]).TableSwitchRow, { label: "Enable Button", value: first3, onValueChange: tmp13[1] })];
  obj2[1] = items4;
  items3[1] = closure_8(first(first1[11]).TableRowGroup, obj2);
  const obj3 = { style: { marginVertical: 16 }, children: null };
  if (str == null) {
    str = "secondary";
  }
  tmp25 = importDefault;
  const tmp28 = closure_9;
  const tmp8Result = first(first1[7]);
  const items5 = ["primary", "secondary", "experimental_premium-primary"];
  obj3[1] = first5(first(first1[13]).TableRadioGroup, { title: "Button Variant", defaultValue: str, onChange: tmp15[1], hasIcons: false, children: items5.map((value) => first5(first(first1[14]).TableRadioRow, { value, label: value }, value)) });
  items3[2] = first5(str, obj3);
  tmp23Result = null;
  if (tmp26) {
    const obj5 = { style: null, children: null };
    obj5[0] = { marginVertical: 16 };
    const obj6 = { title: "Gradient Color", defaultValue: null, onChange: null, hasIcons: false, children: null };
    obj6[1] = first4;
    obj6[2] = tmp16[1];
    const items6 = [{ label: "None", value: "none" }, { label: "Purple", value: "purple" }, { label: "Blue", value: "blue" }, { label: "Green", value: "green" }, { label: "Pink", value: "pink" }, { label: "Nitro Pink", value: "nitro-pink" }, { label: "Nitro Green", value: "nitro-green" }];
    obj6[4] = items6.map((value) => {
      const label = value.label;
      return first5(first(first1[14]).TableRadioRow, { value: value.value, label }, label);
    });
    obj5[1] = tmp23(tmp8(tmp9[13]).TableRadioGroup, obj6);
    tmp23Result = tmp23(tmp31, obj5);
  }
  items3[3] = tmp23Result;
  let tmp23Result1 = null;
  if (tmp26) {
    const obj7 = { style: null, children: null };
    obj7[0] = { marginVertical: 16 };
    const obj8 = { title: "Aspect Ratio", defaultValue: null, onChange: null, hasIcons: false, children: null };
    obj8[1] = first5;
    obj8[2] = tmp18[1];
    const items7 = ["21/9", "16/9", "6/4", "2/1", "1/1"];
    obj8[4] = items7.map((value) => first5(first(first1[14]).TableRadioRow, { value, label: value }, value));
    obj7[1] = tmp23(tmp8(tmp9[13]).TableRadioGroup, obj8);
    tmp23Result1 = tmp23(tmp31, obj7);
  }
  const obj9 = { children: null };
  items3[4] = tmp23Result1;
  items3[5] = first5(first(first1[12]).TableSwitchRow, { label: "Enable Blur Background", value: first1, onValueChange: tmp4[1] });
  items3[6] = first5(first(first1[12]).TableSwitchRow, { label: "Unlock Orientation", value: tmp11, onValueChange: tmp12 });
  items3[7] = first5(first(first1[5]).TooltipNote, {});
  obj9[0] = items3;
  return closure_8(tmp28, obj9);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { paddingTop: 240, flex: 1, alignItems: "center", justifyContent: "center" }, flex: { flex: 1, padding: 16 } });
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemCoachmark.tsx");

export default function UserSettingsDesignSystemCoachmark() {
  let obj = { style: callback2().flex, bottom: true, children: null };
  obj = { children: null };
  obj = { children: callback(Content, {}) };
  obj[0] = callback(Layer.LayerScope, obj);
  obj[2] = callback(closure_6, obj);
  return callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};