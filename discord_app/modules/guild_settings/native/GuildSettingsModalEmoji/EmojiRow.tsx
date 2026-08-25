// === Module 16910: EmojiRow ===

// Module 16910 (EmojiRow)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import set from "set" /* 500 */;

const require = arg1;
({ View: c5, Image: closure_6, Pressable: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, flexCenterRow: { flexDirection: "row", alignItems: "center" }, nameContainer: null, activeNameContainer: null, usernameContainer: null, emojiText: null, colon: null, username: null, emojiImage: null, overflowIcon: null };
createCacheKey = { paddingVertical: 4, borderRadius: ThemesDefault.radii.xs, alignItems: "center", flexDirection: "row" };
createCacheKey[2] = createCacheKey;
let num = 4;
if (set.isAndroid()) {
  num = 0;
}
createCacheKey[3] = { padding: num, borderRadius: ThemesDefault.radii.xs, alignItems: "center", flexDirection: "row" };
createCacheKey[4] = { marginRight: 8, maxWidth: 150, flexShrink: 1 };
let num2;
if (set.isAndroid()) {
  num2 = 0;
}
let obj1 = { padding: num, borderRadius: ThemesDefault.radii.xs, alignItems: "center", flexDirection: "row" };
createCacheKey[5] = { fontSize: 16, padding: num2, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[6] = { width: 4 };
set = { fontSize: 13, color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[7] = set;
createCacheKey[8] = { width: 30, height: 30, resizeMode: "contain" };
let obj2 = { fontSize: 16, padding: num2, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[9] = { paddingLeft: ThemesDefault.space.PX_8, alignItems: "center", flexDirection: "row", height: "100%" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export const EmojiRow = function EmojiRow(guildId) {
  guildId = guildId.guildId;
  const emoji = guildId.emoji;
  let flag = guildId.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onSelectRolesForEmoji = guildId.onSelectRolesForEmoji;
  let first;
  let React;
  closure_5 = undefined;
  let callback;
  ({ start, end } = guildId);
  const tmp = callback2();
  const tmp2 = first(React.useState(emoji.name), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp4 = first(React.useState(false), 2);
  closure_5 = tmp4[1];
  let obj = guildId(onSelectRolesForEmoji[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getGuild(guildId));
  obj1 = guildId(onSelectRolesForEmoji[9]);
  const items1 = [guildId, emoji, onSelectRolesForEmoji];
  const result = obj1.useManageResourcePermissions(stateFromStores).canManageGuildExpression(emoji);
  callback = React.useCallback(() => {
    emoji(onSelectRolesForEmoji[12])({
      guildId,
      emoji,
      onEdit() {
        callback(true);
      },
      onSelectRolesForEmoji
    });
  }, items1);
  const items2 = [callback];
  const items3 = [callback];
  const callback1 = React.useCallback(() => {
    if (obj.getIsScreenReaderEnabled()) {
      callback();
    } else {
      callback2(true);
    }
  }, items2);
  callback2 = React.useCallback(() => {
    callback();
  }, items3);
  obj = { icon: null, trailing: null, label: null, disabled: null, onPress: null, onLongPress: null, start: null, end: null };
  obj = {
    onPress() {
      let obj = emoji(onSelectRolesForEmoji[17]);
      obj = { key: "EMOJI_DISABLED", content: null };
      const intl = guildId(onSelectRolesForEmoji[18]).intl;
      obj[1] = intl.string(guildId(onSelectRolesForEmoji[18]).t.KUzI73);
      obj.open(obj);
    },
    disabled: emoji.available,
    children: null
  };
  obj1 = { style: tmp.emojiImage, source: null };
  const obj2 = { uri: null };
  let obj6 = emoji(onSelectRolesForEmoji[19]);
  obj2[0] = obj6.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj1[1] = obj2;
  obj[2] = callback(callback, obj1);
  obj[0] = callback(closure_7, obj);
  let obj8 = emoji(onSelectRolesForEmoji[20]);
  const nickname = obj8.getNickname(guildId, undefined, emoji.user);
  const obj4 = { style: tmp.flexCenterRow, children: null };
  const obj5 = { style: tmp.usernameContainer, children: null };
  let tmp12Result = null;
  if (null != nickname) {
    obj6 = { numberOfLines: 1, style: null, children: null };
    obj6[1] = tmp.username;
    obj6[2] = nickname;
    tmp12Result = tmp12(tmp5(tmp6[15]).LegacyText, obj6);
  }
  const items4 = [tmp12Result, ];
  const obj7 = { numberOfLines: 1, style: tmp.username, children: emoji(onSelectRolesForEmoji[21]).getUserTag(emoji.user) };
  items4[1] = callback(guildId(onSelectRolesForEmoji[15]).LegacyText, obj7);
  obj5[1] = items4;
  const items5 = [closure_10(closure_5, obj5), , ];
  obj8 = { user: emoji.user, guildId, size: tmp5(tmp6[15]).AvatarSizes.XSMALL };
  items5[1] = callback(guildId(onSelectRolesForEmoji[15]).Avatar, obj8);
  tmp12Result = null;
  if (!flag) {
    const obj9 = { style: null, onPress: null, hitSlop: 8, children: null };
    obj9[0] = tmp.overflowIcon;
    obj9[1] = callback;
    const obj10 = { source: null, size: null };
    obj10[0] = tmp13(tmp6[23]);
    obj10[1] = tmp5(tmp6[15]).IconSizes.REFRESH_SMALL_16;
    obj9[3] = tmp12(tmp5(tmp6[15]).Icon, obj10);
    tmp12Result = tmp12(tmp5(tmp6[22]).PressableOpacity, obj9);
  }
  items5[2] = tmp12Result;
  obj4[1] = items5;
  obj[1] = closure_10(closure_5, obj4);
  if (tmp4[0]) {
    if (result) {
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.activeNameContainer;
      function handleNameBlur() {
        if (first !== emoji.name) {
          let obj = guildId(onSelectRolesForEmoji[10]);
          obj = { guildId: null, emojiId: null, name: null };
          obj[0] = guildId;
          obj[1] = tmp2.id;
          obj[2] = emoji(onSelectRolesForEmoji[11]).sanitizeEmojiName(tmp);
          obj.updateEmoji(obj);
          const obj3 = emoji(onSelectRolesForEmoji[11]);
        }
        callback2(false);
      }
      function updateName(arg0) {
        callback(arg0);
      }
      const obj12 = { autoCorrect: false, numberOfLines: 1, returnKeyType: "done", autoCapitalize: "none", autoFocus: true, onBlur: null, style: null, onChangeText: null, value: null };
      obj12[5] = handleNameBlur;
      const items6 = [, ];
      ({ emojiText: arr8[0], flex: arr8[1] } = tmp);
      obj12[6] = items6;
      obj12[7] = updateName;
      obj12[8] = first;
      obj11[1] = tmp12(tmp5(tmp6[15]).TextInput, obj12);
      let tmp12Result1 = tmp12(tmp16, obj11);
    }
    obj[2] = tmp12Result1;
    obj[3] = flag;
    obj[4] = callback1;
    obj[5] = callback2;
    obj[6] = start;
    obj[7] = end;
    return tmp12(guildId(onSelectRolesForEmoji[16]).TableRow, obj);
  }
  const obj13 = { style: tmp.nameContainer, children: null };
  const items7 = [callback(guildId(onSelectRolesForEmoji[14]).Text, { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" }), callback(guildId(onSelectRolesForEmoji[14]).Text, { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: first }), callback(guildId(onSelectRolesForEmoji[14]).Text, { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" })];
  obj13[1] = items7;
  tmp12Result1 = tmp15(tmp16, obj13);
};