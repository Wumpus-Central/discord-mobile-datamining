import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { flex: 1, flexDirection: "column", alignItems: "center", width: "100%" }, footerText: { marginBottom: 24 }, button: { marginBottom: 40 }, easterEggSpacing: { position: "absolute", top: 40 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/Footer.tsx");

export default function Footer(showSubscribeButton) {
  showSubscribeButton = showSubscribeButton.showSubscribeButton;
  const tmp = callback2();
  importDefault(12670)(importDefault(5630).PREMIUM_MARKETING_FOOTER);
  let obj = { style: items, children: null };
  items = [tmp.container, showSubscribeButton.style];
  let tmp8Result = showSubscribeButton;
  if (showSubscribeButton) {
    obj = { children: null };
    obj = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj[0] = tmp.footerText;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[3] = intl.string(require(1236) /* getSystemLocale */.t["2bSPbq"]);
    const items1 = [callback(require(4281) /* Text */.Text, obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.button;
    const obj2 = { text: null, variant: "primary", size: "lg", onPress: null, grow: true };
    obj2[0] = tmp7;
    obj2[3] = tmp6;
    obj1[1] = callback(require(4695) /* Button */.Button, obj2);
    items1[1] = callback(tmp9, obj1);
    obj[0] = items1;
    tmp8Result = tmp8(closure_5, obj);
  }
  const items2 = [tmp8Result, ];
  let easterEggSpacing = null;
  const tmp14 = callback;
  const tmp4 = importDefault(12670);
  if (!showSubscribeButton) {
    easterEggSpacing = tmp.easterEggSpacing;
  }
  const tmp2Result = importDefault(5236);
  items2[1] = tmp14(tmp2Result, { style: easterEggSpacing, source: importDefault(12671) });
  obj[1] = items2;
  return closure_6(View, obj);
};