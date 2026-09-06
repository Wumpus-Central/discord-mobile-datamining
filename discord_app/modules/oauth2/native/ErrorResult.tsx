// discord_app/modules/oauth2/native/ErrorResult.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import _modDef9250 from "../../../../_runtime/metro/09250__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, inner: null, text: null, image: null };
createStyles = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  gap: 16,
  paddingHorizontal: 16,
  justifyContent: "center",
  flexDirection: "column",
};
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
  const items = [hasOwnProperty(React3, obj)];
  const obj1 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = tmp3(1114).intl;
    error = intl.string(tmp3(1114).t.mqn873);
  }
  obj1.children = error;
  items[1] = hasOwnProperty(Text_Text.Text, obj1);
  obj.children = items;
  const items1 = [timestampProducer(React4, obj)];
  let tmp6Result = null;
  if (!error.hideFooter) {
    const obj2 = { size: "lg", text: null, onPress: null };
    const intl2 = tmp3(1114).intl;
    obj2.text = intl2.string(tmp3(1114).t.cpT0Cq);
    obj2.onPress = function onPress() {
      return ModalActionCreatorsDefault.pop();
    };
    tmp6Result = tmp6(tmp3(4975).Button, obj2);
  }
  items1[1] = tmp6Result;
  obj.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
}
