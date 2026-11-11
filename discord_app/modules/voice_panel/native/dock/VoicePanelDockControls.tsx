// discord_app/modules/voice_panel/native/dock/VoicePanelDockControls.tsx
import native from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef9039 from "../../../../../_runtime/metro/09039__.js";
import _modDef10665 from "../../../../../_runtime/metro/10665__.js";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoiceActionUtils from "../../../video_calls/native/VoiceActionUtils.tsx";
import useDockBoxShadowDefault from "useDockBoxShadow.tsx";
import useSoundboardConfig from "../hooks/useSoundboardConfig.tsx";
import VoicePanelDockPTTButtonDefault from "VoicePanelDockPTTButton.tsx";
import VoicePanelDockButtonRimDefault from "VoicePanelDockButtonRim.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import VoicePanelStore from "../../VoicePanelStore.tsx";

const nativeDefault = native;
const useSoundboardConfigDefault = useSoundboardConfig;

require = fn;
function DockMuteButton(channelId) {
  channelId = channelId.channelId;
  let mute;
  let onPress;
  items = [ChannelStore];
  const stateFromStores = channelId(onPress[10]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = channelId(onPress[10]);
  const muteHandler = channelId(onPress[11]).createMuteHandler(mute(onPress[12])(stateFromStores));
  mute = muteHandler.mute;
  onPress = muteHandler.onPress;
  const dominantMuteState = muteHandler.dominantMuteState;
  const obj2 = channelId(onPress[11]);
  colors = mute(onPress[9]).colors;
  const token = channelId(onPress[13]).useToken(mute ? colors.STATUS_DANGER : colors.INTERACTIVE_ICON_DEFAULT);
  const items1 = [dominantMuteState, mute, onPress];
  const callback = dominantMuteState.useCallback(() => {
    if (tmp4) {
      onPress();
    } else {
      const HapticFeedbackTypes = HapticUtils.HapticFeedbackTypes;
      const result = HapticUtils.triggerHapticFeedback(
        mute ? HapticFeedbackTypes.TOGGLE_ON : HapticFeedbackTypes.TOGGLE_OFF,
      );
      const tmp2Result = HapticUtils;
    }
    tmp4 =
      dominantMuteState !== VoiceActionUtils.DominantMuteState.NONE &&
      dominantMuteState !== VoiceActionUtils.DominantMuteState.SELF_MUTE;
  }, items1);
  const intl = tmp(tmp2[16]).intl;
  const string = intl.string;
  const t = tmp(tmp2[16]).t;
  if (mute) {
    let stringResult = string(t.YqAjXy);
  } else {
    stringResult = string(t.w4m945);
  }
  const obj4 = {
    accessibilityLabel: stringResult,
    accessibilityRole: "togglebutton",
    accessibilityState: { checked: mute },
    variant: "secondary",
    size: "sm",
    icon: null,
    onPress: null,
  };
  if (dominantMuteState === channelId(onPress[11]).DominantMuteState.SERVER_MUTE) {
    const obj5 = { size: "sm", color: token };
    let tmp7Result = closure_9(tmp(tmp2[17]).MicrophoneDenyIcon, obj5);
  } else {
    const obj6 = { size: "sm", color: token, muted: mute };
    tmp7Result = closure_9(tmp(tmp2[18]).VoicePanelRiveMicButton, obj6);
  }
  obj4.icon = tmp7Result;
  obj4.onPress = callback;
  return closure_9(channelId(onPress[15]).IconButton, obj4);
}
function DockHangUpButton(channelId) {
  channelId = channelId.channelId;
  items = [channelId];
  const callback = noop.useCallback(() => {
    SelectedChannelActionCreatorsDefault.disconnect();
    state = VoicePanelStore.getState();
    state.closeChannel(channelId);
  }, items);
  const obj = { accessibilityLabel: null, variant: "critical-primary", size: "sm", icon: null, onPress: null };
  const intl = channelId(1113).intl;
  obj.accessibilityLabel = intl.string(channelId(1113).t["6vrfgt"]);
  obj.icon = _modDef9039;
  obj.onPress = callback;
  return closure_9(channelId(7922).IconButton, obj);
}
function DockSoundboardButton(arg0) {
  ({ onPress, disabled, disabledAccessibilityHint } = arg0);
  const obj = {
    accessibilityLabel: null,
    variant: "secondary",
    size: "sm",
    icon: null,
    onPress: null,
    disabled: null,
    accessibilityHint: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.ABjMWI);
  obj.icon = _modDef10665;
  obj.onPress = onPress;
  obj.disabled = disabled;
  obj.accessibilityHint = disabledAccessibilityHint;
  return React6(IconButton.IconButton, obj);
}
const View = fn(17).View;
const InputModes = fn(1072).InputModes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5243);
let obj = {
  actions: { flexDirection: "row", alignItems: "center", gap: fn(11948).DOCK_GAP },
  buttonShadow: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS },
};
let closure_11 = createStyles.createStyles(obj);
let obj3 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockControls.tsx");

export default noop.memo(function VoicePanelDockControls(measureGlowOffset) {
  measureGlowOffset = measureGlowOffset.measureGlowOffset;
  const tmp = closure_11();
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp4Result = useDockBoxShadowDefault(native.Shadow.SHADOW_LOW);
  const tmp6Result = useSoundboardConfigDefault(
    channelId,
    useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_DOCK,
  );
  items = [MediaEngineStore];
  const obj2 = { style: tmp.actions, children: null };
  if (obj.useStateFromStores(items, () => mode.getMode() === constants.PUSH_TO_TALK)) {
    const obj3 = { measureGlowOffset };
    let tmp10Result = React6(VoicePanelDockPTTButtonDefault, obj3);
    let tmp14 = React6;
  } else {
    const obj4 = { measureGlowOffset, hideWhilePressed: true, style: null, children: null };
    const items1 = [tmp.buttonShadow];
    const obj5 = { boxShadow: tmp4Result };
    items1[1] = obj5;
    obj4.style = items1;
    const obj6 = { channelId };
    obj4.children = React6(DockMuteButton, obj6);
    tmp10Result = React6(VoicePanelDockButtonRimDefault, obj4);
    tmp14 = React6;
    const tmp2Result = VoicePanelDockButtonRimDefault;
  }
  const items2 = [tmp10Result, ,];
  let tmp14Result = null;
  if (tmp6Result.visible) {
    const obj7 = { measureGlowOffset, hideWhilePressed: !tmp6Result.disabled, style: null, children: null };
    const items3 = [tmp.buttonShadow];
    const obj8 = { boxShadow: tmp4Result };
    items3[1] = obj8;
    obj7.style = items3;
    ({
      handlePress: obj9.onPress,
      disabled: obj9.disabled,
      disabledAccessibilityHint: obj9.disabledAccessibilityHint,
    } = tmp6Result);
    obj7.children = tmp14(DockSoundboardButton, { onPress: null, disabled: null, disabledAccessibilityHint: null });
    tmp14Result = tmp14(VoicePanelDockButtonRimDefault, obj7);
    const obj10 = { onPress: null, disabled: null, disabledAccessibilityHint: null };
    const tmp2Result2 = VoicePanelDockButtonRimDefault;
  }
  items2[1] = tmp14Result;
  const obj19 = { style: null, children: tmp14(DockHangUpButton, { channelId }) };
  const items4 = [tmp.buttonShadow, { boxShadow: tmp4Result }];
  obj19.style = items4;
  items2[2] = tmp14(View, obj19);
  obj2.children = items2;
  return closure_1_10(View, obj2);
});
