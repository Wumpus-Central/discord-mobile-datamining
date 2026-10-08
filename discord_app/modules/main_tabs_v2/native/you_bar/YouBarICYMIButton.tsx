// discord_app/modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import FlashIcon from "../../../../design/components/Icon/native/redesign/generated/FlashIcon.tsx";
import useICYMITabBadgeDefault from "../../../icymi/useICYMITabBadge.tsx";
import YouBarButtonDefault from "YouBarButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const YOU_BAR_BUTTON_ICON_SIZE = fn(15177).YOU_BAR_BUTTON_ICON_SIZE;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = {
  icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE },
  badge: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND },
};
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function YouBarICYMIButton(hasNameplate) {
        const cResult = c.c(10);
        hasNameplate = hasNameplate.hasNameplate;
        const tmp4 = closure_4();
        const showDot = useICYMITabBadgeDefault().showDot;
        let str;
        if (hasNameplate) {
          str = "white";
        }
        if (cResult[0] === tmp4.icon) {
          if (cResult[1] === str) {
            let tmp6 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v() {
              const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
              if (null != rootNavigationRef) {
                const obj2 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
                rootNavigationRef.navigate("icymi", obj2);
              }
            };
            const intl = util.intl;
            const stringResult = intl.string(util.t["jnXV/V"]);
            cResult[3] = fn;
            cResult[4] = stringResult;
            let tmp10 = stringResult;
            let tmp9 = fn;
          } else {
            tmp9 = cResult[3];
            tmp10 = cResult[4];
          }
          if (cResult[5] === showDot) {
            if (cResult[6] === hasNameplate) {
              if (cResult[7] === tmp4.badge) {
                if (cResult[8] === tmp6) {
                  let tmp12 = cResult[9];
                }
                return tmp12;
              }
            }
          }
          let obj2 = {
            hasNameplate,
            icon: tmp6,
            hasBadge: showDot,
            badgeStyle: tmp4.badge,
            onPress: tmp9,
            accessibilityLabel: tmp10,
          };
          const tmp14 = jsx(YouBarButtonDefault, {
            hasNameplate,
            icon: tmp6,
            hasBadge: showDot,
            badgeStyle: tmp4.badge,
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
        const tmp7 = jsx(FlashIcon.FlashIcon, { size: "custom", style: tmp4.icon, color: str });
        cResult[0] = tmp4.icon;
        cResult[1] = str;
        cResult[2] = tmp7;
        tmp6 = tmp7;
        const obj3 = { size: "custom", style: tmp4.icon, color: str };
      }
    : function YouBarICYMIButton(hasNameplate) {
        hasNameplate = hasNameplate.hasNameplate;
        const tmp = closure_4();
        const obj = {
          hasNameplate,
          icon: null,
          hasBadge: null,
          badgeStyle: null,
          onPress: null,
          accessibilityLabel: null,
        };
        let obj2 = { size: "custom", style: tmp.icon, color: null };
        let str;
        if (hasNameplate) {
          str = "white";
        }
        obj2.color = str;
        obj.icon = jsx(FlashIcon.FlashIcon, { size: "custom", style: tmp.icon, color: null });
        obj.hasBadge = useICYMITabBadgeDefault().showDot;
        obj.badgeStyle = tmp.badge;
        obj.onPress = function onPress() {
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          if (null != rootNavigationRef) {
            const obj2 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
            rootNavigationRef.navigate("icymi", obj2);
          }
        };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(util.t["jnXV/V"]);
        return jsx(YouBarButtonDefault, {
          hasNameplate,
          icon: null,
          hasBadge: null,
          badgeStyle: null,
          onPress: null,
          accessibilityLabel: null,
        });
      },
);
