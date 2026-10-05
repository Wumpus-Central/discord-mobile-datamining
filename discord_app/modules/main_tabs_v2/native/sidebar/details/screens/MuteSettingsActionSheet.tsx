// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx
import react2 from "../../../../../../../_runtime/00576_react.js";
import Constants from "../../../../../../Constants.tsx";
import intl6 from "../../../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import MuteSettingsUtils from "MuteSettingsUtils.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";
import GuildStore_mod from "../../../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let guildId, guildMessageNotifications, handleUnmutePressResult, hideActionSheetResult, obj1;

let c10;
let c9;
let unpackModuleId;
let GuildStore = GuildStore_mod;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildMessageNotifications) => {
      let intl3;
      let intl4;
      let intl5;
      let obj4;
      let obj6;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(7);
      guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
      if (guildMessageNotifications.isMuted) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "text-sm/medium", color: "text-default", children: intl5.string(intl6.t.t0mEt2) };
          const Text3 = Text_Text.Text;
          intl5 = intl6.intl;
          const tmp23 = React4(Text3, obj2);
          cResult[0] = tmp23;
          first = tmp23;
        } else {
          first = cResult[0];
        }
        tmp6 = first;
      } else if (tmp4) {
        let tmp17;
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            variant: "text-sm/medium",
            color: "text-default",
            children: intl4.format(intl6.t.O34r15, obj4),
          };
          const Text2 = Text_Text.Text;
          intl4 = intl6.intl;
          obj4 = {
            mutedHook(children, arg1) {
              const obj = { variant: "text-sm/medium", color: "text-feedback-critical", children };
              return closure_1_9(require("Text/Text").Text, obj, arg1);
            },
          };
          const tmp19 = React4(Text2, obj3);
          cResult[1] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[1];
        }
        tmp6 = tmp17;
      } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
        let tmp13;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = {
            variant: "text-sm/medium",
            color: "text-default",
            children: intl3.format(intl6.t.nRwUIL, obj6),
          };
          const Text = Text_Text.Text;
          intl3 = intl6.intl;
          obj6 = {
            notificationHook(children, arg1) {
              const obj = { variant: "text-sm/medium", color: "text-feedback-warning", children };
              return closure_1_9(require("Text/Text").Text, obj, arg1);
            },
          };
          const tmp15 = React4(Text, obj5);
          cResult[2] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[2];
        }
        tmp6 = tmp13;
      } else if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
        let tmp7;
        let tmp9;
        if (cResult[3] !== guildMessageNotifications) {
          let stringResult;
          if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
            const intl2 = intl6.intl;
            stringResult = intl2.string(intl6.t.mUbulW);
          } else {
            const intl = intl6.intl;
            stringResult = intl.string(intl6.t.GGAdHV);
          }
          cResult[3] = guildMessageNotifications;
          cResult[4] = stringResult;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] !== tmp7) {
          const obj7 = { variant: "text-sm/medium", color: "text-default", children: tmp7 };
          const tmp11 = React4(Text_Text.Text, obj7);
          cResult[5] = tmp7;
          cResult[6] = tmp11;
          tmp9 = tmp11;
        } else {
          tmp9 = cResult[6];
        }
        tmp6 = tmp9;
      } else {
        tmp6 = null;
      }
      return tmp6;
    }
  : (guildMessageNotifications) => {
      let intl3;
      let intl4;
      let intl5;
      let obj4;
      let obj6;
      let tmp4Result;
      guildMessageNotifications = guildMessageNotifications.guildMessageNotifications;
      if (guildMessageNotifications.isMuted) {
        const obj2 = { variant: "text-sm/medium", color: "text-default", children: intl5.string(intl6.t.t0mEt2) };
        const Text4 = Text_Text.Text;
        intl5 = intl6.intl;
        tmp4Result = React4(Text4, obj2);
      } else if (tmp) {
        const obj3 = { variant: "text-sm/medium", color: "text-default", children: intl4.format(intl6.t.O34r15, obj4) };
        const Text3 = Text_Text.Text;
        intl4 = intl6.intl;
        obj4 = {
          mutedHook(children, arg1) {
            const obj = { variant: "text-sm/medium", color: "text-feedback-critical", children };
            return closure_1_9(require("Text/Text").Text, obj, arg1);
          },
        };
        tmp4Result = React4(Text3, obj3);
      } else if (guildMessageNotifications === UserNotificationSettings.NO_MESSAGES) {
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: intl3.format(intl6.t.nRwUIL, obj6) };
        const Text2 = Text_Text.Text;
        intl3 = intl6.intl;
        obj6 = {
          notificationHook(children, arg1) {
            const obj = { variant: "text-sm/medium", color: "text-feedback-warning", children };
            return closure_1_9(require("Text/Text").Text, obj, arg1);
          },
        };
        tmp4Result = React4(Text2, obj5);
      } else if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
        let stringResult;
        const Text = Text_Text.Text;
        if (guildMessageNotifications === UserNotificationSettings.ALL_MESSAGES) {
          const intl2 = intl6.intl;
          stringResult = intl2.string(intl6.t.mUbulW);
        } else {
          const intl = intl6.intl;
          stringResult = intl.string(intl6.t.GGAdHV);
        }
        let obj = { variant: "text-sm/medium", color: "text-default", children: stringResult };
        tmp4Result = React4(Text, obj);
      } else {
        tmp4Result = null;
      }
      return tmp4Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let items;
      let obj2;
      let obj8;
      let onOptionPress;
      let tmp4;
      let tmp9;
      let tmpResult4;
      let obj = guildId(onOptionPress[8]);
      const cResult = obj.c(45);
      guildId = guildId.guildId;
      const channelId = guildId.channelId;
      onOptionPress = guildId.onOptionPress;
      if (cResult[0] !== guildId) {
        const guild = GuildStore.getGuild(guildId);
        cResult[0] = guildId;
        cResult[1] = guild;
        tmp4 = guild;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== channelId) {
        const channel = ChannelStore.getChannel(channelId);
        cResult[2] = channelId;
        cResult[3] = channel;
        obj2 = channel;
      } else {
        obj2 = cResult[3];
      }
      if (cResult[4] !== channelId) {
        const tmpResult = guildId(onOptionPress[11]);
        const muteSettings = tmpResult.getMuteSettings(channelId);
        cResult[4] = channelId;
        cResult[5] = muteSettings;
        tmp9 = muteSettings;
      } else {
        tmp9 = cResult[5];
      }
      const muteConfig = tmp9.muteConfig;
      if (cResult[6] === channelId) {
        if (cResult[7] === guildId) {
          let tmp12;
          if (cResult[8] === onOptionPress) {
            tmp12 = cResult[9];
          }
          let closure_3 = tmp12;
          if (cResult[10] === channelId) {
            let tmp13;
            if (cResult[11] === guildId) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === obj2) {
              let tmp14;
              if (cResult[14] === tmp4) {
                tmp14 = cResult[15];
              }
              if (cResult[16] === obj2) {
                let tmp17;
                let tmp24;
                if (cResult[17] === tmp4) {
                  tmp17 = cResult[18];
                }
                if (null != obj2) {
                  if (tmp11) {
                    let tmp29;
                    let tmp34;
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
                      let obj3 = { disableColor: true, source: channelId(onOptionPress[14]) };
                      class G {
                        constructor() {
                          obj = closure_1(closure_2[12]);
                          hideActionSheetResult = obj.hideActionSheet();
                          obj2 = closure_0(closure_2[11]);
                          handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                          return;
                        }
                      }
                      const tmp33 = closure_9(tmp31, obj3);
                      cResult[19] = tmp33;
                      tmp29 = tmp33;
                    } else {
                      tmp29 = cResult[19];
                    }
                    if (cResult[20] !== obj2) {
                      const intl = tmp(tmp2[10]).intl;
                      const format = intl.format;
                      const obj4 = { name: tmpResult4.computeChannelName(obj2, UserStore, RelationshipStore, true) };
                      class G {
                        constructor() {
                          obj = closure_1(closure_2[12]);
                          hideActionSheetResult = obj.hideActionSheet();
                          obj2 = closure_0(closure_2[11]);
                          handleUnmutePressResult = obj2.handleUnmutePress(channelId, guildId);
                          return;
                        }
                      }
                      tmpResult4 = guildId(onOptionPress[15]);
                      const formatResult = format(tmp35, obj4);
                      cResult[20] = obj2;
                      cResult[21] = formatResult;
                      tmp34 = formatResult;
                    } else {
                      tmp34 = cResult[21];
                    }
                    if (cResult[22] === tmp13) {
                      let tmp41;
                      if (cResult[23] === tmp34) {
                        tmp41 = cResult[24];
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
                        let tmp46;
                        if (cResult[26] === tmp45) {
                          tmp46 = cResult[27];
                        }
                        if (cResult[28] === tmp41) {
                          let tmp50;
                          if (cResult[29] === tmp46) {
                            tmp50 = cResult[30];
                          }
                          tmp24 = tmp50;
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
                        const obj5 = { children: items };
                        items = [tmp41, tmp46];
                        const tmp52 = closure_11(closure_10, obj5);
                        cResult[28] = tmp41;
                        cResult[29] = tmp46;
                        cResult[30] = tmp52;
                        tmp50 = tmp52;
                      }
                      const obj6 = { muteConfig, type: tmp45 };
                      const tmp49 = closure_9(channelId(onOptionPress[18]), obj6);
                      cResult[25] = muteConfig;
                      cResult[26] = tmp45;
                      cResult[27] = tmp49;
                      tmp46 = tmp49;
                    }
                    const obj7 = { hasIcons: true, children: closure_9(guildId(onOptionPress[17]).TableRow, obj8) };
                    const TableRowGroup = tmp(tmp2[16]).TableRowGroup;
                    obj8 = { icon: tmp29, label: tmp34, onPress: tmp13 };
                    const tmp43 = closure_9(TableRowGroup, obj7);
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
                  if (cResult[39] === tmp17) {
                    let tmp53;
                    if (cResult[40] === tmp14) {
                      tmp53 = cResult[41];
                    }
                    if (cResult[42] === tmp24) {
                      let tmp57;
                      if (cResult[43] === tmp53) {
                        tmp57 = cResult[44];
                      }
                      return tmp57;
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
                    const items1 = [tmp53, tmp24];
                    tmp59[0] = items1;
                    const tmp60 = closure_11(guildId(onOptionPress[20]).ActionSheet, tmp59);
                    cResult[42] = tmp24;
                    cResult[43] = tmp53;
                    cResult[44] = tmp60;
                    tmp57 = tmp60;
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
                  tmp55[0] = tmp14;
                  tmp55[1] = tmp17;
                  const tmp56 = closure_9(guildId(onOptionPress[19]).BottomSheetTitleHeader, tmp55);
                  cResult[39] = tmp17;
                  cResult[40] = tmp14;
                  cResult[41] = tmp56;
                  tmp53 = tmp56;
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
                    if (cResult[37] === tmp23) {
                      tmp24 = cResult[38];
                    }
                  }
                }
                const obj9 = { hasIcons: tmp22, children: tmp23 };
                cResult[35] = tmp21;
                cResult[36] = tmp22;
                cResult[37] = tmp23;
                cResult[38] = closure_9(tmp21, obj9);
                closure_9(tmp21, obj9);
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
              }
              guildId(onOptionPress[11]);
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
            guildId(onOptionPress[11]);
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
    }
  : (guildId) => {
      let Icon;
      let MuteSettingType;
      let TableRow;
      let closure_5;
      let format;
      let isPrivateResult;
      let items6;
      let muteConfig;
      let muted;
      let obj3;
      let obj4;
      let obj5;
      let obj8;
      let prop;
      guildId = guildId.guildId;
      const channelId = guildId.channelId;
      const onOptionPress = guildId.onOptionPress;
      let channel;
      GuildStore = undefined;
      const guild = GuildStore.getGuild(guildId);
      channel = channel.getChannel(channelId);
      const items = [channelId];
      const memo = guild.useMemo(() => {
        const obj = MuteSettingsUtils;
        return obj.getMuteSettings(channelId);
      }, items);
      const items1 = [channelId, guildId, onOptionPress];
      ({ muteConfig, muted } = memo);
      GuildStore = guild.useCallback((muteDurationSeconds) => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = MuteSettingsUtils;
        const obj3 = { channelId, guildId, muteDurationSeconds, onOptionPress };
        const result = obj2.handleMuteSettingPress(obj3);
      }, items1);
      const items2 = [channelId, guildId];
      const items3 = [channel, guild];
      const callback = guild.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = MuteSettingsUtils;
        obj2.handleUnmutePress(channelId, guildId);
      }, items2);
      const items4 = [channel, guild];
      const memo1 = guild.useMemo(() => {
        const obj = MuteSettingsUtils;
        return obj.getMuteSettingLabel(channel, guild);
      }, items3);
      if (null != channel) {
        let tmp10Result;
        let tmp8;
        let tmp6;
        let tmp9;
        if (muted) {
          let obj = { hasIcons: true, children: closure_9(TableRow, obj3) };
          const TableRowGroup2 = guildId(onOptionPress[16]).TableRowGroup;
          obj3 = { icon: closure_9(Icon, obj4), label: format(prop, obj5), onPress: callback };
          TableRow = guildId(onOptionPress[17]).TableRow;
          obj4 = { disableColor: true, source: channelId(onOptionPress[14]) };
          Icon = guildId(onOptionPress[13]).Icon;
          const intl = guildId(onOptionPress[10]).intl;
          format = intl.format;
          obj5 = { name: obj8.computeChannelName(channel, UserStore, RelationshipStore, true) };
          prop = guildId(onOptionPress[10]).t["eC+9rj"];
          obj8 = guildId(onOptionPress[15]);
          const items5 = [closure_9(TableRowGroup2, obj)];
          const obj6 = { muteConfig, type: isPrivateResult ? MuteSettingType.DM : MuteSettingType.CHANNEL };
          const tmp21 = channelId(onOptionPress[18]);
          isPrivateResult = channel.isPrivate();
          MuteSettingType = guildId(onOptionPress[18]).MuteSettingType;
          const obj7 = { children: items5 };
          items5[1] = closure_9(tmp21, obj6);
          tmp10Result = closure_11(closure_10, obj7);
          tmp8 = closure_9;
          tmp6 = onOptionPress;
          tmp9 = guildId;
        }
        const obj9 = { children: items6 };
        const ActionSheet = tmp9(tmp6[20]).ActionSheet;
        const obj10 = { title: memo1, subtitle: tmp5 };
        items6 = [tmp8(tmp9(tmp6[19]).BottomSheetTitleHeader, obj10), tmp10Result];
        return closure_11(ActionSheet, obj9);
      }
      tmp6 = onOptionPress;
      let obj2 = guildId(onOptionPress[11]);
      const muteOptions = obj2.getMuteOptions();
      const obj11 = {
        hasIcons: false,
        children: muteOptions.map((item) => {
          let label;
          ({ label, duration: guildId } = item);
          const obj = {
            label,
            onPress() {
              return closure_5(guildId);
            },
          };
          return closure_1_9(guildId(onOptionPress[17]).TableRow, obj, label);
        }),
      };
      const TableRowGroup = guildId(onOptionPress[16]).TableRowGroup;
      tmp10Result = closure_9(TableRowGroup, obj11);
      tmp8 = closure_9;
      tmp9 = guildId;
    };
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx",
);

export default tmp4;
export const MuteSettingsHint = tmp3;
