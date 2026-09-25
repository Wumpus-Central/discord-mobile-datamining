// === Module 8957: GlobalStageChannelStatus ===

// Module 8957 (GlobalStageChannelStatus)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useChannelNameDefault from "useChannelName" /* 4982 */;
import useMountEffectDefault from "useMountEffect" /* 5291 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7838 */;
import PushNotificationDefault from "PushNotification" /* 8738 */;
import StatusBarDefault from "StatusBar" /* 8831 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 8853 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 8948 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4518 */;
import StageInstanceStore from "StageInstanceStore" /* 2049 */;

require = fn;
class StageChannelRaiseHandAck {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = async function _handleAcceptInvite() {
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
          return { value: "HermesInternal", done: null };
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
                  const obj5 = { entryPoint: tmp41(7853).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
                  const result = tmp3(7851).showAgeVerificationGetStartedModal(obj5);
                  const obj4 = tmp3(7851);
                } else {
                  dependencyMap(true);
                  dependencyMap = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: tmp41(7838).audienceAckRequestToSpeak(id, false), done: false };
                  return obj6;
                }
                obj9 = channel(5729);
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
              tmp27(7834).openStageChannel(closure_129_0);
              const obj8 = tmp27(7834);
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
    tmp = closure_12();
    tmp3 = closure_3;
    tmp2 = closure_1;
    stringResult = closure_1(closure_3[11])(channel);
    if (stringResult == null) {
      tmp5 = channel;
      intl = channel(tmp3[8]).intl;
      stringResult = intl.string(channel(tmp3[8]).t["/YzI63"]);
    }
    closure_1 = stringResult;
    tmp6 = channel;
    obj = channel(tmp3[12]);
    items = [];
    items[0] = closure_9;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channel.id), items1);
    closure_2 = stateFromStores;
    tmp8 = tmp2(tmp3[13])(() => {
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
    tmp9 = closure_5(closure_6.useState(false), 2);
    [tmp10, closure_3] = tmp9;
    obj2 = channel(tmp3[15]);
    id1 = undefined;
    if (channel != null) {
      id1 = channel.id;
    }
    stageBlockedUsersCount = obj2.useStageBlockedUsersCount(id1);
    tmp6Result = tmp6(tmp3[15]);
    id2 = undefined;
    if (channel != null) {
      id2 = channel.id;
    }
    stageIgnoredUsersCount = tmp6Result.useStageIgnoredUsersCount(id2);
    tmp6Result1 = tmp6(tmp3[16]);
    if (channel != null) {
      id = channel.id;
    }
    tmp18Result = null;
    if (null != stateFromStores) {
      tmp18 = jsxs;
      tmp19 = View;
      obj1 = { style: null, children: null };
      items2 = [, ];
      items2[0] = tmp.invitedContainer;
      obj18 = { height: null };
      obj18.height = tmp16;
      items2[1] = obj18;
      obj1.style = items2;
      tmp20 = jsx;
      obj19 = { style: null, children: null };
      obj19.style = tmp.row;
      obj20 = { style: null, accessibilityRole: "header", children: null };
      obj20.style = tmp.invitedHeaderText;
      intl2 = tmp6(tmp3[8]).intl;
      obj20.children = intl2.string(tmp6(tmp3[8]).t.Ul1RJQ);
      obj19.children = jsx(tmp6(tmp3[22]).LegacyText, obj20);
      items3 = [, , ];
      items3[0] = jsx(View, obj19);
      num = 0;
      if (stageBlockedUsersCount <= 0) {
        tmp21 = null;
        if (stageIgnoredUsersCount <= 0) {
          items3[1] = null;
          obj21 = { style: null, children: null };
          obj21.style = tmp.row;
          obj22 = { style: null, children: null };
          obj22.style = tmp.buttonWrapper;
          obj23 = { variant: "secondary", onPress: null, pillStyle: null, size: "sm", text: null, grow: true };
          obj23.onPress = function handleDeclineInvite() {
            if (null != channel) {
              const result = StageChannelActionCreators.audienceAckRequestToSpeak(tmp, true);
            }
          };
          obj23.pillStyle = tmp.declineButtonPill;
          intl6 = tmp6(tmp3[8]).intl;
          obj23.text = intl6.string(tmp6(tmp3[8]).t["1YDv7a"]);
          obj22.children = tmp20(tmp6(tmp3[24]).BaseTextButton, obj23);
          items4 = [, ];
          items4[0] = tmp20(tmp19, obj22);
          obj24 = { style: null, children: null };
          obj24.style = tmp.buttonWrapper;
          obj25 = { variant: "primary-overlay", onPress: null, size: "sm", text: null, loading: null, disabled: null, grow: true };
          obj25.onPress = function handleAcceptInvite() {
            const self = this;
            const apply = closure_4.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          intl7 = tmp6(tmp3[8]).intl;
          obj25.text = intl7.string(tmp6(tmp3[8]).t.MpO0px);
          obj25.loading = tmp10;
          obj25.disabled = tmp10;
          obj24.children = tmp20(tmp6(tmp3[25]).Button, obj25);
          items4[1] = tmp20(tmp19, obj24);
          obj21.children = items4;
          items3[2] = tmp18(tmp19, obj21);
          obj1.children = items3;
          tmp18Result = tmp18(tmp19, obj1);
        }
      }
      obj26 = { style: null, children: null };
      obj26.style = tmp.row;
      if (stageBlockedUsersCount <= 0) {
        if (stageIgnoredUsersCount > 0) {
          intl4 = tmp6(tmp3[8]).intl;
          obj27 = { number: null };
          obj27.number = stageIgnoredUsersCount;
          formatResult = intl4.format(tmp6(tmp3[8]).t["0bU4FO"], obj27);
        } else {
          intl3 = tmp6(tmp3[8]).intl;
          obj28 = { number: null };
          obj28.number = stageBlockedUsersCount;
          formatResult = intl3.format(tmp6(tmp3[8]).t.sFzx0G, obj28);
        }
        obj29 = { variant: "text-xs/medium", color: "text-overlay-light", children: null };
        obj29.children = formatResult;
        obj26.children = tmp20(tmp22, obj29);
        tmp20Result = tmp20(tmp19, obj26);
      }
      intl5 = tmp6(tmp3[8]).intl;
      obj30 = { number: null };
      stageIgnoredUsersCount = stageBlockedUsersCount + stageIgnoredUsersCount;
      obj30.number = stageIgnoredUsersCount;
      formatResult = intl5.format(tmp6(tmp3[8]).t["cXaoI+"], obj30);
    }
    return tmp18Result;
  }
}
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/GlobalStageChannelStatus.tsx");

export default function GlobalStageChannelStatus(arg0) {
  ({ channel, guild } = arg0);
  const tmp = closure_12();
  let id;
  if (channel != null) {
    id = channel.id;
  }
  let stringResult = useChannelNameDefault(channel);
  if (stringResult == null) {
    const intl = id(1115).intl;
    stringResult = intl.string(id(1115).t["/YzI63"]);
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
      tmp8(4535);
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
          let tmp13Result2 = closure_10(StageChannelRaiseHandAck, obj2);
        } else {
          const obj3 = { style: tmp.noticeContainer, children: null };
          const obj4 = { animated: true, barStyle: str };
          const items2 = [closure_10(StatusBarDefault, obj4), , ];
          const obj5 = { style: activeSpeakerIcon, size: tmp8(1177).Icon.Sizes.REFRESH_SMALL_16, source: tmp8(5328).getChannelIconWithGuild(channel, guild) };
          items2[1] = closure_10(tmp8(1177).Icon, obj5);
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
            tmp13Result = closure_11(tmp8(1177).LegacyText, obj6);
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
            tmp15Result = closure_10(tmp8(1177).LegacyText, obj7);
          }
          const obj8 = { numberOfLines: 1, children: null };
          items5[1] = tmp15Result;
          obj8.children = items5;
          items2[2] = closure_11(tmp8(1177).LegacyText, obj8);
          obj3.children = items2;
          tmp13Result2 = closure_11(View, obj3);
          const tmp8Result2 = tmp8(5328);
        }
        return tmp13Result2;
      }
    }
    return null;
  }
  str = "light-content";
  const obj = id(504);
};
export { StageChannelRaiseHandAck };