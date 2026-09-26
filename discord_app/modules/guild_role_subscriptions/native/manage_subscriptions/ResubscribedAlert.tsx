// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import _modDef14766 from "../../../../../_runtime/metro/14766__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL },
  body: { alignItems: "center", textAlign: "center" },
  centerText: { textAlign: "center" },
  headerImage: { width: 87, height: 87 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx",
);

export default function ResubscribedAlert(onClose) {
  const tmp = closure_7();
  const obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["NX+WJN"]);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  const obj2 = { style: tmp.body, children: null };
  const tmp2 = common_AlertDefault;
  const items = [
    hasOwnProperty(React4, { source: _modDef14766, style: tmp.headerImage }),
    hasOwnProperty(native.Spacer, { size: 27 }),
    ,
    ,
  ];
  const obj4 = {
    variant: "text-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.centerText,
    children: null,
  };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.oPV2cy);
  items[2] = hasOwnProperty(Text_Text.Text, obj4);
  items[3] = hasOwnProperty(native.Spacer, { size: 12 });
  const obj5 = {
    variant: "text-md/normal",
    color: "mobile-text-heading-primary",
    style: tmp.centerText,
    children: null,
  };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.DdRizV);
  items[4] = hasOwnProperty(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = timestampProducer(React3, obj2);
  return hasOwnProperty(tmp2, obj);
}
