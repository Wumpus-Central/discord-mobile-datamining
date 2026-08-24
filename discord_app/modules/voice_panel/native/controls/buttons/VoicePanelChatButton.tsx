// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }, badge: null, notificationBadge: null };
createCacheKey = { position: "absolute", zIndex: 1, width: 10, height: 10, borderRadius: ThemesDefault.radii.round, top: 0, right: 0 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx");

export default function ChatButton(props) {
  props = props.props;
  const openTab = props.openTab;
  let connected;
  let React;
  let voicePanelButtonStyles;
  closure_5 = undefined;
  let backgroundColor;
  const context = React.useContext(openTab(connected[4]));
  connected = context.connected;
  const tmp2 = callback();
  React = tmp2;
  let obj = props(connected[5]);
  voicePanelButtonStyles = obj.useVoicePanelButtonStyles(props.wrapperSpecs);
  const tmp4 = openTab(connected[6])(context.channelId);
  closure_5 = tmp4;
  backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const items = [openTab, connected];
  callback = React.useCallback(() => {
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
    let obj = { fill: backgroundColor, circleRadius: props.width / 2, cutoutRadius: 8, enableCutout: null != closure_5, cutoutPositionInDegrees: 45, alignBadgeEdgeWithCircleEdge: true, badgeRadius: 5, scaleToPixelDensity: true };
    const children = [voicePanelButtonStyles(openTab(connected[10]), obj), , ];
    obj = { style: iconContainer.iconContainer, children: null };
    obj = { color: voicePanelButtonStyles.iconFill.color };
    obj[1] = voicePanelButtonStyles(props(connected[12]).ChatIcon, obj);
    children[1] = voicePanelButtonStyles(openTab(connected[11]), obj);
    let tmp3Result = null != closure_5;
    if (tmp3Result) {
      obj1 = { style: null };
      const items1 = [, ];
      ({ badge: arr2[0], notificationBadge: arr2[1] } = iconContainer);
      obj1[0] = items1;
      tmp3Result = voicePanelButtonStyles(openTab(connected[11]), obj1);
    }
    children[2] = tmp3Result;
    return backgroundColor(closure_5, { children });
  }, items1);
  return voicePanelButtonStyles(openTab(connected[8]), obj);
};