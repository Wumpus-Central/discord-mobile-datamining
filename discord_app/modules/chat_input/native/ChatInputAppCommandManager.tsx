// discord_app/modules/chat_input/native/ChatInputAppCommandManager.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useGameProfileObscured from "../../game_profile/hooks/useGameProfileObscured.tsx";
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser.tsx";
import ApplicationCommandManagerDefault from "../../application_commands/native/ApplicationCommandManager.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ApplicationCommandAutocompleteStore from "../../application_commands/ApplicationCommandAutocompleteStore.tsx";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import GameStore from "../../games/GameStore.tsx";
import GameAutocompleteStore from "../../games/autocomplete/GameAutocompleteStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let chatInputRef, map, set;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function areResolvedGamesEqual(size, size2) {
  if (size === size2) {
    return true;
  } else {
    if (null != size) {
      if (null != size2) {
        if (size.size === size2.size) {
          const keys = size.keys();
          for (const item10011 of keys) {
            if (size2.has(item10011)) {
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
let _slicedToArray = _slicedToArray_mod;
({
  extractGameMentionIds: unpackModuleId,
  GAME_MENTION_RAW_RE_GLOBAL: closure_12,
  GAME_MENTION_SENTINEL: map1,
} = ChannelAutocompleteConstants);
let createStyles = createStyles_mod;
let obj = {
  commandOption: obj2,
  commandErrorOption: obj3,
  gameMention: obj4,
  timestampMention: obj5,
  autocomplete: obj6,
};
obj2 = {
  backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND,
  color: nativeDefault.colors.TEXT_DEFAULT,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
};
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
};
obj4 = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  color: nativeDefault.colors.MENTION_FOREGROUND,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
  fontWeight: "bold",
};
obj5 = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  color: nativeDefault.colors.MENTION_FOREGROUND,
  borderRadius: nativeDefault.radii.xs,
  fontSize: 14,
  fontWeight: "bold",
};
obj6 = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
let closure_14 = createStyles(obj);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_1;
      let first;
      let first1;
      let obj2;
      let tmp11;
      let tmp15;
      let tmp6;
      let tmp7;
      let tmp = first1;
      let obj = first1(576);
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      [first1, closure_1] = react.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(View) {
          let closure_0 = unpackModuleId(View);
          let tmp = closure_1((arg0) => {
            let tmp = closure_0;
            const obj = closure_2_1(closure_2_3[13]);
            if (obj.isEqual(arg0, closure_0)) {
              tmp = arg0;
            }
            return tmp;
          });
        };
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== first1) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(item) {
              return null == gameById.getGameById(item);
            }
          }
          cResult[4] = C;
        } else {
          class C {
            constructor(item) {
              return null == gameById.getGameById(item);
            }
          }
        }
        const found = first1.filter(C);
        cResult[2] = first1;
        cResult[3] = found;
        tmp7 = found;
      } else {
        class C {
          constructor(item) {
            return null == gameById.getGameById(item);
          }
        }
      }
      const tmpResult = tmp(6812);
      const games = tmpResult.useGames(tmp7);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(item) {
            return null == gameById.getGameById(item);
          }
        }
        const items1 = [GameStore, UserStore, GameAutocompleteStore];
        cResult[5] = items1;
        tmp11 = items1;
      } else {
        class C {
          constructor(item) {
            return null == gameById.getGameById(item);
          }
        }
      }
      if (cResult[6] !== first1) {
        class I {
          constructor() {
            let media;
            if (0 === first1.length) {
              return null;
            } else {
              let nsfwAllowed;
              const currentUser = UserStore.getCurrentUser();
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              const _Map = Map;
              const self = this;
              const self2 = this;
              map = new Map();
              for (const item10017 of first1) {
                let game = GameStore.getGame(item10017);
                let tmp9 = game;
                if (null == game) {
                  gameById = GameAutocompleteStore.getGameById(item10017);
                  if (null != gameById) {
                    let result = map.set(item10017, tmp20);
                  }
                } else {
                  let obj2 = useGameProfileObscured;
                  if (!obj2.isGameProfileObscured(tmp9, nsfwAllowed)) {
                    let obj = { id: item10017, name: null, icon };
                    ({ name: obj3.name, media } = tmp9);
                    let icon;
                    set = map.set;
                    if (media != null) {
                      icon = media.icon;
                    }
                    if (icon == null) {
                      icon = null;
                    }
                    let result1 = set(item10017, obj);
                  }
                }
                continue;
              }
              let tmp24 = null;
              if (map.size > 0) {
                tmp24 = map;
              }
              return tmp24;
            }
          }
        }
        const items2 = [first1];
        cResult[6] = first1;
        cResult[7] = I;
        cResult[8] = items2;
        tmp15 = items2;
      } else {
        class I {
          constructor() {
            let media;
            if (0 === first1.length) {
              return null;
            } else {
              let nsfwAllowed;
              const currentUser = UserStore.getCurrentUser();
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              const _Map = Map;
              const self = this;
              const self2 = this;
              map = new Map();
              for (const item10017 of first1) {
                let game = GameStore.getGame(item10017);
                let tmp9 = game;
                if (null == game) {
                  gameById = GameAutocompleteStore.getGameById(item10017);
                  if (null != gameById) {
                    let result = map.set(item10017, tmp20);
                  }
                } else {
                  let obj2 = useGameProfileObscured;
                  if (!obj2.isGameProfileObscured(tmp9, nsfwAllowed)) {
                    let obj = { id: item10017, name: null, icon };
                    ({ name: obj3.name, media } = tmp9);
                    let icon;
                    set = map.set;
                    if (media != null) {
                      icon = media.icon;
                    }
                    if (icon == null) {
                      icon = null;
                    }
                    let result1 = set(item10017, obj);
                  }
                }
                continue;
              }
              let tmp24 = null;
              if (map.size > 0) {
                tmp24 = map;
              }
              return tmp24;
            }
          }
        }
        tmp15 = cResult[8];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores = tmpResult2.useStateFromStores(tmp11, I, tmp15, areResolvedGamesEqual);
      if (cResult[9] === first1) {
        class I {
          constructor() {
            let media;
            if (0 === first1.length) {
              return null;
            } else {
              let nsfwAllowed;
              const currentUser = UserStore.getCurrentUser();
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              const _Map = Map;
              const self = this;
              const self2 = this;
              map = new Map();
              for (const item10017 of first1) {
                let game = GameStore.getGame(item10017);
                let tmp9 = game;
                if (null == game) {
                  gameById = GameAutocompleteStore.getGameById(item10017);
                  if (null != gameById) {
                    let result = map.set(item10017, tmp20);
                  }
                } else {
                  let obj2 = useGameProfileObscured;
                  if (!obj2.isGameProfileObscured(tmp9, nsfwAllowed)) {
                    let obj = { id: item10017, name: null, icon };
                    ({ name: obj3.name, media } = tmp9);
                    let icon;
                    set = map.set;
                    if (media != null) {
                      icon = media.icon;
                    }
                    if (icon == null) {
                      icon = null;
                    }
                    let result1 = set(item10017, obj);
                  }
                }
                continue;
              }
              let tmp24 = null;
              if (map.size > 0) {
                tmp24 = map;
              }
              return tmp24;
            }
          }
        }
        return obj2;
      }
      obj2 = { syncRawGameMentionIdsFromText: tmp6, rawGameMentionIds: first1, resolvedGameMentions: stateFromStores };
      cResult[9] = first1;
      cResult[10] = stateFromStores;
      cResult[11] = obj2;
    }
  : () => {
      let closure_1;
      let rawGameMentionIds;
      [rawGameMentionIds, closure_1] = react.useState([]);
      const items = [rawGameMentionIds];
      const callback = react.useCallback((View) => {
        let closure_0 = unpackModuleId(View);
        let tmp = closure_1((arg0) => {
          let tmp = closure_0;
          const obj = closure_2_1(closure_2_3[13]);
          if (obj.isEqual(arg0, closure_0)) {
            tmp = arg0;
          }
          return tmp;
        });
      }, []);
      const memo = react.useMemo(() => {
        let gameById;
        return first.filter((item) => null == gameById.getGameById(item));
      }, items);
      let obj = rawGameMentionIds(6812);
      const games = obj.useGames(memo);
      let obj2 = rawGameMentionIds(504);
      const items1 = [GameStore, UserStore, GameAutocompleteStore];
      const items2 = [rawGameMentionIds];
      const obj3 = {
        syncRawGameMentionIdsFromText: callback,
        rawGameMentionIds,
        resolvedGameMentions: obj2.useStateFromStores(
          items1,
          function () {
            let media;
            if (0 === first.length) {
              return null;
            } else {
              let nsfwAllowed;
              const currentUser = UserStore.getCurrentUser();
              if (currentUser != null) {
                nsfwAllowed = currentUser.nsfwAllowed;
              }
              const _Map = Map;
              const self = this;
              const self2 = this;
              map = new Map();
              for (const item10017 of first) {
                let game = GameStore.getGame(item10017);
                let tmp9 = game;
                if (null == game) {
                  let gameById = GameAutocompleteStore.getGameById(item10017);
                  if (null != gameById) {
                    let result = map.set(item10017, tmp20);
                  }
                } else {
                  let obj2 = useGameProfileObscured;
                  if (!obj2.isGameProfileObscured(tmp9, nsfwAllowed)) {
                    let obj = { id: item10017, name: null, icon };
                    ({ name: obj3.name, media } = tmp9);
                    let icon;
                    set = map.set;
                    if (media != null) {
                      icon = media.icon;
                    }
                    if (icon == null) {
                      icon = null;
                    }
                    let result1 = set(item10017, obj);
                  }
                }
                continue;
              }
              let tmp24 = null;
              if (map.size > 0) {
                tmp24 = map;
              }
              return tmp24;
            }
          },
          items2,
          areResolvedGamesEqual,
        ),
      };
      return obj3;
    };
const forwardRefResult = react.forwardRef((chatInputRef, arg1) => {
  let closure_4;
  let closure_9;
  let first;
  chatInputRef = chatInputRef.chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  const channel = chatInputRef.channel;
  const commandsDisabled = chatInputRef.commandsDisabled;
  let stateFromStores1;
  closure_9 = undefined;
  let resolvedGameMentions;
  const tmp = resolvedGameMentions();
  _slicedToArray = tmp;
  let obj = chatInputRef(commandsDisabled[17]);
  const applicationCommandOptionValueParser = obj.useApplicationCommandOptionValueParser({ channel });
  let obj2 = chatInputRef(commandsDisabled[16]);
  const items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => ApplicationCommandStore.getActiveCommand(channel.id));
  let obj3 = chatInputRef(commandsDisabled[16]);
  const items1 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items1, () =>
    ApplicationCommandAutocompleteStore.getLastResponseNonce(channel.id),
  );
  const useRef = applicationCommandOptionValueParser.useRef;
  let obj4 = chatInputRef(commandsDisabled[18]);
  let text = obj4.getTextBeforeFirstOption(chatInputStateRef.current.text).text;
  let substr = text.slice(1);
  let ref = useRef(substr.trimEnd());
  [first, closure_9] = applicationCommandOptionValueParser.useState(ref.current);
  const obj6 = channel(commandsDisabled[19]);
  const commands = obj6.useCachedResults(
    { type: "channel", channel },
    chatInputRef(commandsDisabled[20]).ApplicationCommandType.CHAT,
    first,
  ).commands;
  ref = applicationCommandOptionValueParser.useRef(undefined);
  const tmp8 = closure_16();
  const syncRawGameMentionIdsFromText = tmp8.syncRawGameMentionIdsFromText;
  const rawGameMentionIds = tmp8.rawGameMentionIds;
  resolvedGameMentions = tmp8.resolvedGameMentions;
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
  const callback = applicationCommandOptionValueParser.useCallback(function () {
    let editId;
    let focused;
    let obj3;
    let selectionEnd;
    let selectionStart;
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
      let closure_0 = closure_4;
      const obj2 = {
        props: obj,
        ref: chatInputRef,
        optionValueParser: applicationCommandOptionValueParser,
        styles: obj3,
      };
      const self = this;
      const self2 = this;
      obj3 = {
        commandOption() {
          const obj = chatInputRef(commandsDisabled[10]);
          return obj.convertToNativeStyle(closure_0.commandOption);
        },
        commandErrorOption() {
          const obj = chatInputRef(commandsDisabled[10]);
          return obj.convertToNativeStyle(closure_0.commandErrorOption);
        },
        gameMention() {
          const obj = chatInputRef(commandsDisabled[10]);
          return obj.convertToNativeStyle(closure_0.gameMention);
        },
        timestampMention() {
          const obj = chatInputRef(commandsDisabled[10]);
          return obj.convertToNativeStyle(closure_0.timestampMention);
        },
        autocomplete(color) {
          let autocomplete;
          const convertToNativeStyle = chatInputRef(commandsDisabled[10]).convertToNativeStyle;
          chatInputRef(commandsDisabled[10]);
          if (null == color) {
            autocomplete = closure_0.autocomplete;
          } else {
            autocomplete = { color };
            const merged = Object.assign(closure_0.autocomplete);
          }
          return convertToNativeStyle(autocomplete);
        },
      };
      ref.current = new ApplicationCommandManagerDefault(obj2);
      const tmp10 = new ApplicationCommandManagerDefault(obj2);
    } else {
      const current2 = ref.current;
      const obj4 = { newState: obj };
      const result = current2.updateApplicationCommandManagerState(obj4);
    }
    const obj5 = ChatInputCommandOptionParser;
    const text1 = obj5.getTextBeforeFirstOption(text).text;
    const substr = text1.slice(1);
    const trimEndResult = substr.trimEnd();
    if (ref.current !== trimEndResult) {
      closure_9(trimEndResult);
      tmp13.current = trimEndResult;
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
      let closure_0 = closure_4;
      let obj = {
        commandOption() {
          const obj = chatInputRef(commandsDisabled[10]);
          return obj.convertToNativeStyle(closure_0.commandOption);
        },
        commandErrorOption() {
          const obj = chatInputRef(commandsDisabled[10]);
          return obj.convertToNativeStyle(closure_0.commandErrorOption);
        },
        gameMention() {
          const obj = chatInputRef(commandsDisabled[10]);
          return obj.convertToNativeStyle(closure_0.gameMention);
        },
        timestampMention() {
          const obj = chatInputRef(commandsDisabled[10]);
          return obj.convertToNativeStyle(closure_0.timestampMention);
        },
        autocomplete(color) {
          let autocomplete;
          const convertToNativeStyle = chatInputRef(commandsDisabled[10]).convertToNativeStyle;
          chatInputRef(commandsDisabled[10]);
          if (null == color) {
            autocomplete = closure_0.autocomplete;
          } else {
            autocomplete = { color };
            const merged = Object.assign(closure_0.autocomplete);
          }
          return convertToNativeStyle(autocomplete);
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
          const arr = unpackModuleId(chatInputStateRef.current.text);
          const mapped = arr.map((item) => resolvedGameMentions.get(item));
          const found = mapped.filter((item) => null != item);
          if (0 !== found.length) {
            const replaced = str.replace(closure_12, (arg0, arg1) => {
              let combined = arg0;
              const value = resolvedGameMentions.get(arg1);
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
            chatInputStateRef.current.textPrev = chatInputStateRef.current.text;
            chatInputStateRef.current.text = replaced;
            callback();
          }
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
const memoResult = react.memo(forwardRefResult);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default memoResult;
