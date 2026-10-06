// === Module 17363: VoicePanelChatButton ===

// Module 17363 (VoicePanelChatButton)
import nativeDefault from "native" /* 587 */;
import ChatIcon from "ChatIcon" /* 5862 */;
import NativeViewDefault from "NativeView" /* 5983 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 17342 */;
import CircleWithCutoutDefault from "CircleWithCutout" /* 17364 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let react = react_mod;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, badge: size, notificationBadge: obj2 };
size = { position: "absolute", zIndex: 1, width: 10, height: 10, borderRadius: nativeDefault.radii.round, top: 0, right: 0 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((wrapperSpecs) => {
  let connected;
  let items;
  let items1;
  let openTab;
  let props;
  let obj = openTab(576);
  const cResult = obj.c(25);
  ({ props, openTab } = wrapperSpecs);
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  const context = react.useContext(connected(11915));
  connected = context.connected;
  const channelId = context.channelId;
  const tmp6 = closure_7();
  const obj2 = openTab(17355);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp8 = connected(17298)(channelId);
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  if (cResult[0] === connected) {
    let tmp9;
    let tmp11;
    if (cResult[1] === openTab) {
      tmp9 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = openTab(1126).intl;
      const stringResult = intl.string(openTab(1126).t["5KxXrK"]);
      cResult[3] = stringResult;
      tmp11 = stringResult;
    } else {
      tmp11 = cResult[3];
    }
    const result = props.width / 2;
    if (cResult[4] === backgroundColor) {
      if (cResult[5] === result) {
        let tmp16;
        let tmp19;
        if (cResult[6] === null != tmp8) {
          tmp16 = cResult[7];
        }
        if (cResult[8] !== voicePanelButtonStyles.iconFill.color) {
          const obj3 = { color: voicePanelButtonStyles.iconFill.color };
          const tmp21 = closure_4(openTab(5862).ChatIcon, obj3);
          cResult[8] = voicePanelButtonStyles.iconFill.color;
          cResult[9] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[9];
        }
        if (cResult[10] === tmp6.iconContainer) {
          let tmp22;
          if (cResult[11] === tmp19) {
            tmp22 = cResult[12];
          }
          if (cResult[13] === tmp8) {
            if (cResult[14] === tmp6.badge) {
              let tmp25;
              if (cResult[15] === tmp6.notificationBadge) {
                tmp25 = cResult[16];
              }
              if (cResult[17] === tmp16) {
                if (cResult[18] === tmp22) {
                  let tmp28;
                  if (cResult[19] === tmp25) {
                    tmp28 = cResult[20];
                  }
                  if (cResult[21] === tmp9) {
                    if (cResult[22] === props) {
                      let tmp32;
                      if (cResult[23] === tmp28) {
                        tmp32 = cResult[24];
                      }
                      return tmp32;
                    }
                  }
                  const element = { onPress: tmp9, props, accessibilityLabel: tmp11, children: tmp28 };
                  const tmp34 = closure_4(connected(17356), element);
                  cResult[21] = tmp9;
                  cResult[22] = props;
                  cResult[23] = tmp28;
                  cResult[24] = tmp34;
                  tmp32 = tmp34;
                }
              }
              const obj4 = { children: items };
              items = [tmp16, tmp22, tmp25];
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
            const obj5 = { style: items1 };
            items1 = [, ];
            ({ badge: arr[0], notificationBadge: arr[1] } = tmp6);
            tmp26 = closure_4(tmp4(5983), obj5);
          }
          cResult[13] = tmp8;
          cResult[14] = tmp6.badge;
          cResult[15] = tmp6.notificationBadge;
          cResult[16] = tmp26;
          tmp25 = tmp26;
        }
        const obj6 = { style: tmp6.iconContainer, children: tmp19 };
        const tmp24 = closure_4(connected(5983), obj6);
        cResult[10] = tmp6.iconContainer;
        cResult[11] = tmp19;
        cResult[12] = tmp24;
        tmp22 = tmp24;
      }
    }
    const obj7 = { fill: backgroundColor, circleRadius: result, cutoutRadius: 8, enableCutout: null != tmp8, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius: 5, scaleToPixelDensity: true };
    const tmp18 = closure_4(connected(17364), obj7);
    cResult[4] = backgroundColor;
    cResult[5] = result;
    cResult[6] = null != tmp8;
    cResult[7] = tmp18;
    tmp16 = tmp18;
  }
  const fn = function u() {
    const value = connected.get();
    const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
    const obj = { tab: "chat", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON };
    openTab(obj);
  };
  cResult[0] = connected;
  cResult[1] = openTab;
  cResult[2] = fn;
  tmp9 = fn;
}) : ((props) => {
  let iconContainer;
  let intl;
  let items1;
  props = props.props;
  const openTab = props.openTab;
  let connected;
  react = undefined;
  const wrapperSpecs = props.wrapperSpecs;
  const context = react.useContext(openTab(connected[6]));
  connected = context.connected;
  const channelId = context.channelId;
  const tmp2 = closure_7();
  react = tmp2;
  let obj = props(connected[7]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp4 = openTab(connected[8])(channelId);
  let closure_5 = tmp4;
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const items = [openTab, connected];
  const callback = react.useCallback(() => {
    const value = connected.get();
    const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
    const obj = { tab: "chat", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON };
    openTab(obj);
  }, items);
  const element = {
    onPress: callback,
    props,
    accessibilityLabel: intl.string(props(connected[10]).t["5KxXrK"]),
    children: react.useMemo(() => {
      let items1;
      let obj3;
      const children = [, , ];
      const obj = { fill: backgroundColor, circleRadius: props.width / 2, cutoutRadius: 8, enableCutout: null != hasOwnProperty, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius: 5, scaleToPixelDensity: true };
      children[0] = React3(CircleWithCutoutDefault, obj);
      const obj2 = { style: iconContainer.iconContainer, children: React3(ChatIcon.ChatIcon, obj3) };
      obj3 = { color: voicePanelButtonStyles.iconFill.color };
      const tmp6 = NativeViewDefault;
      children[1] = React3(tmp6, obj2);
      let tmp3Result = null != hasOwnProperty;
      if (tmp3Result) {
        const obj4 = { style: items1 };
        items1 = [, ];
        ({ badge: arr2[0], notificationBadge: arr2[1] } = iconContainer);
        tmp3Result = React3(NativeViewDefault, obj4);
      }
      children[2] = tmp3Result;
      return metroRequire(hasOwnProperty, { children });
    }, items1)
  };
  let tmp6 = openTab(connected[14]);
  intl = props(connected[10]).intl;
  items1 = [backgroundColor, props.width, tmp4, , , , ];
  ({ iconContainer: arr2[3], badge: arr2[4], notificationBadge: arr2[5] } = tmp2);
  items1[6] = voicePanelButtonStyles.iconFill.color;
  return voicePanelButtonStyles(tmp6, element);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default tmp4;