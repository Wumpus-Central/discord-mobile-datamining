// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx
import noop from "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, badge: null, notificationBadge: null };
createCacheKey = { position: "absolute", zIndex: 1, width: 10, height: 10, borderRadius: require("Themes").radii.round, top: 0, right: 0 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default function ChatButton(props) {
  props = props.props;
  const openTab = props.openTab;
  let connected;
  let React;
  let voicePanelButtonStyles;
  let c5;
  let backgroundColor;
  const context = React.useContext(openTab(connected[4]));
  connected = context.connected;
  const tmp2 = createCacheKey();
  React = tmp2;
  let obj = props(connected[5]);
  voicePanelButtonStyles = obj.useVoicePanelButtonStyles(props.wrapperSpecs);
  const tmp4 = openTab(connected[6])(context.channelId);
  c5 = tmp4;
  backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const items = [openTab, connected];
  const callback = React.useCallback(() => {
    const value = connected.get();
    const VoicePanelTabAnalyticsSources = props(connected[7]).VoicePanelTabAnalyticsSources;
    openTab({ tab: "chat", source: value ? VoicePanelTabAnalyticsSources.CONNECTED_BUTTON : VoicePanelTabAnalyticsSources.PREJOIN_BUTTON });
  }, items);
  obj = { onPress: callback, props, accessibilityLabel: null, children: null };
  const intl = props(connected[9]).intl;
  obj[2] = intl.string(props(connected[9]).t["5KxXrK"]);
  let items1 = [backgroundColor, props.width, tmp4, , , , ];
  ({ iconContainer: arr2[3], badge: arr2[4], notificationBadge: arr2[5] } = tmp2);
  items1[6] = voicePanelButtonStyles.iconFill.color;
  obj[3] = React.useMemo(() => {
    let obj = { fill: backgroundColor, circleRadius: props.width / 2, cutoutRadius: 8, enableCutout: null != c5, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius: 5, scaleToPixelDensity: true };
    const children = [voicePanelButtonStyles(openTab(connected[10]), obj), , ];
    obj = { style: _undefined.iconContainer, children: null };
    obj = { color: voicePanelButtonStyles.iconFill.color };
    obj[1] = voicePanelButtonStyles(props(connected[12]).ChatIcon, obj);
    children[1] = voicePanelButtonStyles(openTab(connected[11]), obj);
    let tmp3Result = null != c5;
    if (tmp3Result) {
      const obj1 = { style: null };
      const items1 = [, ];
      ({ badge: arr2[0], notificationBadge: arr2[1] } = _undefined);
      obj1[0] = items1;
      tmp3Result = voicePanelButtonStyles(openTab(connected[11]), obj1);
    }
    children[2] = tmp3Result;
    return backgroundColor(c5, { children });
  }, items1);
  return voicePanelButtonStyles(openTab(connected[8]), obj);
};