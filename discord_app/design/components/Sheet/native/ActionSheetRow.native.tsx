// === Module 7200: ActionSheetRow ===

// Module 7200 (ActionSheetRow)
import TableRow from "TableRow" /* 5605 */;
import TableRowIcon from "TableRowIcon" /* 5611 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import TableSwitchRow from "TableSwitchRow" /* 7201 */;
import noop from "module_19" /* 19 */;

require = fn;
class ActionSheetRow {
  constructor(arg0) {
    str = global.variant;
    if (str === undefined) {
      str = "default";
    }
    ({ arrow, icon } = global);
    obj = { value: str, children: null };
    merged = Object.assign(global, Object.assign({ label: 0, variant: 0, arrow: 0, icon: 0 }));
    obj = { variant: str, label: global.label, arrow, icon };
    merged1 = Object.assign(merged);
    obj.children = jsx(closure_0(closure_1[3]).TableRow, obj);
    return jsx(closure_5.Provider, obj);
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const hasOwnProperty = noop.createContext("default");
ActionSheetRow.Icon = function ActionSheetRowIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  const context = noop.useContext(closure_5);
  const obj = { source: IconComponent.source, IconComponent, variant: context };
  return jsx(TableRowIcon.TableRowIcon, { source: IconComponent.source, IconComponent, variant: context });
};
ActionSheetRow.Group = function ActionSheetRowGroup(arg0) {
  ({ children, title, hasIcons } = arg0);
  return <View>{jsx(TableRowGroup.TableRowGroup, { hasIcons, title, children })}</View>;
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetRow.native.tsx");

export { ActionSheetRow };
export const ActionSheetSwitchRow = function ActionSheetSwitchRow(arg0) {
  const merged = Object.assign(arg0);
  return jsx(TableSwitchRow.TableSwitchRow, {});
};