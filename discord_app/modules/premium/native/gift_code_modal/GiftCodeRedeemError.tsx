// === Module 11453: GiftCodeRedeemError ===

// Module 11453 (GiftCodeRedeemError)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Link from "Link" /* 1484 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, body: null, header: null, message: null, footer: null };
createStyles = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 };
createStyles.header = { marginTop: 32, textAlign: "center" };
createStyles.message = { marginTop: 8, textAlign: "center" };
createStyles.footer = { paddingHorizontal: 24 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(children) {
  const tmp = closure_8();
  let obj = Link;
  const theme = obj.useTheme();
  obj = { bottom: true, style: tmp.container, children: null };
  obj = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (theme.dark) {
    let tmp9Result = tmp9(11454);
  } else {
    tmp9Result = tmp9(11455);
  }
  const items = [timestampProducer(React3, { source: tmp9Result }), , ];
  const obj1 = { variant: "heading-xl/bold", style: tmp.header, children: null };
  const intl = tmp2(1114).intl;
  obj1.children = intl.formatToMarkdownString(util.t.JUvC0s, {});
  items[1] = timestampProducer(Text_Text.Text, obj1);
  items[2] = timestampProducer(Text_Text.Text, { variant: "text-lg/medium", style: tmp.message, children: children.message });
  obj.children = items;
  const items1 = [React5(hasOwnProperty, obj), ];
  const obj3 = { style: tmp.footer, children: null };
  const obj4 = { text: null, size: "md", onPress: null };
  const intl2 = tmp2(1114).intl;
  obj4.text = intl2.string(util.t.cpT0Cq);
  obj4.onPress = function onPress() {
    return ModalActionCreatorsDefault.pop();
  };
  obj3.children = timestampProducer(components_Button_Button.Button, obj4);
  items1[1] = timestampProducer(React4, obj3);
  obj.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj);
};