// === Module 16306: GuildsBarPendingGuildFolder ===

// Module 16306 (GuildsBarPendingGuildFolder)
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 9206 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 16287 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16294 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default noop.memo(function GuildsBarPendingGuildFolder(id) {
  id = id.id;
  ({ expanded, childNodes } = id);
  let obj = id(16294);
  importDefault = usePendingFolderGuildIdsDefault();
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  const items = [SelectedGuildStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    if (guildId == null) {
      guildId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    return closure_1.includes(guildId);
  });
  const memo = noop.useMemo(() => {
    let obj = GuildsBarFolderMenuItems;
    const guildFolderMenuItems = obj.getGuildFolderMenuItems(id);
    obj = {
      accessibilityActions: guildFolderMenuItems.map((label) => ({ name: label.label, label: label.label })),
      onAccessibilityAction(arg0) {
        const nativeEvent = arg0;
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
  const memo1 = noop.useMemo(() => ({
    onPress() {
      const result = id(4528).triggerHapticFeedback(id(4528).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = id(4528);
      const result1 = closure_1(5520).toggleGuildFolderExpand(closure_1_0);
    }
  }), items2);
  obj = { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "a", overState: "accessible", config: true, externalChildren: true, children: true };
  const obj3 = id(4296);
  obj.id = "" + id;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  obj.selected = stateFromStores;
  obj.styles = guildsBarAnimatedWrapperStyles;
  const intl = id(1114).intl;
  obj.label = intl.string(id(1114).t["scsU+l"]);
  obj.sharedId = sharedValue;
  obj.config = memo1;
  let tmp8Result = null;
  if (expanded) {
    obj = { folderId: id, totalItems: childNodes.length };
    tmp8Result = jsx(tmp(16293).GuildsBarGuildFolderBG, { folderId: id, totalItems: childNodes.length });
  }
  obj.externalChildren = tmp8Result;
  obj.children = jsx(id(9030).HourglassIcon, {});
  return jsx(GuildsBarAnimatedItemWrapperDefault, { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "a", overState: "accessible", config: true, externalChildren: true, children: true });
});