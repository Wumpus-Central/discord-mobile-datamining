// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx
import importAllResult from "VoiceProcessingOptions";
import ensureGuildLoaded from "ensureGuildLoaded";
import { CONTROLS_DRAWER_HEADER_EXPANDED_SIZE } from "VoicePanelControlsModes";
import jsxProd from "context";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4162";
import { getEmbeddedActivityLaunchability } from "../../../activities/utils/getEmbeddedActivityLaunchability.tsx";
import { apexExperiment } from "../../../go_live/MobileGoLiveEntrypointExperiment.tsx";
import { apexExperiment } from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import { explicitContentFromProto } from "../../../user_settings/UserSettings.tsx";
import { useSelectedActiveStream } from "../../../video_calls/native/useSelectedActiveStream.tsx";
import { useIsConnectedToVoiceChannel } from "../hooks/useIsConnectedToVoiceChannel.tsx";
import { dismissPanel } from "../VoicePanelStateContext.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
function NOOP() {

}
let c3 = importAllResult;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let obj = { scrollView: null, scrollViewScreenReader: null, blurRegion: null };
obj = { flex: 1, paddingHorizontal: require("Themes").space.PX_16 };
obj[0] = obj;
createCacheKey = { flex: 1, paddingHorizontal: require("Themes").space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
obj[1] = createCacheKey;
obj[2] = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = require("module_4162").createAnimatedComponent(require("GameConsoleAccountButton").ScrollView);
let closure_10 = importAllResult.memo((arg0) => {
  let channel;
  let openTab;
  ({ channel, openTab } = arg0);
  const channelId = importAllResult.useContext(dismissPanel).channelId;
  const tmp2 = useIsConnectedToVoiceChannel(channelId);
  let obj = getEmbeddedActivityLaunchability;
  const embeddedActivityLaunchability = obj.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj1 = apexExperiment;
  const treatment = obj1.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  let obj2 = apexExperiment;
  let nonContextualStreamOutputPresent = obj2.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent;
  const tmp6 = useSelectedActiveStream(channel);
  if (!tmp2) {
    const items = [tmp2, , , , , , ];
    obj = { channel: null, connected: null };
    obj[0] = channel;
    obj[1] = tmp2;
    items[1] = callback(tmp3(16194).GameConsoles, obj);
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = tmp12(tmp3(16194).StreamVolumeItem, {});
    }
    items[2] = nonContextualStreamOutputPresent;
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t.NiTd0e);
    const items1 = [callback(tmp3(16194).DeafenSwitch, {}), , , , ];
    obj1 = { channel: null, connected: null };
    obj1[0] = channel;
    obj1[1] = tmp2;
    items1[1] = callback(tmp3(16194).AudioRouteButton, obj1);
    obj2 = { channelId: null };
    obj2[0] = channelId;
    items1[2] = callback(tmp3(16194).HideNonVideoParticipants, obj2);
    items1[3] = callback(tmp3(16194).HideSelfVideo, {});
    let tmp12Result = tmp2;
    if (tmp2) {
      const obj3 = { channel: null, connected: null };
      obj3[0] = channel;
      obj3[1] = tmp2;
      tmp12Result = tmp12(tmp3(16194).InviteButton, obj3);
    }
    items1[4] = tmp12Result;
    obj[2] = items1;
    items[3] = tmp7(tmp3(5707).TableRowGroup, obj);
    items[4] = callback(tmp3(10792).VoiceProcessingOptions, {});
    const obj4 = { guildId: null };
    obj4[0] = channel.guild_id;
    const items2 = [callback(tmp3(16194).VoiceSettingsButton, obj4), ];
    tmp12Result = null != tmp6;
    if (tmp12Result) {
      const obj5 = { stream: null };
      obj5[0] = tmp6;
      tmp12Result = tmp12(tmp3(16194).ReportStreamIssueButton, obj5);
    }
    const obj6 = { hasIcons: true, children: null };
    items2[1] = tmp12Result;
    obj6[1] = items2;
    items[5] = tmp7(tmp3(5707).TableRowGroup, obj6);
    let tmp7Result = null;
    if (tmp2) {
      tmp7Result = null;
      if (setting) {
        tmp7Result = null;
        if (embeddedActivityLaunchability === tmp3(10570).EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj7 = { title: null, hasIcons: true, children: null };
          const intl2 = tmp3(1236).intl;
          obj7[0] = intl2.string(tmp3(1236).t.J6rqB7);
          const items3 = [tmp12(tmp3(16194).LeaveActivitiesButton, {}), tmp12(tmp3(16194).ShareActivityLogsButton, {}), tmp12(tmp3(16194).ToggleShowActivitiesDebugOverlay, {})];
          obj7[2] = items3;
          tmp7Result = tmp7(tmp3(5707).TableRowGroup, obj7);
        }
      }
    }
    const obj8 = { spacing: 24, children: null };
    items[6] = tmp7Result;
    obj8[1] = items;
    return tmp7(tmp8, obj8);
  } else {
    const obj9 = { openTab: null };
    obj9[0] = openTab;
    const items4 = [callback(tmp3(16194).ActivitiesButton, obj9), ];
    if (tmp3(16092).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj10 = { openTab: null };
      obj10[0] = openTab;
      let tmp9Result = tmp9(tmp3(16194).ChatButton, obj10);
      const obj11 = { hasIcons: true, children: null };
      items4[1] = tmp9Result;
      obj11[1] = items4;
      tmp7Result = tmp7(tmp3(5707).TableRowGroup, obj11);
    } else if (tmp3(16092).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj12 = { channel: null };
      obj12[0] = channel;
      tmp9Result = tmp9(tmp3(16194).ScreenshareButton, obj12);
    }
    const obj13 = { channel: null };
    obj13[0] = channel;
    tmp9Result = tmp9(tmp3(16194).SoundboardButton, obj13);
  }
});
let closure_12 = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_13 = { code: "function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}" };
const memoResult = importAllResult.memo(function VoicePanelVoiceControls(isVisible) {
  let animatedProps;
  let onScroll;
  isVisible = isVisible.isVisible;
  let channelId;
  let sharedValue;
  let gestureRef;
  let scrollerRef;
  let tmp = callback2();
  channelId = gestureRef.useContext(channelId(sharedValue[8])).channelId;
  let obj = isVisible(sharedValue[20]);
  const items = [scrollerRef];
  const stateFromStores = obj.useStateFromStores(items, () => scrollerRef.getChannel(channelId));
  let obj1 = isVisible(sharedValue[7]);
  sharedValue = obj1.useSharedValue(false);
  const fn = function s(offset) {
    const result = sharedValue.set(offset.offset > 0);
  };
  fn.__closure = { isScrolled: sharedValue };
  fn.__workletHash = 16758626276795;
  fn.__initData = closure_13;
  const items1 = [sharedValue];
  const callback = gestureRef.useCallback(fn, items1);
  const tmp8 = gestureRef.useContext(isVisible(sharedValue[21]).ControlsGestureScrollLock)({ onScrollHandlerWorkletized: callback });
  gestureRef = tmp8.gestureRef;
  scrollerRef = tmp8.scrollerRef;
  ({ onScroll, animatedProps } = tmp8);
  let obj2 = isVisible(sharedValue[22]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const items2 = [isVisible, scrollerRef];
  const effect = gestureRef.useEffect(() => {
    let tmp = isVisible;
    if (isVisible) {
      tmp = null != scrollerRef;
    }
    if (tmp) {
      const current = scrollerRef.current;
      if (current != null) {
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
    }
  }, items2);
  const items3 = [gestureRef];
  const memo = gestureRef.useMemo(() => {
    const Gesture = isVisible(sharedValue[23]).Gesture;
    const NativeResult = Gesture.Native();
    const enabledResult = NativeResult.enabled(!isVisible(sharedValue[24]).isMetaQuest());
    let result = enabledResult;
    if (null != gestureRef) {
      result = enabledResult.simultaneousWithExternalGesture(tmp);
    }
    return result;
  }, items3);
  obj = { gesture: memo, children: null };
  obj = { style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView, ref: scrollerRef, onScroll, animatedProps, onMomentumScrollEnd: NOOP, scrollEventThrottle: 8.333333333333334, scrollIndicatorInsets: closure_12, children: null };
  let tmp14Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    obj1 = { style: null };
    obj1[0] = tmp.blurRegion;
    tmp14Result = tmp14(tmp2(tmp3[25]), obj1);
  }
  const items4 = [tmp14Result, , ];
  tmp14Result = null != stateFromStores;
  if (tmp14Result) {
    obj2 = { channel: null, openTab: null };
    obj2[0] = stateFromStores;
    obj2[1] = isVisible.openTab;
    tmp14Result = tmp14(closure_10, obj2);
  }
  items4[1] = tmp14Result;
  items4[2] = closure_5(isVisible(sharedValue[26]).SafeAreaPaddingView, { bottom: true });
  obj[7] = items4;
  obj[1] = closure_6(closure_9, obj);
  const children = [closure_5(isVisible(sharedValue[23]).GestureDetector, obj), ];
  let tmp14Result1 = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj3 = { shown: null, style: null };
    obj3[0] = sharedValue;
    obj3[1] = tmp.blurRegion;
    tmp14Result1 = tmp14(tmp2(tmp3[27]), obj3);
  }
  children[1] = tmp14Result1;
  return closure_6(closure_7, { children });
});
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;