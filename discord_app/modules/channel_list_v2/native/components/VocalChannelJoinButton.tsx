// discord_app/modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ NOOP: closure_8, Permissions: closure_9 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((arg0, arg1) => {
  let obj = {
    borderRadius: nativeDefault.radii.xxl,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_4,
    marginVertical: -nativeDefault.space.PX_4,
    backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
    minHeight: 28,
    justifyContent: "center",
    elevation: null,
    shadowRadius: 4,
    shadowOffset: null,
    shadowColor: null,
    shadowOpacity: null,
    borderColor: null,
    borderWidth: 1,
  };
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
  obj = {
    joinButton: obj,
    joinButtonContent: { width: "auto", alignItems: "center" },
    joinButtonIconActive: null,
    joinButtonIconInactive: null,
    joinButtonText: null,
    borderColor: str,
  };
  obj = { tintColor: nativeDefault.colors.WHITE };
  obj.joinButtonIconActive = obj;
  obj.joinButtonIconInactive = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj1 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  let num3 = 0;
  if (obj5.isAndroid()) {
    num3 = -2;
  }
  obj.joinButtonText = { marginTop: num3, alignSelf: "center", maxWidth: 64 };
  return obj;
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
  const tmp = voiceStates(7873)();
  let obj = channel(4411);
  let joinButtonText = closure_11(tmp, obj.isThemeLight(voiceStates(4495)()));
  let obj1 = channel(9471);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = channel(563);
  const items = [PermissionStore];
  const stateFromStores = obj2.useStateFromStores(items, () => !PermissionStore.can(constants.CONNECT, channel));
  let obj3 = channel(5431);
  const stageParticipantsCount = obj3.useStageParticipantsCount(
    channel.id,
    channel(5425).StageChannelParticipantNamedIndex.AUDIENCE,
  );
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  const tmp2 = voiceStates(4495)();
  const obj5 = channel(5417);
  let tmp3Result = tmp3(563);
  const items1 = [VoiceStateStore];
  const stateFromStores1 = tmp3Result.useStateFromStores(items1, () => VoiceStateStore.hasVideo(channel.id));
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
  tmp3Result = tmp3(12294);
  const connectedUserLimit = tmp3Result.useConnectedUserLimit({ channel, video: tmp12 });
  tmp8 = channel(5417).useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  let connectedUserLimitFormatted = channel(12294).useConnectedUserLimitFormatted({
    channel,
    video: tmp12,
    userCount: sum,
  });
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
    obj = {
      accessibilityRole: "none",
      pointerEvents: "none",
      onPress,
      accessible: false,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no",
      style: joinButtonText.joinButton,
      children: null,
    };
    obj = { style: joinButtonText.joinButtonContent, children: null };
    obj1 = {
      style: null,
      color: "interactive-text-default",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: null,
    };
    joinButtonText = joinButtonText.joinButtonText;
    obj1.style = joinButtonText;
    if (connectedUserLimitFormatted == null) {
      const intl2 = tmp3(1114).intl;
      VJlc0S = tmp3(1114).t.VJlc0S;
      connectedUserLimitFormatted = intl2.string(VJlc0S);
    }
    obj1.children = connectedUserLimitFormatted;
    obj.children = jsx(tmp3(4556).Text, {
      style: null,
      color: "interactive-text-default",
      variant: "text-xs/semibold",
      lineClamp: 1,
      children: null,
    });
    obj.children = <closure_4 style={joinButtonText.joinButtonContent}>{null}</closure_4>;
    let tmp17Result = <closure_5 style={joinButtonText.joinButtonContent}>{null}</closure_5>;
  } else if (tmp15) {
    obj2 = {
      text: connectedUserLimitFormatted,
      icon: null,
      size: "sm",
      variant: null,
      onPress: null,
      pointerEvents: "none",
      accessible: false,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no",
    };
    if (!noIcon) {
      if (!isConnectedToVoiceChannel) {
        if (!memo) {
          let joinButtonIconActive = joinButtonText.joinButtonIconInactive;
        }
        const items3 = [joinButtonIconActive, { marginRight: 3, marginLeft: -1 }];
        if (isGuildStageVoiceResult) {
          let VoiceNormalIcon = tmp3(5097).StageIcon;
        } else {
          VoiceNormalIcon = tmp3(5101).VoiceNormalIcon;
        }
        obj3 = { size: "xs", style: items3 };
        tmp17Result = <VoiceNormalIcon size="xs" style={items3} />;
      }
      joinButtonIconActive = joinButtonText.joinButtonIconActive;
    }
    obj2.icon = undefined;
    let str2 = "tertiary";
    if (memo) {
      str2 = "destructive";
    }
    obj2.variant = str2;
    obj2.onPress = onPress;
    tmp17Result = (
      <tmp18
        text={connectedUserLimitFormatted}
        icon={null}
        size="sm"
        variant={null}
        onPress={null}
        pointerEvents="none"
        accessible={false}
        accessibilityElementsHidden
        importantForAccessibility="no"
      />
    );
  } else {
    const intl = tmp3(1114).intl;
    let str = intl.string;
    let toUpperCase = tmp3(1114).t;
    if (memo) {
      str = str(toUpperCase.dI3q4h);
      toUpperCase = str.toUpperCase;
      let formatted = toUpperCase();
    } else {
      formatted = str(toUpperCase.VJlc0S);
    }
  }
  const tmp3Result1 = channel(12294);
});
