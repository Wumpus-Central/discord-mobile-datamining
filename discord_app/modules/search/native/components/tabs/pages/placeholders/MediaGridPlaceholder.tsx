// discord_app/modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import MessageEmbedTypes from "MessageEmbedTypes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../../../../intl/index.native.tsx";
import { ReanimatedRexport } from "../../../../../../reanimated/ReanimatedRexport.tsx";
import { useFullscreenPlaceholderCount } from "../../../../hooks/usePlaceholderStyles.tsx";
import { GridItemPlaceholder } from "GridItemPlaceholder.tsx";

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_LIST_SECTION_TOP_PADDING;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ MEDIA_NUM_COLUMNS: c5, MEDIA_ITEM_GAP_WIDTH: closure_6, SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING } = MessageEmbedTypes);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: { zIndex: 1, position: "absolute", width: "100%" }, recentsContainer: { position: "relative", paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, row: { flexDirection: "row" }, section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textTransform: "none", paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingBottom: 8 }, sectionItem: null, sectionText: null };
createCacheKey = { borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { opacity: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx");

export default function MediaGridPlaceholderItem(arg0) {
  let containerStyle;
  let size;
  ({ size, containerStyle } = arg0);
  let obj = useFullscreenPlaceholderCount;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = { style: items, pointerEvents: "none", children: null };
  items = [containerStyle, placeholderAnimatedStyle];
  obj[2] = callback(GridItemPlaceholder, { height: size, width: size, style: containerStyle });
  return callback(ReanimatedRexport.View, obj);
};
export const RecentsMediaGridPlaceholder = function RecentsMediaGridPlaceholder(visible) {
  let numRows;
  let require;
  ({ size: require, numRows } = visible);
  let dependencyMap;
  let memo;
  let memo1;
  let tmp = createCacheKey();
  dependencyMap = tmp;
  const items = [numRows];
  memo = memo.useMemo(() => outer1_0(_undefined[9]).range(0, numRows * outer1_5), items);
  const items1 = [memo];
  memo1 = memo.useMemo(() => outer1_0(_undefined[9]).chunk(memo, outer1_5), items1);
  let obj = useFullscreenPlaceholderCount;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(visible.visible);
  obj = { style: items2, pointerEvents: "none", children: null };
  items2 = [, , ];
  ({ container: arr4[0], recentsContainer: arr4[1] } = tmp);
  items2[2] = placeholderAnimatedStyle;
  obj = { style: tmp.section, children: null };
  const obj1 = { style: tmp.sectionItem, children: null };
  const obj2 = { style: tmp.sectionText, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
  const intl = getSystemLocale.intl;
  obj2[5] = intl.string(getSystemLocale.t.LBYpDH);
  obj1[1] = callback(Text.Text, obj2);
  const items3 = [callback(memo1, obj1), ];
  const obj3 = { style: tmp.sectionItem, children: null };
  const obj4 = { variant: "text-sm/semibold", color: "text-brand", style: tmp.sectionText, children: null };
  const intl2 = getSystemLocale.intl;
  obj4[3] = intl2.string(getSystemLocale.t.LFTAUp);
  obj3[1] = callback(Text.Text, obj4);
  items3[1] = callback(memo1, obj3);
  obj[1] = items3;
  const items4 = [
    callback2(memo1, obj),
    memo1.map((arr) => {
      let closure_0 = arg1;
      const children = [
        outer1_7(memo1, {
          style: _undefined.row,
          children: arr.map((arg0, arg1) => {
            let obj = { height: closure_0, width: closure_0, style: null };
            const tmp = numRows(15624);
            obj = { itemIndex: closure_0 * outer2_5 + arg1, numItems: outer1_3.length, numColumns: outer2_5, spacing: outer2_6 };
            obj[2] = outer2_0(11628).getMediaGridItemStyles(obj);
            return outer2_7(tmp, obj, arg1);
          })
        }),

      ];
      let tmp2Result = arg1 < memo1.length - 1;
      if (tmp2Result) {
        tmp2Result = outer1_7(outer1_0(_undefined[13]).MediaVerticalSeparator, {});
      }
      children[1] = tmp2Result;
      return outer1_8(memo.Fragment, { children }, arg1);
    })
  ];
  obj[2] = items4;
  return callback2(numRows(4145).View, obj);
};