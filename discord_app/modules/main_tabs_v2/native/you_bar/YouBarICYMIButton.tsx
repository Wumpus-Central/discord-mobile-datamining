// discord_app/modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import FlashIcon2 from "../../../../design/components/Icon/native/redesign/generated/FlashIcon.tsx";
import YouBarConstants from "YouBarConstants.tsx";
import useICYMITabBadgeDefault from "../../../icymi/useICYMITabBadge.tsx";
import YouBarButtonDefault from "YouBarButton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasNameplate;

let obj2;
const YOU_BAR_BUTTON_ICON_SIZE = YouBarConstants.YOU_BAR_BUTTON_ICON_SIZE;
const jsx = Fragment.jsx;
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (hasNameplate) => {
        let obj = react2;
        const cResult = obj.c(10);
        hasNameplate = hasNameplate.hasNameplate;
        const tmp4 = closure_4();
        const showDot = useICYMITabBadgeDefault().showDot;
        let str;
        if (hasNameplate) {
          str = "white";
        }
        if (cResult[0] === tmp4.icon) {
          let tmp6;
          let tmp10;
          let tmp9;
          if (cResult[1] === str) {
            tmp6 = cResult[2];
          }
          const _Symbol = Symbol;
          const badge = tmp4.badge;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v() {
              const obj = RootNavigationRef;
              const rootNavigationRef = obj.getRootNavigationRef();
              if (null != rootNavigationRef) {
                const obj2 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
                rootNavigationRef.navigate("icymi", obj2);
              }
            };
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t["jnXV/V"]);
            cResult[3] = fn;
            cResult[4] = stringResult;
            tmp10 = stringResult;
            tmp9 = fn;
          } else {
            tmp9 = cResult[3];
            tmp10 = cResult[4];
          }
          if (cResult[5] === showDot) {
            if (cResult[6] === hasNameplate) {
              if (cResult[7] === tmp4.badge) {
                let tmp12;
                if (cResult[8] === tmp6) {
                  tmp12 = cResult[9];
                }
                return tmp12;
              }
            }
          }
          const tmp14 = jsx(YouBarButtonDefault, {
            hasNameplate,
            icon: tmp6,
            hasBadge: showDot,
            badgeStyle: badge,
            onPress: tmp9,
            accessibilityLabel: tmp10,
          });
          cResult[5] = showDot;
          cResult[6] = hasNameplate;
          cResult[7] = tmp4.badge;
          cResult[8] = tmp6;
          cResult[9] = tmp14;
          tmp12 = tmp14;
        }
        const tmp7 = jsx(FlashIcon2.FlashIcon, { size: "custom", style: tmp4.icon, color: str });
        cResult[0] = tmp4.icon;
        cResult[1] = str;
        cResult[2] = tmp7;
        tmp6 = tmp7;
      }
    : (hasNameplate) => {
        let str;
        hasNameplate = hasNameplate.hasNameplate;
        const tmp = closure_4();
        const showDot = useICYMITabBadgeDefault().showDot;
        let obj2 = { size: "custom", style: tmp.icon, color: str };
        str = undefined;
        YouBarButtonDefault;
        const FlashIcon = FlashIcon2.FlashIcon;
        if (hasNameplate) {
          str = "white";
        }
        const intl = intl2.intl;
        return (
          <tmp4
            hasNameplate={hasNameplate}
            icon={null}
            hasBadge={showDot}
            badgeStyle={tmp.badge}
            onPress={function onPress() {
              const obj = RootNavigationRef;
              const rootNavigationRef = obj.getRootNavigationRef();
              if (null != rootNavigationRef) {
                const obj2 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
                rootNavigationRef.navigate("icymi", obj2);
              }
            }}
            accessibilityLabel={intl.string(intl2.t["jnXV/V"])}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default memoResult;
