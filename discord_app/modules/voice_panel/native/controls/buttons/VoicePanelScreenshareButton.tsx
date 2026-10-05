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
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const MetaQuestUtils = fn(1615);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = fn(12189).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = fn(17344).MobilePhoneShareIcon;
}
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (props) => {
      const cResult = channelId(isFeatureEnabled[10]).c(30);
      props = props.props;
      channelId = onPress.useContext(isActive(isFeatureEnabled[11])).channelId;
      const tmp5 = closure_9();
      let obj = channelId(isFeatureEnabled[10]);
      const voicePanelButtonStyles = channelId(isFeatureEnabled[12]).useVoicePanelButtonStyles(props.wrapperSpecs);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_4];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function _() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      let obj2 = channelId(isFeatureEnabled[12]);
      const stateFromStores = channelId(isFeatureEnabled[13]).useStateFromStores(first, tmp9);
      isActive(isFeatureEnabled[14])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
      const tmp12 = isActive(isFeatureEnabled[15])(stateFromStores);
      isActive = tmp12.isActive;
      isFeatureEnabled = tmp12.isFeatureEnabled;
      onPress = tmp12.onPress;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { location: "VoicePanelScreenshareButton" };
        cResult[3] = obj3;
        let tmp13 = obj3;
      } else {
        tmp13 = cResult[3];
      }
      const VideoGuardExperiment = tmp(tmp2[16]).VideoGuardExperiment;
      const videoEnabled = VideoGuardExperiment.useConfig(tmp13).videoEnabled;
      closure_4 = tmp14;
      if (cResult[4] === isActive) {
        if (cResult[5] === isFeatureEnabled) {
          if (cResult[6] === onPress) {
            if (cResult[7] === tmp14) {
              let tmp15 = cResult[8];
            }
            let tmp16 = !tmp14;
            if (videoEnabled) {
              tmp16 = !isFeatureEnabled;
            }
            if (tmp16) {
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
              MobilePhoneDenyIcon = tmp(tmp2[21]).MobilePhoneDenyIcon;
            }
            if (cResult[9] !== isActive) {
              let intl = tmp(tmp2[19]).intl;
              const string = intl.string;
              let CpkXwZ = tmp(tmp2[19]).t;
              if (isActive) {
                CpkXwZ = CpkXwZ.CpkXwZ;
                let stringResult = string(CpkXwZ);
              } else {
                stringResult = string(CpkXwZ.fjBNo1);
              }
              cResult[9] = isActive;
              cResult[10] = stringResult;
            } else {
              if (isActive) {
                const iconBgSelected = voicePanelButtonStyles.iconBgSelected;
              }
              if (cResult[11] !== backgroundColor) {
                let obj4 = { backgroundColor };
                cResult[11] = backgroundColor;
                cResult[12] = obj4;
                let tmp20 = obj4;
              } else {
                tmp20 = cResult[12];
              }
              if (cResult[13] === tmp5.circle) {
                if (cResult[14] === tmp20) {
                  let tmp21 = cResult[15];
                }
                if (cResult[16] === MobilePhoneDenyIcon) {
                  if (cResult[17] === color) {
                    let tmp24 = cResult[18];
                  }
                  if (cResult[19] === tmp5.iconContainer) {
                    if (cResult[20] === tmp24) {
                      let tmp27 = cResult[21];
                    }
                    if (cResult[22] === tmp16) {
                      if (cResult[23] === tmp15) {
                        if (cResult[24] === props) {
                          if (cResult[25] === tmp27) {
                            if (cResult[26] === tmp17) {
                              if (cResult[27] === iconBgSelected) {
                                if (cResult[28] === tmp21) {
                                  let tmp30 = cResult[29];
                                }
                                return tmp30;
                              }
                            }
                          }
                        }
                      }
                    }
                    const element = {
                      onPress: tmp15,
                      disabled: tmp16,
                      props,
                      accessibilityLabel: tmp17,
                      style: iconBgSelected,
                      children: null,
                    };
                    const items1 = [tmp21, tmp27];
                    element.children = items1;
                    const tmp32 = closure_7(tmp4(tmp2[23]), element);
                    cResult[22] = tmp16;
                    cResult[23] = tmp15;
                    cResult[24] = props;
                    cResult[25] = tmp27;
                    cResult[26] = tmp17;
                    cResult[27] = iconBgSelected;
                    cResult[28] = tmp21;
                    cResult[29] = tmp32;
                    tmp30 = tmp32;
                  }
                  const obj5 = { style: tmp5.iconContainer, children: tmp24 };
                  const tmp29 = closure_6(tmp4(tmp2[22]), obj5);
                  cResult[19] = tmp5.iconContainer;
                  cResult[20] = tmp24;
                  cResult[21] = tmp29;
                  tmp27 = tmp29;
                }
                const obj6 = { color };
                const tmp26 = closure_6(MobilePhoneDenyIcon, obj6);
                cResult[16] = MobilePhoneDenyIcon;
                cResult[17] = color;
                cResult[18] = tmp26;
                tmp24 = tmp26;
              }
              const obj7 = { style: null };
              const items2 = [tmp5.circle, tmp20];
              obj7.style = items2;
              const tmp23 = closure_6(tmp4(tmp2[22]), obj7);
              cResult[13] = tmp5.circle;
              cResult[14] = tmp20;
              cResult[15] = tmp23;
              tmp21 = tmp23;
            }
          }
        }
      }
      const fn2 = function f() {
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
      };
      cResult[4] = isActive;
      cResult[5] = isFeatureEnabled;
      cResult[6] = onPress;
      cResult[7] = !videoEnabled;
      cResult[8] = fn2;
      tmp15 = fn2;
      const tmpResult = channelId(isFeatureEnabled[13]);
    }
  : (arg0) => {
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
      const stateFromStores = channelId(isFeatureEnabled[13]).useStateFromStores(items, () =>
        ChannelStore.getChannel(channelId),
      );
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
        MobilePhoneDenyIcon = tmp4(tmp2[21]).MobilePhoneDenyIcon;
      }
      const element = {
        onPress: callback,
        disabled: tmp11,
        props,
        accessibilityLabel: null,
        style: null,
        children: null,
      };
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
      const items3 = [closure_6(isActive(isFeatureEnabled[22]), obj3)];
      let obj4 = { style: tmp3.iconContainer, children: null };
      const tmpResult = isActive(isFeatureEnabled[23]);
      obj4.children = closure_6(MobilePhoneDenyIcon, { color });
      items3[1] = closure_6(isActive(isFeatureEnabled[22]), obj4);
      element.children = items3;
      return closure_7(tmpResult, element);
    };
