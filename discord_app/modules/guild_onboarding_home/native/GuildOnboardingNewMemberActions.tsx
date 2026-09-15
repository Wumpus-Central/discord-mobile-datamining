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
function MemberActionRow(channelId) {
  channelId = channelId.channelId;
  let emoji = channelId.emoji;
  let id;
  let stateFromStores;
  ({ title, icon, completed } = channelId);
  const tmp = closure_17();
  if (emoji == null) {
    emoji = {};
  }
  id = emoji.id;
  const name = emoji.name;
  const items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[15]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(stateFromStores[15]);
  const tmp6 = id(stateFromStores[16])(stateFromStores, true);
  const items1 = [PermissionStore];
  const stateFromStores1 = channelId(stateFromStores[15]).useStateFromStores(items1, () =>
    PermissionStore.can(Permissions.VIEW_CHANNEL, stateFromStores),
  );
  const obj3 = channelId(stateFromStores[15]);
  const items2 = [EmojiStore];
  const items3 = [id];
  const stateFromStores2 = channelId(stateFromStores[15]).useStateFromStores(
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
  const obj4 = channelId(stateFromStores[15]);
  const newMemberActionIconURL = id(stateFromStores[17]).getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = null;
    if (stateFromStores1) {
      if (null != newMemberActionIconURL) {
        let obj = { style: tmp.icon, source: null, resizeMode: "contain" };
        const obj6 = { uri: newMemberActionIconURL };
        obj.source = obj6;
        let tmp14 = closure_15(tmp5(tmp3[19]), obj);
        let tmp15 = closure_15;
      } else if (null != stateFromStores2) {
        const obj7 = { style: tmp.emoji, source: null, resizeMode: "contain" };
        const obj8 = { uri: null };
        const tmp5Result = tmp5(tmp3[19]);
        const obj9 = { id: null, animated: null, size: null };
        ({ id: obj14.id, animated: obj14.animated } = stateFromStores2);
        obj9.size = EMOJI_URL_BASE_SIZE;
        obj8.uri = tmp5(tmp3[17]).getEmojiURL(obj9);
        obj7.source = obj8;
        tmp14 = closure_15(tmp5Result, obj7);
        tmp15 = closure_15;
        const tmp5Result4 = tmp5(tmp3[17]);
      } else {
        if (null != name) {
          const tmp5Result5 = tmp5(tmp3[20]);
          if (null != tmp5Result5.getByName(tmp5Result6.convertSurrogateToName(name, false))) {
            const obj10 = { style: tmp.textEmoji, variant: "heading-xxl/normal", children: name };
            tmp14 = closure_15(tmp2(tmp3[21]).Text, obj10);
            tmp15 = closure_15;
          }
          tmp5Result6 = tmp5(tmp3[20]);
        }
        const obj11 = { style: tmp.emojiPlaceholder, children: null };
        const obj12 = { size: tmp2(tmp3[22]).Icon.Sizes.REFRESH_SMALL_16, source: tmp5(tmp3[23]) };
        obj11.children = closure_15(tmp2(tmp3[22]).Icon, obj12);
        tmp14 = closure_15(View, obj11);
        tmp15 = closure_15;
      }
      const obj13 = { onPress: tmp10, style: tmp.actionContainer, children: null };
      const items4 = [tmp14, ,];
      const obj15 = { style: tmp.channelNameContainer, children: null };
      const obj16 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title };
      const items5 = [tmp15(tmp2(tmp3[21]).Text, obj16)];
      const obj17 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = tmp2(tmp3[25]).intl;
      const obj18 = { channelName: tmp6 };
      obj17.children = intl.format(tmp2(tmp3[25]).t.MkzlDL, obj18);
      items5[1] = tmp15(tmp2(tmp3[21]).Text, obj17);
      obj15.children = items5;
      items4[1] = closure_16(View, obj15);
      const obj19 = {
        disableColor: true,
        size: tmp2(tmp3[22]).Icon.Sizes.MEDIUM,
        source: tmp5(completed ? tmp3[26] : tmp3[27]),
      };
      tmp15 = tmp15(tmp2(tmp3[22]).Icon, obj19);
      items4[2] = tmp15;
      obj13.children = items4;
      closure_16(tmp2(tmp3[24]).PressableOpacity, obj13);
    }
  }
  return tmp11;
}
const View = fn(17).View;
const Permissions = fn(1074).Permissions;
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const GuildMemberFlags = fn(4265).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4639);
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
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = guildId(stateFromStores2[15]).useStateFromStores(
    items,
    () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId),
    items1,
  );
  let obj = guildId(stateFromStores2[15]);
  const items2 = [GuildOnboardingMemberActionStore];
  const stateFromStores1 = guildId(stateFromStores2[15]).useStateFromStores(items2, () =>
    GuildOnboardingMemberActionStore.getCompletedActions(guildId),
  );
  let obj2 = guildId(stateFromStores2[15]);
  const items3 = [GuildMemberStore];
  stateFromStores2 = guildId(stateFromStores2[15]).useStateFromStores(items3, () =>
    GuildMemberStore.getSelfMember(guildId),
  );
  const obj3 = guildId(stateFromStores2[15]);
  const items4 = [GuildStore];
  const stateFromStores3 = guildId(stateFromStores2[15]).useStateFromStores(items4, () => GuildStore.getGuild(guildId));
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
        const obj7 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
        const intl2 = tmp2(tmp3[25]).intl;
        obj7.children = intl2.string(tmp2(tmp3[25]).t.LhlgY9);
        obj6.children = closure_15(tmp2(tmp3[21]).Text, obj7);
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
            return __initData(MemberActionRow, obj, "member-action-" + channelId.channelId);
          }),
        ];
        let rulesChannelId;
        if (stateFromStores3 != null) {
          rulesChannelId = stateFromStores3.rulesChannelId;
        }
        let tmp15Result = null != rulesChannelId;
        if (tmp15Result) {
          const obj8 = { onPress: tmp10, style: tmp.actionContainer, children: null };
          const obj9 = { style: tmp.emojiPlaceholder, children: null };
          const obj10 = { size: tmp2(tmp3[22]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(tmp3[29]) };
          obj9.children = closure_15(tmp2(tmp3[22]).Icon, obj10);
          const items7 = [closure_15(View, obj9)];
          const obj11 = { style: tmp.channelNameContainer, children: null };
          const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl = tmp2(tmp3[25]).intl;
          obj12.children = intl.string(tmp2(tmp3[25]).t["K/i3iQ"]);
          obj11.children = closure_15(tmp2(tmp3[21]).Text, obj12);
          items7[1] = closure_15(View, obj11);
          obj8.children = items7;
          tmp15Result = closure_16(tmp2(tmp3[24]).PressableOpacity, obj8);
        }
        items6[2] = tmp15Result;
        obj5.children = items6;
        tmp15Result2 = closure_16(View, obj5);
      }
    }
  }
  return tmp15Result2;
}
