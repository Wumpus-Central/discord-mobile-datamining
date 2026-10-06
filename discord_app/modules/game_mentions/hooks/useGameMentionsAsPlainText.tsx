// discord_app/modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx
import StringUtils from "../../../utils/StringUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import GameStore from "../../games/GameStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, game, num, tmp, tmp2;

let hasOwnProperty;
let metroRequire;
({ extractGameMentionIds: hasOwnProperty, GAME_MENTION_RAW_RE_GLOBAL: metroRequire } = ChannelAutocompleteConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let length;
      let tmp4;
      let tmp8;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(7);
      let str = arg0;
      if (arg0 == null) {
        str = "";
      }
      if (cResult[0] !== str) {
        const tmp6 = closure_5(str);
        cResult[0] = str;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      dependencyMap = tmp4;
      const tmpResult = require("useGame");
      const games = tmpResult.useGames(tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameStore, UserStore];
        cResult[2] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        let tmp11;
        let tmp12;
        if (cResult[4] === arg0) {
          tmp11 = cResult[5];
          tmp12 = cResult[6];
        }
        const tmpResult2 = require("get initialized");
        return tmpResult2.useStateFromStores(tmp8, tmp11, tmp12);
      }
      class G {
        constructor() {
          obj = closure_0(closure_1[7]);
          str = closure_0;
          if (!obj.isNullOrEmpty(closure_0)) {
            tmp = closure_1;
            num = 0;
            if (0 !== closure_1.length) {
              tmp2 = closure_4;
              currentUser = closure_4.getCurrentUser();
              tmp4 = null;
              nsfwAllowed = undefined;
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              tmp6 = closure_6;
              return str.replace(closure_6, () => {
                /* body not rendered: F140793 */
              });
            }
          }
          return str;
        }
      }
      const items1 = [arg0, tmp4];
      cResult[3] = tmp4;
      cResult[4] = arg0;
      cResult[5] = G;
      cResult[6] = items1;
      tmp12 = items1;
      tmp11 = G;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [arg0];
      const memo = react.useMemo(() => {
        let str = closure_0;
        if (closure_0 == null) {
          str = "";
        }
        return hasOwnProperty(str);
      }, items);
      let obj = require("useGame");
      const games = obj.useGames(memo);
      const items1 = [GameStore, UserStore];
      const items2 = [arg0, memo];
      const obj2 = require("get initialized");
      return obj2.useStateFromStores(
        items1,
        () => {
          let obj = StringUtils;
          if (!obj.isNullOrEmpty(closure_0)) {
            if (0 !== memo.length) {
              const currentUser = UserStore.getCurrentUser();
              let nsfwAllowed;
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              return closure_0.replace(metroRequire, (arg0, gameId) => {
                let stringResult;
                game = game.getGame(gameId);
                const obj = closure_2_0(memo[8]);
                if (obj.isGameProfileObscured(game, nsfwAllowed)) {
                  const intl2 = closure_2_0(memo[9]).intl;
                  stringResult = intl2.string(closure_2_0(memo[9]).t["11pdXZ"]);
                } else {
                  stringResult = undefined;
                  if (game != null) {
                    stringResult = game.name;
                  }
                  if (stringResult == null) {
                    const intl = closure_2_0(memo[9]).intl;
                    stringResult = intl.string(closure_2_0(memo[9]).t["11pdXZ"]);
                  }
                }
                return stringResult;
              });
            }
          }
          return closure_0;
        },
        items2,
      );
    };
const result = size.fileFinishedImporting("modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx");

export const useGameMentionsAsPlainText = tmp3;
