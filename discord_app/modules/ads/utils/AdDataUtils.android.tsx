import _slicedToArray from "_slicedToArray";
import noop from "noop";
import adUser from "adUser";
import { DEFAULT_TIMEOUT_MS } from "DEFAULT_TIMEOUT_MS";

const require = arg1;
const result = require("adUser").fileFinishedImporting("modules/ads/utils/AdDataUtils.android.tsx");

export const getAdUser = function getAdUser(questContentName) {
  let adUser = adUser.adUser;
  if (null == adUser) {
    if (!adUser.hasFetchFailed) {
      if (!adUser.isFetching) {
        adUser = require(7112) /* _fetchAdUser */.fetchAdUser(questContentName);
        const obj = require(7112) /* _fetchAdUser */;
      }
      let resolved = new Promise((arg0) => {
        let closure_0 = arg0;
        function handleUpdate() {
          if (tmp) {
            if (!c1) {
              c1 = true;
              const _clearTimeout = clearTimeout;
              clearTimeout(_slicedToArray);
              obj.removeChangeListener(handleUpdate);
              callback(tmp2);
            }
          }
        }
        let c1 = false;
        const timeout = setTimeout(() => {
          if (!c1) {
            c1 = true;
            const _clearTimeout = clearTimeout;
            clearTimeout(_slicedToArray);
            outer1_4.removeChangeListener(handleUpdate);
            callback(null);
          }
        }, closure_5);
        adUser.addChangeListener(handleUpdate);
      });
    }
    return resolved;
  }
  resolved = Promise.resolve(adUser);
};
export const useAdUser = function useAdUser(profile_badge) {
  let closure_0 = profile_badge;
  const tmp = callback(React.useState(adUser.adUser), 2);
  let closure_1 = tmp[1];
  const items = [profile_badge];
  const effect = React.useEffect(() => {
    function handleStoreChange() {
      if (tmp2) {
        callback(tmp.adUser);
      }
    }
    let hasFetchFailed = null != outer1_4.adUser;
    if (!hasFetchFailed) {
      hasFetchFailed = outer1_4.isFetching;
    }
    if (!hasFetchFailed) {
      hasFetchFailed = outer1_4.hasFetchFailed;
    }
    if (!hasFetchFailed) {
      const adUser = profile_badge(table[4]).fetchAdUser(handleStoreChange);
      const obj2 = profile_badge(table[4]);
    }
    outer1_4.addChangeListener(handleStoreChange);
    return () => outer2_4.removeChangeListener(handleStoreChange);
  }, items);
  return tmp[0];
};