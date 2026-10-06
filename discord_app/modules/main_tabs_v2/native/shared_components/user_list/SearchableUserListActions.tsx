// === Module 10609: SearchableUserListActions ===

// Module 10609 (SearchableUserListActions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import TableRow2 from "TableRow" /* 6000 */;
import TableRowGroup2 from "TableRowGroup" /* 6081 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, flatten;

let closure_4;
let hasOwnProperty;
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((actions) => {
  let paddingBottom;
  let paddingTop;
  let tmp3;
  const obj = actions(576);
  const cResult = obj.c(8);
  actions = actions.actions;
  const style = actions.style;
  const tmp2 = style(10610)();
  if (cResult[0] !== style) {
    let obj2 = style;
    flatten = flatten.flatten;
    if (style == null) {
      obj2 = {};
    }
    const flattenResult = flatten(obj2);
    cResult[0] = style;
    cResult[1] = flattenResult;
    tmp3 = flattenResult;
  } else {
    tmp3 = cResult[1];
  }
  ({ paddingTop, paddingBottom } = tmp3);
  let num3 = 0;
  if (undefined !== paddingTop) {
    num3 = paddingTop;
  }
  let num4 = 0;
  if (undefined !== paddingBottom) {
    num4 = paddingBottom;
  }
  if (typeof num3 === "number") {
    if (typeof num4 === "number") {
      let num5 = 0;
      if (null != actions) {
        num5 = 0;
        if (actions.length > 0) {
          num5 = actions.length * tmp2 + num3 + num4;
        }
      }
      if (cResult[2] === actions) {
        let tmp7;
        if (cResult[3] === style) {
          tmp7 = cResult[4];
        }
        if (cResult[5] === num5) {
          let tmp8;
          if (cResult[6] === tmp7) {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
        const obj3 = { headerSize: num5, renderHeader: tmp7 };
        cResult[5] = num5;
        cResult[6] = tmp7;
        cResult[7] = obj3;
        tmp8 = obj3;
      }
      let fn;
      if (null != actions) {
        if (actions.length > 0) {
          fn = () => <closure_7 actions={actions} style={style} />;
        }
      }
      cResult[2] = actions;
      cResult[3] = style;
      cResult[4] = fn;
      tmp7 = fn;
    }
  }
  const error = new Error("UserListActions: paddingTop and paddingBottom must be numbers.");
  throw error;
}) : ((actions) => {
  let closure_2;
  actions = actions.actions;
  const style = actions.style;
  const tmp = style(10610)();
  dependencyMap = tmp;
  const items = [actions, tmp, style];
  return react.useMemo(() => {
    let fn;
    let obj = style;
    flatten = hasOwnProperty.flatten;
    if (style == null) {
      obj = {};
    }
    const flattenResult = flatten(obj);
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
        const obj2 = { headerSize: num3, renderHeader: fn };
        fn = undefined;
        if (null != actions) {
          if (actions.length > 0) {
            fn = () => <closure_2_7 actions={actions} style={style} />;
          }
        }
        return obj2;
      }
    }
    const error = new Error("UserListActions: paddingTop and paddingBottom must be numbers.");
    throw error;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let actions;
  let first;
  let style;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  ({ actions, style } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { flex: 1 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== style) {
    const items = [first, style];
    cResult[1] = style;
    cResult[2] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== actions) {
    let mapped;
    if (actions != null) {
      mapped = actions.map((item, index) => {
        let IconComponent;
        let icon;
        let iconVariant;
        let label;
        let onPress;
        let subLabel;
        ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = item);
        const TableRow = TableRow2.TableRow;
        return <TableRow key={index} label={label} subLabel={subLabel} icon={null} onPress={onPress} arrow />;
      });
    }
    cResult[3] = actions;
    cResult[4] = mapped;
    tmp6 = mapped;
  } else {
    tmp6 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    const tmp11 = jsx(TableRowGroup2.TableRowGroup, { hasIcons: true, children: tmp6 });
    cResult[5] = tmp6;
    cResult[6] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[6];
  }
  if (cResult[7] === tmp5) {
    let tmp12;
    if (cResult[8] === tmp9) {
      tmp12 = cResult[9];
    }
    return tmp12;
  }
  const tmp13 = <React3 style={tmp5}>{tmp9}</React3>;
  cResult[7] = tmp5;
  cResult[8] = tmp9;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : ((actions) => {
  actions = actions.actions;
  const items = [{ flex: 1 }, actions.style];
  let mapped;
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  if (actions != null) {
    mapped = actions.map((item, index) => {
      let IconComponent;
      let icon;
      let iconVariant;
      let label;
      let onPress;
      let subLabel;
      ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = item);
      const TableRow = TableRow2.TableRow;
      return <TableRow key={index} label={label} subLabel={subLabel} icon={null} onPress={onPress} arrow />;
    });
  }
  return <React3 style={items}>{null}</React3>;
});
let closure_7 = tmp4;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx");

export const useUserListActionsProps = tmp3;
export const UserFlashListActions = tmp4;