// === Module 16636: FavoritesGuildSuggestionsLoader ===

// Module 16636 (FavoritesGuildSuggestionsLoader)
import useFavoritesGuildSuggestionCandidatesDefault from "useFavoritesGuildSuggestionCandidates" /* 16637 */;
import noop from "module_19" /* 19 */;

const require = fn;
const FavoritesGuildSuggestionsStore = fn(16545);
({ NO_SUGGESTIONS: closure_4, setFavoritesGuildSuggestions: hasOwnProperty, useFavoritesGuildSuggestionsVisibility: metroRequire } = FavoritesGuildSuggestionsStore);
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildSuggestionsLoaderInner() {
  const cResult = require("c").c(3);
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
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp3, tmp4);
  return null;
}) : (function FavoritesGuildSuggestionsLoaderInner() {
  const tmp = useFavoritesGuildSuggestionCandidatesDefault(4);
  closure_0 = tmp;
  const items = [tmp];
  const layoutEffect = noop.useLayoutEffect(() => {
    hasOwnProperty(closure_0);
  }, items);
  return null;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildSuggestionsLoader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildSuggestionsLoader() {
  const cResult = isEligible(576).c(5);
  let tmp2 = closure_6();
  isEligible = tmp2.isEligible;
  const isSelected = tmp2.isSelected;
  dependencyMap = noop.useRef(false);
  if (cResult[0] === isEligible) {
    if (cResult[1] === isSelected) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const layoutEffect = noop.useLayoutEffect(tmp3, tmp4);
    if (!isSelected) {
      return null;
    } else {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = <closure_8 />;
        cResult[4] = tmp11;
      }
    }
  }
  const fn = function u() {
    if (isSelected) {
      ref.current = true;
    } else {
      const current = ref.current;
      let tmp2 = !current;
      if (!current) {
        tmp2 = isEligible;
      }
      if (!tmp2) {
        ref.current = false;
        hasOwnProperty(React4);
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
  const obj = isEligible(576);
}) : (function FavoritesGuildSuggestionsLoader() {
  const tmp = closure_6();
  const isEligible = tmp.isEligible;
  const isSelected = tmp.isSelected;
  noop.useRef(false);
  const items = [isEligible, isSelected];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (isSelected) {
      ref.current = true;
    } else {
      const current = ref.current;
      let tmp2 = !current;
      if (!current) {
        tmp2 = isEligible;
      }
      if (!tmp2) {
        ref.current = false;
        hasOwnProperty(React4);
      }
    }
  }, items);
  let tmp3 = null;
  if (isSelected) {
    tmp3 = <closure_8 />;
  }
  return tmp3;
}));