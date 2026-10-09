// === Module 11763: useAppsInThisServer ===

// Module 11763 (useAppsInThisServer)
import _modDef12 from "module_12" /* 12 */;
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi" /* 9778 */;
import isApplicationAgeRestrictedDefault from "isApplicationAgeRestricted" /* 9780 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
const useGuildIndexState = fn(9220).useGuildIndexState;
const limit = fn(5400).DISCOVERY_COMMANDS_QUERY_LIMIT;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/hooks/useAppsInThisServer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAppsInThisServer(context) {
  let mapped = dependencyMap;
  const cResult = require("c").c(24);
  context = context.context;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp5Result = useGuildIndexState(guild_id, true);
  _require = tmp5Result;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return nsfwAllowed;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { commandTypes: null };
    const items1 = [tmp(1998).ApplicationCommandType.CHAT, tmp(1998).ApplicationCommandType.PRIMARY_ENTRY_POINT];
    obj2.commandTypes = items1;
    const obj3 = { placeholderCount: 0, limit, includeFrecency: true };
    cResult[2] = obj2;
    cResult[3] = obj3;
    let tmp13 = obj3;
    let tmp12 = obj2;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  if (cResult[4] !== context) {
    const obj4 = { context, filters: tmp12, options: tmp13, allowFetch: true };
    cResult[4] = context;
    cResult[5] = obj4;
    let tmp15 = obj4;
  } else {
    tmp15 = cResult[5];
  }
  const tmpResult = require("initialize");
  const discovery = ApplicationCommandQueryApiAll.useDiscovery(tmp15);
  const prop = discovery.commandsByActiveSection;
  if (cResult[6] !== prop) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0, arg1) {
          if (arg1.data.length > 0) {
            addResult = context.add(tmp.id);
          }
          return context;
        }
      }
      cResult[8] = I;
    } else {
      class I {
        constructor(arg0, arg1) {
          if (arg1.data.length > 0) {
            addResult = context.add(tmp.id);
          }
          return context;
        }
      }
    }
    const _Set = Set;
    const set = new Set();
    const reduced = prop.reduce(I, set);
    cResult[6] = prop;
    cResult[7] = reduced;
  } else {
    class I {
      constructor(arg0, arg1) {
        if (arg1.data.length > 0) {
          addResult = context.add(tmp.id);
        }
        return context;
      }
    }
    importAll = tmp17;
    if (tmp5Result.result != null) {
      class I {
        constructor(arg0, arg1) {
          if (arg1.data.length > 0) {
            addResult = context.add(tmp.id);
          }
          return context;
        }
      }
    }
    if (cResult[9] === undefined) {
      class I {
        constructor(arg0, arg1) {
          if (arg1.data.length > 0) {
            addResult = context.add(tmp.id);
          }
          return context;
        }
      }
      let result = tmp5Result.result;
      if (cResult[12] !== F) {
        class I {
          constructor(arg0, arg1) {
            if (arg1.data.length > 0) {
              addResult = context.add(tmp.id);
            }
            return context;
          }
        }
        cResult[12] = F;
        cResult[13] = tmp29;
      } else {
        class I {
          constructor(arg0, arg1) {
            if (arg1.data.length > 0) {
              addResult = context.add(tmp.id);
            }
            return context;
          }
        }
      }
      const sortApplicationsViaFrecency = tmp(11762).useSortApplicationsViaFrecency(tmp29);
      if (cResult[14] === stateFromStores) {
        class I {
          constructor(arg0, arg1) {
            if (arg1.data.length > 0) {
              addResult = context.add(tmp.id);
            }
            return context;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            return context.application;
          }
        }
        cResult[17] = R;
      } else {
        class R {
          constructor(arg0) {
            return context.application;
          }
        }
      }
      if (cResult[18] !== stateFromStores) {
        class R {
          constructor(arg0) {
            return context.application;
          }
        }
        cResult[18] = stateFromStores;
        cResult[19] = tmp32;
      } else {
        class R {
          constructor(arg0) {
            return context.application;
          }
        }
      }
      class F {
        constructor() {
          result = closure_0.result;
          sections = undefined;
          if (result != null) {
            sections = result.sections;
          }
          if (sections == null) {
            sections = {};
          }
          values = Object.values(sections);
          mapped = values.map((descriptor) => descriptor.descriptor);
          return mapped.filter((id) => {
            let hasItem = !(id.id in closure_0(dependencyMap[9]).BUILT_IN_SECTIONS);
            if (hasItem) {
              hasItem = set.has(id.id);
            }
            return hasItem;
          });
        }
      }
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(arg0) {
            obj = { application: context };
            return obj;
          }
        }
        cResult[20] = E;
      } else {
        class E {
          constructor(arg0) {
            obj = { application: context };
            return obj;
          }
        }
      }
      const tmpResult2 = tmp(11762);
      const obj8 = stateFromStores(12);
      const found = stateFromStores(12).compact(sortApplicationsViaFrecency.map(R)).filter(tmp32);
      mapped = found.map(E);
      cResult[14] = stateFromStores;
      cResult[15] = sortApplicationsViaFrecency;
      cResult[16] = mapped;
      const compactResult = stateFromStores(12).compact(sortApplicationsViaFrecency.map(R));
    }
    if (tmp5Result.result != null) {
      class E {
        constructor(arg0) {
          obj = { application: context };
          return obj;
        }
      }
    }
    class F {
      constructor() {
        result = closure_0.result;
        sections = undefined;
        if (result != null) {
          sections = result.sections;
        }
        if (sections == null) {
          sections = {};
        }
        values = Object.values(sections);
        mapped = values.map((descriptor) => descriptor.descriptor);
        return mapped.filter((id) => {
          let hasItem = !(id.id in closure_0(dependencyMap[9]).BUILT_IN_SECTIONS);
          if (hasItem) {
            hasItem = set.has(id.id);
          }
          return hasItem;
        });
      }
    }
    cResult[9] = undefined;
    cResult[10] = tmp17;
    cResult[11] = F;
  }
}) : (function useAppsInThisServer(context) {
  context = context.context;
  _require = undefined;
  let stateFromStores;
  let commandsByActiveSection;
  let memo;
  let sortApplicationsViaFrecency;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp2Result = useGuildIndexState(guild_id, true);
  _require = tmp2Result;
  const items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  let obj = require("initialize");
  const tmp5 = _require;
  const tmp6 = memo;
  const obj3 = { context, filters: null, options: null, allowFetch: true };
  const obj4 = { commandTypes: null };
  const items1 = [require("Server").ApplicationCommandType.CHAT, require("Server").ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj4.commandTypes = items1;
  obj3.filters = obj4;
  obj3.options = { placeholderCount: 0, limit, includeFrecency: true };
  const discovery = commandsByActiveSection(memo[8]).useDiscovery(obj3);
  commandsByActiveSection = discovery.commandsByActiveSection;
  const items2 = [commandsByActiveSection];
  memo = sortApplicationsViaFrecency.useMemo(() => commandsByActiveSection.reduce((add, data) => {
    if (data.data.length > 0) {
      add.add(tmp.id);
    }
    return add;
  }, new Set()), items2);
  let result = tmp2Result.result;
  let sections;
  if (result != null) {
    sections = result.sections;
  }
  const items3 = [sections, memo];
  const memo1 = sortApplicationsViaFrecency.useMemo(() => {
    result = result.result;
    let sections;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const values = Object.values(sections);
    const mapped = values.map((descriptor) => descriptor.descriptor);
    return mapped.filter((id) => {
      let hasItem = !(id.id in closure_0(memo[9]).BUILT_IN_SECTIONS);
      if (hasItem) {
        hasItem = set.has(id.id);
      }
      return hasItem;
    });
  }, items3);
  const obj2 = commandsByActiveSection(memo[8]);
  const obj5 = { placeholderCount: 0, limit, includeFrecency: true };
  const obj6 = sortApplicationsViaFrecency;
  sortApplicationsViaFrecency = tmp5(tmp6[10]).useSortApplicationsViaFrecency(memo1);
  const obj7 = { appsInThisServer: null, isLoading: tmp2Result.fetchState.fetching || discovery.loading };
  const items4 = [stateFromStores, sortApplicationsViaFrecency];
  obj7.appsInThisServer = obj6.useMemo(() => {
    const found = _modDef12.compact(sortApplicationsViaFrecency.map((application) => application.application)).filter((id) => {
      let tmp = false === closure_1_1;
      if (tmp) {
        tmp = stateFromStores(memo[11])(id.id);
      }
      return !tmp;
    });
    return found.map((application) => ({ application }));
  }, items4);
  return obj7;
});