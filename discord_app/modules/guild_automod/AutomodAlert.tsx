// === Module 5246: AutomodAlertActionType ===

// Module 5246 (AutomodAlertActionType)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_automod/AutomodAlert.tsx");

export const AutomodAlertActionType = { SET_COMPLETED: 1, [1]: "SET_COMPLETED", UNSET_COMPLETED: 2, [2]: "UNSET_COMPLETED", DELETE_USER_MESSAGE: 3, [3]: "DELETE_USER_MESSAGE", SUBMIT_FEEDBACK: 4, [4]: "SUBMIT_FEEDBACK" };
export const parseAlertActionsExecution = function parseAlertActionsExecution(arg0) {
  if (null == arg0) {
    return null;
  } else {
    const tmp = (function safeJsonParse(arg0) {
      if (null == arg0) {
        return null;
      } else {
        try {
          const _JSON = JSON;
          return JSON.parse(arg0);
        } catch (err) {
          return tmp;
        }
      }
    })(arg0);
    closure_0 = tmp;
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = null;
      if (null != tmp.actions) {
        const _Object = Object;
        const keys = Object.keys(tmp.actions);
        const item = keys.forEach((actionType) => {
          actions.actions[actionType].actionType = actionType;
        });
        tmp2 = tmp;
      }
    }
    return tmp2;
  }
};