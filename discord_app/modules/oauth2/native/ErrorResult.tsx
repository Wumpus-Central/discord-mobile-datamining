// === Module 9144: ? ===

// Module 9144
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6803 */;
import _modDef9145 from "module_9145" /* 9145 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" }, inner: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }, text: { marginTop: 24, textAlign: "center" }, image: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
obj2.image = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ErrorResult(arg0) {
  const cResult = c.c(17);
  ({ error, hideFooter } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== tmp4.image) {
    const obj2 = { source: _modDef9145, style: tmp4.image };
    const tmp9 = hasOwnProperty(React3, obj2);
    cResult[0] = tmp4.image;
    cResult[1] = tmp9;
    let tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== error) {
    let stringResult = error;
    if (error == null) {
      const intl = util.intl;
      stringResult = intl.string(util.t.mqn873);
    }
    cResult[2] = error;
    cResult[3] = stringResult;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.text) {
    if (cResult[5] === tmp10) {
      let tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.inner) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp13) {
          let tmp15 = cResult[10];
        }
        if (cResult[11] !== hideFooter) {
          let tmp20 = null;
          if (!hideFooter) {
            const obj3 = { size: "lg", text: null, onPress: null };
            const intl2 = util.intl;
            obj3.text = intl2.string(util.t.cpT0Cq);
            obj3.onPress = function onPress() {
              return ModalActionCreatorsDefault.pop();
            };
            tmp20 = hasOwnProperty(components_Button_Button.Button, obj3);
          }
          cResult[11] = hideFooter;
          cResult[12] = tmp20;
          let tmp19 = tmp20;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp15) {
            if (cResult[15] === tmp19) {
              let tmp22 = cResult[16];
            }
            return tmp22;
          }
        }
        const obj4 = { bottom: true, style: tmp4.container, children: null };
        const items = [tmp15, tmp19];
        obj4.children = items;
        const tmp24 = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj4);
        cResult[13] = tmp4.container;
        cResult[14] = tmp15;
        cResult[15] = tmp19;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
    }
    const obj5 = { style: tmp4.inner, children: null };
    const items1 = [tmp5, tmp13];
    obj5.children = items1;
    const tmp18 = timestampProducer(React4, obj5);
    cResult[7] = tmp4.inner;
    cResult[8] = tmp5;
    cResult[9] = tmp13;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const tmp14 = hasOwnProperty(Text_Text.Text, { style: tmp4.text, variant: "text-md/medium", children: tmp10 });
  cResult[4] = tmp4.text;
  cResult[5] = tmp10;
  cResult[6] = tmp14;
  tmp13 = tmp14;
  const obj6 = { style: tmp4.text, variant: "text-md/medium", children: tmp10 };
}) : (function ErrorResult(error) {
  error = error.error;
  const tmp = closure_7();
  const obj = { bottom: true, style: tmp.container, children: null };
  const obj2 = { style: tmp.inner, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef9145, style: tmp.image }), ];
  const obj4 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = util.intl;
    error = intl.string(util.t.mqn873);
  }
  obj4.children = error;
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [timestampProducer(React4, obj2), ];
  let tmp6Result = null;
  if (!error.hideFooter) {
    const obj5 = { size: "lg", text: null, onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(util.t.cpT0Cq);
    obj5.onPress = function onPress() {
      return ModalActionCreatorsDefault.pop();
    };
    tmp6Result = hasOwnProperty(components_Button_Button.Button, obj5);
  }
  items1[1] = tmp6Result;
  obj.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
});