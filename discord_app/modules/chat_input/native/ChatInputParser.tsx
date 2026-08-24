// === Module 11216: addRule ===

// Module 11216 (addRule)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const processColor = get_ActivityIndicator.processColor;
const result = set.fileFinishedImporting("modules/chat_input/native/ChatInputParser.tsx");
class ChatInputParser {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    return obj;
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
  importDefault = arg0;
  dependencyMap = arg1;
  let obj = applyDefault;
  return applyDefault.valuesIn(this.rules).reduce((arr, matchFunction) => {
    closure_0 = matchFunction;
    return arr.concat(matchFunction.matchFunction(closure_0, closure_1).map((arg0) => {
      let obj = matchFunction;
      if (typeof matchFunction.deleteNodeOnBackspace === "function") {
        let deleteNodeOnBackspace = obj.deleteNodeOnBackspace(arg0);
      } else {
        deleteNodeOnBackspace = obj.deleteNodeOnBackspace;
      }
      if (typeof obj.editDisabled === "function") {
        let editDisabled = obj.editDisabled(arg0);
      } else {
        editDisabled = obj.editDisabled;
      }
      obj = { type: obj.type, style: null, deleteNodeOnBackspace: null, editDisabled: null };
      let style = obj.style;
      style = undefined;
      if (style != null) {
        style = style(arg0);
      }
      obj[1] = style;
      obj[2] = deleteNodeOnBackspace;
      obj[3] = editDisabled;
      const merged = Object.assign(arg0);
      return obj;
    }));
  }, []);
};

export default ChatInputParser;
export const convertToNativeStyle = (color) => {
  ({ backgroundColor, borderRadius } = color);
  const merged = Object.assign(color, Object.create(null));
  let tmp2 = null;
  if (null != backgroundColor) {
    tmp2 = null;
    if (null != borderRadius) {
      let obj = { backgroundColor: null, cornerRadius: null };
      obj[0] = processColor(backgroundColor);
      obj[1] = borderRadius;
      tmp2 = obj;
    }
  }
  obj = { color: processColor(color.color), backgroundStyle: tmp2 };
  const merged1 = Object.assign(merged);
  return obj;
};
export const ChatInputParseResultDataType = { COMMAND_OPTION: 0, [0]: "COMMAND_OPTION", ROLE_HIGHLIGHT: 1, [1]: "ROLE_HIGHLIGHT" };
export const ChatInputNodeType = { COMMAND_OPTION: 0, [0]: "COMMAND_OPTION", COMMAND_OPTION_WITH_VALUE: 1, [1]: "COMMAND_OPTION_WITH_VALUE", EMOJI_HIGHLIGHT: 2, [2]: "EMOJI_HIGHLIGHT", USER_HIGHLIGHT: 3, [3]: "USER_HIGHLIGHT", ROLE_HIGHLIGHT: 4, [4]: "ROLE_HIGHLIGHT", CHANNEL_HIGHLIGHT: 5, [5]: "CHANNEL_HIGHLIGHT", SILENT_HIGHLIGHT: 6, [6]: "SILENT_HIGHLIGHT", GAME_HIGHLIGHT: 7, [7]: "GAME_HIGHLIGHT", GAME_MENTION_INPUT: 8, [8]: "GAME_MENTION_INPUT" };