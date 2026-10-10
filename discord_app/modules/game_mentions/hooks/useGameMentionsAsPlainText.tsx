// === Module 10238: useGameMentionsAsPlainText ===

// Module 10238 (useGameMentionsAsPlainText)
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2020 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
const ChannelAutocompleteConstants = fn(5404);
({ extractGameMentionIds: hasOwnProperty, GAME_MENTION_RAW_RE_GLOBAL: metroRequire } = ChannelAutocompleteConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameMentionsAsPlainText(arg0) {
  _require = arg0;
  const cResult = require("c").c(7);
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  if (cResult[0] !== str) {
    const tmp6 = closure_5(str);
    cResult[0] = str;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  const obj = require("c");
  const games = require("useGame").useGames(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore, UserStore];
    cResult[2] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === arg0) {
      let tmp11 = cResult[5];
      let tmp12 = cResult[6];
    }
    return tmp(504).useStateFromStores(tmp8, tmp11, tmp12);
  }
  const fn = function p() {
    if (!obj.isNullOrEmpty(nsfwAllowed)) {
      if (0 !== length.length) {
        const currentUser = UserStore.getCurrentUser();
        nsfwAllowed = undefined;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return str.replace(timestampProducer, (arg0, gameId) => {
          game = game.getGame(gameId);
          if (obj.isGameProfileObscured(game, nsfwAllowed)) {
            const intl2 = nsfwAllowed(dependencyMap[9]).intl;
            let stringResult = intl2.string(nsfwAllowed(dependencyMap[9]).t["11pdXZ"]);
          } else {
            stringResult = undefined;
            if (game != null) {
              stringResult = game.name;
            }
            if (stringResult == null) {
              const intl = nsfwAllowed(dependencyMap[9]).intl;
              stringResult = intl.string(nsfwAllowed(dependencyMap[9]).t["11pdXZ"]);
            }
          }
          return stringResult;
        });
      }
    }
    return nsfwAllowed;
  };
  const items1 = [arg0, tmp4];
  cResult[3] = tmp4;
  cResult[4] = arg0;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp12 = items1;
  tmp11 = fn;
  const tmpResult = require("useGame");
}) : (function useGameMentionsAsPlainText(arg0) {
  _require = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => {
    let str = closure_0;
    if (closure_0 == null) {
      str = "";
    }
    return hasOwnProperty(str);
  }, items);
  const games = require("useGame").useGames(memo);
  const obj = require("useGame");
  const items1 = [GameStore, UserStore];
  const items2 = [arg0, memo];
  return require("initialize").useStateFromStores(items1, () => {
    if (!obj.isNullOrEmpty(nsfwAllowed)) {
      if (0 !== memo.length) {
        const currentUser = UserStore.getCurrentUser();
        nsfwAllowed = undefined;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return str.replace(timestampProducer, (arg0, gameId) => {
          game = game.getGame(gameId);
          if (obj.isGameProfileObscured(game, nsfwAllowed)) {
            const intl2 = nsfwAllowed(memo[9]).intl;
            let stringResult = intl2.string(nsfwAllowed(memo[9]).t["11pdXZ"]);
          } else {
            stringResult = undefined;
            if (game != null) {
              stringResult = game.name;
            }
            if (stringResult == null) {
              const intl = nsfwAllowed(memo[9]).intl;
              stringResult = intl.string(nsfwAllowed(memo[9]).t["11pdXZ"]);
            }
          }
          return stringResult;
        });
      }
    }
    return nsfwAllowed;
  }, items2);
});