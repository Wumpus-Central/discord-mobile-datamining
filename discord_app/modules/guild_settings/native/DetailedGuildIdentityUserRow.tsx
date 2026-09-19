// === Module 11206: DetailedGuildIdentityUserRow ===

// Module 11206 (DetailedGuildIdentityUserRow)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4908 */;
import TableRow from "TableRow" /* 5817 */;
import Form from "Form" /* 8870 */;
import DiscordTagDefault from "DiscordTag" /* 9900 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj = { mainIdentity: { flexDirection: "row", alignItems: "center" }, primaryAvatar: { marginRight: nativeDefault.space.PX_4 }, mainTag: null };
let obj3 = { marginRight: nativeDefault.space.PX_4 };
obj.mainTag = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
let closure_7 = createStyles.createStyles(obj);
const memoResult = noop.memo((height) => {
  ({ guildId, user } = height);
  const tmp = closure_7();
  let nickname = NicknameUtilsDefault.getNickname(guildId, undefined, user);
  if (nickname == null) {
    nickname = UserUtilsDefault.getGlobalName(user);
    const tmp2Result = UserUtilsDefault;
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
  const obj2 = { style: { height: height.contentHeight }, children: null };
  const items = [hasOwnProperty(DiscordTagDefault, { user, nick: nickname }), ];
  if (hasAvatarForGuildResult) {
    const obj3 = { style: tmp.mainIdentity, children: null };
    let tmp8Result = null;
    if (hasAvatarForGuildResult) {
      const obj4 = { size: native.AvatarSizes.SIZE_16, style: tmp.primaryAvatar, user, guildId: "a" };
      tmp8Result = hasOwnProperty(native.Avatar, obj4);
    }
    const items1 = [tmp8Result, ];
    const obj5 = { user, usernameStyle: tmp.mainTag, hideBotTag: true };
    items1[1] = hasOwnProperty(DiscordTagDefault, obj5);
    obj3.children = items1;
    let tmp6Result = timestampProducer(View, obj3);
  } else {
    tmp6Result = null;
  }
  items[1] = tmp6Result;
  obj2.children = items;
  return timestampProducer(View, obj2);
});
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx");

export default noop.memo(function DetailedGuildIdentityUserRow(arrow) {
  ({ accessibilityLabel, contentHeight, deprecatedFormRow } = arrow);
  if (deprecatedFormRow === undefined) {
    deprecatedFormRow = false;
  }
  ({ disabled, guildId, leading, onPress, trailing, userId: require, subLabel, accessibilityRole, accessibilityState } = arrow);
  let SMALL = dependencyMap;
  ({ end, start } = arrow);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => UserStore.getUser(require));
  if (null == stateFromStores) {
    return null;
  } else if (deprecatedFormRow) {
    const obj2 = { accessibilityLabel, disabled, leading: null, label: null, onPress: null, subLabel: null, trailing: null, accessibilityRole: null, accessibilityState: null };
    if (leading == null) {
      disabled = { source: stateFromStores.getAvatarSource(guildId), size: null };
      SMALL = native.AvatarSizes.SMALL;
      disabled.size = SMALL;
      leading = closure_5(native.Avatar, disabled);
    }
    obj2.leading = leading;
    leading = closure_8;
    const obj3 = { contentHeight, user: stateFromStores, guildId };
    obj2.label = closure_5(closure_8, obj3);
    obj2.onPress = onPress;
    obj2.subLabel = subLabel;
    obj2.trailing = trailing;
    obj2.accessibilityRole = accessibilityRole;
    obj2.accessibilityState = accessibilityState;
    let tmp2Result = closure_5(Form.FormRow, obj2);
  } else {
    const obj4 = { accessibilityLabel, arrow: arrow.arrow, disabled, end, icon: null, label: null, onPress: null, start: null, subLabel: null, trailing: null, accessibilityRole: null, accessibilityState: null };
    let tmp2Result2 = leading;
    if (leading == null) {
      const obj5 = { source: stateFromStores.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
      tmp2Result2 = closure_5(native.Avatar, obj5);
    }
    obj4.icon = tmp2Result2;
    const obj6 = { contentHeight, user: stateFromStores, guildId };
    obj4.label = closure_5(closure_8, obj6);
    obj4.onPress = onPress;
    obj4.start = start;
    obj4.subLabel = subLabel;
    obj4.trailing = trailing;
    obj4.accessibilityRole = accessibilityRole;
    obj4.accessibilityState = accessibilityState;
    tmp2Result = closure_5(TableRow.TableRow, obj4);
  }
});
export const DetailedGuildIdentityUser = memoResult;