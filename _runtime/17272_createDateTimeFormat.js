// === Module 17272: createDateTimeFormat ===

// Module 17272 (createDateTimeFormat)
arg5.createDateTimeFormat = function createDateTimeFormat(str) {
  if (!regex.test(str)) {
    const obj = {};
    obj.pattern = str.replace(obj, (str) => {
      str = str.charAt(0);
      switch (str) {
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
          if (2 === length) {
            str = "2-digit";
          }
          tmp9.year = str;
          return "{year}";
        case "create":
          let diff = str.length - 1;
          obj2.weekday = closure_1_2.weekday[diff];
          return "{weekday}";
        case "createStyles":
        break;
        case "ty":
          diff = str.length - 1;
          obj2.weekday = closure_1_2.weekday[diff];
          return "{weekday}";
        case "current":
        break;
        case "cursor":
          diff = str.length - 1;
          obj2.weekday = closure_1_2.weekday[diff];
          return "{weekday}";
        case "data":
        break;
        case "ddd":
          obj2.era = closure_1_2.era[str.length - 1];
          return "{era}";
        case "default":
        break;
        case "defineProperty":
          tmp9 = obj2;
          length = str.length;
          str = "numeric";
        break;
        case "op":
        break;
        case "delete":
          tmp9 = obj2;
          length = str.length;
          str = "numeric";
        break;
        case "description":
          tmp9 = obj2;
          length = str.length;
          str = "numeric";
        break;
        case "ip":
          tmp9 = obj2;
          length = str.length;
          str = "numeric";
        break;
        case "disabled":
        break;
        case "sa":
          tmp9 = obj2;
          length = str.length;
          str = "numeric";
        break;
        case "dispatch":
        break;
        case "displayName":
          let diff1 = str.length - 1;
          obj2.month = closure_1_2.month[diff1];
          return "{month}";
        case "diversity":
        break;
        case "v":
          diff1 = str.length - 1;
          obj2.month = closure_1_2.month[diff1];
          return "{month}";
        case "done":
        break;
        case "duration":
          let str10 = "numeric";
          if (2 === str.length) {
            str10 = "2-digit";
          }
          obj2.day = str10;
          return "{day}";
        case "enabled":
        break;
        case "end":
          return "{ampm}";
        case "enumerable":
        break;
        case "error":
          let tmp4 = obj2;
          let str7 = "numeric";
          if (2 === str.length) {
            str7 = "2-digit";
          }
          tmp4.hour = str7;
          return "{hour}";
        case "exports":
        break;
        case "fileFinishedImporting":
          tmp4 = obj2;
          str7 = "numeric";
          if (2 === str.length) {
            str7 = "2-digit";
          }
          tmp4.hour = str7;
          return "{hour}";
        case "fill":
          return str;
        case "find":
          tmp4 = obj2;
          str7 = "numeric";
          if (2 === str.length) {
            str7 = "2-digit";
          }
          tmp4.hour = str7;
          return "{hour}";
        case "ind":
        break;
        case "flags":
          tmp4 = obj2;
          str7 = "numeric";
          if (2 === str.length) {
            str7 = "2-digit";
          }
          tmp4.hour = str7;
          return "{hour}";
        case "forEach":
        break;
        case "gap":
          let str5 = "numeric";
          if (2 === str.length) {
            str5 = "2-digit";
          }
          obj2.minute = str5;
          return "{minute}";
        case "get":
        break;
        case "getChannel":
          let str3 = "numeric";
          if (2 === str.length) {
            str3 = "2-digit";
          }
          obj2.second = str3;
          return "{second}";
        case "getCurrentUser":
        break;
        case "guild":
          let str2 = "long";
          if (str.length < 4) {
            str2 = "short";
          }
          obj2.timeZoneName = str2;
          str = "{timeZoneName}";
          const tmp = obj2;
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
        case "go_live_notifications":
        break;
        case "paymentGatewaySubscriptionId":
        break;
        case "integrationOwner":
        break;
        case "integrationOwnerHook":
        break;
        case "setScrollDirection":
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
        default:
      }
    });
    obj.pattern = obj.pattern.replace(/'([^']*)'/g, (arg0, arg1) => {
      let str = arg1;
      if (!arg1) {
        str = "'";
      }
      return str;
    });
    pattern = obj.pattern;
    if (pattern.indexOf("{ampm}") > -1) {
      obj.hour12 = true;
      ({ pattern: obj.pattern12, pattern } = obj);
      obj.pattern = pattern.replace("{ampm}", "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      const str4 = pattern.replace("{ampm}", "");
    }
    return obj;
  }
};
arg5.createDateTimeFormats = function createDateTimeFormats(formats) {
  let tmp2;
  let tmp3;
  ({ availableFormats, timeFormats, dateFormats, medium } = formats);
  const items = [];
  const items1 = [];
  const items2 = [];
  let tmp4;
  const keys = Object.keys();
  if (keys !== undefined) {
    let obj = tmp2;
    let tmp6 = tmp3;
    tmp4 = tmp2;
    while (keys[tmp] !== undefined) {
      let tmp65 = str;
      let hasOwnPropertyResult = availableFormats.hasOwnProperty(str);
      if (hasOwnPropertyResult) {
        let str2 = availableFormats[str];
        let arr3 = str.match(/M/g) || [];
        let tmp7 = new.target;
        let tmp8 = new.target;
        let array = new Array(arr3.length + 1);
        let arr6 = str.match(/E/g) || [];
        let tmp9 = array;
        let tmp10 = new.target;
        let tmp11 = new.target;
        array = new Array(arr6.length + 1);
        let str3 = str2;
        if (array.length > 2) {
          str3 = str2.replace(/(M|L)+/, array.join("$1"));
        }
        let tmp12 = array;
        let str4 = str3;
        if (array.length > 2) {
          str4 = str3.replace(/([Eec])+/, array.join("$1"));
        }
        let tmp13 = regex;
        let tmp14;
        if (!regex.test(str4)) {
          obj = {};
          let obj2 = obj;
          let tmp15 = obj2;
          obj.pattern = str4.replace(obj2, (str) => {
            str = str.charAt(0);
            switch (str) {
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
                if (2 === length) {
                  str = "2-digit";
                }
                tmp9.year = str;
                return "{year}";
              case "create":
                let diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "createStyles":
              break;
              case "ty":
                diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "current":
              break;
              case "cursor":
                diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "data":
              break;
              case "ddd":
                obj2.era = closure_1_2.era[str.length - 1];
                return "{era}";
              case "default":
              break;
              case "defineProperty":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "op":
              break;
              case "delete":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "description":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "ip":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "disabled":
              break;
              case "sa":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "dispatch":
              break;
              case "displayName":
                let diff1 = str.length - 1;
                obj2.month = closure_1_2.month[diff1];
                return "{month}";
              case "diversity":
              break;
              case "v":
                diff1 = str.length - 1;
                obj2.month = closure_1_2.month[diff1];
                return "{month}";
              case "done":
              break;
              case "duration":
                let str10 = "numeric";
                if (2 === str.length) {
                  str10 = "2-digit";
                }
                obj2.day = str10;
                return "{day}";
              case "enabled":
              break;
              case "end":
                return "{ampm}";
              case "enumerable":
              break;
              case "error":
                let tmp4 = obj2;
                let str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "exports":
              break;
              case "fileFinishedImporting":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "fill":
                return str;
              case "find":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "ind":
              break;
              case "flags":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "forEach":
              break;
              case "gap":
                let str5 = "numeric";
                if (2 === str.length) {
                  str5 = "2-digit";
                }
                obj2.minute = str5;
                return "{minute}";
              case "get":
              break;
              case "getChannel":
                let str3 = "numeric";
                if (2 === str.length) {
                  str3 = "2-digit";
                }
                obj2.second = str3;
                return "{second}";
              case "getCurrentUser":
              break;
              case "guild":
                let str2 = "long";
                if (str.length < 4) {
                  str2 = "short";
                }
                obj2.timeZoneName = str2;
                str = "{timeZoneName}";
                const tmp = obj2;
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
              case "go_live_notifications":
              break;
              case "paymentGatewaySubscriptionId":
              break;
              case "integrationOwner":
              break;
              case "integrationOwnerHook":
              break;
              case "setScrollDirection":
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
              default:
            }
          });
          let str5 = obj.pattern;
          obj.pattern = str5.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          pattern = obj.pattern;
          tmp14 = obj;
          if (pattern.indexOf("{ampm}") > -1) {
            obj.hour12 = true;
            ({ pattern: obj2.pattern12, pattern } = obj);
            let str6 = pattern.replace("{ampm}", "");
            obj.pattern = str6.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp14 = obj;
          }
        }
        hasOwnPropertyResult = tmp14;
        obj = tmp14;
        tmp6 = str4;
      }
      tmp2 = obj;
      tmp3 = tmp6;
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        let arr = items.push(obj);
        let tmp18 = length2;
        let num = 0;
        let flag = true;
        if (0 < length2.length) {
          let arr9 = length2;
          let tmp19 = num;
          flag = false;
          while (!obj.hasOwnProperty(length2[num])) {
            let sum = num + 1;
            num = sum;
            flag = true;
            if (sum >= arr9.length) {
              break;
            }
          }
        }
        if (flag) {
          arr = items2.push(tmp6);
          tmp2 = obj;
          tmp3 = tmp6;
          continue;
        } else {
          let tmp21 = length;
          let num2 = 0;
          let flag2 = true;
          if (0 < length.length) {
            let arr10 = length;
            let tmp22 = num2;
            flag2 = false;
            while (!obj.hasOwnProperty(length[num2])) {
              let sum1 = num2 + 1;
              num2 = sum1;
              flag2 = true;
              if (sum1 >= arr10.length) {
                break;
              }
            }
          }
          tmp2 = obj;
          tmp3 = tmp6;
          if (!flag2) {
            continue;
          } else {
            let arr1 = items1.push(tmp6);
            tmp2 = obj;
            tmp3 = tmp6;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  let tmp26 = tmp4;
  let num3 = 0;
  let tmp27 = tmp4;
  if (0 < items1.length) {
    do {
      let tmp28 = num3;
      let tmp29 = tmp26;
      let num4 = 0;
      if (0 < items2.length) {
        do {
          let str7 = medium.replace("{0}", items1[num3]);
          let str8 = str7.replace("{1}", items2[num4]);
          let str9 = str8.replace(/^[,\s]+|[,\s]+$/gi, "");
          obj2 = undefined;
          let tmp30 = regex;
          let tmp31 = num4;
          let tmp32;
          if (!regex.test(str9)) {
            obj = {};
            obj2 = obj;
            let tmp33 = obj2;
            obj.pattern = str9.replace(obj2, (str) => {
              str = str.charAt(0);
              switch (str) {
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
                  if (2 === length) {
                    str = "2-digit";
                  }
                  tmp9.year = str;
                  return "{year}";
                case "create":
                  let diff = str.length - 1;
                  obj2.weekday = closure_1_2.weekday[diff];
                  return "{weekday}";
                case "createStyles":
                break;
                case "ty":
                  diff = str.length - 1;
                  obj2.weekday = closure_1_2.weekday[diff];
                  return "{weekday}";
                case "current":
                break;
                case "cursor":
                  diff = str.length - 1;
                  obj2.weekday = closure_1_2.weekday[diff];
                  return "{weekday}";
                case "data":
                break;
                case "ddd":
                  obj2.era = closure_1_2.era[str.length - 1];
                  return "{era}";
                case "default":
                break;
                case "defineProperty":
                  tmp9 = obj2;
                  length = str.length;
                  str = "numeric";
                break;
                case "op":
                break;
                case "delete":
                  tmp9 = obj2;
                  length = str.length;
                  str = "numeric";
                break;
                case "description":
                  tmp9 = obj2;
                  length = str.length;
                  str = "numeric";
                break;
                case "ip":
                  tmp9 = obj2;
                  length = str.length;
                  str = "numeric";
                break;
                case "disabled":
                break;
                case "sa":
                  tmp9 = obj2;
                  length = str.length;
                  str = "numeric";
                break;
                case "dispatch":
                break;
                case "displayName":
                  let diff1 = str.length - 1;
                  obj2.month = closure_1_2.month[diff1];
                  return "{month}";
                case "diversity":
                break;
                case "v":
                  diff1 = str.length - 1;
                  obj2.month = closure_1_2.month[diff1];
                  return "{month}";
                case "done":
                break;
                case "duration":
                  let str10 = "numeric";
                  if (2 === str.length) {
                    str10 = "2-digit";
                  }
                  obj2.day = str10;
                  return "{day}";
                case "enabled":
                break;
                case "end":
                  return "{ampm}";
                case "enumerable":
                break;
                case "error":
                  let tmp4 = obj2;
                  let str7 = "numeric";
                  if (2 === str.length) {
                    str7 = "2-digit";
                  }
                  tmp4.hour = str7;
                  return "{hour}";
                case "exports":
                break;
                case "fileFinishedImporting":
                  tmp4 = obj2;
                  str7 = "numeric";
                  if (2 === str.length) {
                    str7 = "2-digit";
                  }
                  tmp4.hour = str7;
                  return "{hour}";
                case "fill":
                  return str;
                case "find":
                  tmp4 = obj2;
                  str7 = "numeric";
                  if (2 === str.length) {
                    str7 = "2-digit";
                  }
                  tmp4.hour = str7;
                  return "{hour}";
                case "ind":
                break;
                case "flags":
                  tmp4 = obj2;
                  str7 = "numeric";
                  if (2 === str.length) {
                    str7 = "2-digit";
                  }
                  tmp4.hour = str7;
                  return "{hour}";
                case "forEach":
                break;
                case "gap":
                  let str5 = "numeric";
                  if (2 === str.length) {
                    str5 = "2-digit";
                  }
                  obj2.minute = str5;
                  return "{minute}";
                case "get":
                break;
                case "getChannel":
                  let str3 = "numeric";
                  if (2 === str.length) {
                    str3 = "2-digit";
                  }
                  obj2.second = str3;
                  return "{second}";
                case "getCurrentUser":
                break;
                case "guild":
                  let str2 = "long";
                  if (str.length < 4) {
                    str2 = "short";
                  }
                  obj2.timeZoneName = str2;
                  str = "{timeZoneName}";
                  const tmp = obj2;
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
                case "go_live_notifications":
                break;
                case "paymentGatewaySubscriptionId":
                break;
                case "integrationOwner":
                break;
                case "integrationOwnerHook":
                break;
                case "setScrollDirection":
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
                default:
              }
            });
            let str10 = obj.pattern;
            obj.pattern = str10.replace(/'([^']*)'/g, (arg0, arg1) => {
              let str = arg1;
              if (!arg1) {
                str = "'";
              }
              return str;
            });
            let pattern1 = obj.pattern;
            tmp32 = obj;
            if (pattern1.indexOf("{ampm}") > -1) {
              obj.hour12 = true;
              ({ pattern: obj3.pattern12, pattern: pattern2 } = obj);
              let str11 = pattern2.replace("{ampm}", "");
              obj.pattern = str11.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
              tmp32 = obj;
            }
          }
          if (tmp32) {
            let arr2 = items.push(tmp32);
          }
          num4 = num4 + 1;
          tmp29 = tmp32;
        } while (num4 < items2.length);
      }
      num3 = num3 + 1;
      tmp26 = tmp29;
      tmp27 = tmp29;
    } while (num3 < items1.length);
  }
  let tmp35 = tmp27;
  let tmp36 = tmp27;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    let tmp38 = tmp35;
    tmp36 = tmp35;
    while (keys1[0] !== undefined) {
      let tmp66 = str12;
      let hasOwnPropertyResult1 = timeFormats.hasOwnProperty(str12);
      if (hasOwnPropertyResult1) {
        let str13 = timeFormats[str12];
        let arr12 = str12.match(/M/g) || [];
        let tmp39 = new.target;
        let tmp40 = new.target;
        let array1 = new Array(arr12.length + 1);
        let arr14 = str12.match(/E/g) || [];
        let tmp41 = array1;
        let tmp42 = new.target;
        let tmp43 = new.target;
        let array2 = new Array(arr14.length + 1);
        let str14 = str13;
        if (array1.length > 2) {
          str14 = str13.replace(/(M|L)+/, array1.join("$1"));
        }
        let tmp44 = array2;
        let str15 = str14;
        if (array2.length > 2) {
          str15 = str14.replace(/([Eec])+/, array2.join("$1"));
        }
        let tmp45 = regex;
        let tmp46 = str15;
        let tmp47;
        if (!regex.test(str15)) {
          obj1 = {};
          obj2 = obj1;
          let tmp48 = obj2;
          obj1.pattern = str15.replace(obj2, (str) => {
            str = str.charAt(0);
            switch (str) {
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
                if (2 === length) {
                  str = "2-digit";
                }
                tmp9.year = str;
                return "{year}";
              case "create":
                let diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "createStyles":
              break;
              case "ty":
                diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "current":
              break;
              case "cursor":
                diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "data":
              break;
              case "ddd":
                obj2.era = closure_1_2.era[str.length - 1];
                return "{era}";
              case "default":
              break;
              case "defineProperty":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "op":
              break;
              case "delete":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "description":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "ip":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "disabled":
              break;
              case "sa":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "dispatch":
              break;
              case "displayName":
                let diff1 = str.length - 1;
                obj2.month = closure_1_2.month[diff1];
                return "{month}";
              case "diversity":
              break;
              case "v":
                diff1 = str.length - 1;
                obj2.month = closure_1_2.month[diff1];
                return "{month}";
              case "done":
              break;
              case "duration":
                let str10 = "numeric";
                if (2 === str.length) {
                  str10 = "2-digit";
                }
                obj2.day = str10;
                return "{day}";
              case "enabled":
              break;
              case "end":
                return "{ampm}";
              case "enumerable":
              break;
              case "error":
                let tmp4 = obj2;
                let str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "exports":
              break;
              case "fileFinishedImporting":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "fill":
                return str;
              case "find":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "ind":
              break;
              case "flags":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "forEach":
              break;
              case "gap":
                let str5 = "numeric";
                if (2 === str.length) {
                  str5 = "2-digit";
                }
                obj2.minute = str5;
                return "{minute}";
              case "get":
              break;
              case "getChannel":
                let str3 = "numeric";
                if (2 === str.length) {
                  str3 = "2-digit";
                }
                obj2.second = str3;
                return "{second}";
              case "getCurrentUser":
              break;
              case "guild":
                let str2 = "long";
                if (str.length < 4) {
                  str2 = "short";
                }
                obj2.timeZoneName = str2;
                str = "{timeZoneName}";
                const tmp = obj2;
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
              case "go_live_notifications":
              break;
              case "paymentGatewaySubscriptionId":
              break;
              case "integrationOwner":
              break;
              case "integrationOwnerHook":
              break;
              case "setScrollDirection":
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
              default:
            }
          });
          let str16 = obj1.pattern;
          obj1.pattern = str16.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          pattern2 = obj1.pattern;
          tmp47 = obj1;
          if (pattern2.indexOf("{ampm}") > -1) {
            obj1.hour12 = true;
            ({ pattern: obj4.pattern12, pattern: pattern3 } = obj1);
            let str17 = pattern3.replace("{ampm}", "");
            obj1.pattern = str17.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp47 = obj1;
          }
        }
        hasOwnPropertyResult1 = tmp47;
        tmp38 = tmp47;
      }
      tmp35 = tmp38;
      if (!hasOwnPropertyResult1) {
        continue;
      } else {
        arr3 = items.push(tmp38);
        tmp35 = tmp38;
        continue;
      }
      continue;
    }
  }
  const keys2 = Object.keys();
  if (keys2 !== undefined) {
    let tmp52 = tmp36;
    while (keys2[0] !== undefined) {
      let tmp67 = str18;
      let hasOwnPropertyResult2 = dateFormats.hasOwnProperty(str18);
      if (hasOwnPropertyResult2) {
        let str19 = dateFormats[str18];
        let arr17 = str18.match(/M/g) || [];
        let tmp53 = new.target;
        let tmp54 = new.target;
        let array3 = new Array(arr17.length + 1);
        let arr19 = str18.match(/E/g) || [];
        let tmp55 = array3;
        let tmp56 = new.target;
        let tmp57 = new.target;
        let array4 = new Array(arr19.length + 1);
        let str20 = str19;
        if (array3.length > 2) {
          str20 = str19.replace(/(M|L)+/, array3.join("$1"));
        }
        let tmp58 = array4;
        let str21 = str20;
        if (array4.length > 2) {
          str21 = str20.replace(/([Eec])+/, array4.join("$1"));
        }
        let tmp59 = regex;
        let tmp60 = str21;
        let tmp61;
        if (!regex.test(str21)) {
          obj2 = {};
          let tmp62 = obj2;
          obj2.pattern = str21.replace(obj2, (str) => {
            str = str.charAt(0);
            switch (str) {
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
                if (2 === length) {
                  str = "2-digit";
                }
                tmp9.year = str;
                return "{year}";
              case "create":
                let diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "createStyles":
              break;
              case "ty":
                diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "current":
              break;
              case "cursor":
                diff = str.length - 1;
                obj2.weekday = closure_1_2.weekday[diff];
                return "{weekday}";
              case "data":
              break;
              case "ddd":
                obj2.era = closure_1_2.era[str.length - 1];
                return "{era}";
              case "default":
              break;
              case "defineProperty":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "op":
              break;
              case "delete":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "description":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "ip":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "disabled":
              break;
              case "sa":
                tmp9 = obj2;
                length = str.length;
                str = "numeric";
              break;
              case "dispatch":
              break;
              case "displayName":
                let diff1 = str.length - 1;
                obj2.month = closure_1_2.month[diff1];
                return "{month}";
              case "diversity":
              break;
              case "v":
                diff1 = str.length - 1;
                obj2.month = closure_1_2.month[diff1];
                return "{month}";
              case "done":
              break;
              case "duration":
                let str10 = "numeric";
                if (2 === str.length) {
                  str10 = "2-digit";
                }
                obj2.day = str10;
                return "{day}";
              case "enabled":
              break;
              case "end":
                return "{ampm}";
              case "enumerable":
              break;
              case "error":
                let tmp4 = obj2;
                let str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "exports":
              break;
              case "fileFinishedImporting":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "fill":
                return str;
              case "find":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "ind":
              break;
              case "flags":
                tmp4 = obj2;
                str7 = "numeric";
                if (2 === str.length) {
                  str7 = "2-digit";
                }
                tmp4.hour = str7;
                return "{hour}";
              case "forEach":
              break;
              case "gap":
                let str5 = "numeric";
                if (2 === str.length) {
                  str5 = "2-digit";
                }
                obj2.minute = str5;
                return "{minute}";
              case "get":
              break;
              case "getChannel":
                let str3 = "numeric";
                if (2 === str.length) {
                  str3 = "2-digit";
                }
                obj2.second = str3;
                return "{second}";
              case "getCurrentUser":
              break;
              case "guild":
                let str2 = "long";
                if (str.length < 4) {
                  str2 = "short";
                }
                obj2.timeZoneName = str2;
                str = "{timeZoneName}";
                const tmp = obj2;
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
              case "go_live_notifications":
              break;
              case "paymentGatewaySubscriptionId":
              break;
              case "integrationOwner":
              break;
              case "integrationOwnerHook":
              break;
              case "setScrollDirection":
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
              default:
            }
          });
          let str22 = obj2.pattern;
          obj2.pattern = str22.replace(/'([^']*)'/g, (arg0, arg1) => {
            let str = arg1;
            if (!arg1) {
              str = "'";
            }
            return str;
          });
          pattern3 = obj2.pattern;
          tmp61 = obj2;
          if (pattern3.indexOf("{ampm}") > -1) {
            obj2.hour12 = true;
            ({ pattern: obj5.pattern12, pattern: pattern4 } = obj2);
            let str23 = pattern4.replace("{ampm}", "");
            obj2.pattern = str23.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
            tmp61 = obj2;
          }
        }
        hasOwnPropertyResult2 = tmp61;
        tmp52 = tmp61;
      }
      tmp36 = tmp52;
      if (!hasOwnPropertyResult2) {
        continue;
      } else {
        let arr4 = items.push(tmp52);
        tmp36 = tmp52;
        continue;
      }
      continue;
    }
  }
  return items;
};
const re0 = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g;
const re1 = /[QxXVOvZASjgFDwWIQqH]/;
let closure_2 = { month: ["numeric", "2-digit", "short", "long", "narrow"], weekday: ["short", "short", "short", "long", "narrow"], era: ["short", "short", "short", "long", "narrow"] };
let closure_3 = ["weekday", "era", "year", "month", "day"];
let closure_4 = ["hour", "minute", "second", "timeZoneName"];