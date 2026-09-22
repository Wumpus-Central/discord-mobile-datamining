// === Module 13252: MaskedLinkModal ===

// Module 13252 (MaskedLinkModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4753 */;
import AlertModal from "AlertModal" /* 5115 */;
import Stack_Stack from "Stack/Stack" /* 5185 */;
import Form from "Form" /* 8876 */;
import SharedStateUtils from "SharedStateUtils" /* 13249 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4757 */;
import size from "module_2" /* 2 */;

({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const obj = { linkCalloutContainer: { maxHeight: 250 }, emphasis: { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/masked_link/components/native/MaskedLinkModal.tsx");

export default function MaskedLinkModal(isProtocol) {
  isProtocol = isProtocol.isProtocol;
  shouldTrustUrl = undefined;
  ({ url, trustUrl, onConfirm, onCancel } = isProtocol);
  const tmp = closure_6();
  const modalState = SharedStateUtils.useModalState({ url, trustUrl, onConfirm, onCancel });
  ({ protocol, hostname, shouldTrustUrl } = modalState);
  const setShouldTrustUrl = modalState.setShouldTrustUrl;
  ({ authorityPrefix, theRestOfTheUrl, handleConfirm, handleCancel } = modalState);
  const obj2 = { title: null, content: null, actions: null, extraContent: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["3w1QGl"]);
  const intl2 = util.intl;
  if (isProtocol) {
    let formatResult = intl2.format(util.t.aCYv1z, {});
  } else {
    formatResult = intl2.string(util.t.soRxRe);
  }
  obj2.content = formatResult;
  const obj3 = { variant: "primary", onPress: handleConfirm, text: null };
  const intl3 = util.intl;
  const string = intl3.string;
  const t = util.t;
  if (isProtocol) {
    let stringResult = string(t.COq6kk);
  } else {
    stringResult = string(t.NcJfJG);
  }
  const obj4 = { children: null };
  obj3.text = stringResult;
  const items = [React4(AlertModal.AlertActionButton, obj3, "confirm"), ];
  const obj5 = { onPress: handleCancel, variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["/g10LC"]);
  items[1] = React4(AlertModal.AlertActionButton, obj5, "cancel");
  obj4.children = items;
  obj2.actions = hasOwnProperty(AlertModal.AlertActions, obj4);
  const obj6 = { style: tmp.emphasis, children: null };
  const obj7 = { style: tmp.linkCalloutContainer, children: null };
  let str = "text-md/normal";
  if (isProtocol) {
    str = "text-md/semibold";
  }
  const obj8 = { variant: str, color: null, children: null };
  let str2 = "text-muted";
  if (isProtocol) {
    str2 = "text-default";
  }
  obj8.color = str2;
  const items1 = [protocol, authorityPrefix];
  obj8.children = items1;
  const items2 = [hasOwnProperty(Text_Text.Text, obj8), , ];
  let str3 = "text-md/semibold";
  if (isProtocol) {
    str3 = "text-md/normal";
  }
  const obj9 = { variant: str3, color: null, children: null };
  let str4 = "text-default";
  if (isProtocol) {
    str4 = "text-muted";
  }
  const obj10 = { start: true, end: true, label: null };
  const obj11 = { variant: "text-md/normal", children: null };
  obj9.color = str4;
  obj9.children = hostname;
  items2[1] = React4(Text_Text.Text, obj9);
  items2[2] = React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl });
  obj11.children = items2;
  obj7.children = hasOwnProperty(Text_Text.Text, obj11);
  obj10.label = React4(React3, obj7);
  obj6.children = React4(Form.FormRow, obj10);
  const items3 = [React4(React2, obj6), ];
  const obj12 = {
    start: true,
    end: true,
    selected: shouldTrustUrl,
    onPress() {
      return setShouldTrustUrl(!shouldTrustUrl);
    },
    label: null
  };
  const intl5 = util.intl;
  const format = intl5.format;
  const t2 = util.t;
  if (isProtocol) {
    const obj13 = { protocol: protocol.replace(":", "") };
    let formatResult1 = format(t2["haA+Xw"], obj13);
  } else {
    const obj14 = { domain: hostname };
    formatResult1 = format(t2.ZgXDsI, obj14);
  }
  const obj15 = { spacing: 16, children: null };
  obj12.label = React4(Text_Text.Text, { variant: "text-md/medium", children: formatResult1 });
  items3[1] = React4(Form.FormCheckboxRow, obj12);
  obj15.children = items3;
  obj2.extraContent = hasOwnProperty(Stack_Stack.Stack, obj15);
  return React4(AlertModal.AlertModal, obj2);
};