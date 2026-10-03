// === Module 10596: SearchableUserListActions ===

// Module 10596 (SearchableUserListActions)
import c from "c" /* 576 */;
import TableRow from "TableRow" /* 5993 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ actions, style } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { flex: 1 };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== style) {
    const items = [first, style];
    cResult[1] = style;
    cResult[2] = items;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== actions) {
    let mapped;
    if (actions != null) {
      mapped = actions.map((item, index) => {
        ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = item);
        return jsx(TableRow.TableRow, { label, subLabel, icon: jsx(TableRow.TableRow.Icon, { source: icon, IconComponent, variant: iconVariant }), onPress, arrow: true }, index);
      });
    }
    cResult[3] = actions;
    cResult[4] = mapped;
    let tmp6 = mapped;
  } else {
    tmp6 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    const obj3 = { hasIcons: true, children: tmp6 };
    const tmp11 = jsx(TableRowGroup.TableRowGroup, { hasIcons: true, children: tmp6 });
    cResult[5] = tmp6;
    cResult[6] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[6];
  }
  if (cResult[7] === tmp5) {
    if (cResult[8] === tmp9) {
      let tmp12 = cResult[9];
    }
    return tmp12;
  }
  const tmp13 = <React4 style={tmp5}>{tmp9}</React4>;
  cResult[7] = tmp5;
  cResult[8] = tmp9;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : ((actions) => {
  actions = actions.actions;
  const obj = { style: null, children: null };
  const items = [{ flex: 1 }, actions.style];
  obj.style = items;
  let mapped;
  if (actions != null) {
    mapped = actions.map((item, index) => {
      ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = item);
      return jsx(TableRow.TableRow, { label, subLabel, icon: jsx(TableRow.TableRow.Icon, { source: icon, IconComponent, variant: iconVariant }), onPress, arrow: true }, index);
    });
  }
  obj.children = jsx(TableRowGroup.TableRowGroup, { hasIcons: true, children: mapped });
  return <React4 style={null}>{null}</React4>;
});
let closure_7 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx");

export const useUserListActionsProps = ReactCompilerGating.isReactCompilerEnabled() ? ((actions) => {
  const cResult = actions(576).c(8);
  actions = actions.actions;
  const style = actions.style;
  const obj = actions(576);
  if (cResult[0] !== style) {
    let obj2 = style;
    if (style == null) {
      obj2 = {};
    }
    const flattenResult = closure_5.flatten(obj2);
    cResult[0] = style;
    cResult[1] = flattenResult;
    let tmp3 = flattenResult;
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
        if (cResult[3] === style) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] === num5) {
          if (cResult[6] === tmp7) {
            let tmp8 = cResult[7];
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
  actions = actions.actions;
  const style = actions.style;
  const tmp = style(10597)();
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
        const obj2 = { headerSize: num3, renderHeader: null };
        let fn;
        if (null != actions) {
          if (actions.length > 0) {
            fn = () => <closure_2_7 actions={actions} style={style} />;
          }
        }
        obj2.renderHeader = fn;
        return obj2;
      }
    }
    const error = new Error("UserListActions: paddingTop and paddingBottom must be numbers.");
    throw error;
  }, items);
});
export const UserFlashListActions = tmp4;