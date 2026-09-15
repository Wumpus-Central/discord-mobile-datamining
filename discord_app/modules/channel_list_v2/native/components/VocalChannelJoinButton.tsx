// === Module 12428: VocalChannelJoinButton ===

// Module 12428 (VocalChannelJoinButton)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import VoiceStateStore from "VoiceStateStore" /* 4658 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ NOOP: closure_8, Permissions: closure_9 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default noop.memo(function VocalChannelJoinButton(channel) {
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
  const tmp = voiceStates(7979)();
  const tmp2 = voiceStates(4574)();
  let joinButtonText = closure_11(tmp, channel(4491).isThemeLight(tmp2));
  const obj = channel(4491);
  const isConnectedToVoiceChannel = channel(9603).useIsConnectedToVoiceChannel(channel);
  const obj2 = channel(9603);
  const items = [PermissionStore];
  const stateFromStores = channel(563).useStateFromStores(items, () => !PermissionStore.can(constants.CONNECT, channel));
  const obj3 = channel(563);
  const stageParticipantsCount = channel(5516).useStageParticipantsCount(channel.id, channel(5510).StageChannelParticipantNamedIndex.AUDIENCE);
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  const obj4 = channel(5516);
  const obj5 = channel(5502);
  const tmp8 = channel(5502).useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  const items1 = [VoiceStateStore];
  const stateFromStores1 = channel(563).useStateFromStores(items1, () => VoiceStateStore.hasVideo(channel.id));
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
  const tmp3Result = channel(563);
  const connectedUserLimit = channel(12429).useConnectedUserLimit({ channel, video: tmp12 });
  const tmp3Result3 = channel(12429);
  let connectedUserLimitFormatted = channel(12429).useConnectedUserLimitFormatted({ channel, video: tmp12, userCount: sum });
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
      const intl2 = tmp3(1115).intl;
      VJlc0S = tmp3(1115).t.VJlc0S;
      connectedUserLimitFormatted = intl2.string(VJlc0S);
    }
    obj8.children = connectedUserLimitFormatted;
    obj7.children = jsx(tmp3(4635).Text, { style: null, color: "interactive-text-default", variant: "text-xs/semibold", lineClamp: 1, children: null });
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
          let VoiceNormalIcon = tmp3(5181).StageIcon;
        } else {
          VoiceNormalIcon = tmp3(5185).VoiceNormalIcon;
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
    const intl = tmp3(1115).intl;
    let str = intl.string;
    let toUpperCase = tmp3(1115).t;
    if (memo) {
      str = str(toUpperCase.dI3q4h);
      toUpperCase = str.toUpperCase;
      let formatted = toUpperCase();
    } else {
      formatted = str(toUpperCase.VJlc0S);
    }
  }
  const tmp3Result4 = channel(12429);
});