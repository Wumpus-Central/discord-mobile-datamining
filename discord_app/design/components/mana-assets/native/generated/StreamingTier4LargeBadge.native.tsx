// discord_app/design/components/mana-assets/native/generated/StreamingTier4LargeBadge.native.tsx
import set from "../../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import preloadDefault from "../../../../../components_native/common/FastImage.tsx";
import vanityUrlDefault from "../../../../../../discord_assets/assets/mana/asset-library/generated/StreamingTier4LargeBadge-2x.png.js";

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting(
  "design/components/mana-assets/native/generated/StreamingTier4LargeBadge.native.tsx",
);

export const StreamingTier4LargeBadge = function StreamingTier4LargeBadge(width) {
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 100;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = {
    fadeDuration: 0,
    source: null,
    style: null,
    accessible: null,
    accessibilityLabel: null,
    resizeMode: null,
  };
  obj = { uri: vanityUrlDefault };
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { width: num * num3, height: num2 * num3 });
};
