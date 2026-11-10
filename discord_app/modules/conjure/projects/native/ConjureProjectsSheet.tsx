// === Module 13238: ConjureProjectsSheet ===

// Module 13238 (ConjureProjectsSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef4028 from "module_4028" /* 4028 */;
import BottomSheetModal from "BottomSheetModal" /* 5394 */;
import useMountEffectDefault from "useMountEffect" /* 5723 */;
import TableRow from "TableRow" /* 7041 */;
import TableRowGroup from "TableRowGroup" /* 7129 */;
import Search_SearchBar from "Search/SearchBar" /* 7285 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7385 */;
import ActionSheet from "ActionSheet" /* 7429 */;
import IconButton from "IconButton" /* 8102 */;
import useConjureEntryPointPlacementDefault from "useConjureEntryPointPlacement" /* 9771 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11005 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 11113 */;
import _modDef11119 from "module_11119" /* 11119 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 12294 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 13239 */;
import ConjureProjectGroupListDefault from "ConjureProjectGroupList" /* 13242 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function confirmPin() {
  confirmConjureYouBarPinDefault(true);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5142);
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
  obj.title = intl.string(_modDef4028.uk6jhJ);
  let tmp10Result;
  if ("you_screen" === placement) {
    const obj2 = { icon: _modDef11119, variant: "tertiary", size: "sm", accessibilityLabel: null, onPress: null };
    const intl2 = util.intl;
    obj2.accessibilityLabel = intl2.string(_modDef4028.qCBh6V);
    obj2.onPress = confirmPin;
    tmp10Result = hasOwnProperty(IconButton.IconButton, obj2);
  }
  const obj3 = { scrollable: true, startExpanded: true, header: hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), children: null };
  obj.trailing = tmp10Result;
  const obj4 = { contentContainerStyle: tmp3.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: null };
  const obj5 = { size: "md", onChange: tmp6, placeholder: null, accessibilityLabel: null };
  const intl3 = util.intl;
  obj5.placeholder = intl3.string(_modDef4028["2y8sUh"]);
  const intl4 = util.intl;
  obj5.accessibilityLabel = intl4.string(_modDef4028.u0kEN9);
  items = [hasOwnProperty(Search_SearchBar.SearchBar, obj5), , ];
  const obj6 = { hasIcons: true, children: null };
  const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
  const intl5 = util.intl;
  obj7.label = intl5.string(_modDef4028.bnVYYC);
  const intl6 = util.intl;
  obj7.subLabel = intl6.string(_modDef4028.gnzLwZ);
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