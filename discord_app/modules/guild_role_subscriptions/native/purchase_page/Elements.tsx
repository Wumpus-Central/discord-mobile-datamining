import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "set";
import addSubscriptionPlan from "addSubscriptionPlan";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_6;
let error;
const require = arg1;
({ TouchableOpacity: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { toggleTruncateButton: null, arrowButton: null, arrowButtonText: null, arrowButtonIcon: null };
createCacheKey = { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: require("Themes").colors.TEXT_DEFAULT, marginTop: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[2] = { flexGrow: 1, flexShrink: 1 };
let obj1 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[3] = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export const TruncatedText = function TruncatedText(lineClamp) {
  let c1;
  let tmp4;
  let num = lineClamp.lineClamp;
  if (num === undefined) {
    num = 8;
  }
  const merged = Object.assign(lineClamp, Object.create(null));
  c1 = undefined;
  let first;
  let dependencyMap;
  let callback;
  const tmp2 = createCacheKey();
  [tmp4, c1] = callback(React.useState(false), 2);
  const tmp5 = callback(React.useState(false), 2);
  first = tmp5[0];
  dependencyMap = tmp5[1];
  callback = React.useRef(false);
  if (!first) {
    let obj = { onPress: null, accessibilityRole: "togglebutton", activeOpacity: null, children: null };
    obj[0] = function onPress() {
      let tmp = first;
      if (first) {
        tmp = _undefined((arg0) => !arg0);
      }
      return tmp;
    };
    let num2 = 1;
    if (first) {
      num2 = 0.8;
    }
    obj[2] = num2;
    obj = {};
    const merged1 = Object.assign(merged);
    let tmp21;
    if (first) {
      if (!tmp4) {
        tmp21 = num;
      }
    }
    obj.lineClamp = tmp21;
    obj.onTextLayout = function onTextLayout(nativeEvent) {
      if (!ref.current) {
        tmp.current = true;
        callback(nativeEvent.nativeEvent.lines.length > num);
      }
    };
    const items = [closure_9(num(4281).Text, obj), first];
    obj[3] = items;
    return closure_10(closure_6, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp2.toggleTruncateButton;
    const intl = num(1236).intl;
    const string = intl.string;
    let t = num(1236).t;
    if (tmp4) {
      let stringResult = string(t["JQX/Pb"]);
    } else {
      stringResult = string(t.Fbrd8J);
    }
    const obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
    obj1[2] = stringResult;
    t = tmp7(num(4281).Text, obj1);
    obj[1] = t;
    closure_9(closure_7, obj);
    const tmp8 = closure_7;
  }
};
export const ArrowButton = function ArrowButton(arg0) {
  let onPress;
  let text;
  ({ text, onPress } = arg0);
  const tmp = createCacheKey();
  let obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress, children: null };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.arrowButtonText, children: text };
  const items = [callback2(require(4281) /* Text */.Text, obj), ];
  obj = { size: null, source: null, style: null };
  obj[0] = require(1297) /* Button */.Icon.Sizes.SMALL;
  obj[1] = importDefault(15532);
  obj[2] = tmp.arrowButtonIcon;
  items[1] = callback2(require(1297) /* Button */.Icon, obj);
  obj[3] = items;
  return callback3(require(4812) /* PressableBase */.PressableOpacity, obj);
};
export const useFormattedSubscriptionPlan = function useFormattedSubscriptionPlan(listingId) {
  const obj = importDefault(7572);
  const _require = callback(importAll(14364).useSubscriptionPlan(listingId), 1)[0];
  const obj2 = importAll(14364);
  const tmp2 = _require;
  const items = [addSubscriptionPlan];
  const stateFromStores = _require(647).useStateFromStores(items, () => outer1_8.get(id.id));
  const price = importDefault(7573)(stateFromStores, obj.useNativeIAPPayments().storeFront).price;
  let str = "No Price Available";
  if (null != price) {
    const _HermesInternal = HermesInternal;
    str = "" + tmp2(5764).formatPrice(price.amount, price.currency) + "/mo.";
    const tmp2Result = tmp2(5764);
  }
  return str;
};