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
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["48kg+O"]);
  const items = [callback(require(5337) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl2.string(require(1236) /* getSystemLocale */.t.O1k9XX);
  items[1] = callback(require(4281) /* Text */.Text, obj);
  const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl3.string(require(1236) /* getSystemLocale */.t.FV5dvh);
  items[2] = callback(require(4281) /* Text */.Text, obj1);
  obj[0] = items;
  return callback2(require(5338) /* Background */.BottomSheet, obj);
};