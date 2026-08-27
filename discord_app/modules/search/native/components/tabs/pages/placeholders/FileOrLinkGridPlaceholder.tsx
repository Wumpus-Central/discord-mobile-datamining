// discord_app/modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx
import _modDef4185 from "../../../../../../reanimated/ReanimatedRexport.tsx";
import closure_3 from "../../../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  importDefault = undefined;
  let obj = width(16143);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4887).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: jsx(width(16164).SearchListCardContainer, { containerStyle: memo }) };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  return jsx(_modDef4185.View, { style: items1, pointerEvents: "none", children: jsx(width(16164).SearchListCardContainer, { containerStyle: memo }) });
};