// === Module 17004: GuildOnboardingNewMemberActions ===

// Module 17004 (GuildOnboardingNewMemberActions)
import nativeDefault from "native" /* 587 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 9319 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5987 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6925 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 7915 */;

require = fn;
const View = fn(17).View;
const Permissions = fn(1085).Permissions;
const EMOJI_URL_BASE_SIZE = fn(1393).EMOJI_URL_BASE_SIZE;
const GuildMemberFlags = fn(4736).GuildMemberFlags;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { actionsContainer: { paddingHorizontal: 12 }, actionsHeader: { display: "flex", marginBottom: 16 }, actionContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center" }, channelNameContainer: { flex: 1, marginHorizontal: 8 }, icon: null, emoji: null, textEmoji: null, emojiPlaceholder: null };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.xs };
obj2.icon = size;
obj2.emoji = { width: 40, height: 40 };
obj2.textEmoji = { width: 40, textAlign: "center" };
const size1 = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" };
obj2.emojiPlaceholder = size1;
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberActionRow(channelId) {
  const cResult = channelId(stateFromStores[16]).c(49);
  channelId = channelId.channelId;
  ({ title, emoji, icon } = channelId);
  closure_17();
  if (emoji == null) {
    emoji = {};
  }
  const id = emoji.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channelId(stateFromStores[16]);
  stateFromStores = channelId(stateFromStores[17]).useStateFromStores(first, tmp7);
  id(stateFromStores[18])(stateFromStores, true);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class R {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_2);
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_2);
      }
    }
  }
  const tmp9 = id;
  const tmpResult = channelId(stateFromStores[17]);
  const stateFromStores1 = channelId(stateFromStores[17]).useStateFromStores(tmp11, R);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_2);
      }
    }
    const items2 = [EmojiStore];
    cResult[6] = items2;
    const tmp15 = items2;
  } else {
    class R {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_2);
      }
    }
  }
  const tmpResult3 = channelId(stateFromStores[17]);
  const items3 = [id];
  const stateFromStores2 = channelId(stateFromStores[17]).useStateFromStores(tmp15, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items3);
  if (cResult[7] === channelId) {
    class R {
      constructor() {
        return closure_9.can(Permissions.VIEW_CHANNEL, closure_2);
      }
    }
    if (cResult[10] !== stateFromStores) {
      class O {
        constructor() {
          tmp = closure_2;
          if (null != closure_2) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[20]);
            newMemberActionChannel = obj.selectNewMemberActionChannel(tmp.guild_id, tmp.id);
          }
          return;
        }
      }
      cResult[10] = stateFromStores;
      cResult[11] = O;
    } else {
      class O {
        constructor() {
          tmp = closure_2;
          if (null != closure_2) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[20]);
            newMemberActionChannel = obj.selectNewMemberActionChannel(tmp.guild_id, tmp.id);
          }
          return;
        }
      }
    }
    if (null != stateFromStores) {
      class O {
        constructor() {
          tmp = closure_2;
          if (null != closure_2) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[20]);
            newMemberActionChannel = obj.selectNewMemberActionChannel(tmp.guild_id, tmp.id);
          }
          return;
        }
      }
    }
    return null;
  }
  const tmpResult4 = channelId(stateFromStores[17]);
  const newMemberActionIconURL = tmp9(stateFromStores[19]).getNewMemberActionIconURL({ channelId, icon });
  cResult[7] = channelId;
  cResult[8] = icon;
  cResult[9] = newMemberActionIconURL;
  const tmp9Result = tmp9(stateFromStores[19]);
}) : (function MemberActionRow(channelId) {
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
  stateFromStores = channelId(stateFromStores[17]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(stateFromStores[17]);
  const tmp6 = id(stateFromStores[18])(stateFromStores, true);
  const items1 = [PermissionStore];
  const stateFromStores1 = channelId(stateFromStores[17]).useStateFromStores(items1, () => PermissionStore.can(Permissions.VIEW_CHANNEL, stateFromStores));
  const obj3 = channelId(stateFromStores[17]);
  const items2 = [EmojiStore];
  const items3 = [id];
  const stateFromStores2 = channelId(stateFromStores[17]).useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items3);
  const obj4 = channelId(stateFromStores[17]);
  const newMemberActionIconURL = id(stateFromStores[19]).getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = null;
    if (stateFromStores1) {
      if (null != newMemberActionIconURL) {
        let obj = { style: tmp.icon, source: null, resizeMode: "contain" };
        const obj6 = { uri: newMemberActionIconURL };
        obj.source = obj6;
        let tmp14 = closure_15(tmp5(tmp3[21]), obj);
        let tmp15 = closure_15;
      } else if (null != stateFromStores2) {
        const obj7 = { style: tmp.emoji, source: null, resizeMode: "contain" };
        const obj8 = { uri: null };
        const tmp5Result = tmp5(tmp3[21]);
        const obj9 = { id: null, animated: null, size: null };
        ({ id: obj14.id, animated: obj14.animated } = stateFromStores2);
        obj9.size = EMOJI_URL_BASE_SIZE;
        obj8.uri = tmp5(tmp3[19]).getEmojiURL(obj9);
        obj7.source = obj8;
        tmp14 = closure_15(tmp5Result, obj7);
        tmp15 = closure_15;
        const tmp5Result4 = tmp5(tmp3[19]);
      } else {
        if (null != name) {
          const tmp5Result5 = tmp5(tmp3[22]);
          if (null != tmp5Result5.getByName(tmp5Result6.convertSurrogateToName(name, false))) {
            const obj10 = { style: tmp.textEmoji, variant: "heading-xxl/normal", children: name };
            tmp14 = closure_15(tmp2(tmp3[23]).Text, obj10);
            tmp15 = closure_15;
          }
          tmp5Result6 = tmp5(tmp3[22]);
        }
        const obj11 = { style: tmp.emojiPlaceholder, children: null };
        const obj12 = { size: tmp2(tmp3[24]).Icon.Sizes.REFRESH_SMALL_16, source: tmp5(tmp3[25]) };
        obj11.children = closure_15(tmp2(tmp3[24]).Icon, obj12);
        tmp14 = closure_15(View, obj11);
        tmp15 = closure_15;
      }
      const obj13 = { onPress: tmp10, style: tmp.actionContainer, children: null };
      const items4 = [tmp14, , ];
      const obj15 = { style: tmp.channelNameContainer, children: null };
      const obj16 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title };
      const items5 = [tmp15(tmp2(tmp3[23]).Text, obj16), ];
      const obj17 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = tmp2(tmp3[26]).intl;
      const obj18 = { channelName: tmp6 };
      obj17.children = intl.format(tmp2(tmp3[26]).t.MkzlDL, obj18);
      items5[1] = tmp15(tmp2(tmp3[23]).Text, obj17);
      obj15.children = items5;
      items4[1] = closure_16(View, obj15);
      const obj19 = { disableColor: true, size: tmp2(tmp3[24]).Icon.Sizes.MEDIUM, source: tmp5(completed ? tmp3[27] : tmp3[28]) };
      tmp15 = tmp15(tmp2(tmp3[24]).Icon, obj19);
      items4[2] = tmp15;
      obj13.children = items4;
      closure_16(tmp2(tmp3[29]).PressableOpacity, obj13);
    }
  }
  return tmp11;
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildOnboardingNewMemberActions(guildId) {
  const cResult = guildId(stateFromStores2[16]).c(42);
  guildId = guildId.guildId;
  closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      return GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = guildId(stateFromStores2[16]);
  const stateFromStores = guildId(stateFromStores2[17]).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildOnboardingMemberActionStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    class N {
      constructor() {
        return closure_11.getCompletedActions(guildId);
      }
    }
    cResult[5] = guildId;
    cResult[6] = N;
  } else {
    class N {
      constructor() {
        return closure_11.getCompletedActions(guildId);
      }
    }
  }
  const tmpResult = guildId(stateFromStores2[17]);
  const stateFromStores1 = guildId(stateFromStores2[17]).useStateFromStores(tmp10, N);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        return closure_11.getCompletedActions(guildId);
      }
    }
    const items3 = [GuildMemberStore];
    cResult[7] = items3;
    const tmp14 = items3;
  } else {
    class N {
      constructor() {
        return closure_11.getCompletedActions(guildId);
      }
    }
  }
  if (cResult[8] !== guildId) {
    class N {
      constructor() {
        return closure_11.getCompletedActions(guildId);
      }
    }
    cResult[8] = guildId;
    cResult[9] = tmp16;
  } else {
    class N {
      constructor() {
        return closure_11.getCompletedActions(guildId);
      }
    }
  }
  const tmpResult4 = guildId(stateFromStores2[17]);
  stateFromStores2 = guildId(stateFromStores2[17]).useStateFromStores(tmp14, tmp16);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        return closure_11.getCompletedActions(guildId);
      }
    }
    const items4 = [GuildStore];
    cResult[10] = items4;
    const tmp18 = items4;
  } else {
    class N {
      constructor() {
        return closure_11.getCompletedActions(guildId);
      }
    }
  }
  if (cResult[11] !== guildId) {
    class F {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
    cResult[11] = guildId;
    cResult[12] = F;
  } else {
    class F {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
  }
  const tmpResult5 = guildId(stateFromStores2[17]);
  const stateFromStores3 = guildId(stateFromStores2[17]).useStateFromStores(tmp18, F);
  if (cResult[13] === stateFromStores1) {
    class F {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
  }
  class L {
    constructor() {
      hasFlagResult = null == closure_1;
      if (hasFlagResult) {
        flags = undefined;
        if (closure_2 != null) {
          flags = closure_2.flags;
        }
        hasFlagResult = null != flags;
      }
      if (hasFlagResult) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[30]);
        tmp5 = closure_2;
        num = closure_2.flags;
        if (num == null) {
          num = 0;
        }
        tmp6 = GuildMemberFlags;
        hasFlagResult = obj.hasFlag(num, GuildMemberFlags.STARTED_HOME_ACTIONS);
      }
      if (hasFlagResult) {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj2 = closure_0(closure_2[20]);
        tmp9 = guildId;
        newMemberActions = obj2.fetchNewMemberActions(guildId);
      }
      return;
    }
  }
  cResult[13] = stateFromStores1;
  cResult[14] = guildId;
  cResult[15] = stateFromStores2;
  cResult[16] = L;
  const tmpResult6 = guildId(stateFromStores2[17]);
}) : (function GuildOnboardingNewMemberActions(guildId) {
  guildId = guildId.guildId;
  let stateFromStores2;
  const tmp = closure_17();
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = guildId(stateFromStores2[17]).useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId), items1);
  let obj = guildId(stateFromStores2[17]);
  const items2 = [GuildOnboardingMemberActionStore];
  const stateFromStores1 = guildId(stateFromStores2[17]).useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(guildId));
  let obj2 = guildId(stateFromStores2[17]);
  const items3 = [GuildMemberStore];
  stateFromStores2 = guildId(stateFromStores2[17]).useStateFromStores(items3, () => GuildMemberStore.getSelfMember(guildId));
  const obj3 = guildId(stateFromStores2[17]);
  const items4 = [GuildStore];
  const stateFromStores3 = guildId(stateFromStores2[17]).useStateFromStores(items4, () => GuildStore.getGuild(guildId));
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
  let tmp15Result2 = null;
  if (null != stateFromStores2) {
    tmp15Result2 = null;
    if (null != stateFromStores) {
      tmp15Result2 = null;
      if (0 !== stateFromStores.length) {
        const obj5 = { style: tmp.actionsContainer, children: null };
        const obj6 = { style: tmp.actionsHeader, children: null };
        const obj7 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
        const intl2 = tmp2(tmp3[26]).intl;
        obj7.children = intl2.string(tmp2(tmp3[26]).t.LhlgY9);
        obj6.children = closure_15(tmp2(tmp3[23]).Text, obj7);
        const items6 = [
          closure_15(View, obj6),
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
                  return value2(closure_18, obj, "member-action-" + channelId.channelId);
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
          const obj10 = { size: tmp2(tmp3[24]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(tmp3[31]) };
          obj9.children = closure_15(tmp2(tmp3[24]).Icon, obj10);
          const items7 = [closure_15(View, obj9), ];
          const obj11 = { style: tmp.channelNameContainer, children: null };
          const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl = tmp2(tmp3[26]).intl;
          obj12.children = intl.string(tmp2(tmp3[26]).t["K/i3iQ"]);
          obj11.children = closure_15(tmp2(tmp3[23]).Text, obj12);
          items7[1] = closure_15(View, obj11);
          obj8.children = items7;
          tmp15Result = closure_16(tmp2(tmp3[29]).PressableOpacity, obj8);
        }
        items6[2] = tmp15Result;
        obj5.children = items6;
        tmp15Result2 = closure_16(View, obj5);
      }
    }
  }
  return tmp15Result2;
});