// === Module 11332: HorizontalAutocompleteWrapper ===

// Module 11332 (HorizontalAutocompleteWrapper)
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
  let results;
  keyExtractor = undefined;
  ({ style, text, selection } = channel);
  const horizontalAutocompleteResults = require("useHorizontalAutocompleteResults").useHorizontalAutocompleteResults({ channel, text, selection });
  results = horizontalAutocompleteResults.results;
  const autocompleteSelectionStart = horizontalAutocompleteResults.autocompleteSelectionStart;
  const query = horizontalAutocompleteResults.query;
  const ref = autocompleteSelectionStart.useRef(null);
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
  let items1 = [results];
  const memo = obj2.useMemo(() => results.flatMap((type) => {
    if (type.type === constants.USER) {
      items = [type.user.id];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }), items1);
  require("useVerifyMentionResults")(channel.guild_id, memo);
  const items2 = [onPressAutocompleteItem, autocompleteSelectionStart, query];
  keyExtractor = obj2.useCallback((stopPropagation, arg1) => {
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
  }, items2);
  const items3 = [channel.guild_id, keyExtractor];
  let num = 0;
  const callback1 = obj2.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (query.USER === type) {
      const obj2 = {};
      const merged = Object.assign(item);
      obj2.guildId = item.guild_id;
      obj2.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return ref(_undefined2(results[5]).User, obj2);
    } else if (query.ROLE === type) {
      const obj3 = {};
      const merged1 = Object.assign(item);
      obj3.guildId = item.guild_id;
      obj3.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return ref(_undefined2(results[5]).Role, obj3);
    } else if (query.CHANNEL === type) {
      const obj4 = {};
      const merged2 = Object.assign(item);
      obj4.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return ref(_undefined2(results[5]).Channel, obj4);
    } else if (query.EMOJI === type) {
      const obj = {};
      const merged3 = Object.assign(item);
      obj.onPress = function onPress(arg0) {
        return callback(arg0, item);
      };
      return ref(_undefined2(results[5]).Emoji, obj);
    } else {
      return null;
    }
  }, items3);
  if (results.length > 0) {
    num = 1;
  }
  let obj = require("useHorizontalAutocompleteResults");
  const tmp9 = importDefault;
  const items4 = [closure_7, require("timing/timing").withTiming, num];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items4;
  class HorizontalAutocompleteWrapperTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1) };
      return obj;
    }
  }
  const items5 = [tmp14, tmp15];
  HorizontalAutocompleteWrapperTsx1.__closure = items5;
  HorizontalAutocompleteWrapperTsx1.__workletHash = 15765485703035;
  HorizontalAutocompleteWrapperTsx1.__initData = tmp13;
  const animatedStyle = require("module_1652").useAnimatedStyle(HorizontalAutocompleteWrapperTsx1);
  let obj3 = {
    style: null,
    children: ref(require("module_7822").FlashList, {
      ref,
      keyboardShouldPersistTaps: "always",
      horizontal: true,
      keyExtractor,
      getItemType(type) {
        return type.type;
      },
      data: results,
      renderItem: callback1
    })
  };
  const items6 = [style, animatedStyle];
  obj3.style = items6;
  return ref(tmp9(results[6]).View, obj3);
};