// discord_app/modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useIsScreenReaderEnabled from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import EmojiActionCreators from "../../../../actions/EmojiActionCreators.tsx";
import showEmojiOverflowActionSheetDefault from "../showEmojiOverflowActionSheet.tsx";
import _modDef18799 from "../../../../../_runtime/metro/18799__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4945);
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
let PlatformUtils = fn(1384);
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
PlatformUtils = fn(1384);
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
const ReactCompilerGating = fn(558);
let obj9 = { paddingLeft: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", height: "100%" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export const EmojiRow = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiRow(guildId) {
      const cResult = guildId(onSelectRolesForEmoji[10]).c(78);
      guildId = guildId.guildId;
      const emoji = guildId.emoji;
      ({ disabled, start, end, onSelectRolesForEmoji } = guildId);
      _slicedToArray = undefined !== disabled && disabled;
      let obj = guildId(onSelectRolesForEmoji[10]);
      let user = onBlur();
      if (cResult[0] !== emoji.id) {
        let items = [emoji.id];
        cResult[0] = emoji.id;
        cResult[1] = items;
        let tmp5 = items;
      } else {
        tmp5 = cResult[1];
      }
      const tmp4 = onBlur();
      [first, closure_6] = guildId(onSelectRolesForEmoji[11]).useRecyclingState(emoji.name, tmp5);
      if (cResult[2] !== emoji.id) {
        let items1 = [];
        ({ id: arr2[0], id: tmp3[2] } = emoji);
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      const tmp6 = _slicedToArray;
      let tmpResult = guildId(onSelectRolesForEmoji[11]);
      const tmp6Result = tmp6(guildId(onSelectRolesForEmoji[11]).useRecyclingState(false, tmp9), 2);
      GuildStore = tmp6Result[0];
      UserStore = tmp11;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildStore];
        cResult[4] = items2;
        let tmp12 = items2;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== guildId) {
        class M {
          constructor() {
            return closure_7.getGuild(guildId);
          }
        }
        cResult[5] = guildId;
        cResult[6] = M;
      } else {
        class M {
          constructor() {
            return closure_7.getGuild(guildId);
          }
        }
      }
      const tmpResult5 = guildId(onSelectRolesForEmoji[11]);
      const stateFromStores = guildId(onSelectRolesForEmoji[12]).useStateFromStores(tmp12, M);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            return closure_7.getGuild(guildId);
          }
        }
        const items3 = [UserStore];
        cResult[7] = items3;
        const tmp16 = items3;
      } else {
        class M {
          constructor() {
            return closure_7.getGuild(guildId);
          }
        }
      }
      if (cResult[8] !== emoji.user) {
        class D {
          constructor() {
            tmp = emoji;
            user = closure_8.getUser(emoji.user.id);
            if (user == null) {
              user = tmp.user;
            }
            return user;
          }
        }
        const items4 = [emoji.user];
        cResult[8] = emoji.user;
        cResult[9] = D;
        cResult[10] = items4;
        let tmp18 = items4;
      } else {
        class D {
          constructor() {
            tmp = emoji;
            user = closure_8.getUser(emoji.user.id);
            if (user == null) {
              user = tmp.user;
            }
            return user;
          }
        }
        tmp18 = cResult[10];
      }
      const tmpResult6 = guildId(onSelectRolesForEmoji[12]);
      const stateFromStores1 = guildId(onSelectRolesForEmoji[12]).useStateFromStores(tmp16, D, tmp18);
      const tmpResult7 = guildId(onSelectRolesForEmoji[12]);
      const canManageGuildExpression = guildId(onSelectRolesForEmoji[13]).useManageResourcePermissions(
        stateFromStores,
      ).canManageGuildExpression;
      if (cResult[11] === canManageGuildExpression) {
        class D {
          constructor() {
            tmp = emoji;
            user = closure_8.getUser(emoji.user.id);
            if (user == null) {
              user = tmp.user;
            }
            return user;
          }
        }
        closure_10 = result;
        if (cResult[14] === emoji.id) {
          class D {
            constructor() {
              tmp = emoji;
              user = closure_8.getUser(emoji.user.id);
              if (user == null) {
                user = tmp.user;
              }
              return user;
            }
          }
        }
        function handleNameBlur() {
          if (first !== emoji.name) {
            const obj2 = { guildId, emojiId: tmp2.id, name: null };
            const obj = EmojiActionCreators;
            obj2.name = EmojiUtilsDefault.sanitizeEmojiName(tmp);
            obj.updateEmoji(obj2);
          }
          closure_8(false);
        }
        cResult[14] = emoji.id;
        cResult[15] = emoji.name;
        cResult[16] = guildId;
        cResult[17] = first;
        cResult[18] = tmp11;
        cResult[19] = handleNameBlur;
      }
      result = canManageGuildExpression(emoji);
      cResult[11] = canManageGuildExpression;
      cResult[12] = emoji;
      cResult[13] = result;
      const tmpResult8 = guildId(onSelectRolesForEmoji[13]);
    }
  : function EmojiRow(guildId) {
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
      const tmp4 = children(guildId(onSelectRolesForEmoji[11]).useRecyclingState(emoji.name, items), 2);
      children = tmp4[0];
      noop = tmp4[1];
      let obj = guildId(onSelectRolesForEmoji[11]);
      const items1 = [emoji.id];
      const tmp6 = children(guildId(onSelectRolesForEmoji[11]).useRecyclingState(false, items1), 2);
      closure_5 = tmp7;
      let obj2 = guildId(onSelectRolesForEmoji[11]);
      const items2 = [GuildStore];
      const stateFromStores = guildId(onSelectRolesForEmoji[12]).useStateFromStores(items2, () =>
        GuildStore.getGuild(guildId),
      );
      let obj3 = guildId(onSelectRolesForEmoji[12]);
      const items3 = [UserStore];
      const items4 = [emoji.user];
      const stateFromStores1 = guildId(onSelectRolesForEmoji[12]).useStateFromStores(
        items3,
        () => {
          let user = UserStore.getUser(emoji.user.id);
          if (user == null) {
            user = emoji.user;
          }
          return user;
        },
        items4,
      );
      const obj4 = guildId(onSelectRolesForEmoji[12]);
      const items5 = [guildId, emoji, onSelectRolesForEmoji, tmp6[1]];
      const result = guildId(onSelectRolesForEmoji[13])
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
      const obj6 = {
        icon: null,
        trailing: null,
        label: null,
        disabled: null,
        onPress: null,
        onLongPress: null,
        start: null,
        end: null,
      };
      const obj7 = {
        onPress() {
          const obj2 = { text: null };
          const intl = guildId(onSelectRolesForEmoji[21]).intl;
          obj2.text = intl.string(guildId(onSelectRolesForEmoji[21]).t.KUzI73);
          emoji(onSelectRolesForEmoji[20]).open("EMOJI_DISABLED", obj2);
        },
        disabled: emoji.available,
        children: null,
      };
      const obj8 = { style: tmp.emojiImage, source: null };
      const obj9 = { uri: null };
      const obj5 = guildId(onSelectRolesForEmoji[13]);
      const tmp16 = emoji(onSelectRolesForEmoji[22]);
      obj9.uri = emoji(onSelectRolesForEmoji[23]).getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
      obj8.source = obj9;
      obj7.children = closure_9(tmp16, obj8);
      obj6.icon = closure_9(onPress, obj7);
      const obj10 = emoji(onSelectRolesForEmoji[23]);
      const obj11 = { id: emoji.id, animated: emoji.animated, size: 48 };
      const nickname = emoji(onSelectRolesForEmoji[24]).getNickname(guildId, undefined, stateFromStores1);
      const obj13 = { style: tmp.flexCenterRow, children: null };
      const obj14 = { style: tmp.usernameContainer, children: null };
      let tmp14Result = null;
      if (null != nickname) {
        const obj15 = { numberOfLines: 1, style: tmp.username, children: nickname };
        tmp14Result = closure_9(tmp2(tmp3[19]).LegacyText, obj15);
      }
      const items8 = [tmp14Result];
      const obj16 = { numberOfLines: 1, style: tmp.username, children: null };
      const obj12 = emoji(onSelectRolesForEmoji[24]);
      obj16.children = emoji(onSelectRolesForEmoji[25]).getUserTag(stateFromStores1);
      items8[1] = closure_9(guildId(onSelectRolesForEmoji[19]).LegacyText, obj16);
      obj14.children = items8;
      const items9 = [closure_10(closure_5, obj14), ,];
      const tmp15Result = emoji(onSelectRolesForEmoji[25]);
      items9[1] = closure_9(guildId(onSelectRolesForEmoji[19]).Avatar, {
        user: stateFromStores1,
        guildId,
        size: guildId(onSelectRolesForEmoji[19]).AvatarSizes.XSMALL,
      });
      let tmp14Result3 = null;
      if (!flag) {
        const obj18 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: null };
        const obj19 = { source: tmp15(tmp3[27]), size: tmp2(tmp3[19]).IconSizes.REFRESH_SMALL_16 };
        obj18.children = closure_9(tmp2(tmp3[19]).Icon, obj19);
        tmp14Result3 = closure_9(tmp2(tmp3[26]).PressableOpacity, obj18);
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
          const obj21 = {
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
          const items10 = [,];
          ({ emojiText: arr12[0], flex: arr12[1] } = tmp);
          obj21.style = items10;
          obj21.onChangeText = updateName;
          obj21.value = children;
          obj20.children = closure_9(tmp2(tmp3[19]).TextInput, obj21);
          let tmp14Result4 = closure_9(tmp19, obj20);
        }
        obj6.label = tmp14Result4;
        obj6.disabled = flag;
        obj6.onPress = callback1;
        obj6.onLongPress = callback2;
        obj6.start = start;
        obj6.end = end;
        return closure_9(guildId(onSelectRolesForEmoji[28]).TableRow, obj6);
      }
      const obj22 = { style: tmp.nameContainer, children: null };
      const items11 = [
        closure_9(guildId(onSelectRolesForEmoji[18]).Text, {
          style: tmp.colon,
          variant: "text-md/medium",
          color: "text-muted",
          children: ":",
        }),
        closure_9(guildId(onSelectRolesForEmoji[18]).Text, {
          lineClamp: 1,
          style: tmp.emojiText,
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children,
        }),
        closure_9(guildId(onSelectRolesForEmoji[18]).Text, {
          style: tmp.colon,
          variant: "text-md/medium",
          color: "text-muted",
          children: ":",
        }),
      ];
      obj22.children = items11;
      tmp14Result4 = closure_10(tmp19, obj22);
      const obj17 = { user: stateFromStores1, guildId, size: guildId(onSelectRolesForEmoji[19]).AvatarSizes.XSMALL };
      const obj23 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
      const obj24 = {
        lineClamp: 1,
        style: tmp.emojiText,
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children,
      };
      const obj25 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
    };
