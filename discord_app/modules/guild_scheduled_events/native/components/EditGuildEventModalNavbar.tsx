// === Module 9858: EditGuildEventModalNavbar ===

// Module 9858 (EditGuildEventModalNavbar)
import util from "util" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import Text_Text from "Text/Text" /* 4636 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7093 */;
import _modDef7106 from "module_7106" /* 7106 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7237 */;
import HeaderActionButton from "HeaderActionButton" /* 7491 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9855 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  screen = screen.screen;
  const tmp = closure_7();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("EditGuildEventModalNavbar", "text-xs/bold");
  if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    GlobalUtils.assertNever(screen);
    const tmp2Result = GlobalUtils;
  }
  [tmp7, tmp8] = items;
  const obj2 = { top: true, style: tmp.header, children: null };
  const items1 = [hasOwnProperty(View, { style: tmp.buttonContainer }), , ];
  const obj4 = { style: null, variant: typeConsolidationEyebrow.variant, color: "text-default", children: null };
  const items2 = [tmp.headerTitle, typeConsolidationEyebrow.style];
  obj4.style = items2;
  const intl = util.intl;
  obj4.children = intl.format(util.t["42HaFY"], { step: tmp7, total: tmp8 });
  items1[1] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { style: tmp.buttonContainer, children: null };
  const obj6 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  const intl2 = util.intl;
  obj6.accessibilityLabel = intl2.string(util.t.cpT0Cq);
  obj6.onPress = screen.onClose;
  obj6.source = _modDef7106;
  obj6.style = tmp.rightButton;
  obj5.children = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj6);
  items1[2] = hasOwnProperty(View, obj5);
  obj2.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj2);
};