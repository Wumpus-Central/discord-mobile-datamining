// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtilsAll from "../../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../../../intl/index.native.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, avatar: null, content: null, contextRow: null };
createStyles = {
  flexDirection: "row",
  padding: 16,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.container = createStyles;
createStyles.avatar = { width: 40, height: 40, borderRadius: 20 };
createStyles.content = { marginStart: 16 };
createStyles.contextRow = { flexDirection: "row", alignItems: "center" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx",
);

export const GuildRoleSubscriptionMemberPreview = function GuildRoleSubscriptionMemberPreview(content) {
  content = content.content;
  if (content === undefined) {
    const intl = util.intl;
    content = intl.string(util.t["6OSasb"]);
  }
  ({ guildId, role } = content);
  ({ style, textStyle } = content);
  const tmp3 = closure_9();
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  NicknameUtilsDefault;
  if (null == role) {
    return null;
  } else {
    let tmp6Result = tmp6(1396);
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (avatarURL == null) {
      tmp6Result = tmp6(1396);
      avatarURL = tmp6Result.getDefaultAvatarURL(undefined, undefined);
    }
    const source = tmp6Result.makeSource(avatarURL);
    const roleIconData = tmp4(7187).getRoleIconData(role, 16);
    obj = { style: null, children: null };
    const items1 = [tmp3.container, style];
    obj.style = items1;
    obj = { style: tmp3.avatar, source };
    const items2 = [timestampProducer(tmp6(5587), obj)];
    const obj1 = { style: tmp3.content, children: null };
    const obj2 = { style: tmp3.contextRow, children: null };
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
    const obj4 = { color: null };
    const tmp4Result = tmp4(7187);
    obj4.color = utils_ColorUtilsAll.int2hex(role.color);
    obj3.style = obj4;
    obj3.children = tmp8;
    const items3 = [timestampProducer(tmp4(4556).Text, obj3), , ,];
    let tmp12Result = null;
    if (null != roleIconData) {
      const items4 = [tmp14(tmp4(1178).Spacer, { size: 4 })];
      const obj5 = { name: role.name, source: null, unicodeEmoji: null, size: 16 };
      let tmp19;
      if (null != roleIconData.customIconSrc) {
        const obj6 = { uri: roleIconData.customIconSrc };
        tmp19 = obj6;
      }
      const obj7 = { children: null };
      obj5.source = tmp19;
      obj5.unicodeEmoji = roleIconData.unicodeEmoji;
      items4[1] = tmp14(tmp6(7188), obj5);
      obj7.children = items4;
      tmp12Result = tmp12(React5, obj7);
      const tmp6Result1 = tmp6(7188);
    }
    items3[1] = tmp12Result;
    items3[2] = timestampProducer(tmp4(1178).Spacer, { size: 8 });
    items3[3] = timestampProducer(tmp4(4556).Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: "4:20 PM",
    });
    obj2.children = items3;
    const items5 = [React6(View, obj2)];
    const obj8 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: content };
    items5[1] = timestampProducer(tmp4(4556).Text, obj8);
    obj1.children = items5;
    items2[1] = React6(View, obj1);
    obj.children = items2;
    return React6(View, obj);
  }
};
