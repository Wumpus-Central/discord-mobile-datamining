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
fn(4560);
let createStyles = {
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
createStyles.badge = size;
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
createStyles.notificationBadge = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
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
    openTab({
      tab: "chat",
      source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON,
    });
  }, items);
  const element = { onPress: callback, props, accessibilityLabel: null, children: null };
  let obj = props(connected[5]);
  const intl = props(connected[9]).intl;
  element.accessibilityLabel = intl.string(props(connected[9]).t["5KxXrK"]);
  let items1 = [backgroundColor, props.width, tmp4, , , ,];
  ({ iconContainer: arr2[3], badge: arr2[4], notificationBadge: arr2[5] } = tmp2);
  items1[6] = voicePanelButtonStyles.iconFill.color;
  element.children = noop.useMemo(() => {
    let obj = {
      fill: backgroundColor,
      circleRadius: props.width / 2,
      cutoutRadius: 8,
      enableCutout: null != closure_5,
      cutoutPositionInDegrees: 45,
      alignBadgeEdgeWithCircleEdge: true,
      badgeRadius: 5,
      scaleToPixelDensity: true,
    };
    const children = [React4(CircleWithCutoutDefault, obj), ,];
    obj = { style: iconContainer.iconContainer, children: null };
    obj = { color: voicePanelButtonStyles.iconFill.color };
    obj.children = React4(ChatIcon.ChatIcon, obj);
    children[1] = React4(NativeViewDefault, obj);
    let tmp3Result = null != closure_5;
    if (tmp3Result) {
      const obj1 = { style: null };
      const items1 = [,];
      ({ badge: arr2[0], notificationBadge: arr2[1] } = iconContainer);
      obj1.style = items1;
      tmp3Result = React4(NativeViewDefault, obj1);
    }
    children[2] = tmp3Result;
    return timestampProducer(hasOwnProperty, { children });
  }, items1);
  return voicePanelButtonStyles(openTab(connected[8]), element);
}
