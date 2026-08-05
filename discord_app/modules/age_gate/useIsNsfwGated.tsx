// discord_app/modules/age_gate/useIsNsfwGated.tsx
import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default function useIsNsfwGated(nsfw) {
  const _require = nsfw;
  nsfw = nsfw.nsfw;
  const items = [mergeGuildAvatar];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const obj = _initialize;
  const items1 = [initialize];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => outer1_2.didAgree(nsfw.guild_id));
  let tmp3 = !stateFromStores1;
  if (nsfw) {
    if (stateFromStores1) {
      tmp3 = false === stateFromStores;
    }
    nsfw = tmp3;
  }
  return nsfw;
};