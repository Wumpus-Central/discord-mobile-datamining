// === Module 16840: FileOrLinkGridPlaceholder ===

// Module 16840 (FileOrLinkGridPlaceholder)
import c from "c" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import useFontScale from "useFontScale" /* 5602 */;
import usePlaceholderStyles from "usePlaceholderStyles" /* 16816 */;
import SearchListCard from "SearchListCard" /* 16841 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ imageStyle, containerStyle } = arg0);
  const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
  const width = imageStyle.width;
  const sum = imageStyle.height + 108 * useFontScale.useFontScale();
  if (cResult[0] === sum) {
    if (cResult[1] === width) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === placeholderAnimatedStyle) {
      if (cResult[4] === containerStyle) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp6) {
        const obj4 = { containerStyle: tmp6 };
        const tmp10 = jsx(SearchListCard.SearchListCardContainer, { containerStyle: tmp6 });
        cResult[6] = tmp6;
        cResult[7] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp8) {
          let tmp11 = cResult[10];
        }
        return tmp11;
      }
      const obj5 = { style: tmp7, pointerEvents: "none", children: tmp8 };
      const tmp14 = jsx(ReanimatedRexportDefault.View, { style: tmp7, pointerEvents: "none", children: tmp8 });
      cResult[8] = tmp7;
      cResult[9] = tmp8;
      cResult[10] = tmp14;
      tmp11 = tmp14;
    }
    const items = [containerStyle, placeholderAnimatedStyle];
    cResult[3] = placeholderAnimatedStyle;
    cResult[4] = containerStyle;
    cResult[5] = items;
    tmp7 = items;
  }
  const size = { width, height: sum };
  cResult[0] = sum;
  cResult[1] = width;
  cResult[2] = size;
  tmp6 = size;
}) : ((imageStyle) => {
  imageStyle = imageStyle.imageStyle;
  const placeholderAnimatedStyle = usePlaceholderStyles.usePlaceholderAnimatedStyle(true);
  const width = imageStyle.width;
  const sum = imageStyle.height + 108 * useFontScale.useFontScale();
  c1 = sum;
  const items = [width, sum];
  const memo = noop.useMemo(() => {
    const size = { width, height };
    return size;
  }, items);
  const obj3 = { style: null, pointerEvents: "none", children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }) };
  const items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj3.style = items1;
  return jsx(ReanimatedRexportDefault.View, { style: null, pointerEvents: "none", children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }) });
});