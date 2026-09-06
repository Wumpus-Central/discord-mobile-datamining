// === Module 16647: MediaGridPlaceholder ===

// Module 16647 (MediaGridPlaceholder)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 12338 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16646 */;
import GridItemPlaceholderDefault from "GridItemPlaceholder" /* 16648 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const SearchConstants = fn(7878);
({ MEDIA_NUM_COLUMNS: hasOwnProperty, MEDIA_ITEM_GAP_WIDTH: metroRequire, SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING } = SearchConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: { zIndex: 1, position: "absolute", width: "100%" }, recentsContainer: { position: "relative", paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, row: { flexDirection: "row" }, section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingBottom: 8 }, sectionItem: null, sectionText: null };
createStyles = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.sectionItem = createStyles;
createStyles.sectionText = { opacity: 0 };
let closure_9 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx");

export default function MediaGridPlaceholderItem(arg0) {
  ({ size, containerStyle } = arg0);
  let obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = { style: null, pointerEvents: "none", children: React5(GridItemPlaceholderDefault, { height: size, width: size, style: containerStyle }) };
  const items = [containerStyle, placeholderAnimatedStyle];
  obj.style = items;
  return React5(ReanimatedRexportDefault.View, obj);
};
export const RecentsMediaGridPlaceholder = function RecentsMediaGridPlaceholder(visible) {
  ({ size: require, numRows } = visible);
  let memo;
  let tmp = closure_9();
  dependencyMap = tmp;
  const items = [numRows];
  memo = memo.useMemo(() => _mod12.range(0, numRows * numColumns), items);
  const items1 = [memo];
  const memo1 = memo.useMemo(() => _mod12.chunk(memo, numColumns), items1);
  let obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(visible.visible);
  obj = { style: null, pointerEvents: "none", children: null };
  const items2 = [, , ];
  ({ container: arr4[0], recentsContainer: arr4[1] } = tmp);
  items2[2] = placeholderAnimatedStyle;
  obj.style = items2;
  obj = { style: tmp.section, children: null };
  const obj1 = { style: tmp.sectionItem, children: null };
  const obj2 = { style: tmp.sectionText, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.LBYpDH);
  obj1.children = closure_7(Text_Text.Text, obj2);
  const items3 = [closure_7(memo1, obj1), ];
  const obj3 = { style: tmp.sectionItem, children: null };
  const obj4 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.sectionText, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.LFTAUp);
  obj3.children = closure_7(Text_Text.Text, obj4);
  items3[1] = closure_7(memo1, obj3);
  obj.children = items3;
  const items4 = [
    closure_8(memo1, obj),
    memo1.map((arr, index) => {
      closure_0 = index;
      const children = [
        closure_1_7(memo1, {
          style: row.row,
          children: arr.map((item, index) => {
            const size = { height: width, width, style: null };
            const tmp = GridItemPlaceholderDefault;
            size.style = SearchPlatformUtils.getMediaGridItemStyles({ itemIndex: closure_0 * numColumns + index, numItems: memo.length, numColumns, spacing });
            return React5(tmp, size, index);
          })
        }),

      ];
      let tmp2Result = index < memo1.length - 1;
      if (tmp2Result) {
        tmp2Result = closure_1_7(require("Separators").MediaVerticalSeparator, {});
      }
      children[1] = tmp2Result;
      return closure_1_8(memo.Fragment, { children }, index);
    })
  ];
  obj.children = items4;
  return closure_8(numRows(4296).View, obj);
};