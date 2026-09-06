// === Module 17564: GuildSettingsModalEmoji/EmojiRow ===

// Module 17564 (GuildSettingsModalEmoji/EmojiRow)
import nativeDefault from "native" /* 576 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4217 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10336 */;
import showEmojiOverflowActionSheetDefault from "showEmojiOverflowActionSheet" /* 17565 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, flexCenterRow: { flexDirection: "row", alignItems: "center" }, nameContainer: null, activeNameContainer: null, usernameContainer: null, emojiText: null, colon: null, username: null, emojiImage: null, overflowIcon: null };
createStyles = { paddingVertical: 4, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
createStyles.nameContainer = createStyles;
let PlatformUtils = fn(1115);
let num = 4;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
createStyles.activeNameContainer = { padding: num, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
createStyles.usernameContainer = { marginRight: 8, maxWidth: 150, flexShrink: 1 };
PlatformUtils = fn(1115);
let num2;
if (PlatformUtils.isAndroid()) {
  num2 = 0;
}
let obj1 = { padding: num, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
createStyles.emojiText = { fontSize: 16, padding: num2, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.colon = { width: 4 };
PlatformUtils = { fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
createStyles.username = PlatformUtils;
createStyles.emojiImage = { width: 30, height: 30, resizeMode: "contain" };
let obj2 = { fontSize: 16, padding: num2, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.overflowIcon = { paddingLeft: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", height: "100%" };
let closure_11 = createStyles.createStyles(createStyles);
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
  const tmp = closure_11();
  const tmp2 = children(noop.useState(emoji.name), 2);
  children = tmp2[0];
  noop = tmp2[1];
  const tmp4 = children(noop.useState(false), 2);
  closure_5 = tmp4[1];
  let obj = guildId(onSelectRolesForEmoji[8]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj1 = guildId(onSelectRolesForEmoji[9]);
  const items1 = [guildId, emoji, onSelectRolesForEmoji];
  const result = obj1.useManageResourcePermissions(stateFromStores).canManageGuildExpression(emoji);
  const onPress = noop.useCallback(() => {
    showEmojiOverflowActionSheetDefault({
      guildId,
      emoji,
      onEdit() {
        closure_1_5(true);
      },
      onSelectRolesForEmoji
    });
  }, items1);
  const items2 = [onPress];
  const items3 = [onPress];
  const callback1 = noop.useCallback(() => {
    if (obj.getIsScreenReaderEnabled()) {
      callback();
    } else {
      closure_5(true);
    }
  }, items2);
  const callback2 = noop.useCallback(() => {
    callback();
  }, items3);
  obj = { icon: null, trailing: null, label: null, disabled: null, onPress: null, onLongPress: null, start: null, end: null };
  obj = {
    onPress() {
      emoji(onSelectRolesForEmoji[17]);
      const obj = { key: "EMOJI_DISABLED", content: null };
      const intl = guildId(onSelectRolesForEmoji[18]).intl;
      obj.content = intl.string(guildId(onSelectRolesForEmoji[18]).t.KUzI73);
      obj.open(obj);
    },
    disabled: emoji.available,
    children: null
  };
  obj1 = { style: tmp.emojiImage, source: null };
  const obj2 = { uri: null };
  let obj6 = emoji(onSelectRolesForEmoji[19]);
  obj2.uri = obj6.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj1.source = obj2;
  obj.children = closure_9(onPress, obj1);
  obj.icon = closure_9(closure_7, obj);
  let obj8 = emoji(onSelectRolesForEmoji[20]);
  const nickname = obj8.getNickname(guildId, undefined, emoji.user);
  const obj4 = { style: tmp.flexCenterRow, children: null };
  const obj5 = { style: tmp.usernameContainer, children: null };
  let tmp12Result = null;
  if (null != nickname) {
    obj6 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp12Result = tmp12(tmp5(tmp6[15]).LegacyText, obj6);
  }
  const items4 = [tmp12Result, ];
  const obj7 = { numberOfLines: 1, style: tmp.username, children: emoji(onSelectRolesForEmoji[21]).getUserTag(emoji.user) };
  items4[1] = closure_9(guildId(onSelectRolesForEmoji[15]).LegacyText, obj7);
  obj5.children = items4;
  const items5 = [closure_10(closure_5, obj5), , ];
  obj8 = { user: emoji.user, guildId, size: tmp5(tmp6[15]).AvatarSizes.XSMALL };
  items5[1] = closure_9(guildId(onSelectRolesForEmoji[15]).Avatar, obj8);
  tmp12Result = null;
  if (!flag) {
    const obj9 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: null };
    const obj10 = { source: tmp13(tmp6[23]), size: tmp5(tmp6[15]).IconSizes.REFRESH_SMALL_16 };
    obj9.children = tmp12(tmp5(tmp6[15]).Icon, obj10);
    tmp12Result = tmp12(tmp5(tmp6[22]).PressableOpacity, obj9);
  }
  items5[2] = tmp12Result;
  obj4.children = items5;
  obj.trailing = closure_10(closure_5, obj4);
  if (tmp4[0]) {
    if (result) {
      const obj11 = { style: tmp.activeNameContainer, children: null };
      function handleNameBlur() {
        if (first !== emoji.name) {
          const obj = { guildId, emojiId: tmp2.id, name: EmojiUtilsDefault.sanitizeEmojiName(tmp) };
          obj.updateEmoji(obj);
        }
        closure_5(false);
      }
      function updateName(arg0) {
        closure_4(arg0);
      }
      const obj12 = { autoCorrect: false, numberOfLines: 1, returnKeyType: "done", autoCapitalize: "none", autoFocus: true, onBlur: handleNameBlur, style: null, onChangeText: null, value: null };
      const items6 = [, ];
      ({ emojiText: arr8[0], flex: arr8[1] } = tmp);
      obj12.style = items6;
      obj12.onChangeText = updateName;
      obj12.value = children;
      obj11.children = tmp12(tmp5(tmp6[15]).TextInput, obj12);
      let tmp12Result1 = tmp12(tmp16, obj11);
    }
    obj.label = tmp12Result1;
    obj.disabled = flag;
    obj.onPress = callback1;
    obj.onLongPress = callback2;
    obj.start = start;
    obj.end = end;
    return tmp12(guildId(onSelectRolesForEmoji[16]).TableRow, obj);
  }
  const obj13 = { style: tmp.nameContainer, children: null };
  const items7 = [closure_9(guildId(onSelectRolesForEmoji[14]).Text, { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" }), closure_9(guildId(onSelectRolesForEmoji[14]).Text, { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children }), closure_9(guildId(onSelectRolesForEmoji[14]).Text, { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" })];
  obj13.children = items7;
  tmp12Result1 = tmp15(tmp16, obj13);
};