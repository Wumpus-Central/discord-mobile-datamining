// === Module 17083: useUserProfileEditForm ===

// Module 17083 (useUserProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8542 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import WidgetStore from "WidgetStore" /* 12091 */;
import UserStore from "UserStore" /* 1388 */;

const require = fn;
let closure_3 = ["bannerOriginalMd5"];
const FormStates = fn(1072).FormStates;
const HexagonCampaignPerk = fn(5331).HexagonCampaignPerk;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  items = [UserProfileSettingsStore];
  const stateFromStoresObject = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]).useStateFromStoresObject(items, () => ({ pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  const tmp = pendingChanges;
  const tmp2 = isWaitingForHexagonCampaignEnrollment;
  const items1 = [UserProfileStore, UserProfileSettingsStore, WidgetStore];
  let stateFromStores = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]).useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    if (!isSubmitting) {
      isSubmitting = isSubmitting2.isSubmitting;
    }
    return isSubmitting;
  });
  [isWaitingForHexagonCampaignEnrollment, closure_3] = noop.useState(false);
  const effect = noop.useEffect(() => pendingChanges(first[11]).resetAllPending, []);
  const items2 = [stateFromStores, isWaitingForHexagonCampaignEnrollment];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c13 === 2) {
      c13 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      c13 = 2;
    }
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  const obj3 = { hasAvatarDecorationEdits: undefined !== pendingChanges.pendingAvatarDecoration, errors, isSubmitting: null, isWaitingForHexagonCampaignEnrollment: null, handleSubmit: null, handleSubmitAvatarDecoration: null, resetPending: null };
  const callback1 = noop.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp2;
            closure_128_0 = undefined;
            if (stateFromStores) {
              c3 = 3;
            } else {
              const obj5 = { avatarDecoration: pendingChanges.pendingAvatarDecoration };
              dependencyMap = 1;
              c3 = 1;
              const obj6 = { value: tmp5(7800).saveProfileAndAccountChanges(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          let ok;
          if (closure_128_0 != null) {
            ok = closure_128_0.ok;
          }
          if (ok) {
            const result = tmp5(7800).resetPendingAccountChanges();
            const obj = tmp5(7800);
          }
        }
        c3 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  }), items3);
  if (!stateFromStores) {
    stateFromStores = isWaitingForHexagonCampaignEnrollment;
  }
  obj3.isSubmitting = stateFromStores;
  obj3.isWaitingForHexagonCampaignEnrollment = isWaitingForHexagonCampaignEnrollment;
  obj3.handleSubmit = callback;
  obj3.handleSubmitAvatarDecoration = callback1;
  obj3.resetPending = tmp(tmp2[11]).resetAllPending;
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
};