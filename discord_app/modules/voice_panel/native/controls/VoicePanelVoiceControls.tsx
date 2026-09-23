// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06983_LegacyBaseButton.js";
import getEmbeddedActivityLaunchability from "../../../activities/utils/getEmbeddedActivityLaunchability.tsx";
import MobileAudioOutputExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import UserSettingsVoiceProcessing from "../../../user_settings/voice/native/UserSettingsVoiceProcessing.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useSelectedActiveStreamDefault from "../../../video_calls/native/useSelectedActiveStream.tsx";
import useIsConnectedToVoiceChannelDefault from "../hooks/useIsConnectedToVoiceChannel.tsx";
import MobileGoLiveEntrypointExperiment from "../../../go_live/MobileGoLiveEntrypointExperiment.tsx";
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";

const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

require = fn;
function NOOP() {}
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = fn(12604).CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj = {
  scrollView: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 },
  scrollViewScreenReader: null,
  blurRegion: null,
};
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.scrollViewScreenReader = {
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,
};
obj.blurRegion = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(17).ScrollView);
let closure_10 = noop.memo((arg0) => {
  ({ channel, openTab } = arg0);
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
  const embeddedActivityLaunchability = getEmbeddedActivityLaunchability.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const treatment = MobileGoLiveEntrypointExperimentDefault.useConfig({
    location: "VoicePanelVoiceControls",
  }).treatment;
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({
    location: "VoicePanelVoiceControls",
  }).nonContextualStreamOutputPresent;
  const tmp6 = useSelectedActiveStreamDefault(channel);
  if (!tmp2) {
    const items = [tmp2, , , , , ,];
    const obj4 = { channel, connected: tmp2 };
    items[1] = hasOwnProperty(VoicePanelVoiceControlsButtons.GameConsoles, obj4);
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = hasOwnProperty(VoicePanelVoiceControlsButtons.StreamVolumeItem, {});
    }
    items[2] = nonContextualStreamOutputPresent;
    const obj5 = { title: null, hasIcons: true, children: null };
    const intl = util.intl;
    obj5.title = intl.string(util.t.NiTd0e);
    const items1 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), , , ,];
    const obj6 = { channel, connected: tmp2 };
    items1[1] = hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, obj6);
    const obj7 = { channelId };
    items1[2] = hasOwnProperty(VoicePanelVoiceControlsButtons.HideNonVideoParticipants, obj7);
    items1[3] = hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {});
    let tmp12Result = tmp2;
    if (tmp2) {
      const obj8 = { channel, connected: tmp2 };
      tmp12Result = hasOwnProperty(VoicePanelVoiceControlsButtons.InviteButton, obj8);
    }
    items1[4] = tmp12Result;
    obj5.children = items1;
    items[3] = timestampProducer(TableRowGroup.TableRowGroup, obj5);
    items[4] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
    const obj9 = { guildId: channel.guild_id };
    const items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj9)];
    let tmp12Result2 = null != tmp6;
    if (tmp12Result2) {
      const obj10 = { stream: tmp6 };
      tmp12Result2 = hasOwnProperty(VoicePanelVoiceControlsButtons.ReportStreamIssueButton, obj10);
    }
    const obj11 = { hasIcons: true, children: null };
    items2[1] = tmp12Result2;
    obj11.children = items2;
    items[5] = timestampProducer(TableRowGroup.TableRowGroup, obj11);
    let tmp7Result = null;
    if (tmp2) {
      tmp7Result = null;
      if (setting) {
        tmp7Result = null;
        if (
          embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH
        ) {
          const obj12 = { title: null, hasIcons: true, children: null };
          const intl2 = util.intl;
          obj12.title = intl2.string(util.t.J6rqB7);
          const items3 = [
            hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}),
            hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}),
            hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {}),
          ];
          obj12.children = items3;
          tmp7Result = timestampProducer(TableRowGroup.TableRowGroup, obj12);
        }
      }
    }
    const obj13 = { spacing: 24, children: null };
    items[6] = tmp7Result;
    obj13.children = items;
    return timestampProducer(tmp8, obj13);
  } else {
    const obj14 = { openTab };
    const items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj14)];
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj15 = { openTab };
      let tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ChatButton, obj15);
      const obj16 = { hasIcons: true, children: null };
      items4[1] = tmp9Result;
      obj16.children = items4;
      timestampProducer(TableRowGroup.TableRowGroup, obj16);
    } else if (
      MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment
    ) {
      const obj17 = { channel };
      tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ScreenshareButton, obj17);
    }
    const obj18 = { channel };
    tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.SoundboardButton, obj18);
  }
});
const scrollIndicatorInsets = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const __initData = {
  code: "function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}",
};
let obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default noop.memo(function VoicePanelVoiceControls(isVisible) {
  isVisible = isVisible.isVisible;
  let channelId;
  let sharedValue;
  let gestureRef;
  let scrollerRef;
  const tmp = closure_8();
  channelId = gestureRef.useContext(channelId(sharedValue[8])).channelId;
  const items = [scrollerRef];
  const stateFromStores = isVisible(sharedValue[20]).useStateFromStores(items, () =>
    ChannelStore.getChannel(channelId),
  );
  const obj = isVisible(sharedValue[20]);
  const tmp4 = isVisible;
  sharedValue = isVisible(sharedValue[7]).useSharedValue(false);
  const fn = function s(offset) {
    const result = sharedValue.set(offset.offset > 0);
  };
  fn.__closure = { isScrolled: sharedValue };
  fn.__workletHash = 16758626276795;
  fn.__initData = __initData;
  const items1 = [sharedValue];
  const callback = gestureRef.useCallback(fn, items1);
  let obj2 = isVisible(sharedValue[7]);
  const animatedScrollLock = isVisible(sharedValue[21]).useAnimatedScrollLock({ onScrollHandlerWorkletized: callback });
  gestureRef = animatedScrollLock.gestureRef;
  scrollerRef = animatedScrollLock.scrollerRef;
  ({ onScroll, animatedProps } = animatedScrollLock);
  const obj3 = isVisible(sharedValue[21]);
  const isScreenReaderEnabled = isVisible(sharedValue[22]).useIsScreenReaderEnabled();
  const items2 = [isVisible, scrollerRef];
  const effect = gestureRef.useEffect(() => {
    if (isVisible) {
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
    return NativeResult.enabled(!MetaQuestUtils.isMetaQuest()).simultaneousWithExternalGesture(gestureRef);
  }, items3);
  const obj5 = { gesture: memo, children: null };
  const obj6 = {
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
    const obj7 = { style: tmp.blurRegion };
    tmp14Result = closure_5(tmp2(tmp3[25]), obj7);
  }
  const items4 = [tmp14Result, ,];
  let tmp14Result3 = null != stateFromStores;
  if (tmp14Result3) {
    const obj8 = { channel: stateFromStores, openTab: isVisible.openTab };
    tmp14Result3 = closure_5(closure_10, obj8);
  }
  items4[1] = tmp14Result3;
  items4[2] = closure_5(tmp4(sharedValue[26]).SafeAreaPaddingView, { bottom: true });
  obj6.children = items4;
  obj5.children = closure_6(closure_9, obj6);
  const children = [closure_5(isVisible(sharedValue[23]).GestureDetector, obj5)];
  let tmp14Result4 = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj9 = { shown: sharedValue, style: tmp.blurRegion };
    tmp14Result4 = closure_5(tmp2(tmp3[27]), obj9);
  }
  children[1] = tmp14Result4;
  return closure_6(closure_7, { children });
});
