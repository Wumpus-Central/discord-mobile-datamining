// _runtime/10641__isNativeReflectConstruct.js
import AbstractParserWithWordBoundaryChecking from "10457_AbstractParserWithWordBoundaryChecking.js";
import now from "10474_now.js";
import closure_2 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

let self = this;
const SVCasualDateParser = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
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
      function c(arg0) {
        let fn = Object.getOwnPropertyNames;
        if (!fn) {
          fn = (obj) => {
            const items = [];
            for (const key10005 in arg0) {
              let tmp2 = key10005;
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10005);
              } else {
                hasOwnPropertyResult = call(arg0, key10005);
              }
              if (!hasOwnPropertyResult) {
                continue;
              } else {
                items[items.length] = key10005;
                continue;
              }
              continue;
            }
            return items;
          };
        }
        return fn(arg0);
      }
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          const arr = c(__esModule);
          for (let num = 0; num < arr.length; num = num + 1) {
            let tmp2 = num;
            if ("default" !== arr[num]) {
              let tmp3 = self2;
              let tmp4 = self2(obj, __esModule, arr[num]);
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    let closure_9 = fn(now);
    const _RegExp = RegExp;
    const regExp = new RegExp(
      "(nu|idag|imorgon|\u00F6vermorgon|ig\u00E5r|f\u00F6rrg\u00E5r|i\\s*f\u00F6rrg\u00E5r)(?:\\s*(?:p\u00E5\\s*)?(morgonen?|f\u00F6rmiddagen?|middagen?|eftermiddagen?|kv\u00E4llen?|natten?|midnatt))?(?=\\W|$)",
      "i",
    );
    class SVCasualDateParser {
      constructor() {
        self = this;
        tmp = closure_2(this, SVCasualDateParser);
        tmp2 = closure_4;
        obj = closure_4(SVCasualDateParser);
        tmp3 = closure_3;
        if (_isNativeReflectConstruct()) {
          tmp7 = globalThis;
          _Reflect = Reflect;
          tmp8 = arguments;
          constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
        } else {
          tmp4 = arguments;
          tmp5 = arguments;
          constructResult = obj(...arguments);
        }
        return tmp3(self, constructResult);
      }
    }
    _inherits(SVCasualDateParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
    let obj = { key: "innerPattern", value: null };
    obj[1] = function innerPattern(arg0) {
      return regExp;
    };
    let items = [obj];
    obj = { key: "innerExtract", value: null };
    obj[1] = function innerExtract(refDate) {
      refDate = refDate.refDate;
      const formatted = arg1[1] || "".toLowerCase();
      const formatted1 = arg1[2] || "".toLowerCase();
      const parsingComponents = refDate.createParsingComponents();
      if ("nu" === formatted) {
        let nowResult = closure_9.now(refDate.reference);
      } else if ("idag" === formatted) {
        nowResult = closure_9.today(refDate.reference);
      } else {
        if ("imorgon" !== formatted) {
          if ("imorn" !== formatted) {
            if ("ig\u00E5r" === formatted) {
              const _Date2 = Date;
              const date = new Date(refDate.getTime());
              date.setDate(date.getDate() - 1);
              SVCasualDateParser(10456).assignSimilarDate(parsingComponents, date);
              SVCasualDateParser(10456).implySimilarTime(parsingComponents, date);
              nowResult = parsingComponents;
            } else if ("f\u00F6rrg\u00E5r" === formatted) {
              const _Date = Date;
              const date1 = new Date(refDate.getTime());
              date1.setDate(date1.getDate() - 2);
              SVCasualDateParser(10456).assignSimilarDate(parsingComponents, date1);
              SVCasualDateParser(10456).implySimilarTime(parsingComponents, date1);
              nowResult = parsingComponents;
            } else {
              nowResult = parsingComponents;
            }
          }
        }
        const _Date3 = Date;
        const date2 = new Date(refDate.getTime());
        date2.setDate(date2.getDate() + 1);
        SVCasualDateParser(10456).assignSimilarDate(parsingComponents, date2);
        SVCasualDateParser(10456).implySimilarTime(parsingComponents, date2);
        nowResult = parsingComponents;
      }
      switch (formatted1) {
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
          nowResult.imply("hour", 6);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          return nowResult;
        case "fileFinishedImporting":
          break;
        case "fill":
          nowResult.imply("hour", 6);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          return nowResult;
        case "find":
          break;
        case "ind":
          nowResult.imply("hour", 9);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "flags":
          break;
        case "forEach":
          nowResult.imply("hour", 9);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "gap":
          break;
        case "get":
          nowResult.imply("hour", 12);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "getChannel":
          break;
        case "getCurrentUser":
          nowResult.imply("hour", 12);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "guild":
          break;
        case "guildId":
          nowResult.imply("hour", 15);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "guild_id":
          break;
        case "has":
          nowResult.imply("hour", 15);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "hasDiversityParent":
          break;
        case "hash":
          nowResult.imply("hour", 20);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "hd":
          break;
        case "header":
          nowResult.imply("hour", 20);
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "height":
          break;
        case "httpServerLocation":
          if ("midnatt" === formatted1) {
            nowResult.imply("hour", 0);
          } else {
            nowResult.imply("hour", 2);
          }
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "icon":
          break;
        case "includes":
          if ("midnatt" === formatted1) {
            nowResult.imply("hour", 0);
          } else {
            nowResult.imply("hour", 2);
          }
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
          break;
        case "index":
          break;
        case "indexOf":
          if ("midnatt" === formatted1) {
            nowResult.imply("hour", 0);
          } else {
            nowResult.imply("hour", 2);
          }
          nowResult.imply("minute", 0);
          nowResult.imply("second", 0);
          nowResult.imply("millisecond", 0);
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
      }
    };
    items[1] = obj;
    exports.default = _createClass(SVCasualDateParser, items);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
