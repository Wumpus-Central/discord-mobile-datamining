// discord_app/modules/chat_input/native/ChatInputAppCommandManager.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "PermissionOverwriteType";
import handleInit from "handleInit";
import closure_7 from "handleInit";
import handleLoadMessages from "handleLoadMessages";
import set from "set";
import initialize from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import regExp from "regExp";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let map1;
const require = arg1;
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
              let tmp5 = obj;
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
({ extractGameMentionIds: closure_12, GAME_MENTION_RAW_RE_GLOBAL: map1, GAME_MENTION_SENTINEL: closure_14 } = regExp);
let obj = { commandOption: null, commandErrorOption: null, gameMention: null, autocomplete: null };
obj = { backgroundColor: require("Themes").colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: require("Themes").colors.TEXT_DEFAULT, borderRadius: require("Themes").radii.xs, fontSize: 14 };
obj[0] = obj;
createCacheKey = { backgroundColor: require("Themes").colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL, borderRadius: require("Themes").radii.xs, fontSize: 14 };
obj[1] = createCacheKey;
obj[2] = { backgroundColor: require("Themes").colors.MENTION_BACKGROUND, color: require("Themes").colors.MENTION_FOREGROUND, borderRadius: require("Themes").radii.xs, fontSize: 14, fontWeight: "bold" };
let obj2 = { backgroundColor: require("Themes").colors.MENTION_BACKGROUND, color: require("Themes").colors.MENTION_FOREGROUND, borderRadius: require("Themes").radii.xs, fontSize: 14, fontWeight: "bold" };
obj[3] = { color: require("Themes").colors.TEXT_BRAND, fontWeight: "bold" };
let closure_15 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((chatInputRef, ref) => {
  chatInputRef = chatInputRef.chatInputRef;
  let id = chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  let first = chatInputStateRef;
  const channel = chatInputRef.channel;
  let importAll = channel;
  const commandsDisabled = chatInputRef.commandsDisabled;
  let callback;
  let applicationCommandOptionValueParser;
  let stateFromStores;
  let stateFromStores1;
  ref = undefined;
  let set;
  let commands;
  let mergeGuildAvatar;
  callback = undefined;
  first = undefined;
  let stateFromStores2;
  let callback1;
  let tmp = callback1();
  callback = tmp;
  applicationCommandOptionValueParser = id(commandsDisabled[16]).useApplicationCommandOptionValueParser({ channel });
  let obj = id(commandsDisabled[16]);
  const items = [stateFromStores1];
  stateFromStores = id(commandsDisabled[14]).useStateFromStores(items, () => stateFromStores1.getActiveCommand(lib.id));
  const obj2 = id(commandsDisabled[14]);
  const items1 = [stateFromStores];
  stateFromStores1 = id(commandsDisabled[14]).useStateFromStores(items1, () => stateFromStores.getLastResponseNonce(lib.id));
  let obj3 = id(commandsDisabled[14]);
  let text = id(commandsDisabled[17]).getTextBeforeFirstOption(chatInputStateRef.current.text).text;
  let substr = text.slice(1);
  ref = applicationCommandOptionValueParser.useRef(substr.trimEnd());
  const tmp6 = callback(applicationCommandOptionValueParser.useState(ref.current), 2);
  set = tmp6[1];
  const obj4 = id(commandsDisabled[17]);
  commands = importAll(commandsDisabled[18]).useCachedResults({ type: "channel", channel }, id(commandsDisabled[19]).ApplicationCommandType.CHAT, tmp6[0]).commands;
  mergeGuildAvatar = applicationCommandOptionValueParser.useRef(undefined);
  id = channel.id;
  first = undefined;
  importAll = undefined;
  const tmp7 = callback(applicationCommandOptionValueParser.useState([]), 2);
  first = tmp7[0];
  importAll = tmp7[1];
  callback = applicationCommandOptionValueParser.useCallback((arg0) => {
    let closure_0 = callback(arg0);
    lib((arg0) => {
      let tmp = closure_0;
      if (obj.isEqual(arg0, closure_0)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const items2 = [first];
  const memo = applicationCommandOptionValueParser.useMemo(() => first.filter((closure_0) => null == gameById.getGameById(closure_0)), items2);
  const obj6 = importAll(commandsDisabled[18]);
  const games = id(commandsDisabled[13]).useGames(memo);
  const obj7 = id(commandsDisabled[13]);
  const items3 = [ref, mergeGuildAvatar, commands, set];
  const items4 = [first, id];
  stateFromStores2 = id(commandsDisabled[14]).useStateFromStores(items3, () => {
    let media;
    if (0 === first.length) {
      return null;
    } else {
      currentUser = currentUser.getCurrentUser();
      if (currentUser != null) {
        const nsfwAllowed = currentUser.nsfwAllowed;
      }
      const editingMessage = commands.getEditingMessage(id);
      if (editingMessage != null) {
        const mentionGames = editingMessage.mentionGames;
      }
      const _Map = Map;
      const map = new Map();
      for (const item10024 of tmp) {
        let tmp11 = item10024;
        let value;
        if (mentionGames != null) {
          let tmp13 = item10024;
          value = mentionGames.get(tmp11);
        }
        let tmp14 = value;
        if (null == value) {
          let tmp18 = ref;
          let tmp19 = item10024;
          let game = ref.getGame(tmp11);
          let tmp21 = game;
          if (null == game) {
            let tmp29 = gameById;
            let tmp30 = item10024;
            let gameById = gameById.getGameById(tmp11);
            if (null != gameById) {
              let tmp33 = item10024;
              let tmp34 = gameById;
              let result = map.set(tmp11, tmp32);
            }
          } else {
            let tmp22 = id;
            let tmp23 = commandsDisabled;
            let obj3 = id(commandsDisabled[15]);
            let tmp24 = game;
            if (!obj3.isGameProfileObscured(tmp21, nsfwAllowed)) {
              let tmp25 = item10024;
              let obj = { id: null, name: null, icon: null };
              obj[0] = tmp11;
              let tmp26 = game;
              ({ name: obj4[1], media } = tmp21);
              let icon;
              if (media != null) {
                icon = media.icon;
              }
              if (icon == null) {
                icon = null;
              }
              obj[2] = icon;
              let result1 = map.set(tmp11, obj);
            }
          }
        } else {
          let tmp15 = item10024;
          obj = { id: null, name: null, icon: null };
          obj[0] = tmp11;
          let tmp16 = value;
          ({ name: obj2[1], icon: obj2[2] } = tmp14);
          let result2 = map.set(tmp11, obj);
        }
        continue;
      }
      let tmp36 = null;
      if (map.size > 0) {
        tmp36 = map;
      }
      return tmp36;
    }
  }, items4, areResolvedGamesEqual);
  const items5 = [stateFromStores, channel, chatInputRef, chatInputStateRef, commandsDisabled, stateFromStores1, applicationCommandOptionValueParser, commands, tmp, callback];
  callback1 = applicationCommandOptionValueParser.useCallback(() => {
    let editId;
    let focused;
    let selectionEnd;
    let selectionStart;
    const current = first.current;
    let text = current.text;
    ({ editId, focused, selectionStart, selectionEnd } = current);
    callback(text);
    let obj = { activeCommand: stateFromStores, channel: closure_2, commandsDisabled, editId, focused, lastCommandAutocompleteResponseNonce: stateFromStores1, queryCommands: commands, selectionStart, selectionEnd, text };
    if (null == currentUser.current) {
      obj = { props: null, ref: null, optionValueParser: null, styles: null };
      obj[0] = obj;
      obj[1] = closure_0;
      obj[2] = applicationCommandOptionValueParser;
      closure_0 = c4;
      obj = { commandOption: null, commandErrorOption: null, gameMention: null, autocomplete: null };
      obj[0] = function commandOption() {
        return lib(outer1_3[11]).convertToNativeStyle(lib.commandOption);
      };
      obj[1] = function commandErrorOption() {
        return lib(outer1_3[11]).convertToNativeStyle(lib.commandErrorOption);
      };
      obj[2] = function gameMention() {
        return lib(outer1_3[11]).convertToNativeStyle(lib.gameMention);
      };
      obj[3] = function autocomplete(color) {
        if (null == color) {
          let autocomplete = lib.autocomplete;
        } else {
          autocomplete = {};
          const merged = Object.assign(lib.autocomplete);
          autocomplete.color = color;
        }
        return lib(outer1_3[11]).convertToNativeStyle(autocomplete);
      };
      obj[3] = obj;
      const tmp12 = new first(commandsDisabled[20])(obj);
      tmp2.current = tmp12;
    } else {
      const current2 = tmp2.current;
      const obj1 = { newState: null };
      obj1[0] = obj;
      const result = current2.updateApplicationCommandManagerState(obj1);
    }
    text = id(commandsDisabled[17]).getTextBeforeFirstOption(text).text;
    const substr = text.slice(1);
    const trimEndResult = substr.trimEnd();
    if (ref.current !== trimEndResult) {
      gameById(trimEndResult);
      tmp15.current = trimEndResult;
    }
  }, items5);
  const items6 = [callback1];
  const effect = applicationCommandOptionValueParser.useEffect(() => {
    callback1();
  }, items6);
  const items7 = [tmp];
  const effect1 = applicationCommandOptionValueParser.useEffect(() => {
    const current = currentUser.current;
    if (current != null) {
      let closure_0 = c4;
      const obj = { commandOption: null, commandErrorOption: null, gameMention: null, autocomplete: null };
      obj[0] = function commandOption() {
        return lib(outer1_3[11]).convertToNativeStyle(lib.commandOption);
      };
      obj[1] = function commandErrorOption() {
        return lib(outer1_3[11]).convertToNativeStyle(lib.commandErrorOption);
      };
      obj[2] = function gameMention() {
        return lib(outer1_3[11]).convertToNativeStyle(lib.gameMention);
      };
      obj[3] = function autocomplete(color) {
        if (null == color) {
          let autocomplete = lib.autocomplete;
        } else {
          autocomplete = {};
          const merged = Object.assign(lib.autocomplete);
          autocomplete.color = color;
        }
        return lib(outer1_3[11]).convertToNativeStyle(autocomplete);
      };
      current.updateStyles(obj);
    }
  }, items7);
  const items8 = [stateFromStores2, first, chatInputRef, chatInputStateRef, callback1];
  const effect2 = applicationCommandOptionValueParser.useEffect(() => {
    const current = currentUser.current;
    if (null != stateFromStores2) {
      if (0 !== first.length) {
        if (null != current) {
          const mapped = callback(first.current.text).map((arg0) => store.get(arg0));
          const found = mapped.filter((arg0) => null != arg0);
          if (0 !== found.length) {
            const replaced = str.replace(first, (arg0, arg1) => {
              let combined = arg0;
              const value = store.get(arg1);
              if (null != value) {
                const _HermesInternal = HermesInternal;
                combined = "" + outer1_14 + value.name;
              }
              return combined;
            });
            for (const item10011 of found) {
              let addGameMentionResult = current.addGameMention(item10011);
              continue;
            }
            const current2 = id.current;
            current2.setText(replaced);
            first.current.textPrev = str;
            first.current.text = replaced;
            callback1();
          }
          const arr = callback(first.current.text);
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
let obj3 = { color: require("Themes").colors.TEXT_BRAND, fontWeight: "bold" };
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("handleInit").fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default memoResult;