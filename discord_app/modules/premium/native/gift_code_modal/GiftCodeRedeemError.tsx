// === Module 11796: GiftCodeRedeemError ===

// Module 11796 (GiftCodeRedeemError)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Link from "Link" /* 1485 */;
import Text_Text from "Text/Text" /* 4823 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import components_Button_Button from "components/Button/Button" /* 5271 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7454 */;
import _modDef11797 from "module_11797" /* 11797 */;
import _modDef11798 from "module_11798" /* 11798 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, header: { marginTop: 32, textAlign: "center" }, message: { marginTop: 8, textAlign: "center" }, footer: { paddingHorizontal: 24 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(children) {
  const tmp = closure_8();
  const theme = Link.useTheme();
  const obj2 = { bottom: true, style: tmp.container, children: null };
  const obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (theme.dark) {
    let tmp9Result = _modDef11797;
  } else {
    tmp9Result = _modDef11798;
  }
  const items = [timestampProducer(React3, { source: tmp9Result }), , ];
  const obj4 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = util.intl;
  obj4.children = intl.formatToMarkdownString(util.t.JUvC0s, {});
  items[1] = timestampProducer(Text_Text.Text, obj4);
  items[2] = timestampProducer(Text_Text.Text, { variant: "text-lg/medium", style: tmp.message, children: children.message });
  obj3.children = items;
  const items1 = [React5(hasOwnProperty, obj3), ];
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
};