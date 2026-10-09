// === Module 16916: Elements ===

// Module 16916 (Elements)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9371 */;
import useStoreFrontPriceDefault from "useStoreFrontPrice" /* 9374 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15435 */;
import _modDef16917 from "module_16917" /* 16917 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4733 */;

const require = globalThis.__r;

require = fn;
let closure_4 = ["lineClamp"];
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_8, View: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { toggleTruncateButton: { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: nativeDefault.colors.TEXT_DEFAULT, marginTop: 2 }, arrowButton: null, arrowButtonText: null, arrowButtonIcon: null };
let obj3 = { alignSelf: "flex-start", borderBottomWidth: 0.8, borderColor: nativeDefault.colors.TEXT_DEFAULT, marginTop: 2 };
obj2.arrowButton = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.arrowButtonText = { flexGrow: 1, flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, height: 40, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.arrowButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_13 = createStyles.createStyles(obj2);
fn(558);
const obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TruncatedText(lineClamp) {
  const cResult = c.c(20);
  if (cResult[0] !== lineClamp) {
    lineClamp = lineClamp.lineClamp;
    const tmp8 = _objectWithoutProperties(lineClamp, ref);
    cResult[0] = lineClamp;
    cResult[1] = tmp8;
    cResult[2] = lineClamp;
    let tmp5 = lineClamp;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  let num4 = 8;
  if (undefined !== tmp5) {
    num4 = tmp5;
  }
  const tmp9 = closure_13();
  [tmp11, importDefault] = noop.useState(false);
  [first, dependencyMap] = noop.useState(false);
  ref = noop.useRef(false);
  if (cResult[3] !== first) {
    function handleToggle() {
      let tmp = first;
      if (first) {
        tmp = importDefault((arg0) => !arg0);
      }
      return tmp;
    }
    cResult[3] = first;
    cResult[4] = handleToggle;
  }
  if (cResult[5] === tmp11) {
    if (cResult[6] === first) {
      let tmp20;
      if (first) {
        if (!tmp11) {
          tmp20 = num4;
        }
      }
      if (cResult[9] !== num4) {
        class O {
          constructor(arg0) {
            if (!closure_4.current) {
              tmp2 = lineClamp;
              flag = true;
              tmp.current = true;
              tmp3 = closure_3;
              tmp4 = closure_0;
              tmp5 = closure_3(lineClamp.nativeEvent.lines.length > closure_0);
            }
            return;
          }
        }
        cResult[9] = num4;
        cResult[10] = O;
      } else {
        class O {
          constructor(arg0) {
            if (!closure_4.current) {
              tmp2 = lineClamp;
              flag = true;
              tmp.current = true;
              tmp3 = closure_3;
              tmp4 = closure_0;
              tmp5 = closure_3(lineClamp.nativeEvent.lines.length > closure_0);
            }
            return;
          }
        }
      }
      if (cResult[11] === tmp4) {
        class O {
          constructor(arg0) {
            if (!closure_4.current) {
              tmp2 = lineClamp;
              flag = true;
              tmp.current = true;
              tmp3 = closure_3;
              tmp4 = closure_0;
              tmp5 = closure_3(lineClamp.nativeEvent.lines.length > closure_0);
            }
            return;
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(tmp4);
      obj2.lineClamp = tmp20;
      obj2.onTextLayout = O;
      const tmp27 = closure_1_11(Text_Text.Text, obj2);
      cResult[11] = tmp4;
      cResult[12] = tmp20;
      cResult[13] = O;
      cResult[14] = tmp27;
    }
  }
  if (!first) {
    class O {
      constructor(arg0) {
        if (!closure_4.current) {
          tmp2 = lineClamp;
          flag = true;
          tmp.current = true;
          tmp3 = closure_3;
          tmp4 = closure_0;
          tmp5 = closure_3(lineClamp.nativeEvent.lines.length > closure_0);
        }
        return;
      }
    }
    cResult[5] = tmp11;
    cResult[6] = first;
    cResult[7] = tmp9;
    cResult[8] = first;
  } else {
    class O {
      constructor(arg0) {
        if (!closure_4.current) {
          tmp2 = lineClamp;
          flag = true;
          tmp.current = true;
          tmp3 = closure_3;
          tmp4 = closure_0;
          tmp5 = closure_3(lineClamp.nativeEvent.lines.length > closure_0);
        }
        return;
      }
    }
    const obj3 = { style: tmp9.toggleTruncateButton, children: null };
    const string = util.intl.string;
    let t = util.t;
    if (tmp11) {
      class O {
        constructor(arg0) {
          if (!closure_4.current) {
            tmp2 = lineClamp;
            flag = true;
            tmp.current = true;
            tmp3 = closure_3;
            tmp4 = closure_0;
            tmp5 = closure_3(lineClamp.nativeEvent.lines.length > closure_0);
          }
          return;
        }
      }
    } else {
      class O {
        constructor(arg0) {
          if (!closure_4.current) {
            tmp2 = lineClamp;
            flag = true;
            tmp.current = true;
            tmp3 = closure_3;
            tmp4 = closure_0;
            tmp5 = closure_3(lineClamp.nativeEvent.lines.length > closure_0);
          }
          return;
        }
      }
    }
    const obj4 = { variant: "text-sm/medium", color: "text-default", children: tmp18 };
    t = tmp16(Text_Text.Text, obj4);
    obj3.children = t;
    tmp16(options, obj3);
  }
  const tmp10 = _slicedToArray(noop.useState(false), 2);
}) : (function TruncatedText(lineClamp) {
  let num = lineClamp.lineClamp;
  if (num === undefined) {
    num = 8;
  }
  const merged = Object.assign(lineClamp, Object.assign({ lineClamp: 0 }));
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  const tmp2 = closure_13();
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
    const items = [closure_1_11(Text_Text.Text, obj3), first];
    obj2.children = items;
    return __initData(closure_1_8, obj2);
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
    const obj4 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
    t = closure_1_11(Text_Text.Text, obj4);
    obj.children = t;
    closure_1_11(options, obj);
  }
  const tmp3 = _slicedToArray(noop.useState(false), 2);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ArrowButton(arg0) {
  const cResult = c.c(10);
  ({ text, onPress } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === tmp4.arrowButtonText) {
    if (cResult[1] === text) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4.arrowButtonIcon) {
      const obj2 = { size: native.Icon.Sizes.SMALL, source: _modDef16917, style: tmp4.arrowButtonIcon };
      const tmp10 = closure_1_11(native.Icon, obj2);
      cResult[3] = tmp4.arrowButtonIcon;
      cResult[4] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === onPress) {
      if (cResult[6] === tmp4.arrowButton) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
      }
    }
    const obj3 = { accessibilityRole: "button", style: tmp4.arrowButton, onPress, children: null };
    const items = [tmp5, tmp7];
    obj3.children = items;
    const tmp13 = __initData(Pressables.PressableOpacity, obj3);
    cResult[5] = onPress;
    cResult[6] = tmp4.arrowButton;
    cResult[7] = tmp5;
    cResult[8] = tmp7;
    cResult[9] = tmp13;
    tmp11 = tmp13;
  }
  const tmp6 = closure_1_11(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", style: tmp4.arrowButtonText, children: text });
  cResult[0] = tmp4.arrowButtonText;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj4 = { variant: "text-md/semibold", color: "text-default", style: tmp4.arrowButtonText, children: text };
}) : (function ArrowButton(arg0) {
  ({ text, onPress } = arg0);
  const tmp = closure_13();
  const obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress, children: null };
  const items = [closure_1_11(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", style: tmp.arrowButtonText, children: text }), closure_1_11(native.Icon, { size: native.Icon.Sizes.SMALL, source: _modDef16917, style: tmp.arrowButtonIcon })];
  obj.children = items;
  return __initData(Pressables.PressableOpacity, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export const TruncatedText = tmp4;
export const ArrowButton = tmp5;
export const useFormattedSubscriptionPlan = ReactCompilerGating.isReactCompilerEnabled() ? (function useFormattedSubscriptionPlan(arg0) {
  let amount = first;
  let concat = first(576).c(6);
  const obj = first(576);
  const mobileStoreFront = NativePaymentHooksDefault.useMobileStoreFront();
  first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useSubscriptionPlan(arg0), 1)[0];
  let str2 = globalThis;
  if (concat[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionPlanStore];
    concat[0] = items;
    let first1 = items;
  } else {
    first1 = concat[0];
  }
  if (concat[1] !== first.id) {
    const fn = function n() {
      return SubscriptionPlanStore.get(first.id);
    };
    concat[1] = first.id;
    concat[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = concat[2];
  }
  const stateFromStores = amount(573).useStateFromStores(first1, tmp6);
  let currency = useStoreFrontPriceDefault(stateFromStores, mobileStoreFront).price;
  if (null == currency) {
    return "No Price Available";
  } else {
    if (concat[3] === currency.amount) {
      if (concat[4] === currency.currency) {
        let tmp8 = concat[5];
      }
      concat = str2.HermesInternal.concat;
      str2 = "";
      const combined = concat(tmp8, "/mo.");
    }
    const formatPriceResult = amount(6933).formatPrice(currency.amount, currency.currency);
    amount = currency.amount;
    concat[3] = amount;
    currency = currency.currency;
    concat[4] = currency;
    concat[5] = formatPriceResult;
    tmp8 = formatPriceResult;
    const amountResult1 = amount(6933);
  }
  const amountResult = amount(573);
}) : (function useFormattedSubscriptionPlan(arg0) {
  const mobileStoreFront = NativePaymentHooksDefault.useMobileStoreFront();
  _require = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useSubscriptionPlan(arg0), 1)[0];
  const tmp3 = _require;
  const items = [SubscriptionPlanStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => SubscriptionPlanStore.get(id.id));
  const price = useStoreFrontPriceDefault(stateFromStores, mobileStoreFront).price;
  let str = "No Price Available";
  if (null != price) {
    const _HermesInternal = HermesInternal;
    str = "" + tmp3(6933).formatPrice(price.amount, price.currency) + "/mo.";
    const tmp3Result = tmp3(6933);
  }
  return str;
});