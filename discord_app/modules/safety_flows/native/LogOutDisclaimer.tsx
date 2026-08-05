// discord_app/modules/safety_flows/native/LogOutDisclaimer.tsx
import { jsx } from "jsxProd";
import { ModalDisclaimer } from "../../../design/components/Modal/native/ModalDisclaimer.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../SafetyFlows.messages.js";

const result = require("Text").fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  let obj = { children: null };
  obj = { variant: "text-xs/medium", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj = {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  };
  obj[1] = intl.format(messagesProxy["0DHxym"], obj);
  obj[0] = jsx(Text /* Text */.Text, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
  return jsx(ModalDisclaimer /* ModalDisclaimer */.ModalDisclaimer, {
    handleLogOut() {
      callback(table[5]).logout("safety_flows_enter_email_screen");
    }
  });
};