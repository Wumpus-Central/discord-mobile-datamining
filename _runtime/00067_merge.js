// === Module 67: merge ===

// Module 67 (merge)
import result from "result" /* 26 */;
import processColor from "processColor" /* 50 */;
import _getFilterAmount from "_getFilterAmount" /* 54 */;
import parseLengthDefault from "parseLength" /* 55 */;
import processColorStops from "processColorStops" /* 56 */;
import getValidLengthPercentageSizeOrNull from "getValidLengthPercentageSizeOrNull" /* 57 */;
import getPositionFromCSSValue from "getPositionFromCSSValue" /* 58 */;
import isBackgroundRepeatKeyword from "isBackgroundRepeatKeyword" /* 59 */;
import sizesDiffer from "sizesDiffer" /* 64 */;
import measure from "measure" /* 68 */;
import matricesDiffer from "matricesDiffer" /* 77 */;
import pointsDiffer from "pointsDiffer" /* 78 */;
import insetsDiffer from "insetsDiffer" /* 79 */;
import processColorElement from "processColorElement" /* 80 */;
import resolveAssetSource from "resolveAssetSource" /* 81 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
function merge(arg0, obj) {
  if (obj) {
    if (arg0) {
      for (const key10005 in arg1) {
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
    let tmp3 = directEventTypes;
    let tmp4 = NativeProps;
    let tmp5 = bubblingEventTypes;
    let tmp6 = NativeProps;
    let tmp7 = directEventTypes;
    let tmp8 = bubblingEventTypes;
    while (baseModuleName) {
      let _default2 = measure.default;
      let viewManagerConfig1 = _default2.getViewManagerConfig(baseModuleName);
      let merged5 = tmp4;
      let tmp14 = tmp4;
      let tmp15 = tmp3;
      let tmp16 = tmp5;
      baseModuleName = null;
      if (viewManagerConfig1) {
        let obj = {};
        let merged = Object.assign(viewManagerConfig1.bubblingEventTypes);
        let merged1 = Object.assign(tmp13);
        obj = {};
        let merged2 = Object.assign(viewManagerConfig1.directEventTypes);
        let merged3 = Object.assign(tmp12);
        obj1 = {};
        let merged4 = Object.assign(viewManagerConfig1.NativeProps);
        merged5 = Object.assign(merged5);
        baseModuleName = viewManagerConfig1.baseModuleName;
        tmp14 = obj1;
        tmp15 = obj;
        tmp16 = obj;
      }
      tmp4 = tmp14;
      tmp3 = tmp15;
      tmp5 = tmp16;
      tmp6 = tmp14;
      tmp7 = tmp15;
      tmp8 = tmp16;
    }
    const obj2 = {};
    let str3 = "CGSize";
    let str4 = "Point";
    for (const key10062 in tmp6) {
      let tmp106 = tmp6[key10062];
      if (`CATransform3D` === tmp106) {
        merged5 = matricesDiffer;
        _default = merged5.default;
      } else {
        if ("CGPoint" !== tmp106) {
          if (`Point` !== tmp106) {
            if (`CGSize` === tmp106) {
              merged5 = sizesDiffer;
              _default = merged5.default;
            } else if ("UIEdgeInsets" === tmp106) {
              merged5 = insetsDiffer;
              _default = merged5.default;
            } else {
              _default = null;
            }
          }
        }
        merged5 = pointsDiffer;
        _default = merged5.default;
      }
      let _default1 = null;
      switch (tmp106) {
        case "Icon":
        break;
        case "IconComponent":
          if (null == _default) {
            merged5 = null == _default1;
            if (!merged5) {
              let obj3 = { process: null };
              obj3[0] = _default1;
              merged5 = obj3;
            }
            let obj4 = merged5;
            obj2[key10062] = obj4;
            continue;
          } else if (null == _default1) {
            merged5 = { diff: null };
            merged5[0] = _default;
            obj4 = merged5;
          }
          obj4 = { diff: null, process: null };
          obj4[0] = _default;
          obj4[1] = _default1;
        break;
        case "c":
          merged5 = require;
          let tmp44 = getValidLengthPercentageSizeOrNull;
          _default1 = tmp44.default;
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
          merged5 = require;
          let tmp56 = processColor;
          _default1 = tmp56.default;
        break;
        case "limitedTimeBadge":
        break;
        case "mi":
          merged5 = require;
          tmp56 = processColor;
          _default1 = tmp56.default;
        break;
        case "mit":
        break;
        case "getAppState":
          merged5 = require;
          tmp56 = processColor;
          _default1 = tmp56.default;
        break;
        case "$ZodMap":
        break;
        case "ZodMap":
          merged5 = require;
          let tmp54 = processColorElement;
          _default1 = tmp54.default;
        break;
        case "M":
        break;
        case "ap":
          merged5 = require;
          tmp54 = processColorElement;
          _default1 = tmp54.default;
        break;
        case "ToIntlMathematicalValue":
        break;
        case "th":
          merged5 = require;
          tmp54 = processColorElement;
          _default1 = tmp54.default;
        break;
        case "ValueSetter":
        break;
        case "$ZodCheckNumberFormat":
          merged5 = require;
          let tmp52 = resolveAssetSource;
          _default1 = tmp52.default;
        break;
        case "N":
        break;
        case "NumberFormat":
          merged5 = require;
          tmp52 = resolveAssetSource;
          _default1 = tmp52.default;
        break;
        case "um":
        break;
        case "b":
          merged5 = require;
          tmp52 = resolveAssetSource;
          _default1 = tmp52.default;
        break;
        case "be":
        break;
        case "categoryType":
          merged5 = require;
          tmp52 = resolveAssetSource;
          _default1 = tmp52.default;
        break;
        case "$ZodObject":
        break;
        case "$ZodObjectJIT":
          merged5 = importDefault;
          _default1 = parseLengthDefault;
        break;
        case "ZodObject":
        break;
        case "O":
          merged5 = importDefault;
          _default1 = parseLengthDefault;
        break;
        case "j":
        break;
        case "je":
          merged5 = require;
          let tmp49 = _getFilterAmount;
          _default1 = tmp49.default;
        break;
        case "IT":
        break;
        case "MEDIA_PICKER_SEND_BUTTON_SPRING":
          merged5 = require;
          tmp49 = _getFilterAmount;
          _default1 = tmp49.default;
        break;
        case "marginHorizontal":
        break;
        case "Direction":
          merged5 = require;
          _default1 = processColorStops.default;
        break;
        case "rect":
        break;
        case "CHANNEL_NOTICE_SHOW_DELAY":
          merged5 = require;
          _default1 = getPositionFromCSSValue.default;
        break;
        case "DELAYED":
        break;
        case "PX_80":
          merged5 = require;
          _default1 = isBackgroundRepeatKeyword.default;
        break;
        case "_":
        break;
        case "spanIsSampled":
          merged5 = require;
          tmp44 = getValidLengthPercentageSizeOrNull;
          _default1 = tmp44.default;
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
        case "LAYOUT":
        break;
        case "YOU":
        break;
        case "UPDATE_CONFIG":
        break;
        case "DATE_CONFIG":
        break;
        case "GUILD_INCIDENT_ALERT_MODE_DISABLED":
        break;
        case "lok":
        break;
        case "kom":
        break;
        case "startCol":
        break;
        case "startCollectors":
        break;
        case "FormSubmitErrorType":
        break;
        case "person_walking_facing_right_tone5":
        break;
        case "_lastRefreshTimer":
        break;
        case "mergeDelta":
        break;
        case "abandonPermissions":
        break;
        case "onPermissionsChanged":
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
        case "priceTiers":
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
        case "cancelButtonContainer":
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
        case "updateMembersSort":
        break;
        case "orthodox_cross":
        break;
        case "crossOriginIframeRootIdMap":
        break;
        case "applicationTopWrapperScrollView":
        break;
        case "onTop":
        break;
        case "wMWyci":
        break;
        case "ix8XIj":
        break;
        case "onunhandledrejection":
        break;
        case "rejection":
        break;
        case "rejectionReason":
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
        case "activityUserSessionId":
        break;
        case "disableGuildSelect":
        break;
        case "GuildSelectDefaultIcon":
        break;
        case "concatSettings":
        break;
        case "subscriptionTrial":
        break;
        case "subscriptionTrialId":
        break;
        case "TrialIdToProductOfferId":
        break;
        case "didEmit":
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
        case "wishlist_id":
        break;
        case "restrictedSchedule":
        break;
        case "restrictedScheduleNotificationKey":
        break;
        case "AccountAgeTier10LargeBadge":
        break;
        case "cou":
        break;
        case "Badge":
        break;
        case "PREMIUM_TRIAL_OFFER_ACTION_SHEET_VIEWED":
        break;
        case "acceptBlurpleLabelBackgroundColor":
        break;
        case "ColorF2Yellow":
        break;
        case "lowContrastMode":
        break;
        case "deprecationDate":
        break;
        case "onDateChange":
        break;
        case "getApplicationIdFromGuildId":
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
        case "containQuery":
        break;
        case "xCjYxK":
        break;
        case "SELF_MENTIONABLE_SYSTEM":
        break;
        case "SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS":
        break;
        case "unlistenKeyboardChange":
        break;
        case "getBasePurchaseFlowAnalyticsFields":
        break;
        case "rooster":
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
        case "pttQueueLatencyMicrosSamples":
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
        case "toggleRole":
        break;
        case "toggleRoleSettings":
        break;
        case "canPrune":
        break;
        case "canPruneGuildMembers":
        break;
        case "une":
        break;
        case "GuildMembers":
        break;
        case "showRPCDisconnectErrorUI":
        break;
        case "UI_LOAD_INITIAL_DISPLAY":
        break;
        case "DISPLAY_MEDIUM":
        break;
        case "MEDIUM":
        break;
        case "MEDIUM_BUTTON_HEIGHT":
        break;
        case "TOO_MANY_WEBHOOKS":
        break;
        case "inputHint":
        break;
        case "interstitial":
        break;
        case "aria-disabled":
        break;
        case "disable":
        break;
        case "disabledContainer":
        break;
        case "disabledContainerStyle":
        break;
        case "isa":
        break;
        case "sab":
        break;
        case "led":
        break;
        case "unpackStageChannelParty":
        break;
        case "packStageChannelPartyId":
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
        case "isCreateOrderLoading":
        break;
        case "getInitialOrientation":
        break;
        case "onTapThreadEmbed":
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
        case "contentScanMetadata":
        break;
        case "dataFormatters":
        break;
        case "flag_vc":
        break;
        case "vcData":
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
        case "PremiumMarketingComponentProperties":
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
        case "getMemoedRowData":
        break;
        case "juh":
        break;
        case "SEND_MESSAGE_FAILURE":
        break;
        case "REFERRAL_PROGRAM_ENTRYPOINT_REMINDER":
        break;
        case "RPC_SERVER_ERROR_CAUGHT":
        break;
        case "app_hardware_acceleration_enabled":
        break;
        case "_enabled":
        break;
        case "_enabledPaymentMethods":
        break;
        case "enable":
        break;
        case "shouldShowAgeGateForChannelId":
        break;
        case "kiss_man_man_light_skin_tone_medium_dark_skin_tone":
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
        case "StreamingTier7LargeBadge":
        break;
        case "EntitlementTenantFulfillmentStatus":
        break;
        case "ill":
        break;
        case "__findAnimatedPropsNodes":
        break;
        case "destructiveIcon":
        break;
        case "containerId":
        break;
        case "dispatchIsSubscribedUpdate":
        break;
        case "nodeMetaMap":
        break;
        case "approveRequest":
        break;
        case "MESSAGE_REMINDER_DURATION_ITEMS":
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
        case "USER_LOGIN":
        break;
        case "USER_LOGIN_FLOW":
        break;
        case "WANT_TO_PLAY_GAMES":
        break;
        case "_$esjava$limit":
        break;
        case "_$esjava$limit_backward":
        break;
        case "limit_backward":
        break;
        case "_b":
        break;
        case "messageDisplayCompact":
        break;
        case "activeStream":
        break;
        case "activeStreams":
        break;
        case "JPY":
        break;
        case "PYF":
        break;
        case "ZcgDJX":
        break;
        case "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE":
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
        case "BeakerIllocon":
        break;
        case "sanitizeWhitespace":
        break;
        case "getFilterTagIdsAnalytics":
        break;
        case "AnalyticsSoundSource":
        break;
        case "ExposureTime":
        break;
        case "getChannelA11yHint":
        break;
        case "Channel":
        break;
        case "interpolationIndex":
        break;
        case "explicitMediaFalsePositiveInfo":
        break;
        case "footerWrapper":
        break;
        case "person_facepalming_tone5":
        break;
        case "getCurrent":
        break;
        case "getCurrentUserActiveStream":
        break;
        case "U":
          merged5 = require;
          tmp44 = getValidLengthPercentageSizeOrNull;
          _default1 = tmp44.default;
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
        case "person_pouting":
        break;
        case "person_pouting_tone1":
        break;
        case "_getGuildState":
        break;
        case "getGuildState":
        break;
        case "G":
        break;
        case "Guild":
        break;
        case "video_previous_cdn":
        break;
        case "_guildId":
        break;
        case "gu":
        break;
        case "current_guild_id":
        break;
        case "getConfiguration":
        break;
        case "onTapJoinActivity":
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
        case "getRemoteVideoSinkPixelCount":
        break;
        case "trackStep":
        break;
        case "parseSampleRate":
        break;
        case "avatar_hash":
        break;
        case "_hash":
        break;
        case "hashKey":
        break;
        case "bhd":
        break;
        case "IN_APP_MESSAGE_SOUNDS":
        break;
        case "SOUNDS_PER_ROW":
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
        case "E2EE_STREAM_VERIFICATION_CODE_COPIED":
        break;
        case "USER_BADGE":
        break;
        case "USER_BADGES":
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
        case "withIsolationScope":
        break;
        case "openGuildJoinServerScreen":
        break;
        case "JoinServer":
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
        case "parseTimezonePattern":
        break;
        case "rnRootThresholds":
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
        case "onPressSticker":
        break;
        case "StickerGridItemTypes":
        break;
        case "scalar":
        break;
        case "scalarInfo":
        break;
        case "forceWhite":
        break;
        case "varint32read":
        break;
        case "readUint":
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
        case "PasskeysSpotIllustration":
        break;
        case "ke":
        break;
        case "useShowAssignedAgeGroupSettings":
        break;
        case "LARGE_BUTTON_PADDING":
        break;
        case "GUILD_CHANNEL_RESYNC_CANCELED":
        break;
        case "voicePanelStoreUnsubscribe":
        break;
        case "subscribeFromItem":
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
        case "tryGetLayout":
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
        case "analyticsLoadId":
        break;
        case "disableInviteWithTextChannelActivityLaunch":
        break;
        case "LaunchApplication11":
        break;
        case "11pdXZ":
        break;
        case "load":
        break;
        case "J":
        break;
        case "setCurrentClient":
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
          let constants = str3.getConstants();
          if (!constants.ViewManagerNames) {
            if (!constants.LazyViewManagersEnabled) {
              let bubblingEventTypes2 = viewManagerConfig.bubblingEventTypes;
              let genericBubblingEventTypes = constants.genericBubblingEventTypes;
              let tmp60 = bubblingEventTypes2;
              if (genericBubblingEventTypes) {
                tmp60 = genericBubblingEventTypes;
                if (bubblingEventTypes2) {
                  tmp60 = bubblingEventTypes2;
                  let keys = Object.keys();
                  if (keys !== undefined) {
                    tmp60 = bubblingEventTypes2;
                    let tmp63 = keys[tmp2];
                    while (tmp63 !== undefined) {
                      if (!genericBubblingEventTypes.hasOwnProperty(tmp63)) {
                        continue;
                      } else {
                        let obj10 = genericBubblingEventTypes[tmp63];
                        let tmp64 = obj10;
                        if (bubblingEventTypes2.hasOwnProperty(tmp63)) {
                          let obj11 = bubblingEventTypes2[tmp63];
                          let tmp65 = typeof obj10 === "object";
                          if (typeof obj10 === "object") {
                            tmp65 = typeof obj11 === "object";
                          }
                          tmp64 = obj10;
                          if (tmp65) {
                            let tmp66 = obj11;
                            if (obj10) {
                              tmp66 = obj10;
                              if (obj11) {
                                tmp66 = obj11;
                                let keys1 = Object.keys();
                                if (keys1 !== undefined) {
                                  tmp66 = obj11;
                                  let tmp69 = keys1[tmp];
                                  while (tmp69 !== undefined) {
                                    if (!obj10.hasOwnProperty(tmp69)) {
                                      continue;
                                    } else {
                                      let tmp70 = obj10[tmp69];
                                      let tmp71 = tmp70;
                                      if (obj11.hasOwnProperty(tmp69)) {
                                        let tmp72 = obj11[tmp69];
                                        let tmp73 = typeof tmp70 === "object";
                                        if (typeof tmp70 === "object") {
                                          tmp73 = typeof tmp72 === "object";
                                        }
                                        tmp71 = tmp70;
                                        if (tmp73) {
                                          tmp71 = merge(tmp72, tmp70);
                                        }
                                      }
                                      obj11[tmp69] = tmp71;
                                      continue;
                                    }
                                    continue;
                                  }
                                }
                              }
                            }
                            tmp64 = tmp66;
                          }
                        }
                        bubblingEventTypes2[tmp63] = tmp64;
                        continue;
                      }
                      continue;
                    }
                  }
                }
              }
              viewManagerConfig.bubblingEventTypes = tmp60;
              let directEventTypes2 = viewManagerConfig.directEventTypes;
              let genericDirectEventTypes = constants.genericDirectEventTypes;
              let tmp75 = directEventTypes2;
              if (genericDirectEventTypes) {
                tmp75 = genericDirectEventTypes;
                if (directEventTypes2) {
                  tmp75 = directEventTypes2;
                  let keys2 = Object.keys();
                  if (keys2 !== undefined) {
                    tmp75 = directEventTypes2;
                    let tmp78 = keys2[tmp2];
                    while (tmp78 !== undefined) {
                      if (!genericDirectEventTypes.hasOwnProperty(tmp78)) {
                        continue;
                      } else {
                        let obj12 = genericDirectEventTypes[tmp78];
                        let tmp79 = obj12;
                        if (directEventTypes2.hasOwnProperty(tmp78)) {
                          let obj13 = directEventTypes2[tmp78];
                          let tmp80 = typeof obj12 === "object";
                          if (typeof obj12 === "object") {
                            tmp80 = typeof obj13 === "object";
                          }
                          tmp79 = obj12;
                          if (tmp80) {
                            let tmp81 = obj13;
                            if (obj12) {
                              tmp81 = obj12;
                              if (obj13) {
                                tmp81 = obj13;
                                let keys3 = Object.keys();
                                if (keys3 !== undefined) {
                                  tmp81 = obj13;
                                  let tmp84 = keys3[tmp];
                                  while (tmp84 !== undefined) {
                                    if (!obj12.hasOwnProperty(tmp84)) {
                                      continue;
                                    } else {
                                      let tmp85 = obj12[tmp84];
                                      let tmp86 = tmp85;
                                      if (obj13.hasOwnProperty(tmp84)) {
                                        let tmp87 = obj13[tmp84];
                                        let tmp88 = typeof tmp85 === "object";
                                        if (typeof tmp85 === "object") {
                                          tmp88 = typeof tmp87 === "object";
                                        }
                                        tmp86 = tmp85;
                                        if (tmp88) {
                                          tmp86 = merge(tmp87, tmp85);
                                        }
                                      }
                                      obj13[tmp84] = tmp86;
                                      continue;
                                    }
                                    continue;
                                  }
                                }
                              }
                            }
                            tmp79 = tmp81;
                          }
                        }
                        directEventTypes2[tmp78] = tmp79;
                        continue;
                      }
                      continue;
                    }
                  }
                }
              }
              viewManagerConfig.directEventTypes = tmp75;
            }
            return viewManagerConfig;
          }
          let str4Result = str4(70);
          let obj14 = str4Result(str4(68).default.getDefaultEventTypes)();
          if (obj14) {
            if (viewManagerConfig) {
              let keys4 = Object.keys();
              if (keys4 !== undefined) {
                let tmp93 = keys4[tmp2];
                while (tmp93 !== undefined) {
                  if (!obj14.hasOwnProperty(tmp93)) {
                    continue;
                  } else {
                    let obj15 = obj14[tmp93];
                    let tmp94 = obj15;
                    if (viewManagerConfig.hasOwnProperty(tmp93)) {
                      let obj16 = viewManagerConfig[tmp93];
                      let tmp95 = typeof obj15 === "object";
                      if (typeof obj15 === "object") {
                        tmp95 = typeof obj16 === "object";
                      }
                      tmp94 = obj15;
                      if (tmp95) {
                        let tmp96 = obj16;
                        if (obj15) {
                          tmp96 = obj15;
                          if (obj16) {
                            tmp96 = obj16;
                            let keys5 = Object.keys();
                            if (keys5 !== undefined) {
                              tmp96 = obj16;
                              let tmp99 = keys5[tmp];
                              while (tmp99 !== undefined) {
                                if (!obj15.hasOwnProperty(tmp99)) {
                                  continue;
                                } else {
                                  let tmp100 = obj15[tmp99];
                                  let tmp101 = tmp100;
                                  if (obj16.hasOwnProperty(tmp99)) {
                                    let tmp102 = obj16[tmp99];
                                    let tmp103 = typeof tmp100 === "object";
                                    if (typeof tmp100 === "object") {
                                      tmp103 = typeof tmp102 === "object";
                                    }
                                    tmp101 = tmp100;
                                    if (tmp103) {
                                      tmp101 = merge(tmp102, tmp100);
                                    }
                                  }
                                  obj16[tmp99] = tmp101;
                                  continue;
                                }
                                continue;
                              }
                            }
                          }
                        }
                        tmp94 = tmp96;
                      }
                    }
                    viewManagerConfig[tmp93] = tmp94;
                    continue;
                  }
                  continue;
                }
              }
            }
          }
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
        case "shouldShowMosaicMediaDescriptions":
        break;
        case "setFeature":
        break;
        case "recapPage":
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
        case "richValue":
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
        case "NOTIFICATION_SETTINGS_PERMISSION_HEADER":
        break;
        case "HEADER_TITLE_TEXT_STYLE":
        break;
        case "useRichChatInput":
        break;
        case "ChatInputOmniButtonActionType":
        break;
        case "mni":
        break;
        case "ButtonAction":
        break;
        case "people_holding_hands_tone2_tone5":
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
        case "getURL":
        break;
        case "getURLForExperiment":
        break;
        case "track_next":
        break;
        case "_nextChannelId":
        break;
        case "diffClamp":
        break;
        case "setDeviceChangeCallback":
        break;
        case "latestTransaction":
        break;
        case "actionOnPress":
        break;
        case "refreshButtonAlignment":
        break;
        case "Alignment":
        break;
        case "HOIST":
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
        case "emitTimeout":
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
        case "differenceInCalendarDays":
        break;
        case "handleBalanceFetchSuccess":
        break;
        case "DefaultTransition":
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
        case "setTryItOutAvatar":
        break;
        case "setTryItOutAvatarDecoration":
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
        case "kiss_man_man_light_skin_tone_medium_skin_tone":
        break;
        case "allowRTL":
        break;
        case "getTraceContextFromScope":
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
        case "getDaysSincePremium":
        break;
        case "PremiumBadge":
        break;
        case "geSp4K":
        break;
        case "isDiscordDirectAssetUrl":
        break;
        case "entitlement_id":
        break;
        case "CameraLottie":
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
        case "activityInfoWrapper":
        break;
        case "performAutocomplete":
        break;
        case "searchForumPosts":
        break;
        case "locationY":
        break;
        case "__replaceAnimatedNodeWithValues":
        break;
        case "place":
        break;
        case "lac":
        break;
        case "ace":
        break;
        case "BRAINTREE_VERSION":
        break;
        case "NEUTRAL_83":
        break;
        case "isCamera":
        break;
        case "kiss_person_person_medium_dark_skin_tone_medium_skin_tone":
        break;
        case "_resolve":
        break;
        case "_resolveEmpty":
        break;
        case "sol":
        break;
        case "AppsFlyer":
        break;
        case "USER_AFFINITIES_V2":
        break;
        case "PRIVACY_LEVEL":
        break;
        case "LEVEL_9":
        break;
        case "_$esjava$result":
        break;
        case "resultCount":
        break;
        case "sul":
        break;
        case "getBrightness":
        break;
        case "BrightnessDown":
        break;
        case "ownerNode":
        break;
        case "determineMediaEngine":
        break;
        case "MediaEngineContextTypes":
        break;
        case "addFrame":
        break;
        case "run":
        break;
        case "actionStatusAccessibilityLabel":
        break;
        default:
          if (null == _default) {
            merged5 = null == _default1;
            if (!merged5) {
              obj3 = { process: null };
              obj3[0] = _default1;
              merged5 = obj3;
            }
            obj4 = merged5;
            obj2[key10062] = obj4;
            continue;
          } else if (null == _default1) {
            merged5 = { diff: null };
            merged5[0] = _default;
            obj4 = merged5;
          }
          obj4 = { diff: null, process: null };
          obj4[0] = _default;
          obj4[1] = _default1;
      }
    }
    str4 = require;
    obj2.style = result.default;
    const _Object = Object;
    const obj5 = { uiViewClassName: null, validAttributes: null, bubblingEventTypes: null, directEventTypes: null };
    obj5[0] = arg0;
    obj5[1] = obj2;
    obj5[2] = tmp8;
    obj5[3] = tmp7;
    const merged6 = Object.assign(viewManagerConfig, obj5);
    str3 = measure.default;
  }
};