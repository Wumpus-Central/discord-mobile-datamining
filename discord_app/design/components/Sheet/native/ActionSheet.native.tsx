// discord_app/design/components/Sheet/native/ActionSheet.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Background from "BottomSheet.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = fn;
let obj = { paddingHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { gap: 24 };
let closure_3 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const obj = { ref };
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = callback());
  return jsx(Background.BottomSheet, { ref });
});
const result = require("obj132").fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = forwardRefResult;