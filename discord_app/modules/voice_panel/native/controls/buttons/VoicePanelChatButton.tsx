// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ChatIcon from "../../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import trackVoicePanelTabOpened from "../trackVoicePanelTabOpened.tsx";
import CircleWithCutoutDefault from "../../shared/CircleWithCutout.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  iconContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  badge: null,
  notificationBadge: null,
};
let size = {
  position: "absolute",
  zIndex: 1,
  width: 10,
  height: 10,
  borderRadius: nativeDefault.radii.round,
  top: 0,
  right: 0,
};
obj2.badge = size;
obj2.notificationBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (wrapperSpecs) => {
      const cResult = openTab(576).c(25);
      ({ props, openTab } = wrapperSpecs);
      const context = noop.useContext(connected(11901));
      connected = context.connected;
      const tmp6 = closure_7();
      let obj = openTab(576);
      const voicePanelButtonStyles = openTab(17303).useVoicePanelButtonStyles(wrapperSpecs.wrapperSpecs);
      const tmp8 = connected(17245)(context.channelId);
      const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
      if (cResult[0] === connected) {
        if (cResult[1] === openTab) {
          let tmp9 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = openTab(1126).intl;
          const stringResult = intl.string(openTab(1126).t["5KxXrK"]);
          cResult[3] = stringResult;
          let tmp11 = stringResult;
        } else {
          tmp11 = cResult[3];
        }
        const result = props.width / 2;
        if (cResult[4] === backgroundColor) {
          if (cResult[5] === result) {
            if (cResult[6] === tmp15) {
              let tmp16 = cResult[7];
            }
            if (cResult[8] !== voicePanelButtonStyles.iconFill.color) {
              const obj3 = { color: voicePanelButtonStyles.iconFill.color };
              const tmp21 = closure_4(openTab(5855).ChatIcon, obj3);
              cResult[8] = voicePanelButtonStyles.iconFill.color;
              cResult[9] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[9];
            }
            if (cResult[10] === tmp6.iconContainer) {
              if (cResult[11] === tmp19) {
                let tmp22 = cResult[12];
              }
              if (cResult[13] === tmp8) {
                if (cResult[14] === tmp6.badge) {
                  if (cResult[15] === tmp6.notificationBadge) {
                    let tmp25 = cResult[16];
                  }
                  if (cResult[17] === tmp16) {
                    if (cResult[18] === tmp22) {
                      if (cResult[19] === tmp25) {
                        let tmp28 = cResult[20];
                      }
                      if (cResult[21] === tmp9) {
                        if (cResult[22] === props) {
                          if (cResult[23] === tmp28) {
                            let tmp32 = cResult[24];
                          }
                          return tmp32;
                        }
                      }
                      const element = { onPress: tmp9, props, accessibilityLabel: tmp11, children: tmp28 };
                      const tmp34 = closure_4(tmp4(17304), element);
                      cResult[21] = tmp9;
                      cResult[22] = props;
                      cResult[23] = tmp28;
                      cResult[24] = tmp34;
                      tmp32 = tmp34;
                    }
                  }
                  const obj4 = { children: null };
                  const items = [tmp16, tmp22, tmp25];
                  obj4.children = items;
                  const tmp31 = closure_6(closure_5, obj4);
                  cResult[17] = tmp16;
                  cResult[18] = tmp22;
                  cResult[19] = tmp25;
                  cResult[20] = tmp31;
                  tmp28 = tmp31;
                }
              }
              let tmp26 = null != tmp8;
              if (tmp26) {
                const obj5 = { style: null };
                const items1 = [,];
                ({ badge: arr[0], notificationBadge: arr[1] } = tmp6);
                obj5.style = items1;
                tmp26 = closure_4(tmp4(5976), obj5);
              }
              cResult[13] = tmp8;
              cResult[14] = tmp6.badge;
              cResult[15] = tmp6.notificationBadge;
              cResult[16] = tmp26;
              tmp25 = tmp26;
            }
            const obj6 = { style: tmp6.iconContainer, children: tmp19 };
            const tmp24 = closure_4(tmp4(5976), obj6);
            cResult[10] = tmp6.iconContainer;
            cResult[11] = tmp19;
            cResult[12] = tmp24;
            tmp22 = tmp24;
          }
        }
        const obj7 = {
          fill: backgroundColor,
          circleRadius: result,
          cutoutRadius: 8,
          enableCutout: null != tmp8,
          cutoutPositionInDegrees: 45,
          alignBadgeEdgeWithCircleEdge: true,
          badgeRadius: 5,
          scaleToPixelDensity: true,
        };
        const tmp18 = closure_4(tmp4(17312), obj7);
        cResult[4] = backgroundColor;
        cResult[5] = result;
        cResult[6] = null != tmp8;
        cResult[7] = tmp18;
        tmp16 = tmp18;
      }
      const fn = function u() {
        value = connected.get();
        const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
        openTab({
          tab: "chat",
          source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON,
        });
        const obj = {
          tab: "chat",
          source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON,
        };
      };
      cResult[0] = connected;
      cResult[1] = openTab;
      cResult[2] = fn;
      tmp9 = fn;
      const obj2 = openTab(17303);
    }
  : (props) => {
      props = props.props;
      const openTab = props.openTab;
      let connected;
      noop = undefined;
      const context = noop.useContext(openTab(connected[6]));
      connected = context.connected;
      const tmp2 = closure_7();
      noop = tmp2;
      const voicePanelButtonStyles = props(connected[7]).useVoicePanelButtonStyles(props.wrapperSpecs);
      const tmp4 = openTab(connected[8])(context.channelId);
      closure_5 = tmp4;
      const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
      const items = [openTab, connected];
      const callback = noop.useCallback(() => {
        value = connected.get();
        const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
        openTab({
          tab: "chat",
          source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON,
        });
        const obj = {
          tab: "chat",
          source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON,
        };
      }, items);
      const element = { onPress: callback, props, accessibilityLabel: null, children: null };
      let obj = props(connected[7]);
      const intl = props(connected[10]).intl;
      element.accessibilityLabel = intl.string(props(connected[10]).t["5KxXrK"]);
      let items1 = [backgroundColor, props.width, tmp4, , , ,];
      ({ iconContainer: arr2[3], badge: arr2[4], notificationBadge: arr2[5] } = tmp2);
      items1[6] = voicePanelButtonStyles.iconFill.color;
      element.children = noop.useMemo(() => {
        const children = [
          React4(CircleWithCutoutDefault, {
            fill: backgroundColor,
            circleRadius: props.width / 2,
            cutoutRadius: 8,
            enableCutout: null != closure_5,
            cutoutPositionInDegrees: 45,
            alignBadgeEdgeWithCircleEdge: true,
            badgeRadius: 5,
            scaleToPixelDensity: true,
          }),
          ,
        ];
        const obj2 = {
          style: iconContainer.iconContainer,
          children: React4(ChatIcon.ChatIcon, { color: voicePanelButtonStyles.iconFill.color }),
        };
        children[1] = React4(NativeViewDefault, obj2);
        let tmp3Result = null != closure_5;
        if (tmp3Result) {
          const obj4 = { style: null };
          const items1 = [,];
          ({ badge: arr2[0], notificationBadge: arr2[1] } = iconContainer);
          obj4.style = items1;
          tmp3Result = React4(NativeViewDefault, obj4);
        }
        children[2] = tmp3Result;
        return timestampProducer(hasOwnProperty, { children });
      }, items1);
      return voicePanelButtonStyles(openTab(connected[14]), element);
    };
