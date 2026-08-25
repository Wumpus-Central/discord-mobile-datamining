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
import nullthrows from "nullthrows" /* 70 */;
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
      baseModuleName = "UIEdgeInsets";
      str2 = "Point";
      str = "CGPoint";
      str3 = "CATransform3D";
      for (const key10058 in tmp3) {
        let obj10 = key10058;
        let keys = tmp3[key10058];
        if (`CATransform3D` === keys) {
          let tmp37 = require;
          let tmp38 = dependencyMap;
          let obj2 = matricesDiffer;
          _default = obj2.default;
        } else {
          if (`CGPoint` !== keys) {
            if (`Point` !== keys) {
              if ("CGSize" === keys) {
                let tmp33 = require;
                let tmp34 = dependencyMap;
                obj2 = sizesDiffer;
                _default = obj2.default;
              } else if (`UIEdgeInsets` === keys) {
                let tmp31 = require;
                let tmp32 = dependencyMap;
                obj2 = insetsDiffer;
                _default = obj2.default;
              } else {
                _default = null;
              }
            }
          }
          let tmp35 = require;
          let tmp36 = dependencyMap;
          obj2 = pointsDiffer;
          _default = obj2.default;
        }
        let _default1 = null;
        switch (keys) {
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
            let obj = { diff: null, process: null };
            obj[0] = _default;
            obj[1] = _default1;
            prop[obj10] = obj;
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
          case "guildGameIds":
          break;
          case "PerformanceObserver":
          break;
          case "PerformanceObserverEntryList_public":
          break;
          case "publicUpdatesChannel":
          break;
          case "publicUpdatesChannelId":
          break;
          case "GameLibrarySettings":
          break;
          case "rar":
          break;
          case "handleExplicitMediaScanTimeoutForMessage":
          break;
          case "getAnalyticsEventsRecording":
          break;
          case "enforcedHeight":
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
          case "woman_genie":
          break;
          case "man_genie":
          break;
          case "genie":
          break;
          case "GIFT_CODE_RESOLVE":
          break;
          case "GIFT_CODE_RESOLVED":
          break;
          case "RESOLVED":
          break;
          case "RESOLVED_REASON":
          break;
          case "SOLVED":
          break;
          case "isDefibrilating":
          break;
          case "getIntegrationStatus":
          break;
          case "useBuildAction":
          break;
          case "totalPages":
          break;
          case "getGuildSentinels":
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
            tmp3 = str2;
            tmp4 = str;
            keys3 = str3;
          break;
          case "pon":
          break;
          case "one":
          break;
          case "ne":
            obj2 = require;
            let tmp52 = dependencyMap;
            let tmp53 = processColor;
            _default1 = tmp53.default;
            if (null == _default) {
              obj2 = null == _default1;
              if (!obj2) {
                obj1 = { process: null };
                obj1[0] = _default1;
                obj2 = obj1;
              }
              obj = obj2;
            } else if (null == _default1) {
              obj2 = { diff: null };
              obj2[0] = _default;
              obj = obj2;
            }
          break;
          case "en":
          break;
          case "loadHydratedAttempt":
            obj2 = require;
            tmp52 = dependencyMap;
            tmp53 = processColor;
            _default1 = tmp53.default;
            if (null == _default) {
              obj2 = null == _default1;
              if (!obj2) {
                obj1 = { process: null };
                obj1[0] = _default1;
                obj2 = obj1;
              }
              obj = obj2;
            } else if (null == _default1) {
              obj2 = { diff: null };
              obj2[0] = _default;
              obj = obj2;
            }
          break;
          case "voiceChannelsSectionNumber":
            let tmp70 = typeof tmp69 === "object";
            let tmp68 = tmp67;
            if (tmp70) {
              let tmp71 = merge;
              tmp68 = merge(tmp69, tmp67);
            }
            obj10[_default1] = tmp68;
            let tmp63 = obj10;
            let tmp66 = keys[tmp];
            while (tmp66 !== undefined) {
              _default1 = tmp66;
              if (!obj2.hasOwnProperty(tmp66)) {
                continue;
              } else {
                let tmp67 = obj2[_default1];
                tmp68 = tmp67;
                if (obj10.hasOwnProperty(_default1)) {
                  let tmp69 = obj10[_default1];
                  tmp70 = typeof tmp67 === "object";
                }
              }
              continue;
            }
            let tmp61 = tmp63;
            bubblingEventTypes[key10058] = tmp61;
            let tmp58 = bubblingEventTypes;
            let tmp60 = keys3[tmp2];
            while (tmp60 !== undefined) {
              let key10058 = tmp60;
              if (!prop.hasOwnProperty(tmp60)) {
                continue;
              } else {
                obj2 = prop[key10058];
                tmp61 = obj2;
                if (bubblingEventTypes.hasOwnProperty(key10058)) {
                  obj10 = bubblingEventTypes[key10058];
                  let tmp62 = typeof obj2 === "object";
                  if (typeof obj2 === "object") {
                    tmp62 = typeof obj10 === "object";
                  }
                  tmp61 = obj2;
                  if (tmp62) {
                    tmp63 = obj10;
                    if (obj2) {
                      tmp63 = obj2;
                      if (obj10) {
                        let tmp64 = obj2;
                        tmp63 = obj10;
                        keys = Object.keys();
                      }
                    }
                  }
                }
              }
              continue;
            }
            viewManagerConfig.bubblingEventTypes = tmp58;
            let directEventTypes2 = viewManagerConfig.directEventTypes;
            let genericDirectEventTypes = str.genericDirectEventTypes;
            let tmp72 = directEventTypes2;
            if (genericDirectEventTypes) {
              tmp72 = genericDirectEventTypes;
              if (directEventTypes2) {
                let tmp73 = genericDirectEventTypes;
                let num2 = 0;
                tmp72 = directEventTypes2;
                let keys1 = Object.keys();
                if (keys1 !== undefined) {
                  tmp72 = directEventTypes2;
                  let tmp75 = keys1[tmp2];
                  while (tmp75 !== undefined) {
                    let tmp = tmp75;
                    if (!genericDirectEventTypes.hasOwnProperty(tmp75)) {
                      continue;
                    } else {
                      let obj11 = genericDirectEventTypes[tmp75];
                      let tmp76 = obj11;
                      if (directEventTypes2.hasOwnProperty(tmp75)) {
                        let obj12 = directEventTypes2[tmp75];
                        let tmp77 = typeof obj11 === "object";
                        if (typeof obj11 === "object") {
                          tmp77 = typeof obj12 === "object";
                        }
                        tmp76 = obj11;
                        if (tmp77) {
                          let tmp78 = obj12;
                          if (obj11) {
                            tmp78 = obj11;
                            if (obj12) {
                              let tmp79 = obj11;
                              tmp78 = obj12;
                              let keys2 = Object.keys();
                              if (keys2 !== undefined) {
                                tmp78 = obj12;
                                let tmp81 = keys2[tmp];
                                while (tmp81 !== undefined) {
                                  tmp = tmp81;
                                  if (!obj11.hasOwnProperty(tmp81)) {
                                    continue;
                                  } else {
                                    let tmp82 = obj11[tmp81];
                                    let tmp83 = tmp82;
                                    if (obj12.hasOwnProperty(tmp81)) {
                                      let tmp84 = obj12[tmp81];
                                      let tmp85 = typeof tmp82 === "object";
                                      if (typeof tmp82 === "object") {
                                        tmp85 = typeof tmp84 === "object";
                                      }
                                      tmp83 = tmp82;
                                      if (tmp85) {
                                        let tmp86 = merge;
                                        tmp83 = merge(tmp84, tmp82);
                                      }
                                    }
                                    obj12[tmp81] = tmp83;
                                    continue;
                                  }
                                  continue;
                                }
                              }
                            }
                          }
                          tmp76 = tmp78;
                        }
                      }
                      directEventTypes2[tmp75] = tmp76;
                      continue;
                    }
                    continue;
                  }
                }
              }
            }
            viewManagerConfig.directEventTypes = tmp72;
            return viewManagerConfig;
          case "POMELO_ATTEMPT":
            obj2 = require;
            tmp52 = dependencyMap;
            tmp53 = processColor;
            _default1 = tmp53.default;
            if (null == _default) {
              obj2 = null == _default1;
              if (!obj2) {
                obj1 = { process: null };
                obj1[0] = _default1;
                obj2 = obj1;
              }
              obj = obj2;
            } else if (null == _default1) {
              obj2 = { diff: null };
              obj2[0] = _default;
              obj = obj2;
            }
          break;
          case "POMELO_ATTEMPT_UNAUTHED":
          break;
          case "QUESTS_PREVIEW_COMPLETE":
            obj2 = require;
            let tmp50 = dependencyMap;
            let tmp51 = processColorElement;
            _default1 = tmp51.default;
          break;
          case "ANDROID_NOTIFICATION_LIGHTS":
          break;
          case "L":
            obj2 = require;
            tmp50 = dependencyMap;
            tmp51 = processColorElement;
            _default1 = tmp51.default;
          break;
          case "LI":
          break;
          case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
            obj2 = require;
            tmp50 = dependencyMap;
            tmp51 = processColorElement;
            _default1 = tmp51.default;
          break;
          case "REyUZ/":
          break;
          case "$ZodCheckMaxLength":
            obj2 = require;
            let tmp48 = dependencyMap;
            let tmp49 = resolveAssetSource;
            _default1 = tmp49.default;
          break;
          case "kMaxLength":
          break;
          case "eng":
            obj2 = require;
            tmp48 = dependencyMap;
            tmp49 = resolveAssetSource;
            _default1 = tmp49.default;
          break;
          case "ng":
          break;
          case "el":
            obj2 = require;
            tmp48 = dependencyMap;
            tmp49 = resolveAssetSource;
            _default1 = tmp49.default;
          break;
          case "li":
          break;
          case "lim":
            obj2 = require;
            tmp48 = dependencyMap;
            tmp49 = resolveAssetSource;
            _default1 = tmp49.default;
          break;
          case "limited":
          break;
          case "limitedBadgeRow":
            obj2 = module;
            let tmp47 = dependencyMap;
            _default1 = module(55);
          break;
          case "mi":
          break;
          case "mit":
            obj2 = module;
            tmp47 = dependencyMap;
            _default1 = module(55);
          break;
          case "withTestId":
          break;
          case "PhoneCallIcon":
            obj2 = require;
            let tmp45 = dependencyMap;
            let tmp46 = _getFilterAmount;
            _default1 = tmp46.default;
          break;
          case "$ZodMap":
          break;
          case "ZodMap":
            obj2 = require;
            tmp45 = dependencyMap;
            tmp46 = _getFilterAmount;
            _default1 = tmp46.default;
          break;
          case "M":
          break;
          case "ap":
            obj2 = require;
            let tmp44 = dependencyMap;
            _default1 = processColorStops.default;
          break;
          case "ToIntlMathematicalValue":
          break;
          case "th":
            obj2 = require;
            let tmp43 = dependencyMap;
            _default1 = getPositionFromCSSValue.default;
          break;
          case "ValueSetter":
          break;
          case "$ZodCheckNumberFormat":
            obj2 = require;
            let tmp42 = dependencyMap;
            _default1 = isBackgroundRepeatKeyword.default;
          break;
          case "N":
          break;
          case "NumberFormat":
            obj2 = require;
            let tmp40 = dependencyMap;
            let tmp41 = getValidLengthPercentageSizeOrNull;
            _default1 = tmp41.default;
          break;
          case "um":
          break;
          case "b":
          break;
          case "be":
          break;
          case "buyItemByType":
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
          case "loadModule":
          break;
          case "PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID":
          break;
          case "TOGGLE_INBOX":
          break;
          case "TAB_LABEL_TEXT_DEFAULT":
          break;
          case "DEFAULT_STATE":
          break;
          case "PX_80":
          break;
          case "_":
          break;
          case "sticker_pack_id":
          break;
          case "pack_id":
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
          case "PRESS_CLEAR_HISTORY_DISCLAIMER":
          break;
          case "RPC_PRIVATE_SCOPE":
          break;
          case "OPEN_TIER_2_PAYMENT_MODAL":
          break;
          case "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER":
          break;
          case "ROLE_TEMPLATE_SELECTED":
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
          case "heavy_plus_sign":
          break;
          case "plus":
          break;
          case "always":
          break;
          case "alwaysBounceHorizontal":
          break;
          case "HorizontalScrollingDirection":
          break;
          case "onAgree":
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
          case "QUEST_BAR_RENDER_DELAY":
          break;
          case "LAYER_POP_START":
          break;
          case "RTC_CONNECTION_FLAGS":
          break;
          case "isSocialLayerStorefrontArticleEmbed":
          break;
          case "person_swimming_tone2":
          break;
          case "prepareRelations":
          break;
          case "purchasingProductId":
          break;
          case "selfStreamParticipantsHidden":
          break;
          case "entropy":
          break;
          case "entropyAggregated":
          break;
          case "gatedChannelId":
          break;
          case "ActionSheetHeaderPressableText":
          break;
          case "Pressable":
          break;
          case "ex":
          break;
          case "ext":
          break;
          case "isOffsetProjectionEnabled":
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
          case "genericMediaFlag":
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
          case "assetContainer":
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
          case "claimableRewards":
          break;
          case "showWishlistNUXActionSheet":
          break;
          case "useFlatListBenchmark":
          break;
          case "FlatListBenchmarkParams":
          break;
          case "Bench":
          break;
          case "BenchmarkParams":
          break;
          case "isChannelMuted":
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
          case "PREMIUM_TIER_0_HEADER_GRADIENT_1":
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
          case "MOBILE_LEGENDS_BANG_BANG":
          break;
          case "BANGERS":
          break;
          case "RS_BLOCK_TABLE":
          break;
          case "TABLE_ROW_CONTENT_HEIGHT":
          break;
          case "QUEST_BAR_V2":
          break;
          case "Role":
          break;
          case "RoleFlags":
          break;
          case "scrollToQuestId":
          break;
          case "UserLinkStatus":
          break;
          case "useContext":
          break;
          case "useContextIndexState":
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
          case "getAdData":
          break;
          case "regional_indicator_f":
          break;
          case "r_fix_ending$esjava$0":
          break;
          case "PREMIUM_PROFILE_TRY_IT_OUT":
          break;
          case "PROFILE_TRY_IT_OUT":
          break;
          case "findMessageRowIndex":
          break;
          case "experimental_userInterfaceStyle":
          break;
          case "userInterfaceStyle":
          break;
          case "MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND":
          break;
          case "BACKGROUND_SYNC_COMPLETED":
          break;
          case "GuildEntityDao":
          break;
          case "EntityDao":
          break;
          case "Dao":
          break;
          case "FIXED_KEYFRAME_INTERVAL":
          break;
          case "canSort":
          break;
          case "shouldMaintainScrollAtEnd":
          break;
          case "requestCollections":
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
          case "showGuildEventModeratorActionSheet":
          break;
          case "GuildEventModeratorAction":
          break;
          case "_applyCombination":
          break;
          case "ly":
          break;
          case "kiss_medium_dark_skin_tone":
          break;
          case "_fetchGameCommunities":
          break;
          case "moduleMetadataIntegration":
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
          case "person_walking_facing_right_tone4":
          break;
          case "_recomputeProgressTotal":
          break;
          case "TotalSoundboardSoundCountsByTier":
          break;
          case "TieredTenureBadge":
          break;
          case "TieredTenureBadgeStatus":
          break;
          case "specifications":
          break;
          case "setVoiceChannelCountCap":
          break;
          case "tint":
          break;
          case "tintColor":
          break;
          case "tintColorOverride":
          break;
          case "buttonSize":
          break;
          case "onSizeChanged":
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
          case "pressableStyles":
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
          case "centerContainer":
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
          case "handlerName":
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
          case "wasAuthenticated":
          break;
          case "$ZodCheckMinSize":
          break;
          case "alembic":
          break;
          case "addUserId":
          break;
          case "disableGuildSelect":
          break;
          case "GuildSelectDefaultIcon":
          break;
          case "concatSettings":
          break;
          case "subtarget":
          break;
          case "targetAllocation":
          break;
          case "locationPage":
          break;
          case "onPageChange":
          break;
          case "onPageChangeStart":
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
          case "gaz":
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
          case "AccountAgeTier10LargeBadge":
          break;
          case "cou":
          break;
          case "Badge":
          break;
          case "handleTapImage":
          break;
          case "getAnalyticsId":
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
          case "containerInner":
          break;
          case "searchBar":
          break;
          case "searchBarContainer":
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
          case "PlayStationLinkModalScenes":
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
          case "shouldTriggerResponderTransferOnScrollAndroid":
          break;
          case "removeFavoriteSound":
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
          case "parentMessage":
          break;
          case "parentMessageId":
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
          case "interestedIcon":
          break;
          case "contentTopSpacing":
          break;
          case "g_v_I":
          break;
          case "_INTERNAL_captureLog":
          break;
          case "capture":
          break;
          case "LogOff":
          break;
          case "userCode":
          break;
          case "userCodeData":
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
          case "sanitizeUnicodeConfusables":
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
          case "shouldListenToVisibleIndices":
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
          case "SocialMediaSpotIllustration":
          break;
          case "setAsyncVideoInputDeviceInit":
          break;
          case "EntitlementTenantFulfillmentStatus":
          break;
          case "ill":
          break;
          case "__findAnimatedPropsNodes":
          break;
          case "destructiveIcon":
          break;
          case "containerLandscape":
          break;
          case "apexExperiments":
          break;
          case "showGenericProfileUpdateFailureToast":
          break;
          case "APP_DIRECTORY_STOREFRONT":
          break;
          case "APP_DIRECTORY_STOREFRONT_SKU":
          break;
          case "FRONT":
          break;
          case "previousViewTag":
          break;
          case "UZS":
          break;
          case "AUDIO_SET_MODE":
          break;
          case "MODERATE":
          break;
          case "MODERATE_MEMBERS":
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
            obj2 = require;
            tmp40 = dependencyMap;
            tmp41 = getValidLengthPercentageSizeOrNull;
            _default1 = tmp41.default;
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
          case "touchableHandleResponderTerminationRequest":
          break;
          case "onRequestSend":
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
          case "connected_account_type":
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
          case "mostRecentLurkedGuildId":
          break;
          case "black_heart":
          break;
          case "heart_decoration":
          break;
          case "decorationAsset":
          break;
          case "setAllowPhone":
          break;
          case "_guildId":
          break;
          case "gu":
          break;
          case "current_guild_id":
          break;
          case "getContentProperties":
          break;
          case "favoriteGame":
          break;
          case "GameConsoleCommandResultErrorCodes":
          break;
          case "desktop_computer":
          break;
          case "computer":
          break;
          case "computer_disk":
          break;
          case "isAnimated":
          break;
          case "isAnimatedAndroidKeyboard":
          break;
          case "KeyboardThemes":
          break;
          case "Themes":
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
          case "resolutionHeight":
          break;
          case "getRestrictedScheduleNotificationTitle":
          break;
          case "avatar_hash":
          break;
          case "_hash":
          break;
          case "hashKey":
          break;
          case "bhd":
          break;
          case "IN_APP_MEMBER_VERIFICATION_MODAL_KEY":
          break;
          case "HOCKEY":
          break;
          case "hlsjs":
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
          case "E2EE_STREAM_VERIFICATION_CODE_COPIED":
          break;
          case "MFA_STEP":
          break;
          case "STEP_NUMBER_TEXT_FONT_BIG":
          break;
          case "BIGINT":
          break;
          case "BIGINT_FORMAT_RANGES":
          break;
          case "getFeedbackDarkTheme":
          break;
          case "DarkTheme":
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
          case "withMessage":
          break;
          case "getBountyVideoProgress":
          break;
          case "horse_racing_tone2":
          break;
          case "badgeClassic":
          break;
          case "sick":
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
          case "PlaneIllocon":
          break;
          case "couple_with_heart_woman_man_tone1":
          break;
          case "couple_with_heart_woman_man_tone1_tone2":
          break;
          case "readUint":
          break;
          case "int":
          break;
          case "intlMessage":
          break;
          case "tl":
          break;
          case "getAppDir":
          break;
          case "getCPUCoreCount":
          break;
          case "trackMediaViewerDownloadButtonTapped":
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
          case "virtualOffset0Based":
          break;
          case "dnk":
          break;
          case "js":
          break;
          case "xs":
          break;
          case "GUILD_SPACE":
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
          case "setCurrentAnalyticsStep":
          break;
          case "PasskeysSpotIllustration":
          break;
          case "ke":
          break;
          case "toSearchListChannelItem":
          break;
          case "embedded_activity_location_kind":
          break;
          case "ki":
          break;
          case "kin":
          break;
          case "AccountAgeTier5SmallBadge":
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
          case "guild_versions":
          break;
          case "versions":
          break;
          case "Buf8":
          break;
          case "f8wNDl":
          break;
          case "DlcqlU":
          break;
          case "lcq":
          break;
          case "badgeCopy":
          break;
          case "appContext":
          break;
          case "textShadow":
          break;
          case "textShadowColor":
          break;
          case "arrow_left":
          break;
          case "leftBox":
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
          case "onRecoverableError":
          break;
          case "load":
          break;
          case "J":
          break;
          case "setCurrentGuild":
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
          case "shouldShowPopover":
          break;
          case "overflow":
          break;
          case "overflowBottom":
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
          case "xbd":
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
          case "woman_curly_haired_tone5":
          break;
          case "man_curly_haired_tone5":
          break;
          case "getVoiceSessionMessageContent":
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
          case "setTextInputValue":
          break;
          case "_opacityActive":
          break;
          case "opa":
          break;
          case "city":
          break;
          case "emitReactOnce":
          break;
          case "handledHereMention":
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
          case "renderTitle":
          break;
          case "renderTitleWrapper":
          break;
          case "person_gesturing_ok_tone3":
          break;
          case "onDrawerClose":
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
          case "woman_and_man_holding_hands_medium_skin_tone_medium_light_skin_tone":
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
          case "FrecencyUserSettings":
          break;
          case "FrecencyUserSettingsActionCreators":
          break;
          case "UserSettingsActionCreatorsByType":
          break;
          case "preferSystemEffects":
          break;
          case "getTraceContextFromScope":
          break;
          case "openGiftCodeRedeemModal":
          break;
          case "_pushCells":
          break;
          case "pus":
          break;
          case "maxUpscale":
          break;
        }
      }
      prop.style = result.default;
      const _Object = Object;
      const obj3 = { uiViewClassName: null, validAttributes: null, bubblingEventTypes: null, directEventTypes: null };
      obj3[0] = bubblingEventTypes;
      obj3[1] = prop;
      obj3[2] = keys3;
      obj3[3] = tmp4;
      const merged = Object.assign(viewManagerConfig, obj3);
      str = measure.default.getConstants();
      if (!str.ViewManagerNames) {
        if (!str.LazyViewManagersEnabled) {
          bubblingEventTypes = viewManagerConfig.bubblingEventTypes;
          prop = str.genericBubblingEventTypes;
          tmp58 = bubblingEventTypes;
          if (prop) {
            tmp58 = prop;
            if (bubblingEventTypes) {
              tmp58 = bubblingEventTypes;
              keys3 = Object.keys();
            }
          }
        }
      }
      const _default3 = measure.default;
      const obj13 = nullthrows(measure.default.getDefaultEventTypes)();
      if (obj13) {
        if (viewManagerConfig) {
          for (const key10172 in obj13) {
            tmp = key10172;
            if (!obj13.hasOwnProperty(key10172)) {
              continue;
            } else {
              let obj14 = obj13[key10172];
              let tmp89 = obj14;
              if (viewManagerConfig.hasOwnProperty(key10172)) {
                let obj15 = viewManagerConfig[key10172];
                let tmp90 = typeof obj14 === "object";
                if (typeof obj14 === "object") {
                  tmp90 = typeof obj15 === "object";
                }
                tmp89 = obj14;
                if (tmp90) {
                  let tmp91 = obj15;
                  if (obj14) {
                    tmp91 = obj14;
                    if (obj15) {
                      let tmp92 = obj14;
                      tmp91 = obj15;
                      let keys4 = Object.keys();
                      if (keys4 !== undefined) {
                        tmp91 = obj15;
                        let tmp94 = keys4[tmp];
                        while (tmp94 !== undefined) {
                          tmp = tmp94;
                          if (!obj14.hasOwnProperty(tmp94)) {
                            continue;
                          } else {
                            let tmp95 = obj14[tmp94];
                            let tmp96 = tmp95;
                            if (obj15.hasOwnProperty(tmp94)) {
                              let tmp97 = obj15[tmp94];
                              let tmp98 = typeof tmp95 === "object";
                              if (typeof tmp95 === "object") {
                                tmp98 = typeof tmp97 === "object";
                              }
                              tmp96 = tmp95;
                              if (tmp98) {
                                let tmp99 = merge;
                                tmp96 = merge(tmp97, tmp95);
                              }
                            }
                            obj15[tmp94] = tmp96;
                            continue;
                          }
                          continue;
                        }
                      }
                    }
                  }
                  tmp89 = tmp91;
                }
              }
              viewManagerConfig[key10172] = tmp89;
              continue;
            }
            continue;
          }
        }
      }
      const tmp54Result = nullthrows;
    }
    const viewManagerConfig1 = measure.default.getViewManagerConfig(baseModuleName);
    obj2 = str2;
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
      obj2 = Object.assign(obj2);
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