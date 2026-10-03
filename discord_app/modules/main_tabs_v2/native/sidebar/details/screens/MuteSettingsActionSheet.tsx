// === Module 11064: MuteSettingsActionSheet ===

// Module 11064 (MuteSettingsActionSheet)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import MuteSettingsUtils from "MuteSettingsUtils" /* 9800 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const UserNotificationSettings = fn(1085).UserNotificationSettings;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildMessageNotifications) => {
  let stringResult = dependencyMap;
  const cResult = c.c(7);
  guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
  if (guildMessageNotifications.isMuted) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl5 = util.intl;
      stringResult = intl5.string(util.t.t0mEt2);
      obj2.children = stringResult;
      const tmp27 = options(Text_Text.Text, obj2);
      cResult[0] = tmp27;
      let first = tmp27;
    } else {
      first = cResult[0];
    }
  } else if (tmp4) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl4 = util.intl;
      const obj4 = {
        mutedHook(children, arg1) {
              return closure_1_9(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-feedback-critical", children }, arg1);
            }
      };
      obj3.children = intl4.format(util.t.O34r15, obj4);
      const tmp22 = options(Text_Text.Text, obj3);
      cResult[1] = tmp22;
    }
  } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl3 = util.intl;
      const obj6 = {
        notificationHook(children, arg1) {
              return closure_1_9(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-feedback-warning", children }, arg1);
            }
      };
      obj5.children = intl3.format(util.t.nRwUIL, obj6);
      const tmp17 = options(Text_Text.Text, obj5);
      cResult[2] = tmp17;
    }
  } else {
    if (guildMessageNotifications !== UserNotificationSettings.ALL_MESSAGES) {
      if (guildMessageNotifications !== UserNotificationSettings.ONLY_MENTIONS) {
        return null;
      }
    }
    if (cResult[3] !== guildMessageNotifications) {
      if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
        const intl2 = util.intl;
        let stringResult1 = intl2.string(util.t.mUbulW);
      } else {
        const intl = util.intl;
        stringResult1 = intl.string(util.t.GGAdHV);
      }
      cResult[3] = guildMessageNotifications;
      cResult[4] = stringResult1;
    } else if (cResult[5] !== cResult[4]) {
      const obj7 = { variant: "text-sm/medium", color: "text-default", children: tmp7 };
      const tmp12 = options(Text_Text.Text, obj7);
      cResult[5] = tmp7;
      cResult[6] = tmp12;
    }
  }
}) : ((guildMessageNotifications) => {
  guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
  if (guildMessageNotifications.isMuted) {
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl5 = util.intl;
    obj2.children = intl5.string(util.t.t0mEt2);
    let tmp3 = options(Text_Text.Text, obj2);
  } else if (tmp) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl4 = util.intl;
    const obj4 = {
      mutedHook(children, arg1) {
          return closure_1_9(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-feedback-critical", children }, arg1);
        }
    };
    obj3.children = intl4.format(util.t.O34r15, obj4);
    tmp3 = options(Text_Text.Text, obj3);
  } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj6 = {
      notificationHook(children, arg1) {
          return closure_1_9(require("Text/Text").Text, { variant: "text-sm/medium", color: "text-feedback-warning", children }, arg1);
        }
    };
    obj5.children = intl3.format(util.t.nRwUIL, obj6);
    tmp3 = options(Text_Text.Text, obj5);
  } else {
    if (guildMessageNotifications !== UserNotificationSettings.ALL_MESSAGES) {
      tmp3 = null;
    }
    let obj = dependencyMap;
    if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.mUbulW);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.GGAdHV);
    }
    obj = { variant: "text-sm/medium", color: "text-default", children: stringResult };
    options(Text_Text.Text, obj);
  }
  return tmp3;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(onOptionPress[8]).c(45);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  onOptionPress = guildId.onOptionPress;
  if (cResult[0] !== guildId) {
    guild = GuildStore.getGuild(guildId);
    cResult[0] = guildId;
    cResult[1] = guild;
    let tmp4 = guild;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== channelId) {
    const channel = ChannelStore.getChannel(channelId);
    cResult[2] = channelId;
    cResult[3] = channel;
    let obj2 = channel;
  } else {
    obj2 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    const muteSettings = tmp(tmp2[11]).getMuteSettings(channelId);
    cResult[4] = channelId;
    cResult[5] = muteSettings;
    let tmp9 = muteSettings;
    const tmpResult = tmp(tmp2[11]);
  } else {
    tmp9 = cResult[5];
  }
  const muteConfig = tmp9.muteConfig;
  if (cResult[6] === channelId) {
    if (cResult[7] === guildId) {
      if (cResult[8] === onOptionPress) {
        let tmp12 = cResult[9];
      }
      closure_3 = tmp12;
      if (cResult[10] === channelId) {
        if (cResult[11] === guildId) {
          let tmp13 = cResult[12];
        }
        if (cResult[13] === obj2) {
          if (cResult[14] === tmp4) {
            let tmp14 = cResult[15];
          }
          if (cResult[16] === obj2) {
            if (cResult[17] === tmp4) {
              let tmp17 = cResult[18];
            }
            if (null != obj2) {
              if (tmp11) {
                const _Symbol = Symbol;
                class G {
                  constructor() {
                    obj = closure_1(closure_2[12]);
                    hideActionSheetResult = obj.hideActionSheet();
                    obj2 = closure_0(closure_2[11]);
                    handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                    return;
                  }
                }
                if (tmp27 === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { disableColor: true, source: null };
                  class G {
                    constructor() {
                      obj = closure_1(closure_2[12]);
                      hideActionSheetResult = obj.hideActionSheet();
                      obj2 = closure_0(closure_2[11]);
                      handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                      return;
                    }
                  }
                  obj3.source = channelId(tmp2[14]);
                  const tmp33 = closure_9(tmp31, obj3);
                  cResult[19] = tmp33;
                  let tmp29 = tmp33;
                } else {
                  tmp29 = cResult[19];
                }
                if (cResult[20] !== obj2) {
                  const intl = tmp(tmp2[10]).intl;
                  const obj4 = { name: null };
                  class G {
                    constructor() {
                      obj = closure_1(closure_2[12]);
                      hideActionSheetResult = obj.hideActionSheet();
                      obj2 = closure_0(closure_2[11]);
                      handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                      return;
                    }
                  }
                  const tmpResult4 = tmp(tmp2[15]);
                  obj4.name = tmpResult4.computeChannelName(obj2, UserStore, RelationshipStore, true);
                  const formatResult = intl.format(tmp35, obj4);
                  cResult[20] = obj2;
                  cResult[21] = formatResult;
                  let tmp34 = formatResult;
                } else {
                  tmp34 = cResult[21];
                }
                if (cResult[22] === tmp13) {
                  if (cResult[23] === tmp34) {
                    let tmp41 = cResult[24];
                  }
                  obj2.isPrivate();
                  const MuteSettingType = tmp(tmp2[18]).MuteSettingType;
                  class G {
                    constructor() {
                      obj = closure_1(closure_2[12]);
                      hideActionSheetResult = obj.hideActionSheet();
                      obj2 = closure_0(closure_2[11]);
                      handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                      return;
                    }
                  }
                  if (cResult[25] === muteConfig) {
                    if (cResult[26] === tmp45) {
                      let tmp46 = cResult[27];
                    }
                    if (cResult[28] === tmp41) {
                    }
                    class G {
                      constructor() {
                        obj = closure_1(closure_2[12]);
                        hideActionSheetResult = obj.hideActionSheet();
                        obj2 = closure_0(closure_2[11]);
                        handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                        return;
                      }
                    }
                    const obj5 = { children: null };
                    const items = [tmp41, tmp46];
                    obj5.children = items;
                    const tmp52 = closure_11(closure_10, obj5);
                    cResult[28] = tmp41;
                    cResult[29] = tmp46;
                    cResult[30] = tmp52;
                  }
                  const obj6 = { muteConfig, type: tmp45 };
                  const tmp49 = closure_9(channelId(tmp2[18]), obj6);
                  cResult[25] = muteConfig;
                  cResult[26] = tmp45;
                  cResult[27] = tmp49;
                  tmp46 = tmp49;
                }
                const obj7 = { hasIcons: true, children: null };
                const obj8 = { icon: tmp29, label: tmp34, onPress: tmp13 };
                obj7.children = closure_9(tmp(tmp2[17]).TableRow, obj8);
                const tmp43 = closure_9(tmp(tmp2[16]).TableRowGroup, obj7);
                cResult[22] = tmp13;
                class A {
                  constructor(arg0) {
                    obj = closure_1(closure_2[12]);
                    hideActionSheetResult = obj.hideActionSheet();
                    obj2 = closure_0(closure_2[11]);
                    obj1 = { channelId, guildId, muteDurationSeconds: guildId, onOptionPress };
                    result = obj2.handleMuteSettingPress(obj1);
                    return;
                  }
                }
                cResult[23] = tmp34;
                cResult[24] = tmp43;
                tmp41 = tmp43;
              }
            }
            class G {
              constructor() {
                obj = closure_1(closure_2[12]);
                hideActionSheetResult = obj.hideActionSheet();
                obj2 = closure_0(closure_2[11]);
                handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                return;
              }
            }
            if (cResult[35] === tmp21) {
              if (cResult[36] === tmp22) {
                if (cResult[39] === tmp17) {
                  if (cResult[40] === tmp14) {
                    let tmp54 = cResult[41];
                  }
                  if (cResult[42] === tmp24) {
                    if (cResult[43] === tmp54) {
                      let tmp58 = cResult[44];
                    }
                    return tmp58;
                  }
                  class G {
                    constructor() {
                      obj = closure_1(closure_2[12]);
                      hideActionSheetResult = obj.hideActionSheet();
                      obj2 = closure_0(closure_2[11]);
                      handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                      return;
                    }
                  }
                  const items1 = [tmp54, tmp24];
                  tmp60[0] = items1;
                  const tmp61 = closure_11(tmp(tmp2[20]).ActionSheet, tmp60);
                  cResult[42] = tmp24;
                  cResult[43] = tmp54;
                  cResult[44] = tmp61;
                  tmp58 = tmp61;
                }
                class G {
                  constructor() {
                    obj = closure_1(closure_2[12]);
                    hideActionSheetResult = obj.hideActionSheet();
                    obj2 = closure_0(closure_2[11]);
                    handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                    return;
                  }
                }
                tmp56[0] = tmp14;
                tmp56[1] = tmp17;
                const tmp57 = closure_9(tmp(tmp2[19]).BottomSheetTitleHeader, tmp56);
                cResult[39] = tmp17;
                cResult[40] = tmp14;
                cResult[41] = tmp57;
                tmp54 = tmp57;
              }
            }
            const obj9 = { hasIcons: tmp22, children: tmp23 };
            cResult[35] = tmp21;
            cResult[36] = tmp22;
            cResult[37] = tmp23;
            cResult[38] = closure_9(tmp21, obj9);
            class A {
              constructor(arg0) {
                obj = closure_1(closure_2[12]);
                hideActionSheetResult = obj.hideActionSheet();
                obj2 = closure_0(closure_2[11]);
                obj1 = { channelId, guildId, muteDurationSeconds: guildId, onOptionPress };
                result = obj2.handleMuteSettingPress(obj1);
                return;
              }
            }
            const tmp26 = closure_9(tmp21, obj9);
          }
          tmp(tmp2[11]);
          class G {
            constructor() {
              obj = closure_1(closure_2[12]);
              hideActionSheetResult = obj.hideActionSheet();
              obj2 = closure_0(closure_2[11]);
              handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
              return;
            }
          }
          cResult[16] = obj2;
          cResult[17] = tmp4;
          cResult[18] = tmp19;
          tmp17 = tmp19;
        }
        tmp(tmp2[11]);
        class G {
          constructor() {
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet();
            obj2 = closure_0(closure_2[11]);
            handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
            return;
          }
        }
        cResult[13] = obj2;
        cResult[14] = tmp4;
        cResult[15] = tmp16;
        tmp14 = tmp16;
      }
      class G {
        constructor() {
          obj = closure_1(closure_2[12]);
          hideActionSheetResult = obj.hideActionSheet();
          obj2 = closure_0(closure_2[11]);
          handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
          return;
        }
      }
      cResult[10] = channelId;
      cResult[11] = guildId;
      cResult[12] = G;
      tmp13 = G;
    }
  }
  class A {
    constructor(arg0) {
      obj = closure_1(closure_2[12]);
      hideActionSheetResult = obj.hideActionSheet();
      obj2 = closure_0(closure_2[11]);
      obj1 = { channelId, guildId, muteDurationSeconds: guildId, onOptionPress };
      result = obj2.handleMuteSettingPress(obj1);
      return;
    }
  }
  cResult[6] = channelId;
  cResult[7] = guildId;
  cResult[8] = onOptionPress;
  cResult[9] = A;
  tmp12 = A;
  let obj = guildId(onOptionPress[8]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const onOptionPress = guildId.onOptionPress;
  let channel;
  GuildStore = undefined;
  guild = GuildStore.getGuild(guildId);
  channel = channel.getChannel(channelId);
  const items = [channelId];
  const memo = guild.useMemo(() => MuteSettingsUtils.getMuteSettings(channelId), items);
  const items1 = [channelId, guildId, onOptionPress];
  ({ muteConfig, muted } = memo);
  GuildStore = guild.useCallback((muteDurationSeconds) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const result = MuteSettingsUtils.handleMuteSettingPress({ channelId, guildId, muteDurationSeconds, onOptionPress });
  }, items1);
  const items2 = [channelId, guildId];
  const items3 = [channel, guild];
  const callback = guild.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    MuteSettingsUtils.handleUnmutePress(channelId, guildId);
  }, items2);
  const items4 = [channel, guild];
  const memo1 = guild.useMemo(() => MuteSettingsUtils.getMuteSettingLabel(channel, guild), items3);
  const memo2 = guild.useMemo(() => MuteSettingsUtils.getMuteSettingSublabel(channel, guild), items4);
  if (null != channel) {
    if (muted) {
      let obj = { hasIcons: true, children: null };
      const obj3 = { icon: null, label: null, onPress: null };
      const obj4 = { disableColor: true, source: channelId(onOptionPress[14]) };
      obj3.icon = closure_9(guildId(onOptionPress[13]).Icon, obj4);
      const intl = guildId(onOptionPress[10]).intl;
      const obj5 = { name: null };
      const obj8 = guildId(onOptionPress[15]);
      obj5.name = obj8.computeChannelName(channel, UserStore, RelationshipStore, true);
      obj3.label = intl.format(guildId(onOptionPress[10]).t["eC+9rj"], obj5);
      obj3.onPress = callback;
      obj.children = closure_9(guildId(onOptionPress[17]).TableRow, obj3);
      const items5 = [closure_9(guildId(onOptionPress[16]).TableRowGroup, obj), ];
      let obj6 = { muteConfig, type: null };
      const tmp20 = channelId(onOptionPress[18]);
      guildId(onOptionPress[18]).MuteSettingType;
      const isPrivateResult = channel.isPrivate();
      const MuteSettingType = { children: null };
      obj6.type = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
      obj6 = closure_9(tmp20, obj6);
      items5[1] = obj6;
      MuteSettingType.children = items5;
      closure_11(closure_10, MuteSettingType);
      const tmp22 = channel.isPrivate() ? MuteSettingType.DM : MuteSettingType.CHANNEL;
    }
  }
  const muteOptions = guildId(onOptionPress[11]).getMuteOptions();
  const obj2 = guildId(onOptionPress[11]);
  const obj7 = {
    hasIcons: false,
    children: muteOptions.map((item) => {
      ({ label, duration: guildId } = item);
      return closure_1_9(guildId(onOptionPress[17]).TableRow, {
        label,
        onPress() {
          return closure_5(guildId);
        }
      }, label);
    })
  };
  const obj9 = { children: null };
  const items6 = [
    closure_9(guildId(onOptionPress[19]).BottomSheetTitleHeader, { title: memo1, subtitle: memo2 }),
    closure_9(guildId(onOptionPress[16]).TableRowGroup, {
      hasIcons: false,
      children: muteOptions.map((item) => {
        ({ label, duration: guildId } = item);
        return closure_1_9(guildId(onOptionPress[17]).TableRow, {
          label,
          onPress() {
            return closure_5(guildId);
          }
        }, label);
      })
    })
  ];
  obj9.children = items6;
  return closure_11(guildId(onOptionPress[20]).ActionSheet, obj9);
});
export const MuteSettingsHint = tmp3;