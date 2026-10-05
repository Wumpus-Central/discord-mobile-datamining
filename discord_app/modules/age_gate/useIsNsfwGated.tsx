// discord_app/modules/age_gate/useIsNsfwGated.tsx
import GuildNSFWAgreeStore from "../../stores/GuildNSFWAgreeStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, currentUser, nsfw;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (nsfw) => {
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp8;
      _require = nsfw;
      const obj = require("react");
      const cResult = obj.c(5);
      nsfw = nsfw.nsfw;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
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
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildNSFWAgreeStore];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== nsfw.guild_id) {
        const fn2 = function _() {
          return GuildNSFWAgreeStore.didAgree(nsfw.guild_id);
        };
        cResult[3] = nsfw.guild_id;
        cResult[4] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
      let tmp12 = !stateFromStores1;
      if (nsfw) {
        if (stateFromStores1) {
          tmp12 = false === stateFromStores;
        }
        nsfw = tmp12;
      }
      return nsfw;
    }
  : (nsfw) => {
      _require = nsfw;
      nsfw = nsfw.nsfw;
      const items = [UserStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let nsfwAllowed;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return nsfwAllowed;
      });
      const items1 = [GuildNSFWAgreeStore];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildNSFWAgreeStore.didAgree(nsfw.guild_id));
      let tmp3 = !stateFromStores1;
      if (nsfw) {
        if (stateFromStores1) {
          tmp3 = false === stateFromStores;
        }
        nsfw = tmp3;
      }
      return nsfw;
    };
const result = size.fileFinishedImporting("modules/age_gate/useIsNsfwGated.tsx");

export default tmp2;
