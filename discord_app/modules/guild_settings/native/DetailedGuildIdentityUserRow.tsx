// discord_app/modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import DiscordTagDefault from "../../user_profile/native/DiscordTag.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let obj = { mainIdentity: { flexDirection: "row", alignItems: "center" }, primaryAvatar: null, mainTag: null };
obj = { marginRight: nativeDefault.space.PX_4 };
obj.primaryAvatar = obj;
const createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
obj.mainTag = createStyles;
let closure_7 = createStyles.createStyles(obj);
const memoResult = noop.memo((height) => {
  ({ guildId, user } = height);
  const tmp = closure_7();
  let obj = NicknameUtilsDefault;
  let nickname = obj.getNickname(guildId, undefined, user);
  if (nickname == null) {
    nickname = tmp2(4404).getGlobalName(user);
    const tmp2Result = tmp2(4404);
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
  obj = { style: { height: height.contentHeight }, children: null };
  const items = [hasOwnProperty(DiscordTagDefault, { user, nick: nickname })];
  if (hasAvatarForGuildResult) {
    obj = { style: tmp.mainIdentity, children: null };
    let tmp8Result = null;
    if (hasAvatarForGuildResult) {
      const obj1 = { size: native.AvatarSizes.SIZE_16, style: tmp.primaryAvatar, user, guildId: "Array" };
      tmp8Result = tmp8(native.Avatar, obj1);
    }
    const items1 = [tmp8Result];
    const obj2 = { user, usernameStyle: tmp.mainTag, hideBotTag: true };
    items1[1] = tmp8(tmp2(9803), obj2);
    obj.children = items1;
    let tmp6Result = tmp6(tmp7, obj);
  } else {
    tmp6Result = null;
  }
  items[1] = tmp6Result;
  obj.children = items;
  return timestampProducer(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx");

export default noop.memo(function DetailedGuildIdentityUserRow(arrow) {
  ({ accessibilityLabel, contentHeight, deprecatedFormRow } = arrow);
  if (deprecatedFormRow === undefined) {
    deprecatedFormRow = false;
  }
  ({
    disabled,
    guildId,
    leading,
    onPress,
    trailing,
    userId: require,
    subLabel,
    accessibilityRole,
    accessibilityState,
  } = arrow);
  let SMALL = dependencyMap;
  ({ end, start } = arrow);
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(require));
  if (null == stateFromStores) {
    return null;
  } else if (deprecatedFormRow) {
    obj = {
      accessibilityLabel,
      disabled,
      leading: null,
      label: null,
      onPress: null,
      subLabel: null,
      trailing: null,
      accessibilityRole: null,
      accessibilityState: null,
    };
    if (leading == null) {
      disabled = { source: stateFromStores.getAvatarSource(guildId), size: null };
      SMALL = tmp(1178).AvatarSizes.SMALL;
      disabled.size = SMALL;
      leading = tmp2(tmp(1178).Avatar, disabled);
    }
    obj.leading = leading;
    leading = closure_8;
    obj = { contentHeight, user: stateFromStores, guildId };
    obj.label = tmp2(closure_8, obj);
    obj.onPress = onPress;
    obj.subLabel = subLabel;
    obj.trailing = trailing;
    obj.accessibilityRole = accessibilityRole;
    obj.accessibilityState = accessibilityState;
    let tmp2Result = tmp2(tmp(8593).FormRow, obj);
  } else {
    const obj1 = {
      accessibilityLabel,
      arrow: arrow.arrow,
      disabled,
      end,
      icon: null,
      label: null,
      onPress: null,
      start: null,
      subLabel: null,
      trailing: null,
      accessibilityRole: null,
      accessibilityState: null,
    };
    tmp2Result = leading;
    if (leading == null) {
      const obj2 = { source: stateFromStores.getAvatarSource(guildId), size: tmp(1178).AvatarSizes.SMALL };
      tmp2Result = tmp2(tmp(1178).Avatar, obj2);
    }
    obj1.icon = tmp2Result;
    const obj3 = { contentHeight, user: stateFromStores, guildId };
    obj1.label = tmp2(closure_8, obj3);
    obj1.onPress = onPress;
    obj1.start = start;
    obj1.subLabel = subLabel;
    obj1.trailing = trailing;
    obj1.accessibilityRole = accessibilityRole;
    obj1.accessibilityState = accessibilityState;
    tmp2Result = tmp2(tmp(5605).TableRow, obj1);
  }
});
export const DetailedGuildIdentityUser = memoResult;
