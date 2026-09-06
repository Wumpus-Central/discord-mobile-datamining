// === Module 7517: AutomodAlert ===

// Module 7517 (AutomodAlert)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/AutomodAlert.tsx");

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
    const actions = tmp;
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