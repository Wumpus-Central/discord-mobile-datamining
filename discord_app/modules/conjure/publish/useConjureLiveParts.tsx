// === Module 12247: useConjureLiveParts ===

// Module 12247 (useConjureLiveParts)
import ApplicationStore from "ApplicationStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 4899 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5180 */;
import GuildStore from "GuildStore" /* 4843 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6758 */;

const require = globalThis.__r;

const require = fn;
let closure_4 = fn(4899).GUILD_SELECTABLE_CHANNELS_KEY;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureLiveParts.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureLiveParts(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(30);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function _() {
      let project = ConjureProjectStore.getProject(closure_0);
      if (project == null) {
        project = null;
      }
      return project;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [application_id];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== application_id) {
    const fn2 = function f() {
      let tmp2 = null;
      if (null != application_id) {
        let application = ApplicationStore.getApplication(tmp);
        if (application == null) {
          application = null;
        }
        tmp2 = application;
      }
      return tmp2;
    };
    const items3 = [application_id];
    cResult[5] = application_id;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp13 = items3;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildStore];
    cResult[8] = items4;
    let tmp15 = items4;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== arg1) {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_6;
          guild = closure_6.getGuild(tmp);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
        return tmp2;
      }
    }
    const items5 = [arg1];
    cResult[9] = arg1;
    cResult[10] = A;
    cResult[11] = items5;
    let tmp18 = items5;
  } else {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_6;
          guild = closure_6.getGuild(tmp);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
        return tmp2;
      }
    }
    tmp18 = cResult[11];
  }
  const tmpResult5 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp15, A, tmp18);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_6;
          guild = closure_6.getGuild(tmp);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
        return tmp2;
      }
    }
    const items6 = [GuildMemberCountStore];
    cResult[12] = items6;
    const tmp20 = items6;
  } else {
    class A {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_6;
          guild = closure_6.getGuild(tmp);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
        return tmp2;
      }
    }
  }
  if (cResult[13] !== arg1) {
    class I {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_5;
          memberCount = closure_5.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
    const items7 = [arg1];
    cResult[13] = arg1;
    cResult[14] = I;
    cResult[15] = items7;
    let tmp22 = items7;
  } else {
    class I {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_5;
          memberCount = closure_5.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
    tmp22 = cResult[15];
  }
  const tmpResult6 = require("initialize");
  const stateFromStores3 = require("initialize").useStateFromStores(tmp20, I, tmp22);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_5;
          memberCount = closure_5.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
    const items8 = [GuildChannelStore];
    cResult[16] = items8;
    const tmp24 = items8;
  } else {
    class I {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_5;
          memberCount = closure_5.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
  }
  if (cResult[17] === application_id) {
    class I {
      constructor() {
        tmp2 = null;
        if (null != closure_1) {
          tmp3 = closure_5;
          memberCount = closure_5.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
    const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp24, M, items9);
    let tmp26;
    if (stateFromStores1 != null) {
      class I {
        constructor() {
          tmp2 = null;
          if (null != closure_1) {
            tmp3 = closure_5;
            memberCount = closure_5.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    if (tmp26 == null) {
      class I {
        constructor() {
          tmp2 = null;
          if (null != closure_1) {
            tmp3 = closure_5;
            memberCount = closure_5.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
      if (stateFromStores != null) {
        class I {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = closure_5;
              memberCount = closure_5.getMemberCount(tmp);
              if (memberCount == null) {
                memberCount = null;
              }
              tmp2 = memberCount;
            }
            return tmp2;
          }
        }
      }
      tmp26 = tmp27;
    }
    if (tmp26 == null) {
      class I {
        constructor() {
          tmp2 = null;
          if (null != closure_1) {
            tmp3 = closure_5;
            memberCount = closure_5.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    if (stateFromStores1 != null) {
      class I {
        constructor() {
          tmp2 = null;
          if (null != closure_1) {
            tmp3 = closure_5;
            memberCount = closure_5.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    if (cResult[21] !== undefined) {
      class I {
        constructor() {
          tmp2 = null;
          if (null != closure_1) {
            tmp3 = closure_5;
            memberCount = closure_5.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
      if (stateFromStores1 != null) {
        class I {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = closure_5;
              memberCount = closure_5.getMemberCount(tmp);
              if (memberCount == null) {
                memberCount = null;
              }
              tmp2 = memberCount;
            }
            return tmp2;
          }
        }
        if (tmp31 != null) {
          class I {
            constructor() {
              tmp2 = null;
              if (null != closure_1) {
                tmp3 = closure_5;
                memberCount = closure_5.getMemberCount(tmp);
                if (memberCount == null) {
                  memberCount = null;
                }
                tmp2 = memberCount;
              }
              return tmp2;
            }
          }
        }
      }
      if (tmp30 == null) {
        class I {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = closure_5;
              memberCount = closure_5.getMemberCount(tmp);
              if (memberCount == null) {
                memberCount = null;
              }
              tmp2 = memberCount;
            }
            return tmp2;
          }
        }
      }
      if (stateFromStores1 != null) {
        class I {
          constructor() {
            tmp2 = null;
            if (null != closure_1) {
              tmp3 = closure_5;
              memberCount = closure_5.getMemberCount(tmp);
              if (memberCount == null) {
                memberCount = null;
              }
              tmp2 = memberCount;
            }
            return tmp2;
          }
        }
      }
      cResult[21] = undefined;
      cResult[22] = tmp30;
    } else {
      class I {
        constructor() {
          tmp2 = null;
          if (null != closure_1) {
            tmp3 = closure_5;
            memberCount = closure_5.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    if (cResult[23] === stateFromStoresArray) {
      class I {
        constructor() {
          tmp2 = null;
          if (null != closure_1) {
            tmp3 = closure_5;
            memberCount = closure_5.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    const obj2 = { project: stateFromStores, liveName: tmp26, liveDescription: tmp30, channels: stateFromStoresArray, guild: stateFromStores2, memberCount: stateFromStores3 };
    cResult[23] = stateFromStoresArray;
    cResult[24] = stateFromStores2;
    cResult[25] = stateFromStores3;
    cResult[26] = stateFromStores;
    cResult[27] = tmp26;
    cResult[28] = tmp30;
    cResult[29] = obj2;
    const tmpResult8 = tmp(504);
  }
  class M {
    constructor() {
      if (null != closure_1) {
        tmp2 = c2;
        if (null != c2) {
          tmp3 = closure_3;
          tmp4 = closure_4;
          arr = closure_3.getChannels(tmp)[closure_4];
          found = arr.filter((channel) => closure_0(closure_1[8]).conjureChannelAppId(channel.channel) === application_id);
          mapped = found.map((channel) => channel.channel);
        }
        return [];
      }
      return;
    }
  }
  items9 = [arg1, application_id];
  cResult[17] = application_id;
  cResult[18] = arg1;
  cResult[19] = M;
  cResult[20] = items9;
  const tmpResult7 = require("initialize");
}) : (function useConjureLiveParts(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let project = ConjureProjectStore.getProject(closure_0);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const obj = require("initialize");
  const items2 = [application_id];
  const items3 = [application_id];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    let tmp2 = null;
    if (null != application_id) {
      let application = ApplicationStore.getApplication(tmp);
      if (application == null) {
        application = null;
      }
      tmp2 = application;
    }
    return tmp2;
  }, items3);
  const tmpResult = require("initialize");
  const items4 = [GuildStore];
  const items5 = [arg1];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => {
    let tmp2 = null;
    if (null != closure_1) {
      guild = GuildStore.getGuild(tmp);
      if (guild == null) {
        guild = null;
      }
      tmp2 = guild;
    }
    return tmp2;
  }, items5);
  const tmpResult4 = require("initialize");
  const items6 = [GuildMemberCountStore];
  const items7 = [arg1];
  const stateFromStores3 = require("initialize").useStateFromStores(items6, () => {
    let tmp2 = null;
    if (null != closure_1) {
      let memberCount = GuildMemberCountStore.getMemberCount(tmp);
      if (memberCount == null) {
        memberCount = null;
      }
      tmp2 = memberCount;
    }
    return tmp2;
  }, items7);
  const tmpResult5 = require("initialize");
  const items8 = [GuildChannelStore];
  const items9 = [arg1, application_id];
  const obj2 = { project: stateFromStores, liveName: null, liveDescription: null, channels: null, guild: null, memberCount: null };
  let str;
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items8, () => {
    if (null != closure_1) {
      if (null != application_id) {
        const found = GuildChannelStore.getChannels(tmp)[closure_4].filter((channel) => closure_0(closure_1[8]).conjureChannelAppId(channel.channel) === application_id);
        const mapped = found.map((channel) => channel.channel);
        const arr = GuildChannelStore.getChannels(tmp)[closure_4];
      }
      return [];
    }
  }, items9);
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  obj2.liveName = str;
  let str2;
  if (stateFromStores1 != null) {
    if (stateFromStores1.description != null) {
      str2 = str3.trim();
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  obj2.liveDescription = str2;
  obj2.channels = stateFromStoresArray;
  obj2.guild = stateFromStores2;
  obj2.memberCount = stateFromStores3;
  return obj2;
});