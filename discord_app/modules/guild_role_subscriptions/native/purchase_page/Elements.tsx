// discord_app/modules/guild_role_subscriptions/native/purchase_page/Elements.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import NativePaymentHooksDefault from "../../../payments/native/hooks/NativePaymentHooks.android.tsx";
import useStoreFrontPriceDefault from "../../../billing/native/subscription/useStoreFrontPrice.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/16538_AssetRegistry.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, lineClamp;

let c9;
let closure_12;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let closure_4 = ["lineClamp"];
({ TouchableOpacity: metroImportAll, View: c9 } = react_native);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  toggleTruncateButton: obj2,
  arrowButton: obj3,
  arrowButtonText: { flexGrow: 1, flexShrink: 1 },
  arrowButtonIcon: obj4,
};
obj2 = {
  alignSelf: "flex-start",
  borderBottomWidth: 0.8,
  borderColor: nativeDefault.colors.TEXT_DEFAULT,
  marginTop: 2,
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (lineClamp) => {
      let Text;
      let closure_129_1;
      let first;
      let obj4;
      let tmp11;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(20);
      if (cResult[0] !== lineClamp) {
        lineClamp = lineClamp.lineClamp;
        const tmp8 = _objectWithoutProperties(lineClamp, closure_4);
        cResult[0] = lineClamp;
        cResult[1] = tmp8;
        cResult[2] = lineClamp;
        tmp5 = lineClamp;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      let num4 = 8;
      if (undefined !== tmp5) {
        num4 = tmp5;
      }
      const tmp9 = closure_13();
      [tmp11, closure_129_1] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      [first, dependencyMap] = react.useState(false);
      closure_4 = react.useRef(false);
      if (cResult[3] !== first) {
        const fn = function f() {
          const tmp = first && closure_1_1((arg0) => !arg0);
          return tmp;
        };
        cResult[3] = first;
        cResult[4] = fn;
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
              constructor(nativeEvent) {
                if (!ref.current) {
                  tmp.current = true;
                  closure_3(nativeEvent.nativeEvent.lines.length > num4);
                }
              }
            }
            cResult[9] = num4;
            cResult[10] = O;
          } else {
            class O {
              constructor(nativeEvent) {
                if (!ref.current) {
                  tmp.current = true;
                  closure_3(nativeEvent.nativeEvent.lines.length > num4);
                }
              }
            }
          }
          if (cResult[11] === tmp4) {
            class O {
              constructor(nativeEvent) {
                if (!ref.current) {
                  tmp.current = true;
                  closure_3(nativeEvent.nativeEvent.lines.length > num4);
                }
              }
            }
          }
          const obj2 = { lineClamp: tmp20, onTextLayout: O };
          const Text2 = Text_Text.Text;
          const merged = Object.assign(tmp4);
          cResult[11] = tmp4;
          cResult[12] = tmp20;
          cResult[13] = O;
          cResult[14] = unpackModuleId(Text2, obj2);
          const tmp27 = unpackModuleId(Text2, obj2);
        }
      }
      let tmp17Result = first;
      if (tmp17Result) {
        class O {
          constructor(nativeEvent) {
            if (!ref.current) {
              tmp.current = true;
              closure_3(nativeEvent.nativeEvent.lines.length > num4);
            }
          }
        }
        const obj3 = { style: tmp9.toggleTruncateButton, children: tmp17(Text, obj4) };
        Text = Text_Text.Text;
        const string = intl2.intl.string;
        const t = intl2.t;
        if (tmp11) {
          class O {
            constructor(nativeEvent) {
              if (!ref.current) {
                tmp.current = true;
                closure_3(nativeEvent.nativeEvent.lines.length > num4);
              }
            }
          }
        } else {
          class O {
            constructor(nativeEvent) {
              if (!ref.current) {
                tmp.current = true;
                closure_3(nativeEvent.nativeEvent.lines.length > num4);
              }
            }
          }
        }
        obj4 = { variant: "text-sm/medium", color: "text-default", children: tmp19 };
        tmp17Result = tmp17(React4, obj3);
      }
      cResult[5] = tmp11;
      cResult[6] = first;
      cResult[7] = tmp9;
      cResult[8] = tmp17Result;
    }
  : (lineClamp) => {
      let Text;
      let c1;
      let closure_3;
      let first;
      let items;
      let num2;
      let obj2;
      let tmp17;
      let tmp4;
      let num = lineClamp.lineClamp;
      if (num === undefined) {
        num = 8;
      }
      const merged = Object.assign(lineClamp, Object.assign({ lineClamp: 0 }));
      c1 = undefined;
      first = undefined;
      closure_3 = undefined;
      const tmp2 = closure_13();
      [tmp4, c1] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      [first, closure_3] = react.useState(false);
      closure_4 = react.useRef(false);
      let tmp8Result = first;
      if (tmp8Result) {
        let stringResult;
        const obj = { style: tmp2.toggleTruncateButton, children: unpackModuleId(Text, obj2) };
        Text = Text_Text.Text;
        const intl = intl2.intl;
        const string = intl.string;
        const t = intl2.t;
        if (tmp4) {
          stringResult = string(t["JQX/Pb"]);
        } else {
          stringResult = string(t.Fbrd8J);
        }
        obj2 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
        tmp8Result = unpackModuleId(React4, obj);
      }
      const obj3 = {
        onPress() {
          const tmp = first && _undefined((arg0) => !arg0);
          return tmp;
        },
        accessibilityRole: "togglebutton",
        activeOpacity: num2,
        children: items,
      };
      num2 = 1;
      if (first) {
        num2 = 0.8;
      }
      const obj4 = {
        lineClamp: tmp17,
        onTextLayout(nativeEvent) {
          if (!ref.current) {
            tmp.current = true;
            closure_3(nativeEvent.nativeEvent.lines.length > num);
          }
        },
      };
      const Text2 = Text_Text.Text;
      const merged1 = Object.assign(merged);
      tmp17 = undefined;
      if (first) {
        if (!tmp4) {
          tmp17 = num;
        }
      }
      items = [unpackModuleId(Text2, obj4), tmp8Result];
      return closure_12(metroImportAll, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let onPress;
      let text;
      const obj = react2;
      const cResult = obj.c(10);
      ({ text, onPress } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === tmp4.arrowButtonText) {
        let tmp5;
        let tmp7;
        if (cResult[1] === text) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== tmp4.arrowButtonIcon) {
          const obj2 = { size: native.Icon.Sizes.SMALL, source: AssetRegistryDefault, style: tmp4.arrowButtonIcon };
          const Icon = native.Icon;
          const tmp10 = unpackModuleId(Icon, obj2);
          cResult[3] = tmp4.arrowButtonIcon;
          cResult[4] = tmp10;
          tmp7 = tmp10;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === onPress) {
          if (cResult[6] === tmp4.arrowButton) {
            if (cResult[7] === tmp5) {
              let tmp11;
              if (cResult[8] === tmp7) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
        }
        const obj3 = { accessibilityRole: "button", style: tmp4.arrowButton, onPress, children: items };
        items = [tmp5, tmp7];
        const tmp13 = closure_12(Pressables.PressableOpacity, obj3);
        cResult[5] = onPress;
        cResult[6] = tmp4.arrowButton;
        cResult[7] = tmp5;
        cResult[8] = tmp7;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      }
      const obj4 = { variant: "text-md/semibold", color: "text-default", style: tmp4.arrowButtonText, children: text };
      const tmp6 = unpackModuleId(Text_Text.Text, obj4);
      cResult[0] = tmp4.arrowButtonText;
      cResult[1] = text;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let items;
      let onPress;
      let text;
      ({ text, onPress } = arg0);
      const tmp = closure_13();
      const obj = { accessibilityRole: "button", style: tmp.arrowButton, onPress, children: items };
      const PressableOpacity = Pressables.PressableOpacity;
      items = [,];
      const obj2 = { variant: "text-md/semibold", color: "text-default", style: tmp.arrowButtonText, children: text };
      items[0] = unpackModuleId(Text_Text.Text, obj2);
      const obj3 = { size: native.Icon.Sizes.SMALL, source: AssetRegistryDefault, style: tmp.arrowButtonIcon };
      const Icon = native.Icon;
      items[1] = unpackModuleId(Icon, obj3);
      return closure_12(PressableOpacity, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let first1;
      let tmp9;
      const obj = first(576);
      const cResult = obj.c(6);
      const obj2 = NativePaymentHooksDefault;
      const mobileStoreFront = obj2.useMobileStoreFront();
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      first = _slicedToArray(obj3.useSubscriptionPlan(arg0), 1)[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionPlanStore];
        cResult[0] = items;
        first1 = items;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] !== first.id) {
        const fn = function n() {
          return SubscriptionPlanStore.get(first.id);
        };
        cResult[1] = first.id;
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = first(573);
      const stateFromStores = tmpResult.useStateFromStores(first1, tmp9);
      const price = useStoreFrontPriceDefault(stateFromStores, mobileStoreFront).price;
      let str = "No Price Available";
      if (null != price) {
        if (cResult[3] === price.amount) {
          let tmp11;
          if (cResult[4] === price.currency) {
            tmp11 = cResult[5];
          }
          const _HermesInternal = HermesInternal;
          str = "" + tmp11 + "/mo.";
        }
        const tmpResult2 = first(6750);
        const formatPriceResult = tmpResult2.formatPrice(price.amount, price.currency);
        cResult[3] = price.amount;
        cResult[4] = price.currency;
        cResult[5] = formatPriceResult;
        tmp11 = formatPriceResult;
      }
      return str;
    }
  : (arg0) => {
      let id;
      const obj = NativePaymentHooksDefault;
      const mobileStoreFront = obj.useMobileStoreFront();
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      _require = _slicedToArray(obj2.useSubscriptionPlan(arg0), 1)[0];
      const items = [SubscriptionPlanStore];
      const obj3 = require("useStateFromStores");
      const stateFromStores = obj3.useStateFromStores(items, () => SubscriptionPlanStore.get(id.id));
      const price = useStoreFrontPriceDefault(stateFromStores, mobileStoreFront).price;
      let str = "No Price Available";
      const tmp3 = _require;
      if (null != price) {
        const _HermesInternal = HermesInternal;
        const tmp3Result = tmp3(6750);
        str = "" + tmp3Result.formatPrice(price.amount, price.currency) + "/mo.";
      }
      return str;
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/Elements.tsx");

export const TruncatedText = tmp5;
export const ArrowButton = tmp6;
export const useFormattedSubscriptionPlan = tmp7;
