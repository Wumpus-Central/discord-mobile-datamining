// discord_app/modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx
import noop from "noop";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, header: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: require("Themes").space.PX_8, alignSelf: "center", textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingVertical: require("Themes").space.PX_8, alignSelf: "center", textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/PersonalizationDisclaimerActionSheet.tsx");

export default function PersonalizationDisclaimerActionSheet() {
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    const obj = callback(3982);
    obj.openURL(callback(1945).getArticleURL(constants.DATA_USED_FOR_RECOMMENDED));
  }, []);
  let obj = { contentStyles: tmp.container, children: null };
  obj = { variant: "heading-md/medium", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.header, children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[4] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.euks4U);
  const items = [callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  obj = { children: null };
  const obj1 = { size: "lg", text: null, onPress: null, icon: null, iconPosition: "end" };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[1] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.hvVgAZ);
  obj1[2] = callback;
  const obj2 = { color: null };
  obj2[0] = require("../../../../discord_common/js/packages/tokens/native.tsx").colors.WHITE;
  obj1[3] = callback(require("../../../design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx") /* LinkExternalSmallIcon */.LinkExternalSmallIcon, obj2);
  const items1 = [callback(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj1), ];
  const obj3 = { variant: "tertiary", size: "lg", text: null, onPress: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj3[2] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.WAI6xu);
  obj3[3] = function onPress() {
    return callback(4253).hideActionSheet();
  };
  items1[1] = callback(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj3);
  obj[0] = items1;
  items[1] = callback2(require("../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx") /* ButtonGroup */.ButtonGroup, obj);
  obj[1] = items;
  return callback2(require("../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
};