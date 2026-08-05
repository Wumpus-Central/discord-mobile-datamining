// discord_app/modules/safety_flows/native/LogOutDisclaimer.tsx
import { jsx } from "jsxProd";

const result = require("Text").fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = { children: null };
  obj = { variant: "text-xs/medium", children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  };
  obj[1] = intl.format(require("../SafetyFlows.messages.js")["0DHxym"], obj);
  obj[0] = jsx(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
  return jsx(require("../../../design/components/Modal/native/ModalDisclaimer.native.tsx") /* ModalDisclaimer */.ModalDisclaimer, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
};