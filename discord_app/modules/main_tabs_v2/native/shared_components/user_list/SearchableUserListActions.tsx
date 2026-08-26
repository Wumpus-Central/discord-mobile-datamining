// === Module 9841: UserFlashListActions ===

// Module 9841 (UserFlashListActions)
import TableRowGroupTitle from "TableRowGroupTitle" /* 5939 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
class UserFlashListActions {
  constructor(arg0) {
    actions = global.actions;
    tmp = jsx;
    obj = { style: items, children: null };
    items = [, ];
    items[0] = { flex: 1 };
    items[1] = global.style;
    tmp2 = View;
    mapped = undefined;
    if (actions != null) {
      mapped = actions.map((arg0, arg1) => {
        ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = arg0);
        return callback2(callback(5546).TableRow, { label, subLabel, icon: callback2(callback(5546).TableRow.Icon, { source: icon, IconComponent, variant: iconVariant }), onPress, arrow: true }, arg1);
      });
    }
    obj[1] = tmp(require("TableRowGroupTitle").TableRowGroup, { hasIcons: true, children: mapped });
    return tmp(tmp2, obj);
  }
}
({ View: c4, StyleSheet: c5 } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx");

export const useUserListActionsProps = function useUserListActionsProps(actions) {
  actions = actions.actions;
  const style = actions.style;
  dependencyMap = undefined;
  const tmp = style(9842)();
  dependencyMap = tmp;
  const items = [actions, tmp, style];
  return React.useMemo(() => {
    let obj = style;
    if (style == null) {
      obj = {};
    }
    const flattenResult = closure_1_5.flatten(obj);
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
          if (arr.length > 0) {
            num3 = arr.length * closure_2 + num + num2;
          }
        }
        obj = { headerSize: null, renderHeader: null };
        obj[0] = num3;
        let fn;
        if (null != actions) {
          if (arr.length > 0) {
            fn = () => closure_1_6(closure_1_7, { actions: closure_0, style: closure_1 });
          }
        }
        obj[1] = fn;
        return obj;
      }
    }
    error = new Error("UserListActions: paddingTop and paddingBottom must be numbers.");
    throw error;
  }, items);
};
export { UserFlashListActions };