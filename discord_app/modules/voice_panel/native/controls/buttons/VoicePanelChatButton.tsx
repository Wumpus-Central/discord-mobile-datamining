// === Module 17737: VoicePanelChatButton ===

// Module 17737 (VoicePanelChatButton)
import nativeDefault from "native" /* 576 */;
import ChatIcon from "ChatIcon" /* 5375 */;
import NativeViewDefault from "NativeView" /* 5892 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 17716 */;
import CircleWithCutoutDefault from "CircleWithCutout" /* 17738 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = { iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, badge: null, notificationBadge: null };
let size = { position: "absolute", zIndex: 1, width: 10, height: 10, borderRadius: nativeDefault.radii.round, top: 0, right: 0 };
obj2.badge = size;
obj2.notificationBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default function ChatButton(props) {
  props = props.props;
  const openTab = props.openTab;
  let connected;
  noop = undefined;
  const context = noop.useContext(openTab(connected[4]));
  connected = context.connected;
  const tmp2 = closure_7();
  noop = tmp2;
  const voicePanelButtonStyles = props(connected[5]).useVoicePanelButtonStyles(props.wrapperSpecs);
  const tmp4 = openTab(connected[6])(context.channelId);
  closure_5 = tmp4;
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const items = [openTab, connected];
  const callback = noop.useCallback(() => {
    value = connected.get();
    const VoicePanelTabAnalyticsSources = trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources;
    openTab({ tab: "chat", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON });
    const obj = { tab: "chat", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON };
  }, items);
  const element = { onPress: callback, props, accessibilityLabel: null, children: null };
  let obj = props(connected[5]);
  const intl = props(connected[9]).intl;
  element.accessibilityLabel = intl.string(props(connected[9]).t["5KxXrK"]);
  let items1 = [backgroundColor, props.width, tmp4, , , , ];
  ({ iconContainer: arr2[3], badge: arr2[4], notificationBadge: arr2[5] } = tmp2);
  items1[6] = voicePanelButtonStyles.iconFill.color;
  element.children = noop.useMemo(() => {
    const children = [React4(CircleWithCutoutDefault, { fill: backgroundColor, circleRadius: props.width / 2, cutoutRadius: 8, enableCutout: null != closure_5, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius: 5, scaleToPixelDensity: true }), , ];
    const obj2 = { style: iconContainer.iconContainer, children: React4(ChatIcon.ChatIcon, { color: voicePanelButtonStyles.iconFill.color }) };
    children[1] = React4(NativeViewDefault, obj2);
    let tmp3Result = null != closure_5;
    if (tmp3Result) {
      const obj4 = { style: null };
      const items1 = [, ];
      ({ badge: arr2[0], notificationBadge: arr2[1] } = iconContainer);
      obj4.style = items1;
      tmp3Result = React4(NativeViewDefault, obj4);
    }
    children[2] = tmp3Result;
    return timestampProducer(hasOwnProperty, { children });
  }, items1);
  return voicePanelButtonStyles(openTab(connected[8]), element);
};