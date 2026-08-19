// === Module 8512: useIsNsfwGated ===

// Module 8512 (useIsNsfwGated)
import initialize from "initialize" /* 5253 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default function useIsNsfwGated(nsfw) {
  const _require = nsfw;
  nsfw = nsfw.nsfw;
  const items = [closure_3];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const obj = _require(589);
  const items1 = [closure_2];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => closure_1_2.didAgree(nsfw.guild_id));
  let tmp3 = !stateFromStores1;
  if (nsfw) {
    if (stateFromStores1) {
      tmp3 = false === stateFromStores;
    }
    nsfw = tmp3;
  }
  return nsfw;
};