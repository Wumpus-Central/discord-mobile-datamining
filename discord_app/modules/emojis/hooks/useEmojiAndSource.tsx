// === Module 9953: useEmojiAndSource ===

// Module 9953 (useEmojiAndSource)
import EmojiTypes from "EmojiTypes" /* 4532 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import EmojiStore from "EmojiStore" /* 5645 */;

require = fn;
const ExpressionSourceRecord = fn(5979);
({ ExpressionSourceGuildRecord: closure_7, EmojiSourceDataTypes: closure_8, getEmojiSourceData: closure_9 } = ExpressionSourceRecord);
const GuildFeatures = fn(1085).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiAndSource.tsx");

export const useEmojiAndSource = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiId) => {
  const cResult = emojiId(refreshPositionKey[9]).c(21);
  emojiId = emojiId.emojiId;
  refreshPositionKey = emojiId.refreshPositionKey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore, GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== emojiId) {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
    cResult[1] = emojiId;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
  }
  let obj = emojiId(refreshPositionKey[9]);
  const stateFromStoresObject = emojiId(refreshPositionKey[10]).useStateFromStoresObject(first, E);
  ({ joinedEmojiSourceGuildRecord, emoji } = stateFromStoresObject);
  if (cResult[3] !== joinedEmojiSourceGuildRecord) {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
    if (hasItem) {
      class E {
        constructor() {
          obj = closure_6;
          obj2 = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
            obj5 = obj1;
          } else {
            obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj5;
        }
      }
      hasItem = obj3.has(GuildFeatures.DISCOVERABLE);
    }
    cResult[3] = joinedEmojiSourceGuildRecord;
    cResult[4] = hasItem;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
  }
  if (null != joinedEmojiSourceGuildRecord) {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
  }
  if (null == joinedEmojiSourceGuildRecord) {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
  }
  asyncGeneratorStep = tmp13;
  const tmpResult = emojiId(refreshPositionKey[10]);
  [tmp16, _slicedToArray] = noop.useState(null == joinedEmojiSourceGuildRecord);
  const tmp15 = _slicedToArray(noop.useState(null == joinedEmojiSourceGuildRecord), 2);
  [tmp18, noop] = noop.useState(null);
  if (cResult[5] !== joinedEmojiSourceGuildRecord) {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
    if (null != joinedEmojiSourceGuildRecord) {
      class E {
        constructor() {
          obj = closure_6;
          obj2 = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
            obj5 = obj1;
          } else {
            obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj5;
        }
      }
      const fromGuildRecord = ref.createFromGuildRecord(joinedEmojiSourceGuildRecord);
    }
    cResult[5] = joinedEmojiSourceGuildRecord;
    cResult[6] = fromGuildRecord;
    const tmp19 = fromGuildRecord;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
  }
  const tmp17 = _slicedToArray(noop.useState(null), 2);
  [tmp22, GuildStore] = noop.useState(tmp19);
  const tmp14Result = _slicedToArray(noop.useState(tmp19), 2);
  [tmp24, EmojiStore] = noop.useState(null);
  const tmp14Result2 = _slicedToArray(noop.useState(null), 2);
  if (cResult[7] !== refreshPositionKey) {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
    cResult[7] = refreshPositionKey;
    cResult[8] = tmp26;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
  }
  const effect = noop.useEffect(tmp26);
  if (cResult[9] === emojiId) {
    class E {
      constructor() {
        obj = closure_6;
        obj2 = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
          obj5 = obj1;
        } else {
          obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj5;
      }
    }
    const effect1 = noop.useEffect(B, items1);
    if (cResult[13] === emoji) {
      class E {
        constructor() {
          obj = closure_6;
          obj2 = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = obj2.getGuild(guildId);
            obj5 = obj1;
          } else {
            obj5 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj5;
        }
      }
    }
    let obj2 = { expressionSourceGuild: tmp22, expressionSourceApplication: tmp24, sourceType: tmp18, joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild: tmp9, emoji, isFetching: tmp16 };
    cResult[13] = emoji;
    cResult[14] = tmp24;
    cResult[15] = tmp22;
    cResult[16] = tmp9;
    cResult[17] = tmp16;
    cResult[18] = joinedEmojiSourceGuildRecord;
    cResult[19] = tmp18;
    cResult[20] = obj2;
  }
  class B {
    constructor() {
      tmp = closure_7;
      current = closure_7.current;
      if (current != null) {
        currentResult = current();
      }
      closure_0 = closure_2(/* F152355 */ function() { ... });
      if (closure_2) {
        tmp4 = (function fetch() { ... })();
      } else {
        current2 = tmp.current;
        if (current2 != null) {
          current2Result = current2();
        }
      }
      return;
    }
  }
  items1 = [emojiId, null == joinedEmojiSourceGuildRecord];
  cResult[9] = emojiId;
  cResult[10] = null == joinedEmojiSourceGuildRecord;
  cResult[11] = B;
  cResult[12] = items1;
  ref = noop.useRef(refreshPositionKey);
}) : ((emojiId) => {
  emojiId = emojiId.emojiId;
  const refreshPositionKey = emojiId.refreshPositionKey;
  closure_2 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  ref = undefined;
  const items = [c6, c5];
  const emoji = emojiId(refreshPositionKey[10]).useStateFromStoresObject(items, () => {
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
  let obj = emojiId(refreshPositionKey[10]);
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
    closure_0 = async function _fetch2() {
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
          return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
});