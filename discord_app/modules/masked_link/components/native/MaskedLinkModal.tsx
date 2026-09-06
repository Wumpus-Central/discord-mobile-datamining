// discord_app/modules/masked_link/components/native/MaskedLinkModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import SharedStateUtils from "../../SharedStateUtils.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { linkCalloutContainer: { maxHeight: 250 }, emphasis: null };
obj = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.emphasis = obj;
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/masked_link/components/native/MaskedLinkModal.tsx");

export default function MaskedLinkModal(isProtocol) {
  isProtocol = isProtocol.isProtocol;
  shouldTrustUrl = undefined;
  ({ url, trustUrl, onConfirm, onCancel } = isProtocol);
  const tmp = closure_6();
  let obj = SharedStateUtils;
  const modalState = obj.useModalState({ url, trustUrl, onConfirm, onCancel });
  ({ protocol, hostname, shouldTrustUrl } = modalState);
  const setShouldTrustUrl = modalState.setShouldTrustUrl;
  ({ authorityPrefix, theRestOfTheUrl, handleConfirm, handleCancel } = modalState);
  obj = { title: null, content: null, actions: null, extraContent: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["3w1QGl"]);
  const intl2 = util.intl;
  if (isProtocol) {
    let formatResult = intl2.format(tmp2(1114).t.aCYv1z, {});
  } else {
    formatResult = intl2.string(tmp2(1114).t.soRxRe);
  }
  obj.content = formatResult;
  obj = { variant: "primary", onPress: handleConfirm, text: null };
  const intl3 = tmp2(1114).intl;
  const string = intl3.string;
  const t = tmp2(1114).t;
  if (isProtocol) {
    let stringResult = string(t.COq6kk);
  } else {
    stringResult = string(t.NcJfJG);
  }
  const obj1 = { children: null };
  obj.text = stringResult;
  const items = [React4(AlertModal.AlertActionButton, obj, "confirm")];
  const obj2 = { onPress: handleCancel, variant: "secondary", text: null };
  const intl4 = tmp2(1114).intl;
  obj2.text = intl4.string(util.t["/g10LC"]);
  items[1] = React4(AlertModal.AlertActionButton, obj2, "cancel");
  obj1.children = items;
  obj.actions = hasOwnProperty(AlertModal.AlertActions, obj1);
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
  obj5.color = str2;
  const items1 = [protocol, authorityPrefix];
  obj5.children = items1;
  const items2 = [hasOwnProperty(Text_Text.Text, obj5), ,];
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
  obj6.color = str4;
  obj6.children = hostname;
  items2[1] = React4(Text_Text.Text, obj6);
  items2[2] = React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl });
  obj8.children = items2;
  obj4.children = hasOwnProperty(Text_Text.Text, obj8);
  obj7.label = React4(React3, obj4);
  obj3.children = React4(Form.FormRow, obj7);
  const items3 = [React4(React2, obj3)];
  const obj9 = {
    start: true,
    end: true,
    selected: shouldTrustUrl,
    onPress() {
      return setShouldTrustUrl(!shouldTrustUrl);
    },
    label: null,
  };
  const intl5 = tmp2(1114).intl;
  const format = intl5.format;
  const t2 = tmp2(1114).t;
  if (isProtocol) {
    const obj10 = { protocol: protocol.replace(":", "") };
    let formatResult1 = format(t2["haA+Xw"], obj10);
  } else {
    const obj11 = { domain: hostname };
    formatResult1 = format(t2.ZgXDsI, obj11);
  }
  const obj12 = { spacing: 16, children: null };
  obj9.label = React4(Text_Text.Text, { variant: "text-md/medium", children: formatResult1 });
  items3[1] = React4(Form.FormCheckboxRow, obj9);
  obj12.children = items3;
  obj.extraContent = hasOwnProperty(Stack_Stack.Stack, obj12);
  return React4(AlertModal.AlertModal, obj);
}
