// === Module 16855: SearchListSection ===

// Module 16855 (SearchListSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
const SEARCH_LIST_SECTION_TOP_PADDING = SearchConstants.SEARCH_LIST_SECTION_TOP_PADDING;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: 16, paddingBottom: 8 } };
let closure_5 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let title;
  let tmp5;
  let trailing;
  const obj = react2;
  const cResult = obj.c(6);
  ({ title, trailing } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== title) {
    const obj2 = { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title };
    const tmp7 = _false(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.section) {
    if (cResult[3] === tmp5) {
      let tmp8;
      if (cResult[4] === trailing) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj3 = { style: tmp4.section, children: items };
  items = [tmp5, trailing];
  const tmp9 = React3(View, obj3);
  cResult[2] = tmp4.section;
  cResult[3] = tmp5;
  cResult[4] = trailing;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let items;
  let title;
  let trailing;
  ({ title, trailing } = arg0);
  const obj = { style: closure_5().section, children: items };
  items = [_false(Text_Text.Text, { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: title }), trailing];
  return React3(View, obj);
}));
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default memoResult;