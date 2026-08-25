// === Module 13030: TermsAndConditionsActionSheet ===

// Module 13030 (TermsAndConditionsActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import get_defaultRulesDefault from "get defaultRules" /* 4370 */;
import Text from "Text" /* 4376 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5502 */;
import Background from "Background" /* 5503 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function TermsAndConditionsActionSheet(termsAndConditions) {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.PdKWVT);
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { style: callback4().termsAndConditionsText, variant: "text-sm/medium", children: null };
  const tmp = callback4();
  obj[2] = get_defaultRulesDefault.parse(termsAndConditions.termsAndConditions, false, { allowLinks: true });
  obj[1] = callback2(Text.Text, obj);
  return callback2(Background.BottomSheet, obj);
}
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { card: null, mainContainer: null, textContainer: null, imageContainer: null, image: null, title: null, subText: null, claimButton: null, moreDetails: null, termsAndConditionsText: null, buttonContainer: null };
createCacheKey = { flex: 1, flexDirection: "column", paddingHorizontal: require("ME").USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[2] = { flexDirection: "row", flexShrink: 1, alignItems: "center" };
createCacheKey[3] = { width: 32, height: 32, marginRight: 8, borderRadius: ThemesDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: require("result").DARK_BLACK_500_LIGHT_PRIMARY_100 };
createCacheKey[4] = { width: 28, height: 28, resizeMode: "contain" };
createCacheKey[5] = { lineHeight: 20 };
createCacheKey[6] = { lineHeight: 18 };
createCacheKey[7] = { paddingHorizontal: 12 };
createCacheKey[8] = { marginLeft: 40 };
createCacheKey[9] = { paddingHorizontal: 16, paddingTop: 16 };
createCacheKey[10] = { flexGrow: 1, flexDirection: "row", marginLeft: 4, justifyContent: "flex-end" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 32, height: 32, marginRight: 8, borderRadius: ThemesDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: require("result").DARK_BLACK_500_LIGHT_PRIMARY_100 };
const result = require("set").fileFinishedImporting("components_native/premium/OutboundPromotionCard.tsx");

export default function OutboundPromotionCard(outboundPromotion) {
  outboundPromotion = outboundPromotion.outboundPromotion;
  const code = outboundPromotion.code;
  let first;
  let callback;
  const tmp = callback4();
  let obj = outboundPromotion(first[14]);
  const promotionImageURL = obj.getPromotionImageURL(outboundPromotion.id, code(first[13])());
  const tmp7 = code(first[15])(outboundPromotion, null != code);
  const intl = outboundPromotion(first[10]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = outboundPromotion(first[10]).t;
  if (null != code) {
    obj = { endDate: null };
    obj[0] = tmp7;
    let formatToPlainStringResult = formatToPlainString(t.VaD05h, obj);
  } else {
    obj = { endDate: null };
    obj[0] = tmp7;
    formatToPlainStringResult = formatToPlainString(t["/XWgfG"], obj);
  }
  const intl2 = tmp4(tmp2[10]).intl;
  const string = intl2.string;
  const t2 = tmp4(tmp2[10]).t;
  if (null != code) {
    let stringResult = string(t2["2cHUti"]);
  } else {
    stringResult = string(t2.O13yhz);
  }
  const tmp10 = callback(React.useState(false), 2);
  first = tmp10[0];
  callback = tmp10[1];
  const items = [first, code, outboundPromotion];
  const layoutEffect = React.useLayoutEffect(() => {
    if (first) {
      let obj = code(first[16]);
      obj = { importer: null };
      obj[0] = function importer() {
        return closure_1_0(closure_1_2[18])(closure_1_2[17], closure_1_2.paths).then((arg0) => {
          closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onCancel = function onCancel() { ... };
            obj.onClaim = closure_2_1(closure_2_2[19]).addClaimedOutboundPromotionCode;
            obj.code = closure_1_1;
            obj.outboundPromotion = closure_0;
            return closure_2_7(closure_0, obj);
          };
        });
      };
      obj.openLazy(obj);
    }
  }, items);
  obj1 = { style: tmp.card, children: null };
  const obj2 = { style: tmp.mainContainer, children: null };
  const tmp3 = code(first[13])();
  const items1 = [callback2(closure_5, { style: tmp.imageContainer, children: callback2(closure_6, obj4) }), , ];
  const obj5 = { style: tmp.textContainer, children: null };
  const obj6 = { children: null };
  const items2 = [callback2(outboundPromotion(first[11]).Text, { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: outboundPromotion.outboundTitle }), callback2(outboundPromotion(first[11]).Text, { style: tmp.subText, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult })];
  obj6[0] = items2;
  obj5[1] = callback3(closure_5, obj6);
  items1[1] = callback2(closure_5, obj5);
  const obj9 = { style: tmp.buttonContainer, children: null };
  const obj3 = { style: tmp.imageContainer, children: callback2(closure_6, obj4) };
  const obj7 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: outboundPromotion.outboundTitle };
  const obj8 = { style: tmp.subText, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult };
  obj9[1] = callback2(closure_5, { style: tmp.claimButton, children: callback2(outboundPromotion(first[20]).Button, obj11) });
  items1[2] = callback2(closure_5, obj9);
  obj2[1] = items1;
  const items3 = [callback3(closure_5, obj2), ];
  const obj12 = { children: null };
  const obj13 = { style: tmp.moreDetails, variant: "text-sm/medium", children: null };
  const intl3 = tmp4(tmp2[10]).intl;
  obj13[2] = intl3.format(outboundPromotion(first[10]).t.sCm3Zb, {
    onClick() {
      let obj = code(first[21]);
      obj.hideActionSheet();
      obj = { termsAndConditions: outboundPromotion.outboundTermsAndConditions };
      code(first[21]).openLazy(() => Promise.resolve(closure_10), "OutboundPromotionTermsAndConditions-" + outboundPromotion.id, obj);
    }
  });
  obj12[0] = callback2(outboundPromotion(first[11]).Text, obj13);
  items3[1] = callback2(closure_5, obj12);
  obj1[1] = items3;
  return callback3(closure_5, obj1);
};