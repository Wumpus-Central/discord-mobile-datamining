// discord_app/modules/app_launcher/native/base_components/PlaceholderAppRow.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { loadingAppIcon: null, loadingTextPlaceholder: null, loadingTextPlaceholderSmall: null };
createCacheKey = { width: 32, height: 32, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start" };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start" };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("Themes").radii.lg, alignSelf: "flex-start" };
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/base_components/PlaceholderAppRow.tsx");

export default function PlaceholderAppRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = createCacheKey();
  let obj = require("../hooks/usePlaceholderSize.tsx") /* usePlaceholderWidth */;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = require("../hooks/usePlaceholderSize.tsx") /* usePlaceholderWidth */;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = { icon: null, label: null, subLabel: null, subLabelLineClamp: 1, start: null, end: null, onPress: null };
  obj = { style: tmp.loadingAppIcon };
  obj[0] = <View style={tmp.loadingAppIcon} />;
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
  return jsx(require("../../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow, { style: tmp.loadingAppIcon });
};