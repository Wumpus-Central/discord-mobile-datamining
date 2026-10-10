// discord_app/modules/app_dms/useAppDMChatInputState.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import maybeFetchUserProfileDefault from "../user_profile/maybeFetchUserProfile.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import UserProfileStore from "../user_profile/UserProfileStore.tsx";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const useQueryState = fn(9247).useQueryState;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
let items = [
  fn(1998).ApplicationCommandType.PRIMARY_ENTRY_POINT,
  fn(1998).ApplicationCommandType.CHAT,
  fn(1998).ApplicationCommandType.MESSAGE,
  fn(1998).ApplicationCommandType.USER,
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_dms/useAppDMChatInputState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppDMChatInputState(context) {
      const cResult = require("c").c(32);
      const channel = context.context.channel;
      let tmp4 = null;
      if (null != channel) {
        tmp4 = null;
        if (true === channel.isDM()) {
          if (cResult[0] !== channel) {
            user = UserStore.getUser(channel.getRecipientId());
            cResult[0] = channel;
            cResult[1] = user;
            let tmp5 = user;
          } else {
            tmp5 = cResult[1];
          }
          let tmp8 = null;
          if (undefined !== tmp5) {
            tmp8 = null;
            if (true === tmp5.bot) {
              tmp8 = tmp5;
            }
          }
          tmp4 = tmp8;
        }
      }
      _require = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        items = [ApplicationStore];
        cResult[2] = items;
        let tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      let id;
      if (tmp4 != null) {
        id = tmp4.id;
      }
      if (cResult[3] !== id) {
        let id1;
        if (tmp4 != null) {
          id1 = tmp4.id;
        }
        class M {
          constructor() {
            id = undefined;
            tmp = closure_5;
            if (closure_0 != null) {
              id = closure_0.id;
            }
            return closure_5.getAppIdForBotUserId(id);
          }
        }
        cResult[3] = id1;
        cResult[4] = M;
        let tmp12 = M;
      } else {
        tmp12 = cResult[4];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [];
        class M {
          constructor() {
            id = undefined;
            tmp = closure_5;
            if (closure_0 != null) {
              id = closure_0.id;
            }
            return closure_5.getAppIdForBotUserId(id);
          }
        }
        cResult[5] = items1;
        let tmp15 = items1;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] !== tmp4) {
        class E {
          constructor() {
            tmp = closure_0;
            tmp2 = undefined;
            if (null !== closure_0) {
              id = undefined;
              tmp3 = closure_6;
              if (tmp != null) {
                id = tmp.id;
              }
              userProfile = closure_6.getUserProfile(id);
              application = undefined;
              if (userProfile != null) {
                application = userProfile.application;
              }
              tmp2 = application;
            }
            return tmp2;
          }
        }
        class M {
          constructor() {
            id = undefined;
            tmp = closure_5;
            if (closure_0 != null) {
              id = closure_0.id;
            }
            return closure_5.getAppIdForBotUserId(id);
          }
        }
        cResult[7] = E;
      } else {
        class E {
          constructor() {
            tmp = closure_0;
            tmp2 = undefined;
            if (null !== closure_0) {
              id = undefined;
              tmp3 = closure_6;
              if (tmp != null) {
                id = tmp.id;
              }
              userProfile = closure_6.getUserProfile(id);
              application = undefined;
              if (userProfile != null) {
                application = userProfile.application;
              }
              tmp2 = application;
            }
            return tmp2;
          }
        }
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp15, E);
      if (stateFromStores == null) {
        class E {
          constructor() {
            tmp = closure_0;
            tmp2 = undefined;
            if (null !== closure_0) {
              id = undefined;
              tmp3 = closure_6;
              if (tmp != null) {
                id = tmp.id;
              }
              userProfile = closure_6.getUserProfile(id);
              application = undefined;
              if (userProfile != null) {
                application = userProfile.application;
              }
              tmp2 = application;
            }
            return tmp2;
          }
        }
        if (stateFromStores1 != null) {
          class E {
            constructor() {
              tmp = closure_0;
              tmp2 = undefined;
              if (null !== closure_0) {
                id = undefined;
                tmp3 = closure_6;
                if (tmp != null) {
                  id = tmp.id;
                }
                userProfile = closure_6.getUserProfile(id);
                application = undefined;
                if (userProfile != null) {
                  application = userProfile.application;
                }
                tmp2 = application;
              }
              return tmp2;
            }
          }
        }
        class M {
          constructor() {
            id = undefined;
            tmp = closure_5;
            if (closure_0 != null) {
              id = closure_0.id;
            }
            return closure_5.getAppIdForBotUserId(id);
          }
        }
      }
      if (cResult[8] === stateFromStores) {
        class E {
          constructor() {
            tmp = closure_0;
            tmp2 = undefined;
            if (null !== closure_0) {
              id = undefined;
              tmp3 = closure_6;
              if (tmp != null) {
                id = tmp.id;
              }
              userProfile = closure_6.getUserProfile(id);
              application = undefined;
              if (userProfile != null) {
                application = userProfile.application;
              }
              tmp2 = application;
            }
            return tmp2;
          }
        }
        class M {
          constructor() {
            id = undefined;
            tmp = closure_5;
            if (closure_0 != null) {
              id = closure_0.id;
            }
            return closure_5.getAppIdForBotUserId(id);
          }
        }
        if (cResult[9] === tmp19) {
          class E {
            constructor() {
              tmp = closure_0;
              tmp2 = undefined;
              if (null !== closure_0) {
                id = undefined;
                tmp3 = closure_6;
                if (tmp != null) {
                  id = tmp.id;
                }
                userProfile = closure_6.getUserProfile(id);
                application = undefined;
                if (userProfile != null) {
                  application = userProfile.application;
                }
                tmp2 = application;
              }
              return tmp2;
            }
          }
        }
        if (cResult[11] === stateFromStores) {
          class E {
            constructor() {
              tmp = closure_0;
              tmp2 = undefined;
              if (null !== closure_0) {
                id = undefined;
                tmp3 = closure_6;
                if (tmp != null) {
                  id = tmp.id;
                }
                userProfile = closure_6.getUserProfile(id);
                application = undefined;
                if (userProfile != null) {
                  application = userProfile.application;
                }
                tmp2 = application;
              }
              return tmp2;
            }
          }
          class M {
            constructor() {
              id = undefined;
              tmp = closure_5;
              if (closure_0 != null) {
                id = closure_0.id;
              }
              return closure_5.getAppIdForBotUserId(id);
            }
          }
          if (cResult[14] !== tmp4) {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
            class M {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (closure_0 != null) {
                  id = closure_0.id;
                }
                return closure_5.getAppIdForBotUserId(id);
              }
            }
            cResult[15] = D;
          } else {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
          }
          if (tmp4 != null) {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
          }
          if (cResult[16] !== undefined) {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
            tmp24[0] = tmp22;
            class M {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (closure_0 != null) {
                  id = closure_0.id;
                }
                return closure_5.getAppIdForBotUserId(id);
              }
            }
            cResult[16] = tmp22;
            cResult[17] = tmp24;
          } else {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
          }
          const effect = noop.useEffect(D, tmp24);
          if (cResult[18] !== channel) {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
            tmp27[0] = channel;
            class M {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (closure_0 != null) {
                  id = closure_0.id;
                }
                return closure_5.getAppIdForBotUserId(id);
              }
            }
            cResult[18] = channel;
            cResult[19] = tmp27;
          } else {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
            class M {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (closure_0 != null) {
                  id = closure_0.id;
                }
                return closure_5.getAppIdForBotUserId(id);
              }
            }
            cResult[20] = tmp29;
          } else {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
          }
          if (tmp4 != null) {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
          }
          if (cResult[21] === stateFromStores) {
            class D {
              constructor() {
                tmp = closure_0;
                id = undefined;
                if (closure_0 != null) {
                  id = tmp.id;
                }
                if (null != id) {
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[12]);
                  obj1 = { type: "APP_DM_OPEN", botUserId: null };
                  obj1.botUserId = tmp.id;
                  dispatchResult = obj.dispatch(obj1);
                }
                return;
              }
            }
            class M {
              constructor() {
                id = undefined;
                tmp = closure_5;
                if (closure_0 != null) {
                  id = closure_0.id;
                }
                return closure_5.getAppIdForBotUserId(id);
              }
            }
            if (cResult[24] === stateFromStores) {
              class D {
                constructor() {
                  tmp = closure_0;
                  id = undefined;
                  if (closure_0 != null) {
                    id = tmp.id;
                  }
                  if (null != id) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    obj = closure_1(closure_2[12]);
                    obj1 = { type: "APP_DM_OPEN", botUserId: null };
                    obj1.botUserId = tmp.id;
                    dispatchResult = obj.dispatch(obj1);
                  }
                  return;
                }
              }
              if (cResult[27] !== tmp36) {
                class D {
                  constructor() {
                    tmp = closure_0;
                    id = undefined;
                    if (closure_0 != null) {
                      id = tmp.id;
                    }
                    if (null != id) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[12]);
                      obj1 = { type: "APP_DM_OPEN", botUserId: null };
                      obj1.botUserId = tmp.id;
                      dispatchResult = obj.dispatch(obj1);
                    }
                    return;
                  }
                }
                if (null != tmp36) {
                  class D {
                    constructor() {
                      tmp = closure_0;
                      id = undefined;
                      if (closure_0 != null) {
                        id = tmp.id;
                      }
                      if (null != id) {
                        tmp3 = closure_1;
                        tmp4 = closure_2;
                        obj = closure_1(closure_2[12]);
                        obj1 = { type: "APP_DM_OPEN", botUserId: null };
                        obj1.botUserId = tmp.id;
                        dispatchResult = obj.dispatch(obj1);
                      }
                      return;
                    }
                  }
                  const fromServer = ApplicationRecord.createFromServer(tmp36);
                }
                class M {
                  constructor() {
                    id = undefined;
                    tmp = closure_5;
                    if (closure_0 != null) {
                      id = closure_0.id;
                    }
                    return closure_5.getAppIdForBotUserId(id);
                  }
                }
                cResult[27] = tmp36;
                cResult[28] = fromServer;
              } else {
                class D {
                  constructor() {
                    tmp = closure_0;
                    id = undefined;
                    if (closure_0 != null) {
                      id = tmp.id;
                    }
                    if (null != id) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[12]);
                      obj1 = { type: "APP_DM_OPEN", botUserId: null };
                      obj1.botUserId = tmp.id;
                      dispatchResult = obj.dispatch(obj1);
                    }
                    return;
                  }
                }
              }
              class M {
                constructor() {
                  id = undefined;
                  tmp = closure_5;
                  if (closure_0 != null) {
                    id = closure_0.id;
                  }
                  return closure_5.getAppIdForBotUserId(id);
                }
              }
              const useGetOrFetchApplication = tmp41.useGetOrFetchApplication;
              if (null == tmp39) {
                class D {
                  constructor() {
                    tmp = closure_0;
                    id = undefined;
                    if (closure_0 != null) {
                      id = tmp.id;
                    }
                    if (null != id) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[12]);
                      obj1 = { type: "APP_DM_OPEN", botUserId: null };
                      obj1.botUserId = tmp.id;
                      dispatchResult = obj.dispatch(obj1);
                    }
                    return;
                  }
                }
              }
              if (tmp39 == null) {
                class D {
                  constructor() {
                    tmp = closure_0;
                    id = undefined;
                    if (closure_0 != null) {
                      id = tmp.id;
                    }
                    if (null != id) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[12]);
                      obj1 = { type: "APP_DM_OPEN", botUserId: null };
                      obj1.botUserId = tmp.id;
                      dispatchResult = obj.dispatch(obj1);
                    }
                    return;
                  }
                }
              }
              if (tmp39 == null) {
                class D {
                  constructor() {
                    tmp = closure_0;
                    id = undefined;
                    if (closure_0 != null) {
                      id = tmp.id;
                    }
                    if (null != id) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[12]);
                      obj1 = { type: "APP_DM_OPEN", botUserId: null };
                      obj1.botUserId = tmp.id;
                      dispatchResult = obj.dispatch(obj1);
                    }
                    return;
                  }
                }
              }
              if (tmp4 != null) {
                class D {
                  constructor() {
                    tmp = closure_0;
                    id = undefined;
                    if (closure_0 != null) {
                      id = tmp.id;
                    }
                    if (null != id) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[12]);
                      obj1 = { type: "APP_DM_OPEN", botUserId: null };
                      obj1.botUserId = tmp.id;
                      dispatchResult = obj.dispatch(obj1);
                    }
                    return;
                  }
                }
              }
              if (undefined == null) {
                class D {
                  constructor() {
                    tmp = closure_0;
                    id = undefined;
                    if (closure_0 != null) {
                      id = tmp.id;
                    }
                    if (null != id) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[12]);
                      obj1 = { type: "APP_DM_OPEN", botUserId: null };
                      obj1.botUserId = tmp.id;
                      dispatchResult = obj.dispatch(obj1);
                    }
                    return;
                  }
                }
              }
              if (cResult[29] === tmp39) {
                class D {
                  constructor() {
                    tmp = closure_0;
                    id = undefined;
                    if (closure_0 != null) {
                      id = tmp.id;
                    }
                    if (null != id) {
                      tmp3 = closure_1;
                      tmp4 = closure_2;
                      obj = closure_1(closure_2[12]);
                      obj1 = { type: "APP_DM_OPEN", botUserId: null };
                      obj1.botUserId = tmp.id;
                      dispatchResult = obj.dispatch(obj1);
                    }
                    return;
                  }
                }
                return tmp43;
              }
              let obj2 = { application: tmp39, isAppDM: undefined };
              cResult[29] = tmp39;
              cResult[30] = undefined;
              cResult[31] = obj2;
              tmp43 = obj2;
            }
            const descriptors = tmp35.descriptors;
            const found = descriptors.find((application) => {
              application = application.application;
              let id;
              if (application != null) {
                id = application.id;
              }
              return id === stateFromStores;
            });
            if (found != null) {
              class D {
                constructor() {
                  tmp = closure_0;
                  id = undefined;
                  if (closure_0 != null) {
                    id = tmp.id;
                  }
                  if (null != id) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    obj = closure_1(closure_2[12]);
                    obj1 = { type: "APP_DM_OPEN", botUserId: null };
                    obj1.botUserId = tmp.id;
                    dispatchResult = obj.dispatch(obj1);
                  }
                  return;
                }
              }
            }
            cResult[24] = stateFromStores;
            cResult[25] = tmp35.descriptors;
            cResult[26] = undefined;
          }
          const obj3 = { applicationId: stateFromStores, allowFetch: null != undefined, allowApplicationState: true };
          cResult[21] = stateFromStores;
          cResult[22] = null != undefined;
          cResult[23] = obj3;
        }
        const items2 = [tmp4, stateFromStores];
        cResult[11] = stateFromStores;
        cResult[12] = tmp4;
        cResult[13] = items2;
      }
      cResult[8] = stateFromStores;
      if (tmp4 != null) {
        class D {
          constructor() {
            tmp = closure_0;
            id = undefined;
            if (closure_0 != null) {
              id = tmp.id;
            }
            if (null != id) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[12]);
              obj1 = { type: "APP_DM_OPEN", botUserId: null };
              obj1.botUserId = tmp.id;
              dispatchResult = obj.dispatch(obj1);
            }
            return;
          }
        }
      }
      const fn = function b() {
        if (null == stateFromStores) {
          let id;
          if (user != null) {
            id = user.id;
          }
          if (id == null) {
            id = EMPTY_STRING_SNOWFLAKE_ID;
          }
          maybeFetchUserProfileDefault(id, undefined, { withMutualGuilds: true });
        }
      };
      cResult[9] = undefined;
      cResult[10] = fn;
      const tmpResult2 = require("initialize");
    }
  : function useAppDMChatInputState(context) {
      let stateFromStores;
      let application;
      const channel = context.context.channel;
      items = [channel];
      const memo = application.useMemo(() => {
        if (null != channel) {
          if (true === channel.isDM()) {
            user = UserStore.getUser(channel.getRecipientId());
            let tmp3 = null;
            if (undefined !== user) {
              tmp3 = null;
              if (true === user.bot) {
                tmp3 = user;
              }
            }
            return tmp3;
          }
        }
        return null;
      }, items);
      const items1 = [ApplicationStore];
      stateFromStores = channel(stateFromStores[10]).useStateFromStores(items1, () => {
        let id;
        if (memo != null) {
          id = memo.id;
        }
        return ApplicationStore.getAppIdForBotUserId(id);
      });
      let obj2 = channel(stateFromStores[10]);
      const items2 = [UserProfileStore];
      const stateFromStores1 = channel(stateFromStores[10]).useStateFromStores(items2, () => {
        let tmp2;
        if (null !== memo) {
          let id;
          if (memo != null) {
            id = memo.id;
          }
          const userProfile = UserProfileStore.getUserProfile(id);
          application = undefined;
          if (userProfile != null) {
            application = userProfile.application;
          }
          tmp2 = application;
        }
        return tmp2;
      });
      if (stateFromStores == null) {
        let id;
        if (stateFromStores1 != null) {
          id = stateFromStores1.id;
        }
        stateFromStores = id;
      }
      const items3 = [memo, stateFromStores];
      const effect = obj.useEffect(() => {
        if (null == stateFromStores) {
          let id;
          if (memo != null) {
            id = memo.id;
          }
          if (id == null) {
            id = EMPTY_STRING_SNOWFLAKE_ID;
          }
          maybeFetchUserProfileDefault(id, undefined, { withMutualGuilds: true });
        }
      }, items3);
      let id1;
      if (memo != null) {
        id1 = memo.id;
      }
      const items4 = [id1];
      const effect1 = obj.useEffect(() => {
        let id;
        if (memo != null) {
          id = memo.id;
        }
        if (null != id) {
          const obj2 = { type: "APP_DM_OPEN", botUserId: memo.id };
          DispatcherDefault.dispatch(obj2);
        }
      }, items4);
      const obj5 = { applicationId: stateFromStores, allowFetch: null, allowApplicationState: true };
      let id2;
      if (memo != null) {
        id2 = memo.id;
      }
      obj5.allowFetch = null != id2;
      const descriptors = useQueryState({ channel, type: "channel" }, { commandTypes: items }, obj5).descriptors;
      const found = descriptors.find((application) => {
        application = application.application;
        let id;
        if (application != null) {
          id = application.id;
        }
        return id === stateFromStores;
      });
      application = undefined;
      if (found != null) {
        application = found.application;
      }
      const items5 = [application];
      let memo1 = obj.useMemo(() => {
        let fromServer;
        if (null != application) {
          fromServer = ApplicationRecord.createFromServer(tmp);
        }
        return fromServer;
      }, items5);
      const obj3 = channel(stateFromStores[10]);
      const obj4 = { commandTypes: items };
      if (null == memo1) {
        const tmp15 = stateFromStores;
      }
      if (memo1 == null) {
        memo1 = tmp2Result.useGetOrFetchApplication(tmp15);
      }
      const obj6 = { application: memo1, isAppDM: null };
      let flag;
      if (memo != null) {
        flag = memo.bot;
      }
      if (flag == null) {
        flag = false;
      }
      obj6.isAppDM = flag;
      return obj6;
    };
