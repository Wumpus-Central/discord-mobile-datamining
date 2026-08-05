// discord_app/modules/changelog/useCurrentChangelog.tsx
import noop from "noop";
import _getSystemLocale from "_getSystemLocale";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import { ChangelogLoadState } from "CHANGELOG_MODAL_KEY";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
function useChangelog(changelogId, stateFromStores) {
  let defaultChangelog;
  let defaultLoadState;
  const _require = changelogId;
  let closure_1 = stateFromStores;
  let obj = _require(changelog[4]);
  const items = [handleUserSettingsProtoStoreChange];
  const items1 = [changelogId, stateFromStores];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let changelog = null;
    if (null != closure_0) {
      changelog = outer1_5.getChangelog(tmp, closure_1);
    }
    let changelog1 = null;
    if (null != closure_0) {
      changelog1 = outer1_5.getChangelog(tmp, "en-US");
    }
    let changelogLoadStatus = null != tmp;
    if (changelogLoadStatus) {
      changelogLoadStatus = outer1_5.getChangelogLoadStatus(tmp, "en-US");
    }
    const obj = { changelog, loadState: null, defaultChangelog: null, defaultLoadState: null };
    let changelogLoadStatus1 = null != tmp;
    if (changelogLoadStatus1) {
      changelogLoadStatus1 = outer1_5.getChangelogLoadStatus(tmp, closure_1);
    }
    obj[1] = changelogLoadStatus1;
    obj[2] = changelog1;
    obj[3] = changelogLoadStatus;
    return obj;
  }, items1);
  changelog = stateFromStoresObject.changelog;
  const loadState = stateFromStoresObject.loadState;
  const items2 = [changelogId, changelog, loadState, stateFromStores];
  ({ defaultChangelog, defaultLoadState } = stateFromStoresObject);
  const effect = loadState.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null == changelog;
    }
    if (tmp2) {
      tmp2 = loadState === outer1_6.NOT_LOADED;
    }
    if (tmp2) {
      changelog = stateFromStores(changelog[5]).fetchChangelog(closure_0, stateFromStores);
      const obj = stateFromStores(changelog[5]);
    }
  }, items2);
  if (null == changelogId) {
    obj = { id: null, changelog: null, loaded: false };
    obj[0] = changelogId;
    let obj1 = obj;
  } else {
    if (null == changelog) {
      if (loadState === ChangelogLoadState.LOADED_FAILURE) {
        obj = { id: null, changelog: null, loaded: null };
        obj[0] = changelogId;
        obj[1] = defaultChangelog;
        obj[2] = defaultLoadState !== tmp3.NOT_LOADED;
        obj1 = obj;
      }
    }
    obj1 = { id: null, changelog: null, loaded: null };
    obj1[0] = changelogId;
    obj1[1] = changelog;
    obj1[2] = loadState !== ChangelogLoadState.NOT_LOADED;
  }
  return obj1;
}
const result = require("handleUserSettingsProtoStoreChange").fileFinishedImporting("modules/changelog/useCurrentChangelog.tsx");

export { useChangelog };
export const useCurrentChangelog = function useCurrentChangelog() {
  let changelog;
  let changelog2;
  let loaded;
  let loaded2;
  let obj = defaultAreStatesEqual;
  const items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [handleUserSettingsProtoStoreChange];
  const stateFromStores1 = defaultAreStatesEqual.useStateFromStores(items1, () => handleUserSettingsProtoStoreChange.latestChangelogId());
  const obj2 = defaultAreStatesEqual;
  const tmp = require;
  const tmp4 = handleUserSettingsProtoStoreChange;
  const items2 = [handleUserSettingsProtoStoreChange];
  const stateFromStores2 = defaultAreStatesEqual.useStateFromStores(items2, () => handleUserSettingsProtoStoreChange.getConfig());
  let tmp7 = null != stateFromStores2;
  if (tmp7) {
    const _Object = Object;
    tmp7 = 0 === Object.keys(stateFromStores2).length;
  }
  let tmp9 = null != stateFromStores2;
  if (tmp9) {
    const _Object2 = Object;
    tmp9 = Object.keys(stateFromStores2).length > 0;
  }
  if (tmp9) {
    tmp9 = null == stateFromStores1;
  }
  const obj3 = defaultAreStatesEqual;
  const items3 = [tmp4];
  const stateFromStores3 = tmp(647).useStateFromStores(items3, () => handleUserSettingsProtoStoreChange.overrideId());
  const tmpResult = tmp(647);
  ({ changelog, loaded } = useChangelog(stateFromStores1, stateFromStores));
  const tmp12 = useChangelog(stateFromStores1, stateFromStores);
  ({ changelog: changelog2, loaded: loaded2 } = useChangelog(stateFromStores3, stateFromStores));
  if (null == stateFromStores3) {
    obj = { id: null, changelog: null, loaded: null, clientTooOld: null };
    obj[0] = stateFromStores1;
    obj[1] = changelog;
    obj[2] = tmp7 || loaded;
    obj[3] = tmp9;
  } else {
    obj = { id: null, changelog: null, loaded: null, clientTooOld: false };
    obj[0] = stateFromStores3;
    obj[1] = changelog2;
    obj[2] = loaded2;
  }
  return obj;
};