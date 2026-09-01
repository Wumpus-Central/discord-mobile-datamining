// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../../user_settings/UserSettings.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import setDefault from "../../../core/native/NativeView.tsx";
import getEmbeddedActivityLaunchability from "../../../activities/utils/getEmbeddedActivityLaunchability.tsx";
import apexExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import dismissPanelDefault from "../VoicePanelStateContext.tsx";
import useSelectedActiveStreamDefault from "../../../video_calls/native/useSelectedActiveStream.tsx";
import VIDEO_GUARD_BLOG_POST_URL from "../../../media_engine/VideoGuardExperiment.tsx";
import useIsConnectedToVoiceChannelDefault from "../hooks/useIsConnectedToVoiceChannel.tsx";
import apexExperimentDefault2 from "../../../go_live/MobileGoLiveEntrypointExperiment.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/ChannelStore.tsx";
import { CONTROLS_DRAWER_HEADER_EXPANDED_SIZE } from "VoicePanelControlsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../reanimated/ReanimatedRexport.tsx";

require = arg1;
function VideoGuardNotice() {
  let obj = { style: callback3().videoGuardNotice, children: null };
  const tmp = callback3();
  obj = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.UoW002), " ", ];
  const intl2 = getSystemLocale.intl;
  obj = { helpdeskArticle: VIDEO_GUARD_BLOG_POST_URL.VIDEO_GUARD_BLOG_POST_URL };
  items[2] = intl2.format(getSystemLocale.t.BPDKoA, obj);
  obj[2] = items;
  obj[1] = callback(Text.Text, obj);
  return callback2(setDefault, obj);
}
function NOOP() {

}
let c3 = importAllResult;
({ jsxs: c5, jsx: closure_6, Fragment: error } = jsxProd);
let obj = { scrollView: null, scrollViewScreenReader: null, blurRegion: null, videoGuardNotice: null };
obj = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
createCacheKey = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
obj[1] = createCacheKey;
obj[2] = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
obj[3] = { padding: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.sm, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createCacheKey.createStyles(obj);
let obj2 = { padding: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.sm, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
let closure_11 = importAllResult.memo((arg0) => {
  ({ channel, openTab } = arg0);
  const channelId = importAllResult.useContext(dismissPanelDefault).channelId;
  const tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
  let obj = getEmbeddedActivityLaunchability;
  const embeddedActivityLaunchability = obj.useEmbeddedActivityLaunchability(channelId);
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  const setting = DeveloperMode.useSetting();
  obj1 = apexExperimentDefault2;
  const treatment = obj1.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
  let obj2 = apexExperimentDefault;
  let nonContextualStreamOutputPresent = obj2.useConfig({ location: "VoicePanelVoiceControls" }).nonContextualStreamOutputPresent;
  const VideoGuardExperiment = VIDEO_GUARD_BLOG_POST_URL.VideoGuardExperiment;
  const tmp6 = useSelectedActiveStreamDefault(channel);
  let tmp8 = tmp2;
  if (tmp2) {
    tmp8 = !VideoGuardExperiment.useConfig({ location: "VoicePanelVoiceControls" }).videoEnabled;
  }
  if (tmp8) {
    tmp8 = callback2(VideoGuardNotice, {});
  }
  const items = [tmp8, , , , , , , ];
  if (!tmp2) {
    items[1] = tmp2;
    obj = { channel: null, connected: null };
    obj[0] = channel;
    obj[1] = tmp2;
    items[2] = callback2(tmp3(16788).GameConsoles, obj);
    if (nonContextualStreamOutputPresent) {
      nonContextualStreamOutputPresent = tmp14(tmp3(16788).StreamVolumeItem, {});
    }
    items[3] = nonContextualStreamOutputPresent;
    obj = { title: null, hasIcons: true, children: null };
    const intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t.NiTd0e);
    const items1 = [callback2(tmp3(16788).DeafenSwitch, {}), , , , ];
    obj1 = { channel: null, connected: null };
    obj1[0] = channel;
    obj1[1] = tmp2;
    items1[1] = callback2(tmp3(16788).AudioRouteButton, obj1);
    obj2 = { channelId: null };
    obj2[0] = channelId;
    items1[2] = callback2(tmp3(16788).HideNonVideoParticipants, obj2);
    items1[3] = callback2(tmp3(16788).HideSelfVideo, {});
    let tmp14Result = tmp2;
    if (tmp2) {
      const obj3 = { channel: null, connected: null };
      obj3[0] = channel;
      obj3[1] = tmp2;
      tmp14Result = tmp14(tmp3(16788).InviteButton, obj3);
    }
    items1[4] = tmp14Result;
    obj[2] = items1;
    items[4] = tmp7(tmp3(5992).TableRowGroup, obj);
    items[5] = callback2(tmp3(10075).VoiceProcessingOptions, {});
    const obj4 = { guildId: null };
    obj4[0] = channel.guild_id;
    const items2 = [callback2(tmp3(16788).VoiceSettingsButton, obj4), ];
    tmp14Result = null != tmp6;
    if (tmp14Result) {
      const obj5 = { stream: null };
      obj5[0] = tmp6;
      tmp14Result = tmp14(tmp3(16788).ReportStreamIssueButton, obj5);
    }
    const obj6 = { hasIcons: true, children: null };
    items2[1] = tmp14Result;
    obj6[1] = items2;
    items[6] = tmp7(tmp3(5992).TableRowGroup, obj6);
    let tmp7Result = null;
    if (tmp2) {
      tmp7Result = null;
      if (setting) {
        tmp7Result = null;
        if (embeddedActivityLaunchability === tmp3(9486).EmbeddedActivityLaunchability.CAN_LAUNCH) {
          const obj7 = { title: null, hasIcons: true, children: null };
          const intl2 = tmp3(1236).intl;
          obj7[0] = intl2.string(tmp3(1236).t.J6rqB7);
          const items3 = [tmp14(tmp3(16788).LeaveActivitiesButton, {}), tmp14(tmp3(16788).ShareActivityLogsButton, {}), tmp14(tmp3(16788).ToggleShowActivitiesDebugOverlay, {})];
          obj7[2] = items3;
          tmp7Result = tmp7(tmp3(5992).TableRowGroup, obj7);
        }
      }
    }
    const obj8 = { spacing: 24, children: null };
    items[7] = tmp7Result;
    obj8[1] = items;
    return tmp7(Stack.Stack, obj8);
  } else {
    const obj9 = { openTab: null };
    obj9[0] = openTab;
    const items4 = [callback2(tmp3(16788).ActivitiesButton, obj9), ];
    if (tmp3(16682).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment) {
      const obj10 = { openTab: null };
      obj10[0] = openTab;
      let tmp11Result = tmp11(tmp3(16788).ChatButton, obj10);
      const obj11 = { hasIcons: true, children: null };
      items4[1] = tmp11Result;
      obj11[1] = items4;
      tmp7Result = tmp7(tmp3(5992).TableRowGroup, obj11);
    } else if (tmp3(16682).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !== treatment) {
      const obj12 = { channel: null };
      obj12[0] = channel;
      tmp11Result = tmp11(tmp3(16788).ScreenshareButton, obj12);
    }
    const obj13 = { channel: null };
    obj13[0] = channel;
    tmp11Result = tmp11(tmp3(16788).SoundboardButton, obj13);
  }
});
let closure_13 = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_14 = { code: "function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}" };
const memoResult = importAllResult.memo(function VoicePanelVoiceControls(isVisible) {
  isVisible = isVisible.isVisible;
  let channelId;
  let sharedValue;
  let gestureRef;
  let scrollerRef;
  let tmp = callback3();
  channelId = gestureRef.useContext(channelId(sharedValue[12])).channelId;
  let obj = isVisible(sharedValue[23]);
  const items = [scrollerRef];
  const stateFromStores = obj.useStateFromStores(items, () => scrollerRef.getChannel(channelId));
  obj1 = isVisible(sharedValue[11]);
  sharedValue = obj1.useSharedValue(false);
  const fn = function c(offset) {
    const result = sharedValue.set(offset.offset > 0);
  };
  fn.__closure = { isScrolled: sharedValue };
  fn.__workletHash = 16758626276795;
  fn.__initData = closure_14;
  const items1 = [sharedValue];
  const callback = gestureRef.useCallback(fn, items1);
  const tmp8 = gestureRef.useContext(isVisible(sharedValue[24]).ControlsGestureScrollLock)({ onScrollHandlerWorkletized: callback });
  gestureRef = tmp8.gestureRef;
  scrollerRef = tmp8.scrollerRef;
  ({ onScroll, animatedProps } = tmp8);
  let obj2 = isVisible(sharedValue[25]);
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
    const Gesture = isVisible(sharedValue[26]).Gesture;
    const NativeResult = Gesture.Native();
    const enabledResult = NativeResult.enabled(!isVisible(sharedValue[27]).isMetaQuest());
    let result = enabledResult;
    if (null != gestureRef) {
      result = enabledResult.simultaneousWithExternalGesture(tmp);
    }
    return result;
  }, items3);
  obj = { gesture: memo, children: null };
  obj = { style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView, ref: scrollerRef, onScroll, animatedProps, onMomentumScrollEnd: NOOP, scrollEventThrottle: 8.333333333333334, scrollIndicatorInsets: closure_13, children: null };
  let tmp14Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    obj1 = { style: null };
    obj1[0] = tmp.blurRegion;
    tmp14Result = tmp14(tmp2(tmp3[7]), obj1);
  }
  const items4 = [tmp14Result, , ];
  tmp14Result = null != stateFromStores;
  if (tmp14Result) {
    obj2 = { channel: null, openTab: null };
    obj2[0] = stateFromStores;
    obj2[1] = isVisible.openTab;
    tmp14Result = tmp14(closure_11, obj2);
  }
  items4[1] = tmp14Result;
  items4[2] = closure_6(isVisible(sharedValue[28]).SafeAreaPaddingView, { bottom: true });
  obj[7] = items4;
  obj[1] = closure_5(closure_10, obj);
  const children = [closure_6(isVisible(sharedValue[26]).GestureDetector, obj), ];
  let tmp14Result1 = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj3 = { shown: null, style: null };
    obj3[0] = sharedValue;
    obj3[1] = tmp.blurRegion;
    tmp14Result1 = tmp14(tmp2(tmp3[29]), obj3);
  }
  children[1] = tmp14Result1;
  return closure_5(closure_7, { children });
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;