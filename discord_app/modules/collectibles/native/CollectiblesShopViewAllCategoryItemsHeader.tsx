// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import registerAssetDefault from "../../../../_runtime/07611_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { useNavigation } from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import { useYouBarSettingsCustomHeaderPaddingTop } from "../../main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx";

const require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  let _require;
  ({ logoUrl, buttonColor, categoryName } = arg0);
  let obj = useNavigation;
  _require = obj.useStackNavigation();
  const tmp = callback3();
  obj1 = useYouBarSettingsCustomHeaderPaddingTop;
  obj = { style: null, children: null };
  obj = {};
  const youBarSettingsCustomHeaderPaddingTop = obj1.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  obj.paddingTop = youBarSettingsCustomHeaderPaddingTop;
  obj[0] = obj;
  obj1 = { style: tmp.backButton, children: null };
  const obj2 = { source: registerAssetDefault, color: buttonColor, accessibilityLabel: null, onPress: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj2[2] = intl.string(require("../../../intl/index.native.tsx").t["13/7kX"]);
  obj2[3] = function onPress() {
    navigation.goBack();
  };
  obj1[1] = callback(require("../../main_tabs_v2/native/shared_components/HeaderShared.tsx").HeaderIconButton, obj2);
  const items = [callback(closure_4, obj1), , ];
  const obj3 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl }, accessibilityLabel: null, accessibilityRole: "header" };
  const intl2 = require("../../../intl/index.native.tsx").intl;
  obj3[3] = intl2.formatToPlainString(require("../../../intl/index.native.tsx").t.FNtLb3, { category: categoryName });
  items[1] = callback(closure_3, obj3);
  items[2] = callback(closure_4, { style: tmp.dummyRightButton });
  obj[1] = items;
  return callback2(closure_4, obj);
};