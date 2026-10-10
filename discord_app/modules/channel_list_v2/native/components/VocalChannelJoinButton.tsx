// === Module 11989: VocalChannelJoinButton ===

// Module 11989 (VocalChannelJoinButton)
import nativeDefault from "native" /* 587 */;
import StageIcon from "StageIcon" /* 8224 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 8228 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1085);
({ NOOP: closure_8, Permissions: closure_9 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_11 = createStyles.createStyles((arg0, arg1) => {
  const obj = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, marginVertical: -nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, minHeight: 28, justifyContent: "center", elevation: null, shadowRadius: 4, shadowOffset: null, shadowColor: null, shadowOpacity: null, borderColor: null, borderWidth: 1 };
  let num = 1;
  if (arg0) {
    num = 0;
  }
  obj.elevation = num;
  obj.shadowOffset = { width: 0, height: 1 };
  obj.shadowColor = nativeDefault.colors.BLACK;
  let num2 = 0.14;
  if (arg1) {
    num2 = 0.08;
  }
  obj.shadowOpacity = num2;
  let str = "rgba(255, 255, 255, 0.14)";
  if (arg1) {
    str = "rgba(0, 0, 0, 0.08)";
  }
  const obj2 = { joinButton: obj, joinButtonContent: { width: "auto", alignItems: "center" }, joinButtonIconActive: { tintColor: nativeDefault.colors.WHITE }, joinButtonIconInactive: null, joinButtonText: null };
  obj.borderColor = str;
  const obj3 = { tintColor: nativeDefault.colors.WHITE };
  obj2.joinButtonIconInactive = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  let num3 = 0;
  if (obj5.isAndroid()) {
    num3 = -2;
  }
  obj2.joinButtonText = { marginTop: num3, alignSelf: "center", maxWidth: 64 };
  return obj2;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VocalChannelJoinButton(channel) {
  const cResult = channel(isConnectedToVoiceChannel[10]).c(50);
  channel = channel.channel;
  ({ voiceStates, noIcon, small } = channel);
  if (cResult[0] !== voiceStates) {
    let items = voiceStates;
    if (undefined === voiceStates) {
      items = [];
    }
    cResult[0] = voiceStates;
    cResult[1] = items;
    let arr = items;
  } else {
    arr = cResult[1];
  }
  let obj = channel(isConnectedToVoiceChannel[10]);
  const tmp5 = require("useTheme")();
  if (cResult[2] !== tmp5) {
    const isThemeLightResult = tmp(tmp2[13]).isThemeLight(tmp5);
    cResult[2] = tmp5;
    cResult[3] = isThemeLightResult;
    let tmp6 = isThemeLightResult;
    const tmpResult = tmp(tmp2[13]);
  } else {
    tmp6 = cResult[3];
  }
  const tmp4 = require("useIsUsingClientTheme")();
  importDefault = closure_11(require("useIsUsingClientTheme")(), tmp6);
  const tmp8 = closure_11(require("useIsUsingClientTheme")(), tmp6);
  isConnectedToVoiceChannel = channel(isConnectedToVoiceChannel[14]).useIsConnectedToVoiceChannel(channel);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[4] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== channel) {
    class V {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
    cResult[5] = channel;
    cResult[6] = V;
  } else {
    class V {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
  }
  const tmpResult7 = channel(isConnectedToVoiceChannel[14]);
  const stateFromStores = channel(isConnectedToVoiceChannel[15]).useStateFromStores(tmp10, V);
  const tmpResult8 = channel(isConnectedToVoiceChannel[15]);
  const stageParticipantsCount = channel(isConnectedToVoiceChannel[16]).useStageParticipantsCount(channel.id, tmp(tmp2[17]).StageChannelParticipantNamedIndex.AUDIENCE);
  if (cResult[7] !== channel) {
    class V {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
    cResult[7] = channel;
    cResult[8] = tmp16;
  } else {
    class V {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
  }
  noop = tmp16;
  const tmpResult9 = channel(isConnectedToVoiceChannel[16]);
  channel(isConnectedToVoiceChannel[18]).useStageHasMedia(channel.id) && tmp16;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
    const items2 = [VoiceStateStore];
    cResult[9] = items2;
    const tmp18 = items2;
  } else {
    class V {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
  }
  if (cResult[10] !== channel.id) {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
    cResult[10] = channel.id;
    cResult[11] = O;
  } else {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
  }
  const tmpResult10 = channel(isConnectedToVoiceChannel[18]);
  const stateFromStores1 = channel(isConnectedToVoiceChannel[15]).useStateFromStores(tmp18, O);
  const sum = stageParticipantsCount + arr.length;
  if (cResult[12] !== arr) {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
    if (arr != null) {
      class O {
        constructor() {
          return closure_7.hasVideo(channel.id);
        }
      }
    }
    cResult[12] = arr;
    cResult[13] = undefined;
  } else {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
  }
  closure_4 = null != tmp22;
  if (!stateFromStores1) {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
  }
  if (cResult[14] === channel) {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
    tmp(tmp2[19]);
    if (cResult[17] === channel) {
      class O {
        constructor() {
          return closure_7.hasVideo(channel.id);
        }
      }
    }
    const obj2 = { channel, video: tmp24, userCount: sum };
    cResult[17] = channel;
    cResult[18] = sum;
    cResult[19] = tmp24;
    cResult[20] = obj2;
  }
  cResult[14] = channel;
  cResult[15] = stateFromStores1;
  cResult[16] = { channel, video: stateFromStores1 };
  const obj3 = { channel, video: stateFromStores1 };
  const tmpResult11 = channel(isConnectedToVoiceChannel[15]);
}) : (function VocalChannelJoinButton(channel) {
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
  const tmp = voiceStates(9307)();
  const tmp2 = voiceStates(5031)();
  let joinButtonText = closure_11(tmp, channel(4969).isThemeLight(tmp2));
  const obj = channel(4969);
  const isConnectedToVoiceChannel = channel(10357).useIsConnectedToVoiceChannel(channel);
  const obj2 = channel(10357);
  const items = [PermissionStore];
  const stateFromStores = channel(573).useStateFromStores(items, () => !PermissionStore.can(constants.CONNECT, channel));
  const obj3 = channel(573);
  const stageParticipantsCount = channel(5956).useStageParticipantsCount(channel.id, channel(5950).StageChannelParticipantNamedIndex.AUDIENCE);
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  const obj4 = channel(5956);
  const obj5 = channel(5895);
  const tmp8 = channel(5895).useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  const items1 = [VoiceStateStore];
  const stateFromStores1 = channel(573).useStateFromStores(items1, () => VoiceStateStore.hasVideo(channel.id));
  const sum = stageParticipantsCount + voiceStates.length;
  const items2 = [voiceStates];
  const memo = noop.useMemo(() => {
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
  const tmp3Result = channel(573);
  const connectedUserLimit = channel(11990).useConnectedUserLimit({ channel, video: tmp12 });
  const tmp3Result3 = channel(11990);
  let connectedUserLimitFormatted = channel(11990).useConnectedUserLimitFormatted({ channel, video: tmp12, userCount: sum });
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
    const obj6 = { accessibilityRole: "none", pointerEvents: "none", onPress, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no", style: joinButtonText.joinButton, children: null };
    const obj7 = { style: joinButtonText.joinButtonContent, children: null };
    const obj8 = { style: null, color: "interactive-text-default", variant: "text-xs/semibold", lineClamp: 1, children: null };
    joinButtonText = joinButtonText.joinButtonText;
    obj8.style = joinButtonText;
    if (connectedUserLimitFormatted == null) {
      const intl2 = tmp3(1126).intl;
      VJlc0S = tmp3(1126).t.VJlc0S;
      connectedUserLimitFormatted = intl2.string(VJlc0S);
    }
    obj8.children = connectedUserLimitFormatted;
    obj7.children = jsx(tmp3(5088).Text, { style: null, color: "interactive-text-default", variant: "text-xs/semibold", lineClamp: 1, children: null });
    obj6.children = <closure_4 style={joinButtonText.joinButtonContent}>{null}</closure_4>;
    let tmp17Result = <closure_5 accessibilityRole="none" pointerEvents="none" onPress={onPress} accessible={false} accessibilityElementsHidden importantForAccessibility="no" style={joinButtonText.joinButton}>{null}</closure_5>;
  } else if (tmp15) {
    const obj9 = { text: connectedUserLimitFormatted, icon: null, size: "sm", variant: null, onPress: null, pointerEvents: "none", accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    if (!noIcon) {
      if (!isConnectedToVoiceChannel) {
        if (!memo) {
          let joinButtonIconActive = joinButtonText.joinButtonIconInactive;
        }
        const items3 = [joinButtonIconActive, { marginRight: 3, marginLeft: -1 }];
        if (isGuildStageVoiceResult) {
          let VoiceNormalIcon = tmp3(8224).StageIcon;
        } else {
          VoiceNormalIcon = tmp3(8228).VoiceNormalIcon;
        }
        const obj10 = { size: "xs", style: items3 };
        <VoiceNormalIcon size="xs" style={items3} />;
      }
      joinButtonIconActive = joinButtonText.joinButtonIconActive;
    }
    obj9.icon = undefined;
    let str2 = "tertiary";
    if (memo) {
      str2 = "destructive";
    }
    obj9.variant = str2;
    obj9.onPress = onPress;
    tmp17Result = <tmp18 text={connectedUserLimitFormatted} icon={null} size="sm" variant={null} onPress={null} pointerEvents="none" accessible={false} accessibilityElementsHidden importantForAccessibility="no" />;
  } else {
    const intl = tmp3(1126).intl;
    let str = intl.string;
    let toUpperCase = tmp3(1126).t;
    if (memo) {
      str = str(toUpperCase.dI3q4h);
      toUpperCase = str.toUpperCase;
      let formatted = toUpperCase();
    } else {
      formatted = str(toUpperCase.VJlc0S);
    }
  }
  const tmp3Result4 = channel(11990);
}));