// discord_app/modules/intelligence_layer/search/native/components/SmartSearchEmptyScreen.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../intl/index.native.tsx";
import _modDef3919 from "../../SmartSearch.messages.js";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import SuggestedSearchListDefault from "SuggestedSearchList.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let smartSearchQuery;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, copy: obj3 };
obj2 = { flex: 1, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_4,
};
let closure_7 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (smartSearchQuery) => {
        let first;
        let intl;
        let intl2;
        let items1;
        let items2;
        let tmp10;
        let tmp7;
        let tmp8;
        const obj = react2;
        const cResult = obj.c(18);
        smartSearchQuery = smartSearchQuery.smartSearchQuery;
        const tmp4 = closure_7();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { includeKeyboardHeight: true };
          cResult[0] = obj2;
          first = obj2;
        } else {
          first = cResult[0];
        }
        const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function f() {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            const announce = AccessibilityAnnouncer.announce;
            const intl = intl3.intl;
            announce(intl.string(intl3.t.V6nAfF), "polite");
          };
          const items = [];
          cResult[1] = fn;
          cResult[2] = items;
          tmp8 = items;
          tmp7 = fn;
        } else {
          tmp7 = cResult[1];
          tmp8 = cResult[2];
        }
        const effect = react.useEffect(tmp7, tmp8);
        if (cResult[3] !== insets.bottom) {
          const obj3 = { paddingBottom: insets.bottom };
          cResult[3] = insets.bottom;
          cResult[4] = obj3;
          tmp10 = obj3;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === tmp4.container) {
          let tmp11;
          let tmp12;
          let tmp15;
          let tmp18;
          let tmp21;
          if (cResult[6] === tmp10) {
            tmp11 = cResult[7];
          }
          if (cResult[8] !== smartSearchQuery) {
            const obj4 = { smartSearchQuery, source: "error_screen" };
            const tmp14 = hasOwnProperty(SuggestedSearchListDefault, obj4);
            cResult[8] = smartSearchQuery;
            cResult[9] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = {
              variant: "text-sm/semibold",
              color: "text-muted",
              accessibilityRole: "header",
              children: intl.string(_modDef3919["HX/WYf"]),
            };
            const Text = Text_Text.Text;
            intl = intl3.intl;
            const tmp17 = hasOwnProperty(Text, obj5);
            cResult[10] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = {
              variant: "text-sm/semibold",
              color: "text-muted",
              accessibilityRole: "header",
              children: intl2.string(_modDef3919["0ySxbu"]),
            };
            const Text2 = Text_Text.Text;
            intl2 = intl3.intl;
            const tmp20 = hasOwnProperty(Text2, obj6);
            cResult[11] = tmp20;
            tmp18 = tmp20;
          } else {
            tmp18 = cResult[11];
          }
          if (cResult[12] !== tmp4.copy) {
            const obj7 = { style: tmp4.copy, children: items1 };
            items1 = [tmp15, tmp18];
            const tmp24 = metroRequire(View, obj7);
            cResult[12] = tmp4.copy;
            cResult[13] = tmp24;
            tmp21 = tmp24;
          } else {
            tmp21 = cResult[13];
          }
          if (cResult[14] === tmp11) {
            if (cResult[15] === tmp12) {
              let tmp25;
              if (cResult[16] === tmp21) {
                tmp25 = cResult[17];
              }
              return tmp25;
            }
          }
          const obj8 = { style: tmp11, children: items2 };
          items2 = [tmp12, tmp21];
          const tmp28 = metroRequire(View, obj8);
          cResult[14] = tmp11;
          cResult[15] = tmp12;
          cResult[16] = tmp21;
          cResult[17] = tmp28;
          tmp25 = tmp28;
        }
        const items3 = [tmp4.container, tmp10];
        cResult[5] = tmp4.container;
        cResult[6] = tmp10;
        cResult[7] = items3;
        tmp11 = items3;
      }
    : (smartSearchQuery) => {
        let intl;
        let intl2;
        let items;
        let items1;
        let items2;
        smartSearchQuery = smartSearchQuery.smartSearchQuery;
        const tmp = closure_7();
        const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
        const effect = react.useEffect(() => {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = intl3.intl;
          announce(intl.string(intl3.t.V6nAfF), "polite");
        }, []);
        const obj = { style: items, children: items1 };
        items = [tmp.container, { paddingBottom: insets.bottom }];
        items1 = [hasOwnProperty(SuggestedSearchListDefault, { smartSearchQuery, source: "error_screen" })];
        const obj2 = { style: tmp.copy, children: items2 };
        const obj3 = {
          variant: "text-sm/semibold",
          color: "text-muted",
          accessibilityRole: "header",
          children: intl.string(_modDef3919["HX/WYf"]),
        };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        items2 = [hasOwnProperty(Text, obj3)];
        const obj4 = {
          variant: "text-sm/semibold",
          color: "text-muted",
          accessibilityRole: "header",
          children: intl2.string(_modDef3919["0ySxbu"]),
        };
        const Text2 = Text_Text.Text;
        intl2 = intl3.intl;
        items2[1] = hasOwnProperty(Text2, obj4);
        items1[1] = metroRequire(View, obj2);
        return metroRequire(View, obj);
      },
);
const result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SmartSearchEmptyScreen.tsx",
);

export default memoResult;
