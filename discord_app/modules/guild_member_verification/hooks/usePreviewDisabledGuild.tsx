// === Module 7721: usePreviewDisabledGuild ===

// Module 7721 (usePreviewDisabledGuild)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 7696 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5181 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 7717 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  _require = arg0;
  items = [GuildStore];
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
      result = tmp(5173).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(5173);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};