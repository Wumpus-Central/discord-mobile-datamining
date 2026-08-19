// === Module 8528: usePreviewDisabledGuild ===

// Module 8528 (usePreviewDisabledGuild)
import _fetchVerificationFormDefault from "_fetchVerificationForm" /* 6906 */;
import noop from "noop" /* 19 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import get from "get" /* 6801 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  const _require = arg0;
  const items = [closure_4];
  let stateFromStores = _require(589).useStateFromStores(items, () => closure_1_4.getGuild(closure_0));
  let obj = _require(589);
  const tmp = _require;
  const items1 = [closure_5];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    const value = closure_1_5.get(closure_0);
    let guild;
    if (value != null) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = React.useEffect(() => {
    if (null != closure_0) {
      const verificationForm = _fetchVerificationFormDefault.fetchVerificationForm(tmp);
    }
  }, items2);
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      result = tmp(1430).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(1430);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};