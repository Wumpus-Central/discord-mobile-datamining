// === Module 19381: Elements ===

// Module 19381 (Elements)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5929 */;
import Pressables from "Pressables" /* 7428 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9723 */;
import useStoreFrontPriceDefault from "useStoreFrontPrice" /* 10957 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17844 */;
import _modDef19382 from "module_19382" /* 19382 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2178 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const constants = fn(1072).PriceSetAssignmentPurchaseTypes;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { toggleTruncateButton: { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: nativeDefault.colors.TEXT_DEFAULT, marginTop: 2 }, arrowButton: null, arrowButtonText: null, arrowButtonIcon: null };
let obj3 = { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: nativeDefault.colors.TEXT_DEFAULT, marginTop: 2 };
obj2.arrowButton = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.arrowButtonText = { flexGrow: 1, flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.arrowButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export function TruncatedText(lineClamp) {
  let num = lineClamp.lineClamp;
  if (num === undefined) {
    num = 8;
  }
  const merged = Object.assign(lineClamp, Object.assign({ lineClamp: 0 }));
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  const tmp2 = closure_12();
  [tmp4, c1] = noop.useState(false);
  [first, closure_3] = noop.useState(false);
  noop.useRef(false);
  if (!first) {
    const obj2 = {
      onPress: function handleToggle() {
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
    obj2.activeOpacity = num2;
    const obj3 = {};
    const merged1 = Object.assign(merged);
    let tmp21;
    if (first) {
      if (!tmp4) {
        tmp21 = num;
      }
    }
    obj3.lineClamp = tmp21;
    obj3.onTextLayout = function onTextLayout(nativeEvent) {
      if (!ref.current) {
        tmp.current = true;
        closure_3(nativeEvent.nativeEvent.lines.length > num);
      }
    };
    items = [refs(Text_Text.Text, obj3), first];
    obj2.children = items;
    return closure_1_11(timestampProducer, obj2);
  } else {
    const obj = { style: tmp2.toggleTruncateButton, children: null };
    const intl = util.intl;
    const string = intl.string;
    let t = util.t;
    if (tmp4) {
      let stringResult = string(t["JQX/Pb"]);
    } else {
      stringResult = string(t.Fbrd8J);
    }
    const obj4 = { variant: "body-sm/medium", color: "text-default", children: stringResult };
    t = refs(Text_Text.Text, obj4);
    obj.children = t;
    refs(metroImportDefault, obj);
  }
  const tmp3 = _slicedToArray(noop.useState(false), 2);
}
export function ArrowButton(arg0) {
  ({ text, onPress } = arg0);
  const tmp = closure_12();
  const obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress, children: null };
  items = [refs(Text_Text.Text, { variant: "body-md/semibold", color: "text-default", style: tmp.arrowButtonText, children: text }), refs(native.Icon, { size: native.Icon.Sizes.SMALL, source: _modDef19382, style: tmp.arrowButtonIcon })];
  obj.children = items;
  return closure_1_11(Pressables.PressableOpacity, obj);
}
export function useFormattedSubscriptionPlan(listingId) {
  const mobileStoreFront = NativePaymentHooksDefault.useMobileStoreFront();
  _require = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useSubscriptionPlan(listingId), 1)[0];
  const tmp3 = _require;
  items = [SubscriptionPlanStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => SubscriptionPlanStore.get(id.id));
  const price = useStoreFrontPriceDefault(stateFromStores, mobileStoreFront, constants.MOBILE).price;
  let str = "No Price Available";
  if (null != price) {
    const _HermesInternal = HermesInternal;
    str = "" + tmp3(7253).formatPrice(price.amount, price.currency) + "/mo.";
    const tmp3Result = tmp3(7253);
  }
  return str;
}