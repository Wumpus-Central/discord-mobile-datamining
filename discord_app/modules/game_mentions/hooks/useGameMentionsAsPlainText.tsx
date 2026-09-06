// === Module 10880: useGameMentionsAsPlainText ===

// Module 10880 (useGameMentionsAsPlainText)
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 1916 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const ChannelAutocompleteConstants = fn(5000);
({ extractGameMentionIds: hasOwnProperty, GAME_MENTION_RAW_RE_GLOBAL: metroRequire } = ChannelAutocompleteConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = function useGameMentionsAsPlainText(state) {
  _require = state;
  const items = [state];
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
  const items2 = [state, memo];
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
            const intl2 = tmp2(tmp3[8]).intl;
            let stringResult = intl2.string(tmp2(tmp3[8]).t["11pdXZ"]);
          } else {
            stringResult = undefined;
            if (game != null) {
              stringResult = game.name;
            }
            if (stringResult == null) {
              const intl = tmp2(tmp3[8]).intl;
              stringResult = intl.string(tmp2(tmp3[8]).t["11pdXZ"]);
            }
          }
          return stringResult;
        });
      }
    }
    return nsfwAllowed;
  }, items2);
};