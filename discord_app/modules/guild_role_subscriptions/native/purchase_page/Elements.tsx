// === Module 15797: TruncatedText ===

// Module 15797 (TruncatedText)
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import PressableBase from "PressableBase" /* 5433 */;
import notSupportedDefault from "notSupported" /* 7935 */;
import useStoreFrontPriceDefault from "useStoreFrontPrice" /* 7936 */;
import getRoleEmojisAll from "getRoleEmojis" /* 14573 */;
import registerAssetDefault from "registerAsset" /* 15798 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import addSubscriptionPlan from "addSubscriptionPlan" /* 4044 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
({ TouchableOpacity: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: ThemesDefault.colors.TEXT_DEFAULT, marginTop: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[2] = { flexGrow: 1, flexShrink: 1 };
createCacheKey[3] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export const TruncatedText = function TruncatedText(lineClamp) {
  let num = lineClamp.lineClamp;
  if (num === undefined) {
    num = 8;
  }
  const merged = Object.assign(lineClamp, Object.create(null));
  c1 = undefined;
  let callback;
  const tmp2 = callback4();
  [tmp4, c1] = callback(React.useState(false), 2);
  const tmp5 = callback(React.useState(false), 2);
  const first = tmp5[0];
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
    const items = [callback(num(4734).Text, obj), first];
    obj[3] = items;
    return callback2(closure_6, obj);
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
    obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
    obj1[2] = stringResult;
    t = callback(num(4734).Text, obj1);
    obj[1] = t;
    callback(closure_7, obj);
  }
  const tmp3 = callback(React.useState(false), 2);
};
export const ArrowButton = function ArrowButton(arg0) {
  ({ text, onPress } = arg0);
  const tmp = callback4();
  let obj = { variant: "text-md/semibold", color: "text-default", style: tmp.arrowButtonText, children: text };
  const items = [callback2(Text.Text, obj), ];
  obj = { size: Button.Icon.Sizes.SMALL, source: registerAssetDefault, style: tmp.arrowButtonIcon };
  items[1] = callback2(Button.Icon, obj);
  obj[3] = items;
  return callback3(PressableBase.PressableOpacity, obj);
};
export const useFormattedSubscriptionPlan = function useFormattedSubscriptionPlan(listingId) {
  const obj = notSupportedDefault;
  const _require = callback(getRoleEmojisAll.useSubscriptionPlan(listingId), 1)[0];
  const tmp2 = _require;
  const items = [closure_8];
  const stateFromStores = _require(647).useStateFromStores(items, () => closure_1_8.get(id.id));
  const price = useStoreFrontPriceDefault(stateFromStores, obj.useNativeIAPPayments().storeFront).price;
  let str = "No Price Available";
  if (null != price) {
    const _HermesInternal = HermesInternal;
    str = "" + tmp2(5316).formatPrice(price.amount, price.currency) + "/mo.";
    const tmp2Result = tmp2(5316);
  }
  return str;
};