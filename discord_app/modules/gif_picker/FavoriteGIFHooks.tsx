// discord_app/modules/gif_picker/FavoriteGIFHooks.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import react2 from "../../../_runtime/00576_react.js";
import FrecencyUserSettingsHooks from "../user_settings/FrecencyUserSettingsHooks.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4 = {};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const tmp = undefined === arg0 || arg0;
      const obj = FrecencyUserSettingsHooks;
      const favoriteGifs = obj.useFrecencySettings(tmp).favoriteGifs;
      let gifs;
      if (favoriteGifs != null) {
        gifs = favoriteGifs.gifs;
      }
      if (gifs == null) {
        gifs = closure_4;
      }
      return gifs;
    }
  : () => {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const obj = FrecencyUserSettingsHooks;
      const favoriteGifs = obj.useFrecencySettings(flag).favoriteGifs;
      let gifs;
      if (favoriteGifs != null) {
        gifs = favoriteGifs.gifs;
      }
      if (gifs == null) {
        gifs = closure_4;
      }
      return gifs;
    };
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp5;
      let closure_0 = arg0;
      let obj = react2;
      const cResult = obj.c(5);
      const tmp3 = closure_5();
      if (cResult[0] === tmp3) {
        let tmp4;
        if (cResult[1] === arg0) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      if (cResult[3] !== arg0) {
        const fn = function s(src, url) {
          const obj = { url, src };
          const merged = Object.assign(src);
          src = undefined;
          if (closure_0 != null) {
            src = tmp2(src.src, url);
          }
          if (src == null) {
            src = src.src;
          }
          return obj;
        };
        cResult[3] = arg0;
        cResult[4] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[4];
      }
      const arr = _modDef12(tmp3);
      const mapped = arr.map(tmp5);
      const sortByResult = mapped.sortBy("order");
      const iter = sortByResult.reverse();
      const valueResult = iter.value();
      cResult[0] = tmp3;
      cResult[1] = arg0;
      cResult[2] = valueResult;
      tmp4 = valueResult;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const tmp = closure_5();
      let closure_1 = tmp;
      const items = [tmp, arg0];
      return react.useMemo(() => {
        const arr = _modDef12(closure_1);
        const mapped = arr.map((src, url) => {
          const obj = { url, src };
          const merged = Object.assign(src);
          src = undefined;
          if (closure_1_0 != null) {
            src = tmp2(src.src, url);
          }
          if (src == null) {
            src = src.src;
          }
          return obj;
        });
        const sortByResult = mapped.sortBy("order");
        const iter = sortByResult.reverse();
        return iter.value();
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = FrecencyUserSettingsHooks;
      const favoriteGifs = obj.useFrecencySettings().favoriteGifs;
      let flag;
      if (favoriteGifs != null) {
        flag = favoriteGifs.hideTooltip;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  : () => {
      const obj = FrecencyUserSettingsHooks;
      const favoriteGifs = obj.useFrecencySettings().favoriteGifs;
      let flag;
      if (favoriteGifs != null) {
        flag = favoriteGifs.hideTooltip;
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const tmp2 = undefined === arg1 || arg1;
      return null != closure_5(tmp2)[arg0];
    }
  : (arg0) => {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      return null != closure_5(flag)[arg0];
    };
const result = size.fileFinishedImporting("modules/gif_picker/FavoriteGIFHooks.tsx");

export const useFavoriteGIFs = tmp2;
export const useSortedFavoriteGIFs = tmp3;
export const useShouldShowTooltipOnFavorite = tmp4;
export const useIsFavoriteGIF = tmp5;
