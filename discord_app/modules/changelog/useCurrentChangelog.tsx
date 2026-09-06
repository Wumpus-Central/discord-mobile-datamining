// discord_app/modules/changelog/useCurrentChangelog.tsx
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import ChangeLogActionCreatorsDefault from "../../actions/ChangeLogActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import ChangelogStore from "ChangelogStore.tsx";

require = fn;
function useChangelog(changelogId, stateFromStores) {
  _require = changelogId;
  closure_1 = stateFromStores;
  let obj = require("useStateFromStores");
  const items = [ChangelogStore];
  const items1 = [changelogId, stateFromStores];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      changelog = null;
      if (null != closure_0) {
        changelog = ChangelogStore.getChangelog(tmp, closure_1);
      }
      let changelog1 = null;
      if (null != closure_0) {
        changelog1 = ChangelogStore.getChangelog(tmp, "en-US");
      }
      let changelogLoadStatus = null != tmp;
      if (changelogLoadStatus) {
        changelogLoadStatus = ChangelogStore.getChangelogLoadStatus(tmp, "en-US");
      }
      const obj = { changelog, loadState: null, defaultChangelog: null, defaultLoadState: null };
      let changelogLoadStatus1 = null != tmp;
      if (changelogLoadStatus1) {
        changelogLoadStatus1 = ChangelogStore.getChangelogLoadStatus(tmp, closure_1);
      }
      obj.loadState = changelogLoadStatus1;
      obj.defaultChangelog = changelog1;
      obj.defaultLoadState = changelogLoadStatus;
      return obj;
    },
    items1,
  );
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
    obj = { id: changelogId, changelog: null, loaded: false };
    let obj1 = obj;
  } else {
    if (null == changelog) {
      if (loadState === ChangelogLoadState.LOADED_FAILURE) {
        obj = { id: changelogId, changelog: defaultChangelog, loaded: defaultLoadState !== tmp3.NOT_LOADED };
        obj1 = obj;
      }
    }
    obj1 = { id: changelogId, changelog, loaded: loadState !== ChangelogLoadState.NOT_LOADED };
  }
  return obj1;
}
const ChangelogLoadState = fn(2010).ChangelogLoadState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/useCurrentChangelog.tsx");

export { useChangelog };
export const useCurrentChangelog = function useCurrentChangelog() {
  let obj = useStateFromStores;
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [ChangelogStore];
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => ChangelogStore.latestChangelogId());
  const tmp4 = ChangelogStore;
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
  const items3 = [tmp4];
  const stateFromStores3 = useStateFromStores.useStateFromStores(items3, () => ChangelogStore.overrideId());
  const tmpResult = useStateFromStores;
  ({ changelog, loaded } = useChangelog(stateFromStores1, stateFromStores));
  const tmp12 = useChangelog(stateFromStores1, stateFromStores);
  ({ changelog: changelog2, loaded: loaded2 } = useChangelog(stateFromStores3, stateFromStores));
  if (null == stateFromStores3) {
    obj = { id: stateFromStores1, changelog, loaded: tmp7 || loaded, clientTooOld: tmp9 };
  } else {
    obj = { id: stateFromStores3, changelog: changelog2, loaded: loaded2, clientTooOld: false };
  }
  return obj;
};
