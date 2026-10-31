// === Module 19726: GuildSettingsModalEmoji/EmojiRow ===

// Module 19726 (GuildSettingsModalEmoji/EmojiRow)
import nativeDefault from "native" /* 575 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4964 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5274 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10057 */;
import showEmojiOverflowActionSheetDefault from "showEmojiOverflowActionSheet" /* 19727 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { flex: { flex: 1 }, flexCenterRow: { flexDirection: "row", alignItems: "center" }, nameContainer: { paddingVertical: 4, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" }, activeNameContainer: null, usernameContainer: null, emojiText: null, colon: null, username: null, emojiImage: null, overflowIcon: null };
let PlatformUtils = fn(1375);
let num = 4;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
let obj3 = { paddingVertical: 4, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
obj2.activeNameContainer = { padding: num, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
obj2.usernameContainer = { marginRight: 8, maxWidth: 150, flexShrink: 1 };
PlatformUtils = fn(1375);
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
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export function EmojiRow(guildId) {
  guildId = guildId.guildId;
  const emoji = guildId.emoji;
  let flag = guildId.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onSelectRolesForEmoji = guildId.onSelectRolesForEmoji;
  let children;
  ({ start, end } = guildId);
  const tmp = closure_11();
  const items = [emoji.id];
  const tmp4 = children(guildId(onSelectRolesForEmoji[9]).useRecyclingState(emoji.name, items), 2);
  children = tmp4[0];
  noop = tmp4[1];
  let obj = guildId(onSelectRolesForEmoji[9]);
  const items1 = [emoji.id];
  const tmp6 = children(guildId(onSelectRolesForEmoji[9]).useRecyclingState(false, items1), 2);
  closure_5 = tmp7;
  let obj2 = guildId(onSelectRolesForEmoji[9]);
  const items2 = [GuildStore];
  const stateFromStores = guildId(onSelectRolesForEmoji[10]).useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  let obj3 = guildId(onSelectRolesForEmoji[10]);
  const items3 = [UserStore];
  const items4 = [emoji.user];
  const stateFromStores1 = guildId(onSelectRolesForEmoji[10]).useStateFromStores(items3, () => {
    let user = UserStore.getUser(emoji.user.id);
    if (user == null) {
      user = emoji.user;
    }
    return user;
  }, items4);
  const obj4 = guildId(onSelectRolesForEmoji[10]);
  const items5 = [guildId, emoji, onSelectRolesForEmoji, tmp6[1]];
  const result = guildId(onSelectRolesForEmoji[11]).useManageResourcePermissions(stateFromStores).canManageGuildExpression(emoji);
  const onPress = noop.useCallback(() => {
    showEmojiOverflowActionSheetDefault({
      guildId,
      emoji,
      onEdit() {
        closure_1_5(true);
      },
      onSelectRolesForEmoji
    });
  }, items5);
  const items6 = [onPress, tmp6[1]];
  const items7 = [onPress];
  const callback1 = noop.useCallback(() => {
    if (obj.getIsScreenReaderEnabled()) {
      callback();
    } else {
      closure_5(true);
    }
    obj = useIsScreenReaderEnabled;
  }, items6);
  const callback2 = noop.useCallback(() => {
    callback();
  }, items7);
  const obj6 = { icon: null, trailing: null, label: null, disabled: null, onPress: null, onLongPress: null, start: null, end: null };
  const obj7 = {
    onPress() {
      const obj2 = { text: null };
      const intl = guildId(onSelectRolesForEmoji[20]).intl;
      obj2.text = intl.string(guildId(onSelectRolesForEmoji[20]).t.KUzI73);
      emoji(onSelectRolesForEmoji[19]).open("EMOJI_DISABLED", obj2);
    },
    disabled: emoji.available,
    children: null
  };
  const obj8 = { style: tmp.emojiImage, source: null };
  const obj9 = { uri: null };
  const obj5 = guildId(onSelectRolesForEmoji[11]);
  const tmp16 = emoji(onSelectRolesForEmoji[21]);
  obj9.uri = emoji(onSelectRolesForEmoji[22]).getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj8.source = obj9;
  obj7.children = closure_9(tmp16, obj8);
  obj6.icon = closure_9(onPress, obj7);
  const obj10 = emoji(onSelectRolesForEmoji[22]);
  const obj11 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const nickname = emoji(onSelectRolesForEmoji[23]).getNickname(guildId, undefined, stateFromStores1);
  const obj13 = { style: tmp.flexCenterRow, children: null };
  const obj14 = { style: tmp.usernameContainer, children: null };
  let tmp14Result = null;
  if (null != nickname) {
    const obj15 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp14Result = closure_9(tmp2(tmp3[17]).LegacyText, obj15);
  }
  const items8 = [tmp14Result, ];
  const obj16 = { numberOfLines: 1, style: tmp.username, children: null };
  const obj12 = emoji(onSelectRolesForEmoji[23]);
  obj16.children = emoji(onSelectRolesForEmoji[24]).getUserTag(stateFromStores1);
  items8[1] = closure_9(guildId(onSelectRolesForEmoji[17]).LegacyText, obj16);
  obj14.children = items8;
  const items9 = [closure_10(closure_5, obj14), , ];
  const tmp15Result = emoji(onSelectRolesForEmoji[24]);
  items9[1] = closure_9(guildId(onSelectRolesForEmoji[17]).Avatar, { user: stateFromStores1, guildId, size: guildId(onSelectRolesForEmoji[17]).AvatarSizes.XSMALL });
  let tmp14Result3 = null;
  if (!flag) {
    const obj18 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: null };
    const obj19 = { source: tmp15(tmp3[26]), size: tmp2(tmp3[17]).IconSizes.REFRESH_SMALL_16 };
    obj18.children = closure_9(tmp2(tmp3[17]).Icon, obj19);
    tmp14Result3 = closure_9(tmp2(tmp3[25]).PressableOpacity, obj18);
  }
  items9[2] = tmp14Result3;
  obj13.children = items9;
  obj6.trailing = closure_10(closure_5, obj13);
  if (tmp6[0]) {
    if (result) {
      const obj20 = { style: tmp.activeNameContainer, children: null };
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
      const obj21 = { autoCorrect: false, numberOfLines: 1, returnKeyType: "done", autoCapitalize: "none", autoFocus: true, onBlur: handleNameBlur, style: null, onChangeText: null, value: null };
      const items10 = [, ];
      ({ emojiText: arr12[0], flex: arr12[1] } = tmp);
      obj21.style = items10;
      obj21.onChangeText = updateName;
      obj21.value = children;
      obj20.children = closure_9(tmp2(tmp3[17]).TextInput, obj21);
      let tmp14Result4 = closure_9(tmp19, obj20);
    }
    obj6.label = tmp14Result4;
    obj6.disabled = flag;
    obj6.onPress = callback1;
    obj6.onLongPress = callback2;
    obj6.start = start;
    obj6.end = end;
    return closure_9(guildId(onSelectRolesForEmoji[18]).TableRow, obj6);
  }
  const obj22 = { style: tmp.nameContainer, children: null };
  const items11 = [closure_9(guildId(onSelectRolesForEmoji[16]).Text, { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" }), closure_9(guildId(onSelectRolesForEmoji[16]).Text, { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children }), closure_9(guildId(onSelectRolesForEmoji[16]).Text, { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" })];
  obj22.children = items11;
  tmp14Result4 = closure_10(tmp19, obj22);
  const obj17 = { user: stateFromStores1, guildId, size: guildId(onSelectRolesForEmoji[17]).AvatarSizes.XSMALL };
  const obj23 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  const obj24 = { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children };
  const obj25 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
}