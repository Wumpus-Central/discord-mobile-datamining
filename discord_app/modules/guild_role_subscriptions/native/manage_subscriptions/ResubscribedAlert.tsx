// === Module 15218: ResubscribedAlert ===

// Module 15218 (ResubscribedAlert)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import _modDef15219 from "module_15219" /* 15219 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, body: null, centerText: null, headerImage: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
createStyles.container = createStyles;
createStyles.body = { alignItems: "center", textAlign: "center" };
createStyles.centerText = { textAlign: "center" };
createStyles.headerImage = { width: 87, height: 87 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  const tmp = closure_7();
  let obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["NX+WJN"]);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  obj = { style: tmp.body, children: null };
  obj = { source: _modDef15219, style: tmp.headerImage };
  const items = [hasOwnProperty(React4, obj), hasOwnProperty(native.Spacer, { size: 27 }), , , ];
  const obj1 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.oPV2cy);
  items[2] = hasOwnProperty(Text_Text.Text, obj1);
  items[3] = hasOwnProperty(native.Spacer, { size: 12 });
  const obj2 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl3 = util.intl;
  obj2.children = intl3.string(util.t.DdRizV);
  items[4] = hasOwnProperty(Text_Text.Text, obj2);
  obj.children = items;
  obj.children = timestampProducer(React3, obj);
  return hasOwnProperty(common_AlertDefault, obj);
};