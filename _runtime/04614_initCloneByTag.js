// _runtime/04614_initCloneByTag.js
import cloneArrayBuffer from "04615_cloneArrayBuffer.js";
import cloneDataView from "04616_cloneDataView.js";
import cloneTypedArray from "04617_cloneTypedArray.js";
import cloneRegExp from "04618_cloneRegExp.js";
import valueOf from "04619_valueOf.js";

export default function initCloneByTag(arg0, arg1, arg2) {
  let constructor = arg0.constructor;
  switch (arg1) {
    case "IconComponent":
      break;
    case "c":
      break;
    case "p":
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
      return cloneArrayBuffer(arg0);
    case "ao":
      break;
    case "applicationId":
      let tmp20 = +arg0;
      constructor = new constructor(tmp20);
      return constructor;
    case "ti":
      break;
    case "apply":
      tmp20 = +arg0;
      constructor = new constructor(tmp20);
      return constructor;
    case "backgroundColor":
      break;
    case "round":
      return cloneDataView(arg0, arg2);
    case "bm":
      break;
    case "body":
      let tmp16 = cloneTypedArray;
      let tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "borderRadius":
      break;
    case "bottom":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "call":
      break;
    case "category":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "channel":
      break;
    case "channelId":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "channel_id":
      break;
    case "id":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "children":
      break;
    case "cix":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "ix":
      break;
    case "unicodeVersion":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "code":
      break;
    case "color":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "colors":
      break;
    case "concat":
      tmp16 = cloneTypedArray;
      tmp16Result = tmp16(arg0, arg2);
      return tmp16Result;
    case "constructor":
      break;
    case "container":
      let constructor1 = new constructor();
      return constructor1;
    case "content":
      break;
    case "context":
      constructor1 = new constructor();
      return constructor1;
    case "text":
      break;
    case "count":
      let constructor2 = new constructor(arg0);
      return constructor2;
    case "create":
      break;
    case "createStyles":
      constructor2 = new constructor(arg0);
      return constructor2;
    case "ty":
      break;
    case "current":
      return cloneRegExp(arg0);
    case "cursor":
      break;
    case "data":
      return valueOf(arg0);
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
    default:
  }
}
