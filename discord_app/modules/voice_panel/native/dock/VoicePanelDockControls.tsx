// === Module 19205: VoicePanelDockControls ===

// Module 19205 (VoicePanelDockControls)
import native from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6706 */;
import _modDef9836 from "module_9836" /* 9836 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import VoiceActionUtils from "VoiceActionUtils" /* 11969 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19204 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import VoicePanelStore from "VoicePanelStore" /* 6875 */;

const nativeDefault = native;

require = fn;
function DockMuteButton(channelId) {
  channelId = channelId.channelId;
  let mute;
  let onPress;
  const items = [ChannelStore];
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
  const items = [channelId];
  const callback = noop.useCallback(() => {
    SelectedChannelActionCreatorsDefault.disconnect();
    const state = VoicePanelStore.getState();
    state.closeChannel(channelId);
  }, items);
  const obj = { accessibilityLabel: null, variant: "critical-primary", size: "sm", icon: null, onPress: null };
  const intl = channelId(1113).intl;
  obj.accessibilityLabel = intl.string(channelId(1113).t["6vrfgt"]);
  obj.icon = _modDef9836;
  obj.onPress = callback;
  return closure_7(channelId(8028).IconButton, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj = { actions: { flexDirection: "row", alignItems: "center", gap: fn(11241).DOCK_GAP }, buttonShadow: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS } };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockControls.tsx");

export default noop.memo(function VoicePanelDockControls() {
  const tmp = closure_9();
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2Result = useDockBoxShadowDefault(native.Shadow.SHADOW_MEDIUM);
  const obj = { style: tmp.actions, children: null };
  const obj2 = { style: null, children: React5(DockMuteButton, { channelId }) };
  const items = [tmp.buttonShadow, { boxShadow: tmp2Result }];
  obj2.style = items;
  const items1 = [React5(View, obj2), ];
  const obj3 = { style: null, children: React5(DockHangUpButton, { channelId }) };
  const items2 = [tmp.buttonShadow, { boxShadow: tmp2Result }];
  obj3.style = items2;
  items1[1] = React5(View, obj3);
  obj.children = items1;
  return React6(View, obj);
});