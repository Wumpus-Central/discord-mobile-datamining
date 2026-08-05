// discord_app/modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = createCacheKey.createStyles({ description: { marginBottom: 8 } });
const result = require("createCacheKey").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  const tmp = callback3();
  let obj = { children: null };
  obj = { title: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["48kg+O"]);
  const items = [callback(require("../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx") /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.O1k9XX);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[3] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.FV5dvh);
  items[2] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  obj[0] = items;
  return callback2(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
};