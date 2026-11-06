// === Module 19654: VoicePanelVoiceControls ===

// Module 19654 (VoicePanelVoiceControls)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import UserSettings from "UserSettings" /* 4995 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5450 */;
import Stack_Stack from "Stack/Stack" /* 6185 */;
import TableRowGroup from "TableRowGroup" /* 7151 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11345 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11380 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 11920 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12118 */;
import UserSettingsVoiceProcessing from "UserSettingsVoiceProcessing" /* 12130 */;
import useSelectedActiveStreamDefault from "useSelectedActiveStream" /* 15443 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 19519 */;
import useShowConnectedControlsDefault from "useShowConnectedControls" /* 19649 */;
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons" /* 19655 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;
const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

require = fn;
function NOOP() {

}
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = fn(11379).CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6, Fragment: metroImportDefault } = jsxProd);
const createStyles = fn(5170);
let obj = { scrollView: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 }, scrollViewScreenReader: null, blurRegion: null };
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.scrollViewScreenReader = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
obj.blurRegion = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = module_1652.createAnimatedComponent(fn(17).ScrollView);
let closure_10 = noop.memo(function ListItems(arg0) {
  ({ channel, openTab } = arg0);
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp2 = useShowConnectedControlsDefault(channelId);
  const embeddedActivityLaunchability = getEmbeddedActivityLaunchability.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const treatment = MobileGoLiveEntrypointExperimentDefault.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent;
  const tmp6 = useSelectedActiveStreamDefault(channel);
  const isStageUnifiedCall = StageChannelUnifiedCallExperiment.useIsStageUnifiedCall(channel, "VoicePanelVoiceControls");
  let tmp9 = tmp2;
  if (tmp2) {
    tmp9 = isStageUnifiedCall;
  }
  if (tmp9) {
    const obj5 = { channel, openTab };
    tmp9 = hasOwnProperty(VoicePanelVoiceControlsButtons.StageButtons, obj5);
  }
  items = [tmp9, , , , , , , ];
  let tmp11 = tmp2;
  if (tmp2) {
    tmp11 = !isStageUnifiedCall;
  }
  if (!tmp11) {
    items[1] = tmp11;
    let tmp15 = !isStageUnifiedCall;
    if (!isStageUnifiedCall) {
      const obj6 = { channel, connected: tmp2 };
      tmp15 = hasOwnProperty(VoicePanelVoiceControlsButtons.GameConsoles, obj6);
    }
    items[2] = tmp15;
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = hasOwnProperty(VoicePanelVoiceControlsButtons.StreamVolumeItem, {});
    }
    items[3] = nonContextualStreamOutputPresent;
    const obj7 = { title: null, hasIcons: true, children: null };
    const intl = util.intl;
    obj7.title = intl.string(util.t.dsXapM);
    const items1 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), , , , ];
    const obj8 = { channel, connected: tmp2 };
    items1[1] = hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, obj8);
    let tmp18Result = !isStageUnifiedCall;
    if (!isStageUnifiedCall) {
      const obj9 = { channelId };
      tmp18Result = hasOwnProperty(VoicePanelVoiceControlsButtons.HideNonVideoParticipants, obj9);
    }
    items1[2] = tmp18Result;
    items1[3] = hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {});
    let tmp18Result3 = tmp2;
    if (tmp2) {
      const obj10 = { channel, connected: tmp2 };
      tmp18Result3 = hasOwnProperty(VoicePanelVoiceControlsButtons.InviteButton, obj10);
    }
    items1[4] = tmp18Result3;
    obj7.children = items1;
    items[4] = timestampProducer(TableRowGroup.TableRowGroup, obj7);
    items[5] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
    const obj11 = { guildId: channel.guild_id };
    const items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj11), ];
    let tmp18Result4 = null != tmp6;
    if (tmp18Result4) {
      const obj12 = { stream: tmp6 };
      tmp18Result4 = hasOwnProperty(VoicePanelVoiceControlsButtons.ReportStreamIssueButton, obj12);
    }
    const obj13 = { hasIcons: true, children: null };
    items2[1] = tmp18Result4;
    obj13.children = items2;
    items[6] = timestampProducer(TableRowGroup.TableRowGroup, obj13);
    let tmp8Result = null;
    if (tmp2) {
      tmp8Result = null;
      if (setting) {
        tmp8Result = null;
        if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj14 = { title: null, hasIcons: true, children: null };
          const intl2 = util.intl;
          obj14.title = intl2.string(util.t.J6rqB7);
          const items3 = [hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {})];
          obj14.children = items3;
          tmp8Result = timestampProducer(TableRowGroup.TableRowGroup, obj14);
        }
      }
    }
    const obj15 = { spacing: 24, children: null };
    items[7] = tmp8Result;
    obj15.children = items;
    return timestampProducer(Stack_Stack.Stack, obj15);
  } else {
    const obj16 = { openTab };
    const items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj16), ];
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj17 = { openTab };
      let tmp12Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ChatButton, obj17);
      const obj18 = { hasIcons: true, children: null };
      items4[1] = tmp12Result;
      obj18.children = items4;
      timestampProducer(TableRowGroup.TableRowGroup, obj18);
    } else if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj19 = { channel };
      tmp12Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ScreenshareButton, obj19);
    }
    const obj20 = { channel };
    tmp12Result = hasOwnProperty(VoicePanelVoiceControlsButtons.SoundboardButton, obj20);
  }
});
const scrollIndicatorInsets = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_13 = { code: "(function VoicePanelVoiceControlsTsx1({offset:offset}){let[isScrolled]=this.__closure;isScrolled.set(offset>0);})" };
let obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default noop.memo(function VoicePanelVoiceControls(isVisible) {
  isVisible = isVisible.isVisible;
  _require = isVisible;
  let channelId;
  let gestureRef;
  let scrollerRef;
  const tmp = closure_8();
  channelId = scrollerRef.useContext(channelId(gestureRef[8])).channelId;
  items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = require("initialize");
  const sharedValue = require("module_1652").useSharedValue(false);
  const items1 = [closure_13, sharedValue];
  _require = undefined;
  [tmp7, tmp8] = items1;
  class VoicePanelVoiceControlsTsx1 {
    constructor(arg0) {
      result = closure_0.set(isVisible.offset > 0);
      return;
    }
  }
  const items2 = [tmp8];
  VoicePanelVoiceControlsTsx1.__closure = items2;
  VoicePanelVoiceControlsTsx1.__workletHash = 4252778421250;
  VoicePanelVoiceControlsTsx1.__initData = tmp7;
  const items3 = [sharedValue];
  const callback = scrollerRef.useCallback(VoicePanelVoiceControlsTsx1, items3);
  const obj3 = require("module_1652");
  const animatedScrollLock = require("useAnimatedScrollLock").useAnimatedScrollLock({ onScrollHandlerWorkletized: callback });
  gestureRef = animatedScrollLock.gestureRef;
  scrollerRef = animatedScrollLock.scrollerRef;
  ({ onScroll, animatedProps } = animatedScrollLock);
  const tmp4Result = require("useAnimatedScrollLock");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const items4 = [isVisible, scrollerRef];
  const effect = obj.useEffect(() => {
    if (c0) {
      const current = scrollerRef.current;
      if (current != null) {
        current.scrollTo({ x: 0, y: 0, animated: false });
      }
    }
  }, items4);
  const items5 = [gestureRef];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const NativeResult = Gesture.Native();
    return NativeResult.enabled(!MetaQuestUtils.isMetaQuest()).simultaneousWithExternalGesture(gestureRef);
  }, items5);
  const obj4 = { gesture: memo, children: null };
  const obj5 = { style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView, ref: scrollerRef, onScroll, animatedProps, onMomentumScrollEnd: NOOP, scrollEventThrottle: 8.333333333333334, scrollIndicatorInsets, children: null };
  let tmp16Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj6 = { style: tmp.blurRegion };
    tmp16Result = closure_5(tmp2(tmp3[26]), obj6);
  }
  const items6 = [tmp16Result, , ];
  let tmp16Result3 = null != stateFromStores;
  if (tmp16Result3) {
    const obj7 = { channel: stateFromStores, openTab: isVisible.openTab };
    tmp16Result3 = closure_5(closure_10, obj7);
  }
  items6[1] = tmp16Result3;
  items6[2] = closure_5(require("common/SafeAreaView").SafeAreaPaddingView, { bottom: true });
  obj5.children = items6;
  obj4.children = closure_6(closure_9, obj5);
  const children = [closure_5(require("LegacyBaseButton").GestureDetector, obj4), ];
  let tmp16Result4 = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj8 = { shown: sharedValue, style: tmp.blurRegion };
    tmp16Result4 = closure_5(tmp2(tmp3[28]), obj8);
  }
  children[1] = tmp16Result4;
  return closure_6(closure_7, { children });
});