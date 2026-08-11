// discord_app/modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c4;
let c5;
const require = arg1;
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
        let IconComponent;
        let icon;
        let iconVariant;
        let label;
        let onPress;
        let subLabel;
        ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = arg0);
        const obj = { label, subLabel, icon: null, onPress: null, arrow: true };
        obj[2] = callback2(callback(5374).TableRow.Icon, { source: icon, IconComponent, variant: iconVariant });
        obj[3] = onPress;
        return callback2(callback(5374).TableRow, obj, arg1);
      });
    }
    obj[1] = tmp(require("TableRowGroupTitle").TableRowGroup, { hasIcons: true, children: mapped });
    return tmp(tmp2, obj);
  }
}
({ View: c4, StyleSheet: c5 } = get_ActivityIndicator);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx");

export const useUserListActionsProps = function useUserListActionsProps(actions) {
  actions = actions.actions;
  const style = actions.style;
  let dependencyMap;
  const tmp = style(9630)();
  dependencyMap = tmp;
  const items = [actions, tmp, style];
  return React.useMemo(() => {
    let obj = style;
    if (style == null) {
      obj = {};
    }
    const flattenResult = outer1_5.flatten(obj);
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
            num3 = arr.length * c2 + num + num2;
          }
        }
        obj = { headerSize: null, renderHeader: null };
        obj[0] = num3;
        let fn;
        if (null != actions) {
          if (arr.length > 0) {
            fn = () => outer1_6(outer1_7, { actions: closure_0, style: closure_1 });
          }
        }
        obj[1] = fn;
        return obj;
      }
    }
    const error = new Error("UserListActions: paddingTop and paddingBottom must be numbers.");
    throw error;
  }, items);
};
export { UserFlashListActions };