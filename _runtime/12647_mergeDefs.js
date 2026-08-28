// === Module 12647: mergeDefs ===

// Module 12647 (mergeDefs)
import mergeDefs from "mergeDefs" /* 12614 */;

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
      closure_0 = { string: { unit: { one: "simbolis", few: "simboliai", many: "simboli\u0173" }, verb: { smaller: { inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip", notInclusive: "turi b\u016Bti trumpesn\u0117 kaip" }, bigger: { inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip", notInclusive: "turi b\u016Bti ilgesn\u0117 kaip" } } }, file: { unit: { one: "baitas", few: "baitai", many: "bait\u0173" }, verb: { smaller: { inclusive: "turi b\u016Bti ne didesnis kaip", notInclusive: "turi b\u016Bti ma\u017Eesnis kaip" }, bigger: { inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip", notInclusive: "turi b\u016Bti didesnis kaip" } } }, array: { unit: { one: "element\u0105", few: "elementus", many: "element\u0173" }, verb: { smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" }, bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" } } }, set: { unit: { one: "element\u0105", few: "elementus", many: "element\u0173" }, verb: { smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" }, bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" } } } };
      closure_1 = { regex: "\u012Fvestis", email: "el. pa\u0161to adresas", url: "URL", emoji: "jaustukas", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO data ir laikas", date: "ISO data", time: "ISO laikas", duration: "ISO trukm\u0117", ipv4: "IPv4 adresas", ipv6: "IPv6 adresas", cidrv4: "IPv4 tinklo prefiksas (CIDR)", cidrv6: "IPv6 tinklo prefiksas (CIDR)", base64: "base64 u\u017Ekoduota eilut\u0117", base64url: "base64url u\u017Ekoduota eilut\u0117", json_string: "JSON eilut\u0117", e164: "E.164 numeris", jwt: "JWT", template_literal: "\u012Fvestis" };
      closure_2 = { nan: "NaN", number: "skai\u010Dius", bigint: "sveikasis skai\u010Dius", string: "eilut\u0117", boolean: "login\u0117 reik\u0161m\u0117", undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117", function: "funkcija", symbol: "simbolis", array: "masyvas", object: "objektas", null: "nulin\u0117 reik\u0161m\u0117" };
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
            case "container":
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
            case "guildIconText":
            break;
            case "IconTextBadge":
            break;
            case "TextBadge":
            break;
            case "useTraitHiddenOnAndroid":
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
            case "captureBillingException":
            break;
            case "stateDataTranslator":
            break;
            case "LanternSpotIllustration":
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
            case "MarketingPageBanner":
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
            case "earlyCacheInfo":
            break;
            case "footerSuggestionsContainer":
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
            case "with_bundled_skus":
            break;
            case "purchaseUpdatedListener":
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
            case "renderExecutedCommands":
            break;
            case "totalTokens":
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
            case "benefitType":
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
            case "SETTINGS_DESKTOP_APP":
            break;
            case "PX_80":
            break;
            case "_":
            break;
            case "XFU":
            break;
            case "computeEntries":
            break;
            case "subscription_trial":
            break;
            case "subscription_trial_id":
            break;
            case "trial_id":
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
            case "woman_and_man_holding_hands_tone2":
            break;
            case "woman_and_man_holding_hands_tone2_tone1":
            break;
            case "_parsedMessages":
            break;
            case "parsed":
            break;
            case "parsedMessage":
            break;
            case "view_watch_time":
            break;
            case "timeToInteractiveMs":
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
            case "cacheDisabled":
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
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp84 = closure_2[parsedTypeResult];
              if (tmp84 == null) {
                tmp84 = parsedTypeResult;
              }
              if (obj3.test(code.expected)) {
                const _HermesInternal14 = HermesInternal;
                let combined = "Gautas tipas " + tmp84 + ", o tik\u0117tasi - instanceof " + code.expected;
              } else {
                const _HermesInternal13 = HermesInternal;
                combined = "Gautas tipas " + tmp84 + ", o tik\u0117tasi - " + expected;
              }
              return combined;
            case "as":
            break;
            case "ass":
              if (1 === code.values.length) {
                const _HermesInternal12 = HermesInternal;
                let combined1 = "Privalo b\u016Bti " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal11 = HermesInternal;
                combined1 = "Privalo b\u016Bti vienas i\u0161 " + closure_2.joinValues(code.values, "|") + " pasirinkim\u0173";
              }
              return combined1;
            case "asset":
            break;
            case "assetDark":
              let str45 = closure_2[code.origin];
              if (str45 == null) {
                str45 = code.origin;
              }
              const _Number2 = Number;
              const _Math2 = Math;
              const absolute = Math.abs(Number(code.maximum));
              const result = absolute % 10;
              const result1 = absolute % 100;
              if (11 > result1) {
                let str46 = "many";
                if (0 !== result) {
                  let str47 = "few";
                  if (1 === result) {
                    str47 = "one";
                  }
                  str46 = str47;
                }
              } else {
                str46 = "many";
              }
              let flag2 = code.inclusive;
              if (flag2 == null) {
                flag2 = false;
              }
              let tmp55 = dependencyMap[code.origin];
              if (tmp55 == null) {
                tmp55 = null;
              }
              let tmp56 = tmp55;
              if (null !== tmp55) {
                let obj = { unit: null, verb: null };
                obj[0] = tmp55.unit[str46];
                let str48 = "notInclusive";
                if (flag2) {
                  str48 = "inclusive";
                }
                obj[1] = tmp55.verb.smaller[str48];
                tmp56 = obj;
              }
              let verb;
              if (tmp56 != null) {
                verb = tmp56.verb;
              }
              if (verb) {
                if (str45 == null) {
                  str45 = code.origin;
                }
                if (str45 == null) {
                  str45 = "reik\u0161m\u0117";
                }
                if (typeof closure_1_3 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const formatted = str45.charAt(0).toUpperCase();
                const sum = formatted + str45.slice(1);
                const verb2 = tmp56.verb;
                let str = code.maximum.toString();
                let str60 = tmp56.unit;
                if (str60 == null) {
                  str60 = "element\u0173";
                }
                const _HermesInternal10 = HermesInternal;
                return "" + sum + " " + verb2 + " " + str + " " + str60;
              } else {
                let str49 = "ma\u017Eesnis kaip";
                if (code.inclusive) {
                  str49 = "ne didesnis kaip";
                }
                let str50 = str45;
                if (str45 == null) {
                  str50 = code.origin;
                }
                if (str50 == null) {
                  str50 = "reik\u0161m\u0117";
                }
                if (typeof closure_1_3 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const formatted1 = str50.charAt(0).toUpperCase();
                const sum1 = formatted1 + str50.slice(1);
                const str1 = code.maximum.toString();
                let unit;
                if (tmp56 != null) {
                  unit = tmp56.unit;
                }
                const _HermesInternal9 = HermesInternal;
                return "" + sum1 + " turi b\u016Bti " + str49 + " " + str1 + " " + unit;
              }
            break;
            case "ss":
            break;
            case "_w":
              let str24 = closure_2[code.origin];
              if (str24 == null) {
                str24 = code.origin;
              }
              code = globalThis;
              const _Number = Number;
              const _Math = Math;
              const absolute1 = Math.abs(Number(code.minimum));
              const result2 = absolute1 % 10;
              const result3 = absolute1 % 100;
              if (11 > result3) {
                let str25 = "many";
                if (0 !== result2) {
                  let str26 = "few";
                  if (1 === result2) {
                    str26 = "one";
                  }
                  str25 = str26;
                }
              } else {
                str25 = "many";
              }
              let flag = code.inclusive;
              if (flag == null) {
                flag = false;
              }
              let tmp28 = dependencyMap[code.origin];
              if (tmp28 == null) {
                tmp28 = null;
              }
              let tmp29 = tmp28;
              if (null !== tmp28) {
                obj = { unit: null, verb: null };
                obj[0] = tmp28.unit[str25];
                let str27 = "notInclusive";
                if (flag) {
                  str27 = "inclusive";
                }
                obj[1] = tmp28.verb.bigger[str27];
                tmp29 = obj;
              }
              let verb1;
              if (tmp29 != null) {
                verb1 = tmp29.verb;
              }
              if (verb1) {
                if (str24 == null) {
                  str24 = code.origin;
                }
                if (str24 == null) {
                  str24 = "reik\u0161m\u0117";
                }
                if (typeof closure_1_3 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const formatted2 = str24.charAt(0).toUpperCase();
                const sum2 = formatted2 + str24.slice(1);
                verb = tmp29.verb;
                let str2 = code.minimum.toString();
                let str39 = tmp29.unit;
                if (str39 == null) {
                  str39 = "element\u0173";
                }
                return "" + sum2 + " " + verb + " " + str2 + " " + str39;
              } else {
                let str28 = "didesnis kaip";
                if (code.inclusive) {
                  str28 = "ne ma\u017Eesnis kaip";
                }
                let str29 = str24;
                if (str24 == null) {
                  str29 = code.origin;
                }
                if (str29 == null) {
                  str29 = "reik\u0161m\u0117";
                }
                if (typeof closure_1_3 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const formatted3 = str29.charAt(0).toUpperCase();
                const sum3 = formatted3 + str29.slice(1);
                let str3 = code.minimum.toString();
                let unit1;
                if (tmp29 != null) {
                  unit1 = tmp29.unit;
                }
                return "" + sum3 + " turi b\u016Bti " + str28 + " " + str3 + " " + unit1;
              }
            break;
            case "wo":
            break;
            case "work":
              if ("starts_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                let combined2 = "Eilut\u0117 privalo prasid\u0117ti \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined2 = "Eilut\u0117 privalo pasibaigti \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined2 = "Eilut\u0117 privalo \u012Ftraukti \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal5 = HermesInternal;
                combined2 = "Eilut\u0117 privalo atitikti " + code.pattern;
              } else {
                let format = table[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal4 = HermesInternal;
                combined2 = "Neteisingas " + format;
              }
              return combined2;
            case "worklet":
            break;
            case "kl":
              const _HermesInternal3 = HermesInternal;
              return "Skai\u010Dius privalo b\u016Bti " + code.divisor + " kartotinis.";
            case "let":
            break;
            case "Hash":
              let str6 = "as";
              let str7 = "as";
              if (code.keys.length > 1) {
                str7 = "i";
              }
              if (code.keys.length > 1) {
                str6 = "ai";
              }
              const _HermesInternal2 = HermesInternal;
              return "Neatpa\u017Eint" + str7 + " rakt" + str6 + ": " + closure_2.joinValues(code.keys, ", ");
            case "sh":
            break;
            case "flag_de":
              return "Rastas klaidingas raktas";
            case "de":
            break;
            case "desired":
              return "Klaidinga \u012Fvestis";
            case "es":
            break;
            case "si":
              str = closure_2[code.origin];
              if (str == null) {
                str = code.origin;
              }
              let tmp3 = closure_1_3;
              if (str == null) {
                str = code.origin;
              }
              if (str == null) {
                str = "reik\u0161m\u0117";
              }
              if (typeof tmp3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              str2 = str.charAt(0);
              let formatted4 = str2.toUpperCase();
              let substr = str.slice(1);
              let sum4 = formatted4 + substr;
              let _HermesInternal = HermesInternal;
              str3 = " turi klaiding\u0105 \u012Fvest\u012F";
              let combined3 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined3;
            case "sir":
            break;
            case "red":
            break;
            case "redBoxV2Android":
            break;
            case "createPublicInstance":
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
            case "SETTINGS_SENSITIVE_MEDIA_FILTERS":
            break;
            case "SENSITIVE_MEDIA_FILTERS":
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
            case "NOTIF_CENTER_ITEMS":
            break;
            case "NOTIF_CENTER_ITEMS_ACK":
            break;
            case "ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON":
            break;
            case "NER":
            break;
            case "FEED":
            break;
            case "BUTTON_CORNER_RADIUS":
            break;
            case "USER_CONTACTS_SYNC":
            break;
            case "PROFILE_THEMES_SETTINGS_VIEWED_V2":
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
            case "useThenable":
            break;
            case "enableAccessibilityFocusLock":
            break;
            case "TWITTER_VERIFIED":
            break;
            case "VERIFIED_TEEN":
            break;
            case "TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM":
            break;
            case "NON_FRIEND_DM":
            break;
            case "DM_FRIEND_NUDGE":
            break;
            case "STICKER_AUTOCOMPLETE":
            break;
            case "AUTOCOMPLETE_OPTION_DEBOUNCE_TIME":
            break;
            case "TIME_OVER_DEADLINE":
            break;
            case "DEAD":
            break;
            case "DEADLINE_INITIAL_TIME_REMAINING":
            break;
            case "GDPR_REQUEST_DATA":
            break;
            case "REQUEST_DATA":
            break;
            case "REQUEST_DATA_LIMIT_DAYS":
            break;
            case "GuildEntityDao":
            break;
            case "EntityDao":
            break;
            case "Dao":
            break;
            case "renderThreadEmbeds":
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
            case "trequest":
            break;
            case "requestActivityItems":
            break;
            case "black_nib":
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
            case "guildIconBorder":
            break;
            case "orderCollapsed":
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
            case "hasAction":
            break;
            case "hasActionSheetOpen":
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
            case "browserLinkedErrorsIntegration":
            break;
            case "onHasEdits":
            break;
            case "getSendMessageOptionsForReply":
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
            case "adRequestId":
            break;
            case "disableGuildSelect":
            break;
            case "GuildSelectDefaultIcon":
            break;
            case "concatSettings":
            break;
            case "subtractOrZero":
            break;
            case "ROBOT_VOICE":
            break;
            case "VOICE_ACTION_SHEET":
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
            case "expandCTALabelContainer":
            break;
            case "CTALabel":
            break;
            case "selectionHandleColor":
            break;
            case "_$esjava$cursor":
            break;
            case "cursorColor":
            break;
            case "so":
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
            case "shouldUseDMWishlistGiftingDesign":
            break;
            case "connectOrLurkStage":
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
            case "breast_feeding_medium_light_skin_tone":
            break;
            case "one_thirty":
            break;
            case "eP8yWU":
            break;
            case "WUTHERING_WAVES":
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
            case "payment_source_id":
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
            case "PrivacyShieldLaptopSpotIllustration":
            break;
            case "LaptopSpotIllustration":
            break;
            case "parent_span_id":
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
            case "contentSelectPlan":
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
              str = closure_2[code.origin];
              if (str == null) {
                str = code.origin;
              }
              tmp3 = closure_1_3;
              if (str == null) {
                str = code.origin;
              }
              if (str == null) {
                str = "reik\u0161m\u0117";
              }
              if (typeof tmp3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              str2 = str.charAt(0);
              formatted4 = str2.toUpperCase();
              substr = str.slice(1);
              sum4 = formatted4 + substr;
              _HermesInternal = HermesInternal;
              str3 = " turi klaiding\u0105 \u012Fvest\u012F";
              combined3 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined3;
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
            case "shouldShowBountiesGivenFilters":
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
            case "safeRe":
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
            case "SeverHubAbstractUI":
            break;
            case "[object Date]":
            break;
            case "EntitlementTenantFulfillmentStatus":
            break;
            case "ill":
            break;
            case "__findAnimatedPropsNodes":
            break;
            case "formatActiveA11yTimestamp":
            break;
            case "MILLIMETERS":
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
            case "overrideQuestForPlacement":
            break;
            case "iconBorderRadius":
            break;
            case "useCanManageGuildRoleSubscriptions":
            break;
            case "fo":
            break;
            case "for":
            break;
            case "forEachChannel":
            break;
            case "useAnimatedValue":
            break;
            case "ValueXY":
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
            case "checkoutSdk":
            break;
            case "BILLING_PAYMENT":
            break;
            case "BILLING_PAYMENTS":
            break;
            case "BILLING_PAYMENTS_VOID":
            break;
            case "getChannelA11yHint":
            break;
            case "Channel":
            break;
            case "interpolationIndex":
            break;
            case "explicitMediaFalsePositiveInfo":
            break;
            case "footerTitle":
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
            case "getCopy":
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
            case "indicatorSpace":
            break;
            case "mediaMention":
            break;
            case "getGiftCode":
            break;
            case "getGiftCodeRedeemError":
            break;
            case "avatar_hash":
            break;
            case "_hash":
            break;
            case "hashKey":
            break;
            case "propsAndStyles":
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
            case "_touchState":
            break;
            case "touchState":
            break;
            case "optInChannels":
            break;
            case "optInChannelsEnabled":
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
            case "withMutualGuilds":
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
            case "parseUrl":
            break;
            case "parseUrlencoded":
            break;
            case "encodedBodySize":
            break;
            case "presentTimestamp":
            break;
            case "parseLinks":
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
            case "registerTransportsForEmbeddedPlatform":
            break;
            case "formQuestion":
            break;
            case "QuestionSelectorEnum":
            break;
            case "onSelect":
            break;
            case "numAvailableGuildBoostSlots":
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
            case "lkr":
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
            case "REQUIRES_PAYMENT_METHOD":
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
            case "isNestedNavigator":
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
            case "SELF_PRESENCE_STORE_UPDATE":
            break;
            case "skuIDs":
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
            case "lockdown_duration_hours":
            break;
            case "hours":
            break;
            case "hoursAgo":
            break;
            case "goLiveModalDurationMs":
            break;
            case "analyticsId":
            break;
            case "disableIntegration":
            break;
            case "onRedeemVirtualCurrency":
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
            case "shouldShowStep":
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
            case "linkTextLocalized":
            break;
            case "Omnibutton":
              str = closure_2[code.origin];
              if (str == null) {
                str = code.origin;
              }
              tmp3 = closure_1_3;
              if (str == null) {
                str = code.origin;
              }
              if (str == null) {
                str = "reik\u0161m\u0117";
              }
              if (typeof tmp3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              str2 = str.charAt(0);
              formatted4 = str2.toUpperCase();
              substr = str.slice(1);
              sum4 = formatted4 + substr;
              _HermesInternal = HermesInternal;
              str3 = " turi klaiding\u0105 \u012Fvest\u012F";
              combined3 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined3;
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
            case "getEmojiUnavailableReason":
            break;
            case "getEmojiUnavailableReasons":
            break;
            case "glowMaskGradient":
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
            case "setTextValue":
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
            case "woman_and_man_holding_hands_tone1_tone3":
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
            case "CLIENT_PORT_ATTRIBUTE":
            break;
            case "getCurrentScope":
            break;
            case "openForwardModal":
            break;
            case "_pushCells":
            break;
            case "pus":
            break;
            case "rad":
            break;
            case "ii":
            break;
            case "DrawerActions":
            break;
            case "aw":
            break;
            case "awe":
            break;
            case "getDefaultInGameTask":
            break;
            case "FAVORITES_GUILD_UPSELL_MODAL":
            break;
            case "FAVORITES_GUILD_UPSELL_MODAL_OPENED":
            break;
            case "INSTANT_INVITE_OPTION_CLICKED":
            break;
            case "GiftingTier3SmallBadge":
            break;
            case "selectedAvatar":
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
            case "isCamera":
            break;
            case "EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT":
            break;
            case "kiss_person_person_medium_dark_skin_tone_dark_skin_tone":
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
            case "userAgeRange":
            break;
            case "getBrightness":
            break;
            case "BrightnessDown":
            break;
            case "ownerId":
            break;
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
            case "dispatchException":
            break;
            case "dispatchExceptionBackoff":
            break;
            case "onBack":
            break;
            case "keyboardType":
            break;
            case "keyboardTypePrevious":
            break;
            case "useCanPostPollsInChannel":
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
            case "merperson_tone5":
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
            case "_safeDecode":
            break;
            case "_safeDecodeAsync":
            break;
            case "safe":
            break;
            case "safeDecode":
            break;
            case "safeDecodeAsync":
            break;
            case "syncAndroidClipBoundsWithOverflow":
            break;
            case "getNativeScrollRef":
            break;
            case "strokeWidth":
            break;
            case "GET_GUILD_TIMED_OUT":
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
            case "TOGGLE_REACTION_POPOUT":
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
            case "woman_climbing_tone4":
            break;
            case "man_climbing_tone4":
            break;
            case "appeal_status":
            break;
            case "_status":
            break;
            case "statusAllowsPerks":
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
            case "gameRecord":
            break;
            case "PostponeRender":
            break;
            case "DEPRECATED_style":
            break;
            case "_style":
            break;
            case "sty":
            break;
            case "styleAttr":
            break;
            case "CUSTOM_THEME_SHARE_PREVIEWED":
            break;
            case "overrideRegistrationOptions":
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
            case "sortActivity":
            break;
            case "epochAuthenticator":
            break;
            case "AuthenticatorType":
            break;
            case "the":
            break;
            case "people_holding_hands_medium_skin_tone_medium_light_skin_tone":
            break;
            case "DEFAULT_INITIAL_NUM_TO_RENDER":
            break;
            case "INITIAL_NUM_TO_RENDER":
            break;
            case "ScreenStackHeaderConfig":
            break;
            case "getNextAuthState":
            break;
            case "secrets":
            break;
            case "[object Boolean]":
            break;
            case "elementId":
            break;
            case "EntitlementFeatureNames":
            break;
            case "submitSurveyResponse":
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
            case "couple_with_heart_woman_woman_medium_skin_tone":
            break;
            case "couple_with_heart_woman_woman_medium_skin_tone_dark_skin_tone":
            break;
            case "next_track":
            break;
            case "_trackIfSessionMetadataExists":
            break;
            case "tra":
            break;
            case "rac":
            break;
            case "shouldUseNewNotificationSystem":
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
            case "useSelectedVersionedDismissibleContent":
            break;
            case "SelectedVersionedDismissibleContent":
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
            case "bath":
            break;
            case "bath_tone1":
            break;
            case "compareLayerFiles":
            break;
            case "subscribeWithSelector":
            break;
            case "runner_tone4":
            break;
            case "useEffectEvent":
            break;
            case "ff":
            break;
            case "fec":
            break;
            case "ClydeHologramSpotIllustration":
            break;
            case "useMemoArray":
            break;
            case "Memo":
            break;
            case "installApplication":
            break;
            case "installApplicationOnDemandIfNeeded":
            break;
            case "OnDemand":
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
            case "_raf":
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
            case "HandRequestDenyIcon":
            break;
            case "DenyIcon":
            break;
            case "selected_time_window":
            break;
            case "win":
              str = closure_2[code.origin];
              if (str == null) {
                str = code.origin;
              }
              tmp3 = closure_1_3;
              if (str == null) {
                str = code.origin;
              }
              if (str == null) {
                str = "reik\u0161m\u0117";
              }
              if (typeof tmp3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              str2 = str.charAt(0);
              formatted4 = str2.toUpperCase();
              substr = str.slice(1);
              sum4 = formatted4 + substr;
              _HermesInternal = HermesInternal;
              str3 = " turi klaiding\u0105 \u012Fvest\u012F";
              combined3 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined3;
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
            case "pregnant_man_tone2":
            break;
            case "storeDidChange":
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
            case "#11806a":
            break;
            case "triggerButton":
            break;
            case "_timingStats":
            break;
            case "USER_MODAL_MUTE":
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
            case "putRoleConnectionsConfigurations":
            break;
            case "#2ecc71":
            break;
            case "FAVORITES_GUILD_SUGGESTIONS":
            break;
            case "GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED":
            break;
            case "getAcronym":
            break;
            case "mfaEnabled":
            break;
            case "#3498db":
            break;
            case "useEnableCommunitySharedStyles":
            break;
            case "targetSeatId":
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
            case "GUILD_ROOM_SPATIAL_AUDIO_ENABLED":
            break;
            case "SPATIAL_AUDIO":
            break;
            case "toArray":
            break;
            case "canOpenURL":
            break;
            case "useNavigation":
            break;
            case "useNavigationBuilder":
            break;
            case "NavigationBuilderContext":
            break;
            case "textDisabled":
            break;
            case "#71368a":
            break;
            case "#95a5a6":
            break;
            case "#979c9f":
            break;
            case "couple_with_heart_woman_man_tone4_tone5":
            break;
            case "6MwJo/":
            break;
            case "#992d22":
            break;
            case "#99aab5":
            break;
            case "aa":
            break;
            case "shouldContinueTrace":
            break;
            case "max_tokens":
            break;
            case "ReactFiberErrorDialog":
            break;
            case "Dialog":
            break;
            case "alo":
            break;
            case "showErrorDialog":
            break;
            case "LeafIllocon":
            break;
            case "#9b59b6":
            break;
            case "b64ToDeclarativeSettingsProto":
            break;
            case "DeclarativeSettings":
            break;
            case "ProtoAudioSettingsContextTypes":
            break;
            case "#a84300":
            break;
            case "beforeSpanEnd":
            break;
            case "#ad1457":
            break;
            case "fetchScheduledMessages":
            break;
            case "blockEnd":
            break;
            case "#c27c0e":
            break;
            case "#e":
            break;
            case "#e67e22":
            break;
            case "#e74c3c":
            break;
            case "_lastSentSSRC":
            break;
            case "DeviceEventEmitter":
            break;
            case "EventEmitter":
            break;
            case "#e91e63":
            break;
            case "blockStart":
            break;
            case "#f1c40f":
            break;
            case "f1":
            break;
            case "URLSearchParams":
            break;
            case "$$typeof":
            break;
            case "typeofJsonValue":
            break;
            case "onValueUpdated":
            break;
            case "memberListGradient":
            break;
            case "claimableRewards":
            break;
            case "showWithheldBadge":
            break;
            case "getBannerMode":
            break;
            case "defaultPreview":
            break;
            case "$ZodAny":
            break;
            case "Z":
            break;
            case "ZodAny":
            break;
            case "Any":
            break;
            case "ny":
            break;
            case "notificationSoundPackId":
            break;
            case "topSheetDetentChanged":
            break;
            case "SETTINGS_PREMIUM":
            break;
            case "SETTINGS_PREMIUM_GIFTING":
            break;
            case "PREMIUM_GIFTING":
            break;
            case "GIFTING_BADGE_INFO_ACTION_SHEET_OPENED":
            break;
            case "keyedListeners":
            break;
            case "setUpTests":
            break;
            case "useShouldHideGuildPurchaseEntryPoints":
            break;
            case "useOriginalIfSmaller":
            break;
            case "$ZodArray":
            break;
            case "ZodArray":
            break;
            case "$ZodAsyncError":
            break;
            case "sy":
            break;
            case "syn":
            break;
            case "sync":
            break;
            case "processUtils":
            break;
            case "kaa":
            break;
            case "kaaba":
            break;
            case "abacus":
            break;
            case "custard":
            break;
            case "display_name":
            break;
            case "display_name_colors":
            break;
            case "handleClear":
            break;
            case "handleClearCaches":
            break;
            case "ENABLE_COMMUNITY_FLOW_MODAL_KEY":
            break;
            case "$ZodBase64":
            break;
            case "$ZodBase64URL":
            break;
            case "ZodBase64":
            break;
            case "ZodBase64URL":
            break;
            case "ase":
            break;
            case "URL":
            break;
            case "QiafXT":
            break;
            case "XTS":
            break;
            case "zeroPaddingVertical":
            break;
            case "calculateProfileEffectHeight":
            break;
            case "$ZodBigInt":
            break;
            case "$ZodBigIntFormat":
            break;
            case "ZodBigInt":
            break;
            case "ZodBigIntFormat":
            break;
            case "BigInt":
            break;
            case "Form":
            break;
            case "FormatBuilder":
            break;
            case "openTextInVoiceIfVoiceChannel":
            break;
            case "enforcedHeight":
            break;
            case "$ZodCIDRv4":
            break;
            case "ZodCIDRv4":
            break;
            case "CI":
            break;
            case "ID":
            break;
            case "IDR":
            break;
            case "v4":
            break;
            case "$ZodCIDRv6":
            break;
            case "ZodCIDRv6":
            break;
            case "v6":
            break;
            case "$ZodCUID":
            break;
            case "$ZodCUID2":
            break;
            case "ZodCUID":
            break;
            case "ZodCUID2":
            break;
            case "2IW3C5":
            break;
            case "C5q+pW":
            break;
            case "pW3Ip3":
            break;
            case "hasViewManagerConfig":
            break;
            case "$ZodCatch":
            break;
            case "ZodCatch":
            break;
            case "Cat":
            break;
            case "collectGuildAnalyticsMetadata":
            break;
            case "dataChangeEpoch":
            break;
            case "closable":
            break;
            case "bottomArrow":
            break;
            case "ArrowButton":
            break;
            case "rowButton":
            break;
            case "$ZodCheck":
            break;
            case "$ZodCheckBigIntFormat":
            break;
            case "FormatJsNodeType":
            break;
            case "person_walking_facing_right_tone5":
            break;
            case "$ZodCheckEndsWith":
            break;
            case "End":
            break;
            case "nds":
            break;
            case "WithLocalSvg":
            break;
            case "LocalSvg":
            break;
            case "Svg":
            break;
            case "SvgAst":
            break;
            case "createProfileChunkPayload":
            break;
            case "$ZodCheckIncludes":
            break;
            case "deserialize":
            break;
            case "deserializeCache":
            break;
            case "isELF":
            break;
            case "FAMILY_CENTER_HANDLE_TAB_SELECT":
            break;
            case "SELECT_ACTIVITY":
            break;
            case "ACTIVITY_LAUNCH_INVALID_CHANNEL_NO_AFK":
            break;
            case "INVALID":
            break;
            case "INVALID_CHANNEL":
            break;
            case "VALID":
            break;
            case "AF":
            break;
            case "AFK":
            break;
            case "AFK_TIMEOUT":
            break;
            case "FK":
            break;
            case "TIMEOUT":
            break;
            case "TIMEOUT_DURATION":
            break;
            case "currentPayload":
            break;
            case "iii":
            break;
            case "$ZodCheckLengthEquals":
            break;
            case "q":
            break;
            case "qu":
            break;
            case "qua":
            break;
            case "alsoForwardToChannelId":
            break;
            case "ls":
            break;
            case "disableHomeAutoNav":
            break;
            case "calendarFormat":
            break;
            case "calendarFormatCompact":
            break;
            case "activeSpeakerIcon":
            break;
            case "confirmRedirectedPaymentSource":
            break;
            case "$ZodCheckLessThan":
            break;
            case "hand_with_index_finger_and_thumb_crossed_tone3":
            break;
            case "generateSessionId":
            break;
            case "useNavigatorBackPressHandler":
            break;
            case "BackPressHandler":
            break;
            case "$ZodCheckLowerCase":
            break;
            case "USER_MODAL_LEARN_MORE":
            break;
            case "REGISTER_SUBMIT_ERRORED":
            break;
            case "ERRORED":
            break;
            case "CLEAR_TEXT":
            break;
            case "TEXT_ENTRY":
            break;
            case "$ZodCheckMaxSize":
            break;
            case "getPremiumType":
            break;
            case "getPremiumTypeActual":
            break;
            case "useGuildActiveEvent":
            break;
            case "$ZodCheckMimeType":
            break;
            case "peekGradient":
            break;
            case "PREMIUM_INLINE_ROADBLOCK":
            break;
            case "BLOCK_USER_CONFIRMED":
            break;
            case "MEDIA_ENGINE_SOUNDSHARE_FAILED":
            break;
            case "SOUNDSHARE_FAILED":
            break;
            case "$ZodCheckMinLength":
            break;
            case "Mi":
            break;
            case "thirdPartyTaskDetails":
            break;
            case "D20SpotIllustration":
            break;
            case "$ZodCheckMinSize":
            break;
            case "$ZodCheckMultipleOf":
            break;
            case "Multiple":
            break;
            case "tip":
            break;
            case "coerceAudioContextForProto":
            break;
            case "ProtoClass":
            break;
            case "$ZodCheckOverwrite":
            break;
            case "rw":
            break;
            case "write":
            break;
            case "writeASCII":
            break;
            case "IS_FETCHING":
            break;
            case "FETCHING":
            break;
            case "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS":
            break;
            case "Soft4":
            break;
            case "hsva":
            break;
            case "$ZodCheckProperty":
            break;
            case "eventDescriptionContainer":
            break;
            case "touchableHandleResponderRelease":
            break;
            case "setNoExtractUI":
            break;
            case "UI_LOAD":
            break;
            case "UI_LOAD_FULL_DISPLAY":
            break;
            case "DISPLAY_MEDIA_UPLOADS":
            break;
            case "$ZodCheckRegex":
            break;
            case "SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_ELIGIBILITY":
            break;
            case "$ZodCheckSizeEquals":
            break;
            case "DCDDeviceManager":
            break;
            case "heroVideo":
            break;
            case "fpsWindowBorderlineCount":
            break;
            case "$ZodCheckStartsWith":
            break;
            case "backgroundAssetUrl":
            break;
            case "bugReporterEnabled":
            break;
            case "removeFromMsgDraft":
            break;
            case "errorSampleRate":
            break;
            case "h850Ss":
            break;
            case "$ZodCheckStringFormat":
            break;
            case "FormatNumeric":
            break;
            case "FormatNumericToString":
            break;
            case "ToString":
            break;
            case "expectedCurrency":
            break;
            case "currencyIsoCode":
              str = closure_2[code.origin];
              if (str == null) {
                str = code.origin;
              }
              tmp3 = closure_1_3;
              if (str == null) {
                str = code.origin;
              }
              if (str == null) {
                str = "reik\u0161m\u0117";
              }
              if (typeof tmp3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              str2 = str.charAt(0);
              formatted4 = str2.toUpperCase();
              substr = str.slice(1);
              sum4 = formatted4 + substr;
              _HermesInternal = HermesInternal;
              str3 = " turi klaiding\u0105 \u012Fvest\u012F";
              combined3 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined3;
            case "deepLinkUri":
            break;
            case "welcome_channels":
            break;
            case "channelsTransaction":
            break;
            case "actionButtonWrapper":
            break;
            case "perceptualToAmplitude":
            break;
            case "deviceOption":
            break;
            case "onRNCSliderSlidingStart":
            break;
            case "$ZodCheckUpperCase":
            break;
            case "getButtonActionHandler":
            break;
            case "$ZodCodec":
            break;
            case "ZodCodec":
            break;
            case "Code":
            break;
            case "dec":
            break;
            case "decay":
            break;
            case "decayInterval":
            break;
            case "validateSecureFramesKeyConsistent":
            break;
            case "Avatar05/Fill":
            break;
            case "lld":
            break;
            case "$ZodCustom":
            break;
            case "$ZodCustomStringFormat":
            break;
            case "ZodCustom":
            break;
            case "ZodCustomStringFormat":
            break;
            case "Custom":
            break;
            case "sto":
            break;
            case "$ZodDefault":
            break;
            case "ZodDefault":
            break;
            case "Default":
            break;
            case "DefaultCreatorMonetizationRestrictions":
            break;
            case "CreatorMonetizationRestrictions":
            break;
            case "ctaOnHover":
            break;
            case "Hover":
            break;
            case "HoverEffect":
            break;
            case "EffectDisplayType":
            break;
            case "people_hugging":
            break;
            case "hug":
            break;
            case "hugging":
            break;
            case "hugging_face":
            break;
            case "$ZodDiscriminatedUnion":
            break;
            case "ZodDiscriminatedUnion":
            break;
            case "nat":
            break;
            case "nio":
            break;
            case "OPACITY_YELLOW_32":
            break;
            case "lastUsedCommandId":
            break;
            case "createStore":
            break;
            case "doNotNotifyOnError":
            break;
            case "$ZodE164":
            break;
            case "ZodE164":
            break;
            case "$ZodEmail":
            break;
            case "ZodEmail":
            break;
            case "mai":
            break;
            case "ail":
            break;
            case "$ZodEmoji":
            break;
            case "ZodEmoji":
            break;
            case "Emoji":
            break;
            case "EmojiIntention":
            break;
            case "oj":
            break;
            case "ji":
            break;
            case "$ZodEncodeError":
            break;
            case "ncode":
            break;
            case "sessionTimingIntegration":
            break;
            case "openid_params":
            break;
            case "BLUE_TEAL":
            break;
            case "TEAL":
            break;
            case "TEAL_430":
            break;
            case "$ZodEnum":
            break;
            case "ZodEnum":
            break;
            case "num lock":
            break;
            case "lockState":
            break;
            case "$ZodError":
              return "Rastas klaidingas raktas";
            case "message_urf":
            break;
            case "rfc2822":
            break;
            case "$ZodExactOptional":
            break;
            case "ZodExactOptional":
            break;
            case "act":
            break;
            case "api_error":
            break;
            case "_error":
            break;
            case "_errorOriginal":
            break;
            case "getScaledChannelSubtitleHeight":
            break;
            case "$ZodFile":
            break;
            case "ZodFile":
            break;
            case "File":
            break;
            case "javascript":
            break;
            case "javascript:":
            break;
            case "$ZodFunction":
            break;
            case "ZodFunction":
            break;
            case "Function":
            break;
            case "getViewProp":
            break;
            case "commandText":
            break;
            case "externalSimultaneousHandlers":
            break;
            case "GUILD_SETTINGS_AUDIT_LOG":
            break;
            case "$ZodGUID":
            break;
            case "ZodGUID":
            break;
            case "GU":
            break;
            case "ID_REGEX":
            break;
            case "EXPERIMENT_FETCH_IGNORED":
            break;
            case "IGNORED_GROUP":
            break;
            case "createFromGuildRecord":
            break;
            case "$ZodIPv4":
            break;
            case "ZodIPv4":
            break;
            case "IPv4address":
            break;
            case "address":
            break;
            case "dress":
            break;
            case "$ZodIPv6":
            break;
            case "ZodIPv6":
            break;
            case "IPv6address":
            break;
            case "kEqgr7":
            break;
            case "{":
            break;
            case "$ZodISODate":
            break;
            case "$ZodISODateTime":
            break;
            case "ZodISODate":
            break;
            case "ZodISODateTime":
            break;
            case "IS":
            break;
            case "SO":
            break;
            case "Time":
            break;
            case "preloadedRoutes":
            break;
            case "$ZodISODuration":
            break;
            case "ZodISODuration":
            break;
            case "DurationEnabled":
            break;
            case "XjXqzh":
            break;
            case "zh":
            break;
            case "zh-Hant":
            break;
            case "zh-Hant-HK":
            break;
            case "$ZodISOTime":
            break;
            case "ZodISOTime":
            break;
            case "ISOTimezoneParser":
            break;
            case "service_dog":
            break;
            case "getCommandFrecencyWithoutLoadingLatest":
            break;
            case "test_tube":
            break;
            case "$ZodIntersection":
            break;
            case "ZodIntersection":
            break;
            case "section":
            break;
            case "rootCommand":
            break;
            case "createGuildProductPurchaseSystemMessage":
            break;
            case "$ZodJWT":
            break;
            case "ZodJWT":
            break;
            case "StreamingTier9SmallBadge":
            break;
            case "$ZodKSUID":
            break;
            case "ZodKSUID":
            break;
            case "K":
            break;
            case "SU":
            break;
            case "ID_VERIFICATION":
            break;
            case "VERIFICATION_FAQ":
            break;
            case "QUEST_ACTIVITY_BOTTOM_SHEET":
            break;
            case "CUSTOM_BACKGROUND_GRADIENT":
            break;
            case "OPACITY_32":
            break;
            case "$ZodLazy":
            break;
            case "ZodLazy":
            break;
            case "Lazy":
            break;
            case "LazyViewManagersEnabled":
            break;
            case "$ZodLiteral":
            break;
            case "ZodLiteral":
            break;
            case "Literal":
            break;
            case "maple_leaf":
            break;
            case "leafy_green":
            break;
            case "green_circle":
            break;
            case "circled_m":
            break;
            case "_maybeFallBackFromAltGateway":
            break;
            case "$ZodMAC":
            break;
            case "ZodMAC":
            break;
            case "MA":
            break;
            case "MAC":
            break;
            case "AC":
            break;
            case "state_url":
            break;
            case "registerHeadlessTask":
            break;
            case "Cancel":
            break;
            case "Cancellable":
            break;
            case "cell":
            break;
            case "$ZodNaN":
            break;
            case "ZodNaN":
            break;
            case "NaN":
            break;
            case "maxBudgetHour":
            break;
            case "getHours":
            break;
            case "removeFile":
            break;
            case "removeFiles":
            break;
            case "$ZodNanoID":
            break;
            case "ZodNanoID":
            break;
            case "ano":
            break;
            case "$ZodNever":
            break;
            case "ZodNever":
            break;
            case "Never":
            break;
            case "ev":
            break;
            case "$ZodNonOptional":
            break;
            case "ZodNonOptional":
            break;
            case "$ZodNull":
            break;
            case "$ZodNullable":
            break;
            case "ZodNull":
            break;
            case "ZodNullable":
            break;
            case "trackColorForTrue":
            break;
            case "$ZodNumber":
            break;
            case "$ZodNumberFormat":
            break;
            case "ZodNumber":
            break;
            case "ZodNumberFormat":
            break;
            case "getPublicSystemMessageAvatar":
            break;
            case "Avatar02/Fill":
            break;
            case "$ZodOptional":
            break;
            case "ZodOptional":
            break;
            case "allowedProps":
            break;
            case "$ZodPipe":
            break;
            case "ZodPipe":
            break;
            case "customPNG":
            break;
            case "PNG8_FORMAT":
            break;
            case "$ZodReadonly":
            break;
            case "ZodReadonly":
            break;
            case "only":
            break;
            case "onlyActivityApps":
            break;
            case "nl":
            break;
            case "docx":
            break;
            case "pages":
            break;
            case "ppt":
            break;
            case "pptx":
            break;
            case "$ZodRealError":
            break;
            case "ZodRealError":
            break;
            case "HeadphonesAndControllerSpotIllustration":
            break;
            case "adp":
            break;
            case "dp":
            break;
            case "ControllerSpotIllustration":
            break;
            case "xls":
            break;
            case "xlsx":
            break;
            case "csv":
            break;
            case "sv":
            break;
            case "$ZodRecord":
            break;
            case "ZodRecord":
            break;
            case "RecordSpeedNext":
            break;
            case "$ZodString":
            break;
            case "$ZodStringFormat":
            break;
            case "ZodString":
            break;
            case "ZodStringFormat":
            break;
            case "$ZodSuccess":
            break;
            case "ZodSuccess":
            break;
            case "$ZodTemplateLiteral":
            break;
            case "ZodTemplateLiteral":
            break;
            case "lat":
            break;
            case "allowedUserIds":
            break;
            case "$ZodTransform":
            break;
            case "ZodTransform":
            break;
            case "setEncryption":
            break;
            case "$ZodTuple":
            break;
            case "ZodTuple":
            break;
            case "up":
            break;
            case "pleading_face":
            break;
            case "$ZodType":
            break;
            case "ZodType":
            break;
            case "peer":
            break;
            case "peerDependencies":
            break;
            case "$ZodULID":
            break;
            case "ZodULID":
            break;
            case "appEmbedState":
            break;
            case "$ZodURL":
            break;
            case "ZodURL":
            break;
            case "listFooterSize":
            break;
            case "$ZodUUID":
            break;
            case "ZodUUID":
            break;
            case "jfif":
            break;
            case "$ZodUndefined":
            break;
            case "ZodUndefined":
            break;
            case "ned":
            break;
            case "maxConnectionsCount":
            break;
            case "SETTINGS_PREMIUM_MANAGE_PLAN":
            break;
            case "PREMIUM_MANAGE_PLAN":
            break;
            case "LANGGRAPH_INTEGRATION_NAME":
            break;
            case "MEDIA_VIEWER_SESSION_COMPLETED":
            break;
            case "pfxLeft":
            break;
            case "$ZodUnion":
            break;
            case "ZodUnion":
            break;
            case "$ZodVoid":
            break;
            case "ZodVoid":
            break;
            case "maxContentHeight":
            break;
            case "$ZodXID":
            break;
            case "ZodXID":
            break;
            case "X":
            break;
            case "topWillDisappear":
            break;
            case "$ZodXor":
            break;
            case "ZodXor":
            break;
            case "safeValidate":
            break;
            case "queryResults":
            break;
            case "_$esjava$b":
            break;
            case "_$esjava$bra":
            break;
            case "$b":
            break;
            case "$brand":
            break;
            case "br":
            break;
            case "bra":
            break;
            case "brand":
            break;
            case "brandBackground":
            break;
            case "and":
            break;
            case "limitedTimeBadge":
            break;
            case "getApplicationCommandOptionQueryOptions":
            break;
            case "$code":
            break;
            case "codeBlock":
            break;
            case "purchases":
            break;
            case "countryData":
            break;
            case "$defs":
            break;
            case "defs":
            break;
            case "fs":
            break;
            case "$del":
            break;
            case "delayV":
            break;
            case "pray_tone3":
            break;
            case "$link":
            break;
            case "link":
            break;
            case "linkAccountIcon":
            break;
            case "contentType":
            break;
            case "contentTypeToText":
            break;
            case "extraCount":
            break;
            case "trackGameProfileOpen":
            break;
            case "pendingCanvasMutations":
            break;
            case "PYG":
            break;
            case "GUILD_DISCOVERY_SPLASH":
            break;
            case "DISCOVERY_SPLASH_HASH":
            break;
            case "SPLASH_HASH":
            break;
            case "SHADOW_MOBILE_NAVIGATOR_X":
            break;
            case "PAYPAL_POPUP_CLOSED":
            break;
            case "verticalInset":
            break;
            case "$modal":
            break;
            case "modal":
            break;
            default:
              return "Klaidinga \u012Fvestis";
          }
        }
      };
    };
    let closure_2 = fn(mergeDefs);
    function capitalizeFirstCharacter(arg0) {

    }
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}