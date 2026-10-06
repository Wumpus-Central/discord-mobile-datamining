// discord_app/modules/app_launcher/hooks/useAppLauncherFrecents.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Server from "../../../flow/Server.tsx";
import Constants from "../../activities/Constants.tsx";
import AuthorizedAppsStore2 from "../../oauth2/AuthorizedAppsStore.tsx";
import AuthorizedAppsActionCreatorsDefault from "../../oauth2/AuthorizedAppsActionCreators.tsx";
import AppLauncherUtils from "../utils/AppLauncherUtils.tsx";
import isApplicationAgeRestrictedDefault from "../../applications/utils/isApplicationAgeRestricted.tsx";
import ApplicationCommandQueryApiAll from "../../application_commands/ApplicationCommandQueryApi.tsx";
import getPrimaryAppCommand from "../../application_commands/getPrimaryAppCommand.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import AppLauncherLastUsedCommandStore from "../AppLauncherLastUsedCommandStore.tsx";
import ApplicationCommandConstants from "../../application_commands/ApplicationCommandConstants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AuthorizedAppsStore = AuthorizedAppsStore2;
let scopes, tmp2;

let items;
let react = react_mod;
const FetchState = AuthorizedAppsStore2.FetchState;
const WATCH_YOUTUBE_PROD_APP_ID = Constants.WATCH_YOUTUBE_PROD_APP_ID;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let filters = { commandTypes: items };
const DISCOVERY_COMMANDS_QUERY_LIMIT = ApplicationCommandConstants.DISCOVERY_COMMANDS_QUERY_LIMIT;
items = [Server.ApplicationCommandType.CHAT, Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
const options = { placeholderCount: 0, limit: DISCOVERY_COMMANDS_QUERY_LIMIT, includeFrecency: true };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let allowCommandFetch;
      let context;
      let includeAuthorizedAppsAndFetch;
      let loading;
      let onlyActivityApps;
      let sectionDescriptors;
      filters = react2;
      const cResult = filters.c(11);
      ({ context, onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = arg0);
      if (cResult[0] === allowCommandFetch) {
        let tmp3;
        if (cResult[1] === context) {
          tmp3 = cResult[2];
        }
        const obj3 = ApplicationCommandQueryApiAll;
        const discovery = obj3.useDiscovery(tmp3);
        ({ sectionDescriptors, loading } = discovery);
        if (cResult[3] === context) {
          if (cResult[4] === includeAuthorizedAppsAndFetch) {
            if (cResult[5] === onlyActivityApps) {
              let tmp6;
              if (cResult[6] === sectionDescriptors) {
                tmp6 = cResult[7];
              }
              const tmp8 = closure_13(tmp6);
              if (cResult[8] === tmp8) {
                let tmp9;
                if (cResult[9] === loading) {
                  tmp9 = cResult[10];
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
    }
  : (context) => {
      let allowCommandFetch;
      let includeAuthorizedAppsAndFetch;
      let onlyActivityApps;
      context = context.context;
      ({ onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = context);
      filters = ApplicationCommandQueryApiAll;
      const obj2 = { context, filters, options, allowFetch: allowCommandFetch };
      const discovery = filters.useDiscovery(obj2);
      const obj3 = { loading: discovery.loading, frecentApps: closure_13(obj4) };
      return obj3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let commands;
      let commandsByActiveSection;
      let context;
      let filterSection;
      let lastUsedCommandId;
      let onlyActivityApps;
      let sectionDescriptors;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp21;
      let tmp5;
      filters = filterSection(576);
      const cResult = filters.c(29);
      ({ context, onlyActivityApps } = arg0);
      if (cResult[0] !== context) {
        const obj2 = { context, filters, options, allowFetch: true };
        cResult[0] = context;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const obj3 = ApplicationCommandQueryApiAll;
      const discovery = obj3.useDiscovery(tmp5);
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
        tmp10 = items;
      } else {
        class A {
          constructor() {
            tmp = filterSection(BuiltInSectionId.FRECENCY);
            return;
          }
        }
        tmp10 = cResult[4];
      }
      const effect = react.useEffect(A, tmp10);
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
        tmp13 = F;
        tmp12 = items1;
      } else {
        class A {
          constructor() {
            tmp = filterSection(BuiltInSectionId.FRECENCY);
            return;
          }
        }
        tmp13 = cResult[6];
      }
      const tmp2Result = filterSection(504);
      const stateFromStores = tmp2Result.useStateFromStores(tmp12, tmp13);
      if (cResult[7] === commands) {
        class A {
          constructor() {
            tmp = filterSection(BuiltInSectionId.FRECENCY);
            return;
          }
        }
      }
      if (onlyActivityApps) {
        class A {
          constructor() {
            tmp = filterSection(BuiltInSectionId.FRECENCY);
            return;
          }
        }
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              tmp = filterSection(BuiltInSectionId.FRECENCY);
              return;
            }
          }
          cResult[12] = tmp25;
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
          tmp21 = tmp16;
          if (null != tmp17) {
            class A {
              constructor() {
                tmp = filterSection(BuiltInSectionId.FRECENCY);
                return;
              }
            }
            const items2 = [tmp17];
            class F {
              constructor() {
                return closure_1_8.getLastUsedCommandId();
              }
            }
            HermesBuiltin.arraySpread(items2, undefined.filter(tmp22), 1);
            tmp21 = items2;
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
          cResult[17] = tmp19;
        } else {
          class A {
            constructor() {
              tmp = filterSection(BuiltInSectionId.FRECENCY);
              return;
            }
          }
        }
        const found = commands.find(tmp19);
        cResult[13] = commands;
        cResult[14] = stateFromStores;
        cResult[15] = found;
      }
      cResult[7] = commands;
      cResult[8] = commandsByActiveSection;
      cResult[9] = stateFromStores;
      cResult[10] = onlyActivityApps;
      cResult[11] = tmp21;
    }
  : (arg0) => {
      let context;
      let filterSection;
      let items2;
      let lastUsedCommandId;
      let onlyActivityApps;
      let sectionDescriptors;
      ({ context, onlyActivityApps } = arg0);
      let commandsByActiveSection;
      filterSection = undefined;
      let stateFromStores;
      filters = commandsByActiveSection(filterSection[9]);
      const obj2 = { context, filters, options, allowFetch: true };
      const discovery = filters.useDiscovery(obj2);
      const commands = discovery.commands;
      commandsByActiveSection = discovery.commandsByActiveSection;
      ({ sectionDescriptors, filterSection } = discovery);
      let items = [filterSection];
      const loading = discovery.loading;
      const effect = stateFromStores.useEffect(() => {
        filterSection(BuiltInSectionId.FRECENCY);
      }, items);
      const items1 = [AppLauncherLastUsedCommandStore];
      const obj3 = onlyActivityApps(filterSection[10]);
      stateFromStores = obj3.useStateFromStores(items1, () => lastUsedCommandId.getLastUsedCommandId());
      const obj4 = {
        loading,
        frecencyCommands: stateFromStores.useMemo(() => {
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
            let tmp8 = data;
            if (null != found) {
              const items = [found];
              HermesBuiltin.arraySpread(
                items,
                data.filter((id) => id.id !== stateFromStores),
                1,
              );
              tmp8 = items;
            }
            return tmp8;
          }
        }, items2),
        frecentApps: closure_13({ sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch: true }),
        sectionDescriptors,
      };
      items2 = [commands, commandsByActiveSection, stateFromStores, onlyActivityApps];
      return obj4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (includeAuthorizedAppsAndFetch) => {
      let arr4;
      let context;
      let fetchState;
      let sectionDescriptors;
      let stateFromStores1;
      let tmp4;
      let tmp5;
      let obj = context(arr4[8]);
      const cResult = obj.c(33);
      ({ sectionDescriptors, context } = includeAuthorizedAppsAndFetch);
      includeAuthorizedAppsAndFetch = includeAuthorizedAppsAndFetch.includeAuthorizedAppsAndFetch;
      const onlyActivityApps = includeAuthorizedAppsAndFetch.onlyActivityApps;
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
      const tmpResult = context(arr4[10]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, A);
      if (cResult[2] === stateFromStores) {
        let tmp8;
        let tmp9;
        let tmp12;
        let tmp22;
        let tmp21;
        if (cResult[3] === includeAuthorizedAppsAndFetch) {
          tmp8 = cResult[4];
          tmp9 = cResult[5];
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
          tmp12 = items1;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] !== includeAuthorizedAppsAndFetch) {
          class D {
            constructor() {
              tmp = closure_1;
              if (tmp) {
                tmp2 = closure_5;
                newestTokens = closure_5.getNewestTokens();
                found = newestTokens.filter(() => {
                  /* body not rendered: F141915 */
                });
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
              tmp = closure_1;
              if (tmp) {
                tmp2 = closure_5;
                newestTokens = closure_5.getNewestTokens();
                found = newestTokens.filter(() => {
                  /* body not rendered: F141915 */
                });
              } else {
                found = [];
              }
              return found;
            }
          }
        }
        const tmpResult4 = context(arr4[10]);
        const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp12, D);
        if (cResult[9] !== sectionDescriptors) {
          class D {
            constructor() {
              tmp = closure_1;
              if (tmp) {
                tmp2 = closure_5;
                newestTokens = closure_5.getNewestTokens();
                found = newestTokens.filter(() => {
                  /* body not rendered: F141915 */
                });
              } else {
                found = [];
              }
              return found;
            }
          }
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor(arg0) {
                tmp2 =
                  includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                  includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
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
                tmp2 =
                  includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                  includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
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
              tmp2 =
                includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
              return tmp2;
            }
          }
        }
        if (cResult[12] !== ("contextless" === context.type)) {
          class T {
            constructor(arg0) {
              tmp2 =
                includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
              return tmp2;
            }
          }
          if ("contextless" === context.type) {
            class T {
              constructor(arg0) {
                tmp2 =
                  includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                  includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
                return tmp2;
              }
            }
            arr4.push(WATCH_YOUTUBE_PROD_APP_ID);
          }
          class A {
            constructor() {
              return closure_1_5.getFetchState();
            }
          }
          cResult[13] = arr4;
        } else {
          class T {
            constructor(arg0) {
              tmp2 =
                includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
              return tmp2;
            }
          }
        }
        arr4 = tmp19;
        const tmpResult5 = context(arr4[13]);
        const sortApplicationsViaFrecency = tmpResult5.useSortApplicationsViaFrecency(tmp17, stateFromStoresArray);
        const _Symbol = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(arg0) {
              tmp2 =
                includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
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
          tmp22 = M;
          tmp21 = items2;
        } else {
          class T {
            constructor(arg0) {
              tmp2 =
                includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
              return tmp2;
            }
          }
          tmp22 = cResult[15];
        }
        const tmpResult6 = context(arr4[10]);
        stateFromStores1 = tmpResult6.useStateFromStores(tmp21, tmp22);
        class F {
          constructor() {
            tmp = closure_1;
            if (tmp) {
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
        if (onlyActivityApps) {
          class T {
            constructor(arg0) {
              tmp2 =
                includeAuthorizedAppsAndFetch.id !== closure_1_10.FRECENCY &&
                includeAuthorizedAppsAndFetch.id !== tmp.BUILT_IN;
              return tmp2;
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
                  isActivityAppResult =
                    null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
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
                  isActivityAppResult =
                    null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
                }
                return isActivityAppResult;
              }
            }
          }
          if (cResult[31] !== tmp19) {
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
                  isActivityAppResult =
                    null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
                }
                return isActivityAppResult;
              }
            }
            cResult[31] = tmp19;
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
            cResult[32] = tmp33;
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
                  isActivityAppResult =
                    null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
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
          let found = arr7.filter(tmp33);
          const found1 = found.filter(tmp24);
          cResult[24] = context;
          cResult[25] = tmp19;
          cResult[26] = sortApplicationsViaFrecency;
          cResult[27] = tmp24;
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
          if (cResult[22] !== tmp19) {
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
                  isActivityAppResult =
                    null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
                }
                return isActivityAppResult;
              }
            }
            cResult[22] = tmp19;
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
            cResult[23] = tmp27;
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
                  isActivityAppResult =
                    null != obj2.queryForPrimaryAppCommand(context, includeAuthorizedAppsAndFetch.id);
                }
                return isActivityAppResult;
              }
            }
          }
          const found2 = sortApplicationsViaFrecency.filter(tmp27);
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
          cResult[18] = tmp19;
          cResult[19] = sortApplicationsViaFrecency;
          cResult[20] = tmp24;
          cResult[21] = tmp29;
        }
        return tmp29;
      }
      class F {
        constructor() {
          tmp = closure_1;
          if (tmp) {
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
    }
  : (onlyActivityApps) => {
      let closure_4;
      let context;
      let sectionDescriptors;
      ({ sectionDescriptors, context } = onlyActivityApps);
      onlyActivityApps = onlyActivityApps.onlyActivityApps;
      const includeAuthorizedAppsAndFetch = onlyActivityApps.includeAuthorizedAppsAndFetch;
      let stateFromStores;
      react = undefined;
      let memo;
      let stateFromStores1;
      let obj = context(stateFromStores[10]);
      let items = [memo];
      stateFromStores = obj.useStateFromStores(items, () => memo.getFetchState());
      const items1 = [includeAuthorizedAppsAndFetch, stateFromStores];
      const effect = react.useEffect(() => {
        const tmp = includeAuthorizedAppsAndFetch && stateFromStores === FetchState.NOT_FETCHED;
        if (tmp) {
          const obj = AuthorizedAppsActionCreatorsDefault;
          const response = obj.fetch();
        }
      }, items1);
      let obj2 = context(stateFromStores[10]);
      const items2 = [memo];
      const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
        let found;
        if (includeAuthorizedAppsAndFetch) {
          const newestTokens = AuthorizedAppsStore.getNewestTokens();
          found = newestTokens.filter((scopes) => {
            scopes = scopes.scopes;
            return scopes.includes(context(stateFromStores[12]).OAuth2Scopes.APPLICATIONS_COMMANDS);
          });
        } else {
          found = [];
        }
        return found;
      });
      react = tmp5;
      const items3 = ["contextless" === context.type];
      let found = sectionDescriptors.filter((id) => id.id !== constants.FRECENCY && id.id !== tmp.BUILT_IN);
      memo = react.useMemo(() => {
        const items = [];
        if (closure_4) {
          items.push(WATCH_YOUTUBE_PROD_APP_ID);
        }
        return items;
      }, items3);
      const obj3 = context(stateFromStores[13]);
      const sortApplicationsViaFrecency = obj3.useSortApplicationsViaFrecency(found, stateFromStoresArray);
      const items4 = [stateFromStores1];
      const obj4 = context(stateFromStores[10]);
      stateFromStores1 = obj4.useStateFromStores(items4, () => {
        const currentUser = stateFromStores1.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return nsfwAllowed;
      });
      const items5 = [onlyActivityApps, sortApplicationsViaFrecency, context, memo, stateFromStores1];
      return react.useMemo(() => {
        let found2;
        function hideAgeRestricted(id) {
          const tmp = false === stateFromStores1 && onlyActivityApps(stateFromStores[14])(id.id);
          return !tmp;
        }
        const filter = sortApplicationsViaFrecency.filter;
        if (onlyActivityApps) {
          const found = filter((application) => {
            let isActivityAppResult = null != application.application;
            if (isActivityAppResult) {
              const obj = context(stateFromStores[15]);
              isActivityAppResult = obj.isActivityApp(application.application);
            }
            if (isActivityAppResult) {
              const obj2 = context(stateFromStores[16]);
              isActivityAppResult = null != obj2.queryForPrimaryAppCommand(closure_1_0, application.id);
            }
            return isActivityAppResult;
          });
          const found1 = found.filter((id) => !memo.includes(id.id));
          found2 = found1.filter(hideAgeRestricted);
        } else {
          const found3 = filter((id) => !memo.includes(id.id));
          found2 = found3.filter(hideAgeRestricted);
        }
        return found2;
      }, items5);
    };
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default tmp4;
export const useAppLauncherFrecentApps = tmp3;
