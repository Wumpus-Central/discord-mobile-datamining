// === Module 10439: HorizontalAutocompleteWrapper ===

// Module 10439 (HorizontalAutocompleteWrapper)
import closure_3 from "noop" /* 19 */;
import { FlatList } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
require("ME").AutoCompleteResultTypes;
let closure_7 = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const result = require("set").fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default function HorizontalAutocompleteWrapper(channel) {
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let query;
  let callback;
  let num;
  ({ style, text, selection } = channel);
  let obj = channel(autocompleteSelectionStart[4]);
  const horizontalAutocompleteResults = obj.useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  query = horizontalAutocompleteResults.query;
  const items = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  callback = query.useCallback((stopPropagation) => {
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
  num = 0;
  const callback1 = query.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (num.USER === type) {
      let obj = {};
      const merged = Object.assign(item);
      obj.guildId = item.guild_id;
      obj.onPress = function onPress(arg0) {
        return closure_1_4(arg0, item);
      };
      return closure_1_6(onPressAutocompleteItem(autocompleteSelectionStart[5]).User, obj);
    } else if (tmp.ROLE === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.guildId = item.guild_id;
      obj.onPress = function onPress(arg0) {
        return closure_1_4(arg0, item);
      };
      return closure_1_6(onPressAutocompleteItem(autocompleteSelectionStart[5]).Role, obj);
    } else if (tmp.CHANNEL === type) {
      obj1 = {};
      const merged2 = Object.assign(item);
      obj1.onPress = function onPress(arg0) {
        return closure_1_4(arg0, item);
      };
      return closure_1_6(onPressAutocompleteItem(autocompleteSelectionStart[5]).Channel, obj1);
    } else if (tmp.EMOJI === type) {
      obj = {};
      const merged3 = Object.assign(item);
      obj.onPress = function onPress(arg0) {
        return closure_1_4(arg0, item);
      };
      return closure_1_6(onPressAutocompleteItem(autocompleteSelectionStart[5]).Emoji, obj);
    } else {
      return null;
    }
  }, items1);
  if (results.length > 0) {
    num = 1;
  }
  const fn = function _() {
    const obj = { opacity: channel(autocompleteSelectionStart[7]).withTiming(num) };
    return obj;
  };
  obj = { withTiming: tmp(tmp2[7]).withTiming, toValue: num };
  fn.__closure = obj;
  fn.__workletHash = 7895652904738;
  fn.__initData = closure_7;
  const animatedStyle = channel(autocompleteSelectionStart[6]).useAnimatedStyle(fn);
  obj = { style: items2, children: <callback {...obj1} /> };
  items2 = [style, animatedStyle];
  return jsx(onPressAutocompleteItem(autocompleteSelectionStart[6]).View, { style: items2, children: <callback {...obj1} /> });
};