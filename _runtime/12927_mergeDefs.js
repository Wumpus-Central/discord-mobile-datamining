// _runtime/12927_mergeDefs.js
import mergeDefs from "12915_mergeDefs.js";

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
      closure_0 = {
        string: { unit: "znak\u016F", verb: "m\u00EDt" },
        file: { unit: "bajt\u016F", verb: "m\u00EDt" },
        array: { unit: "prvk\u016F", verb: "m\u00EDt" },
        set: { unit: "prvk\u016F", verb: "m\u00EDt" },
      };
      closure_1 = {
        regex: "regul\u00E1rn\u00ED v\u00FDraz",
        email: "e-mailov\u00E1 adresa",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "datum a \u010Das ve form\u00E1tu ISO",
        date: "datum ve form\u00E1tu ISO",
        time: "\u010Das ve form\u00E1tu ISO",
        duration: "doba trv\u00E1n\u00ED ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64",
        base64url: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64url",
        json_string: "\u0159et\u011Bzec ve form\u00E1tu JSON",
        e164: "\u010D\u00EDslo E.164",
        jwt: "JWT",
        template_literal: "vstup",
      };
      closure_2 = {
        nan: "NaN",
        number: "\u010D\u00EDslo",
        string: "\u0159et\u011Bzec",
        function: "funkce",
        array: "pole",
      };
      return {
        localeError: (arg0) => {
          const combined = concat(tmp.origin);
          switch (combined) {
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
              while (true) {
                let str = "includes";
                if ("includes" === tmp.format) {
                  let tmp10 = globalThis;
                  let _HermesInternal3 = HermesInternal;
                  let str5 = '"';
                  let str6 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED obsahovat "';
                  let combined1 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED obsahovat "' + tmp.includes + '"';
                } else {
                  let str2 = "regex";
                  if ("regex" === tmp.format) {
                    let tmp9 = globalThis;
                    let _HermesInternal2 = HermesInternal;
                    let str4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED odpov\u00EDdat vzoru ";
                    combined1 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED odpov\u00EDdat vzoru " + tmp.pattern;
                  } else {
                    let tmp5 = dependencyMap;
                    let format = dependencyMap[tmp.format];
                    let tmp6 = null;
                    if (format == null) {
                      format = tmp.format;
                    }
                    let tmp7 = globalThis;
                    let _HermesInternal = HermesInternal;
                    let str3 = "Neplatn\u00FD form\u00E1t ";
                    combined1 = "Neplatn\u00FD form\u00E1t " + format;
                  }
                }
              }
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
            case "guildScheduledEvent":
              break;
            case "guildScheduledEventId":
              break;
            case "extraBottomHeight":
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
            case "DateToSystemTimezoneSetter":
              break;
            case "at":
              break;
            case "te":
              break;
            case "mez":
              break;
            case "Setter":
              break;
            case "useDetectorAttachmentGuard":
              break;
            case "entitlementBranchId":
              break;
            case "NitroGem24Lottie":
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
            case "flag_sm":
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
            case "createGuildReportFalseAlarmSystemMessage":
              break;
            case "$ZodMap":
              break;
            case "ZodMap":
              break;
            case "M":
              break;
            case "ap":
              break;
            case "compose":
              break;
            case "composed":
              break;
            case "composedPath":
              break;
            case "rules_version":
              break;
            case "onVideoEnd":
              break;
            case "AppStorePremiumProductIdsToPremiumBundledItems":
              break;
            case "ProductIds":
              break;
            case "rod":
              break;
            case "ItemsSortingHat":
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
            case "FadeInRight":
              break;
            case "PLUM_5":
              break;
            case "MEDIA_PICKER_SEND_BUTTON_SPRING":
              break;
            case "marginHorizontal":
              break;
            case "Direction":
              break;
            case "rect":
              break;
            case "DURATION_SECONDS":
              break;
            case "SECONDS":
              break;
            case "PX_80":
              break;
            case "_":
              break;
            case "system_channel_id":
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
            case "guildEmojis":
              break;
            case "isAVI":
              break;
            case "isAVIF":
              break;
            case "IFD_TYPE_GPS":
              break;
            case "GPSAltitude":
              break;
            case "GPSAltitudeRef":
              break;
            case "Altitude":
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
            case "Touchable":
              break;
            case "TouchableHaptic":
              break;
            case "lastWarningFetchDayStart":
              break;
            case "artWrapper":
              break;
            case "performKeyboardAwareNavigation":
              break;
            case "selectorOuterContainer":
              break;
            case "ethernet":
              break;
            case "Google":
              break;
            case "Google TV":
              break;
            case "TV":
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
            case "QUEST_BAR_MOBILE":
              break;
            case "QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT":
              break;
            case "INTERACTIVE_MUTED":
              break;
            case "woman_kneeling_facing_right_tone4":
              break;
            case "man_kneeling_facing_right_tone4":
              break;
            case "fuseboxNetworkInspectionEnabled":
              break;
            case "ActionSheetHeaderPressableText":
              break;
            case "Pressable":
              break;
            case "ex":
              break;
            case "ext":
              break;
            case "isProfileEffectRecord":
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
            case "GroupGamingSpotIllustration":
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
            case "PREMIUM_TIER_0_HEADER_GRADIENT_2":
              break;
            case "Role":
              break;
            case "RoleFlags":
              break;
            case "scrollToEnd":
              break;
            case "addInpInstrumentationHandler":
              break;
            case "r_mark_suffix_with_optional_n_consonant$esjava$0":
              break;
            case "rBIGBL":
              break;
            case "Q8gkVL":
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
            case "getVideoQoEMetricsConfig":
              break;
            case "UNKNOWN_PAYMENT_SOURCE":
              break;
            case "PAYMENT_SOURCE_REQUIRED":
              break;
            case "RED_NEW_34":
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
            case "loadTimeCollector":
              break;
            case "GuildEntityDao":
              break;
            case "EntityDao":
              break;
            case "Dao":
              break;
            case "renderLatestMessages":
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
            case "showHelp":
              break;
            case "HelpMessage":
              break;
            case "HelpMessageTypes":
              break;
            case "MessageTypesWithLazyLoadedReferences":
              break;
            case "_applyCombination":
              break;
            case "ly":
              break;
            case "trequest":
              break;
            case "requestActivityItems":
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
            case "map_of_japan":
              break;
            case "japan":
              break;
            case "japanese_castle":
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
              return combined;
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
            case "_listRef":
              break;
            case "listRef":
              break;
            case "listRefHappeningNow":
              break;
            case "HappeningNowCardHeader":
              break;
            case "HeaderSubmittingIndicator":
              break;
            case "_sessionValue":
              break;
            case "onValueReached":
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
            case "isCurrentUserTeen":
              break;
            case "Teen Screen Time Illo":
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
            case "_longestInteractionMap":
              break;
            case "applicationTopWrapperScrollView":
              break;
            case "onTop":
              break;
            case "wMWyci":
              break;
            case "ci":
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
            case "isAutomatedPageLoadSpan":
              break;
            case "kiss_tone2":
              break;
            case "timeoutTimer":
              break;
            case "merman_medium_light_skin_tone":
              break;
            case "addUserId":
              break;
            case "disableGuildSelect":
              break;
            case "GuildSelectDefaultIcon":
              break;
            case "concatSettings":
              break;
            case "substreams":
              break;
            case "streams":
              break;
            case "jfif":
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
            case "LaunchApplication15":
              break;
            case "minutes":
              break;
            case "minutesAgo":
              break;
            case "goLiveUpsellVariant":
              break;
            case "trackUserProfileAction":
              break;
            case "useGetOrFetchSubscriptionPlan":
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
            case "man_with_turban":
              break;
            case "man_with_turban_tone1":
              break;
            case "_installSetStateHooks":
              break;
            case "install":
              break;
            case "SafetyBookletSpotIllustration":
              break;
            case "flag_ug":
              break;
            case "USER_FLOW_TRANSITION":
              break;
            case "getConstants":
              break;
            case "getConstantsForViewManager":
              break;
            case "parseUnicodeLocaleId":
              break;
            case "enablePanDownToClose":
              break;
            case "AccountAgeTier10LargeBadge":
              break;
            case "cou":
              break;
            case "Badge":
              break;
            case "getActiveTab":
              break;
            case "getActiveTabId":
              break;
            case "cr":
              break;
            case "les":
              break;
            case "connectionMetadata":
              break;
            case "connectionMetadataField":
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
            case "containerForFiveButtonLayout":
              break;
            case "onLayoutChange":
              break;
            case "getAssetDisplayConfig":
              break;
            case "AssetDisplayConfigRecord":
              break;
            case "destination":
              break;
            case "destinationKey":
              break;
            case "onKeyCommand":
              break;
            case "unread_count":
              break;
            case "setHasInvalidUrlError":
              break;
            case "_$esjava$cursor":
              break;
            case "cursorColor":
              break;
            case "so":
              break;
            case "THROUGHLINE_URL":
              break;
            case "propList":
              break;
            case "strm":
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
            case "RELATIONSHIP_INVALUD_USER_BOT":
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
            case "NitroWumpusFlightUpwards3dIllustration":
              break;
            case "prepareStackTrace":
              break;
            case "nand":
              break;
            case "doUpload":
              break;
            case "UploadErrorUpload":
              break;
            case "UploadErrorProgress":
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
            case "formText":
              break;
            case "extractFeMerge":
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
            case "isParentModal":
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
            case "interestedIcon":
              break;
            case "contentRow":
              break;
            case "withAffinitySuggestions":
              break;
            case "AffinitySuggestions":
              break;
            case "ffi":
              break;
            case "ug":
              break;
            case "lady_beetle":
              break;
            case "beetle":
              break;
            case "paymentGatewaySubscriptionId":
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
            case "briefs":
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
            case "internalBinaryRead":
              break;
            case "div":
              break;
            case "diversityChildren":
              break;
            case "ve":
              break;
            case "ver":
              break;
            case "renderConfirmButton":
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
            case "shouldShowAgeGateForVoiceChannel":
              break;
            case "SYSTEM_PANEL":
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
            case "safetyTips":
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
            case "UnauthenticatedReportNames":
              break;
            case "auth":
              break;
            case "authenticated":
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
            case "ServerIconLilQuackSPondverseExample":
              break;
            case "_cleanupSocket":
              break;
            case "SocketEvent":
              break;
            case "EntitlementTenantFulfillmentStatus":
              break;
            case "ill":
              break;
            case "__findAnimatedPropsNodes":
              break;
            case "MAX_VISIBLE_PAGES":
              break;
            case "system_channel_flags":
              break;
            case "channel_flags":
              break;
            case "_flags":
              break;
            case "flag":
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
            case "addPerformanceInstrumentationHandler":
              break;
            case "handleTapGuildEventInvite":
              break;
            case "fo":
              break;
            case "for":
              while (true) {
                let tmp11 = globalThis;
                if (concat.test(tmp.expected)) {
                  let _HermesInternal5 = HermesInternal;
                  let str9 = ", obdr\u017Eeno ";
                  let str10 = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no instanceof ";
                  let combined2 =
                    "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no instanceof " +
                    tmp.expected +
                    ", obdr\u017Eeno " +
                    tmp2;
                } else {
                  let _HermesInternal4 = HermesInternal;
                  let str7 = ", obdr\u017Eeno ";
                  let str8 = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no ";
                  combined2 = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + tmp3 + ", obdr\u017Eeno " + tmp2;
                }
                return combined2;
              }
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
            case "pointerType":
              break;
            case "MOP":
              break;
            case "OPACITY_BLACK_1":
              break;
            case "OPACITY_BLACK_12":
              break;
            case "parentElement":
              break;
            case "fakeScopeIcon":
              break;
            case "containerSearchBar":
              break;
            case "touchableHandleResponderTerminationRequest":
              break;
            case "onRequestSend":
              break;
            case "getChannelA11yHint":
              break;
            case "Channel":
              break;
            case "interpretNumericEntities":
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
            case "getContacts":
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
            case "getMentionChannelIds":
              break;
            case "isWishlistOwner":
              break;
            case "avatar_hash":
              break;
            case "_hash":
              break;
            case "hashKey":
              break;
            case "bhd":
              break;
            case "INVITE_RESOLVE_SUCCESS":
              break;
            case "mother_christmas_tone4":
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
              while (true) {
                str = "includes";
                if ("includes" === tmp.format) {
                  tmp10 = globalThis;
                  _HermesInternal3 = HermesInternal;
                  str5 = '"';
                  str6 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED obsahovat "';
                  combined1 = 'Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED obsahovat "' + tmp.includes + '"';
                } else {
                  str2 = "regex";
                  if ("regex" === tmp.format) {
                    tmp9 = globalThis;
                    _HermesInternal2 = HermesInternal;
                    str4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED odpov\u00EDdat vzoru ";
                    combined1 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED odpov\u00EDdat vzoru " + tmp.pattern;
                  } else {
                    tmp5 = dependencyMap;
                    format = dependencyMap[tmp.format];
                    tmp6 = null;
                    if (format == null) {
                      format = tmp.format;
                    }
                    tmp7 = globalThis;
                    _HermesInternal = HermesInternal;
                    str3 = "Neplatn\u00FD form\u00E1t ";
                    combined1 = "Neplatn\u00FD form\u00E1t " + format;
                  }
                }
              }
              break;
            case "REDEEM_REWARD":
              break;
            case "IMAGE_VIDEO_DATA_SETTINGS_UPDATED":
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
            case "FacebookNeutralIcon":
              break;
            case "advancedMode":
              break;
            case "debugLogCs2GsiPayload":
              break;
            case "loadAllGuildAndPrivateChannelsFromDisk":
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
            case "accessPermissions":
              break;
            case "shovel":
              break;
            case "handleCallback":
              break;
            case "handleCallbackErrors":
              break;
            case "CallbackError":
              break;
            case "USER_SETTINGS_MODAL_OPEN":
              break;
            case "OPEN_APP_LAUNCHER":
              break;
            case "APP_LAUNCHER":
              break;
            case "APP_LAUNCHER_ACTIVITY_ITEM_SELECTED":
              break;
            case "DCDNotificationManager":
              break;
            case "videoProgress":
              break;
            case "handleAnnouncementMessageViewTracking":
              break;
            case "MessageViewTrackingType":
              break;
            case "person_with_ball_tone5":
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
            case "related_user_id":
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
            case "getGuildFlags":
              break;
            case "pronouns":
              break;
            case "pronounsAccessibilityHint":
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
            case "activeUnjoinedThreads":
              break;
            case "jo":
              break;
            case "js":
              break;
            case "xs":
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
            case "checkContactPermissions":
              break;
            case "ContactPermissions":
              break;
            case "showThreadNotificationsBottomSheet":
              break;
            case "BottomSheetFlatList":
              break;
            case "FlatList":
              break;
            case "PasskeysSpotIllustration":
              break;
            case "ke":
              break;
            case "templatePair":
              break;
            case "isLurking":
              break;
            case "getInternalState":
              break;
            case "confettiColors":
              break;
            case "subtitleTrailing":
              break;
            case "getLengthableOrigin":
              break;
            case "inExperiment":
              break;
            case "trailingItem":
              break;
            case "embedded_activity_location_kind":
              break;
            case "ki":
              break;
            case "kin":
              break;
            case "hasTrackedDisabledAndroidNotifChannels":
              break;
            case "Backspace":
              break;
            case "BackspaceIcon":
              break;
            case "cardHeight":
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
            case "GDM_JOIN":
              break;
            case "JOIN_STUDENT_HUB":
              break;
            case "CHANNEL_DRAWER_SPACING":
              break;
            case "CONTROLLER":
              break;
            case "CONTROLLER_SUPPORT":
              break;
            case "SUPPORTS_JOIN_URL":
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
            case "leftBoundary":
              break;
            case "marginPanels":
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
            case "analyticsId":
              break;
            case "disableImageViewPreallocationAndroid":
              break;
            case "stopCleanup":
              break;
            case "updateChannel":
              break;
            case "updateChannelDimensions":
              break;
            case "load":
              break;
            case "J":
              break;
            case "setDate":
              break;
            case "openMemberVerificationSuccessAlert":
              break;
            case "userGuildSettings":
              break;
            case "userGuildSettingsTransaction":
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
            default:
              return "Neplatn\u00FD vstup";
          }
        },
      };
    };
    let closure_2 = fn(mergeDefs);
    function error() {}
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
