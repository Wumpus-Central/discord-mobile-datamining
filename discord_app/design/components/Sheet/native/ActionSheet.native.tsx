// discord_app/design/components/Sheet/native/ActionSheet.native.tsx
import ThemesDefault from "Themes" /* 712 */;
import Background from "Background" /* 6950 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let obj = { content: null, body: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { gap: 24 };
let closure_3 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const obj = { ref };
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = callback());
  return jsx(Background.BottomSheet, { ref });
});
const result = require("set").fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = forwardRefResult;