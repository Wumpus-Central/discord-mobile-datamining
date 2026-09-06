// === Module 17461: ParentalConsentWarningManager ===

// Module 17461 (ParentalConsentWarningManager)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ParentalConsentWarningTypes from "ParentalConsentWarningTypes" /* 14868 */;
import ParentalConsentWarningActionCreators from "ParentalConsentWarningActionCreators" /* 17464 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 14867 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
function maybePresentModal(daysRemaining) {
  daysRemaining = undefined;
  if (daysRemaining != null) {
    daysRemaining = daysRemaining.daysRemaining;
  }
  let hasItem;
  if (daysRemaining != null) {
    const surfaces = daysRemaining.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.MODAL);
    }
  }
  let tmp5 = true === hasItem && null != daysRemaining;
  if (tmp5) {
    tmp5 = daysRemaining >= 0;
  }
  if (tmp5) {
    tmp5 = !ParentalConsentWarningStore.hasShownModalToday();
  }
  if (tmp5) {
    const _Object = Object;
    const values = Object.values(FamilyCenterStore.getLinkedUsers());
    tmp5 = !values.some((link_status) => {
      let tmp = link_status.link_status === constants.ACTIVE;
      if (tmp) {
        tmp = link_status.link_type === constants2.PARENT;
      }
      return tmp;
    });
  }
  if (tmp5) {
    tmp5 = !ActionSheetStore.isOpen();
  }
  if (tmp5) {
    const obj = { daysRemaining };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17462, dependencyMap.paths), "ParentalConsentWarningModal", obj);
  }
}
const FamilyCenterConstants = fn(7538);
({ UserLinkStatus: closure_7, UserLinkType: closure_8 } = FamilyCenterConstants);
const AppStates = fn(1074).AppStates;
let prototype = function ParentalConsentWarningManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    PARENTAL_CONSENT_WARNING_FETCH_SUCCESS(warning) {
      maybePresentModal(warning.warning);
    },
    POST_CONNECTION_OPEN() {
      const values = Object.values(linkedUsers.getLinkedUsers());
      c3 = values.some((link_status) => {
        let tmp = link_status.link_status === constants.ACTIVE;
        if (tmp) {
          tmp = link_status.link_type === constants2.PARENT;
        }
        return tmp;
      });
      ParentalConsentWarningActionCreators.maybeFetchWarning();
      if (!ParentalConsentWarningStore.shouldFetchToday()) {
        maybePresentModal(ParentalConsentWarningStore.getWarning());
      }
    },
    APP_STATE_UPDATE(state) {
      if (state.state === constants.ACTIVE) {
        ParentalConsentWarningActionCreators.maybeFetchWarning();
        if (!ParentalConsentWarningStore.shouldFetchToday()) {
          maybePresentModal(obj2.getWarning());
        }
        obj2 = ParentalConsentWarningStore;
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
        c3 = someResult;
        if (tmp) {
          if (someResult) {
            const warning = ParentalConsentWarningStore.getWarning();
            let hasItem;
            if (warning != null) {
              const surfaces = warning.surfaces;
              if (surfaces != null) {
                hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
              }
            }
            if (true === hasItem) {
              ParentalConsentWarningActionCreators.forceFetchWarning();
            }
          } else {
            ParentalConsentWarningActionCreators.forceFetchWarning();
          }
        }
        tmp = undefined !== c3 && c3 !== someResult;
      }
    },
    LOGOUT() {
      c3 = undefined;
      ParentalConsentWarningActionCreators.resetFetchState();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningManager.tsx");

export default prototype;