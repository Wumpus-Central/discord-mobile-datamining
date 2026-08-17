// discord_app/modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx
import ThemesDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../../../_runtime/00019_noop.js";

let obj = { imageContainer: null };
obj = { flex: 1, borderRadius: ThemesDefault.radii.xs, overflow: "hidden", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[0] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ width, height, style } = arg0);
  const obj = { style: null };
  const items = [{ width, height }, callback().imageContainer, style];
  obj[0] = items;
  return <View style={null} />;
});
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/GridItemPlaceholder.tsx");

export default memoResult;