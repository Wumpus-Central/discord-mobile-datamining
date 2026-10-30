// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx
import util from "../../../intl/index.native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import _modDef9795 from "../../../../_runtime/metro/09795__.js";
import useYouBarSettingsSafeArea from "../../main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    paddingLeft: 8,
  },
  backButton: { flex: 1 },
  logo: { flex: 2, height: 36 },
  dummyRightButton: { flex: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  ({ logoUrl, buttonColor, categoryName } = arg0);
  const navigation = useNavigation.useStackNavigation();
  const tmp = closure_6();
  const obj3 = { style: null, children: null };
  const obj4 = {};
  const youBarSettingsCustomHeaderPaddingTop = useYouBarSettingsSafeArea.useYouBarSettingsCustomHeaderPaddingTop();
  const merged = Object.assign(tmp.headerContainer);
  obj4.paddingTop = youBarSettingsCustomHeaderPaddingTop;
  obj3.style = obj4;
  const obj5 = { style: tmp.backButton, children: null };
  const obj6 = { source: _modDef9795, color: buttonColor, accessibilityLabel: null, onPress: null };
  const intl = util.intl;
  obj6.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj6.onPress = function onPress() {
    navigation.goBack();
  };
  obj5.children = React4(HeaderShared.HeaderIconButton, obj6);
  const items = [React4(View, obj5), ,];
  const obj7 = {
    resizeMode: "contain",
    style: tmp.logo,
    source: { uri: logoUrl },
    accessibilityLabel: null,
    accessibilityRole: "header",
  };
  const intl2 = util.intl;
  obj7.accessibilityLabel = intl2.formatToPlainString(util.t.FNtLb3, { category: categoryName });
  items[1] = React4(FastImageDefault, obj7);
  items[2] = React4(View, { style: tmp.dummyRightButton });
  obj3.children = items;
  return hasOwnProperty(View, obj3);
}
