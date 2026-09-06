// === Module 12405: ChatInputAppCommandManager ===

// Module 12405 (ChatInputAppCommandManager)
import nativeDefault from "native" /* 576 */;
import useGameProfileObscured from "useGameProfileObscured" /* 5111 */;
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser" /* 11991 */;
import ApplicationCommandManagerDefault from "ApplicationCommandManager" /* 12406 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 7779 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7780 */;
import GameStore from "GameStore" /* 1916 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5108 */;
import UserStore from "UserStore" /* 1371 */;

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
const ChannelAutocompleteConstants = fn(5000);
({ extractGameMentionIds: closure_11, GAME_MENTION_RAW_RE_GLOBAL: closure_12, GAME_MENTION_SENTINEL: map1 } = ChannelAutocompleteConstants);
fn(4560);
let obj = { commandOption: null, commandErrorOption: null, gameMention: null, timestampMention: null, autocomplete: null };
obj = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
obj.commandOption = obj;
const createStyles = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
obj.commandErrorOption = createStyles;
obj.gameMention = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
let obj2 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj.timestampMention = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
let obj3 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj.autocomplete = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
let closure_14 = createStyles.createStyles(obj);
const forwardRefResult = noop.forwardRef((chatInputRef, arg1) => {
  chatInputRef = chatInputRef.chatInputRef;
  const chatInputStateRef = chatInputRef.chatInputStateRef;
  const channel = chatInputRef.channel;
  const commandsDisabled = chatInputRef.commandsDisabled;
  let stateFromStores1;
  let stateFromStores2;
  let callback1;
  let tmp = stateFromStores2();
  _slicedToArray = tmp;
  const applicationCommandOptionValueParser = chatInputRef(commandsDisabled[15]).useApplicationCommandOptionValueParser({ channel });
  let obj = chatInputRef(commandsDisabled[15]);
  const items = [stateFromStores1];
  const stateFromStores = chatInputRef(commandsDisabled[13]).useStateFromStores(items, () => ApplicationCommandStore.getActiveCommand(channel.id));
  let obj2 = chatInputRef(commandsDisabled[13]);
  const items1 = [stateFromStores];
  stateFromStores1 = chatInputRef(commandsDisabled[13]).useStateFromStores(items1, () => ApplicationCommandAutocompleteStore.getLastResponseNonce(channel.id));
  const obj3 = chatInputRef(commandsDisabled[13]);
  let text = chatInputRef(commandsDisabled[16]).getTextBeforeFirstOption(chatInputStateRef.current.text).text;
  let substr = text.slice(1);
  let ref = applicationCommandOptionValueParser.useRef(substr.trimEnd());
  const tmp6 = _slicedToArray(applicationCommandOptionValueParser.useState(ref.current), 2);
  closure_9 = tmp6[1];
  const obj4 = chatInputRef(commandsDisabled[16]);
  const commands = channel(commandsDisabled[17]).useCachedResults({ type: "channel", channel }, chatInputRef(commandsDisabled[18]).ApplicationCommandType.CHAT, tmp6[0]).commands;
  ref = applicationCommandOptionValueParser.useRef(undefined);
  const tmp7 = _slicedToArray(applicationCommandOptionValueParser.useState([]), 2);
  const first = tmp7[0];
  closure_129_0 = first;
  closure_129_1 = tmp7[1];
  const callback = applicationCommandOptionValueParser.useCallback((arg0) => {
    closure_0 = closure_2_11(arg0);
    chatInputStateRef((arg0) => {
      let tmp = closure_0;
      if (obj.isEqual(arg0, closure_0)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const items2 = [first];
  const memo = applicationCommandOptionValueParser.useMemo(() => chatInputRef.filter((item) => null == gameById.getGameById(item)), items2);
  const obj6 = channel(commandsDisabled[17]);
  const games = chatInputRef(commandsDisabled[12]).useGames(memo);
  const obj7 = chatInputRef(commandsDisabled[12]);
  const items3 = [ref, commands, closure_9];
  const items4 = [first];
  stateFromStores2 = chatInputRef(commandsDisabled[13]).useStateFromStores(items3, () => {
    if (0 === chatInputRef.length) {
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
  }, items4, callback1);
  const items5 = [stateFromStores, channel, chatInputRef, chatInputStateRef, commandsDisabled, stateFromStores1, applicationCommandOptionValueParser, commands, tmp, callback];
  callback1 = applicationCommandOptionValueParser.useCallback(() => {
    const current = chatInputStateRef.current;
    let text = current.text;
    ({ editId, focused, selectionStart, selectionEnd } = current);
    callback(text);
    let obj = { activeCommand: stateFromStores, channel, commandsDisabled, editId, focused, lastCommandAutocompleteResponseNonce: stateFromStores1, queryCommands: commands, selectionStart, selectionEnd, text };
    if (null == ref.current) {
      obj = { props: null, ref: null, optionValueParser: null, styles: null };
      obj.props = obj;
      obj.ref = chatInputRef;
      obj.optionValueParser = applicationCommandOptionValueParser;
      closure_0 = closure_4;
      obj = {
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
      obj.styles = obj;
      const tmp12 = new ApplicationCommandManagerDefault(obj);
      ref.current = tmp12;
    } else {
      const current2 = ref.current;
      const obj1 = { newState: obj };
      const result = current2.updateApplicationCommandManagerState(obj1);
    }
    text = ChatInputCommandOptionParser.getTextBeforeFirstOption(text).text;
    const substr = text.slice(1);
    const trimEndResult = substr.trimEnd();
    if (ref.current !== trimEndResult) {
      closure_9(trimEndResult);
      tmp15.current = trimEndResult;
    }
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
  }, items7);
  const items8 = [stateFromStores2, first, chatInputRef, chatInputStateRef, callback1];
  const effect2 = applicationCommandOptionValueParser.useEffect(() => {
    const current = ref.current;
    if (null != stateFromStores2) {
      if (0 !== first.length) {
        if (null != current) {
          const mapped = closure_2_11(chatInputStateRef.current.text).map((item) => stateFromStores2.get(item));
          const found = mapped.filter((item) => null != item);
          if (0 !== found.length) {
            const replaced = str.replace(closure_2_12, (arg0, arg1) => {
              let combined = arg0;
              value = stateFromStores2.get(arg1);
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
            const current2 = chatInputRef.current;
            current2.setText(replaced);
            chatInputStateRef.current.textPrev = str;
            chatInputStateRef.current.text = replaced;
            callback1();
          }
          const arr = closure_2_11(chatInputStateRef.current.text);
        }
      }
    }
  }, items8);
  const imperativeHandle = applicationCommandOptionValueParser.useImperativeHandle(arg1, () => ({
    getApplicationCommandManager() {
      return ref.current;
    },
    updateState() {
      return callback1();
    }
  }));
  return null;
});
forwardRefResult.displayName = "ChatInputAppCommandManager";
let obj4 = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default noop.memo(forwardRefResult);