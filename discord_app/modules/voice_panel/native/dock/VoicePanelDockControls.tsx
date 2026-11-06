// === Module 19515: VoicePanelDockControls ===

// Module 19515 (VoicePanelDockControls)
import native from "native" /* 575 */;
import util from "util" /* 1113 */;
import HapticUtils from "HapticUtils" /* 5406 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6786 */;
import IconButton from "IconButton" /* 8119 */;
import _modDef9972 from "module_9972" /* 9972 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11380 */;
import VoiceActionUtils from "VoiceActionUtils" /* 12145 */;
import _modDef14311 from "module_14311" /* 14311 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19513 */;
import useSoundboardConfig from "useSoundboardConfig" /* 19516 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import VoicePanelStore from "VoicePanelStore" /* 6955 */;

const nativeDefault = native;
const useSoundboardConfigDefault = useSoundboardConfig;

require = fn;
function DockMuteButton(channelId) {
  channelId = channelId.channelId;
  let mute;
  let onPress;
  items = [ChannelStore];
  const stateFromStores = channelId(onPress[8]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = channelId(onPress[8]);
  const muteHandler = channelId(onPress[9]).createMuteHandler(mute(onPress[10])(stateFromStores));
  mute = muteHandler.mute;
  onPress = muteHandler.onPress;
  const dominantMuteState = muteHandler.dominantMuteState;
  const obj2 = channelId(onPress[9]);
  const colors = mute(onPress[7]).colors;
  const token = channelId(onPress[11]).useToken(mute ? colors.STATUS_DANGER : colors.INTERACTIVE_ICON_DEFAULT);
  const items1 = [dominantMuteState, mute, onPress];
  const callback = dominantMuteState.useCallback(() => {
    if (tmp4) {
      onPress();
    } else {
      const HapticFeedbackTypes = HapticUtils.HapticFeedbackTypes;
      const result = HapticUtils.triggerHapticFeedback(mute ? HapticFeedbackTypes.TOGGLE_ON : HapticFeedbackTypes.TOGGLE_OFF);
      const tmp2Result = HapticUtils;
    }
    tmp4 = dominantMuteState !== VoiceActionUtils.DominantMuteState.NONE && dominantMuteState !== VoiceActionUtils.DominantMuteState.SELF_MUTE;
  }, items1);
  const intl = tmp(tmp2[14]).intl;
  const string = intl.string;
  const t = tmp(tmp2[14]).t;
  if (mute) {
    let stringResult = string(t.YqAjXy);
  } else {
    stringResult = string(t.w4m945);
  }
  const obj4 = { accessibilityLabel: stringResult, accessibilityRole: "togglebutton", accessibilityState: { checked: mute }, variant: "secondary", size: "sm", icon: null, onPress: null };
  if (dominantMuteState === channelId(onPress[9]).DominantMuteState.SERVER_MUTE) {
    const obj5 = { size: "sm", color: token };
    let tmp7Result = closure_7(tmp(tmp2[15]).MicrophoneDenyIcon, obj5);
  } else {
    const obj6 = { size: "sm", color: token, muted: mute };
    tmp7Result = closure_7(tmp(tmp2[16]).VoicePanelRiveMicButton, obj6);
  }
  obj4.icon = tmp7Result;
  obj4.onPress = callback;
  return closure_7(channelId(onPress[13]).IconButton, obj4);
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
  obj.icon = _modDef9972;
  obj.onPress = callback;
  return closure_7(channelId(8119).IconButton, obj);
}
function DockSoundboardButton(arg0) {
  ({ onPress, disabled, disabledAccessibilityHint } = arg0);
  const obj = { accessibilityLabel: null, variant: "secondary", size: "sm", icon: null, onPress: null, disabled: null, accessibilityHint: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.ABjMWI);
  obj.icon = _modDef14311;
  obj.onPress = onPress;
  obj.disabled = disabled;
  obj.accessibilityHint = disabledAccessibilityHint;
  return metroImportDefault(IconButton.IconButton, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5170);
let obj = { actions: { flexDirection: "row", alignItems: "center", gap: fn(11399).DOCK_GAP }, buttonShadow: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS } };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockControls.tsx");

export default noop.memo(function VoicePanelDockControls() {
  const tmp = closure_9();
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2Result = useDockBoxShadowDefault(native.Shadow.SHADOW_MEDIUM);
  const tmp4Result = useSoundboardConfigDefault(channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_DOCK);
  const obj = { style: tmp.actions, children: null };
  const obj2 = { style: null, children: metroImportDefault(DockMuteButton, { channelId }) };
  items = [tmp.buttonShadow, { boxShadow: tmp2Result }];
  obj2.style = items;
  const items1 = [metroImportDefault(View, obj2), , ];
  let tmp8Result = null;
  if (tmp4Result.visible) {
    const obj3 = { style: null, children: null };
    const items2 = [tmp.buttonShadow, ];
    const obj4 = { boxShadow: tmp2Result };
    items2[1] = obj4;
    obj3.style = items2;
    ({ handlePress: obj5.onPress, disabled: obj5.disabled, disabledAccessibilityHint: obj5.disabledAccessibilityHint } = tmp4Result);
    obj3.children = metroImportDefault(DockSoundboardButton, { onPress: null, disabled: null, disabledAccessibilityHint: null });
    tmp8Result = metroImportDefault(View, obj3);
    const obj6 = { onPress: null, disabled: null, disabledAccessibilityHint: null };
  }
  items1[1] = tmp8Result;
  const obj11 = { style: null, children: metroImportDefault(DockHangUpButton, { channelId }) };
  const items3 = [tmp.buttonShadow, { boxShadow: tmp2Result }];
  obj11.style = items3;
  items1[2] = metroImportDefault(View, obj11);
  obj.children = items1;
  return React5(View, obj);
});