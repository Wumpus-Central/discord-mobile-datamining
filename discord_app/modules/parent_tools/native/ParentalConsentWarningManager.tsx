// discord_app/modules/parent_tools/native/ParentalConsentWarningManager.tsx
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import frozen from "../ParentalConsentWarningTypes.tsx";
import closure_4 from "../../action_sheet/native/ActionSheetStore.tsx";
import closure_5 from "../FamilyCenterStore.tsx";
import closure_6 from "../ParentalConsentWarningStore.tsx";
import items from "../FamilyCenterConstants.tsx";
import { AppStates } from "../../../Constants.tsx";

require = arg1;
function maybePresentModal(daysRemaining) {
  daysRemaining = undefined;
  if (daysRemaining != null) {
    daysRemaining = daysRemaining.daysRemaining;
  }
  let hasItem;
  if (daysRemaining != null) {
    const surfaces = daysRemaining.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(frozen.ParentalConsentWarningSurface.MODAL);
    }
  }
  let tmp5 = true === hasItem && null != daysRemaining;
  if (tmp5) {
    tmp5 = daysRemaining >= 0;
  }
  if (tmp5) {
    tmp5 = !closure_6.hasShownModalToday();
  }
  if (tmp5) {
    const _Object = Object;
    const values = Object.values(linkedUsers.getLinkedUsers());
    tmp5 = !values.some((link_status) => {
      let tmp = link_status.link_status === constants.ACTIVE;
      if (tmp) {
        tmp = link_status.link_type === constants2.PARENT;
      }
      return tmp;
    });
  }
  if (tmp5) {
    tmp5 = !open.isOpen();
  }
  if (tmp5) {
    const obj = { daysRemaining: null };
    obj[0] = daysRemaining;
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16776, dependencyMap.paths), "ParentalConsentWarningModal", obj);
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  }
}
({ UserLinkStatus: error, UserLinkType: closure_8 } = items);
initializeDefault;
let prototype = function ParentalConsentWarningManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    PARENTAL_CONSENT_WARNING_FETCH_SUCCESS(warning) {
      callback2(warning.warning);
    },
    POST_CONNECTION_OPEN() {
      const values = Object.values(linkedUsers.getLinkedUsers());
      closure_3 = values.some((link_status) => {
        let tmp = link_status.link_status === constants.ACTIVE;
        if (tmp) {
          tmp = link_status.link_type === constants2.PARENT;
        }
        return tmp;
      });
      callback(16778).maybeFetchWarning();
      if (!closure_6.shouldFetchToday()) {
        callback2(closure_6.getWarning());
      }
    },
    APP_STATE_UPDATE(state) {
      if (state.state === constants.ACTIVE) {
        callback(16778).maybeFetchWarning();
        if (!closure_6.shouldFetchToday()) {
          callback2(obj2.getWarning());
        }
        const obj = callback(16778);
        obj2 = closure_6;
      }
    },
    CURRENT_USER_UPDATE(user) {
      user = user.user;
      if (undefined !== user.linked_users) {
        const linked_users = user.linked_users;
        const someResult = linked_users.some((link_status) => {
          let tmp = link_status.link_status === constants.ACTIVE;
          if (tmp) {
            tmp = link_status.link_type === constants2.PARENT;
          }
          return tmp;
        });
        closure_3 = someResult;
        if (tmp) {
          if (someResult) {
            const warning = closure_6.getWarning();
            let hasItem;
            if (warning != null) {
              const surfaces = warning.surfaces;
              if (surfaces != null) {
                hasItem = surfaces.includes(callback(14293).ParentalConsentWarningSurface.BANNER);
              }
            }
            if (true === hasItem) {
              callback(16778).forceFetchWarning();
              const obj2 = callback(16778);
            }
          } else {
            callback(16778).forceFetchWarning();
            const obj = callback(16778);
          }
        }
        tmp = undefined !== closure_3 && closure_3 !== someResult;
      }
    },
    LOGOUT() {
      c3 = undefined;
      callback(16778).resetFetchState();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningManager.tsx");

export default prototype;