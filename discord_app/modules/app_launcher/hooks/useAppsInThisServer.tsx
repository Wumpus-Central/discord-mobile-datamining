// === Module 11746: useAppsInThisServer ===

// Module 11746 (useAppsInThisServer)
import _modDef12 from "module_12" /* 12 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5788 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8795 */;
import isApplicationAgeRestrictedDefault from "isApplicationAgeRestricted" /* 8929 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser, set, values, values1;

const useGuildIndexState = ApplicationCommandIndexStore.useGuildIndexState;
const limit = ApplicationCommandConstants.DISCOVERY_COMMANDS_QUERY_LIMIT;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(context) {
  let _require;
  let commandsByActiveSection;
  let items1;
  let loading;
  let reduced;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp34;
  let tmp8;
  let tmp9;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(24);
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { commandTypes: items1 };
    items1 = [tmp(1985).ApplicationCommandType.CHAT, tmp(1985).ApplicationCommandType.PRIMARY_ENTRY_POINT];
    const obj3 = { placeholderCount: 0, limit, includeFrecency: true };
    cResult[2] = obj2;
    cResult[3] = obj3;
    tmp13 = obj3;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  if (cResult[4] !== context) {
    const obj4 = { context, filters: tmp12, options: tmp13, allowFetch: true };
    cResult[4] = context;
    cResult[5] = obj4;
    tmp15 = obj4;
  } else {
    tmp15 = cResult[5];
  }
  const obj6 = reduced(8939);
  const discovery = obj6.useDiscovery(tmp15);
  ({ commandsByActiveSection, loading } = discovery);
  if (cResult[6] !== commandsByActiveSection) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(add, data) {
          if (data.data.length > 0) {
            add.add(tmp.id);
          }
          return add;
        }
      }
      cResult[8] = I;
    } else {
      class I {
        constructor(add, data) {
          if (data.data.length > 0) {
            add.add(tmp.id);
          }
          return add;
        }
      }
    }
    const _Set = Set;
    const self = this;
    const self2 = this;
    const reduce = commandsByActiveSection.reduce;
    set = new Set();
    reduced = reduce(I, set);
    cResult[6] = commandsByActiveSection;
    cResult[7] = reduced;
  } else {
    class I {
      constructor(add, data) {
        if (data.data.length > 0) {
          add.add(tmp.id);
        }
        return add;
      }
    }
  }
  reduced = tmp17;
  const tmp22 = cResult[9];
  if (tmp5Result.result != null) {
    class I {
      constructor(add, data) {
        if (data.data.length > 0) {
          add.add(tmp.id);
        }
        return add;
      }
    }
  }
  if (tmp22 === undefined) {
    class I {
      constructor(add, data) {
        if (data.data.length > 0) {
          add.add(tmp.id);
        }
        return add;
      }
    }
    result = tmp5Result.result;
    if (cResult[12] !== F) {
      class I {
        constructor(add, data) {
          if (data.data.length > 0) {
            add.add(tmp.id);
          }
          return add;
        }
      }
      cResult[12] = F;
      cResult[13] = tmp25;
    } else {
      class I {
        constructor(add, data) {
          if (data.data.length > 0) {
            add.add(tmp.id);
          }
          return add;
        }
      }
    }
    const tmpResult2 = tmp(11745);
    const sortApplicationsViaFrecency = tmpResult2.useSortApplicationsViaFrecency(tmp25);
    if (cResult[14] === stateFromStores) {
      class I {
        constructor(add, data) {
          if (data.data.length > 0) {
            add.add(tmp.id);
          }
          return add;
        }
      }
      if (cResult[21] === tmp26) {
        class I {
          constructor(add, data) {
            if (data.data.length > 0) {
              add.add(tmp.id);
            }
            return add;
          }
        }
        return tmp34;
      }
      const obj5 = { appsInThisServer: tmp26, isLoading: tmp5Result.fetchState.fetching || loading };
      cResult[21] = tmp26;
      cResult[22] = tmp5Result.fetchState.fetching || loading;
      cResult[23] = obj5;
      tmp34 = obj5;
    }
    const _Symbol2 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(application) {
          return application.application;
        }
      }
      cResult[17] = R;
    } else {
      class R {
        constructor(application) {
          return application.application;
        }
      }
    }
    if (cResult[18] !== stateFromStores) {
      class R {
        constructor(application) {
          return application.application;
        }
      }
      cResult[18] = stateFromStores;
      cResult[19] = tmp29;
    } else {
      class R {
        constructor(application) {
          return application.application;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(application) {
          return { application };
        }
      }
      cResult[20] = E;
    } else {
      class E {
        constructor(application) {
          return { application };
        }
      }
    }
    const obj8 = stateFromStores(12);
    const compactResult = obj8.compact(sortApplicationsViaFrecency.map(R));
    const found = compactResult.filter(tmp29);
    let mapped = found.map(E);
    cResult[14] = stateFromStores;
    cResult[15] = sortApplicationsViaFrecency;
    cResult[16] = mapped;
  }
  if (tmp5Result.result != null) {
    class E {
      constructor(application) {
        return { application };
      }
    }
  }
  class F {
    constructor() {
      result = closure_0.result;
      sections = undefined;
      _Object = Object;
      values = Object.values;
      if (result != null) {
        sections = result.sections;
      }
      if (sections == null) {
        sections = {};
      }
      values1 = values(sections);
      mapped = values1.map((descriptor) => descriptor.descriptor);
      return mapped.filter((id) => {
        const hasItem = !(id.id in require("ApplicationCommandBuiltIns").BUILT_IN_SECTIONS) && set.has(id.id);
        return hasItem;
      });
    }
  }
  cResult[9] = undefined;
  cResult[10] = tmp17;
  cResult[11] = F;
}) : ((context) => {
  let items1;
  let items4;
  let obj3;
  let obj4;
  context = context.context;
  let _require;
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
  let obj = require("get initialized");
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const obj2 = { context, filters: obj3, options: obj4, allowFetch: true };
  obj3 = { commandTypes: items1 };
  const useDiscovery = commandsByActiveSection(memo[8]).useDiscovery;
  items1 = [, ];
  commandsByActiveSection(memo[8]);
  items1[0] = require("Server").ApplicationCommandType.CHAT;
  items1[1] = require("Server").ApplicationCommandType.PRIMARY_ENTRY_POINT;
  obj4 = { placeholderCount: 0, limit, includeFrecency: true };
  const discovery = useDiscovery(obj2);
  commandsByActiveSection = discovery.commandsByActiveSection;
  const items2 = [commandsByActiveSection];
  const loading = discovery.loading;
  const tmp6 = memo;
  memo = sortApplicationsViaFrecency.useMemo(() => {
    const reduce = commandsByActiveSection.reduce;
    set = new Set();
    return reduce((add, data) => {
      if (data.data.length > 0) {
        add.add(tmp.id);
      }
      return add;
    }, set);
  }, items2);
  result = tmp2Result.result;
  let sections;
  const useMemo = sortApplicationsViaFrecency.useMemo;
  const obj5 = sortApplicationsViaFrecency;
  const tmp5 = _require;
  if (result != null) {
    sections = result.sections;
  }
  const items3 = [sections, memo];
  const memo1 = useMemo(() => {
    result = result.result;
    let sections;
    const _Object = Object;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const values2 = values(sections);
    const mapped = values2.map((descriptor) => descriptor.descriptor);
    return mapped.filter((id) => {
      const hasItem = !(id.id in require("ApplicationCommandBuiltIns").BUILT_IN_SECTIONS) && set.has(id.id);
      return hasItem;
    });
  }, items3);
  const tmp5Result = tmp5(tmp6[10]);
  sortApplicationsViaFrecency = tmp5Result.useSortApplicationsViaFrecency(memo1);
  const obj6 = {
    appsInThisServer: obj5.useMemo(() => {
      const obj = _modDef12;
      const compactResult = obj.compact(sortApplicationsViaFrecency.map((application) => application.application));
      const found = compactResult.filter((id) => {
        const tmp = false === closure_1_1 && stateFromStores(memo[11])(id.id);
        return !tmp;
      });
      return found.map((application) => ({ application }));
    }, items4),
    isLoading: tmp2Result.fetchState.fetching || loading
  };
  items4 = [stateFromStores, sortApplicationsViaFrecency];
  return obj6;
});
let result = size.fileFinishedImporting("modules/app_launcher/hooks/useAppsInThisServer.tsx");

export default tmp2;