// discord_app/modules/connections/console_coachmark/native/ConsoleConnectionActionSheet.tsx
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import PlatformsDefault from "../../../../lib/Platforms.tsx";
import XboxLinkModalActionCreatorsDefault from "../../../user_settings/connections/native/two_way_link/xbox/XboxLinkModalActionCreators.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import PlayStationLinkModalActionCreatorsDefault from "../../../user_settings/connections/native/two_way_link/playstation/PlayStationLinkModalActionCreators.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import XboxNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/XboxNeutralIcon.tsx";
import PlaystationNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/PlaystationNeutralIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function connectPlayStation() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  PlayStationLinkModalActionCreatorsDefault.showModal(items, PlatformTypes.PLAYSTATION, { startAtSignIn: true });
}
function connectXbox() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  XboxLinkModalActionCreatorsDefault.showModal(items, { startAtSignIn: true });
}
const PlatformTypes = fn(1072).PlatformTypes;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [fn(19443).CONSOLE_CONNECTION_COACHMARK_ANALYTICS_LOCATION];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/connections/console_coachmark/native/ConsoleConnectionActionSheet.tsx",
);

export default function ConsoleConnectionActionSheet() {
  const intl = util.intl;
  const stringResult = intl.string(util.t.ZCib6v);
  const obj = {
    header: React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }),
    dismissAccessibilityLabel: null,
    children: null,
  };
  const intl2 = util.intl;
  obj.dismissAccessibilityLabel = "" + intl2.string(util.t.Xvtztt) + ": " + stringResult;
  const obj2 = { hasIcons: true, children: null };
  const obj3 = {
    label: PlatformsDefault.get(PlatformTypes.PLAYSTATION).name,
    icon: null,
    trailing: null,
    onPress: null,
  };
  obj3.icon = React4(TableRow.TableRow.Icon, { IconComponent: PlaystationNeutralIcon.PlaystationNeutralIcon });
  obj3.trailing = React4(TableRow.TableRow.Arrow, {});
  obj3.onPress = connectPlayStation;
  items = [React4(TableRow.TableRow, obj3)];
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
}
