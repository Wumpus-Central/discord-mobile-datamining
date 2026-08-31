// _runtime/00067_merge.js
import result from "00026_result.js";
import processColor from "00050_processColor.js";
import _getFilterAmount from "00054__getFilterAmount.js";
import processColorStops from "00056_processColorStops.js";
import getValidLengthPercentageSizeOrNull from "00057_getValidLengthPercentageSizeOrNull.js";
import getPositionFromCSSValue from "00058_getPositionFromCSSValue.js";
import isBackgroundRepeatKeyword from "00059_isBackgroundRepeatKeyword.js";
import sizesDiffer from "00064_sizesDiffer.js";
import measure from "00068_measure.js";
import matricesDiffer from "00077_matricesDiffer.js";
import pointsDiffer from "00078_pointsDiffer.js";
import insetsDiffer from "00079_insetsDiffer.js";
import processColorElement from "00080_processColorElement.js";
import resolveAssetSource from "00081_resolveAssetSource.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
function merge(arg0, obj) {
  if (obj) {
    if (arg0) {
      for (const key10005 in arg1) {
        let tmp7 = key10005;
        if (!arg1.hasOwnProperty(key10005)) {
          continue;
        } else {
          let tmp2 = arg1[key10005];
          let tmp3 = tmp2;
          if (arg0.hasOwnProperty(key10005)) {
            let tmp4 = arg0[key10005];
            let tmp5 = typeof tmp2 === "object";
            if (typeof tmp2 === "object") {
              tmp5 = typeof tmp4 === "object";
            }
            tmp3 = tmp2;
            if (tmp5) {
              let tmp6 = merge;
              tmp3 = merge(tmp4, tmp2);
            }
          }
          arg0[key10005] = tmp3;
          continue;
        }
        continue;
      }
      return arg0;
    } else {
      return obj;
    }
  } else {
    return arg0;
  }
}
arg5.default = function getNativeComponentAttributes(arg0) {
  let _default = measure.default;
  const viewManagerConfig = _default.getViewManagerConfig(arg0);
  if (null == viewManagerConfig) {
    return null;
  } else {
    ({ baseModuleName, bubblingEventTypes, directEventTypes, NativeProps } = viewManagerConfig);
    if (bubblingEventTypes == null) {
      bubblingEventTypes = {};
    }
    if (directEventTypes == null) {
      directEventTypes = {};
    }
    let str = directEventTypes;
    let str2 = NativeProps;
    let str3 = bubblingEventTypes;
    let tmp3 = NativeProps;
    let tmp4 = directEventTypes;
    let tmp5 = bubblingEventTypes;
    if (!baseModuleName) {
      let obj = {};
      baseModuleName = "UIEdgeInsets";
      str2 = "Point";
      str = "CGPoint";
      str3 = "CATransform3D";
      for (const key10059 in tmp3) {
        let keys4 = key10059;
        keys4 = tmp3[key10059];
        if (`CATransform3D` === keys4) {
          let tmp39 = require;
          let tmp40 = dependencyMap;
          _default = matricesDiffer.default;
        } else {
          if (`CGPoint` !== keys4) {
            if (`Point` !== keys4) {
              if ("CGSize" === keys4) {
                let tmp35 = require;
                let tmp36 = dependencyMap;
                _default = sizesDiffer.default;
              } else if (`UIEdgeInsets` === keys4) {
                let tmp33 = require;
                let tmp34 = dependencyMap;
                _default = insetsDiffer.default;
              } else {
                _default = null;
              }
            }
          }
          let tmp37 = require;
          let tmp38 = dependencyMap;
          _default = pointsDiffer.default;
        }
        let _default1 = null;
        switch (keys4) {
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
            obj = { diff: null, process: null };
            obj[0] = _default;
            obj[1] = _default1;
            obj[key10059] = obj;
            continue;
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
          case "PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL":
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
          case "responseTimestamp":
          break;
          case "parseOptionValuesForSend":
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
            tmp3 = str2;
            tmp4 = str;
            tmp5 = str3;
          break;
          case "ANDROID_NOTIFICATION_LIGHTS":
          break;
          case "L":
          break;
          case "LI":
            let tmp62 = require;
            let tmp63 = dependencyMap;
            let tmp64 = processColor;
            _default1 = tmp64.default;
            if (null == _default) {
              let tmp65 = null == _default1;
              if (!tmp65) {
                obj1 = { process: null };
                obj1[0] = _default1;
                tmp65 = obj1;
              }
              obj = tmp65;
            } else if (null == _default1) {
              let obj2 = { diff: null };
              obj2[0] = _default;
              obj = obj2;
            }
          break;
          case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
          break;
          case "MESSAGE_REACTIONS":
            tmp62 = require;
            tmp63 = dependencyMap;
            tmp64 = processColor;
            _default1 = tmp64.default;
            if (null == _default) {
              tmp65 = null == _default1;
              if (!tmp65) {
                obj1 = { process: null };
                obj1[0] = _default1;
                tmp65 = obj1;
              }
              obj = tmp65;
            } else if (null == _default1) {
              obj2 = { diff: null };
              obj2[0] = _default;
              obj = obj2;
            }
          break;
          case "quest_bar_hero":
          break;
          case "quest_bar_hero_video":
            tmp62 = require;
            tmp63 = dependencyMap;
            tmp64 = processColor;
            _default1 = tmp64.default;
            if (null == _default) {
              tmp65 = null == _default1;
              if (!tmp65) {
                obj1 = { process: null };
                obj1[0] = _default1;
                tmp65 = obj1;
              }
              obj = tmp65;
            } else if (null == _default1) {
              obj2 = { diff: null };
              obj2[0] = _default;
              obj = obj2;
            }
          break;
          case "hero_video":
          break;
          case "_videoDecoderFallbackSuppressed":
            let tmp59 = require;
            let tmp60 = dependencyMap;
            let tmp61 = processColorElement;
            _default1 = tmp61.default;
          break;
          case "video":
          break;
          case "videoDecoder":
            tmp59 = require;
            tmp60 = dependencyMap;
            tmp61 = processColorElement;
            _default1 = tmp61.default;
          break;
          case "$ZodCheckMaxLength":
          break;
          case "kMaxLength":
            tmp59 = require;
            tmp60 = dependencyMap;
            tmp61 = processColorElement;
            _default1 = tmp61.default;
          break;
          case "eng":
          break;
          case "ng":
            let tmp56 = require;
            let tmp57 = dependencyMap;
            let tmp58 = resolveAssetSource;
            _default1 = tmp58.default;
          break;
          case "el":
          break;
          case "li":
            tmp56 = require;
            tmp57 = dependencyMap;
            tmp58 = resolveAssetSource;
            _default1 = tmp58.default;
          break;
          case "lim":
          break;
          case "limited":
            tmp56 = require;
            tmp57 = dependencyMap;
            tmp58 = resolveAssetSource;
            _default1 = tmp58.default;
          break;
          case "limitedBadgeRow":
          break;
          case "mi":
            tmp56 = require;
            tmp57 = dependencyMap;
            tmp58 = resolveAssetSource;
            _default1 = tmp58.default;
          break;
          case "mit":
          break;
          case "with_application":
            let tmp54 = module;
            let tmp55 = dependencyMap;
            _default1 = module(55);
          break;
          case "_applicationResults":
          break;
          case "applicationResults":
            tmp54 = module;
            tmp55 = dependencyMap;
            _default1 = module(55);
          break;
          case "getGiftable":
          break;
          case "tableRow":
            let tmp51 = require;
            let tmp52 = dependencyMap;
            let tmp53 = _getFilterAmount;
            _default1 = tmp53.default;
          break;
          case "tableRowGroupContainer":
          break;
          case "$ZodMap":
            tmp51 = require;
            tmp52 = dependencyMap;
            tmp53 = _getFilterAmount;
            _default1 = tmp53.default;
          break;
          case "ZodMap":
          break;
          case "M":
            let tmp49 = require;
            let tmp50 = dependencyMap;
            _default1 = processColorStops.default;
          break;
          case "ap":
          break;
          case "$ZodCheckGreaterThan":
            let tmp47 = require;
            let tmp48 = dependencyMap;
            _default1 = getPositionFromCSSValue.default;
          break;
          case "couch":
          break;
          case "couch_and_lamp":
            let tmp45 = require;
            let tmp46 = dependencyMap;
            _default1 = isBackgroundRepeatKeyword.default;
          break;
          case "ToIntlMathematicalValue":
          break;
          case "th":
            let tmp42 = require;
            let tmp43 = dependencyMap;
            let tmp44 = getValidLengthPercentageSizeOrNull;
            _default1 = tmp44.default;
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
          break;
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
            tmp42 = require;
            tmp43 = dependencyMap;
            tmp44 = getValidLengthPercentageSizeOrNull;
            _default1 = tmp44.default;
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
          break;
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
          case "maybeTrackQueryEntered":
          break;
          case "getDynamicSamplingContextFromScope":
          break;
          case "openGameProfileModal":
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
          case "getDefaultHeaderHeight":
          break;
          case "Y2K":
          break;
          case "topLoadStart":
          break;
          case "precision":
          break;
          case "optionCell":
          break;
          case "optionCellText":
          break;
          case "_onboardingStepIndex":
          break;
          case "onboardingStepIndex":
          break;
          case "excludedQuests":
          break;
          case "handleMessageBlur":
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
          case "kiss_person_person_medium_dark_skin_tone_light_skin_tone":
          break;
        }
      }
      obj.style = result.default;
      const _Object = Object;
      const obj3 = { uiViewClassName: null, validAttributes: null, bubblingEventTypes: null, directEventTypes: null };
      obj3[0] = arg0;
      obj3[1] = obj;
      obj3[2] = tmp5;
      obj3[3] = tmp4;
      const merged = Object.assign(viewManagerConfig, obj3);
      const constants = measure.default.getConstants();
      if (!constants.ViewManagerNames) {
        if (!constants.LazyViewManagersEnabled) {
          const bubblingEventTypes2 = viewManagerConfig.bubblingEventTypes;
          const genericBubblingEventTypes = constants.genericBubblingEventTypes;
          let tmp71 = bubblingEventTypes2;
          if (genericBubblingEventTypes) {
            tmp71 = genericBubblingEventTypes;
            if (bubblingEventTypes2) {
              tmp71 = bubblingEventTypes2;
              const keys = Object.keys();
              if (keys !== undefined) {
                tmp71 = bubblingEventTypes2;
                while (keys[tmp2] !== undefined) {
                  keys4 = tmp74;
                  if (!genericBubblingEventTypes.hasOwnProperty(tmp74)) {
                    continue;
                  } else {
                    let obj10 = genericBubblingEventTypes[tmp74];
                    let tmp75 = obj10;
                    if (bubblingEventTypes2.hasOwnProperty(tmp74)) {
                      let obj11 = bubblingEventTypes2[tmp74];
                      let tmp76 = typeof obj10 === "object";
                      if (typeof obj10 === "object") {
                        tmp76 = typeof obj11 === "object";
                      }
                      tmp75 = obj10;
                      if (tmp76) {
                        let tmp77 = obj11;
                        if (obj10) {
                          tmp77 = obj10;
                          if (obj11) {
                            let tmp78 = obj10;
                            tmp77 = obj11;
                            let keys1 = Object.keys();
                            if (keys1 !== undefined) {
                              tmp77 = obj11;
                              let tmp80 = keys1[keys4];
                              while (tmp80 !== undefined) {
                                keys4 = tmp80;
                                if (!obj10.hasOwnProperty(tmp80)) {
                                  continue;
                                } else {
                                  let tmp81 = obj10[tmp80];
                                  let tmp82 = tmp81;
                                  if (obj11.hasOwnProperty(tmp80)) {
                                    let tmp83 = obj11[tmp80];
                                    let tmp84 = typeof tmp81 === "object";
                                    if (typeof tmp81 === "object") {
                                      tmp84 = typeof tmp83 === "object";
                                    }
                                    tmp82 = tmp81;
                                    if (tmp84) {
                                      let tmp85 = merge;
                                      tmp82 = merge(tmp83, tmp81);
                                    }
                                  }
                                  obj11[tmp80] = tmp82;
                                  continue;
                                }
                                continue;
                              }
                            }
                          }
                        }
                        tmp75 = tmp77;
                      }
                    }
                    bubblingEventTypes2[tmp74] = tmp75;
                    continue;
                  }
                  continue;
                }
              }
            }
          }
          viewManagerConfig.bubblingEventTypes = tmp71;
          const directEventTypes2 = viewManagerConfig.directEventTypes;
          const genericDirectEventTypes = constants.genericDirectEventTypes;
          let tmp86 = directEventTypes2;
          if (genericDirectEventTypes) {
            tmp86 = genericDirectEventTypes;
            if (directEventTypes2) {
              tmp86 = directEventTypes2;
              const keys2 = Object.keys();
              if (keys2 !== undefined) {
                tmp86 = directEventTypes2;
                while (keys2[tmp2] !== undefined) {
                  keys4 = tmp89;
                  if (!genericDirectEventTypes.hasOwnProperty(tmp89)) {
                    continue;
                  } else {
                    let obj12 = genericDirectEventTypes[tmp89];
                    let tmp90 = obj12;
                    if (directEventTypes2.hasOwnProperty(tmp89)) {
                      let obj13 = directEventTypes2[tmp89];
                      let tmp91 = typeof obj12 === "object";
                      if (typeof obj12 === "object") {
                        tmp91 = typeof obj13 === "object";
                      }
                      tmp90 = obj12;
                      if (tmp91) {
                        let tmp92 = obj13;
                        if (obj12) {
                          tmp92 = obj12;
                          if (obj13) {
                            let tmp93 = obj12;
                            tmp92 = obj13;
                            let keys3 = Object.keys();
                            if (keys3 !== undefined) {
                              tmp92 = obj13;
                              let tmp95 = keys3[keys4];
                              while (tmp95 !== undefined) {
                                keys4 = tmp95;
                                if (!obj12.hasOwnProperty(tmp95)) {
                                  continue;
                                } else {
                                  let tmp96 = obj12[tmp95];
                                  let tmp97 = tmp96;
                                  if (obj13.hasOwnProperty(tmp95)) {
                                    let tmp98 = obj13[tmp95];
                                    let tmp99 = typeof tmp96 === "object";
                                    if (typeof tmp96 === "object") {
                                      tmp99 = typeof tmp98 === "object";
                                    }
                                    tmp97 = tmp96;
                                    if (tmp99) {
                                      keys4 = merge;
                                      tmp97 = merge(tmp98, tmp96);
                                    }
                                  }
                                  obj13[tmp95] = tmp97;
                                  continue;
                                }
                                continue;
                              }
                            }
                          }
                        }
                        tmp90 = tmp92;
                      }
                    }
                    directEventTypes2[tmp89] = tmp90;
                    continue;
                  }
                  continue;
                }
              }
            }
          }
          viewManagerConfig.directEventTypes = tmp86;
        }
        return viewManagerConfig;
      }
      keys4 = tmp66(70);
      const obj14 = keys4(measure.default.getDefaultEventTypes)();
      if (obj14) {
        if (viewManagerConfig) {
          keys4 = obj14;
          for (const key10193 in obj14) {
            keys4 = key10193;
            if (!obj14.hasOwnProperty(key10193)) {
              continue;
            } else {
              let obj15 = obj14[key10193];
              keys4 = obj15;
              if (viewManagerConfig.hasOwnProperty(key10193)) {
                let obj16 = viewManagerConfig[key10193];
                keys4 = typeof obj15 === "object";
                if (typeof obj15 === "object") {
                  keys4 = typeof obj16 === "object";
                }
                keys4 = obj15;
                if (keys4) {
                  keys4 = obj16;
                  if (obj15) {
                    keys4 = obj15;
                    if (obj16) {
                      keys4 = obj15;
                      keys4 = obj16;
                      keys4 = Object.keys();
                      if (keys4 !== undefined) {
                        keys4 = obj16;
                        keys4 = keys4[keys4];
                        while (keys4 !== undefined) {
                          if (!obj15.hasOwnProperty(keys4)) {
                            continue;
                          } else {
                            keys4 = obj15[keys4];
                            if (obj16.hasOwnProperty(keys4)) {
                              keys4 = obj16[keys4];
                              keys4 = typeof keys4 === "object";
                              if (typeof keys4 === "object") {
                                keys4 = typeof keys4 === "object";
                              }
                              if (keys4) {
                                keys4 = merge;
                                keys4 = merge(keys4, keys4);
                              }
                            }
                            obj16[keys4] = keys4;
                            continue;
                          }
                          continue;
                        }
                      }
                    }
                  }
                }
              }
              viewManagerConfig[key10193] = keys4;
              continue;
            }
            continue;
          }
        }
      }
      const _default3 = measure.default;
    }
    const viewManagerConfig1 = measure.default.getViewManagerConfig(baseModuleName);
    let tmp12 = str2;
    let tmp13 = str;
    let tmp14 = str3;
    baseModuleName = null;
    if (viewManagerConfig1) {
      const obj4 = {};
      const merged1 = Object.assign(viewManagerConfig1.bubblingEventTypes);
      const merged2 = Object.assign(tmp11);
      const obj5 = {};
      const merged3 = Object.assign(viewManagerConfig1.directEventTypes);
      const merged4 = Object.assign(tmp10);
      const obj6 = {};
      const merged5 = Object.assign(viewManagerConfig1.NativeProps);
      const merged6 = Object.assign(tmp9);
      baseModuleName = viewManagerConfig1.baseModuleName;
      tmp12 = obj6;
      tmp13 = obj5;
      tmp14 = obj4;
    }
    str2 = tmp12;
    str = tmp13;
    str3 = tmp14;
    const _default2 = measure.default;
  }
};