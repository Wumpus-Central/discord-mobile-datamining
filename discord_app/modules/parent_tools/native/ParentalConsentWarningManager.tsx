// discord_app/modules/parent_tools/native/ParentalConsentWarningManager.tsx
import Constants from "../../../Constants.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ParentalConsentWarningTypes from "../ParentalConsentWarningTypes.tsx";
import ParentalConsentWarningActionCreators from "../ParentalConsentWarningActionCreators.tsx";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";
import ParentalConsentWarningStore from "../ParentalConsentWarningStore.tsx";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;

let metroImportAll;
let metroImportDefault;
const f131238 = (link_status) =>
  link_status.link_status === constants.ACTIVE && link_status.link_type === constants2.PARENT;
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
  let tmp5 =
    true === hasItem &&
    null != daysRemaining &&
    daysRemaining >= 0 &&
    !ParentalConsentWarningStore.hasShownModalToday();
  if (tmp5) {
    const _Object = Object;
    const values = Object.values(FamilyCenterStore.getLinkedUsers());
    tmp5 = !values.some(f131238);
  }
  if (tmp5) {
    tmp5 = !ActionSheetStore.isOpen();
  }
  if (tmp5) {
    const obj = { daysRemaining };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(17600, dependencyMap.paths), "ParentalConsentWarningModal", obj);
  }
}
({ UserLinkStatus: metroImportDefault, UserLinkType: metroImportAll } = FamilyCenterConstants);
const AppStates = Constants.AppStates;
class ParentalConsentWarningManager extends AutomaticLifecycleManager {
  constructor() {
    let linkedUsers;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      PARENTAL_CONSENT_WARNING_FETCH_SUCCESS(warning) {
        maybePresentModal(warning.warning);
      },
      POST_CONNECTION_OPEN() {
        const values = Object.values(linkedUsers.getLinkedUsers());
        c3 = values.some(f131238);
        const obj2 = ParentalConsentWarningActionCreators;
        obj2.maybeFetchWarning();
        if (!ParentalConsentWarningStore.shouldFetchToday()) {
          maybePresentModal(ParentalConsentWarningStore.getWarning());
        }
      },
      APP_STATE_UPDATE(state) {
        if (state.state === constants.ACTIVE) {
          const obj = ParentalConsentWarningActionCreators;
          obj.maybeFetchWarning();
          if (!ParentalConsentWarningStore.shouldFetchToday()) {
            maybePresentModal(ParentalConsentWarningStore.getWarning());
          }
        }
      },
      CURRENT_USER_UPDATE(user) {
        let constants2;
        user = user.user;
        if (undefined !== user.linked_users) {
          const linked_users = user.linked_users;
          const someResult = linked_users.some(f131238);
          c3 = someResult;
          const tmp = undefined !== c3 && c3 !== someResult;
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
                const obj2 = ParentalConsentWarningActionCreators;
                obj2.forceFetchWarning();
              }
            } else {
              const obj = ParentalConsentWarningActionCreators;
              obj.forceFetchWarning();
            }
          }
        }
      },
      LOGOUT() {
        c3 = undefined;
        const obj = ParentalConsentWarningActionCreators;
        obj.resetFetchState();
      },
    };
    return applyArgumentsResult;
  }
}
const parentalConsentWarningManager = new ParentalConsentWarningManager();
const result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningManager.tsx");

export default parentalConsentWarningManager;
