// discord_app/modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import EmojiActionCreators from "../../../../actions/EmojiActionCreators.tsx";
import showEmojiOverflowActionSheetDefault from "../showEmojiOverflowActionSheet.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  flex: { flex: 1 },
  flexCenterRow: { flexDirection: "row", alignItems: "center" },
  nameContainer: {
    paddingVertical: 4,
    borderRadius: nativeDefault.radii.xs,
    alignItems: "center",
    flexDirection: "row",
  },
  activeNameContainer: null,
  usernameContainer: null,
  emojiText: null,
  colon: null,
  username: null,
  emojiImage: null,
  overflowIcon: null,
};
let PlatformUtils = fn(1364);
let num = 4;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
let obj3 = { paddingVertical: 4, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
obj2.activeNameContainer = {
  padding: num,
  borderRadius: nativeDefault.radii.xs,
  alignItems: "center",
  flexDirection: "row",
};
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
obj2.overflowIcon = {
  paddingLeft: nativeDefault.space.PX_8,
  alignItems: "center",
  flexDirection: "row",
  height: "100%",
};
let closure_11 = createStyles.createStyles(obj2);
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
  const items = [GuildStore];
  const stateFromStores = guildId(onSelectRolesForEmoji[8]).useStateFromStores(items, () =>
    GuildStore.getGuild(guildId),
  );
  let obj = guildId(onSelectRolesForEmoji[8]);
  const items1 = [guildId, emoji, onSelectRolesForEmoji];
  const result = guildId(onSelectRolesForEmoji[9])
    .useManageResourcePermissions(stateFromStores)
    .canManageGuildExpression(emoji);
  const onPress = noop.useCallback(() => {
    showEmojiOverflowActionSheetDefault({
      guildId,
      emoji,
      onEdit() {
        closure_1_5(true);
      },
      onSelectRolesForEmoji,
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
    obj = useIsScreenReaderEnabled;
  }, items2);
  const callback2 = noop.useCallback(() => {
    callback();
  }, items3);
  let obj3 = {
    icon: null,
    trailing: null,
    label: null,
    disabled: null,
    onPress: null,
    onLongPress: null,
    start: null,
    end: null,
  };
  const obj4 = {
    onPress() {
      const obj2 = { key: "EMOJI_DISABLED", content: null };
      const intl = guildId(onSelectRolesForEmoji[18]).intl;
      obj2.content = intl.string(guildId(onSelectRolesForEmoji[18]).t.KUzI73);
      emoji(onSelectRolesForEmoji[17]).open(obj2);
    },
    disabled: emoji.available,
    children: null,
  };
  const obj5 = { style: tmp.emojiImage, source: null };
  const obj6 = { uri: null };
  let obj2 = guildId(onSelectRolesForEmoji[9]);
  obj6.uri = emoji(onSelectRolesForEmoji[19]).getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj5.source = obj6;
  obj4.children = closure_9(onPress, obj5);
  obj3.icon = closure_9(closure_7, obj4);
  const obj7 = emoji(onSelectRolesForEmoji[19]);
  const obj8 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const nickname = emoji(onSelectRolesForEmoji[20]).getNickname(guildId, undefined, emoji.user);
  const obj10 = { style: tmp.flexCenterRow, children: null };
  const obj11 = { style: tmp.usernameContainer, children: null };
  let tmp12Result = null;
  if (null != nickname) {
    const obj12 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp12Result = closure_9(tmp5(tmp6[15]).LegacyText, obj12);
  }
  const items4 = [tmp12Result];
  const obj13 = { numberOfLines: 1, style: tmp.username, children: null };
  const obj9 = emoji(onSelectRolesForEmoji[20]);
  obj13.children = emoji(onSelectRolesForEmoji[21]).getUserTag(emoji.user);
  items4[1] = closure_9(guildId(onSelectRolesForEmoji[15]).LegacyText, obj13);
  obj11.children = items4;
  const items5 = [closure_10(closure_5, obj11), ,];
  const tmp13Result = emoji(onSelectRolesForEmoji[21]);
  items5[1] = closure_9(guildId(onSelectRolesForEmoji[15]).Avatar, {
    user: emoji.user,
    guildId,
    size: guildId(onSelectRolesForEmoji[15]).AvatarSizes.XSMALL,
  });
  let tmp12Result3 = null;
  if (!flag) {
    const obj15 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: null };
    const obj16 = { source: tmp13(tmp6[23]), size: tmp5(tmp6[15]).IconSizes.REFRESH_SMALL_16 };
    obj15.children = closure_9(tmp5(tmp6[15]).Icon, obj16);
    tmp12Result3 = closure_9(tmp5(tmp6[22]).PressableOpacity, obj15);
  }
  items5[2] = tmp12Result3;
  obj10.children = items5;
  obj3.trailing = closure_10(closure_5, obj10);
  if (tmp4[0]) {
    if (result) {
      const obj17 = { style: tmp.activeNameContainer, children: null };
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
      const obj18 = {
        autoCorrect: false,
        numberOfLines: 1,
        returnKeyType: "done",
        autoCapitalize: "none",
        autoFocus: true,
        onBlur: handleNameBlur,
        style: null,
        onChangeText: null,
        value: null,
      };
      const items6 = [,];
      ({ emojiText: arr8[0], flex: arr8[1] } = tmp);
      obj18.style = items6;
      obj18.onChangeText = updateName;
      obj18.value = children;
      obj17.children = closure_9(tmp5(tmp6[15]).TextInput, obj18);
      let tmp12Result4 = closure_9(tmp16, obj17);
    }
    obj3.label = tmp12Result4;
    obj3.disabled = flag;
    obj3.onPress = callback1;
    obj3.onLongPress = callback2;
    obj3.start = start;
    obj3.end = end;
    return closure_9(guildId(onSelectRolesForEmoji[16]).TableRow, obj3);
  }
  const obj19 = { style: tmp.nameContainer, children: null };
  const items7 = [
    closure_9(guildId(onSelectRolesForEmoji[14]).Text, {
      style: tmp.colon,
      variant: "text-md/medium",
      color: "text-muted",
      children: ":",
    }),
    closure_9(guildId(onSelectRolesForEmoji[14]).Text, {
      lineClamp: 1,
      style: tmp.emojiText,
      variant: "text-md/medium",
      color: "mobile-text-heading-primary",
      children,
    }),
    closure_9(guildId(onSelectRolesForEmoji[14]).Text, {
      style: tmp.colon,
      variant: "text-md/medium",
      color: "text-muted",
      children: ":",
    }),
  ];
  obj19.children = items7;
  tmp12Result4 = closure_10(tmp16, obj19);
  const obj14 = { user: emoji.user, guildId, size: guildId(onSelectRolesForEmoji[15]).AvatarSizes.XSMALL };
  const obj20 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  const obj21 = {
    lineClamp: 1,
    style: tmp.emojiText,
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    children,
  };
  const obj22 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
};
