// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import VoicePanelVideoGuardErrorAlert from "../../alerts/VoicePanelVideoGuardErrorAlert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const MetaQuestUtils = fn(1609);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = fn(12881).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = fn(17769).MobilePhoneShareIcon;
}
const createStyles = fn(4829);
let obj3 = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
obj3.circle = size;
obj3.iconContainer = {
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};
let closure_9 = createStyles.createStyles(obj3);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx",
);

export default function ScreenshareButton(arg0) {
  let isActive;
  let isFeatureEnabled;
  let onPress;
  closure_4 = undefined;
  ({ props, wrapperSpecs } = arg0);
  const channelId = onPress.useContext(isActive(isFeatureEnabled[9])).channelId;
  const tmp3 = closure_9();
  const voicePanelButtonStyles = channelId(isFeatureEnabled[10]).useVoicePanelButtonStyles(wrapperSpecs);
  let obj = channelId(isFeatureEnabled[10]);
  const items = [closure_4];
  const stateFromStores = channelId(isFeatureEnabled[11]).useStateFromStores(items, () =>
    ChannelStore.getChannel(channelId),
  );
  isActive(isFeatureEnabled[12])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[13])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[14]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelScreenshareButton" }).videoEnabled;
  closure_4 = tmp9;
  const items1 = [isActive, isFeatureEnabled, onPress, !videoEnabled];
  let tmp11 = !tmp9;
  const callback = onPress.useCallback(() => {
    if (closure_4) {
      const obj2 = { title: null };
      const obj3 = useAlertStore;
      const intl = util.intl;
      obj2.title = intl.string(util.t.GFr0GR);
      obj3.openAlert(
        VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY,
        timestampProducer(VoicePanelVideoGuardErrorAlertDefault, obj2),
      );
    } else if (isFeatureEnabled) {
      const obj4 = { source: "connected button", was_active: isActive };
      AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj4);
      onPress();
    }
  }, items1);
  if (videoEnabled) {
    tmp11 = !isFeatureEnabled;
  }
  if (tmp11) {
    let color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    let backgroundColor = voicePanelButtonStyles.iconBgSelected.backgroundColor;
  } else {
    backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoEnabled) {
    let MobilePhoneDenyIcon = MobilePhoneShareIcon;
  } else {
    MobilePhoneDenyIcon = tmp4(tmp2[19]).MobilePhoneDenyIcon;
  }
  const element = { onPress: callback, disabled: tmp11, props, accessibilityLabel: null, style: null, children: null };
  let obj2 = channelId(isFeatureEnabled[11]);
  let intl = tmp4(tmp2[17]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[17]).t;
  if (isActive) {
    let stringResult = string(t.CpkXwZ);
  } else {
    stringResult = string(t.fjBNo1);
  }
  element.accessibilityLabel = stringResult;
  let iconBgSelected;
  if (isActive) {
    iconBgSelected = voicePanelButtonStyles.iconBgSelected;
  }
  element.style = iconBgSelected;
  let obj3 = { style: null };
  const items2 = [tmp3.circle, { backgroundColor }];
  obj3.style = items2;
  const items3 = [closure_6(isActive(isFeatureEnabled[21]), obj3)];
  let obj4 = { style: tmp3.iconContainer, children: null };
  const tmpResult = isActive(isFeatureEnabled[20]);
  obj4.children = closure_6(MobilePhoneDenyIcon, { color });
  items3[1] = closure_6(isActive(isFeatureEnabled[21]), obj4);
  element.children = items3;
  return closure_7(tmpResult, element);
}
