// discord_app/modules/stage_channels/native/components/GlobalStageChannelStatus.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import StatusBarDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import useCanSpeakInChannelDefault from "../../useCanSpeakInChannel.tsx";
import useIsInvitedToSpeakDefault from "../../useIsInvitedToSpeak.tsx";
import PushNotificationDefault from "../../../../lib/pushnotification/PushNotification.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ActionSheetStore from "../../../action_sheet/native/ActionSheetStore.tsx";
import StageInstanceStore from "../../StageInstanceStore.tsx";

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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              channel = tmp7;
              if (null != id) {
                if (obj9.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
                  const obj1 = { entryPoint: tmp41(8413).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
                  const result = tmp3(8411).showAgeVerificationGetStartedModal(obj1);
                  const obj4 = tmp3(8411);
                } else {
                  dependencyMap(true);
                  dependencyMap = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj2 = { value: tmp41(8398).audienceAckRequestToSpeak(id, false), done: false };
                  return obj2;
                }
                obj9 = channel(5422);
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
              tmp27(8394).openStageChannel(closure_129_0);
              const obj8 = tmp27(8394);
            }
          }
          dependencyMap = 0;
          c5 = 3;
          obj = { value, done: true };
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
    stateFromStores = obj.useStateFromStores(
      items,
      () => StageInstanceStore.getStageInstanceByChannel(channel.id),
      items1,
    );
    closure_2 = stateFromStores;
    tmp8 = tmp2(tmp3[13])(() => {
      const intl = util.intl;
      let obj = { channelName, channelTopic: null };
      let topic;
      if (stateFromStores != null) {
        topic = stateFromStores.topic;
      }
      obj = { alertBody: intl.formatToPlainString(util.t.sqnsSP, obj), channelTopic: topic };
      const result = obj.presentLocalNotification(obj);
    });
    tmp9 = closure_5(closure_6.useState(false), 2);
    [tmp10, closure_3] = tmp9;
    obj2 = channel(tmp3[15]);
    id = undefined;
    if (channel != null) {
      id = channel.id;
    }
    stageBlockedUsersCount = obj2.useStageBlockedUsersCount(id);
    tmp6Result = tmp6(tmp3[15]);
    id1 = undefined;
    if (channel != null) {
      id1 = channel.id;
    }
    stageIgnoredUsersCount = tmp6Result.useStageIgnoredUsersCount(id1);
    tmp6Result1 = tmp6(tmp3[16]);
    if (channel != null) {
      id = channel.id;
    }
    tmp18Result = null;
    if (null != stateFromStores) {
      tmp18 = jsxs;
      tmp19 = View;
      obj = { style: null, children: null };
      items2 = [,];
      items2[0] = tmp.invitedContainer;
      obj1 = { height: null };
      obj1.height = tmp16;
      items2[1] = obj1;
      obj.style = items2;
      tmp20 = jsx;
      obj2 = { style: null, children: null };
      obj2.style = tmp.row;
      obj3 = { style: null, accessibilityRole: "header", children: null };
      obj3.style = tmp.invitedHeaderText;
      intl2 = tmp6(tmp3[8]).intl;
      obj3.children = intl2.string(tmp6(tmp3[8]).t.Ul1RJQ);
      obj2.children = jsx(tmp6(tmp3[22]).LegacyText, obj3);
      items3 = [, ,];
      items3[0] = jsx(View, obj2);
      num = 0;
      if (stageBlockedUsersCount <= 0) {
        tmp21 = null;
        if (stageIgnoredUsersCount <= 0) {
          items3[1] = null;
          obj4 = { style: null, children: null };
          obj4.style = tmp.row;
          obj5 = { style: null, children: null };
          obj5.style = tmp.buttonWrapper;
          obj6 = { variant: "secondary", onPress: null, pillStyle: null, size: "sm", text: null, grow: true };
          obj6.onPress = function handleDeclineInvite() {
            if (null != channel) {
              const result = StageChannelActionCreators.audienceAckRequestToSpeak(tmp, true);
            }
          };
          obj6.pillStyle = tmp.declineButtonPill;
          intl6 = tmp6(tmp3[8]).intl;
          obj6.text = intl6.string(tmp6(tmp3[8]).t["1YDv7a"]);
          obj5.children = tmp20(tmp6(tmp3[24]).BaseTextButton, obj6);
          items4 = [,];
          items4[0] = tmp20(tmp19, obj5);
          obj7 = { style: null, children: null };
          obj7.style = tmp.buttonWrapper;
          obj8 = {
            variant: "primary-overlay",
            onPress: null,
            size: "sm",
            text: null,
            loading: null,
            disabled: null,
            grow: true,
          };
          obj8.onPress = function handleAcceptInvite() {
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
          obj8.text = intl7.string(tmp6(tmp3[8]).t.MpO0px);
          obj8.loading = tmp10;
          obj8.disabled = tmp10;
          obj7.children = tmp20(tmp6(tmp3[25]).Button, obj8);
          items4[1] = tmp20(tmp19, obj7);
          obj4.children = items4;
          items3[2] = tmp18(tmp19, obj4);
          obj.children = items3;
          tmp18Result = tmp18(tmp19, obj);
        }
      }
      obj9 = { style: null, children: null };
      obj9.style = tmp.row;
      if (stageBlockedUsersCount <= 0) {
        if (stageIgnoredUsersCount > 0) {
          intl4 = tmp6(tmp3[8]).intl;
          obj10 = { number: null };
          obj10.number = stageIgnoredUsersCount;
          formatResult = intl4.format(tmp6(tmp3[8]).t["0bU4FO"], obj10);
        } else {
          intl3 = tmp6(tmp3[8]).intl;
          obj11 = { number: null };
          obj11.number = stageBlockedUsersCount;
          formatResult = intl3.format(tmp6(tmp3[8]).t.sFzx0G, obj11);
        }
        obj12 = { variant: "text-xs/medium", color: "text-overlay-light", children: null };
        obj12.children = formatResult;
        obj9.children = tmp20(tmp22, obj12);
        tmp20Result = tmp20(tmp19, obj9);
      }
      intl5 = tmp6(tmp3[8]).intl;
      obj13 = { number: null };
      stageIgnoredUsersCount = stageBlockedUsersCount + stageIgnoredUsersCount;
      obj13.number = stageIgnoredUsersCount;
      formatResult = intl5.format(tmp6(tmp3[8]).t["cXaoI+"], obj13);
    }
    return tmp18Result;
  }
}
const View = fn(17).View;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  invitedContainer: null,
  icon: null,
  activeSpeakerIcon: null,
  activeStageIcon: null,
  topic: null,
  channel: null,
  invitedHeaderText: null,
  noticeContainer: null,
  row: null,
  buttonWrapper: null,
  declineButtonPill: null,
};
createStyles = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.invitedContainer = createStyles;
createStyles.icon = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.TEXT_DEFAULT };
let obj1 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.TEXT_DEFAULT };
createStyles.activeSpeakerIcon = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.WHITE };
let obj2 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.colors.WHITE };
createStyles.activeStageIcon = {
  marginEnd: nativeDefault.space.PX_8,
  tintColor: nativeDefault.unsafe_rawColors.GREEN_360,
};
let obj3 = { marginEnd: nativeDefault.space.PX_8, tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
createStyles.topic = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj4 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
createStyles.channel = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
createStyles.invitedHeaderText = { color: nativeDefault.colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj6 = { color: nativeDefault.colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
createStyles.noticeContainer = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: -8,
  paddingBottom: nativeDefault.space.PX_4,
};
let obj7 = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: -8,
  paddingBottom: nativeDefault.space.PX_4,
};
createStyles.row = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  width: "100%",
  gap: nativeDefault.space.PX_4,
};
let obj8 = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  width: "100%",
  gap: nativeDefault.space.PX_4,
};
createStyles.buttonWrapper = { flexGrow: 1, margin: nativeDefault.space.PX_8 };
let obj9 = { flexGrow: 1, margin: nativeDefault.space.PX_8 };
createStyles.declineButtonPill = { borderColor: nativeDefault.colors.WHITE };
let closure_12 = createStyles.createStyles(createStyles);
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
    const intl = id(1114).intl;
    stringResult = intl.string(id(1114).t["/YzI63"]);
  }
  const tmp7 = useIsInvitedToSpeakDefault();
  let invitedHeaderText = useCanSpeakInChannelDefault(id);
  let obj = id(504);
  const items = [StageInstanceStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(id), items1);
  if (invitedHeaderText) {
    let activeSpeakerIcon = tmp.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp.activeStageIcon : tmp.icon;
  }
  if (!invitedHeaderText) {
    if (!tmp7) {
      let tmp8Result = tmp8(4269);
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
          obj = { channel };
          let tmp13Result = closure_10(StageChannelRaiseHandAck, obj);
        } else {
          obj = { style: tmp.noticeContainer, children: null };
          const obj1 = { animated: true, barStyle: str };
          const items2 = [closure_10(StatusBarDefault, obj1), ,];
          const obj2 = { style: activeSpeakerIcon, size: tmp8(1178).Icon.Sizes.REFRESH_SMALL_16, source: null };
          tmp8Result = tmp8(5028);
          obj2.source = tmp8Result.getChannelIconWithGuild(channel, guild);
          items2[1] = closure_10(tmp8(1178).Icon, obj2);
          tmp13Result = "" !== str2;
          if (tmp13Result) {
            const items3 = [tmp.topic];
            let invitedHeaderText2 = invitedHeaderText;
            if (invitedHeaderText) {
              invitedHeaderText2 = tmp.invitedHeaderText;
            }
            const obj3 = { style: null, children: null };
            items3[1] = invitedHeaderText2;
            obj3.style = items3;
            const items4 = [str2];
            if (tmp12) {
              tmp17 = null;
            }
            items4[1] = tmp17;
            obj3.children = items4;
            tmp13Result = closure_11(tmp8(1178).LegacyText, obj3);
          }
          const items5 = [tmp13Result];
          let tmp15Result = !tmp12;
          if (tmp11 <= 50) {
            const items6 = [tmp.channel];
            if (invitedHeaderText) {
              invitedHeaderText = tmp.invitedHeaderText;
            }
            const obj4 = { style: null, children: null };
            items6[1] = invitedHeaderText;
            obj4.style = items6;
            obj4.children = combined;
            tmp15Result = closure_10(tmp8(1178).LegacyText, obj4);
          }
          const obj5 = { numberOfLines: 1, children: null };
          items5[1] = tmp15Result;
          obj5.children = items5;
          items2[2] = closure_11(tmp8(1178).LegacyText, obj5);
          obj.children = items2;
          tmp13Result = closure_11(View, obj);
        }
        return tmp13Result;
      }
    }
    return null;
  }
  str = "light-content";
}
export { StageChannelRaiseHandAck };
