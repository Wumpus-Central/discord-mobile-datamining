// === Module 12626: mergeDefs ===

// Module 12626 (mergeDefs)
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
      closure_0 = { string: { unit: "znak\u016F", verb: "m\u00EDt" }, file: { unit: "bajt\u016F", verb: "m\u00EDt" }, array: { unit: "prvk\u016F", verb: "m\u00EDt" }, set: { unit: "prvk\u016F", verb: "m\u00EDt" } };
      closure_1 = { regex: "regul\u00E1rn\u00ED v\u00FDraz", email: "e-mailov\u00E1 adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "datum a \u010Das ve form\u00E1tu ISO", date: "datum ve form\u00E1tu ISO", time: "\u010Das ve form\u00E1tu ISO", duration: "doba trv\u00E1n\u00ED ISO", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", cidrv4: "rozsah IPv4", cidrv6: "rozsah IPv6", base64: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64", base64url: "\u0159et\u011Bzec zak\u00F3dovan\u00FD ve form\u00E1tu base64url", json_string: "\u0159et\u011Bzec ve form\u00E1tu JSON", e164: "\u010D\u00EDslo E.164", jwt: "JWT", template_literal: "vstup" };
      closure_2 = { nan: "NaN", number: "\u010D\u00EDslo", string: "\u0159et\u011Bzec", function: "funkce", array: "pole" };
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
              if (expected == null) {
                expected = code.expected;
              }
              let parsedTypeResult = closure_2.parsedType(code.input);
              let tmp50 = str[parsedTypeResult];
              if (tmp50 == null) {
                tmp50 = parsedTypeResult;
              }
              let obj2 = /^[A-Z]/;
              let isMatch = obj2.test(code.expected);
              if (isMatch) {
                let _HermesInternal16 = HermesInternal;
                let combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no instanceof " + code.expected + ", obdr\u017Eeno " + tmp50;
              } else {
                let _HermesInternal15 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + expected + ", obdr\u017Eeno " + tmp50;
              }
              return combined;
            case "discovery_splash":
              str = closure_2;
              expected = closure_2[code.expected];
            break;
            case "splash":
            break;
            case "hash_mask":
              if (1 === code.values.length) {
                const _HermesInternal14 = HermesInternal;
                let combined1 = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + closure_2.stringifyPrimitive(code.values[0]);
                const obj = closure_2;
              } else {
                const _HermesInternal13 = HermesInternal;
                combined1 = "Neplatn\u00E1 mo\u017Enost: o\u010Dek\u00E1v\u00E1na jedna z hodnot " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "maskContentUnits":
            break;
            case "captureBillingException":
              let str28 = "<";
              if (code.inclusive) {
                str28 = "<=";
              }
              let tmp31 = dependencyMap[code.origin];
              if (tmp31 == null) {
                tmp31 = null;
              }
              let str29 = code.origin;
              if (tmp31) {
                if (str29 == null) {
                  str29 = "hodnota";
                }
                str = code.maximum.toString();
                let str35 = tmp31.unit;
                if (str35 == null) {
                  str35 = "prvk\u016F";
                }
                const _HermesInternal12 = HermesInternal;
                let combined2 = "Hodnota je p\u0159\u00EDli\u0161 velk\u00E1: " + str29 + " mus\u00ED m\u00EDt " + str28 + str + " " + str35;
                const str34 = code.maximum;
              } else {
                let str30 = str29;
                if (str29 == null) {
                  str30 = "hodnota";
                }
                const _HermesInternal11 = HermesInternal;
                combined2 = "Hodnota je p\u0159\u00EDli\u0161 velk\u00E1: " + str30 + " mus\u00ED b\u00FDt " + str28 + code.maximum.toString();
                const str31 = code.maximum;
              }
              return combined2;
            case "stateDataTranslator":
            break;
            case "LanternSpotIllustration":
              let str17 = ">";
              if (code.inclusive) {
                str17 = ">=";
              }
              let tmp18 = dependencyMap[code.origin];
              if (tmp18 == null) {
                tmp18 = null;
              }
              let str18 = code.origin;
              if (tmp18) {
                if (str18 == null) {
                  str18 = "hodnota";
                }
                const str1 = code.minimum.toString();
                let str24 = tmp18.unit;
                if (str24 == null) {
                  str24 = "prvk\u016F";
                }
                const _HermesInternal10 = HermesInternal;
                let combined3 = "Hodnota je p\u0159\u00EDli\u0161 mal\u00E1: " + str18 + " mus\u00ED m\u00EDt " + str17 + str1 + " " + str24;
                const str23 = code.minimum;
              } else {
                let str19 = str18;
                if (str18 == null) {
                  str19 = "hodnota";
                }
                const _HermesInternal9 = HermesInternal;
                combined3 = "Hodnota je p\u0159\u00EDli\u0161 mal\u00E1: " + str19 + " mus\u00ED b\u00FDt " + str17 + code.minimum.toString();
                const str20 = code.minimum;
              }
              return combined3;
            case "MarkupParserNodeTypeError":
            break;
            case "E":
              if ("starts_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                let combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED za\u010D\u00EDnat na \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED kon\u010Dit na \"" + code.suffix + "\"";
              } else {
                str = "includes";
                if (`includes` === code.format) {
                  const _HermesInternal6 = HermesInternal;
                  combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED obsahovat \"" + code.includes + "\"";
                } else if ("regex" === code.format) {
                  const _HermesInternal5 = HermesInternal;
                  combined4 = "Neplatn\u00FD \u0159et\u011Bzec: mus\u00ED odpov\u00EDdat vzoru " + code.pattern;
                } else {
                  let format = table[code.format];
                  if (format == null) {
                    format = code.format;
                  }
                  const _HermesInternal4 = HermesInternal;
                  combined4 = "Neplatn\u00FD form\u00E1t " + format;
                }
              }
              return combined4;
            case "Err":
            break;
            case "ro":
              const _HermesInternal3 = HermesInternal;
              return "Neplatn\u00E9 \u010D\u00EDslo: mus\u00ED b\u00FDt n\u00E1sobkem " + code.divisor;
            case "or":
            break;
            case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
              let joinValuesResult = closure_2.joinValues(code.keys, ", ");
              let _HermesInternal2 = HermesInternal;
              let combined5 = "Nezn\u00E1m\u00E9 kl\u00ED\u010De: " + joinValuesResult;
              return combined5;
            case "BOT_HTTP_INTERACTIONS":
            break;
            case "H":
              str = globalThis;
              let combined6 = "Neplatn\u00FD kl\u00ED\u010D v " + code.origin;
              return combined6;
            case "HT":
            break;
            case "TP":
              return "Neplatn\u00FD vstup";
            case "P":
            break;
            case "INTERACTIONS":
              let _HermesInternal = HermesInternal;
              let combined7 = "Neplatn\u00E1 hodnota v " + code.origin;
              return combined7;
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
              if (expected == null) {
                expected = code.expected;
              }
              parsedTypeResult = closure_2.parsedType(code.input);
              tmp50 = str[parsedTypeResult];
              if (tmp50 == null) {
                tmp50 = parsedTypeResult;
              }
              obj2 = /^[A-Z]/;
              isMatch = obj2.test(code.expected);
              if (isMatch) {
                _HermesInternal16 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no instanceof " + code.expected + ", obdr\u017Eeno " + tmp50;
              } else {
                _HermesInternal15 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + expected + ", obdr\u017Eeno " + tmp50;
              }
              return combined;
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
              str = globalThis;
              combined6 = "Neplatn\u00FD kl\u00ED\u010D v " + code.origin;
              return combined6;
            case "black_nib":
            break;
            case "ios_backgroundColor":
              _HermesInternal = HermesInternal;
              combined7 = "Neplatn\u00E1 hodnota v " + code.origin;
              return combined7;
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
              if (expected == null) {
                expected = code.expected;
              }
              parsedTypeResult = closure_2.parsedType(code.input);
              tmp50 = str[parsedTypeResult];
              if (tmp50 == null) {
                tmp50 = parsedTypeResult;
              }
              obj2 = /^[A-Z]/;
              isMatch = obj2.test(code.expected);
              if (isMatch) {
                _HermesInternal16 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no instanceof " + code.expected + ", obdr\u017Eeno " + tmp50;
              } else {
                _HermesInternal15 = HermesInternal;
                combined = "Neplatn\u00FD vstup: o\u010Dek\u00E1v\u00E1no " + expected + ", obdr\u017Eeno " + tmp50;
              }
              return combined;
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
              joinValuesResult = closure_2.joinValues(code.keys, ", ");
              _HermesInternal2 = HermesInternal;
              combined5 = "Nezn\u00E1m\u00E9 kl\u00ED\u010De: " + joinValuesResult;
              return combined5;
            case "getCurrent":
            break;
            case "getCurrentUserActiveStream":
              str = globalThis;
              combined6 = "Neplatn\u00FD kl\u00ED\u010D v " + code.origin;
              return combined6;
            case "U":
            break;
            case "Use":
            break;
            case "User":
            break;
            case "ser":
              _HermesInternal = HermesInternal;
              combined7 = "Neplatn\u00E1 hodnota v " + code.origin;
              return combined7;
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
            default:
              return "Neplatn\u00FD vstup";
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