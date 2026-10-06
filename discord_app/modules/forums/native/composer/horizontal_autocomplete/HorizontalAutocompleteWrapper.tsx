// === Module 10163: HorizontalAutocompleteWrapper ===

// Module 10163 (HorizontalAutocompleteWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import timing from "timing" /* 4897 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FlatList = react_native.FlatList;
Constants.AutoCompleteResultTypes;
const jsx = Fragment.jsx;
const __initData = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const __initData2 = { code: "function HorizontalAutocompleteWrapperTsx2(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPressAutocompleteItem) => {
  let autocompleteSelectionStart;
  let channel;
  let results;
  let selection;
  let style;
  let text;
  let obj = channel(autocompleteSelectionStart[5]);
  const cResult = obj.c(21);
  ({ style, channel } = onPressAutocompleteItem);
  onPressAutocompleteItem = onPressAutocompleteItem.onPressAutocompleteItem;
  ({ text, selection } = onPressAutocompleteItem);
  if (cResult[0] === channel) {
    if (cResult[1] === selection) {
      let tmp4;
      if (cResult[2] === text) {
        tmp4 = cResult[3];
      }
      const tmpResult = channel(autocompleteSelectionStart[6]);
      const horizontalAutocompleteResults = tmpResult.useHorizontalAutocompleteResults(tmp4);
      ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
      const query = horizontalAutocompleteResults.query;
      if (cResult[4] === autocompleteSelectionStart) {
        if (cResult[5] === onPressAutocompleteItem) {
          let tmp6;
          if (cResult[6] === query) {
            tmp6 = cResult[7];
          }
          let closure_4 = tmp6;
          if (cResult[8] === channel.guild_id) {
            let tmp7;
            if (cResult[9] === tmp6) {
              tmp7 = cResult[10];
            }
            let num8 = 0;
            if (results.length > 0) {
              num8 = 1;
            }
            const tmpResult2 = channel(autocompleteSelectionStart[8]);
            class I {
              constructor() {
                let obj2;
                const obj = { opacity: obj2.withTiming(num8) };
                obj2 = timing;
                return obj;
              }
            }
            let obj2 = { withTiming: channel(autocompleteSelectionStart[9]).withTiming, toValue: num8 };
            const useAnimatedStyle = tmpResult2.useAnimatedStyle;
            I.__closure = obj2;
            I.__workletHash = 7895652904738;
            I.__initData = __initData;
            const animatedStyle = useAnimatedStyle(I);
            if (cResult[11] === animatedStyle) {
              let tmp11;
              if (cResult[12] === style) {
                tmp11 = cResult[13];
              }
              const _Symbol = Symbol;
              let str = "react.memo_cache_sentinel";
              class I {
                constructor() {
                  let obj2;
                  const obj = { opacity: obj2.withTiming(num8) };
                  obj2 = timing;
                  return obj;
                }
              }
              if (cResult[15] === tmp7) {
                let tmp15;
                if (cResult[16] === results) {
                  tmp15 = cResult[17];
                }
                if (cResult[18] === tmp11) {
                  let tmp19;
                  if (cResult[19] === tmp15) {
                    tmp19 = cResult[20];
                  }
                  return tmp19;
                }
                class I {
                  constructor() {
                    let obj2;
                    const obj = { opacity: obj2.withTiming(num8) };
                    obj2 = timing;
                    return obj;
                  }
                }
                const tmp22 = jsx(onPressAutocompleteItem(autocompleteSelectionStart[8]).View, { style: null, children: tmp15 });
                cResult[18] = tmp11;
                cResult[19] = tmp15;
                cResult[20] = tmp22;
                tmp19 = tmp22;
              }
              const tmp18 = <closure_4 keyboardShouldPersistTaps="always" horizontal keyExtractor={tmp14} data={results} renderItem={tmp7} />;
              cResult[15] = tmp7;
              cResult[16] = results;
              cResult[17] = tmp18;
              tmp15 = tmp18;
            }
            const items = [style, animatedStyle];
            cResult[11] = animatedStyle;
            cResult[12] = style;
            cResult[13] = items;
            tmp11 = items;
          }
          const fn2 = function f(item) {
            item = item.item;
            const type = item.type;
            if (num8.USER === type) {
              const User = onPressAutocompleteItem(autocompleteSelectionStart[7]).User;
              const merged = Object.assign(item);
              return <User guildId={item.guild_id} onPress={function onPress(arg0) {
                return closure_4(arg0, item);
              }} />;
            } else if (num8.ROLE === type) {
              const Role = onPressAutocompleteItem(autocompleteSelectionStart[7]).Role;
              const merged1 = Object.assign(item);
              return <Role guildId={item.guild_id} onPress={function onPress(arg0) {
                return closure_4(arg0, item);
              }} />;
            } else if (num8.CHANNEL === type) {
              const Channel = onPressAutocompleteItem(autocompleteSelectionStart[7]).Channel;
              const merged2 = Object.assign(item);
              return <Channel onPress={function onPress(arg0) {
                return closure_4(arg0, item);
              }} />;
            } else if (num8.EMOJI === type) {
              const Emoji = onPressAutocompleteItem(autocompleteSelectionStart[7]).Emoji;
              const merged3 = Object.assign(item);
              return <Emoji onPress={function onPress(arg0) {
                return closure_4(arg0, item);
              }} />;
            } else {
              return null;
            }
          };
          cResult[9] = tmp6;
          cResult[10] = fn2;
          tmp7 = fn2;
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
      let num = 4;
      cResult[4] = autocompleteSelectionStart;
      cResult[5] = onPressAutocompleteItem;
      cResult[6] = query;
      cResult[7] = fn;
      tmp6 = fn;
    }
  }
  const obj5 = { channel, text, selection };
  cResult[0] = channel;
  cResult[1] = selection;
  cResult[2] = text;
  cResult[3] = obj5;
  tmp4 = obj5;
}) : ((channel) => {
  let autocompleteSelectionStart;
  let results;
  let selection;
  let style;
  let text;
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  ({ style, text, selection } = channel);
  let obj = channel(autocompleteSelectionStart[6]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
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
      const User = onPressAutocompleteItem(autocompleteSelectionStart[7]).User;
      const merged = Object.assign(item);
      return <User guildId={item.guild_id} onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.ROLE === type) {
      const Role = onPressAutocompleteItem(autocompleteSelectionStart[7]).Role;
      const merged1 = Object.assign(item);
      return <Role guildId={item.guild_id} onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.CHANNEL === type) {
      const Channel = onPressAutocompleteItem(autocompleteSelectionStart[7]).Channel;
      const merged2 = Object.assign(item);
      return <Channel onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else if (num.EMOJI === type) {
      const Emoji = onPressAutocompleteItem(autocompleteSelectionStart[7]).Emoji;
      const merged3 = Object.assign(item);
      return <Emoji onPress={function onPress(arg0) {
        return callback(arg0, item);
      }} />;
    } else {
      return null;
    }
  }, items1);
  if (results.length > 0) {
    num = 1;
  }
  const fn = function _() {
    let obj2;
    const obj = { opacity: obj2.withTiming(num) };
    obj2 = timing;
    return obj;
  };
  const tmpResult = channel(autocompleteSelectionStart[8]);
  let obj2 = { withTiming: tmp(tmp2[9]).withTiming, toValue: num };
  fn.__closure = obj2;
  fn.__workletHash = 6537603880065;
  fn.__initData = __initData2;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const items2 = [style, animatedStyle];
  const View = onPressAutocompleteItem(tmp2[8]).View;
  return <View style={items2}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default tmp2;