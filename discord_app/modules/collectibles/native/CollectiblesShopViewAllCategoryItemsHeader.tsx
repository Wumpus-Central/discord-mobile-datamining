// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  let buttonColor;
  let categoryName;
  let logoUrl;
  let _require;
  ({ logoUrl, buttonColor, categoryName } = arg0);
  let obj = _require("../../../design/components/Navigator/native/useNavigation.native.tsx");
  _require = obj.useStackNavigation();
  const tmp = callback3();
  let obj1 = _require("../../main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx");
  obj = { style: null, children: null };
  obj = {};
  const youBarSettingsCustomHeaderPaddingTop = obj1.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  obj.paddingTop = youBarSettingsCustomHeaderPaddingTop;
  obj[0] = obj;
  obj1 = { style: tmp.backButton, children: null };
  const obj2 = { source: null, color: null, accessibilityLabel: null, onPress: null };
  obj2[0] = require("../../../../_runtime/08197_registerAsset.js");
  obj2[1] = buttonColor;
  const intl = _require("../../../intl/index.native.tsx").intl;
  obj2[2] = intl.string(_require("../../../intl/index.native.tsx").t["13/7kX"]);
  obj2[3] = function onPress() {
    navigation.goBack();
  };
  obj1[1] = callback(_require("../../main_tabs_v2/native/shared_components/HeaderShared.tsx").HeaderIconButton, obj2);
  const items = [callback(closure_4, obj1), , ];
  const obj3 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl }, accessibilityLabel: null, accessibilityRole: "header" };
  const intl2 = _require("../../../intl/index.native.tsx").intl;
  obj3[3] = intl2.formatToPlainString(_require("../../../intl/index.native.tsx").t.FNtLb3, { category: categoryName });
  items[1] = callback(closure_3, obj3);
  items[2] = callback(closure_4, { style: tmp.dummyRightButton });
  obj[1] = items;
  return callback2(closure_4, obj);
};