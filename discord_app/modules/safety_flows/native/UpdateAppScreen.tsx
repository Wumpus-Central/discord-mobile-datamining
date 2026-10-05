// === Module 18071: UpdateAppScreen ===

// Module 18071 (UpdateAppScreen)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef2787 from "module_2787" /* 2787 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BundleUpdaterManager;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ NativeModules: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: obj3 };
obj2 = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let intl3;
  let items;
  let tmp10;
  let tmp14;
  let tmp18;
  let tmp6;
  const obj = react;
  const cResult = obj.c(9);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-lg/semibold", children: intl.string(_modDef2787.yxqMCD) };
    const Text = Text_Text.Text;
    intl = intl4.intl;
    const tmp9 = hasOwnProperty(Text, obj2);
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(_modDef2787.VBZJJg) };
    const Text2 = Text_Text.Text;
    intl2 = intl4.intl;
    const tmp13 = hasOwnProperty(Text2, obj3);
    cResult[2] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { onPress: first, text: intl3.string(_modDef2787.o4D6fm), variant: "primary", size: "md" };
    const Button = components_Button_Button.Button;
    intl3 = intl4.intl;
    const tmp17 = hasOwnProperty(Button, obj4);
    cResult[3] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== tmp4.buttonContainer) {
    const obj5 = { style: tmp4.buttonContainer, children: tmp14 };
    const tmp21 = hasOwnProperty(React3, obj5);
    cResult[4] = tmp4.buttonContainer;
    cResult[5] = tmp21;
    tmp18 = tmp21;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    let tmp22;
    if (cResult[7] === tmp18) {
      tmp22 = cResult[8];
    }
    return tmp22;
  }
  const obj6 = { style: tmp4.container, children: items };
  items = [tmp6, tmp10, tmp18];
  const tmp23 = metroRequire(React3, obj6);
  cResult[6] = tmp4.container;
  cResult[7] = tmp18;
  cResult[8] = tmp23;
  tmp22 = tmp23;
}) : (() => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  const obj2 = { variant: "heading-lg/semibold", children: intl.string(_modDef2787.yxqMCD) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [hasOwnProperty(Text, obj2), , ];
  const obj3 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(_modDef2787.VBZJJg) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = hasOwnProperty(Text2, obj3);
  const obj4 = { style: tmp.buttonContainer, children: hasOwnProperty(Button, obj5) };
  obj5 = {
    onPress() {
      BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    },
    text: intl3.string(_modDef2787.o4D6fm),
    variant: "primary",
    size: "md"
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[2] = hasOwnProperty(React3, obj4);
  return metroRequire(React3, obj);
});
const result = size.fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default tmp5;