// === Module 9768: HorizontalAutocompleteWrapper ===

// Module 9768 (HorizontalAutocompleteWrapper)
import timing from "timing" /* 5092 */;
import noop from "module_19" /* 19 */;

require = fn;
const FlatList = fn(17).FlatList;
fn(1085).AutoCompleteResultTypes;
const jsx = fn(21).jsx;
const __initData = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const __initData2 = { code: "function HorizontalAutocompleteWrapperTsx2(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HorizontalAutocompleteWrapper(onPressAutocompleteItem) {
  const cResult = channel(autocompleteSelectionStart[5]).c(21);
  ({ style, channel } = onPressAutocompleteItem);
  onPressAutocompleteItem = onPressAutocompleteItem.onPressAutocompleteItem;
  ({ text, selection } = onPressAutocompleteItem);
  if (cResult[0] === channel) {
    if (cResult[1] === selection) {
      if (cResult[2] === text) {
        let tmp4 = cResult[3];
      }
      const horizontalAutocompleteResults = channel(autocompleteSelectionStart[6]).useHorizontalAutocompleteResults(tmp4);
      ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
      const query = horizontalAutocompleteResults.query;
      if (cResult[4] === autocompleteSelectionStart) {
        if (cResult[5] === onPressAutocompleteItem) {
          if (cResult[6] === query) {
            let tmp6 = cResult[7];
          }
          closure_4 = tmp6;
          if (cResult[8] === channel.guild_id) {
            if (cResult[9] === tmp6) {
              let tmp7 = cResult[10];
            }
            let num8 = 0;
            if (results.length > 0) {
              num8 = 1;
            }
            class S {
              constructor(arg0) {
                item = onPressAutocompleteItem.item;
                type = item.type;
                tmp = c5;
                if (c5.USER === type) {
                  tmp22 = closure_1_6;
                  tmp23 = onPressAutocompleteItem;
                  tmp24 = closure_2;
                  obj1 = {};
                  tmp25 = obj1;
                  tmp26 = item;
                  merged = Object.assign(item);
                  tmp28 = item;
                  obj1.guildId = item.guild_id;
                  obj1.onPress = function onPress(arg0) {
                    return closure_4(arg0, item);
                  };
                  return closure_1_6(onPressAutocompleteItem(closure_2[7]).User, obj1);
                } else if (tmp.ROLE === type) {
                  tmp15 = closure_1_6;
                  tmp16 = onPressAutocompleteItem;
                  tmp17 = closure_2;
                  obj5 = {};
                  tmp18 = obj5;
                  tmp19 = item;
                  merged1 = Object.assign(item);
                  tmp21 = item;
                  obj5.guildId = item.guild_id;
                  obj5.onPress = function onPress(arg0) {
                    return closure_4(arg0, item);
                  };
                  return closure_1_6(onPressAutocompleteItem(closure_2[7]).Role, obj5);
                } else if (tmp.CHANNEL === type) {
                  tmp9 = closure_1_6;
                  tmp10 = onPressAutocompleteItem;
                  tmp11 = closure_2;
                  obj6 = {};
                  tmp12 = obj6;
                  tmp13 = item;
                  merged2 = Object.assign(item);
                  obj6.onPress = function onPress(arg0) {
                    return closure_4(arg0, item);
                  };
                  return closure_1_6(onPressAutocompleteItem(closure_2[7]).Channel, obj6);
                } else if (tmp.EMOJI === type) {
                  tmp3 = closure_1_6;
                  tmp4 = onPressAutocompleteItem;
                  tmp5 = closure_2;
                  obj = {};
                  tmp6 = obj;
                  tmp7 = item;
                  merged3 = Object.assign(item);
                  obj.onPress = function onPress(arg0) {
                    return closure_4(arg0, item);
                  };
                  return closure_1_6(onPressAutocompleteItem(closure_2[7]).Emoji, obj);
                } else {
                  tmp2 = null;
                  return null;
                }
              }
            }
            class H {
              constructor() {
                obj = { opacity: null };
                obj2 = closure_0(closure_2[9]);
                obj.opacity = obj2.withTiming(c5);
                return obj;
              }
            }
            let obj2 = { withTiming: channel(autocompleteSelectionStart[9]).withTiming, toValue: num8 };
            H.__closure = obj2;
            H.__workletHash = 7895652904738;
            H.__initData = __initData;
            const animatedStyle = channel(autocompleteSelectionStart[8]).useAnimatedStyle(H);
            if (cResult[11] === animatedStyle) {
              if (cResult[12] === style) {
                let tmp10 = cResult[13];
              }
              const _Symbol = Symbol;
              class S {
                constructor(arg0) {
                  item = onPressAutocompleteItem.item;
                  type = item.type;
                  tmp = c5;
                  if (c5.USER === type) {
                    tmp22 = closure_1_6;
                    tmp23 = onPressAutocompleteItem;
                    tmp24 = closure_2;
                    obj1 = {};
                    tmp25 = obj1;
                    tmp26 = item;
                    merged = Object.assign(item);
                    tmp28 = item;
                    obj1.guildId = item.guild_id;
                    obj1.onPress = function onPress(arg0) {
                      return closure_4(arg0, item);
                    };
                    return closure_1_6(onPressAutocompleteItem(closure_2[7]).User, obj1);
                  } else if (tmp.ROLE === type) {
                    tmp15 = closure_1_6;
                    tmp16 = onPressAutocompleteItem;
                    tmp17 = closure_2;
                    obj5 = {};
                    tmp18 = obj5;
                    tmp19 = item;
                    merged1 = Object.assign(item);
                    tmp21 = item;
                    obj5.guildId = item.guild_id;
                    obj5.onPress = function onPress(arg0) {
                      return closure_4(arg0, item);
                    };
                    return closure_1_6(onPressAutocompleteItem(closure_2[7]).Role, obj5);
                  } else if (tmp.CHANNEL === type) {
                    tmp9 = closure_1_6;
                    tmp10 = onPressAutocompleteItem;
                    tmp11 = closure_2;
                    obj6 = {};
                    tmp12 = obj6;
                    tmp13 = item;
                    merged2 = Object.assign(item);
                    obj6.onPress = function onPress(arg0) {
                      return closure_4(arg0, item);
                    };
                    return closure_1_6(onPressAutocompleteItem(closure_2[7]).Channel, obj6);
                  } else if (tmp.EMOJI === type) {
                    tmp3 = closure_1_6;
                    tmp4 = onPressAutocompleteItem;
                    tmp5 = closure_2;
                    obj = {};
                    tmp6 = obj;
                    tmp7 = item;
                    merged3 = Object.assign(item);
                    obj.onPress = function onPress(arg0) {
                      return closure_4(arg0, item);
                    };
                    return closure_1_6(onPressAutocompleteItem(closure_2[7]).Emoji, obj);
                  } else {
                    tmp2 = null;
                    return null;
                  }
                }
              }
              class H {
                constructor() {
                  obj = { opacity: null };
                  obj2 = closure_0(closure_2[9]);
                  obj.opacity = obj2.withTiming(c5);
                  return obj;
                }
              }
              if (cResult[15] === tmp7) {
                if (cResult[16] === results) {
                  let tmp14 = cResult[17];
                }
                if (cResult[18] === tmp10) {
                  if (cResult[19] === tmp14) {
                    let tmp18 = cResult[20];
                  }
                  return tmp18;
                }
                class S {
                  constructor(arg0) {
                    item = onPressAutocompleteItem.item;
                    type = item.type;
                    tmp = c5;
                    if (c5.USER === type) {
                      tmp22 = closure_1_6;
                      tmp23 = onPressAutocompleteItem;
                      tmp24 = closure_2;
                      obj1 = {};
                      tmp25 = obj1;
                      tmp26 = item;
                      merged = Object.assign(item);
                      tmp28 = item;
                      obj1.guildId = item.guild_id;
                      obj1.onPress = function onPress(arg0) {
                        return closure_4(arg0, item);
                      };
                      return closure_1_6(onPressAutocompleteItem(closure_2[7]).User, obj1);
                    } else if (tmp.ROLE === type) {
                      tmp15 = closure_1_6;
                      tmp16 = onPressAutocompleteItem;
                      tmp17 = closure_2;
                      obj5 = {};
                      tmp18 = obj5;
                      tmp19 = item;
                      merged1 = Object.assign(item);
                      tmp21 = item;
                      obj5.guildId = item.guild_id;
                      obj5.onPress = function onPress(arg0) {
                        return closure_4(arg0, item);
                      };
                      return closure_1_6(onPressAutocompleteItem(closure_2[7]).Role, obj5);
                    } else if (tmp.CHANNEL === type) {
                      tmp9 = closure_1_6;
                      tmp10 = onPressAutocompleteItem;
                      tmp11 = closure_2;
                      obj6 = {};
                      tmp12 = obj6;
                      tmp13 = item;
                      merged2 = Object.assign(item);
                      obj6.onPress = function onPress(arg0) {
                        return closure_4(arg0, item);
                      };
                      return closure_1_6(onPressAutocompleteItem(closure_2[7]).Channel, obj6);
                    } else if (tmp.EMOJI === type) {
                      tmp3 = closure_1_6;
                      tmp4 = onPressAutocompleteItem;
                      tmp5 = closure_2;
                      obj = {};
                      tmp6 = obj;
                      tmp7 = item;
                      merged3 = Object.assign(item);
                      obj.onPress = function onPress(arg0) {
                        return closure_4(arg0, item);
                      };
                      return closure_1_6(onPressAutocompleteItem(closure_2[7]).Emoji, obj);
                    } else {
                      tmp2 = null;
                      return null;
                    }
                  }
                }
                let obj3 = { style: null, children: null };
                class H {
                  constructor() {
                    obj = { opacity: null };
                    obj2 = closure_0(closure_2[9]);
                    obj.opacity = obj2.withTiming(c5);
                    return obj;
                  }
                }
                obj3.children = tmp14;
                const tmp20 = jsx(onPressAutocompleteItem(autocompleteSelectionStart[8]).View, { style: null, children: null });
                cResult[18] = tmp10;
                cResult[19] = tmp14;
                cResult[20] = tmp20;
                tmp18 = tmp20;
              }
              let obj4 = { keyboardShouldPersistTaps: "always", horizontal: true, keyExtractor: tmp13, data: results, renderItem: tmp7 };
              const tmp17 = <closure_4 keyboardShouldPersistTaps="always" horizontal keyExtractor={tmp13} data={results} renderItem={tmp7} />;
              cResult[15] = tmp7;
              cResult[16] = results;
              cResult[17] = tmp17;
              tmp14 = tmp17;
            }
            const items = [style, animatedStyle];
            cResult[11] = animatedStyle;
            cResult[12] = style;
            cResult[13] = items;
            tmp10 = items;
            const tmpResult2 = channel(autocompleteSelectionStart[8]);
          }
          class S {
            constructor(arg0) {
              item = onPressAutocompleteItem.item;
              type = item.type;
              tmp = c5;
              if (c5.USER === type) {
                tmp22 = closure_1_6;
                tmp23 = onPressAutocompleteItem;
                tmp24 = closure_2;
                obj1 = {};
                tmp25 = obj1;
                tmp26 = item;
                merged = Object.assign(item);
                tmp28 = item;
                obj1.guildId = item.guild_id;
                obj1.onPress = function onPress(arg0) {
                  return closure_4(arg0, item);
                };
                return closure_1_6(onPressAutocompleteItem(closure_2[7]).User, obj1);
              } else if (tmp.ROLE === type) {
                tmp15 = closure_1_6;
                tmp16 = onPressAutocompleteItem;
                tmp17 = closure_2;
                obj5 = {};
                tmp18 = obj5;
                tmp19 = item;
                merged1 = Object.assign(item);
                tmp21 = item;
                obj5.guildId = item.guild_id;
                obj5.onPress = function onPress(arg0) {
                  return closure_4(arg0, item);
                };
                return closure_1_6(onPressAutocompleteItem(closure_2[7]).Role, obj5);
              } else if (tmp.CHANNEL === type) {
                tmp9 = closure_1_6;
                tmp10 = onPressAutocompleteItem;
                tmp11 = closure_2;
                obj6 = {};
                tmp12 = obj6;
                tmp13 = item;
                merged2 = Object.assign(item);
                obj6.onPress = function onPress(arg0) {
                  return closure_4(arg0, item);
                };
                return closure_1_6(onPressAutocompleteItem(closure_2[7]).Channel, obj6);
              } else if (tmp.EMOJI === type) {
                tmp3 = closure_1_6;
                tmp4 = onPressAutocompleteItem;
                tmp5 = closure_2;
                obj = {};
                tmp6 = obj;
                tmp7 = item;
                merged3 = Object.assign(item);
                obj.onPress = function onPress(arg0) {
                  return closure_4(arg0, item);
                };
                return closure_1_6(onPressAutocompleteItem(closure_2[7]).Emoji, obj);
              } else {
                tmp2 = null;
                return null;
              }
            }
          }
          cResult[9] = tmp6;
          cResult[10] = S;
          tmp7 = S;
        }
      }
      const fn = function w(stopPropagation, arg1) {
        stopPropagation.stopPropagation();
        let num = autocompleteSelectionStart;
        if (autocompleteSelectionStart == null) {
          num = 0;
        }
        let str = query;
        if (query == null) {
          str = "";
        }
        onPressAutocompleteItem(arg1, num, str);
      };
      cResult[4] = autocompleteSelectionStart;
      cResult[5] = onPressAutocompleteItem;
      cResult[6] = query;
      cResult[7] = fn;
      tmp6 = fn;
      const tmpResult = channel(autocompleteSelectionStart[6]);
    }
  }
  const obj5 = { channel, text, selection };
  cResult[0] = channel;
  cResult[1] = selection;
  cResult[2] = text;
  cResult[3] = obj5;
  tmp4 = obj5;
  let obj = channel(autocompleteSelectionStart[5]);
}) : (function HorizontalAutocompleteWrapper(channel) {
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  ({ style, text, selection } = channel);
  const horizontalAutocompleteResults = channel(autocompleteSelectionStart[6]).useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const query = horizontalAutocompleteResults.query;
  const items = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  const callback = query.useCallback((stopPropagation, arg1) => {
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
  }, items);
  const items1 = [channel.guild_id, callback];
  let num = 0;
  const callback1 = query.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (num.USER === type) {
      const obj2 = {};
      const merged = Object.assign(item);
      obj2.guildId = item.guild_id;
      obj2.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return jsx(onPressAutocompleteItem(autocompleteSelectionStart[7]).User, {});
    } else if (num.ROLE === type) {
      const obj3 = {};
      const merged1 = Object.assign(item);
      obj3.guildId = item.guild_id;
      obj3.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return jsx(onPressAutocompleteItem(autocompleteSelectionStart[7]).Role, {});
    } else if (num.CHANNEL === type) {
      const obj4 = {};
      const merged2 = Object.assign(item);
      obj4.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return jsx(onPressAutocompleteItem(autocompleteSelectionStart[7]).Channel, {});
    } else if (num.EMOJI === type) {
      const obj = {};
      const merged3 = Object.assign(item);
      obj.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return jsx(onPressAutocompleteItem(autocompleteSelectionStart[7]).Emoji, {});
    } else {
      return null;
    }
  }, items1);
  if (results.length > 0) {
    num = 1;
  }
  let obj = channel(autocompleteSelectionStart[6]);
  const fn = function _() {
    const obj = { opacity: timing.withTiming(num) };
    return obj;
  };
  const tmpResult = channel(autocompleteSelectionStart[8]);
  fn.__closure = { withTiming: channel(autocompleteSelectionStart[9]).withTiming, toValue: num };
  fn.__workletHash = 6537603880065;
  fn.__initData = __initData2;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  let obj3 = {
    style: null,
    children: <callback keyboardShouldPersistTaps="always" horizontal keyExtractor={function keyExtractor(arg0, arg1) {
      return String(arg1);
    }} data={results} renderItem={callback1} />
  };
  const items2 = [style, animatedStyle];
  obj3.style = items2;
  return jsx(onPressAutocompleteItem(autocompleteSelectionStart[8]).View, {
    style: null,
    children: <callback keyboardShouldPersistTaps="always" horizontal keyExtractor={function keyExtractor(arg0, arg1) {
      return String(arg1);
    }} data={results} renderItem={callback1} />
  });
});