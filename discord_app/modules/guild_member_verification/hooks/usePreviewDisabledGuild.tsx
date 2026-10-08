// === Module 6157: usePreviewDisabledGuild ===

// Module 6157 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 6127 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 6153 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePreviewDisabledGuild(arg0) {
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
    const fn = function s() {
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
    const fn2 = function v() {
      value = MemberVerificationFormStore.get(closure_0);
      guild = undefined;
      if (value != null) {
        guild = value.guild;
      }
      return guild;
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  if (cResult[6] !== arg0) {
    const fn3 = function _() {
      if (null != closure_0) {
        const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(tmp);
      }
    };
    const items2 = [arg0];
    cResult[6] = arg0;
    cResult[7] = fn3;
    cResult[8] = items2;
    let tmp13 = items2;
    let tmp12 = fn3;
  } else {
    tmp12 = cResult[7];
    tmp13 = cResult[8];
  }
  const effect = noop.useEffect(tmp12, tmp13);
  if (cResult[9] === stateFromStores) {
    if (cResult[10] === stateFromStores1) {
      let tmp15 = cResult[11];
    }
    return tmp15;
  }
  let tmp16 = stateFromStores;
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      result = tmp(2078).fromVerificationGateGuild(stateFromStores1);
      const tmpResult4 = tmp(2078);
    }
    tmp16 = result;
  }
  cResult[9] = stateFromStores;
  cResult[10] = stateFromStores1;
  cResult[11] = tmp16;
  tmp15 = tmp16;
  const tmpResult3 = require("initialize");
}) : (function usePreviewDisabledGuild(arg0) {
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
      result = tmp(2078).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(2078);
    }
    stateFromStores = result;
  }
  return stateFromStores;
});