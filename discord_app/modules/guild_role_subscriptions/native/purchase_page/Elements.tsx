// discord_app/modules/guild_role_subscriptions/native/purchase_page/Elements.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import NativePaymentHooksDefault from "../../../payments/native/hooks/NativePaymentHooks.android.tsx";
import useStoreFrontPriceDefault from "../../../billing/native/subscription/useStoreFrontPrice.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _modDef19009 from "../../../../../_runtime/metro/19009__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5142);
let obj2 = {
  toggleTruncateButton: {
    alignSelf: "flex-start",
    borderBottomWidth: 0.8,
    borderColor: nativeDefault.colors.TEXT_DEFAULT,
    marginTop: 2,
  },
  arrowButton: null,
  arrowButtonText: null,
  arrowButtonIcon: null,
};
let obj3 = {
  alignSelf: "flex-start",
  borderBottomWidth: 0.8,
  borderColor: nativeDefault.colors.TEXT_DEFAULT,
  marginTop: 2,
};
obj2.arrowButton = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.arrowButtonText = { flexGrow: 1, flexShrink: 1 };
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.arrowButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_11 = createStyles.createStyles(obj2);
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
  const tmp2 = closure_11();
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
      children: null,
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
    items = [React6(Text_Text.Text, obj3), first];
    obj2.children = items;
    return closure_1_10(timestampProducer, obj2);
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
    t = React6(Text_Text.Text, obj4);
    obj.children = t;
    React6(metroImportDefault, obj);
  }
  const tmp3 = _slicedToArray(noop.useState(false), 2);
}
export function ArrowButton(arg0) {
  ({ text, onPress } = arg0);
  const tmp = closure_11();
  const obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress, children: null };
  items = [
    React6(Text_Text.Text, {
      variant: "body-md/semibold",
      color: "text-default",
      style: tmp.arrowButtonText,
      children: text,
    }),
    React6(native.Icon, { size: native.Icon.Sizes.SMALL, source: _modDef19009, style: tmp.arrowButtonIcon }),
  ];
  obj.children = items;
  return closure_1_10(Pressables.PressableOpacity, obj);
}
export function useFormattedSubscriptionPlan(listingId) {
  const mobileStoreFront = NativePaymentHooksDefault.useMobileStoreFront();
  _require = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useSubscriptionPlan(listingId), 1)[0];
  const tmp3 = _require;
  items = [SubscriptionPlanStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    SubscriptionPlanStore.get(id.id),
  );
  const price = useStoreFrontPriceDefault(stateFromStores, mobileStoreFront).price;
  let str = "No Price Available";
  if (null != price) {
    const _HermesInternal = HermesInternal;
    str = "" + tmp3(7480).formatPrice(price.amount, price.currency) + "/mo.";
    const tmp3Result = tmp3(7480);
  }
  return str;
}
