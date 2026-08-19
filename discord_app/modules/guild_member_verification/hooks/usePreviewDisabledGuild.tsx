// discord_app/modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx
import _fetchVerificationFormDefault from "../MemberVerificationActionCreators.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import get from "../MemberVerificationFormStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  const _require = arg0;
  const items = [closure_4];
  let stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_4.getGuild(closure_0));
  let obj = initialize;
  const tmp = _require;
  const items1 = [closure_5];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => {
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