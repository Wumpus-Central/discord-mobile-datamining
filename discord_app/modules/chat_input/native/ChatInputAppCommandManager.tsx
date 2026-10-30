// === Module 13919: ChatInputAppCommandManager ===

// Module 13919 (ChatInputAppCommandManager)
import nativeDefault from "native" /* 575 */;
import useGameProfileObscured from "useGameProfileObscured" /* 8674 */;
import ChatInputCommandOptionParser from "ChatInputCommandOptionParser" /* 13705 */;
import ApplicationCommandManagerDefault from "ApplicationCommandManager" /* 13920 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 8337 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 8338 */;
import GameStore from "GameStore" /* 2015 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8672 */;
import UserStore from "UserStore" /* 1384 */;

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
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    tmp = closure_14();
    closure_4 = tmp;
    obj = chatInputRef(commandsDisabled[15]);
    applicationCommandOptionValueParser = obj.useApplicationCommandOptionValueParser({ channel });
    closure_5 = applicationCommandOptionValueParser;
    obj2 = chatInputRef(commandsDisabled[13]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj2.useStateFromStores(items, () => ApplicationCommandStore.getActiveCommand(channel.id));
    closure_6 = stateFromStores;
    obj3 = chatInputRef(commandsDisabled[13]);
    items1 = [];
    items1[0] = closure_6;
    stateFromStores1 = obj3.useStateFromStores(items1, () => ApplicationCommandAutocompleteStore.getLastResponseNonce(channel.id));
    closure_7 = stateFromStores1;
    obj4 = chatInputRef(commandsDisabled[16]);
    text = obj4.getTextBeforeFirstOption(chatInputStateRef.current.text).text;
    substr = text.slice(1);
    ref = closure_5.useRef(substr.trimEnd());
    closure_8 = ref;
    tmp6 = closure_4(closure_5.useState(ref.current), 2);
    closure_9 = tmp6[1];
    obj6 = channel(commandsDisabled[17]);
    commands = obj6.useCachedResults({ type: "channel", channel }, chatInputRef(commandsDisabled[18]).ApplicationCommandType.CHAT, tmp6[0]).commands;
    closure_11 = closure_5.useRef(undefined);
    closure_129_0 = undefined;
    closure_129_1 = undefined;
    tmp7 = closure_4(closure_5.useState([]), 2);
    first = tmp7[0];
    closure_129_0 = first;
    closure_129_1 = tmp7[1];
    callback = closure_5.useCallback((arg0) => {
      closure_0 = closure_2_11(arg0);
      chatInputStateRef((arg0) => {
        let tmp = closure_0;
        if (obj.isEqual(arg0, closure_0)) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []);
    items2 = [];
    items2[0] = first;
    memo = closure_5.useMemo(() => chatInputRef.filter((item) => null == gameById.getGameById(item)), items2);
    obj7 = chatInputRef(commandsDisabled[12]);
    games = obj7.useGames(memo);
    obj8 = chatInputRef(commandsDisabled[13]);
    items3 = [, , ];
    items3[0] = closure_8;
    items3[1] = commands;
    items3[2] = closure_9;
    items4 = [];
    items4[0] = first;
    stateFromStores2 = obj8.useStateFromStores(items3, () => {
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
    }, items4, closure_15);
    closure_12 = callback;
    closure_13 = first;
    closure_14 = stateFromStores2;
    items5 = [, , , , , , , , , ];
    items5[0] = stateFromStores;
    items5[1] = channel;
    items5[2] = chatInputRef;
    items5[3] = chatInputStateRef;
    items5[4] = commandsDisabled;
    items5[5] = stateFromStores1;
    items5[6] = applicationCommandOptionValueParser;
    items5[7] = commands;
    items5[8] = tmp;
    items5[9] = callback;
    callback1 = closure_5.useCallback(() => {
      const current = chatInputStateRef.current;
      const text = current.text;
      ({ editId, focused, selectionStart, selectionEnd } = current);
      callback(text);
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
    }, items5);
    closure_15 = callback1;
    items6 = [];
    items6[0] = callback1;
    effect = closure_5.useEffect(() => {
      callback1();
    }, items6);
    items7 = [];
    items7[0] = tmp;
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
    }, items7);
    items8 = [, , , , ];
    items8[0] = stateFromStores2;
    items8[1] = first;
    items8[2] = chatInputRef;
    items8[3] = chatInputStateRef;
    items8[4] = callback1;
    effect2 = closure_5.useEffect(() => {
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
    imperativeHandle = closure_5.useImperativeHandle(global.ref, () => ({
      getApplicationCommandManager() {
        return ref.current;
      },
      updateState() {
        return callback1();
      }
    }));
    return null;
  }
}
const ChannelAutocompleteConstants = fn(6031);
({ extractGameMentionIds: closure_11, GAME_MENTION_RAW_RE_GLOBAL: closure_12, GAME_MENTION_SENTINEL: map1 } = ChannelAutocompleteConstants);
const createStyles = fn(5009);
let obj = { commandOption: { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.xs, fontSize: 14 }, commandErrorOption: null, gameMention: null, timestampMention: null, autocomplete: null };
let obj3 = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_DEFAULT, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
obj.commandErrorOption = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
let obj4 = { backgroundColor: nativeDefault.colors.KEYWORD_HIGHLIGHT_BACKGROUND, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xs, fontSize: 14 };
obj.gameMention = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
let obj5 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj.timestampMention = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
let obj6 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs, fontSize: 14, fontWeight: "bold" };
obj.autocomplete = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
let value = createStyles.createStyles(obj);
ChatInputAppCommandManager.displayName = "ChatInputAppCommandManager";
let obj7 = { color: nativeDefault.colors.TEXT_BRAND, fontWeight: "bold" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputAppCommandManager.tsx");

export default noop.memo(ChatInputAppCommandManager);