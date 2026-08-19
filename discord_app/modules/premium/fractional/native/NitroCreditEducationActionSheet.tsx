// === Module 12949: NitroCreditEducationActionSheet ===

// Module 12949 (NitroCreditEducationActionSheet)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import Text from "Text" /* 4734 */;
import Background from "Background" /* 6950 */;
import CircleErrorIcon from "CircleErrorIcon" /* 8074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const View = get_ActivityIndicator.View;
const HelpdeskArticles = ME.HelpdeskArticles;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { flexDirection: "row", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: ThemesDefault.radii.lg, marginBottom: 12 };
obj[1] = obj;
obj[2] = { margin: 16 };
obj[3] = { justifyContent: "center", flex: 1, marginRight: 30 };
obj[4] = { textAlign: "center", marginBottom: 24 };
let closure_7 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx");

export default function NitroCreditEducationActionSheet(children) {
  const tmp = callback3();
  const obj = { style: tmp.aboutContainer, children: null };
  const items = [callback(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), callback(View, { style: tmp.aboutTextContainer, children: callback(Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) })];
  obj[1] = items;
  const items1 = [callback2(View, obj), ];
  const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: null };
  const intl = getSystemLocale.intl;
  const obj4 = { helpCenterLink: null };
  const obj2 = { style: tmp.aboutTextContainer, children: callback(Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: children.aboutText }) };
  obj4[0] = combinedDefault.getArticleURL(HelpdeskArticles.FRACTIONAL_PREMIUM_ABOUT);
  obj3[3] = intl.format(getSystemLocale.t.bg3jBj, obj4);
  items1[1] = callback(Text.Text, obj3);
  obj[1] = items1;
  obj[0] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
};