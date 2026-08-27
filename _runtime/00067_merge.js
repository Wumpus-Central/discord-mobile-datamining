// === Module 67: merge ===

// Module 67 (merge)
import result from "result" /* 26 */;
import processColor from "processColor" /* 50 */;
import _getFilterAmount from "_getFilterAmount" /* 54 */;
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
  let bubblingEventTypes = arg0;
  let _default = measure.default;
  const viewManagerConfig = _default.getViewManagerConfig(arg0);
  if (null == viewManagerConfig) {
    return null;
  } else {
    ({ baseModuleName, bubblingEventTypes: bubblingEventTypes2, directEventTypes, NativeProps } = viewManagerConfig);
    if (bubblingEventTypes2 == null) {
      bubblingEventTypes2 = {};
    }
    if (directEventTypes == null) {
      directEventTypes = {};
    }
    let str = directEventTypes;
    let str2 = NativeProps;
    let str3 = bubblingEventTypes2;
    let tmp3 = NativeProps;
    let tmp4 = directEventTypes;
    let keys3 = bubblingEventTypes2;
    if (!baseModuleName) {
      let prop = {};
      let str4 = "EdgeInsets";
      baseModuleName = "UIEdgeInsets";
      let str5 = "CGSize";
      str2 = "Point";
      str = "CGPoint";
      str3 = "CATransform3D";
      for (const key10058 in tmp3) {
        let obj10 = key10058;
        let tmp99 = tmp3[key10058];
        if (`CATransform3D` === tmp99) {
          let tmp37 = require;
          let tmp38 = dependencyMap;
          obj1 = matricesDiffer;
          _default = obj1.default;
        } else {
          if (`CGPoint` !== tmp99) {
            if (`Point` !== tmp99) {
              if (`CGSize` === tmp99) {
                let tmp33 = require;
                let tmp34 = dependencyMap;
                obj1 = sizesDiffer;
                _default = obj1.default;
              } else if (`UIEdgeInsets` === tmp99) {
                let tmp31 = require;
                let tmp32 = dependencyMap;
                obj1 = insetsDiffer;
                _default = obj1.default;
              } else {
                _default = null;
              }
            }
          }
          let tmp35 = require;
          let tmp36 = dependencyMap;
          obj1 = pointsDiffer;
          _default = obj1.default;
        }
        let _default1 = null;
        switch (tmp99) {
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
            obj1 = require;
            let tmp40 = dependencyMap;
            let tmp41 = getValidLengthPercentageSizeOrNull;
            _default1 = tmp41.default;
            if (null == _default) {
              obj1 = null == _default1;
              if (!obj1) {
                let obj = { process: null };
                obj[0] = _default1;
                obj1 = obj;
              }
              let obj2 = obj1;
              prop[obj10] = obj2;
              continue;
            } else if (null == _default1) {
              obj1 = { diff: null };
              obj1[0] = _default;
              obj2 = obj1;
            }
            obj2 = { diff: null, process: null };
            obj2[0] = _default;
            obj2[1] = _default1;
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
            if (tmp59) {
              let tmp60 = obj10;
              if (obj1) {
                tmp60 = obj1;
                if (obj10) {
                  let tmp61 = obj1;
                  tmp60 = obj10;
                  let keys = Object.keys();
                  if (keys !== undefined) {
                    tmp60 = obj10;
                    let tmp63 = keys[tmp];
                    while (tmp63 !== undefined) {
                      let tmp = tmp63;
                      if (!obj1.hasOwnProperty(tmp63)) {
                        continue;
                      } else {
                        let tmp64 = obj1[tmp63];
                        let tmp65 = tmp64;
                        if (obj10.hasOwnProperty(tmp63)) {
                          let tmp66 = obj10[tmp63];
                          let tmp67 = typeof tmp64 === "object";
                          if (typeof tmp64 === "object") {
                            tmp67 = typeof tmp66 === "object";
                          }
                          tmp65 = tmp64;
                          if (tmp67) {
                            let tmp68 = merge;
                            tmp65 = merge(tmp66, tmp64);
                          }
                        }
                        obj10[tmp63] = tmp65;
                        continue;
                      }
                      continue;
                    }
                  }
                }
              }
              str4 = tmp60;
            }
            bubblingEventTypes[key10058] = str4;
            let tmp56 = bubblingEventTypes;
            let tmp58 = keys3[tmp2];
            while (tmp58 !== undefined) {
              let key10058 = tmp58;
              if (!prop.hasOwnProperty(tmp58)) {
                continue;
              } else {
                obj1 = prop[key10058];
                str4 = obj1;
                if (bubblingEventTypes.hasOwnProperty(key10058)) {
                  let tmp59 = typeof obj1 === "object";
                  if (typeof obj1 === "object") {
                    tmp59 = typeof bubblingEventTypes[key10058] === "object";
                  }
                  str4 = obj1;
                }
              }
              continue;
            }
            viewManagerConfig.bubblingEventTypes = tmp56;
            let directEventTypes2 = viewManagerConfig.directEventTypes;
            let genericDirectEventTypes = str.genericDirectEventTypes;
            let tmp69 = directEventTypes2;
            if (genericDirectEventTypes) {
              tmp69 = genericDirectEventTypes;
              if (directEventTypes2) {
                let tmp70 = genericDirectEventTypes;
                let num2 = 0;
                tmp69 = directEventTypes2;
                let keys1 = Object.keys();
                if (keys1 !== undefined) {
                  tmp69 = directEventTypes2;
                  let tmp72 = keys1[tmp2];
                  while (tmp72 !== undefined) {
                    tmp = tmp72;
                    if (!genericDirectEventTypes.hasOwnProperty(tmp72)) {
                      continue;
                    } else {
                      let obj11 = genericDirectEventTypes[tmp72];
                      let tmp73 = obj11;
                      if (directEventTypes2.hasOwnProperty(tmp72)) {
                        let obj12 = directEventTypes2[tmp72];
                        let tmp74 = typeof obj11 === "object";
                        if (typeof obj11 === "object") {
                          tmp74 = typeof obj12 === "object";
                        }
                        tmp73 = obj11;
                        if (tmp74) {
                          let tmp75 = obj12;
                          if (obj11) {
                            tmp75 = obj11;
                            if (obj12) {
                              let tmp76 = obj11;
                              tmp75 = obj12;
                              let keys2 = Object.keys();
                              if (keys2 !== undefined) {
                                tmp75 = obj12;
                                let tmp78 = keys2[tmp];
                                while (tmp78 !== undefined) {
                                  tmp = tmp78;
                                  if (!obj11.hasOwnProperty(tmp78)) {
                                    continue;
                                  } else {
                                    let tmp79 = obj11[tmp78];
                                    let tmp80 = tmp79;
                                    if (obj12.hasOwnProperty(tmp78)) {
                                      let tmp81 = obj12[tmp78];
                                      let tmp82 = typeof tmp79 === "object";
                                      if (typeof tmp79 === "object") {
                                        tmp82 = typeof tmp81 === "object";
                                      }
                                      tmp80 = tmp79;
                                      if (tmp82) {
                                        let tmp83 = merge;
                                        tmp80 = merge(tmp81, tmp79);
                                      }
                                    }
                                    obj12[tmp78] = tmp80;
                                    continue;
                                  }
                                  continue;
                                }
                              }
                            }
                          }
                          tmp73 = tmp75;
                        }
                      }
                      directEventTypes2[tmp72] = tmp73;
                      continue;
                    }
                    continue;
                  }
                }
              }
            }
            viewManagerConfig.directEventTypes = tmp69;
            return viewManagerConfig;
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
          case "useYouBarActivityStatusEnabled":
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
          case "discovery_splash":
          break;
          case "splash":
          break;
          case "hash_mask":
          break;
          case "maskContentUnits":
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
            tmp3 = str2;
            tmp4 = str;
            keys3 = str3;
          break;
          case "MESSAGE_REACTIONS":
          break;
          case "$ZodCheckMaxLength":
          break;
          case "kMaxLength":
            obj1 = require;
            let tmp52 = dependencyMap;
            let tmp53 = processColor;
            _default1 = tmp53.default;
          break;
          case "eng":
          break;
          case "ng":
            obj1 = require;
            tmp52 = dependencyMap;
            tmp53 = processColor;
            _default1 = tmp53.default;
          break;
          case "el":
          break;
          case "li":
            obj1 = require;
            tmp52 = dependencyMap;
            tmp53 = processColor;
            _default1 = tmp53.default;
          break;
          case "lim":
          break;
          case "limited":
            obj1 = require;
            let tmp50 = dependencyMap;
            let tmp51 = processColorElement;
            _default1 = tmp51.default;
          break;
          case "limitedBadgeRow":
          break;
          case "mi":
            obj1 = require;
            tmp50 = dependencyMap;
            tmp51 = processColorElement;
            _default1 = tmp51.default;
          break;
          case "mit":
          break;
          case "with_application":
            obj1 = require;
            tmp50 = dependencyMap;
            tmp51 = processColorElement;
            _default1 = tmp51.default;
          break;
          case "_applicationResults":
          break;
          case "applicationResults":
            obj1 = require;
            let tmp48 = dependencyMap;
            let tmp49 = resolveAssetSource;
            _default1 = tmp49.default;
          break;
          case "onResult":
          break;
          case "getGlobalScope":
            obj1 = require;
            tmp48 = dependencyMap;
            tmp49 = resolveAssetSource;
            _default1 = tmp49.default;
          break;
          case "openGiftCodeRedeemModal":
          break;
          case "getChildNodes":
            obj1 = require;
            tmp48 = dependencyMap;
            tmp49 = resolveAssetSource;
            _default1 = tmp49.default;
          break;
          case "$ZodMap":
          break;
          case "ZodMap":
            obj1 = require;
            tmp48 = dependencyMap;
            tmp49 = resolveAssetSource;
            _default1 = tmp49.default;
          break;
          case "M":
          break;
          case "ap":
            obj1 = module;
            let tmp47 = dependencyMap;
            _default1 = module(55);
          break;
          case "$ZodCheckGreaterThan":
          break;
          case "ToIntlMathematicalValue":
            obj1 = module;
            tmp47 = dependencyMap;
            _default1 = module(55);
          break;
          case "th":
          break;
          case "ValueSetter":
            obj1 = require;
            let tmp45 = dependencyMap;
            let tmp46 = _getFilterAmount;
            _default1 = tmp46.default;
          break;
          case "$ZodCheckNumberFormat":
          break;
          case "N":
            obj1 = require;
            tmp45 = dependencyMap;
            tmp46 = _getFilterAmount;
            _default1 = tmp46.default;
          break;
          case "NumberFormat":
          break;
          case "um":
            obj1 = require;
            let tmp44 = dependencyMap;
            _default1 = processColorStops.default;
          break;
          case "b":
          break;
          case "be":
            obj1 = require;
            let tmp43 = dependencyMap;
            _default1 = getPositionFromCSSValue.default;
          break;
          case "breadcrumbType":
          break;
          case "$ZodObject":
            obj1 = require;
            let tmp42 = dependencyMap;
            _default1 = isBackgroundRepeatKeyword.default;
          break;
          case "$ZodObjectJIT":
          break;
          case "ZodObject":
            obj1 = require;
            tmp40 = dependencyMap;
            tmp41 = getValidLengthPercentageSizeOrNull;
            _default1 = tmp41.default;
            if (null == _default) {
              obj1 = null == _default1;
              if (!obj1) {
                obj = { process: null };
                obj[0] = _default1;
                obj1 = obj;
              }
              obj2 = obj1;
              prop[obj10] = obj2;
              continue;
            } else if (null == _default1) {
              obj1 = { diff: null };
              obj1[0] = _default;
              obj2 = obj1;
            }
            obj2 = { diff: null, process: null };
            obj2[0] = _default;
            obj2[1] = _default1;
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
          case "successNodeId":
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
          case "handleToggleVideo":
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
          case "PREMIUM_GIFT_YEAR_TIER_1":
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
          case "replaceCorrectMessageParams":
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
          case "optionId":
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
          case "InterceptingGestureDetector":
          break;
          case "StreamingTier1SmallBadge":
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
          case "_socketId":
          break;
          case "socketId":
          break;
          case "dims":
          break;
          case "slot_machine":
          break;
          case "gregory":
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
          case "allowRTL":
          break;
          case "deprecate":
          break;
          case "deprecated":
          break;
          case "deprecatedCFWSNearAt":
          break;
          case "enableAppStartTracking":
          break;
          case "getHighestActiveScreenIndex":
          break;
          case "expiresMonth":
          break;
          case "AccountAgeTier10LargeBadge":
          break;
          case "cou":
          break;
          case "Badge":
          break;
          case "getGuildDiscoverySplashSource":
          break;
          case "ComponentsConfiguration":
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
          case "expandEventProperties":
          break;
          case "G9fGlP":
          break;
          case "PARENTAL_CONTROLS_DIRECT_MESSAGES":
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
          case "payment_id":
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
          case "RewardsMouseSpotIllustration":
          break;
          case "savedDependencies":
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
          break;
          case "characterOrders":
          break;
          case "showStatus":
          break;
          case "useCanUseGuildSpace":
          break;
          case "getGuildFolderMenuItems":
          break;
          case "MenuItem":
          break;
          case "WHATS_ON_YOUR_MIND":
          break;
          case "INDIE":
          break;
          case "IE_PROTO":
          break;
          case "PROTO_THEME_MAP_MOBILE":
          break;
          case "PROTO_THEME_MAP_MOBILE_REFRESH":
          break;
          case "MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK":
          break;
          case "mmh":
          break;
          case "getNextAssetPage":
          break;
          case "PageUp":
          break;
          case "ageUpper":
          break;
          case "performAutocomplete":
          break;
          case "completeNewMemberAction":
          break;
          case "NewMemberActionTypes":
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
          case "getSpatialCapabilities":
          break;
          case "setIncomingCallActive":
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
            obj1 = require;
            tmp40 = dependencyMap;
            tmp41 = getValidLengthPercentageSizeOrNull;
            _default1 = tmp41.default;
            if (null == _default) {
              obj1 = null == _default1;
              if (!obj1) {
                obj = { process: null };
                obj[0] = _default1;
                obj1 = obj;
              }
              obj2 = obj1;
              prop[obj10] = obj2;
              continue;
            } else if (null == _default1) {
              obj1 = { diff: null };
              obj1[0] = _default;
              obj2 = obj1;
            }
            obj2 = { diff: null, process: null };
            obj2[0] = _default;
            obj2[1] = _default1;
          break;
          case "getEntitlementsForGuild":
          break;
          case "fo":
          break;
          case "for":
          break;
          case "forEachChannel":
          break;
          case "getGuildFavorites":
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
          case "$ZodCheckMinSize":
          break;
          case "__reanimatedModuleProxy":
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
          case "getEmbeddedActivitiesForLocationIncludingHidden":
          break;
          case "endImportTime":
          break;
          case "selectedRewardText":
          break;
          case "getRNSentryOnDrawReporter":
          break;
          case "tRNS":
          break;
          case "RNSentry":
          break;
          case "Sentry":
          break;
          case "entry":
          break;
          case "openStickerPickerToPackId":
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
          case "getDurationStats":
          break;
          case "QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL":
          break;
          case "AuditLogActions":
          break;
          case "DiscordSupergraphicLogo":
          break;
          case "Super":
          break;
          case "graph":
          break;
          case "graphic":
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
          case "AUTO_MODERATION_EXEMPT_CHANNELS":
          break;
          case "CHANNELS_DEFAULT":
          break;
          case "DEFAULT_APP_ENTRY_KEY":
          break;
          case "APP_ENTRY_KEYS":
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
            str = str5.getConstants();
            if (!str.ViewManagerNames) {
              if (!str.LazyViewManagersEnabled) {
                bubblingEventTypes = viewManagerConfig.bubblingEventTypes;
                prop = str.genericBubblingEventTypes;
                tmp56 = bubblingEventTypes;
                if (prop) {
                  tmp56 = prop;
                  if (bubblingEventTypes) {
                    let tmp57 = prop;
                    let num = 0;
                    tmp56 = bubblingEventTypes;
                    keys3 = Object.keys();
                  }
                }
              }
            }
            let str2Result = str2(70);
            let obj13 = str2Result(str2(68).default.getDefaultEventTypes)();
            if (obj13) {
              if (viewManagerConfig) {
                let tmp85 = obj13;
                let num3 = 0;
                let keys4 = Object.keys();
                if (keys4 !== undefined) {
                  let tmp87 = keys4[tmp2];
                  while (tmp87 !== undefined) {
                    tmp = tmp87;
                    if (!obj13.hasOwnProperty(tmp87)) {
                      continue;
                    } else {
                      let obj14 = obj13[tmp87];
                      let tmp88 = obj14;
                      if (viewManagerConfig.hasOwnProperty(tmp87)) {
                        let obj15 = viewManagerConfig[tmp87];
                        let tmp89 = typeof obj14 === "object";
                        if (typeof obj14 === "object") {
                          tmp89 = typeof obj15 === "object";
                        }
                        tmp88 = obj14;
                        if (tmp89) {
                          let tmp90 = obj15;
                          if (obj14) {
                            tmp90 = obj14;
                            if (obj15) {
                              let tmp91 = obj14;
                              tmp90 = obj15;
                              let keys5 = Object.keys();
                              if (keys5 !== undefined) {
                                tmp90 = obj15;
                                let tmp93 = keys5[tmp];
                                while (tmp93 !== undefined) {
                                  tmp = tmp93;
                                  if (!obj14.hasOwnProperty(tmp93)) {
                                    continue;
                                  } else {
                                    let tmp94 = obj14[tmp93];
                                    let tmp95 = tmp94;
                                    if (obj15.hasOwnProperty(tmp93)) {
                                      let tmp96 = obj15[tmp93];
                                      let tmp97 = typeof tmp94 === "object";
                                      if (typeof tmp94 === "object") {
                                        tmp97 = typeof tmp96 === "object";
                                      }
                                      tmp95 = tmp94;
                                      if (tmp97) {
                                        let tmp98 = merge;
                                        tmp95 = merge(tmp96, tmp94);
                                      }
                                    }
                                    obj15[tmp93] = tmp95;
                                    continue;
                                  }
                                  continue;
                                }
                              }
                            }
                          }
                          tmp88 = tmp90;
                        }
                      }
                      viewManagerConfig[tmp87] = tmp88;
                      continue;
                    }
                    continue;
                  }
                }
              }
            }
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
          break;
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
          case "edges":
          break;
          case "edgesLimit":
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
        }
      }
      str2 = require;
      str3 = dependencyMap;
      prop.style = result.default;
      const _Object = Object;
      const obj3 = { uiViewClassName: null, validAttributes: null, bubblingEventTypes: null, directEventTypes: null };
      obj3[0] = bubblingEventTypes;
      obj3[1] = prop;
      obj3[2] = keys3;
      obj3[3] = tmp4;
      const merged = Object.assign(viewManagerConfig, obj3);
      str5 = measure.default;
    }
    const viewManagerConfig1 = measure.default.getViewManagerConfig(baseModuleName);
    obj1 = str2;
    let tmp11 = str2;
    let tmp12 = str;
    let tmp13 = str3;
    baseModuleName = null;
    if (viewManagerConfig1) {
      const obj4 = {};
      const merged1 = Object.assign(viewManagerConfig1.bubblingEventTypes);
      const merged2 = Object.assign(tmp10);
      const obj5 = {};
      const merged3 = Object.assign(viewManagerConfig1.directEventTypes);
      const merged4 = Object.assign(tmp9);
      const obj6 = {};
      const merged5 = Object.assign(viewManagerConfig1.NativeProps);
      obj1 = Object.assign(obj1);
      baseModuleName = viewManagerConfig1.baseModuleName;
      tmp11 = obj6;
      tmp12 = obj5;
      tmp13 = obj4;
    }
    str2 = tmp11;
    str = tmp12;
    str3 = tmp13;
    const _default2 = measure.default;
  }
};