// discord_app/components_native/premium/OutboundPromotionClaimAlert.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import PromotionUtils from "../../modules/premium/promotions/PromotionUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({
  ActivityIndicator: hasOwnProperty,
  View: metroRequire,
  Image: closure_7,
  ScrollView: closure_8,
} = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = {
  loading: { marginVertical: 80 },
  body: { alignItems: "center" },
  title: { marginBottom: 8 },
  errorTitle: { lineHeight: 24, marginBottom: 8 },
  bodyText: { textAlign: "center", lineHeight: 20 },
  copyInputContainer: null,
  copyInputLabel: null,
  copyInput: null,
  copyInputCopied: null,
  copyButton: null,
  promotionArt: null,
  errorArt: null,
};
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginTop: 16,
  padding: 12,
  borderRadius: nativeDefault.radii.sm,
};
createStyles.copyInputContainer = createStyles;
createStyles.copyInputLabel = { lineHeight: 20, marginBottom: 8 };
createStyles.copyInput = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginBottom: 8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
let obj1 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
  padding: 8,
  marginBottom: 8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
createStyles.copyInputCopied = { borderColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
createStyles.copyButton = { paddingHorizontal: 8, marginLeft: 8 };
createStyles.promotionArt = { width: 200, height: 100, marginBottom: 20 };
createStyles.errorArt = { width: 141, height: 99, marginBottom: 20 };
let closure_11 = createStyles.createStyles(createStyles);
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
  const items = [null != code, , , , ,];
  ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
  items[4] = onClaim;
  items[5] = analyticsLocations;
  const effect = noop.useEffect(() => {
    if (!closure_6) {
      const obj = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations: null };
      ({ id: obj2.promotionId, outboundTitle: obj2.promotionTitle, partnerId: obj2.partnerId } = outboundPromotion);
      obj.analyticsLocations = analyticsLocations;
      const result = obj.claimOutboundPromotion(obj);
      result.then((result) => onClaim(result)).catch((error) => closure_1_4(error));
      const nextPromise = result.then((result) => onClaim(result));
    }
  }, items);
  if (null != code) {
    let obj = { style: tmp.body, children: null };
    obj = { source: tmp4(tmp5[10]), style: tmp.promotionArt };
    const items1 = [closure_9(analyticsLocations, obj), , ,];
    let Text = onCancel;
    const obj1 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    const intl = onCancel(tmp5[12]).intl;
    obj1.children = intl.string(onCancel(tmp5[12]).t["23BfZh"]);
    items1[1] = closure_9(onCancel(tmp5[11]).Heading, obj1);
    let obj2 = {
      style: tmp.bodyText,
      variant: "text-md/medium",
      children: outboundPromotion.outboundRedemptionModalBody,
    };
    items1[2] = closure_9(onCancel(tmp5[11]).Text, obj2);
    let obj3 = { style: tmp.copyInputContainer, children: null };
    const obj4 = {
      style: tmp.copyInputLabel,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl2 = onCancel(tmp5[12]).intl;
    obj4.children = intl2.string(onCancel(tmp5[12]).t.s9LFQh);
    const items2 = [closure_9(onCancel(tmp5[11]).Text, obj4), ,];
    const copyInput = tmp.copyInput;
    if (tmp7) {
      const obj5 = {};
      const merged = Object.assign(copyInput);
      const merged1 = Object.assign(tmp.copyInputCopied);
      let tmp18 = obj5;
    } else {
      tmp18 = copyInput;
    }
    let obj6 = { style: tmp18, children: null };
    const obj7 = { style: { flex: 1 }, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
    const obj8 = {
      onStartShouldSetResponderCapture() {
        return true;
      },
      children: null,
    };
    const obj9 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: code };
    obj8.children = closure_9(Text(tmp5[11]).Text, obj9);
    obj7.children = closure_9(closure_6, obj8);
    const items3 = [closure_9(closure_8, obj7)];
    let obj10 = { style: tmp.copyButton, children: null };
    const intl3 = Text(tmp5[12]).intl;
    const string = intl3.string;
    let t = Text(tmp5[12]).t;
    if (tmp7) {
      let stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    const obj11 = {
      text: stringResult,
      size: "sm",
      onPress() {
        ClipboardUtils.copy(code);
        _undefined(true);
      },
    };
    t = tmp16(Text(tmp5[13]).Button, obj11);
    obj10.children = t;
    obj10 = tmp16(tmp15, obj10);
    items3[1] = obj10;
    obj6.children = items3;
    items2[1] = closure_10(closure_6, obj6);
    Text = Text(tmp5[11]).Text;
    obj6 = tmp16(Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: "This code is included in your confirmation email",
    });
    items2[2] = obj6;
    obj3.children = items2;
    obj3 = tmp14(tmp15, obj3);
    items1[3] = obj3;
    obj.children = items1;
    closure_10(closure_6, obj);
  } else {
    obj = { style: tmp.loading };
    let tmp13 = closure_9(c5, obj);
    const obj12 = { style: tmp.body, children: null };
    const obj13 = { source: tmp4(tmp5[15]), style: tmp.errorArt };
    const items4 = [closure_9(analyticsLocations, obj13), ,];
    const obj14 = {
      style: tmp.errorTitle,
      variant: "text-lg/bold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl4 = onCancel(tmp5[12]).intl;
    obj14.children = intl4.string(onCancel(tmp5[12]).t.iufib1);
    items4[1] = closure_9(onCancel(tmp5[11]).Text, obj14);
    const obj15 = { style: tmp.bodyText, variant: "text-md/medium", children: null };
    const intl5 = onCancel(tmp5[12]).intl;
    obj15.children = intl5.string(onCancel(tmp5[12]).t.eAn6z2);
    items4[2] = closure_9(onCancel(tmp5[11]).Text, obj15);
    obj12.children = items4;
    const obj16 = {
      onCancel,
      confirmText: null,
      onConfirm: null,
      cancelText: null,
      noDefaultButtons: null,
      children: null,
    };
    const tmp32 = closure_10(closure_6, obj12);
    if (null != tmp3) {
      const intl7 = tmp31(tmp5[12]).intl;
      let stringResult1 = intl7.string(tmp31(tmp5[12]).t.cpT0Cq);
    } else {
      const intl6 = tmp31(tmp5[12]).intl;
      stringResult1 = intl6.string(tmp31(tmp5[12]).t["+zx47d"]);
    }
    obj16.confirmText = stringResult1;
    obj16.onConfirm = function onConfirm() {
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
    obj16.cancelText = stringResult2;
    let tmp36 = !tmp8;
    if (!tmp8) {
      tmp36 = null == tmp3;
    }
    obj16.noDefaultButtons = tmp36;
    if (null != tmp3) {
      tmp13 = tmp32;
    }
    obj16.children = tmp13;
    return closure_9(tmp4(tmp5[16]), obj16);
  }
}
