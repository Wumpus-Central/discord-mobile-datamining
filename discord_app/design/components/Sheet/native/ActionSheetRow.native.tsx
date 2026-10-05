// === Module 6697: ActionSheetRow ===

// Module 6697 (ActionSheetRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import TableRow2 from "TableRow" /* 5993 */;
import TableRowIcon2 from "TableRowIcon" /* 5999 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6698 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["label", "variant", "arrow", "icon"];
const View = react_native.View;
const jsx = Fragment.jsx;
const redux = react.createContext("default");
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arrow;
  let icon;
  let label;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let variant;
  const obj = react2;
  const cResult = obj.c(15);
  if (cResult[0] !== arg0) {
    ({ label, variant, arrow, icon } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = arrow;
    cResult[2] = icon;
    cResult[3] = label;
    cResult[4] = tmp11;
    cResult[5] = variant;
    tmp8 = variant;
    tmp7 = tmp11;
    tmp6 = label;
    tmp5 = icon;
    tmp4 = arrow;
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
          let tmp12;
          if (cResult[10] === str) {
            tmp12 = cResult[11];
          }
          if (cResult[12] === tmp12) {
            let tmp15;
            if (cResult[13] === str) {
              tmp15 = cResult[14];
            }
            return tmp15;
          }
          const tmp18 = <redux.Provider value={str}>{tmp12}</redux.Provider>;
          cResult[12] = tmp12;
          cResult[13] = str;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
      }
    }
  }
  const TableRow = TableRow2.TableRow;
  const merged = Object.assign(tmp7);
  const tmp14 = <TableRow variant={str} label={tmp6} arrow={tmp4} icon={tmp5} />;
  cResult[6] = tmp4;
  cResult[7] = tmp5;
  cResult[8] = tmp6;
  cResult[9] = tmp7;
  cResult[10] = str;
  cResult[11] = tmp14;
  tmp12 = tmp14;
}) : ((variant) => {
  let arrow;
  let icon;
  let str = variant.variant;
  const label = variant.label;
  if (str === undefined) {
    str = "default";
  }
  ({ arrow, icon } = variant);
  const merged = Object.assign(variant, Object.assign({ label: 0, variant: 0, arrow: 0, icon: 0 }));
  const Provider = redux.Provider;
  const TableRow = TableRow2.TableRow;
  const merged1 = Object.assign(merged);
  return <Provider value={str}>{null}</Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
tmp2.Icon = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let IconComponent;
  let source;
  const obj = react2;
  const cResult = obj.c(4);
  ({ source, IconComponent } = arg0);
  const context = react.useContext(redux);
  if (cResult[0] === source) {
    if (cResult[1] === IconComponent) {
      let tmp5;
      if (cResult[2] === context) {
        tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const tmp6 = jsx(TableRowIcon2.TableRowIcon, { source, IconComponent, variant: context });
  cResult[0] = source;
  cResult[1] = IconComponent;
  cResult[2] = context;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((IconComponent) => {
  IconComponent = IconComponent.IconComponent;
  const source = IconComponent.source;
  const context = react.useContext(redux);
  const TableRowIcon = TableRowIcon2.TableRowIcon;
  return <TableRowIcon source={source} IconComponent={IconComponent} variant={context} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
tmp2.Group = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let hasIcons;
  let title;
  const obj = react2;
  const cResult = obj.c(4);
  ({ children, title, hasIcons } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === hasIcons) {
      let tmp4;
      if (cResult[2] === title) {
        tmp4 = cResult[3];
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
}) : ((arg0) => {
  let children;
  let hasIcons;
  let title;
  ({ children, title, hasIcons } = arg0);
  return <View>{jsx(TableRowGroup.TableRowGroup, { hasIcons, title, children })}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    const merged = Object.assign(arg0);
    const tmp9 = <TableSwitchRow />;
    cResult[0] = arg0;
    cResult[1] = tmp9;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  const merged = Object.assign(arg0);
  return <TableSwitchRow />;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetRow.native.tsx");

export const ActionSheetRow = tmp2;
export const ActionSheetSwitchRow = tmp3;