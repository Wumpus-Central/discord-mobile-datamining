// === Module 11606: ChatInputParser ===

// Module 11606 (ChatInputParser)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const processColor = react_native.processColor;
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputParser.tsx");
class ChatInputParser {
  constructor() {
    const merged = Object.assign({ rules: null });
    merged[0] = {};
    return merged;
  }
  addRule(ruleId) {
    this.rules[ruleId.ruleId] = ruleId;
  }
  removeRule(arg0) {
    delete this.rules[arg0];
  }
  parse(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const obj = _modDef12;
    const valuesInResult = obj.valuesIn(this.rules);
    return valuesInResult.reduce((arr, matchFunction) => {
      closure_0 = matchFunction;
      const matchFunctionResult = matchFunction.matchFunction(closure_0, closure_1);
      return arr.concat(matchFunctionResult.map((item) => {
        let deleteNodeOnBackspace;
        let editDisabled;
        let style1;
        if (typeof closure_0.deleteNodeOnBackspace === "function") {
          deleteNodeOnBackspace = closure_0.deleteNodeOnBackspace(item);
        } else {
          deleteNodeOnBackspace = closure_0.deleteNodeOnBackspace;
        }
        if (typeof closure_0.editDisabled === "function") {
          editDisabled = closure_0.editDisabled(item);
        } else {
          editDisabled = closure_0.editDisabled;
        }
        const style = closure_0.style;
        const obj2 = { type: closure_0.type, style: style1, deleteNodeOnBackspace, editDisabled };
        style1 = undefined;
        if (style != null) {
          style1 = style(item);
        }
        const merged = Object.assign(item);
        return obj2;
      }));
    }, []);
  }
}
const prototype = ChatInputParser.prototype;

export default ChatInputParser;
export const convertToNativeStyle = (autocomplete) => {
  let backgroundColor;
  let borderRadius;
  ({ backgroundColor, borderRadius } = autocomplete);
  const color = autocomplete.color;
  const merged = Object.assign(autocomplete, Object.assign({ backgroundColor: 0, color: 0, borderRadius: 0 }));
  let tmp2 = null;
  if (null != backgroundColor) {
    tmp2 = null;
    if (null != borderRadius) {
      tmp2 = { backgroundColor: processColor(backgroundColor), cornerRadius: borderRadius };
      const obj = { backgroundColor: processColor(backgroundColor), cornerRadius: borderRadius };
    }
  }
  const obj2 = { color: processColor(color), backgroundStyle: tmp2 };
  const merged1 = Object.assign(merged);
  return obj2;
};
export const ChatInputParseResultDataType = { COMMAND_OPTION: 0, [0]: "COMMAND_OPTION", ROLE_HIGHLIGHT: 1, [1]: "ROLE_HIGHLIGHT" };
export const ChatInputNodeType = { COMMAND_OPTION: 0, [0]: "COMMAND_OPTION", COMMAND_OPTION_WITH_VALUE: 1, [1]: "COMMAND_OPTION_WITH_VALUE", EMOJI_HIGHLIGHT: 2, [2]: "EMOJI_HIGHLIGHT", USER_HIGHLIGHT: 3, [3]: "USER_HIGHLIGHT", ROLE_HIGHLIGHT: 4, [4]: "ROLE_HIGHLIGHT", CHANNEL_HIGHLIGHT: 5, [5]: "CHANNEL_HIGHLIGHT", SILENT_HIGHLIGHT: 6, [6]: "SILENT_HIGHLIGHT", GAME_HIGHLIGHT: 7, [7]: "GAME_HIGHLIGHT", GAME_MENTION_INPUT: 8, [8]: "GAME_MENTION_INPUT", TIMESTAMP_HIGHLIGHT: 9, [9]: "TIMESTAMP_HIGHLIGHT", TIMESTAMP_MENTION_INPUT: 10, [10]: "TIMESTAMP_MENTION_INPUT" };