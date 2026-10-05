// discord_app/modules/user_profile/hooks/useIsUserProfileObfuscated.tsx
import UserProfileStore from "../UserProfileStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let tmp6;
      _require = id;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function t() {
          return UserProfileStore.getUserProfile(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let bio;
      if (stateFromStores != null) {
        bio = stateFromStores.bio;
      }
      let tmp9 = "" === bio;
      if (tmp9) {
        let pronouns;
        if (stateFromStores != null) {
          pronouns = stateFromStores.pronouns;
        }
        tmp9 = "" === pronouns;
      }
      if (tmp9) {
        let banner;
        if (stateFromStores != null) {
          banner = stateFromStores.banner;
        }
        tmp9 = undefined === banner;
      }
      if (tmp9) {
        let accentColor;
        if (stateFromStores != null) {
          accentColor = stateFromStores.accentColor;
        }
        tmp9 = undefined === accentColor;
      }
      if (tmp9) {
        tmp9 = id.flags === id.publicFlags;
      }
      if (tmp9) {
        let badges;
        if (stateFromStores != null) {
          badges = stateFromStores.badges;
        }
        let tmp14 = null == badges;
        if (!tmp14) {
          let length;
          if (stateFromStores != null) {
            const badges1 = stateFromStores.badges;
            if (badges1 != null) {
              length = badges1.length;
            }
          }
          tmp14 = 0 === length;
        }
        tmp9 = tmp14;
      }
      return tmp9;
    }
  : (flags) => {
      _require = flags;
      const items = [UserProfileStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => UserProfileStore.getUserProfile(flags.id));
      let bio;
      if (stateFromStores != null) {
        bio = stateFromStores.bio;
      }
      let tmp3 = "" === bio;
      if (tmp3) {
        let pronouns;
        if (stateFromStores != null) {
          pronouns = stateFromStores.pronouns;
        }
        tmp3 = "" === pronouns;
      }
      if (tmp3) {
        let banner;
        if (stateFromStores != null) {
          banner = stateFromStores.banner;
        }
        tmp3 = undefined === banner;
      }
      if (tmp3) {
        let accentColor;
        if (stateFromStores != null) {
          accentColor = stateFromStores.accentColor;
        }
        tmp3 = undefined === accentColor;
      }
      if (tmp3) {
        tmp3 = flags.flags === flags.publicFlags;
      }
      if (tmp3) {
        let badges;
        if (stateFromStores != null) {
          badges = stateFromStores.badges;
        }
        let tmp8 = null == badges;
        if (!tmp8) {
          let length;
          if (stateFromStores != null) {
            const badges1 = stateFromStores.badges;
            if (badges1 != null) {
              length = badges1.length;
            }
          }
          tmp8 = 0 === length;
        }
        tmp3 = tmp8;
      }
      return tmp3;
    };
const result = size.fileFinishedImporting("modules/user_profile/hooks/useIsUserProfileObfuscated.tsx");

export default tmp2;
