// === Module 5967: usePreviewDisabledGuild ===

// Module 5967 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5937 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5963 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp13;
  let tmp16;
  let tmp6;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MemberVerificationFormStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class S {
      constructor() {
        const value = MemberVerificationFormStore.get(closure_0);
        let guild;
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
        const value = MemberVerificationFormStore.get(closure_0);
        let guild;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, S);
  if (cResult[6] !== arg0) {
    class S {
      constructor() {
        const value = MemberVerificationFormStore.get(closure_0);
        let guild;
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
    tmp13 = items2;
  } else {
    class S {
      constructor() {
        const value = MemberVerificationFormStore.get(closure_0);
        let guild;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    tmp13 = cResult[8];
  }
  const effect = react.useEffect(tmp14, tmp13);
  if (cResult[9] === stateFromStores) {
    class S {
      constructor() {
        const value = MemberVerificationFormStore.get(closure_0);
        let guild;
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
    let result;
    class S {
      constructor() {
        const value = MemberVerificationFormStore.get(closure_0);
        let guild;
        if (value != null) {
          guild = value.guild;
        }
        return guild;
      }
    }
    if (null != stateFromStores1) {
      class S {
        constructor() {
          const value = MemberVerificationFormStore.get(closure_0);
          let guild;
          if (value != null) {
            guild = value.guild;
          }
          return guild;
        }
      }
      result = obj4.fromVerificationGateGuild(stateFromStores1);
    }
    tmp17 = result;
  }
  cResult[9] = stateFromStores;
  cResult[10] = stateFromStores1;
  cResult[11] = tmp17;
  tmp16 = tmp17;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [GuildStore];
  let stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const items1 = [MemberVerificationFormStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const value = MemberVerificationFormStore.get(closure_0);
    let guild;
    if (value != null) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const obj = MemberVerificationActionCreatorsDefault;
      const verificationForm = obj.fetchVerificationForm(tmp);
    }
  }, items2);
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      const tmpResult = tmp(2066);
      result = tmpResult.fromVerificationGateGuild(stateFromStores1);
    }
    stateFromStores = result;
  }
  return stateFromStores;
});
let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default tmp2;