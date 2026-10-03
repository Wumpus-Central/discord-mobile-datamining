// === Module 17238: useConsoleConnectedAccountForVoiceUpsell ===

// Module 17238 (useConsoleConnectedAccountForVoiceUpsell)
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5440 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;

const require = fn;
const CONSOLE_VOICE_PLATFORMS = fn(8749).CONSOLE_VOICE_PLATFORMS;
const ActivityTypes = fn(1085).ActivityTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/useConsoleConnectedAccountForVoiceUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = arr3(576).c(10);
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
  const obj = arr3(576);
  const stateFromStores = arr3(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function v(platform) {
        platform = platform.platform;
        let hasItem = platform.type === constants.PLAYING;
        if (hasItem) {
          hasItem = null != platform;
        }
        if (hasItem) {
          hasItem = set.has(platform);
        }
        return hasItem;
      };
      cResult[4] = fn2;
      let tmp7 = fn2;
    } else {
      tmp7 = cResult[4];
    }
    const found = stateFromStores.filter(tmp7);
    cResult[2] = stateFromStores;
    cResult[3] = found;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GameConsoleStore];
      class A {
        constructor() {
          obj = closure_1_5;
          tmp = null != closure_1_5.getAwaitingRemoteSessionInfo() || null != obj.getRemoteSessionId();
          return tmp;
        }
      }
      cResult[5] = items1;
      cResult[6] = A;
      let tmp11 = A;
      let tmp10 = items1;
    } else {
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    const _Symbol3 = Symbol;
    const stateFromStores1 = tmp(504).useStateFromStores(tmp10, tmp11);
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConnectedAccountsStore];
      class A {
        constructor() {
          obj = closure_1_5;
          tmp = null != closure_1_5.getAwaitingRemoteSessionInfo() || null != obj.getRemoteSessionId();
          return tmp;
        }
      }
      cResult[7] = items2;
      let tmp14 = items2;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== cResult[3]) {
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
          obj = closure_1_5;
          tmp = null != closure_1_5.getAwaitingRemoteSessionInfo() || null != obj.getRemoteSessionId();
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
    const tmpResult3 = tmp(504);
    const stateFromStores2 = tmp(504).useStateFromStores(tmp14, F);
    if (cResult[3].length > 0) {
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
  }
  const tmpResult = arr3(504);
}) : (() => {
  const items = [SelfPresenceStore];
  const stateFromStores = found(504).useStateFromStores(items, () => activities.getActivities(true));
  found = stateFromStores.filter((platform) => {
    platform = platform.platform;
    let hasItem = platform.type === constants.PLAYING;
    if (hasItem) {
      hasItem = null != platform;
    }
    if (hasItem) {
      hasItem = set.has(platform);
    }
    return hasItem;
  });
  const obj = found(504);
  const items1 = [GameConsoleStore];
  const stateFromStores1 = found(504).useStateFromStores(items1, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo() || null != awaitingRemoteSessionInfo.getRemoteSessionId());
  const obj2 = found(504);
  const items2 = [ConnectedAccountsStore];
  const stateFromStores2 = found(504).useStateFromStores(items2, () => {
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