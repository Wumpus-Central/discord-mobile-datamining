// === Module 5974: usePreviewDisabledGuild ===

// Module 5974 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5944 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5970 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MemberVerificationFormStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    cResult[4] = arg0;
    cResult[5] = S;
  } else {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, S);
  if (cResult[6] !== arg0) {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    const items2 = [arg0];
    cResult[6] = arg0;
    cResult[7] = tmp14;
    cResult[8] = items2;
    let tmp13 = items2;
  } else {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    tmp13 = cResult[8];
  }
  const effect = noop.useEffect(tmp14, tmp13);
  if (cResult[9] === stateFromStores) {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    return tmp16;
  }
  let tmp17 = stateFromStores;
  if (stateFromStores == null) {
    class S {
      constructor() {
        value = closure_5.get(closure_0);
        guild = undefined;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    if (null != stateFromStores1) {
      class S {
        constructor() {
          value = closure_5.get(closure_0);
          guild = undefined;
          if (value != null) {
            guild = value.guild;
          }
          return guild;
        }
      }
      const result = obj4.fromVerificationGateGuild(stateFromStores1);
    }
    tmp17 = result;
  }
  cResult[9] = stateFromStores;
  cResult[10] = stateFromStores1;
  cResult[11] = tmp17;
  tmp16 = tmp17;
  const tmpResult2 = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let obj = require("initialize");
  const tmp = _require;
  const items1 = [MemberVerificationFormStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    value = MemberVerificationFormStore.get(closure_0);
    guild = undefined;
    if (value != null) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(tmp);
    }
  }, items2);
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      result = tmp(2066).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(2066);
    }
    stateFromStores = result;
  }
  return stateFromStores;
});