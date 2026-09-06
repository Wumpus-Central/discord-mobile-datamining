// === Module 16666: FileOrLinkGridPlaceholder ===

// Module 16666 (FileOrLinkGridPlaceholder)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import useFontScale from "useFontScale" /* 4982 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16646 */;
import SearchListCard from "SearchListCard" /* 16667 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let obj = usePlaceholderStyles;
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  const width = imageStyle.width;
  const sum = imageStyle.height + 108 * useFontScale.useFontScale();
  c1 = sum;
  const items = [width, sum];
  const memo = noop.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  obj = { style: null, pointerEvents: "none", children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }) };
  const items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj.style = items1;
  return jsx(ReanimatedRexportDefault.View, { style: null, pointerEvents: "none", children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }) });
};