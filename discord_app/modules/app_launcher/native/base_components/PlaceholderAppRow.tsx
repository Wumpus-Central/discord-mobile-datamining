// === Module 11267: PlaceholderAppRow ===

// Module 11267 (PlaceholderAppRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import usePlaceholderWidth from "usePlaceholderWidth" /* 11227 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/base_components/PlaceholderAppRow.tsx");

export default function PlaceholderAppRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback();
  let obj = usePlaceholderWidth;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  obj1 = usePlaceholderWidth;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = { style: tmp.loadingAppIcon };
  obj1 = { style: null };
  const items = [tmp.loadingTextPlaceholder, { width: "" + placeholderWidth + "%" }];
  obj1[0] = items;
  obj[1] = <View style={null} />;
  const obj3 = { style: null };
  const items1 = [tmp.loadingTextPlaceholderSmall, ];
  const obj2 = { width: "" + placeholderWidth + "%" };
  items1[1] = { width: "" + placeholderWidth1 + "%" };
  obj3[0] = items1;
  obj[2] = <View style={null} />;
  obj[4] = flag;
  obj[5] = flag2;
  obj[6] = function onPress() {

  };
  return jsx(TableRowInner.TableRow, { style: tmp.loadingAppIcon });
};