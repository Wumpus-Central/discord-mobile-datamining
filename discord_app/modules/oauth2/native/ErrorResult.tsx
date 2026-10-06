// === Module 8744: ? ===

// Module 8744
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import AssetRegistryDefault from "AssetRegistry" /* 8745 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, inner: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }, text: { marginTop: 24, textAlign: "center" }, image: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let error;
  let hideFooter;
  let intl2;
  let items;
  let items1;
  let tmp10;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(17);
  ({ error, hideFooter } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== tmp4.image) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.image };
    const tmp9 = hasOwnProperty(_false, obj2);
    cResult[0] = tmp4.image;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== error) {
    let stringResult = error;
    if (error == null) {
      const intl = intl3.intl;
      stringResult = intl.string(intl3.t.mqn873);
    }
    cResult[2] = error;
    cResult[3] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.text) {
    let tmp13;
    if (cResult[5] === tmp10) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.inner) {
      if (cResult[8] === tmp5) {
        let tmp15;
        let tmp19;
        if (cResult[9] === tmp13) {
          tmp15 = cResult[10];
        }
        if (cResult[11] !== hideFooter) {
          let tmp20 = null;
          if (!hideFooter) {
            const obj3 = {
              size: "lg",
              text: intl2.string(intl3.t.cpT0Cq),
              onPress() {
                          const arr = ModalActionCreatorsDefault;
                          return arr.pop();
                        }
            };
            const Button = components_Button_Button.Button;
            intl2 = intl3.intl;
            tmp20 = hasOwnProperty(Button, obj3);
          }
          cResult[11] = hideFooter;
          cResult[12] = tmp20;
          tmp19 = tmp20;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp15) {
            let tmp22;
            if (cResult[15] === tmp19) {
              tmp22 = cResult[16];
            }
            return tmp22;
          }
        }
        const obj4 = { bottom: true, style: tmp4.container, children: items };
        items = [tmp15, tmp19];
        const tmp24 = metroRequire(common_SafeAreaView.SafeAreaPaddingView, obj4);
        cResult[13] = tmp4.container;
        cResult[14] = tmp15;
        cResult[15] = tmp19;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
    }
    const obj5 = { style: tmp4.inner, children: items1 };
    items1 = [tmp5, tmp13];
    const tmp18 = metroRequire(React3, obj5);
    cResult[7] = tmp4.inner;
    cResult[8] = tmp5;
    cResult[9] = tmp13;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const obj6 = { style: tmp4.text, variant: "text-md/medium", children: tmp10 };
  const tmp14 = hasOwnProperty(Text_Text.Text, obj6);
  cResult[4] = tmp4.text;
  cResult[5] = tmp10;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : ((error) => {
  let intl2;
  let items;
  let items1;
  error = error.error;
  const hideFooter = error.hideFooter;
  const tmp = closure_7();
  const obj = { bottom: true, style: tmp.container, children: items1 };
  const obj2 = { style: tmp.inner, children: items };
  const obj3 = { source: AssetRegistryDefault, style: tmp.image };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [hasOwnProperty(_false, obj3), ];
  const obj4 = { style: tmp.text, variant: "text-md/medium", children: error };
  const Text = Text_Text.Text;
  if (error == null) {
    const intl = intl3.intl;
    error = intl.string(intl3.t.mqn873);
  }
  items[1] = hasOwnProperty(Text, obj4);
  items1 = [metroRequire(React3, obj2), ];
  let tmp6Result = null;
  if (!hideFooter) {
    const obj5 = {
      size: "lg",
      text: intl2.string(intl3.t.cpT0Cq),
      onPress() {
          const arr = ModalActionCreatorsDefault;
          return arr.pop();
        }
    };
    const Button = components_Button_Button.Button;
    intl2 = intl3.intl;
    tmp6Result = hasOwnProperty(Button, obj5);
  }
  items1[1] = tmp6Result;
  return metroRequire(SafeAreaPaddingView, obj);
});
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default tmp6;