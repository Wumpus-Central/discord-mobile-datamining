// discord_app/modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const FlatList = fn(17).FlatList;
fn(1074).AutoCompleteResultTypes;
const jsx = fn(21).jsx;
const __initData = {
  code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx",
);

export default function HorizontalAutocompleteWrapper(channel) {
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  ({ style, text, selection } = channel);
  let obj = channel(autocompleteSelectionStart[4]);
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
      let obj = {};
      const merged = Object.assign(item);
      obj.guildId = item.guild_id;
      obj.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return jsx(onPressAutocompleteItem(autocompleteSelectionStart[5]).User, {});
    } else if (num.ROLE === type) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.guildId = item.guild_id;
      obj.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return jsx(onPressAutocompleteItem(autocompleteSelectionStart[5]).Role, {});
    } else if (num.CHANNEL === type) {
      const obj1 = {};
      const merged2 = Object.assign(item);
      obj1.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return jsx(onPressAutocompleteItem(autocompleteSelectionStart[5]).Channel, {});
    } else if (num.EMOJI === type) {
      obj = {};
      const merged3 = Object.assign(item);
      obj.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return jsx(onPressAutocompleteItem(autocompleteSelectionStart[5]).Emoji, {});
    } else {
      return null;
    }
  }, items1);
  if (results.length > 0) {
    num = 1;
  }
  const fn = function _() {
    const obj = { opacity: timing.withTiming(num) };
    return obj;
  };
  obj = { withTiming: tmp(tmp2[7]).withTiming, toValue: num };
  fn.__closure = obj;
  fn.__workletHash = 7895652904738;
  fn.__initData = __initData;
  const animatedStyle = channel(autocompleteSelectionStart[6]).useAnimatedStyle(fn);
  obj = {
    style: null,
    children: (
      <callback
        keyboardShouldPersistTaps="always"
        horizontal
        keyExtractor={function keyExtractor(arg0, arg1) {
          return String(arg1);
        }}
        data={results}
        renderItem={callback1}
      />
    ),
  };
  const items2 = [style, animatedStyle];
  obj.style = items2;
  return jsx(onPressAutocompleteItem(autocompleteSelectionStart[6]).View, {
    style: null,
    children: (
      <callback
        keyboardShouldPersistTaps="always"
        horizontal
        keyExtractor={function keyExtractor(arg0, arg1) {
          return String(arg1);
        }}
        data={results}
        renderItem={callback1}
      />
    ),
  });
}
