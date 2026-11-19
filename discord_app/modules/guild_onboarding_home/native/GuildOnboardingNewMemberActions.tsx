// discord_app/modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildOnboardingHomeActionCreators from "../GuildOnboardingHomeActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import GuildOnboardingHomeSettingsStore from "../GuildOnboardingHomeSettingsStore.tsx";
import GuildOnboardingMemberActionStore from "../GuildOnboardingMemberActionStore.tsx";

require = fn;
function MemberActionRow(icon) {
  const channelId = icon.channelId;
  ({ title, emoji, completed } = icon);
  let id;
  let stateFromStores;
  const tmp = closure_17();
  const checkboxA11yNative = channelId(stateFromStores[15]).useCheckboxA11yNative({ checked: completed });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (emoji == null) {
    emoji = {};
  }
  id = emoji.id;
  const name = emoji.name;
  let obj = channelId(stateFromStores[15]);
  items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[16]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp7 = id(stateFromStores[17])(stateFromStores, true);
  const tmp2Result = channelId(stateFromStores[16]);
  const items1 = [PermissionStore];
  const stateFromStores1 = channelId(stateFromStores[16]).useStateFromStores(items1, () =>
    PermissionStore.can(Permissions.VIEW_CHANNEL, stateFromStores),
  );
  const tmp2Result3 = channelId(stateFromStores[16]);
  const items2 = [EmojiStore];
  const items3 = [id];
  const stateFromStores2 = channelId(stateFromStores[16]).useStateFromStores(
    items2,
    () => {
      let customEmojiById = null;
      if (null != id) {
        customEmojiById = EmojiStore.getCustomEmojiById(tmp);
      }
      return customEmojiById;
    },
    items3,
  );
  const tmp2Result4 = channelId(stateFromStores[16]);
  const newMemberActionIconURL = id(stateFromStores[18]).getNewMemberActionIconURL({ channelId, icon: icon.icon });
  [][0] = stateFromStores;
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if (stateFromStores1) {
      if (null != newMemberActionIconURL) {
        const obj2 = { style: tmp.icon, source: null, resizeMode: "contain" };
        const obj3 = { uri: newMemberActionIconURL };
        obj2.source = obj3;
        let tmp15 = closure_15(tmp6(tmp3[20]), obj2);
        let tmp16 = closure_15;
      } else if (null != stateFromStores2) {
        const obj4 = { style: tmp.emoji, source: null, resizeMode: "contain" };
        const obj6 = { uri: null };
        const tmp6Result = tmp6(tmp3[20]);
        const obj7 = { id: null, animated: null, size: null };
        ({ id: obj14.id, animated: obj14.animated } = stateFromStores2);
        obj7.size = EMOJI_URL_BASE_SIZE;
        obj6.uri = tmp6(tmp3[18]).getEmojiURL(obj7);
        obj4.source = obj6;
        tmp15 = closure_15(tmp6Result, obj4);
        tmp16 = closure_15;
        const tmp6Result4 = tmp6(tmp3[18]);
      } else {
        if (null != name) {
          const tmp6Result5 = tmp6(tmp3[21]);
          if (null != tmp6Result5.getByName(tmp6Result6.convertSurrogateToName(name, false))) {
            const obj8 = { style: tmp.textEmoji, variant: "heading-xxl/medium", children: name };
            tmp15 = closure_15(tmp2(tmp3[22]).Text, obj8);
            tmp16 = closure_15;
          }
          tmp6Result6 = tmp6(tmp3[21]);
        }
        const obj9 = { style: tmp.emojiPlaceholder, children: null };
        const obj10 = { size: tmp2(tmp3[23]).Icon.Sizes.REFRESH_SMALL_16, source: tmp6(tmp3[24]) };
        obj9.children = closure_15(tmp2(tmp3[23]).Icon, obj10);
        tmp15 = closure_15(View, obj9);
        tmp16 = closure_15;
      }
      const obj11 = {
        accessible: true,
        accessibilityRole,
        accessibilityState,
        accessibilityLabel: null,
        onPress: null,
        style: null,
        children: null,
      };
      const intl = tmp2(tmp3[26]).intl;
      const obj12 = { channelName: tmp7 };
      const _HermesInternal = HermesInternal;
      obj11.accessibilityLabel = "" + title + ", " + intl.formatToPlainString(tmp2(tmp3[26]).t.MkzlDL, obj12);
      obj11.onPress = tmp11;
      obj11.style = tmp.actionContainer;
      const items4 = [tmp15, ,];
      const obj13 = { style: tmp.channelNameContainer, children: null };
      const obj15 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: title };
      const items5 = [tmp16(tmp2(tmp3[22]).Text, obj15)];
      const obj16 = { variant: "body-xs/normal", color: "text-muted", children: null };
      const intl2 = tmp2(tmp3[26]).intl;
      const obj17 = { channelName: tmp7 };
      obj16.children = intl2.format(tmp2(tmp3[26]).t.MkzlDL, obj17);
      items5[1] = tmp16(tmp2(tmp3[22]).Text, obj16);
      obj13.children = items5;
      items4[1] = closure_16(View, obj13);
      const obj18 = {
        disableColor: true,
        size: tmp2(tmp3[23]).Icon.Sizes.MEDIUM,
        source: tmp6(completed ? tmp3[27] : tmp3[28]),
      };
      tmp16 = tmp16(tmp2(tmp3[23]).Icon, obj18);
      items4[2] = tmp16;
      obj11.children = items4;
      closure_16(tmp2(tmp3[25]).PressableOpacity, obj11);
    }
  }
  return tmp12;
}
const View = fn(17).View;
const Permissions = fn(1072).Permissions;
const EMOJI_URL_BASE_SIZE = fn(1391).EMOJI_URL_BASE_SIZE;
const GuildMemberFlags = fn(4710).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4792);
let obj2 = {
  actionsContainer: { paddingHorizontal: 12 },
  actionsHeader: { display: "flex", marginBottom: 16 },
  actionContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    marginBottom: 8,
    padding: 12,
    borderRadius: nativeDefault.radii.sm,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  channelNameContainer: { flex: 1, marginHorizontal: 8 },
  icon: null,
  emoji: null,
  textEmoji: null,
  emojiPlaceholder: null,
};
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.xs };
obj2.icon = size;
obj2.emoji = { width: 40, height: 40 };
obj2.textEmoji = { width: 40, textAlign: "center" };
const size1 = {
  width: 40,
  height: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
obj2.emojiPlaceholder = size1;
let closure_17 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx");

export default function GuildOnboardingNewMemberActions(guildId) {
  guildId = guildId.guildId;
  let stateFromStores2;
  const tmp = closure_17();
  items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = guildId(stateFromStores2[16]).useStateFromStores(
    items,
    () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId),
    items1,
  );
  let obj = guildId(stateFromStores2[16]);
  const items2 = [GuildOnboardingMemberActionStore];
  const stateFromStores1 = guildId(stateFromStores2[16]).useStateFromStores(items2, () =>
    GuildOnboardingMemberActionStore.getCompletedActions(guildId),
  );
  let obj2 = guildId(stateFromStores2[16]);
  const items3 = [GuildMemberStore];
  stateFromStores2 = guildId(stateFromStores2[16]).useStateFromStores(items3, () =>
    GuildMemberStore.getSelfMember(guildId),
  );
  const obj3 = guildId(stateFromStores2[16]);
  const items4 = [GuildStore];
  const stateFromStores3 = guildId(stateFromStores2[16]).useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const items5 = [stateFromStores1, guildId];
  let flags;
  if (stateFromStores2 != null) {
    flags = stateFromStores2.flags;
  }
  items5[2] = flags;
  const effect = stateFromStores3.useEffect(() => {
    let hasFlagResult = null == stateFromStores1;
    if (hasFlagResult) {
      let flags;
      if (stateFromStores2 != null) {
        flags = stateFromStores2.flags;
      }
      hasFlagResult = null != flags;
    }
    if (hasFlagResult) {
      let num = stateFromStores2.flags;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.STARTED_HOME_ACTIONS);
    }
    if (hasFlagResult) {
      const newMemberActions = GuildOnboardingHomeActionCreators.fetchNewMemberActions(guildId);
    }
  }, items5);
  [][0] = stateFromStores3;
  let tmp15Result2 = null;
  if (null != stateFromStores2) {
    tmp15Result2 = null;
    if (null != stateFromStores) {
      tmp15Result2 = null;
      if (0 !== stateFromStores.length) {
        const obj5 = { style: tmp.actionsContainer, children: null };
        const obj6 = { style: tmp.actionsHeader, children: null };
        const obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
        const intl3 = tmp2(tmp3[26]).intl;
        obj7.children = intl3.string(tmp2(tmp3[26]).t.LhlgY9);
        obj6.children = closure_15(tmp2(tmp3[22]).Text, obj7);
        const items6 = [
          closure_15(View, obj6),
          stateFromStores.map((channelId) => {
            const obj = {
              channelId: channelId.channelId,
              title: channelId.title,
              emoji: channelId.emoji,
              icon: channelId.icon,
              completed: null,
            };
            let flag;
            if (stateFromStores1 != null) {
              flag = tmp3[channelId.channelId];
            }
            if (flag == null) {
              flag = false;
            }
            obj.completed = flag;
            return colors(MemberActionRow, obj, "member-action-" + channelId.channelId);
          }),
        ];
        let rulesChannelId;
        if (stateFromStores3 != null) {
          rulesChannelId = stateFromStores3.rulesChannelId;
        }
        let tmp15Result = null != rulesChannelId;
        if (tmp15Result) {
          const obj8 = {
            accessible: true,
            accessibilityRole: "button",
            accessibilityLabel: null,
            onPress: null,
            style: null,
            children: null,
          };
          const intl = tmp2(tmp3[26]).intl;
          obj8.accessibilityLabel = intl.string(tmp2(tmp3[26]).t["K/i3iQ"]);
          obj8.onPress = tmp10;
          obj8.style = tmp.actionContainer;
          const obj9 = { style: tmp.emojiPlaceholder, children: null };
          const obj10 = { size: tmp2(tmp3[23]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(tmp3[30]) };
          obj9.children = closure_15(tmp2(tmp3[23]).Icon, obj10);
          const items7 = [closure_15(View, obj9)];
          const obj11 = { style: tmp.channelNameContainer, children: null };
          const obj12 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl2 = tmp2(tmp3[26]).intl;
          obj12.children = intl2.string(tmp2(tmp3[26]).t["K/i3iQ"]);
          obj11.children = closure_15(tmp2(tmp3[22]).Text, obj12);
          items7[1] = closure_15(View, obj11);
          obj8.children = items7;
          tmp15Result = closure_16(tmp2(tmp3[25]).PressableOpacity, obj8);
        }
        items6[2] = tmp15Result;
        obj5.children = items6;
        tmp15Result2 = closure_16(View, obj5);
      }
    }
  }
  return tmp15Result2;
}
