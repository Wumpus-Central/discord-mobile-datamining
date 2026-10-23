// === Module 10193: HorizontalAutocompleteWrapper ===

// Module 10193 (HorizontalAutocompleteWrapper)
import timing from "timing" /* 5204 */;
import noop from "module_19" /* 19 */;

require = fn;
function getItemKey(type) {
  type = type.type;
  if (AutoCompleteResultTypes.USER === type) {
    const _HermesInternal4 = HermesInternal;
    return "" + type.type + ":" + type.user.id;
  } else if (AutoCompleteResultTypes.ROLE === type) {
    const _HermesInternal3 = HermesInternal;
    return "" + type.type + ":" + type.id;
  } else if (AutoCompleteResultTypes.CHANNEL === type) {
    const _HermesInternal2 = HermesInternal;
    return "" + type.type + ":" + type.channel.id;
  } else if (AutoCompleteResultTypes.EMOJI === type) {
    const _HermesInternal = HermesInternal;
    return "" + type.type + ":" + type.url + ":" + type.name;
  } else {
    return type.type;
  }
}
fn(1087).AutoCompleteResultTypes;
let jsx = fn(21).jsx;
const __initData = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const __initData2 = { code: "function HorizontalAutocompleteWrapperTsx2(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HorizontalAutocompleteWrapper(onPressAutocompleteItem) {
  const cResult = channel(autocompleteSelectionStart[4]).c(25);
  ({ style, channel } = onPressAutocompleteItem);
  onPressAutocompleteItem = onPressAutocompleteItem.onPressAutocompleteItem;
  ({ text, selection } = onPressAutocompleteItem);
  if (cResult[0] === channel) {
    if (cResult[1] === selection) {
      if (cResult[2] === text) {
        let tmp4 = cResult[3];
      }
      const horizontalAutocompleteResults = channel(autocompleteSelectionStart[5]).useHorizontalAutocompleteResults(tmp4);
      ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
      const query = horizontalAutocompleteResults.query;
      let obj4 = query;
      const tmpResult = channel(autocompleteSelectionStart[5]);
      const first = results[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function f() {
          const current = ref.current;
          if (current != null) {
            current.scrollToOffset({ offset: 0, animated: false });
          }
        };
        cResult[4] = fn;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === query) {
        if (cResult[6] === type) {
          let tmp12 = cResult[7];
        }
        const effect = obj4.useEffect(tmp11, tmp12);
        if (cResult[8] === autocompleteSelectionStart) {
          if (cResult[9] === onPressAutocompleteItem) {
            if (cResult[10] === query) {
              let tmp14 = cResult[11];
            }
            jsx = tmp14;
            if (cResult[12] === channel.guild_id) {
              if (cResult[13] === tmp14) {
                let tmp15 = cResult[14];
              }
              let num12 = 0;
              if (results.length > 0) {
                num12 = 1;
              }
              class H {
                constructor(arg0) {
                  item = onPressAutocompleteItem.item;
                  type = item.type;
                  tmp = closure_4;
                  if (closure_4.USER === type) {
                    tmp22 = closure_5;
                    tmp23 = onPressAutocompleteItem;
                    tmp24 = closure_2;
                    obj1 = {};
                    tmp25 = obj1;
                    tmp26 = item;
                    merged = Object.assign(item);
                    tmp28 = item;
                    obj1.guildId = item.guild_id;
                    obj1.onPress = function onPress(arg0) {
                      return closure_5(arg0, item);
                    };
                    return closure_5(onPressAutocompleteItem(closure_2[6]).User, obj1);
                  } else if (tmp.ROLE === type) {
                    tmp15 = closure_5;
                    tmp16 = onPressAutocompleteItem;
                    tmp17 = closure_2;
                    obj5 = {};
                    tmp18 = obj5;
                    tmp19 = item;
                    merged1 = Object.assign(item);
                    tmp21 = item;
                    obj5.guildId = item.guild_id;
                    obj5.onPress = function onPress(arg0) {
                      return closure_5(arg0, item);
                    };
                    return closure_5(onPressAutocompleteItem(closure_2[6]).Role, obj5);
                  } else if (tmp.CHANNEL === type) {
                    tmp9 = closure_5;
                    tmp10 = onPressAutocompleteItem;
                    tmp11 = closure_2;
                    obj6 = {};
                    tmp12 = obj6;
                    tmp13 = item;
                    merged2 = Object.assign(item);
                    obj6.onPress = function onPress(arg0) {
                      return closure_5(arg0, item);
                    };
                    return closure_5(onPressAutocompleteItem(closure_2[6]).Channel, obj6);
                  } else if (tmp.EMOJI === type) {
                    tmp3 = closure_5;
                    tmp4 = onPressAutocompleteItem;
                    tmp5 = closure_2;
                    obj = {};
                    tmp6 = obj;
                    tmp7 = item;
                    merged3 = Object.assign(item);
                    obj.onPress = function onPress(arg0) {
                      return closure_5(arg0, item);
                    };
                    return closure_5(onPressAutocompleteItem(closure_2[6]).Emoji, obj);
                  } else {
                    tmp2 = null;
                    return null;
                  }
                }
              }
              const fn2 = function x() {
                const obj = { opacity: timing.withTiming(getItemKey) };
                return obj;
              };
              let obj2 = { withTiming: channel(autocompleteSelectionStart[8]).withTiming, toValue: num12 };
              fn2.__closure = obj2;
              fn2.__workletHash = 7895652904738;
              fn2.__initData = __initData;
              const animatedStyle = channel(autocompleteSelectionStart[7]).useAnimatedStyle(fn2);
              if (cResult[15] === animatedStyle) {
                if (cResult[16] === style) {
                  let tmp18 = cResult[17];
                }
                const _Symbol2 = Symbol;
                class H {
                  constructor(arg0) {
                    item = onPressAutocompleteItem.item;
                    type = item.type;
                    tmp = closure_4;
                    if (closure_4.USER === type) {
                      tmp22 = closure_5;
                      tmp23 = onPressAutocompleteItem;
                      tmp24 = closure_2;
                      obj1 = {};
                      tmp25 = obj1;
                      tmp26 = item;
                      merged = Object.assign(item);
                      tmp28 = item;
                      obj1.guildId = item.guild_id;
                      obj1.onPress = function onPress(arg0) {
                        return closure_5(arg0, item);
                      };
                      return closure_5(onPressAutocompleteItem(closure_2[6]).User, obj1);
                    } else if (tmp.ROLE === type) {
                      tmp15 = closure_5;
                      tmp16 = onPressAutocompleteItem;
                      tmp17 = closure_2;
                      obj5 = {};
                      tmp18 = obj5;
                      tmp19 = item;
                      merged1 = Object.assign(item);
                      tmp21 = item;
                      obj5.guildId = item.guild_id;
                      obj5.onPress = function onPress(arg0) {
                        return closure_5(arg0, item);
                      };
                      return closure_5(onPressAutocompleteItem(closure_2[6]).Role, obj5);
                    } else if (tmp.CHANNEL === type) {
                      tmp9 = closure_5;
                      tmp10 = onPressAutocompleteItem;
                      tmp11 = closure_2;
                      obj6 = {};
                      tmp12 = obj6;
                      tmp13 = item;
                      merged2 = Object.assign(item);
                      obj6.onPress = function onPress(arg0) {
                        return closure_5(arg0, item);
                      };
                      return closure_5(onPressAutocompleteItem(closure_2[6]).Channel, obj6);
                    } else if (tmp.EMOJI === type) {
                      tmp3 = closure_5;
                      tmp4 = onPressAutocompleteItem;
                      tmp5 = closure_2;
                      obj = {};
                      tmp6 = obj;
                      tmp7 = item;
                      merged3 = Object.assign(item);
                      obj.onPress = function onPress(arg0) {
                        return closure_5(arg0, item);
                      };
                      return closure_5(onPressAutocompleteItem(closure_2[6]).Emoji, obj);
                    } else {
                      tmp2 = null;
                      return null;
                    }
                  }
                }
                if (cResult[19] === tmp15) {
                  if (cResult[20] === results) {
                    let tmp21 = cResult[21];
                  }
                  if (cResult[22] === tmp18) {
                    if (cResult[23] === tmp21) {
                      let tmp25 = cResult[24];
                    }
                    return tmp25;
                  }
                  class H {
                    constructor(arg0) {
                      item = onPressAutocompleteItem.item;
                      type = item.type;
                      tmp = closure_4;
                      if (closure_4.USER === type) {
                        tmp22 = closure_5;
                        tmp23 = onPressAutocompleteItem;
                        tmp24 = closure_2;
                        obj1 = {};
                        tmp25 = obj1;
                        tmp26 = item;
                        merged = Object.assign(item);
                        tmp28 = item;
                        obj1.guildId = item.guild_id;
                        obj1.onPress = function onPress(arg0) {
                          return closure_5(arg0, item);
                        };
                        return closure_5(onPressAutocompleteItem(closure_2[6]).User, obj1);
                      } else if (tmp.ROLE === type) {
                        tmp15 = closure_5;
                        tmp16 = onPressAutocompleteItem;
                        tmp17 = closure_2;
                        obj5 = {};
                        tmp18 = obj5;
                        tmp19 = item;
                        merged1 = Object.assign(item);
                        tmp21 = item;
                        obj5.guildId = item.guild_id;
                        obj5.onPress = function onPress(arg0) {
                          return closure_5(arg0, item);
                        };
                        return closure_5(onPressAutocompleteItem(closure_2[6]).Role, obj5);
                      } else if (tmp.CHANNEL === type) {
                        tmp9 = closure_5;
                        tmp10 = onPressAutocompleteItem;
                        tmp11 = closure_2;
                        obj6 = {};
                        tmp12 = obj6;
                        tmp13 = item;
                        merged2 = Object.assign(item);
                        obj6.onPress = function onPress(arg0) {
                          return closure_5(arg0, item);
                        };
                        return closure_5(onPressAutocompleteItem(closure_2[6]).Channel, obj6);
                      } else if (tmp.EMOJI === type) {
                        tmp3 = closure_5;
                        tmp4 = onPressAutocompleteItem;
                        tmp5 = closure_2;
                        obj = {};
                        tmp6 = obj;
                        tmp7 = item;
                        merged3 = Object.assign(item);
                        obj.onPress = function onPress(arg0) {
                          return closure_5(arg0, item);
                        };
                        return closure_5(onPressAutocompleteItem(closure_2[6]).Emoji, obj);
                      } else {
                        tmp2 = null;
                        return null;
                      }
                    }
                  }
                  let obj3 = { style: tmp18, children: tmp21 };
                  const tmp27 = jsx(onPressAutocompleteItem(autocompleteSelectionStart[7]).View, { style: tmp18, children: tmp21 });
                  cResult[22] = tmp18;
                  cResult[23] = tmp21;
                  cResult[24] = tmp27;
                  tmp25 = tmp27;
                }
                const obj5 = { ref, keyboardShouldPersistTaps: "always", horizontal: true, keyExtractor: getItemKey, getItemType: tmp20, data: results, renderItem: tmp15 };
                const tmp24 = jsx(channel(autocompleteSelectionStart[9]).FlashList, { ref, keyboardShouldPersistTaps: "always", horizontal: true, keyExtractor: getItemKey, getItemType: tmp20, data: results, renderItem: tmp15 });
                cResult[19] = tmp15;
                cResult[20] = results;
                cResult[21] = tmp24;
                tmp21 = tmp24;
              }
              const items = [style, animatedStyle];
              cResult[15] = animatedStyle;
              cResult[16] = style;
              cResult[17] = items;
              tmp18 = items;
              const tmpResult2 = channel(autocompleteSelectionStart[7]);
            }
            class H {
              constructor(arg0) {
                item = onPressAutocompleteItem.item;
                type = item.type;
                tmp = closure_4;
                if (closure_4.USER === type) {
                  tmp22 = closure_5;
                  tmp23 = onPressAutocompleteItem;
                  tmp24 = closure_2;
                  obj1 = {};
                  tmp25 = obj1;
                  tmp26 = item;
                  merged = Object.assign(item);
                  tmp28 = item;
                  obj1.guildId = item.guild_id;
                  obj1.onPress = function onPress(arg0) {
                    return closure_5(arg0, item);
                  };
                  return closure_5(onPressAutocompleteItem(closure_2[6]).User, obj1);
                } else if (tmp.ROLE === type) {
                  tmp15 = closure_5;
                  tmp16 = onPressAutocompleteItem;
                  tmp17 = closure_2;
                  obj5 = {};
                  tmp18 = obj5;
                  tmp19 = item;
                  merged1 = Object.assign(item);
                  tmp21 = item;
                  obj5.guildId = item.guild_id;
                  obj5.onPress = function onPress(arg0) {
                    return closure_5(arg0, item);
                  };
                  return closure_5(onPressAutocompleteItem(closure_2[6]).Role, obj5);
                } else if (tmp.CHANNEL === type) {
                  tmp9 = closure_5;
                  tmp10 = onPressAutocompleteItem;
                  tmp11 = closure_2;
                  obj6 = {};
                  tmp12 = obj6;
                  tmp13 = item;
                  merged2 = Object.assign(item);
                  obj6.onPress = function onPress(arg0) {
                    return closure_5(arg0, item);
                  };
                  return closure_5(onPressAutocompleteItem(closure_2[6]).Channel, obj6);
                } else if (tmp.EMOJI === type) {
                  tmp3 = closure_5;
                  tmp4 = onPressAutocompleteItem;
                  tmp5 = closure_2;
                  obj = {};
                  tmp6 = obj;
                  tmp7 = item;
                  merged3 = Object.assign(item);
                  obj.onPress = function onPress(arg0) {
                    return closure_5(arg0, item);
                  };
                  return closure_5(onPressAutocompleteItem(closure_2[6]).Emoji, obj);
                } else {
                  tmp2 = null;
                  return null;
                }
              }
            }
            cResult[12] = channel.guild_id;
            cResult[13] = tmp14;
            cResult[14] = H;
            tmp15 = H;
          }
        }
        class E {
          constructor(arg0, arg1) {
            stopPropagationResult = onPressAutocompleteItem.stopPropagation();
            num = closure_2;
            tmp2 = onPressAutocompleteItem;
            if (closure_2 == null) {
              num = 0;
            }
            str = query;
            if (query == null) {
              str = "";
            }
            tmp2Result = tmp2(arg1, num, str);
            return;
          }
        }
        cResult[8] = autocompleteSelectionStart;
        cResult[9] = onPressAutocompleteItem;
        cResult[10] = query;
        cResult[11] = E;
        tmp14 = E;
      }
      const items1 = [query, type];
      cResult[5] = query;
      cResult[6] = type;
      cResult[7] = items1;
      tmp12 = items1;
      ref = query.useRef(null);
    }
  }
  const obj6 = { channel, text, selection };
  cResult[0] = channel;
  cResult[1] = selection;
  cResult[2] = text;
  cResult[3] = obj6;
  tmp4 = obj6;
  let obj = channel(autocompleteSelectionStart[4]);
}) : (function HorizontalAutocompleteWrapper(channel) {
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let callback;
  let num;
  ({ style, text, selection } = channel);
  const horizontalAutocompleteResults = channel(autocompleteSelectionStart[5]).useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const query = horizontalAutocompleteResults.query;
  const ref = query.useRef(null);
  const first = results[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const items = [query, type];
  const effect = obj2.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  const items1 = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  callback = obj2.useCallback((stopPropagation, arg1) => {
    stopPropagation.stopPropagation();
    num = autocompleteSelectionStart;
    if (autocompleteSelectionStart == null) {
      num = 0;
    }
    let str = query;
    if (query == null) {
      str = "";
    }
    onPressAutocompleteItem(arg1, num, str);
  }, items1);
  const items2 = [channel.guild_id, callback];
  num = 0;
  const callback1 = obj2.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (ref.USER === type) {
      const obj2 = {};
      const merged = Object.assign(item);
      obj2.guildId = item.guild_id;
      obj2.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[6]).User, obj2);
    } else if (ref.ROLE === type) {
      const obj3 = {};
      const merged1 = Object.assign(item);
      obj3.guildId = item.guild_id;
      obj3.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[6]).Role, obj3);
    } else if (ref.CHANNEL === type) {
      const obj4 = {};
      const merged2 = Object.assign(item);
      obj4.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[6]).Channel, obj4);
    } else if (ref.EMOJI === type) {
      const obj = {};
      const merged3 = Object.assign(item);
      obj.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[6]).Emoji, obj);
    } else {
      return null;
    }
  }, items2);
  if (results.length > 0) {
    num = 1;
  }
  let obj = channel(autocompleteSelectionStart[5]);
  class T {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[8]);
      obj.opacity = obj2.withTiming(c6);
      return obj;
    }
  }
  const tmpResult = channel(autocompleteSelectionStart[7]);
  T.__closure = { withTiming: channel(autocompleteSelectionStart[8]).withTiming, toValue: num };
  T.__workletHash = 6537603880065;
  T.__initData = __initData2;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  let obj4 = {
    style: null,
    children: callback(channel(autocompleteSelectionStart[9]).FlashList, {
      ref,
      keyboardShouldPersistTaps: "always",
      horizontal: true,
      keyExtractor: num,
      getItemType(type) {
        return type.type;
      },
      data: results,
      renderItem: callback1
    })
  };
  const items3 = [style, animatedStyle];
  obj4.style = items3;
  return callback(onPressAutocompleteItem(autocompleteSelectionStart[7]).View, obj4);
});