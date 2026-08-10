// _runtime/00067_merge.js
import { result } from "00026_result.js";
import { getValidLengthPercentageSizeOrNull } from "00057_getValidLengthPercentageSizeOrNull.js";
import { sizesDiffer } from "00064_sizesDiffer.js";
import { measure } from "00068_measure.js";
import { nullthrows } from "00070_nullthrows.js";
import { matricesDiffer } from "00077_matricesDiffer.js";
import { pointsDiffer } from "00078_pointsDiffer.js";
import { insetsDiffer } from "00079_insetsDiffer.js";
const require = arg1;
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
  let NativeProps;
  let baseModuleName;
  let bubblingEventTypes2;
  let directEventTypes;
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
      str2 = "Point";
      str = "CGPoint";
      str3 = "CATransform3D";
      for (const key10058 in tmp3) {
        let obj10 = key10058;
        let tmp86 = tmp3[key10058];
        if (`CATransform3D` === tmp86) {
          let tmp37 = require;
          let tmp38 = dependencyMap;
          let obj2 = matricesDiffer;
          _default = obj2.default;
        } else {
          if (`CGPoint` !== tmp86) {
            if (`Point` !== tmp86) {
              if ("CGSize" === tmp86) {
                let tmp33 = require;
                let tmp34 = dependencyMap;
                obj2 = sizesDiffer;
                _default = obj2.default;
              } else if (`UIEdgeInsets` === tmp86) {
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
        switch (tmp86) {
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
            obj2 = require;
            let tmp40 = dependencyMap;
            _default1 = getValidLengthPercentageSizeOrNull.default;
            while (true) {
              if (null == _default) {
                obj2 = null == _default1;
                if (!obj2) {
                  let obj = { process: null };
                  obj[0] = _default1;
                  obj2 = obj;
                }
                let obj1 = obj2;
                prop[obj10] = obj1;
                continue label0;
              } else {
                obj1 = { diff: null, process: null };
                obj1[0] = _default;
                obj1[1] = _default1;
              }
              obj2 = { diff: null };
              obj2[0] = _default;
              obj1 = obj2;
            }
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
            if (tmp48) {
              let tmp49 = obj10;
              if (obj2) {
                tmp49 = obj2;
                if (obj10) {
                  let tmp50 = obj2;
                  tmp49 = obj10;
                  let keys = Object.keys();
                  if (keys !== undefined) {
                    tmp49 = obj10;
                    let tmp52 = keys[tmp];
                    while (tmp52 !== undefined) {
                      let tmp87 = tmp52;
                      if (!obj2.hasOwnProperty(tmp52)) {
                        continue;
                      } else {
                        let tmp53 = obj2[tmp52];
                        let tmp54 = tmp53;
                        if (obj10.hasOwnProperty(tmp52)) {
                          let tmp55 = obj10[tmp52];
                          let tmp56 = typeof tmp53 === "object";
                          if (typeof tmp53 === "object") {
                            tmp56 = typeof tmp55 === "object";
                          }
                          tmp54 = tmp53;
                          if (tmp56) {
                            let tmp57 = merge;
                            tmp54 = merge(tmp55, tmp53);
                          }
                        }
                        obj10[tmp52] = tmp54;
                        continue;
                      }
                      continue;
                    }
                  }
                }
              }
              str4 = tmp49;
            }
            bubblingEventTypes[key10058] = str4;
            let tmp45 = bubblingEventTypes;
            let tmp47 = keys3[tmp2];
            while (tmp47 !== undefined) {
              let key10058 = tmp47;
              if (!prop.hasOwnProperty(tmp47)) {
                continue;
              } else {
                obj2 = prop[key10058];
                str4 = obj2;
                if (bubblingEventTypes.hasOwnProperty(key10058)) {
                  let tmp48 = typeof obj2 === "object";
                  if (typeof obj2 === "object") {
                    tmp48 = typeof bubblingEventTypes[key10058] === "object";
                  }
                  str4 = obj2;
                }
              }
              continue;
            }
            viewManagerConfig.bubblingEventTypes = tmp45;
            let directEventTypes2 = viewManagerConfig.directEventTypes;
            let genericDirectEventTypes = str.genericDirectEventTypes;
            let tmp58 = directEventTypes2;
            if (genericDirectEventTypes) {
              tmp58 = genericDirectEventTypes;
              if (directEventTypes2) {
                let tmp59 = genericDirectEventTypes;
                let num2 = 0;
                tmp58 = directEventTypes2;
                let keys1 = Object.keys();
                if (keys1 !== undefined) {
                  tmp58 = directEventTypes2;
                  let tmp61 = keys1[tmp2];
                  while (tmp61 !== undefined) {
                    let tmp88 = tmp61;
                    if (!genericDirectEventTypes.hasOwnProperty(tmp61)) {
                      continue;
                    } else {
                      let obj11 = genericDirectEventTypes[tmp61];
                      let tmp62 = obj11;
                      if (directEventTypes2.hasOwnProperty(tmp61)) {
                        let obj12 = directEventTypes2[tmp61];
                        let tmp63 = typeof obj11 === "object";
                        if (typeof obj11 === "object") {
                          tmp63 = typeof obj12 === "object";
                        }
                        tmp62 = obj11;
                        if (tmp63) {
                          let tmp64 = obj12;
                          if (obj11) {
                            tmp64 = obj11;
                            if (obj12) {
                              let tmp65 = obj11;
                              tmp64 = obj12;
                              let keys2 = Object.keys();
                              if (keys2 !== undefined) {
                                tmp64 = obj12;
                                let tmp67 = keys2[tmp];
                                while (tmp67 !== undefined) {
                                  let tmp89 = tmp67;
                                  if (!obj11.hasOwnProperty(tmp67)) {
                                    continue;
                                  } else {
                                    let tmp68 = obj11[tmp67];
                                    let tmp69 = tmp68;
                                    if (obj12.hasOwnProperty(tmp67)) {
                                      let tmp70 = obj12[tmp67];
                                      let tmp71 = typeof tmp68 === "object";
                                      if (typeof tmp68 === "object") {
                                        tmp71 = typeof tmp70 === "object";
                                      }
                                      tmp69 = tmp68;
                                      if (tmp71) {
                                        let tmp72 = merge;
                                        tmp69 = merge(tmp70, tmp68);
                                      }
                                    }
                                    obj12[tmp67] = tmp69;
                                    continue;
                                  }
                                  continue;
                                }
                              }
                            }
                          }
                          tmp62 = tmp64;
                        }
                      }
                      directEventTypes2[tmp61] = tmp62;
                      continue;
                    }
                    continue;
                  }
                }
              }
            }
            viewManagerConfig.directEventTypes = tmp58;
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
          case "giftingPrompt":
          break;
          case "firstChild":
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
            tmp3 = str2;
            tmp4 = str;
            keys3 = str3;
          break;
          case "mi":
          break;
          case "mit":
          break;
          case "getAppealEligibility":
          break;
          case "AppealEligibility":
          break;
          case "pea":
          break;
          case "SOCIAL_LAYER_STOREFRONT_APP":
          break;
          case "APPEAL_INGESTION_SPAM":
          break;
          case "SPAM_LINK":
          break;
          case "encoderQualityStats":
          break;
          case "PACKAGE_RPG_MMO":
          break;
          case "MMORPG":
          break;
          case "PGvZqX":
          break;
          case "qXtNtS":
          break;
          case "termsRow":
          break;
          case "termsRowContent":
          break;
          case "$ZodMap":
          break;
          case "ZodMap":
          break;
          case "M":
          break;
          case "ap":
          break;
          case "floralwhite":
          break;
          case "white_check_mark":
          break;
          case "markVersionedDismissibleContentAsDismissed":
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
          case "selectHomeResourceChannel":
          break;
          case "sourceChannelId":
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
          case "CheckpointPersonas":
          break;
          case "nas":
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
          case "fuseboxScreenshotCaptureEnabled":
          break;
          case "ActionSheetHeaderPressableText":
          break;
          case "Pressable":
          break;
          case "ex":
          break;
          case "ext":
          break;
          case "isLocalVideoAutoDisabled":
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
          case "generateNewNodeTag":
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
          case "mostRecentEventCount":
          break;
          case "PREMIUM_GIFT_MONTH_TIER_0":
          break;
          case "TIER_0_LEADING":
          break;
          case "GUILD_GEO_RESTRICTED":
          break;
          case "RESTRICTED_CONTENT_INSET":
          break;
          case "SET_VOICE_SETTINGS":
          break;
          case "SET_VOICE_SETTINGS_2":
          break;
          case "Role":
          break;
          case "RoleFlags":
          break;
          case "scrollToNewMessages":
          break;
          case "isCommandType":
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
          case "shouldCollectMetrics":
          break;
          case "PLATFORM_REDDIT":
          break;
          case "REDDIT":
          break;
          case "REDDIT_GOLD":
          break;
          case "GOLDFISH_PINK":
          break;
          case "PINK_34":
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
          case "clearAnalyticsEventsRecording":
          break;
          case "GuildEntityDao":
          break;
          case "EntityDao":
          break;
          case "Dao":
          break;
          case "useSecureFramesDeeplinkExperiment":
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
          case "showGiftingMarketing":
          break;
          case "woman_kneeling_facing_right_tone2":
          break;
          case "man_kneeling_facing_right_tone2":
          break;
          case "_applyCombination":
          break;
          case "ly":
          break;
          case "USER_PROFILE_WIDGETS":
          break;
          case "USER_PROFILE_WIDGETS_BOARD_MOBILE_EDIT_NOTICE":
          break;
          case "markAndLog":
          break;
          case "BOOST_TO_UNLOCK":
          break;
          case "BOOST_TO_UNLOCK_COACHMARK":
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
          case "person_walking_facing_right_tone2":
          break;
          case "animatedTension":
          break;
          case "onFormSubmit":
          break;
          case "onFormSubmitted":
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
          case "compose":
          break;
          case "composed":
          break;
          case "composedPath":
          break;
          case "rules_version":
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
          case "pendingAvatarSrc":
          break;
          case "capturedSpanIsolationScope":
          break;
          case "openCommandAttachmentPreview":
          break;
          case "AppLauncherBottomSheetExpandReason":
          break;
          case "her":
          break;
          case "BottomSheet":
          break;
          case "pan":
          break;
          case "chatHeaderTitleContainer":
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
          case "enableClips":
          break;
          case "enableClipsV3":
          break;
          case "enableClipsV3ML":
          break;
          case "MLS_INIT":
          break;
          case "INITIAL_SAFE_AREA_INSETS":
          break;
          case "MEDIA_KEYBOARD_BAR_BORDER_WIDTH":
          break;
          case "HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN":
          break;
          case "INCOMING_MENTION_MESSAGE":
          break;
          case "MESSAGE_EDIT_FAILED_AUTOMOD":
          break;
          case "AUTOMOD_ERROR_CODES":
          break;
          case "DESELECT_PLATFORM":
          break;
          case "PLATFORM_BUNGIE":
          break;
          case "BUNGIE":
          break;
          case "IEpCBQ":
          break;
          case "BQ":
          break;
          case "adRequestId":
          break;
          case "disableGuildSelect":
          break;
          case "GuildSelectDefaultIcon":
          break;
          case "concatSettings":
          break;
          case "subscriptionStatus":
          break;
          case "useCanUseRoleSubscriptionIAP":
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
          case "tex":
          break;
          case "withConsistentHeight":
          break;
          case "getRewards":
          break;
          case "getRewardsForSkuId":
          break;
          case "AccountAgeTier10LargeBadge":
          break;
          case "cou":
          break;
          case "Badge":
          break;
          case "statusContainer":
          break;
          case "getAdDecisionByPlacementAndAdCreativeId":
          break;
          case "cr":
          break;
          case "les":
          break;
          case "canReact":
          break;
          case "canReactToMessage":
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
          case "containerFloatingGradient":
          break;
          case "hand_with_index_and_middle_fingers_crossed_tone5":
          break;
          case "fingers_crossed_tone5":
          break;
          case "rowFormDivider":
          break;
          case "FormDivider":
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
          case "MX":
          break;
          case "MXN":
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
          case "canSendMail":
          break;
          case "MailReply":
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
          case "attrs":
          break;
          case "baby_bottle":
          break;
          case "bottle_with_popping_cork":
          break;
          case "startTrackingWebVitals":
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
          case "origin_application_id":
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
          case "caw":
          break;
          case "BOOST_PLAN_ROW_SELECTED":
          break;
          case "DISCOVERY_GAME":
          break;
          case "DISCOVERY_GAME_RESULTS":
          break;
          case "SPACE_SM":
          break;
          case "SMALL_BUTTON_ICON_SIZE":
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
          case "couplekiss":
          break;
          case "couplekiss_mm":
          break;
          case "lek":
          break;
          case "kiss":
          break;
          case "kiss_mm":
          break;
          case "responseTimestamp":
          break;
          case "parseOptionValuesForSend":
          break;
          case "getChannelA11yHint":
          break;
          case "Channel":
          break;
          case "interpolators":
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
          case "getConnectedActivityLocation":
          break;
          case "onTapRoleIcon":
          break;
          case "contentWrapper":
          break;
          case "person_bowing_tone5":
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
          case "filterAttribute":
          break;
          case "avatar_hash":
          break;
          case "_hash":
          break;
          case "hashKey":
          break;
          case "ANDROID_NAVIGATION_BAR_BACKGROUND":
          break;
          case "NAVIGATION":
          break;
          case "BACKGROUND_ANIMATION_DURATION":
          break;
          case "ANIMATION_DURATION":
          break;
          case "DURATION_1_DAY":
          break;
          case "SEND_REACT_CUSTOM_STATUS":
          break;
          case "STATUS_PUSH_DISABLED":
          break;
          case "bhd":
          break;
          case "IN_APP_GUILD_TEMPLATES_MODAL_KEY":
          break;
          case "GUILD_TEMPLATE":
          break;
          case "GUILD_TEMPLATES":
          break;
          case "currentUserHasVerifiedEmail":
          break;
          case "currentUserHasVerifiedEmailOrPhone":
          break;
          case "honey_pot":
          break;
          case "pot_of_food":
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
          case "RESPONDER_RELEASE":
          break;
          case "SEARCH_V2_SUGGESTED_CLICKED":
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
          case "getAppDir":
          break;
          case "getByteOrder":
          break;
          case "revealMessage":
          break;
          case "getAutomodReason":
          break;
          case "onTapNavBar":
          break;
          case "VIDEO_PLAYER_TRANSCRIPT":
          break;
          case "TRANSCRIPT":
          break;
          case "TRANSCRIPT_DISABLE":
          break;
          case "APP_COLLECTIONS":
          break;
          case "CACHE_STORE_CHANNELS_LAZY_KEY":
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
          case "GET_IMAGE":
          break;
          case "IMAGE_EDITOR":
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
          case "woman_judge_tone2":
          break;
          case "man_judge_tone2":
          break;
          case "judge_tone2":
          break;
          case "removingAt":
          break;
          case "dMJ3Y6":
          break;
          case "jump":
          break;
          case "jumpFlash":
          break;
          case "fileUploadLimitRoadblockDescription":
          break;
          case "onTapCancelUploadItem":
          break;
          case "embedded_activity_location_kind":
          break;
          case "ki":
          break;
          case "kin":
          break;
          case "snapPoint":
          break;
          case "snapPoints":
          break;
          case "AvatarLokyExample":
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
          case "GUILD_BOOSTING_PLAN_SELECT":
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
          case "_connection":
          break;
          case "_connectionEntrypointUrl":
          break;
          case "connection":
          break;
          case "connectionEntrypointUrl":
          break;
          case "connectionEntrypointUrlOverride":
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
          case "getUserParticipantCount":
          break;
          case "track_next":
          break;
          case "_nextChannelId":
          break;
          case "did_force_clear_guild_hashes":
          break;
          case "hashes":
          break;
          case "kiss_woman_man_medium_light_skin_tone_medium_dark_skin_tone":
          break;
          case "smsNumberContainer":
          break;
          case "smsNumberContainerSuccess":
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
          case "flag_vi":
          break;
          case "_virtualizedListPairs":
          break;
          case "shouldUseFabricChatInput":
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
          case "emojiHook":
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
          case "setUTCMinutes":
          break;
          case "PX_26":
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
          case "ReactionNotificationType":
          break;
          case "MouseUp":
          break;
          case "useUpdateGestureConfig":
          break;
          case "getMapEntries":
          break;
          case "getMapEntriesSyncUnsafe":
          break;
          case "safeBottomPadding":
          break;
          case "getIsolationScope":
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
          case "getSelfEmbeddedActivityForChannel":
          break;
          case "openSocialLayerStorefrontProductDetailsModal":
          break;
          case "stashPendingFrameLaunch":
          break;
          case "LaunchApplication13":
          break;
          case "13/7kX":
          break;
          case "getNode":
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
          tmp45 = bubblingEventTypes;
          if (prop) {
            tmp45 = prop;
            if (bubblingEventTypes) {
              tmp45 = bubblingEventTypes;
              keys3 = Object.keys();
            }
          }
        }
      }
      const _default3 = measure.default;
      const obj13 = nullthrows(measure.default.getDefaultEventTypes)();
      if (obj13) {
        if (viewManagerConfig) {
          for (const key10171 in obj13) {
            let tmp90 = key10171;
            if (!obj13.hasOwnProperty(key10171)) {
              continue;
            } else {
              let obj14 = obj13[key10171];
              let tmp75 = obj14;
              if (viewManagerConfig.hasOwnProperty(key10171)) {
                let obj15 = viewManagerConfig[key10171];
                let tmp76 = typeof obj14 === "object";
                if (typeof obj14 === "object") {
                  tmp76 = typeof obj15 === "object";
                }
                tmp75 = obj14;
                if (tmp76) {
                  let tmp77 = obj15;
                  if (obj14) {
                    tmp77 = obj14;
                    if (obj15) {
                      let tmp78 = obj14;
                      tmp77 = obj15;
                      let keys4 = Object.keys();
                      if (keys4 !== undefined) {
                        tmp77 = obj15;
                        let tmp80 = keys4[tmp];
                        while (tmp80 !== undefined) {
                          let tmp91 = tmp80;
                          if (!obj14.hasOwnProperty(tmp80)) {
                            continue;
                          } else {
                            let tmp81 = obj14[tmp80];
                            let tmp82 = tmp81;
                            if (obj15.hasOwnProperty(tmp80)) {
                              let tmp83 = obj15[tmp80];
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
                            obj15[tmp80] = tmp82;
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
              viewManagerConfig[key10171] = tmp75;
              continue;
            }
            continue;
          }
        }
      }
      const tmp41Result = nullthrows;
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