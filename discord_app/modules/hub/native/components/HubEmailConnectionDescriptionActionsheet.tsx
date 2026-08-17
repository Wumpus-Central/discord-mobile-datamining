// discord_app/modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import Background from "Background" /* 6950 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = createCacheKey.createStyles({ description: { marginBottom: 8 } });
const result = require("set").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  const tmp = callback3();
  let obj = { children: null };
  obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["48kg+O"]);
  const items = [callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t.O1k9XX);
  items[1] = callback(Text.Text, obj);
  obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = getSystemLocale.intl;
  obj1[3] = intl3.string(getSystemLocale.t.FV5dvh);
  items[2] = callback(Text.Text, obj1);
  obj[0] = items;
  return callback2(Background.BottomSheet, obj);
};