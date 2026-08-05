// discord_app/modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, topContainer: null, growContainer: null, image: null, title: null, subtitle: null, info: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: require("Themes").space.PX_16 };
createCacheKey[2] = { flexGrow: 2 };
let obj1 = { paddingTop: require("Themes").space.PX_16 };
createCacheKey[3] = { width: "100%", marginBottom: require("Themes").space.PX_32 };
let obj2 = { width: "100%", marginBottom: require("Themes").space.PX_32 };
createCacheKey[4] = { textAlign: "center", marginBottom: require("Themes").space.PX_16 };
let obj3 = { textAlign: "center", marginBottom: require("Themes").space.PX_16 };
createCacheKey[5] = { textAlign: "center", marginBottom: require("Themes").space.PX_32 };
createCacheKey[6] = { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { textAlign: "center", marginBottom: require("Themes").space.PX_32 };
const result = require("jsxProd").fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default function RedesignDiscoverabilityLanding(onNext) {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: null, children: null };
  obj = { flexGrow: 2, paddingTop: null, paddingBottom: null, paddingHorizontal: null };
  obj[1] = require("../../../../design/components/Navigator/native/NavigatorConstants.native.tsx") /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + 32;
  obj[2] = require("../../../safe_area/useSafeAreaInsets.native.tsx")().bottom + 16;
  obj[3] = require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16;
  obj[2] = obj;
  obj = { style: tmp.topContainer };
  const items = [callback(closure_3, obj), , , , , , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[4] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.n8nw6j);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  const obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.KMW0kP);
  items[2] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj2);
  const obj3 = { resizeMode: "contain", style: tmp.image, source: null };
  obj3[2] = require("../../../../../_runtime/12017_registerAsset.js");
  items[3] = callback(require("../../../../components_native/common/FastImage.tsx"), obj3);
  const obj4 = { style: tmp.info, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  const items1 = [intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ci12MJ), " ", ];
  const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  items1[2] = intl4.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.VcSQ4n, {
    learnMoreHook(arg0, arg1) {
      const obj = { onPress: null, variant: "text-sm/medium", color: "text-link", children: null };
      obj[0] = callback(11947).handleOpenLearnMoreLink;
      obj[3] = arg0;
      return callback2(callback(4281).Text, obj, arg1);
    }
  });
  obj4[3] = items1;
  items[4] = callback2(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj4);
  items[5] = callback(closure_3, { style: tmp.growContainer });
  const obj7 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl5 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj7[2] = intl5.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.gHPk3I);
  obj7[3] = onNext.onNext;
  items[6] = callback(require("../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj7);
  obj[3] = items;
  return callback2(closure_4, obj);
};