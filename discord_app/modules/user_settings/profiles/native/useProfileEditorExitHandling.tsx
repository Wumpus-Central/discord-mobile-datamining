// === Module 15867: useProfileEditorExitHandling ===

// Module 15867 (useProfileEditorExitHandling)
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7212 */;
import maybeShowUnsavedChangesAlertDefault from "maybeShowUnsavedChangesAlert" /* 9660 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 14397 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9296 */;
import WidgetStore from "WidgetStore" /* 14390 */;

require = fn;
function discardPendingChanges() {
  UserSettingsAccountActionCreators.resetAllPending();
  WidgetActionCreatorsDefault.clearPendingWidgets();
}
let closure_8 = fn(1081).ProfileCustomizationSubsection;
const RootNavigatorScreen = fn(9288).RootNavigatorScreen;
const UserProfileSections = fn(6011).UserProfileSections;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useProfileEditorExitHandling.tsx");

export default function useProfileEditorExitHandling(location) {
  const _location = location.location;
  let hasUnsavedChanges = location.hasUnsavedChanges;
  ({ isSubmitting, shouldBlockExit } = location);
  let first;
  let onSave;
  const nativeStackNavigation = _location(shouldBlockExit[12]).useNativeStackNavigation();
  const tmp2 = nativeStackNavigation(first.useState(false), 2);
  first = tmp2[0];
  closure_6 = tmp2[1];
  const effect = first.useEffect(() => () => {
    const result = _location(7212).resetAndCloseUserProfileForm();
    closure_1_6.resetState();
    const obj = _location(7212);
    hasUnsavedChanges(14397).clearPendingWidgets();
  }, []);
  items = [onSave];
  onSave = first.useCallback(onSave(function*() {
    closure_0 = tmp2;
    closure_128_0 = (function hasPendingBoardChangesOnBoardTab() {
      state = state.getState();
      let hasUnsavedChangesResult = state.subsection === constants.USER_PROFILE;
      if (hasUnsavedChangesResult) {
        hasUnsavedChangesResult = "board" === tmp2;
      }
      if (hasUnsavedChangesResult) {
        hasUnsavedChangesResult = closure_1_7.hasUnsavedChanges();
      }
      return hasUnsavedChangesResult;
    })();
    yield onSave();
    closure_128_1 = value;
    let tmp8 = true === closure_128_1;
    if (tmp8) {
      tmp8 = closure_128_0;
    }
    if (tmp8) {
      (function selectYouScreenBoardTab() {
        const rootNavigationRef = closure_1_0(dependencyMap[10]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getRootState().routes;
            const found = routes.find((name) => name.name === constants.YOU);
            if (null != found) {
              const obj2 = {};
              const CommonActions = closure_1_0(dependencyMap[11]).CommonActions;
              const obj3 = { initialTab: constants2.WIDGETS };
              const merged = Object.assign(CommonActions.setParams(obj3));
              obj2.source = found.key;
              rootNavigationRef.dispatch(obj2);
            }
          }
        }
        const obj = closure_1_0(dependencyMap[10]);
      })();
    }
    return closure_128_1;
  }), items);
  const items1 = [onSave];
  const items2 = [_location, hasUnsavedChanges, onSave];
  const saveAndClose = first.useCallback(onSave(function*() {
    closure_1 = tmp5;
    closure_0 = tmp2;
    yield callback();
    closure_128_0 = value;
    if (false !== closure_128_0) {
      closure_129_6(true);
    }
    return closure_128_0;
  }), items1);
  const guardUnsavedChanges = first.useCallback((onContinue) => {
    maybeShowUnsavedChangesAlertDefault({ location: _location, hasUnsavedChanges, onReset: discardPendingChanges, onContinue, onSave });
  }, items2);
  let obj = _location(shouldBlockExit[12]);
  let obj2 = first;
  if (hasUnsavedChanges) {
    let tmp8 = !isSubmitting;
    if (isSubmitting) {
      tmp8 = shouldBlockExit;
    }
    hasUnsavedChanges = tmp8;
  }
  if (hasUnsavedChanges) {
    hasUnsavedChanges = !first;
  }
  const preventRemove = _location(shouldBlockExit[11]).usePreventRemove(hasUnsavedChanges, (data) => {
    const action = data.data.action;
    if (!shouldBlockExit) {
      const obj = {
        location: action,
        hasUnsavedChanges,
        onReset,
        onContinue() {
            return nativeStackNavigation.dispatch(action);
          },
        onSave
      };
      hasUnsavedChanges(shouldBlockExit[13])(obj);
    }
  });
  const items3 = [first, nativeStackNavigation];
  const effect1 = obj2.useEffect(() => {
    if (first) {
      nativeStackNavigation.goBack();
    }
  }, items3);
  return { saveAndClose, guardUnsavedChanges };
};