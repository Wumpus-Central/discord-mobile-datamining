// === Module 7729: AdDataUtils ===

// Module 7729 (AdDataUtils)
import AdUserActionCreators from "AdUserActionCreators" /* 7732 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AdUserStore from "AdUserStore" /* 7730 */;

require = fn;
const DEFAULT_TIMEOUT_MS = fn(7731).DEFAULT_TIMEOUT_MS;
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/utils/AdDataUtils.android.tsx");

export const getAdUser = function getAdUser(questContentName) {
  let adUser = AdUserStore.adUser;
  if (null == adUser) {
    if (!AdUserStore.hasFetchFailed) {
      if (!AdUserStore.isFetching) {
        adUser = AdUserActionCreators.fetchAdUser(questContentName);
      }
      let resolved = new Promise((arg0) => {
        closure_0 = arg0;
        function handleUpdate() {
          if (tmp) {
            if (!c1) {
              c1 = true;
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_2);
              obj.removeChangeListener(handleUpdate);
              closure_0(tmp2);
            }
          }
        }
        c1 = false;
        const timeout = setTimeout(() => {
          if (!c1) {
            c1 = true;
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            AdUserStore.removeChangeListener(handleUpdate);
            closure_0(null);
          }
        }, closure_5);
        closure_4.addChangeListener(handleUpdate);
      });
    }
    return resolved;
  }
  resolved = Promise.resolve(adUser);
};
export const useAdUser = function useAdUser(profile_badge) {
  const tmp = _slicedToArray(noop.useState(AdUserStore.adUser), 2);
  dependencyMap = tmp[1];
  const items = [profile_badge];
  const effect = noop.useEffect(() => {
    function handleStoreChange() {
      if (tmp2) {
        dependencyMap(tmp.adUser);
      }
    }
    let hasFetchFailed = null != AdUserStore.adUser;
    if (!hasFetchFailed) {
      hasFetchFailed = AdUserStore.isFetching;
    }
    if (!hasFetchFailed) {
      hasFetchFailed = AdUserStore.hasFetchFailed;
    }
    if (!hasFetchFailed) {
      const adUser = profile_badge(dependencyMap[4]).fetchAdUser(handleStoreChange);
      const obj2 = profile_badge(dependencyMap[4]);
    }
    AdUserStore.addChangeListener(handleStoreChange);
    return () => AdUserStore.removeChangeListener(handleStoreChange);
  }, items);
  return tmp[0];
};