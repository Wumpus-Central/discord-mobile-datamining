// === Module 10469: useEmojiAndSource ===

// Module 10469 (useEmojiAndSource)
import EmojiTypes from "EmojiTypes" /* 4295 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;
import EmojiStore from "EmojiStore" /* 5544 */;

require = fn;
const ExpressionSourceRecord = fn(5670);
({ ExpressionSourceGuildRecord: closure_7, EmojiSourceDataTypes: closure_8, getEmojiSourceData: closure_9 } = ExpressionSourceRecord);
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiAndSource.tsx");

export const useEmojiAndSource = function useEmojiAndSource(emojiId) {
  emojiId = emojiId.emojiId;
  const refreshPositionKey = emojiId.refreshPositionKey;
  closure_2 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  let ref;
  const items = [c6, c5];
  const emoji = emojiId(refreshPositionKey[8]).useStateFromStoresObject(items, () => {
    let customEmojiById = null;
    if (null != emojiId) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    let type;
    if (customEmojiById != null) {
      type = customEmojiById.type;
    }
    if (type === EmojiTypes.EmojiTypes.GUILD) {
      const obj3 = { emoji: customEmojiById, joinedEmojiSourceGuildRecord: null };
      let guildId;
      if (customEmojiById != null) {
        guildId = customEmojiById.guildId;
      }
      obj3.joinedEmojiSourceGuildRecord = GuildStore.getGuild(guildId);
      let obj4 = obj3;
    } else {
      obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
    }
    return obj4;
  });
  const joinedEmojiSourceGuildRecord = emoji.joinedEmojiSourceGuildRecord;
  const hasJoinedEmojiSourceGuild = null != joinedEmojiSourceGuildRecord;
  let hasItem = null != joinedEmojiSourceGuildRecord;
  if (hasItem) {
    const features = joinedEmojiSourceGuildRecord.features;
    hasItem = features.has(GuildFeatures.DISCOVERABLE);
  }
  let tmp5 = !hasJoinedEmojiSourceGuild;
  if (hasJoinedEmojiSourceGuild) {
    tmp5 = hasItem;
  }
  if (tmp5) {
    tmp5 = null != emojiId;
  }
  closure_2 = tmp5;
  let obj = emojiId(refreshPositionKey[8]);
  [tmp8, c3] = noop.useState(tmp5);
  const sourceType = _slicedToArray(noop.useState(null), 2);
  noop = sourceType[1];
  let fromGuildRecord = null;
  if (null != joinedEmojiSourceGuildRecord) {
    fromGuildRecord = ref.createFromGuildRecord(joinedEmojiSourceGuildRecord);
  }
  const tmp7 = _slicedToArray(noop.useState(tmp5), 2);
  [tmp13, c5] = noop.useState(fromGuildRecord);
  const tmp6Result = _slicedToArray(noop.useState(fromGuildRecord), 2);
  [tmp15, c6] = noop.useState(null);
  ref = obj2.useRef(refreshPositionKey);
  const effect = obj2.useEffect(() => {
    closure_7.current = refreshPositionKey;
  });
  const items1 = [emojiId, tmp5];
  const effect1 = obj2.useEffect(() => {
    closure_0 = async function _fetch() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              let tmp6 = null;
              if (null != closure_0) {
                c2 = 1;
                v3 = 1;
                const obj4 = { value: closure_2_9(tmp32), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else {
            tmp6 = value;
            if (arg0 === 2) {
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            }
          }
          closure_128_0 = tmp6;
          if (null != closure_128_0) {
            closure_1_4(closure_128_0.type);
            const type = closure_128_0.type;
            if (constants.APPLICATION === type) {
              closure_1_6(closure_128_0.application);
            } else if (constants.GUILD === type) {
              closure_1_5(closure_128_0.guild);
            }
          }
          v3(false);
          const current = ref.current;
          if (current != null) {
            current();
          }
          v3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp27) {
          v3 = tmp;
          throw tmp27;
        }
      }
    };
    let current = ref.current;
    if (current != null) {
      current();
    }
    if (closure_2) {
      (function fetch() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    } else {
      const current2 = ref.current;
      if (current2 != null) {
        current2();
      }
    }
    return tmp4;
  }, items1);
  return { expressionSourceGuild, expressionSourceApplication, sourceType: sourceType[0], joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild, emoji: emoji.emoji, isFetching };
};