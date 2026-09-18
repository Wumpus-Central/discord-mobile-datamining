// === Module 9487: ? ===

// Module 9487
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4718 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7319 */;
import _modDef9488 from "module_9488" /* 9488 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" }, inner: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }, text: { marginTop: 24, textAlign: "center" }, image: null };
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
obj2.image = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = closure_7();
  const obj = { bottom: true, style: tmp.container, children: null };
  const obj2 = { style: tmp.inner, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef9488, style: tmp.image }), ];
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
};