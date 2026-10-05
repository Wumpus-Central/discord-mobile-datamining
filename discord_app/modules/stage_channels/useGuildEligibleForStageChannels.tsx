// discord_app/modules/stage_channels/useGuildEligibleForStageChannels.tsx
import Constants from "../../Constants.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
function isGuildEligibleForStageChannels(id) {
  let obj;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore];
    tmp = items;
  }
  [obj] = tmp;
  const _Boolean = Boolean;
  const guild = obj.getGuild(id);
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  return _Boolean(hasItem);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          let obj;
          const items = [GuildStore];
          [obj] = items;
          const _Boolean = Boolean;
          const guild = obj.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.COMMUNITY);
          }
          return _Boolean(hasItem);
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
      const obj = require("get initialized");
      let items = [GuildStore];
      const items1 = [arg0];
      return obj.useStateFromStores(
        items,
        () => {
          let obj;
          const items = [GuildStore];
          [obj] = items;
          const _Boolean = Boolean;
          const guild = obj.getGuild(closure_0);
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.COMMUNITY);
          }
          return _Boolean(hasItem);
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export { isGuildEligibleForStageChannels };
export const useGuildEligibleForStageChannels = tmp2;
