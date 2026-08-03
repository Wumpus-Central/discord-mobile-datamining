// === Module 12568: NitroCreditEducationActionSheet ===

// Module 12568 (NitroCreditEducationActionSheet)
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: null, warningIcon: null, aboutTextContainer: null, helpdeskText: null };
obj = { flexDirection: "row", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: require("Themes").radii.lg, marginBottom: 12 };
obj[1] = obj;
obj[2] = { margin: 16 };
obj[3] = { justifyContent: "center", flex: 1, marginRight: 30 };
obj[4] = { textAlign: "center", marginBottom: 24 };
let closure_7 = createCacheKey.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx");

export default function NitroCreditEducationActionSheet(children) {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.aboutContainer, children: null };
  const items = [callback(require(6733) /* CircleErrorIcon */.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), callback(View, { style: tmp.aboutTextContainer, children: callback(require(4189) /* Text */.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) })];
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  const obj4 = { helpCenterLink: null };
  const obj1 = { size: "lg", style: tmp.warningIcon };
  const obj2 = { style: tmp.aboutTextContainer, children: callback(require(4189) /* Text */.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) };
  obj4[0] = importDefault(1945).getArticleURL(HelpdeskArticles.FRACTIONAL_PREMIUM_ABOUT);
  obj3[3] = intl.format(require(1236) /* getSystemLocale */.t.bg3jBj, obj4);
  items1[1] = callback(require(4189) /* Text */.Text, obj3);
  obj[1] = items1;
  obj[0] = callback2(View, obj);
  return callback(require(5247) /* Background */.BottomSheet, obj);
};