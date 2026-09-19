// discord_app/components_native/premium/OutboundPromotionCard.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../modules/action_sheet/native/ActionSheetActionCreators.tsx";
import MarkupUtilsDefault from "../../modules/markup/MarkupUtils.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import BottomSheetTitleHeader from "../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../design/components/Sheet/native/BottomSheet.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function TermsAndConditionsActionSheet(termsAndConditions) {
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.PdKWVT);
  obj.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { style: closure_9().termsAndConditionsText, variant: "text-sm/medium", children: null };
  const tmp = closure_9();
  obj3.children = MarkupUtilsDefault.parse(termsAndConditions.termsAndConditions, false, { allowLinks: true });
  obj.children = React5(Text_Text.Text, obj3);
  return React5(Sheet_BottomSheet.BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { card: { flex: 1, flexDirection: "column", paddingHorizontal: fn(1074).USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, paddingVertical: 12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 8 }, mainContainer: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, textContainer: { flexDirection: "row", flexShrink: 1, alignItems: "center" }, imageContainer: null, image: null, title: null, subText: null, claimButton: null, moreDetails: null, termsAndConditionsText: null, buttonContainer: null };
let size = { width: 32, height: 32, marginRight: 8, borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: fn(5653).DARK_BLACK_500_LIGHT_PRIMARY_100 };
obj2.imageContainer = size;
obj2.image = { width: 28, height: 28, resizeMode: "contain" };
obj2.title = { lineHeight: 20 };
obj2.subText = { lineHeight: 18 };
obj2.claimButton = { paddingHorizontal: 12 };
obj2.moreDetails = { marginLeft: 40 };
obj2.termsAndConditionsText = { paddingHorizontal: 16, paddingTop: 16 };
obj2.buttonContainer = { flexGrow: 1, flexDirection: "row", marginLeft: 4, justifyContent: "flex-end" };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/OutboundPromotionCard.tsx");

export default function OutboundPromotionCard(outboundPromotion) {
  outboundPromotion = outboundPromotion.outboundPromotion;
  const code = outboundPromotion.code;
  first = undefined;
  _slicedToArray = undefined;
  const tmp = closure_9();
  const tmp3 = code(first[13])();
  const promotionImageURL = outboundPromotion(first[14]).getPromotionImageURL(outboundPromotion.id, tmp3);
  const tmp7 = code(first[15])(outboundPromotion, null != code);
  const intl = outboundPromotion(first[10]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = outboundPromotion(first[10]).t;
  if (null != code) {
    let obj2 = { endDate: tmp7 };
    let formatToPlainStringResult = formatToPlainString(t.VaD05h, obj2);
  } else {
    const obj3 = { endDate: tmp7 };
    formatToPlainStringResult = formatToPlainString(t["/XWgfG"], obj3);
  }
  const intl2 = tmp4(tmp2[10]).intl;
  const string = intl2.string;
  const t2 = tmp4(tmp2[10]).t;
  if (null != code) {
    let stringResult = string(t2["2cHUti"]);
  } else {
    stringResult = string(t2.O13yhz);
  }
  [first, _slicedToArray] = noop.useState(false);
  const items = [first, code, outboundPromotion];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (first) {
      const obj2 = {
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
          },
        isDismissable: false
      };
      actions_AlertActionCreatorsDefault.openLazy(obj2);
    }
  }, items);
  const obj4 = { style: tmp.card, children: null };
  const obj5 = { style: tmp.mainContainer, children: null };
  const obj6 = { style: tmp.imageContainer, children: closure_7(closure_6, { style: tmp.image, source: { uri: promotionImageURL } }) };
  const items1 = [closure_7(closure_5, obj6), , ];
  const obj8 = { style: tmp.textContainer, children: null };
  const obj9 = { children: null };
  const items2 = [closure_7(outboundPromotion(first[11]).Text, { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: outboundPromotion.outboundTitle }), closure_7(outboundPromotion(first[11]).Text, { style: tmp.subText, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult })];
  obj9.children = items2;
  obj8.children = closure_8(closure_5, obj9);
  items1[1] = closure_7(closure_5, obj8);
  const obj12 = { style: tmp.buttonContainer, children: null };
  const obj13 = {
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
  obj12.children = closure_7(closure_5, obj13);
  items1[2] = closure_7(closure_5, obj12);
  obj5.children = items1;
  const items3 = [closure_8(closure_5, obj5), ];
  const obj15 = { children: null };
  const obj16 = { style: tmp.moreDetails, variant: "text-sm/medium", children: null };
  const intl3 = tmp4(tmp2[10]).intl;
  obj16.children = intl3.format(outboundPromotion(first[10]).t.sCm3Zb, {
    onClick() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_10), "OutboundPromotionTermsAndConditions-" + outboundPromotion.id, { termsAndConditions: outboundPromotion.outboundTermsAndConditions });
    }
  });
  obj15.children = closure_7(outboundPromotion(first[11]).Text, obj16);
  items3[1] = closure_7(closure_5, obj15);
  obj4.children = items3;
  return closure_8(closure_5, obj4);
};