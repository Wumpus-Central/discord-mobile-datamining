// discord_app/modules/reactions/native/useEmojisForReactionRow.tsx
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const EmojiIntention = fn(1392).EmojiIntention;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/useEmojisForReactionRow.tsx");

export const useEmojisForReactionRow = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEmojisForReactionRow(getGuildId, arg1, arg2) {
      let length;
      _require = getGuildId;
      const cResult = require("c").c(11);
      if (cResult[0] !== getGuildId) {
        const guildId = getGuildId.getGuildId();
        cResult[0] = getGuildId;
        cResult[1] = guildId;
        let tmp4 = guildId;
      } else {
        tmp4 = cResult[1];
      }
      const obj = require("c");
      const frequentlyUsedReactionEmojis = require("EmojiPickerUtils").useFrequentlyUsedReactionEmojis(tmp4);
      const rounded = Math.floor(Math.min(useWindowDimensionsDefault().width, arg1) / arg2);
      if (cResult[2] === getGuildId) {
        if (cResult[3] === frequentlyUsedReactionEmojis) {
          if (cResult[4] === rounded) {
            let arr2 = cResult[5];
          }
          if (cResult[8] === arr2) {
            if (cResult[9] === rounded) {
              let tmp9 = cResult[10];
            }
            return tmp9;
          }
          const substr = arr2.slice(0, rounded - 1);
          cResult[8] = arr2;
          cResult[9] = rounded;
          cResult[10] = substr;
          tmp9 = substr;
        }
      }
      if (cResult[6] !== getGuildId) {
        const fn = function v(emoji) {
          return !EmojiUtilsDefault.isEmojiFilteredOrLocked({ emoji, channel, intention: EmojiIntention.REACTION });
        };
        cResult[6] = getGuildId;
        cResult[7] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[7];
      }
      const found = frequentlyUsedReactionEmojis.filter(tmp7);
      if (found.length < rounded) {
        do {
          let arr = found.push(null);
          length = found.length;
        } while (length < rounded);
      }
      cResult[2] = getGuildId;
      cResult[3] = frequentlyUsedReactionEmojis;
      cResult[4] = rounded;
      cResult[5] = found;
      arr2 = found;
      const tmpResult = require("EmojiPickerUtils");
    }
  : function useEmojisForReactionRow(getGuildId, arg1, arg2) {
      _require = getGuildId;
      const guildId = getGuildId.getGuildId();
      const frequentlyUsedReactionEmojis = require("EmojiPickerUtils").useFrequentlyUsedReactionEmojis(guildId);
      rounded = Math.floor(Math.min(frequentlyUsedReactionEmojis(rounded[5])().width, arg1) / arg2);
      const items = [frequentlyUsedReactionEmojis, getGuildId, rounded];
      const memo = noop.useMemo(() => {
        let length;
        const found = frequentlyUsedReactionEmojis.filter(
          (emoji) =>
            !frequentlyUsedReactionEmojis(rounded[6]).isEmojiFilteredOrLocked({
              emoji,
              channel,
              intention: constants.REACTION,
            }),
        );
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
