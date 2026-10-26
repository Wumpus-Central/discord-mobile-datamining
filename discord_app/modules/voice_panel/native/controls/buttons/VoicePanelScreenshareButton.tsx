// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import VoicePanelVideoGuardErrorAlert from "../../alerts/VoicePanelVideoGuardErrorAlert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;

require = fn;
const AnalyticEvents = fn(1087).AnalyticEvents;
const jsx = fn(21).jsx;
const MetaQuestUtils = fn(1630);
if (MetaQuestUtils.isMetaQuest()) {
  let MobilePhoneShareIcon = fn(13453).ScreenArrowIcon;
} else {
  MobilePhoneShareIcon = fn(18631).MobilePhoneShareIcon;
}
const createStyles = fn(4971);
let closure_8 = createStyles.createStyles({
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ScreenshareButton(props) {
      const cResult = channelId(isFeatureEnabled[9]).c(24);
      props = props.props;
      channelId = onPress.useContext(isActive(isFeatureEnabled[10])).channelId;
      const tmp5 = closure_8();
      let obj = channelId(isFeatureEnabled[9]);
      const voicePanelButtonStyles = channelId(isFeatureEnabled[11]).useVoicePanelButtonStyles(props.wrapperSpecs);
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
      let obj2 = channelId(isFeatureEnabled[11]);
      const stateFromStores = channelId(isFeatureEnabled[12]).useStateFromStores(first, tmp9);
      isActive(isFeatureEnabled[13])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
      const tmp12 = isActive(isFeatureEnabled[14])(stateFromStores);
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
      const VideoGuardExperiment = tmp(tmp2[15]).VideoGuardExperiment;
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
              color = voicePanelButtonStyles.iconFillSelected.color;
            }
            if (videoEnabled) {
              let MobilePhoneDenyIcon = MobilePhoneShareIcon;
            } else {
              MobilePhoneDenyIcon = tmp(tmp2[20]).MobilePhoneDenyIcon;
            }
            if (cResult[9] !== isActive) {
              let intl = tmp(tmp2[18]).intl;
              const string = intl.string;
              let CpkXwZ = tmp(tmp2[18]).t;
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
              if (cResult[11] === MobilePhoneDenyIcon) {
                if (cResult[12] === color) {
                  let tmp20 = cResult[13];
                }
                if (cResult[14] === tmp5.iconContainer) {
                  if (cResult[15] === tmp20) {
                    let tmp23 = cResult[16];
                  }
                  if (cResult[17] === tmp16) {
                    if (cResult[18] === tmp15) {
                      if (cResult[19] === props) {
                        if (cResult[20] === tmp17) {
                          if (cResult[21] === iconBgSelected) {
                            if (cResult[22] === tmp23) {
                              let tmp26 = cResult[23];
                            }
                            return tmp26;
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
                    children: tmp23,
                  };
                  const tmp28 = jsx(tmp4(tmp2[22]), {
                    onPress: tmp15,
                    disabled: tmp16,
                    props,
                    accessibilityLabel: tmp17,
                    style: iconBgSelected,
                    children: tmp23,
                  });
                  cResult[17] = tmp16;
                  cResult[18] = tmp15;
                  cResult[19] = props;
                  cResult[20] = tmp17;
                  cResult[21] = iconBgSelected;
                  cResult[22] = tmp23;
                  cResult[23] = tmp28;
                  tmp26 = tmp28;
                }
                let obj4 = { style: tmp5.iconContainer, children: tmp20 };
                const tmp25 = jsx(tmp4(tmp2[21]), { style: tmp5.iconContainer, children: tmp20 });
                cResult[14] = tmp5.iconContainer;
                cResult[15] = tmp20;
                cResult[16] = tmp25;
                tmp23 = tmp25;
              }
              const obj5 = { color };
              const tmp22 = <MobilePhoneDenyIcon color={color} />;
              cResult[11] = MobilePhoneDenyIcon;
              cResult[12] = color;
              cResult[13] = tmp22;
              tmp20 = tmp22;
            }
          }
        }
      }
      class I {
        constructor() {
          if (closure_4) {
            tmp9 = closure_0;
            tmp10 = closure_2;
            obj3 = closure_0(closure_2[16]);
            tmp11 = closure_2;
            tmp12 = jsx;
            tmp13 = closure_1;
            tmp14 = closure_2;
            obj1 = { title: null };
            tmp16 = closure_2;
            tmp15 = closure_1(closure_2[17]);
            intl = closure_0(closure_2[18]).intl;
            tmp17 = closure_2;
            obj1.title = intl.string(closure_0(closure_2[18]).t.GFr0GR);
            openAlertResult = obj3.openAlert(
              closure_0(closure_2[17]).VOICE_PANEL_VIDEO_GUARD_ERROR_KEY,
              jsx(tmp15, obj1),
            );
          } else {
            tmp = isFeatureEnabled;
            if (isFeatureEnabled) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[19]);
              tmp4 = AnalyticEvents;
              obj5 = { source: "connected button", was_active: null };
              tmp5 = isActive;
              obj5.was_active = isActive;
              trackResult = obj.track(AnalyticEvents.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj5);
              tmp7 = onPress;
              tmp8 = onPress();
            }
          }
          return;
        }
      }
      cResult[4] = isActive;
      cResult[5] = isFeatureEnabled;
      cResult[6] = onPress;
      cResult[7] = !videoEnabled;
      cResult[8] = I;
      tmp15 = I;
      const tmpResult = channelId(isFeatureEnabled[12]);
    }
  : function ScreenshareButton(arg0) {
      let isActive;
      let isFeatureEnabled;
      let onPress;
      closure_4 = undefined;
      ({ props, wrapperSpecs } = arg0);
      const channelId = onPress.useContext(isActive(isFeatureEnabled[10])).channelId;
      const tmp3 = closure_8();
      const voicePanelButtonStyles = channelId(isFeatureEnabled[11]).useVoicePanelButtonStyles(wrapperSpecs);
      let obj = channelId(isFeatureEnabled[11]);
      const items = [closure_4];
      const stateFromStores = channelId(isFeatureEnabled[12]).useStateFromStores(items, () =>
        ChannelStore.getChannel(channelId),
      );
      isActive(isFeatureEnabled[13])(null != stateFromStores, "null channel in VoicePanelScreenshareButton");
      const tmp8 = isActive(isFeatureEnabled[14])(stateFromStores);
      isActive = tmp8.isActive;
      isFeatureEnabled = tmp8.isFeatureEnabled;
      onPress = tmp8.onPress;
      const VideoGuardExperiment = channelId(isFeatureEnabled[15]).VideoGuardExperiment;
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
            jsx(VoicePanelVideoGuardErrorAlertDefault, { title: null }),
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
        color = voicePanelButtonStyles.iconFillSelected.color;
      }
      if (videoEnabled) {
        let MobilePhoneDenyIcon = MobilePhoneShareIcon;
      } else {
        MobilePhoneDenyIcon = tmp4(tmp2[20]).MobilePhoneDenyIcon;
      }
      const element = {
        onPress: callback,
        disabled: tmp11,
        props,
        accessibilityLabel: null,
        style: null,
        children: null,
      };
      let obj2 = channelId(isFeatureEnabled[12]);
      let intl = tmp4(tmp2[18]).intl;
      const string = intl.string;
      const t = tmp4(tmp2[18]).t;
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
      const tmpResult = isActive(isFeatureEnabled[22]);
      obj3.children = <MobilePhoneDenyIcon color={color} />;
      element.children = jsx(isActive(isFeatureEnabled[21]), { style: tmp3.iconContainer, children: null });
      return (
        <tmpResult onPress={callback} disabled={tmp11} props={props} accessibilityLabel={null} style={null}>
          {null}
        </tmpResult>
      );
    };
