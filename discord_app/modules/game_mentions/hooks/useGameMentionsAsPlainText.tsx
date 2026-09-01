// === Module 9087: useGameMentionsAsPlainText ===

// Module 9087 (useGameMentionsAsPlainText)
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleLoadMessages" /* 4502 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import regExp from "regExp" /* 4953 */;

const require = arg1;
({ extractGameMentionIds: c5, GAME_MENTION_RAW_RE_GLOBAL: closure_6 } = regExp);
const result = require("set").fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = function useGameMentionsAsPlainText(state) {
  const _require = state;
  const items = [state];
  const memo = React.useMemo(() => {
    let str = closure_0;
    if (closure_0 == null) {
      str = "";
    }
    return closure_1_5(str);
  }, items);
  const games = _require(memo[4]).useGames(memo);
  const obj = _require(memo[4]);
  const items1 = [closure_3, closure_4];
  const items2 = [state, memo];
  return _require(memo[5]).useStateFromStores(items1, () => {
    if (!obj.isNullOrEmpty(nsfwAllowed)) {
      if (0 !== memo.length) {
        const currentUser = closure_1_4.getCurrentUser();
        nsfwAllowed = undefined;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return str.replace(closure_1_6, (arg0, closure_0) => {
          const game = closure_1_3.getGame(closure_0);
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