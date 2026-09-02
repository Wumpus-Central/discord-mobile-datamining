// === Module 15675: CollectiblesShopViewAllCategoryItemsHeader ===

// Module 15675 (CollectiblesShopViewAllCategoryItemsHeader)
import noopAll from "noop" /* 19 */;
import registerAssetDefault from "registerAsset" /* 7621 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  let _require;
  ({ logoUrl, buttonColor, categoryName } = arg0);
  let obj = _require(1498);
  _require = obj.useStackNavigation();
  const tmp = callback3();
  obj1 = _require(13233);
  obj = { style: null, children: null };
  obj = {};
  const youBarSettingsCustomHeaderPaddingTop = obj1.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  obj.paddingTop = youBarSettingsCustomHeaderPaddingTop;
  obj[0] = obj;
  obj1 = { style: tmp.backButton, children: null };
  const obj2 = { source: registerAssetDefault, color: buttonColor, accessibilityLabel: null, onPress: null };
  const intl = _require(1233).intl;
  obj2[2] = intl.string(_require(1233).t["13/7kX"]);
  obj2[3] = function onPress() {
    navigation.goBack();
  };
  obj1[1] = callback(_require(7617).HeaderIconButton, obj2);
  const items = [callback(closure_4, obj1), , ];
  const obj3 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl }, accessibilityLabel: null, accessibilityRole: "header" };
  const intl2 = _require(1233).intl;
  obj3[3] = intl2.formatToPlainString(_require(1233).t.FNtLb3, { category: categoryName });
  items[1] = callback(closure_3, obj3);
  items[2] = callback(closure_4, { style: tmp.dummyRightButton });
  obj[1] = items;
  return callback2(closure_4, obj);
};