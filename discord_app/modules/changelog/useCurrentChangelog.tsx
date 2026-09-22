// === Module 8354: useCurrentChangelog ===

// Module 8354 (useCurrentChangelog)
import useStateFromStores from "useStateFromStores" /* 563 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 8355 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import ChangelogStore from "ChangelogStore" /* 4771 */;

require = fn;
function useChangelog(changelogId, stateFromStores) {
  _require = changelogId;
  closure_1 = stateFromStores;
  const items = [ChangelogStore];
  const items1 = [changelogId, stateFromStores];
  const stateFromStoresObject = require("useStateFromStores").useStateFromStoresObject(items, () => {
    changelog = null;
    if (null != closure_0) {
      changelog = ChangelogStore.getChangelog(closure_0, closure_1);
    }
    let changelog1 = null;
    if (null != closure_0) {
      changelog1 = ChangelogStore.getChangelog(closure_0, "en-US");
    }
    let changelogLoadStatus = null != closure_0;
    if (changelogLoadStatus) {
      changelogLoadStatus = ChangelogStore.getChangelogLoadStatus(closure_0, "en-US");
    }
    const obj = { changelog, loadState: null, defaultChangelog: null, defaultLoadState: null };
    let changelogLoadStatus1 = null != closure_0;
    if (changelogLoadStatus1) {
      changelogLoadStatus1 = ChangelogStore.getChangelogLoadStatus(closure_0, closure_1);
    }
    obj.loadState = changelogLoadStatus1;
    obj.defaultChangelog = changelog1;
    obj.defaultLoadState = changelogLoadStatus;
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
      tmp2 = loadState === ChangelogLoadState.NOT_LOADED;
    }
    if (tmp2) {
      changelog = ChangeLogActionCreatorsDefault.fetchChangelog(closure_0, closure_1);
    }
  }, items2);
  if (null == changelogId) {
    const obj2 = { id: changelogId, changelog: null, loaded: false };
    let obj4 = obj2;
  } else {
    if (null == changelog) {
      if (loadState === ChangelogLoadState.LOADED_FAILURE) {
        const obj3 = { id: changelogId, changelog: defaultChangelog, loaded: defaultLoadState !== tmp3.NOT_LOADED };
        obj4 = obj3;
      }
    }
    obj4 = { id: changelogId, changelog, loaded: loadState !== ChangelogLoadState.NOT_LOADED };
  }
  return obj4;
}
const ChangelogLoadState = fn(2095).ChangelogLoadState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/useCurrentChangelog.tsx");

export { useChangelog };
export const useCurrentChangelog = function useCurrentChangelog() {
  const items = [LocaleStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => locale.locale);
  const items1 = [ChangelogStore];
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => ChangelogStore.latestChangelogId());
  const items2 = [ChangelogStore];
  const stateFromStores2 = useStateFromStores.useStateFromStores(items2, () => ChangelogStore.getConfig());
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
  const items3 = [ChangelogStore];
  const stateFromStores3 = useStateFromStores.useStateFromStores(items3, () => ChangelogStore.overrideId());
  const tmpResult = useStateFromStores;
  ({ changelog, loaded } = useChangelog(stateFromStores1, stateFromStores));
  const tmp12 = useChangelog(stateFromStores1, stateFromStores);
  ({ changelog: changelog2, loaded: loaded2 } = useChangelog(stateFromStores3, stateFromStores));
  if (null == stateFromStores3) {
    const obj4 = { id: stateFromStores1, changelog, loaded: tmp7 || loaded, clientTooOld: tmp9 };
    let obj5 = obj4;
  } else {
    obj5 = { id: stateFromStores3, changelog: changelog2, loaded: loaded2, clientTooOld: false };
  }
  return obj5;
};