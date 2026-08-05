// discord_app/modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../AgeAssurance.messages.js").gUqXQN);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../AgeAssurance.messages.js").yBHwMy);
  obj = { children: null };
  obj = { text: null };
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["NX+WJN"]);
  obj[0] = jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActionButton, { text: null }, "got-it");
  obj[2] = jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(require("../../../design/components/AlertModal/native/AlertModal.native.tsx") /* getAlertModalItemKey */.AlertModal, { text: null });
};