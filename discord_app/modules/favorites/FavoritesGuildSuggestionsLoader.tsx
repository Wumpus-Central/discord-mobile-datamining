// discord_app/modules/favorites/FavoritesGuildSuggestionsLoader.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import useFavoritesGuildSuggestionCandidatesDefault from "hooks/useFavoritesGuildSuggestionCandidates.tsx";
import react from "../../../_runtime/00019_react.js";
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroRequire;
({
  NO_SUGGESTIONS: closure_4,
  setFavoritesGuildSuggestions: hasOwnProperty,
  useFavoritesGuildSuggestionsVisibility: metroRequire,
} = FavoritesGuildSuggestionsStore);
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let tmp3;
      let tmp4;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp2 = useFavoritesGuildSuggestionCandidatesDefault(4);
      _require = tmp2;
      if (cResult[0] !== tmp2) {
        const fn = function u() {
          hasOwnProperty(closure_0);
        };
        const items = [tmp2];
        cResult[0] = tmp2;
        cResult[1] = fn;
        cResult[2] = items;
        tmp4 = items;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const layoutEffect = react.useLayoutEffect(tmp3, tmp4);
      return null;
    }
  : () => {
      const tmp = useFavoritesGuildSuggestionCandidatesDefault(4);
      let closure_0 = tmp;
      const items = [tmp];
      const layoutEffect = react.useLayoutEffect(() => {
        hasOwnProperty(closure_0);
      }, items);
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let isEligible;
        let ref;
        const obj = isEligible(576);
        const cResult = obj.c(5);
        let tmp2 = closure_6();
        isEligible = tmp2.isEligible;
        const isSelected = tmp2.isSelected;
        dependencyMap = react.useRef(false);
        if (cResult[0] === isEligible) {
          let tmp3;
          let tmp4;
          if (cResult[1] === isSelected) {
            tmp3 = cResult[2];
            tmp4 = cResult[3];
          }
          const layoutEffect = react.useLayoutEffect(tmp3, tmp4);
          let tmp6 = null;
          if (isSelected) {
            let tmp8;
            const _Symbol = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp11 = <closure_8 />;
              cResult[4] = tmp11;
              tmp8 = tmp11;
            } else {
              tmp8 = cResult[4];
            }
            tmp6 = tmp8;
          }
          return tmp6;
        }
        const fn = function u() {
          if (isSelected) {
            ref.current = true;
          } else {
            const tmp2 = !ref.current && isEligible;
            if (!tmp2) {
              ref.current = false;
              hasOwnProperty(React3);
            }
          }
        };
        const items = [isEligible, isSelected];
        cResult[0] = isEligible;
        cResult[1] = isSelected;
        cResult[2] = fn;
        cResult[3] = items;
        tmp4 = items;
        tmp3 = fn;
      }
    : () => {
        const tmp = closure_6();
        const isEligible = tmp.isEligible;
        const isSelected = tmp.isSelected;
        const ref = react.useRef(false);
        const items = [isEligible, isSelected];
        const layoutEffect = react.useLayoutEffect(() => {
          if (isSelected) {
            ref.current = true;
          } else {
            const tmp2 = !ref.current && isEligible;
            if (!tmp2) {
              ref.current = false;
              hasOwnProperty(React3);
            }
          }
        }, items);
        let tmp3 = null;
        if (isSelected) {
          tmp3 = <closure_8 />;
        }
        return tmp3;
      },
);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default memoResult;
