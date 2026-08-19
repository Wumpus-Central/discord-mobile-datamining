// === Module 15890: FileOrLinkGridPlaceholderItem ===

// Module 15890 (FileOrLinkGridPlaceholderItem)
import _modDef4115 from "module_4115" /* 4115 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  let obj = width(15870);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4751).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: jsx(width(15891).SearchListCardContainer, { containerStyle: memo }) };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  return jsx(_modDef4115.View, { style: items1, pointerEvents: "none", children: jsx(width(15891).SearchListCardContainer, { containerStyle: memo }) });
};