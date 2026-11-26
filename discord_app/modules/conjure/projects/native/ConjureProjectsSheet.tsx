// === Module 14283: ConjureProjectsSheet ===

// Module 14283 (ConjureProjectsSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import _modDef4245 from "module_4245" /* 4245 */;
import BottomSheetModal from "BottomSheetModal" /* 5275 */;
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import TableRowGroup from "TableRowGroup" /* 6140 */;
import TableRow from "TableRow" /* 6144 */;
import Search_SearchBar from "Search/SearchBar" /* 7406 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7507 */;
import ActionSheet from "ActionSheet" /* 7546 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7667 */;
import IconButton from "IconButton" /* 7944 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11487 */;
import _modDef11490 from "module_11490" /* 11490 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 14264 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 14284 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 14287 */;
import ConjureProjectGroupListDefault from "ConjureProjectGroupList" /* 14288 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function confirmPin() {
  confirmConjureYouBarPinDefault(true);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5043);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default function ConjureProjectsSheet() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = closure_7(bottom);
  [tmp5, tmp6] = noop.useState("");
  const tmp7 = useConjureEntryPointPlacementDefault("ConjureProjectsSheet");
  let placement;
  if (tmp7 != null) {
    placement = tmp7.placement;
  }
  useMountEffectDefault(() => {
    ConjureActionCreators.listProjects();
  });
  const obj = { title: null, trailing: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef4245.uk6jhJ);
  let tmp10Result;
  if ("you_screen" === placement) {
    const obj2 = { icon: _modDef11490, variant: "tertiary", size: "sm", accessibilityLabel: null, onPress: null };
    const intl2 = util.intl;
    obj2.accessibilityLabel = intl2.string(_modDef4245.qCBh6V);
    obj2.onPress = confirmPin;
    tmp10Result = hasOwnProperty(IconButton.IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), children: null };
  obj.trailing = tmp10Result;
  const obj4 = { contentContainerStyle: tmp3.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: null };
  const obj5 = { size: "md", onChange: tmp6, placeholder: null, accessibilityLabel: null };
  const intl3 = util.intl;
  obj5.placeholder = intl3.string(_modDef4245["2y8sUh"]);
  const intl4 = util.intl;
  obj5.accessibilityLabel = intl4.string(_modDef4245.u0kEN9);
  items = [hasOwnProperty(Search_SearchBar.SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: null };
  const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
  const intl5 = util.intl;
  obj7.label = intl5.string(_modDef4245.bnVYYC);
  const intl6 = util.intl;
  obj7.subLabel = intl6.string(_modDef4245.gnzLwZ);
  obj7.icon = hasOwnProperty(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" });
  obj7.onPress = function onPress() {
    return openConjureHomeScreenDefault(undefined, { focusComposer: true });
  };
  obj6.children = hasOwnProperty(TableRow.TableRow, obj7);
  items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj6);
  items[2] = hasOwnProperty(ConjureProjectGroupListDefault, { query: tmp5 });
  obj4.children = items;
  obj3.children = timestampProducer(BottomSheetModal.BottomSheetScrollView, obj4);
  return hasOwnProperty(ActionSheet.ActionSheet, obj3);
};