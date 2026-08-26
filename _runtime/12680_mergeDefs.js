// _runtime/12680_mergeDefs.js
import mergeDefs from "12643_mergeDefs.js";

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
      closure_0 = { string: { unit: "tegn", verb: "\u00E5 ha" }, file: { unit: "bytes", verb: "\u00E5 ha" }, array: { unit: "elementer", verb: "\u00E5 inneholde" }, set: { unit: "elementer", verb: "\u00E5 inneholde" } };
      closure_1 = { regex: "input", email: "e-postadresse", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dato- og klokkeslett", date: "ISO-dato", time: "ISO-klokkeslett", duration: "ISO-varighet", ipv4: "IPv4-omr\u00E5de", ipv6: "IPv6-omr\u00E5de", cidrv4: "IPv4-spekter", cidrv6: "IPv6-spekter", base64: "base64-enkodet streng", base64url: "base64url-enkodet streng", json_string: "JSON-streng", e164: "E.164-nummer", jwt: "JWT", template_literal: "input" };
      closure_2 = { nan: "NaN", number: "tall", array: "liste" };
      return {
        localeError: (code) => {
          code = code.code;
          switch (code) {
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
            case "guildFolders":
            break;
            case "handleEndAnalytics":
            break;
            case "readScreenSizeForAppEntry":
            break;
            case "getMostImportantRaidResolutionType":
            break;
            case "RaidResolutionType":
            break;
            case "ResolutionTypes":
            break;
            case "enforcedHeight":
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
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp48 = closure_2[parsedTypeResult];
              if (tmp48 == null) {
                tmp48 = parsedTypeResult;
              }
              if (obj.test(code.expected)) {
                const _HermesInternal17 = HermesInternal;
                let combined = "Ugyldig input: forventet instanceof " + code.expected + ", fikk " + tmp48;
              } else {
                const _HermesInternal16 = HermesInternal;
                combined = "Ugyldig input: forventet " + expected + ", fikk " + tmp48;
              }
              return combined;
            case "ary":
            break;
            case "u":
              if (1 === code.values.length) {
                const _HermesInternal15 = HermesInternal;
                code = "Ugyldig verdi: forventet " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal14 = HermesInternal;
                code = "Ugyldig valg: forventet en av " + closure_2.joinValues(code.values, "|");
              }
              return code;
            case "tt":
            break;
            case "on":
              let str25 = "<";
              if (code.inclusive) {
                str25 = "<=";
              }
              let tmp28 = dependencyMap[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let str26 = code.origin;
              if (tmp28) {
                if (str26 == null) {
                  str26 = "value";
                }
                let str = code.maximum.toString();
                let str32 = tmp28.unit;
                if (str32 == null) {
                  str32 = "elementer";
                }
                const _HermesInternal13 = HermesInternal;
                let combined1 = "For stor(t): forventet " + str26 + " til \u00E5 ha " + str25 + str + " " + str32;
                const str31 = code.maximum;
              } else {
                let str27 = str26;
                if (str26 == null) {
                  str27 = "value";
                }
                const _HermesInternal12 = HermesInternal;
                combined1 = "For stor(t): forventet " + str27 + " til \u00E5 ha " + str25 + code.maximum.toString();
                const str28 = code.maximum;
              }
              return combined1;
            case "$ZodDate":
            break;
            case "ZodDate":
              let str19 = ">";
              if (code.inclusive) {
                str19 = ">=";
              }
              let tmp16 = dependencyMap[code.origin];
              if (tmp16 == null) {
                tmp16 = null;
              }
              ({ origin, minimum } = code);
              const str1 = minimum.toString();
              if (tmp16) {
                const _HermesInternal11 = HermesInternal;
                let combined2 = "For lite(n): forventet " + origin + " til \u00E5 ha " + str19 + str1 + " " + tmp16.unit;
              } else {
                const _HermesInternal10 = HermesInternal;
                combined2 = "For lite(n): forventet " + origin + " til \u00E5 ha " + str19 + str1;
              }
              return combined2;
            case "D":
            break;
            case "DateParser":
              if ("starts_with" === code.format) {
                const _HermesInternal9 = HermesInternal;
                let combined3 = "Ugyldig streng: m\u00E5 starte med \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                combined3 = "Ugyldig streng: m\u00E5 ende med \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "Ugyldig streng: m\u00E5 inneholde \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = "Ugyldig streng: m\u00E5 matche m\u00F8nsteret " + code.pattern;
              } else {
                let format = table[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal5 = HermesInternal;
                combined3 = "Ugyldig " + format;
              }
              return combined3;
            case "at":
            break;
            case "te":
              const _HermesInternal4 = HermesInternal;
              return "Ugyldig tall: m\u00E5 v\u00E6re et multiplum av " + code.divisor;
            case "serializeEnd":
            break;
            case "MarkupParserNodeTypeError":
              let str3 = "Ukjent n\u00F8kkel";
              if (code.keys.length > 1) {
                str3 = "Ukjente n\u00F8kler";
              }
              const _HermesInternal3 = HermesInternal;
              return "" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "E":
            break;
            case "Err":
              const _HermesInternal2 = HermesInternal;
              return "Ugyldig n\u00F8kkel i " + code.origin;
            case "ro":
            break;
            case "or":
              return "Ugyldig input";
            case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
            break;
            case "BOT_HTTP_INTERACTIONS":
              let _HermesInternal = HermesInternal;
              str = "Ugyldig verdi i ";
              let combined4 = "Ugyldig verdi i " + code.origin;
              return combined4;
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
            case "NSFW_SPACE_WARNING_MODAL_CLICKED":
            break;
            case "woman_gesturing_no":
            break;
            case "woman_gesturing_no_dark_skin_tone":
            break;
            case "man_gesturing_no":
            break;
            case "man_gesturing_no_dark_skin_tone":
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
            case "closeSuspendedUser":
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
            case "maxBitrate":
            break;
            case "getBreadcrumbLogLevelFromHttpStatusCode":
            break;
            case "defaultRenderError":
            break;
            case "POMELO_ATTEMPT":
            break;
            case "POMELO_ATTEMPT_UNAUTHED":
            break;
            case "QUESTS_PREVIEW_COMPLETE":
            break;
            case "ANDROID_NOTIFICATION_LIGHTS":
            break;
            case "L":
            break;
            case "LI":
            break;
            case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
            break;
            case "MESSAGE_REACTION_ADD":
            break;
            case "MESSAGE_REACTION_ADD_MANY":
            break;
            case "FORUM_CHANNEL_TEXT_AREA":
            break;
            case "TEXT_AREA_CTA_CLICKED":
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
            case "withTestId":
            break;
            case "$ZodMap":
            break;
            case "ZodMap":
            break;
            case "M":
            break;
            case "ap":
            break;
            case "ReactNative":
            break;
            case "ReactNativeBridgeEventPlugin":
            break;
            case "Plugin":
            break;
            case "lug":
            break;
            case "plugins":
            break;
            case "encodeDotInKeys":
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
            case "PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID":
            break;
            case "TOGGLE_INBOX":
            break;
            case "TAB_LABEL_TEXT_DEFAULT":
            break;
            case "DEFAULT_STATE":
            break;
            case "PX_80":
            break;
            case "_":
            break;
            case "stickerButtonEnabled":
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
            case "shouldCollectMetrics":
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
            case "updateRelationship":
            break;
            case "removedVoiceStateUsers":
            break;
            case "getClipsDataDirSync":
            break;
            case "KRISP_INIT_ERROR_WEIGHT_8K":
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
            case "woman_elf_tone5":
            break;
            case "man_elf_tone5":
            break;
            case "elf_tone5":
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
            case "_frequently":
            break;
            case "freq":
            break;
            case "frequently":
            break;
            case "frequentlyUsed":
            break;
            case "frequentlyUsedReactionEmojis":
            break;
            case "isAMR":
            break;
            case "selfStreamParticipantsHidden":
            break;
            case "entropy":
            break;
            case "entropyAggregated":
            break;
            case "gatedChannelId":
            break;
            case "ActionSheetHeaderPressableText":
            break;
            case "Pressable":
            break;
            case "ex":
            break;
            case "ext":
            break;
            case "isObfuscated":
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
            case "assetContainer":
            break;
            case "ss":
            break;
            case "safelyMakeUrlHumanReadable":
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
            case "buildNumber":
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
            case "forEachEnvelopeItem":
            break;
            case "gifUrlKey":
            break;
            case "APP_LAUNCHER_FRECENTS_TOGGLED":
            break;
            case "TOGGLE":
            break;
            case "OGG":
            break;
            case "DCDNotificationCategoryUtils":
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
            case "UserLinkType":
            break;
            case "accessibleDismiss":
            break;
            case "accessibleDismissStyle":
            break;
            case "ble":
            break;
            case "leg_tone4":
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
            case "woman_lifting_weights_light_skin_tone":
            break;
            case "man_lifting_weights_light_skin_tone":
            break;
            case "GuildEntityDao":
            break;
            case "EntityDao":
              _HermesInternal = HermesInternal;
              str = "Ugyldig verdi i ";
              combined4 = "Ugyldig verdi i " + code.origin;
              return combined4;
            case "Dao":
            break;
            case "useIsFamilyCenterV3Enabled":
            break;
            case "requestGuildMembers":
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
            case "showGuildEventModeratorActionSheet":
            break;
            case "GuildEventModeratorAction":
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
            case "_hasError":
            break;
            case "hasErr":
            break;
            case "hasError":
            break;
            case "eventOriginIntegration":
            break;
            case "onSharedClientThemeViewed":
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
            case "preventedRoutes":
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
            case "handlePortalKeyboardOpen":
            break;
            case "numFinished":
            break;
            case "channelContainer":
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
            case "totalTime":
            break;
            case "isSelf":
            break;
            case "isSelfDeaf":
            break;
            case "afk_channel_id":
            break;
            case "_id":
            break;
            case "AUTO_MODERATION_ADD_KEYWORDS":
            break;
            case "KEYWORD":
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
            case "alembic":
            break;
            case "addUserId":
            break;
            case "disableGuildSelect":
            break;
            case "GuildSelectDefaultIcon":
            break;
            case "concatSettings":
            break;
            case "subscription_preview":
            break;
            case "previewAssetPaths":
            break;
            case "setPath":
            break;
            case "AvatarMoatmonsturrExample":
            break;
            case "atm":
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
            case "gaz":
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
            break;
            case "ug":
            break;
            case "initializeRuntimeStart":
            break;
            case "AccountAgeTier10LargeBadge":
            break;
            case "cou":
            break;
            case "Badge":
            break;
            case "fMap":
            break;
            case "applyDebugIds":
            break;
            case "showGuildSettingsStickerError":
            break;
            case "handleTypeChange":
            break;
            case "getAnalyticsId":
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
            case "containerInner":
            break;
            case "secondaryText":
            break;
            case "secondaryTextContainer":
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
            case "REFERENCE_ORIGINAL":
            break;
            case "ORIGINAL_MD5_HEADER":
            break;
            case "ROSE":
            break;
            case "SEASONAL_STANDARD_BOX":
            break;
            case "STANDARD_BOX":
            break;
            case "BOX_MODE_ACTIONSHEET_HEIGHT":
            break;
            case "apc":
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
            case "PlayStationLinkModalScenes":
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
            case "shouldTriggerResponderTransferOnScrollAndroid":
            break;
            case "removeFavoriteSound":
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
            case "isForGroupSetupModal":
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
            case "parentId":
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
            case "BUBBLING_PHASE":
            break;
            case "SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE":
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
            case "contentTopSpacing":
            break;
            case "g_v_I":
            break;
            case "_INTERNAL_captureLog":
            break;
            case "capture":
            break;
            case "LogOff":
            break;
            case "formatUserActivityTimestamp":
            break;
            case "SELECT_WEB_AUTH_METHOD":
            break;
            case "fetchesShelf":
            break;
            case "failImmediatelyWhenRateLimited":
            break;
            case "execTime":
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
            case "GiftIcon":
            break;
            case "GiftIconCoachmark":
            break;
            case "hand_with_index_and_middle_fingers_crossed_tone5":
            break;
            case "fingers_crossed_tone5":
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
            case "shouldShowBetaTag":
            break;
            case "getLastResponseNonce":
            break;
            case "mediaFilesAllowed":
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
            case "EntitlementTenantFulfillmentStatus":
            break;
            case "ill":
            break;
            case "__findAnimatedPropsNodes":
            break;
            case "destructiveIcon":
            break;
            case "containerLandscape":
            break;
            case "apexExperiments":
            break;
            case "showGenericGuildProfileUpdateFailureToast":
            break;
            case "getChannelFpInfo":
            break;
            case "forRevealFromBottomAndroid":
            break;
            case "RevealFromBottomAndroid":
            break;
            case "RevealFromBottomAndroidSpec":
            break;
            case "bottomSheetData":
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
              _HermesInternal = HermesInternal;
              str = "Ugyldig verdi i ";
              combined4 = "Ugyldig verdi i " + code.origin;
              return combined4;
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
            case "applyToGuild":
            break;
            case "fo":
            break;
            case "for":
            break;
            case "forEachChannel":
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
            case "_renderDebugOverlay":
            break;
            case "render":
            break;
            case "CreatorMonetizationApplicationState":
            break;
            case "PureComponent":
            break;
            case "scheduledTimestamp":
            break;
            case "parseOptionValuesForSend":
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
            case "connected_account_type":
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
            case "mostRecentLurkedGuildId":
            break;
            case "_guildId":
            break;
            case "gu":
            break;
            case "current_guild_id":
            break;
            case "getContentLength":
            break;
            case "EMOJI_UPLOAD_STARTED":
            break;
            case "INSTALL_LESS_APP_IDS":
            break;
            case "MEDIA_KEYBOARD_BAR_BORDER_RADIUS":
            break;
            case "USER_GAME_RELATIONSHIP":
            break;
            case "GAME_RELATIONSHIP_ADD":
            break;
            case "RELATIONSHIP_ADD":
            break;
            case "ADD_MODERATORS":
            break;
            case "MODERATOR":
            break;
            case "MODERATORS":
            break;
            case "SOCCER":
            break;
            case "CERTIFIED_MODERATOR":
            break;
            case "MODERATOR_QUEUE_ACTION":
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
            case "getResultItems":
            break;
            case "CUSTOM_BANNER_HASH":
            break;
            case "BANNER_HASH":
            break;
            case "SHADOW_MEDIUM":
            break;
            case "MEDIUM_BUTTON_ICON_SIZE":
            break;
            case "EXPRESSIVE_GRADIENT_BLUE_END":
            break;
            case "SLE":
            break;
            case "avatar_hash":
            break;
            case "_hash":
            break;
            case "hashKey":
            break;
            case "bhd":
            break;
            case "IN_APP_MEMBER_VERIFICATION_MODAL_KEY":
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
            case "E2EE_STREAM_VERIFICATION_CODE_COPIED":
            break;
            case "MFA_STEP":
            break;
            case "STEP_NUMBER_TEXT_FONT_BIG":
            break;
            case "BIGINT":
            break;
            case "BIGINT_FORMAT_RANGES":
            break;
            case "onRequestSpanEnd":
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
            case "withMessage":
            break;
            case "getBountyCtaInfo":
            break;
            case "forNoAnimation":
            break;
            case "onTapAutoModerationFeedback":
            break;
            case "rotating_light":
            break;
            case "light_blue_heart":
            break;
            case "blue_heart":
            break;
            case "heart_hands_tone2":
            break;
            case "badgeClassic":
            break;
            case "sick":
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
            case "registerSpanErrorInstrumentation":
            break;
            case "StickersSpotIllustration":
            break;
            case "AutoCompleteResultTypes":
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
            case "couple_with_heart_tone2":
            break;
            case "readUint":
            break;
            case "int":
            break;
            case "intlMessage":
            break;
            case "tl":
            break;
            case "getApexExperimentOverridesInfo":
            break;
            case "forFadeFromRightAndroid":
            break;
            case "FadeFromRightAndroid":
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
            case "ANIMATED_VIDEO_BG_HACKER_DEN_NEW":
            break;
            case "NEW_FORUM_THREADS_ON":
            break;
            case "NO_TRACKED_GAME":
            break;
            case "GAME_ADDED":
            break;
            case "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED":
            break;
            case "MISC":
            break;
            case "RED_530":
            break;
            case "js":
            break;
            case "xs":
            break;
            case "GUILD_SPACE":
            break;
            case "BLUE_330":
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
            case "toSearchListChannelItem":
            break;
            case "embedded_activity_location_kind":
            break;
            case "ki":
            break;
            case "kin":
            break;
            case "EvalError":
            break;
            default:
              return "Ugyldig input";
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