// discord_app/design/components/Sheet/native/ActionSheetRow.native.tsx
import TableRowInner from "../../TableRow/native/TableRow.native.tsx";
import TableRowIcon from "../../TableRow/native/TableRowIcon.native.tsx";
import TableRowGroupTitle from "../../TableRow/native/TableRowGroup.native.tsx";
import TableSwitchRow from "../../TableRow/native/TableSwitchRow.native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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