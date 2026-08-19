// === Module 5241: AutomodAlertActionType ===

// Module 5241 (AutomodAlertActionType)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/guild_automod/AutomodAlert.tsx");

export const AutomodAlertActionType = { SET_COMPLETED: 1, [1]: "SET_COMPLETED", UNSET_COMPLETED: 2, [2]: "UNSET_COMPLETED", DELETE_USER_MESSAGE: 3, [3]: "DELETE_USER_MESSAGE", SUBMIT_FEEDBACK: 4, [4]: "SUBMIT_FEEDBACK" };
export const parseAlertActionsExecution = function parseAlertActionsExecution(rawValue1) {
  if (null == rawValue1) {
    return null;
  } else {
    const tmp = (function safeJsonParse(rawValue1) {
      if (null == rawValue1) {
        return null;
      } else {
        try {
          const _JSON = JSON;
          return JSON.parse(rawValue1);
        } catch (err) {
          return tmp;
        }
      }
    })(rawValue1);
    closure_0 = tmp;
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = null;
      if (null != tmp.actions) {
        const _Object = Object;
        const keys = Object.keys(tmp.actions);
        const item = keys.forEach((item, index) => {
          actions.actions[item].actionType = item;
        });
        tmp2 = tmp;
      }
    }
    return tmp2;
  }
};