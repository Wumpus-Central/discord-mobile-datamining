// === Module 20109: VoicePanelVoiceControls ===

// Module 20109 (VoicePanelVoiceControls)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import UserSettings from "UserSettings" /* 5131 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5598 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import TableRowGroup from "TableRowGroup" /* 7746 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11951 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 12778 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 13002 */;
import UserSettingsVoiceProcessing from "UserSettingsVoiceProcessing" /* 13031 */;
import useSelectedActiveStreamDefault from "useSelectedActiveStream" /* 16100 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 19986 */;
import useShowConnectedControlsDefault from "useShowConnectedControls" /* 20104 */;
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons" /* 20110 */;
import StreamVolumeMovedNoticeDefault from "StreamVolumeMovedNotice" /* 20120 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import module_1655 from "module_1655" /* 1655 */;

const require = globalThis.__r;
const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

require = fn;
function NOOP() {

}
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = fn(11983).CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6, Fragment: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
let obj = { scrollView: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 }, scrollViewScreenReader: null, blurRegion: null };
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.scrollViewScreenReader = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
obj.blurRegion = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = module_1655.createAnimatedComponent(fn(17).ScrollView);
let closure_10 = noop.memo(function ListItems(arg0) {
  ({ channel, openTab } = arg0);
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp3 = useShowConnectedControlsDefault(channelId);
  const embeddedActivityLaunchability = getEmbeddedActivityLaunchability.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = UserSettings.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const treatment = MobileGoLiveEntrypointExperimentDefault.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  const tmp7 = useSelectedActiveStreamDefault(channel);
  const obj3 = MobileAudioOutputExperimentDefault;
  const isStageUnifiedCall = StageChannelUnifiedCallExperiment.useIsStageUnifiedCall(channel, "VoicePanelVoiceControls");
  let tmp10 = tmp3;
  if (tmp3) {
    tmp10 = isStageUnifiedCall;
  }
  if (tmp10) {
    const obj5 = { channel, openTab };
    tmp10 = hasOwnProperty(VoicePanelVoiceControlsButtons.StageButtons, obj5);
  }
  items = [tmp10, , , , , , , ];
  let tmp12 = tmp3;
  if (tmp3) {
    tmp12 = !isStageUnifiedCall;
  }
  if (!tmp12) {
    items[1] = tmp12;
    let tmp16 = !isStageUnifiedCall;
    if (!isStageUnifiedCall) {
      const obj6 = { channel, connected: tmp3 };
      tmp16 = hasOwnProperty(VoicePanelVoiceControlsButtons.GameConsoles, obj6);
    }
    items[2] = tmp16;
    if (obj3.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent) {
      let StreamVolumeItem = VoicePanelVoiceControlsButtons.StreamVolumeItem;
    } else {
      StreamVolumeItem = StreamVolumeMovedNoticeDefault;
    }
    items[3] = hasOwnProperty(StreamVolumeItem, {});
    const obj7 = { title: null, hasIcons: true, children: null };
    const intl = util.intl;
    obj7.title = intl.string(util.t.dsXapM);
    const items1 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), , , , ];
    const obj8 = { channel, connected: tmp3 };
    items1[1] = hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, obj8);
    let tmp18Result = !isStageUnifiedCall;
    if (!isStageUnifiedCall) {
      const obj9 = { channelId };
      tmp18Result = hasOwnProperty(VoicePanelVoiceControlsButtons.HideNonVideoParticipants, obj9);
    }
    items1[2] = tmp18Result;
    items1[3] = hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {});
    let tmp18Result3 = tmp3;
    if (tmp3) {
      const obj10 = { channel, connected: tmp3 };
      tmp18Result3 = hasOwnProperty(VoicePanelVoiceControlsButtons.InviteButton, obj10);
    }
    items1[4] = tmp18Result3;
    obj7.children = items1;
    items[4] = timestampProducer(TableRowGroup.TableRowGroup, obj7);
    items[5] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
    const obj11 = { guildId: channel.guild_id };
    const items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj11), ];
    let tmp18Result4 = null != tmp7;
    if (tmp18Result4) {
      const obj12 = { stream: tmp7 };
      tmp18Result4 = hasOwnProperty(VoicePanelVoiceControlsButtons.ReportStreamIssueButton, obj12);
    }
    const obj13 = { hasIcons: true, children: null };
    items2[1] = tmp18Result4;
    obj13.children = items2;
    items[6] = timestampProducer(TableRowGroup.TableRowGroup, obj13);
    let tmp9Result = null;
    if (tmp3) {
      tmp9Result = null;
      if (setting) {
        tmp9Result = null;
        if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj14 = { title: null, hasIcons: true, children: null };
          const intl2 = util.intl;
          obj14.title = intl2.string(util.t.J6rqB7);
          const items3 = [hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {})];
          obj14.children = items3;
          tmp9Result = timestampProducer(TableRowGroup.TableRowGroup, obj14);
        }
      }
    }
    const obj15 = { spacing: 24, children: null };
    items[7] = tmp9Result;
    obj15.children = items;
    return timestampProducer(Stack_Stack.Stack, obj15);
  } else {
    const obj16 = { openTab };
    const items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj16), ];
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj17 = { openTab };
      let tmp13Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ChatButton, obj17);
      const obj18 = { hasIcons: true, children: null };
      items4[1] = tmp13Result;
      obj18.children = items4;
      timestampProducer(TableRowGroup.TableRowGroup, obj18);
    } else if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj19 = { channel };
      tmp13Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ScreenshareButton, obj19);
    }
    const obj20 = { channel };
    tmp13Result = hasOwnProperty(VoicePanelVoiceControlsButtons.SoundboardButton, obj20);
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
  const sharedValue = require("module_1655").useSharedValue(false);
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
  const obj3 = require("module_1655");
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
    tmp16Result = closure_5(tmp2(tmp3[27]), obj6);
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
    tmp16Result4 = closure_5(tmp2(tmp3[29]), obj8);
  }
  children[1] = tmp16Result4;
  return closure_6(closure_7, { children });
});