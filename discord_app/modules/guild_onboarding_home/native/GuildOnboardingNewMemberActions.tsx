// === Module 16557: GuildOnboardingNewMemberActions ===

// Module 16557 (GuildOnboardingNewMemberActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4501 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 7532 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5083 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 5084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let channelId, guildId;

let closure_15;
let closure_16;
let obj2;
let size;
let size1;
const View = react_native.View;
const Permissions = Constants.Permissions;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionsContainer: { paddingHorizontal: 12 }, actionsHeader: { display: "flex", marginBottom: 16 }, actionContainer: obj2, channelNameContainer: { flex: 1, marginHorizontal: 8 }, icon: size, emoji: { width: 40, height: 40 }, textEmoji: { width: 40, textAlign: "center" }, emojiPlaceholder: size1 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.xs };
size1 = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let emoji;
  let first;
  let icon;
  let stateFromStores;
  let title;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp7;
  const tmp = channelId;
  let obj = channelId(stateFromStores[16]);
  const cResult = obj.c(49);
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
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores[17]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  id(stateFromStores[18])(stateFromStores, true);
  const tmp9 = id;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function z() {
      return PermissionStore.can(Permissions.VIEW_CHANNEL, stateFromStores);
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult3 = tmp(stateFromStores[17]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [EmojiStore];
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  const items3 = [id];
  const tmpResult4 = tmp(stateFromStores[17]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp15, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items3);
  if (cResult[7] === channelId) {
    if (cResult[10] !== stateFromStores) {
      class H {
        constructor() {
          if (null != stateFromStores) {
            const obj = GuildOnboardingHomeActionCreators;
            const newMemberActionChannel = obj.selectNewMemberActionChannel(stateFromStores.guild_id, stateFromStores.id);
          }
        }
      }
      cResult[10] = stateFromStores;
      cResult[11] = H;
    } else {
      class H {
        constructor() {
          if (null != stateFromStores) {
            const obj = GuildOnboardingHomeActionCreators;
            const newMemberActionChannel = obj.selectNewMemberActionChannel(stateFromStores.guild_id, stateFromStores.id);
          }
        }
      }
    }
    if (null != stateFromStores) {
      class H {
        constructor() {
          if (null != stateFromStores) {
            const obj = GuildOnboardingHomeActionCreators;
            const newMemberActionChannel = obj.selectNewMemberActionChannel(stateFromStores.guild_id, stateFromStores.id);
          }
        }
      }
    }
    return null;
  }
  const tmp9Result = tmp9(stateFromStores[19]);
  const newMemberActionIconURL = tmp9Result.getNewMemberActionIconURL({ channelId, icon });
  cResult[7] = channelId;
  cResult[8] = icon;
  cResult[9] = newMemberActionIconURL;
}) : ((channelId) => {
  let Icon;
  let completed;
  let icon;
  let intl;
  let items4;
  let items5;
  let obj12;
  let obj18;
  let obj6;
  let obj8;
  let obj9;
  let title;
  let tmp5Result4;
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
  const obj2 = channelId(stateFromStores[17]);
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [PermissionStore];
  const tmp6 = id(stateFromStores[18])(stateFromStores, true);
  const obj3 = channelId(stateFromStores[17]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => PermissionStore.can(Permissions.VIEW_CHANNEL, stateFromStores));
  const items2 = [EmojiStore];
  const items3 = [id];
  const obj4 = channelId(stateFromStores[17]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items3);
  const obj5 = id(stateFromStores[19]);
  const newMemberActionIconURL = obj5.getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp22Result = null;
  if (null != stateFromStores) {
    tmp22Result = null;
    if (stateFromStores1) {
      let tmp15;
      let tmp16;
      if (null != newMemberActionIconURL) {
        let obj = { style: tmp.icon, source: obj6, resizeMode: "contain" };
        obj6 = { uri: newMemberActionIconURL };
        tmp15 = closure_15(tmp5(tmp3[21]), obj);
        tmp16 = closure_15;
      } else if (null != stateFromStores2) {
        const obj7 = { style: tmp.emoji, source: obj8, resizeMode: "contain" };
        obj8 = { uri: tmp5Result4.getEmojiURL(obj9) };
        obj9 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
        ({ id: obj13.id, animated: obj13.animated } = stateFromStores2);
        const tmp5Result = id(stateFromStores[21]);
        tmp5Result4 = id(stateFromStores[19]);
        tmp15 = closure_15(tmp5Result, obj7);
        tmp16 = closure_15;
      } else {
        if (null != name) {
          const getByName = id(stateFromStores[22]).getByName;
          id(stateFromStores[22]);
          const tmp5Result6 = id(stateFromStores[22]);
          if (null != getByName(tmp5Result6.convertSurrogateToName(name, false))) {
            const obj10 = { style: tmp.textEmoji, variant: "heading-xxl/normal", children: name };
            tmp15 = closure_15(tmp2(tmp3[23]).Text, obj10);
            tmp16 = closure_15;
          }
        }
        const obj11 = { style: tmp.emojiPlaceholder, children: closure_15(Icon, obj12) };
        obj12 = { size: channelId(stateFromStores[24]).Icon.Sizes.REFRESH_SMALL_16, source: id(stateFromStores[25]) };
        Icon = tmp2(tmp3[24]).Icon;
        tmp15 = closure_15(View, obj11);
        tmp16 = closure_15;
      }
      const obj14 = { onPress: tmp10, style: tmp.actionContainer, children: items4 };
      items4 = [tmp15, , ];
      const obj15 = { style: tmp.channelNameContainer, children: items5 };
      const PressableOpacity = tmp2(tmp3[29]).PressableOpacity;
      const obj16 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title };
      items5 = [tmp16(channelId(stateFromStores[23]).Text, obj16), ];
      const obj17 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(channelId(stateFromStores[26]).t.MkzlDL, obj18) };
      const Text = tmp2(tmp3[23]).Text;
      intl = tmp2(tmp3[26]).intl;
      obj18 = { channelName: tmp6 };
      items5[1] = tmp16(Text, obj17);
      items4[1] = closure_16(View, obj15);
      const obj19 = { disableColor: true, size: channelId(stateFromStores[24]).Icon.Sizes.MEDIUM, source: id(completed ? stateFromStores[27] : stateFromStores[28]) };
      const Icon2 = tmp2(tmp3[24]).Icon;
      items4[2] = tmp16(Icon2, obj19);
      tmp22Result = closure_16(PressableOpacity, obj14);
    }
  }
  return tmp22Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let stateFromStores2;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp7;
  let tmp8;
  let tmp2 = stateFromStores2;
  let obj = guildId(stateFromStores2[16]);
  const cResult = obj.c(42);
  guildId = guildId.guildId;
  closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function h() {
      return GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = guildId(tmp2[17]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildOnboardingMemberActionStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    const fn2 = function j() {
      return GuildOnboardingMemberActionStore.getCompletedActions(guildId);
    };
    cResult[5] = guildId;
    cResult[6] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
  }
  const tmpResult4 = guildId(tmp2[17]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [GuildMemberStore];
    cResult[7] = items3;
    tmp14 = items3;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] !== guildId) {
    const fn3 = function p() {
      return GuildMemberStore.getSelfMember(guildId);
    };
    cResult[8] = guildId;
    cResult[9] = fn3;
    tmp16 = fn3;
  } else {
    tmp16 = cResult[9];
  }
  const tmpResult5 = guildId(tmp2[17]);
  stateFromStores2 = tmpResult5.useStateFromStores(tmp14, tmp16);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildStore];
    cResult[10] = items4;
    tmp18 = items4;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] !== guildId) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[11] = guildId;
    cResult[12] = R;
  } else {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult6 = guildId(tmp2[17]);
  const stateFromStores3 = tmpResult6.useStateFromStores(tmp18, R);
  if (cResult[13] === stateFromStores1) {
    class R {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  class P {
    constructor() {
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
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (num == null) {
          num = 0;
        }
        hasFlagResult = hasFlag(num, GuildMemberFlags.STARTED_HOME_ACTIONS);
      }
      if (hasFlagResult) {
        const obj = GuildOnboardingHomeActionCreators;
        const newMemberActions = obj.fetchNewMemberActions(guildId);
      }
    }
  }
  cResult[13] = stateFromStores1;
  cResult[14] = guildId;
  cResult[15] = stateFromStores2;
  cResult[16] = P;
}) : ((guildId) => {
  let Icon;
  let Text;
  let Text2;
  let intl;
  let intl2;
  let items6;
  let items7;
  let obj10;
  let obj12;
  let obj7;
  guildId = guildId.guildId;
  let stateFromStores2;
  const tmp = closure_17();
  let tmp2 = guildId;
  const tmp3 = stateFromStores2;
  let obj = guildId(stateFromStores2[17]);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId), items1);
  const items2 = [GuildOnboardingMemberActionStore];
  const obj2 = guildId(stateFromStores2[17]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(guildId));
  const items3 = [GuildMemberStore];
  const obj3 = guildId(stateFromStores2[17]);
  stateFromStores2 = obj3.useStateFromStores(items3, () => GuildMemberStore.getSelfMember(guildId));
  const items4 = [GuildStore];
  const obj4 = guildId(stateFromStores2[17]);
  const stateFromStores3 = obj4.useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const items5 = [stateFromStores1, guildId, ];
  let flags;
  const useEffect = stateFromStores3.useEffect;
  if (stateFromStores2 != null) {
    flags = stateFromStores2.flags;
  }
  items5[2] = flags;
  const effect = useEffect(() => {
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
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = hasFlag(num, GuildMemberFlags.STARTED_HOME_ACTIONS);
    }
    if (hasFlagResult) {
      const obj = GuildOnboardingHomeActionCreators;
      const newMemberActions = obj.fetchNewMemberActions(guildId);
    }
  }, items5);
  [][0] = stateFromStores3;
  let tmp15Result2 = null;
  if (null != stateFromStores2) {
    tmp15Result2 = null;
    if (null != stateFromStores) {
      let num = 0;
      tmp15Result2 = null;
      if (0 !== stateFromStores.length) {
        const obj5 = { style: tmp.actionsContainer, children: items6 };
        const obj6 = { style: tmp.actionsHeader, children: closure_15(Text2, obj7) };
        obj7 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl2.string(tmp2(tmp3[26]).t.LhlgY9) };
        Text2 = tmp2(tmp3[23]).Text;
        intl2 = tmp2(tmp3[26]).intl;
        items6 = [
          closure_15(View, obj6),
          stateFromStores.map((channelId) => {
                  let flag;
                  const obj = { channelId: channelId.channelId, title: channelId.title, emoji: channelId.emoji, icon: channelId.icon, completed: flag };
                  flag = undefined;
                  if (stateFromStores1 != null) {
                    flag = tmp3[channelId.channelId];
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return closure_15(closure_18, obj, "member-action-" + channelId.channelId);
                }),

        ];
        let rulesChannelId;
        if (stateFromStores3 != null) {
          rulesChannelId = stateFromStores3.rulesChannelId;
        }
        let tmp15Result = null != rulesChannelId;
        if (tmp15Result) {
          const obj8 = { onPress: tmp10, style: tmp.actionContainer, children: items7 };
          const obj9 = { style: tmp.emojiPlaceholder, children: closure_15(Icon, obj10) };
          const PressableOpacity = tmp2(tmp3[29]).PressableOpacity;
          obj10 = { size: tmp2(tmp3[24]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(tmp3[31]) };
          Icon = tmp2(tmp3[24]).Icon;
          items7 = [closure_15(View, obj9), ];
          const obj11 = { style: tmp.channelNameContainer, children: closure_15(Text, obj12) };
          obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp2(tmp3[26]).t["K/i3iQ"]) };
          Text = tmp2(tmp3[23]).Text;
          intl = tmp2(tmp3[26]).intl;
          items7[1] = closure_15(View, obj11);
          tmp15Result = closure_16(PressableOpacity, obj8);
        }
        items6[2] = tmp15Result;
        tmp15Result2 = closure_16(View, obj5);
      }
    }
  }
  return tmp15Result2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx");

export default tmp4;