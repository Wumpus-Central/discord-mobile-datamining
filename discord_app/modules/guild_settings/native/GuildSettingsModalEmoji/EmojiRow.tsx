// === Module 18080: GuildSettingsModalEmoji/EmojiRow ===

// Module 18080 (GuildSettingsModalEmoji/EmojiRow)
import nativeDefault from "native" /* 576 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4480 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5256 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10677 */;
import showEmojiOverflowActionSheetDefault from "showEmojiOverflowActionSheet" /* 18081 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2064 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { flex: { flex: 1 }, flexCenterRow: { flexDirection: "row", alignItems: "center" }, nameContainer: { paddingVertical: 4, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" }, activeNameContainer: null, usernameContainer: null, emojiText: null, colon: null, username: null, emojiImage: null, overflowIcon: null };
let PlatformUtils = fn(1364);
let num = 4;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
let obj3 = { paddingVertical: 4, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
obj2.activeNameContainer = { padding: num, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
obj2.usernameContainer = { marginRight: 8, maxWidth: 150, flexShrink: 1 };
PlatformUtils = fn(1364);
let num2;
if (PlatformUtils.isAndroid()) {
  num2 = 0;
}
let obj5 = { padding: num, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
obj2.emojiText = { fontSize: 16, padding: num2, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.colon = { width: 4 };
let obj7 = { fontSize: 16, padding: num2, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.username = { fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
obj2.emojiImage = { width: 30, height: 30, resizeMode: "contain" };
let obj8 = { fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
obj2.overflowIcon = { paddingLeft: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", height: "100%" };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export const EmojiRow = function EmojiRow(guildId) {
  guildId = guildId.guildId;
  const emoji = guildId.emoji;
  let flag = guildId.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onSelectRolesForEmoji = guildId.onSelectRolesForEmoji;
  let children;
  noop = undefined;
  ({ start, end } = guildId);
  const tmp = closure_12();
  const tmp2 = children(noop.useState(emoji.name), 2);
  children = tmp2[0];
  noop = tmp2[1];
  const tmp4 = children(noop.useState(false), 2);
  closure_5 = tmp4[1];
  const items = [GuildStore];
  const stateFromStores = guildId(onSelectRolesForEmoji[9]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj = guildId(onSelectRolesForEmoji[9]);
  const items1 = [UserStore];
  const items2 = [emoji.user];
  const stateFromStores1 = guildId(onSelectRolesForEmoji[9]).useStateFromStores(items1, () => {
    let user = UserStore.getUser(emoji.user.id);
    if (user == null) {
      user = emoji.user;
    }
    return user;
  }, items2);
  let obj2 = guildId(onSelectRolesForEmoji[9]);
  const items3 = [guildId, emoji, onSelectRolesForEmoji];
  const result = guildId(onSelectRolesForEmoji[10]).useManageResourcePermissions(stateFromStores).canManageGuildExpression(emoji);
  const onPress = noop.useCallback(() => {
    showEmojiOverflowActionSheetDefault({
      guildId,
      emoji,
      onEdit() {
        closure_1_5(true);
      },
      onSelectRolesForEmoji
    });
  }, items3);
  const items4 = [onPress];
  const items5 = [onPress];
  const callback1 = noop.useCallback(() => {
    if (obj.getIsScreenReaderEnabled()) {
      callback();
    } else {
      closure_5(true);
    }
    obj = useIsScreenReaderEnabled;
  }, items4);
  const callback2 = noop.useCallback(() => {
    callback();
  }, items5);
  const obj4 = { icon: null, trailing: null, label: null, disabled: null, onPress: null, onLongPress: null, start: null, end: null };
  const obj5 = {
    onPress() {
      const obj2 = { key: "EMOJI_DISABLED", content: null };
      const intl = guildId(onSelectRolesForEmoji[19]).intl;
      obj2.content = intl.string(guildId(onSelectRolesForEmoji[19]).t.KUzI73);
      emoji(onSelectRolesForEmoji[18]).open(obj2);
    },
    disabled: emoji.available,
    children: null
  };
  const obj6 = { style: tmp.emojiImage, source: null };
  const obj7 = { uri: null };
  let obj3 = guildId(onSelectRolesForEmoji[10]);
  obj7.uri = emoji(onSelectRolesForEmoji[20]).getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj6.source = obj7;
  obj5.children = closure_10(onPress, obj6);
  obj4.icon = closure_10(closure_7, obj5);
  const obj8 = emoji(onSelectRolesForEmoji[20]);
  const obj9 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const nickname = emoji(onSelectRolesForEmoji[21]).getNickname(guildId, undefined, stateFromStores1);
  const obj11 = { style: tmp.flexCenterRow, children: null };
  const obj12 = { style: tmp.usernameContainer, children: null };
  let tmp13Result = null;
  if (null != nickname) {
    const obj13 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp13Result = closure_10(tmp5(tmp6[16]).LegacyText, obj13);
  }
  const items6 = [tmp13Result, ];
  const obj14 = { numberOfLines: 1, style: tmp.username, children: null };
  const obj10 = emoji(onSelectRolesForEmoji[21]);
  obj14.children = emoji(onSelectRolesForEmoji[22]).getUserTag(stateFromStores1);
  items6[1] = closure_10(guildId(onSelectRolesForEmoji[16]).LegacyText, obj14);
  obj12.children = items6;
  const items7 = [closure_11(closure_5, obj12), , ];
  const tmp14Result = emoji(onSelectRolesForEmoji[22]);
  items7[1] = closure_10(guildId(onSelectRolesForEmoji[16]).Avatar, { user: stateFromStores1, guildId, size: guildId(onSelectRolesForEmoji[16]).AvatarSizes.XSMALL });
  let tmp13Result3 = null;
  if (!flag) {
    const obj16 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: null };
    const obj17 = { source: tmp14(tmp6[24]), size: tmp5(tmp6[16]).IconSizes.REFRESH_SMALL_16 };
    obj16.children = closure_10(tmp5(tmp6[16]).Icon, obj17);
    tmp13Result3 = closure_10(tmp5(tmp6[23]).PressableOpacity, obj16);
  }
  items7[2] = tmp13Result3;
  obj11.children = items7;
  obj4.trailing = closure_11(closure_5, obj11);
  if (tmp4[0]) {
    if (result) {
      const obj18 = { style: tmp.activeNameContainer, children: null };
      function handleNameBlur() {
        if (first !== emoji.name) {
          const obj2 = { guildId, emojiId: tmp2.id, name: null };
          const obj = EmojiActionCreators;
          obj2.name = EmojiUtilsDefault.sanitizeEmojiName(tmp);
          obj.updateEmoji(obj2);
        }
        closure_5(false);
      }
      function updateName(arg0) {
        closure_4(arg0);
      }
      const obj19 = { autoCorrect: false, numberOfLines: 1, returnKeyType: "done", autoCapitalize: "none", autoFocus: true, onBlur: handleNameBlur, style: null, onChangeText: null, value: null };
      const items8 = [, ];
      ({ emojiText: arr10[0], flex: arr10[1] } = tmp);
      obj19.style = items8;
      obj19.onChangeText = updateName;
      obj19.value = children;
      obj18.children = closure_10(tmp5(tmp6[16]).TextInput, obj19);
      let tmp13Result4 = closure_10(tmp17, obj18);
    }
    obj4.label = tmp13Result4;
    obj4.disabled = flag;
    obj4.onPress = callback1;
    obj4.onLongPress = callback2;
    obj4.start = start;
    obj4.end = end;
    return closure_10(guildId(onSelectRolesForEmoji[17]).TableRow, obj4);
  }
  const obj20 = { style: tmp.nameContainer, children: null };
  const items9 = [closure_10(guildId(onSelectRolesForEmoji[15]).Text, { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" }), closure_10(guildId(onSelectRolesForEmoji[15]).Text, { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children }), closure_10(guildId(onSelectRolesForEmoji[15]).Text, { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" })];
  obj20.children = items9;
  tmp13Result4 = closure_11(tmp17, obj20);
  const obj15 = { user: stateFromStores1, guildId, size: guildId(onSelectRolesForEmoji[16]).AvatarSizes.XSMALL };
  const obj21 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  const obj22 = { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children };
  const obj23 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
};