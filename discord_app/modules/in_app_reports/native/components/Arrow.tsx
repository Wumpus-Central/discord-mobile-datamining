// discord_app/modules/in_app_reports/native/components/Arrow.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { tintColor: null };
createCacheKey = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const obj = { source: null, size: null, style: null };
  obj[0] = require("../../../../../_runtime/07841_registerAsset.js");
  obj[1] = require("../../../../design/void/native.tsx") /* Button */.Icon.Sizes.MEDIUM;
  obj[2] = createCacheKey().tintColor;
  return jsx(require("../../../../design/void/native.tsx") /* Button */.Icon, { source: null, size: null, style: null });
};