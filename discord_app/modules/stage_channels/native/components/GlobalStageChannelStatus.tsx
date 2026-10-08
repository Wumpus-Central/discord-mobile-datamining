// === Module 10819: GlobalStageChannelStatus ===

// Module 10819 (GlobalStageChannelStatus)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useChannelNameDefault from "useChannelName" /* 5417 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7482 */;
import StatusBarDefault from "StatusBar" /* 10340 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 10691 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 10812 */;
import PushNotificationDefault from "PushNotification" /* 10820 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4759 */;
import StageInstanceStore from "StageInstanceStore" /* 2068 */;

const useMountEffectDefault = tmp5(5392);
require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { invitedContainer: { paddingHorizontal: nativeDefault.space.PX_8 }, icon: null, activeSpeakerIcon: null, activeStageIcon: null, topic: null, channel: null, invitedHeaderText: null, noticeContainer: null, row: null, buttonWrapper: null, declineButtonPill: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.icon = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.TEXT_DEFAULT };
let obj4 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj2.activeSpeakerIcon = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.WHITE };
let obj5 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.WHITE };
obj2.activeStageIcon = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let obj6 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj2.topic = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj7 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj2.channel = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj8 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
obj2.invitedHeaderText = { color: nativeDefault.colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj9 = { color: nativeDefault.colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
obj2.noticeContainer = { alignItems: "center", justifyContent: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8, marginTop: -8, paddingBottom: nativeDefault.space.PX_4 };
let obj10 = { alignItems: "center", justifyContent: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8, marginTop: -8, paddingBottom: nativeDefault.space.PX_4 };
obj2.row = { alignItems: "center", justifyContent: "center", flexDirection: "row", width: "100%", gap: nativeDefault.space.PX_4 };
let obj11 = { alignItems: "center", justifyContent: "center", flexDirection: "row", width: "100%", gap: nativeDefault.space.PX_4 };
obj2.buttonWrapper = { flexGrow: 1, margin: nativeDefault.space.PX_8 };
let obj12 = { flexGrow: 1, margin: nativeDefault.space.PX_8 };
obj2.declineButtonPill = { borderColor: nativeDefault.colors.WHITE };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function StageChannelRaiseHandAck(channel) {
  const cResult = require("c").c(49);
  channel = channel.channel;
  _require = channel;
  const tmp4 = closure_12();
  let stringResult = useChannelNameDefault(channel);
  if (stringResult == null) {
    let intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t["/YzI63"]);
  }
  importDefault = stringResult;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    class S {
      constructor() {
        return closure_9.getStageInstanceByChannel(closure_0.id);
      }
    }
    const items1 = [channel.id];
    cResult[1] = channel.id;
    cResult[2] = S;
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    class S {
      constructor() {
        return closure_9.getStageInstanceByChannel(closure_0.id);
      }
    }
    tmp10 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, S, tmp10);
  if (cResult[4] === stringResult) {
    class S {
      constructor() {
        return closure_9.getStageInstanceByChannel(closure_0.id);
      }
    }
    if (stateFromStores != null) {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
    }
    if (cResult[5] === tmp12) {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
    }
    useMountEffectDefault(fn);
    [r10071, dependencyMap] = noop.useState(false);
    const tmp16 = _slicedToArray(noop.useState(false), 2);
    if (channel != null) {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
    }
    const stageBlockedUsersCount = tmp(7693).useStageBlockedUsersCount(tmp17);
    const tmpResult4 = tmp(7693);
    if (channel != null) {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
    }
    const stageIgnoredUsersCount = tmp(7693).useStageIgnoredUsersCount(tmp19);
    const tmpResult5 = tmp(7693);
    if (channel != null) {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
    }
    const getStageRTCPanelHeight = tmp(10810).useGetStageRTCPanelHeight(tmp21);
    if (cResult[7] !== channel) {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
      _require = asyncGeneratorStep(async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp3;
                id = tmp7;
                closure_128_0 = undefined;
                if (null != id) {
                  if (obj9.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
                    const obj5 = { entryPoint: tmp41(5915).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
                    const result = stringResult(7492).showAgeVerificationGetStartedModal(obj5);
                    const obj4 = stringResult(7492);
                  } else {
                    v0(true);
                    v0 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: tmp41(7482).audienceAckRequestToSpeak(id, false), done: false };
                    return obj6;
                  }
                  obj9 = id(5954);
                }
                c5 = 3;
              }
            } else if (1 === tmp7) {
              v0 = 0;
              closure_128_0 = closure_2;
              v0(false);
              throw closure_128_0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              v0 = 0;
              v0(false);
              if (null == key.getKey()) {
                stateFromStores(7478).openStageChannel(id);
                const obj8 = stateFromStores(7478);
              }
            }
            v0 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } catch (tmp27) {
            closure_2 = tmp27;
            if (tmp4 === v0) {
              c5 = tmp2;
              throw tmp27;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      function handleAcceptInvite() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[7] = channel;
      cResult[8] = handleAcceptInvite;
    } else {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
    }
    if (cResult[9] !== channel) {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
      cResult[9] = channel;
      cResult[10] = tmp25;
    } else {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
    }
    if (null == stateFromStores) {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
    } else {
      class S {
        constructor() {
          return closure_9.getStageInstanceByChannel(closure_0.id);
        }
      }
      if (cResult[13] === tmp4.invitedContainer) {
        class S {
          constructor() {
            return closure_9.getStageInstanceByChannel(closure_0.id);
          }
        }
        const _Symbol = Symbol;
        ({ row, invitedHeaderText } = tmp4);
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              return closure_9.getStageInstanceByChannel(closure_0.id);
            }
          }
          const stringResult1 = obj6.string(tmp(1126).t.Ul1RJQ);
          cResult[16] = stringResult1;
          const tmp28 = stringResult1;
        } else {
          class S {
            constructor() {
              return closure_9.getStageInstanceByChannel(closure_0.id);
            }
          }
        }
        if (cResult[17] !== tmp4.invitedHeaderText) {
          class S {
            constructor() {
              return closure_9.getStageInstanceByChannel(closure_0.id);
            }
          }
          let obj2 = { style: invitedHeaderText, accessibilityRole: "header", children: tmp28 };
          const tmp31 = closure_10(tmp(1200).LegacyText, obj2);
          cResult[17] = tmp4.invitedHeaderText;
          cResult[18] = tmp31;
        } else {
          class S {
            constructor() {
              return closure_9.getStageInstanceByChannel(closure_0.id);
            }
          }
        }
        if (cResult[19] === tmp4.row) {
          class S {
            constructor() {
              return closure_9.getStageInstanceByChannel(closure_0.id);
            }
          }
          if (cResult[22] === stageBlockedUsersCount) {
            class S {
              constructor() {
                return closure_9.getStageInstanceByChannel(closure_0.id);
              }
            }
          }
          if (stageBlockedUsersCount <= 0) {
            class S {
              constructor() {
                return closure_9.getStageInstanceByChannel(closure_0.id);
              }
            }
            if (stageIgnoredUsersCount <= 0) {
              class S {
                constructor() {
                  return closure_9.getStageInstanceByChannel(closure_0.id);
                }
              }
              cResult[22] = stageBlockedUsersCount;
              cResult[23] = stageIgnoredUsersCount;
              cResult[24] = tmp4.row;
              cResult[25] = null;
            }
          }
          let obj3 = { style: tmp4.row, children: null };
          if (stageBlockedUsersCount <= 0) {
            class S {
              constructor() {
                return closure_9.getStageInstanceByChannel(closure_0.id);
              }
            }
            let obj4 = { variant: "text-xs/medium", color: "text-overlay-light", children: formatResult };
            obj3.children = closure_10(tmp39, obj4);
            closure_10(View, obj3);
          } else {
            class S {
              constructor() {
                return closure_9.getStageInstanceByChannel(closure_0.id);
              }
            }
          }
          const intl2 = tmp(1126).intl;
          let obj5 = { number: stageBlockedUsersCount + stageIgnoredUsersCount };
          formatResult = intl2.format(tmp(1126).t["cXaoI+"], obj5);
        }
        const obj7 = { style: row, children: tmp30 };
        const tmp35 = closure_10(View, obj7);
        cResult[19] = tmp4.row;
        cResult[20] = tmp30;
        cResult[21] = tmp35;
      }
      const items2 = [tmp4.invitedContainer, tmp26];
      cResult[13] = tmp4.invitedContainer;
      cResult[14] = tmp26;
      cResult[15] = items2;
    }
    const tmpResult6 = tmp(10810);
  }
  cResult[4] = stringResult;
  if (stateFromStores != null) {
    class S {
      constructor() {
        return closure_9.getStageInstanceByChannel(closure_0.id);
      }
    }
  }
  fn = function _() {
    const intl = util.intl;
    const obj2 = { channelName: stringResult, channelTopic: null };
    let topic;
    if (stateFromStores != null) {
      topic = stateFromStores.topic;
    }
    const obj = PushNotificationDefault;
    obj2.channelTopic = topic;
    const result = obj.presentLocalNotification({ alertBody: intl.formatToPlainString(util.t.sqnsSP, obj2) });
  };
  cResult[5] = undefined;
  cResult[6] = fn;
  const tmpResult = require("initialize");
}) : (function StageChannelRaiseHandAck(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let stateFromStores;
  dependencyMap = undefined;
  closure_4 = async function _handleAcceptInvite2() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            channel = tmp7;
            if (null != id) {
              if (obj9.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
                const obj5 = { entryPoint: tmp41(5915).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
                const result = tmp3(7492).showAgeVerificationGetStartedModal(obj5);
                const obj4 = tmp3(7492);
              } else {
                dependencyMap(true);
                dependencyMap = 1;
                c4 = 2;
                c5 = 1;
                const obj6 = { value: tmp41(7482).audienceAckRequestToSpeak(id, false), done: false };
                return obj6;
              }
              obj9 = channel(5954);
            }
            c5 = 3;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          closure_128_0 = tmp27;
          closure_129_3(false);
          throw closure_128_0;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          dependencyMap = 0;
          closure_129_3(false);
          if (null == key.getKey()) {
            tmp27(7478).openStageChannel(closure_129_0);
            const obj8 = tmp27(7478);
          }
        }
        dependencyMap = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp27) {
        if (tmp4 === dependencyMap) {
          c5 = tmp2;
          throw tmp27;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = closure_12();
  let stringResult = useChannelNameDefault(channel);
  if (stringResult == null) {
    let intl = channel(1126).intl;
    stringResult = intl.string(channel(1126).t["/YzI63"]);
  }
  importDefault = stringResult;
  const items = [StageInstanceStore];
  const items1 = [channel.id];
  stateFromStores = channel(504).useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
  useMountEffectDefault(() => {
    const intl = util.intl;
    const obj2 = { channelName, channelTopic: null };
    let topic;
    if (stateFromStores != null) {
      topic = stateFromStores.topic;
    }
    const obj = PushNotificationDefault;
    obj2.channelTopic = topic;
    const result = obj.presentLocalNotification({ alertBody: intl.formatToPlainString(util.t.sqnsSP, obj2) });
  });
  let obj = channel(504);
  [tmp10, c3] = noop.useState(false);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  const stageBlockedUsersCount = channel(7693).useStageBlockedUsersCount(id1);
  let obj2 = channel(7693);
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  let stageIgnoredUsersCount = channel(7693).useStageIgnoredUsersCount(id2);
  channel(10810);
  if (channel != null) {
    const id = channel.id;
  }
  let tmp18Result = null;
  if (null != stateFromStores) {
    let obj3 = { style: null, children: null };
    const items2 = [tmp.invitedContainer, ];
    let obj4 = { height: tmp16 };
    items2[1] = obj4;
    obj3.style = items2;
    let obj5 = { style: tmp.row, children: null };
    let obj6 = { style: tmp.invitedHeaderText, accessibilityRole: "header", children: null };
    const intl2 = tmp6(1126).intl;
    obj6.children = intl2.string(tmp6(1126).t.Ul1RJQ);
    obj5.children = closure_10(tmp6(1200).LegacyText, obj6);
    const items3 = [closure_10(View, obj5), , ];
    if (stageBlockedUsersCount <= 0) {
      if (stageIgnoredUsersCount <= 0) {
        items3[1] = null;
        const obj7 = { style: tmp.row, children: null };
        let obj8 = { style: tmp.buttonWrapper, children: null };
        let obj9 = {
          variant: "secondary",
          onPress: function handleDeclineInvite() {
                  if (null != channel) {
                    const result = StageChannelActionCreators.audienceAckRequestToSpeak(tmp, true);
                  }
                },
          pillStyle: tmp.declineButtonPill,
          size: "sm",
          text: null,
          grow: true
        };
        const intl6 = tmp6(1126).intl;
        obj9.text = intl6.string(tmp6(1126).t["1YDv7a"]);
        obj8.children = closure_10(tmp6(5376).BaseTextButton, obj9);
        const items4 = [closure_10(View, obj8), ];
        const obj10 = { style: tmp.buttonWrapper, children: null };
        const obj11 = {
          variant: "primary-overlay",
          onPress: function handleAcceptInvite() {
                  const self = this;
                  const apply = closure_4.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                },
          size: "sm",
          text: null,
          loading: null,
          disabled: null,
          grow: true
        };
        const intl7 = tmp6(1126).intl;
        obj11.text = intl7.string(tmp6(1126).t.MpO0px);
        obj11.loading = tmp10;
        obj11.disabled = tmp10;
        obj10.children = closure_10(tmp6(5375).Button, obj11);
        items4[1] = closure_10(View, obj10);
        obj7.children = items4;
        items3[2] = closure_11(View, obj7);
        obj3.children = items3;
        tmp18Result = closure_11(View, obj3);
      }
    }
    const obj12 = { style: tmp.row, children: null };
    if (stageBlockedUsersCount <= 0) {
      if (stageIgnoredUsersCount > 0) {
        const intl4 = tmp6(1126).intl;
        const obj13 = { number: stageIgnoredUsersCount };
        let formatResult = intl4.format(tmp6(1126).t["0bU4FO"], obj13);
      } else {
        const intl3 = tmp6(1126).intl;
        const obj14 = { number: stageBlockedUsersCount };
        formatResult = intl3.format(tmp6(1126).t.sFzx0G, obj14);
      }
      const obj15 = { variant: "text-xs/medium", color: "text-overlay-light", children: formatResult };
      obj12.children = closure_10(tmp22, obj15);
      closure_10(View, obj12);
    }
    const intl5 = tmp6(1126).intl;
    const obj16 = { number: null };
    stageIgnoredUsersCount = stageBlockedUsersCount + stageIgnoredUsersCount;
    obj16.number = stageIgnoredUsersCount;
    formatResult = intl5.format(tmp6(1126).t["cXaoI+"], obj16);
  }
  return tmp18Result;
});
let closure_13 = tmp3;
ReactCompilerGating = fn(558);
let obj13 = { borderColor: nativeDefault.colors.WHITE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/GlobalStageChannelStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalStageChannelStatus(arg0) {
  const cResult = id(576).c(34);
  ({ channel, guild } = arg0);
  const tmp4 = closure_12();
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  let stringResult = useChannelNameDefault(channel);
  if (stringResult == null) {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t["/YzI63"]);
  }
  const tmp8 = useIsInvitedToSpeakDefault();
  const tmp9 = useCanSpeakInChannelDefault(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function n() {
      return StageInstanceStore.getStageInstanceByChannel(id);
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp13 = items1;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const obj = id(576);
  const stateFromStores = id(504).useStateFromStores(first, tmp12, tmp13);
  if (tmp9) {
    let activeSpeakerIcon = tmp4.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp4.activeStageIcon : tmp4.icon;
  }
  if (!tmp9) {
    if (!tmp8) {
      tmp(4785);
      let str = "dark-content";
    }
    if (null != channel) {
      if (null != guild) {
        const _HermesInternal = HermesInternal;
        let tmp29 = ": ";
        const combined = "" + guild.name + ": " + stringResult;
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.topic;
        }
        if (str2 == null) {
          str2 = "";
        }
        if (tmp8) {
          if (cResult[4] !== channel) {
            const obj2 = { channel };
            const tmp43 = closure_10(closure_13, obj2);
            cResult[4] = channel;
            cResult[5] = tmp43;
            let tmp40 = tmp43;
          } else {
            tmp40 = cResult[5];
          }
          return tmp40;
        } else {
          if (cResult[6] !== str) {
            const obj3 = { animated: true, barStyle: str };
            const tmp19 = closure_10(StatusBarDefault, obj3);
            cResult[6] = str;
            cResult[7] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[7];
          }
          if (cResult[8] === channel) {
            if (cResult[9] === guild) {
              let tmp20 = cResult[10];
            }
            if (cResult[11] === activeSpeakerIcon) {
              if (cResult[12] === tmp20) {
                let tmp22 = cResult[13];
              }
              if (cResult[14] === tmp16 > 50) {
                if (cResult[15] === tmp9) {
                  if (cResult[16] === tmp4.invitedHeaderText) {
                    if (cResult[17] === tmp4.topic) {
                      if (cResult[18] === str2) {
                        let tmp26 = cResult[19];
                      }
                      if (cResult[20] === tmp25) {
                        if (cResult[21] === tmp9) {
                          if (cResult[22] === tmp4.channel) {
                            if (cResult[23] === tmp4.invitedHeaderText) {
                              if (cResult[24] === combined) {
                                let tmp30 = cResult[25];
                              }
                              if (cResult[26] === tmp30) {
                                if (cResult[27] === tmp26) {
                                  let tmp33 = cResult[28];
                                }
                                if (cResult[29] === tmp4.noticeContainer) {
                                  if (cResult[30] === tmp33) {
                                    if (cResult[31] === tmp17) {
                                      if (cResult[32] === tmp22) {
                                        let tmp36 = cResult[33];
                                      }
                                      return tmp36;
                                    }
                                  }
                                }
                                const obj4 = { style: tmp4.noticeContainer, children: null };
                                const items2 = [tmp17, tmp22, tmp33];
                                obj4.children = items2;
                                const tmp39 = closure_11(View, obj4);
                                cResult[29] = tmp4.noticeContainer;
                                cResult[30] = tmp33;
                                cResult[31] = tmp17;
                                cResult[32] = tmp22;
                                cResult[33] = tmp39;
                                tmp36 = tmp39;
                              }
                              const obj5 = { numberOfLines: 1, children: null };
                              const items3 = [tmp26, tmp30];
                              obj5.children = items3;
                              const tmp35 = closure_11(tmp(1200).LegacyText, obj5);
                              cResult[26] = tmp30;
                              cResult[27] = tmp26;
                              cResult[28] = tmp35;
                              tmp33 = tmp35;
                            }
                          }
                        }
                      }
                      let tmp32Result = !tmp25;
                      if (!tmp25) {
                        const items4 = [tmp4.channel, ];
                        let invitedHeaderText2 = tmp9;
                        if (tmp9) {
                          invitedHeaderText2 = tmp4.invitedHeaderText;
                        }
                        const obj6 = { style: null, children: null };
                        items4[1] = invitedHeaderText2;
                        obj6.style = items4;
                        obj6.children = combined;
                        tmp32Result = closure_10(tmp(1200).LegacyText, obj6);
                      }
                      cResult[20] = tmp25;
                      cResult[21] = tmp9;
                      cResult[22] = tmp4.channel;
                      cResult[23] = tmp4.invitedHeaderText;
                      cResult[24] = combined;
                      cResult[25] = tmp32Result;
                      tmp30 = tmp32Result;
                    }
                  }
                }
              }
              let tmp28Result = "" !== str2;
              if (tmp28Result) {
                const items5 = [tmp4.topic, ];
                let invitedHeaderText = tmp9;
                if (tmp9) {
                  invitedHeaderText = tmp4.invitedHeaderText;
                }
                const obj7 = { style: null, children: null };
                items5[1] = invitedHeaderText;
                obj7.style = items5;
                const items6 = [str2, ];
                if (tmp25) {
                  tmp29 = null;
                }
                items6[1] = tmp29;
                obj7.children = items6;
                tmp28Result = closure_11(tmp(1200).LegacyText, obj7);
              }
              cResult[14] = tmp16 > 50;
              cResult[15] = tmp9;
              cResult[16] = tmp4.invitedHeaderText;
              cResult[17] = tmp4.topic;
              cResult[18] = str2;
              cResult[19] = tmp28Result;
              tmp26 = tmp28Result;
            }
            const obj8 = { style: activeSpeakerIcon, size: tmp(1200).Icon.Sizes.REFRESH_SMALL_16, source: tmp20 };
            const tmp24 = closure_10(tmp(1200).Icon, obj8);
            cResult[11] = activeSpeakerIcon;
            cResult[12] = tmp20;
            cResult[13] = tmp24;
            tmp22 = tmp24;
          }
          const channelIconWithGuild = tmp(8134).getChannelIconWithGuild(channel, guild);
          cResult[8] = channel;
          cResult[9] = guild;
          cResult[10] = channelIconWithGuild;
          tmp20 = channelIconWithGuild;
          const tmpResult4 = tmp(8134);
        }
      }
    }
    return null;
  }
  str = "light-content";
  const tmpResult = id(504);
}) : (function GlobalStageChannelStatus(arg0) {
  ({ channel, guild } = arg0);
  const tmp = closure_12();
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let stringResult = useChannelNameDefault(channel);
  if (stringResult == null) {
    const intl = id(1126).intl;
    stringResult = intl.string(id(1126).t["/YzI63"]);
  }
  const tmp7 = useIsInvitedToSpeakDefault();
  let invitedHeaderText = useCanSpeakInChannelDefault(id);
  const items = [StageInstanceStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(id), items1);
  if (invitedHeaderText) {
    let activeSpeakerIcon = tmp.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp.activeStageIcon : tmp.icon;
  }
  if (!invitedHeaderText) {
    if (!tmp7) {
      tmp8(4785);
      let str = "dark-content";
    }
    if (null != channel) {
      if (null != guild) {
        const _HermesInternal = HermesInternal;
        let tmp17 = ": ";
        const combined = "" + guild.name + ": " + stringResult;
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.topic;
        }
        if (str2 == null) {
          str2 = "";
        }
        if (tmp7) {
          const obj2 = { channel };
          let tmp13Result2 = closure_10(closure_13, obj2);
        } else {
          const obj3 = { style: tmp.noticeContainer, children: null };
          const obj4 = { animated: true, barStyle: str };
          const items2 = [closure_10(StatusBarDefault, obj4), , ];
          const obj5 = { style: activeSpeakerIcon, size: tmp8(1200).Icon.Sizes.REFRESH_SMALL_16, source: tmp8(8134).getChannelIconWithGuild(channel, guild) };
          items2[1] = closure_10(tmp8(1200).Icon, obj5);
          let tmp13Result = "" !== str2;
          if (tmp13Result) {
            const items3 = [tmp.topic, ];
            let invitedHeaderText2 = invitedHeaderText;
            if (invitedHeaderText) {
              invitedHeaderText2 = tmp.invitedHeaderText;
            }
            const obj6 = { style: null, children: null };
            items3[1] = invitedHeaderText2;
            obj6.style = items3;
            const items4 = [str2, ];
            if (tmp12) {
              tmp17 = null;
            }
            items4[1] = tmp17;
            obj6.children = items4;
            tmp13Result = closure_11(tmp8(1200).LegacyText, obj6);
          }
          const items5 = [tmp13Result, ];
          let tmp15Result = !tmp12;
          if (tmp11 <= 50) {
            const items6 = [tmp.channel, ];
            if (invitedHeaderText) {
              invitedHeaderText = tmp.invitedHeaderText;
            }
            const obj7 = { style: null, children: null };
            items6[1] = invitedHeaderText;
            obj7.style = items6;
            obj7.children = combined;
            tmp15Result = closure_10(tmp8(1200).LegacyText, obj7);
          }
          const obj8 = { numberOfLines: 1, children: null };
          items5[1] = tmp15Result;
          obj8.children = items5;
          items2[2] = closure_11(tmp8(1200).LegacyText, obj8);
          obj3.children = items2;
          tmp13Result2 = closure_11(View, obj3);
          const tmp8Result2 = tmp8(8134);
        }
        return tmp13Result2;
      }
    }
    return null;
  }
  str = "light-content";
  const obj = id(504);
});
export const StageChannelRaiseHandAck = tmp3;