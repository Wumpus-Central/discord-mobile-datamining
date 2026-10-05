// === Module 17262: useConsoleConnectedAccountForVoiceUpsell ===

// Module 17262 (useConsoleConnectedAccountForVoiceUpsell)
import Constants from "Constants" /* 1085 */;
import GameConsoleConstants from "GameConsoleConstants" /* 8749 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let account;

const CONSOLE_VOICE_PLATFORMS = GameConsoleConstants.CONSOLE_VOICE_PLATFORMS;
const ActivityTypes = Constants.ActivityTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let activities;
  let arr3;
  let awaitingRemoteSessionInfo;
  let tmp10;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp9;
  let tmp = arr3;
  const obj = arr3(576);
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelfPresenceStore];
    const fn = function c() {
      return activities.getActivities(true);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function v(platform) {
        platform = platform.platform;
        const hasItem = platform.type === constants.PLAYING && null != platform && set.has(platform);
        return hasItem;
      };
      cResult[4] = fn2;
      tmp7 = fn2;
    } else {
      tmp7 = cResult[4];
    }
    const found = stateFromStores.filter(tmp7);
    cResult[2] = stateFromStores;
    cResult[3] = found;
    arr3 = found;
  } else {
    arr3 = cResult[3];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GameConsoleStore];
    class A {
      constructor() {
        const tmp = null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId();
        return tmp;
      }
    }
    cResult[5] = items1;
    cResult[6] = A;
    tmp10 = A;
    tmp9 = items1;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConnectedAccountsStore];
    class A {
      constructor() {
        const tmp = null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId();
        return tmp;
      }
    }
    cResult[7] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] !== arr3) {
    class F {
      constructor() {
        mapped = closure_0.map((platform) => {
          platform = platform.platform;
          if (null == platform) {
            return null;
          } else {
            const tmp3 = closure_1_1(closure_1_2[8])(platform);
            account = null;
            if (null != tmp3) {
              account = account.getAccount(null, tmp3);
            }
            return account;
          }
        });
        return mapped.find((item) => null != item);
      }
    }
    cResult[8] = arr3;
    class A {
      constructor() {
        const tmp = null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId();
        return tmp;
      }
    }
    cResult[9] = F;
  } else {
    class F {
      constructor() {
        mapped = closure_0.map((platform) => {
          platform = platform.platform;
          if (null == platform) {
            return null;
          } else {
            const tmp3 = closure_1_1(closure_1_2[8])(platform);
            account = null;
            if (null != tmp3) {
              account = account.getAccount(null, tmp3);
            }
            return account;
          }
        });
        return mapped.find((item) => null != item);
      }
    }
  }
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, F);
  if (arr3.length > 0) {
    class F {
      constructor() {
        mapped = closure_0.map((platform) => {
          platform = platform.platform;
          if (null == platform) {
            return null;
          } else {
            const tmp3 = closure_1_1(closure_1_2[8])(platform);
            account = null;
            if (null != tmp3) {
              account = account.getAccount(null, tmp3);
            }
            return account;
          }
        });
        return mapped.find((item) => null != item);
      }
    }
    if (null != stateFromStores2) {
      class F {
        constructor() {
          mapped = closure_0.map((platform) => {
            platform = platform.platform;
            if (null == platform) {
              return null;
            } else {
              const tmp3 = closure_1_1(closure_1_2[8])(platform);
              account = null;
              if (null != tmp3) {
                account = account.getAccount(null, tmp3);
              }
              return account;
            }
          });
          return mapped.find((item) => null != item);
        }
      }
      if (!stateFromStores1) {
        class F {
          constructor() {
            mapped = closure_0.map((platform) => {
              platform = platform.platform;
              if (null == platform) {
                return null;
              } else {
                const tmp3 = closure_1_1(closure_1_2[8])(platform);
                account = null;
                if (null != tmp3) {
                  account = account.getAccount(null, tmp3);
                }
                return account;
              }
            });
            return mapped.find((item) => null != item);
          }
        }
      }
    }
  }
  return null;
}) : (() => {
  let activities;
  let awaitingRemoteSessionInfo;
  let found;
  const items = [SelfPresenceStore];
  const obj = found(504);
  const stateFromStores = obj.useStateFromStores(items, () => activities.getActivities(true));
  found = stateFromStores.filter((platform) => {
    platform = platform.platform;
    const hasItem = platform.type === constants.PLAYING && null != platform && set.has(platform);
    return hasItem;
  });
  const items1 = [GameConsoleStore];
  const obj2 = found(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const tmp = null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId();
    return tmp;
  });
  const items2 = [ConnectedAccountsStore];
  const obj3 = found(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const mapped = found.map((platform) => {
      platform = platform.platform;
      if (null == platform) {
        return null;
      } else {
        const tmp3 = closure_1_1(closure_1_2[8])(platform);
        account = null;
        if (null != tmp3) {
          account = account.getAccount(null, tmp3);
        }
        return account;
      }
    });
    return mapped.find((item) => null != item);
  });
  let tmp3 = null;
  if (found.length > 0) {
    tmp3 = null;
    if (null != stateFromStores2) {
      tmp3 = null;
      if (!stateFromStores1) {
        tmp3 = stateFromStores2;
      }
    }
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx");

export default tmp2;