// discord_app/modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx
import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import get from "get";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let result = require("get").fileFinishedImporting("modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx");

export default function usePreviewDisabledGuild(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  let stateFromStores = _initialize.useStateFromStores(items, () => outer1_4.getGuild(closure_0));
  let obj = _initialize;
  const tmp = _require;
  const items1 = [get];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => {
    const value = outer1_5.get(closure_0);
    let guild;
    if (value != null) {
      guild = value.guild;
    }
    return guild;
  });
  const items2 = [arg0];
  const effect = React.useEffect(() => {
    if (null != closure_0) {
      const verificationForm = outer1_1(outer1_2[4]).fetchVerificationForm(tmp);
      const obj = outer1_1(outer1_2[4]);
    }
  }, items2);
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      result = tmp(1411).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(1411);
    }
    stateFromStores = result;
  }
  return stateFromStores;
};