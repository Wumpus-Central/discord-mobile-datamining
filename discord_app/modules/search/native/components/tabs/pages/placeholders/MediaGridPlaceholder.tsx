// discord_app/modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx
import ThemesDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../../intl/index.native.tsx";
import _modDef4217 from "../../../../../../reanimated/ReanimatedRexport.tsx";
import Text from "../../../../../../../design/components/Text/native/Text.tsx";
import useFullscreenPlaceholderCount from "../../../../hooks/usePlaceholderStyles.tsx";
import _modDef16232 from "GridItemPlaceholder.tsx";
import closure_3 from "../../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import MessageEmbedTypes from "../../../../../SearchConstants.tsx";
import jsxProd from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({
  MEDIA_NUM_COLUMNS: c5,
  MEDIA_ITEM_GAP_WIDTH: closure_6,
  SEARCH_LIST_SECTION_TOP_PADDING,
  SEARCH_LIST_HORIZONTAL_PADDING,
} = MessageEmbedTypes);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  container: { zIndex: 1, position: "absolute", width: "100%" },
  recentsContainer: { position: "relative", paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING },
  row: { flexDirection: "row" },
  section: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "none",
    paddingTop: SEARCH_LIST_SECTION_TOP_PADDING,
    paddingBottom: 8,
  },
  sectionItem: null,
  sectionText: null,
};
createCacheKey = { borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { opacity: 0 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/MediaGridPlaceholder.tsx",
);

export default function MediaGridPlaceholderItem(arg0) {
  ({ size, containerStyle } = arg0);
  let obj = useFullscreenPlaceholderCount;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  obj = {
    style: items,
    pointerEvents: "none",
    children: callback(_modDef16232, { height: size, width: size, style: containerStyle }),
  };
  items = [containerStyle, placeholderAnimatedStyle];
  return callback(_modDef4217.View, obj);
}
export const RecentsMediaGridPlaceholder = function RecentsMediaGridPlaceholder(visible) {
  ({ size: require, numRows } = visible);
  dependencyMap = undefined;
  let memo;
  let memo1;
  let tmp = callback3();
  dependencyMap = tmp;
  const items = [numRows];
  memo = memo.useMemo(() => closure_1_0(row[9]).range(0, numRows * closure_1_5), items);
  const items1 = [memo];
  memo1 = memo.useMemo(() => closure_1_0(row[9]).chunk(memo, closure_1_5), items1);
  let obj = useFullscreenPlaceholderCount;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(visible.visible);
  obj = { style: items2, pointerEvents: "none", children: null };
  items2 = [, ,];
  ({ container: arr4[0], recentsContainer: arr4[1] } = tmp);
  items2[2] = placeholderAnimatedStyle;
  obj = { style: tmp.section, children: null };
  obj1 = { style: tmp.sectionItem, children: null };
  const obj2 = {
    style: tmp.sectionText,
    maxFontSizeMultiplier: 2,
    accessibilityRole: "header",
    variant: "text-sm/semibold",
    color: "interactive-text-default",
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj2[5] = intl.string(getSystemLocale.t.LBYpDH);
  obj1[1] = callback(Text.Text, obj2);
  const items3 = [callback(memo1, obj1)];
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
      closure_0 = arg1;
      const children = [
        closure_1_7(memo1, {
          style: row.row,
          children: arr.map((arg0, arg1) => {
            let obj = { height: closure_0, width: closure_0, style: null };
            const tmp = numRows(16232);
            obj = {
              itemIndex: closure_0 * closure_2_5 + arg1,
              numItems: closure_1_3.length,
              numColumns: closure_2_5,
              spacing: closure_2_6,
            };
            obj[2] = closure_2_0(11905).getMediaGridItemStyles(obj);
            return closure_2_7(tmp, obj, arg1);
          }),
        }),
      ];
      let tmp2Result = arg1 < memo1.length - 1;
      if (tmp2Result) {
        tmp2Result = closure_1_7(closure_1_0(row[13]).MediaVerticalSeparator, {});
      }
      children[1] = tmp2Result;
      return closure_1_8(memo.Fragment, { children }, arg1);
    }),
  ];
  obj[2] = items4;
  return callback2(numRows(4217).View, obj);
};
