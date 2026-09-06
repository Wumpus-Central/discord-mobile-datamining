// === Module 10141: InAppNotificationContext ===

// Module 10141 (InAppNotificationContext)
import noop from "module_19" /* 19 */;

let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContext.tsx");

export const InAppNotificationContext = context;
export const useInAppNotificationContext = function useInAppNotificationContext() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
    throw error;
  } else {
    return context;
  }
};