// discord_app/modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { ReanimatedRexport } from "../../../../../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
const result = require("useFullscreenPlaceholderCount").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/FileOrLinkGridPlaceholder.tsx");

export default function FileOrLinkGridPlaceholderItem(imageStyle) {
  imageStyle = imageStyle.imageStyle;
  let width;
  let importDefault;
  let obj = width(15746);
  const placeholderAnimatedStyle = obj.usePlaceholderAnimatedStyle(true);
  width = imageStyle.width;
  const sum = imageStyle.height + 108 * width(4720).useFontScale();
  importDefault = sum;
  const items = [width, sum];
  const memo = React.useMemo(() => ({ width, height: c1 }), items);
  obj = { style: items1, pointerEvents: "none", children: null };
  items1 = [imageStyle.containerStyle, placeholderAnimatedStyle];
  obj[2] = jsx(width(15767).SearchListCardContainer, { containerStyle: memo });
  return jsx(ReanimatedRexport.View, { style: items1, pointerEvents: "none", children: null });
};