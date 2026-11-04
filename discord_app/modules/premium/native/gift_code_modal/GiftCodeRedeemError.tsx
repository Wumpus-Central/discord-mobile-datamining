// === Module 11709: GiftCodeRedeemError ===

// Module 11709 (GiftCodeRedeemError)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Link from "Link" /* 1500 */;
import Text_Text from "Text/Text" /* 5761 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import FastImageDefault from "FastImage" /* 5851 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7428 */;
import _modDef11710 from "module_11710" /* 11710 */;
import _modDef11711 from "module_11711" /* 11711 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5141);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, header: { marginTop: 32, textAlign: "center" }, message: { marginTop: 8, textAlign: "center" }, footer: { paddingHorizontal: 24 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(children) {
  const tmp = closure_7();
  const theme = Link.useTheme();
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (theme.dark) {
    let tmp8Result = _modDef11710;
  } else {
    tmp8Result = _modDef11711;
  }
  items = [hasOwnProperty(FastImageDefault, { source: tmp8Result }), , ];
  const obj4 = { variant: "heading-xl/semibold", style: tmp.header, children: null };
  const intl = util.intl;
  obj4.children = intl.formatToMarkdownString(util.t.JUvC0s, {});
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  items[2] = hasOwnProperty(Text_Text.Text, { variant: "body-lg/medium", style: tmp.message, children: children.message });
  obj3.children = items;
  const items1 = [timestampProducer(React4, obj3), ];
  const obj6 = { style: tmp.footer, children: null };
  const obj7 = { text: null, size: "md", onPress: null };
  const intl2 = util.intl;
  obj7.text = intl2.string(util.t.cpT0Cq);
  obj7.onPress = function onPress() {
    return ModalActionCreatorsDefault.pop();
  };
  obj6.children = hasOwnProperty(components_Button_Button.Button, obj7);
  items1[1] = hasOwnProperty(React3, obj6);
  obj2.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj2);
};