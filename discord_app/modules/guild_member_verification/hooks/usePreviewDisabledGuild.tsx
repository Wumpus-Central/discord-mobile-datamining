// discord_app/modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/GuildStore.tsx";
import closure_5 from "../MemberVerificationFormStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/guild_member_verification/hooks/usePreviewDisabledGuild.tsx",
);

export default function usePreviewDisabledGuild(arg0) {
  const _require = arg0;
  const items = [closure_4];
  let stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () =>
    closure_1_4.getGuild(closure_0),
  );
  let obj = initialize;
  const tmp = _require;
  const items1 = [closure_5];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items1,
    () => {
      const value = closure_1_5.get(closure_0);
      let guild;
      if (value != null) {
        guild = value.guild;
      }
      return guild;
    },
  );
  const items2 = [arg0];
  const effect = React.useEffect(() => {
    if (null != closure_0) {
      const verificationForm = closure_1_1(closure_1_2[4]).fetchVerificationForm(tmp);
      const obj = closure_1_1(closure_1_2[4]);
    }
  }, items2);
  if (stateFromStores == null) {
    let result = null;
    if (null != stateFromStores1) {
      result = tmp(1425).fromVerificationGateGuild(stateFromStores1);
      const tmpResult = tmp(1425);
    }
    stateFromStores = result;
  }
  return stateFromStores;
}
