// === Module 7884: useIsNsfwGated ===

// Module 7884 (useIsNsfwGated)
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 4772 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default function useIsNsfwGated(nsfw) {
  _require = nsfw;
  nsfw = nsfw.nsfw;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const obj = require("initialize");
  const items1 = [GuildNSFWAgreeStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildNSFWAgreeStore.didAgree(nsfw.guild_id));
  let tmp3 = !stateFromStores1;
  if (nsfw) {
    if (stateFromStores1) {
      tmp3 = false === stateFromStores;
    }
    nsfw = tmp3;
  }
  return nsfw;
};