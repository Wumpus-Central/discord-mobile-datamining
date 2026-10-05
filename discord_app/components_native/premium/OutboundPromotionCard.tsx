// === Module 13364: OutboundPromotionCard ===

// Module 13364 (OutboundPromotionCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4877 */;
import Text_Text from "Text/Text" /* 4886 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, termsAndConditions;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING = Constants.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, mainContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, textContainer: { flexDirection: "row", flexShrink: 1, alignItems: "center" }, imageContainer: size, image: { width: 28, height: 28, resizeMode: "contain" }, title: { lineHeight: 20 }, subText: { lineHeight: 18 }, claimButton: { paddingHorizontal: 12 }, moreDetails: { marginLeft: 40 }, termsAndConditionsText: { paddingHorizontal: 16, paddingTop: 16 }, buttonContainer: { flexGrow: 1, flexDirection: "row", marginLeft: 4, justifyContent: "flex-end" } };
obj2 = { flex: 1, flexDirection: "column", paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 8 };
createStyles = createStyles.createStyles;
size = { width: 32, height: 32, marginRight: 8, borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: LegacyTokens.DARK_BLACK_500_LIGHT_PRIMARY_100 };
let closure_9 = createStyles(obj);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((termsAndConditions) => {
  let first;
  let intl;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  termsAndConditions = termsAndConditions.termsAndConditions;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(intl4.t.PdKWVT) };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl4.intl;
    const tmp7 = metroImportDefault(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  const termsAndConditionsText = tmp4.termsAndConditionsText;
  if (cResult[1] !== termsAndConditions) {
    const obj3 = MarkupUtilsDefault;
    const parsed = obj3.parse(termsAndConditions, false, { allowLinks: true });
    cResult[1] = termsAndConditions;
    cResult[2] = parsed;
    tmp8 = parsed;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4.termsAndConditionsText) {
    let tmp11;
    if (cResult[4] === tmp8) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj4 = { header: first, children: metroImportDefault(Text_Text.Text, { style: termsAndConditionsText, variant: "text-sm/medium", children: tmp8 }) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const tmp12 = metroImportDefault(BottomSheet, obj4);
  cResult[3] = tmp4.termsAndConditionsText;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((termsAndConditions) => {
  let BottomSheetTitleHeader;
  let Text;
  let intl;
  let obj2;
  let obj3;
  let obj4;
  termsAndConditions = termsAndConditions.termsAndConditions;
  const obj = { header: metroImportDefault(BottomSheetTitleHeader, obj2), children: metroImportDefault(Text, obj3) };
  const tmp = closure_9();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: intl.string(intl4.t.PdKWVT) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl4.intl;
  obj3 = { style: tmp.termsAndConditionsText, variant: "text-sm/medium", children: obj4.parse(termsAndConditions, false, { allowLinks: true }) };
  Text = Text_Text.Text;
  obj4 = MarkupUtilsDefault;
  return metroImportDefault(BottomSheet, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("components_native/premium/OutboundPromotionCard.tsx");

export default function OutboundPromotionCard(outboundPromotion) {
  let Text;
  let closure_3;
  let first;
  let formatToPlainStringResult;
  let intl3;
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj7;
  let obj9;
  let stringResult;
  outboundPromotion = outboundPromotion.outboundPromotion;
  const code = outboundPromotion.code;
  first = undefined;
  _slicedToArray = undefined;
  const tmp = closure_9();
  const tmp3 = code(first[15])();
  let obj = outboundPromotion(first[16]);
  const promotionImageURL = obj.getPromotionImageURL(outboundPromotion.id, tmp3);
  const tmp7 = code(first[17])(outboundPromotion, null != code);
  const intl = outboundPromotion(first[11]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = outboundPromotion(first[11]).t;
  if (null != code) {
    let obj2 = { endDate: tmp7 };
    formatToPlainStringResult = formatToPlainString(t.VaD05h, obj2);
  } else {
    let obj3 = { endDate: tmp7 };
    formatToPlainStringResult = formatToPlainString(t["/XWgfG"], obj3);
  }
  const intl2 = tmp4(tmp2[11]).intl;
  const string = intl2.string;
  const t2 = tmp4(tmp2[11]).t;
  if (null != code) {
    stringResult = string(t2["2cHUti"]);
  } else {
    stringResult = string(t2.O13yhz);
  }
  [first, _slicedToArray] = react.useState(false);
  const items = [first, code, outboundPromotion];
  const layoutEffect = react.useLayoutEffect(() => {
    if (first) {
      let obj = actions_AlertActionCreatorsDefault;
      const obj2 = {
        importer() {
            const promise = outboundPromotion(first[20])(first[19], first.paths);
            return promise.then((result) => {
              let closure_0 = result.default;
              return (arg0) => {
                let obj = {
                  onCancel() {
                    const obj = code(closure_2_2[18]);
                    obj.close();
                    closure_1_3(false);
                  },
                  onClaim: closure_3_1(first[21]).addClaimedOutboundPromotionCode,
                  code,
                  outboundPromotion
                };
                const merged = Object.assign(arg0);
                return closure_3_7(closure_0, obj);
              };
            });
          },
        isDismissable: false
      };
      obj.openLazy(obj2);
    }
  }, items);
  const obj4 = { style: tmp.card, children: items3 };
  const obj5 = { style: tmp.mainContainer, children: items1 };
  const obj6 = { style: tmp.imageContainer, children: closure_7(closure_6, obj7) };
  obj7 = { style: tmp.image, source: { uri: promotionImageURL } };
  items1 = [closure_7(closure_5, obj6), , ];
  const obj8 = { style: tmp.textContainer, children: closure_8(closure_5, obj9) };
  obj9 = { children: items2 };
  items2 = [, ];
  const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: outboundPromotion.outboundTitle };
  items2[0] = closure_7(outboundPromotion(first[14]).Text, obj10);
  const obj11 = { style: tmp.subText, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult };
  items2[1] = closure_7(outboundPromotion(first[14]).Text, obj11);
  items1[1] = closure_7(closure_5, obj8);
  const obj12 = { style: tmp.buttonContainer, children: closure_7(closure_5, obj13) };
  obj13 = { style: tmp.claimButton, children: closure_7(outboundPromotion(first[22]).Button, obj14) };
  obj14 = {
    size: "sm",
    shrink: true,
    text: stringResult,
    onPress() {
      return closure_3(true);
    }
  };
  items1[2] = closure_7(closure_5, obj12);
  items3 = [closure_8(closure_5, obj5), ];
  const obj15 = { children: closure_7(Text, obj16) };
  obj16 = { style: tmp.moreDetails, variant: "text-sm/medium", children: intl3.format(outboundPromotion(first[11]).t.sCm3Zb, obj17) };
  Text = tmp4(tmp2[14]).Text;
  intl3 = tmp4(tmp2[11]).intl;
  obj17 = {
    onClick() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = ActionSheetActionCreatorsDefault;
      const obj3 = { termsAndConditions: outboundPromotion.outboundTermsAndConditions };
      obj2.openLazy(() => Promise.resolve(closure_1_10), "OutboundPromotionTermsAndConditions-" + outboundPromotion.id, obj3);
    }
  };
  items3[1] = closure_7(closure_5, obj15);
  return closure_8(closure_5, obj4);
};