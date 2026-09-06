// === Module 16306: ? ===

// Module 16306
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 9206 */;
import UnreadIndicatorDefault from "UnreadIndicator" /* 16294 */;
import importAllResult from "noop" /* 19 */;
import closure_4 from "handleConnectionOpen" /* 4381 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function GuildsBarPendingGuildFolder(id) {
  id = id.id;
  importDefault = undefined;
  ({ expanded, childNodes } = id);
  let obj = id(16294);
  importDefault = usePendingFolderGuildIdsDefault();
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  const items = [closure_4];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    let guildId = closure_1_4.getGuildId();
    if (guildId == null) {
      guildId = closure_1_5;
    }
    return closure_1.includes(guildId);
  });
  const memo = importAllResult.useMemo(() => {
    let obj = id(closure_1_2[7]);
    guildFolderMenuItems = obj.getGuildFolderMenuItems(guildFolderMenuItems);
    obj = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        guildFolderMenuItems = arg0;
        const found = guildFolderMenuItems.find((label) => label.label === nativeEvent.nativeEvent.actionName);
        if (found != null) {
          const action = found.action;
          if (action != null) {
            action();
          }
        }
      }
    };
    return obj;
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const obj2 = id(504);
  const items2 = [id];
  const sharedValue = id(4296).useSharedValue("" + id);
  const memo1 = importAllResult.useMemo(() => ({
    onPress() {
      const result = closure_1_0(closure_1_2[9]).triggerHapticFeedback(closure_1_0(closure_1_2[9]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = closure_1_0(closure_1_2[9]);
      const result1 = closure_1_1(closure_1_2[10]).toggleGuildFolderExpand(closure_0);
    }
  }), items2);
  obj = { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "a", overState: "accessible", config: true, externalChildren: true, children: true };
  const obj3 = id(4296);
  obj[0] = "" + id;
  obj[1] = accessibilityActions;
  obj[2] = onAccessibilityAction;
  obj[3] = stateFromStores;
  obj[6] = guildsBarAnimatedWrapperStyles;
  const intl = id(1114).intl;
  obj[7] = intl.string(id(1114).t["scsU+l"]);
  obj[8] = sharedValue;
  obj[11] = memo1;
  let tmp8Result = null;
  if (expanded) {
    obj = { folderId: null, totalItems: null };
    obj[0] = id;
    obj[1] = childNodes.length;
    tmp8Result = tmp8(tmp(16293).GuildsBarGuildFolderBG, obj);
  }
  obj[12] = tmp8Result;
  obj[13] = jsx(id(9030).HourglassIcon, {});
  return jsx(UnreadIndicatorDefault, { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "a", overState: "accessible", config: true, externalChildren: true, children: true });
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default memoResult;