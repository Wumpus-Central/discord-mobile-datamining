// === Module 11460: ? ===

// Module 11460
import importAllResult from "getSystemLocale";
import get_ActivityIndicator from "useShowConnectedUserLimit";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import { jsx } from "StageIcon";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ View: c4, Pressable: c5 } = get_ActivityIndicator);
({ NOOP: metroImportAll, Permissions: c9 } = ME);
let closure_11 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = { borderRadius: importDefault(712).radii.xxl, paddingHorizontal: importDefault(712).space.PX_8, paddingVertical: importDefault(712).space.PX_4, marginVertical: -importDefault(712).space.PX_4, backgroundColor: importDefault(712).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, minHeight: 28, justifyContent: "center", elevation: null, shadowRadius: 4, shadowOffset: null, shadowColor: null, shadowOpacity: null, borderColor: null, borderWidth: 1 };
  let num = 1;
  if (arg0) {
    num = 0;
  }
  obj[7] = num;
  obj[9] = { width: 0, height: 1 };
  obj[10] = importDefault(712).colors.BLACK;
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
  obj[3] = { tintColor: importDefault(712).colors.INTERACTIVE_TEXT_DEFAULT };
  const obj1 = { tintColor: importDefault(712).colors.INTERACTIVE_TEXT_DEFAULT };
  let num3 = 0;
  if (obj5.isAndroid()) {
    num3 = -2;
  }
  obj[4] = { marginTop: num3, alignSelf: "center", maxWidth: 64 };
  return obj;
});
const memoResult = importAllResult.memo(function VocalChannelJoinButton(channel) {
  let noIcon;
  let small;
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
  const tmp = voiceStates(8834)();
  let obj = channel(4039);
  let joinButtonText = callback(tmp, obj.isThemeLight(voiceStates(4129)()));
  let obj1 = channel(10253);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = channel(647);
  const items = [getUncachedChannelPermissions];
  const stateFromStores = obj2.useStateFromStores(items, () => !outer1_6.can(outer1_9.CONNECT, channel));
  let obj3 = channel(5024);
  const stageParticipantsCount = obj3.useStageParticipantsCount(channel.id, channel(5018).StageChannelParticipantNamedIndex.AUDIENCE);
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  const tmp2 = voiceStates(4129)();
  const obj5 = channel(5011);
  let tmp3Result = tmp3(647);
  const items1 = [updateVoiceState];
  const stateFromStores1 = tmp3Result.useStateFromStores(items1, () => outer1_7.hasVideo(channel.id));
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
  tmp3Result = tmp3(11461);
  const connectedUserLimit = tmp3Result.useConnectedUserLimit({ channel, video: tmp12 });
  tmp8 = channel(5011).useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  let connectedUserLimitFormatted = channel(11461).useConnectedUserLimitFormatted({ channel, video: tmp12, userCount: sum });
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
    obj[1] = tmp17(tmp3(4189).Text, obj1);
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
          let VoiceNormalIcon = tmp3(4715).StageIcon;
        } else {
          VoiceNormalIcon = tmp3(4719).VoiceNormalIcon;
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
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default memoResult;