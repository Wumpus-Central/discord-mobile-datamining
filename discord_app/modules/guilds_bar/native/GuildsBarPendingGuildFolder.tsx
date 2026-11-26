// === Module 18096: GuildsBarPendingGuildFolder ===

// Module 18096 (GuildsBarPendingGuildFolder)
import usePendingFolderGuildIdsDefault from "usePendingFolderGuildIds" /* 12370 */;
import GuildsBarFolderMenuItems from "GuildsBarFolderMenuItems" /* 18076 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 18083 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1071).EMPTY_STRING_SNOWFLAKE_ID;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarPendingGuildFolder.tsx");

export default noop.memo(function GuildsBarPendingGuildFolder(id) {
  id = id.id;
  ({ expanded, childNodes } = id);
  let obj = id(18083);
  importDefault = usePendingFolderGuildIdsDefault();
  const guildsBarAnimatedWrapperStyles = id(18083).useGuildsBarAnimatedWrapperStyles({ disableSelectedColor: true, disableBGColor: false });
  items = [SelectedGuildStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    let guildId = SelectedGuildStore.getGuildId();
    if (guildId == null) {
      guildId = EMPTY_STRING_SNOWFLAKE_ID;
    }
    return closure_1.includes(guildId);
  });
  const memo = noop.useMemo(() => {
    const guildFolderMenuItems = GuildsBarFolderMenuItems.getGuildFolderMenuItems(id);
    return {
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
  }, items1);
  ({ accessibilityActions, onAccessibilityAction } = memo);
  const obj2 = id(504);
  const items2 = [id];
  const sharedValue = id(1654).useSharedValue("" + id);
  const memo1 = noop.useMemo(() => ({
    onPress() {
      const result = id(5259).triggerHapticFeedback(id(5259).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj = id(5259);
      const result1 = closure_1(6991).toggleGuildFolderExpand(closure_1_0);
    }
  }), items2);
  const obj4 = { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "HermesInternal", overState: "a", preventClipping: true, config: "/assets/images/platforms", externalChildren: 255, children: 255 };
  const obj3 = id(1654);
  obj4.id = "" + id;
  obj4.accessibilityActions = accessibilityActions;
  obj4.onAccessibilityAction = onAccessibilityAction;
  obj4.selected = stateFromStores;
  obj4.styles = guildsBarAnimatedWrapperStyles;
  const intl = id(1112).intl;
  obj4.label = intl.string(id(1112).t["scsU+l"]);
  obj4.sharedId = sharedValue;
  obj4.config = memo1;
  let tmp8Result = null;
  if (expanded) {
    const obj5 = { folderId: id, totalItems: childNodes.length };
    tmp8Result = jsx(tmp(18082).GuildsBarGuildFolderBG, { folderId: id, totalItems: childNodes.length });
  }
  obj4.externalChildren = tmp8Result;
  obj4.children = jsx(id(14674).HourglassIcon, {});
  return jsx(GuildsBarAnimatedItemWrapperDefault, { id: null, accessibilityActions: null, onAccessibilityAction: null, selected: null, unread: false, circle: false, styles: null, label: null, sharedId: null, cutouts: "HermesInternal", overState: "a", preventClipping: true, config: "/assets/images/platforms", externalChildren: 255, children: 255 });
});