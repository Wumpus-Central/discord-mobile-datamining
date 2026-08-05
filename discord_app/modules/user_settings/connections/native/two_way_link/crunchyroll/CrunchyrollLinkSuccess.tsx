// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx
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
let closure_7 = createCacheKey.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default function CrunchyrollLinkDiscordSuccess(onClose) {
  let obj = require("../TwoWayLinkStyles.tsx") /* styles */;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  const tmp = callback3();
  const items = [callback(closure_3, { source: require("../../../../../../../_runtime/10492_registerAsset.js"), style: callback3().image }), , ];
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: null };
  const intl = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[3] = intl.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.Fnvxvk);
  items[1] = callback(require("../../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
  const intl2 = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj3[3] = intl2.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.YwXceg);
  items[2] = callback(require("../../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj3);
  obj[1] = items;
  const items1 = [callback2(closure_4, obj), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj6 = { size: "md", text: null, onPress: null };
  const intl3 = require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj6[1] = intl3.string(require("../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.i4jeWR);
  obj6[2] = onClose.onClose;
  obj5[1] = callback(require("../../../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj6);
  obj4[2] = callback(closure_4, obj5);
  items1[1] = callback(require("../../../../../../components_native/common/SafeAreaView.tsx") /* SafeAreaPaddingView */.SafeAreaPaddingView, obj4);
  obj[1] = items1;
  return callback2(closure_4, obj);
};