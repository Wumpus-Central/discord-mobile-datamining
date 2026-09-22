// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx
import useStateFromStores from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtilsAll from "../../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import RoleIconDefault from "../../../../roles/native/RoleIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: {
    flexDirection: "row",
    padding: 16,
    borderRadius: nativeDefault.radii.xs,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  content: { marginStart: 16 },
  contextRow: { flexDirection: "row", alignItems: "center" },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateRolePreview.tsx",
);

export const GuildRoleSubscriptionRolePreview = function GuildRoleSubscriptionRolePreview(content) {
  content = content.content;
  if (content === undefined) {
    const intl = util.intl;
    content = intl.string(util.t["6OSasb"]);
  }
  const roleImage = content.roleImage;
  ({ style, textStyle, roleColor, roleName, guildId } = content);
  const tmp3 = closure_8();
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = { style: null, children: null };
  const items1 = [tmp3.container, style];
  obj3.style = items1;
  const name = NicknameUtilsDefault.useName(guildId, null, stateFromStores);
  const items2 = [timestampProducer(FastImageDefault, { style: tmp3.avatar, source: { uri: roleImage } })];
  const obj5 = { style: tmp3.content, children: null };
  const obj6 = { style: tmp3.contextRow, children: null };
  const obj7 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
  const obj8 = { color: null };
  const obj4 = { style: tmp3.avatar, source: { uri: roleImage } };
  obj8.color = utils_ColorUtilsAll.int2hex(roleColor);
  obj7.style = obj8;
  obj7.children = name;
  const items3 = [
    timestampProducer(Text_Text.Text, obj7),
    timestampProducer(native.Spacer, { size: 4 }),
    timestampProducer(RoleIconDefault, { name: roleName, src: roleImage, size: 16 }),
    timestampProducer(native.Spacer, { size: 8 }),
    timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" }),
  ];
  obj6.children = items3;
  const items4 = [
    React5(View, obj6),
    timestampProducer(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-default",
      style: textStyle,
      children: content,
    }),
  ];
  obj5.children = items4;
  items2[1] = React5(View, obj5);
  obj3.children = items2;
  return React5(View, obj3);
};
