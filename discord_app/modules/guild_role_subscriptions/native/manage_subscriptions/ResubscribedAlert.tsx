// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import _modDef17197 from "../../../../../_runtime/metro/17197__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL },
  body: { alignItems: "center", textAlign: "center" },
  centerText: { textAlign: "center" },
  headerImage: { width: 87, height: 87 },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx",
);

export default function ResubscribedAlert(onClose) {
  const tmp = closure_6();
  const obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["NX+WJN"]);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  const obj2 = { style: tmp.body, children: null };
  const obj3 = { source: null, style: null };
  const tmp2 = common_AlertDefault;
  obj3.source = _modDef17197;
  obj3.style = tmp.headerImage;
  const items = [React4(FastImageDefault, obj3), React4(native.Spacer, { size: 27 }), , ,];
  const obj4 = {
    variant: "text-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.centerText,
    children: null,
  };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.oPV2cy);
  items[2] = React4(Text_Text.Text, obj4);
  items[3] = React4(native.Spacer, { size: 12 });
  const obj5 = {
    variant: "text-md/normal",
    color: "mobile-text-heading-primary",
    style: tmp.centerText,
    children: null,
  };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.DdRizV);
  items[4] = React4(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(tmp2, obj);
}
