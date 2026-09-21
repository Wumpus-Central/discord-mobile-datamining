// === Module 13823: OutboundPromotionClaimAlert ===

// Module 13823 (OutboundPromotionClaimAlert)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4451 */;
import ClipboardUtils from "ClipboardUtils" /* 7434 */;
import PromotionUtils from "PromotionUtils" /* 13690 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, Image: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { loading: { marginVertical: 80 }, body: { alignItems: "center" }, title: { marginBottom: 8 }, errorTitle: { lineHeight: 24, marginBottom: 8 }, bodyText: { textAlign: "center", lineHeight: 20 }, copyInputContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 16, padding: 12, borderRadius: nativeDefault.radii.sm }, copyInputLabel: { lineHeight: 20, marginBottom: 8 }, copyInput: null, copyInputCopied: null, copyButton: null, promotionArt: null, errorArt: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 16, padding: 12, borderRadius: nativeDefault.radii.sm };
obj2.copyInput = { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginBottom: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj4 = { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, padding: 8, marginBottom: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.copyInputCopied = { borderColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
obj2.copyButton = { paddingHorizontal: 8, marginLeft: 8 };
obj2.promotionArt = { width: 200, height: 100, marginBottom: 20 };
obj2.errorArt = { width: 141, height: 99, marginBottom: 20 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/OutboundPromotionClaimAlert.tsx");

export default function OutboundPromotionClaimAlert(onCancel) {
  onCancel = onCancel.onCancel;
  const onClaim = onCancel.onClaim;
  const code = onCancel.code;
  const outboundPromotion = onCancel.outboundPromotion;
  noop = undefined;
  c5 = undefined;
  const tmp = closure_11();
  [tmp3, c4] = outboundPromotion(noop.useState(null), 2);
  const tmp2 = outboundPromotion(noop.useState(null), 2);
  [tmp7, c5] = outboundPromotion(onClaim(code[6])(false, 2000), 2);
  closure_6 = tmp8;
  const tmp6 = outboundPromotion(onClaim(code[6])(false, 2000), 2);
  const analyticsLocations = onClaim(code[7])(onClaim(code[8]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  const items = [null != code, , , , , ];
  ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
  items[4] = onClaim;
  items[5] = analyticsLocations;
  const effect = noop.useEffect(() => {
    if (!closure_6) {
      const obj3 = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations: null };
      ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
      obj3.analyticsLocations = analyticsLocations;
      const result = PromotionUtils.claimOutboundPromotion(obj3);
      result.then((result) => onClaim(result)).catch((error) => closure_1_4(error));
      const nextPromise = result.then((result) => onClaim(result));
    }
  }, items);
  if (null != code) {
    let obj2 = { style: tmp.body, children: null };
    let obj3 = { source: tmp4(tmp5[10]), style: tmp.promotionArt };
    const items1 = [closure_9(analyticsLocations, obj3), , , ];
    let Text = onCancel;
    const obj4 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    const intl = onCancel(tmp5[12]).intl;
    obj4.children = intl.string(onCancel(tmp5[12]).t["23BfZh"]);
    items1[1] = closure_9(onCancel(tmp5[11]).Heading, obj4);
    const obj5 = { style: tmp.bodyText, variant: "text-md/medium", children: outboundPromotion.outboundRedemptionModalBody };
    items1[2] = closure_9(onCancel(tmp5[11]).Text, obj5);
    let obj6 = { style: tmp.copyInputContainer, children: null };
    const obj7 = { style: tmp.copyInputLabel, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = onCancel(tmp5[12]).intl;
    obj7.children = intl2.string(onCancel(tmp5[12]).t.s9LFQh);
    const items2 = [closure_9(onCancel(tmp5[11]).Text, obj7), , ];
    const copyInput = tmp.copyInput;
    if (tmp7) {
      const obj8 = {};
      const merged = Object.assign(copyInput);
      const merged1 = Object.assign(tmp.copyInputCopied);
      let tmp18 = obj8;
    } else {
      tmp18 = copyInput;
    }
    let obj9 = { style: tmp18, children: null };
    const obj10 = { style: { flex: 1 }, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
    const obj11 = {
      onStartShouldSetResponderCapture() {
          return true;
        },
      children: null
    };
    const obj12 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: code };
    obj11.children = closure_9(Text(tmp5[11]).Text, obj12);
    obj10.children = closure_9(closure_6, obj11);
    const items3 = [closure_9(closure_8, obj10), ];
    let obj13 = { style: tmp.copyButton, children: null };
    const intl3 = Text(tmp5[12]).intl;
    const string = intl3.string;
    let t = Text(tmp5[12]).t;
    if (tmp7) {
      let stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    const obj14 = {
      text: stringResult,
      size: "sm",
      onPress() {
          ClipboardUtils.copy(code);
          _undefined(true);
        }
    };
    t = closure_9(Text(tmp5[13]).Button, obj14);
    obj13.children = t;
    obj13 = closure_9(tmp15, obj13);
    items3[1] = obj13;
    obj9.children = items3;
    items2[1] = closure_10(closure_6, obj9);
    Text = Text(tmp5[11]).Text;
    obj9 = closure_9(Text, { variant: "text-sm/medium", color: "text-muted", children: "This code is included in your confirmation email" });
    items2[2] = obj9;
    obj6.children = items2;
    obj6 = closure_10(tmp15, obj6);
    items1[3] = obj6;
    obj2.children = items1;
    closure_10(closure_6, obj2);
  } else {
    let obj = { style: tmp.loading };
    let tmp13 = closure_9(c5, obj);
    const obj15 = { style: tmp.body, children: null };
    const obj16 = { source: tmp4(tmp5[15]), style: tmp.errorArt };
    const items4 = [closure_9(analyticsLocations, obj16), , ];
    const obj17 = { style: tmp.errorTitle, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
    const intl4 = onCancel(tmp5[12]).intl;
    obj17.children = intl4.string(onCancel(tmp5[12]).t.iufib1);
    items4[1] = closure_9(onCancel(tmp5[11]).Text, obj17);
    const obj18 = { style: tmp.bodyText, variant: "text-md/medium", children: null };
    const intl5 = onCancel(tmp5[12]).intl;
    obj18.children = intl5.string(onCancel(tmp5[12]).t.eAn6z2);
    items4[2] = closure_9(onCancel(tmp5[11]).Text, obj18);
    obj15.children = items4;
    const obj19 = { onCancel, confirmText: null, onConfirm: null, cancelText: null, noDefaultButtons: null, children: null };
    const tmp32 = closure_10(closure_6, obj15);
    if (null != tmp3) {
      const intl7 = tmp31(tmp5[12]).intl;
      let stringResult1 = intl7.string(tmp31(tmp5[12]).t.cpT0Cq);
    } else {
      const intl6 = tmp31(tmp5[12]).intl;
      stringResult1 = intl6.string(tmp31(tmp5[12]).t["+zx47d"]);
    }
    obj19.confirmText = stringResult1;
    obj19.onConfirm = function onConfirm() {
      if (null != code) {
        const outboundPromotionRedemptionUrl = PromotionUtils.getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
        LinkingDefault.openURL(outboundPromotionRedemptionUrl);
      }
      onCancel();
    };
    let stringResult2;
    if (null == tmp3) {
      const intl8 = tmp31(tmp5[12]).intl;
      stringResult2 = intl8.string(tmp31(tmp5[12]).t.TulDPl);
    }
    obj19.cancelText = stringResult2;
    let tmp36 = !tmp8;
    if (!tmp8) {
      tmp36 = null == tmp3;
    }
    obj19.noDefaultButtons = tmp36;
    if (null != tmp3) {
      tmp13 = tmp32;
    }
    obj19.children = tmp13;
    return closure_9(tmp4(tmp5[16]), obj19);
  }
  const tmp9 = onClaim(code[7]);
};