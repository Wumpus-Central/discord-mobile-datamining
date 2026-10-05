// discord_app/modules/app_dms/useAppDMChatInputState.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import Server from "../../flow/Server.tsx";
import maybeFetchUserProfileDefault from "../user_profile/maybeFetchUserProfile.tsx";
import ApplicationCommandIndexStore from "../application_commands/ApplicationCommandIndexStore.tsx";
import react from "../../../_runtime/00019_react.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import UserProfileStore from "../user_profile/UserProfileStore.tsx";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const useQueryState = ApplicationCommandIndexStore.useQueryState;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let items = [
  Server.ApplicationCommandType.PRIMARY_ENTRY_POINT,
  Server.ApplicationCommandType.CHAT,
  Server.ApplicationCommandType.MESSAGE,
  Server.ApplicationCommandType.USER,
];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      let fn2;
      let tmp13;
      let tmp16;
      let tmp23;
      let tmp37;
      let tmp47;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(32);
      const channel = context.context.channel;
      let tmp4 = null;
      if (null != channel) {
        tmp4 = null;
        if (true === channel.isDM()) {
          let tmp5;
          if (cResult[0] !== channel) {
            const user = UserStore.getUser(channel.getRecipientId());
            cResult[0] = channel;
            cResult[1] = user;
            tmp5 = user;
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
        tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      let id;
      const tmp11 = cResult[3];
      if (tmp4 != null) {
        id = tmp4.id;
      }
      if (tmp11 !== id) {
        let id1;
        if (tmp4 != null) {
          id1 = tmp4.id;
        }
        const fn = function y() {
          let id;
          const getAppIdForBotUserId = ApplicationStore.getAppIdForBotUserId;
          if (user != null) {
            id = user.id;
          }
          return getAppIdForBotUserId(id);
        };
        cResult[3] = id1;
        cResult[4] = fn;
        tmp13 = fn;
      } else {
        tmp13 = cResult[4];
      }
      const tmpResult = require("get initialized");
      let stateFromStores = tmpResult.useStateFromStores(tmp9, tmp13);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserProfileStore];
        cResult[5] = items1;
        tmp16 = items1;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] !== tmp4) {
        class E {
          constructor() {
            let tmp2;
            if (null !== user) {
              let id;
              const getUserProfile = UserProfileStore.getUserProfile;
              if (user != null) {
                id = user.id;
              }
              const userProfile = getUserProfile(id);
              let application;
              if (userProfile != null) {
                application = userProfile.application;
              }
              tmp2 = application;
            }
            return tmp2;
          }
        }
        cResult[6] = tmp4;
        cResult[7] = E;
      } else {
        class E {
          constructor() {
            let tmp2;
            if (null !== user) {
              let id;
              const getUserProfile = UserProfileStore.getUserProfile;
              if (user != null) {
                id = user.id;
              }
              const userProfile = getUserProfile(id);
              let application;
              if (userProfile != null) {
                application = userProfile.application;
              }
              tmp2 = application;
            }
            return tmp2;
          }
        }
      }
      const tmpResult3 = require("get initialized");
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp16, E);
      if (stateFromStores == null) {
        class E {
          constructor() {
            let tmp2;
            if (null !== user) {
              let id;
              const getUserProfile = UserProfileStore.getUserProfile;
              if (user != null) {
                id = user.id;
              }
              const userProfile = getUserProfile(id);
              let application;
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
              let tmp2;
              if (null !== user) {
                let id;
                const getUserProfile = UserProfileStore.getUserProfile;
                if (user != null) {
                  id = user.id;
                }
                const userProfile = getUserProfile(id);
                let application;
                if (userProfile != null) {
                  application = userProfile.application;
                }
                tmp2 = application;
              }
              return tmp2;
            }
          }
        }
        stateFromStores = tmp20;
      }
      if (cResult[8] === stateFromStores) {
        class E {
          constructor() {
            let tmp2;
            if (null !== user) {
              let id;
              const getUserProfile = UserProfileStore.getUserProfile;
              if (user != null) {
                id = user.id;
              }
              const userProfile = getUserProfile(id);
              let application;
              if (userProfile != null) {
                application = userProfile.application;
              }
              tmp2 = application;
            }
            return tmp2;
          }
        }
        const tmp21 = cResult[9];
        if (tmp4 != null) {
          class E {
            constructor() {
              let tmp2;
              if (null !== user) {
                let id;
                const getUserProfile = UserProfileStore.getUserProfile;
                if (user != null) {
                  id = user.id;
                }
                const userProfile = getUserProfile(id);
                let application;
                if (userProfile != null) {
                  application = userProfile.application;
                }
                tmp2 = application;
              }
              return tmp2;
            }
          }
        }
        if (tmp21 === tmp22) {
          class E {
            constructor() {
              let tmp2;
              if (null !== user) {
                let id;
                const getUserProfile = UserProfileStore.getUserProfile;
                if (user != null) {
                  id = user.id;
                }
                const userProfile = getUserProfile(id);
                let application;
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
              let tmp2;
              if (null !== user) {
                let id;
                const getUserProfile = UserProfileStore.getUserProfile;
                if (user != null) {
                  id = user.id;
                }
                const userProfile = getUserProfile(id);
                let application;
                if (userProfile != null) {
                  application = userProfile.application;
                }
                tmp2 = application;
              }
              return tmp2;
            }
          }
          const effect = react.useEffect(fn2, tmp23);
          if (cResult[14] !== tmp4) {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
            cResult[14] = tmp4;
            cResult[15] = U;
          } else {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
          }
          if (tmp4 != null) {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
          }
          if (cResult[16] !== undefined) {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
            tmp28[0] = undefined;
            cResult[16] = undefined;
            cResult[17] = tmp28;
          } else {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
          }
          const effect1 = react.useEffect(U, tmp28);
          if (cResult[18] !== channel) {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
            tmp31[0] = channel;
            cResult[18] = channel;
            cResult[19] = tmp31;
          } else {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
          }
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
            tmp33[0] = items;
            cResult[20] = tmp33;
          } else {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
          }
          if (tmp4 != null) {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
          }
          if (cResult[21] === stateFromStores) {
            class U {
              constructor() {
                let id;
                if (user != null) {
                  id = user.id;
                }
                if (null != id) {
                  const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                  const obj = DispatcherDefault;
                  obj.dispatch(obj2);
                }
              }
            }
            const tmp39 = useQueryState(tmp31, tmp33, tmp37);
            if (cResult[24] === stateFromStores) {
              class U {
                constructor() {
                  let id;
                  if (user != null) {
                    id = user.id;
                  }
                  if (null != id) {
                    const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                    const obj = DispatcherDefault;
                    obj.dispatch(obj2);
                  }
                }
              }
              if (cResult[27] !== tmp40) {
                let fromServer;
                class U {
                  constructor() {
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                    if (null != id) {
                      const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                    }
                  }
                }
                if (null != tmp40) {
                  class U {
                    constructor() {
                      let id;
                      if (user != null) {
                        id = user.id;
                      }
                      if (null != id) {
                        const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                        const obj = DispatcherDefault;
                        obj.dispatch(obj2);
                      }
                    }
                  }
                  fromServer = ApplicationRecord.createFromServer(tmp40);
                }
                cResult[27] = tmp40;
                cResult[28] = fromServer;
              } else {
                class U {
                  constructor() {
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                    if (null != id) {
                      const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                    }
                  }
                }
              }
              const useGetOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication;
              require("useGetOrFetchApplications");
              if (null == tmp43) {
                class U {
                  constructor() {
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                    if (null != id) {
                      const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                    }
                  }
                }
              }
              if (tmp43 == null) {
                class U {
                  constructor() {
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                    if (null != id) {
                      const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                    }
                  }
                }
              }
              if (tmp43 == null) {
                class U {
                  constructor() {
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                    if (null != id) {
                      const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                    }
                  }
                }
              }
              if (tmp4 != null) {
                class U {
                  constructor() {
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                    if (null != id) {
                      const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                    }
                  }
                }
              }
              if (undefined == null) {
                class U {
                  constructor() {
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                    if (null != id) {
                      const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                    }
                  }
                }
              }
              if (cResult[29] === tmp43) {
                class U {
                  constructor() {
                    let id;
                    if (user != null) {
                      id = user.id;
                    }
                    if (null != id) {
                      const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                    }
                  }
                }
                return tmp47;
              }
              let obj2 = { application: tmp43, isAppDM: undefined };
              cResult[29] = tmp43;
              cResult[30] = undefined;
              cResult[31] = obj2;
              tmp47 = obj2;
            }
            const descriptors = tmp39.descriptors;
            const found = descriptors.find((application) => {
              application = application.application;
              let id;
              if (application != null) {
                id = application.id;
              }
              return id === stateFromStores;
            });
            if (found != null) {
              class U {
                constructor() {
                  let id;
                  if (user != null) {
                    id = user.id;
                  }
                  if (null != id) {
                    const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
                    const obj = DispatcherDefault;
                    obj.dispatch(obj2);
                  }
                }
              }
            }
            cResult[24] = stateFromStores;
            cResult[25] = tmp39.descriptors;
            cResult[26] = undefined;
          }
          const obj3 = { applicationId: stateFromStores, allowFetch: null != undefined, allowApplicationState: true };
          cResult[21] = stateFromStores;
          cResult[22] = null != undefined;
          cResult[23] = obj3;
          tmp37 = obj3;
        }
        const items2 = [tmp4, stateFromStores];
        cResult[11] = stateFromStores;
        cResult[12] = tmp4;
        cResult[13] = items2;
        tmp23 = items2;
      }
      cResult[8] = stateFromStores;
      if (tmp4 != null) {
        class U {
          constructor() {
            let id;
            if (user != null) {
              id = user.id;
            }
            if (null != id) {
              const obj2 = { type: "APP_DM_OPEN", botUserId: user.id };
              const obj = DispatcherDefault;
              obj.dispatch(obj2);
            }
          }
        }
      }
      fn2 = function b() {
        if (null == stateFromStores) {
          let id;
          const tmp3 = maybeFetchUserProfileDefault;
          if (user != null) {
            id = user.id;
          }
          if (id == null) {
            id = EMPTY_STRING_SNOWFLAKE_ID;
          }
          tmp3(id, undefined, { withMutualGuilds: true });
        }
      };
      cResult[9] = undefined;
      cResult[10] = fn2;
    }
  : (context) => {
      let flag;
      let id2;
      let tmp16;
      let stateFromStores;
      let application;
      const channel = context.context.channel;
      let obj = application;
      items = [channel];
      const memo = application.useMemo(() => {
        if (null != channel) {
          if (true === channel.isDM()) {
            const user = UserStore.getUser(channel.getRecipientId());
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
      let tmp2 = channel;
      let tmp3 = stateFromStores;
      let obj2 = channel(stateFromStores[10]);
      const items1 = [ApplicationStore];
      stateFromStores = obj2.useStateFromStores(items1, () => {
        let id;
        const getAppIdForBotUserId = ApplicationStore.getAppIdForBotUserId;
        if (memo != null) {
          id = memo.id;
        }
        return getAppIdForBotUserId(id);
      });
      const items2 = [UserProfileStore];
      const obj3 = channel(stateFromStores[10]);
      const stateFromStores1 = obj3.useStateFromStores(items2, () => {
        let tmp2;
        if (null !== memo) {
          let id;
          const getUserProfile = UserProfileStore.getUserProfile;
          if (memo != null) {
            id = memo.id;
          }
          const userProfile = getUserProfile(id);
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
          const tmp3 = maybeFetchUserProfileDefault;
          if (memo != null) {
            id = memo.id;
          }
          if (id == null) {
            id = EMPTY_STRING_SNOWFLAKE_ID;
          }
          tmp3(id, undefined, { withMutualGuilds: true });
        }
      }, items3);
      let id1;
      const useEffect = obj.useEffect;
      if (memo != null) {
        id1 = memo.id;
      }
      const items4 = [id1];
      const effect1 = useEffect(() => {
        let id;
        if (memo != null) {
          id = memo.id;
        }
        if (null != id) {
          const obj2 = { type: "APP_DM_OPEN", botUserId: memo.id };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
      }, items4);
      const obj5 = { applicationId: stateFromStores, allowFetch: null != id2, allowApplicationState: true };
      id2 = undefined;
      const obj4 = { commandTypes: items };
      if (memo != null) {
        id2 = memo.id;
      }
      const descriptors = useQueryState({ channel, type: "channel" }, obj4, obj5).descriptors;
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
      const useGetOrFetchApplication = tmp2(tmp3[13]).useGetOrFetchApplication;
      tmp2(tmp3[13]);
      if (null == memo1) {
        tmp16 = stateFromStores;
      }
      if (memo1 == null) {
        memo1 = useGetOrFetchApplication(tmp16);
      }
      const obj6 = { application: memo1, isAppDM: flag };
      flag = undefined;
      if (memo != null) {
        flag = memo.bot;
      }
      if (flag == null) {
        flag = false;
      }
      return obj6;
    };
const result = size.fileFinishedImporting("modules/app_dms/useAppDMChatInputState.tsx");

export default tmp2;
