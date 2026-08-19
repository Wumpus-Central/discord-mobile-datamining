// _runtime/03976_t.js
import t from "03975_t.js";

const fn = function t(moment) {
  const parts = "leden_\u00FAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\u00E1\u0159\u00ED_\u0159\u00EDjen_listopad_prosinec".split("_");
  const parts1 = "led_\u00FAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\u00E1\u0159_\u0159\u00EDj_lis_pro".split("_");
  const obj = { months: parts, monthsShort: parts1, monthsParse: null, shortMonthsParse: null, longMonthsParse: null, weekdays: null, weekdaysShort: null, weekdaysMin: null, longDateFormat: null, calendar: null, relativeTime: null, dayOfMonthOrdinalParse: null, ordinal: "%d.", week: null };
  const items = [];
  let num = 0;
  do {
    let _RegExp = RegExp;
    let regExp = new RegExp("^" + parts[num] + "$|^" + parts1[num] + "$", "i");
    items[num] = regExp;
    num = num + 1;
  } while (num < 12);
  obj[2] = items;
  const items1 = [];
  let num2 = 0;
  do {
    let _RegExp2 = RegExp;
    let regExp1 = new RegExp("^" + parts1[num2] + "$", "i");
    items1[num2] = regExp1;
    num2 = num2 + 1;
  } while (num2 < 12);
  obj[3] = items1;
  const items2 = [];
  let num3 = 0;
  do {
    let _RegExp3 = RegExp;
    let regExp2 = new RegExp("^" + parts[num3] + "$", "i");
    items2[num3] = regExp2;
    num3 = num3 + 1;
  } while (num3 < 12);
  function translate(arg0, arg1, arg2, arg3) {
    const text = `${arg0} `;
    let str = arg2;
    switch (arg2) {
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
        if (arg1) {
          let str20 = "p\u00E1r sekund";
        } else {
          str20 = "p\u00E1r sekundami";
        }
        return str20;
      case "keys":
        if (!arg1) {
          if (!arg3) {
            let text1 = `${tmp}sekundami`;
          }
          return text1;
        }
        let tmp19 = arg0 > 1;
        if (tmp19) {
          tmp19 = arg0 < 5;
        }
        if (tmp19) {
          let result = arg0 / 10;
          let tmp21 = ~result;
          let tmp22 = ~tmp21;
          tmp19 = 1 !== tmp22;
        }
        let str19 = "sekund";
        if (tmp19) {
          str19 = "sekundy";
        }
        text1 = text + str19;
      break;
      case "kind":
        if (!arg1) {
          if (!arg3) {
            text1 = `${tmp}sekundami`;
          }
          return text1;
        }
        tmp19 = arg0 > 1;
        if (tmp19) {
          tmp19 = arg0 < 5;
        }
        if (tmp19) {
          result = arg0 / 10;
          tmp21 = ~result;
          tmp22 = ~tmp21;
          tmp19 = 1 !== tmp22;
        }
        str19 = "sekund";
        if (tmp19) {
          str19 = "sekundy";
        }
        text1 = text + str19;
      break;
      case "ks":
      break;
      case "space":
        let str16 = "minuta";
        if (!arg1) {
          let str17 = "minutou";
          if (arg3) {
            str17 = "minutu";
          }
          str16 = str17;
        }
        return str16;
      case "label":
      break;
      case "lc":
        if (!arg1) {
          if (!arg3) {
            let text2 = `${tmp}minutami`;
          }
          return text2;
        }
        let tmp17 = arg0 > 1;
        if (tmp17) {
          tmp17 = arg0 < 5;
        }
        if (tmp17) {
          tmp17 = 1 !== ~~arg0 / 10;
        }
        let str15 = "minut";
        if (tmp17) {
          str15 = "minuty";
        }
        text2 = text + str15;
      break;
      case "left":
        let sum = text + str;
        return sum;
      case "length":
        let str12 = "hodina";
        if (!arg1) {
          let str13 = "hodinou";
          if (arg3) {
            str13 = "hodinu";
          }
          str12 = str13;
        }
        return str12;
      case "lj":
      break;
      case "loadJsonAsset":
        if (!arg1) {
          if (!arg3) {
            let text3 = `${tmp}hodinami`;
          }
          return text3;
        }
        let tmp12 = arg0 > 1;
        if (tmp12) {
          tmp12 = arg0 < 5;
        }
        if (tmp12) {
          let result1 = arg0 / 10;
          let tmp14 = ~result1;
          let tmp15 = ~tmp14;
          tmp12 = 1 !== tmp15;
        }
        let str11 = "hodin";
        if (tmp12) {
          str11 = "hodiny";
        }
        text3 = text + str11;
      break;
      case "location":
      break;
      case "map":
        if (arg1) {
          let str9 = "den";
        } else {
          str9 = "dnem";
        }
        return str9;
      case "marginTop":
      break;
      case "marginBottom":
        if (!arg1) {
          if (!arg3) {
            let text4 = `${tmp}dny`;
          }
          return text4;
        }
        let tmp10 = arg0 > 1;
        if (tmp10) {
          tmp10 = arg0 < 5;
        }
        if (tmp10) {
          tmp10 = 1 !== ~~arg0 / 10;
        }
        let str8 = "dn\u00ED";
        if (tmp10) {
          str8 = "dny";
        }
        text4 = text + str8;
      break;
      case "max":
      break;
      case "memo":
        if (arg1) {
          let str6 = "m\u011Bs\u00EDc";
        } else {
          str6 = "m\u011Bs\u00EDcem";
        }
        return str6;
      case "message":
      break;
      case "messageId":
        if (!arg1) {
          if (!arg3) {
            let text5 = `${tmp}měsíci`;
          }
          return text5;
        }
        let tmp8 = arg0 > 1;
        if (tmp8) {
          tmp8 = arg0 < 5;
        }
        if (tmp8) {
          tmp8 = 1 !== ~~arg0 / 10;
        }
        let str5 = "m\u011Bs\u00EDc\u016F";
        if (tmp8) {
          str5 = "m\u011Bs\u00EDce";
        }
        text5 = text + str5;
      break;
      case "method":
      break;
      case "methodobject":
        if (arg1) {
          let str3 = "rok";
        } else {
          str3 = "rokem";
        }
        return str3;
      case "withTiming":
      break;
      case "min":
        if (!arg1) {
          if (!arg3) {
            str = "lety";
          }
        }
        let tmp3 = arg0 > 1;
        if (tmp3) {
          tmp3 = arg0 < 5;
        }
        if (tmp3) {
          let result2 = arg0 / 10;
          let tmp5 = ~result2;
          let tmp6 = ~tmp5;
          tmp3 = 1 !== tmp6;
        }
        let str2 = "let";
        if (tmp3) {
          str2 = "roky";
        }
        sum = text + str2;
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
      case "getWebViewProxy":
      break;
      case "xyYt8A":
      break;
      case "ACTIVITIES_INVITES_WRITE":
      break;
      case "INVITES":
      break;
      case "TEAL_NEW_60":
      break;
      case "useIsReferralReminderDCExperimentEnabled":
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
      case "serializeDate":
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
      case "loadIfNecessary":
      break;
      case "searchAllStickers":
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
      case "getAppState":
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
      case "categoryType":
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
      case "CHANNEL_NOTICE_SHOW_DELAY":
      break;
      case "DELAYED":
      break;
      case "PX_80":
      break;
      case "_":
      break;
      case "spanIsSampled":
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
      case "woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone":
      break;
      case "r_has_min_length$esjava$0":
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
      case "APP_LANDING_VIEWED":
      break;
      case "LANDING":
      break;
      case "DCDDeviceThermalStateManager":
      break;
      case "ThermalState":
      break;
      case "leading":
      break;
      case "leadingFade":
      break;
      case "FadeIn":
      break;
      case "FadeInData":
      break;
      case "getButtonStyles":
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
      case "QUEST_BAR_VIDEO_QUEST_PREVIEW":
      break;
      case "QUEST_PREVIEW_TOOL":
      break;
      case "QUEST_PREVIEW_TOOL_2":
      break;
      case "getMediaEngineExperiments":
      break;
      case "generateSessionId":
      break;
      case "ActionSheetHeaderPressableText":
      break;
      case "Pressable":
      break;
      case "ex":
      break;
      case "ext":
      break;
      case "isMute":
      break;
      case "isMuteScheduledEventsEnabled":
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
      case "NitroEmeraldBadgeLargeBadge":
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
      case "setUnknownOneofValue":
      break;
      case "_w":
        if (!arg1) {
          if (!arg3) {
            text3 = `${tmp}hodinami`;
          }
          return text3;
        }
        tmp12 = arg0 > 1;
        if (tmp12) {
          tmp12 = arg0 < 5;
        }
        if (tmp12) {
          result1 = arg0 / 10;
          tmp14 = ~result1;
          tmp15 = ~tmp14;
          tmp12 = 1 !== tmp15;
        }
        str11 = "hodin";
        if (tmp12) {
          str11 = "hodiny";
        }
        text3 = text + str11;
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
      case "MOCK_PERKS":
      break;
      case "PERKS_PURCHASABLE":
      break;
      case "PURCHASABLE_PREMIUM_FEATURES_BOOST_INFO":
      break;
      case "FORUM_CHANNEL_FOOTER":
      break;
      case "FOOTER_UPSELL":
      break;
      case "LuNsNf":
      break;
      case "Nfvo72":
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
      case "ComponentRegistry":
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
      case "ce":
      break;
      case "enableStallTracking":
      break;
      case "getHasImportantUnread":
      break;
      case "readBytes":
      break;
      case "writeUInt8":
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
      case "QUEST_BAR_V2":
      break;
      case "Role":
      break;
      case "RoleFlags":
      break;
      case "scrollToSectionId":
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
      case "bysecond":
      break;
      case "second_place":
      break;
      case "second_place_medal":
      break;
      case "preferredPaymentMethods":
      break;
      case "paypalPreferred":
      break;
      case "venmoPreferred":
        if (!arg1) {
          if (!arg3) {
            text1 = `${tmp}sekundami`;
          }
          return text1;
        }
        tmp19 = arg0 > 1;
        if (tmp19) {
          tmp19 = arg0 < 5;
        }
        if (tmp19) {
          result = arg0 / 10;
          tmp21 = ~result;
          tmp22 = ~tmp21;
          tmp19 = 1 !== tmp22;
        }
        str19 = "sekund";
        if (tmp19) {
          str19 = "sekundy";
        }
        text1 = text + str19;
      break;
      case "GuildEntityDao":
      break;
      case "EntityDao":
      break;
      case "Dao":
      break;
      case "handleStartCall":
      break;
      case "_initialPropsMap":
      break;
      case "initialProps":
        sum = text + str;
        return sum;
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
      case "showGrip":
      break;
      case "VOICE_ACTIVITY_DEFAULT":
      break;
      case "DEFAULT_STEP_RESOLUTION":
      break;
      case "RESOLUTION_1080":
      break;
      case "_applyCombination":
      break;
      case "ly":
      break;
      case "grandma_tone3":
        if (!arg1) {
          if (!arg3) {
            str = "lety";
          }
        }
        tmp3 = arg0 > 1;
        if (tmp3) {
          tmp3 = arg0 < 5;
        }
        if (tmp3) {
          result2 = arg0 / 10;
          tmp5 = ~result2;
          tmp6 = ~tmp5;
          tmp3 = 1 !== tmp6;
        }
        str2 = "let";
        if (tmp3) {
          str2 = "roky";
        }
        sum = text + str2;
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
      case "ACTIVITY_LAYOUT_MODE_UPDATE":
      break;
      default:
    }
  }
  obj[4] = items2;
  obj[5] = "ned\u011Ble_pond\u011Bl\u00ED_\u00FAter\u00FD_st\u0159eda_\u010Dtvrtek_p\u00E1tek_sobota".split("_");
  obj[6] = "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so".split("_");
  obj[7] = "ne_po_\u00FAt_st_\u010Dt_p\u00E1_so".split("_");
  obj[8] = { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" };
  obj[9] = {
    sameDay: "[dnes v] LT",
    nextDay: "[z\u00EDtra v] LT",
    nextWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[v ned\u011Bli v] LT";
      } else {
        if (1 !== dayResult) {
          if (2 !== dayResult) {
            if (3 === dayResult) {
              return "[ve st\u0159edu v] LT";
            } else if (4 === dayResult) {
              return "[ve \u010Dtvrtek v] LT";
            } else if (5 === dayResult) {
              return "[v p\u00E1tek v] LT";
            } else if (6 === dayResult) {
              return "[v sobotu v] LT";
            }
          }
        }
        return "[v] dddd [v] LT";
      }
    },
    lastDay: "[v\u010Dera v] LT",
    lastWeek() {
      const dayResult = this.day();
      if (0 === dayResult) {
        return "[minulou ned\u011Bli v] LT";
      } else {
        if (1 !== dayResult) {
          if (2 !== dayResult) {
            if (3 === dayResult) {
              return "[minulou st\u0159edu v] LT";
            } else {
              if (4 !== dayResult) {
                if (5 !== dayResult) {
                  if (6 === dayResult) {
                    return "[minulou sobotu v] LT";
                  }
                }
              }
              return "[minul\u00FD] dddd [v] LT";
            }
          }
        }
        return "[minul\u00E9] dddd [v] LT";
      }
    },
    sameElse: "L"
  };
  obj[10] = { future: "za %s", past: "p\u0159ed %s", s: translate, ss: translate, m: translate, mm: translate, h: translate, hh: translate, d: translate, dd: translate, M: translate, MM: translate, y: translate, yy: translate };
  obj[11] = /\d{1,2}\./;
  obj[13] = { dow: 1, doy: 4 };
  return moment.defineLocale("cs", obj);
};
if (typeof exports === "object") {
  if (undefined !== module) {
    if (typeof require === "function") {
      fn(t);
    }
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);