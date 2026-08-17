// discord_app/modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
createCacheKey = { container: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_32 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx");

export default function RemediationsElement(children) {
  let obj = { style: callback().container, children: null };
  obj = { title: null, hasIcons: true, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["k+QA9N"]);
  obj[2] = children.children;
  obj[1] = jsx(TableRowGroupTitle.TableRowGroup, { title: null, hasIcons: true, children: null });
  return <View title={null} hasIcons>{null}</View>;
};