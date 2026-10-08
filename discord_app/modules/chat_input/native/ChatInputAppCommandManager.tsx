// === Module 12136: ChatInputAppCommandManager ===

// Module 12136 (ChatInputAppCommandManager)
import nativeDefault from "native" /* 587 */;
import useGameProfileObscured from "useGameProfileObscured" /* 8213 */;
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser" /* 11683 */;
import ApplicationCommandManagerDefault from "ApplicationCommandManager" /* 12137 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 7893 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7894 */;
import GameStore from "GameStore" /* 2019 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8211 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
function areResolvedGamesEqual(size, size2) {
  if (size === size2) {
    return true;
  } else {
    if (null != size) {
      if (null != size2) {
        if (size.size === size2.size) {
          const keys = size.keys();
          for (const item10011 of keys) {
            if (arg1.has(item10011)) {
              continue;
            } else {
              obj.return();
              let flag = false;
              return false;
            }
          }
          return true;
        }
      }
    }
    return false;
  }
}
const ChannelAutocompleteConstants = fn(5400);
({ extractGameMentionIds: closure_11, GAME_MENTION_RAW_RE_GLOBAL: closure_12, GAME_MENTION_SENTINEL: map1 } = ChannelAutocompleteConstants);
const createStyles = fn(5090);
let obj = { commandOption: { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.xs, fontSize: 14 }, commandErrorOption: null, gameMention: null, timestampMention: null, autocomplete: null };
let obj3 = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
obj.commandErrorOption = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
let obj4 = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
obj.gameMention = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
let obj5 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj.timestampMention = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
const obj6 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj.autocomplete = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
let closure_14 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
class ChatInputAppCommandManager {
  constructor(arg0) {
    chatInputRef = global.chatInputRef;
    chatInputStateRef = global.chatInputStateRef;
    channel = global.channel;
    commandsDisabled = global.commandsDisabled;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    commands = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    rawGameMentionIds = undefined;
    resolvedGameMentions = undefined;
    closure_15 = undefined;
    tmp = resolvedGameMentions();
    closure_4 = tmp;
    obj = chatInputRef(commandsDisabled[17]);
    applicationCommandOptionValueParser = obj.useApplicationCommandOptionValueParser({ channel });
    closure_5 = applicationCommandOptionValueParser;
    obj2 = chatInputRef(commandsDisabled[16]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => ApplicationCommandStore.getActiveCommand(channel.id));
    closure_6 = stateFromStores;
    obj3 = chatInputRef(commandsDisabled[16]);
    items1 = [];
    items1[0] = closure_6;
    stateFromStores1 = obj3.useStateFromStores(items1, () => ApplicationCommandAutocompleteStore.getLastResponseNonce(channel.id));
    closure_7 = stateFromStores1;
    obj4 = chatInputRef(commandsDisabled[18]);
    text = obj4.getTextBeforeFirstOption(chatInputStateRef.current.text).text;
    substr = text.slice(1);
    ref = closure_5.useRef(substr.trimEnd());
    closure_8 = ref;
    tmp6 = closure_4(closure_5.useState(ref.current), 2);
    closure_9 = tmp6[1];
    obj6 = channel(commandsDisabled[19]);
    commands = obj6.useCachedResults({ type: "channel", channel }, chatInputRef(commandsDisabled[20]).ApplicationCommandType.CHAT, tmp6[0]).commands;
    closure_11 = closure_5.useRef(undefined);
    tmp7 = useResolveComposerGameMentions();
    syncRawGameMentionIdsFromText = tmp7.syncRawGameMentionIdsFromText;
    closure_12 = syncRawGameMentionIdsFromText;
    rawGameMentionIds = tmp7.rawGameMentionIds;
    resolvedGameMentions = tmp7.resolvedGameMentions;
    items2 = [, , , , , , , , , ];
    items2[0] = stateFromStores;
    items2[1] = channel;
    items2[2] = chatInputRef;
    items2[3] = chatInputStateRef;
    items2[4] = commandsDisabled;
    items2[5] = stateFromStores1;
    items2[6] = applicationCommandOptionValueParser;
    items2[7] = commands;
    items2[8] = tmp;
    items2[9] = syncRawGameMentionIdsFromText;
    callback = closure_5.useCallback(() => {
      const current = chatInputStateRef.current;
      const text = current.text;
      ({ editId, focused, selectionStart, selectionEnd } = current);
      syncRawGameMentionIdsFromText(text);
      const obj = { activeCommand: stateFromStores, channel, commandsDisabled, editId, focused, lastCommandAutocompleteResponseNonce: stateFromStores1, queryCommands: commands, selectionStart, selectionEnd, text };
      if (null == ref.current) {
        const obj2 = { props: obj, ref: chatInputRef, optionValueParser: applicationCommandOptionValueParser, styles: null };
        closure_0 = closure_4;
        const obj3 = {
          commandOption() {
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(closure_0.commandOption);
            },
          commandErrorOption() {
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(closure_0.commandErrorOption);
            },
          gameMention() {
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(closure_0.gameMention);
            },
          timestampMention() {
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(closure_0.timestampMention);
            },
          autocomplete(color) {
              if (null == color) {
                let autocomplete = closure_0.autocomplete;
              } else {
                autocomplete = {};
                const merged = Object.assign(closure_0.autocomplete);
                autocomplete.color = color;
              }
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(autocomplete);
            }
        };
        obj2.styles = obj3;
        const tmp12 = new ApplicationCommandManagerDefault(obj2);
        ref.current = tmp12;
      } else {
        const current2 = ref.current;
        const obj4 = { newState: obj };
        const result = current2.updateApplicationCommandManagerState(obj4);
      }
      const text1 = ChatInputCommandOptionParser.getTextBeforeFirstOption(text).text;
      const substr = text1.slice(1);
      const trimEndResult = substr.trimEnd();
      if (ref.current !== trimEndResult) {
        closure_9(trimEndResult);
        tmp15.current = trimEndResult;
      }
    }, items2);
    closure_15 = callback;
    items3 = [];
    items3[0] = callback;
    effect = closure_5.useEffect(() => {
      callback();
    }, items3);
    items4 = [];
    items4[0] = tmp;
    effect1 = closure_5.useEffect(() => {
      const current = ref.current;
      if (current != null) {
        closure_0 = closure_4;
        const obj = {
          commandOption() {
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(closure_0.commandOption);
            },
          commandErrorOption() {
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(closure_0.commandErrorOption);
            },
          gameMention() {
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(closure_0.gameMention);
            },
          timestampMention() {
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(closure_0.timestampMention);
            },
          autocomplete(color) {
              if (null == color) {
                let autocomplete = closure_0.autocomplete;
              } else {
                autocomplete = {};
                const merged = Object.assign(closure_0.autocomplete);
                autocomplete.color = color;
              }
              return chatInputRef(commandsDisabled[10]).convertToNativeStyle(autocomplete);
            }
        };
        current.updateStyles(obj);
      }
    }, items4);
    items5 = [, , , , ];
    items5[0] = resolvedGameMentions;
    items5[1] = rawGameMentionIds;
    items5[2] = chatInputRef;
    items5[3] = chatInputStateRef;
    items5[4] = callback;
    effect2 = closure_5.useEffect(() => {
      const current = ref.current;
      if (null != resolvedGameMentions) {
        if (0 !== rawGameMentionIds.length) {
          if (null != current) {
            const mapped = closure_2_11(chatInputStateRef.current.text).map((item) => resolvedGameMentions.get(item));
            const found = mapped.filter((item) => null != item);
            if (0 !== found.length) {
              const replaced = str.replace(__initData, (arg0, arg1) => {
                let combined = arg0;
                value = resolvedGameMentions.get(arg1);
                if (null != value) {
                  const _HermesInternal = HermesInternal;
                  combined = "" + rawGameMentionIds + value.name;
                }
                return combined;
              });
              for (const item10011 of found) {
                let addGameMentionResult = current.addGameMention(item10011);
                continue;
              }
              const current2 = chatInputRef.current;
              current2.setText(replaced);
              chatInputStateRef.current.textPrev = str;
              chatInputStateRef.current.text = replaced;
              callback();
            }
            const arr = closure_2_11(chatInputStateRef.current.text);
          }
        }
      }
    }, items5);
    imperativeHandle = closure_5.useImperativeHandle(global.ref, () => ({
      getApplicationCommandManager() {
        return ref.current;
      },
      updateState() {
        return callback();
      }
    }));
    return null;
  }
}
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useResolveComposerGameMentions() {
  const cResult = first1(576).c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let num2 = 2;
  [first1, closure_1] = noop.useState(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(arg0) {
      closure_0 = closure_2_11(arg0);
      closure_1((arg0) => {
        let tmp = closure_0;
        if (obj.isEqual(arg0, closure_0)) {
          tmp = arg0;
        }
        return tmp;
      });
    };
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== first1) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          return null == closure_1_9.getGameById(arg0);
        }
      }
      cResult[4] = E;
    } else {
      class E {
        constructor(arg0) {
          return null == closure_1_9.getGameById(arg0);
        }
      }
    }
    const found = first1.filter(E);
    cResult[num2] = first1;
    num2 = 3;
    cResult[3] = found;
  } else {
    class E {
      constructor(arg0) {
        return null == closure_1_9.getGameById(arg0);
      }
    }
    const games = tmp(6995).useGames(tmp7);
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          return null == closure_1_9.getGameById(arg0);
        }
      }
      const items1 = [GameStore, UserStore, GameAutocompleteStore];
      cResult[5] = items1;
    } else {
      class E {
        constructor(arg0) {
          return null == closure_1_9.getGameById(arg0);
        }
      }
    }
    if (cResult[6] !== first1) {
      class R {
        constructor() {
          tmp = closure_0;
          if (0 === closure_0.length) {
            tmp27 = null;
            return null;
          } else {
            tmp28 = closure_10;
            currentUser = closure_10.getCurrentUser();
            tmp30 = null;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            tmp2 = globalThis;
            _Map = Map;
            tmp3 = new.target;
            tmp4 = new.target;
            map = new Map();
            tmp5 = map;
            tmp6 = tmp;
            tmp7 = tmp;
            for (const item10017 of tmp) {
              tmp8 = item10017;
              tmp9 = closure_8;
              game = closure_8.getGame(item10017);
              tmp11 = game;
              if (null == game) {
                tmp19 = closure_9;
                tmp20 = item10017;
                gameById = closure_9.getGameById(tmp8);
                if (null == gameById) {
                } else {
                  tmp23 = item10017;
                  tmp24 = gameById;
                  result = map.set(tmp8, tmp22);
                }
              } else {
                tmp12 = closure_0;
                tmp13 = closure_3;
                obj2 = closure_0(closure_3[15]);
                tmp14 = game;
                if (obj2.isGameProfileObscured(tmp11, nsfwAllowed)) {
                } else {
                  tmp15 = item10017;
                  obj1 = { id: null, name: null, icon: null };
                  obj1.id = tmp8;
                  tmp16 = game;
                  ({ name: obj3.name, media } = tmp11);
                  icon = undefined;
                  if (media == null) {
                  } else {
                    icon = media.icon;
                  }
                  if (icon != null) {
                  } else {
                    icon = null;
                  }
                  obj1.icon = icon;
                  result1 = map.set(tmp8, obj1);
                }
              }
              continue;
            }
            tmp26 = null;
            if (map.size > 0) {
              tmp26 = map;
            }
            return tmp26;
          }
        }
      }
      const items2 = [first1];
      cResult[6] = first1;
      cResult[7] = R;
      cResult[8] = items2;
      let tmp16 = items2;
    } else {
      class R {
        constructor() {
          tmp = closure_0;
          if (0 === closure_0.length) {
            tmp27 = null;
            return null;
          } else {
            tmp28 = closure_10;
            currentUser = closure_10.getCurrentUser();
            tmp30 = null;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            tmp2 = globalThis;
            _Map = Map;
            tmp3 = new.target;
            tmp4 = new.target;
            map = new Map();
            tmp5 = map;
            tmp6 = tmp;
            tmp7 = tmp;
            for (const item10017 of tmp) {
              tmp8 = item10017;
              tmp9 = closure_8;
              game = closure_8.getGame(item10017);
              tmp11 = game;
              if (null == game) {
                tmp19 = closure_9;
                tmp20 = item10017;
                gameById = closure_9.getGameById(tmp8);
                if (null == gameById) {
                } else {
                  tmp23 = item10017;
                  tmp24 = gameById;
                  result = map.set(tmp8, tmp22);
                }
              } else {
                tmp12 = closure_0;
                tmp13 = closure_3;
                obj2 = closure_0(closure_3[15]);
                tmp14 = game;
                if (obj2.isGameProfileObscured(tmp11, nsfwAllowed)) {
                } else {
                  tmp15 = item10017;
                  obj1 = { id: null, name: null, icon: null };
                  obj1.id = tmp8;
                  tmp16 = game;
                  ({ name: obj3.name, media } = tmp11);
                  icon = undefined;
                  if (media == null) {
                  } else {
                    icon = media.icon;
                  }
                  if (icon != null) {
                  } else {
                    icon = null;
                  }
                  obj1.icon = icon;
                  result1 = map.set(tmp8, obj1);
                }
              }
              continue;
            }
            tmp26 = null;
            if (map.size > 0) {
              tmp26 = map;
            }
            return tmp26;
          }
        }
      }
      tmp16 = cResult[8];
    }
    const tmpResult2 = tmp(504);
    const stateFromStores = tmpResult2.useStateFromStores(tmp12, R, tmp16, areResolvedGamesEqual);
    if (cResult[9] === first1) {
      class R {
        constructor() {
          tmp = closure_0;
          if (0 === closure_0.length) {
            tmp27 = null;
            return null;
          } else {
            tmp28 = closure_10;
            currentUser = closure_10.getCurrentUser();
            tmp30 = null;
            if (currentUser != null) {
              nsfwAllowed = currentUser.nsfwAllowed;
            }
            tmp2 = globalThis;
            _Map = Map;
            tmp3 = new.target;
            tmp4 = new.target;
            map = new Map();
            tmp5 = map;
            tmp6 = tmp;
            tmp7 = tmp;
            for (const item10017 of tmp) {
              tmp8 = item10017;
              tmp9 = closure_8;
              game = closure_8.getGame(item10017);
              tmp11 = game;
              if (null == game) {
                tmp19 = closure_9;
                tmp20 = item10017;
                gameById = closure_9.getGameById(tmp8);
                if (null == gameById) {
                } else {
                  tmp23 = item10017;
                  tmp24 = gameById;
                  result = map.set(tmp8, tmp22);
                }
              } else {
                tmp12 = closure_0;
                tmp13 = closure_3;
                obj2 = closure_0(closure_3[15]);
                tmp14 = game;
                if (obj2.isGameProfileObscured(tmp11, nsfwAllowed)) {
                } else {
                  tmp15 = item10017;
                  obj1 = { id: null, name: null, icon: null };
                  obj1.id = tmp8;
                  tmp16 = game;
                  ({ name: obj3.name, media } = tmp11);
                  icon = undefined;
                  if (media == null) {
                  } else {
                    icon = media.icon;
                  }
                  if (icon != null) {
                  } else {
                    icon = null;
                  }
                  obj1.icon = icon;
                  result1 = map.set(tmp8, obj1);
                }
              }
              continue;
            }
            tmp26 = null;
            if (map.size > 0) {
              tmp26 = map;
            }
            return tmp26;
          }
        }
      }
      return tmp23;
    }
    let obj2 = { syncRawGameMentionIdsFromText: tmp6, rawGameMentionIds: first1, resolvedGameMentions: stateFromStores };
    cResult[9] = first1;
    cResult[10] = stateFromStores;
    cResult[11] = obj2;
    tmp23 = obj2;
    const tmpResult = tmp(6995);
  }
  let obj = first1(576);
}) : (function useResolveComposerGameMentions() {
  [rawGameMentionIds, closure_1] = noop.useState([]);
  const items = [rawGameMentionIds];
  const callback = noop.useCallback((arg0) => {
    closure_0 = closure_2_11(arg0);
    closure_1((arg0) => {
      let tmp = closure_0;
      if (obj.isEqual(arg0, closure_0)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const memo = noop.useMemo(() => first.filter((item) => null == gameById.getGameById(item)), items);
  const games = rawGameMentionIds(6995).useGames(memo);
  let obj = rawGameMentionIds(6995);
  const items1 = [GameStore, UserStore, GameAutocompleteStore];
  const items2 = [rawGameMentionIds];
  let obj2 = rawGameMentionIds(504);
  return {
    syncRawGameMentionIdsFromText: callback,
    rawGameMentionIds,
    resolvedGameMentions: rawGameMentionIds(504).useStateFromStores(items1, () => {
      if (0 === first.length) {
        return null;
      } else {
        const currentUser = UserStore.getCurrentUser();
        if (currentUser != null) {
          const nsfwAllowed = currentUser.nsfwAllowed;
        }
        const _Map = Map;
        const map = new Map();
        for (const item10017 of tmp) {
          let game = GameStore.getGame(item10017);
          let tmp11 = game;
          if (null == game) {
            let gameById = GameAutocompleteStore.getGameById(item10017);
            if (null != gameById) {
              let result = map.set(item10017, tmp22);
            }
          } else {
            let obj2 = useGameProfileObscured;
            if (!obj2.isGameProfileObscured(tmp11, nsfwAllowed)) {
              let obj = { id: item10017, name: null, icon: null };
              ({ name: obj3.name, media } = tmp11);
              let icon;
              if (media != null) {
                icon = media.icon;
              }
              if (icon == null) {
                icon = null;
              }
              obj.icon = icon;
              let result1 = map.set(item10017, obj);
            }
          }
          continue;
        }
        let tmp26 = null;
        if (map.size > 0) {
          tmp26 = map;
        }
        return tmp26;
      }
    }, items2, areResolvedGamesEqual)
  };
});
ChatInputAppCommandManager.displayName = "ChatInputAppCommandManager";
const obj7 = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default noop.memo(ChatInputAppCommandManager);