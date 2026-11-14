// discord_app/modules/stage_channels/native/components/GlobalStageChannelStatus.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import StatusBarDefault from "../../../status_bar/native/components/StatusBar.android.tsx";
import useIsInvitedToSpeakDefault from "../../useIsInvitedToSpeak.tsx";
import useCanSpeakInChannelDefault from "../../useCanSpeakInChannel.tsx";
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
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              if (null != id) {
                if (obj9.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
                  const obj5 = { entryPoint: tmp3(6833).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
                  const result = v2(8190).showAgeVerificationGetStartedModal(obj5);
                  const obj4 = v2(8190);
                } else {
                  dependencyMap(true);
                  dependencyMap = 1;
                  v2 = 2;
                  c4 = 1;
                  const obj6 = { value: tmp3(6909).audienceAckRequestToSpeak(id, false), done: false };
                  return obj6;
                }
                obj9 = tmp3(6908);
              }
              c4 = 3;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_3(false);
            throw tmp29;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            dependencyMap = 0;
            closure_128_3(false);
            if (null == key.getKey()) {
              tmp29(6903).openStageChannel(closure_128_0);
              const obj8 = tmp29(6903);
            }
          }
          dependencyMap = 0;
          closure_128_3(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp29) {
          if (tmp4 === dependencyMap) {
            c4 = tmp2;
            throw tmp29;
          } else {
            v2 = tmp;
          }
        }
      }
    };
    tmp = closure_12();
    tmp2 = closure_1;
    tmp3 = closure_3;
    stringResult = closure_1(closure_3[10])(channel);
    if (stringResult == null) {
      tmp5 = channel;
      intl = channel(tmp3[11]).intl;
      stringResult = intl.string(channel(tmp3[11]).t["/YzI63"]);
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
      items2 = [,];
      items2[0] = tmp.invitedContainer;
      obj15 = { height: null };
      obj15.height = tmp16;
      items2[1] = obj15;
      obj1.style = items2;
      tmp20 = jsx;
      obj16 = { style: null, children: null };
      obj16.style = tmp.row;
      obj17 = { style: null, accessibilityRole: "header", children: null };
      obj17.style = tmp.invitedHeaderText;
      intl2 = tmp6(tmp3[11]).intl;
      obj17.children = intl2.string(tmp6(tmp3[11]).t.Ul1RJQ);
      obj16.children = jsx(tmp6(tmp3[22]).LegacyText, obj17);
      items3 = [, ,];
      items3[0] = jsx(View, obj16);
      num = 0;
      if (stageBlockedUsersCount > 0) {
        obj18 = { style: null, children: null };
        obj18.style = tmp.row;
        obj19 = { variant: "body-xs/medium", color: "text-overlay-light", children: null };
        obj19.children = tmp2(tmp3[24])(stageBlockedUsersCount, stageIgnoredUsersCount);
        obj18.children = tmp20(tmp6(tmp3[23]).Text, obj19);
        tmp20Result = tmp20(tmp19, obj18);
      } else {
        tmp20Result = null;
      }
      items3[1] = tmp20Result;
      obj20 = { style: null, children: null };
      obj20.style = tmp.row;
      obj21 = { style: null, children: null };
      obj21.style = tmp.buttonWrapper;
      obj22 = { variant: "secondary", onPress: null, pillStyle: null, size: "sm", text: null, grow: true };
      obj22.onPress = function handleDeclineInvite() {
        if (null != channel) {
          const result = StageChannelActionCreators.audienceAckRequestToSpeak(tmp, true);
        }
      };
      obj22.pillStyle = tmp.declineButtonPill;
      intl3 = tmp6(tmp3[11]).intl;
      obj22.text = intl3.string(tmp6(tmp3[11]).t["1YDv7a"]);
      obj21.children = tmp20(tmp6(tmp3[25]).BaseTextButton, obj22);
      items4 = [,];
      items4[0] = tmp20(tmp19, obj21);
      obj23 = { style: null, children: null };
      obj23.style = tmp.buttonWrapper;
      obj24 = {
        variant: "primary-overlay",
        onPress: null,
        size: "sm",
        text: null,
        loading: null,
        disabled: null,
        grow: true,
      };
      obj24.onPress = function handleAcceptInvite() {
        const self = this;
        const apply = closure_4.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      intl4 = tmp6(tmp3[11]).intl;
      obj24.text = intl4.string(tmp6(tmp3[11]).t.MpO0px);
      obj24.loading = tmp10;
      obj24.disabled = tmp10;
      obj23.children = tmp20(tmp6(tmp3[26]).Button, obj24);
      items4[1] = tmp20(tmp19, obj23);
      obj20.children = items4;
      items3[2] = tmp18(tmp19, obj20);
      obj1.children = items3;
      tmp18Result = tmp18(tmp19, obj1);
    }
    return tmp18Result;
  }
}
const View = fn(17).View;
const Fonts = fn(1072).Fonts;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  invitedContainer: { paddingHorizontal: nativeDefault.space.PX_8 },
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
obj2.noticeContainer = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: -8,
  paddingBottom: nativeDefault.space.PX_4,
};
let obj10 = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginTop: -8,
  paddingBottom: nativeDefault.space.PX_4,
};
obj2.row = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  width: "100%",
  gap: nativeDefault.space.PX_4,
};
let obj11 = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  width: "100%",
  gap: nativeDefault.space.PX_4,
};
obj2.buttonWrapper = { flexGrow: 1, margin: nativeDefault.space.PX_8 };
let obj12 = { flexGrow: 1, margin: nativeDefault.space.PX_8 };
obj2.declineButtonPill = { borderColor: nativeDefault.colors.WHITE };
const application_id = createStyles.createStyles(obj2);
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
    const intl = id(1113).intl;
    stringResult = intl.string(id(1113).t["/YzI63"]);
  }
  const tmp7 = useIsInvitedToSpeakDefault();
  let invitedHeaderText = useCanSpeakInChannelDefault(id);
  items = [StageInstanceStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(
    items,
    () => StageInstanceStore.getStageInstanceByChannel(id),
    items1,
  );
  if (invitedHeaderText) {
    let activeSpeakerIcon = tmp.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp.activeStageIcon : tmp.icon;
  }
  if (!invitedHeaderText) {
    if (!tmp7) {
      tmp8(5328);
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
          const items2 = [closure_10(StatusBarDefault, obj4), ,];
          const obj5 = {
            style: activeSpeakerIcon,
            size: tmp8(1187).Icon.Sizes.REFRESH_SMALL_16,
            source: tmp8(8033).getChannelIconWithGuild(channel, guild),
          };
          items2[1] = closure_10(tmp8(1187).Icon, obj5);
          let tmp13Result = "" !== str2;
          if (tmp13Result) {
            const items3 = [tmp.topic];
            let invitedHeaderText2 = invitedHeaderText;
            if (invitedHeaderText) {
              invitedHeaderText2 = tmp.invitedHeaderText;
            }
            const obj6 = { style: null, children: null };
            items3[1] = invitedHeaderText2;
            obj6.style = items3;
            const items4 = [str2];
            if (tmp12) {
              tmp17 = null;
            }
            items4[1] = tmp17;
            obj6.children = items4;
            tmp13Result = closure_11(tmp8(1187).LegacyText, obj6);
          }
          const items5 = [tmp13Result];
          let tmp15Result = !tmp12;
          if (tmp11 <= 50) {
            const items6 = [tmp.channel];
            if (invitedHeaderText) {
              invitedHeaderText = tmp.invitedHeaderText;
            }
            const obj7 = { style: null, children: null };
            items6[1] = invitedHeaderText;
            obj7.style = items6;
            obj7.children = combined;
            tmp15Result = closure_10(tmp8(1187).LegacyText, obj7);
          }
          const obj8 = { numberOfLines: 1, children: null };
          items5[1] = tmp15Result;
          obj8.children = items5;
          items2[2] = closure_11(tmp8(1187).LegacyText, obj8);
          obj3.children = items2;
          tmp13Result2 = closure_11(View, obj3);
          const tmp8Result2 = tmp8(8033);
        }
        return tmp13Result2;
      }
    }
    return null;
  }
  str = "light-content";
  const obj = id(504);
}
export { StageChannelRaiseHandAck };
