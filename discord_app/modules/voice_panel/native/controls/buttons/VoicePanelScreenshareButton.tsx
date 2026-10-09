// === Module 17804: VoicePanelScreenshareButton ===

// Module 17804 (VoicePanelScreenshareButton)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import useAlertStore from "useAlertStore" /* 5300 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 12804 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const MetaQuestUtils = fn(1628);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = fn(12222).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = fn(17805).MobilePhoneShareIcon;
}
const createStyles = fn(5091);
let obj3 = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
obj3.circle = size;
obj3.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_9 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ScreenshareButton(wrapperSpecs) {
  const cResult = channelId(isFeatureEnabled[10]).c(30);
  channelId = onPress.useContext(isActive(isFeatureEnabled[11])).channelId;
  closure_9();
  let obj = channelId(isFeatureEnabled[10]);
  const voicePanelButtonStyles = channelId(isFeatureEnabled[12]).useVoicePanelButtonStyles(wrapperSpecs.wrapperSpecs);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class S {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
    cResult[1] = channelId;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
  }
  let obj2 = channelId(isFeatureEnabled[12]);
  const stateFromStores = channelId(isFeatureEnabled[13]).useStateFromStores(first, S);
  isActive(isFeatureEnabled[14])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp12 = isActive(isFeatureEnabled[15])(stateFromStores);
  isActive = tmp12.isActive;
  isFeatureEnabled = tmp12.isFeatureEnabled;
  onPress = tmp12.onPress;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
    cResult[3] = tmp14;
  } else {
    class S {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
  }
  const VideoGuardExperiment = tmp(tmp2[16]).VideoGuardExperiment;
  let tmp15 = !VideoGuardExperiment.useConfig(tmp14).videoEnabled;
  ChannelStore = tmp15;
  if (cResult[4] === isActive) {
    class S {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
  }
  const fn = function f() {
    if (closure_4) {
      const obj2 = { title: null };
      const obj3 = useAlertStore;
      const intl = util.intl;
      obj2.title = intl.string(util.t.GFr0GR);
      obj3.openAlert(VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, timestampProducer(VoicePanelVideoGuardErrorAlertDefault, obj2));
    } else if (isFeatureEnabled) {
      const obj4 = { source: "connected button", was_active: isActive };
      AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj4);
      onPress();
    }
  };
  cResult[4] = isActive;
  cResult[5] = isFeatureEnabled;
  cResult[6] = onPress;
  cResult[7] = tmp15;
  cResult[8] = fn;
  const tmpResult = channelId(isFeatureEnabled[13]);
}) : (function ScreenshareButton(arg0) {
  let isActive;
  let isFeatureEnabled;
  let onPress;
  closure_4 = undefined;
  ({ props, wrapperSpecs } = arg0);
  const channelId = onPress.useContext(isActive(isFeatureEnabled[11])).channelId;
  const tmp3 = closure_9();
  const voicePanelButtonStyles = channelId(isFeatureEnabled[12]).useVoicePanelButtonStyles(wrapperSpecs);
  let obj = channelId(isFeatureEnabled[12]);
  const items = [closure_4];
  const stateFromStores = channelId(isFeatureEnabled[13]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  isActive(isFeatureEnabled[14])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[15])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[16]).VideoGuardExperiment;
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
      obj3.openAlert(VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, timestampProducer(VoicePanelVideoGuardErrorAlertDefault, obj2));
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
    MobilePhoneDenyIcon = tmp4(tmp2[21]).MobilePhoneDenyIcon;
  }
  const element = { onPress: callback, disabled: tmp11, props, accessibilityLabel: null, style: null, children: null };
  let obj2 = channelId(isFeatureEnabled[13]);
  let intl = tmp4(tmp2[19]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[19]).t;
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
  const items3 = [closure_6(isActive(isFeatureEnabled[22]), obj3), ];
  let obj4 = { style: tmp3.iconContainer, children: null };
  const tmpResult = isActive(isFeatureEnabled[23]);
  obj4.children = closure_6(MobilePhoneDenyIcon, { color });
  items3[1] = closure_6(isActive(isFeatureEnabled[22]), obj4);
  element.children = items3;
  return closure_7(tmpResult, element);
});