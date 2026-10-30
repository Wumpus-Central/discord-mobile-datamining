// discord_app/modules/oauth2/native/ErrorResult.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import _modDef9734 from "../../../../_runtime/metro/09734__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
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
let obj3 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  gap: 16,
  paddingHorizontal: 16,
  justifyContent: "center",
  flexDirection: "column",
};
obj2.image = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = closure_6();
  const obj = { bottom: true, style: tmp.container, children: null };
  const obj2 = { style: tmp.inner, children: null };
  const obj3 = { source: _modDef9734, style: tmp.image };
  const items = [React4(FastImageDefault, obj3)];
  const obj4 = { style: tmp.text, variant: "text-md/medium", children: null };
  if (error == null) {
    const intl = util.intl;
    error = intl.string(util.t.mqn873);
  }
  obj4.children = error;
  items[1] = React4(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [hasOwnProperty(View, obj2)];
  let tmp6Result = null;
  if (!error.hideFooter) {
    const obj5 = { size: "lg", text: null, onPress: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(util.t.cpT0Cq);
    obj5.onPress = function onPress() {
      return ModalActionCreatorsDefault.pop();
    };
    tmp6Result = React4(components_Button_Button.Button, obj5);
  }
  items1[1] = tmp6Result;
  obj.children = items1;
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj);
}
