// === Module 12918: mergeDefs ===

// Module 12918 (mergeDefs)
import mergeDefs from "mergeDefs" /* 12903 */;

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
      closure_0 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
      closure_1 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" };
      closure_2 = { nan: "NaN" };
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
            case "assign":
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
            case "construct":
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
            case "match":
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
            case "toLowerCase":
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
            case "guildRoomLocalDisconnect":
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp51 = closure_2[parsedTypeResult];
              if (tmp51 == null) {
                tmp51 = parsedTypeResult;
              }
              const _HermesInternal15 = HermesInternal;
              return "Invalid input: expected " + expected + ", received " + tmp51;
            case "extraBottomHeight":
            break;
            case "$ZodBoolean":
              if (1 === code.values.length) {
                const _HermesInternal14 = HermesInternal;
                let combined = "Invalid input: expected " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                str = "|";
                const _HermesInternal13 = HermesInternal;
                combined = "Invalid option: expected one of " + closure_2.joinValues(code.values, `|`);
              }
              return combined;
            case "ZodBoolean":
            break;
            case "B":
              let str25 = "<";
              if (code.inclusive) {
                str25 = "<=";
              }
              let tmp32 = dependencyMap[code.origin];
              if (tmp32 == null) {
                tmp32 = null;
              }
              let str26 = code.origin;
              if (tmp32) {
                if (str26 == null) {
                  str26 = "value";
                }
                str = code.maximum.toString();
                let str32 = tmp32.unit;
                if (str32 == null) {
                  str32 = "elements";
                }
                const _HermesInternal12 = HermesInternal;
                let combined1 = "Too big: expected " + str26 + " to have " + str25 + str + " " + str32;
                const str31 = code.maximum;
              } else {
                let str27 = str26;
                if (str26 == null) {
                  str27 = "value";
                }
                const _HermesInternal11 = HermesInternal;
                combined1 = "Too big: expected " + str27 + " to be " + str25 + code.maximum.toString();
                const str28 = code.maximum;
              }
              return combined1;
            case "le":
            break;
            case "an":
              let str19 = ">";
              if (code.inclusive) {
                str19 = ">=";
              }
              let tmp20 = dependencyMap[code.origin];
              if (tmp20 == null) {
                tmp20 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp20) {
                const _HermesInternal10 = HermesInternal;
                let combined2 = "Too small: expected " + origin + " to have " + str19 + str1 + " " + tmp20.unit;
              } else {
                combined2 = "Too small: expected " + origin + " to be " + str19 + str1;
              }
              return combined2;
            case "n":
            break;
            case "useActionBarPrimaryButton":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined3 = "Invalid string: must start with \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "Invalid string: must end with \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "Invalid string: must include \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = "Invalid string: must match pattern " + code.pattern;
              } else {
                let format = table[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined3 = "Invalid " + format;
              }
              return combined3;
            case "ActionBarPrimaryButton":
            break;
            case "u":
              const _HermesInternal4 = HermesInternal;
              return "Invalid number: must be a multiple of " + code.divisor;
            case "tt":
            break;
            case "on":
              let tmp5 = code.keys.length > 1;
              let str4 = "";
              if (tmp5) {
                str4 = "s";
              }
              let joinValuesResult = closure_2.joinValues(code.keys, ", ");
              let _HermesInternal3 = HermesInternal;
              str = "Unrecognized key";
              let combined4 = `Unrecognized key` + str4 + ": " + joinValuesResult;
              return combined4;
            case "$ZodDate":
            break;
            case "ZodDate":
              let _HermesInternal2 = HermesInternal;
              let combined5 = "Invalid key in " + code.origin;
              return combined5;
            case "D":
            break;
            case "DateToSystemTimezoneSetter":
              return "Invalid input";
            case "at":
            break;
            case "te":
              let _HermesInternal = HermesInternal;
              let combined6 = "Invalid value in " + code.origin;
              return combined6;
            case "mez":
            break;
            case "Setter":
            break;
            case "useDefaultSendStartStageNotificationToggle":
            break;
            case "NotificationToggle":
            break;
            case "onToggleReplyMention":
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
            case "NSFW_SERVER":
            break;
            case "NSFW_SERVER_AGE_RESTRICTION":
            break;
            case "AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING":
            break;
            case "RING_CALL_ACCEPTED":
            break;
            case "CALL_ACCEPT":
            break;
            case "ForumSpoilerIcon":
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
            case "parseUrl":
            break;
            case "parseUrlencoded":
            break;
            case "encodedBodySize":
            break;
            case "platformProfilers":
            break;
            case "isFetchingSounds":
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
            case "$ZodCheckMaxLength":
            break;
            case "kMaxLength":
            break;
            case "L":
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
            case "withTouchEventBoundary":
            break;
            case "TouchEventBoundary":
            break;
            case "$ZodMap":
            break;
            case "ZodMap":
            break;
            case "M":
            break;
            case "ap":
            break;
            case "AbortCodes":
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
            case "toolCallSpanMap":
            break;
            case "getPendingChanges":
            break;
            case "MEDIA_PICKER_SEND_BUTTON_SPRING":
            break;
            case "marginHorizontal":
            break;
            case "Direction":
            break;
            case "rect":
            break;
            case "QUEST_HOME_SEARCH_CLOSED":
            break;
            case "SEARCH_CLOSED":
            break;
            case "CHANNEL_NOTICE_SHOW_DELAY":
            break;
            case "DELAYED":
            break;
            case "PX_80":
            break;
            case "_":
            break;
            case "createForumPostActions":
            break;
            case "suppressRowAnimationSequenceId":
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
            case "woman_and_man_holding_hands_tone1_tone4":
            break;
            case "CHANNEL_CALL":
            break;
            case "CHANNEL_CALL_ACTION_BAR":
            break;
            case "CALL_ACTION_BAR_HEIGHT":
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
            break;
            case "R":
            break;
            case "ReflectionBinaryReader":
            break;
            case "ef":
            break;
            case "f":
            break;
            case "BinaryReader":
            break;
            case "$ZodSet":
            break;
            case "ZodSet":
            break;
            case "S":
            break;
            case "et":
            break;
            case "postformat":
            break;
            case "form":
            break;
            case "orm":
            break;
            case "ma":
            break;
            case "mat":
            break;
            case "lai":
            break;
            case "StringBuilder":
            break;
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
            case "VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE":
            break;
            case "MESSAGE_LONG_PRESS_MENU":
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
            case "QUEST_BAR_RENDERED":
            break;
            case "RED_NEW_45":
            break;
            case "hasConnection":
            break;
            case "hasConnectionEntrypointUrl":
            break;
            case "gameClaimMarkAsDismissed":
            break;
            case "ActionSheetHeaderPressableText":
            break;
            case "Pressable":
            break;
            case "ex":
            break;
            case "ext":
            break;
            case "isProfileFrameRecord":
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
            case "GuidelinesIllocon":
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
            case "getExperimentBucketName":
            break;
            case "di":
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
            case "NoResults":
            break;
            case "NoResultsAlt":
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
            case "PREMIUM_TIER_2_PINK":
            break;
            case "PREMIUM_TIER_2_PINK_FOR_GRADIENTS":
            break;
            case "PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2":
            break;
            case "Role":
            break;
            case "RoleFlags":
            break;
            case "scrollToItem":
            break;
            case "embedUrl":
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
            case "zo":
            break;
            case "zon":
            break;
            case "tal":
            break;
            case "collapseText":
            break;
            case "paddingVertical":
            break;
            case "initializeRouterUtils":
            break;
            case "GUILD_MEMBER_REQUEST_TO_JOIN":
            break;
            case "REQUEST_TO_JOIN_USER_INELIGIBLE":
            break;
            case "INELIGIBLE":
            break;
            case "INELIGIBLE_FOR_FAMILY_CENTER":
            break;
            case "FAMILY_CENTER":
            break;
            case "FAMILY_CENTER_ACTION":
            break;
            case "CENTER":
            break;
            case "ENTER":
            break;
            case "TWITTER_LEGACY":
            break;
            case "LEGACY_AUDIO_SUBSYSTEM":
            break;
            case "SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES":
            break;
            case "PAYPAL_FLOW_OPTION_REQUIRED":
            break;
            case "RED_NEW_34":
            break;
            case "ali":
            break;
            case "align":
            break;
            case "alignItemsAtEnd":
              tmp5 = code.keys.length > 1;
              str4 = "";
              if (tmp5) {
                str4 = "s";
              }
              joinValuesResult = closure_2.joinValues(code.keys, ", ");
              _HermesInternal3 = HermesInternal;
              str = "Unrecognized key";
              combined4 = `Unrecognized key` + str4 + ": " + joinValuesResult;
              return combined4;
            case "alignItemsAtEndPaddingEnabled":
            break;
            case "ig":
              _HermesInternal2 = HermesInternal;
              combined5 = "Invalid key in " + code.origin;
              return combined5;
            case "em":
            break;
            case "ms":
            break;
            case "flag_sk":
            break;
            case "spade_suit":
              _HermesInternal = HermesInternal;
              combined6 = "Invalid value in " + code.origin;
              return combined6;
            case "DARK_BRAND_260_LIGHT_BRAND_200":
            break;
            case "BRAND_260":
            break;
            case "BRAND_200":
            break;
            case "GuildEntityDao":
            break;
            case "EntityDao":
            break;
            case "Dao":
            break;
            case "kiss_woman_woman_dark_skin_tone_medium_skin_tone":
            break;
            case "isTrustedProtocol":
            break;
            case "collapsable":
            break;
            case "collapsableChildren":
            break;
            case "renderCodedLinks":
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
            case "showHidden":
            break;
            case "_applyCombination":
            break;
            case "ly":
            break;
            case "backoffTimeSec":
            break;
            case "../../../../lib/assign":
            break;
            case "../../../lib/assign":
            break;
            case "../../lib/assign":
            break;
            case "../lib/assign":
            break;
            case ".":
            break;
            case "./":
            break;
            case "lib":
            break;
            case "assignSimilarDate":
            break;
            case "sign":
            break;
            case "gn":
            break;
            case "mapViewabilityValues":
            break;
            case "stickySectionHeadersEnabled":
            break;
            case "huit":
            break;
            case "foi":
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
            case "un":
            break;
            case "und":
            break;
            case "Color":
            break;
            case "ACTIVITY_LAUNCH_NOT_IN_EXPERIMENT":
            break;
            case "EXPERIMENT":
            break;
            case "EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS":
            break;
            case "SPECTATOR_MODE":
            break;
            case "FormSubmitErrorType":
            break;
            case "person_walking_facing_right_tone3":
            break;
            case "numHours":
            break;
            case "giftReminderCoachmark":
            break;
            case "view_seek_duration":
            break;
            case "durationV":
            break;
            case "onVerified":
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
            case "otto":
            break;
            case "tom":
            break;
            case "right shift":
            break;
            case "shiftLeft":
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
            case "reversed_hand_with_middle_finger_extended_tone4":
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
            case "ClientOutdatedAcceptGiftError":
            break;
            case "td":
            break;
            case "Accept":
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
            case "subtitleTrailing":
            break;
            case "getLicense":
            break;
            case "$constructor":
            break;
            case "const":
            break;
            case "constr":
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
            case "withAlphabeticalSections":
            break;
            case "d+0vwo":
            break;
            case "wol":
            break;
            case "wolf":
            break;
            case "AccountAgeTier10LargeBadge":
            break;
            case "cou":
            break;
            case "Badge":
            break;
            case "disableBackgroundOverlay":
            break;
            case "refreshImpressions":
            break;
            case "topic":
            break;
            case "topicContainer":
            break;
            case "getAdDecisionByPlacementAndAdCreativeId":
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
            case "containerId":
            break;
            case "dispatchLazyCache":
            break;
            case "useGuildMemberOrUserPendingDisplayNameStyles":
            break;
            case "parallel":
            break;
            case "preparedTextCacheSize":
            break;
            case "setGlobalHandler":
            break;
            case "_$esjava$cursor":
            break;
            case "cursorColor":
            break;
            case "so":
            break;
            case "MOBILE_UNREADBAR_TEXT_DEFAULT":
            break;
            case "DEFAULT_MEDIA_MAX_WIDTH":
            break;
            case "NitroPlatinumBadgeSmallBadge":
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
            case "heroArtVideoLinkLightTheme":
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
            case "shouldUseCache":
            break;
            case "checkViewableIndicesChanges":
            break;
            case "neutral_face":
            break;
            case "inputValue":
            break;
            case "inputValues":
            break;
            case "openid_params":
            break;
            case "leftSlot":
            break;
            case "two_hearts":
            break;
            case "renderChannelTitle":
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
            case "INCIDENT_TIMESTAMP":
            break;
            case "TIMESTAMPS":
            break;
            case "maxBitrate":
            break;
            case "isOnReverseTrial":
            break;
            case "aria-disabled":
            break;
            case "disable":
            break;
            case "disabledAccessibilityHint":
            break;
            case "isa":
            break;
            case "sab":
            break;
            case "led":
            break;
            case "internalBinaryRead":
            break;
            case "proxy_icon_url":
            break;
            case "icon_url":
            break;
            case "party_id":
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
            case "renderActivityInviteEmbed":
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
            case "internalBinaryWrite":
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
            case "SpendingLimitSettings":
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
            case "getAwaitingRemoteSessionInfo":
            break;
            case "forFractionalPremium":
            break;
            case "FractionalPremiumSKUs":
            break;
            case "FractionalPremiumSKUsSets":
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
            case "checkoutFailed":
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
            case "getGuildDefaults":
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
            case "_clearOutcomes":
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
            case "ServerIconShieldzordExample":
            break;
            case "dz":
            break;
            case "storeToken":
            break;
            case "enableIntegrityCheck":
            break;
            case "SceneView":
            break;
            case "EntitlementTenantFulfillmentStatus":
            break;
            case "ill":
            break;
            case "__findAnimatedPropsNodes":
            break;
            case "USE_NOW":
            break;
            case "NOW_PLAYING_CONSENT_CARD":
            break;
            case "CARD_MUTED_PRESSED_BG":
            break;
            case "BGR":
            break;
            case "GRABPAY_MY":
            break;
            case "MYR":
            break;
            case "ROLE_SUBSCRIPTION_SETTING":
              _HermesInternal = HermesInternal;
              combined6 = "Invalid value in " + code.origin;
              return combined6;
            case "SETTINGS_WINDOWS":
            break;
            case "WINDOWS":
            break;
            case "WINDOWS_GRAPHICS_CAPTURE_BUILD":
            break;
            case "BUILD_OVERRIDE_COOKIE_NAME":
            break;
            case "MEDIA_NUM_COLUMNS":
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
            case "addPendingAuthorizedState":
            break;
            case "logotype_dark":
            break;
            case "darkAppearance":
            break;
            case "woman_juggling_medium_skin_tone":
            break;
            case "man_juggling_medium_skin_tone":
            break;
            case "fo":
            break;
            case "for":
            break;
            case "forEachChannel":
            break;
            case "TranscriptOutlineIcon":
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
            case "QUICKSWITCHER_RESULT_SELECTED":
            break;
            case "createScheduledMessage":
            break;
            case "getChannelA11yHint":
            break;
            case "Channel":
            break;
            case "interrobang":
            break;
            case "bangbang":
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
            case "_guildId":
            break;
            case "gu":
            break;
            case "current_guild_id":
            break;
            case "getContent":
            break;
            case "getContentAvailable":
            break;
            case "getPrice":
            break;
            case "getPriceForCollectiblesProduct":
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
            case "currentSubscription":
            break;
            case "avatar_hash":
            break;
            case "_hash":
            break;
            case "hashKey":
            break;
            case "gek":
            break;
            case "bhd":
            break;
            case "INVITE_RESOLVE_SUCCESS":
            break;
            case "guild_monetization":
            break;
            case "monetizationDisclosureContainerStyle":
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
            case "FAMILY_CENTER_ERROR_CODE_TO_FAILURE":
            break;
            case "REACTIVATION_OFFER_REDEEM":
            break;
            case "REDEEM_REWARD":
            break;
            case "IMAGE_VIDEO_DATA_SETTINGS_UPDATED":
            break;
            case "onOptionValueChange":
            break;
            case "onValueChange":
            break;
            case "onValueChanged":
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
            case "num_words":
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
            case "relationsSnapshot":
            break;
            case "activityCustomId":
            break;
            case "disableFalsePositiveButton":
            break;
            case "onRecurrencePress":
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
            case "deleteManySyncUnsafe":
            break;
            case "safeArea":
            break;
            case "safeAreaBottom":
            break;
            case "safeAreaBottomKeyboardAware":
            break;
            case "KeyboardAwareScrollView":
            break;
            case "noTint":
            break;
            case "int":
            break;
            case "intlMessage":
            break;
            case "tl":
            break;
            case "getAnyStreamForUser":
            break;
            case "activity_items":
            break;
            case "_items":
            break;
            case "_itemsForType":
            break;
            case "item":
            break;
            case "open_hands":
            break;
            case "open_hands_tone1":
            break;
            case "activeUnjoinedThreads":
            break;
            case "jo":
            break;
            case "js":
            break;
            default:
              return "Invalid input";
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