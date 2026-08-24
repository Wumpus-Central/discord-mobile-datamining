// discord_app/modules/emojis/hooks/useEmojiAndSource.tsx
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/GuildStore.tsx";
import closure_6 from "../EmojiStore.tsx";
import getEmojiSourceData from "../records/ExpressionSourceRecord.tsx";
import { GuildFeatures } from "../../../Constants.tsx";

const require = arg1;
({ ExpressionSourceGuildRecord: error, EmojiSourceDataTypes: closure_8, getEmojiSourceData: c9 } = getEmojiSourceData);
const result = require("set").fileFinishedImporting("modules/emojis/hooks/useEmojiAndSource.tsx");

export const useEmojiAndSource = function useEmojiAndSource(emojiId) {
  emojiId = emojiId.emojiId;
  const refreshPositionKey = emojiId.refreshPositionKey;
  closure_2 = undefined;
  let callback;
  let React;
  c5 = undefined;
  c6 = undefined;
  closure_7 = undefined;
  const items = [c6, c5];
  const emoji = emojiId(refreshPositionKey[8]).useStateFromStoresObject(items, () => {
    let obj = c6;
    let customEmojiById = null;
    if (null != emojiId) {
      customEmojiById = obj.getCustomEmojiById(tmp);
    }
    let type;
    if (customEmojiById != null) {
      type = customEmojiById.type;
    }
    if (type === emojiId(refreshPositionKey[7]).EmojiTypes.GUILD) {
      obj = { emoji: null, joinedEmojiSourceGuildRecord: null };
      obj[0] = customEmojiById;
      let guildId;
      if (customEmojiById != null) {
        guildId = customEmojiById.guildId;
      }
      obj[1] = c5.getGuild(guildId);
    } else {
      obj = { emoji: null, joinedEmojiSourceGuildRecord: null };
    }
    return obj;
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
  [tmp8, c3] = callback(React.useState(tmp5), 2);
  const sourceType = callback(React.useState(null), 2);
  React = sourceType[1];
  let fromGuildRecord = null;
  if (null != joinedEmojiSourceGuildRecord) {
    fromGuildRecord = closure_7.createFromGuildRecord(joinedEmojiSourceGuildRecord);
  }
  let tmp6Result = tmp6(obj2.useState(fromGuildRecord), 2);
  [tmp13, c5] = tmp6Result;
  tmp6Result = tmp6(obj2.useState(null), 2);
  [tmp15, c6] = tmp6Result;
  closure_7 = obj2.useRef(refreshPositionKey);
  const effect = obj2.useEffect(() => {
    closure_7.current = refreshPositionKey;
  });
  const items1 = [emojiId, tmp5];
  const effect1 = obj2.useEffect(() => {
    function _fetch() {
      const self = this;
      const tmp = callback(function*() {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            v0 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp5;
                closure_0 = tmp2;
                closure_0 = undefined;
                let tmp6 = null;
                if (null != closure_1_0) {
                  c2 = 1;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_2_9(tmp33);
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else {
              tmp6 = arg1;
              if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            }
            closure_0 = tmp6;
            if (null != closure_0) {
              closure_1_4(closure_0.type);
              const type = closure_0.type;
              if (closure_2_8.APPLICATION === type) {
                closure_1_6(closure_0.application);
              } else if (closure_2_8.GUILD === type) {
                closure_1_5(closure_0.guild);
              }
            }
            v0(false);
            const current = closure_1_7.current;
            if (current != null) {
              current();
            }
            v0 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp27) {
            v0 = tmp;
            throw tmp27;
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let current = ref.current;
    if (current != null) {
      current();
    }
    if (closure_2) {
      (function fetch() {
        const self = this;
        const apply = _fetch.apply;
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