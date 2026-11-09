// === Module 19093: FileOrLinkGridPlaceholder ===

// Module 19093 (FileOrLinkGridPlaceholder)
import _modDef1652 from "module_1652" /* 1652 */;
import useFontScale from "useFontScale" /* 5766 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 19069 */;
import SearchListCard from "SearchListCard" /* 19094 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
  const width = imageStyle.width;
  const sum = imageStyle.height + 108 * useFontScale.useFontScale();
  c1 = sum;
  items = [width, sum];
  const memo = noop.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  const obj3 = { style: null, pointerEvents: "none", children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }) };
  const items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj3.style = items1;
  return jsx(_modDef1652.View, { style: null, pointerEvents: "none", children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }) });
};