// discord_app/modules/reactions/native/useEmojisForReactionRow.tsx
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let obj1;

const EmojiIntention = EmojiConstants.EmojiIntention;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (getGuildId, arg1, arg2) => {
      let tmp4;
      const _require = getGuildId;
      let obj = require("react");
      const cResult = obj.c(11);
      const tmp = _require;
      if (cResult[0] !== getGuildId) {
        const guildId = getGuildId.getGuildId();
        cResult[0] = getGuildId;
        cResult[1] = guildId;
        tmp4 = guildId;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = tmp(9883);
      const frequentlyUsedReactionEmojis = tmpResult.useFrequentlyUsedReactionEmojis(tmp4);
      const rounded = Math.floor(Math.min(useWindowDimensionsDefault().width, arg1) / arg2);
      if (cResult[2] === getGuildId) {
        if (cResult[3] === frequentlyUsedReactionEmojis) {
          let arr2;
          if (cResult[4] === rounded) {
            arr2 = cResult[5];
          }
          if (cResult[8] === arr2) {
            let tmp8;
            if (cResult[9] === rounded) {
              tmp8 = cResult[10];
            }
            return tmp8;
          }
          const substr = arr2.slice(0, rounded - 1);
          cResult[8] = arr2;
          cResult[9] = rounded;
          cResult[10] = substr;
          tmp8 = substr;
        }
      }
      if (cResult[6] !== getGuildId) {
        class R {
          constructor(arg0) {
            obj = closure_1(closure_2[6]);
            obj1 = { emoji: getGuildId, channel: closure_0, intention: EmojiIntention.REACTION };
            return !obj.isEmojiFilteredOrLocked(obj1);
          }
        }
        cResult[6] = getGuildId;
        cResult[7] = R;
      } else {
        class R {
          constructor(arg0) {
            obj = closure_1(closure_2[6]);
            obj1 = { emoji: getGuildId, channel: closure_0, intention: EmojiIntention.REACTION };
            return !obj.isEmojiFilteredOrLocked(obj1);
          }
        }
      }
      const found = frequentlyUsedReactionEmojis.filter(R);
      if (found.length < rounded) {
        class R {
          constructor(arg0) {
            obj = closure_1(closure_2[6]);
            obj1 = { emoji: getGuildId, channel: closure_0, intention: EmojiIntention.REACTION };
            return !obj.isEmojiFilteredOrLocked(obj1);
          }
        }
      }
      cResult[2] = getGuildId;
      cResult[3] = frequentlyUsedReactionEmojis;
      cResult[4] = rounded;
      cResult[5] = found;
      arr2 = found;
    }
  : (getGuildId, arg1, arg2) => {
      let rounded;
      const _require = getGuildId;
      const guildId = getGuildId.getGuildId();
      let obj = require("EmojiPickerUtils");
      const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(guildId);
      rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[5])().width, arg1) / arg2);
      const items = [frequentlyUsedReactionEmojis, getGuildId, rounded];
      const memo = react.useMemo(() => {
        let length;
        const found = frequentlyUsedReactionEmojis.filter((emoji) => {
          const obj = frequentlyUsedReactionEmojis(rounded[6]);
          const obj2 = { emoji, channel, intention: constants.REACTION };
          return !obj.isEmojiFilteredOrLocked(obj2);
        });
        if (found.length < rounded) {
          do {
            let arr = found.push(null);
            length = found.length;
          } while (length < rounded);
        }
        return found;
      }, items);
      return memo.slice(0, rounded - 1);
    };
const result = size.fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = tmp2;
