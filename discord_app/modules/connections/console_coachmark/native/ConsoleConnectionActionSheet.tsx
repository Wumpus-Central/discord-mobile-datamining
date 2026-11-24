// === Module 18939: ConsoleConnectionActionSheet ===

// Module 18939 (ConsoleConnectionActionSheet)
import util from "util" /* 1112 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import TableRowGroup from "TableRowGroup" /* 6014 */;
import TableRow from "TableRow" /* 6018 */;
import PlatformsDefault from "Platforms" /* 6052 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7381 */;
import ActionSheet from "ActionSheet" /* 7420 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 7615 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 7650 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8642 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 14051 */;
import noop from "module_19" /* 19 */;

require = fn;
function connectPlayStation() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  PlayStationLinkModalActionCreatorsDefault.showModal(items, PlatformTypes.PLAYSTATION, { startAtSignIn: true });
}
function connectXbox() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  XboxLinkModalActionCreatorsDefault.showModal(items, { startAtSignIn: true });
}
const PlatformTypes = fn(1071).PlatformTypes;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [fn(18940).CONSOLE_CONNECTION_COACHMARK_ANALYTICS_LOCATION];
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/console_coachmark/native/ConsoleConnectionActionSheet.tsx");

export default function ConsoleConnectionActionSheet() {
  const intl = util.intl;
  const stringResult = intl.string(util.t.ZCib6v);
  const obj = { header: React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), dismissAccessibilityLabel: null, children: null };
  const intl2 = util.intl;
  obj.dismissAccessibilityLabel = "" + intl2.string(util.t.Xvtztt) + ": " + stringResult;
  const obj2 = { hasIcons: true, children: null };
  const obj3 = { label: PlatformsDefault.get(PlatformTypes.PLAYSTATION).name, icon: null, trailing: null, onPress: null };
  obj3.icon = React4(TableRow.TableRow.Icon, { IconComponent: PlaystationNeutralIcon.PlaystationNeutralIcon });
  obj3.trailing = React4(TableRow.TableRow.Arrow, {});
  obj3.onPress = connectPlayStation;
  items = [React4(TableRow.TableRow, obj3), ];
  const obj6 = { label: null, icon: null, trailing: null, onPress: null };
  const obj5 = { IconComponent: PlaystationNeutralIcon.PlaystationNeutralIcon };
  obj6.label = PlatformsDefault.get(PlatformTypes.XBOX).name;
  obj6.icon = React4(TableRow.TableRow.Icon, { IconComponent: XboxNeutralIcon.XboxNeutralIcon });
  obj6.trailing = React4(TableRow.TableRow.Arrow, {});
  obj6.onPress = connectXbox;
  items[1] = React4(TableRow.TableRow, obj6);
  obj2.children = items;
  obj.children = hasOwnProperty(TableRowGroup.TableRowGroup, obj2);
  return React4(ActionSheet.ActionSheet, obj);
};