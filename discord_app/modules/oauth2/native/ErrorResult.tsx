// === Module 9249: ? ===

// Module 9249
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import _modDef9250 from "module_9250" /* 9250 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, inner: null, text: null, image: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
createStyles.container = createStyles;
createStyles.inner = { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" };
createStyles.text = { marginTop: 24, textAlign: "center" };
createStyles.image = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = closure_7();
  let obj = { bottom: true, style: tmp.container, children: null };
  obj = { style: tmp.inner, children: null };
  obj = { source: _modDef9250, style: tmp.image };
  const items = [hasOwnProperty(React3, obj), ];
  const obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = util.intl;
    error = intl.string(util.t.mqn873);
  }
  obj1.children = error;
  items[1] = hasOwnProperty(Text_Text.Text, obj1);
  obj.children = items;
  const items1 = [timestampProducer(React4, obj), ];
  let tmp6Result = null;
  if (!error.hideFooter) {
    const obj2 = { size: "lg", text: null, onPress: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(util.t.cpT0Cq);
    obj2.onPress = function onPress() {
      return ModalActionCreatorsDefault.pop();
    };
    tmp6Result = hasOwnProperty(components_Button_Button.Button, obj2);
  }
  items1[1] = tmp6Result;
  obj.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
};