// discord_app/modules/chat_input/native/ChatInputAppCommandManager.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useGameProfileObscured from "../../game_profile/hooks/useGameProfileObscured.tsx";
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser.tsx";
import ApplicationCommandManagerDefault from "../../application_commands/native/ApplicationCommandManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationCommandAutocompleteStore from "../../application_commands/ApplicationCommandAutocompleteStore.tsx";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import GameStore from "../../games/GameStore.tsx";
import GameAutocompleteStore from "../../games/autocomplete/GameAutocompleteStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
const ChannelAutocompleteConstants = fn(5789);
({
  extractGameMentionIds: closure_11,
  GAME_MENTION_RAW_RE_GLOBAL: closure_12,
  GAME_MENTION_SENTINEL: map1,
} = ChannelAutocompleteConstants);
const createStyles = fn(4890);
let obj = {
  commandOption: {
    backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND,
    color: nativeDefault.colors.TEXT_DEFAULT,
    borderRadius: nativeDefault.radii.xs,
    fontSize: 14,
  },
  commandErrorOption: null,
  gameMention: null,
  timestampMention: null,
  autocomplete: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND,
  color: nativeDefault.colors.TEXT_DEFAULT,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
};
obj.commandErrorOption = {
  backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
};
let obj4 = {
  backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
};
obj.gameMention = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  color: nativeDefault.colors.MENTION_FOREGROUND,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
  fontWeight: "bold",
};
let obj5 = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  color: nativeDefault.colors.MENTION_FOREGROUND,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
  fontWeight: "bold",
};
obj.timestampMention = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  color: nativeDefault.colors.MENTION_FOREGROUND,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
  fontWeight: "bold",
};
const obj6 = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  color: nativeDefault.colors.MENTION_FOREGROUND,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
  fontWeight: "bold",
};
obj.autocomplete = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
let closure_14 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
        const fn = function u(arg0) {
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
          class C {
            constructor(arg0) {
              return null == closure_1_9.getGameById(arg0);
            }
          }
          cResult[4] = C;
        } else {
          class C {
            constructor(arg0) {
              return null == closure_1_9.getGameById(arg0);
            }
          }
        }
        const found = first1.filter(C);
        cResult[num2] = first1;
        num2 = 3;
        cResult[3] = found;
      } else {
        class C {
          constructor(arg0) {
            return null == closure_1_9.getGameById(arg0);
          }
        }
        const games = tmp(6812).useGames(tmp7);
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              return null == closure_1_9.getGameById(arg0);
            }
          }
          const items1 = [GameStore, UserStore, GameAutocompleteStore];
          cResult[5] = items1;
        } else {
          class C {
            constructor(arg0) {
              return null == closure_1_9.getGameById(arg0);
            }
          }
        }
        if (cResult[6] !== first1) {
          class I {
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
          cResult[7] = I;
          cResult[8] = items2;
          let tmp16 = items2;
        } else {
          class I {
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
        const stateFromStores = tmpResult2.useStateFromStores(tmp12, I, tmp16, areResolvedGamesEqual);
        if (cResult[9] === first1) {
          class I {
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
        let obj2 = {
          syncRawGameMentionIdsFromText: tmp6,
          rawGameMentionIds: first1,
          resolvedGameMentions: stateFromStores,
        };
        cResult[9] = first1;
        cResult[10] = stateFromStores;
        cResult[11] = obj2;
        tmp23 = obj2;
        const tmpResult = tmp(6812);
      }
      let obj = first1(576);
    }
  : () => {
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
      const games = rawGameMentionIds(6812).useGames(memo);
      let obj = rawGameMentionIds(6812);
      const items1 = [GameStore, UserStore, GameAutocompleteStore];
      const items2 = [rawGameMentionIds];
      let obj2 = rawGameMentionIds(504);
      return {
        syncRawGameMentionIdsFromText: callback,
        rawGameMentionIds,
        resolvedGameMentions: rawGameMentionIds(504).useStateFromStores(
          items1,
          () => {
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
          },
          items2,
          areResolvedGamesEqual,
        ),
      };
    };
const forwardRefResult = noop.forwardRef((chatInputRef, arg1) => {
  chatInputRef = chatInputRef.chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  const channel = chatInputRef.channel;
  const commandsDisabled = chatInputRef.commandsDisabled;
  let stateFromStores1;
  let resolvedGameMentions;
  const tmp = resolvedGameMentions();
  _slicedToArray = tmp;
  const applicationCommandOptionValueParser = chatInputRef(commandsDisabled[17]).useApplicationCommandOptionValueParser(
    { channel },
  );
  let obj = chatInputRef(commandsDisabled[17]);
  const items = [stateFromStores1];
  const stateFromStores = chatInputRef(commandsDisabled[16]).useStateFromStores(items, () =>
    ApplicationCommandStore.getActiveCommand(channel.id),
  );
  let obj2 = chatInputRef(commandsDisabled[16]);
  const items1 = [stateFromStores];
  stateFromStores1 = chatInputRef(commandsDisabled[16]).useStateFromStores(items1, () =>
    ApplicationCommandAutocompleteStore.getLastResponseNonce(channel.id),
  );
  let obj3 = chatInputRef(commandsDisabled[16]);
  let text = chatInputRef(commandsDisabled[18]).getTextBeforeFirstOption(chatInputStateRef.current.text).text;
  let substr = text.slice(1);
  let ref = applicationCommandOptionValueParser.useRef(substr.trimEnd());
  const tmp6 = _slicedToArray(applicationCommandOptionValueParser.useState(ref.current), 2);
  closure_9 = tmp6[1];
  let obj4 = chatInputRef(commandsDisabled[18]);
  const commands = channel(commandsDisabled[19]).useCachedResults(
    { type: "channel", channel },
    chatInputRef(commandsDisabled[20]).ApplicationCommandType.CHAT,
    tmp6[0],
  ).commands;
  ref = applicationCommandOptionValueParser.useRef(undefined);
  const tmp7 = closure_16();
  const syncRawGameMentionIdsFromText = tmp7.syncRawGameMentionIdsFromText;
  const rawGameMentionIds = tmp7.rawGameMentionIds;
  resolvedGameMentions = tmp7.resolvedGameMentions;
  const items2 = [
    stateFromStores,
    channel,
    chatInputRef,
    chatInputStateRef,
    commandsDisabled,
    stateFromStores1,
    applicationCommandOptionValueParser,
    commands,
    tmp,
    syncRawGameMentionIdsFromText,
  ];
  const callback = applicationCommandOptionValueParser.useCallback(() => {
    const current = chatInputStateRef.current;
    const text = current.text;
    ({ editId, focused, selectionStart, selectionEnd } = current);
    syncRawGameMentionIdsFromText(text);
    const obj = {
      activeCommand: stateFromStores,
      channel,
      commandsDisabled,
      editId,
      focused,
      lastCommandAutocompleteResponseNonce: stateFromStores1,
      queryCommands: commands,
      selectionStart,
      selectionEnd,
      text,
    };
    if (null == ref.current) {
      const obj2 = {
        props: obj,
        ref: chatInputRef,
        optionValueParser: applicationCommandOptionValueParser,
        styles: null,
      };
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
        },
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
  const items3 = [callback];
  const effect = applicationCommandOptionValueParser.useEffect(() => {
    callback();
  }, items3);
  const items4 = [tmp];
  const effect1 = applicationCommandOptionValueParser.useEffect(() => {
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
        },
      };
      current.updateStyles(obj);
    }
  }, items4);
  const items5 = [resolvedGameMentions, rawGameMentionIds, chatInputRef, chatInputStateRef, callback];
  const effect2 = applicationCommandOptionValueParser.useEffect(() => {
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
  const imperativeHandle = applicationCommandOptionValueParser.useImperativeHandle(arg1, () => ({
    getApplicationCommandManager() {
      return ref.current;
    },
    updateState() {
      return callback();
    },
  }));
  return null;
});
forwardRefResult.displayName = "ChatInputAppCommandManager";
const obj7 = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default noop.memo(forwardRefResult);
