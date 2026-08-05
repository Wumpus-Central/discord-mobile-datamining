// discord_app/components_native/premium/OutboundPromotionCard.tsx
import _slicedToArray from "_slicedToArray";
import fetchActivePromotions from "fetchActivePromotions";
import get_ActivityIndicator from "OutboundPromotionClaimAlert";
import jsxProd from "ACTION_SHEET_HEIGHT_HALF";
import createCacheKey from "createCacheKey";
import { Background } from "../../design/components/Sheet/native/BottomSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function TermsAndConditionsActionSheet(termsAndConditions) {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.PdKWVT);
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { style: createCacheKey().termsAndConditionsText, variant: "text-sm/medium", children: null };
  const tmp = createCacheKey();
  obj[2] = require("../../modules/markup/MarkupUtils.tsx") /* get defaultRules */.parse(termsAndConditions.termsAndConditions, false, { allowLinks: true });
  obj[1] = callback2(Text.Text, obj);
  return callback2(Background.BottomSheet, obj);
}
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { card: null, mainContainer: null, textContainer: null, imageContainer: null, image: null, title: null, subText: null, claimButton: null, moreDetails: null, termsAndConditionsText: null, buttonContainer: null };
createCacheKey = { flex: 1, flexDirection: "column", paddingHorizontal: require("ME").USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 12, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, marginTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[2] = { flexDirection: "row", flexShrink: 1, alignItems: "center" };
createCacheKey[3] = { width: 32, height: 32, marginRight: 8, borderRadius: require("Themes").radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: require("result").DARK_BLACK_500_LIGHT_PRIMARY_100 };
createCacheKey[4] = { width: 28, height: 28, resizeMode: "contain" };
createCacheKey[5] = { lineHeight: 20 };
createCacheKey[6] = { lineHeight: 18 };
createCacheKey[7] = { paddingHorizontal: 12 };
createCacheKey[8] = { marginLeft: 40 };
createCacheKey[9] = { paddingHorizontal: 16, paddingTop: 16 };
createCacheKey[10] = { flexGrow: 1, flexDirection: "row", marginLeft: 4, justifyContent: "flex-end" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 32, height: 32, marginRight: 8, borderRadius: require("Themes").radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: require("result").DARK_BLACK_500_LIGHT_PRIMARY_100 };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/OutboundPromotionCard.tsx");

export default function OutboundPromotionCard(outboundPromotion) {
  outboundPromotion = outboundPromotion.outboundPromotion;
  const code = outboundPromotion.code;
  let first;
  let callback;
  const tmp = createCacheKey();
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
        return outer1_0(outer1_2[18])(outer1_2[17], outer1_2.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onCancel = function onCancel() { ... };
            obj.onClaim = outer2_1(outer2_2[19]).addClaimedOutboundPromotionCode;
            obj.code = outer1_1;
            obj.outboundPromotion = closure_0;
            return outer2_7(closure_0, obj);
          };
        });
      };
      obj.openLazy(obj);
    }
  }, items);
  const obj1 = { style: tmp.card, children: null };
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