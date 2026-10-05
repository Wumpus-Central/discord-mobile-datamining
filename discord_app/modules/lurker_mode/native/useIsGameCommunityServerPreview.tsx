// discord_app/modules/lurker_mode/native/useIsGameCommunityServerPreview.tsx
import Constants from "../../../Constants.tsx";
import LurkingStore from "../LurkingStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const JoinGuildSources = Constants.JoinGuildSources;
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
        const items = [LurkingStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_0);
          let type;
          if (lurkingSourceForGuild != null) {
            type = lurkingSourceForGuild.type;
          }
          return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
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
      const items = [LurkingStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(closure_0);
          let type;
          if (lurkingSourceForGuild != null) {
            type = lurkingSourceForGuild.type;
          }
          return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/lurker_mode/native/useIsGameCommunityServerPreview.tsx");

export default tmp2;
export const isGameCommunityServerPreview = function isGameCommunityServerPreview(id) {
  const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(id);
  let type;
  if (lurkingSourceForGuild != null) {
    type = lurkingSourceForGuild.type;
  }
  return type === JoinGuildSources.GAME_COMMUNITY_UPSELL;
};
