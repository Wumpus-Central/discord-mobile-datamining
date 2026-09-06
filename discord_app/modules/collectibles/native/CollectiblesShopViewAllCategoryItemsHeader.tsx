// === Module 15847: CollectiblesShopViewAllCategoryItemsHeader ===

// Module 15847 (CollectiblesShopViewAllCategoryItemsHeader)
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import _modDef7867 from "module_7867" /* 7867 */;
import useYouBarSettingsSafeArea from "useYouBarSettingsSafeArea" /* 13350 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  ({ logoUrl, buttonColor, categoryName } = arg0);
  let obj = useNavigation;
  const navigation = obj.useStackNavigation();
  const tmp = closure_7();
  let obj1 = useYouBarSettingsSafeArea;
  obj = { style: null, children: null };
  obj = {};
  const youBarSettingsCustomHeaderPaddingTop = obj1.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  obj.paddingTop = youBarSettingsCustomHeaderPaddingTop;
  obj.style = obj;
  obj1 = { style: tmp.backButton, children: null };
  const obj2 = { source: _modDef7867, color: buttonColor, accessibilityLabel: null, onPress: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj2.onPress = function onPress() {
    navigation.goBack();
  };
  obj1.children = hasOwnProperty(HeaderShared.HeaderIconButton, obj2);
  const items = [hasOwnProperty(React4, obj1), , ];
  const obj3 = { resizeMode: "contain", style: tmp.logo, source: { uri: logoUrl }, accessibilityLabel: null, accessibilityRole: "header" };
  const intl2 = util.intl;
  obj3.accessibilityLabel = intl2.formatToPlainString(util.t.FNtLb3, { category: categoryName });
  items[1] = hasOwnProperty(React3, obj3);
  items[2] = hasOwnProperty(React4, { style: tmp.dummyRightButton });
  obj.children = items;
  return timestampProducer(React4, obj);
};