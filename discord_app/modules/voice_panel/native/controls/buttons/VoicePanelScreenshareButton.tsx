// === Module 17371: VoicePanelScreenshareButton ===

// Module 17371 (VoicePanelScreenshareButton)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useAlertStore from "useAlertStore" /* 5716 */;
import ScreenArrowIcon from "ScreenArrowIcon" /* 12204 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 13122 */;
import MobilePhoneShareIcon2 from "MobilePhoneShareIcon" /* 17372 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

let metroImportDefault;
let metroRequire;
let size;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = ScreenArrowIcon.ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = MobilePhoneShareIcon2.MobilePhoneShareIcon;
}
let obj = { circle: size, iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" } };
size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((props) => {
  let channelId;
  let first;
  let isActive;
  let isFeatureEnabled;
  let items1;
  let items2;
  let onPress;
  let tmp13;
  let tmp9;
  let obj = channelId(isFeatureEnabled[10]);
  const cResult = obj.c(30);
  props = props.props;
  const wrapperSpecs = props.wrapperSpecs;
  channelId = onPress.useContext(isActive(isFeatureEnabled[11])).channelId;
  const tmp5 = closure_9();
  let obj2 = channelId(isFeatureEnabled[12]);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_4];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function _() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = channelId(isFeatureEnabled[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  isActive(isFeatureEnabled[14])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp12 = tmp4(tmp2[15])(stateFromStores);
  isActive = tmp12.isActive;
  isFeatureEnabled = tmp12.isFeatureEnabled;
  onPress = tmp12.onPress;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "VoicePanelScreenshareButton" };
    cResult[3] = obj3;
    tmp13 = obj3;
  } else {
    tmp13 = cResult[3];
  }
  const VideoGuardExperiment = tmp(tmp2[16]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig(tmp13).videoEnabled;
  closure_4 = tmp14;
  if (cResult[4] === isActive) {
    if (cResult[5] === isFeatureEnabled) {
      if (cResult[6] === onPress) {
        let tmp15;
        let color;
        let backgroundColor;
        let MobilePhoneDenyIcon;
        let tmp17;
        let iconBgSelected;
        let tmp19;
        if (cResult[7] === !videoEnabled) {
          tmp15 = cResult[8];
        }
        let tmp16 = !tmp14;
        if (videoEnabled) {
          tmp16 = !isFeatureEnabled;
        }
        if (tmp16) {
          color = voicePanelButtonStyles.iconFillMuted.color;
        } else {
          color = voicePanelButtonStyles.iconFill.color;
        }
        if (isActive) {
          backgroundColor = voicePanelButtonStyles.iconBgSelected.backgroundColor;
        } else {
          backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
        }
        if (isActive) {
          color = voicePanelButtonStyles.iconFillSelected.color;
        }
        if (videoEnabled) {
          MobilePhoneDenyIcon = MobilePhoneShareIcon;
        } else {
          MobilePhoneDenyIcon = tmp(tmp2[21]).MobilePhoneDenyIcon;
        }
        if (cResult[9] !== isActive) {
          let stringResult;
          let intl = tmp(tmp2[19]).intl;
          const string = intl.string;
          const t = tmp(tmp2[19]).t;
          if (isActive) {
            stringResult = string(t.CpkXwZ);
          } else {
            stringResult = string(t.fjBNo1);
          }
          cResult[9] = isActive;
          cResult[10] = stringResult;
          tmp17 = stringResult;
        } else {
          tmp17 = cResult[10];
        }
        if (isActive) {
          iconBgSelected = voicePanelButtonStyles.iconBgSelected;
        }
        if (cResult[11] !== backgroundColor) {
          const obj4 = { backgroundColor };
          cResult[11] = backgroundColor;
          cResult[12] = obj4;
          tmp19 = obj4;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] === tmp5.circle) {
          let tmp20;
          if (cResult[14] === tmp19) {
            tmp20 = cResult[15];
          }
          if (cResult[16] === MobilePhoneDenyIcon) {
            let tmp23;
            if (cResult[17] === color) {
              tmp23 = cResult[18];
            }
            if (cResult[19] === tmp5.iconContainer) {
              let tmp26;
              if (cResult[20] === tmp23) {
                tmp26 = cResult[21];
              }
              if (cResult[22] === tmp16) {
                if (cResult[23] === tmp15) {
                  if (cResult[24] === props) {
                    if (cResult[25] === tmp26) {
                      if (cResult[26] === tmp17) {
                        if (cResult[27] === iconBgSelected) {
                          let tmp29;
                          if (cResult[28] === tmp20) {
                            tmp29 = cResult[29];
                          }
                          return tmp29;
                        }
                      }
                    }
                  }
                }
              }
              const element = { onPress: tmp15, disabled: tmp16, props, accessibilityLabel: tmp17, style: iconBgSelected, children: items1 };
              items1 = [tmp20, tmp26];
              const tmp31 = closure_7(isActive(isFeatureEnabled[23]), element);
              cResult[22] = tmp16;
              cResult[23] = tmp15;
              cResult[24] = props;
              cResult[25] = tmp26;
              cResult[26] = tmp17;
              cResult[27] = iconBgSelected;
              cResult[28] = tmp20;
              cResult[29] = tmp31;
              tmp29 = tmp31;
            }
            const obj5 = { style: tmp5.iconContainer, children: tmp23 };
            const tmp28 = closure_6(isActive(isFeatureEnabled[22]), obj5);
            cResult[19] = tmp5.iconContainer;
            cResult[20] = tmp23;
            cResult[21] = tmp28;
            tmp26 = tmp28;
          }
          const obj6 = { color };
          const tmp25 = closure_6(MobilePhoneDenyIcon, obj6);
          cResult[16] = MobilePhoneDenyIcon;
          cResult[17] = color;
          cResult[18] = tmp25;
          tmp23 = tmp25;
        }
        const obj7 = { style: items2 };
        items2 = [tmp5.circle, tmp19];
        const tmp22 = closure_6(isActive(isFeatureEnabled[22]), obj7);
        cResult[13] = tmp5.circle;
        cResult[14] = tmp19;
        cResult[15] = tmp22;
        tmp20 = tmp22;
      }
    }
  }
  const fn2 = function f() {
    let intl;
    if (closure_4) {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      const obj2 = { title: intl.string(intl2.t.GFr0GR) };
      const tmp17 = VoicePanelVideoGuardErrorAlertDefault;
      intl = intl2.intl;
      openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, metroRequire(tmp17, obj2));
    } else if (isFeatureEnabled) {
      const obj3 = { source: "connected button", was_active: isActive };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj3);
      onPress();
    }
  };
  cResult[4] = isActive;
  cResult[5] = isFeatureEnabled;
  cResult[6] = onPress;
  cResult[7] = !videoEnabled;
  cResult[8] = fn2;
  tmp15 = fn2;
}) : ((arg0) => {
  let MobilePhoneDenyIcon;
  let backgroundColor;
  let color;
  let iconBgSelected;
  let items2;
  let items3;
  let props;
  let stringResult;
  let wrapperSpecs;
  let isActive;
  let isFeatureEnabled;
  let onPress;
  let closure_4;
  ({ props, wrapperSpecs } = arg0);
  const channelId = onPress.useContext(isActive(isFeatureEnabled[11])).channelId;
  const tmp3 = closure_9();
  let obj = channelId(isFeatureEnabled[12]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  let obj2 = channelId(isFeatureEnabled[13]);
  const items = [closure_4];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  isActive(isFeatureEnabled[14])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
  const tmp8 = isActive(isFeatureEnabled[15])(stateFromStores);
  isActive = tmp8.isActive;
  isFeatureEnabled = tmp8.isFeatureEnabled;
  onPress = tmp8.onPress;
  const VideoGuardExperiment = channelId(isFeatureEnabled[16]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelScreenshareButton" }).videoEnabled;
  closure_4 = tmp9;
  const items1 = [isActive, isFeatureEnabled, onPress, tmp9];
  let tmp11 = !tmp9;
  const callback = onPress.useCallback(() => {
    let intl;
    if (closure_4) {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      const obj2 = { title: intl.string(intl2.t.GFr0GR) };
      const tmp17 = VoicePanelVideoGuardErrorAlertDefault;
      intl = intl2.intl;
      openAlert(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, metroRequire(tmp17, obj2));
    } else if (isFeatureEnabled) {
      const obj3 = { source: "connected button", was_active: isActive };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj3);
      onPress();
    }
  }, items1);
  if (videoEnabled) {
    tmp11 = !isFeatureEnabled;
  }
  if (tmp11) {
    color = voicePanelButtonStyles.iconFillMuted.color;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (isActive) {
    backgroundColor = voicePanelButtonStyles.iconBgSelected.backgroundColor;
  } else {
    backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  }
  if (isActive) {
    color = voicePanelButtonStyles.iconFillSelected.color;
  }
  if (videoEnabled) {
    MobilePhoneDenyIcon = MobilePhoneShareIcon;
  } else {
    MobilePhoneDenyIcon = tmp4(tmp2[21]).MobilePhoneDenyIcon;
  }
  const element = { onPress: callback, disabled: tmp11, props, accessibilityLabel: stringResult, style: iconBgSelected, children: items3 };
  const tmpResult = isActive(isFeatureEnabled[23]);
  let intl = tmp4(tmp2[19]).intl;
  const string = intl.string;
  const t = tmp4(tmp2[19]).t;
  if (isActive) {
    stringResult = string(t.CpkXwZ);
  } else {
    stringResult = string(t.fjBNo1);
  }
  iconBgSelected = undefined;
  if (isActive) {
    iconBgSelected = voicePanelButtonStyles.iconBgSelected;
  }
  let obj3 = { style: items2 };
  items2 = [tmp3.circle, { backgroundColor }];
  items3 = [closure_6(isActive(isFeatureEnabled[22]), obj3), ];
  const obj4 = { style: tmp3.iconContainer, children: closure_6(MobilePhoneDenyIcon, { color }) };
  const tmpResult2 = isActive(isFeatureEnabled[22]);
  items3[1] = closure_6(tmpResult2, obj4);
  return closure_7(tmpResult, element);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx");

export default tmp3;