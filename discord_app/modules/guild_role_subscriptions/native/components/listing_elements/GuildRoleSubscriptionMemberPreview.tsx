// === Module 15348: GuildRoleSubscriptionMemberPreview ===

// Module 15348 (GuildRoleSubscriptionMemberPreview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtilsAll from "utils/ColorUtils" /* 1092 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4634 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4790 */;
import FastImageDefault from "FastImage" /* 5673 */;
import RoleIconUtils from "RoleIconUtils" /* 7297 */;
import RoleIconDefault from "RoleIcon" /* 7315 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.xs, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, avatar: { width: 40, height: 40, borderRadius: 20 }, content: { marginStart: 16 }, contextRow: { flexDirection: "row", alignItems: "center" } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionMemberPreview.tsx");

export const GuildRoleSubscriptionMemberPreview = function GuildRoleSubscriptionMemberPreview(content) {
  content = content.content;
  if (content === undefined) {
    const intl = util.intl;
    content = intl.string(util.t["6OSasb"]);
  }
  ({ guildId, role } = content);
  ({ style, textStyle } = content);
  const tmp3 = closure_9();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  NicknameUtilsDefault;
  if (null == role) {
    return null;
  } else {
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(guildId, 40);
    }
    if (avatarURL == null) {
      avatarURL = AvatarUtilsDefault.getDefaultAvatarURL(undefined, undefined);
      const tmp6Result2 = AvatarUtilsDefault;
    }
    const source = AvatarUtilsDefault.makeSource(avatarURL);
    const tmp6Result = AvatarUtilsDefault;
    const roleIconData = RoleIconUtils.getRoleIconData(role, 16);
    const obj2 = { style: null, children: null };
    const items1 = [tmp3.container, style];
    obj2.style = items1;
    const obj3 = { style: tmp3.avatar, source };
    const items2 = [timestampProducer(FastImageDefault, obj3), ];
    const obj4 = { style: tmp3.content, children: null };
    const obj5 = { style: tmp3.contextRow, children: null };
    const obj6 = { variant: "text-md/semibold", color: "interactive-text-active", style: null, children: null };
    const obj7 = { color: null };
    const tmp4Result = RoleIconUtils;
    obj7.color = utils_ColorUtilsAll.int2hex(role.color);
    obj6.style = obj7;
    obj6.children = tmp8;
    const items3 = [timestampProducer(Text_Text.Text, obj6), , , ];
    let tmp12Result = null;
    if (null != roleIconData) {
      const obj8 = { children: null };
      const items4 = [timestampProducer(native.Spacer, { size: 4 }), ];
      const obj9 = { name: role.name, src: null, unicodeEmoji: null, size: 16 };
      ({ customIconSrc: obj13.src, unicodeEmoji: obj13.unicodeEmoji } = roleIconData);
      items4[1] = timestampProducer(RoleIconDefault, obj9);
      obj8.children = items4;
      tmp12Result = React6(React5, obj8);
    }
    items3[1] = tmp12Result;
    items3[2] = timestampProducer(native.Spacer, { size: 8 });
    items3[3] = timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", children: "4:20 PM" });
    obj5.children = items3;
    const items5 = [React6(View, obj5), ];
    const obj10 = { variant: "text-md/normal", color: "text-default", style: textStyle, children: content };
    items5[1] = timestampProducer(Text_Text.Text, obj10);
    obj4.children = items5;
    items2[1] = React6(View, obj4);
    obj2.children = items2;
    return React6(View, obj2);
  }
};