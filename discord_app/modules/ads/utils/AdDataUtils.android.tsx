// === Module 7474: getAdUser ===

// Module 7474 (getAdUser)
import _fetchAdUser from "_fetchAdUser" /* 7477 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "adUser" /* 7475 */;
import { DEFAULT_TIMEOUT_MS } from "DEFAULT_TIMEOUT_MS" /* 7476 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/ads/utils/AdDataUtils.android.tsx");

export const getAdUser = function getAdUser(questContentName) {
  let adUser = closure_4.adUser;
  if (null == adUser) {
    if (!closure_4.hasFetchFailed) {
      if (!closure_4.isFetching) {
        adUser = _fetchAdUser.fetchAdUser(questContentName);
        const obj = _fetchAdUser;
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
              callback(tmp2);
            }
          }
        }
        c1 = false;
        const timeout = setTimeout(() => {
          if (!c1) {
            c1 = true;
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            closure_1_4.removeChangeListener(handleUpdate);
            callback(null);
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
  closure_0 = profile_badge;
  const tmp = callback(React.useState(closure_4.adUser), 2);
  closure_1 = tmp[1];
  const items = [profile_badge];
  const effect = React.useEffect(() => {
    function handleStoreChange() {
      if (tmp2) {
        callback(tmp.adUser);
      }
    }
    let hasFetchFailed = null != closure_1_4.adUser;
    if (!hasFetchFailed) {
      hasFetchFailed = closure_1_4.isFetching;
    }
    if (!hasFetchFailed) {
      hasFetchFailed = closure_1_4.hasFetchFailed;
    }
    if (!hasFetchFailed) {
      const adUser = profile_badge(table[4]).fetchAdUser(handleStoreChange);
      const obj2 = profile_badge(table[4]);
    }
    closure_1_4.addChangeListener(handleStoreChange);
    return () => closure_2_4.removeChangeListener(handleStoreChange);
  }, items);
  return tmp[0];
};