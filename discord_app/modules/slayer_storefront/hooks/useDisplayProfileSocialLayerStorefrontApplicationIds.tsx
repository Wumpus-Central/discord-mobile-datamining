// === Module 8478: useDisplayProfileSocialLayerStorefrontApplicationIds ===

// Module 8478 (useDisplayProfileSocialLayerStorefrontApplicationIds)
import _mod12 from "module_12" /* 12 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7126 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7128 */;
import react from "react" /* 19 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6743 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arr1, closure_0, set, tmp16, tmp3, tmp6, tmp7, tmp9;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let stateFromStoresArray;
  let tmp10;
  let tmp13;
  let tmp17;
  let tmp19;
  let tmp5;
  let tmp8;
  let usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  let usersPlayingStorefrontEnabledGamesApplicationIds;
  const obj = require("react");
  const cResult = obj.c(19);
  const tmp4 = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[4])(userId.userId);
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    let items1;
    userId = undefined;
    if (tmp4 != null) {
      userId = tmp4.userId;
    }
    if (null != userId) {
      let items = [tmp4.userId];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = tmp4;
    cResult[1] = items1;
    tmp5 = items1;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    const obj2 = { userIds: tmp5 };
    cResult[2] = tmp5;
    cResult[3] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult = require("SocialLayerStorefrontEligibilityHooks");
  usersPlayingStorefrontEnabledGamesApplicationIds = tmpResult.useUsersPlayingStorefrontEnabledGamesApplicationIds(tmp8);
  if (cResult[4] !== tmp5) {
    const obj3 = { userIds: tmp5 };
    cResult[4] = tmp5;
    cResult[5] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult4 = require("SocialLayerStorefrontEligibilityHooks");
  usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = tmpResult4.useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(tmp10);
  const tmpResult5 = require("SocialLayerStorefrontEligibilityHooks");
  const areUsersInSocialLayerStorefrontMutualGuildsApplicationIds = tmpResult5.useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(tmp5);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStoresArray];
    cResult[6] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[6];
  }
  let widgets;
  const tmp15 = cResult[7];
  if (tmp4 != null) {
    widgets = tmp4.widgets;
  }
  if (tmp15 !== widgets) {
    let widgets1;
    if (tmp4 != null) {
      widgets1 = tmp4.widgets;
    }
    class S {
      constructor() {
        tmp = closure_0;
        widgets = undefined;
        if (closure_0 != null) {
          widgets = tmp.widgets;
        }
        if (null == widgets) {
          return [];
        } else {
          tmp16 = globalThis;
          _Set = Set;
          self = this;
          self2 = this;
          set = new Set();
          tmp17 = set;
          closure_0 = set;
          widgets1 = undefined;
          if (tmp != null) {
            widgets1 = tmp.widgets;
          }
          if (widgets1 == null) {
            widgets1 = [];
          }
          tmp3 = widgets1;
          tmp4 = widgets1;
          for (const item10011 of widgets1) {
            tmp5 = item10011;
            tmp6 = closure_0;
            tmp7 = closure_2;
            tmp8 = item10011;
            if (item10011 instanceof closure_0(closure_2[6]).BaseGameWidget) {
              games = tmp5.games;
              item = games.forEach((gameId) => {
                applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(gameId.gameId);
                if (null != applicationIdFromDetectableId) {
                  set.add(applicationIdFromDetectableId);
                }
              });
            } else if (!(tmp5 instanceof tmp6(tmp7[7]).ApplicationWidget)) {
            } else {
              tmp9 = closure_4;
              tmp10 = item10011;
              applicationIdFromDetectableId = closure_4.getApplicationIdFromDetectableId(tmp5.applicationId);
              if (null == applicationIdFromDetectableId) {
              } else {
                tmp13 = applicationIdFromDetectableId;
                addResult = set.add(tmp12);
              }
            }
            continue;
          }
          _Array = Array;
          arr1 = Array.from(set);
          return arr1.sort();
        }
      }
    }
    cResult[7] = widgets1;
    cResult[8] = S;
    tmp17 = S;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== tmp4) {
    const items3 = [tmp4];
    class S {
      constructor() {
        tmp = closure_0;
        widgets = undefined;
        if (closure_0 != null) {
          widgets = tmp.widgets;
        }
        if (null == widgets) {
          return [];
        } else {
          tmp16 = globalThis;
          _Set = Set;
          self = this;
          self2 = this;
          set = new Set();
          tmp17 = set;
          closure_0 = set;
          widgets1 = undefined;
          if (tmp != null) {
            widgets1 = tmp.widgets;
          }
          if (widgets1 == null) {
            widgets1 = [];
          }
          tmp3 = widgets1;
          tmp4 = widgets1;
          for (const item10011 of widgets1) {
            tmp5 = item10011;
            tmp6 = closure_0;
            tmp7 = closure_2;
            tmp8 = item10011;
            if (item10011 instanceof closure_0(closure_2[6]).BaseGameWidget) {
              games = tmp5.games;
              item = games.forEach((gameId) => {
                applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(gameId.gameId);
                if (null != applicationIdFromDetectableId) {
                  set.add(applicationIdFromDetectableId);
                }
              });
            } else if (!(tmp5 instanceof tmp6(tmp7[7]).ApplicationWidget)) {
            } else {
              tmp9 = closure_4;
              tmp10 = item10011;
              applicationIdFromDetectableId = closure_4.getApplicationIdFromDetectableId(tmp5.applicationId);
              if (null == applicationIdFromDetectableId) {
              } else {
                tmp13 = applicationIdFromDetectableId;
                addResult = set.add(tmp12);
              }
            }
            continue;
          }
          _Array = Array;
          arr1 = Array.from(set);
          return arr1.sort();
        }
      }
    }
    cResult[9] = tmp4;
    cResult[10] = items3;
    tmp19 = items3;
  } else {
    tmp19 = cResult[10];
  }
  const tmpResult6 = require("get initialized");
  stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp13, tmp17, tmp19);
  let application;
  const tmp21 = cResult[11];
  if (tmp4 != null) {
    application = tmp4.application;
  }
  if (tmp21 === application) {
    if (cResult[12] === stateFromStoresArray) {
      if (cResult[13] === usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds) {
        if (cResult[14] === areUsersInSocialLayerStorefrontMutualGuildsApplicationIds) {
          let tmp23;
          if (cResult[15] === usersPlayingStorefrontEnabledGamesApplicationIds) {
            tmp23 = cResult[16];
          }
          if (cResult[17] !== tmp23) {
            const tmp23Result = tmp23();
            class S {
              constructor() {
                tmp = closure_0;
                widgets = undefined;
                if (closure_0 != null) {
                  widgets = tmp.widgets;
                }
                if (null == widgets) {
                  return [];
                } else {
                  tmp16 = globalThis;
                  _Set = Set;
                  self = this;
                  self2 = this;
                  set = new Set();
                  tmp17 = set;
                  closure_0 = set;
                  widgets1 = undefined;
                  if (tmp != null) {
                    widgets1 = tmp.widgets;
                  }
                  if (widgets1 == null) {
                    widgets1 = [];
                  }
                  tmp3 = widgets1;
                  tmp4 = widgets1;
                  for (const item10011 of widgets1) {
                    tmp5 = item10011;
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    tmp8 = item10011;
                    if (item10011 instanceof closure_0(closure_2[6]).BaseGameWidget) {
                      games = tmp5.games;
                      item = games.forEach((gameId) => {
                        applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(gameId.gameId);
                        if (null != applicationIdFromDetectableId) {
                          set.add(applicationIdFromDetectableId);
                        }
                      });
                    } else if (!(tmp5 instanceof tmp6(tmp7[7]).ApplicationWidget)) {
                    } else {
                      tmp9 = closure_4;
                      tmp10 = item10011;
                      applicationIdFromDetectableId = closure_4.getApplicationIdFromDetectableId(tmp5.applicationId);
                      if (null == applicationIdFromDetectableId) {
                      } else {
                        tmp13 = applicationIdFromDetectableId;
                        addResult = set.add(tmp12);
                      }
                    }
                    continue;
                  }
                  _Array = Array;
                  arr1 = Array.from(set);
                  return arr1.sort();
                }
              }
            }
            cResult[18] = tmp23Result;
          }
          class S {
            constructor() {
              tmp = closure_0;
              widgets = undefined;
              if (closure_0 != null) {
                widgets = tmp.widgets;
              }
              if (null == widgets) {
                return [];
              } else {
                tmp16 = globalThis;
                _Set = Set;
                self = this;
                self2 = this;
                set = new Set();
                tmp17 = set;
                closure_0 = set;
                widgets1 = undefined;
                if (tmp != null) {
                  widgets1 = tmp.widgets;
                }
                if (widgets1 == null) {
                  widgets1 = [];
                }
                tmp3 = widgets1;
                tmp4 = widgets1;
                for (const item10011 of widgets1) {
                  tmp5 = item10011;
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  tmp8 = item10011;
                  if (item10011 instanceof closure_0(closure_2[6]).BaseGameWidget) {
                    games = tmp5.games;
                    item = games.forEach((gameId) => {
                      applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(gameId.gameId);
                      if (null != applicationIdFromDetectableId) {
                        set.add(applicationIdFromDetectableId);
                      }
                    });
                  } else if (!(tmp5 instanceof tmp6(tmp7[7]).ApplicationWidget)) {
                  } else {
                    tmp9 = closure_4;
                    tmp10 = item10011;
                    applicationIdFromDetectableId = closure_4.getApplicationIdFromDetectableId(tmp5.applicationId);
                    if (null == applicationIdFromDetectableId) {
                    } else {
                      tmp13 = applicationIdFromDetectableId;
                      addResult = set.add(tmp12);
                    }
                  }
                  continue;
                }
                _Array = Array;
                arr1 = Array.from(set);
                return arr1.sort();
              }
            }
          }
        }
      }
    }
  }
  let application1;
  if (tmp4 != null) {
    application1 = tmp4.application;
  }
  const fn = function w() {
    let items;
    application = undefined;
    if (application != null) {
      application = application.application;
    }
    if (null != application) {
      items = [];
    } else {
      const items1 = [];
      const uniq = _mod12.uniq;
      _mod12;
      HermesBuiltin.arraySpread(items1, stateFromStoresArray, HermesBuiltin.arraySpread(items1, areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, HermesBuiltin.arraySpread(items1, usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, HermesBuiltin.arraySpread(items1, usersPlayingStorefrontEnabledGamesApplicationIds, 0))));
      items = uniq(items1);
    }
    return items;
  };
  cResult[11] = application1;
  cResult[12] = stateFromStoresArray;
  cResult[13] = usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  cResult[14] = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  cResult[15] = usersPlayingStorefrontEnabledGamesApplicationIds;
  cResult[16] = fn;
  tmp23 = fn;
}) : ((userId) => {
  let usersPlayingStorefrontEnabledGamesApplicationIds;
  let usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds;
  let areUsersInSocialLayerStorefrontMutualGuildsApplicationIds;
  let stateFromStoresArray;
  const tmp = usersPlayingStorefrontEnabledGamesApplicationIds(usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds[4])(userId.userId);
  _require = tmp;
  let items = [tmp];
  const memo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo(() => {
    let items1;
    let userId;
    if (application != null) {
      userId = application.userId;
    }
    if (null != userId) {
      const items = [application.userId];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  const obj = require("SocialLayerStorefrontEligibilityHooks");
  usersPlayingStorefrontEnabledGamesApplicationIds = obj.useUsersPlayingStorefrontEnabledGamesApplicationIds({ userIds: memo });
  const obj2 = require("SocialLayerStorefrontEligibilityHooks");
  usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = obj2.useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds({ userIds: memo });
  const obj3 = require("SocialLayerStorefrontEligibilityHooks");
  areUsersInSocialLayerStorefrontMutualGuildsApplicationIds = obj3.useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo);
  let items1 = [stateFromStoresArray];
  const items2 = [tmp];
  const obj4 = require("get initialized");
  stateFromStoresArray = obj4.useStateFromStoresArray(items1, function() {
    let widgets;
    if (application != null) {
      widgets = application.widgets;
    }
    if (null == widgets) {
      return [];
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      let widgets1;
      if (application != null) {
        widgets1 = application.widgets;
      }
      if (widgets1 == null) {
        widgets1 = [];
      }
      for (const item10011 of widgets1) {
        if (item10011 instanceof UserProfileGameWidgetTypes.BaseGameWidget) {
          let games = item10011.games;
          let item = games.forEach((gameId) => {
            applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(gameId.gameId);
            if (null != applicationIdFromDetectableId) {
              set.add(applicationIdFromDetectableId);
            }
          });
        } else if (item10011 instanceof UserProfileApplicationWidgetTypes.ApplicationWidget) {
          let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(item10011.applicationId);
          if (null != applicationIdFromDetectableId) {
            let addResult = set.add(tmp12);
          }
        }
        continue;
      }
      const _Array = Array;
      const arr = Array.from(set);
      return arr.sort();
    }
  }, items2);
  let application;
  const useMemo = areUsersInSocialLayerStorefrontMutualGuildsApplicationIds.useMemo;
  if (tmp != null) {
    application = tmp.application;
  }
  const items3 = [application, usersPlayingStorefrontEnabledGamesApplicationIds, usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, stateFromStoresArray];
  return useMemo(() => {
    let items;
    application = undefined;
    if (application != null) {
      application = application.application;
    }
    if (null != application) {
      items = [];
    } else {
      const items1 = [];
      const uniq = _mod12.uniq;
      _mod12;
      HermesBuiltin.arraySpread(items1, stateFromStoresArray, HermesBuiltin.arraySpread(items1, areUsersInSocialLayerStorefrontMutualGuildsApplicationIds, HermesBuiltin.arraySpread(items1, usersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds, HermesBuiltin.arraySpread(items1, usersPlayingStorefrontEnabledGamesApplicationIds, 0))));
      items = uniq(items1);
    }
    return items;
  }, items3);
});
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useDisplayProfileSocialLayerStorefrontApplicationIds.tsx");

export default tmp2;