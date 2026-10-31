// === Module 10306: HorizontalAutocompleteWrapper ===

// Module 10306 (HorizontalAutocompleteWrapper)
import timing from "timing" /* 5254 */;
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
fn(1072).AutoCompleteResultTypes;
const jsx = fn(21).jsx;
const __initData = { code: "function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default function HorizontalAutocompleteWrapper(channel) {
  channel = channel.channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let callback;
  let num;
  ({ style, text, selection } = channel);
  const horizontalAutocompleteResults = channel(autocompleteSelectionStart[3]).useHorizontalAutocompleteResults({ channel, text, selection });
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
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[4]).User, obj2);
    } else if (ref.ROLE === type) {
      const obj3 = {};
      const merged1 = Object.assign(item);
      obj3.guildId = item.guild_id;
      obj3.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[4]).Role, obj3);
    } else if (ref.CHANNEL === type) {
      const obj4 = {};
      const merged2 = Object.assign(item);
      obj4.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[4]).Channel, obj4);
    } else if (ref.EMOJI === type) {
      const obj = {};
      const merged3 = Object.assign(item);
      obj.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(onPressAutocompleteItem(autocompleteSelectionStart[4]).Emoji, obj);
    } else {
      return null;
    }
  }, items2);
  if (results.length > 0) {
    num = 1;
  }
  let obj = channel(autocompleteSelectionStart[3]);
  class I {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[6]);
      obj.opacity = obj2.withTiming(c6);
      return obj;
    }
  }
  const tmpResult = channel(autocompleteSelectionStart[5]);
  I.__closure = { withTiming: channel(autocompleteSelectionStart[6]).withTiming, toValue: num };
  I.__workletHash = 7895652904738;
  I.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(I);
  let obj4 = {
    style: null,
    children: callback(channel(autocompleteSelectionStart[7]).FlashList, {
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
  return callback(onPressAutocompleteItem(autocompleteSelectionStart[5]).View, obj4);
};