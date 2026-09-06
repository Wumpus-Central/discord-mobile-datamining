// discord_app/modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
class UserFlashListActions {
  constructor(arg0) {
    actions = global.actions;
    tmp = jsx;
    obj = { style: null, children: null };
    items = [,];
    items[0] = { flex: 1 };
    items[1] = global.style;
    obj.style = items;
    tmp2 = View;
    mapped = undefined;
    if (actions != null) {
      mapped = actions.map((item, index) => {
        ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = item);
        return jsx(
          TableRow.TableRow,
          {
            label,
            subLabel,
            icon: jsx(TableRow.TableRow.Icon, { source: icon, IconComponent, variant: iconVariant }),
            onPress,
            arrow: true,
          },
          index,
        );
      });
    }
    obj.children = tmp(closure_0(closure_2[4]).TableRowGroup, { hasIcons: true, children: mapped });
    return tmp(tmp2, obj);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx",
);

export const useUserListActionsProps = function useUserListActionsProps(actions) {
  actions = actions.actions;
  const style = actions.style;
  const tmp = style(10865)();
  dependencyMap = tmp;
  const items = [actions, tmp, style];
  return noop.useMemo(() => {
    let obj = style;
    if (style == null) {
      obj = {};
    }
    const flattenResult = hasOwnProperty.flatten(obj);
    const paddingTop = flattenResult.paddingTop;
    let num = 0;
    if (undefined !== paddingTop) {
      num = paddingTop;
    }
    const paddingBottom = flattenResult.paddingBottom;
    let num2 = 0;
    if (undefined !== paddingBottom) {
      num2 = paddingBottom;
    }
    if (typeof num === "number") {
      if (typeof num2 === "number") {
        let num3 = 0;
        if (null != actions) {
          num3 = 0;
          if (actions.length > 0) {
            num3 = actions.length * closure_2 + num + num2;
          }
        }
        obj = { headerSize: num3, renderHeader: null };
        let fn;
        if (null != actions) {
          if (actions.length > 0) {
            fn = () => <UserFlashListActions actions={actions} style={style} />;
          }
        }
        obj.renderHeader = fn;
        return obj;
      }
    }
    const error = new Error("UserListActions: paddingTop and paddingBottom must be numbers.");
    throw error;
  }, items);
};
export { UserFlashListActions };
