// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Link from "../../../../../_runtime/01485_Link.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import _modDef11721 from "../../../../../_runtime/metro/11721__.js";
import _modDef11722 from "../../../../../_runtime/metro/11722__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 28,
    paddingBottom: 12,
    paddingHorizontal: 32,
  },
  header: { marginTop: 32, textAlign: "center" },
  message: { marginTop: 8, textAlign: "center" },
  footer: { paddingHorizontal: 24 },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(children) {
  const tmp = closure_8();
  const theme = Link.useTheme();
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (theme.dark) {
    let tmp9Result = _modDef11721;
  } else {
    tmp9Result = _modDef11722;
  }
  const items = [timestampProducer(React3, { source: tmp9Result }), ,];
  const obj4 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = util.intl;
  obj4.children = intl.formatToMarkdownString(util.t.JUvC0s, {});
  items[1] = timestampProducer(Text_Text.Text, obj4);
  items[2] = timestampProducer(Text_Text.Text, {
    variant: "text-lg/medium",
    style: tmp.message,
    children: children.message,
  });
  obj3.children = items;
  const items1 = [React5(hasOwnProperty, obj3)];
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { text: null, size: "md", onPress: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t.cpT0Cq);
  obj7.onPress = function onPress() {
    return ModalActionCreatorsDefault.pop();
  };
  obj6.children = timestampProducer(components_Button_Button.Button, obj7);
  items1[1] = timestampProducer(React4, obj6);
  obj2.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
}
