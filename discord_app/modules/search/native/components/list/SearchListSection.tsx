// === Module 19319: SearchListSection ===

// Module 19319 (SearchListSection)
import Text_Text from "Text/Text" /* 5866 */;
import Pressables from "Pressables" /* 7364 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7897 */;
import ChevronSmallDownIcon2 from "ChevronSmallDownIcon" /* 10491 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5243);
let closure_5 = createStyles.createStyles({ section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: fn(8999).SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } });
let obj = { section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: fn(8999).SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default noop.memo(function SearchListSection(trailing) {
  ({ title, collapsed, onToggle } = trailing);
  const tmp = closure_5();
  const tmp5 = React3(Text_Text.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "body-sm/semibold", color: "interactive-text-default", children: title });
  if (null == onToggle) {
    const obj2 = { style: tmp.section, children: null };
    items = [tmp5, trailing.trailing];
    obj2.children = items;
    return React4(View, obj2);
  } else {
    if (true === collapsed) {
      let ChevronSmallDownIcon = ChevronSmallRightIcon.ChevronSmallRightIcon;
    } else {
      ChevronSmallDownIcon = ChevronSmallDownIcon2.ChevronSmallDownIcon;
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: title, accessibilityState: null, activeOpacity: 0.4, onPress: null, style: null, children: null };
    const obj3 = { expanded: true !== collapsed };
    obj.accessibilityState = obj3;
    obj.onPress = onToggle;
    obj.style = tmp.section;
    const items1 = [tmp5, React3(ChevronSmallDownIcon, { size: "sm" })];
    obj.children = items1;
    return React4(Pressables.PressableOpacity, obj);
  }
});