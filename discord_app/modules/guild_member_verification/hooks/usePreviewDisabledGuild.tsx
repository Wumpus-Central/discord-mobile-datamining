// === Module 5576: usePreviewDisabledGuild ===

// Module 5576 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5547 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5572 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  _require = arg0;
  const items = [GuildStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let obj = require("initialize");
  const tmp = _require;
  const items1 = [MemberVerificationFormStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    value = MemberVerificationFormStore.get(closure_0);
    let guild;
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
      result = tmp(1971).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(1971);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};