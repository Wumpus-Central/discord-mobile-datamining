// discord_app/modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import common_AlertDefault from "../../../../../components_native/common/Alert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  headerImage: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: nativeDefault.radii.round,
    padding: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  header: { marginTop: 8, marginBottom: 8, textAlign: "center" },
  subtitle: { lineHeight: 18, marginBottom: 8, textAlign: "center" },
  buttons: { marginTop: 16, marginBottom: 8, gap: 12 },
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx",
);

export default function MemberVerificationAlert(arg0) {
  ({ icon, subtitle } = arg0);
  ({ header, buttons } = arg0);
  const merged = Object.assign(arg0, Object.assign({ header: 0, icon: 0, subtitle: 0, buttons: 0 }));
  const tmp2 = closure_6();
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.noDefaultButtons = true;
  let tmp7 = null;
  if (null != icon) {
    const obj2 = { style: tmp2.headerImage, children: React4(icon, { size: "lg" }) };
    tmp7 = React4(View, obj2);
  }
  const items = [
    tmp7,
    React4(Text_Text.Heading, {
      style: tmp2.header,
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      children: header,
    }),
    ,
  ];
  let tmp10Result = null;
  if (null != subtitle) {
    const obj4 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    tmp10Result = React4(Text_Text.Text, obj4);
  }
  items[2] = tmp10Result;
  items[3] = React4(View, { style: tmp2.buttons, children: buttons });
  obj.children = items;
  return hasOwnProperty(common_AlertDefault, obj);
}
