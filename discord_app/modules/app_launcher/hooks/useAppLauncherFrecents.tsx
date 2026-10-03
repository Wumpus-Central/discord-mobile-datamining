// discord_app/modules/app_launcher/hooks/useAppLauncherFrecents.tsx
import c from "../../../../_runtime/00576_c.js";
import AuthorizedAppsActionCreatorsDefault from "../../oauth2/AuthorizedAppsActionCreators.tsx";
import AppLauncherUtils from "../utils/AppLauncherUtils.tsx";
import isApplicationAgeRestrictedDefault from "../../applications/utils/isApplicationAgeRestricted.tsx";
import ApplicationCommandQueryApiAll from "../../application_commands/ApplicationCommandQueryApi.tsx";
import getPrimaryAppCommand from "../../application_commands/getPrimaryAppCommand.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthorizedAppsStore from "../../oauth2/AuthorizedAppsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AppLauncherLastUsedCommandStore from "../AppLauncherLastUsedCommandStore.tsx";

require = fn;
const FetchState = fn(6602).FetchState;
const WATCH_YOUTUBE_PROD_APP_ID = fn(2011).WATCH_YOUTUBE_PROD_APP_ID;
const ApplicationCommandConstants = fn(5788);
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let filters = { commandTypes: null };
let items = [fn(1985).ApplicationCommandType.CHAT, fn(1985).ApplicationCommandType.PRIMARY_ENTRY_POINT];
filters.commandTypes = items;
const options = { placeholderCount: 0, limit: ApplicationCommandConstants.DISCOVERY_COMMANDS_QUERY_LIMIT, includeFrecency: true };
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  filters = c;
  const cResult = filters.c(11);
  ({ context, onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = arg0);
  if (cResult[0] === allowCommandFetch) {
    if (cResult[1] === context) {
      let tmp3 = cResult[2];
    }
    const discovery = ApplicationCommandQueryApiAll.useDiscovery(tmp3);
    ({ sectionDescriptors, loading } = discovery);
    if (cResult[3] === context) {
      if (cResult[4] === includeAuthorizedAppsAndFetch) {
        if (cResult[5] === onlyActivityApps) {
          if (cResult[6] === sectionDescriptors) {
            let tmp6 = cResult[7];
          }
          const tmp8 = closure_13(tmp6);
          if (cResult[8] === tmp8) {
            if (cResult[9] === loading) {
              let tmp9 = cResult[10];
            }
            return tmp9;
          }
          const obj2 = { loading, frecentApps: tmp8 };
          cResult[8] = tmp8;
          cResult[9] = loading;
          cResult[10] = obj2;
          tmp9 = obj2;
        }
      }
    }
    const obj4 = { sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch };
    cResult[3] = context;
    cResult[4] = includeAuthorizedAppsAndFetch;
    cResult[5] = onlyActivityApps;
    cResult[6] = sectionDescriptors;
    cResult[7] = obj4;
    tmp6 = obj4;
  }
  const obj5 = { context, filters, options, allowFetch: allowCommandFetch };
  cResult[0] = allowCommandFetch;
  cResult[1] = context;
  cResult[2] = obj5;
  tmp3 = obj5;
}) : ((context) => {
  context = context.context;
  ({ onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = context);
  filters = ApplicationCommandQueryApiAll;
  const discovery = filters.useDiscovery({ context, filters, options, allowFetch: allowCommandFetch });
  const obj3 = { loading: discovery.loading, frecentApps: closure_13({ sectionDescriptors: discovery.sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch }) };
  return obj3;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((includeAuthorizedAppsAndFetch) => {
  const cResult = context(576).c(33);
  ({ sectionDescriptors, context } = includeAuthorizedAppsAndFetch);
  includeAuthorizedAppsAndFetch = includeAuthorizedAppsAndFetch.includeAuthorizedAppsAndFetch;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthorizedAppsStore];
    class A {
      constructor() {
        return closure_1_5.getFetchState();
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = context(576);
  const stateFromStores = context(504).useStateFromStores(tmp4, A);
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === includeAuthorizedAppsAndFetch) {
      let tmp8 = cResult[4];
      let tmp9 = cResult[5];
    }
    const effect = stateFromStores1.useEffect(tmp8, tmp9);
    class A {
      constructor() {
        return closure_1_5.getFetchState();
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [AuthorizedAppsStore];
      class A {
        constructor() {
          return closure_1_5.getFetchState();
        }
      }
      cResult[6] = items1;
    }
    if (cResult[7] !== includeAuthorizedAppsAndFetch) {
      class D {
        constructor() {
          if (closure_1) {
            tmp = closure_5;
            newestTokens = closure_5.getNewestTokens();
            found = newestTokens.filter(() => { ... });
          } else {
            found = [];
          }
          return found;
        }
      }
      cResult[7] = includeAuthorizedAppsAndFetch;
      class A {
        constructor() {
          return closure_1_5.getFetchState();
        }
      }
      cResult[8] = D;
    } else {
      class D {
        constructor() {
          if (closure_1) {
            tmp = closure_5;
            newestTokens = closure_5.getNewestTokens();
            found = newestTokens.filter(() => { ... });
          } else {
            found = [];
          }
          return found;
        }
      }
    }
    context(504);
    if (cResult[9] !== sectionDescriptors) {
      class D {
        constructor() {
          if (closure_1) {
            tmp = closure_5;
            newestTokens = closure_5.getNewestTokens();
            found = newestTokens.filter(() => { ... });
          } else {
            found = [];
          }
          return found;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            tmp2 = includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY && includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
            return tmp2;
          }
        }
        cResult[11] = T;
        class A {
          constructor() {
            return closure_1_5.getFetchState();
          }
        }
      } else {
        class T {
          constructor(arg0) {
            tmp2 = includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY && includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
            return tmp2;
          }
        }
      }
      class A {
        constructor() {
          return closure_1_5.getFetchState();
        }
      }
      cResult[9] = sectionDescriptors;
      cResult[10] = tmp17;
    } else {
      class T {
        constructor(arg0) {
          tmp2 = includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY && includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
          return tmp2;
        }
      }
      class A {
        constructor() {
          return closure_1_5.getFetchState();
        }
      }
      dependencyMap = tmp20;
      const sortApplicationsViaFrecency = context(11745).useSortApplicationsViaFrecency(cResult[10], tmp16);
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            tmp2 = includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY && includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
            return tmp2;
          }
        }
        const items2 = [UserStore];
        class M {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            nsfwAllowed = undefined;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        cResult[14] = items2;
        cResult[15] = M;
        let tmp22 = M;
        const tmp21 = items2;
      } else {
        class T {
          constructor(arg0) {
            tmp2 = includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY && includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
            return tmp2;
          }
        }
        tmp22 = cResult[15];
      }
      const tmpResult5 = context(11745);
      stateFromStores1 = context(504).useStateFromStores(tmp21, tmp22);
      if (cResult[16] !== stateFromStores1) {
        class U {
          constructor(arg0) {
            tmp = false === closure_4;
            if (tmp) {
              tmp2 = includeAuthorizedAppsAndFetch;
              tmp3 = closure_1;
              tmp4 = closure_3;
              tmp = closure_1(closure_3[14])(includeAuthorizedAppsAndFetch.id);
            }
            return !tmp;
          }
        }
        cResult[16] = stateFromStores1;
        class M {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            nsfwAllowed = undefined;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        cResult[17] = U;
      } else {
        class U {
          constructor(arg0) {
            tmp = false === closure_4;
            if (tmp) {
              tmp2 = includeAuthorizedAppsAndFetch;
              tmp3 = closure_1;
              tmp4 = closure_3;
              tmp = closure_1(closure_3[14])(includeAuthorizedAppsAndFetch.id);
            }
            return !tmp;
          }
        }
      }
      if (includeAuthorizedAppsAndFetch.onlyActivityApps) {
        class U {
          constructor(arg0) {
            tmp = false === closure_4;
            if (tmp) {
              tmp2 = includeAuthorizedAppsAndFetch;
              tmp3 = closure_1;
              tmp4 = closure_3;
              tmp = closure_1(closure_3[14])(includeAuthorizedAppsAndFetch.id);
            }
            return !tmp;
          }
        }
        if (cResult[29] !== context) {
          class H {
            constructor(arg0) {
              isActivityAppResult = null != includeAuthorizedAppsAndFetch.application;
              if (isActivityAppResult) {
                tmp2 = closure_0;
                tmp3 = closure_3;
                obj = closure_0(closure_3[15]);
                isActivityAppResult = obj.isActivityApp(includeAuthorizedAppsAndFetch.application);
              }
              if (isActivityAppResult) {
                tmp4 = closure_0;
                tmp5 = closure_3;
                obj2 = closure_0(closure_3[16]);
                tmp6 = context;
                isActivityAppResult = null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
              }
              return isActivityAppResult;
            }
          }
          cResult[29] = context;
          class M {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              nsfwAllowed = undefined;
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              return nsfwAllowed;
            }
          }
          cResult[30] = H;
          let found = H;
        } else {
          class H {
            constructor(arg0) {
              isActivityAppResult = null != includeAuthorizedAppsAndFetch.application;
              if (isActivityAppResult) {
                tmp2 = closure_0;
                tmp3 = closure_3;
                obj = closure_0(closure_3[15]);
                isActivityAppResult = obj.isActivityApp(includeAuthorizedAppsAndFetch.application);
              }
              if (isActivityAppResult) {
                tmp4 = closure_0;
                tmp5 = closure_3;
                obj2 = closure_0(closure_3[16]);
                tmp6 = context;
                isActivityAppResult = null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
              }
              return isActivityAppResult;
            }
          }
        }
        if (cResult[31] !== tmp20) {
          class H {
            constructor(arg0) {
              isActivityAppResult = null != includeAuthorizedAppsAndFetch.application;
              if (isActivityAppResult) {
                tmp2 = closure_0;
                tmp3 = closure_3;
                obj = closure_0(closure_3[15]);
                isActivityAppResult = obj.isActivityApp(includeAuthorizedAppsAndFetch.application);
              }
              if (isActivityAppResult) {
                tmp4 = closure_0;
                tmp5 = closure_3;
                obj2 = closure_0(closure_3[16]);
                tmp6 = context;
                isActivityAppResult = null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
              }
              return isActivityAppResult;
            }
          }
          cResult[31] = tmp20;
          class M {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              nsfwAllowed = undefined;
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              return nsfwAllowed;
            }
          }
          cResult[32] = tmp31;
        } else {
          class H {
            constructor(arg0) {
              isActivityAppResult = null != includeAuthorizedAppsAndFetch.application;
              if (isActivityAppResult) {
                tmp2 = closure_0;
                tmp3 = closure_3;
                obj = closure_0(closure_3[15]);
                isActivityAppResult = obj.isActivityApp(includeAuthorizedAppsAndFetch.application);
              }
              if (isActivityAppResult) {
                tmp4 = closure_0;
                tmp5 = closure_3;
                obj2 = closure_0(closure_3[16]);
                tmp6 = context;
                isActivityAppResult = null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
              }
              return isActivityAppResult;
            }
          }
        }
        class M {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            nsfwAllowed = undefined;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        found = arr7.filter(tmp31);
        const found1 = found.filter(U);
        cResult[24] = context;
        cResult[25] = tmp20;
        cResult[26] = sortApplicationsViaFrecency;
        cResult[27] = U;
        cResult[28] = found1;
      } else {
        class H {
          constructor(arg0) {
            isActivityAppResult = null != includeAuthorizedAppsAndFetch.application;
            if (isActivityAppResult) {
              tmp2 = closure_0;
              tmp3 = closure_3;
              obj = closure_0(closure_3[15]);
              isActivityAppResult = obj.isActivityApp(includeAuthorizedAppsAndFetch.application);
            }
            if (isActivityAppResult) {
              tmp4 = closure_0;
              tmp5 = closure_3;
              obj2 = closure_0(closure_3[16]);
              tmp6 = context;
              isActivityAppResult = null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
            }
            return isActivityAppResult;
          }
        }
        if (cResult[22] !== tmp20) {
          class H {
            constructor(arg0) {
              isActivityAppResult = null != includeAuthorizedAppsAndFetch.application;
              if (isActivityAppResult) {
                tmp2 = closure_0;
                tmp3 = closure_3;
                obj = closure_0(closure_3[15]);
                isActivityAppResult = obj.isActivityApp(includeAuthorizedAppsAndFetch.application);
              }
              if (isActivityAppResult) {
                tmp4 = closure_0;
                tmp5 = closure_3;
                obj2 = closure_0(closure_3[16]);
                tmp6 = context;
                isActivityAppResult = null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
              }
              return isActivityAppResult;
            }
          }
          cResult[22] = tmp20;
          class M {
            constructor() {
              currentUser = closure_1_7.getCurrentUser();
              nsfwAllowed = undefined;
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              return nsfwAllowed;
            }
          }
          cResult[23] = tmp26;
        } else {
          class H {
            constructor(arg0) {
              isActivityAppResult = null != includeAuthorizedAppsAndFetch.application;
              if (isActivityAppResult) {
                tmp2 = closure_0;
                tmp3 = closure_3;
                obj = closure_0(closure_3[15]);
                isActivityAppResult = obj.isActivityApp(includeAuthorizedAppsAndFetch.application);
              }
              if (isActivityAppResult) {
                tmp4 = closure_0;
                tmp5 = closure_3;
                obj2 = closure_0(closure_3[16]);
                tmp6 = context;
                isActivityAppResult = null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
              }
              return isActivityAppResult;
            }
          }
        }
        const found2 = sortApplicationsViaFrecency.filter(tmp26);
        class M {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            nsfwAllowed = undefined;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            return nsfwAllowed;
          }
        }
        cResult[18] = tmp20;
        cResult[19] = sortApplicationsViaFrecency;
        cResult[20] = U;
        cResult[21] = tmp28;
      }
      const tmpResult6 = context(504);
    }
  }
  class F {
    constructor() {
      tmp = closure_1;
      if (closure_1) {
        tmp2 = closure_2;
        tmp3 = FetchState;
        tmp = closure_2 === FetchState.NOT_FETCHED;
      }
      if (tmp) {
        tmp4 = closure_1;
        tmp5 = closure_3;
        obj = closure_1(closure_3[11]);
        response = obj.fetch();
      }
      return;
    }
  }
  const items3 = [includeAuthorizedAppsAndFetch, stateFromStores];
  cResult[2] = stateFromStores;
  cResult[3] = includeAuthorizedAppsAndFetch;
  cResult[4] = F;
  cResult[5] = items3;
  tmp9 = items3;
  tmp8 = F;
  const tmpResult = context(504);
}) : ((onlyActivityApps) => {
  ({ sectionDescriptors, context } = onlyActivityApps);
  onlyActivityApps = onlyActivityApps.onlyActivityApps;
  const includeAuthorizedAppsAndFetch = onlyActivityApps.includeAuthorizedAppsAndFetch;
  let stateFromStores;
  noop = undefined;
  let memo;
  let stateFromStores1;
  let items = [memo];
  stateFromStores = context(stateFromStores[10]).useStateFromStores(items, () => memo.getFetchState());
  const items1 = [includeAuthorizedAppsAndFetch, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = includeAuthorizedAppsAndFetch;
    if (includeAuthorizedAppsAndFetch) {
      tmp = stateFromStores === FetchState.NOT_FETCHED;
    }
    if (tmp) {
      const response = AuthorizedAppsActionCreatorsDefault.fetch();
    }
  }, items1);
  let obj = context(stateFromStores[10]);
  const items2 = [memo];
  const stateFromStoresArray = context(stateFromStores[10]).useStateFromStoresArray(items2, () => {
    if (includeAuthorizedAppsAndFetch) {
      const newestTokens = AuthorizedAppsStore.getNewestTokens();
      let found = newestTokens.filter((scopes) => {
        scopes = scopes.scopes;
        return scopes.includes(context(stateFromStores[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
      });
    } else {
      found = [];
    }
    return found;
  });
  noop = tmp5;
  const items3 = ["contextless" === context.type];
  let found = sectionDescriptors.filter((id) => id.id !== constants.FRECENCY && id.id !== tmp.BUILT_IN);
  memo = noop.useMemo(() => {
    const items = [];
    if (closure_4) {
      items.push(WATCH_YOUTUBE_PROD_APP_ID);
    }
    return items;
  }, items3);
  let obj2 = context(stateFromStores[10]);
  const sortApplicationsViaFrecency = context(stateFromStores[13]).useSortApplicationsViaFrecency(found, stateFromStoresArray);
  const obj3 = context(stateFromStores[13]);
  const items4 = [stateFromStores1];
  stateFromStores1 = context(stateFromStores[10]).useStateFromStores(items4, () => {
    const currentUser = stateFromStores1.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items5 = [onlyActivityApps, sortApplicationsViaFrecency, context, memo, stateFromStores1];
  return noop.useMemo(() => {
    function hideAgeRestricted(id) {
      let tmp = false === stateFromStores1;
      if (tmp) {
        tmp = onlyActivityApps(stateFromStores[14])(id.id);
      }
      return !tmp;
    }
    const filter = sortApplicationsViaFrecency.filter;
    if (onlyActivityApps) {
      const found = filter((application) => {
        let isActivityAppResult = null != application.application;
        if (isActivityAppResult) {
          isActivityAppResult = context(stateFromStores[15]).isActivityApp(application.application);
          const obj = context(stateFromStores[15]);
        }
        if (isActivityAppResult) {
          isActivityAppResult = null != context(stateFromStores[16]).queryForPrimaryAppCommand(closure_1_0, application.id);
          const obj2 = context(stateFromStores[16]);
        }
        return isActivityAppResult;
      });
      const found1 = found.filter((id) => !memo.includes(id.id));
      let found2 = found1.filter(hideAgeRestricted);
    } else {
      const found3 = filter((id) => !memo.includes(id.id));
      found2 = found3.filter(hideAgeRestricted);
    }
    return found2;
  }, items5);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  filters = filterSection(576);
  const cResult = filters.c(29);
  ({ context, onlyActivityApps } = arg0);
  if (cResult[0] !== context) {
    const obj2 = { context, filters, options, allowFetch: true };
    cResult[0] = context;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const discovery = ApplicationCommandQueryApiAll.useDiscovery(tmp4);
  ({ commands, commandsByActiveSection, sectionDescriptors, filterSection } = discovery);
  if (cResult[2] !== filterSection) {
    class A {
      constructor() {
        tmp = filterSection(BuiltInSectionId.FRECENCY);
        return;
      }
    }
    const items = [filterSection];
    cResult[2] = filterSection;
    cResult[3] = A;
    cResult[4] = items;
    let tmp9 = items;
  } else {
    class A {
      constructor() {
        tmp = filterSection(BuiltInSectionId.FRECENCY);
        return;
      }
    }
    tmp9 = cResult[4];
  }
  const effect = noop.useEffect(A, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        tmp = filterSection(BuiltInSectionId.FRECENCY);
        return;
      }
    }
    const items1 = [AppLauncherLastUsedCommandStore];
    class F {
      constructor() {
        return closure_1_8.getLastUsedCommandId();
      }
    }
    cResult[5] = items1;
    cResult[6] = F;
    let tmp12 = F;
    const tmp11 = items1;
  } else {
    class A {
      constructor() {
        tmp = filterSection(BuiltInSectionId.FRECENCY);
        return;
      }
    }
    tmp12 = cResult[6];
  }
  const stateFromStores = filterSection(504).useStateFromStores(tmp11, tmp12);
  if (cResult[7] === commands) {
    class A {
      constructor() {
        tmp = filterSection(BuiltInSectionId.FRECENCY);
        return;
      }
    }
  }
  if (!onlyActivityApps) {
    class A {
      constructor() {
        tmp = filterSection(BuiltInSectionId.FRECENCY);
        return;
      }
    }
    class F {
      constructor() {
        return closure_1_8.getLastUsedCommandId();
      }
    }
    if (undefined == null) {
      class A {
        constructor() {
          tmp = filterSection(BuiltInSectionId.FRECENCY);
          return;
        }
      }
    }
    if (cResult[13] === commands) {
      class A {
        constructor() {
          tmp = filterSection(BuiltInSectionId.FRECENCY);
          return;
        }
      }
    }
    if (cResult[16] !== stateFromStores) {
      class A {
        constructor() {
          tmp = filterSection(BuiltInSectionId.FRECENCY);
          return;
        }
      }
      cResult[16] = stateFromStores;
      class F {
        constructor() {
          return closure_1_8.getLastUsedCommandId();
        }
      }
      cResult[17] = tmp17;
    } else {
      class A {
        constructor() {
          tmp = filterSection(BuiltInSectionId.FRECENCY);
          return;
        }
      }
    }
    const found = commands.find(tmp17);
    cResult[13] = commands;
    cResult[14] = stateFromStores;
    cResult[15] = found;
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        tmp = filterSection(BuiltInSectionId.FRECENCY);
        return;
      }
    }
    cResult[12] = tmp20;
    class F {
      constructor() {
        return closure_1_8.getLastUsedCommandId();
      }
    }
  } else {
    class A {
      constructor() {
        tmp = filterSection(BuiltInSectionId.FRECENCY);
        return;
      }
    }
  }
  const tmpResult = filterSection(504);
}) : ((arg0) => {
  ({ context, onlyActivityApps } = arg0);
  let commandsByActiveSection;
  filterSection = undefined;
  let stateFromStores;
  filters = commandsByActiveSection(filterSection[9]);
  const discovery = filters.useDiscovery({ context, filters, options, allowFetch: true });
  const commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  ({ sectionDescriptors, filterSection } = discovery);
  let items = [filterSection];
  const effect = stateFromStores.useEffect(() => {
    filterSection(BuiltInSectionId.FRECENCY);
  }, items);
  const items1 = [AppLauncherLastUsedCommandStore];
  stateFromStores = onlyActivityApps(filterSection[10]).useStateFromStores(items1, () => lastUsedCommandId.getLastUsedCommandId());
  const obj4 = { loading: discovery.loading, frecencyCommands: null, frecentApps: closure_13({ sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch: true }), sectionDescriptors };
  const items2 = [commands, commandsByActiveSection, stateFromStores, onlyActivityApps];
  obj4.frecencyCommands = stateFromStores.useMemo(() => {
    if (onlyActivityApps) {
      return [];
    } else {
      const first = commandsByActiveSection[0];
      let data;
      if (first != null) {
        data = first.data;
      }
      if (data == null) {
        data = [];
      }
      const found = commands.find((id) => id.id === stateFromStores);
      let tmp6 = data;
      if (null != found) {
        const items = [found];
        HermesBuiltin.arraySpread(data.filter((id) => id.id !== stateFromStores), 1);
        tmp6 = items;
      }
      return tmp6;
    }
  }, items2);
  return obj4;
});
export const useAppLauncherFrecentApps = tmp3;