// discord_app/modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx
import importAllResult from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function GuildsBarPendingGuildFolder(id) {
  let accessibilityActions;
  let childNodes;
  let expanded;
  let onAccessibilityAction;
  id = id.id;
  let importDefault;
  ({ expanded, childNodes } = id);
  let obj = id(14969);
  importDefault = importDefault(10998)();
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  const items = [handleConnectionOpen];
  const items1 = [id];
  const stateFromStores = id(589).useStateFromStores(items, () => {
    let guildId = outer1_4.getGuildId();
    if (guildId == null) {
      guildId = outer1_5;
    }
    return closure_1.includes(guildId);
  });
  const memo = importAllResult.useMemo(() => {
    let obj = id(outer1_2[7]);
    guildFolderMenuItems = obj.getGuildFolderMenuItems(guildFolderMenuItems);
    obj = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const guildFolderMenuItems = arg0;
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
  const obj2 = id(589);
  const items2 = [id];
  const sharedValue = id(4054).useSharedValue("" + id);
  const memo1 = importAllResult.useMemo(() => ({
    onPress() {
      const result = outer1_0(outer1_2[9]).triggerHapticFeedback(outer1_0(outer1_2[9]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = outer1_0(outer1_2[9]);
      const result1 = outer1_1(outer1_2[10]).toggleGuildFolderExpand(closure_0);
    }
  }), items2);
  obj = { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "HermesInternal", overState: "a", preventClipping: "#f0f8ff", config: "#faebd7", externalChildren: "#00ffff", children: "#7fffd4" };
  const obj3 = id(4054);
  obj[0] = "" + id;
  obj[1] = accessibilityActions;
  obj[2] = onAccessibilityAction;
  obj[3] = stateFromStores;
  obj[6] = guildsBarAnimatedWrapperStyles;
  const intl = id(1236).intl;
  obj[7] = intl.string(id(1236).t["scsU+l"]);
  obj[8] = sharedValue;
  obj[12] = memo1;
  let tmp8Result = null;
  if (expanded) {
    obj = { folderId: null, totalItems: null };
    obj[0] = id;
    obj[1] = childNodes.length;
    tmp8Result = tmp8(tmp(14968).GuildsBarGuildFolderBG, obj);
  }
  obj[13] = tmp8Result;
  obj[14] = jsx(id(12009).HourglassIcon, {});
  return jsx(importDefault(14969), { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "HermesInternal", overState: "a", preventClipping: "#f0f8ff", config: "#faebd7", externalChildren: "#00ffff", children: "#7fffd4" });
});
let result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default memoResult;