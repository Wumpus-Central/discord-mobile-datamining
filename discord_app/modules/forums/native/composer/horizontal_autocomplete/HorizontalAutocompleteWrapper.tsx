// === Module 10484: HorizontalAutocompleteWrapper ===

// Module 10484 (HorizontalAutocompleteWrapper)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
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
let closure_7 = { code: "(function HorizontalAutocompleteWrapperTsx1(){let[withTiming,toValue]=this.__closure;return{opacity:withTiming(toValue)};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx");

export default function HorizontalAutocompleteWrapper(channel) {
  channel = channel.channel;
  _require = channel;
  const onPressAutocompleteItem = channel.onPressAutocompleteItem;
  importDefault = onPressAutocompleteItem;
  autocompleteSelectionStart = undefined;
  let callback;
  ({ style, text, selection } = channel);
  const horizontalAutocompleteResults = require("useHorizontalAutocompleteResults").useHorizontalAutocompleteResults({ channel, text, selection });
  ({ results, autocompleteSelectionStart } = horizontalAutocompleteResults);
  const query = horizontalAutocompleteResults.query;
  const ref = query.useRef(null);
  const first = results[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  items = [query, type];
  const effect = obj2.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items);
  const items1 = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  callback = obj2.useCallback((stopPropagation, arg1) => {
    stopPropagation.stopPropagation();
    let num = autocompleteSelectionStart;
    if (autocompleteSelectionStart == null) {
      num = 0;
    }
    let str = query;
    if (query == null) {
      str = "";
    }
    _undefined2(arg1, num, str);
  }, items1);
  const items2 = [channel.guild_id, callback];
  let num = 0;
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
      return callback(_undefined2(autocompleteSelectionStart[4]).User, obj2);
    } else if (ref.ROLE === type) {
      const obj3 = {};
      const merged1 = Object.assign(item);
      obj3.guildId = item.guild_id;
      obj3.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(_undefined2(autocompleteSelectionStart[4]).Role, obj3);
    } else if (ref.CHANNEL === type) {
      const obj4 = {};
      const merged2 = Object.assign(item);
      obj4.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(_undefined2(autocompleteSelectionStart[4]).Channel, obj4);
    } else if (ref.EMOJI === type) {
      const obj = {};
      const merged3 = Object.assign(item);
      obj.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return callback(_undefined2(autocompleteSelectionStart[4]).Emoji, obj);
    } else {
      return null;
    }
  }, items2);
  if (results.length > 0) {
    num = 1;
  }
  let obj = require("useHorizontalAutocompleteResults");
  const items3 = [closure_7, require("timing/timing").withTiming, num];
  _require = undefined;
  importDefault = undefined;
  [tmp10, tmp11, tmp12] = items3;
  class HorizontalAutocompleteWrapperTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1) };
      return obj;
    }
  }
  const items4 = [tmp11, tmp12];
  HorizontalAutocompleteWrapperTsx1.__closure = items4;
  HorizontalAutocompleteWrapperTsx1.__workletHash = 15765485703035;
  HorizontalAutocompleteWrapperTsx1.__initData = tmp10;
  const animatedStyle = require("module_1652").useAnimatedStyle(HorizontalAutocompleteWrapperTsx1);
  let obj3 = {
    style: null,
    children: callback(require("module_7430").FlashList, {
      ref,
      keyboardShouldPersistTaps: "always",
      horizontal: true,
      keyExtractor: getItemKey,
      getItemType(type) {
        return type.type;
      },
      data: results,
      renderItem: callback1
    })
  };
  const items5 = [style, animatedStyle];
  obj3.style = items5;
  return callback(require("module_1652").View, obj3);
};