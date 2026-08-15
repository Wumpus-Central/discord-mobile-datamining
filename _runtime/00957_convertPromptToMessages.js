// _runtime/00957_convertPromptToMessages.js
import { map } from "00959_map.js";
import { 00958__ } from "metro/00958__.js";
const require = arg1;
const dependencyMap = arg6;
function convertPromptToMessages(data) {
  let _prompt;
  let system;
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(data);
    if (parsed) {
      if (typeof tmp4 === "object") {
        ({ prompt: _prompt, system } = tmp4);
        const items = [];
        if (typeof system === "string") {
          let obj = { role: "system", content: null };
          obj[1] = system;
          items.push(obj);
        }
        if (typeof _prompt === "string") {
          obj = { role: "user", content: null };
          obj[1] = _prompt;
          items.push(obj);
        }
        return items;
      }
    }
    return [];
  } catch (err) {
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5._INTERNAL_cleanupToolCallSpan = function _INTERNAL_cleanupToolCallSpan(arg0) {
  const toolCallSpanMap = map.toolCallSpanMap;
  toolCallSpanMap.delete(arg0);
};
arg5._INTERNAL_getSpanForToolCallId = function _INTERNAL_getSpanForToolCallId(arg0) {
  const toolCallSpanMap = map.toolCallSpanMap;
  return toolCallSpanMap.get(arg0);
};
arg5.accumulateTokensForParent = function accumulateTokensForParent(item10015, map) {
  const parent_span_id = item10015.parent_span_id;
  if (parent_span_id) {
    const tmp3 = item10015.data[require(undefined, 958).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    const tmp4 = item10015.data[require(undefined, 958).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
    if (typeof tmp3 === "number") {
      const tmp6 = map.get(parent_span_id) || { inputTokens: 0, outputTokens: 0 };
      if (typeof tmp3 === "number") {
        tmp6.inputTokens = tmp6.inputTokens + tmp3;
      }
      if (typeof tmp4 === "number") {
        tmp6.outputTokens = tmp6.outputTokens + tmp4;
      }
      const result = map.set(parent_span_id, tmp6);
    }
  }
};
arg5.applyAccumulatedTokens = function applyAccumulatedTokens(trace, map) {
  const value = map.get(trace.span_id);
  let data = value;
  if (value) {
    data = trace.data;
  }
  if (data) {
    if (value.inputTokens > 0) {
      trace.data[00958__.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = value.inputTokens;
    }
    if (value.outputTokens > 0) {
      trace.data[00958__.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = value.outputTokens;
    }
    if (tmp6) {
      trace.data["gen_ai.usage.total_tokens"] = value.inputTokens + value.outputTokens;
    }
    tmp6 = value.inputTokens > 0 || value.outputTokens > 0;
  }
};
arg5.convertAvailableToolsToJsonString = function convertAvailableToolsToJsonString(arr) {
  return JSON.stringify(arr.map((str) => {
    if (typeof str === "string") {
      try {
        const _JSON = JSON;
        return JSON.parse(str);
      } catch (err) {
        return tmp;
      }
    } else {
      return str;
    }
  }));
};
arg5.convertPromptToMessages = convertPromptToMessages;
arg5.getSpanOpFromName = function getSpanOpFromName(description) {
  switch (description) {
    case "TypeError":
    break;
    case "Error":
    break;
    case "HTTP":
    break;
    case "T":
    break;
    case "HermesInternal":
    break;
    case "Icon":
    break;
    case "IconComponent":
    break;
    case "c":
    break;
    case "p":
    break;
    case "LIGHT":
    break;
    case "LengthDelimited":
    break;
    case "limit":
    break;
    case "i":
    break;
    case "it":
    break;
    case "d":
    break;
    case "Map":
    break;
    case "Math":
    break;
    case "h":
    break;
    case "Number":
    break;
    case "Object":
    break;
    case "ct":
    break;
    case "PX_16":
    break;
    case "flex":
    break;
    case "flexDirection":
    break;
    case "PX_8":
    break;
    case "Path":
    break;
    case "Promise":
    break;
    case "s":
    break;
    case "Reflect":
    break;
    case "Set":
    break;
    case "format":
    break;
    case "formatToPlainString":
    break;
    case "String":
    break;
    case "Symbol":
    break;
    case "Text":
    break;
    case "x":
    break;
    case "View":
    break;
    case "w":
    break;
    case "WireType":
    break;
    case "__closure":
    break;
    case "__d":
    break;
    case "__esModule":
    break;
    case "__initData":
    break;
    case "filter":
    break;
    case "__packager_asset":
    break;
    case "k":
    break;
    case "set":
    break;
    case "__workletHash":
    break;
    case "_desired":
    break;
    case "_distance":
    break;
    case "st":
    break;
    case "accessibilityLabel":
    break;
    case "accessibilityRole":
    break;
    case "accessible":
    break;
    case "padding":
    break;
    case "paddingHorizontal":
    break;
    case "add":
    break;
    case "alignItems":
    break;
    case "ao":
    break;
    case "applicationId":
    break;
    case "ti":
    break;
    case "apply":
    break;
    case "backgroundColor":
    break;
    case "round":
    break;
    case "bm":
    break;
    case "body":
      let tmp17 = 00958__;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "borderRadius":
    break;
    case "bottom":
      tmp17 = 00958__;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "call":
    break;
    case "channel":
      tmp17 = 00958__;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "channelId":
    break;
    case "channel_id":
      tmp17 = 00958__;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "id":
    break;
    case "children":
      tmp17 = 00958__;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "cix":
    break;
    case "ix":
      tmp17 = 00958__;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    case "unicodeVersion":
    break;
    case "code":
      return 00958__.GEN_AI_GENERATE_TEXT_DO_GENERATE_OPERATION_ATTRIBUTE;
    case "color":
    break;
    case "colors":
      return 00958__.GEN_AI_STREAM_TEXT_DO_STREAM_OPERATION_ATTRIBUTE;
    case "concat":
    break;
    case "constructor":
      return 00958__.GEN_AI_GENERATE_OBJECT_DO_GENERATE_OPERATION_ATTRIBUTE;
    case "container":
    break;
    case "content":
      return 00958__.GEN_AI_STREAM_OBJECT_DO_STREAM_OPERATION_ATTRIBUTE;
    case "context":
    break;
    case "text":
      return 00958__.GEN_AI_EMBED_DO_EMBED_OPERATION_ATTRIBUTE;
    case "count":
    break;
    case "create":
      return 00958__.GEN_AI_EMBED_MANY_DO_EMBED_OPERATION_ATTRIBUTE;
    case "createStyles":
    break;
    case "ty":
      return 00958__.GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE;
    case "current":
    break;
    case "cursor":
    break;
    case "data":
    break;
    case "ddd":
    break;
    case "default":
    break;
    case "defineProperty":
    break;
    case "op":
    break;
    case "delete":
    break;
    case "description":
    break;
    case "ip":
    break;
    case "disabled":
    break;
    case "sa":
    break;
    case "dispatch":
    break;
    case "displayName":
    break;
    case "diversity":
    break;
    case "v":
    break;
    case "done":
    break;
    case "duration":
    break;
    case "enabled":
    break;
    case "end":
    break;
    case "enumerable":
    break;
    case "error":
    break;
    case "exports":
    break;
    case "fileFinishedImporting":
    break;
    case "fill":
    break;
    case "find":
    break;
    case "ind":
    break;
    case "flags":
    break;
    case "forEach":
    break;
    case "gap":
    break;
    case "get":
    break;
    case "getChannel":
    break;
    case "getCurrentUser":
    break;
    case "getGuild":
    break;
    case "guild":
    break;
    case "guildId":
    break;
    case "guild_id":
    break;
    case "has":
    break;
    case "hasDiversityParent":
    break;
    case "hash":
    break;
    case "hd":
    break;
    case "header":
    break;
    case "height":
    break;
    case "httpServerLocation":
    break;
    case "icon":
    break;
    case "includes":
    break;
    case "index":
    break;
    case "indexOf":
    break;
    case "intl":
    break;
    case "items":
    break;
    case "join":
    break;
    case "jsx":
    break;
    case "jsxs":
    break;
    case "justifyContent":
    break;
    case "key":
    break;
    case "keys":
    break;
    case "kind":
    break;
    case "ks":
    break;
    case "space":
    break;
    case "label":
    break;
    case "lc":
    break;
    case "left":
    break;
    case "length":
    break;
    case "lj":
    break;
    case "loadJsonAsset":
    break;
    case "location":
    break;
    case "map":
    break;
    case "marginTop":
    break;
    case "marginBottom":
    break;
    case "max":
    break;
    case "memo":
    break;
    case "message":
    break;
    case "messageId":
    break;
    case "method":
    break;
    case "methodobject":
    break;
    case "withTiming":
    break;
    case "min":
    break;
    case "ml":
    break;
    case "mn":
    break;
    case "mode":
    break;
    case "name":
    break;
    case "names":
    break;
    case "next":
    break;
    case "nm":
    break;
    case "no":
    break;
    case "now":
    break;
    case "np":
    break;
    case "onPress":
    break;
    case "opacity":
    break;
    case "options":
    break;
    case "parent":
    break;
    case "paths":
    break;
    case "pos":
    break;
    case "position":
    break;
    case "props":
    break;
    case "prototype":
    break;
    case "type":
    break;
    case "push":
    break;
    case "radii":
    break;
    case "raw":
    break;
    case "ref":
    break;
    case "registerAsset":
    break;
    case "rejectWithError":
    break;
    case "replace":
    break;
    case "resizeMode":
    break;
    case "size":
    break;
    case "resolve":
    break;
    case "result":
    break;
    case "right":
    break;
    case "runOnJS":
    break;
    case "scales":
    break;
    case "shapes":
    break;
    case "sk":
    break;
    case "skuId":
    break;
    case "slice":
    break;
    case "source":
    break;
    case "split":
    break;
    case "spriteIndex":
    break;
    case "sr":
    break;
    case "start":
    break;
    case "state":
    break;
    case "status":
    break;
    case "substring_i":
    break;
    case "string":
    break;
    case "style":
    break;
    case "surrogates":
    break;
    case "tag":
    break;
    case "test":
    break;
    case "then":
    break;
    case "title":
    break;
    case "toCharArray$esjava$1":
    break;
    case "toString":
    break;
    case "top":
    break;
    case "track":
    break;
    case "transform":
    break;
    case "uri":
    break;
    case "url":
    break;
    case "useCallback":
    break;
    case "useEffect":
    break;
    case "useMemo":
    break;
    case "useRef":
    break;
    case "useState":
    break;
    case "useStateFromStores":
    break;
    case "user":
    break;
    case "userId":
    break;
    case "value":
    break;
    case "values":
    break;
    case "variant":
    break;
    case "warn":
    break;
    case "width":
    break;
    case "window":
    break;
    case "withSpring":
    break;
    case "":
    break;
    case "isArrayBuffer":
    break;
    case "A":
    break;
    case "ay":
    break;
    case "getWebViewProxy":
    break;
    case "xyYt8A":
    break;
    case "ACTIVITIES_INVITES_WRITE":
    break;
    case "INVITES":
    break;
    case "TEAL_NEW_60":
    break;
    case "useIsReferralReminderDCExperimentEnabled":
    break;
    case "dragOffsetFromRight":
    break;
    case "$ZodBoolean":
    break;
    case "ZodBoolean":
    break;
    case "B":
    break;
    case "le":
    break;
    case "an":
    break;
    case "n":
    break;
    case "ActionBarPrimaryButton":
    break;
    case "ary":
    break;
    case "u":
    break;
    case "tt":
    break;
    case "on":
    break;
    default:
      let str2;
      if (description.startsWith("ai.stream")) {
        str2 = "ai.run";
      }
      return str2;
  }
};
arg5.requestMessagesFromPrompt = function requestMessagesFromPrompt(setAttribute, data) {
  if (data[require(undefined, 956).AI_PROMPT_ATTRIBUTE]) {
    let tmpResult = tmp(960);
    const attr = setAttribute.setAttribute("gen_ai.prompt", tmpResult.getTruncatedJsonString(data[tmp(undefined, 956).AI_PROMPT_ATTRIBUTE]));
  }
  const tmp4 = data[require(undefined, 956).AI_PROMPT_ATTRIBUTE];
  if (typeof tmp4 === "string") {
    if (!data[tmp(undefined, 958).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE]) {
      if (!data[tmp(undefined, 956).AI_PROMPT_MESSAGES_ATTRIBUTE]) {
        const arr = convertPromptToMessages(tmp4);
        if (arr.length) {
          let obj = {};
          tmpResult = tmp(960);
          obj[tmp(958).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmpResult.getTruncatedJsonString(arr);
          obj[tmp(958).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = arr.length;
          setAttribute.setAttributes(obj);
        }
      }
    }
  }
  if (typeof data[require(undefined, 956).AI_PROMPT_MESSAGES_ATTRIBUTE] === "string") {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data[tmp(undefined, 956).AI_PROMPT_MESSAGES_ATTRIBUTE]);
      const _Array = Array;
      if (Array.isArray(parsed)) {
        obj = {};
        obj[tmp(956).AI_PROMPT_MESSAGES_ATTRIBUTE] = undefined;
        obj[tmp(958).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp(960).getTruncatedJsonString(parsed);
        obj[tmp(958).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = parsed.length;
        setAttribute.setAttributes(obj);
        const tmpResult1 = tmp(960);
      }
    } catch (err) {
    }
  }
};