// discord_app/modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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