// discord_app/modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx
import usePendingFolderGuildIdsDefault from "../usePendingFolderGuildIds.tsx";
import UnreadIndicatorDefault from "GuildsBarAnimatedItemWrapper.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/SelectedGuildStore.tsx";
import { EMPTY_STRING_SNOWFLAKE_ID } from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function GuildsBarPendingGuildFolder(id) {
  id = id.id;
  importDefault = undefined;
  ({ expanded, childNodes } = id);
  let obj = id(16132);
  importDefault = usePendingFolderGuildIdsDefault();
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({
    disableSelectedColor: true,
    disableBGColor: false,
  });
  const items = [closure_4];
  const items1 = [id];
  const stateFromStores = id(586).useStateFromStores(items, () => {
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
      },
    };
    return obj;
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const obj2 = id(586);
  const items2 = [id];
  const sharedValue = id(4217).useSharedValue("" + id);
  const memo1 = importAllResult.useMemo(
    () => ({
      onPress() {
        const result = closure_1_0(closure_1_2[9]).triggerHapticFeedback(
          closure_1_0(closure_1_2[9]).HapticFeedbackTypes.IMPACT_LIGHT,
        );
        const obj = closure_1_0(closure_1_2[9]);
        const result1 = closure_1_1(closure_1_2[10]).toggleGuildFolderExpand(closure_0);
      },
    }),
    items2,
  );
  obj = {
    id: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    selected: null,
    unread: false,
    circle: false,
    styles: null,
    label: null,
    sharedId: null,
    cutouts: "a",
    overState: "accessible",
    config: true,
    externalChildren: true,
    children: true,
  };
  const obj3 = id(4217);
  obj[0] = "" + id;
  obj[1] = accessibilityActions;
  obj[2] = onAccessibilityAction;
  obj[3] = stateFromStores;
  obj[6] = guildsBarAnimatedWrapperStyles;
  const intl = id(1233).intl;
  obj[7] = intl.string(id(1233).t["scsU+l"]);
  obj[8] = sharedValue;
  obj[11] = memo1;
  let tmp8Result = null;
  if (expanded) {
    obj = { folderId: null, totalItems: null };
    obj[0] = id;
    obj[1] = childNodes.length;
    tmp8Result = tmp8(tmp(16131).GuildsBarGuildFolderBG, obj);
  }
  obj[12] = tmp8Result;
  obj[13] = jsx(id(9413).HourglassIcon, {});
  return jsx(UnreadIndicatorDefault, {
    id: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
    selected: null,
    unread: false,
    circle: false,
    styles: null,
    label: null,
    sharedId: null,
    cutouts: "a",
    overState: "accessible",
    config: true,
    externalChildren: true,
    children: true,
  });
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default memoResult;
