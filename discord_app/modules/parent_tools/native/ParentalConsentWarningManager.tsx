// discord_app/modules/parent_tools/native/ParentalConsentWarningManager.tsx
import setContent from "setContent";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import initialize from "initialize";
import items from "items";
import { AppStates } from "ME";
import "initialize";
import { asyncRequireImpl } from "../../../../_runtime/01988_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { frozen } from "../ParentalConsentWarningTypes.tsx";

let error;
let metroImportAll;
const require = arg1;
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
    tmp5 = !initialize.hasShownModalToday();
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
    ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(16437, dependencyMap.paths), "ParentalConsentWarningModal", obj);
    const obj2 = ACTION_SHEET_HEIGHT_HALF;
  }
}
({ UserLinkStatus: error, UserLinkType: metroImportAll } = items);
let prototype = function ParentalConsentWarningManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    PARENTAL_CONSENT_WARNING_FETCH_SUCCESS(warning) {
      callback2(warning.warning);
    },
    POST_CONNECTION_OPEN() {
      const values = Object.values(linkedUsers.getLinkedUsers());
      let closure_3 = values.some((link_status) => {
        let tmp = link_status.link_status === constants.ACTIVE;
        if (tmp) {
          tmp = link_status.link_type === constants2.PARENT;
        }
        return tmp;
      });
      callback(16439).maybeFetchWarning();
      if (!initialize.shouldFetchToday()) {
        callback2(initialize.getWarning());
      }
    },
    APP_STATE_UPDATE(state) {
      if (state.state === constants.ACTIVE) {
        callback(16439).maybeFetchWarning();
        if (!initialize.shouldFetchToday()) {
          callback2(obj2.getWarning());
        }
        const obj = callback(16439);
        obj2 = initialize;
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
        let closure_3 = someResult;
        if (tmp) {
          if (someResult) {
            const warning = initialize.getWarning();
            let hasItem;
            if (warning != null) {
              const surfaces = warning.surfaces;
              if (surfaces != null) {
                hasItem = surfaces.includes(callback(14029).ParentalConsentWarningSurface.BANNER);
              }
            }
            if (true === hasItem) {
              callback(16439).forceFetchWarning();
              const obj2 = callback(16439);
            }
          } else {
            callback(16439).forceFetchWarning();
            const obj = callback(16439);
          }
        }
        tmp = undefined !== closure_3 && closure_3 !== someResult;
      }
    },
    LOGOUT() {
      let c3;
      callback(16439).resetFetchState();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = require("initialize").fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningManager.tsx");

export default prototype;