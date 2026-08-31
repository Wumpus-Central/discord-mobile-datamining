// _runtime/12669_mergeDefs.js
import mergeDefs from "12649_mergeDefs.js";

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
      closure_0 = { string: { unit: "caract\u00E8res", verb: "avoir" }, file: { unit: "octets", verb: "avoir" }, array: { unit: "\u00E9l\u00E9ments", verb: "avoir" }, set: { unit: "\u00E9l\u00E9ments", verb: "avoir" } };
      closure_1 = { regex: "entr\u00E9e", email: "adresse e-mail", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "date et heure ISO", date: "date ISO", time: "heure ISO", duration: "dur\u00E9e ISO", ipv4: "adresse IPv4", ipv6: "adresse IPv6", cidrv4: "plage IPv4", cidrv6: "plage IPv6", base64: "cha\u00EEne encod\u00E9e en base64", base64url: "cha\u00EEne encod\u00E9e en base64url", json_string: "cha\u00EEne JSON", e164: "num\u00E9ro E.164", jwt: "JWT", template_literal: "entr\u00E9e" };
      closure_2 = { nan: "NaN", number: "nombre", array: "tableau" };
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
            case "icon":
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
            case "guildMemberCount":
            break;
            case "guildMemberCountRange":
            break;
            case "angel_tone5":
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
            case "_voiceDuration":
            break;
            case "connection_type":
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
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp58 = closure_2[parsedTypeResult];
              if (tmp58 == null) {
                tmp58 = parsedTypeResult;
              }
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Entr\u00E9e invalide : instanceof " + code.expected + " attendu, " + tmp58 + " re\u00E7u";
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Entr\u00E9e invalide : " + expected + " attendu, " + tmp58 + " re\u00E7u";
              }
              return combined;
            case "I":
            break;
            case "InternalCard":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                let combined1 = "Entr\u00E9e invalide : " + closure_2.stringifyPrimitive(code.values[0]) + " attendu";
              } else {
                const _HermesInternal14 = HermesInternal;
                str = "Option invalide : une valeur parmi ";
                combined1 = `Option invalide : une valeur parmi ` + closure_2.joinValues(code.values, "|") + " attendue";
              }
              return combined1;
            case "ter":
            break;
            case "na":
              let str32 = "<";
              if (code.inclusive) {
                str32 = "<=";
              }
              let tmp36 = dependencyMap[code.origin];
              if (tmp36 == null) {
                tmp36 = null;
              }
              let str33 = code.origin;
              if (tmp36) {
                if (str33 == null) {
                  str33 = "valeur";
                }
                const verb = tmp36.verb;
                str = code.maximum.toString();
                let str39 = tmp36.unit;
                if (str39 == null) {
                  str39 = "\u00E9l\u00E9ment(s)";
                }
                const _HermesInternal13 = HermesInternal;
                let combined2 = "Trop grand : " + str33 + " doit " + verb + " " + str32 + str + " " + str39;
                const str38 = code.maximum;
              } else {
                let str34 = str33;
                if (str33 == null) {
                  str34 = "valeur";
                }
                const _HermesInternal12 = HermesInternal;
                combined2 = "Trop grand : " + str34 + " doit \u00EAtre " + str32 + code.maximum.toString();
                const str35 = code.maximum;
              }
              return combined2;
            case "al":
            break;
            case "CardA11yWrapper":
              let str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              let tmp24 = dependencyMap[code.origin];
              if (tmp24 == null) {
                tmp24 = null;
              }
              let origin = code.origin;
              if (tmp24) {
                let str26 = code.minimum;
                let str1 = str26.toString();
                let _HermesInternal11 = HermesInternal;
                let combined3 = "Trop petit : " + origin + " doit " + tmp24.verb + " " + str22 + str1 + " " + tmp24.unit;
              } else {
                let str23 = code.minimum;
                let str2 = str23.toString();
                let _HermesInternal10 = HermesInternal;
                combined3 = "Trop petit : " + origin + " doit \u00EAtre " + str22 + str2;
              }
              return combined3;
            case "perGuildMaxCount":
            break;
            case "PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL":
              if ("starts_with" === code.format) {
                let _HermesInternal9 = HermesInternal;
                let combined4 = "Cha\u00EEne invalide : doit commencer par \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                let _HermesInternal8 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit se terminer par \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                let _HermesInternal7 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit inclure \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                let _HermesInternal6 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit correspondre au mod\u00E8le " + code.pattern;
              } else {
                let format = dependencyMap2[code.format];
                if (format == null) {
                  format = code.format;
                }
                let _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " invalide";
              }
              return combined4;
            case "NonConvert":
            break;
            case "Convert":
              let _HermesInternal4 = HermesInternal;
              let combined5 = "Nombre invalide : doit \u00EAtre un multiple de " + code.divisor;
              return combined5;
            case "ConvertEmoticons":
            break;
            case "mot":
              let tmp5 = code.keys.length > 1;
              let str4 = "";
              let str5 = "";
              if (tmp5) {
                str5 = "s";
              }
              let tmp6 = code.keys.length > 1;
              if (tmp6) {
                str4 = "s";
              }
              let joinValuesResult = closure_2.joinValues(code.keys, ", ");
              let _HermesInternal3 = HermesInternal;
              let combined6 = "Cl\u00E9" + str5 + " non reconnue" + str4 + " : " + joinValuesResult;
              return combined6;
            case "icons":
            break;
            case "responseTimestamp":
              let _HermesInternal2 = HermesInternal;
              let combined7 = "Cl\u00E9 invalide dans " + code.origin;
              return combined7;
            case "parseOptionValuesForSend":
            break;
            case "getChannelIcon":
              return "Entr\u00E9e invalide";
            case "getChannelIconComponent":
            break;
            case "getChannelIconComponentWithGuild":
              let _HermesInternal = HermesInternal;
              str2 = "Valeur invalide dans ";
              let combined8 = "Valeur invalide dans " + code.origin;
              return combined8;
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
            case "quest_bar_hero":
            break;
            case "quest_bar_hero_video":
            break;
            case "hero_video":
            break;
            case "_videoDecoderFallbackSuppressed":
            break;
            case "video":
            break;
            case "videoDecoder":
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
            case "getGiftable":
            break;
            case "tableRow":
            break;
            case "tableRowGroupContainer":
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
            case "couch":
            break;
            case "couch_and_lamp":
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
            case "role_connections_verification_url":
            break;
            case "baseType":
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
            case "midnightblue":
            break;
            case "SafeAreaView":
            break;
            case "contextState":
            break;
            case "USER_DISMISS":
            break;
            case "PX_80":
            break;
            case "_":
            break;
            case "transaction_id":
            break;
            case "syncedThemesEnabled":
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
            case "getAdTrafficMetadataSealed":
            break;
            case "ActionSheetHeaderPressableText":
            break;
            case "Pressable":
            break;
            case "ex":
            break;
            case "ext":
            break;
            case "isReported":
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
            case "discardOnboardingPromise":
            break;
            case "searchType":
            break;
            case "getSelectedChannelIds":
            break;
            case "destructiveButtonIndex":
            break;
            case "expecting_woman_tone4":
            break;
            case "isEligible":
            break;
            case "isEligibleForContentInventoryV1":
            break;
            case "PREMIUM_YEAR_TIER_2":
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
            case "GuildEntityDao":
            break;
            case "EntityDao":
            break;
            case "Dao":
            break;
            case "DM_SETTINGS_UPSELL_ACTION":
            break;
            case "ACTION_TO_TEXT":
            break;
            case "TEXTAREA_BLUR":
            break;
            case "BLURPLE_26":
            break;
            case "26C4oi":
            break;
            case "oil_drum":
            break;
            case "renderQuickActions":
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
            case "showHeader":
            break;
            case "showHeaderCloseButton":
            break;
            case "_applyCombination":
            break;
            case "ly":
            break;
            case "foi":
            break;
            case "ios_backgroundColor":
            break;
            case "ba":
              str22 = ">";
              if (code.inclusive) {
                str22 = ">=";
              }
              tmp24 = dependencyMap[code.origin];
              if (tmp24 == null) {
                tmp24 = null;
              }
              origin = code.origin;
              if (tmp24) {
                str26 = code.minimum;
                str1 = str26.toString();
                _HermesInternal11 = HermesInternal;
                combined3 = "Trop petit : " + origin + " doit " + tmp24.verb + " " + str22 + str1 + " " + tmp24.unit;
              } else {
                str23 = code.minimum;
                str2 = str23.toString();
                _HermesInternal10 = HermesInternal;
                combined3 = "Trop petit : " + origin + " doit \u00EAtre " + str22 + str2;
              }
              return combined3;
            case "back":
            break;
            case "background":
              if ("starts_with" === code.format) {
                _HermesInternal9 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit commencer par \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                _HermesInternal8 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit se terminer par \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                _HermesInternal7 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit inclure \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                _HermesInternal6 = HermesInternal;
                combined4 = "Cha\u00EEne invalide : doit correspondre au mod\u00E8le " + code.pattern;
              } else {
                format = dependencyMap2[code.format];
                if (format == null) {
                  format = code.format;
                }
                _HermesInternal5 = HermesInternal;
                combined4 = "" + format + " invalide";
              }
              return combined4;
            case "backgroundColorGradient":
            break;
            case "kg":
              _HermesInternal4 = HermesInternal;
              combined5 = "Nombre invalide : doit \u00EAtre un multiple de " + code.divisor;
              return combined5;
            case "gr":
            break;
            case "und":
              tmp5 = code.keys.length > 1;
              str4 = "";
              str5 = "";
              if (tmp5) {
                str5 = "s";
              }
              tmp6 = code.keys.length > 1;
              if (tmp6) {
                str4 = "s";
              }
              joinValuesResult = closure_2.joinValues(code.keys, ", ");
              _HermesInternal3 = HermesInternal;
              combined6 = "Cl\u00E9" + str5 + " non reconnue" + str4 + " : " + joinValuesResult;
              return combined6;
            case "Color":
            break;
            case "ACTIVITY_LAUNCH_UNKNOWN_CHANNEL":
              _HermesInternal2 = HermesInternal;
              combined7 = "Cl\u00E9 invalide dans " + code.origin;
              return combined7;
            case "UNKNOWN":
            break;
            case "UNKNOWN_CHANNEL":
            break;
            case "DISCORD_CONSENT":
            break;
            case "FormSubmitErrorType":
              _HermesInternal = HermesInternal;
              str2 = "Valeur invalide dans ";
              combined8 = "Valeur invalide dans " + code.origin;
              return combined8;
            case "person_walking_facing_right_tone5":
            break;
            case "event.origin":
            break;
            case "originChannelId":
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
              _HermesInternal = HermesInternal;
              str2 = "Valeur invalide dans ";
              combined8 = "Valeur invalide dans " + code.origin;
              return combined8;
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
            case "hasSocialLayerStorefront":
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
            case "customAnimationOnSwipe":
            break;
            case "SwipeForMemberListContext":
            break;
            case "textInputStyle":
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
            case "getLength":
            break;
            case "getLengthInBits":
            break;
            case "Touchable":
            break;
            case "TouchableHaptic":
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
            case "getDefaultGoliveQuality":
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
            case "AccountAgeTier10LargeBadge":
            break;
            case "cou":
            break;
            case "Badge":
            break;
            case "fetchWebAuthnPasswordlessChallenge":
            break;
            case "getCheck":
            break;
            case "getCheckoutContextRecord":
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
            case "isEmbeddingsResponse":
            break;
            case "seekingTracker":
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
            case "IsSanctionedSimpleUnitIdentifier":
            break;
            case "Identifier":
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
            case "awaitingRemote":
            break;
            case "RemoteAuthStep":
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
            case "isArrayEqual":
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
            case "onFullscreenPlayerWillDismiss":
            break;
            case "performanceAnalyticsEnabled":
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
            case "PortalSpotIllustration":
            break;
            case "createCollectiblesItemsFromServerResponse":
            break;
            case "searchThreads":
            break;
            case "renderActivityInstanceEmbed":
            break;
            case "time_to_full_display":
              _HermesInternal = HermesInternal;
              str2 = "Valeur invalide dans ";
              combined8 = "Valeur invalide dans " + code.origin;
              return combined8;
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
            case "contentSelectPlan":
            break;
            case "GREEN_NEW_58":
            break;
            case "8Hvr3+":
            break;
            case "weekData":
            break;
            case "div":
            break;
            case "diversityChildren":
            break;
            case "ve":
              _HermesInternal = HermesInternal;
              str2 = "Valeur invalide dans ";
              combined8 = "Valeur invalide dans " + code.origin;
              return combined8;
            case "ver":
            break;
            case "renderCommunicationDisabled":
            break;
            case "contactNames":
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
              _HermesInternal = HermesInternal;
              str2 = "Valeur invalide dans ";
              combined8 = "Valeur invalide dans " + code.origin;
              return combined8;
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
            case "shouldShowBlockedUsers":
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
            case "lastSyncTimestamp":
            break;
            case "parseGameServerShareCode":
            break;
            case "detector":
            break;
            case "detectorCallbacks":
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
            case "EntitlementTenantFulfillmentStatus":
            break;
            case "ill":
            break;
            case "__findAnimatedPropsNodes":
            break;
            case "MIN_READABLE_CHANNELS":
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
            case "USER_NON_CHANNEL_ACK":
            break;
            case "CHANNEL_ACK":
            break;
            case "ACK_MEDIA_VIEWED":
            break;
            case "MEDIA":
            break;
            case "EDIT_LAST_MESSAGE":
            break;
            case "MESSAGE_BULK_DELETE":
            break;
            case "fo":
            break;
            case "for":
            break;
            case "forEachChannel":
            break;
            case "nei":
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
            case "pendingProfileEffect":
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
            case "rgbToHex":
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
            case "getContrast":
            break;
            case "getContrastingColor":
            break;
            case "eligibleReportSubtypes":
            break;
            case "FAMILY_CENTER_CONNECTION":
            break;
            case "FAMILY_CENTER_CONNECTION_PREREQUISITES":
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
            case "mobile-visual-refresh":
            break;
            case "mobile-visual-refresh-floating":
            break;
            case "floatingButtonContainer":
            break;
            case "avatar_hash":
            break;
            case "_hash":
            break;
            case "hashKey":
            break;
            case "APP_LAUNCHER_EXPANDED":
            break;
            case "EXPAND":
            break;
            case "EXPANDED":
            break;
            case "EXPANDED_HEADER_HEIGHT":
            break;
            case "TIERLESS_BOOSTING_SYSTEM_MESSAGE":
            break;
            case "MESSAGE_LINK_COPIED":
            break;
            case "PRIMARY_330":
            break;
            case "PRIMARY_460":
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
            case "isPrivate":
            break;
            case "isPrivateChannel":
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
            case "ACCELEROMETER":
            break;
            case "ER":
            break;
            case "RO":
            break;
            case "PentaxModelID":
            break;
            case "tax":
            break;
            case "Model":
            break;
            case "KzCF/6":
            break;
            case "VIDEO_INPUT_TOGGLED":
            break;
            case "hand_splayed_tone2":
            break;
            case "order_id":
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
            case "FadeOutRight":
            break;
            case "http":
            break;
            case "oc":
            break;
            case "oca":
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
            case "registerUserExperiment":
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
            case "getAppHardwareAccelerationEnabled":
            break;
            case "activity_items":
            break;
            case "_items":
            break;
            case "_itemsForType":
            break;
            case "item":
            break;
            case "bow_tone1":
            break;
            case "dagger":
            break;
            case "dagger_knife":
            break;
            case "knife":
            break;
            case "activeUnjoinedThreads":
            break;
            case "jo":
            break;
            case "moc":
            break;
            case "moccasin":
            break;
            case "no_bicycles":
            break;
            case "bicycle":
            break;
            case "cycles":
            break;
            case "js":
            break;
            case "xs":
            break;
            case "PREMIUM_TENURE_6_MONTH":
            break;
            case "HAS_UNREAD_URGENT_MESSAGES":
            break;
            case "URGENT":
            break;
            case "ADD_FRIENDS_WIDGET":
            break;
            case "WIDGET":
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
            case "PasskeysSpotIllustration":
            break;
            case "ke":
            break;
            case "isFileContaineJfiforExifHeader":
            break;
            case "toSearchListUserItem":
            break;
            case "embedded_activity_location_kind":
            break;
            case "ki":
            break;
            case "kin":
            break;
            case "hasViewingRoles":
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
            case "Buf8":
            break;
            case "f8wNDl":
            break;
            case "DlcqlU":
            break;
            case "lcq":
            break;
            case "arrow_left":
            break;
            case "leftActions":
            break;
            case "ORDER_DISCARD":
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
            case "_tryToStartAnother":
            break;
            case "other":
              _HermesInternal = HermesInternal;
              str2 = "Valeur invalide dans ";
              combined8 = "Valeur invalide dans " + code.origin;
              return combined8;
            case "sessionData":
            break;
            case "FamilyCenterSubPageAnalyticsIds":
            break;
            case "analyticsId":
            break;
            case "disableImageViewPreallocationAndroid":
            break;
            case "headerConnect":
            break;
            case "enablePropsUpdateReconciliationAndroid":
            break;
            case "detailsText":
            break;
            case "load":
            break;
            case "J":
            break;
            case "setCurrentUser":
            break;
            case "setCurrentUserOnConnectionOpen":
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
            case "woman_in_motorized_wheelchair_medium_skin_tone":
            break;
            case "man_in_motorized_wheelchair_medium_skin_tone":
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
            case "handleMuteSettingPress":
            break;
            case "embedMediaToMediaItem":
            break;
            case "NOTIFY_FRIENDS_ON_COME_ONLINE":
            break;
            case "ONLINE_MULTIPLAYER":
            break;
            case "PLAYER_FUNCTIONS":
            break;
            case "EpAXPC":
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
            case "getEmbeddedActivityParticipantId":
            break;
            case "getGradientThemeFromFlags":
            break;
            case "__sensorContainer":
            break;
            case "sensor":
            break;
            case "guildContent":
            break;
            case "track_next":
            break;
            case "_nextChannelId":
            break;
            case "didSelfVote":
            break;
            case "DOUBLE_TAP":
            break;
            case "DOUBLE_TAP_EMOJI":
            break;
            case "EMOJI_DAY":
            break;
            case "SEND_POLLS":
            break;
            case "POLLS":
            break;
            case "POLLS_VICTOR_FILL":
            break;
            case "ILLO_BLUE_30":
            break;
            case "snapToAlignment":
            break;
            case "Alignment":
            break;
            case "useConsoleQuestUIStore":
            break;
            case "recordDroppedEvent":
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
            case "useLegacyChatInput":
            break;
            case "ChatInputExpressionPressed":
            break;
            case "res":
            break;
            case "rejectRequest":
            break;
            case "questReward":
            break;
            case "questRewards":
            break;
            case "questRewardsConfigV2FromServer":
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
            case "diffClamp":
            break;
            case "upcoming_server_event_notifications":
            break;
            case "preview_asset_paths":
            break;
            case "path":
            break;
            case "currentUsernameInvalid":
            break;
            default:
              return "Entr\u00E9e invalide";
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