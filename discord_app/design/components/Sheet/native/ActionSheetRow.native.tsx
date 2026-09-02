// === Module 5999: ActionSheetRowIcon ===

// Module 5999 (ActionSheetRowIcon)
import TableRowInner from "TableRowInner" /* 5607 */;
import TableRowIcon from "TableRowIcon" /* 5613 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6000 */;
import TableSwitchRow from "TableSwitchRow" /* 6001 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
class ActionSheetRow {
  constructor(arg0) {
    str = global.variant;
    if (str === undefined) {
      str = "default";
    }
    ({ arrow, icon } = global);
    obj = { value: str, children: null };
    merged = Object.assign(global, Object.create(null));
    obj = { variant: str, label: global.label, arrow, icon };
    merged1 = Object.assign(merged);
    obj[1] = jsx(require("TableRowInner").TableRow, obj);
    return jsx(closure_5.Provider, obj);
  }
}
let context = importAllResult.createContext("default");
ActionSheetRow.Icon = function ActionSheetRowIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  const context = importAllResult.useContext(closure_5);
  const obj = { source: IconComponent.source, IconComponent, variant: context };
  return jsx(TableRowIcon.TableRowIcon, { source: IconComponent.source, IconComponent, variant: context });
};
ActionSheetRow.Group = function ActionSheetRowGroup(arg0) {
  ({ children, title, hasIcons } = arg0);
  return <View>{jsx(TableRowGroupTitle.TableRowGroup, { hasIcons, title, children })}</View>;
};
const result = require("set").fileFinishedImporting("design/components/Sheet/native/ActionSheetRow.native.tsx");

export { ActionSheetRow };
export const ActionSheetSwitchRow = function ActionSheetSwitchRow(arg0) {
  const merged = Object.assign(arg0);
  return jsx(TableSwitchRow.TableSwitchRow, {});
};