// _runtime/08956_mergeDefs.js
import mergeDefs from "08939_mergeDefs.js";

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
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" },
      };
      closure_1 = {
        regex: "entrada",
        email: "direcci\u00F3n de correo electr\u00F3nico",
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
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duraci\u00F3n ISO",
        ipv4: "direcci\u00F3n IPv4",
        ipv6: "direcci\u00F3n IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "n\u00FAmero E.164",
        jwt: "JWT",
        template_literal: "entrada",
      };
      closure_2 = {
        nan: "NaN",
        string: "texto",
        number: "n\u00FAmero",
        boolean: "booleano",
        array: "arreglo",
        object: "objeto",
        set: "conjunto",
        file: "archivo",
        date: "fecha",
        bigint: "n\u00FAmero grande",
        symbol: "s\u00EDmbolo",
        undefined: "indefinido",
        null: "nulo",
        function: "funci\u00F3n",
        map: "mapa",
        record: "registro",
        tuple: "tupla",
        enum: "enumeraci\u00F3n",
        union: "uni\u00F3n",
        literal: "literal",
        promise: "promesa",
        void: "vac\u00EDo",
        never: "nunca",
        unknown: "desconocido",
        any: "cualquiera",
      };
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
            case "guild_metadata":
              break;
            case "metadataRefreshing":
              break;
            case "getIsLoading":
              break;
            case "getIsLoadingAgeVerification":
              break;
            case "AgeVerificationDmCta":
              break;
            case "tapImageData":
              break;
            case "person_standing_tone5":
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
            case "useDeferredValue":
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
            case "khr":
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
            case "AppDatabaseManager":
              break;
            case "Database":
              break;
            case "tab":
              break;
            case "base":
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
              let tmp55 = closure_2[parsedTypeResult];
              if (tmp55 == null) {
                tmp55 = parsedTypeResult;
              }
              if (obj.test(code.expected)) {
                const _HermesInternal16 = HermesInternal;
                let combined = "Entrada inv\u00E1lida: se esperaba instanceof " + code.expected + ", recibido " + tmp55;
              } else {
                const _HermesInternal15 = HermesInternal;
                combined = "Entrada inv\u00E1lida: se esperaba " + expected + ", recibido " + tmp55;
              }
              return combined;
            case "I":
              break;
            case "InternalCard":
              if (1 === code.values.length) {
                const _HermesInternal14 = HermesInternal;
                let combined1 = "Entrada inv\u00E1lida: se esperaba " + closure_2.stringifyPrimitive(code.values[0]);
              } else {
                const _HermesInternal13 = HermesInternal;
                combined1 = "Opci\u00F3n inv\u00E1lida: se esperaba una de " + closure_2.joinValues(code.values, "|");
              }
              return combined1;
            case "ter":
              break;
            case "na":
              let str27 = "<";
              if (code.inclusive) {
                str27 = "<=";
              }
              let tmp33 = dependencyMap[code.origin];
              if (tmp33 == null) {
                tmp33 = null;
              }
              let str28 = closure_2[code.origin];
              if (str28 == null) {
                str28 = code.origin;
              }
              if (tmp33) {
                if (str28 == null) {
                  str28 = "valor";
                }
                let str = code.maximum.toString();
                let str34 = tmp33.unit;
                if (str34 == null) {
                  str34 = "elementos";
                }
                const _HermesInternal12 = HermesInternal;
                let combined2 = "Demasiado grande: se esperaba que " + str28 + " tuviera " + str27 + str + " " + str34;
                const str33 = code.maximum;
              } else {
                let str29 = str28;
                if (str28 == null) {
                  str29 = "valor";
                }
                const _HermesInternal11 = HermesInternal;
                combined2 = "Demasiado grande: se esperaba que " + str29 + " fuera " + str27 + code.maximum.toString();
                const str30 = code.maximum;
              }
              return combined2;
            case "al":
              break;
            case "CardA11yWrapper":
              let str20 = ">";
              if (code.inclusive) {
                str20 = ">=";
              }
              let tmp21 = dependencyMap[code.origin];
              if (tmp21 == null) {
                tmp21 = null;
              }
              let origin3 = closure_2[code.origin];
              if (origin3 == null) {
                origin3 = code.origin;
              }
              const str1 = code.minimum.toString();
              if (tmp21) {
                const _HermesInternal10 = HermesInternal;
                code =
                  "Demasiado peque\u00F1o: se esperaba que " + origin3 + " tuviera " + str20 + str1 + " " + tmp21.unit;
              } else {
                const _HermesInternal9 = HermesInternal;
                code = "Demasiado peque\u00F1o: se esperaba que " + origin3 + " fuera " + str20 + str1;
              }
              return code;
            case "perGuildMaxCount":
              break;
            case "go_live_notifications":
              if ("starts_with" === code.format) {
                const _HermesInternal8 = HermesInternal;
                let combined3 = 'Cadena inv\u00E1lida: debe comenzar con "' + code.prefix + '"';
              } else if ("ends_with" === code.format) {
                const _HermesInternal7 = HermesInternal;
                combined3 = 'Cadena inv\u00E1lida: debe terminar en "' + code.suffix + '"';
              } else if ("includes" === code.format) {
                const _HermesInternal6 = HermesInternal;
                combined3 = 'Cadena inv\u00E1lida: debe incluir "' + code.includes + '"';
              } else if ("regex" === code.format) {
                const _HermesInternal5 = HermesInternal;
                combined3 = "Cadena inv\u00E1lida: debe coincidir con el patr\u00F3n " + code.pattern;
              } else {
                let format = table[code.format];
                if (format == null) {
                  format = code.format;
                }
                const _HermesInternal4 = HermesInternal;
                combined3 = "Inv\u00E1lido " + format;
              }
              return combined3;
            case "paymentGatewaySubscriptionId":
              break;
            case "integrationOwner":
              code = globalThis;
              return "N\u00FAmero inv\u00E1lido: debe ser m\u00FAltiplo de " + code.divisor;
            case "integrationOwnerHook":
              break;
            case "setScrollDirection":
              let str3 = "";
              let str4 = "";
              if (code.keys.length > 1) {
                str4 = "s";
              }
              if (code.keys.length > 1) {
                str3 = "s";
              }
              const _HermesInternal3 = HermesInternal;
              return "Llave" + str4 + " desconocida" + str3 + ": " + closure_2.joinValues(code.keys, ", ");
            case "closeSuspendedUser":
              break;
            case "getChannelIcon":
              let origin2 = closure_2[code.origin];
              if (origin2 == null) {
                origin2 = code.origin;
              }
              const _HermesInternal2 = HermesInternal;
              return "Llave inv\u00E1lida en " + origin2;
            case "getChannelIconComponent":
              break;
            case "getChannelIconComponentWithGuild":
              return "Entrada inv\u00E1lida";
            case "co":
              break;
            case "C":
              let origin = closure_2[code.origin];
              if (origin == null) {
                origin = code.origin;
              }
              let _HermesInternal = HermesInternal;
              str = "Valor inv\u00E1lido en ";
              let combined4 = "Valor inv\u00E1lido en " + origin;
              return combined4;
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
            case "limitedTimeBadge":
              break;
            case "mi":
              break;
            case "mit":
              break;
            case "getAppUIViewed":
              break;
            case "wedding":
              break;
            case "getMediaPostEmbedChannelId":
              break;
            case "createGuildReportRaidSystemMessage":
              break;
            case "$ZodMap":
              break;
            case "ZodMap":
              break;
            case "M":
              break;
            case "ap":
              break;
            case "remoteSessionId":
              break;
            case "GameLibrarySettings":
              break;
            case "rar":
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
            case "getStartedHeaderContainer":
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
            case "_shouldShowModal":
              break;
            case "shouldShow":
              break;
            case "ModalFadeTransition":
              break;
            case "emojiReactionFrecency":
              break;
            case "emojiReactionFrecencyWithoutFetchingLatest":
              break;
            case "testModeApplicationId":
              break;
            case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
              break;
            case "RNSVGClipPath":
              break;
            case "ClipPath":
              break;
            case "lip":
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
            case "woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone":
              break;
            case "handlePasskeyUpsellShow":
              break;
            case "ShowQRCodeModal":
              break;
            case "ModalAnimation":
              break;
            case "invalidEmojis":
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
            case "$ZodSet":
              break;
            case "ZodSet":
              break;
            case "S":
              break;
            case "et":
              break;
            case "canUseEmojisEverywhere":
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
            case "QUEST_BAR_MOBILE":
              break;
            case "QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT":
              break;
            case "INTERACTIVE_MUTED":
              break;
            case "inner_width":
              break;
            case "widthChars":
              break;
            case "buttonLabel":
              break;
            case "generateNewAnimationId":
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
            case "_clientPromise":
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
            case "assetContainer":
              break;
            case "ss":
              break;
            case "setForegroundProcess":
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
            case "growthbookTags":
              break;
            case "initialScrollToTop":
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
            case "scrollTargetPinnedRange":
              break;
            case "getAvailablePurchases":
              break;
            case "_timer":
              break;
            case "_timerId":
              break;
            case "timer":
              break;
            case "timerId":
              break;
            case "disableCallUserConfirmationPrompt":
              break;
            case "accessibleDismiss":
              break;
            case "accessibleDismissStyle":
              break;
            case "ble":
              break;
            case "leg_tone5":
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
            case "VERIFY_UNAUTHENTICATED_REPORT":
              break;
            case "REPORTING":
              break;
            case "GUILD_DISCOVERY_UPDATE_CATEGORY":
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
            case "_attributes":
              break;
            case "attribute":
              break;
            case "attributes":
              break;
            case "insetBottom":
              break;
            case "BottomSheetSlideOutSpec":
              break;
            case "SlideOut":
              break;
            case "GuildEntityDao":
              break;
            case "EntityDao":
              break;
            case "Dao":
              break;
            case "kiss_woman_woman_dark_skin_tone_medium_skin_tone":
              break;
            case "hasJoined":
              break;
            case "hasJoinedEmojiSourceGuild":
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
            case "showGuildOfficialMessageGradient":
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
            case "ACTIVITY_LAUNCH_UNKNOWN_CHANNEL":
              break;
            case "UNKNOWN":
              break;
            case "UNKNOWN_CHANNEL":
              break;
            case "DISCORD_CONSENT":
              break;
            case "_listRef":
              break;
            case "listRef":
              origin = closure_2[code.origin];
              if (origin == null) {
                origin = code.origin;
              }
              _HermesInternal = HermesInternal;
              str = "Valor inv\u00E1lido en ";
              combined4 = "Valor inv\u00E1lido en " + origin;
              return combined4;
            case "listRefHappeningNow":
              break;
            case "HappeningNowCardHeader":
              break;
            case "HeaderSubmittingIndicator":
              break;
            case "_participantsIndex":
              break;
            case "part":
              break;
            case "participant":
              break;
            case "participants":
              break;
            case "excludedQuests":
              break;
            case "makeReactFormatter":
              break;
            case "org_id":
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
            case "maxE":
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
            case "systemVersion":
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
            case "authorRow":
              break;
            case "wMWyci":
              break;
            case "ci":
              break;
            case "ix8XIj":
              break;
            case "getElementById":
              break;
            case "contentWindow":
              break;
            case "false":
              break;
            case "uni":
              break;
            case "Version":
              break;
            case "endTime_":
              break;
            case "me_burst":
              break;
            case "burst":
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
            case "subscriptionPlanPrice":
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
            case "hasAction":
              break;
            case "hasActionSheetOpen":
              break;
            case "numFinished":
              break;
            case "channelContainer":
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
            case "withActiveSpan":
              break;
            case "pendingPrimaryGuildId":
              break;
            case "enablePanDownToClose":
              break;
            case "AccountAgeTier10LargeBadge":
              break;
            case "cou":
              break;
            case "Badge":
              break;
            case "isPinnedBadge":
              break;
            case "getAppHardwareAccelerationEnabled":
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
            case "containerInfo":
              break;
            case "foot_tone3":
              break;
            case "exclusions":
              break;
            case "initialUserProfileSection":
              break;
            case "UserProfileSections":
              break;
            case "shouldObscureSpoiler":
              break;
            case "_$esjava$cursor":
              break;
            case "cursorColor":
              break;
            case "so":
              break;
            case "NitroDiamondBadgeSmallBadge":
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
            case "_default":
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
            case "woman_farmer_tone2":
              break;
            case "man_farmer_tone2":
              break;
            case "farmer_tone2":
              break;
            case "define":
              break;
            case "efi":
              break;
            case "fi":
              break;
            case "fin":
              break;
            case "flag_km":
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
            case "shouldTrackExposure":
              break;
            case "ExposureTypes":
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
            case "breast_feeding_medium_skin_tone":
              break;
            case "isRef":
              break;
            case "isReferralTrial":
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
            case "contentStyle":
              break;
            case "contentStyles":
              break;
            case "subtree":
              break;
            case "subtreeFlags":
              break;
            case "useGroupListingsFetchContext":
              break;
            case "isHeaderBarButtonsAvailableForCurrentPlatform":
              break;
            case "formCtaIcon":
              break;
            case "containerWrapper":
              break;
            case "persistentCodesEnabled":
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
            case "targetSeatId":
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
            case "shouldRestrictUpdatingCreatorMonetizationSettings":
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
            case "encoderImplementationName":
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
            case "ServerIcon":
              break;
            case "ServerIconBonkBonkExample":
              break;
            case "shopButtonRef":
              break;
            case "fetchSubscriptionPlansBySKUs":
              break;
            case "_makeShareableClone":
              break;
            case "makeShareable":
              break;
            case "makeShareableClone":
              break;
            case "area":
              break;
            case "EntitlementTenantFulfillmentStatus":
              break;
            case "ill":
              break;
            case "__findAnimatedPropsNodes":
              break;
            case "smirking_face":
              break;
            case "E2EE_PUBLIC_KEY_MISMATCH":
              break;
            case "MATCH_ALL":
              break;
            case "ALL_MEMBERS":
              break;
            case "MEMBERS_WITHOUT_ROLES":
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
              origin = closure_2[code.origin];
              if (origin == null) {
                origin = code.origin;
              }
              _HermesInternal = HermesInternal;
              str = "Valor inv\u00E1lido en ";
              combined4 = "Valor inv\u00E1lido en " + origin;
              return combined4;
            case "oldestUnreadMessageId":
              break;
            case "oldestUnreadMessageIdStale":
              break;
            case "addPendingAuthorizedState":
              break;
            case "AUTO_DISMISS":
              break;
            case "DISMISS_BLOCK":
              break;
            case "BLOCK_QUOTE":
              break;
            case "currentChannelId":
              break;
            case "displayMessagesWithCache":
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
            case "registerFetchedSupplementals":
              break;
            case "favoriteGuildVisibleSetting":
              break;
            case "getChannelA11yHint":
              break;
            case "Channel":
              break;
            case "interpretNumericEntities":
              break;
            case "minimumRebufferDuration":
              break;
            case "onGestureCancel":
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
            case "getContentClassificationVisibility":
              break;
            case "ContentClassificationVisibility":
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
            case "unbanUser":
              break;
            case "banUser":
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
            case "instrumentGoogleGenAIClient":
              break;
            case "transformDataType":
              break;
            case "nonGuildVersions":
              break;
            case "nonGuildVersionsTransaction":
              break;
            case "actionOnPress":
              break;
            case "refreshNewMembersAndSearchResults":
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
            case "FAMILY_CENTER_ERROR_CODE_TO_FAILURE":
              break;
            case "REACT_COMPILER":
              break;
            case "RPC_VIDEO_WRITE":
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
            case "withMonitor":
              break;
            case "activityPanelMode":
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
            case "canUseCustomCallSounds":
              break;
            case "allSounds":
              break;
            case "showReportToModMessageModal":
              break;
            case "_include":
              break;
            case "_includes":
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
            case "rejectResponderTermination":
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
            case "getAnyErrorMessage":
              break;
            case "getAnyErrorMessageAndField":
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
            case "getExistingMembers":
              break;
            case "getExistingMembersRows":
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
            case "PasskeysSpotIllustration":
              break;
            case "ke":
              break;
            case "useStorekitResubscribe":
              break;
            case "subscribeFromItem":
              break;
            case "embedded_activity_location_kind":
              break;
            case "ki":
              break;
            case "kin":
              break;
            case "deleteNodeOnBackspace":
              break;
            case "Backspace":
              break;
            case "spacer":
              break;
            case "spacerStyle":
              break;
            case "welcomeModalChannelId":
              break;
            case "family_wwb":
              break;
            case "family_wwbb":
              break;
            case "bbHeight":
              break;
            case "aria-label":
              break;
            case "aria-labelledby":
              break;
            case "lab":
              break;
            case "byAppEntry":
              break;
            case "tryItOutBanner":
              break;
            case "Buf8":
              break;
            case "f8wNDl":
              break;
            case "DlcqlU":
              break;
            case "lcq":
              break;
            case "HYPESQUAD":
              break;
            case "HYPESQUAD_HOUSE_1":
              break;
            case "HOUSE_1":
              break;
            case "analyticsLocationStack":
              break;
            case "location_page":
              break;
            case "page up":
              break;
            case "up_left_arrow":
              break;
            case "left_arrow":
              break;
            case "arrow_left":
              break;
            case "leftBoundary":
              break;
            case "garlic":
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
            case "cheese":
              break;
            case "cheese_wedge":
              break;
            case "edgeMode":
              break;
            case "defaultNativePermissionsRequestOptions":
              break;
            case "NativePermissionsRequestOptions":
              break;
            case "load":
              break;
            case "J":
              break;
            case "setDesignConfig":
              break;
            case "filterFn":
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
            case "_$esjava$B_found_a_match":
              break;
            case "B_found_a_match":
              break;
            case "matchAnyPattern":
              break;
            case "heap_max":
              break;
            case "_max":
              break;
            case "_maxLength":
              break;
            case "maxLength":
              break;
            case "maxLengthIndicator":
              break;
            case "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW":
              break;
            case "NEW_EVENT":
              break;
            case "NEW_EVENT_WINDOW_MILLISECONDS":
              break;
            case "__memo":
              break;
            case "mo":
              break;
            case "messageIds":
              break;
            case "sag":
              break;
            case "closeConversationsAndJumpToMessage":
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
            case "getDeviceInfo":
              break;
            case "DeviceInfo":
              break;
            case "forNoAnimation":
              break;
            case "onStickyHeaderRender":
              break;
            case "onStickyHeaderRendered":
              break;
            case "few":
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
            case "footerPortrait":
              break;
            case "trait":
              break;
            case "voicePanelsFullscreen":
              break;
            case "screenIsLandscape":
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
            case "LegacyRawButton":
              break;
            case "RawButton":
              break;
            case "hasMessageContent":
              break;
            case "track_next":
              break;
            case "_nextChannelId":
              break;
            case "didRetrySilentInitialScroll":
              break;
            case "BounceOutLeft":
              break;
            case "snapToAlignment":
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
            case "relationship_type":
              break;
            case "fearful":
              break;
            case "fearful_face":
              break;
            case "face_with_rolling_eyes":
              break;
            case "rolling_eyes":
              break;
            case "_opacityActive":
              break;
            case "opa":
              break;
            case "city":
              break;
            case "emitTimeout":
              break;
            case "claimed_at":
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
            case "did_force_clear_guild_hashes":
              break;
            case "hashes":
              break;
            case "preview_asset_paths":
              break;
            case "path":
              break;
            case "heldGiftingPromptSystemMessage":
              break;
            case "getAnimatableSourceWithFallback":
              break;
            case "backgroundTaskIdentifierInvalid":
              break;
            case "Invalid":
              break;
            case "InvalidKeywordError":
              break;
            case "valid":
              break;
            case "cacheComposition":
              break;
            case "positionComponentInternal":
              break;
            default:
              return "Entrada inv\u00E1lida";
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
