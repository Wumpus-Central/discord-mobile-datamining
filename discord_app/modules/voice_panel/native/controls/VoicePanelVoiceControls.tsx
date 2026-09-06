// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import LegacyBaseButton from "../../../../../_runtime/06655_LegacyBaseButton.js";
import getEmbeddedActivityLaunchability from "../../../activities/utils/getEmbeddedActivityLaunchability.tsx";
import MobileAudioOutputExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useSelectedActiveStreamDefault from "../../../video_calls/native/useSelectedActiveStream.tsx";
import useIsConnectedToVoiceChannelDefault from "../hooks/useIsConnectedToVoiceChannel.tsx";
import MobileGoLiveEntrypointExperimentDefault from "../../../go_live/MobileGoLiveEntrypointExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";

require = fn;
function NOOP() {}
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = fn(12271).CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
let obj = { scrollView: null, scrollViewScreenReader: null, blurRegion: null };
obj = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.scrollView = obj;
const createStyles = {
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,
};
obj.scrollViewScreenReader = createStyles;
obj.blurRegion = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(17).ScrollView);
let closure_10 = noop.memo((arg0) => {
  ({ channel, openTab } = arg0);
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
  let obj = getEmbeddedActivityLaunchability;
  const embeddedActivityLaunchability = obj.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj1 = MobileGoLiveEntrypointExperimentDefault;
  const treatment = obj1.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  let obj2 = MobileAudioOutputExperimentDefault;
  let nonContextualStreamOutputPresent = obj2.useConfig({
    location: "VoicePanelVoiceControls",
  }).nonContextualStreamOutputPresent;
  const tmp6 = useSelectedActiveStreamDefault(channel);
  if (!tmp2) {
    const items = [tmp2, , , , , ,];
    obj = { channel, connected: tmp2 };
    items[1] = hasOwnProperty(tmp3(17210).GameConsoles, obj);
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = tmp12(tmp3(17210).StreamVolumeItem, {});
    }
    items[2] = nonContextualStreamOutputPresent;
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp3(1114).intl;
    obj.title = intl.string(tmp3(1114).t.NiTd0e);
    const items1 = [hasOwnProperty(tmp3(17210).DeafenSwitch, {}), , , ,];
    obj1 = { channel, connected: tmp2 };
    items1[1] = hasOwnProperty(tmp3(17210).AudioRouteButton, obj1);
    obj2 = { channelId };
    items1[2] = hasOwnProperty(tmp3(17210).HideNonVideoParticipants, obj2);
    items1[3] = hasOwnProperty(tmp3(17210).HideSelfVideo, {});
    let tmp12Result = tmp2;
    if (tmp2) {
      const obj3 = { channel, connected: tmp2 };
      tmp12Result = tmp12(tmp3(17210).InviteButton, obj3);
    }
    items1[4] = tmp12Result;
    obj.children = items1;
    items[3] = tmp7(tmp3(5687).TableRowGroup, obj);
    items[4] = hasOwnProperty(tmp3(9992).VoiceProcessingOptions, {});
    const obj4 = { guildId: channel.guild_id };
    const items2 = [hasOwnProperty(tmp3(17210).VoiceSettingsButton, obj4)];
    tmp12Result = null != tmp6;
    if (tmp12Result) {
      const obj5 = { stream: tmp6 };
      tmp12Result = tmp12(tmp3(17210).ReportStreamIssueButton, obj5);
    }
    const obj6 = { hasIcons: true, children: null };
    items2[1] = tmp12Result;
    obj6.children = items2;
    items[5] = tmp7(tmp3(5687).TableRowGroup, obj6);
    let tmp7Result = null;
    if (tmp2) {
      tmp7Result = null;
      if (setting) {
        tmp7Result = null;
        if (embeddedActivityLaunchability === tmp3(9582).EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj7 = { title: null, hasIcons: true, children: null };
          const intl2 = tmp3(1114).intl;
          obj7.title = intl2.string(tmp3(1114).t.J6rqB7);
          const items3 = [
            tmp12(tmp3(17210).LeaveActivitiesButton, {}),
            tmp12(tmp3(17210).ShareActivityLogsButton, {}),
            tmp12(tmp3(17210).ToggleShowActivitiesDebugOverlay, {}),
          ];
          obj7.children = items3;
          tmp7Result = tmp7(tmp3(5687).TableRowGroup, obj7);
        }
      }
    }
    const obj8 = { spacing: 24, children: null };
    items[6] = tmp7Result;
    obj8.children = items;
    return tmp7(tmp8, obj8);
  } else {
    const obj9 = { openTab };
    const items4 = [hasOwnProperty(tmp3(17210).ActivitiesButton, obj9)];
    if (tmp3(17101).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj10 = { openTab };
      let tmp9Result = tmp9(tmp3(17210).ChatButton, obj10);
      const obj11 = { hasIcons: true, children: null };
      items4[1] = tmp9Result;
      obj11.children = items4;
      tmp7Result = tmp7(tmp3(5687).TableRowGroup, obj11);
    } else if (tmp3(17101).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj12 = { channel };
      tmp9Result = tmp9(tmp3(17210).ScreenshareButton, obj12);
    }
    const obj13 = { channel };
    tmp9Result = tmp9(tmp3(17210).SoundboardButton, obj13);
  }
});
const scrollIndicatorInsets = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const __initData = {
  code: "function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default noop.memo(function VoicePanelVoiceControls(isVisible) {
  isVisible = isVisible.isVisible;
  let channelId;
  let sharedValue;
  let gestureRef;
  let scrollerRef;
  let tmp = closure_8();
  channelId = gestureRef.useContext(channelId(sharedValue[8])).channelId;
  let obj = isVisible(sharedValue[20]);
  const items = [scrollerRef];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj1 = isVisible(sharedValue[7]);
  sharedValue = obj1.useSharedValue(false);
  const fn = function s(offset) {
    const result = sharedValue.set(offset.offset > 0);
  };
  fn.__closure = { isScrolled: sharedValue };
  fn.__workletHash = 16758626276795;
  fn.__initData = __initData;
  const items1 = [sharedValue];
  const callback = gestureRef.useCallback(fn, items1);
  const tmp8 = gestureRef.useContext(isVisible(sharedValue[21]).ControlsGestureScrollLock)({
    onScrollHandlerWorkletized: callback,
  });
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
    const Gesture = LegacyBaseButton.Gesture;
    const NativeResult = Gesture.Native();
    const enabledResult = NativeResult.enabled(!MetaQuestUtils.isMetaQuest());
    let result = enabledResult;
    if (null != gestureRef) {
      result = enabledResult.simultaneousWithExternalGesture(tmp);
    }
    return result;
  }, items3);
  obj = { gesture: memo, children: null };
  obj = {
    style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView,
    ref: scrollerRef,
    onScroll,
    animatedProps,
    onMomentumScrollEnd: NOOP,
    scrollEventThrottle: 8.333333333333334,
    scrollIndicatorInsets,
    children: null,
  };
  let tmp14Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    obj1 = { style: tmp.blurRegion };
    tmp14Result = tmp14(tmp2(tmp3[25]), obj1);
  }
  const items4 = [tmp14Result, ,];
  tmp14Result = null != stateFromStores;
  if (tmp14Result) {
    obj2 = { channel: stateFromStores, openTab: isVisible.openTab };
    tmp14Result = tmp14(closure_10, obj2);
  }
  items4[1] = tmp14Result;
  items4[2] = closure_5(isVisible(sharedValue[26]).SafeAreaPaddingView, { bottom: true });
  obj.children = items4;
  obj.children = closure_6(closure_9, obj);
  const children = [closure_5(isVisible(sharedValue[23]).GestureDetector, obj)];
  let tmp14Result1 = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj3 = { shown: sharedValue, style: tmp.blurRegion };
    tmp14Result1 = tmp14(tmp2(tmp3[27]), obj3);
  }
  children[1] = tmp14Result1;
  return closure_6(closure_7, { children });
});
