// === Module 16541: Elements ===

// Module 16541 (Elements)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9366 */;
import useStoreFrontPriceDefault from "useStoreFrontPrice" /* 9369 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import _modDef16542 from "module_16542" /* 16542 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { toggleTruncateButton: null, arrowButton: null, arrowButtonText: null, arrowButtonIcon: null };
createStyles = { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: nativeDefault.colors.TEXT_DEFAULT, marginTop: 2 };
createStyles.toggleTruncateButton = createStyles;
createStyles.arrowButton = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.arrowButtonText = { flexGrow: 1, flexShrink: 1 };
let obj1 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.arrowButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export const TruncatedText = function TruncatedText(lineClamp) {
  let num = lineClamp.lineClamp;
  if (num === undefined) {
    num = 8;
  }
  const merged = Object.assign(lineClamp, Object.assign({ lineClamp: 0 }));
  c1 = undefined;
  const tmp2 = closure_11();
  [tmp4, c1] = _slicedToArray(noop.useState(false), 2);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const first = tmp5[0];
  closure_3 = tmp5[1];
  noop.useRef(false);
  if (!first) {
    let obj = {
      onPress() {
          let tmp = first;
          if (first) {
            tmp = _undefined((arg0) => !arg0);
          }
          return tmp;
        },
      accessibilityRole: "togglebutton",
      activeOpacity: null,
      children: null
    };
    let num2 = 1;
    if (first) {
      num2 = 0.8;
    }
    obj.activeOpacity = num2;
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
        closure_3(nativeEvent.nativeEvent.lines.length > num);
      }
    };
    const items = [React7(Text_Text.Text, obj), first];
    obj.children = items;
    return closure_1_10(timestampProducer, obj);
  } else {
    obj = { style: tmp2.toggleTruncateButton, children: null };
    const intl = util.intl;
    const string = intl.string;
    let t = util.t;
    if (tmp4) {
      let stringResult = string(t["JQX/Pb"]);
    } else {
      stringResult = string(t.Fbrd8J);
    }
    const obj1 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
    t = tmp7(Text_Text.Text, obj1);
    obj.children = t;
    React7(React5, obj);
  }
};
export const ArrowButton = function ArrowButton(arg0) {
  ({ text, onPress } = arg0);
  const tmp = closure_11();
  let obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress, children: null };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.arrowButtonText, children: text };
  const items = [React7(Text_Text.Text, obj), ];
  obj = { size: native.Icon.Sizes.SMALL, source: _modDef16542, style: tmp.arrowButtonIcon };
  items[1] = React7(native.Icon, obj);
  obj.children = items;
  return closure_1_10(Pressables.PressableOpacity, obj);
};
export const useFormattedSubscriptionPlan = function useFormattedSubscriptionPlan(listingId) {
  const obj = NativePaymentHooksDefault;
  _require = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useSubscriptionPlan(listingId), 1)[0];
  const tmp2 = _require;
  const items = [SubscriptionPlanStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => SubscriptionPlanStore.get(id.id));
  const price = useStoreFrontPriceDefault(stateFromStores, obj.useNativeIAPPayments().storeFront).price;
  let str = "No Price Available";
  if (null != price) {
    const _HermesInternal = HermesInternal;
    str = "" + tmp2(7234).formatPrice(price.amount, price.currency) + "/mo.";
    const tmp2Result = tmp2(7234);
  }
  return str;
};