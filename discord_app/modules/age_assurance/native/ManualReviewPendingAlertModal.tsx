// discord_app/modules/age_assurance/native/ManualReviewPendingAlertModal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../ManualReview.messages.js";
import getAlertModalItemKey from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/age_assurance/native/ManualReviewPendingAlertModal.tsx");

export default function ManualReviewPendingAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.CNm4w6);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxyDefault["14Fje3"]);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t["NX+WJN"]);
  obj[0] = jsx(getAlertModalItemKey.AlertActionButton, { text: null }, "got-it");
  obj[2] = jsx(getAlertModalItemKey.AlertActions, { text: null });
  return jsx(getAlertModalItemKey.AlertModal, { text: null });
};