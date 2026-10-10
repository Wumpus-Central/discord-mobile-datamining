// === Module 6894: ActionSheetRow ===

// Module 6894 (ActionSheetRow)
import c from "c" /* 576 */;
import TableRow from "TableRow" /* 6179 */;
import TableRowIcon from "TableRowIcon" /* 6187 */;
import TableRowGroup from "TableRowGroup" /* 6264 */;
import TableSwitchRow from "TableSwitchRow" /* 6895 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["label", "variant", "arrow", "icon"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const redux = noop.createContext("default");
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetRow(arg0) {
  const cResult = c.c(15);
  if (cResult[0] !== arg0) {
    ({ label, variant, arrow, icon } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = arrow;
    cResult[2] = icon;
    cResult[3] = label;
    cResult[4] = tmp11;
    cResult[5] = variant;
    let tmp8 = variant;
    let tmp7 = tmp11;
    let tmp6 = label;
    let tmp5 = icon;
    let tmp4 = arrow;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  let str = "default";
  if (undefined !== tmp8) {
    str = tmp8;
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp5) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp7) {
          if (cResult[10] === str) {
            let tmp12 = cResult[11];
          }
          if (cResult[12] === tmp12) {
            if (cResult[13] === str) {
              let tmp15 = cResult[14];
            }
            return tmp15;
          }
          const obj2 = { value: str, children: tmp12 };
          const tmp18 = <redux.Provider value={str}>{tmp12}</redux.Provider>;
          cResult[12] = tmp12;
          cResult[13] = str;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
      }
    }
  }
  const merged = Object.assign(tmp7);
  const tmp14 = jsx(TableRow.TableRow, { variant: str, label: tmp6, arrow: tmp4, icon: tmp5 });
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = tmp6;
  cResult[9] = tmp7;
  cResult[10] = str;
  cResult[11] = tmp14;
  tmp12 = tmp14;
  const obj3 = { variant: str, label: tmp6, arrow: tmp4, icon: tmp5 };
}) : (function ActionSheetRow(label) {
  let str = label.variant;
  if (str === undefined) {
    str = "default";
  }
  ({ arrow, icon } = label);
  const obj = { value: str, children: null };
  const merged = Object.assign(label, Object.assign({ label: 0, variant: 0, arrow: 0, icon: 0 }));
  const merged1 = Object.assign(merged);
  obj.children = jsx(TableRow.TableRow, { variant: str, label: label.label, arrow, icon });
  return <redux.Provider value={str}>{null}</redux.Provider>;
});
ReactCompilerGating = fn(558);
tmp2.Icon = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetRowIcon(arg0) {
  const cResult = c.c(4);
  ({ source, IconComponent } = arg0);
  const context = noop.useContext(closure_7);
  if (cResult[0] === source) {
    if (cResult[1] === IconComponent) {
      if (cResult[2] === context) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const tmp6 = jsx(TableRowIcon.TableRowIcon, { source, IconComponent, variant: context });
  cResult[0] = source;
  cResult[1] = IconComponent;
  cResult[2] = context;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : (function ActionSheetRowIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  const context = noop.useContext(closure_7);
  const obj = { source: IconComponent.source, IconComponent, variant: context };
  return jsx(TableRowIcon.TableRowIcon, { source: IconComponent.source, IconComponent, variant: context });
});
ReactCompilerGating = fn(558);
tmp2.Group = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetRowGroup(arg0) {
  const cResult = c.c(4);
  ({ children, title, hasIcons } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === hasIcons) {
      if (cResult[2] === title) {
        let tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const tmp5 = <View>{jsx(TableRowGroup.TableRowGroup, { hasIcons, title, children })}</View>;
  cResult[0] = children;
  cResult[1] = hasIcons;
  cResult[2] = title;
  cResult[3] = tmp5;
  tmp4 = tmp5;
  const obj2 = { children: jsx(TableRowGroup.TableRowGroup, { hasIcons, title, children }) };
}) : (function ActionSheetRowGroup(arg0) {
  ({ children, title, hasIcons } = arg0);
  return <View>{jsx(TableRowGroup.TableRowGroup, { hasIcons, title, children })}</View>;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetRow.native.tsx");

export const ActionSheetRow = tmp2;
export const ActionSheetSwitchRow = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetSwitchRow(arg0) {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp9 = jsx(TableSwitchRow.TableSwitchRow, {});
    cResult[0] = arg0;
    cResult[1] = tmp9;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function ActionSheetSwitchRow(arg0) {
  const merged = Object.assign(arg0);
  return jsx(TableSwitchRow.TableSwitchRow, {});
});