// discord_app/modules/age_gate/useIsNsfwGated.tsx
import closure_2 from "initialize" /* 5253 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default function useIsNsfwGated(nsfw) {
  const _require = nsfw;
  nsfw = nsfw.nsfw;
  const items = [closure_3];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const obj = _initialize;
  const items1 = [closure_2];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => closure_1_2.didAgree(nsfw.guild_id));
  let tmp3 = !stateFromStores1;
  if (nsfw) {
    if (stateFromStores1) {
      tmp3 = false === stateFromStores;
    }
    nsfw = tmp3;
  }
  return nsfw;
};