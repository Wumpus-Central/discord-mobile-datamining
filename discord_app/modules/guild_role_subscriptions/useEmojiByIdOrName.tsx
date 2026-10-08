// === Module 15336: useEmojiByIdOrName ===

// Module 15336 (useEmojiByIdOrName)
import EmojiStore from "EmojiStore" /* 5992 */;

const require = fn;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiByIdOrName(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function s() {
    if (null == closure_1) {
      return null;
    } else {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
      let byId = disambiguatedEmojiContext.getById(closure_1);
      if (byId == null) {
        byId = disambiguatedEmojiContext.getByName(closure_1);
      }
      return byId;
    }
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useEmojiByIdOrName(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [EmojiStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_1) {
      return null;
    } else {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
      let byId = disambiguatedEmojiContext.getById(closure_1);
      if (byId == null) {
        byId = disambiguatedEmojiContext.getByName(closure_1);
      }
      return byId;
    }
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useEmojiByIdOrName.tsx");

export default tmp2;
export const useEmojiByIdOrName = tmp2;