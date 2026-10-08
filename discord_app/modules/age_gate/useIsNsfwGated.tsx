// === Module 9260: useIsNsfwGated ===

// Module 9260 (useIsNsfwGated)
import GuildNSFWAgreeStore from "GuildNSFWAgreeStore" /* 5931 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsNsfwGated(nsfw) {
  _require = nsfw;
  const cResult = require("c").c(5);
  nsfw = nsfw.nsfw;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      return nsfwAllowed;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildNSFWAgreeStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== nsfw.guild_id) {
    const fn2 = function _() {
      return GuildNSFWAgreeStore.didAgree(nsfw.guild_id);
    };
    cResult[3] = nsfw.guild_id;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  let tmp12 = !stateFromStores1;
  if (nsfw) {
    if (stateFromStores1) {
      tmp12 = false === stateFromStores;
    }
    nsfw = tmp12;
  }
  return nsfw;
}) : (function useIsNsfwGated(nsfw) {
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
});