// === Module 11860: ? ===

// Module 11860
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "getUncachedChannelPermissions" /* 4025 */;
import closure_7 from "updateVoiceState" /* 4399 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
let c3 = importAllResult;
({ View: c4, Pressable: c5 } = get_ActivityIndicator);
({ NOOP: closure_8, Permissions: c9 } = ME);
let closure_11 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = { borderRadius: ThemesDefault.radii.xxl, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4, marginVertical: -ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, minHeight: 28, justifyContent: "center", elevation: null, shadowRadius: 4, shadowOffset: null, shadowColor: null, shadowOpacity: null, borderColor: null, borderWidth: 1 };
  let num = 1;
  if (arg0) {
    num = 0;
  }
  obj[7] = num;
  obj[9] = { width: 0, height: 1 };
  obj[10] = ThemesDefault.colors.BLACK;
  let num2 = 0.14;
  if (arg1) {
    num2 = 0.08;
  }
  obj[11] = num2;
  let str = "rgba(255, 255, 255, 0.14)";
  if (arg1) {
    str = "rgba(0, 0, 0, 0.08)";
  }
  obj = { joinButton: obj, joinButtonContent: { width: "auto", alignItems: "center" }, joinButtonIconActive: null, joinButtonIconInactive: null, joinButtonText: null };
  obj[12] = str;
  obj = { tintColor: tmp(712).colors.WHITE };
  obj[2] = obj;
  obj[3] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj1 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  let num3 = 0;
  if (obj5.isAndroid()) {
    num3 = -2;
  }
  obj[4] = { marginTop: num3, alignSelf: "center", maxWidth: 64 };
  return obj;
});
const memoResult = importAllResult.memo(function VocalChannelJoinButton(channel) {
  channel = channel.channel;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = [];
  }
  ({ small, noIcon } = channel);
  if (small === undefined) {
    small = false;
  }
  let VJlc0S = dependencyMap;
  const tmp = voiceStates(8549)();
  let obj = channel(1363);
  let joinButtonText = callback(tmp, obj.isThemeLight(voiceStates(4315)()));
  obj1 = channel(9899);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = channel(647);
  const items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => !closure_1_6.can(closure_1_9.CONNECT, channel));
  let obj3 = channel(5255);
  const stageParticipantsCount = obj3.useStageParticipantsCount(channel.id, channel(5249).StageChannelParticipantNamedIndex.AUDIENCE);
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  const tmp2 = voiceStates(4315)();
  const obj5 = channel(5242);
  let tmp3Result = tmp3(647);
  const items1 = [closure_7];
  const stateFromStores1 = tmp3Result.useStateFromStores(items1, () => closure_1_7.hasVideo(channel.id));
  const sum = stageParticipantsCount + voiceStates.length;
  const items2 = [voiceStates];
  const memo = importAllResult.useMemo(() => {
    let found;
    if (voiceStates != null) {
      found = voiceStates.find((voiceState) => voiceState.voiceState.selfStream);
    }
    return null != found;
  }, items2);
  let tmp12 = stateFromStores1;
  if (!stateFromStores1) {
    tmp12 = tmp8;
  }
  tmp3Result = tmp3(11861);
  const connectedUserLimit = tmp3Result.useConnectedUserLimit({ channel, video: tmp12 });
  tmp8 = channel(5242).useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  let connectedUserLimitFormatted = channel(11861).useConnectedUserLimitFormatted({ channel, video: tmp12, userCount: sum });
  let tmp15 = !stateFromStores;
  if (!stateFromStores) {
    tmp15 = !isConnectedToVoiceChannel;
  }
  if (tmp15) {
    tmp15 = null != connectedUserLimitFormatted;
  }
  if (tmp15) {
    tmp15 = sum > 0;
  }
  if (tmp15) {
    tmp15 = sum >= connectedUserLimit / 2 + 1;
  }
  if (isConnectedToVoiceChannel) {
    return null;
  } else if (small) {
    obj = { accessibilityRole: "none", pointerEvents: "none", onPress: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no", style: null, children: null };
    obj[2] = closure_8;
    obj[6] = joinButtonText.joinButton;
    obj = { style: null, children: null };
    obj[0] = joinButtonText.joinButtonContent;
    obj1 = { style: null, color: "interactive-text-default", variant: "text-xs/semibold", lineClamp: 1, children: null };
    joinButtonText = joinButtonText.joinButtonText;
    obj1[0] = joinButtonText;
    if (connectedUserLimitFormatted == null) {
      const intl2 = tmp3(1236).intl;
      VJlc0S = tmp3(1236).t.VJlc0S;
      connectedUserLimitFormatted = intl2.string(VJlc0S);
    }
    obj1[4] = connectedUserLimitFormatted;
    obj[1] = tmp17(tmp3(4376).Text, obj1);
    obj[7] = tmp17(closure_4, obj);
    let tmp17Result = tmp17(closure_5, obj);
    const tmp26 = closure_5;
    const tmp28 = closure_4;
  } else if (tmp15) {
    obj2 = { text: null, icon: null, size: "sm", variant: null, onPress: null, pointerEvents: "none", accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    obj2[0] = connectedUserLimitFormatted;
    if (!noIcon) {
      if (!isConnectedToVoiceChannel) {
        if (!memo) {
          let joinButtonIconActive = joinButtonText.joinButtonIconInactive;
        }
        const items3 = [joinButtonIconActive, { marginRight: 3, marginLeft: -1 }];
        if (isGuildStageVoiceResult) {
          let VoiceNormalIcon = tmp3(4927).StageIcon;
        } else {
          VoiceNormalIcon = tmp3(4931).VoiceNormalIcon;
        }
        obj3 = { size: "xs", style: null };
        obj3[1] = items3;
        tmp17Result = tmp17(VoiceNormalIcon, obj3);
      }
      joinButtonIconActive = joinButtonText.joinButtonIconActive;
    }
    obj2[1] = undefined;
    let str2 = "tertiary";
    if (memo) {
      str2 = "destructive";
    }
    obj2[3] = str2;
    obj2[4] = closure_8;
    tmp17Result = tmp17(tmp18, obj2);
  } else {
    const intl = tmp3(1236).intl;
    let str = intl.string;
    let toUpperCase = tmp3(1236).t;
    if (memo) {
      str = str(toUpperCase.dI3q4h);
      toUpperCase = str.toUpperCase;
      let formatted = toUpperCase();
    } else {
      formatted = str(toUpperCase.VJlc0S);
    }
  }
});
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default memoResult;