// discord_app/modules/stage_channels/native/components/GlobalStageChannelStatus.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import computeChannelNameDefault from "../../../channel/useChannelName.tsx";
import useMountLayoutEffectDefault from "../../../../hooks/useMountEffect.tsx";
import useIsInvitedToSpeakDefault from "../../useIsInvitedToSpeak.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../action_sheet/native/ActionSheetStore.tsx";
import closure_9 from "../../StageInstanceStore.tsx";
import { Fonts } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
class StageChannelRaiseHandAck {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    _handleAcceptInvite = function _handleAcceptInvite(arg0) {
      const self = this;
      const tmp = _handleAcceptInvite(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                let lib = tmp7;
                if (null != lib) {
                  if (obj9.shouldAgeVerifyToSpeakForCurrentUser(lib.id)) {
                    obj1 = { entryPoint: null };
                    obj1[0] = tmp42(8684).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND;
                    const result = closure_1_1(8682).showAgeVerificationGetStartedModal(obj1);
                    const obj4 = closure_1_1(8682);
                  } else {
                    dependencyMap(true);
                    dependencyMap = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = tmp42(8669).audienceAckRequestToSpeak(lib, false);
                    return obj2;
                  }
                  obj9 = lib(5366);
                }
                c5 = 3;
              }
            } else if (1 === tmp7) {
              dependencyMap = 0;
              lib = closure_2;
              dependencyMap(false);
              throw lib;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              dependencyMap = 0;
              dependencyMap(false);
              if (null == closure_1_8.getKey()) {
                closure_1_2(8665).openStageChannel(lib);
                const obj8 = closure_1_2(8665);
              }
            }
            dependencyMap = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp27) {
            closure_2 = tmp27;
            if (tmp4 === dependencyMap) {
              c5 = tmp2;
              throw tmp27;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      closure_4 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp = closure_12();
    tmp3 = closure_3;
    tmp2 = closure_1;
    stringResult = require("computeChannelName")(channel);
    if (stringResult == null) {
      tmp5 = channel;
      intl = require("getSystemLocale").intl;
      stringResult = intl.string(require("getSystemLocale").t["/YzI63"]);
    }
    closure_1 = stringResult;
    tmp6 = channel;
    obj = require("initialize");
    items = [];
    items[0] = closure_9;
    items1 = [];
    items1[0] = channel.id;
    stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getStageInstanceByChannel(channel.id), items1);
    closure_2 = stateFromStores;
    tmp8 = require("useMountLayoutEffect")(() => {
      let obj = _undefined(_undefined2[14]);
      const intl = channel(_undefined2[8]).intl;
      obj = { channelName: _undefined, channelTopic: null };
      let topic;
      if (stateFromStores != null) {
        topic = stateFromStores.topic;
      }
      obj = { alertBody: intl.formatToPlainString(channel(_undefined2[8]).t.sqnsSP, obj) };
      obj[1] = topic;
      const result = obj.presentLocalNotification(obj);
    });
    tmp9 = closure_5(closure_6.useState(false), 2);
    [tmp10, closure_3] = tmp9;
    obj2 = require("useStageBlockedUsersCount");
    id = undefined;
    if (channel != null) {
      id = channel.id;
    }
    stageBlockedUsersCount = obj2.useStageBlockedUsersCount(id);
    tmp6Result = require("useStageBlockedUsersCount");
    id1 = undefined;
    if (channel != null) {
      id1 = channel.id;
    }
    stageIgnoredUsersCount = tmp6Result.useStageIgnoredUsersCount(id1);
    tmp6Result1 = require("CALL_ACTION_BAR_HEIGHT");
    if (channel != null) {
      id = channel.id;
    }
    tmp18Result = null;
    if (null != stateFromStores) {
      tmp18 = jsxs;
      tmp19 = View;
      obj = { style: null, children: null };
      items2 = [, ];
      items2[0] = tmp.invitedContainer;
      obj1 = { height: null };
      obj1[0] = tmp16;
      items2[1] = obj1;
      obj[0] = items2;
      tmp20 = jsx;
      obj2 = { style: null, children: null };
      obj2[0] = tmp.row;
      obj3 = { style: null, accessibilityRole: "header", children: null };
      obj3[0] = tmp.invitedHeaderText;
      intl2 = require("getSystemLocale").intl;
      obj3[2] = intl2.string(require("getSystemLocale").t.Ul1RJQ);
      obj2[1] = jsx(require("Button").LegacyText, obj3);
      items3 = [, , ];
      items3[0] = jsx(View, obj2);
      num = 0;
      if (stageBlockedUsersCount <= 0) {
        tmp21 = null;
        if (stageIgnoredUsersCount <= 0) {
          items3[1] = null;
          obj4 = { style: null, children: null };
          obj4[0] = tmp.row;
          obj5 = { style: null, children: null };
          obj5[0] = tmp.buttonWrapper;
          obj6 = { variant: "secondary", onPress: null, pillStyle: null, size: "sm", text: null, grow: true };
          obj6[1] = function handleDeclineInvite() {
            if (null != channel) {
              const result = channel(_undefined2[20]).audienceAckRequestToSpeak(tmp, true);
              const obj = channel(_undefined2[20]);
            }
          };
          obj6[2] = tmp.declineButtonPill;
          intl6 = require("getSystemLocale").intl;
          obj6[4] = intl6.string(require("getSystemLocale").t["1YDv7a"]);
          obj5[1] = tmp20(require("CollapsingText").BaseTextButton, obj6);
          items4 = [, ];
          items4[0] = tmp20(tmp19, obj5);
          obj7 = { style: null, children: null };
          obj7[0] = tmp.buttonWrapper;
          obj8 = { variant: "primary-overlay", onPress: null, size: "sm", text: null, loading: null, disabled: null, grow: true };
          obj8[1] = function handleAcceptInvite() {
            const self = this;
            const apply = _handleAcceptInvite.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          intl7 = require("getSystemLocale").intl;
          obj8[3] = intl7.string(require("getSystemLocale").t.MpO0px);
          obj8[4] = tmp10;
          obj8[5] = tmp10;
          obj7[1] = tmp20(require("Button").Button, obj8);
          items4[1] = tmp20(tmp19, obj7);
          obj4[1] = items4;
          items3[2] = tmp18(tmp19, obj4);
          obj[1] = items3;
          tmp18Result = tmp18(tmp19, obj);
        }
      }
      obj9 = { style: null, children: null };
      obj9[0] = tmp.row;
      if (stageBlockedUsersCount <= 0) {
        if (stageIgnoredUsersCount > 0) {
          intl4 = require("getSystemLocale").intl;
          obj10 = { number: null };
          obj10[0] = stageIgnoredUsersCount;
          formatResult = intl4.format(require("getSystemLocale").t["0bU4FO"], obj10);
        } else {
          intl3 = require("getSystemLocale").intl;
          obj11 = { number: null };
          obj11[0] = stageBlockedUsersCount;
          formatResult = intl3.format(require("getSystemLocale").t.sFzx0G, obj11);
        }
        obj12 = { variant: "text-xs/medium", color: "text-overlay-light", children: null };
        obj12[2] = formatResult;
        obj9[1] = tmp20(tmp22, obj12);
        tmp20Result = tmp20(tmp19, obj9);
      }
      intl5 = require("getSystemLocale").intl;
      obj13 = { number: null };
      stageIgnoredUsersCount = stageBlockedUsersCount + stageIgnoredUsersCount;
      obj13[0] = stageIgnoredUsersCount;
      formatResult = intl5.format(require("getSystemLocale").t["cXaoI+"], obj13);
    }
    return tmp18Result;
  }
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { invitedContainer: null, icon: null, activeSpeakerIcon: null, activeStageIcon: null, topic: null, channel: null, invitedHeaderText: null, noticeContainer: null, row: null, buttonWrapper: null, declineButtonPill: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginEnd: ThemesDefault.space.PX_8, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
let obj1 = { marginEnd: ThemesDefault.space.PX_8, tintColor: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[2] = { marginEnd: ThemesDefault.space.PX_8, tintColor: ThemesDefault.colors.WHITE };
let obj2 = { marginEnd: ThemesDefault.space.PX_8, tintColor: ThemesDefault.colors.WHITE };
createCacheKey[3] = { marginEnd: ThemesDefault.space.PX_8, tintColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
let obj3 = { marginEnd: ThemesDefault.space.PX_8, tintColor: ThemesDefault.unsafe_rawColors.GREEN_360 };
createCacheKey[4] = { color: ThemesDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
let obj4 = { color: ThemesDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD };
createCacheKey[5] = { color: ThemesDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj5 = { color: ThemesDefault.colors.TEXT_DEFAULT, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
createCacheKey[6] = { color: ThemesDefault.colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
let obj6 = { color: ThemesDefault.colors.WHITE, fontSize: 14, fontFamily: Fonts.PRIMARY_MEDIUM };
createCacheKey[7] = { alignItems: "center", justifyContent: "center", flexDirection: "row", paddingHorizontal: ThemesDefault.space.PX_8, marginTop: -8, paddingBottom: ThemesDefault.space.PX_4 };
let obj7 = { alignItems: "center", justifyContent: "center", flexDirection: "row", paddingHorizontal: ThemesDefault.space.PX_8, marginTop: -8, paddingBottom: ThemesDefault.space.PX_4 };
createCacheKey[8] = { alignItems: "center", justifyContent: "center", flexDirection: "row", width: "100%", gap: ThemesDefault.space.PX_4 };
let obj8 = { alignItems: "center", justifyContent: "center", flexDirection: "row", width: "100%", gap: ThemesDefault.space.PX_4 };
createCacheKey[9] = { flexGrow: 1, margin: ThemesDefault.space.PX_8 };
let obj9 = { flexGrow: 1, margin: ThemesDefault.space.PX_8 };
createCacheKey[10] = { borderColor: ThemesDefault.colors.WHITE };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj10 = { borderColor: ThemesDefault.colors.WHITE };
let result = require("set").fileFinishedImporting("modules/stage_channels/native/components/GlobalStageChannelStatus.tsx");

export default function GlobalStageChannelStatus(arg0) {
  ({ channel, guild } = arg0);
  let id;
  const tmp = callback3();
  id = undefined;
  if (channel != null) {
    id = channel.id;
  }
  let stringResult = computeChannelNameDefault(channel);
  if (stringResult == null) {
    const intl = id(1236).intl;
    stringResult = intl.string(id(1236).t["/YzI63"]);
  }
  const tmp7 = useIsInvitedToSpeakDefault();
  let invitedHeaderText = tmp3(9551)(id);
  let obj = id(589);
  const items = [closure_9];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getStageInstanceByChannel(id), items1);
  if (invitedHeaderText) {
    let activeSpeakerIcon = tmp.activeSpeakerIcon;
  } else {
    activeSpeakerIcon = null != stateFromStores ? tmp.activeStageIcon : tmp.icon;
  }
  if (!invitedHeaderText) {
    if (!tmp7) {
      let tmp8Result = tmp8(1364);
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
          obj = { channel: null };
          obj[0] = channel;
          let tmp13Result = callback2(StageChannelRaiseHandAck, obj);
        } else {
          obj = { style: null, children: null };
          obj[0] = tmp.noticeContainer;
          obj1 = { animated: true, barStyle: null };
          obj1[1] = str;
          const items2 = [callback2(tmp3(9530), obj1), , ];
          const obj2 = { style: null, size: null, source: null };
          obj2[0] = activeSpeakerIcon;
          obj2[1] = tmp8(1297).Icon.Sizes.REFRESH_SMALL_16;
          tmp8Result = tmp8(4981);
          obj2[2] = tmp8Result.getChannelIconWithGuild(channel, guild);
          items2[1] = callback2(tmp8(1297).Icon, obj2);
          tmp13Result = "" !== str2;
          if (tmp13Result) {
            const items3 = [tmp.topic, ];
            let invitedHeaderText2 = invitedHeaderText;
            if (invitedHeaderText) {
              invitedHeaderText2 = tmp.invitedHeaderText;
            }
            const obj3 = { style: null, children: null };
            items3[1] = invitedHeaderText2;
            obj3[0] = items3;
            const items4 = [str2, ];
            if (tmp12) {
              tmp17 = null;
            }
            items4[1] = tmp17;
            obj3[1] = items4;
            tmp13Result = tmp13(tmp8(1297).LegacyText, obj3);
          }
          const items5 = [tmp13Result, ];
          let tmp15Result = !tmp12;
          if (tmp11 <= 50) {
            const items6 = [tmp.channel, ];
            if (invitedHeaderText) {
              invitedHeaderText = tmp.invitedHeaderText;
            }
            const obj4 = { style: null, children: null };
            items6[1] = invitedHeaderText;
            obj4[0] = items6;
            obj4[1] = combined;
            tmp15Result = tmp15(tmp8(1297).LegacyText, obj4);
          }
          const obj5 = { numberOfLines: 1, children: null };
          items5[1] = tmp15Result;
          obj5[1] = items5;
          items2[2] = closure_11(tmp8(1297).LegacyText, obj5);
          obj[1] = items2;
          tmp13Result = tmp13(View, obj);
          const tmp14 = View;
          tmp15 = callback2;
        }
        return tmp13Result;
      }
    }
    return null;
  }
  str = "light-content";
};
export { StageChannelRaiseHandAck };