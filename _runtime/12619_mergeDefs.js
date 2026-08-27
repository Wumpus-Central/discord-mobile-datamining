// _runtime/12619_mergeDefs.js
import mergeDefs from "12595_mergeDefs.js";

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.default = function default_1() {
      if (typeof error !== "function") {
        HermesBuiltin.throwTypeError();
      }
      closure_0 = { string: { unit: { one: "\u0576\u0577\u0561\u0576", many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, file: { unit: { one: "\u0562\u0561\u0575\u0569", many: "\u0562\u0561\u0575\u0569\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, array: { unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, set: { unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" } };
      closure_1 = { regex: "\u0574\u0578\u0582\u057F\u0584", email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565", url: "URL", emoji: "\u0567\u0574\u0578\u057B\u056B", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574", date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E", time: "ISO \u056A\u0561\u0574", duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576", ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565", ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565", cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584", cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584", base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572", base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572", json_string: "JSON \u057F\u0578\u0572", e164: "E.164 \u0570\u0561\u0574\u0561\u0580", jwt: "JWT", template_literal: "\u0574\u0578\u0582\u057F\u0584" };
      closure_2 = { nan: "NaN", number: "\u0569\u056B\u057E", array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E" };
      return {
        localeError: (code) => {
          let str = code.code;
          switch (str) {
            case "t":
            break;
            case "to":
            break;
            case "Date":
            break;
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
            break;
            case "borderRadius":
            break;
            case "bottom":
            break;
            case "call":
            break;
            case "channel":
            break;
            case "channelId":
            break;
            case "channel_id":
            break;
            case "id":
            break;
            case "children":
            break;
            case "cix":
            break;
            case "ix":
            break;
            case "unicodeVersion":
            break;
            case "code":
            break;
            case "color":
            break;
            case "colors":
            break;
            case "concat":
            break;
            case "constructor":
            break;
            case "container":
            break;
            case "content":
            break;
            case "context":
            break;
            case "text":
            break;
            case "count":
            break;
            case "create":
            break;
            case "createStyles":
            break;
            case "ty":
            break;
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
            case "guildGameIds":
            break;
            case "useYouBarActivityStatusEnabled":
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
            case "useActionBarPrimaryButton":
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
            case "$ZodDate":
            break;
            case "ZodDate":
            break;
            case "D":
            break;
            case "DateParser":
            break;
            case "at":
            break;
            case "te":
            break;
            case "serializeEnd":
            break;
            case "discovery_splash":
            break;
            case "splash":
            break;
            case "hash_mask":
            break;
            case "maskContentUnits":
            break;
            case "MarkupParserNodeTypeError":
            break;
            case "E":
            break;
            case "Err":
            break;
            case "ro":
            break;
            case "or":
            break;
            case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
            break;
            case "BOT_HTTP_INTERACTIONS":
            break;
            case "H":
            break;
            case "HT":
            break;
            case "TP":
            break;
            case "P":
            break;
            case "INTERACTIONS":
            break;
            case "NSFW_SERVER_INVITE":
            break;
            case "NSFW_SERVER_INVITE_EMBED":
            break;
            case "SERVER_INVITE":
            break;
            case "INVITE_EMBED":
            break;
            case "INVITE_EMBED_ACTIONED":
            break;
            case "rm":
            break;
            case "m":
            break;
            case "me":
            break;
            case "mes":
            break;
            case "I":
            break;
            case "InternalCard":
            break;
            case "ter":
            break;
            case "na":
            break;
            case "al":
            break;
            case "CardA11yWrapper":
            break;
            case "perGuildMaxCount":
            break;
            case "isContentClassificationRestricted":
            break;
            case "getNextBatch":
            break;
            case "SDK_PACKAGE_NAME":
            break;
            case "MEMBER_REQUEST_COUNT":
            break;
            case "TOO_MANY_USER_GUILDS":
            break;
            case "getChannelIcon":
            break;
            case "getChannelIconComponent":
            break;
            case "getChannelIconComponentWithGuild":
            break;
            case "co":
            break;
            case "C":
            break;
            case "Component":
            break;
            case "om":
            break;
            case "mp":
            break;
            case "po":
            break;
            case "pon":
            break;
            case "one":
            break;
            case "ne":
            break;
            case "en":
            break;
            case "LITTLE_ENDIAN":
            break;
            case "ANDROID_NOTIFICATION_LIGHTS":
            break;
            case "L":
            break;
            case "LI":
            break;
            case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
            break;
            case "MESSAGE_REACTIONS":
            break;
            case "$ZodCheckMaxLength":
            break;
            case "kMaxLength":
            break;
            case "eng":
            break;
            case "ng":
            break;
            case "el":
            break;
            case "li":
            break;
            case "lim":
            break;
            case "limited":
            break;
            case "limitedBadgeRow":
            break;
            case "mi":
            break;
            case "mit":
            break;
            case "with_application":
            break;
            case "_applicationResults":
            break;
            case "applicationResults":
            break;
            case "onResult":
            break;
            case "getGlobalScope":
            break;
            case "openGiftCodeRedeemModal":
            break;
            case "getChildNodes":
            break;
            case "$ZodMap":
            break;
            case "ZodMap":
            break;
            case "M":
            break;
            case "ap":
            break;
            case "$ZodCheckGreaterThan":
            break;
            case "ToIntlMathematicalValue":
            break;
            case "th":
            break;
            case "ValueSetter":
            break;
            case "$ZodCheckNumberFormat":
            break;
            case "N":
            break;
            case "NumberFormat":
            break;
            case "um":
            break;
            case "b":
            break;
            case "be":
            break;
            case "breadcrumbType":
            break;
            case "$ZodObject":
            break;
            case "$ZodObjectJIT":
            break;
            case "ZodObject":
            break;
            case "O":
            break;
            case "j":
            break;
            case "je":
            break;
            case "IT":
            break;
            case "MEDIA_PICKER_SEND_BUTTON_SPRING":
            break;
            case "marginHorizontal":
            break;
            case "Direction":
            break;
            case "rect":
            break;
            case "PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE":
            break;
            case "EXP_TABLE":
            break;
            case "TABLEROW_BACKGROUND_DEFAULT":
            break;
            case "DEFAULT_STATE":
            break;
            case "PX_80":
            break;
            case "_":
            break;
            case "successNodeId":
            break;
            case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
            break;
            case "RNSVGClipPath":
            break;
            case "ClipPath":
            break;
            case "$ZodPromise":
            break;
            case "ZodPromise":
            break;
            case "PromiseDeduper":
            break;
            case "is":
            break;
            case "se":
            break;
            case "dup":
            break;
            case "perUserFpsWindow":
            break;
            case "woman_and_man_holding_hands_tone1_tone5":
            break;
            case "contentContainerHorizontal":
            break;
            case "QUEST_DECISION_RECEIVED":
            break;
            case "PREMIUM_PLANS":
            break;
            case "ANSWER_HAS":
            break;
            case "HAS_APPLICATION":
            break;
            case "APPLICATION_COMMAND_INDEX_CHANNEL":
            break;
            case "CHANNEL_ACTION_BANNER_HEIGHT":
            break;
            case "BANNER_HEIGHT":
            break;
            case "fgClip":
            break;
            case "ClipViewAnimated":
            break;
            case "AnimatedFlashList":
            break;
            case "FlashList":
            break;
            case "FlashListRef":
            break;
            case "las":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp45 = closure_2[parsedTypeResult];
              if (tmp45 == null) {
                tmp45 = parsedTypeResult;
              }
              if (obj.test(code.expected)) {
                const _HermesInternal16 = HermesInternal;
                let combined = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof " + code.expected + ", \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 " + tmp45;
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 " + expected + ", \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 " + tmp45;
              }
              return combined;
            case "R":
            break;
            case "ReflectionBinaryReader":
              if (1 === code.values.length) {
                const _HermesInternal14 = HermesInternal;
                let combined1 = "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 " + closure_2.stringifyPrimitive(code.values[1]);
              } else {
                const _HermesInternal13 = HermesInternal;
                combined1 = "\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "ef":
            break;
            case "f":
              let str37 = "<";
              if (code.inclusive) {
                str37 = "<=";
              }
              let tmp27 = dependencyMap[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              if (tmp27) {
                const _Number2 = Number;
                let one2 = tmp27.unit.many;
                const _Math2 = Math;
                if (1 === Math.abs(Number(code.maximum))) {
                  one2 = tmp27.unit.one;
                }
                let str44 = code.origin;
                if (str44 == null) {
                  str44 = "\u0561\u0580\u056A\u0565\u0584";
                }
                let str45 = "";
                if (str44) {
                  const items = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str46 = "\u0568";
                  if (items.includes(str44[str44.length - 1])) {
                    str46 = "\u0576";
                  }
                  str45 = str44 + str46;
                }
                const _HermesInternal12 = HermesInternal;
                return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + str45 + " \u056F\u0578\u0582\u0576\u0565\u0576\u0561 " + str37 + code.maximum.toString() + " " + one2;
              } else {
                let str38 = code.origin;
                if (str38 == null) {
                  str38 = "\u0561\u0580\u056A\u0565\u0584";
                }
                let str39 = "";
                if (str38) {
                  const items1 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str40 = "\u0568";
                  if (items1.includes(str38[str38.length - 1])) {
                    str40 = "\u0576";
                  }
                  str39 = str38 + str40;
                }
                const _HermesInternal11 = HermesInternal;
                return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + str39 + " \u056C\u056B\u0576\u056B " + str37 + code.maximum.toString();
              }
            break;
            case "BinaryReader":
            break;
            case "$ZodSet":
              let str25 = ">";
              if (code.inclusive) {
                str25 = ">=";
              }
              let tmp18 = dependencyMap[code.origin];
              if (tmp18 == null) {
                tmp18 = null;
              }
              if (tmp18) {
                str = globalThis;
                const _Number = Number;
                let one = tmp18.unit.many;
                const _Math = str.Math;
                if (1 === _Math.abs(Number(code.minimum))) {
                  one = tmp18.unit.one;
                }
                const origin = code.origin;
                let str31 = "";
                if (origin) {
                  const items2 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str32 = "\u0568";
                  if (items2.includes(origin[origin.length - 1])) {
                    str32 = "\u0576";
                  }
                  str31 = origin + str32;
                }
                return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + str31 + " \u056F\u0578\u0582\u0576\u0565\u0576\u0561 " + str25 + code.minimum.toString() + " " + one;
              } else {
                const origin1 = code.origin;
                let str26 = "";
                if (origin1) {
                  const items3 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                  let str27 = "\u0568";
                  if (items3.includes(origin1[origin1.length - 1])) {
                    str27 = "\u0576";
                  }
                  str26 = origin1 + str27;
                }
                const _HermesInternal10 = HermesInternal;
                return "\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 " + str26 + " \u056C\u056B\u0576\u056B " + str25 + code.minimum.toString();
              }
            break;
            case "ZodSet":
            break;
            case "S":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B \"" + code.prefix + "\"-\u0578\u057E";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B \"" + code.suffix + "\"-\u0578\u057E";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B " + code.pattern + " \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576";
              } else {
                let format = table[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined2 = "\u054D\u056D\u0561\u056C " + format;
              }
              return combined2;
            case "et":
            break;
            case "getGuildsTree":
              const _HermesInternal4 = HermesInternal;
              return "\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B " + code.divisor + "-\u056B";
            case "GuildsTree":
            break;
            case "postformat":
              let str8 = "";
              if (code.keys.length > 1) {
                str8 = "\u0576\u0565\u0580";
              }
              const _HermesInternal3 = HermesInternal;
              return "\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B" + str8 + ". " + closure_2.joinValues(code.keys, ", ");
            case "form":
            break;
            case "orm":
              const origin2 = code.origin;
              let str5 = "";
              if (origin2) {
                const items4 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                str = "\u0568";
                if (items4.includes(origin2[origin2.length - 1])) {
                  str = "\u0576";
                }
                str5 = origin2 + str;
              }
              const _HermesInternal2 = HermesInternal;
              return "\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B " + str5 + "-\u0578\u0582\u0574";
            case "ma":
            break;
            case "mat":
              return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
            case "lai":
            break;
            case "StringBuilder":
              let origin3 = code.origin;
              let str2 = "";
              if (origin3) {
                let diff = origin3.length - 1;
                let items5 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                let hasItem = items5.includes(origin3[diff]);
                str = "\u0568";
                if (hasItem) {
                  str = "\u0576";
                }
                str2 = origin3 + str;
              }
              let _HermesInternal = HermesInternal;
              let combined3 = "\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 " + str2 + "-\u0578\u0582\u0574";
              return combined3;
            case "tr":
            break;
            case "tri":
            break;
            case "ring":
            break;
            case "in":
            break;
            case "ing":
            break;
            case "g":
            break;
            case "RTC_REGION_RANKING":
            break;
            case "$ZodSymbol":
            break;
            case "ZodSymbol":
            break;
            case "SymbolLock":
            break;
            case "bo":
            break;
            case "bol":
            break;
            case "QUEST_BAR_RENDER_DELAY":
            break;
            case "LAYER_POP_START":
            break;
            case "RTC_CONNECTION_FLAGS":
            break;
            case "handleToggleVideo":
            break;
            case "ideograph_advantage":
            break;
            case "getAppHardwareAccelerationEnabled":
            break;
            case "ActionSheetHeaderPressableText":
            break;
            case "Pressable":
            break;
            case "ex":
            break;
            case "ext":
            break;
            case "isReduceMotionEnabled":
            break;
            case "AccessibilityFocusView":
            break;
            case "V":
            break;
            case "W":
            break;
            case "ir":
            break;
            case "re":
            break;
            case "reType":
            break;
            case "pe":
            break;
            case "maxDynamicContentSize":
            break;
            case "ACTION_SHEET_START_HEIGHT_RATIO":
            break;
            case "STAR":
            break;
            case "START":
            break;
            case "IO":
            break;
            case "__":
            break;
            case "__c":
            break;
            case "cl":
            break;
            case "clo":
            break;
            case "lo":
            break;
            case "los":
            break;
            case "os":
            break;
            case "su":
            break;
            case "sur":
            break;
            case "ur":
            break;
            case "isExpanded":
            break;
            case "__data__":
            break;
            case "_d":
            break;
            case "_data":
            break;
            case "__REMOTEDEV__":
            break;
            case "__DISCORD_WINDOW_ID":
            break;
            case "__iteratees__":
            break;
            case "_iter":
            break;
            case "_iterate":
            break;
            case "iteratee":
            break;
            case "tee":
            break;
            case "__SENTRY_RELEASE__":
            break;
            case "SENTRY_RELEASE":
            break;
            case "__INTERNAL_SLOT_MAP__":
            break;
            case "__BUNDLE_START_TIME__":
            break;
            case "__e":
            break;
            case "Mo":
            break;
            case "ModuleNotFoundError":
            break;
            case "du":
            break;
            case "KeyRingSpotIllustration":
            break;
            case "__i":
            break;
            case "__init":
            break;
            case "_i":
            break;
            case "_init":
            break;
            case "init":
            break;
            case "ni":
            break;
            case "nit":
            break;
            case "ta":
            break;
            case "__filtered__":
            break;
            case "lte":
            break;
            case "__SENTRY_DEBUG__":
            break;
            case "__FORMATJS_LISTFORMAT_DATA__":
            break;
            case "TJS":
            break;
            case "pa":
            break;
            case "pack":
            break;
            case "package":
            break;
            case "ack":
            break;
            case "ka":
            break;
            case "age":
            break;
            case "ge":
            break;
            case "ger":
            break;
            case "_a":
            break;
            case "as":
            break;
            case "ass":
            break;
            case "asset":
            break;
            case "assetDark":
            break;
            case "ss":
            break;
            case "_w":
            break;
            case "wo":
            break;
            case "work":
            break;
            case "worklet":
            break;
            case "kl":
            break;
            case "let":
            break;
            case "Hash":
            break;
            case "sh":
            break;
            case "flag_de":
            break;
            case "de":
            break;
            case "desired":
            break;
            case "es":
            break;
            case "si":
            break;
            case "sir":
            break;
            case "red":
            break;
            case "redBoxV2Android":
            break;
            case "cancelBubble":
            break;
            case "Teal":
            break;
            case "allowed_mentions":
            break;
            case "mentions":
            break;
            case "mentionsCount":
            break;
            case "PREMIUM_GIFT_YEAR_TIER_1":
            break;
            case "dist":
            break;
            case "distance":
            break;
            case "distanceAttenuationEnabled":
            break;
            case "sta":
            break;
            case "tan":
            break;
            case "ce":
            break;
            case "access":
            break;
            case "accessibilityLabelCalendarFormat":
            break;
            case "cc":
            break;
            case "bi":
            break;
            case "bil":
            break;
            case "lit":
            break;
            case "Label":
            break;
            case "ab":
            break;
            case "abe":
            break;
            case "bel":
            break;
            case "isCreatingThread":
            break;
            case "QUEST_BAR_V2":
            break;
            case "Role":
            break;
            case "RoleFlags":
            break;
            case "scrollToQuestId":
            break;
            case "accessibleDismiss":
            break;
            case "accessibleDismissStyle":
            break;
            case "ble":
            break;
            case "leg_tone3":
            break;
            case "FAB_BUTTON_SIZE":
            break;
            case "minWidth":
            break;
            case "pad":
            break;
            case "ad":
            break;
            case "adding":
            break;
            case "dd":
            break;
            case "din":
            break;
            case "z":
            break;
            case "tal":
            break;
            case "collapseText":
            break;
            case "paddingVertical":
            break;
            case "PLUM_4":
            break;
            case "ali":
            break;
            case "align":
            break;
            case "alignItemsAtEnd":
            break;
            case "alignItemsAtEndPaddingEnabled":
            break;
            case "ig":
            break;
            case "em":
            break;
            case "ms":
            break;
            case "available_regions":
            break;
            case "_regions":
            break;
            case "region":
            break;
            case "regions":
            break;
            case "showLocalTime":
            break;
            case "woman_in_motorized_wheelchair_facing_right_tone1":
            break;
            case "man_in_motorized_wheelchair_facing_right_tone1":
            break;
            case "family_adult_child":
            break;
            case "family_adult_child_child":
            break;
            case "childButton":
            break;
            case "childButtonText":
            break;
            case "externalLinkIcon":
            break;
            case "containerSelected":
            break;
            case "GuildEntityDao":
            break;
            case "EntityDao":
            break;
            case "Dao":
            break;
            case "replaceCorrectMessageParams":
            break;
            case "app":
            break;
            case "application":
            break;
            case "applicationIdToGuildIds":
            break;
            case "pl":
            break;
            case "ca":
            break;
            case "cat":
            break;
            case "tio":
            break;
            case "io":
            break;
            case "showGuildTag":
            break;
            case "GuildTagBadgeSize":
            break;
            case "_applyCombination":
            break;
            case "ly":
            break;
            case "ios_backgroundColor":
            break;
            case "ba":
            break;
            case "back":
            break;
            case "background":
            break;
            case "backgroundColorGradient":
            break;
            case "kg":
            break;
            case "gr":
            break;
            case "und":
            break;
            case "Color":
            break;
            case "ACTIVITY_LAUNCH_UNKNOWN_CHANNEL":
            break;
            case "UNKNOWN":
            break;
            case "UNKNOWN_CHANNEL":
            break;
            case "DISCORD_CONSENT":
            break;
            case "FormSubmitErrorType":
            break;
            case "person_walking_facing_right_tone4":
            break;
            case "optionId":
            break;
            case "_bodyArrayBuffer":
            break;
            case "dy":
            break;
            case "safeAreaRight":
            break;
            case "bor":
            break;
            case "border":
            break;
            case "order":
            break;
            case "der":
            break;
            case "Radius":
            break;
            case "iu":
            break;
            case "buttonPill":
            break;
            case "overflow_bottom":
            break;
            case "_bottom":
            break;
            case "bot":
            break;
            case "bottom-right":
            break;
            case "ott":
            break;
            case "tom":
            break;
            case "right shift":
            break;
            case "shiftLeft":
            break;
            case "InterceptingGestureDetector":
            break;
            case "StreamingTier1SmallBadge":
            break;
            case "PREMIUM_UPSELL_FILE_UPLOAD":
            break;
            case "FILE_UPLOAD_250_MB":
            break;
            case "channelInfo":
            break;
            case "channelInfoContainer":
            break;
            case "DynamicallyInjectedByGestureHandler":
            break;
            case "cal":
            break;
            case "all":
            break;
            case "ll":
            break;
            case "_channelId":
            break;
            case "ch":
            break;
            case "cha":
            break;
            case "ha":
            break;
            case "ann":
            break;
            case "nn":
            break;
            case "isSelf":
            break;
            case "isSelfDeaf":
            break;
            case "afk_channel_id":
            break;
            case "_id":
            break;
            case "family_adult_adult_child":
            break;
            case "family_adult_adult_child_child":
            break;
            case "_children":
            break;
            case "_childrenToCellKey":
            break;
            case "child":
            break;
            case "hi":
            break;
            case "dr":
            break;
            case "ren":
            break;
            case "_longestInteractionMap":
            break;
            case "applicationTopWrapperScrollView":
            break;
            case "onTop":
            break;
            case "wMWyci":
            break;
            case "ix8XIj":
            break;
            case "navigationBarColor":
            break;
            case "uni":
            break;
            case "Version":
            break;
            case "burst_colors":
            break;
            case "col":
            break;
            case "ors":
            break;
            case "rs":
            break;
            case "addUserId":
            break;
            case "disableGuildSelect":
            break;
            case "GuildSelectDefaultIcon":
            break;
            case "concatSettings":
            break;
            case "subtitleWrapper":
            break;
            case "titleWrapper":
            break;
            case "titleWrapperLegacy":
            break;
            case "LegacyFlatList":
            break;
            case "ReactionsSpotIllustration":
            break;
            case "_socketId":
            break;
            case "socketId":
            break;
            case "dims":
            break;
            case "slot_machine":
            break;
            case "gregory":
            break;
            case "$constructor":
            break;
            case "const":
            break;
            case "constr":
            break;
            case "construct":
            break;
            case "ons":
            break;
            case "str":
            break;
            case "ru":
            break;
            case "tor":
            break;
            case "windowLength":
            break;
            case "_container":
            break;
            case "contain":
            break;
            case "containerBorderColor":
            break;
            case "ai":
            break;
            case "ner":
            break;
            case "toy":
            break;
            case "getDefaultEnvironment":
            break;
            case "trackMobileForumComposerDismissed":
            break;
            case "creative_content":
            break;
            case "_contentAvailable":
            break;
            case "ten":
            break;
            case "tent":
            break;
            case "__wrapped__":
            break;
            case "__context":
            break;
            case "_context":
            break;
            case "contextBarRow":
            break;
            case "withAffinitySuggestions":
            break;
            case "AffinitySuggestions":
            break;
            case "ffi":
              origin3 = code.origin;
              str2 = "";
              if (origin3) {
                diff = origin3.length - 1;
                items5 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                hasItem = items5.includes(origin3[diff]);
                str = "\u0568";
                if (hasItem) {
                  str = "\u0576";
                }
                str2 = origin3 + str;
              }
              _HermesInternal = HermesInternal;
              combined3 = "\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 " + str2 + "-\u0578\u0582\u0574";
              return combined3;
            case "ug":
            break;
            case "allowRTL":
            break;
            case "deprecate":
            break;
            case "deprecated":
            break;
            case "deprecatedCFWSNearAt":
            break;
            case "enableAppStartTracking":
            break;
            case "getHighestActiveScreenIndex":
            break;
            case "expiresMonth":
            break;
            case "AccountAgeTier10LargeBadge":
            break;
            case "cou":
            break;
            case "Badge":
            break;
            case "getGuildDiscoverySplashSource":
            break;
            case "ComponentsConfiguration":
            break;
            case "getColorLightnessAdjusted":
            break;
            case "cr":
            break;
            case "les":
            break;
            case "message_type":
            break;
            case "_$esjava$current":
            break;
            case "cu":
            break;
            case "currentApp":
            break;
            case "currentAppIcon":
            break;
            case "containerIndex":
            break;
            case "expandEventProperties":
            break;
            case "G9fGlP":
            break;
            case "PARENTAL_CONTROLS_DIRECT_MESSAGES":
            break;
            case "getUTCMilliseconds":
            break;
            case "secondsInQuarter":
            break;
            case "_$esjava$cursor":
            break;
            case "cursorColor":
            break;
            case "so":
            break;
            case "mur":
            break;
            case "murmur":
            break;
            case "_clientSdkMetadata":
            break;
            case "MetadataFields":
            break;
            case "tada":
            break;
            case "da":
            break;
            case "dddd":
            break;
            case "HIDE_TOOLTIP":
            break;
            case "__defaultLocale":
            break;
            case "def":
            break;
            case "defaultLocale":
            break;
            case "fa":
            break;
            case "au":
            break;
            case "lt":
            break;
            case "localeIdentifier":
            break;
            case "define":
            break;
            case "efi":
            break;
            case "fi":
            break;
            case "fin":
            break;
            case "undelete":
            break;
            case "del":
            break;
            case "deleteAllExcept":
            break;
            case "ele":
            break;
            case "ptt_start":
            break;
            case "_startMs":
            break;
            case "startMs":
            break;
            case "shouldUseAnimatedObjectForTransform":
            break;
            case "formTitle":
            break;
            case "getTryItOutChanges":
            break;
            case "GUILD_PROFILE_UPDATE_VISIBILITY_SUCCESS":
            break;
            case "avatar_description":
            break;
            case "_description":
            break;
            case "desc":
            break;
            case "descriptionContainer":
            break;
            case "descriptionContainerStyle":
            break;
            case "esc":
            break;
            case "sc":
            break;
            case "scr":
            break;
            case "script":
            break;
            case "cri":
            break;
            case "pt":
            break;
            case "inputHint":
            break;
            case "interstitial":
            break;
            case "aria-disabled":
            break;
            case "disable":
            break;
            case "disabledContainerStyle":
            break;
            case "isa":
            break;
            case "sab":
            break;
            case "led":
            break;
            case "payment_id":
            break;
            case "_dispatch":
            break;
            case "_dispatchFrame":
            break;
            case "dispatchFrameUrl":
            break;
            case "spa":
            break;
            case "pat":
            break;
            case "patch":
            break;
            case "tc":
            break;
            case "_debouncedFlush":
            break;
            case "debounce":
            break;
            case "RewardsMouseSpotIllustration":
            break;
            case "savedDependencies":
            break;
            case "renderActivityInstanceEmbed":
            break;
            case "time_to_full_display":
            break;
            case "_displayName":
            break;
            case "display":
            break;
            case "displayNameAccessibilityHint":
            break;
            case "spl":
            break;
            case "play":
            break;
            case "la":
            break;
            case "am":
            break;
            case "interestedIcon":
            break;
            case "contentStyle":
            break;
            case "contentStyles":
            break;
            case "supportsHookSoundshare":
            break;
            case "SoundshareTrace":
            break;
            case "race":
            break;
            case "character":
            break;
            case "characterOrders":
            break;
            case "showStatus":
            break;
            case "useCanUseGuildSpace":
            break;
            case "getGuildFolderMenuItems":
            break;
            case "MenuItem":
            break;
            case "WHATS_ON_YOUR_MIND":
            break;
            case "INDIE":
            break;
            case "IE_PROTO":
            break;
            case "PROTO_THEME_MAP_MOBILE":
            break;
            case "PROTO_THEME_MAP_MOBILE_REFRESH":
            break;
            case "MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK":
            break;
            case "mmh":
            break;
            case "getNextAssetPage":
            break;
            case "PageUp":
            break;
            case "ageUpper":
            break;
            case "performAutocomplete":
            break;
            case "completeNewMemberAction":
            break;
            case "NewMemberActionTypes":
            break;
            case "english":
            break;
            case "englishName":
            break;
            case "viewerData":
            break;
            case "div":
            break;
            case "diversityChildren":
            break;
            case "ve":
            break;
            case "ver":
            break;
            case "renderCommunicationDisabled":
            break;
            case "LhlgY9":
            break;
            case "toExpPos":
            break;
            case "do":
            break;
            case "don":
            break;
            case "doneButton":
            break;
            case "doneButtonContainer":
            break;
            case "__duration":
            break;
            case "_duration":
            break;
            case "dur":
            break;
            case "durationContainer":
            break;
            case "ura":
            break;
            case "rat":
            break;
            case "ratio":
            break;
            case "assetFormat":
            break;
            case "app_hardware_acceleration_enabled":
            break;
            case "_enabled":
            break;
            case "_enabledPaymentMethods":
            break;
            case "enable":
            break;
            case "shouldShowBlurredThumbnailImage":
            break;
            case "getBadgeName":
            break;
            case "@braintree/extended-promise":
            break;
            case "extend":
            break;
            case "extended":
            break;
            case "ended":
            break;
            case "nd":
            break;
            case "promise":
            break;
            case "promiseProcessor":
            break;
            case "handleTextMessageFailed":
            break;
            case "enum":
            break;
            case "nu":
            break;
            case "num":
            break;
            case "mer":
            break;
            case "era":
            break;
            case "referrerPolicy":
            break;
            case "getSpatialCapabilities":
            break;
            case "setIncomingCallActive":
            break;
            case "beforeAddRecordingEvent":
            break;
            case "../../../lib/braintree-error":
            break;
            case "../../lib/braintree-error":
            break;
            case "../lib/braintree-error":
            break;
            case "brain":
            break;
            case "braintree":
            break;
            case "tre":
            break;
            case "tree":
            break;
            case "ee":
            break;
            case "err":
            break;
            case "errorApplyingMediaFilterSettings":
            break;
            case "FilterSettingsGraph":
            break;
            case "phoenix":
            break;
            case "googleAuthorizationFingerprint":
            break;
            case "printer":
            break;
            case "exp":
            break;
            case "expo":
            break;
            case "port":
            break;
            case "rtsState":
            break;
            case "ts":
            break;
            case "_flushOutcomes":
            break;
            case "fil":
            break;
            case "file":
            break;
            case "F":
            break;
            case "Finish":
            break;
            case "he":
            break;
            case "SocialMediaSpotIllustration":
            break;
            case "APP_LAUNCH_COMPLETED":
            break;
            case "COMPLETED":
            break;
            case "COMPLETED_HOME_ACTIONS":
            break;
            case "NSUserDefaultsBridge":
            break;
            case "[[calendar]]":
            break;
            case "calendar":
            break;
            case "EntitlementTenantFulfillmentStatus":
            break;
            case "ill":
            break;
            case "__findAnimatedPropsNodes":
            break;
            case "flag_bs":
            break;
            case "MIN_SCHEDULE_TIME_INTO_FUTURE_SECONDS":
            break;
            case "system_channel_flags":
            break;
            case "channel_flags":
            break;
            case "_flags":
            break;
            case "flag":
            break;
            case "flags_":
            break;
            case "lag":
            break;
            case "gs":
            break;
            case "_oldestUnreadMessageId":
            break;
            case "oldestUnreadMessageId":
            break;
            case "oldestUnreadMessageIdStale":
            break;
            case "USER_INTERACTION":
            break;
            case "INTERACTION_MESSAGE_COMPONENT":
            break;
            case "MESSAGE_COMPONENT":
            break;
            case "COMPONENT_PLAYGROUND":
            break;
            case "PLAYGROUND":
            break;
            case "ROUND_CEIL":
            break;
            case "ILLO_PURPLE_40":
            break;
            case "getEntitlementsForGuild":
            break;
            case "fo":
            break;
            case "for":
            break;
            case "forEachChannel":
            break;
            case "getGuildFavorites":
            break;
            case "DiscountsMegaphoneSpotIllustration":
            break;
            case "counts":
            break;
            case "ga":
            break;
            case "pho":
            break;
            case "phone":
            break;
            case "$ZodCheckMinSize":
            break;
            case "__reanimatedModuleProxy":
            break;
            case "getChannelA11yHint":
            break;
            case "Channel":
            break;
            case "interpolationIndex":
            break;
            case "exploding_head":
            break;
            case "headMetaAuthorship":
            break;
            case "shippingAddress":
            break;
            case "shippingAddressOverride":
            break;
            case "scopes":
            break;
            case "scopesContainer":
            break;
            case "getCurrent":
            break;
            case "getCurrentUserActiveStream":
            break;
            case "U":
            break;
            case "Use":
            break;
            case "User":
            break;
            case "ser":
            break;
            case "StreamVolumeItem":
            break;
            case "_getGuildState":
            break;
            case "getGuildState":
            break;
            case "G":
            break;
            case "Guild":
            break;
            case "_guildId":
            break;
            case "gu":
            break;
            case "current_guild_id":
            break;
            case "getContextState":
            break;
            case "getDismissedGuildIds":
            break;
            case "METHOD_CALLED_AFTER_TEARDOWN":
            break;
            case "NO_SETTINGS":
            break;
            case "SETTINGS_CLIENT_THEMES":
            break;
            case "CLIENT_THEMES_SPARKLE_PREVIEW":
            break;
            case "PREVIEW_SPAM_MESSAGE":
            break;
            case "hasDiversity":
            break;
            case "Parent":
            break;
            case "ParentalControlledDefaultGuildsRestrictedV2":
            break;
            case "ar":
            break;
            case "DefaultGuildsRestricted":
            break;
            case "DefaultGuildsRestrictedV2":
            break;
            case "resolutionHeight":
            break;
            case "getRestrictedScheduleNotificationTitle":
            break;
            case "skipLocalFetch":
            break;
            case "anchorScroll":
            break;
            case "avatar_hash":
            break;
            case "_hash":
            break;
            case "hashKey":
            break;
            case "bhd":
            break;
            case "IN_APP_GUILD_TEMPLATES_MODAL_KEY":
            break;
            case "GUILD_TEMPLATE":
            break;
            case "GUILD_TEMPLATES":
            break;
            case "HOCKEY":
            break;
            case "invalid_type":
            break;
            case "computeLurkerPermissionsAllowList":
            break;
            case "_header":
            break;
            case "_headerLayoutYs":
            break;
            case "head":
            break;
            case "ade":
            break;
            case "YsCuyF":
            break;
            case "FALSE_OPTION_NAME":
            break;
            case "OPTION_NAME_CONTAINS":
            break;
            case "CONTAINS_SELF_HARM_CONTENT":
            break;
            case "SELF_HARM":
            break;
            case "SELF_HARM_CONTENT":
            break;
            case "CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE":
            break;
            case "E2EE_STREAM_VERIFICATION_SHARE_CLICKED":
            break;
            case "CHECKPOINT_PERSONA_NINE_BACKGROUND_OVERLAY":
            break;
            case "NINE":
            break;
            case "OVERLAY_OOP_WELCOME_BACKGROUND_NUX":
            break;
            case "XBOX_URL_BASE":
            break;
            case "getEmbeddedActivitiesForLocationIncludingHidden":
            break;
            case "endImportTime":
              origin3 = code.origin;
              str2 = "";
              if (origin3) {
                diff = origin3.length - 1;
                items5 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                hasItem = items5.includes(origin3[diff]);
                str = "\u0568";
                if (hasItem) {
                  str = "\u0576";
                }
                str2 = origin3 + str;
              }
              _HermesInternal = HermesInternal;
              combined3 = "\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 " + str2 + "-\u0578\u0582\u0574";
              return combined3;
            case "selectedRewardText":
            break;
            case "getRNSentryOnDrawReporter":
            break;
            case "tRNS":
            break;
            case "RNSentry":
            break;
            case "Sentry":
            break;
            case "entry":
            break;
            case "openStickerPickerToPackId":
            break;
            case "player_height":
            break;
            case "hei":
            break;
            case "heightAverageWindow":
            break;
            case "eight":
            break;
            case "ht":
            break;
            case "withMutualFriends":
            break;
            case "withMutualFriendsCount":
            break;
            case "setFingerprint":
            break;
            case "getActiveLibraryApplication":
            break;
            case "LibraryApplicationFlags":
            break;
            case "ApplicationFlags":
            break;
            case "FadeOutRight":
            break;
            case "http":
            break;
            case "oc":
            break;
            case "oca":
            break;
            case "NonConvert":
            break;
            case "Convert":
            break;
            case "ConvertEmoticons":
            break;
            case "mot":
            break;
            case "icons":
            break;
            case "parseUnicodeLanguageId":
            break;
            case "_include":
            break;
            case "inc":
            break;
            case "include":
            break;
            case "includesBounties":
            break;
            case "lu":
            break;
            case "lud":
            break;
            case "Bounties Scroll Indicator":
            break;
            case "origin_pane":
            break;
            case "registerTimerPolyfills":
            break;
            case "getDurationStats":
            break;
            case "QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL":
            break;
            case "AuditLogActions":
            break;
            case "DiscordSupergraphicLogo":
            break;
            case "Super":
            break;
            case "graph":
            break;
            case "graphic":
            break;
            case "__internalInstanceHandle":
            break;
            case "_int":
            break;
            case "_internalInstanceHandle":
            break;
            case "internal":
            break;
            case "internalInstanceHandle":
            break;
            case "base64StringFromByteArray":
            break;
            case "indexOfSingleActiveTouch":
            break;
            case "TouchPad":
            break;
            case "deleteKeyFromRecyclePool":
            break;
            case "isPerformanceEventTiming":
            break;
            case "PerformanceEventTiming":
            break;
            case "PerformanceEventTiming_public":
            break;
            case "publicKey":
            break;
            case "publicKeyFingerprint":
            break;
            case "int":
            break;
            case "intlMessage":
            break;
            case "tl":
            break;
            case "getAppIntentScheme":
            break;
            case "isAnyVoicePanelOpen":
            break;
            case "nativePhoneIntegrationEnabled":
            break;
            case "AUTO_MODERATION_EXEMPT_CHANNELS":
            break;
            case "CHANNELS_DEFAULT":
            break;
            case "DEFAULT_APP_ENTRY_KEY":
            break;
            case "APP_ENTRY_KEYS":
            break;
            case "activity_items":
            break;
            case "_items":
            break;
            case "_itemsForType":
            break;
            case "item":
            break;
            case "activeUnjoinedThreads":
            break;
            case "jo":
            break;
            case "js":
            break;
            case "xs":
            break;
            case "GUILD_SOUNDBOARD":
            break;
            case "GUILD_SOUNDBOARD_SOUND":
            break;
            case "GUILD_SOUNDBOARD_SOUNDS":
            break;
            case "isRendered":
            break;
            case "gradientOverlay":
            break;
            case "yOffset":
            break;
            case "hasInputText":
            break;
            case "targetHeight":
            break;
            case "getHeight":
            break;
            case "jus":
            break;
            case "justify":
            break;
            case "if":
            break;
            case "Content":
            break;
            case "setCurrentAnalyticsStep":
            break;
            case "PasskeysSpotIllustration":
            break;
            case "ke":
            break;
            case "isPrioritySpeaker":
            break;
            case "toSearchListUserItem":
            break;
            case "embedded_activity_location_kind":
            break;
            case "ki":
            break;
            case "kin":
            break;
            case "Backspace":
            break;
            case "BackspaceIcon":
            break;
            case "aria-label":
            break;
            case "aria-labelledby":
            break;
            case "lab":
            break;
            case "byAppEntry":
            break;
            case "tryItOutAvatarDecoration":
            break;
            case "frameY":
            break;
            case "Buf8":
            break;
            case "f8wNDl":
            break;
            case "DlcqlU":
            break;
            case "lcq":
            break;
            case "trialOffer":
            break;
            case "arrow_left":
            break;
            case "leftActions":
            break;
            case "topUserActivities":
            break;
            case "_$esjava$I_length":
            break;
            case "I_length":
            break;
            case "_l":
            break;
            case "_length":
            break;
            case "len":
            break;
            case "lengthComputable":
            break;
            case "analyticsLoadId":
            break;
            case "disableIntegration":
            break;
            case "onReject":
            break;
            case "onRejectSuccess":
            break;
            case "load":
            break;
            case "J":
            break;
            case "setCurrentGuild":
            break;
            case "POLL_EXPIRE":
            break;
            case "EXPIRE_BEHAVIOR":
            break;
            case "upgradeTransaction":
            break;
            case "action_location":
            break;
            case "loc":
            break;
            case "locationAnalyticsObject":
            break;
            case "AnalyticsObjects":
            break;
            case "__mapperRegistry":
            break;
            case "_map":
            break;
            case "mar":
            break;
            case "margin":
            break;
            case "arg":
            break;
            case "gi":
            break;
            case "heap_max":
            break;
            case "_max":
            break;
            case "_maxListeners":
            break;
            case "maxListeners":
            break;
            case "shouldShowRoleOnName":
            break;
            case "__memo":
            break;
            case "mo":
            break;
            case "messageIds":
            break;
            case "sag":
            break;
            case "_$esjava$method":
            break;
            case "_$esjava$methodobject":
            break;
            case "ho":
            break;
            case "hod":
            break;
            case "dob":
            break;
            case "obj":
            break;
            case "object":
            break;
            case "objectAssign":
            break;
            case "alwaysBounceVertical":
            break;
            case "appearance":
            break;
            case "ActionStatusSubLabel":
            break;
            case "onStatus":
            break;
            case "Status":
            break;
            case "SubLabel":
            break;
            case "lineHeight":
            break;
            case "SvgFromXml":
            break;
            case "ml-Mlym":
            break;
            case "Omnibutton":
            break;
            case "OmnibuttonCoachmarkRive":
            break;
            case "mni":
            break;
            case "nib":
            break;
            case "button":
            break;
            case "PLAY_SOUNDBOARD_SOUND":
            break;
            case "SOUNDBOARD_SOUND_GUILD_DATA":
            break;
            case "Ambient":
            break;
            case "Ambient_Lightmode":
            break;
            case "bie":
            break;
            case "tm":
            break;
            case "mod":
            break;
            case "modeOptions":
            break;
            case "edges":
            break;
            case "edgesLimit":
            break;
            case "contact_names":
            break;
            case "nam":
            break;
            case "namesLegacy":
            break;
            case "LegacyBaseButton":
            break;
            case "BaseButton":
            break;
            case "getEmojiPopoutData":
            break;
            case "fullRestore":
            break;
            case "storeCountry":
            break;
            case "couple_with_heart_woman_woman_tone3_tone2":
            break;
            case "getMentionChannelIds":
            break;
            case "giftCount":
            break;
            case "track_next":
            break;
            case "_nextChannelId":
            break;
            case "didSendMessage":
            break;
            case "refreshButtonAlignment":
            break;
            case "Alignment":
            break;
            case "$ZodUnknown":
            break;
            case "ZodUnknown":
            break;
            case "Unknown":
            break;
            case "kn":
            break;
            case "$i":
            break;
            case "$input":
            break;
            case "inp":
            break;
            case "input":
            break;
            case "put":
            break;
            case "last4":
            break;
            case "cardholderName":
            break;
            case "expirationMonth":
            break;
            case "expirationYear":
            break;
            case "binData":
            break;
            case "themedChatInput":
            break;
            case "ChatInputExpressionPressed":
            break;
            case "res":
            break;
            case "setTermsAccepted":
            break;
            case "_opacityActive":
            break;
            case "opa":
            break;
            case "city":
            break;
            case "emitPresenceUpdate":
            break;
            case "dateString":
            break;
            case "gift_info_options":
            break;
            case "_options":
            break;
            case "opt":
            break;
            case "option":
            break;
            case "_parent":
            break;
            case "_parentSpanId":
            break;
            case "par":
            break;
            case "parentSpan":
            break;
            case "parentSpanId":
            break;
            case "diffMinutes":
            break;
            case "preview_asset_paths":
            break;
            case "path":
            break;
            case "currentUsernameInvalid":
            break;
            case "InvalidRegexPatternError":
            break;
            case "Pattern":
            break;
            case "cacheComposition":
            break;
            case "positionComponentInternal":
            break;
            case "_props":
            break;
            case "_propsStack":
            break;
            case "pr":
            break;
            case "pro":
            break;
            case "prop":
            break;
            case "propsStack":
            break;
            case "ops":
            break;
            case "ps":
            break;
            case "StackRouter":
            break;
            case "outerRow":
            break;
            case "woman_and_man_holding_hands_tone1":
            break;
            case "woman_and_man_holding_hands_tone1_tone2":
            break;
            case "webpBlob":
            break;
            case "FePointLight":
            break;
            case "LightSpeedIn":
            break;
            case "LightSpeedInData":
            break;
            case "proto":
            break;
            case "prototypeInitialized":
            break;
            case "getCurrentScope":
            break;
            case "openForwardModal":
            break;
            case "_pushCells":
            break;
            case "pus":
            break;
            case "INTERNAL_EMPLOYEE_ONLY":
            break;
            case "rad":
            break;
            case "ii":
            break;
            case "getRRule":
            break;
            case "RRule":
            break;
            case "DrawerActions":
            break;
            case "aw":
            break;
            case "awe":
            break;
            case "getDefaultGuildThemePreference":
            break;
            case "DefaultGuildThemePreference":
            break;
            case "$ZodPrefault":
            break;
            case "ZodPrefault":
            break;
            case "reg":
            break;
            case "register":
            break;
            case "recipients":
            break;
            case "reject":
            break;
            case "eject":
            break;
            case "ErrorNumber":
            break;
            case "__replaceAnimatedNodeWithValues":
            break;
            case "place":
            break;
            case "lac":
            break;
            case "ace":
            break;
            case "useActualStageSpeakerCount":
            break;
            case "RNCClipboard":
            break;
            case "isCamera":
            break;
            case "_unchangedStyles":
            break;
            case "changed":
            break;
            case "kiss_person_person_medium_dark_skin_tone_medium_light_skin_tone":
            break;
            case "_resolve":
            break;
            case "_resolveEmpty":
            break;
            case "sol":
            break;
            case "AppsFlyer":
            break;
            case "_$esjava$result":
            break;
            case "resultCount":
            break;
            case "sul":
            break;
            case "US_BANK_ACCOUNT_OPTION_REQUIRED":
            break;
            case "welcomeMessage":
            break;
            case "getBrightness":
            break;
            case "BrightnessDown":
            break;
            case "ownerNode":
            break;
            case "dequeue":
            break;
            case "dequeueBlockWarning":
            break;
            case "BlockWarningEngagements":
            break;
            case "gem":
            break;
            case "USER_VERIFICATION_LENGTH":
            break;
            case "HUB_STUDY":
            break;
            case "HUB_STUDY_ROOM":
            break;
            case "HUB_STUDY_ROOM_NOTICE":
            break;
            case "STUDY":
            break;
            case "EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW":
            break;
            case "FLOW_ENDPOINTS":
            break;
            case "SUB_COMMAND":
            break;
            case "SUB_COMMAND_GROUP":
            break;
            case "SEARCH_TABS_DMS":
              origin3 = code.origin;
              str2 = "";
              if (origin3) {
                diff = origin3.length - 1;
                items5 = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
                hasItem = items5.includes(origin3[diff]);
                str = "\u0568";
                if (hasItem) {
                  str = "\u0576";
                }
                str2 = origin3 + str;
              }
              _HermesInternal = HermesInternal;
              combined3 = "\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 " + str2 + "-\u0578\u0582\u0574";
              return combined3;
            case "addFrame":
            break;
            case "run":
            break;
            case "actionStatusAccessibilityLabel":
            break;
            case "scale":
            break;
            case "ale":
            break;
            case "shape":
            break;
            case "hap":
            break;
            case "ape":
            break;
            case "pes":
            break;
            case "ariaDescription":
            break;
            case "stringifyUrl":
            break;
            case "humanizeStatus":
            break;
            case "useCanManageChannel":
            break;
            case "minUserInstallCommandCount":
            break;
            case "sku":
            break;
            case "skuIds":
            break;
            case "fromByteArray":
            break;
            case "sl":
            break;
            case "sliceBody":
            break;
            case "ice":
            break;
            case "FORUM_THREAD_CREATED":
            break;
            case "THREAD_CREATE":
            break;
            case "THREAD_CREATED":
            break;
            case "xnr":
            break;
            case "OBSIDIAN":
            break;
            case "ANDROID_NOTIFICATION_VIBRATIONS":
            break;
            case "BR":
            break;
            case "BRA":
            break;
            case "NSFW_CHANNEL_UNDERAGE":
            break;
            case "AGE_VERIFICATION_ID_FAILED":
            break;
            case "ID_FAILED":
            break;
            case "FAILED_TO_MENTION_SOME_ROLES_IN_THREAD":
            break;
            case "THREAD_CREATION":
            break;
            case "THREAD_CREATION_STARTED":
            break;
            case "isPerformanceResourceTiming":
            break;
            case "PerformanceResourceTiming":
            break;
            case "PerformanceResourceTiming_public":
            break;
            case "sou":
            break;
            case "public_flags":
            break;
            case "newFlowAnalyticsLoadId":
            break;
            case "_splitColorsIntoChannels":
            break;
            case "MMlhsr":
            break;
            case "sr-Cyrl":
            break;
            case "sr-Cyrl-BA":
            break;
            case "BATTLENET_MIGRATION":
            break;
            case "MIGRATION_DESTINATION_ORIGIN":
            break;
            case "INTERNAL_ERROR":
            break;
            case "ClipsRecordingRestartNeeded":
            break;
            case "star":
            break;
            case "art":
            break;
            case "client_app_state":
            break;
            case "app_state":
            break;
            case "_state":
            break;
            case "stat":
            break;
            case "stateActionComplete":
            break;
            case "woman_climbing_tone3":
            break;
            case "man_climbing_tone3":
            break;
            case "appeal_status":
            break;
            case "_status":
            break;
            case "statusAllowsPerks":
            break;
            case "maxToRenderPerBatch":
            break;
            case "maxToRenderPerBatchOrDefault":
            break;
            case "bubblingEventTypes":
            break;
            case "_$esjava$s":
            break;
            case "_$esjava$substring_i":
            break;
            case "sub":
            break;
            case "subs":
            break;
            case "substr":
            break;
            case "substring":
            break;
            case "bs":
            break;
            case "bst":
            break;
            case "string_id":
            break;
            case "toExpNeg":
            break;
            case "DEPRECATED_style":
            break;
            case "_style":
            break;
            case "sty":
            break;
            case "styleAttr":
            break;
            case "surrogate":
            break;
            case "surrogatesFrame":
            break;
            case "rog":
            break;
            case "gat":
            break;
            case "gate":
            break;
            case "isStickerPackAnimated":
            break;
            case "AnimatedStartStagePrompt":
            break;
            case "StartStagePrompt":
            break;
            case "Prompt":
            break;
            case "canSend":
            break;
            case "canSendGuildOfficialMessages":
            break;
            case "FastestListPropsPlaceholderType":
            break;
            case "est":
            break;
            case "person_walking_facing_right_tone2":
            break;
            case "fetchChangelog":
            break;
            case "fetchChangelogConfig":
            break;
            case "ignore_cache":
            break;
            case "_cache":
            break;
            case "_cacheAdd":
            break;
            case "cache":
            break;
            case "AppealIngestionSections":
            break;
            case "epochAuthenticator":
            break;
            case "AuthenticatorType":
            break;
            case "the":
            break;
            case "people_holding_hands_medium_skin_tone_medium_light_skin_tone":
            break;
            case "shareURI":
            break;
            case "RIOT":
            break;
            case "RIOT_CONNECTION_DEPRECATION":
            break;
            case "RIOT_CONNECTION_DEPRECATION_ADMIN":
            break;
            case "IOT":
            break;
            case "ACTIVITY_LAUNCH_INVALID_USER_NO_ACCESS_TO_ACTIVITY":
            break;
            case "ACTIVITY_APPLICATION_HOST":
            break;
            case "APPLICATION":
            break;
            case "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED":
            break;
            case "SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES":
            break;
            case "TEXT_CHANNEL_TYPES":
            break;
            case "EntitlementFeatureNames":
            break;
            case "setPreventRemove":
            break;
            case "moveInto":
            break;
            case "ja":
            break;
            case "java":
            break;
            case "av":
            break;
            case "$":
            break;
            case "maxReturnedEndOffset":
            break;
            case "setBigUint64":
            break;
            case "int64toString":
            break;
            case "supportsInAppBrowser":
            break;
            case "BrowserStop":
            break;
            case "Stop":
            break;
            case "StopWatch":
            break;
            case "WatchdogTimeout":
            break;
            case "dog":
            break;
            case "couple_with_heart_woman_woman_medium_skin_tone_medium_dark_skin_tone":
            break;
            case "next_track":
            break;
            case "_trackIfSessionMetadataExists":
            break;
            case "tra":
            break;
            case "rac":
            break;
            case "shouldUseMobileWebRedirectCheckout":
            break;
            case "MobileWebRedirectCheckoutDeepLinkQueryKeys":
            break;
            case "_transformMetadataToCamelCase":
            break;
            case "sf":
            break;
            case "mel":
            break;
            case "APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED":
            break;
            case "OAUTH":
            break;
            case "OAUTH2":
            break;
            case "OAUTH2_AUTHORIZE":
            break;
            case "AUTHORIZE":
            break;
            case "DCDSecurityKeyManager":
            break;
            case "../lib/create-assets-url":
            break;
            case "IN_APP_MEMBER_VERIFICATION_MODAL_KEY":
            break;
            case "useFocus":
            break;
            case "useFocusEffect":
            break;
            case "use":
            break;
            case "Call":
            break;
            case "effectClick":
            break;
            case "ClickImage":
            break;
            case "Image Height":
            break;
            case "eight_pointed_black_star":
            break;
            case "star2":
            break;
            case "tdst":
            break;
            case "useEffectEvent":
            break;
            case "ff":
            break;
            case "fec":
            break;
            case "CrownIllocon":
            break;
            case "useMemoArray":
            break;
            case "Memo":
            break;
            case "handleSubmit":
            break;
            case "useStateFromStoresArray":
            break;
            case "State":
            break;
            case "Store":
            break;
            case "ore":
            break;
            case "isMediaCameraNode":
            break;
            case "default_thread_rate_limit_per_user":
            break;
            case "rate_limit_per_user":
            break;
            case "_limit":
            break;
            case "_userId":
            break;
            case "_userIds":
            break;
            case "userIds":
            break;
            case "userIdsAndWishlistIds":
            break;
            case "__sentry_template_values__":
            break;
            case "_value":
            break;
            case "va":
            break;
            case "val":
            break;
            case "lue":
            break;
            case "__await":
            break;
            case "__awaiter":
            break;
            case "wait":
            break;
            case "getClampedPIPPosition":
            break;
            case "PIP_WINDOW_OFFSET":
            break;
            case "pipY":
            break;
            case "pipState":
            break;
            case "ACTIVITY_PIP_SIZE":
            break;
            case "bottomAvoidanceRegion":
            break;
            case "dan":
            break;
            case "topAvoidanceRegion":
            break;
            case "pipAvoidanceSpecs":
            break;
            case "disableHorizontalSafeAreas":
            break;
            case "translateX":
            break;
            case "base_variant_name":
            break;
            case "ia":
            break;
            case "ian":
            break;
            case "ant":
            break;
            case "namePlaceholder":
            break;
            case "older_adult_tone2":
            break;
            case "adult_tone2":
            break;
            case "orderedLadder":
            break;
            case "voiceChannelEffectEmoji":
            break;
            case "voiceChannelEffectEmojiContainer":
            break;
            case "voiceChannelEffectEmojiContainerTileNotch":
            break;
            case "autoPlay":
            break;
            case "autoPlayInterval":
            break;
            case "validateOptionContent":
            break;
            case "_warnedAboutDivideByZero":
            break;
            case "wa":
            break;
            case "war":
            break;
            case "warned":
            break;
            case "arn":
            break;
            case "rn":
            break;
            case "role_benefits":
            break;
            case "benefits":
            break;
            case "_handleBandwidthEstimationExperiment":
            break;
            case "BandwidthEstimationExperiment":
            break;
            case "dt":
            break;
            case "tim":
            break;
            case "JrGD7E":
            break;
            case "selected_time_window":
            break;
            case "win":
            break;
            case "windowId":
            break;
            case "dow":
            break;
            case "getter":
            break;
            case "transitionCleanUp":
            break;
            case "wit":
            break;
            case "with":
            break;
            case "ACTIVITY_LAYOUT_PHYSICS_DEFAULT":
            break;
            case "LAYOUT_PHYSICS":
            break;
            case "IS_IOS":
            break;
            case "transitionState":
            break;
            case "YEETED":
            break;
            case "ACTIVITY_LAYOUT_PHYSICS_GESTURE":
            break;
            case "GESTURE":
            break;
            case "wrapperDimensions":
            break;
            case "isWindowLandscape":
            break;
            case "borderTopStartRadius":
            break;
            case "borderTopEndRadius":
            break;
            case "topBorder":
            break;
            case "topBorderRadius":
            break;
            case "createGuildDiscoveryGracePeriodFinalWarningSystemMessage":
            break;
            case "threadStartingReferenceMessage":
            break;
            case "getBasePath":
            break;
            case "thunder_cloud_rain":
            break;
            case "cloud_rain":
            break;
            case "handleChannelRecipientAdd":
            break;
            case "\r":
            break;
            case "getPlayerState":
            break;
            case "ReactNativeWebView":
            break;
            case "\n":
            break;
            case "\t":
            break;
            case "__sentry_captured__":
            break;
            case "captured":
            break;
            case "__active":
            break;
            case "_activeItems":
            break;
            case "activeItem":
            break;
            case ",":
            break;
            case "\"":
            break;
            case "authenticationInsight":
            break;
            case "peers":
            break;
            case "isPngFile":
            break;
            case "channelCategoryName":
            break;
            case "#":
            break;
            case "#000000":
            break;
            case "00":
            break;
            case "$ZodError":
            break;
            case "highlightColor":
            break;
            case "impressionStartTimestamp":
            break;
            case "parseColorFnString":
            break;
            case "getIsSecureFramesKeyInconsistent":
            break;
            case "consistentHeight":
            break;
            case "Y2K":
            break;
            case "#11806a":
            break;
            case "isUnread":
            break;
            case "readDoubleLE":
            break;
            case "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE":
            break;
            case "#1abc9c":
            break;
            case "abc":
            break;
            case "#1f8b4c":
            break;
            case "f8":
            break;
            case "#206694":
            break;
            case "06":
            break;
            case "hasConnectedActivity":
            break;
            case "#2ecc71":
            break;
            case "FAVORITES_GUILD_SUGGESTIONS":
            break;
            case "powerup_metadata":
            break;
            case "metadataSealed":
            break;
            case "#3498db":
            break;
            case "customer":
            break;
            case "customerActionCancelled":
            break;
            case "onCancel":
            break;
            case "onCancelled":
            break;
            case "disregardSeriousThermalState":
            break;
            case "chat":
            break;
            case "chatChannelId":
            break;
            case "disableWrite":
            break;
            case "disableWrites":
            break;
            case "opencriticTopCriticImage":
            break;
            case "getAutoArchiveOptions":
            break;
            case "getBuildOverrideMeta":
            break;
            case "MetaStickerType":
            break;
            case "person_with_blond_hair_tone2":
            break;
            case "switchIconsEnabled":
            break;
            case "#546e7a":
            break;
            case "#5865f2":
            break;
            case "f2":
            break;
            case "f20":
            break;
            case "#607d8b":
            break;
            case "GUILD_ROOM_USER_DISCONNECTED":
            break;
            case "toArray":
            break;
            case "scheduleLayoutAnimation":
            break;
            case "errorCodes":
            break;
            case "targetMessageId":
            break;
            case "#71368a":
            break;
            case "getVoiceChannelErrorContext":
            break;
            case "dnd":
            break;
            default:
              return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
          }
        }
      };
    };
    let closure_2 = fn(mergeDefs);
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}