// discord_app/components_native/premium/OutboundPromotionClaimAlert.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "module_3981";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ ActivityIndicator: c5, View: closure_6, Image: error, ScrollView: metroImportAll } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { loading: { marginVertical: 80 }, body: { alignItems: "center" }, title: { marginBottom: 8 }, errorTitle: { lineHeight: 24, marginBottom: 8 }, bodyText: { textAlign: "center", lineHeight: 20 }, copyInputContainer: null, copyInputLabel: null, copyInput: null, copyInputCopied: null, copyButton: null, promotionArt: null, errorArt: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginTop: 16, padding: 12, borderRadius: require("Themes").radii.sm };
createCacheKey[5] = createCacheKey;
createCacheKey[6] = { lineHeight: 20, marginBottom: 8 };
createCacheKey[7] = { borderWidth: 1, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs, padding: 8, marginBottom: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj1 = { borderWidth: 1, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.xs, padding: 8, marginBottom: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[8] = { borderColor: require("Themes").colors.ICON_FEEDBACK_POSITIVE };
createCacheKey[9] = { paddingHorizontal: 8, marginLeft: 8 };
createCacheKey[10] = { width: 200, height: 100, marginBottom: 20 };
createCacheKey[11] = { width: 141, height: 99, marginBottom: 20 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderColor: require("Themes").colors.ICON_FEEDBACK_POSITIVE };
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/OutboundPromotionClaimAlert.tsx");

export default function OutboundPromotionClaimAlert(onCancel) {
  let c4;
  let c5;
  let tmp3;
  let tmp7;
  onCancel = onCancel.onCancel;
  const onClaim = onCancel.onClaim;
  const code = onCancel.code;
  const outboundPromotion = onCancel.outboundPromotion;
  let React;
  c5 = undefined;
  let c6;
  let analyticsLocations;
  const tmp = createCacheKey();
  [tmp3, c4] = outboundPromotion(React.useState(null), 2);
  const tmp2 = outboundPromotion(React.useState(null), 2);
  [tmp7, c5] = outboundPromotion(onClaim(code[6])(false, 2000), 2);
  c6 = tmp8;
  const tmp6 = outboundPromotion(onClaim(code[6])(false, 2000), 2);
  analyticsLocations = onClaim(code[7])(onClaim(code[8]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  const items = [null != code, , , , , ];
  ({ id: arr[1], outboundTitle: arr[2], partnerId: arr[3] } = outboundPromotion);
  items[4] = onClaim;
  items[5] = analyticsLocations;
  const effect = React.useEffect(() => {
    if (!c6) {
      let obj = onCancel(code[9]);
      obj = { promotionId: null, promotionTitle: null, partnerId: null, analyticsLocations: null };
      ({ id: obj2[0], outboundTitle: obj2[1], partnerId: obj2[2] } = outboundPromotion);
      obj[3] = analyticsLocations;
      const result = obj.claimOutboundPromotion(obj);
      result.then((arg0) => callback(arg0)).catch((arg0) => callback2(arg0));
      const nextPromise = result.then((arg0) => callback(arg0));
    }
  }, items);
  if (null != code) {
    let obj = { style: null, children: null };
    obj[0] = tmp.body;
    obj = { source: null, style: null };
    obj[0] = tmp4(tmp5[10]);
    obj[1] = tmp.promotionArt;
    const items1 = [callback(analyticsLocations, obj), , , ];
    let Text = onCancel;
    const obj1 = { style: null, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp.title;
    const intl = onCancel(tmp5[12]).intl;
    obj1[3] = intl.string(onCancel(tmp5[12]).t["23BfZh"]);
    items1[1] = callback(onCancel(tmp5[11]).Heading, obj1);
    let obj2 = { style: null, variant: "text-md/medium", children: null };
    obj2[0] = tmp.bodyText;
    obj2[2] = outboundPromotion.outboundRedemptionModalBody;
    items1[2] = callback(onCancel(tmp5[11]).Text, obj2);
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.copyInputContainer;
    const obj4 = { style: null, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj4[0] = tmp.copyInputLabel;
    const intl2 = onCancel(tmp5[12]).intl;
    obj4[3] = intl2.string(onCancel(tmp5[12]).t.s9LFQh);
    const items2 = [callback(onCancel(tmp5[11]).Text, obj4), , ];
    const copyInput = tmp.copyInput;
    if (tmp7) {
      const obj5 = {};
      const merged = Object.assign(copyInput);
      const merged1 = Object.assign(tmp.copyInputCopied);
      let tmp18 = obj5;
    } else {
      tmp18 = copyInput;
    }
    let obj6 = { style: null, children: null };
    obj6[0] = tmp18;
    const obj7 = { style: null, horizontal: true, showsHorizontalScrollIndicator: false, children: null };
    obj7[0] = { flex: 1 };
    const obj8 = { onStartShouldSetResponderCapture: null, children: null };
    obj8[0] = function onStartShouldSetResponderCapture() {
      return true;
    };
    const obj9 = { lineClamp: 1, variant: "text-sm/medium", color: "interactive-text-active", children: null };
    obj9[3] = code;
    obj8[1] = callback(Text(tmp5[11]).Text, obj9);
    obj7[3] = callback(c6, obj8);
    const items3 = [callback(closure_8, obj7), ];
    let obj10 = { style: null, children: null };
    obj10[0] = tmp.copyButton;
    const intl3 = Text(tmp5[12]).intl;
    const string = intl3.string;
    let t = Text(tmp5[12]).t;
    if (tmp7) {
      let stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    const obj11 = { text: null, size: "sm", onPress: null };
    obj11[0] = stringResult;
    obj11[2] = function onPress() {
      onCancel(code[14]).copy(code);
      _undefined(true);
    };
    t = tmp16(Text(tmp5[13]).Button, obj11);
    obj10[1] = t;
    obj10 = tmp16(tmp15, obj10);
    items3[1] = obj10;
    obj6[1] = items3;
    items2[1] = callback2(c6, obj6);
    Text = Text(tmp5[11]).Text;
    obj6 = tmp16(Text, { variant: "text-sm/medium", color: "text-muted", children: "This code is included in your confirmation email" });
    items2[2] = obj6;
    obj3[1] = items2;
    obj3 = tmp14(tmp15, obj3);
    items1[3] = obj3;
    obj[1] = items1;
    callback2(c6, obj);
  } else {
    obj = { style: null };
    obj[0] = tmp.loading;
    let tmp13 = callback(c5, obj);
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.body;
    const obj13 = { source: null, style: null };
    obj13[0] = tmp4(tmp5[15]);
    obj13[1] = tmp.errorArt;
    const items4 = [callback(analyticsLocations, obj13), , ];
    const obj14 = { style: null, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
    obj14[0] = tmp.errorTitle;
    const intl4 = onCancel(tmp5[12]).intl;
    obj14[3] = intl4.string(onCancel(tmp5[12]).t.iufib1);
    items4[1] = callback(onCancel(tmp5[11]).Text, obj14);
    const obj15 = { style: null, variant: "text-md/medium", children: null };
    obj15[0] = tmp.bodyText;
    const intl5 = onCancel(tmp5[12]).intl;
    obj15[2] = intl5.string(onCancel(tmp5[12]).t.eAn6z2);
    items4[2] = callback(onCancel(tmp5[11]).Text, obj15);
    obj12[1] = items4;
    const obj16 = { onCancel: null, confirmText: null, onConfirm: null, cancelText: null, noDefaultButtons: null, children: null };
    obj16[0] = onCancel;
    const tmp32 = callback2(c6, obj12);
    if (null != tmp3) {
      const intl7 = tmp31(tmp5[12]).intl;
      let stringResult1 = intl7.string(tmp31(tmp5[12]).t.cpT0Cq);
    } else {
      const intl6 = tmp31(tmp5[12]).intl;
      stringResult1 = intl6.string(tmp31(tmp5[12]).t["+zx47d"]);
    }
    obj16[1] = stringResult1;
    obj16[2] = function onConfirm() {
      if (null != code) {
        const outboundPromotionRedemptionUrl = onCancel(code[9]).getOutboundPromotionRedemptionUrl(tmp, outboundPromotion);
        const obj = onCancel(code[9]);
        onClaim(code[17]).openURL(outboundPromotionRedemptionUrl);
        const obj2 = onClaim(code[17]);
      }
      onCancel();
    };
    let stringResult2;
    if (null == tmp3) {
      const intl8 = tmp31(tmp5[12]).intl;
      stringResult2 = intl8.string(tmp31(tmp5[12]).t.TulDPl);
    }
    obj16[3] = stringResult2;
    let tmp36 = !tmp8;
    if (!tmp8) {
      tmp36 = null == tmp3;
    }
    obj16[4] = tmp36;
    if (null != tmp3) {
      tmp13 = tmp32;
    }
    obj16[5] = tmp13;
    return callback(tmp4(tmp5[16]), obj16);
  }
};