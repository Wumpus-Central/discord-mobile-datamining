// === Module 16562: GuildOnboardingNewMemberActions ===

// Module 16562 (GuildOnboardingNewMemberActions)
import nativeDefault from "native" /* 576 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 12284 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4747 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 4748 */;

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
  let obj1 = channelId(stateFromStores[15]);
  const items = [ChannelStore];
  stateFromStores = obj1.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(stateFromStores[15]);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(Permissions.VIEW_CHANNEL, stateFromStores));
  let obj3 = channelId(stateFromStores[15]);
  const items2 = [EmojiStore];
  const items3 = [id];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items3);
  let obj4 = id(stateFromStores[17]);
  const newMemberActionIconURL = obj4.getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = null;
    if (stateFromStores1) {
      if (null != newMemberActionIconURL) {
        let obj = { style: tmp.icon, source: null, resizeMode: "contain" };
        obj = { uri: newMemberActionIconURL };
        obj.source = obj;
        let tmp14 = closure_15(tmp5(tmp3[19]), obj);
        let tmp15 = closure_15;
      } else if (null != stateFromStores2) {
        obj1 = { style: tmp.emoji, source: null, resizeMode: "contain" };
        obj2 = { uri: null };
        tmp5(tmp3[19]);
        const tmp5Result = tmp5(tmp3[17]);
        obj3 = { id: null, animated: null, size: null };
        ({ id: obj14.id, animated: obj14.animated } = stateFromStores2);
        obj3.size = EMOJI_URL_BASE_SIZE;
        obj2.uri = tmp5Result.getEmojiURL(obj3);
        obj1.source = obj2;
        tmp14 = closure_15(tmp5Result, obj1);
        tmp15 = closure_15;
      } else {
        if (null != name) {
          const tmp5Result1 = tmp5(tmp3[20]);
          if (null != tmp5Result1.getByName(tmp5Result2.convertSurrogateToName(name, false))) {
            obj4 = { style: tmp.textEmoji, variant: "heading-xxl/normal", children: name };
            tmp14 = closure_15(tmp2(tmp3[21]).Text, obj4);
            tmp15 = closure_15;
          }
          tmp5Result2 = tmp5(tmp3[20]);
        }
        const obj5 = { style: tmp.emojiPlaceholder, children: null };
        const obj6 = { size: tmp2(tmp3[22]).Icon.Sizes.REFRESH_SMALL_16, source: tmp5(tmp3[23]) };
        obj5.children = closure_15(tmp2(tmp3[22]).Icon, obj6);
        tmp14 = closure_15(View, obj5);
        tmp15 = closure_15;
      }
      const obj7 = { onPress: tmp10, style: tmp.actionContainer, children: null };
      const items4 = [tmp14, , ];
      const obj8 = { style: tmp.channelNameContainer, children: null };
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title };
      const items5 = [tmp15(tmp2(tmp3[21]).Text, obj9), ];
      const obj10 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = tmp2(tmp3[25]).intl;
      const obj11 = { channelName: tmp6 };
      obj10.children = intl.format(tmp2(tmp3[25]).t.MkzlDL, obj11);
      items5[1] = tmp15(tmp2(tmp3[21]).Text, obj10);
      obj8.children = items5;
      items4[1] = closure_16(View, obj8);
      const obj12 = { disableColor: true, size: tmp2(tmp3[22]).Icon.Sizes.MEDIUM, source: tmp5(completed ? tmp3[26] : tmp3[27]) };
      tmp15 = tmp15(tmp2(tmp3[22]).Icon, obj12);
      items4[2] = tmp15;
      obj7.children = items4;
      closure_16(tmp2(tmp3[24]).PressableOpacity, obj7);
    }
  }
  return tmp11;
}
const View = fn(17).View;
const Permissions = fn(1074).Permissions;
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
fn(4560);
let createStyles = { actionsContainer: { paddingHorizontal: 12 }, actionsHeader: { display: "flex", marginBottom: 16 }, actionContainer: null, channelNameContainer: null, icon: null, emoji: null, textEmoji: null, emojiPlaceholder: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center" };
createStyles.actionContainer = createStyles;
createStyles.channelNameContainer = { flex: 1, marginHorizontal: 8 };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.xs };
createStyles.icon = size;
createStyles.emoji = { width: 40, height: 40 };
createStyles.textEmoji = { width: 40, textAlign: "center" };
const size1 = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" };
createStyles.emojiPlaceholder = size1;
let closure_17 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx");

export default function GuildOnboardingNewMemberActions(guildId) {
  guildId = guildId.guildId;
  let stateFromStores2;
  const tmp = closure_17();
  let obj = guildId(stateFromStores2[15]);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId), items1);
  let obj1 = guildId(stateFromStores2[15]);
  const items2 = [GuildOnboardingMemberActionStore];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(guildId));
  let obj2 = guildId(stateFromStores2[15]);
  const items3 = [GuildMemberStore];
  stateFromStores2 = obj2.useStateFromStores(items3, () => GuildMemberStore.getSelfMember(guildId));
  let obj3 = guildId(stateFromStores2[15]);
  const items4 = [GuildStore];
  const stateFromStores3 = obj3.useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const items5 = [stateFromStores1, guildId, ];
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
  let tmp15Result = null;
  if (null != stateFromStores2) {
    tmp15Result = null;
    if (null != stateFromStores) {
      tmp15Result = null;
      if (0 !== stateFromStores.length) {
        obj = { style: tmp.actionsContainer, children: null };
        obj = { style: tmp.actionsHeader, children: null };
        obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
        const intl2 = tmp2(tmp3[25]).intl;
        obj1.children = intl2.string(tmp2(tmp3[25]).t.LhlgY9);
        obj.children = closure_15(tmp2(tmp3[21]).Text, obj1);
        const items6 = [
          closure_15(View, obj),
          stateFromStores.map((channelId) => {
                  const obj = { channelId: channelId.channelId, title: channelId.title, emoji: channelId.emoji, icon: channelId.icon, completed: null };
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
        tmp15Result = null != rulesChannelId;
        if (tmp15Result) {
          obj2 = { onPress: tmp10, style: tmp.actionContainer, children: null };
          obj3 = { style: tmp.emojiPlaceholder, children: null };
          const obj4 = { size: tmp2(tmp3[22]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(tmp3[29]) };
          obj3.children = closure_15(tmp2(tmp3[22]).Icon, obj4);
          const items7 = [closure_15(View, obj3), ];
          const obj5 = { style: tmp.channelNameContainer, children: null };
          const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl = tmp2(tmp3[25]).intl;
          obj6.children = intl.string(tmp2(tmp3[25]).t["K/i3iQ"]);
          obj5.children = closure_15(tmp2(tmp3[21]).Text, obj6);
          items7[1] = closure_15(View, obj5);
          obj2.children = items7;
          tmp15Result = closure_16(tmp2(tmp3[24]).PressableOpacity, obj2);
        }
        items6[2] = tmp15Result;
        obj.children = items6;
        tmp15Result = closure_16(View, obj);
      }
    }
  }
  return tmp15Result;
};