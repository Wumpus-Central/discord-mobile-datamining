// === Module 9953: useEmojiAndSource ===

// Module 9953 (useEmojiAndSource)
import Constants from "Constants" /* 1085 */;
import EmojiTypes from "EmojiTypes" /* 4532 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 5979 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, current2Result, currentResult, emojiId, obj1, ref;

let c9;
let metroImportAll;
let metroImportDefault;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ExpressionSourceGuildRecord: metroImportDefault, EmojiSourceDataTypes: metroImportAll, getEmojiSourceData: c9 } = ExpressionSourceRecord);
const GuildFeatures = Constants.GuildFeatures;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiId) => {
  let closure_2;
  let emoji;
  let first;
  let hasItem;
  let items1;
  let joinedEmojiSourceGuildRecord;
  let obj3;
  let refreshPositionKey;
  let tmp16;
  let tmp18;
  let tmp22;
  let tmp24;
  let tmp = emojiId;
  const tmp2 = refreshPositionKey;
  let obj = emojiId(refreshPositionKey[9]);
  const cResult = obj.c(21);
  emojiId = emojiId.emojiId;
  refreshPositionKey = emojiId.refreshPositionKey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmojiStore, GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== emojiId) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    cResult[1] = emojiId;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  const tmpResult = tmp(tmp2[10]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, E);
  ({ joinedEmojiSourceGuildRecord, emoji } = stateFromStoresObject);
  if (cResult[3] !== joinedEmojiSourceGuildRecord) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    if (hasItem) {
      class E {
        constructor() {
          obj = closure_6;
          tmp = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp2);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            getGuild = tmp.getGuild;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
            obj4 = obj1;
          } else {
            obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj4;
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
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  if (null != joinedEmojiSourceGuildRecord) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  if (null == joinedEmojiSourceGuildRecord) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  _asyncToGenerator = tmp13;
  const tmp15 = _slicedToArray(react.useState(tmp13), 2);
  [tmp16, _slicedToArray] = tmp15;
  const tmp17 = _slicedToArray(react.useState(null), 2);
  [tmp18, react] = tmp17;
  if (cResult[5] !== joinedEmojiSourceGuildRecord) {
    let fromGuildRecord;
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    if (null != joinedEmojiSourceGuildRecord) {
      class E {
        constructor() {
          obj = closure_6;
          tmp = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp2);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            getGuild = tmp.getGuild;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
            obj4 = obj1;
          } else {
            obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj4;
        }
      }
      fromGuildRecord = ref.createFromGuildRecord(joinedEmojiSourceGuildRecord);
    }
    cResult[5] = joinedEmojiSourceGuildRecord;
    cResult[6] = fromGuildRecord;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  [tmp22, GuildStore] = react.useState(tmp19);
  _slicedToArray(react.useState(tmp19), 2);
  [tmp24, EmojiStore] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  ref = react.useRef(refreshPositionKey);
  if (cResult[7] !== refreshPositionKey) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    cResult[7] = refreshPositionKey;
    cResult[8] = tmp26;
  } else {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
  }
  const effect = react.useEffect(tmp26);
  if (cResult[9] === emojiId) {
    class E {
      constructor() {
        obj = closure_6;
        tmp = closure_5;
        customEmojiById = null;
        if (null != emojiId) {
          customEmojiById = obj.getCustomEmojiById(tmp2);
        }
        type = undefined;
        if (customEmojiById != null) {
          type = customEmojiById.type;
        }
        if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
          obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          obj1.emoji = customEmojiById;
          guildId = undefined;
          getGuild = tmp.getGuild;
          if (customEmojiById != null) {
            guildId = customEmojiById.guildId;
          }
          obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
          obj4 = obj1;
        } else {
          obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
        }
        return obj4;
      }
    }
    const effect1 = react.useEffect(B, items1);
    if (cResult[13] === emoji) {
      class E {
        constructor() {
          obj = closure_6;
          tmp = closure_5;
          customEmojiById = null;
          if (null != emojiId) {
            customEmojiById = obj.getCustomEmojiById(tmp2);
          }
          type = undefined;
          if (customEmojiById != null) {
            type = customEmojiById.type;
          }
          if (type === closure_0(closure_1[7]).EmojiTypes.GUILD) {
            obj1 = { emoji: null, joinedEmojiSourceGuildRecord: null };
            obj1.emoji = customEmojiById;
            guildId = undefined;
            getGuild = tmp.getGuild;
            if (customEmojiById != null) {
              guildId = customEmojiById.guildId;
            }
            obj1.joinedEmojiSourceGuildRecord = getGuild(guildId);
            obj4 = obj1;
          } else {
            obj4 = { emoji: null, joinedEmojiSourceGuildRecord: null };
          }
          return obj4;
        }
      }
    }
    let obj2 = { expressionSourceGuild: tmp22, expressionSourceApplication: tmp24, sourceType: tmp18, joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild: tmp9, emoji, isFetching: tmp16 };
    cResult[13] = emoji;
    cResult[14] = tmp24;
    cResult[15] = tmp22;
    cResult[16] = null != joinedEmojiSourceGuildRecord;
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
      closure_0 = closure_2(function() { /* body not rendered: F152355 */ });
      tmp3 = closure_2;
      if (tmp3) {
        tmp5 = (function fetch() { /* body not rendered: F152356 */ })();
      } else {
        current2 = tmp.current;
        if (current2 != null) {
          current2Result = current2();
        }
      }
      return;
    }
  }
  items1 = [emojiId, !tmp9];
  cResult[9] = emojiId;
  cResult[10] = null == joinedEmojiSourceGuildRecord;
  cResult[11] = B;
  cResult[12] = items1;
}) : ((emojiId) => {
  let c3;
  let c5;
  let c6;
  let closure_4;
  let sourceType;
  let tmp14;
  let tmp16;
  let tmp8;
  emojiId = emojiId.emojiId;
  const refreshPositionKey = emojiId.refreshPositionKey;
  let closure_2;
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  ref = undefined;
  let obj = emojiId(refreshPositionKey[10]);
  const items = [c6, c5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getGuild;
    let guildId;
    let obj3;
    let customEmojiById = null;
    if (null != emojiId) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp2);
    }
    let type;
    if (customEmojiById != null) {
      type = customEmojiById.type;
    }
    if (type === EmojiTypes.EmojiTypes.GUILD) {
      const obj2 = { emoji: customEmojiById, joinedEmojiSourceGuildRecord: getGuild(guildId) };
      guildId = undefined;
      getGuild = GuildStore.getGuild;
      if (customEmojiById != null) {
        guildId = customEmojiById.guildId;
      }
      obj3 = obj2;
    } else {
      obj3 = { emoji: null, joinedEmojiSourceGuildRecord: null };
    }
    return obj3;
  });
  const joinedEmojiSourceGuildRecord = stateFromStoresObject.joinedEmojiSourceGuildRecord;
  const hasJoinedEmojiSourceGuild = null != joinedEmojiSourceGuildRecord;
  let hasItem = null != joinedEmojiSourceGuildRecord;
  const emoji = stateFromStoresObject.emoji;
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
  let obj2 = react;
  const tmp6 = _slicedToArray;
  [tmp8, c3] = _slicedToArray(react.useState(tmp5), 2);
  const tmp7 = _slicedToArray(react.useState(tmp5), 2);
  [sourceType, react] = react.useState(null);
  let fromGuildRecord = null;
  if (null != joinedEmojiSourceGuildRecord) {
    fromGuildRecord = ref.createFromGuildRecord(joinedEmojiSourceGuildRecord);
  }
  [tmp14, c5] = tmp6(obj2.useState(fromGuildRecord), 2);
  tmp6(obj2.useState(fromGuildRecord), 2);
  [tmp16, c6] = tmp6(obj2.useState(null), 2);
  tmp6(obj2.useState(null), 2);
  ref = obj2.useRef(refreshPositionKey);
  const effect = obj2.useEffect(() => {
    ref.current = refreshPositionKey;
  });
  const items1 = [emojiId, tmp5];
  const effect1 = obj2.useEffect(() => {
    let tmp5;
    function fetch() {
      return obj(...arguments);
    }
    let obj = function _fetch2() {
      obj = _asyncToGenerator(async () => {
        let closure_0;
        let v3;
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            let tmp;
            let tmp5;
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
                let closure_1 = tmp4;
                tmp = undefined;
                tmp5 = null;
                if (null != tmp) {
                  c2 = 1;
                  v3 = 1;
                  const obj4 = { value: closure_2_9(tmp30), done: false };
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else {
              tmp5 = value;
              if (arg0 === 2) {
                v3 = 3;
                obj = { value, done: true };
                return obj;
              }
            }
            tmp = tmp5;
            if (null != tmp) {
              closure_1_4(tmp.type);
              const type = tmp.type;
              if (constants.APPLICATION === type) {
                closure_1_6(tmp.application);
              } else if (constants.GUILD === type) {
                closure_1_5(tmp.guild);
              }
            }
            v3(false);
            const current = ref.current;
            if (current != null) {
              current();
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp26) {
            v3 = 3;
            throw tmp26;
          }
        }
      });
      return obj(...arguments);
    };
    let current = ref.current;
    if (current != null) {
      current();
    }
    if (closure_2) {
      fetch();
    } else {
      const current2 = ref.current;
      if (current2 != null) {
        current2();
      }
    }
    return tmp5;
  }, items1);
  return { expressionSourceGuild, expressionSourceApplication, sourceType, joinedEmojiSourceGuildRecord, hasJoinedEmojiSourceGuild, emoji, isFetching };
});
const result = size.fileFinishedImporting("modules/emojis/hooks/useEmojiAndSource.tsx");

export const useEmojiAndSource = tmp3;