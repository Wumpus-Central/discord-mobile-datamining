import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../AgeAssurance.messages.js";
// discord_app/modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(messagesProxy.gUqXQN);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(messagesProxy.yBHwMy);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t["NX+WJN"]);
  obj[0] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, { text: null }, "got-it");
  obj[2] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, { text: null });
};