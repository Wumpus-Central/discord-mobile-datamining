// === Module 12628: mergeDefs ===

// Module 12628 (mergeDefs)
import mergeDefs from "mergeDefs" /* 12595 */;

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
            case "frameX":
            break;
            case "user.id":
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
            case "controlEdgeToEdgeValues":
            break;
            case "supportsReferrerPolicy":
            break;
            case "icymiDesktopEnabled":
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
            case "millisecondsInSecond":
            break;
            case "revealMessage":
            break;
            case "getAvatarDecoration":
            break;
            case "getAvatarDecorationURL":
            break;
            case "getCanUseMultiAccountMobile":
            break;
            case "MobileGoLiveEntrypointTreatment":
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
            case "connectionType":
            break;
            case "connectionTypeBuckets":
            break;
            case "suggested_user":
            break;
            case "suggested_user_id":
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
            case "getGuildsTree":
            break;
            case "GuildsTree":
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
            case "updateRsvp":
            break;
            case "gzindex":
            break;
            case "indexChange":
            break;
            case "getAppIdForBotUserId":
            break;
            case "ActionSheetHeaderPressableText":
            break;
            case "Pressable":
            break;
            case "ex":
            break;
            case "ext":
            break;
            case "isReduceTransparencyEnabled":
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
              let combined = concat(sum3, " turi b\u016Bti ", str28, " ", str3, " ", unit);
              return combined;
            case "pa":
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
                let combined1 = "Gautas tipas " + tmp84 + ", o tik\u0117tasi - instanceof " + code.expected;
              } else {
                const _HermesInternal13 = HermesInternal;
                combined1 = "Gautas tipas " + tmp84 + ", o tik\u0117tasi - " + expected;
              }
              return combined1;
            case "pack":
            break;
            case "package":
              if (1 === code.values.length) {
                const _HermesInternal12 = HermesInternal;
                let combined2 = "Privalo b\u016Bti " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal11 = HermesInternal;
                combined2 = "Privalo b\u016Bti vienas i\u0161 " + closure_2.joinValues(code.values, "|") + " pasirinkim\u0173";
              }
              return combined2;
            case "ack":
            break;
            case "ka":
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
                unit = undefined;
                if (tmp56 != null) {
                  unit = tmp56.unit;
                }
                const _HermesInternal9 = HermesInternal;
                return "" + sum1 + " turi b\u016Bti " + str49 + " " + str1 + " " + unit;
              }
            break;
            case "age":
            break;
            case "ge":
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
                str28 = "didesnis kaip";
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
                if (typeof tmp31 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const formatted3 = str29.charAt(0).toUpperCase();
                sum3 = formatted3 + str29.slice(1);
                str3 = code.minimum.toString();
                if (tmp29 != null) {
                  unit = tmp29.unit;
                }
                concat = code.HermesInternal.concat;
                const str30 = str29.charAt(0);
                const str31 = code.minimum;
                tmp31 = closure_1_3;
              }
            break;
            case "ger":
            break;
            case "_a":
              if ("starts_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                let combined3 = "Eilut\u0117 privalo prasid\u0117ti \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = "Eilut\u0117 privalo pasibaigti \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = "Eilut\u0117 privalo \u012Ftraukti \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal5 = HermesInternal;
                combined3 = "Eilut\u0117 privalo atitikti " + code.pattern;
              } else {
                let format = table[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal4 = HermesInternal;
                combined3 = "Neteisingas " + format;
              }
              return combined3;
            case "as":
            break;
            case "ass":
              const _HermesInternal3 = HermesInternal;
              return "Skai\u010Dius privalo b\u016Bti " + code.divisor + " kartotinis.";
            case "asset":
            break;
            case "assetDark":
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
            case "ss":
            break;
            case "_w":
              return "Rastas klaidingas raktas";
            case "wo":
            break;
            case "work":
              return "Klaidinga \u012Fvestis";
            case "worklet":
            break;
            case "kl":
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
              let combined4 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined4;
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
            case "leadingText":
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
            case "replaceExports":
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
            case "isMap":
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
            case "StreamingTier2LargeBadge":
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
            case "friend_anniversary_notifications":
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
            break;
            case "ug":
            break;
            case "AccountAgeTier10LargeBadge":
            break;
            case "cou":
            break;
            case "Badge":
            break;
            case "safeRe":
            break;
            case "cardType":
            break;
            case "getComboId":
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
            case "handleRedeemVirtualCurrencyFail":
            break;
            case "NitroRubyBadgeLargeBadge":
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
              combined = concat(sum3, " turi b\u016Bti ", str28, " ", str3, " ", unit);
              return combined;
            case "RewardsMouseSpotIllustration":
            break;
            case "templatePair":
            break;
            case "scalars":
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
              combined4 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined4;
            case "characterOrders":
            break;
            case "showStatus":
            break;
            case "useCanUseGuildSpace":
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
            case "sanitizeTags":
            break;
            case "onPressMutualGuild":
            break;
            case "MutualGuildRow":
            break;
            case "person_in_bed_tone5":
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
            case "8SuVoE":
            break;
            case "oEAioF":
            break;
            case "woman_in_motorized_wheelchair_medium_skin_tone":
            break;
            case "man_in_motorized_wheelchair_medium_skin_tone":
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
            case "__reanimatedModuleProxy":
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
            case "usePrivateThreadMode":
            break;
            case "PrivateThreadMode":
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
              combined = concat(sum3, " turi b\u016Bti ", str28, " ", str3, " ", unit);
              return combined;
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
            case "getChannelPermalink":
            break;
            case "linkCode":
            break;
            case "dependentSkuId":
            break;
            case "drawerStatusBar":
            break;
            case "StatusBar":
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
              combined4 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined4;
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
            case "showCaptcha":
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
            case "sled":
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
            case "appliedTags":
            break;
            case "imageEmoji":
            break;
            case "fetchGuildProfile":
            break;
            case "GuildProfileCTAContext":
            break;
            case "textBreakStrategy":
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
            case "channelOrMessageUrl":
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
            case "writeInt32LE":
            break;
            case "getMinHeaderHeight":
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
            case "getNativeNodeReference":
            break;
            case "getNativeNodeReferenceFromReactNativeDocumentInstanceHandle":
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
            case "partial_updates":
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
            case "canManageChannels":
            break;
            case "showReportModalForGuildScheduledEvent":
            break;
            case "GuildScheduledEventEntityTypes":
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
              combined = concat(sum3, " turi b\u016Bti ", str28, " ", str3, " ", unit);
              return combined;
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
              combined4 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined4;
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
            case "avatarHash":
            break;
            case "MANAGE_OFFICIAL_MESSAGES":
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
            case "originalBuffer":
            break;
            case "ferry":
            break;
            case "APPLICATION_DISCLOSURES":
            break;
            case "DISCLOSURE":
            break;
            case "RESIZABLE":
            break;
            case "EnsureSingleNavigator":
            break;
            case "SingleNavigatorContext":
            break;
            case "textInputRef":
            break;
            case "fetchSocialLayerStorefrontSku":
            break;
            case "fetchSocialLayerStorefrontSkuForApplication":
            break;
            case "PlaySpeedUp":
            break;
            case "buildXboxGamePassStoreDeepLinkUrl":
            break;
            case "GUILD_ROOM_INTERACTED":
            break;
            case "getAcronym":
            break;
            case "mfaEnabled":
            break;
            case "#3498db":
            break;
            case "sync_id":
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
            case "target_application":
            break;
            case "target_application_id":
            break;
            case "#71368a":
            break;
            case "getVoiceChannelErrorContext":
            break;
            case "dnd":
            break;
            case "#95a5a6":
            break;
            case "itemData":
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
            case "NitroBronzeBadgeSmallBadge":
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
            case "_processItem":
            break;
            case "HCAPTCHA":
            break;
            case "HCAPTCHA_RQDATA":
            break;
            case "DATA_SAVER":
            break;
            case "AVERAGE":
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
            case "useStickerPackCategories":
            break;
            case "useOriginalIfSmaller":
            break;
            case "$ZodArray":
            break;
            case "ZodArray":
            break;
            case "SearchResultContentEntityTypes":
            break;
            case "$ZodAsyncError":
            break;
            case "sy":
            break;
            case "syn":
            break;
            case "sync":
            break;
            case "guildHasStoredObfuscatedChannels":
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
            case "GIFT_CATEGORY_SELECT_MODAL":
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
              combined = concat(sum3, " turi b\u016Bti ", str28, " ", str3, " ", unit);
              return combined;
            case "createProfileChunkPayload":
            break;
            case "$ZodCheckIncludes":
            break;
            case "deserialize":
            break;
            case "deserializeCache":
            break;
            case "isDynamicProduct":
            break;
            case "tabId":
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
            case "disableHighlightOnPress":
            break;
            case "calendarFormat":
            break;
            case "calendarFormatCompact":
            break;
            case "activeSpeakerIcon":
            break;
            case "confirmRedirectedPaymentSource":
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
              combined4 = "" + sum4 + " turi klaiding\u0105 \u012Fvest\u012F";
              return combined4;
            case "$ZodCheckLessThan":
            break;
            case "hand_with_index_finger_and_thumb_crossed_tone3":
            break;
            case "generateSessionId":
            break;
            case "BackHandler":
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
            case "useGetTimeRecurringSnowflakeBoundDismissibleContent":
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
            case "screenY":
            break;
            case "voicePanelsFullscreen":
            break;
            case "screenIsLandscape":
            break;
            case "FlingNativeProperties":
            break;
            case "mediaImage":
            break;
            case "getApplicationFlags":
            break;
            case "is_coppa":
            break;
            case "topLongPressSticker":
            break;
            case "DisguiseSpotIllustration":
            break;
            case "sg":
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
            case "GUILD_BOOST_TIER_1":
            break;
            case "TIER_1":
            break;
            case "_1_tone4":
            break;
            case "hsva":
            break;
            case "$ZodCheckProperty":
            break;
            case "eventDescriptionContainer":
            break;
            case "verifyLicense":
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
            case "removeFriend":
            break;
            case "FriendDiscoveryFlags":
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
              return "Rastas klaidingas raktas";
            case "currencyIsoCode":
            break;
            case "deepLinkUri":
            break;
            case "$ZodCheckUpperCase":
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
            case "YEM":
            break;
            case "EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED":
            break;
            case "UPLOAD_FILE":
            break;
            case "FILE_SIZE_LIMIT_EXCEEDED":
            break;
            case "SIZE_LIMIT_EXCEEDED":
            break;
            case "INSTALL_LESS_APP_IDS":
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
            case "GHS":
            break;
            case "SPACE_30":
            break;
            case "$ZodEnum":
            break;
            case "ZodEnum":
            break;
            case "num lock":
            break;
            case "lockState":
            break;
            case "filterOverrides":
            break;
            case "rightwards_hand_tone2":
            break;
            case "$ZodExactOptional":
            break;
            case "ZodExactOptional":
            break;
            case "act":
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
            case "QUESTS_CURRENT_QUESTS":
            break;
            case "QUESTS_CARD":
            break;
            case "CARD_ROWS_ICON_SIZE":
            break;
            case "CARD_ROWS_ICON_SIZE_VARIANT":
            break;
            case "ANTHROPIC_AI_INSTRUMENTED_METHODS":
            break;
            case "INSTRUMENTED_METHODS":
            break;
            case "DSA_CAPABILITIES":
            break;
            case "PAB":
            break;
            case "SPAN_ORIGIN_AUTO_NAVIGATION_CUSTOM":
            break;
            case "CUSTOM_APP_ICONS_NEW_BADGE":
            break;
            case "BADGE_NOTIFICATION_BACKGROUND":
            break;
            case "BACKGROUND_BASE_LOWEST":
            break;
            case "STBInput":
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
            case "number_7":
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
            case "pregnant_woman_tone5":
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
            case "dimgray":
            break;
            case "appDirectoryEmbedApplications":
            break;
            case "showGuildEventModeratorActionSheet":
            break;
            case "GuildEventModeratorAction":
            break;
            case "createGuildProductPurchaseSystemMessage":
            break;
            case "$ZodJWT":
            break;
            case "ZodJWT":
            break;
            case "TreasureChestSpotIllustration":
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
            case "stateWrapper":
            break;
            case "person_getting_haircut_tone3":
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
            case "removeFavoriteGIF":
            break;
            case "GIFSelectionContext":
            break;
            case "Selection":
            break;
            case "textBlock":
            break;
            case "lockVoiceStateForResume":
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
            case "getPublicInstanceFromRootTag":
            break;
            case "toDataURL":
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
            case "OGiMXJ":
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
            case "InkQuill3dIllustration":
            break;
            case "TimestampMillisecondsParser":
            break;
            case "Millis":
            break;
            case "lis":
            break;
            case "second":
            break;
            case "seconds":
            break;
            case "xls":
            break;
            case "xlsx":
            break;
            case "csv":
              combined = concat(sum3, " turi b\u016Bti ", str28, " ", str3, " ", unit);
              return combined;
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