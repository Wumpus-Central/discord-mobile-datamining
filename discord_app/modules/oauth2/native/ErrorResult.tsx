// discord_app/modules/oauth2/native/ErrorResult.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import _modDef9382 from "../../../../_runtime/metro/09382__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    gap: 16,
    paddingHorizontal: 16,
    justifyContent: "center",
    flexDirection: "column",
  },
  inner: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" },
  text: { marginTop: 24, textAlign: "center" },
  image: null,
};
const obj3 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  gap: 16,
  paddingHorizontal: 16,
  justifyContent: "center",
  flexDirection: "column",
};
obj2.image = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = closure_7();
  const obj = { bottom: true, style: tmp.container, children: null };
  const obj2 = { style: tmp.inner, children: null };
  const items = [hasOwnProperty(React3, { source: _modDef9382, style: tmp.image })];
  const obj4 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = util.intl;
    error = intl.string(util.t.mqn873);
  }
  obj4.children = error;
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [timestampProducer(React4, obj2)];
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
}
