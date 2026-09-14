// discord_app/modules/chat_input/native/ChatInputParser.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import _mod17 from "../../../../_runtime/metro/00017__.js";
import size from "../../../../_runtime/metro/00002__.js";

const processColor = _mod17.processColor;
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputParser.tsx");
class ChatInputParser {
  constructor() {
    merged = Object.assign({ rules: null });
    merged[0] = {};
    return merged;
  }
}
const prototype = ChatInputParser.prototype;
prototype["addRule"] = function addRule(ruleId) {
  this.rules[ruleId.ruleId] = ruleId;
};
prototype["removeRule"] = function removeRule(arg0) {
  delete tmp2[tmp];
};
prototype["parse"] = function parse(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return _modDef12.valuesIn(this.rules).reduce(
    (arr, matchFunction) =>
      arr.concat(
        matchFunction.matchFunction(matchFunction, closure_1).map((item) => {
          if (typeof matchFunction.deleteNodeOnBackspace === "function") {
            let deleteNodeOnBackspace = matchFunction.deleteNodeOnBackspace(item);
          } else {
            deleteNodeOnBackspace = matchFunction.deleteNodeOnBackspace;
          }
          if (typeof matchFunction.editDisabled === "function") {
            let editDisabled = matchFunction.editDisabled(item);
          } else {
            editDisabled = matchFunction.editDisabled;
          }
          const obj2 = { type: matchFunction.type, style: null, deleteNodeOnBackspace: null, editDisabled: null };
          const style = matchFunction.style;
          let style1;
          if (style != null) {
            style1 = style(item);
          }
          obj2.style = style1;
          obj2.deleteNodeOnBackspace = deleteNodeOnBackspace;
          obj2.editDisabled = editDisabled;
          const merged = Object.assign(item);
          return obj2;
        }),
      ),
    [],
  );
};

export default ChatInputParser;
export const convertToNativeStyle = (autocomplete) => {
  ({ backgroundColor, borderRadius } = autocomplete);
  const merged = Object.assign(autocomplete, Object.assign({ backgroundColor: 0, color: 0, borderRadius: 0 }));
  let tmp2 = null;
  if (null != backgroundColor) {
    tmp2 = null;
    if (null != borderRadius) {
      const obj = { backgroundColor: processColor(backgroundColor), cornerRadius: borderRadius };
      tmp2 = obj;
    }
  }
  const merged1 = Object.assign(merged);
  return { color: processColor(autocomplete.color), backgroundStyle: tmp2 };
};
export const ChatInputParseResultDataType = {
  COMMAND_OPTION: 0,
  [0]: "COMMAND_OPTION",
  ROLE_HIGHLIGHT: 1,
  [1]: "ROLE_HIGHLIGHT",
};
export const ChatInputNodeType = {
  COMMAND_OPTION: 0,
  [0]: "COMMAND_OPTION",
  COMMAND_OPTION_WITH_VALUE: 1,
  [1]: "COMMAND_OPTION_WITH_VALUE",
  EMOJI_HIGHLIGHT: 2,
  [2]: "EMOJI_HIGHLIGHT",
  USER_HIGHLIGHT: 3,
  [3]: "USER_HIGHLIGHT",
  ROLE_HIGHLIGHT: 4,
  [4]: "ROLE_HIGHLIGHT",
  CHANNEL_HIGHLIGHT: 5,
  [5]: "CHANNEL_HIGHLIGHT",
  SILENT_HIGHLIGHT: 6,
  [6]: "SILENT_HIGHLIGHT",
  GAME_HIGHLIGHT: 7,
  [7]: "GAME_HIGHLIGHT",
  GAME_MENTION_INPUT: 8,
  [8]: "GAME_MENTION_INPUT",
  TIMESTAMP_HIGHLIGHT: 9,
  [9]: "TIMESTAMP_HIGHLIGHT",
  TIMESTAMP_MENTION_INPUT: 10,
  [10]: "TIMESTAMP_MENTION_INPUT",
};
