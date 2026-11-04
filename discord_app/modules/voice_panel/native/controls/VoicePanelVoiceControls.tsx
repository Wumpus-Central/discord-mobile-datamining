// === Module 19599: VoicePanelVoiceControls ===

// Module 19599 (VoicePanelVoiceControls)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import UserSettings from "UserSettings" /* 4966 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import TableRowGroup from "TableRowGroup" /* 7201 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11409 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 11944 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 12139 */;
import UserSettingsVoiceProcessing from "UserSettingsVoiceProcessing" /* 12151 */;
import useSelectedActiveStreamDefault from "useSelectedActiveStream" /* 15434 */;
import MobileGoLiveEntrypointExperiment from "MobileGoLiveEntrypointExperiment" /* 19477 */;
import useShowConnectedControlsDefault from "useShowConnectedControls" /* 19594 */;
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons" /* 19600 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;
const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

require = fn;
function NOOP() {

}
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = fn(11408).CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6, Fragment: metroImportDefault } = jsxProd);
const createStyles = fn(5141);
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
  if (!tmp2) {
    items = [tmp2, , , , , , ];
    const obj4 = { channel, connected: tmp2 };
    items[1] = hasOwnProperty(VoicePanelVoiceControlsButtons.GameConsoles, obj4);
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = hasOwnProperty(VoicePanelVoiceControlsButtons.StreamVolumeItem, {});
    }
    items[2] = nonContextualStreamOutputPresent;
    const obj5 = { title: null, hasIcons: true, children: null };
    const intl = util.intl;
    obj5.title = intl.string(util.t.dsXapM);
    const items1 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), , , , ];
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
    const items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj9), ];
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
        if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj12 = { title: null, hasIcons: true, children: null };
          const intl2 = util.intl;
          obj12.title = intl2.string(util.t.J6rqB7);
          const items3 = [hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}), hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {})];
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
    const items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj14), ];
    if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj15 = { openTab };
      let tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ChatButton, obj15);
      const obj16 = { hasIcons: true, children: null };
      items4[1] = tmp9Result;
      obj16.children = items4;
      timestampProducer(TableRowGroup.TableRowGroup, obj16);
    } else if (MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj17 = { channel };
      tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ScreenshareButton, obj17);
    }
    const obj18 = { channel };
    tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.SoundboardButton, obj18);
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
    tmp16Result = closure_5(tmp2(tmp3[25]), obj6);
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
    tmp16Result4 = closure_5(tmp2(tmp3[27]), obj8);
  }
  children[1] = tmp16Result4;
  return closure_6(closure_7, { children });
});