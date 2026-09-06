// === Module 13556: OutboundPromotionCard ===

// Module 13556 (OutboundPromotionCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4550 */;
import Text_Text from "Text/Text" /* 4556 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function TermsAndConditionsActionSheet(termsAndConditions) {
  let obj = { header: null, children: null };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.PdKWVT);
  obj.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj = { style: closure_9().termsAndConditionsText, variant: "text-sm/medium", children: null };
  const tmp = closure_9();
  obj.children = MarkupUtilsDefault.parse(termsAndConditions.termsAndConditions, false, { allowLinks: true });
  obj.children = React5(Text_Text.Text, obj);
  return React5(Sheet_BottomSheet.BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { card: null, mainContainer: null, textContainer: null, imageContainer: null, image: null, title: null, subText: null, claimButton: null, moreDetails: null, termsAndConditionsText: null, buttonContainer: null };
createStyles = { flex: 1, flexDirection: "column", paddingHorizontal: fn(1074).USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 8 };
createStyles.card = createStyles;
createStyles.mainContainer = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles.textContainer = { flexDirection: "row", flexShrink: 1, alignItems: "center" };
let size = { width: 32, height: 32, marginRight: 8, borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: fn(5441).DARK_BLACK_500_LIGHT_PRIMARY_100 };
createStyles.imageContainer = size;
createStyles.image = { width: 28, height: 28, resizeMode: "contain" };
createStyles.title = { lineHeight: 20 };
createStyles.subText = { lineHeight: 18 };
createStyles.claimButton = { paddingHorizontal: 12 };
createStyles.moreDetails = { marginLeft: 40 };
createStyles.termsAndConditionsText = { paddingHorizontal: 16, paddingTop: 16 };
createStyles.buttonContainer = { flexGrow: 1, flexDirection: "row", marginLeft: 4, justifyContent: "flex-end" };
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/OutboundPromotionCard.tsx");

export default function OutboundPromotionCard(outboundPromotion) {
  outboundPromotion = outboundPromotion.outboundPromotion;
  const code = outboundPromotion.code;
  let first;
  _slicedToArray = undefined;
  const tmp = closure_9();
  let obj = outboundPromotion(first[14]);
  const promotionImageURL = obj.getPromotionImageURL(outboundPromotion.id, code(first[13])());
  const tmp7 = code(first[15])(outboundPromotion, null != code);
  const intl = outboundPromotion(first[10]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = outboundPromotion(first[10]).t;
  if (null != code) {
    obj = { endDate: tmp7 };
    let formatToPlainStringResult = formatToPlainString(t.VaD05h, obj);
  } else {
    obj = { endDate: tmp7 };
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
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  first = tmp10[0];
  _slicedToArray = tmp10[1];
  const items = [first, code, outboundPromotion];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (first) {
      let obj = {
        importer() {
            return outboundPromotion(first[18])(first[17], first.paths).then((result) => {
              closure_0 = result.default;
              return (arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.onCancel = function onCancel() { ... };
                obj.onClaim = closure_3_1(first[19]).addClaimedOutboundPromotionCode;
                obj.code = code;
                obj.outboundPromotion = outboundPromotion;
                return closure_3_7(closure_0, obj);
              };
            });
          }
      };
      obj.openLazy(obj);
    }
  }, items);
  const obj1 = { style: tmp.card, children: null };
  const obj2 = { style: tmp.mainContainer, children: null };
  const obj3 = { style: tmp.imageContainer, children: closure_7(closure_6, { style: tmp.image, source: { uri: promotionImageURL } }) };
  const items1 = [closure_7(closure_5, obj3), , ];
  const obj5 = { style: tmp.textContainer, children: null };
  const obj6 = { children: null };
  const items2 = [closure_7(outboundPromotion(first[11]).Text, { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: outboundPromotion.outboundTitle }), closure_7(outboundPromotion(first[11]).Text, { style: tmp.subText, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult })];
  obj6.children = items2;
  obj5.children = closure_8(closure_5, obj6);
  items1[1] = closure_7(closure_5, obj5);
  const obj9 = { style: tmp.buttonContainer, children: null };
  const obj10 = {
    style: tmp.claimButton,
    children: closure_7(outboundPromotion(first[20]).Button, {
      size: "sm",
      shrink: true,
      text: stringResult,
      onPress() {
        return closure_3(true);
      }
    })
  };
  obj9.children = closure_7(closure_5, obj10);
  items1[2] = closure_7(closure_5, obj9);
  obj2.children = items1;
  const items3 = [closure_8(closure_5, obj2), ];
  const obj12 = { children: null };
  const obj13 = { style: tmp.moreDetails, variant: "text-sm/medium", children: null };
  const intl3 = tmp4(tmp2[10]).intl;
  obj13.children = intl3.format(outboundPromotion(first[10]).t.sCm3Zb, {
    onClick() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      obj = { termsAndConditions: outboundPromotion.outboundTermsAndConditions };
      ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_10), "OutboundPromotionTermsAndConditions-" + outboundPromotion.id, obj);
    }
  });
  obj12.children = closure_7(outboundPromotion(first[11]).Text, obj13);
  items3[1] = closure_7(closure_5, obj12);
  obj1.children = items3;
  return closure_8(closure_5, obj1);
};