// discord_app/modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx
import ReanimatedRexportDefault from "../../../../../../reanimated/ReanimatedRexport.tsx";
import useFontScale from "../../../../../../screen/native/useFontScale.tsx";
import usePlaceholderStyles from "../../../../hooks/usePlaceholderStyles.tsx";
import SearchListCard from "../../../list/SearchListCard.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx",
);

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
  obj = {
    style: null,
    pointerEvents: "none",
    children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }),
  };
  const items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj.style = items1;
  return jsx(ReanimatedRexportDefault.View, {
    style: null,
    pointerEvents: "none",
    children: jsx(SearchListCard.SearchListCardContainer, { containerStyle: memo }),
  });
}
