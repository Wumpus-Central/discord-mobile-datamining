// === Module 9614: GlobalStageChannelStatus ===

// Module 9614 (GlobalStageChannelStatus)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl8 from "intl" /* 1126 */;
import useChannelNameDefault from "useChannelName" /* 5043 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8074 */;
import PushNotificationDefault from "PushNotification" /* 8966 */;
import StatusBarDefault from "StatusBar" /* 9060 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 9082 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 9606 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, c4, c5, dependencyMap, importDefault;

let c10;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp5;
let unpackModuleId;
const useMountEffectDefault = tmp5(5590);
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { invitedContainer: obj2, icon: obj3, activeSpeakerIcon: obj4, activeStageIcon: obj5, topic: obj6, channel: obj7, invitedHeaderText: obj8, noticeContainer: obj9, row: obj10, buttonWrapper: obj11, declineButtonPill: obj12 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj4 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.WHITE };
obj5 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj6 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj7 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
obj8 = { color: nativeDefault.colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
obj9 = { alignItems: "center", justifyContent: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_8, marginTop: -8, paddingBottom: nativeDefault.space.PX_4 };
obj10 = { alignItems: "center", justifyContent: "center", flexDirection: "row", width: "100%", gap: nativeDefault.space.PX_4 };
obj11 = { flexGrow: 1, margin: nativeDefault.space.PX_8 };
obj12 = { borderColor: nativeDefault.colors.WHITE };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let formatResult;
  let invitedHeaderText;
  let obj3;
  let obj7;
  let row;
  let tmp10;
  const tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(49);
  channel = channel.channel;
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
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    class S {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(channel.id);
      }
    }
    const items1 = [channel.id];
    cResult[1] = channel.id;
    cResult[2] = S;
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    class S {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(channel.id);
      }
    }
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, S, tmp10);
  if (cResult[4] === stringResult) {
    class S {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(channel.id);
      }
    }
    const tmp12 = cResult[5];
    if (stateFromStores != null) {
      class S {
        constructor() {
          return StageInstanceStore.getStageInstanceByChannel(channel.id);
        }
      }
    }
    if (tmp12 === tmp13) {
      class S {
        constructor() {
          return StageInstanceStore.getStageInstanceByChannel(channel.id);
        }
      }
    }
    useMountEffectDefault(I);
    [r10071, dependencyMap] = _slicedToArray(react.useState(false), 2);
    const tmp17 = _slicedToArray(react.useState(false), 2);
    const useStageBlockedUsersCount = tmp(8277).useStageBlockedUsersCount;
    tmp(8277);
    if (channel != null) {
      class S {
        constructor() {
          return StageInstanceStore.getStageInstanceByChannel(channel.id);
        }
      }
    }
    const stageBlockedUsersCount = useStageBlockedUsersCount(tmp19);
    let tmp22;
    const useStageIgnoredUsersCount = tmp(8277).useStageIgnoredUsersCount;
    tmp(8277);
    if (channel != null) {
      class S {
        constructor() {
          return StageInstanceStore.getStageInstanceByChannel(channel.id);
        }
      }
    }
    const stageIgnoredUsersCount = useStageIgnoredUsersCount(tmp22);
    let tmp25;
    const useGetStageRTCPanelHeight = tmp(9604).useGetStageRTCPanelHeight;
    tmp(9604);
    if (channel != null) {
      class S {
        constructor() {
          return StageInstanceStore.getStageInstanceByChannel(channel.id);
        }
      }
    }
    const getStageRTCPanelHeight = useGetStageRTCPanelHeight(tmp25);
    if (cResult[7] !== channel) {
      class S {
        constructor() {
          return StageInstanceStore.getStageInstanceByChannel(channel.id);
        }
      }
      _require = _asyncToGenerator(async () => {
        let tmp38Result;
        let v0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
                let closure_1 = tmp;
                closure_0 = undefined;
                if (null != closure_0) {
                  const obj8 = closure_0(dependencyMap[19]);
                  if (obj8.shouldAgeVerifyToSpeakForCurrentUser(closure_0.id)) {
                    const obj4 = { entryPoint: closure_0(dependencyMap[21]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
                    const showAgeVerificationGetStartedModal = stringResult(dependencyMap[20]).showAgeVerificationGetStartedModal;
                    const tmp22 = stringResult(dependencyMap[20]);
                    const result = showAgeVerificationGetStartedModal(obj4);
                  } else {
                    v0(true);
                    v0 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: tmp38Result.audienceAckRequestToSpeak(closure_0, false), done: false };
                    tmp38Result = closure_0(dependencyMap[22]);
                    return obj5;
                  }
                }
              }
            } else if (1 === c4) {
              v0 = 0;
              closure_0 = closure_2;
              v0(false);
              throw closure_0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              v0 = 0;
              v0(false);
              if (null == key.getKey()) {
                const obj7 = stateFromStores(dependencyMap[23]);
                obj7.openStageChannel(closure_0);
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp25) {
            closure_2 = tmp25;
            if (0 === v0) {
              c5 = 3;
              throw tmp25;
            } else {
              c4 = 1;
            }
          }
        }
      });
      function handleAcceptInvite() {
        return closure_0(...arguments);
      }
      cResult[7] = channel;
      cResult[8] = handleAcceptInvite;
    } else {
      class S {
        constructor() {
          return StageInstanceStore.getStageInstanceByChannel(channel.id);
        }
      }
    }
    if (cResult[9] !== channel) {
      class B {
        constructor() {
          if (null != channel) {
            const obj = StageChannelActionCreators;
            const result = obj.audienceAckRequestToSpeak(tmp, true);
          }
        }
      }
      cResult[9] = channel;
      cResult[10] = B;
    } else {
      class B {
        constructor() {
          if (null != channel) {
            const obj = StageChannelActionCreators;
            const result = obj.audienceAckRequestToSpeak(tmp, true);
          }
        }
      }
    }
    if (null == stateFromStores) {
      class B {
        constructor() {
          if (null != channel) {
            const obj = StageChannelActionCreators;
            const result = obj.audienceAckRequestToSpeak(tmp, true);
          }
        }
      }
    } else {
      class B {
        constructor() {
          if (null != channel) {
            const obj = StageChannelActionCreators;
            const result = obj.audienceAckRequestToSpeak(tmp, true);
          }
        }
      }
      if (cResult[13] === tmp4.invitedContainer) {
        let tmp31;
        class B {
          constructor() {
            if (null != channel) {
              const obj = StageChannelActionCreators;
              const result = obj.audienceAckRequestToSpeak(tmp, true);
            }
          }
        }
        const _Symbol = Symbol;
        ({ row, invitedHeaderText } = tmp4);
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor() {
              if (null != channel) {
                const obj = StageChannelActionCreators;
                const result = obj.audienceAckRequestToSpeak(tmp, true);
              }
            }
          }
          const stringResult1 = obj3.string(tmp(1126).t.Ul1RJQ);
          cResult[16] = stringResult1;
          tmp31 = stringResult1;
        } else {
          class B {
            constructor() {
              if (null != channel) {
                const obj = StageChannelActionCreators;
                const result = obj.audienceAckRequestToSpeak(tmp, true);
              }
            }
          }
        }
        if (cResult[17] !== tmp4.invitedHeaderText) {
          class B {
            constructor() {
              if (null != channel) {
                const obj = StageChannelActionCreators;
                const result = obj.audienceAckRequestToSpeak(tmp, true);
              }
            }
          }
          let obj2 = { style: invitedHeaderText, accessibilityRole: "header", children: tmp31 };
          cResult[17] = tmp4.invitedHeaderText;
          cResult[18] = closure_10(tmp(1188).LegacyText, obj2);
          const tmp34 = closure_10(tmp(1188).LegacyText, obj2);
        } else {
          class B {
            constructor() {
              if (null != channel) {
                const obj = StageChannelActionCreators;
                const result = obj.audienceAckRequestToSpeak(tmp, true);
              }
            }
          }
        }
        if (cResult[19] === tmp4.row) {
          let tmp41Result;
          class B {
            constructor() {
              if (null != channel) {
                const obj = StageChannelActionCreators;
                const result = obj.audienceAckRequestToSpeak(tmp, true);
              }
            }
          }
          if (cResult[22] === stageBlockedUsersCount) {
            class B {
              constructor() {
                if (null != channel) {
                  const obj = StageChannelActionCreators;
                  const result = obj.audienceAckRequestToSpeak(tmp, true);
                }
              }
            }
          }
          if (stageBlockedUsersCount > 0) {
            class B {
              constructor() {
                if (null != channel) {
                  const obj = StageChannelActionCreators;
                  const result = obj.audienceAckRequestToSpeak(tmp, true);
                }
              }
            }
            let obj4 = { style: tmp4.row, children: null };
            if (stageBlockedUsersCount > 0) {
              class B {
                constructor() {
                  if (null != channel) {
                    const obj = StageChannelActionCreators;
                    const result = obj.audienceAckRequestToSpeak(tmp, true);
                  }
                }
              }
              let obj5 = { variant: "text-xs/medium", color: "text-overlay-light", children: formatResult };
              obj4.children = tmp41(tmp43, obj5);
              tmp41Result = tmp41(View, obj4);
            }
            if (stageIgnoredUsersCount > 0) {
              class B {
                constructor() {
                  if (null != channel) {
                    const obj = StageChannelActionCreators;
                    const result = obj.audienceAckRequestToSpeak(tmp, true);
                  }
                }
              }
              const obj6 = { number: stageIgnoredUsersCount };
              formatResult = obj9.format(tmp(1126).t["0bU4FO"], obj6);
            } else {
              class B {
                constructor() {
                  if (null != channel) {
                    const obj = StageChannelActionCreators;
                    const result = obj.audienceAckRequestToSpeak(tmp, true);
                  }
                }
              }
              let obj8 = { number: stageBlockedUsersCount };
              formatResult = obj7.format(tmp(1126).t.sFzx0G, obj8);
            }
          } else {
            class B {
              constructor() {
                if (null != channel) {
                  const obj = StageChannelActionCreators;
                  const result = obj.audienceAckRequestToSpeak(tmp, true);
                }
              }
            }
          }
          cResult[22] = stageBlockedUsersCount;
          cResult[23] = stageIgnoredUsersCount;
          cResult[24] = tmp4.row;
          cResult[25] = tmp41Result;
        }
        const obj10 = { style: row, children: tmp33 };
        const tmp38 = closure_10(View, obj10);
        cResult[19] = tmp4.row;
        cResult[20] = tmp33;
        cResult[21] = tmp38;
      }
      const items2 = [tmp4.invitedContainer, tmp29];
      cResult[13] = tmp4.invitedContainer;
      cResult[14] = tmp29;
      cResult[15] = items2;
    }
  }
  cResult[4] = stringResult;
  if (stateFromStores != null) {
    class B {
      constructor() {
        if (null != channel) {
          const obj = StageChannelActionCreators;
          const result = obj.audienceAckRequestToSpeak(tmp, true);
        }
      }
    }
  }
  class I {
    constructor() {
      let topic;
      const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
      PushNotificationDefault;
      const intl = intl8.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { channelName: importDefault, channelTopic: topic };
      topic = undefined;
      const sqnsSP = intl8.t.sqnsSP;
      if (stateFromStores != null) {
        topic = stateFromStores.topic;
      }
      const obj2 = { alertBody: formatToPlainString(sqnsSP, obj) };
      const result = presentLocalNotification(obj2);
    }
  }
  cResult[5] = undefined;
  cResult[6] = I;
}) : ((channel) => {
  let BaseTextButton;
  let Button;
  let LegacyText;
  let _undefined;
  let c3;
  let channelName;
  let intl2;
  let intl6;
  let intl7;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj15;
  let obj5;
  let tmp10;
  channel = channel.channel;
  importDefault = undefined;
  let stateFromStores;
  dependencyMap = undefined;
  let obj = function _handleAcceptInvite2() {
    obj = _asyncToGenerator(async () => {
      let closure_0;
      let closure_1;
      let closure_2;
      let tmp38Result;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
              id = tmp4;
              if (null != id) {
                const obj8 = id(c3[19]);
                if (obj8.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
                  const obj4 = { entryPoint: id(c3[21]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
                  const showAgeVerificationGetStartedModal = tmp(c3[20]).showAgeVerificationGetStartedModal;
                  const tmp22 = tmp(c3[20]);
                  const result = showAgeVerificationGetStartedModal(obj4);
                } else {
                  _undefined(true);
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: tmp38Result.audienceAckRequestToSpeak(id, false), done: false };
                  tmp38Result = id(c3[22]);
                  return obj5;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            id = tmp25;
            closure_129_3(false);
            throw id;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_129_3(false);
            if (null == key.getKey()) {
              const obj7 = tmp25(c3[23]);
              obj7.openStageChannel(closure_129_0);
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp25) {
          if (0 === c3) {
            c5 = 3;
            throw tmp25;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_12();
  const tmp3 = dependencyMap;
  let stringResult = useChannelNameDefault(channel);
  if (stringResult == null) {
    let intl = channel(1126).intl;
    stringResult = intl.string(channel(1126).t["/YzI63"]);
  }
  importDefault = stringResult;
  obj = channel(504);
  const items = [StageInstanceStore];
  const items1 = [channel.id];
  stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
  useMountEffectDefault(() => {
    let topic;
    const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
    PushNotificationDefault;
    const intl = intl8.intl;
    const formatToPlainString = intl.formatToPlainString;
    obj = { channelName, channelTopic: topic };
    topic = undefined;
    const sqnsSP = intl8.t.sqnsSP;
    if (stateFromStores != null) {
      topic = stateFromStores.topic;
    }
    const obj2 = { alertBody: formatToPlainString(sqnsSP, obj) };
    const result = presentLocalNotification(obj2);
  });
  [tmp10, c3] = _slicedToArray(react.useState(false), 2);
  let id1;
  const tmp9 = _slicedToArray(react.useState(false), 2);
  const useStageBlockedUsersCount = channel(8277).useStageBlockedUsersCount;
  channel(8277);
  if (channel != null) {
    id1 = channel.id;
  }
  const stageBlockedUsersCount = useStageBlockedUsersCount(id1);
  let id2;
  const useStageIgnoredUsersCount = channel(8277).useStageIgnoredUsersCount;
  channel(8277);
  if (channel != null) {
    id2 = channel.id;
  }
  const stageIgnoredUsersCount = useStageIgnoredUsersCount(id2);
  channel(9604);
  if (channel != null) {
    let id = channel.id;
  }
  let tmp20Result = null;
  if (null != stateFromStores) {
    let tmp22Result;
    let obj2 = { style: items2, children: items3 };
    items2 = [tmp.invitedContainer, ];
    let obj3 = { height: tmp18 };
    items2[1] = obj3;
    let obj4 = { style: tmp.row, children: closure_10(LegacyText, obj5) };
    obj5 = { style: tmp.invitedHeaderText, accessibilityRole: "header", children: intl2.string(channel(1126).t.Ul1RJQ) };
    LegacyText = tmp6(1188).LegacyText;
    intl2 = tmp6(1126).intl;
    items3 = [closure_10(View, obj4), , ];
    if (stageBlockedUsersCount > 0) {
      let formatResult;
      const obj6 = { style: tmp.row, children: null };
      if (stageBlockedUsersCount > 0) {
        if (stageIgnoredUsersCount > 0) {
          const intl5 = tmp6(1126).intl;
          let obj7 = { number: stageBlockedUsersCount + stageIgnoredUsersCount };
          formatResult = intl5.format(tmp6(1126).t["cXaoI+"], obj7);
        }
        let obj8 = { variant: "text-xs/medium", color: "text-overlay-light", children: formatResult };
        obj6.children = closure_10(tmp24, obj8);
        tmp22Result = closure_10(View, obj6);
      }
      if (stageIgnoredUsersCount > 0) {
        const intl4 = tmp6(1126).intl;
        const obj9 = { number: stageIgnoredUsersCount };
        formatResult = intl4.format(tmp6(1126).t["0bU4FO"], obj9);
      } else {
        const intl3 = tmp6(1126).intl;
        const obj10 = { number: stageBlockedUsersCount };
        formatResult = intl3.format(tmp6(1126).t.sFzx0G, obj10);
      }
    } else {
      tmp22Result = null;
    }
    items3[1] = tmp22Result;
    const obj11 = { style: tmp.row, children: items4 };
    const obj12 = { style: tmp.buttonWrapper, children: closure_10(BaseTextButton, obj13) };
    obj13 = {
      variant: "secondary",
      onPress: function handleDeclineInvite() {
          if (null != channel) {
            obj = StageChannelActionCreators;
            const result = obj.audienceAckRequestToSpeak(tmp, true);
          }
        },
      pillStyle: tmp.declineButtonPill,
      size: "sm",
      text: intl6.string(channel(1126).t["1YDv7a"]),
      grow: true
    };
    BaseTextButton = tmp6(5595).BaseTextButton;
    intl6 = tmp6(1126).intl;
    items4 = [closure_10(View, obj12), ];
    const obj14 = { style: tmp.buttonWrapper, children: closure_10(Button, obj15) };
    obj15 = {
      variant: "primary-overlay",
      onPress: function handleAcceptInvite() {
          return obj(...arguments);
        },
      size: "sm",
      text: intl7.string(channel(1126).t.MpO0px),
      loading: tmp10,
      disabled: tmp10,
      grow: true
    };
    Button = tmp6(5594).Button;
    intl7 = tmp6(1126).intl;
    items4[1] = closure_10(View, obj14);
    items3[2] = closure_11(View, obj11);
    tmp20Result = closure_11(View, obj2);
  }
  return tmp20Result;
});
let closure_13 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalStageChannelStatus(arg0) {
  let activeSpeakerIcon;
  let channel;
  let first;
  let guild;
  let id;
  let items2;
  let items3;
  let items6;
  let tmp12;
  let tmp13;
  const obj = id(576);
  const cResult = obj.c(34);
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
    first = items;
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
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = id(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp12, tmp13);
  if (tmp9) {
    activeSpeakerIcon = tmp4.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp4.activeStageIcon : tmp4.icon;
  }
  if (!tmp9) {
    let str;
    if (!tmp8) {
      id(4587);
      str = "dark-content";
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
          let tmp40;
          if (cResult[4] !== channel) {
            const obj2 = { channel };
            const tmp43 = closure_10(closure_13, obj2);
            cResult[4] = channel;
            cResult[5] = tmp43;
            tmp40 = tmp43;
          } else {
            tmp40 = cResult[5];
          }
          return tmp40;
        } else {
          let tmp17;
          const noticeContainer = tmp4.noticeContainer;
          if (cResult[6] !== str) {
            const obj3 = { animated: true, barStyle: str };
            const tmp19 = closure_10(StatusBarDefault, obj3);
            cResult[6] = str;
            cResult[7] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[7];
          }
          if (cResult[8] === channel) {
            let tmp20;
            if (cResult[9] === guild) {
              tmp20 = cResult[10];
            }
            if (cResult[11] === activeSpeakerIcon) {
              let tmp22;
              if (cResult[12] === tmp20) {
                tmp22 = cResult[13];
              }
              if (cResult[14] === tmp16 > 50) {
                if (cResult[15] === tmp9) {
                  if (cResult[16] === tmp4.invitedHeaderText) {
                    if (cResult[17] === tmp4.topic) {
                      let tmp26;
                      if (cResult[18] === str2) {
                        tmp26 = cResult[19];
                      }
                      if (cResult[20] === tmp16 > 50) {
                        if (cResult[21] === tmp9) {
                          if (cResult[22] === tmp4.channel) {
                            if (cResult[23] === tmp4.invitedHeaderText) {
                              let tmp30;
                              if (cResult[24] === combined) {
                                tmp30 = cResult[25];
                              }
                              if (cResult[26] === tmp30) {
                                let tmp33;
                                if (cResult[27] === tmp26) {
                                  tmp33 = cResult[28];
                                }
                                if (cResult[29] === tmp4.noticeContainer) {
                                  if (cResult[30] === tmp33) {
                                    if (cResult[31] === tmp17) {
                                      let tmp36;
                                      if (cResult[32] === tmp22) {
                                        tmp36 = cResult[33];
                                      }
                                      return tmp36;
                                    }
                                  }
                                }
                                const obj4 = { style: noticeContainer, children: items2 };
                                items2 = [tmp17, tmp22, tmp33];
                                const tmp39 = closure_11(View, obj4);
                                cResult[29] = tmp4.noticeContainer;
                                cResult[30] = tmp33;
                                cResult[31] = tmp17;
                                cResult[32] = tmp22;
                                cResult[33] = tmp39;
                                tmp36 = tmp39;
                              }
                              const obj5 = { numberOfLines: 1, children: items3 };
                              items3 = [tmp26, tmp30];
                              const tmp35 = closure_11(id(1188).LegacyText, obj5);
                              cResult[26] = tmp30;
                              cResult[27] = tmp26;
                              cResult[28] = tmp35;
                              tmp33 = tmp35;
                            }
                          }
                        }
                      }
                      let tmp32Result = !tmp25;
                      if (tmp32Result) {
                        const items4 = [tmp4.channel, ];
                        let invitedHeaderText2 = tmp9;
                        const LegacyText2 = tmp(1188).LegacyText;
                        if (tmp9) {
                          invitedHeaderText2 = tmp4.invitedHeaderText;
                        }
                        const obj6 = { style: items4, children: combined };
                        items4[1] = invitedHeaderText2;
                        tmp32Result = closure_10(LegacyText2, obj6);
                      }
                      cResult[20] = tmp16 > 50;
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
                const LegacyText = tmp(1188).LegacyText;
                if (tmp9) {
                  invitedHeaderText = tmp4.invitedHeaderText;
                }
                const obj7 = { style: items5, children: items6 };
                items5[1] = invitedHeaderText;
                items6 = [str2, ];
                if (tmp16 > 50) {
                  tmp29 = null;
                }
                items6[1] = tmp29;
                tmp28Result = closure_11(LegacyText, obj7);
              }
              cResult[14] = tmp16 > 50;
              cResult[15] = tmp9;
              cResult[16] = tmp4.invitedHeaderText;
              cResult[17] = tmp4.topic;
              cResult[18] = str2;
              cResult[19] = tmp28Result;
              tmp26 = tmp28Result;
            }
            const obj8 = { style: activeSpeakerIcon, size: id(1188).Icon.Sizes.REFRESH_SMALL_16, source: tmp20 };
            const Icon = tmp(1188).Icon;
            const tmp24 = closure_10(Icon, obj8);
            cResult[11] = activeSpeakerIcon;
            cResult[12] = tmp20;
            cResult[13] = tmp24;
            tmp22 = tmp24;
          }
          const tmpResult4 = id(5812);
          const channelIconWithGuild = tmpResult4.getChannelIconWithGuild(channel, guild);
          cResult[8] = channel;
          cResult[9] = guild;
          cResult[10] = channelIconWithGuild;
          tmp20 = channelIconWithGuild;
        }
      }
    }
    return null;
  }
  str = "light-content";
}) : (function GlobalStageChannelStatus(arg0) {
  let activeSpeakerIcon;
  let channel;
  let guild;
  let items2;
  let items4;
  let tmp8Result2;
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
  const obj = id(504);
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(id), items1);
  if (invitedHeaderText) {
    activeSpeakerIcon = tmp.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp.activeStageIcon : tmp.icon;
  }
  if (!invitedHeaderText) {
    let str;
    if (!tmp7) {
      id(4587);
      str = "dark-content";
    }
    if (null != channel) {
      if (null != guild) {
        let tmp13Result2;
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
          tmp13Result2 = closure_10(closure_13, obj2);
        } else {
          const obj3 = { style: tmp.noticeContainer, children: items2 };
          const obj4 = { animated: true, barStyle: str };
          items2 = [closure_10(StatusBarDefault, obj4), , ];
          const obj5 = { style: activeSpeakerIcon, size: id(1188).Icon.Sizes.REFRESH_SMALL_16, source: tmp8Result2.getChannelIconWithGuild(channel, guild) };
          const Icon = tmp8(1188).Icon;
          tmp8Result2 = id(5812);
          items2[1] = closure_10(Icon, obj5);
          let tmp13Result = "" !== str2;
          const LegacyText = tmp8(1188).LegacyText;
          if (tmp13Result) {
            const items3 = [tmp.topic, ];
            let invitedHeaderText2 = invitedHeaderText;
            const LegacyText2 = tmp8(1188).LegacyText;
            if (invitedHeaderText) {
              invitedHeaderText2 = tmp.invitedHeaderText;
            }
            const obj6 = { style: items3, children: items4 };
            items3[1] = invitedHeaderText2;
            items4 = [str2, ];
            if (tmp11 > 50) {
              tmp17 = null;
            }
            items4[1] = tmp17;
            tmp13Result = closure_11(LegacyText2, obj6);
          }
          const items5 = [tmp13Result, ];
          let tmp15Result = !tmp12;
          if (tmp15Result) {
            const items6 = [tmp.channel, ];
            const LegacyText3 = tmp8(1188).LegacyText;
            if (invitedHeaderText) {
              invitedHeaderText = tmp.invitedHeaderText;
            }
            const obj7 = { style: items6, children: combined };
            items6[1] = invitedHeaderText;
            tmp15Result = closure_10(LegacyText3, obj7);
          }
          const obj8 = { numberOfLines: 1, children: items5 };
          items5[1] = tmp15Result;
          items2[2] = closure_11(LegacyText, obj8);
          tmp13Result2 = closure_11(View, obj3);
        }
        return tmp13Result2;
      }
    }
    return null;
  }
  str = "light-content";
});
let result = size.fileFinishedImporting("modules/stage_channels/native/components/GlobalStageChannelStatus.tsx");

export default tmp5;
export const StageChannelRaiseHandAck = tmp4;