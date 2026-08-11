// _runtime/12383_mergeDefs.js
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
      let closure_0 = { string: { unit: "tegn", verb: "havde" }, file: { unit: "bytes", verb: "havde" }, array: { unit: "elementer", verb: "indeholdt" }, set: { unit: "elementer", verb: "indeholdt" } };
      let closure_1 = { regex: "input", email: "e-mailadresse", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dato- og klokkesl\u00E6t", date: "ISO-dato", time: "ISO-klokkesl\u00E6t", duration: "ISO-varighed", ipv4: "IPv4-omr\u00E5de", ipv6: "IPv6-omr\u00E5de", cidrv4: "IPv4-spektrum", cidrv6: "IPv6-spektrum", base64: "base64-kodet streng", base64url: "base64url-kodet streng", json_string: "JSON-streng", e164: "E.164-nummer", jwt: "JWT", template_literal: "input" };
      let closure_2 = { nan: "NaN", string: "streng", number: "tal", boolean: "boolean", array: "liste", object: "objekt", set: "s\u00E6t", file: "fil" };
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
            case "gpus":
            break;
            case "pushLiteralText":
            break;
            case "HappeningNowCardsDisabled":
            break;
            case "emojiLineHeight":
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
            case "removeCloseButton":
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
            case "STREAM_ON_DESKTOP":
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
            case "NSFW_SPACE_WARNING_MODAL_CLICKED":
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
              let expected = closure_2[code.expected];
              if (expected == null) {
                expected = code.expected;
              }
              const parsedTypeResult = closure_2.parsedType(code.input);
              let tmp49 = closure_2[parsedTypeResult];
              if (tmp49 == null) {
                tmp49 = parsedTypeResult;
              }
              if (obj2.test(code.expected)) {
                const _HermesInternal16 = HermesInternal;
                let combined = "Ugyldigt input: forventede instanceof " + code.expected + ", fik " + tmp49;
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "Ugyldigt input: forventede " + expected + ", fik " + tmp49;
              }
              return combined;
            case "na":
            break;
            case "al":
              if (1 === code.values.length) {
                const _HermesInternal14 = HermesInternal;
                let combined1 = "Ugyldig v\u00E6rdi: forventede " + closure_2.stringifyPrimitive(code.values[0]);
                const obj = closure_2;
              } else {
                const _HermesInternal13 = HermesInternal;
                combined1 = "Ugyldigt valg: forventede en af f\u00F8lgende " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "CardA11yWrapper":
            break;
            case "perGuildMaxCount":
              let str32 = "<";
              if (code.inclusive) {
                str32 = "<=";
              }
              let tmp27 = dependencyMap[code.origin];
              if (tmp27 == null) {
                tmp27 = null;
              }
              let str33 = closure_2[code.origin];
              if (str33 == null) {
                str33 = code.origin;
              }
              if (tmp27) {
                if (str33 == null) {
                  str33 = "value";
                }
                const verb = tmp27.verb;
                let str = code.maximum.toString();
                let str40 = tmp27.unit;
                if (str40 == null) {
                  str40 = "elementer";
                }
                const _HermesInternal12 = HermesInternal;
                let combined2 = "For stor: forventede " + str33 + " " + verb + " " + str32 + " " + str + " " + str40;
                const str39 = code.maximum;
              } else {
                let str34 = str33;
                if (str33 == null) {
                  str34 = "value";
                }
                const _HermesInternal11 = HermesInternal;
                combined2 = "For stor: forventede " + str34 + " havde " + str32 + " " + code.maximum.toString();
                const str35 = code.maximum;
              }
              return combined2;
            case "setNotificationCenterTabFocused":
            break;
            case "getChannelIcon":
              let str20 = ">";
              if (code.inclusive) {
                str20 = ">=";
              }
              let tmp16 = dependencyMap[code.origin];
              if (tmp16 == null) {
                tmp16 = null;
              }
              let origin = closure_2[code.origin];
              if (origin == null) {
                origin = code.origin;
              }
              if (tmp16) {
                const _HermesInternal10 = HermesInternal;
                let combined3 = "For lille: forventede " + origin + " " + tmp16.verb + " " + str20 + " " + code.minimum.toString() + " " + tmp16.unit;
                const str25 = code.minimum;
              } else {
                const _HermesInternal9 = HermesInternal;
                combined3 = "For lille: forventede " + origin + " havde " + str20 + " " + code.minimum.toString();
                const str21 = code.minimum;
              }
              return combined3;
            case "getChannelIconComponent":
            break;
            case "getChannelIconComponentWithGuild":
              if ("starts_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                let combined4 = "Ugyldig streng: skal starte med \"" + code.prefix + "\"";
              } else if ("ends_with" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined4 = "Ugyldig streng: skal ende med \"" + code.suffix + "\"";
              } else if ("includes" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined4 = "Ugyldig streng: skal indeholde \"" + code.includes + "\"";
              } else if ("regex" === code.format) {
                const _HermesInternal5 = HermesInternal;
                combined4 = "Ugyldig streng: skal matche m\u00F8nsteret " + code.pattern;
              } else {
                let format = table[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal4 = HermesInternal;
                combined4 = "Ugyldig " + format;
              }
              return combined4;
            case "co":
            break;
            case "C":
              const _HermesInternal3 = HermesInternal;
              return "Ugyldigt tal: skal v\u00E6re deleligt med " + code.divisor;
            case "Component":
            break;
            case "om":
              let str4 = "Ukendt n\u00F8gle";
              if (code.keys.length > 1) {
                str4 = "Ukendte n\u00F8gler";
              }
              return "" + str4 + ": " + closure_2.joinValues(code.keys, ", ");
            case "mp":
            break;
            case "po":
              const _HermesInternal2 = HermesInternal;
              return "Ugyldig n\u00F8gle i " + code.origin;
            case "pon":
            break;
            case "one":
              return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "ne":
            break;
            case "en":
              let _HermesInternal = HermesInternal;
              str = "Ugyldig v\u00E6rdi i ";
              let combined5 = "Ugyldig v\u00E6rdi i " + code.origin;
              return combined5;
            case "USE_APP_COMMAND":
            break;
            case "ANDROID_NOTIFICATION_LIGHTS":
            break;
            case "L":
            break;
            case "LI":
            break;
            case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
            break;
            case "REQUIRE_TAG":
            break;
            case "AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING":
            break;
            case "STREAM":
            break;
            case "STREAMING":
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
            case "limitedTimeBadge":
            break;
            case "mi":
            break;
            case "mit":
            break;
            case "getAppearanceSettings":
            break;
            case "maybeTrackBlock":
            break;
            case "lockIconBadge":
            break;
            case "IconBadgePill":
            break;
            case "$ZodMap":
            break;
            case "ZodMap":
            break;
            case "M":
            break;
            case "ap":
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
            case "MEDIA_PICKER_SEND_BUTTON_SPRING":
            break;
            case "marginHorizontal":
            break;
            case "Direction":
            break;
            case "rect":
            break;
            case "PX_80":
            break;
            case "_":
            break;
            case "login_source":
            break;
            case "sourceMapsEnabled":
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
            case "woman_and_man_holding_hands_tone2_tone4":
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
            case "_setReadyState":
            break;
            case "setReadyState":
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
            case "QUEST_BOTTOM_SHEET":
            break;
            case "fuseboxFrameRecordingEnabled":
            break;
            case "ActionSheetHeaderPressableText":
            break;
            case "Pressable":
            break;
            case "ex":
            break;
            case "ext":
            break;
            case "isLocalItemAcked":
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
            case "NitroFileUploadSpotIllustration":
            break;
            case "FileUploadSpotIllustration":
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
            case "requestAuthorization":
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
            case "ThermalStates":
            break;
            case "dist":
            break;
            case "distance":
            break;
            case "distanceFromEnd":
            break;
            case "sta":
            break;
            case "tan":
            break;
            case "nc":
            break;
            case "ce":
            break;
            case "enableShopCardImpression":
            break;
            case "ImpressionTypes":
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
            case "POST_MESSAGE":
            break;
            case "MESSAGE_GROUP_SUSPENDED_USER":
            break;
            case "USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE":
            break;
            case "FRECENCY_AND_FAVORITES_SETTINGS":
            break;
            case "SETTINGS_BLOCKED_USERS":
            break;
            case "SETTINGS_BLOCKED_USERS_V2":
            break;
            case "Role":
            break;
            case "RoleFlags":
            break;
            case "scrollToNewMessages":
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
            case "getPremiumType":
            break;
            case "getPremiumTypeActual":
            break;
            case "useGoreContentSettingOrDefault":
            break;
            case "clearAnalyticsEventsRecording":
            break;
            case "GuildEntityDao":
            break;
            case "EntityDao":
            break;
            case "Dao":
            break;
            case "usePlaygroundAccessExperiment":
            break;
            case "app":
            break;
            case "application":
            break;
            case "applicationIdToGuildIds":
            break;
            case "pp":
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
            case "showGradient":
            break;
            case "_applyCombination":
            break;
            case "ly":
            break;
            case "USER_PROFILE_WIDGETS":
            break;
            case "USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE":
            break;
            case "getMetricsAggregatorForClient":
            break;
            case "value_type":
            break;
            case "acceptedRequestLabel":
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
            case "ACTIVITY_LAUNCH_UNKNOWN_GUILD":
            break;
            case "UNKNOWN_GUILD":
            break;
            case "GUILD_ACTION_CREATE_CHANNEL_CARD":
            break;
            case "CARD_BORDER_DEFAULT":
            break;
            case "DEFAULT_APPEARS_ON_INDEX":
            break;
            case "FormSubmitErrorType":
            break;
            case "person_walking_facing_right_tone3":
            break;
            case "benefitDescription":
            break;
            case "onGiftIntentCardViewed":
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
            case "tom":
            break;
            case "right shift":
              return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "shiftLeft":
            break;
            case "handleCacheLoaded":
            break;
            case "handleCacheLoadedLazy":
            break;
            case "handleCacheLoadedLazyNoCache":
              _HermesInternal = HermesInternal;
              str = "Ugyldig v\u00E6rdi i ";
              combined5 = "Ugyldig v\u00E6rdi i " + code.origin;
              return combined5;
            case "checkIcon":
            break;
            case "checkIconContainer":
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
            case "TransitionGroup":
            break;
            case "TransitionGroupOverlayView":
            break;
            case "wMWyci":
            break;
            case "ix8XIj":
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
            case "compressFormatJsToAst":
            break;
            case "adRequestId":
            break;
            case "disableGuildSelect":
            break;
            case "GuildSelectDefaultIcon":
            break;
            case "concatSettings":
            break;
            case "subscription_facet":
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
            case "hasAction":
            break;
            case "hasActionSheetOpen":
            break;
            case "footerPortrait":
            break;
            case "trait":
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
            case "tex":
            break;
            case "withConsistentHeight":
            break;
            case "getRoleSubscriptionPurchaseStickerCTA":
            break;
            case "ACCOUNT_MULTIACCOUNT_TOOLTIP":
            break;
            case "MU":
            break;
            case "TO":
            break;
            case "AccountAgeTier10LargeBadge":
            break;
            case "cou":
            break;
            case "Badge":
            break;
            case "japanese_goblin":
            break;
            case "goblin":
            break;
            case "getActiveOutputSinkTrackingEnabled":
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
            case "containerEmpty":
            break;
            case "WMF_DIRECT_3D_NVIDIA":
            break;
            case "NVIDIA_DIRECT_3D":
            break;
            case "saturation":
            break;
            case "saturationFactor":
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
            case "stretch":
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
            case "handleBalanceFetchSuccess":
            break;
            case "totalUnavailableGuilds":
            break;
            case "availableGuilds":
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
            case "shouldTrackOfficialMessageViews":
            break;
            case "canSendMessages":
            break;
            case "addEventProcessor":
            break;
            case "sortDeletedListingsLast":
            break;
            case "getStableSafeAreaInsets":
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
            case "saved_at":
            break;
            case "statCollectionPausedUsers":
            break;
            case "_language":
            break;
            case "_languageHint":
            break;
            case "lang":
            break;
            case "language":
            break;
            case "int2hsv":
            break;
            case "hsv2int":
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
            case "isProductNew":
            break;
            case "originalId":
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
            case "internalBinaryRead":
            break;
            case "2p7dA3":
            break;
            case "3SUJLd":
            break;
            case "copyChanges":
            break;
            case "misc":
            break;
            case "useFetchSocialLayerStorefrontProductDetailsEmbedData":
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
            case "app_hardware_acceleration_enabled":
            break;
            case "_enabled":
            break;
            case "_enabledPaymentMethods":
            break;
            case "enable":
            break;
            case "shouldShareApplicationActivity":
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
            case "didColumnsChange":
            break;
            case "woman_biking_medium_light_skin_tone":
            break;
            case "man_biking_medium_light_skin_tone":
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
            case "nix":
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
            case "StreamingTier8LargeBadge":
            break;
            case "EntitlementTenantFulfillmentStatus":
            break;
            case "ill":
            break;
            case "__findAnimatedPropsNodes":
            break;
            case "MIN_QUEST_VIEW_TIME_SECONDS":
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
            case "addPoolingTo":
            break;
            case "Torbs_Shine":
            break;
            case "voiceStateStore":
            break;
            case "recordState_":
            break;
            case "_$esjava$B_continue_stemming_noun_suffixes":
            break;
            case "B_continue_stemming_noun_suffixes":
            break;
            case "continue":
            break;
            case "suffix":
            break;
            case "sw-KE":
            break;
            case "fo":
            break;
            case "for":
            break;
            case "forEachChannel":
            break;
            case "ga":
            break;
            case "gaps":
            break;
            case "BeeIllocon":
            break;
            case "FIRST_MESSAGE":
            break;
            case "MESSAGE_COMPOSER_OPENED":
            break;
            case "modals":
            break;
            case "progressViewOffset":
            break;
            case "setCardHeight":
            break;
            case "getRestrictedScheduleNotificationSubtitle":
            break;
            case "titleLayout":
            break;
            case "q9n0Ta":
              return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "coerceChannelRoute":
            break;
            case "getChannelA11yHint":
            break;
            case "Channel":
            break;
            case "interpolators":
              _HermesInternal = HermesInternal;
              str = "Ugyldig v\u00E6rdi i ";
              combined5 = "Ugyldig v\u00E6rdi i " + code.origin;
              return combined5;
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
            case "StreamQualities":
            break;
            case "StreamQualitiesToPremiumType":
            break;
            case "PremiumTypeToActivePremiumSubscriptionSKU":
            break;
            case "PremiumSubscriptionSKUToPremiumType":
            break;
            case "PremiumTypeOrder":
            break;
            case "constraints":
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
            case "getConnectionStats":
            break;
            case "ConnectionStats":
            break;
            case "Stats":
            break;
            case "_endProfiling":
            break;
            case "ngRFjZ":
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
            case "pipContentWrapper":
            break;
            case "person_gesturing_no_tone3":
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
            case "AppCrash":
            break;
            case "ContactSyncPermissionDenied":
            break;
            case "nie":
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
            case "PARENT":
            break;
            case "E2EE_STREAM_VERIFICATION_CODE_COPIED":
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
            case "withOverlay":
            break;
            case "channelBenefits":
            break;
            case "showShareLink":
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
            case "iconsContainer":
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
            case "originalBuffer":
            break;
            case "ferry":
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
            case "deleteGuild":
            break;
            case "deleteGuildEvent":
            break;
            case "deleteGuildEventException":
            break;
            case "onRNCSliderSlidingStart":
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
            case "getAppFirstVisibleTimestamp":
            break;
            case "SELECT_WEB_AUTH_METHOD":
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
            case "SETTINGS_PREMIUM_PLAN_SELECT":
            break;
            case "PREMIUM_PLAN_SELECT":
            break;
            case "PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY":
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
            case "prevItem":
            break;
            case "embedded_activity_location_kind":
            break;
            case "ki":
            break;
            case "kin":
            break;
            case "AvatarMoatmonsturrExample":
            break;
            case "atm":
            break;
            case "Backspace":
            break;
            case "BackspaceIcon":
            break;
            case "_savedDispatches":
            break;
            case "resetBillingCycle":
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
            case "guild_monetization":
            break;
            case "monetizationDisclosureContainerStyle":
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
            case "leftBox":
            break;
            case "enablePeekHint":
            break;
            case "internalBinaryWrite":
            break;
            case "isEu":
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
            case "clj":
            break;
            case "MAX_VISIBLE_PAGES":
            break;
            case "load":
            break;
            case "J":
            break;
            case "setCurrentGuild":
            break;
            case "is_synced":
            break;
            case "syncedBasicChannels":
            break;
            case "syncedBasicChannelsTransaction":
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
            case "shouldShowModernBoostFlow":
            break;
            case "bound_mean":
            break;
            case "bound_mean_cumn":
            break;
            case "mean":
            break;
            case "mean_cumn":
            break;
            case "cumn":
            break;
            case "failureLockedUntil":
            break;
            case "returnKeyType":
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
            case "OVERLAY_V3_SHOW_WIDGETS":
            break;
            case "WIDGETS":
            break;
            case "WIDGETS_SUPPORTING_COMMENT":
            break;
            case "COMMENT_NODE":
            break;
            case "DECISION_OUTCOME":
            break;
            case "UTC":
            break;
            case "EDYbS+":
            break;
            case "+1_tone1":
            break;
            case "preferred_locale":
            break;
            case "_localeFileMap":
            break;
            case "applicationRoleConnection":
            break;
            case "applicationRoleConnections":
            break;
            case "Xbox":
            break;
            case "Xbox One":
            break;
            case "currencies":
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
            case "iconBg":
            break;
            case "iconBgSelected":
            break;
            case "getValidComponent":
            break;
            case "track_next":
            break;
            case "_nextChannelId":
            break;
            case "did_force_clear_guild_hashes":
            break;
            case "hashes":
            break;
            case "videotoolbox":
            break;
            case "toolbox":
            break;
            case "defaultButtonConfiguration":
            break;
            case "onConfigurationChange":
            break;
            case "isLayoutCompact":
            break;
            case "activeSlideAlignment":
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
            case "_opacityActive":
            break;
            case "opa":
            break;
            case "city":
            break;
            case "emitViewEnd":
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
            case "diffed":
            break;
            case "preview_asset_paths":
            break;
            case "path":
            break;
            case "_positions":
            break;
            case "positions":
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
            case "setUTCHours":
            break;
            case "isConcatSpreadable":
            break;
            default:
              return "Ugyldigt input";
          }
        }
      };
    };
    let closure_2 = fn(require("mergeDefs"));
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}