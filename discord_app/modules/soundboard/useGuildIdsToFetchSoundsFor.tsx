// discord_app/modules/soundboard/useGuildIdsToFetchSoundsFor.tsx
import react from "../../../_runtime/00019_react.js";
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../_runtime/00576_react.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SoundboardStore from "SoundboardStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const useMemo = react.useMemo;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let guildIds;
      let sounds;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        const fn = function s() {
          return guildIds.getGuildIds();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = useStateFromStores;
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SoundboardStore];
        const fn2 = function c() {
          return sounds.getSounds();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp8 = fn2;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult2 = useStateFromStores;
      const stateFromStores = tmpResult2.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === stateFromStoresArray) {
        let tmp11;
        if (cResult[5] === stateFromStores) {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      const found = stateFromStoresArray.filter((item) => null == closure_0.get(item));
      cResult[4] = stateFromStoresArray;
      cResult[5] = stateFromStores;
      cResult[6] = found;
      tmp11 = found;
    }
  : () => {
      let guildIds;
      let sounds;
      let stateFromStores;
      let stateFromStoresArray;
      const items = [GuildStore];
      const obj = stateFromStoresArray(stateFromStores[5]);
      stateFromStoresArray = obj.useStateFromStoresArray(items, () => guildIds.getGuildIds());
      const items1 = [SoundboardStore];
      const obj2 = stateFromStoresArray(stateFromStores[5]);
      stateFromStores = obj2.useStateFromStores(items1, () => sounds.getSounds());
      const items2 = [stateFromStoresArray, stateFromStores];
      return useMemo(() => {
        let closure_0 = stateFromStores;
        return stateFromStoresArray.filter((item) => null == closure_0.get(item));
      }, items2);
    };
const result = size.fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = tmp2;
export const getGuildIdsToFetchSoundsFor = function getGuildIdsToFetchSoundsFor() {
  const guildIds = GuildStore.getGuildIds();
  const sounds = SoundboardStore.getSounds();
  return guildIds.filter((item) => null == closure_0.get(item));
};
