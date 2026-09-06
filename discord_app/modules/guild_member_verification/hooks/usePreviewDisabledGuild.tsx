// discord_app/modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx
import MemberVerificationActionCreatorsDefault from "../MemberVerificationActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import MemberVerificationFormStore from "../MemberVerificationFormStore.tsx";

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
}
