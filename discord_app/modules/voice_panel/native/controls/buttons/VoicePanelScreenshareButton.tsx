// === Module 19263: VoicePanelScreenshareButton ===

// Module 19263 (VoicePanelScreenshareButton)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 14519 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const MetaQuestUtils = fn(1623);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = fn(14056).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = fn(19264).MobilePhoneShareIcon;
}
const createStyles = fn(5009);
let closure_8 = createStyles.createStyles({ iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default function ScreenshareButton(arg0) {
  let isActive;
  let isFeatureEnabled;
  let onPress;
  closure_4 = undefined;
  ({ props, wrapperSpecs } = arg0);
  const channelId = onPress.useContext(isActive(isFeatureEnabled[8])).channelId;
  const tmp3 = closure_8();
  const voicePanelButtonStyles = channelId(isFeatureEnabled[9]).useVoicePanelButtonStyles(wrapperSpecs);
  let obj = channelId(isFeatureEnabled[9]);
  const items = [closure_4];
  const stateFromStores = channelId(isFeatureEnabled[10]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  isActive(isFeatureEnabled[11])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[12])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[13]).VideoGuardExperiment;
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
      obj3.openAlert(VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, jsx(VoicePanelVideoGuardErrorAlertDefault, { title: null }));
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
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoEnabled) {
    let MobilePhoneDenyIcon = MobilePhoneShareIcon;
  } else {
    MobilePhoneDenyIcon = tmp4(tmp2[18]).MobilePhoneDenyIcon;
  }
  const element = { onPress: callback, disabled: tmp11, props, accessibilityLabel: null, style: null, children: null };
  let obj2 = channelId(isFeatureEnabled[10]);
  let intl = tmp4(tmp2[16]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[16]).t;
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
  let obj3 = { style: tmp3.iconContainer, children: null };
  const tmpResult = isActive(isFeatureEnabled[19]);
  obj3.children = <MobilePhoneDenyIcon color={color} />;
  element.children = jsx(isActive(isFeatureEnabled[20]), { style: tmp3.iconContainer, children: null });
  return <tmpResult onPress={callback} disabled={tmp11} props={props} accessibilityLabel={null} style={null}>{null}</tmpResult>;
};