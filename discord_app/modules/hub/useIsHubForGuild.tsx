// discord_app/modules/hub/useIsHubForGuild.tsx
import Constants from "../../Constants.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          if (null == closure_0) {
            return false;
          } else {
            const guild = GuildStore.getGuild(tmp);
            let flag;
            if (guild != null) {
              const features = guild.features;
              flag = features.has(GuildFeatures.HUB);
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          if (null == closure_0) {
            return false;
          } else {
            const guild = GuildStore.getGuild(tmp);
            let flag;
            if (guild != null) {
              const features = guild.features;
              flag = features.has(GuildFeatures.HUB);
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/hub/useIsHubForGuild.tsx");

export default tmp2;
