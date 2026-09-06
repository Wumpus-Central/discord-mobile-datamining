// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import _modDef15219 from "../../../../../_runtime/metro/15219__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx",
);

export default function ResubscribedAlert(onClose) {
  const tmp = closure_7();
  let obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["NX+WJN"]);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  obj = { style: tmp.body, children: null };
  obj = { source: _modDef15219, style: tmp.headerImage };
  const items = [hasOwnProperty(React4, obj), hasOwnProperty(native.Spacer, { size: 27 }), , ,];
  const obj1 = {
    variant: "text-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.centerText,
    children: null,
  };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.oPV2cy);
  items[2] = hasOwnProperty(Text_Text.Text, obj1);
  items[3] = hasOwnProperty(native.Spacer, { size: 12 });
  const obj2 = {
    variant: "text-md/normal",
    color: "mobile-text-heading-primary",
    style: tmp.centerText,
    children: null,
  };
  const intl3 = util.intl;
  obj2.children = intl3.string(util.t.DdRizV);
  items[4] = hasOwnProperty(Text_Text.Text, obj2);
  obj.children = items;
  obj.children = timestampProducer(React3, obj);
  return hasOwnProperty(common_AlertDefault, obj);
}
