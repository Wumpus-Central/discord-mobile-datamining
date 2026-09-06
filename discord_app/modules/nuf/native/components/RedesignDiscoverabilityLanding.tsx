// discord_app/modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import NAV_BAR_HEIGHT from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import registerAssetDefault from "../../../../../_runtime/12750_registerAsset.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = {
  container: null,
  topContainer: null,
  growContainer: null,
  image: null,
  title: null,
  subtitle: null,
  info: null,
};
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[2] = { flexGrow: 2 };
let obj1 = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[3] = { width: "100%", marginBottom: ThemesDefault.space.PX_32 };
let obj2 = { width: "100%", marginBottom: ThemesDefault.space.PX_32 };
createCacheKey[4] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_16 };
let obj3 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[5] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_32 };
createCacheKey[6] = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj4 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_32 };
const result = require("set").fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default function RedesignDiscoverabilityLanding(onNext) {
  const tmp = callback3();
  let obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  obj = {
    flexGrow: 2,
    paddingTop: NAV_BAR_HEIGHT.NAV_BAR_HEIGHT + 32,
    paddingBottom: useSafeAreaInsetsDefault().bottom + 16,
    paddingHorizontal: ThemesDefault.space.PX_16,
  };
  obj[2] = obj;
  obj = { style: tmp.topContainer };
  const items = [callback(closure_3, obj), , , , , ,];
  obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj1[4] = intl.string(getSystemLocale.t.n8nw6j);
  items[1] = callback(Text.Text, obj1);
  const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = getSystemLocale.intl;
  obj2[3] = intl2.string(getSystemLocale.t.KMW0kP);
  items[2] = callback(Text.Text, obj2);
  const obj3 = { resizeMode: "contain", style: tmp.image, source: registerAssetDefault };
  items[3] = callback(preloadDefault, obj3);
  const obj4 = { style: tmp.info, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = getSystemLocale.intl;
  const items1 = [intl3.string(getSystemLocale.t.ci12MJ), " "];
  const intl4 = getSystemLocale.intl;
  items1[2] = intl4.format(getSystemLocale.t.VcSQ4n, {
    learnMoreHook(children) {
      return callback2(
        callback(4556).Text,
        { onPress: callback(12680).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children },
        arg1,
      );
    },
  });
  obj4[3] = items1;
  items[4] = callback2(Text.Text, obj4);
  items[5] = callback(closure_3, { style: tmp.growContainer });
  const obj7 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl5 = getSystemLocale.intl;
  obj7[2] = intl5.string(getSystemLocale.t.gHPk3I);
  obj7[3] = onNext.onNext;
  items[6] = callback(Button.Button, obj7);
  obj[3] = items;
  return callback2(closure_4, obj);
}
