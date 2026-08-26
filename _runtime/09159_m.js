// === Module 9159: m ===

// Module 9159 (m)
let self = this;
let fn = function m() {
  function y(arg0, arg1, arg2) {
    const StringResult = String(arg0);
    if (StringResult.length > arg1 >> 0) {
      const _String2 = String;
      let StringResult1 = String(StringResult);
    } else {
      const diff = tmp - StringResult.length;
      if (diff <= "0".length) {
        const slice = "0".slice;
        const _String = String;
        const substr = "0".slice(0, diff);
        StringResult1 = substr + String(StringResult);
      } else {
        const result = diff / "0".length;
        if (typeof h !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const items = [];
        if (isArray("0")) {
          let num4 = 0;
          if (0 < result) {
            do {
              let items1 = [];
              items[num4] = items1.concat("0");
              num4 = num4 + 1;
            } while (num4 < result);
          }
        } else {
          let num2 = 0;
          if (0 < result) {
            do {
              items[num2] = "0";
              num2 = num2 + 1;
            } while (num2 < result);
          }
        }
        const text = `0${arr2}`;
      }
    }
    return StringResult1;
  }
  function Q(arg0, arg1) {
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = closure_41;
    }
    let obj = {};
    if (typeof closure_46 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = { done: true, rules: tmp.tokens };
    if (obj.start(arg0)) {
      let _parseInt = obj.expect;
      _parseInt("every");
      let acceptNumberResult = obj.acceptNumber();
      if (acceptNumberResult) {
        _parseInt = parseInt;
        obj.interval = parseInt(acceptNumberResult[0], 10);
      }
      if (obj.isDone()) {
        let _Error = Error;
        error = new Error("Unexpected end");
        throw error;
      } else {
        fn = function i() {
          let str;
          if (acceptResult) {
            while (true) {
              let iter = obj;
              str = obj.symbol;
              let str2 = "last";
              if ("last" === str) {
                let nextSymbolResult = iter.nextSymbol();
                let flag = -1;
              } else {
                let str20 = "first";
                if ("first" === str) {
                  let nextSymbolResult1 = iter.nextSymbol();
                  flag = 1;
                } else {
                  let str21 = "second";
                  if ("second" === str) {
                    let nextSymbolResult2 = iter.nextSymbol();
                    let num = 2;
                    if (iter.accept("last")) {
                      num = -2;
                    }
                    flag = num;
                  } else {
                    let str22 = "third";
                    if ("third" === str) {
                      let nextSymbolResult3 = iter.nextSymbol();
                      num = 3;
                      if (iter.accept("last")) {
                        num = -3;
                      }
                      flag = num;
                    } else {
                      let str23 = "nth";
                      flag = false;
                      if ("nth" === str) {
                        let tmp46 = globalThis;
                        let _parseInt2 = parseInt;
                        let num3 = 10;
                        str = parseInt(iter.value[1], 10);
                        let num4 = -366;
                        if (str < -366) {
                          break;
                        } else {
                          num = 366;
                          if (str > 366) {
                            break;
                          } else {
                            let nextSymbolResult4 = iter.nextSymbol();
                            let byweekday = str;
                            if (iter.accept("last")) {
                              byweekday = -str;
                            }
                            flag = byweekday;
                          }
                        }
                      }
                    }
                  }
                }
              }
              let str4 = iter.symbol;
              let str5 = "monday";
              if ("monday" !== str4) {
                let str6 = "tuesday";
                if ("tuesday" !== str4) {
                  let str7 = "wednesday";
                  if ("wednesday" !== str4) {
                    let str8 = "thursday";
                    if ("thursday" !== str4) {
                      let str9 = "friday";
                      if ("friday" !== str4) {
                        let str10 = "saturday";
                        if ("saturday" !== str4) {
                          let str11 = "sunday";
                          let flag2 = false;
                        }
                        let flag3 = 12;
                        switch (iter.symbol) {
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
                            flag3 = 1;
                            if (flag) {
                              if (flag2) {
                                let nextSymbolResult5 = iter.nextSymbol();
                                let tmp43 = obj;
                                if (!obj.byweekday) {
                                  tmp43.byweekday = [];
                                }
                                byweekday = tmp43.byweekday;
                                let tmp44 = closure_1_72;
                                obj3 = closure_1_72[flag2];
                                let arr = byweekday.push(obj3.nth(flag));
                                obj = iter;
                              } else {
                                let tmp39 = obj;
                                if (!obj.bymonthday) {
                                  tmp39.bymonthday = [];
                                }
                                str = tmp39.bymonthday;
                              }
                              arr = str.push(flag);
                              let str18 = "day(s)";
                              let acceptResult1 = iter.accept("day(s)");
                              obj = iter;
                            } else if (flag2) {
                              let nextSymbolResult6 = iter.nextSymbol();
                              let tmp36 = obj;
                              if (!obj.byweekday) {
                                tmp36.byweekday = [];
                              }
                              byweekday = tmp36.byweekday;
                              let tmp37 = closure_1_72;
                              let arr1 = byweekday.push(closure_1_72[flag2]);
                              obj = iter;
                            } else {
                              let str13 = "weekday(s)";
                              if ("weekday(s)" === iter.symbol) {
                                let nextSymbolResult7 = iter.nextSymbol();
                                obj = iter;
                                if (!obj.byweekday) {
                                  let tmp30 = closure_1_72;
                                  let items = [closure_1_72.MO, , , , ];
                                  let tmp31 = closure_1_72;
                                  items[1] = closure_1_72.TU;
                                  let tmp32 = closure_1_72;
                                  items[2] = closure_1_72.WE;
                                  let tmp33 = closure_1_72;
                                  items[3] = closure_1_72.TH;
                                  let tmp34 = closure_1_72;
                                  items[4] = closure_1_72.FR;
                                  tmp29.byweekday = items;
                                  obj = iter;
                                }
                              } else {
                                let str24 = "week(s)";
                                if ("week(s)" === iter.symbol) {
                                  let nextSymbolResult8 = iter.nextSymbol();
                                  let acceptNumberResult = iter.acceptNumber();
                                  byweekday = globalThis;
                                  if (acceptNumberResult) {
                                    let tmp21 = obj;
                                    let _parseInt = parseInt;
                                    num = 10;
                                    let parsed = parseInt(acceptNumberResult[0], 10);
                                    let items1 = [parsed];
                                    obj.byweekno = items1;
                                    str = "comma";
                                    obj = iter;
                                    parsed = obj;
                                    str4 = obj.acceptNumber();
                                    if (str4) {
                                      let tmp26 = obj;
                                      let byweekno = obj.byweekno;
                                      let arr2 = byweekno.push(byweekday.parseInt(str4[0], num));
                                      obj = parsed;
                                    } else {
                                      let str16 = "Unexpected symbol ";
                                      let tmp22 = new.target;
                                      let str17 = "; expected monthday";
                                      let tmp23 = new.target;
                                      error = new byweekday.Error("Unexpected symbol " + parsed.symbol + "; expected monthday");
                                      let tmp25 = error;
                                      throw error;
                                    }
                                  } else {
                                    let _Error2 = Error;
                                    let str14 = "Unexpected symbol ";
                                    let tmp17 = new.target;
                                    let str15 = ", expected week number";
                                    let tmp18 = new.target;
                                    let error1 = new Error("Unexpected symbol " + iter.symbol + ", expected week number");
                                    let tmp20 = error1;
                                    throw error1;
                                  }
                                } else if (flag3) {
                                  let nextSymbolResult9 = iter.nextSymbol();
                                  let tmp13 = obj;
                                  if (!obj.bymonth) {
                                    tmp13.bymonth = [];
                                  }
                                  let bymonth = tmp13.bymonth;
                                  let arr3 = bymonth.push(flag3);
                                  obj = iter;
                                }
                              }
                            }
                            let str19 = "comma";
                            continue;
                          break;
                          case "type":
                          break;
                          case "push":
                            flag3 = 2;
                          break;
                          case "radii":
                          break;
                          case "raw":
                            flag3 = 3;
                          break;
                          case "ref":
                          break;
                          case "registerAsset":
                            flag3 = 4;
                          break;
                          case "rejectWithError":
                          break;
                          case "replace":
                            flag3 = 5;
                          break;
                          case "resizeMode":
                          break;
                          case "size":
                            flag3 = 6;
                          break;
                          case "resolve":
                          break;
                          case "result":
                            flag3 = 7;
                          break;
                          case "right":
                          break;
                          case "runOnJS":
                            flag3 = 8;
                          break;
                          case "scales":
                          break;
                          case "shapes":
                            flag3 = 9;
                          break;
                          case "sk":
                          break;
                          case "skuId":
                            flag3 = 10;
                          break;
                          case "slice":
                          break;
                          case "source":
                            flag3 = 11;
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
                            flag3 = 11;
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
                          case "guildFolders":
                          break;
                          case "handleEndAnalytics":
                          break;
                          case "readScreenSizeForAppEntry":
                          break;
                          case "getMostImportantRaidResolutionType":
                          break;
                          case "RaidResolutionType":
                          break;
                          case "ResolutionTypes":
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
                          case "woman_gesturing_no":
                          break;
                          case "woman_gesturing_no_dark_skin_tone":
                          break;
                          case "man_gesturing_no":
                          break;
                          case "man_gesturing_no_dark_skin_tone":
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
                          case "maxBitrate":
                          break;
                          case "getBreadcrumbLogLevelFromHttpStatusCode":
                          break;
                          case "defaultRenderError":
                          break;
                          case "POMELO_ATTEMPT":
                          break;
                          case "POMELO_ATTEMPT_UNAUTHED":
                          break;
                          case "QUESTS_PREVIEW_COMPLETE":
                          break;
                          case "ANDROID_NOTIFICATION_LIGHTS":
                          break;
                          case "L":
                          break;
                          case "LI":
                          break;
                          case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
                          break;
                          case "MESSAGE_REACTION_ADD":
                          break;
                          case "MESSAGE_REACTION_ADD_MANY":
                          break;
                          case "FORUM_CHANNEL_TEXT_AREA":
                          break;
                          case "TEXT_AREA_CTA_CLICKED":
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
                          case "limitedBadgeRow":
                          break;
                          case "mi":
                          break;
                          case "mit":
                          break;
                          case "withTestId":
                          break;
                          case "$ZodMap":
                          break;
                          case "ZodMap":
                          break;
                          case "M":
                          break;
                          case "ap":
                          break;
                          case "ReactNative":
                          break;
                          case "ReactNativeBridgeEventPlugin":
                          break;
                          case "Plugin":
                          break;
                          case "lug":
                          break;
                          case "plugins":
                          break;
                          case "encodeDotInKeys":
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
                          case "breadcrumbType":
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
                          case "stickerButtonEnabled":
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
                          case "shouldCollectMetrics":
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
                          case "updateRelationship":
                          break;
                          case "removedVoiceStateUsers":
                          break;
                          case "getClipsDataDirSync":
                          break;
                          case "KRISP_INIT_ERROR_WEIGHT_8K":
                          break;
                          case "postformat":
                          break;
                          case "form":
                          break;
                          case "orm":
                          break;
                          case "ma":
                            flag3 = 5;
                          break;
                          case "mat":
                          break;
                          case "lai":
                            flag3 = 11;
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
                          case "woman_elf_tone5":
                          break;
                          case "man_elf_tone5":
                          break;
                          case "elf_tone5":
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
                          case "_frequently":
                          break;
                          case "freq":
                          break;
                          case "frequently":
                          break;
                          case "frequentlyUsed":
                          break;
                          case "frequentlyUsedReactionEmojis":
                          break;
                          case "isAMR":
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
                          case "isObfuscated":
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
                            flag3 = 11;
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
                          case "safelyMakeUrlHumanReadable":
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
                          case "buildNumber":
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
                          case "forEachEnvelopeItem":
                          break;
                          case "gifUrlKey":
                          break;
                          case "APP_LAUNCHER_FRECENTS_TOGGLED":
                          break;
                          case "TOGGLE":
                          break;
                          case "OGG":
                          break;
                          case "DCDNotificationCategoryUtils":
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
                          case "UserLinkType":
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
                          case "woman_lifting_weights_light_skin_tone":
                          break;
                          case "man_lifting_weights_light_skin_tone":
                          break;
                          case "GuildEntityDao":
                          break;
                          case "EntityDao":
                          break;
                          case "Dao":
                          break;
                          case "useIsFamilyCenterV3Enabled":
                          break;
                          case "requestGuildMembers":
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
                            flag3 = 11;
                          break;
                          case "GuildEventModeratorAction":
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
                          case "person_walking_facing_right_tone4":
                          break;
                          case "_hasError":
                          break;
                          case "hasErr":
                          break;
                          case "hasError":
                          break;
                          case "eventOriginIntegration":
                          break;
                          case "onSharedClientThemeViewed":
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
                          case "preventedRoutes":
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
                          case "handlePortalKeyboardOpen":
                          break;
                          case "numFinished":
                          break;
                          case "channelContainer":
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
                          case "totalTime":
                          break;
                          case "isSelf":
                          break;
                          case "isSelfDeaf":
                          break;
                          case "afk_channel_id":
                          break;
                          case "_id":
                          break;
                          case "AUTO_MODERATION_ADD_KEYWORDS":
                          break;
                          case "KEYWORD":
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
                          case "subscription_preview":
                          break;
                          case "previewAssetPaths":
                          break;
                          case "setPath":
                          break;
                          case "AvatarMoatmonsturrExample":
                          break;
                          case "atm":
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
                          case "initializeRuntimeStart":
                          break;
                          case "AccountAgeTier10LargeBadge":
                          break;
                          case "cou":
                          break;
                          case "Badge":
                          break;
                          case "fMap":
                          break;
                          case "applyDebugIds":
                          break;
                          case "showGuildSettingsStickerError":
                          break;
                          case "handleTypeChange":
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
                          case "secondaryText":
                          break;
                          case "secondaryTextContainer":
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
                          case "REFERENCE_ORIGINAL":
                          break;
                          case "ORIGINAL_MD5_HEADER":
                          break;
                          case "ROSE":
                          break;
                          case "SEASONAL_STANDARD_BOX":
                          break;
                          case "STANDARD_BOX":
                          break;
                          case "BOX_MODE_ACTIONSHEET_HEIGHT":
                          break;
                          case "apc":
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
                          case "isForGroupSetupModal":
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
                          case "parentId":
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
                          case "BUBBLING_PHASE":
                          break;
                          case "SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE":
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
                          case "formatUserActivityTimestamp":
                          break;
                          case "SELECT_WEB_AUTH_METHOD":
                          break;
                          case "fetchesShelf":
                          break;
                          case "failImmediatelyWhenRateLimited":
                          break;
                          case "execTime":
                          break;
                          default:
                            flag3 = false;
                        }
                      }
                    }
                  }
                }
              }
              let str12 = iter.symbol;
              let num2 = 2;
              num = 0;
              str4 = str12.substr(0, 2);
              flag2 = str4.toUpperCase();
            }
            const _Error = Error;
            const error2 = new Error("Nth out of range: " + str);
            throw error2;
          }
        };
        const symbol = obj.symbol;
      }
    }
  }
  function rt(arg0) {
    const items = [];
    const keys = Object.keys(arg0);
    for (let num = 0; num < keys.length; num = num + 1) {
      let tmp = keys[num];
      let tmp2 = p;
      let arr3 = closure_71;
      let tmp3 = num;
      if (typeof p !== "function") {
        let str3 = "Trying to call a non-function";
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      let tmp4 = f;
      if (typeof f !== "function") {
        let str4 = "Trying to call a non-function";
        let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
      }
      let tmp5 = l;
      if (typeof l !== "function") {
        let str5 = "Trying to call a non-function";
        let throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
      }
      let tmp6 = i;
      if (typeof i !== "function") {
        let str6 = "Trying to call a non-function";
        let throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
      }
      let tmp7 = null != arr3;
      let tmp8 = !tmp7;
      if (tmp7) {
        tmp8 = 0 === arr3.length;
      }
      let tmp9 = !tmp8 && -1 !== arr3.indexOf(tmp);
      if (!tmp9) {
        let arr = items.push(tmp);
      }
      let tmp11 = E;
      if (typeof E !== "function") {
        let str7 = "Trying to call a non-function";
        let throwTypeErrorResult4 = HermesBuiltin.throwTypeError();
      }
      let _Date = Date;
      let tmp12 = arg0[tmp] instanceof Date;
      if (tmp12) {
        let tmp13 = T;
        let obj = arg0[tmp];
        if (typeof T !== "function") {
          let str8 = "Trying to call a non-function";
          let throwTypeErrorResult5 = HermesBuiltin.throwTypeError();
        }
        if (typeof tmp11 !== "function") {
          let str9 = "Trying to call a non-function";
          let throwTypeErrorResult6 = HermesBuiltin.throwTypeError();
        }
        let _Date2 = Date;
        let tmp14 = obj instanceof Date;
        if (tmp14) {
          let _isNaN = isNaN;
          tmp14 = !isNaN(obj.getTime());
        }
        tmp12 = !tmp14;
      }
      if (tmp12) {
        arr = items.push(tmp);
      }
    }
    if (items.length) {
      const _Error = Error;
      error = new Error("Invalid options: " + items.join(", "));
      throw error;
    } else {
      return H({}, arg0);
    }
  }
  function at(arg0) {
    const obj = {};
    const match = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(arg0);
    if (match) {
      if (match[1]) {
        obj.tzid = tmp2;
      }
      if (typeof A !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const match1 = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(tmp3);
      if (match1) {
        const _Date = Date;
        const _parseInt = parseInt;
        const parsed = parseInt(match1[1], 10);
        const _parseInt2 = parseInt;
        const diff = parseInt(match1[2], 10) - 1;
        const _parseInt3 = parseInt;
        const parsed1 = parseInt(match1[3], 10);
        const _parseInt4 = parseInt;
        const tmp14 = parseInt(match1[5], 10) || 0;
        const _parseInt5 = parseInt;
        const tmp15 = parseInt(match1[6], 10) || 0;
        const _parseInt6 = parseInt;
        const tmp16 = parseInt(match1[7], 10) || 0;
        date = new Date(Date.UTC(parsed, diff, parsed1, tmp14, tmp15, tmp16));
        obj.dtstart = date;
        return obj;
      } else {
        const _Error = Error;
        const concat = "Invalid UNTIL value: ".concat;
        error = new Error("Invalid UNTIL value: ".concat(tmp3));
        throw error;
      }
      obj3 = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
    } else {
      return obj;
    }
    const obj2 = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i;
  }
  function st(str) {
    const replaced = str.replace(/^\s+|\s+$/, "");
    if (replaced.length) {
      let match = /^([A-Z]+?)[:;]/.exec(replaced.toUpperCase());
      if (match) {
        let formatted = str3.toUpperCase();
        if ("RRULE" !== formatted) {
          if ("EXRULE" !== formatted) {
            if ("DTSTART" === formatted) {
              return at(replaced);
            } else {
              let _Error = Error;
              let concat = "Unsupported RFC prop ".concat;
              const combined = "Unsupported RFC prop ".concat(str3, " in ");
              error = new Error(combined.concat(replaced));
              throw error;
            }
          }
        }
        const tmp14 = at(replaced.replace(/^RRULE:/i, ""));
        closure_1 = tmp14;
        let parts = replaced.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
        const item = parts.forEach((str) => {
          let tmp = str;
          const parts = str.split("=");
          [str, str2] = parts;
          let num = str.toUpperCase();
          switch (num) {
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
              _Date = new _Date(UTC(parsed, diff, parsed1, num4, num5, num));
              tmp.until = _Date;
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
              closure_1.freq = closure_1_39[str2.toUpperCase(str2)];
            break;
            case "left":
            break;
            case "length":
              closure_1.wkst = closure_1_69[str2.toUpperCase(str2)];
            break;
            case "lj":
            break;
            case "loadJsonAsset":
              let index = str2.indexOf(",");
              if (-1 !== index) {
                let parts1 = str2.split(",");
                let mapped = parts1.map(closure_1_54);
              } else {
                let obj2 = /^[+-]?\d+$/;
                let isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  let _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              let formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "location":
            break;
            case "map":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "marginTop":
            break;
            case "marginBottom":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "max":
            break;
            case "memo":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "message":
            break;
            case "messageId":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "method":
            break;
            case "methodobject":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "withTiming":
            break;
            case "min":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "ml":
            break;
            case "mn":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "mode":
            break;
            case "name":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "names":
            break;
            case "next":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "nm":
            break;
            case "no":
              let parts2 = str2.split(",");
              fn = (str) => {
                if (2 === str.length) {
                  return dependencyMap[str];
                } else {
                  const match = str.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                  if (match) {
                    if (match.length >= 3) {
                      const _Number = Number;
                      const NumberResult = Number(match[1]);
                      if (typeof closure_2 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      const obj = {};
                      if (0 === NumberResult) {
                        const _Error = Error;
                        error = new Error("Can't create weekday with n == 0");
                        throw error;
                      } else {
                        obj.weekday = dependencyMap[match[2]].weekday;
                        obj.n = NumberResult;
                        return obj;
                      }
                    }
                  }
                  const _SyntaxError = SyntaxError;
                  const concat = "Invalid weekday string: ".concat;
                  const syntaxError = new SyntaxError("Invalid weekday string: ".concat(str));
                  throw syntaxError;
                }
              };
              let mapped1 = parts2.map(fn);
              closure_1.byweekday = mapped1;
            break;
            case "now":
            break;
            case "np":
              parts2 = str2.split(",");
              fn = (str) => {
                if (2 === str.length) {
                  return dependencyMap[str];
                } else {
                  const match = str.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                  if (match) {
                    if (match.length >= 3) {
                      const _Number = Number;
                      const NumberResult = Number(match[1]);
                      if (typeof closure_2 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      const obj = {};
                      if (0 === NumberResult) {
                        const _Error = Error;
                        error = new Error("Can't create weekday with n == 0");
                        throw error;
                      } else {
                        obj.weekday = dependencyMap[match[2]].weekday;
                        obj.n = NumberResult;
                        return obj;
                      }
                    }
                  }
                  const _SyntaxError = SyntaxError;
                  const concat = "Invalid weekday string: ".concat;
                  const syntaxError = new SyntaxError("Invalid weekday string: ".concat(str));
                  throw syntaxError;
                }
              };
              mapped1 = parts2.map(fn);
              closure_1.byweekday = mapped1;
            break;
            case "onPress":
            break;
            case "opacity":
              let tmp28 = closure_1_52(replaced);
              closure_1.tzid = tmp28.tzid;
              closure_1.dtstart = tmp28.dtstart;
            break;
            case "options":
            break;
            case "parent":
              tmp28 = closure_1_52(replaced);
              closure_1.tzid = tmp28.tzid;
              closure_1.dtstart = tmp28.dtstart;
            break;
            case "paths":
            break;
            case "pos":
              tmp = closure_1;
              if (typeof closure_1_34 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              num = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(str2);
              if (num) {
                const _Date2 = Date;
                _Date = Date;
                UTC = Date.UTC;
                parsed = parseInt(num[1], 10);
                const _parseInt = parseInt;
                diff = parseInt(num[2], 10) - 1;
                const _parseInt2 = parseInt;
                parsed1 = parseInt(num[3], 10);
                const _parseInt3 = parseInt;
                num4 = parseInt(num[5], 10);
                if (!num4) {
                  num4 = 0;
                }
                const _parseInt4 = parseInt;
                num5 = parseInt(num[6], 10);
                if (!num5) {
                  num5 = 0;
                }
                const _parseInt5 = parseInt;
                num = parseInt(num[7], 10);
                if (!num) {
                  num = 0;
                }
              } else {
                let _Error = Error;
                let concat = "Invalid UNTIL value: ".concat;
                error = new Error("Invalid UNTIL value: ".concat(str2));
                throw error;
              }
              let obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
            break;
            case "position":
            break;
            case "props":
              let _Number = Number;
              let NumberResult = Number(str2);
              closure_1.byeaster = NumberResult;
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
            case "guildFolders":
            break;
            case "handleEndAnalytics":
            break;
            case "readScreenSizeForAppEntry":
            break;
            case "getMostImportantRaidResolutionType":
            break;
            case "RaidResolutionType":
            break;
            case "ResolutionTypes":
            break;
            case "enforcedHeight":
            break;
            case "$ZodBoolean":
            break;
            case "ZodBoolean":
            break;
            case "B":
              _Number = Number;
              NumberResult = Number(str2);
              closure_1.byeaster = NumberResult;
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
            case "woman_gesturing_no":
            break;
            case "woman_gesturing_no_dark_skin_tone":
            break;
            case "man_gesturing_no":
            break;
            case "man_gesturing_no_dark_skin_tone":
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
            case "maxBitrate":
            break;
            case "getBreadcrumbLogLevelFromHttpStatusCode":
            break;
            case "defaultRenderError":
            break;
            case "POMELO_ATTEMPT":
            break;
            case "POMELO_ATTEMPT_UNAUTHED":
            break;
            case "QUESTS_PREVIEW_COMPLETE":
            break;
            case "ANDROID_NOTIFICATION_LIGHTS":
            break;
            case "L":
            break;
            case "LI":
            break;
            case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
            break;
            case "MESSAGE_REACTION_ADD":
            break;
            case "MESSAGE_REACTION_ADD_MANY":
            break;
            case "FORUM_CHANNEL_TEXT_AREA":
            break;
            case "TEXT_AREA_CTA_CLICKED":
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
            case "limitedBadgeRow":
            break;
            case "mi":
            break;
            case "mit":
            break;
            case "withTestId":
            break;
            case "$ZodMap":
            break;
            case "ZodMap":
            break;
            case "M":
            break;
            case "ap":
            break;
            case "ReactNative":
            break;
            case "ReactNativeBridgeEventPlugin":
            break;
            case "Plugin":
            break;
            case "lug":
            break;
            case "plugins":
            break;
            case "encodeDotInKeys":
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
            case "breadcrumbType":
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
            case "PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID":
              _Number = Number;
              NumberResult = Number(str2);
              closure_1.byeaster = NumberResult;
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
            case "stickerButtonEnabled":
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
            case "shouldCollectMetrics":
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
            case "updateRelationship":
            break;
            case "removedVoiceStateUsers":
            break;
            case "getClipsDataDirSync":
            break;
            case "KRISP_INIT_ERROR_WEIGHT_8K":
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
            case "woman_elf_tone5":
            break;
            case "man_elf_tone5":
            break;
            case "elf_tone5":
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
            case "_frequently":
            break;
            case "freq":
            break;
            case "frequently":
            break;
            case "frequentlyUsed":
            break;
            case "frequentlyUsedReactionEmojis":
            break;
            case "isAMR":
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
            case "isObfuscated":
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
            case "assetContainer":
            break;
            case "ss":
            break;
            case "safelyMakeUrlHumanReadable":
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
            case "buildNumber":
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
            case "forEachEnvelopeItem":
            break;
            case "gifUrlKey":
            break;
            case "APP_LAUNCHER_FRECENTS_TOGGLED":
            break;
            case "TOGGLE":
            break;
            case "OGG":
            break;
            case "DCDNotificationCategoryUtils":
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
            case "UserLinkType":
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
            case "woman_lifting_weights_light_skin_tone":
            break;
            case "man_lifting_weights_light_skin_tone":
            break;
            case "GuildEntityDao":
            break;
            case "EntityDao":
            break;
            case "Dao":
            break;
            case "useIsFamilyCenterV3Enabled":
            break;
            case "requestGuildMembers":
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
            case "_hasError":
            break;
            case "hasErr":
            break;
            case "hasError":
            break;
            case "eventOriginIntegration":
            break;
            case "onSharedClientThemeViewed":
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
            case "preventedRoutes":
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
            case "handlePortalKeyboardOpen":
            break;
            case "numFinished":
            break;
            case "channelContainer":
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
            case "totalTime":
            break;
            case "isSelf":
            break;
            case "isSelfDeaf":
            break;
            case "afk_channel_id":
            break;
            case "_id":
            break;
            case "AUTO_MODERATION_ADD_KEYWORDS":
            break;
            case "KEYWORD":
            break;
            case "family_adult_adult_child":
            break;
            case "family_adult_adult_child_child":
            break;
            default:
              const _Error2 = Error;
              const error1 = new Error("Unknown RRULE property '" + str + "'");
              throw error1;
          }
        });
        return tmp14;
      } else {
        const tmp4 = at(replaced.replace(/^RRULE:/i, ""));
        closure_1 = tmp4;
        let parts1 = replaced.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
        const item1 = parts1.forEach((str) => {
          let tmp = str;
          const parts = str.split("=");
          [str, str2] = parts;
          let num = str.toUpperCase();
          switch (num) {
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
              _Date = new _Date(UTC(parsed, diff, parsed1, num4, num5, num));
              tmp.until = _Date;
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
              closure_1.freq = closure_1_39[str2.toUpperCase(str2)];
            break;
            case "left":
            break;
            case "length":
              closure_1.wkst = closure_1_69[str2.toUpperCase(str2)];
            break;
            case "lj":
            break;
            case "loadJsonAsset":
              let index = str2.indexOf(",");
              if (-1 !== index) {
                let parts1 = str2.split(",");
                let mapped = parts1.map(closure_1_54);
              } else {
                let obj2 = /^[+-]?\d+$/;
                let isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  let _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              let formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "location":
            break;
            case "map":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "marginTop":
            break;
            case "marginBottom":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "max":
            break;
            case "memo":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "message":
            break;
            case "messageId":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "method":
            break;
            case "methodobject":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "withTiming":
            break;
            case "min":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "ml":
            break;
            case "mn":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "mode":
            break;
            case "name":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "names":
            break;
            case "next":
              index = str2.indexOf(",");
              if (-1 !== index) {
                parts1 = str2.split(",");
                mapped = parts1.map(closure_1_54);
              } else {
                obj2 = /^[+-]?\d+$/;
                isMatch = obj2.test(str2);
                mapped = str2;
                if (isMatch) {
                  _Number2 = Number;
                  mapped = Number(str2);
                }
              }
              formatted = str.toLowerCase();
              closure_1[formatted] = mapped;
            break;
            case "nm":
            break;
            case "no":
              let parts2 = str2.split(",");
              fn = (str) => {
                if (2 === str.length) {
                  return dependencyMap[str];
                } else {
                  const match = str.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                  if (match) {
                    if (match.length >= 3) {
                      const _Number = Number;
                      const NumberResult = Number(match[1]);
                      if (typeof closure_2 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      const obj = {};
                      if (0 === NumberResult) {
                        const _Error = Error;
                        error = new Error("Can't create weekday with n == 0");
                        throw error;
                      } else {
                        obj.weekday = dependencyMap[match[2]].weekday;
                        obj.n = NumberResult;
                        return obj;
                      }
                    }
                  }
                  const _SyntaxError = SyntaxError;
                  const concat = "Invalid weekday string: ".concat;
                  const syntaxError = new SyntaxError("Invalid weekday string: ".concat(str));
                  throw syntaxError;
                }
              };
              let mapped1 = parts2.map(fn);
              closure_1.byweekday = mapped1;
            break;
            case "now":
            break;
            case "np":
              parts2 = str2.split(",");
              fn = (str) => {
                if (2 === str.length) {
                  return dependencyMap[str];
                } else {
                  const match = str.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                  if (match) {
                    if (match.length >= 3) {
                      const _Number = Number;
                      const NumberResult = Number(match[1]);
                      if (typeof closure_2 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      const obj = {};
                      if (0 === NumberResult) {
                        const _Error = Error;
                        error = new Error("Can't create weekday with n == 0");
                        throw error;
                      } else {
                        obj.weekday = dependencyMap[match[2]].weekday;
                        obj.n = NumberResult;
                        return obj;
                      }
                    }
                  }
                  const _SyntaxError = SyntaxError;
                  const concat = "Invalid weekday string: ".concat;
                  const syntaxError = new SyntaxError("Invalid weekday string: ".concat(str));
                  throw syntaxError;
                }
              };
              mapped1 = parts2.map(fn);
              closure_1.byweekday = mapped1;
            break;
            case "onPress":
            break;
            case "opacity":
              let tmp28 = closure_1_52(replaced);
              closure_1.tzid = tmp28.tzid;
              closure_1.dtstart = tmp28.dtstart;
            break;
            case "options":
            break;
            case "parent":
              tmp28 = closure_1_52(replaced);
              closure_1.tzid = tmp28.tzid;
              closure_1.dtstart = tmp28.dtstart;
            break;
            case "paths":
            break;
            case "pos":
              tmp = closure_1;
              if (typeof closure_1_34 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              num = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(str2);
              if (num) {
                const _Date2 = Date;
                _Date = Date;
                UTC = Date.UTC;
                parsed = parseInt(num[1], 10);
                const _parseInt = parseInt;
                diff = parseInt(num[2], 10) - 1;
                const _parseInt2 = parseInt;
                parsed1 = parseInt(num[3], 10);
                const _parseInt3 = parseInt;
                num4 = parseInt(num[5], 10);
                if (!num4) {
                  num4 = 0;
                }
                const _parseInt4 = parseInt;
                num5 = parseInt(num[6], 10);
                if (!num5) {
                  num5 = 0;
                }
                const _parseInt5 = parseInt;
                num = parseInt(num[7], 10);
                if (!num) {
                  num = 0;
                }
              } else {
                let _Error = Error;
                let concat = "Invalid UNTIL value: ".concat;
                error = new Error("Invalid UNTIL value: ".concat(str2));
                throw error;
              }
              let obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
            break;
            case "position":
            break;
            case "props":
              let _Number = Number;
              let NumberResult = Number(str2);
              closure_1.byeaster = NumberResult;
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
            case "guildFolders":
            break;
            case "handleEndAnalytics":
            break;
            case "readScreenSizeForAppEntry":
            break;
            case "getMostImportantRaidResolutionType":
            break;
            case "RaidResolutionType":
            break;
            case "ResolutionTypes":
            break;
            case "enforcedHeight":
            break;
            case "$ZodBoolean":
            break;
            case "ZodBoolean":
            break;
            case "B":
              _Number = Number;
              NumberResult = Number(str2);
              closure_1.byeaster = NumberResult;
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
            case "woman_gesturing_no":
            break;
            case "woman_gesturing_no_dark_skin_tone":
            break;
            case "man_gesturing_no":
            break;
            case "man_gesturing_no_dark_skin_tone":
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
            case "maxBitrate":
            break;
            case "getBreadcrumbLogLevelFromHttpStatusCode":
            break;
            case "defaultRenderError":
            break;
            case "POMELO_ATTEMPT":
            break;
            case "POMELO_ATTEMPT_UNAUTHED":
            break;
            case "QUESTS_PREVIEW_COMPLETE":
            break;
            case "ANDROID_NOTIFICATION_LIGHTS":
            break;
            case "L":
            break;
            case "LI":
            break;
            case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
            break;
            case "MESSAGE_REACTION_ADD":
            break;
            case "MESSAGE_REACTION_ADD_MANY":
            break;
            case "FORUM_CHANNEL_TEXT_AREA":
            break;
            case "TEXT_AREA_CTA_CLICKED":
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
            case "limitedBadgeRow":
            break;
            case "mi":
            break;
            case "mit":
            break;
            case "withTestId":
            break;
            case "$ZodMap":
            break;
            case "ZodMap":
            break;
            case "M":
            break;
            case "ap":
            break;
            case "ReactNative":
            break;
            case "ReactNativeBridgeEventPlugin":
            break;
            case "Plugin":
            break;
            case "lug":
            break;
            case "plugins":
            break;
            case "encodeDotInKeys":
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
            case "breadcrumbType":
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
            case "PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID":
              _Number = Number;
              NumberResult = Number(str2);
              closure_1.byeaster = NumberResult;
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
            case "stickerButtonEnabled":
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
            case "shouldCollectMetrics":
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
            case "updateRelationship":
            break;
            case "removedVoiceStateUsers":
            break;
            case "getClipsDataDirSync":
            break;
            case "KRISP_INIT_ERROR_WEIGHT_8K":
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
            case "woman_elf_tone5":
            break;
            case "man_elf_tone5":
            break;
            case "elf_tone5":
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
            case "_frequently":
            break;
            case "freq":
            break;
            case "frequently":
            break;
            case "frequentlyUsed":
            break;
            case "frequentlyUsedReactionEmojis":
            break;
            case "isAMR":
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
            case "isObfuscated":
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
            case "assetContainer":
            break;
            case "ss":
            break;
            case "safelyMakeUrlHumanReadable":
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
            case "buildNumber":
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
            case "forEachEnvelopeItem":
            break;
            case "gifUrlKey":
            break;
            case "APP_LAUNCHER_FRECENTS_TOGGLED":
            break;
            case "TOGGLE":
            break;
            case "OGG":
            break;
            case "DCDNotificationCategoryUtils":
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
            case "UserLinkType":
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
            case "woman_lifting_weights_light_skin_tone":
            break;
            case "man_lifting_weights_light_skin_tone":
            break;
            case "GuildEntityDao":
            break;
            case "EntityDao":
            break;
            case "Dao":
            break;
            case "useIsFamilyCenterV3Enabled":
            break;
            case "requestGuildMembers":
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
            case "_hasError":
            break;
            case "hasErr":
            break;
            case "hasError":
            break;
            case "eventOriginIntegration":
            break;
            case "onSharedClientThemeViewed":
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
            case "preventedRoutes":
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
            case "handlePortalKeyboardOpen":
            break;
            case "numFinished":
            break;
            case "channelContainer":
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
            case "totalTime":
            break;
            case "isSelf":
            break;
            case "isSelfDeaf":
            break;
            case "afk_channel_id":
            break;
            case "_id":
            break;
            case "AUTO_MODERATION_ADD_KEYWORDS":
            break;
            case "KEYWORD":
            break;
            case "family_adult_adult_child":
            break;
            case "family_adult_adult_child_child":
            break;
            default:
              const _Error2 = Error;
              const error1 = new Error("Unknown RRULE property '" + str + "'");
              throw error1;
          }
        });
        return tmp4;
      }
      let obj = /^([A-Z]+?)[:;]/;
    } else {
      return null;
    }
  }
  function ht(arg0) {
    let NumberResult = arg0;
    if (obj.test(arg0)) {
      const _Number = Number;
      NumberResult = Number(arg0);
    }
    return NumberResult;
  }
  function ct(tzid) {
    const items = [];
    const keys = Object.keys(tzid);
    const keys1 = Object.keys(closure_70);
    let str = "";
    let num = 0;
    let str2 = "";
    let str3 = "";
    if (0 < keys.length) {
      while (true) {
        let tmp = num;
        let tmp2 = str2;
        let tmp3 = str2;
        if ("tzid" !== keys[num]) {
          let tmp39 = p;
          if (typeof p !== "function") {
            let str12 = "Trying to call a non-function";
            let throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          let tmp4 = f;
          if (typeof f !== "function") {
            let str13 = "Trying to call a non-function";
            let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
          }
          let tmp5 = l;
          if (typeof l !== "function") {
            let str14 = "Trying to call a non-function";
            let throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
          }
          let tmp6 = i;
          if (typeof i !== "function") {
            let str15 = "Trying to call a non-function";
            let throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
          }
          let tmp7 = null != keys1;
          let tmp8 = !tmp7;
          if (tmp7) {
            tmp8 = 0 === keys1.length;
          }
          let tmp9 = !tmp8 && -1 !== keys1.indexOf(keys[num]);
          tmp3 = str2;
          if (tmp9) {
            let str4 = keys[num];
            let formatted = str4.toUpperCase();
            let str5 = tzid[keys[num]];
            if (typeof tmp6 !== "function") {
              let str16 = "Trying to call a non-function";
              let throwTypeErrorResult4 = HermesBuiltin.throwTypeError();
            }
            tmp3 = str2;
            if (null != str5) {
              let tmp45 = isArray;
              if (!isArray(str5)) {
                if ("FREQ" === formatted) {
                  let tmp36 = constants;
                  let str1 = constants.FREQUENCIES[tzid.freq];
                  let str6 = formatted;
                  let tmp12 = str2;
                } else if ("WKST" === formatted) {
                  let tmp32 = o;
                  if (typeof o !== "function") {
                    let str19 = "Trying to call a non-function";
                    let throwTypeErrorResult5 = HermesBuiltin.throwTypeError();
                  }
                  if (typeof str5 === "number") {
                    let tmp33 = closure_2;
                    let tmp34 = new.target;
                    if (typeof closure_2 !== "function") {
                      let str20 = "Trying to call a non-function";
                      let throwTypeErrorResult6 = HermesBuiltin.throwTypeError();
                    }
                    let obj = { weekday: str5, n: undefined };
                    str = obj.toString();
                  } else {
                    str = str5.toString();
                  }
                  str1 = str;
                  str6 = formatted;
                  tmp12 = str2;
                } else if ("BYWEEKDAY" === formatted) {
                  let arr6 = str5;
                  if (!tmp45(str5)) {
                    let items1 = [str5];
                    arr6 = items1;
                  }
                  let str10 = arr6.map((weekday) => {
                    let tmp2 = weekday;
                    if (!(weekday instanceof closure_2)) {
                      if (callback(weekday)) {
                        if (typeof tmp !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        let obj = {};
                        if (0 === weekday[1]) {
                          const _Error = Error;
                          error = new Error("Can't create weekday with n == 0");
                          throw error;
                        } else {
                          obj.weekday = weekday[0];
                          obj.n = tmp5;
                        }
                      } else {
                        if (typeof tmp !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        obj = { weekday, n: undefined };
                      }
                      tmp2 = obj;
                    }
                    return tmp2;
                  });
                  str1 = str10.toString();
                  str6 = "BYDAY";
                  tmp12 = str2;
                } else if ("DTSTART" === formatted) {
                  let text = str;
                  if (str5) {
                    let tmp22 = closure_55;
                    let _Date2 = Date;
                    let tmp23 = new.target;
                    let tmp24 = new.target;
                    let tmp25 = str5;
                    date = new Date(str5);
                    let tmp26 = new.target;
                    if (typeof closure_55 !== "function") {
                      let str18 = "Trying to call a non-function";
                      let throwTypeErrorResult7 = HermesBuiltin.throwTypeError();
                    }
                    let tmp27 = date;
                    obj = {};
                    let _isNaN = isNaN;
                    if (isNaN(date.getTime())) {
                      break;
                    } else {
                      obj.date = date;
                      obj.tzid = tmp20;
                      text = `DTSTART${obj3.toString()}`;
                    }
                  }
                  tmp12 = text;
                  str1 = str;
                  str6 = formatted;
                } else if ("UNTIL" === formatted) {
                  let tmp13 = N;
                  tzid = tzid.tzid;
                  let tmp14 = !tzid;
                  if (typeof N !== "function") {
                    let str17 = "Trying to call a non-function";
                    let throwTypeErrorResult8 = HermesBuiltin.throwTypeError();
                  }
                  let _Date = Date;
                  let tmp15 = new.target;
                  let tmp16 = new.target;
                  let tmp17 = str5;
                  let date1 = new Date(str5);
                  let tmp18 = date1;
                  let tmp19 = y;
                  let str7 = date1.getUTCFullYear();
                  let items2 = [y(str7.toString(), 4, "0"), y(date1.getUTCMonth() + 1, 2, "0"), y(date1.getUTCDate(), 2, "0"), "T", y(date1.getUTCHours(), 2, "0"), y(date1.getUTCMinutes(), 2, "0"), y(date1.getUTCSeconds(), 2, "0"), ];
                  let str8 = str;
                  if (!tzid) {
                    str8 = "Z";
                  }
                  items2[7] = str8;
                  str1 = items2.join(str);
                  str6 = formatted;
                  tmp12 = str2;
                } else if (tmp45(str5)) {
                  let items3 = [];
                  let num2 = 0;
                  if (0 < str5.length) {
                    do {
                      let _String2 = String;
                      items3[num2] = String(str5[num2]);
                      num2 = num2 + 1;
                      length = str5.length;
                    } while (num2 < length);
                  }
                  str1 = items3.toString();
                  str6 = formatted;
                  tmp12 = str2;
                } else {
                  let _String = String;
                  str1 = String(str5);
                  str6 = formatted;
                  tmp12 = str2;
                }
                tmp3 = tmp12;
                if (str1) {
                  let items4 = [str6, str1];
                  let arr = items.push(items4);
                  tmp3 = tmp12;
                }
              } else {
                tmp3 = str2;
              }
            }
          }
        }
        num = num + 1;
        str2 = tmp3;
        str3 = tmp3;
      }
      const _RangeError = RangeError;
      const rangeError = new RangeError("Invalid date passed to DateWithZone");
      throw rangeError;
    }
    const mapped = items.map((arg0) => {
      const combined = "".concat(arg0[0], "=");
      return combined.concat(arg0[1].toString());
    });
    const joined = mapped.join(";");
    if (str !== joined) {
      const concat = "RRULE:".concat;
      str = "RRULE:".concat(joined);
    }
    const items5 = [str3, str];
    const found = items5.filter((arg0) => arg0);
    return found.join("\n");
  }
  function At(getValue, count) {
    ({ freq, until, bysetpos } = count);
    if (0 !== count.count) {
      if (0 !== count.interval) {
        const fromDateResult = closure_50.fromDate(tmp);
        if (typeof closure_67 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        new.target.options = count;
        new.target.rebuild(fromDateResult.year, fromDateResult.month);
        ({ freq: freq2, byhour, byminute, bysecond } = count);
        let tmp3 = obj3;
        if (freq2 >= obj3.HOURLY) {
          if (freq2 >= constants.HOURLY) {
            if (typeof f !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof l !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof i !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let tmp8 = !tmp7;
            if (null != byhour) {
              tmp8 = 0 === byhour.length;
            }
            if (!tmp8) {
              if (typeof p !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp40 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp4 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp5 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp11 = !tmp10;
              if (null != byhour) {
                tmp11 = 0 === byhour.length;
              }
              let tmp12 = !tmp11;
              if (tmp12) {
                tmp12 = -1 !== byhour.indexOf(fromDateResult.hour);
              }
              tmp3 = globalThis;
            }
            const items = [];
            tmp4 = l;
            tmp40 = f;
            tmp5 = i;
          }
          if (freq2 >= constants.MINUTELY) {
            if (typeof f !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof l !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof i !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let tmp17 = !tmp16;
            if (null != byminute) {
              tmp17 = 0 === byminute.length;
            }
            if (!tmp17) {
              if (typeof p !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp48 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp13 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp14 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp20 = !tmp19;
              if (null != byminute) {
                tmp20 = 0 === byminute.length;
              }
              let tmp21 = !tmp20;
              if (tmp21) {
                tmp21 = -1 !== byminute.indexOf(fromDateResult.minute);
              }
            }
            tmp13 = l;
            tmp14 = i;
            tmp48 = f;
          }
          if (freq2 >= constants.SECONDLY) {
            if (typeof f !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof l !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (typeof i !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let tmp26 = !tmp25;
            if (null != bysecond) {
              tmp26 = 0 === bysecond.length;
            }
            if (!tmp26) {
              if (typeof p !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp56 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp22 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              if (typeof tmp23 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let tmp29 = !tmp28;
              if (null != bysecond) {
                tmp29 = 0 === bysecond.length;
              }
              let tmp30 = !tmp29;
              if (tmp30) {
                tmp30 = -1 !== bysecond.indexOf(fromDateResult.second);
              }
            }
            tmp22 = l;
            tmp23 = i;
            tmp56 = f;
          }
          obj.gettimeset(freq2)(fromDateResult.hour, fromDateResult.minute, fromDateResult.second, fromDateResult.millisecond);
        }
        closure_0 = count;
        const dtstart = count.dtstart;
        closure_1 = dtstart.getTime() % 1000;
        if (count.freq < tmp3.HOURLY) {
          const items1 = [];
          byhour = count.byhour;
          let item = byhour.forEach((arg0) => {
            let byminute = arg0;
            byminute = byminute.byminute;
            let item = byminute.forEach((arg0) => {
              let bysecond = arg0;
              bysecond = bysecond.bysecond;
              const item = bysecond.forEach((second) => {
                let num = closure_2_1;
                if (typeof closure_3_49 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const obj = { hour: closure_0, minute: closure_0, second };
                if (!num) {
                  num = 0;
                }
                obj.millisecond = num;
                closure_2_2.push(obj);
              });
            });
          });
          let items2 = items1;
        } else {
          items2 = [];
        }
      }
    }
    return getValue.getValue();
  }
  function Bt(str) {
    let sum;
    let obj = arg1;
    if (undefined === arg1) {
      obj = {};
    }
    let items = [];
    dtstart = items;
    const keys = Object.keys(obj);
    closure_1 = Object.keys(closure_73);
    let item = keys.forEach((arg0) => {
      let arr = closure_1;
      if (typeof closure_1_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof closure_1_13 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof closure_1_12 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof callResult !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp2 = !tmp;
      if (null != arr) {
        tmp2 = 0 === arr.length;
      }
      let tmp3 = !tmp2;
      if (tmp3) {
        tmp3 = -1 !== arr.indexOf(arg0);
      }
      if (!tmp3) {
        arr = dtstart.push(arg0);
      }
    });
    if (items.length) {
      let _Error2 = Error;
      error = new Error("Invalid options: " + items.join(", "));
      throw error;
    } else {
      const tmp5 = H(H({}, closure_73), obj);
      dtstart = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      i = undefined;
      c4 = undefined;
      const items1 = [];
      dtstart = items1;
      closure_1 = [];
      const items2 = [];
      closure_2 = items2;
      i = [];
      ({ dtstart, tzid: c4 } = at(str));
      let flag = tmp5.unfold;
      if (undefined === flag) {
        flag = false;
      }
      if (str) {
        str = str.trim();
      }
      if (str) {
        const split = str.split;
        if (flag) {
          let parts = split("\n");
          let num3 = 0;
          let parts1 = parts;
          if (0 < parts.length) {
            do {
              let str6 = parts[num3];
              let replaced = str6.replace(/\s+$/g, "");
              parts[num3] = replaced;
              let tmp12 = num3;
              if (replaced) {
                if (0 < num3) {
                  if (" " === replaced[0]) {
                    let diff = num3 - 1;
                    parts[diff] = parts[diff] + replaced.slice(1);
                    let spliceResult = parts.splice(num3, 1);
                    sum = num3;
                  }
                }
                sum = num3 + 1;
              } else {
                let spliceResult1 = parts.splice(num3, 1);
                sum = num3;
              }
              num3 = sum;
              parts1 = parts;
            } while (sum < parts.length);
          }
        } else {
          parts1 = split(/\s/);
        }
        let item1 = parts1.forEach((arr) => {
          if (arr) {
            if (-1 === arr.indexOf(":")) {
              let obj = { name: "RRULE", value: null };
              obj[1] = arr;
            } else {
              const parts = arr.split(":");
              const substr = parts.slice(0, 1);
              const substr1 = parts.slice(1);
              const items = [substr1.join(":")];
              const combined = substr.concat(items);
              obj = { name: null, value: null };
              [obj3[0], obj3[1]] = combined;
            }
            ({ name, value } = obj);
            const parts1 = name.split(";");
            if (parts1) {
              const str5 = parts1[0].toUpperCase();
              const substr2 = parts1.slice(1);
              const formatted = str5.toUpperCase();
              if ("RRULE" === formatted) {
                if (substr2.length) {
                  const _Error3 = Error;
                  const concat2 = "unsupported RRULE parm: ".concat;
                  error = new Error("unsupported RRULE parm: ".concat(substr2.join(",")));
                  throw error;
                } else {
                  const parts2 = arr.split("\n");
                  const mapped = parts2.map(closure_1_53);
                  const found = mapped.filter((arg0) => null !== arg0);
                  arr = dtstart.push(closure_1_38(closure_1_38({}, found[0]), found[1]));
                }
              } else if ("RDATE" === formatted) {
                let match = /RDATE(?:;TZID=([^:=]+))?/i.exec(arr);
                if (null === match) {
                  match = [];
                }
                let tmp22 = tmp21;
                if (match[1]) {
                  tmp22 = !closure_4;
                }
                if (tmp22) {
                  closure_4 = tmp21;
                }
                const item = substr2.forEach((arg0) => {
                  if (!obj.test(arg0)) {
                    const _Error = Error;
                    error = new Error("unsupported RDATE/EXDATE parm: " + arg0);
                    throw error;
                  }
                  obj = /(VALUE=DATE(-TIME)?)|(TZID=)/;
                });
                const parts3 = value.split(",");
                closure_1 = closure_1.concat(parts3.map((arg0) => {
                  if (typeof closure_34 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  const match = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(arg0);
                  if (match) {
                    const _Date = Date;
                    const _parseInt = parseInt;
                    const parsed = parseInt(match[1], 10);
                    const _parseInt2 = parseInt;
                    const diff = parseInt(match[2], 10) - 1;
                    const _parseInt3 = parseInt;
                    const parsed1 = parseInt(match[3], 10);
                    const _parseInt4 = parseInt;
                    const tmp9 = parseInt(match[5], 10) || 0;
                    const _parseInt5 = parseInt;
                    const tmp10 = parseInt(match[6], 10) || 0;
                    const _parseInt6 = parseInt;
                    const tmp11 = parseInt(match[7], 10) || 0;
                    date = new Date(Date.UTC(parsed, diff, parsed1, tmp9, tmp10, tmp11));
                    return date;
                  } else {
                    const _Error = Error;
                    const concat = "Invalid UNTIL value: ".concat;
                    error = new Error("Invalid UNTIL value: ".concat(arg0));
                    throw error;
                  }
                  const obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
                }));
                const obj5 = /RDATE(?:;TZID=([^:=]+))?/i;
              } else if ("EXRULE" === formatted) {
                if (substr2.length) {
                  const _Error2 = Error;
                  let concat = "unsupported EXRULE parm: ".concat;
                  const error1 = new Error("unsupported EXRULE parm: ".concat(substr2.join(",")));
                  throw error1;
                } else {
                  const parts4 = value.split("\n");
                  const mapped1 = parts4.map(closure_1_53);
                  const found1 = mapped1.filter((arg0) => null !== arg0);
                  arr = arr.push(closure_1_38(closure_1_38({}, found1[0]), found1[1]));
                }
              } else if ("EXDATE" === formatted) {
                const item1 = substr2.forEach((arg0) => {
                  if (!obj.test(arg0)) {
                    const _Error = Error;
                    error = new Error("unsupported RDATE/EXDATE parm: " + arg0);
                    throw error;
                  }
                  obj = /(VALUE=DATE(-TIME)?)|(TZID=)/;
                });
                const parts5 = value.split(",");
                callResult = callResult.concat(parts5.map((arg0) => {
                  if (typeof closure_34 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  const match = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(arg0);
                  if (match) {
                    const _Date = Date;
                    const _parseInt = parseInt;
                    const parsed = parseInt(match[1], 10);
                    const _parseInt2 = parseInt;
                    const diff = parseInt(match[2], 10) - 1;
                    const _parseInt3 = parseInt;
                    const parsed1 = parseInt(match[3], 10);
                    const _parseInt4 = parseInt;
                    const tmp9 = parseInt(match[5], 10) || 0;
                    const _parseInt5 = parseInt;
                    const tmp10 = parseInt(match[6], 10) || 0;
                    const _parseInt6 = parseInt;
                    const tmp11 = parseInt(match[7], 10) || 0;
                    date = new Date(Date.UTC(parsed, diff, parsed1, tmp9, tmp10, tmp11));
                    return date;
                  } else {
                    const _Error = Error;
                    const concat = "Invalid UNTIL value: ".concat;
                    error = new Error("Invalid UNTIL value: ".concat(arg0));
                    throw error;
                  }
                  const obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
                }));
              } else if ("DTSTART" !== formatted) {
                const _Error4 = Error;
                const error2 = new Error("unsupported property: " + str5);
                throw error2;
              }
              const str4 = parts1[0];
            } else {
              let _Error = Error;
              const error3 = new Error("empty property name");
              throw error3;
            }
          }
        });
        closure_1 = c4;
        closure_2 = tmp19;
        if (tmp5.compatible) {
          tmp5.forceset = true;
          tmp5.unfold = true;
        }
        if (!tmp5.forceset) {
          if (items1.length <= 1) {
            if (!arr8.length) {
              if (!items2.length) {
                if (!arr9.length) {
                  const tmp20 = items1[0] || {};
                  let dtstart2 = tmp20.dtstart;
                  let tmp21 = closure_72;
                  if (!dtstart2) {
                    dtstart2 = tmp5.dtstart;
                  }
                  if (!dtstart2) {
                    dtstart2 = dtstart;
                  }
                  obj = { dtstart: null, tzid: null };
                  obj[0] = dtstart2;
                  obj[1] = tmp20.tzid || tmp5.tzid || tmp18;
                  let tmp24 = new.target;
                  tmp21 = new tmp21(H(H({}, tmp20), obj), tmp19);
                  let tmp22 = tmp20.tzid || tmp5.tzid || tmp18;
                }
                return tmp24;
              }
            }
          }
        }
        if (typeof closure_76 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const call = dtstart.call;
        obj = {};
        if (typeof call === "unknown") {
          tmp30(obj, tmp19);
        } else {
          let callResult = call(tmp29, obj, tmp19);
        }
        if (!callResult) {
          callResult = tmp29;
        }
        callResult.dtstart = Gt.apply(callResult, ["dtstart"]);
        callResult.tzid = Gt.apply(callResult, ["tzid"]);
        callResult._rrule = [];
        callResult._rdate = [];
        callResult._exrule = [];
        callResult._exdate = [];
        i = callResult;
        callResult.dtstart(dtstart);
        callResult.tzid(c4);
        const item2 = items1.forEach((arg0) => {
          new closure_1_72(closure_1_38(closure_1_38({}, arg0), { dtstart, tzid: closure_1 }), closure_2);
          callResult.rrule(new.target);
        });
        const item3 = arr8.forEach((arg0) => {
          callResult.rdate(arg0);
        });
        const item4 = items2.forEach((arg0) => {
          new closure_1_72(closure_1_38(closure_1_38({}, arg0), { dtstart, tzid: closure_1 }), closure_2);
          callResult.exrule(new.target);
        });
        const item5 = arr9.forEach((arg0) => {
          callResult.exdate(arg0);
        });
        tmp24 = callResult;
        if (tmp40) {
          callResult.rdate(dtstart);
          tmp24 = callResult;
        }
        tmp30 = dtstart;
        tmp40 = tmp5.compatible && tmp5.dtstart;
      } else {
        let _Error = Error;
        let error1 = new Error("Invalid empty string");
        throw error1;
      }
      const tmp7 = at(str);
    }
  }
  function Gt(arg0) {
    closure_0 = arg0;
    const self = this;
    return (arg0) => {
      if (undefined !== arg0) {
        const concat = "_".concat;
        self["_".concat(closure_0)] = arg0;
      }
      if (undefined !== self["_".concat("_", closure_0)]) {
        const concat2 = "_".concat;
        return tmp3["_".concat("_", tmp4)];
      } else {
        let num = 0;
        if (0 < tmp3._rrule.length) {
          while (!self._rrule[num].origOptions[closure_0]) {
            num = num + 1;
          }
          return self._rrule[num].origOptions[closure_0];
        }
      }
      tmp4 = closure_0;
    };
  }
  function $t(arg0, arr) {
    if (arg0 instanceof closure_72) {
      const _String2 = String;
      const mapped = arr.map(String);
      const _String3 = String;
      if (typeof p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof f !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof l !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof i !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp13 = !tmp12;
      if (null != mapped) {
        tmp13 = 0 === mapped.length;
      }
      let tmp14 = !tmp13;
      if (tmp14) {
        tmp14 = -1 !== mapped.indexOf(StringResult);
      }
      if (!tmp14) {
        arr.push(arg0);
      }
    } else {
      const _TypeError = TypeError;
      const _String = String;
      const typeError = new TypeError(String(arg0) + " is not RRule instance");
      throw typeError;
    }
  }
  function Jt(arg0, arr) {
    if (arg0 instanceof Date) {
      const _Number = Number;
      const mapped = arr.map(Number);
      const _Number2 = Number;
      if (typeof p !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof f !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof l !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (typeof i !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let tmp13 = !tmp12;
      if (null != mapped) {
        tmp13 = 0 === mapped.length;
      }
      let tmp14 = !tmp13;
      if (tmp14) {
        tmp14 = -1 !== mapped.indexOf(NumberResult);
      }
      if (!tmp14) {
        arr.push(arg0);
        if (typeof R !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const sorted = arr.sort((getTime, getTime2) => {
          const time = getTime.getTime();
          return time - getTime2.getTime();
        });
      }
    } else {
      const _TypeError = TypeError;
      const _String = String;
      const typeError = new TypeError(String(arg0) + " is not Date instance");
      throw typeError;
    }
  }
  let obj = {
    d(arg0, obj) {
      for (const key10005 in arg1) {
        let tmp3 = key10005;
        let obj2 = ctor;
        let oResult = ctor.o(arg1, key10005);
        if (oResult) {
          oResult = !obj2.o(arg0, key10005);
        }
        if (!oResult) {
          continue;
        } else {
          let _Object = Object;
          obj = { enumerable: true, get: null };
          obj[1] = arg1[key10005];
          let definePropertyResult = Object.defineProperty(arg0, key10005, obj);
          continue;
        }
        continue;
      }
    },
    o(arg0, key10009) {
      const call = hasOwnProperty.call;
      return typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009);
    },
    r(arg0) {
      let toStringTag = typeof Symbol !== "undefined";
      if (typeof Symbol !== "undefined") {
        const _Symbol2 = Symbol;
        toStringTag = Symbol.toStringTag;
      }
      if (toStringTag) {
        const _Object = Object;
        const _Symbol = Symbol;
        Object.defineProperty(arg0, Symbol.toStringTag, { value: "Module" });
      }
    }
  };
  closure_0 = obj;
  obj = {};
  obj.r(obj);
  obj = {
    Frequency() {
      return obj3;
    },
    RRule(arg0) {
      return closure_72;
    },
    RRuleSet() {
      return closure_76;
    },
    Weekday(day, arg1) {
      return closure_2;
    },
    datetime() {
      return b;
    },
    rrulestr() {
      return Bt;
    }
  };
  obj.d(obj, obj);
  closure_1 = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  class t {
    constructor(arg0, arg1) {
      obj = {};
      if (0 === arg1) {
        tmp2 = globalThis;
        _Error = Error;
        tmp3 = new.target;
        str = "Can't create weekday with n == 0";
        tmp4 = new.target;
        error = new Error("Can't create weekday with n == 0");
        tmp6 = error;
        throw error;
      } else {
        tmp = arg0;
        obj.weekday = arg0;
        obj.n = arg1;
        return;
      }
    }
    static fromStr(arg0) {
      index = closure_1.indexOf(arg0);
      obj = Object.create(e.prototype);
      return { weekday: index, n: undefined };
    }
    nth(arg0) {
      self = this;
      if (this.n !== arg0) {
        tmp2 = e;
        obj = Object.create(e.prototype);
        obj = {};
        num = 0;
        if (0 === arg0) {
          tmp4 = globalThis;
          _Error = Error;
          tmp5 = new.target;
          str = "Can't create weekday with n == 0";
          tmp6 = new.target;
          error = new Error("Can't create weekday with n == 0");
          tmp8 = error;
          throw error;
        } else {
          obj.weekday = tmp.weekday;
          obj.n = arg0;
          self = obj;
        }
      }
      return self;
    }
    equals(arg0) {
      tmp = this.weekday === arg0.weekday && this.n === arg0.n;
      return tmp;
    }
    toString() {
      self = this;
      tmp = closure_1[this.weekday];
      sum = tmp;
      if (this.n) {
        num = 0;
        str = "";
        if (self.n > 0) {
          str = "+";
        }
        tmp3 = globalThis;
        _String = String;
        sum = str + String(self.n) + tmp;
      }
      return sum;
    }
    getJsWeekday() {
      num = 0;
      if (6 !== this.weekday) {
        num2 = 1;
        num = this.weekday + 1;
      }
      return num;
    }
  }
  closure_0 = t;
  closure_2 = t;
  function i(arg0) {

  }
  function o(arg0) {

  }
  function a(arg0) {

  }
  let fn = function u(arg0, arg1) {
    let tmp = arg1;
    if (undefined === arg1) {
      tmp = arg0;
    }
    let num = arg0;
    if (1 === arguments.length) {
      num = 0;
      tmp = arg0;
    }
    const items = [];
    if (num < tmp) {
      do {
        let arr = items.push(num);
        num = num + 1;
      } while (num < tmp);
    }
    return items;
  };
  function h(arg0, arg1) {

  }
  function c(arg0, arg1) {

  }
  function d(arg0, arg1) {

  }
  function l(arg0) {

  }
  function f(arg0) {

  }
  function p(arg0, arg1) {

  }
  function b(arg0, arg1, arg2, arg3, arg4, arg5) {
    let num = arg3;
    if (undefined === arg3) {
      num = 0;
    }
    let num2 = arg4;
    if (undefined === arg4) {
      num2 = 0;
    }
    let num3 = arg5;
    if (undefined === arg5) {
      num3 = 0;
    }
    return new Date(Date.UTC(arg0, arg1 - 1, arg2, num, num2, num3));
  }
  closure_16 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  c17 = 86400000;
  let date = new Date(Date.UTC(1970, 0, 1, 0, 0, 0));
  closure_19 = [6, 0, 1, 2, 3, 4, 5];
  function k(arg0) {

  }
  function E(arg0) {

  }
  function T(arg0) {

  }
  function x(arg0) {

  }
  function O(arg0) {

  }
  function D(arg0) {

  }
  function S(arg0) {

  }
  function U(arg0) {

  }
  function Y(arg0, arg1) {
    if (typeof b !== "function") {
      HermesBuiltin.throwTypeError();
    }
    date = new Date(Date.UTC(arg0, arg1 + 1 - 1, 1, 0, 0, 0));
    if (typeof U !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const items = [dependencyMap[date.getUTCDay(date)], ];
    if (typeof S !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const uTCMonth = date.getUTCMonth();
    if (1 !== uTCMonth) {
      let num4 = table[uTCMonth];
    } else {
      const uTCFullYear = date.getUTCFullYear();
      if (typeof k !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const result = uTCFullYear % 4;
      let tmp5 = result === 0;
      if (result === 0) {
        tmp5 = uTCFullYear % 100 !== 0;
      }
      if (!tmp5) {
        tmp5 = uTCFullYear % 400 === 0;
      }
      num4 = 29;
    }
    items[1] = num4;
    return items;
  }
  function L(arg0, arg1) {

  }
  function M(arg0) {

  }
  function _(arg0) {

  }
  function R(arg0) {

  }
  function N(arg0, arg1) {

  }
  function A(arg0) {

  }
  function C(arg0, arg1) {

  }
  class t {
    constructor(arg0, arg1) {
      obj = { minDate: null, maxDate: null, _result: [], total: 0, method: arg0, args: arg1 };
      if ("between" === arg0) {
        if (arg1.inc) {
          before2 = arg1.before;
        } else {
          tmp7 = globalThis;
          _Date3 = Date;
          before = arg1.before;
          num3 = 1;
          tmp8 = new.target;
          tmp9 = new.target;
          before2 = new Date(before.getTime() - 1);
        }
        obj.maxDate = before2;
        if (arg1.inc) {
          after2 = arg1.after;
        } else {
          tmp10 = globalThis;
          _Date4 = Date;
          after = arg1.after;
          num4 = 1;
          tmp11 = new.target;
          tmp12 = new.target;
          after2 = new Date(after.getTime() + 1);
        }
        obj.minDate = after2;
      } else {
        str2 = "before";
        if ("before" === arg0) {
          if (arg1.inc) {
            dt4 = arg1.dt;
          } else {
            tmp4 = globalThis;
            _Date2 = Date;
            dt3 = arg1.dt;
            num2 = 1;
            tmp5 = new.target;
            tmp6 = new.target;
            dt4 = new Date(dt3.getTime() - 1);
          }
          obj.maxDate = dt4;
        } else {
          str = "after";
          if ("after" === arg0) {
            if (arg1.inc) {
              dt2 = arg1.dt;
            } else {
              tmp = globalThis;
              _Date = Date;
              dt = arg1.dt;
              num = 1;
              tmp2 = new.target;
              tmp3 = new.target;
              dt2 = new Date(dt.getTime() + 1);
            }
            obj.minDate = dt2;
          }
        }
        return;
      }
      return;
    }
    accept(arg0) {
      self = this;
      this.total = this.total + 1;
      tmp = this.minDate && arg0 < self.minDate;
      tmp2 = self.maxDate && arg0 > self.maxDate;
      if ("between" === self.method) {
        if (tmp) {
          flag4 = true;
          return true;
        } else if (tmp2) {
          flag3 = false;
          return false;
        }
      } else {
        str = "before";
        if ("before" === self.method) {
          if (tmp2) {
            flag2 = false;
            return false;
          }
        } else {
          str2 = "after";
          if ("after" === self.method) {
            flag = tmp;
            if (!flag) {
              addResult = self.add(arg0);
              flag = false;
            }
            return flag;
          }
        }
      }
      return self.add(arg0);
    }
    add(arg0) {
      _result = this._result;
      arr = _result.push(arg0);
      return true;
    }
    getValue() {
      ({ _result, method } = this);
      if ("all" !== method) {
        str = "between";
        if ("between" !== method) {
          tmp = null;
          if (_result.length) {
            num = 1;
            tmp = _result[_result.length - 1];
          }
          return tmp;
        }
      }
      return _result;
    }
    clone() {
      ({ method, args } = this);
      obj = Object.create(e.prototype);
      tmp2 = new e(method, args);
      return obj;
    }
  }
  closure_0 = t;
  closure_36 = t;
  function j(arg0, arg1) {
    fn = Object.setPrototypeOf;
    if (!fn) {
      const _Array = Array;
      let fn2 = Object.create([]) instanceof Array;
      if (fn2) {
        fn2 = (arg0, arg1) => {
          arg0.__proto__ = arg1;
        };
      }
      fn = fn2;
    }
    if (!fn) {
      fn = (arg0, obj) => {
        for (const key10005 in arg1) {
          let tmp2 = key10005;
          let _Object = Object;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10005);
          } else {
            hasOwnPropertyResult = call(arg1, key10005);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            arg0[key10005] = arg1[key10005];
            continue;
          }
          continue;
        }
      };
    }
    return fn(arg0, arg1);
  }
  function H() {
    let tmp = Object.assign || ((arg0) => {
      for (let num = 1; num < length; num = num + 1) {
        let tmp = arguments[num];
        let tmp2 = tmp;
        let tmp3 = num;
        for (const key10012 in tmp) {
          let tmp5 = key10012;
          let _Object = Object;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10012);
          } else {
            hasOwnPropertyResult = call(tmp, key10012);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            arg0[key10012] = tmp[key10012];
            continue;
          }
          continue;
        }
      }
      return arg0;
    });
    const self = this;
    closure_38 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_0 = t;
  class e {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = e;
      call = e.call;
      if (typeof call === "unknown") {
        tmpResult = tmp(arg0, arg1);
      } else {
        callResult = call(self, arg0, arg1);
      }
      if (!callResult) {
        callResult = self;
      }
      callResult.iterator = arg2;
      return callResult;
    }
    add(arg0) {
      flag = this.iterator(arg0, this._result.length);
      if (flag) {
        _result = this._result;
        arr = _result.push(arg0);
        flag = true;
      }
      return flag;
    }
  }
  closure_0 = e;
  class n {
    constructor() {
      this.constructor = e;
      return;
    }
  }
  j(e, t);
  n.prototype = t.prototype;
  obj1 = Object.create(n.prototype);
  obj1.constructor = e;
  e.prototype = obj1;
  closure_40 = e;
  closure_41 = { dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], tokens: { SKIP: /^[ \r\n\t]+|^\.$/, number: /^[1-9][0-9]*/, numberAsText: /^(one|two|three)/i, every: /^every/i, "day(s)": /^days?/i, "weekday(s)": /^weekdays?/i, "week(s)": /^weeks?/i, "hour(s)": /^hours?/i, "minute(s)": /^minutes?/i, "month(s)": /^months?/i, "year(s)": /^years?/i, on: /^(on|in)/i, at: /^(at)/i, the: /^the/i, first: /^first/i, second: /^second/i, third: /^third/i, nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i, last: /^last/i, for: /^for/i, "time(s)": /^times?/i, until: /^(un)?til/i, monday: /^mo(n(day)?)?/i, tuesday: /^tu(e(s(day)?)?)?/i, wednesday: /^we(d(n(esday)?)?)?/i, thursday: /^th(u(r(sday)?)?)?/i, friday: /^fr(i(day)?)?/i, saturday: /^sa(t(urday)?)?/i, sunday: /^su(n(day)?)?/i, january: /^jan(uary)?/i, february: /^feb(ruary)?/i, march: /^mar(ch)?/i, april: /^apr(il)?/i, may: /^may/i, june: /^june?/i, july: /^july?/i, august: /^aug(ust)?/i, september: /^sep(t(ember)?)?/i, october: /^oct(ober)?/i, november: /^nov(ember)?/i, december: /^dec(ember)?/i, comma: /^(,\s*|(and|or)\s*)+/i } };
  function z(arg0, arg1) {

  }
  function K(arg0) {
    return arg0.toString();
  }
  function B(arg0, arg1, arg2) {
    const combined = "".concat(arg1, " ");
    const combined1 = combined.concat(arg2, ", ");
    return combined1.concat(arg0);
  }
  class t {
    constructor(arg0, arg1, arg2, arg3) {
      obj = {};
      tmp = arg1;
      if (undefined === arg1) {
        tmp = K;
      }
      tmp2 = arg2;
      if (undefined === arg2) {
        tmp2 = closure_41;
      }
      tmp3 = arg3;
      if (undefined === arg3) {
        tmp3 = B;
      }
      obj.text = [];
      if (!tmp2) {
        tmp2 = closure_41;
      }
      obj.language = tmp2;
      obj.gettext = tmp;
      obj.dateFormatter = tmp3;
      obj.rrule = arg0;
      ({ options: obj.options, origOptions: obj.origOptions } = arg0);
      if (obj.origOptions.bymonthday) {
        items = [];
        combined = items.concat(obj.options.bymonthday);
        items1 = [];
        combined1 = items1.concat(obj.options.bynmonthday);
        sorted = combined.sort((arg0, arg1) => arg0 - arg1);
        sorted1 = combined1.sort((arg0, arg1) => arg1 - arg0);
        obj.bymonthday = combined.concat(combined1);
        if (!obj.bymonthday.length) {
          tmp6 = null;
          obj.bymonthday = null;
        }
      }
      if (typeof i !== "function") {
        str14 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      if (null != obj.origOptions.byweekday) {
        tmp7 = isArray;
        byweekday = obj.origOptions.byweekday;
        if (isArray(obj.origOptions.byweekday)) {
          items2 = byweekday;
        } else {
          items2 = [];
          items2[0] = byweekday;
        }
        tmp8 = globalThis;
        _String = String;
        StringResult = String(items2);
        obj = { allWeeks: null, someWeeks: null, isWeekdays: null, isEveryDay: null };
        obj[0] = items2.filter((arg0) => !arg0.n);
        obj[1] = items2.filter((arg0) => Boolean(arg0.n));
        str = "MO";
        num = -1;
        tmp9 = -1 !== StringResult.indexOf("MO");
        if (tmp9) {
          str2 = "TU";
          tmp9 = -1 !== StringResult.indexOf("TU");
        }
        if (tmp9) {
          str3 = "WE";
          tmp9 = -1 !== StringResult.indexOf("WE");
        }
        if (tmp9) {
          str4 = "TH";
          tmp9 = -1 !== StringResult.indexOf("TH");
        }
        if (tmp9) {
          str5 = "FR";
          tmp9 = -1 !== StringResult.indexOf("FR");
        }
        if (tmp9) {
          str6 = "SA";
          tmp9 = -1 === StringResult.indexOf("SA");
        }
        if (tmp9) {
          str7 = "SU";
          tmp9 = -1 === StringResult.indexOf("SU");
        }
        obj[2] = tmp9;
        tmp10 = -1 !== StringResult.indexOf("MO");
        if (tmp10) {
          str8 = "TU";
          tmp10 = -1 !== StringResult.indexOf("TU");
        }
        if (tmp10) {
          str9 = "WE";
          tmp10 = -1 !== StringResult.indexOf("WE");
        }
        if (tmp10) {
          str10 = "TH";
          tmp10 = -1 !== StringResult.indexOf("TH");
        }
        if (tmp10) {
          str11 = "FR";
          tmp10 = -1 !== StringResult.indexOf("FR");
        }
        if (tmp10) {
          str12 = "SA";
          tmp10 = -1 !== StringResult.indexOf("SA");
        }
        if (tmp10) {
          str13 = "SU";
          tmp10 = -1 !== StringResult.indexOf("SU");
        }
        obj[3] = tmp10;
        obj.byweekday = obj;
        fn = function y(weekday, weekday2) {
          return weekday.weekday - weekday2.weekday;
        };
        allWeeks = obj.byweekday.allWeeks;
        sorted2 = allWeeks.sort(fn);
        someWeeks = obj.byweekday.someWeeks;
        sorted3 = someWeeks.sort(fn);
        if (!obj.byweekday.allWeeks.length) {
          obj.byweekday.allWeeks = null;
        }
        if (!obj.byweekday.someWeeks.length) {
          obj.byweekday.someWeeks = null;
        }
      } else {
        obj.byweekday = null;
      }
      return;
    }
    static isFullyConvertible(arg0) {
      if (arg0.options.freq in e.IMPLEMENTED) {
        if (arg0.origOptions.until) {
          if (arg0.origOptions.count) {
            flag5 = false;
            return false;
          }
        }
        num = -1;
        for (const key10014 in arg0.origOptions) {
          tmp2 = key10014;
          tmp3 = z;
          if (typeof z === "function") {
          } else {
            str = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          items = ["dtstart", "wkst", "freq"];
          if (-1 !== items.indexOf(key10014)) {
            flag3 = true;
            return true;
          } else {
            tmp = e;
            arr2 = e.IMPLEMENTED[arg0.options.freq];
            if (typeof tmp3 === "function") {
            } else {
              str2 = "Trying to call a non-function";
              throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
            }
            if (-1 !== arr2.indexOf(key10014)) {
              continue;
            } else {
              flag2 = false;
              return false;
            }
          }
        }
        flag4 = true;
        return true;
      } else {
        flag = false;
        return false;
      }
    }
    isFullyConvertible() {
      return e.isFullyConvertible(this.rrule);
    }
    toString() {
      self = this;
      gettext = this.gettext;
      if (this.options.freq in e.IMPLEMENTED) {
        str2 = "every";
        items = [];
        items[0] = gettext("every");
        self.text = items;
        tmp = closure_1_72;
        tmp2 = self[closure_1_72.FREQUENCIES[self.options.freq]]();
        if (self.options.until) {
          str7 = "until";
          addResult = self.add(gettext("until"));
          until = self.options.until;
          ({ add, dateFormatter } = self);
          uTCFullYear = until.getUTCFullYear();
          addResult1 = add(dateFormatter(uTCFullYear, self.language.monthNames[until.getUTCMonth(until)], until.getUTCDate()));
        } else if (self.options.count) {
          str3 = "for";
          addResult2 = self.add(gettext("for"));
          str4 = self.options.count;
          addResult3 = addResult2.add(str4.toString());
          if (self.plural(self.options.count)) {
            str6 = "times";
            gettextResult = gettext("times");
          } else {
            str5 = "time";
            gettextResult = gettext("time");
          }
          addResult4 = addResult3.add(gettextResult);
        }
        if (!self.isFullyConvertible()) {
          str8 = "(~ approximate)";
          addResult5 = self.add(gettext("(~ approximate)"));
        }
        text = self.text;
        str9 = "";
        return text.join("");
      } else {
        str = "RRule error: Unable to fully convert this rrule to text";
        return gettext("RRule error: Unable to fully convert this rrule to text");
      }
    }
    HOURLY() {
      self = this;
      gettext = this.gettext;
      if (1 !== this.options.interval) {
        str = self.options.interval;
        addResult = self.add(str.toString());
      }
      if (self.plural(self.options.interval)) {
        str3 = "hours";
        gettextResult = gettext("hours");
      } else {
        str2 = "hour";
        gettextResult = gettext("hour");
      }
      addResult1 = self.add(gettextResult);
      return;
    }
    MINUTELY() {
      self = this;
      gettext = this.gettext;
      if (1 !== this.options.interval) {
        str = self.options.interval;
        addResult = self.add(str.toString());
      }
      if (self.plural(self.options.interval)) {
        str3 = "minutes";
        gettextResult = gettext("minutes");
      } else {
        str2 = "minute";
        gettextResult = gettext("minute");
      }
      addResult1 = self.add(gettextResult);
      return;
    }
    DAILY() {
      self = this;
      gettext = this.gettext;
      if (1 !== this.options.interval) {
        str = self.options.interval;
        addResult = self.add(str.toString());
      }
      if (self.byweekday) {
        if (self.byweekday.isWeekdays) {
          if (self.plural(self.options.interval)) {
            str5 = "weekdays";
            gettextResult = gettext("weekdays");
          } else {
            str4 = "weekday";
            gettextResult = gettext("weekday");
          }
          addResult1 = self.add(gettextResult);
        }
      }
      if (self.plural(self.options.interval)) {
        str3 = "days";
        gettextResult1 = gettext("days");
      } else {
        str2 = "day";
        gettextResult1 = gettext("day");
      }
      addResult2 = self.add(gettextResult1);
      if (self.origOptions.bymonth) {
        str6 = "in";
        addResult3 = self.add(gettext("in"));
        _bymonthResult = self._bymonth();
      }
      if (self.bymonthday) {
        _bymonthdayResult = self._bymonthday();
      } else if (self.byweekday) {
        _byweekdayResult = self._byweekday();
      } else if (self.origOptions.byhour) {
        _byhourResult = self._byhour();
      }
      return;
    }
    WEEKLY() {
      self = this;
      gettext = this.gettext;
      if (1 === this.options.interval) {
        if (self.byweekday) {
          if (self.byweekday.isWeekdays) {
            if (1 === self.options.interval) {
              if (self.plural(self.options.interval)) {
                str11 = "weekdays";
                gettextResult = gettext("weekdays");
              } else {
                str10 = "weekday";
                gettextResult = gettext("weekday");
              }
              addResult = self.add(gettextResult);
            } else {
              str8 = "on";
              addResult1 = self.add(gettext("on"));
              str9 = "weekdays";
              addResult2 = addResult1.add(gettext("weekdays"));
            }
          }
          return;
        }
        if (self.byweekday) {
          if (self.byweekday.isEveryDay) {
            if (self.plural(self.options.interval)) {
              str7 = "days";
              gettextResult1 = gettext("days");
            } else {
              str6 = "day";
              gettextResult1 = gettext("day");
            }
            addResult3 = self.add(gettextResult1);
          }
        }
        if (1 === self.options.interval) {
          str4 = "week";
          addResult4 = self.add(gettext("week"));
        }
        if (self.origOptions.bymonth) {
          str5 = "in";
          addResult5 = self.add(gettext("in"));
          _bymonthResult = self._bymonth();
        }
        if (self.bymonthday) {
          _bymonthdayResult = self._bymonthday();
        } else if (self.byweekday) {
          _byweekdayResult = self._byweekday();
        }
      } else {
        str = self.options.interval;
        addResult6 = self.add(str.toString());
        if (self.plural(self.options.interval)) {
          str3 = "weeks";
          gettextResult2 = gettext("weeks");
        } else {
          str2 = "week";
          gettextResult2 = gettext("week");
        }
        addResult7 = addResult6.add(gettextResult2);
      }
      return;
    }
    MONTHLY() {
      self = this;
      gettext = this.gettext;
      interval = this.options.interval;
      if (this.origOptions.bymonth) {
        if (1 !== interval) {
          str4 = self.options.interval;
          addResult = self.add(str4.toString());
          str5 = "months";
          addResult1 = addResult.add(gettext("months"));
          if (self.plural(self.options.interval)) {
            str6 = "in";
            addResult2 = self.add(gettext("in"));
          }
        }
        _bymonthResult = self._bymonth();
      } else {
        if (1 !== interval) {
          str = self.options.interval;
          addResult3 = self.add(str.toString());
        }
        if (self.plural(self.options.interval)) {
          str3 = "months";
          gettextResult = gettext("months");
        } else {
          str2 = "month";
          gettextResult = gettext("month");
        }
        addResult4 = self.add(gettextResult);
      }
      if (self.bymonthday) {
        _bymonthdayResult = self._bymonthday();
      } else {
        if (self.byweekday) {
          if (self.byweekday.isWeekdays) {
            str7 = "on";
            addResult5 = self.add(gettext("on"));
            str8 = "weekdays";
            addResult6 = addResult5.add(gettext("weekdays"));
          }
        }
        if (self.byweekday) {
          _byweekdayResult = self._byweekday();
        }
      }
      return;
    }
    YEARLY() {
      self = this;
      gettext = this.gettext;
      interval = this.options.interval;
      if (this.origOptions.bymonth) {
        if (1 !== interval) {
          str4 = self.options.interval;
          addResult = self.add(str4.toString());
          str5 = "years";
          addResult1 = self.add(gettext("years"));
        }
        _bymonthResult = self._bymonth();
      } else {
        if (1 !== interval) {
          str = self.options.interval;
          addResult2 = self.add(str.toString());
        }
        if (self.plural(self.options.interval)) {
          str3 = "years";
          gettextResult = gettext("years");
        } else {
          str2 = "year";
          gettextResult = gettext("year");
        }
        addResult3 = self.add(gettextResult);
      }
      if (self.bymonthday) {
        _bymonthdayResult = self._bymonthday();
      } else if (self.byweekday) {
        _byweekdayResult = self._byweekday();
      }
      if (self.options.byyearday) {
        str6 = "on the";
        addResult4 = self.add(gettext("on the"));
        str7 = "and";
        addResult5 = addResult4.add(self.list(self.options.byyearday, self.nth, gettext("and")));
        str8 = "day";
        addResult6 = addResult5.add(gettext("day"));
      }
      if (!self.options.byweekno) {
        return;
      } else {
        str9 = "in";
        addResult7 = self.add(gettext("in"));
        add = addResult7.add;
        if (self.plural(self.options.byweekno.length)) {
          str11 = "weeks";
          gettextResult1 = gettext("weeks");
        } else {
          str10 = "week";
          gettextResult1 = gettext("week");
        }
        addResult7 = add(gettextResult1);
        add = addResult7.add;
        str12 = "and";
        addResult8 = add(self.list(self.options.byweekno, undefined, gettext("and")));
      }
      return;
    }
    _bymonthday() {
      self = this;
      gettext = this.gettext;
      if (this.byweekday) {
        if (self.byweekday.allWeeks) {
          str = "on";
          addResult = self.add(gettext("on"));
          str2 = "or";
          addResult1 = addResult.add(self.list(self.byweekday.allWeeks, self.weekdaytext, gettext("or")));
          str3 = "the";
          addResult2 = addResult1.add(gettext("the"));
          ({ list: list2, bymonthday: bymonthday2, nth: nth2 } = self);
          addResult3 = addResult2.add(list2(bymonthday2, nth2, gettext("or")));
        }
        return;
      }
      addResult4 = self.add(gettext("on the"));
      ({ list, bymonthday, nth } = self);
      addResult5 = addResult4.add(list(bymonthday, nth, gettext("and")));
      return;
    }
    _byweekday() {
      self = this;
      gettext = this.gettext;
      tmp = this.byweekday.allWeeks && !self.byweekday.isWeekdays;
      if (tmp) {
        str = "on";
        addResult = self.add(gettext("on"));
        addResult1 = addResult.add(self.list(self.byweekday.allWeeks, self.weekdaytext));
      }
      if (self.byweekday.someWeeks) {
        if (self.byweekday.allWeeks) {
          str2 = "and";
          addResult2 = self.add(gettext("and"));
        }
        str3 = "on the";
        addResult3 = self.add(gettext("on the"));
        str4 = "and";
        addResult4 = addResult3.add(self.list(self.byweekday.someWeeks, self.weekdaytext, gettext("and")));
      }
      return;
    }
    _byhour() {
      gettext = this.gettext;
      addResult = this.add(gettext("at"));
      addResult1 = addResult.add(this.list(this.origOptions.byhour, undefined, gettext("and")));
      return;
    }
    _bymonth() {
      ({ add, list } = this);
      addResult = add(list(this.options.bymonth, this.monthtext, this.gettext("and")));
      return;
    }
    nth(arg0) {
      parsed = parseInt(arg0.toString(), 10);
      gettext = this.gettext;
      if (-1 === parsed) {
        str7 = "last";
        return gettext("last");
      } else {
        _Math = Math;
        absolute = Math.abs(parsed);
        num8 = 1;
        if (1 !== absolute) {
          num = 21;
          if (21 !== absolute) {
            num2 = 31;
            if (31 !== absolute) {
              num3 = 2;
              if (2 !== absolute) {
                num4 = 22;
                if (22 !== absolute) {
                  num5 = 3;
                  if (3 !== absolute) {
                    num6 = 23;
                    if (23 !== absolute) {
                      str = "th";
                      sum = absolute + gettext("th");
                    }
                  }
                  str2 = "rd";
                  sum = absolute + gettext("rd");
                }
              }
              str3 = "nd";
              sum = absolute + gettext("nd");
            }
            num7 = 0;
            text = sum;
            if (parsed < 0) {
              str5 = "last";
              str6 = " ";
              text = `${tmp2} ${gettext("last")}`;
            }
            return text;
          }
        }
        str4 = "st";
        sum = absolute + gettext("st");
      }
      return;
    }
    monthtext(arg0) {
      return this.language.monthNames[arg0 - 1];
    }
    weekdaytext(arg0) {
      if (typeof o !== "function") {
        str3 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      if (typeof arg0 === "number") {
        num = 1;
        num2 = 7;
        result = (arg0 + 1) % 7;
      } else {
        result = arg0.getJsWeekday();
      }
      self = this;
      str = "";
      if (arg0.n) {
        str2 = " ";
        str = `${self.nth(arg0.n)} `;
      }
      return str + self.language.dayNames[result];
    }
    plural(arg0) {
      return arg0 % 100 !== 1;
    }
    add(arg0) {
      text = this.text;
      arr = text.push(" ");
      text1 = this.text;
      arr1 = text1.push(arg0);
      return this;
    }
    list(arg0, arg1, arg2, arg3) {
      fn = arg1;
      f121538 = arg1;
      str = arg3;
      self = this;
      if (undefined === arg3) {
        str = ",";
      }
      arr = arg0;
      if (!isArray(arg0)) {
        items = [];
        items[0] = arg0;
        arr = items;
      }
      if (!fn) {
        fn = (arg0) => arg0.toString();
      }
      f121538 = fn;
      mapped = arr.map(function o(arg0) {
        if (!fn) {
          return tmp;
        } else {
          const call = tmp.call;
          typeof call === "unknown" ? tmp(arg0) : call(self, arg0);
          const tmp3 = self;
        }
      });
      if (arg2) {
        num = 0;
        str3 = "";
        num2 = 1;
        str4 = " ";
        tmp2 = globalThis;
        num3 = 0;
        str5 = "";
        if (0 < mapped.length) {
          tmp3 = num3;
          tmp5 = str3;
          while (0 === num3) {
            str3 = tmp4 + mapped[num3];
            num3 = num3 + 1;
            str5 = str3;
          }
          if (num3 === mapped.length - 1) {
            _HermesInternal = HermesInternal;
            combined = str3 + ` ${arg2}` + " ";
          } else {
            combined = `${str3}${str} `;
          }
          tmp7 = combined;
        }
        joined = str5;
      } else {
        str2 = " ";
        joined = mapped.join(`${str} `);
      }
      return joined;
    }
  }
  closure_0 = t;
  closure_45 = t;
  class t {
    constructor(arg0) {
      return;
    }
    start(arg0) {
      obj = { text: arg0, done: false };
      return obj.nextSymbol();
    }
    isDone() {
      done = this.done;
      if (done) {
        tmp = null;
        done = null === this.symbol;
      }
      return done;
    }
    nextSymbol() {
      obj = { symbol: null, value: null };
      while (!obj.done) {
        tmp3 = tmp2;
        tmp4 = null;
        tmp5 = tmp2;
        tmp6 = null;
        keys = Object.keys();
        if (keys !== undefined) {
          tmp8 = tmp3;
          tmp9 = tmp4;
          tmp5 = tmp3;
          tmp6 = tmp4;
          tmp10 = keys[tmp];
          while (tmp10 !== undefined) {
            tmp13 = tmp10;
            obj2 = obj.rules[tmp10];
            match = obj2.exec(obj.text);
            tmp12 = match;
            if (match) {
              tmp11 = null === tmp4 || match[0].length > tmp4[0].length;
              tmp12 = tmp11;
            }
            if (!tmp12) {
              continue;
            } else {
              tmp3 = tmp10;
              tmp4 = match;
              continue;
            }
            continue;
          }
        }
        if (null != tmp6) {
          str = obj.text;
          obj.text = str.substr(tmp6[0].length);
          if ("" === obj.text) {
            obj.done = true;
          }
        }
        if (null == tmp6) {
          obj.done = true;
          obj.symbol = null;
          obj.value = null;
          return;
        } else {
          tmp2 = tmp5;
          if ("SKIP" === tmp5) {
            continue;
          } else {
            obj.symbol = tmp5;
            obj.value = tmp6;
            return true;
          }
        }
      }
      return false;
    }
    accept(arg0) {
      self = this;
      if (this.symbol === arg0) {
        if (self.value) {
          nextSymbolResult = self.nextSymbol();
          return self.value;
        } else {
          nextSymbolResult1 = self.nextSymbol();
          flag2 = true;
          return true;
        }
      } else {
        flag = false;
        return false;
      }
    }
    acceptNumber() {
      return this.accept("number");
    }
    expect(arg0) {
      if (this.accept(arg0)) {
        flag = true;
        return true;
      } else {
        tmp = globalThis;
        _Error = Error;
        str = "expected ";
        str2 = " but found ";
        tmp2 = new.target;
        tmp3 = new.target;
        error = new Error("expected " + arg0 + " but found " + this.symbol);
        tmp5 = error;
        throw error;
      }
    }
  }
  closure_46 = t;
  let obj3 = { YEARLY: 0 };
  obj3[0] = "YEARLY";
  obj3.MONTHLY = 1;
  obj3[1] = "MONTHLY";
  obj3.WEEKLY = 2;
  obj3[2] = "WEEKLY";
  obj3.DAILY = 3;
  obj3[3] = "DAILY";
  obj3.HOURLY = 4;
  obj3[4] = "HOURLY";
  obj3.MINUTELY = 5;
  obj3[5] = "MINUTELY";
  obj3.SECONDLY = 6;
  obj3[6] = "SECONDLY";
  let items = ["count", "until", "interval", "byweekday", "bymonthday", "bymonth"];
  t.IMPLEMENTED = [];
  t.IMPLEMENTED[obj3.HOURLY] = items;
  t.IMPLEMENTED[obj3.MINUTELY] = items;
  let items1 = ["byhour"];
  t.IMPLEMENTED[obj3.DAILY] = items1.concat(items);
  t.IMPLEMENTED[obj3.WEEKLY] = items;
  t.IMPLEMENTED[obj3.MONTHLY] = items;
  let items2 = ["byweekno", "byyearday"];
  t.IMPLEMENTED[obj3.YEARLY] = items2.concat(items);
  const isFullyConvertible = t.isFullyConvertible;
  class t {
    constructor(arg0, arg1, arg2, arg3) {
      obj = { hour: arg0, minute: arg1, second: arg2 };
      num = arg3;
      if (!arg3) {
        num = 0;
      }
      obj.millisecond = num;
      return;
    }
    getHours() {
      return this.hour;
    }
    getMinutes() {
      return this.minute;
    }
    getSeconds() {
      return this.second;
    }
    getMilliseconds() {
      return this.millisecond;
    }
    getTime() {
      return 1000 * (60 * this.hour * 60 + 60 * this.minute + this.second) + this.millisecond;
    }
  }
  closure_49 = t;
  closure_0 = t;
  class e {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      obj = this;
      num = arg6;
      tmp = e;
      call = e.call;
      if (typeof call === "unknown") {
        obj = {};
        obj.hour = arg3;
        obj.minute = arg4;
        obj.second = arg5;
        if (!num) {
          num = 0;
        }
        obj.millisecond = num;
      } else {
        tmp3 = tmp;
        tmp4 = obj;
        tmp5 = arg3;
        tmp6 = arg4;
        tmp7 = arg5;
        tmp8 = num;
        callResult = call(obj, arg3, arg4, arg5, num);
      }
      if (!callResult) {
        callResult = obj;
      }
      callResult.year = arg0;
      callResult.month = arg1;
      callResult.day = arg2;
      return callResult;
    }
    static fromDate(arg0) {
      uTCFullYear = arg0.getUTCFullYear();
      sum = arg0.getUTCMonth() + 1;
      uTCDate = arg0.getUTCDate();
      uTCHours = arg0.getUTCHours();
      uTCMinutes = arg0.getUTCMinutes();
      uTCSeconds = arg0.getUTCSeconds();
      tmp7 = new this(uTCFullYear, sum, uTCDate, uTCHours, uTCMinutes, uTCSeconds, arg0.valueOf() % 1000);
      return tmp7;
    }
    getWeekday() {
      date = new Date(this.getTime());
      if (typeof U !== "function") {
        str = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      return closure_19[date.getUTCDay(date)];
    }
    getTime() {
      date = new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
      return date.getTime();
    }
    getDay() {
      return this.day;
    }
    getMonth() {
      return this.month;
    }
    getYear() {
      return this.year;
    }
    addYears(arg0) {
      this.year = this.year + arg0;
      return;
    }
    addMonths(arg0) {
      self = this;
      this.month = this.month + arg0;
      if (this.month > 12) {
        tmp3 = globalThis;
        _Math = Math;
        tmp5 = c;
        rounded = Math.floor(self.month / 12);
        if (typeof c !== "function") {
          str = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        result = self.month % 12;
        num = 0;
        sum = result;
        if (result * 12 < 0) {
          sum = result + 12;
        }
        self.month = sum;
        self.year = self.year + rounded;
        if (0 === self.month) {
          self.month = 12;
          self.year = self.year - 1;
        }
      }
      return;
    }
    addWeekly(arg0, arg1) {
      self = this;
      if (arg1 > this.getWeekday()) {
        num2 = 1;
        num3 = 6;
        num4 = 7;
        self.day = self.day + (-self.getWeekday() + 1 + (6 - arg1) + 7 * arg0);
      } else {
        num = 7;
        self.day = self.day + (-self.getWeekday() - arg1 + 7 * arg0);
      }
      fixDayResult = self.fixDay();
      return;
    }
    addDaily(arg0) {
      this.day = this.day + arg0;
      fixDayResult = this.fixDay();
      return;
    }
    addHours(arg0, arg1, arg2) {
      self = this;
      if (arg1) {
        _Math = Math;
        num = 23;
        self.hour = self.hour + Math.floor((23 - self.hour) / arg0) * arg0;
      }
      while (true) {
        self.hour = self.hour + arg0;
        tmp = d;
        hour = self.hour;
        if (typeof d !== "function") {
          str = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        _Math2 = Math;
        rounded = Math.floor(hour / 24);
        tmp3 = c;
        if (typeof c !== "function") {
          str2 = "Trying to call a non-function";
          throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
        }
        result = hour % 24;
        sum = result;
        if (result * 24 < 0) {
          sum = result + 24;
        }
        if (rounded) {
          self.hour = sum;
          addDailyResult = self.addDaily(rounded);
        }
        tmp7 = l;
        if (typeof l !== "function") {
          str3 = "Trying to call a non-function";
          throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
        }
        tmp8 = i;
        if (typeof i !== "function") {
          str4 = "Trying to call a non-function";
          throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
        }
        tmp9 = null != arg2;
        tmp10 = !tmp9;
        if (tmp9) {
          tmp10 = 0 === arg2.length;
        }
        if (tmp10) {
          break;
        } else {
          tmp11 = p;
          if (typeof p !== "function") {
            str5 = "Trying to call a non-function";
            throwTypeErrorResult4 = HermesBuiltin.throwTypeError();
          }
          tmp12 = f;
          if (typeof f !== "function") {
            str6 = "Trying to call a non-function";
            throwTypeErrorResult5 = HermesBuiltin.throwTypeError();
          }
          if (typeof tmp7 !== "function") {
            str7 = "Trying to call a non-function";
            throwTypeErrorResult6 = HermesBuiltin.throwTypeError();
          }
          if (typeof tmp8 !== "function") {
            str8 = "Trying to call a non-function";
            throwTypeErrorResult7 = HermesBuiltin.throwTypeError();
          }
          tmp13 = null != arg2;
          tmp14 = !tmp13;
          if (tmp13) {
            tmp14 = 0 === arg2.length;
          }
          tmp15 = !tmp14 && -1 !== arg2.indexOf(self.hour);
          if (tmp15) {
            break;
          }
        }
      }
      return;
    }
    addMinutes(arg0, arg1, arg2, arg3) {
      self = this;
      if (arg1) {
        _Math = Math;
        num = 1439;
        self.minute = self.minute + Math.floor((1439 - (60 * self.hour + self.minute)) / arg0) * arg0;
      }
      while (true) {
        self.minute = self.minute + arg0;
        tmp = d;
        minute = self.minute;
        if (typeof d !== "function") {
          str = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        _Math2 = Math;
        rounded = Math.floor(minute / 60);
        tmp3 = c;
        if (typeof c !== "function") {
          str2 = "Trying to call a non-function";
          throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
        }
        result = minute % 60;
        sum = result;
        if (result * 60 < 0) {
          sum = result + 60;
        }
        if (rounded) {
          self.minute = sum;
          addHoursResult = self.addHours(rounded, false, arg2);
        }
        tmp7 = l;
        if (typeof l !== "function") {
          str3 = "Trying to call a non-function";
          throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
        }
        tmp8 = i;
        if (typeof i !== "function") {
          str4 = "Trying to call a non-function";
          throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
        }
        tmp9 = null != arg2;
        tmp10 = !tmp9;
        if (tmp9) {
          tmp10 = 0 === arg2.length;
        }
        if (tmp10) {
          if (typeof tmp7 !== "function") {
            str9 = "Trying to call a non-function";
            throwTypeErrorResult4 = HermesBuiltin.throwTypeError();
          }
          if (typeof tmp8 !== "function") {
            str10 = "Trying to call a non-function";
            throwTypeErrorResult5 = HermesBuiltin.throwTypeError();
          }
          tmp16 = null != arg3;
          tmp17 = !tmp16;
          if (tmp16) {
            tmp17 = 0 === arg3.length;
          }
          if (tmp17) {
            break;
          } else {
            tmp18 = p;
            if (typeof p !== "function") {
              str11 = "Trying to call a non-function";
              throwTypeErrorResult6 = HermesBuiltin.throwTypeError();
            }
            tmp19 = f;
            if (typeof f !== "function") {
              str12 = "Trying to call a non-function";
              throwTypeErrorResult7 = HermesBuiltin.throwTypeError();
            }
            if (typeof tmp7 !== "function") {
              str13 = "Trying to call a non-function";
              throwTypeErrorResult8 = HermesBuiltin.throwTypeError();
            }
            if (typeof tmp8 !== "function") {
              str14 = "Trying to call a non-function";
              throwTypeErrorResult9 = HermesBuiltin.throwTypeError();
            }
            tmp20 = null != arg3;
            tmp21 = !tmp20;
            if (tmp20) {
              tmp21 = 0 === arg3.length;
            }
            tmp22 = !tmp21 && -1 !== arg3.indexOf(self.minute);
            if (tmp22) {
              break;
            }
          }
        } else {
          tmp11 = p;
          if (typeof p !== "function") {
            str5 = "Trying to call a non-function";
            throwTypeErrorResult10 = HermesBuiltin.throwTypeError();
          }
          tmp12 = f;
          if (typeof f !== "function") {
            str6 = "Trying to call a non-function";
            throwTypeErrorResult11 = HermesBuiltin.throwTypeError();
          }
          if (typeof tmp7 !== "function") {
            str7 = "Trying to call a non-function";
            throwTypeErrorResult12 = HermesBuiltin.throwTypeError();
          }
          if (typeof tmp8 !== "function") {
            str8 = "Trying to call a non-function";
            throwTypeErrorResult13 = HermesBuiltin.throwTypeError();
          }
          tmp13 = null != arg2;
          tmp14 = !tmp13;
          if (tmp13) {
            tmp14 = 0 === arg2.length;
          }
          tmp15 = !tmp14 && -1 !== arg2.indexOf(self.hour);
        }
        continue;
      }
      return;
    }
    addSeconds(arg0, arg1, arg2, arg3, arg4) {
      self = this;
      if (arg1) {
        _Math = Math;
        num = 3600;
        num2 = 86399;
        self.second = self.second + Math.floor((86399 - (3600 * self.hour + 60 * self.minute + self.second)) / arg0) * arg0;
      }
      while (true) {
        self.second = self.second + arg0;
        tmp = d;
        second = self.second;
        if (typeof d !== "function") {
          str = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        _Math2 = Math;
        rounded = Math.floor(second / 60);
        tmp3 = c;
        if (typeof c !== "function") {
          str2 = "Trying to call a non-function";
          throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
        }
        result = second % 60;
        sum = result;
        if (result * 60 < 0) {
          sum = result + 60;
        }
        if (rounded) {
          self.second = sum;
          tmp6 = self;
          tmp7 = rounded;
          flag = false;
          tmp8 = arg2;
          tmp9 = arg3;
          addMinutesResult = self.addMinutes(rounded, false, arg2, arg3);
        }
        tmp11 = l;
        if (typeof l !== "function") {
          str3 = "Trying to call a non-function";
          throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
        }
        tmp12 = i;
        if (typeof i !== "function") {
          str4 = "Trying to call a non-function";
          throwTypeErrorResult3 = HermesBuiltin.throwTypeError();
        }
        tmp13 = null != arg2;
        tmp14 = !tmp13;
        if (tmp13) {
          tmp14 = 0 === arg2.length;
        }
        if (tmp14) {
          if (typeof tmp11 !== "function") {
            str9 = "Trying to call a non-function";
            throwTypeErrorResult4 = HermesBuiltin.throwTypeError();
          }
          if (typeof tmp12 !== "function") {
            str10 = "Trying to call a non-function";
            throwTypeErrorResult5 = HermesBuiltin.throwTypeError();
          }
          tmp20 = null != arg3;
          tmp21 = !tmp20;
          if (tmp20) {
            tmp21 = 0 === arg3.length;
          }
          if (tmp21) {
            if (typeof tmp11 !== "function") {
              str15 = "Trying to call a non-function";
              throwTypeErrorResult6 = HermesBuiltin.throwTypeError();
            }
            if (typeof tmp12 !== "function") {
              str16 = "Trying to call a non-function";
              throwTypeErrorResult7 = HermesBuiltin.throwTypeError();
            }
            tmp27 = null != arg4;
            tmp28 = !tmp27;
            if (tmp27) {
              tmp28 = 0 === arg4.length;
            }
            if (tmp28) {
              break;
            } else {
              tmp29 = p;
              if (typeof p !== "function") {
                str17 = "Trying to call a non-function";
                throwTypeErrorResult8 = HermesBuiltin.throwTypeError();
              }
              tmp30 = f;
              if (typeof f !== "function") {
                str18 = "Trying to call a non-function";
                throwTypeErrorResult9 = HermesBuiltin.throwTypeError();
              }
              if (typeof tmp11 !== "function") {
                str19 = "Trying to call a non-function";
                throwTypeErrorResult10 = HermesBuiltin.throwTypeError();
              }
              if (typeof tmp12 !== "function") {
                str20 = "Trying to call a non-function";
                throwTypeErrorResult11 = HermesBuiltin.throwTypeError();
              }
              tmp31 = null != arg4;
              tmp32 = !tmp31;
              if (tmp31) {
                tmp32 = 0 === arg4.length;
              }
              tmp33 = !tmp32 && -1 !== arg4.indexOf(self.second);
              if (tmp33) {
                break;
              }
            }
          } else {
            tmp22 = p;
            if (typeof p !== "function") {
              str11 = "Trying to call a non-function";
              throwTypeErrorResult12 = HermesBuiltin.throwTypeError();
            }
            tmp23 = f;
            if (typeof f !== "function") {
              str12 = "Trying to call a non-function";
              throwTypeErrorResult13 = HermesBuiltin.throwTypeError();
            }
            if (typeof tmp11 !== "function") {
              str13 = "Trying to call a non-function";
              throwTypeErrorResult14 = HermesBuiltin.throwTypeError();
            }
            if (typeof tmp12 !== "function") {
              str14 = "Trying to call a non-function";
              throwTypeErrorResult15 = HermesBuiltin.throwTypeError();
            }
            tmp24 = null != arg3;
            tmp25 = !tmp24;
            if (tmp24) {
              tmp25 = 0 === arg3.length;
            }
            tmp26 = !tmp25 && -1 !== arg3.indexOf(self.minute);
          }
          continue;
        } else {
          tmp15 = p;
          if (typeof p !== "function") {
            str5 = "Trying to call a non-function";
            throwTypeErrorResult16 = HermesBuiltin.throwTypeError();
          }
          tmp16 = f;
          if (typeof f !== "function") {
            str6 = "Trying to call a non-function";
            throwTypeErrorResult17 = HermesBuiltin.throwTypeError();
          }
          if (typeof tmp11 !== "function") {
            str7 = "Trying to call a non-function";
            throwTypeErrorResult18 = HermesBuiltin.throwTypeError();
          }
          if (typeof tmp12 !== "function") {
            str8 = "Trying to call a non-function";
            throwTypeErrorResult19 = HermesBuiltin.throwTypeError();
          }
          tmp17 = null != arg2;
          tmp18 = !tmp17;
          if (tmp17) {
            tmp18 = 0 === arg2.length;
          }
          tmp19 = !tmp18 && -1 !== arg2.indexOf(self.hour);
        }
        continue;
      }
      return;
    }
    fixDay() {
      self = this;
      if (this.day > 28) {
        tmp3 = Y;
        num = 1;
        num2 = 0;
        tmp2 = Y(self.year, self.month - 1)[1];
        if (self.day > tmp2) {
          num3 = 9999;
          num4 = 13;
          if (self.day > tmp2) {
            while (true) {
              self.day = self.day - tmp2;
              self.month = self.month + 1;
              if (13 === self.month) {
                self.month = 1;
                self.year = self.year + 1;
                if (self.year > 9999) {
                  break;
                }
              }
              tmp = Y;
              tmp2 = Y(self.year, self.month - 1)[1];
            }
            return;
          }
        }
      }
      return;
    }
    add(arg0, arg1) {
      self = this;
      ({ freq, interval, byhour, byminute, bysecond } = arg0);
      tmp2 = closure_39;
      if (closure_39.YEARLY === freq) {
        return self.addYears(interval);
      } else if (tmp2.MONTHLY === freq) {
        return self.addMonths(interval);
      } else if (tmp2.WEEKLY === freq) {
        return self.addWeekly(interval, tmp);
      } else if (tmp2.DAILY === freq) {
        return self.addDaily(interval);
      } else {
        tmp3 = arg1;
        if (tmp2.HOURLY === freq) {
          return self.addHours(interval, arg1, byhour);
        } else if (tmp2.MINUTELY === freq) {
          tmp10 = self;
          tmp11 = interval;
          tmp12 = arg1;
          tmp13 = byhour;
          tmp14 = byminute;
          return self.addMinutes(interval, arg1, byhour, byminute);
        } else if (tmp2.SECONDLY === freq) {
          tmp4 = self;
          tmp5 = interval;
          tmp6 = arg1;
          tmp7 = byhour;
          tmp8 = byminute;
          tmp9 = bysecond;
          return self.addSeconds(interval, arg1, byhour, byminute, bysecond);
        } else {
          return;
        }
      }
    }
  }
  closure_0 = e;
  class n {
    constructor() {
      this.constructor = e;
      return;
    }
  }
  j(e, t);
  n.prototype = t.prototype;
  const obj4 = Object.create(n.prototype);
  obj4.constructor = e;
  e.prototype = obj4;
  closure_50 = e;
  class t {
    constructor(arg0, arg1) {
      obj = {};
      if (isNaN(arg0.getTime())) {
        _RangeError = RangeError;
        tmp2 = new.target;
        str = "Invalid date passed to DateWithZone";
        tmp3 = new.target;
        rangeError = new RangeError("Invalid date passed to DateWithZone");
        tmp5 = rangeError;
        throw rangeError;
      } else {
        tmp = arg1;
        obj.date = arg0;
        obj.tzid = arg1;
        return;
      }
    }
    toString() {
      self = this;
      date = this.date;
      time = date.getTime();
      flag = this.isUTC;
      if (typeof N !== "function") {
        str4 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      if (undefined === flag) {
        flag = true;
      }
      date = new Date(time);
      str = date.getUTCFullYear();
      items = [, , , , , , , ];
      items[0] = y(str.toString(), 4, "0");
      items[1] = y(date.getUTCMonth() + 1, 2, "0");
      items[2] = y(date.getUTCDate(), 2, "0");
      items[3] = "T";
      items[4] = y(date.getUTCHours(), 2, "0");
      items[5] = y(date.getUTCMinutes(), 2, "0");
      items[6] = y(date.getUTCSeconds(), 2, "0");
      str2 = "";
      if (flag) {
        str2 = "Z";
      }
      items[7] = str2;
      joined = items.join("");
      if (self.isUTC) {
        concat2 = ":".concat;
        combined = ":".concat(joined);
      } else {
        str3 = ";TZID=";
        concat = ";TZID=".concat;
        combined1 = ";TZID=".concat(self.tzid, ":");
        combined = combined1.concat(joined);
      }
      return combined;
    }
    getTime() {
      date = this.date;
      return date.getTime();
    }
    rezonedDate() {
      date = this.date;
      if (this.isUTC) {
        date2 = date;
      } else {
        tzid = tmp.tzid;
        tmp2 = globalThis;
        _Intl = Intl;
        DateTimeFormatResult = Intl.DateTimeFormat();
        tmp3 = C;
        if (typeof C !== "function") {
          str8 = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        obj = { timeZone: null };
        obj[0] = DateTimeFormatResult.resolvedOptions().timeZone;
        str = "sv-SE";
        str2 = date.toLocaleString("sv-SE", obj);
        str3 = "T";
        str4 = " ";
        str5 = "Z";
        tmp4 = new.target;
        tmp5 = new.target;
        date = new Date(str2.replace(" ", "T") + "Z");
        tmp6 = null;
        str6 = "UTC";
        if (null != tzid) {
          str6 = tzid;
        }
        if (typeof tmp3 !== "function") {
          str9 = "Trying to call a non-function";
          throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
        }
        tmp7 = date;
        obj1 = { timeZone: null };
        obj1[0] = str6;
        str7 = date.toLocaleString("sv-SE", obj1);
        tmp8 = new.target;
        tmp9 = new.target;
        date1 = new Date(str7.replace(" ", "T") + "Z");
        tmp10 = date1;
        time = date1.getTime();
        _Date = Date;
        diff = time - date.getTime();
        tmp13 = new.target;
        tmp14 = new.target;
        date2 = new Date(date.getTime() - diff);
      }
      return date2;
    }
  }
  Object.defineProperty(t.prototype, "isUTC", {
    get() {
      const tzid = this.tzid;
      let tmp = !tzid;
      if (tzid) {
        tmp = "UTC" === this.tzid.toUpperCase();
        const str = this.tzid;
      }
      return tmp;
    },
    enumerable: false,
    configurable: true
  });
  closure_55 = t;
  class t {
    constructor() {
      return;
    }
    _cacheAdd(arg0, arg1, arg2) {
      arr = arg1;
      if (!arg1) {
        self = this;
        tmp15 = arg0;
        str = "all";
        if ("all" === arg0) {
          self.all = arr;
        } else {
          tmp16 = arg2;
          arg2._value = arr;
          arr3 = self[arg0];
          arr = arr3.push(arg2);
        }
        return;
      } else {
        date = globalThis;
        _Date = Date;
        if (arr instanceof Date) {
          tmp11 = M;
          if (typeof M !== "function") {
            str4 = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          time = arr.getTime();
          arr = new.target;
          tmp13 = new.target;
          date = new date.Date(time);
          tmp3 = date;
        } else {
          tmp2 = _;
          if (typeof _ !== "function") {
            str2 = "Trying to call a non-function";
            throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
          }
          items = [];
          num = 0;
          num2 = 1;
          tmp3 = items;
          if (0 < arr.length) {
            do {
              tmp4 = M;
              obj = arr[num];
              tmp5 = num;
              if (typeof M !== "function") {
                str3 = "Trying to call a non-function";
                throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
              }
              _Date2 = Date;
              tmp6 = new.target;
              tmp7 = new.target;
              date1 = new Date(obj.getTime());
              tmp9 = date1;
              arr1 = items.push(date1);
              num = num + 1;
              tmp3 = items;
            } while (num < arr.length);
          }
        }
        tmp14 = tmp3;
      }
      return;
    }
    _cacheGet(arg0, arg1) {
      if (arg1) {
        tmp = globalThis;
        _Object = Object;
        keys = Object.keys(arg1);
      } else {
        keys = [];
      }
      self = this;
      arr2 = this[arg0];
      if ("all" === arg0) {
        flag = self.all;
      } else {
        tmp35 = isArray;
        flag = false;
        if (isArray(arr2)) {
          num = 0;
          num2 = 1;
          tmp2 = globalThis;
          num3 = 0;
          flag = false;
          if (0 < arr2.length) {
            tmp3 = arr2[num3];
            tmp4 = num3;
            while (keys.length) {
              num4 = 0;
              flag2 = false;
              if (0 < keys.length) {
                while (true) {
                  tmp5 = keys[num4];
                  arr3 = arg1[tmp5];
                  arr4 = tmp3[tmp5];
                  closure_0 = arr4;
                  _Array = Array;
                  tmp6 = num4;
                  if (Array.isArray(arr3)) {
                    _Array2 = Array;
                    tmp10 = Array.isArray(arr4) && arr3.length === arr4.length && arr3.every((getTime) => {
                      const time = getTime.getTime();
                      return time === arr4[arg1].getTime();
                    });
                    tmp7 = tmp10;
                  } else {
                    _Date = Date;
                    if (arr3 instanceof Date) {
                      _Date2 = Date;
                      tmp8 = arr4 instanceof Date;
                      if (tmp8) {
                        time = arr3.getTime();
                        tmp8 = time === arr4.getTime();
                      }
                      tmp7 = tmp8;
                    } else {
                      tmp7 = arr3 === arr4;
                    }
                  }
                  flag2 = true;
                  if (!tmp7) {
                    break;
                  } else {
                    sum = num4 + 1;
                    num4 = sum;
                    flag2 = false;
                    if (sum >= keys.length) {
                      break;
                    }
                  }
                }
              }
              if (!flag2) {
                break;
              } else {
                sum1 = num3 + 1;
                num3 = sum1;
                flag = false;
              }
            }
            flag = tmp3._value;
          }
        }
      }
      arr5 = flag;
      if (!flag) {
        arr5 = flag;
        if (self.all) {
          tmp13 = t;
          obj = new.target;
          tmp14 = new.target;
          tmp15 = arg0;
          tmp16 = arg1;
          tmp17 = new t(arg0, arg1);
          num5 = 0;
          if (0 < self.all.length) {
            num6 = 1;
            num7 = 0;
            if (obj.accept(self.all[0])) {
              sum2 = num7 + 1;
              while (sum2 < self.all.length) {
                num7 = sum2;
                if (!obj.accept(self.all[sum2])) {
                  break;
                }
              }
            }
          }
          value = obj.getValue();
          _cacheAddResult = self._cacheAdd(arg0, value, arg1);
          arr5 = value;
        }
      }
      if (isArray(arr5)) {
        tmp26 = _;
        if (typeof _ !== "function") {
          str2 = "Trying to call a non-function";
          throwTypeErrorResult = HermesBuiltin.throwTypeError();
        }
        items = [];
        num8 = 0;
        tmp27 = globalThis;
        num9 = 1;
        date1 = items;
        if (0 < arr5.length) {
          do {
            tmp28 = M;
            obj2 = arr5[num8];
            tmp29 = num8;
            if (typeof M !== "function") {
              str3 = "Trying to call a non-function";
              throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
            }
            _Date5 = Date;
            tmp30 = new.target;
            tmp31 = new.target;
            date = new Date(obj2.getTime());
            tmp33 = date;
            arr = items.push(date);
            num8 = num8 + 1;
            date1 = items;
          } while (num8 < arr5.length);
        }
      } else {
        tmp21 = globalThis;
        _Date3 = Date;
        date1 = arr5;
        if (arr5 instanceof Date) {
          tmp23 = M;
          if (typeof M !== "function") {
            str = "Trying to call a non-function";
            throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
          }
          _Date4 = Date;
          tmp24 = new.target;
          tmp25 = new.target;
          date1 = new Date(arr5.getTime());
        }
      }
      return date1;
    }
  }
  closure_57 = t;
  let items3 = [];
  let num = 31;
  let num2 = 0;
  let num3 = 0;
  if (isArray(1)) {
    do {
      let items4 = [];
      items3[num3] = items4.concat(1);
      num3 = num3 + 1;
    } while (num3 < num);
  } else {
    do {
      items3[num2] = 1;
      num2 = num2 + 1;
    } while (num2 < num);
  }
  let fn2 = function q(fn2Result23, fnResult3, arg2) {
    let tmp;
    if (arg2) {
      let num4 = 0;
      if (0 < fnResult3.length) {
        while (true) {
          let tmp4 = !tmp3;
          let tmp5 = num4;
          let tmp6 = tmp3;
          if (!tmp3) {
            tmp4 = num4 in fnResult3;
          }
          let tmp7 = tmp3;
          if (!tmp4) {
            let tmp8 = tmp3;
            if (!tmp3) {
              break;
            } else {
              tmp6[num4] = fnResult3[num4];
              tmp7 = tmp6;
            }
          }
          num4 = num4 + 1;
          tmp3 = tmp7;
          tmp = tmp7;
        }
        const _Array = Array;
        const call = slice.call;
        typeof call === "unknown" ? slice(0, num4) : call(fnResult3, 0, num4);
      }
    }
    if (tmp) {
      return fn2Result23.concat(tmp);
    } else {
      const _Array2 = Array;
      const call2 = slice2.call;
      typeof call2 === "unknown" ? slice2() : call2(fnResult3);
    }
  };
  let items5 = [];
  let num4 = 0;
  let num5 = 0;
  if (isArray(2)) {
    do {
      let items6 = [];
      items5[num5] = items6.concat(2);
      num5 = num5 + 1;
    } while (num5 < 28);
  } else {
    do {
      items5[num4] = 2;
      num4 = num4 + 1;
    } while (num4 < 28);
  }
  const items7 = [];
  const fn2Result = fn2([], items3, true);
  let obj2 = { SKIP: /^[ \r\n\t]+|^\.$/, number: /^[1-9][0-9]*/, numberAsText: /^(one|two|three)/i, every: /^every/i, "day(s)": /^days?/i, "weekday(s)": /^weekdays?/i, "week(s)": /^weeks?/i, "hour(s)": /^hours?/i, "minute(s)": /^minutes?/i, "month(s)": /^months?/i, "year(s)": /^years?/i, on: /^(on|in)/i, at: /^(at)/i, the: /^the/i, first: /^first/i, second: /^second/i, third: /^third/i, nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i, last: /^last/i, for: /^for/i, "time(s)": /^times?/i, until: /^(un)?til/i, monday: /^mo(n(day)?)?/i, tuesday: /^tu(e(s(day)?)?)?/i, wednesday: /^we(d(n(esday)?)?)?/i, thursday: /^th(u(r(sday)?)?)?/i, friday: /^fr(i(day)?)?/i, saturday: /^sa(t(urday)?)?/i, sunday: /^su(n(day)?)?/i, january: /^jan(uary)?/i, february: /^feb(ruary)?/i, march: /^mar(ch)?/i, april: /^apr(il)?/i, may: /^may/i, june: /^june?/i, july: /^july?/i, august: /^aug(ust)?/i, september: /^sep(t(ember)?)?/i, october: /^oct(ober)?/i, november: /^nov(ember)?/i, december: /^dec(ember)?/i, comma: /^(,\s*|(and|or)\s*)+/i };
  let obj5 = {
    get() {
      const tzid = this.tzid;
      let tmp = !tzid;
      if (tzid) {
        tmp = "UTC" === this.tzid.toUpperCase();
        const str = this.tzid;
      }
      return tmp;
    },
    enumerable: false,
    configurable: true
  };
  let num6 = 0;
  let num7 = 0;
  if (isArray(3)) {
    do {
      let items8 = [];
      items7[num7] = items8.concat(3);
      num7 = num7 + 1;
    } while (num7 < num);
  } else {
    do {
      items7[num6] = 3;
      num6 = num6 + 1;
    } while (num6 < num);
  }
  const items9 = [];
  const fn2Result1 = fn2(fn2([], items3, true), items5, true);
  let num8 = 30;
  let num9 = 0;
  let num10 = 0;
  if (isArray(4)) {
    do {
      let items10 = [];
      items9[num10] = items10.concat(4);
      num10 = num10 + 1;
    } while (num10 < num8);
  } else {
    do {
      items9[num9] = 4;
      num9 = num9 + 1;
    } while (num9 < num8);
  }
  const items11 = [];
  const fn2Result2 = fn2(fn2(fn2([], items3, true), items5, true), items7, true);
  let num11 = 0;
  let num12 = 0;
  if (isArray(5)) {
    do {
      let items12 = [];
      items11[num12] = items12.concat(5);
      num12 = num12 + 1;
    } while (num12 < num);
  } else {
    do {
      items11[num11] = 5;
      num11 = num11 + 1;
    } while (num11 < num);
  }
  const items13 = [];
  const fn2Result3 = fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true);
  let num13 = 0;
  let num14 = 0;
  if (isArray(6)) {
    do {
      let items14 = [];
      items13[num14] = items14.concat(6);
      num14 = num14 + 1;
    } while (num14 < num8);
  } else {
    do {
      items13[num13] = 6;
      num13 = num13 + 1;
    } while (num13 < num8);
  }
  const items15 = [];
  const fn2Result4 = fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true);
  let num15 = 0;
  let num16 = 0;
  if (isArray(7)) {
    do {
      let items16 = [];
      items15[num16] = items16.concat(7);
      num16 = num16 + 1;
    } while (num16 < num);
  } else {
    do {
      items15[num15] = 7;
      num15 = num15 + 1;
    } while (num15 < num);
  }
  const items17 = [];
  const fn2Result5 = fn2(fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true), items13, true);
  let num17 = 0;
  let num18 = 0;
  if (isArray(8)) {
    do {
      let items18 = [];
      items17[num18] = items18.concat(8);
      num18 = num18 + 1;
    } while (num18 < num);
  } else {
    do {
      items17[num17] = 8;
      num17 = num17 + 1;
    } while (num17 < num);
  }
  const items19 = [];
  const fn2Result6 = fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true), items13, true), items15, true);
  let num19 = 0;
  let num20 = 0;
  if (isArray(9)) {
    do {
      let items20 = [];
      items19[num20] = items20.concat(9);
      num20 = num20 + 1;
    } while (num20 < num8);
  } else {
    do {
      items19[num19] = 9;
      num19 = num19 + 1;
    } while (num19 < num8);
  }
  const items21 = [];
  const fn2Result7 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true), items13, true), items15, true), items17, true);
  let num21 = 0;
  let num22 = 0;
  if (isArray(10)) {
    do {
      let items22 = [];
      items21[num22] = items22.concat(10);
      num22 = num22 + 1;
    } while (num22 < num);
  } else {
    do {
      items21[num21] = 10;
      num21 = num21 + 1;
    } while (num21 < num);
  }
  const items23 = [];
  const fn2Result8 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true), items13, true), items15, true), items17, true), items19, true);
  let num23 = 0;
  let num24 = 0;
  if (isArray(11)) {
    do {
      let items24 = [];
      items23[num24] = items24.concat(11);
      num24 = num24 + 1;
    } while (num24 < num8);
  } else {
    do {
      items23[num23] = 11;
      num23 = num23 + 1;
    } while (num23 < num8);
  }
  const items25 = [];
  const fn2Result9 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true), items13, true), items15, true), items17, true), items19, true), items21, true);
  let num25 = 0;
  let num26 = 0;
  if (isArray(12)) {
    do {
      let items26 = [];
      items25[num26] = items26.concat(12);
      num26 = num26 + 1;
    } while (num26 < num);
  } else {
    do {
      items25[num25] = 12;
      num25 = num25 + 1;
    } while (num25 < num);
  }
  const items27 = [];
  const fn2Result10 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true), items13, true), items15, true), items17, true), items19, true), items21, true), items23, true);
  let num27 = 0;
  let num28 = 0;
  if (isArray(1)) {
    do {
      let items28 = [];
      items27[num28] = items28.concat(1);
      num28 = num28 + 1;
    } while (num28 < 7);
  } else {
    do {
      items27[num27] = 1;
      num27 = num27 + 1;
    } while (num27 < 7);
  }
  closure_58 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true), items13, true), items15, true), items17, true), items19, true), items21, true), items23, true), items25, true), items27, true);
  const items29 = [];
  let num29 = 0;
  let num30 = 0;
  if (isArray(1)) {
    do {
      let items30 = [];
      items29[num30] = items30.concat(1);
      num30 = num30 + 1;
    } while (num30 < num);
  } else {
    do {
      items29[num29] = 1;
      num29 = num29 + 1;
    } while (num29 < num);
  }
  const items31 = [];
  const fn2Result11 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items3, true), items5, true), items7, true), items9, true), items11, true), items13, true), items15, true), items17, true), items19, true), items21, true), items23, true), items25, true);
  let num31 = 0;
  let num32 = 0;
  if (isArray(2)) {
    do {
      let items32 = [];
      items31[num32] = items32.concat(2);
      num32 = num32 + 1;
    } while (num32 < 29);
  } else {
    do {
      items31[num31] = 2;
      num31 = num31 + 1;
    } while (num31 < 29);
  }
  const items33 = [];
  const fn2Result12 = fn2([], items29, true);
  let num33 = 0;
  let num34 = 0;
  if (isArray(3)) {
    do {
      let items34 = [];
      items33[num34] = items34.concat(3);
      num34 = num34 + 1;
    } while (num34 < num);
  } else {
    do {
      items33[num33] = 3;
      num33 = num33 + 1;
    } while (num33 < num);
  }
  const items35 = [];
  const fn2Result13 = fn2(fn2([], items29, true), items31, true);
  let num35 = 0;
  let num36 = 0;
  if (isArray(4)) {
    do {
      let items36 = [];
      items35[num36] = items36.concat(4);
      num36 = num36 + 1;
    } while (num36 < num8);
  } else {
    do {
      items35[num35] = 4;
      num35 = num35 + 1;
    } while (num35 < num8);
  }
  const items37 = [];
  const fn2Result14 = fn2(fn2(fn2([], items29, true), items31, true), items33, true);
  let num37 = 0;
  let num38 = 0;
  if (isArray(5)) {
    do {
      let items38 = [];
      items37[num38] = items38.concat(5);
      num38 = num38 + 1;
    } while (num38 < num);
  } else {
    do {
      items37[num37] = 5;
      num37 = num37 + 1;
    } while (num37 < num);
  }
  const items39 = [];
  const fn2Result15 = fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true);
  let num39 = 0;
  let num40 = 0;
  if (isArray(6)) {
    do {
      let items40 = [];
      items39[num40] = items40.concat(6);
      num40 = num40 + 1;
    } while (num40 < num8);
  } else {
    do {
      items39[num39] = 6;
      num39 = num39 + 1;
    } while (num39 < num8);
  }
  const items41 = [];
  const fn2Result16 = fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true);
  let num41 = 0;
  let num42 = 0;
  if (isArray(7)) {
    do {
      let items42 = [];
      items41[num42] = items42.concat(7);
      num42 = num42 + 1;
    } while (num42 < num);
  } else {
    do {
      items41[num41] = 7;
      num41 = num41 + 1;
    } while (num41 < num);
  }
  const items43 = [];
  const fn2Result17 = fn2(fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true), items39, true);
  let num43 = 0;
  let num44 = 0;
  if (isArray(8)) {
    do {
      let items44 = [];
      items43[num44] = items44.concat(8);
      num44 = num44 + 1;
    } while (num44 < num);
  } else {
    do {
      items43[num43] = 8;
      num43 = num43 + 1;
    } while (num43 < num);
  }
  const items45 = [];
  const fn2Result18 = fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true), items39, true), items41, true);
  let num45 = 0;
  let num46 = 0;
  if (isArray(9)) {
    do {
      let items46 = [];
      items45[num46] = items46.concat(9);
      num46 = num46 + 1;
    } while (num46 < num8);
  } else {
    do {
      items45[num45] = 9;
      num45 = num45 + 1;
    } while (num45 < num8);
  }
  const items47 = [];
  const fn2Result19 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true), items39, true), items41, true), items43, true);
  let num47 = 0;
  let num48 = 0;
  if (isArray(10)) {
    do {
      let items48 = [];
      items47[num48] = items48.concat(10);
      num48 = num48 + 1;
    } while (num48 < num);
  } else {
    do {
      items47[num47] = 10;
      num47 = num47 + 1;
    } while (num47 < num);
  }
  const items49 = [];
  const fn2Result20 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true), items39, true), items41, true), items43, true), items45, true);
  let num49 = 0;
  let num50 = 0;
  if (isArray(11)) {
    do {
      let items50 = [];
      items49[num50] = items50.concat(11);
      num50 = num50 + 1;
    } while (num50 < num8);
  } else {
    do {
      items49[num49] = 11;
      num49 = num49 + 1;
    } while (num49 < num8);
  }
  const items51 = [];
  const fn2Result21 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true), items39, true), items41, true), items43, true), items45, true), items47, true);
  let num51 = 0;
  let num52 = 0;
  if (isArray(12)) {
    do {
      let items52 = [];
      items51[num52] = items52.concat(12);
      num52 = num52 + 1;
    } while (num52 < num);
  } else {
    do {
      items51[num51] = 12;
      num51 = num51 + 1;
    } while (num51 < num);
  }
  let fn2Result23 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true), items39, true), items41, true), items43, true), items45, true), items47, true), items49, true), items51, true);
  let items53 = [];
  let num53 = 0;
  let num54 = 0;
  if (isArray(1)) {
    do {
      let items54 = [];
      items53[num54] = items54.concat(1);
      num54 = num54 + 1;
    } while (num54 < 7);
  } else {
    do {
      items53[num53] = 1;
      num53 = num53 + 1;
    } while (num53 < 7);
  }
  closure_59 = fn2(fn2Result23, items53, true);
  const fn2Result22 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], items29, true), items31, true), items33, true), items35, true), items37, true), items39, true), items41, true), items43, true), items45, true), items47, true), items49, true);
  const fnResult = fn(1, 29);
  const fnResult2 = fn(1, num);
  const fnResult3 = fn(1, 32);
  const fnResult1 = fn(1, num8);
  closure_60 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], fnResult3, true), fn(1, num8), true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult3.slice(0, 7), true);
  const fn2Result24 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], fnResult3, true), fn(1, num8), true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult2, true), fnResult3, true);
  closure_61 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], fnResult3, true), fnResult, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult3.slice(0, 7), true);
  const fn2Result25 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], fnResult3, true), fnResult, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult3, true), fnResult2, true), fnResult3, true), fnResult2, true), fnResult3, true);
  const fnResult4 = fn(-28, 0);
  const fnResult6 = fn(-30, 0);
  const fnResult7 = fn(-31, 0);
  const fnResult5 = fn(-29, 0);
  closure_62 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], fnResult7, true), fn(-29, 0), true), fnResult7, true), fnResult6, true), fnResult7, true), fnResult6, true), fnResult7, true), fnResult7, true), fnResult6, true), fnResult7, true), fnResult6, true), fnResult7, true), fnResult7.slice(0, 7), true);
  fn2Result23 = fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2(fn2([], fnResult7, true), fnResult4, true), fnResult7, true), fnResult6, true), fnResult7, true), fnResult6, true), fnResult7, true), fnResult7, true), fnResult6, true), fnResult7, true), fnResult6, true), fnResult7, true);
  closure_63 = fn2(fn2Result23, fnResult7.slice(0, 7), true);
  closure_64 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
  closure_65 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  items53 = [];
  num8 = 55;
  num = 0;
};
if (typeof exports === "object") {
  if (typeof module === "object") {
    module.exports = fn();
  }
}
if (typeof globalThis.define === "function") {
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
if (typeof exports === "object") {
  exports.rrule = fn();
} else {
  self.rrule = fn();
}