// === Module 16482: FileOrLinkGridPlaceholderItem ===

// Module 16482 (FileOrLinkGridPlaceholderItem)
import _modDef4217 from "module_4217" /* 4217 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  importDefault = undefined;
  let obj = width(16462);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4935).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: jsx(width(16483).SearchListCardContainer, { containerStyle: memo }) };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  return jsx(_modDef4217.View, { style: items1, pointerEvents: "none", children: jsx(width(16483).SearchListCardContainer, { containerStyle: memo }) });
};