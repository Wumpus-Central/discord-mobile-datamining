// discord_app/modules/in_app_notifications/native/InAppNotificationContext.tsx
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let context = react.createContext(undefined);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
        throw error;
      } else {
        return context;
      }
    }
  : function () {
      context = react.useContext(context);
      if (null == context) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("useInAppNotificationContext must be used within provider of InAppNotificationContext");
        throw error;
      } else {
        return context;
      }
    };
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationContext.tsx");

export const InAppNotificationContext = context;
export const useInAppNotificationContext = tmp3;
