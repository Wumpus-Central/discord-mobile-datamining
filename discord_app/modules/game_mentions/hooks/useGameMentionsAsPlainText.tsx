// discord_app/modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx
import noop from "noop";
import handleLoadMessages from "handleLoadMessages";
import mergeGuildAvatar from "mergeGuildAvatar";
import regExp from "regExp";

let c5;
let closure_6;
const require = arg1;
({ extractGameMentionIds: c5, GAME_MENTION_RAW_RE_GLOBAL: closure_6 } = regExp);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = function useGameMentionsAsPlainText(state) {
  const _require = state;
  const items = [state];
  const memo = React.useMemo(() => {
    let str = closure_0;
    if (closure_0 == null) {
      str = "";
    }
    return outer1_5(str);
  }, items);
  const games = _require(memo[4]).useGames(memo);
  const obj = _require(memo[4]);
  const items1 = [handleLoadMessages, mergeGuildAvatar];
  const items2 = [state, memo];
  return _require(memo[5]).useStateFromStores(items1, () => {
    if (!obj.isNullOrEmpty(nsfwAllowed)) {
      if (0 !== memo.length) {
        const currentUser = outer1_4.getCurrentUser();
        nsfwAllowed = undefined;
        if (currentUser != null) {
          nsfwAllowed = currentUser.nsfwAllowed;
        }
        return str.replace(outer1_6, (arg0, gameId) => {
          const game = outer1_3.getGame(gameId);
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