// === Module 10080: context ===

// Module 10080 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
let context = importAllResult.createContext(undefined);
const result = require("obj132").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContext.tsx");

export const InAppNotificationContext = context;
export const useInAppNotificationContext = function useInAppNotificationContext() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
    throw error;
  } else {
    return context;
  }
};