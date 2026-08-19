// === Module 11597: areResolvedGamesEqual ===

// Module 11597 (areResolvedGamesEqual)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import handleInit from "handleInit" /* 7526 */;
import handleInit2 from "handleInit" /* 7527 */;
import handleLoadMessages from "handleLoadMessages" /* 4505 */;
import set from "set" /* 6899 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import regExp from "regExp" /* 6810 */;
import "createCacheKey";

const require = fn;
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
let c5 = importAllResult;
({ extractGameMentionIds: unpackModuleId, GAME_MENTION_RAW_RE_GLOBAL: closure_12, GAME_MENTION_SENTINEL: map1 } = regExp);
let obj = { backgroundColor: ThemesDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: ThemesDefault.colors.TEXT_DEFAULT, borderRadius: ThemesDefault.radii.xs, fontSize: 14 };
obj[0] = obj;
const createCacheKey = { backgroundColor: ThemesDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL, borderRadius: ThemesDefault.radii.xs, fontSize: 14 };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: ThemesDefault.colors.MENTION_BACKGROUND, color: ThemesDefault.colors.MENTION_FOREGROUND, borderRadius: ThemesDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj[3] = { color: ThemesDefault.colors.TEXT_BRAND, fontWeight: "bold" };
let closure_14 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((chatInputRef, ref) => {
  chatInputRef = chatInputRef.chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  const channel = chatInputRef.channel;
  const commandsDisabled = chatInputRef.commandsDisabled;
  let stateFromStores1;
  let first;
  let stateFromStores2;
  let callback1;
  let tmp = stateFromStores2();
  let callback = tmp;
  const applicationCommandOptionValueParser = first(commandsDisabled[15]).useApplicationCommandOptionValueParser({ channel });
  let obj = first(commandsDisabled[15]);
  const items = [stateFromStores1];
  const stateFromStores = first(commandsDisabled[13]).useStateFromStores(items, () => stateFromStores1.getActiveCommand(channel.id));
  let obj2 = first(commandsDisabled[13]);
  const items1 = [stateFromStores];
  stateFromStores1 = first(commandsDisabled[13]).useStateFromStores(items1, () => stateFromStores.getLastResponseNonce(channel.id));
  const obj3 = first(commandsDisabled[13]);
  let text = first(commandsDisabled[16]).getTextBeforeFirstOption(chatInputStateRef.current.text).text;
  let substr = text.slice(1);
  ref = applicationCommandOptionValueParser.useRef(substr.trimEnd());
  const tmp6 = callback(applicationCommandOptionValueParser.useState(ref.current), 2);
  closure_9 = tmp6[1];
  const obj4 = first(commandsDisabled[16]);
  const commands = channel(commandsDisabled[17]).useCachedResults({ type: "channel", channel }, first(commandsDisabled[18]).ApplicationCommandType.CHAT, tmp6[0]).commands;
  closure_11 = applicationCommandOptionValueParser.useRef(undefined);
  const tmp7 = callback(applicationCommandOptionValueParser.useState([]), 2);
  first = tmp7[0];
  closure_1 = tmp7[1];
  callback = applicationCommandOptionValueParser.useCallback((arg0) => {
    closure_0 = ref(arg0);
    lib((arg0) => {
      let tmp = closure_0;
      if (obj.isEqual(arg0, closure_0)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const items2 = [first];
  const memo = applicationCommandOptionValueParser.useMemo(() => first.filter((item, index) => null == gameById.getGameById(item)), items2);
  const obj6 = channel(commandsDisabled[17]);
  const games = first(commandsDisabled[12]).useGames(memo);
  const obj7 = first(commandsDisabled[12]);
  const items3 = [ref, commands, closure_9];
  const items4 = [first];
  stateFromStores2 = first(commandsDisabled[13]).useStateFromStores(items3, () => {
    if (0 === first.length) {
      return null;
    } else {
      const currentUser = commands.getCurrentUser();
      if (currentUser != null) {
        const nsfwAllowed = currentUser.nsfwAllowed;
      }
      const _Map = Map;
      const map = new Map();
      for (const item10017 of tmp) {
        let game = ref.getGame(item10017);
        let tmp11 = game;
        if (null == game) {
          let gameById = gameById.getGameById(item10017);
          if (null != gameById) {
            let result = map.set(item10017, tmp22);
          }
        } else {
          let obj2 = first(commandsDisabled[14]);
          if (!obj2.isGameProfileObscured(tmp11, nsfwAllowed)) {
            let obj = { id: null, name: null, icon: null };
            obj[0] = item10017;
            ({ name: obj3[1], media } = tmp11);
            let icon;
            if (media != null) {
              icon = media.icon;
            }
            if (icon == null) {
              icon = null;
            }
            obj[2] = icon;
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
  }, items4, callback1);
  const items5 = [stateFromStores, channel, chatInputRef, chatInputStateRef, commandsDisabled, stateFromStores1, applicationCommandOptionValueParser, commands, tmp, callback];
  callback1 = applicationCommandOptionValueParser.useCallback(() => {
    const current = lib.current;
    let text = current.text;
    ({ editId, focused, selectionStart, selectionEnd } = current);
    callback(text);
    let obj = { activeCommand: stateFromStores, channel, commandsDisabled, editId, focused, lastCommandAutocompleteResponseNonce: stateFromStores1, queryCommands: commands, selectionStart, selectionEnd, text };
    if (null == ref.current) {
      obj = { props: null, ref: null, optionValueParser: null, styles: null };
      obj[0] = obj;
      obj[1] = closure_0;
      obj[2] = applicationCommandOptionValueParser;
      closure_0 = closure_4;
      obj = { commandOption: null, commandErrorOption: null, gameMention: null, autocomplete: null };
      obj[0] = function commandOption() {
        return lib(commandsDisabled[10]).convertToNativeStyle(lib.commandOption);
      };
      obj[1] = function commandErrorOption() {
        return lib(commandsDisabled[10]).convertToNativeStyle(lib.commandErrorOption);
      };
      obj[2] = function gameMention() {
        return lib(commandsDisabled[10]).convertToNativeStyle(lib.gameMention);
      };
      obj[3] = function autocomplete(color) {
        if (null == color) {
          let autocomplete = lib.autocomplete;
        } else {
          autocomplete = {};
          const merged = Object.assign(lib.autocomplete);
          autocomplete.color = color;
        }
        return lib(commandsDisabled[10]).convertToNativeStyle(autocomplete);
      };
      obj[3] = obj;
      const tmp12 = new lib(commandsDisabled[19])(obj);
      ref.current = tmp12;
    } else {
      const current2 = ref.current;
      obj1 = { newState: null };
      obj1[0] = obj;
      const result = current2.updateApplicationCommandManagerState(obj1);
    }
    text = first(commandsDisabled[16]).getTextBeforeFirstOption(text).text;
    const substr = text.slice(1);
    const trimEndResult = substr.trimEnd();
    if (ref.current !== trimEndResult) {
      gameById(trimEndResult);
      tmp15.current = trimEndResult;
    }
    const obj5 = first(commandsDisabled[16]);
  }, items5);
  const items6 = [callback1];
  const effect = applicationCommandOptionValueParser.useEffect(() => {
    callback1();
  }, items6);
  const items7 = [tmp];
  const effect1 = applicationCommandOptionValueParser.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      closure_0 = closure_4;
      const obj = { commandOption: null, commandErrorOption: null, gameMention: null, autocomplete: null };
      obj[0] = function commandOption() {
        return lib(commandsDisabled[10]).convertToNativeStyle(lib.commandOption);
      };
      obj[1] = function commandErrorOption() {
        return lib(commandsDisabled[10]).convertToNativeStyle(lib.commandErrorOption);
      };
      obj[2] = function gameMention() {
        return lib(commandsDisabled[10]).convertToNativeStyle(lib.gameMention);
      };
      obj[3] = function autocomplete(color) {
        if (null == color) {
          let autocomplete = lib.autocomplete;
        } else {
          autocomplete = {};
          const merged = Object.assign(lib.autocomplete);
          autocomplete.color = color;
        }
        return lib(commandsDisabled[10]).convertToNativeStyle(autocomplete);
      };
      current.updateStyles(obj);
    }
  }, items7);
  const items8 = [stateFromStores2, first, chatInputRef, chatInputStateRef, callback1];
  const effect2 = applicationCommandOptionValueParser.useEffect(() => {
    const current = ref.current;
    if (null != stateFromStores2) {
      if (0 !== first.length) {
        if (null != current) {
          const mapped = ref(lib.current.text).map((item, index) => store.get(item));
          const found = mapped.filter((item, index) => null != item);
          if (0 !== found.length) {
            const replaced = str.replace(callback, (arg0, arg1) => {
              let combined = arg0;
              const value = store.get(arg1);
              if (null != value) {
                const _HermesInternal = HermesInternal;
                combined = "" + first + value.name;
              }
              return combined;
            });
            for (const item10011 of found) {
              let addGameMentionResult = current.addGameMention(item10011);
              continue;
            }
            const current2 = first.current;
            current2.setText(replaced);
            lib.current.textPrev = str;
            lib.current.text = replaced;
            callback1();
          }
          const arr = ref(lib.current.text);
        }
      }
    }
  }, items8);
  const imperativeHandle = applicationCommandOptionValueParser.useImperativeHandle(ref, () => ({
    getApplicationCommandManager() {
      return ref.current;
    },
    updateState() {
      return callback();
    }
  }));
  return null;
});
forwardRefResult.displayName = "ChatInputAppCommandManager";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default memoResult;