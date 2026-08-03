// === Module 12314: MaskedLinkModal ===

// Module 12314 (MaskedLinkModal)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let obj1;
({ View: obj1, ScrollView: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { linkCalloutContainer: { maxHeight: 250 }, emphasis: null };
obj = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[1] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/masked_link/components/native/MaskedLinkModal.tsx");

export default function MaskedLinkModal(isProtocol) {
  let authorityPrefix;
  let handleCancel;
  let handleConfirm;
  let hostname;
  let onCancel;
  let onConfirm;
  let protocol;
  let shouldTrustUrl;
  let theRestOfTheUrl;
  let trustUrl;
  let url;
  isProtocol = isProtocol.isProtocol;
  shouldTrustUrl = undefined;
  let setShouldTrustUrl;
  ({ url, trustUrl, onConfirm, onCancel } = isProtocol);
  const tmp = callback();
  let obj = shouldTrustUrl(setShouldTrustUrl[4]);
  const modalState = obj.useModalState({ url, trustUrl, onConfirm, onCancel });
  ({ protocol, hostname, shouldTrustUrl } = modalState);
  setShouldTrustUrl = modalState.setShouldTrustUrl;
  ({ authorityPrefix, theRestOfTheUrl, handleConfirm, handleCancel } = modalState);
  obj = { title: null, content: null, actions: null, extraContent: null };
  const intl = shouldTrustUrl(setShouldTrustUrl[6]).intl;
  obj[0] = intl.string(shouldTrustUrl(setShouldTrustUrl[6]).t["3w1QGl"]);
  const intl2 = shouldTrustUrl(setShouldTrustUrl[6]).intl;
  if (isProtocol) {
    let formatResult = intl2.format(tmp2(tmp3[6]).t.aCYv1z, {});
  } else {
    formatResult = intl2.string(tmp2(tmp3[6]).t.soRxRe);
  }
  obj[1] = formatResult;
  obj = { variant: "primary", onPress: handleConfirm, text: null };
  const intl3 = tmp2(tmp3[6]).intl;
  const string = intl3.string;
  const t = tmp2(tmp3[6]).t;
  if (isProtocol) {
    let stringResult = string(t.COq6kk);
  } else {
    stringResult = string(t.NcJfJG);
  }
  const obj1 = { children: null };
  obj[2] = stringResult;
  const items = [closure_4(shouldTrustUrl(setShouldTrustUrl[5]).AlertActionButton, obj, "confirm"), ];
  const obj2 = { onPress: handleCancel, variant: "secondary", text: null };
  const intl4 = tmp2(tmp3[6]).intl;
  obj2[2] = intl4.string(shouldTrustUrl(setShouldTrustUrl[6]).t["/g10LC"]);
  items[1] = closure_4(shouldTrustUrl(setShouldTrustUrl[5]).AlertActionButton, obj2, "cancel");
  obj1[0] = items;
  obj[2] = closure_5(shouldTrustUrl(setShouldTrustUrl[7]).AlertActions, obj1);
  const obj3 = { style: tmp.emphasis, children: null };
  const obj4 = { style: tmp.linkCalloutContainer, children: null };
  let str = "text-md/normal";
  if (isProtocol) {
    str = "text-md/semibold";
  }
  const obj5 = { variant: str, color: null, children: null };
  let str2 = "text-muted";
  if (isProtocol) {
    str2 = "text-default";
  }
  obj5[1] = str2;
  const items1 = [protocol, authorityPrefix];
  obj5[2] = items1;
  const items2 = [closure_5(shouldTrustUrl(setShouldTrustUrl[10]).Text, obj5), , ];
  let str3 = "text-md/semibold";
  if (isProtocol) {
    str3 = "text-md/normal";
  }
  const obj6 = { variant: str3, color: null, children: null };
  let str4 = "text-default";
  if (isProtocol) {
    str4 = "text-muted";
  }
  const obj7 = { start: true, end: true, label: null };
  const obj8 = { variant: "text-md/normal", children: null };
  obj6[1] = str4;
  obj6[2] = hostname;
  items2[1] = closure_4(shouldTrustUrl(setShouldTrustUrl[10]).Text, obj6);
  items2[2] = closure_4(shouldTrustUrl(setShouldTrustUrl[10]).Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl });
  obj8[1] = items2;
  obj4[1] = closure_5(shouldTrustUrl(setShouldTrustUrl[10]).Text, obj8);
  obj7[2] = closure_4(closure_3, obj4);
  obj3[1] = closure_4(shouldTrustUrl(setShouldTrustUrl[9]).FormRow, obj7);
  const items3 = [closure_4(closure_2, obj3), ];
  const obj9 = {
    start: true,
    end: true,
    selected: shouldTrustUrl,
    onPress() {
      return setShouldTrustUrl(!shouldTrustUrl);
    },
    label: null
  };
  const intl5 = tmp2(tmp3[6]).intl;
  const format = intl5.format;
  const t2 = tmp2(tmp3[6]).t;
  if (isProtocol) {
    const obj10 = { protocol: null };
    obj10[0] = protocol.replace(":", "");
    let formatResult1 = format(t2["haA+Xw"], obj10);
  } else {
    const obj11 = { domain: null };
    obj11[0] = hostname;
    formatResult1 = format(t2.ZgXDsI, obj11);
  }
  const obj12 = { spacing: 16, children: null };
  obj9[4] = closure_4(shouldTrustUrl(setShouldTrustUrl[10]).Text, { variant: "text-md/medium", children: formatResult1 });
  items3[1] = closure_4(shouldTrustUrl(setShouldTrustUrl[9]).FormCheckboxRow, obj9);
  obj12[1] = items3;
  obj[3] = closure_5(shouldTrustUrl(setShouldTrustUrl[8]).Stack, obj12);
  return closure_4(shouldTrustUrl(setShouldTrustUrl[5]).AlertModal, obj);
};