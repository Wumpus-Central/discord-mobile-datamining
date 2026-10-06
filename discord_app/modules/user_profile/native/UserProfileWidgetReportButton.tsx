// discord_app/modules/user_profile/native/UserProfileWidgetReportButton.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import MoreHorizontalIcon2 from "../../../design/components/Icon/native/redesign/generated/MoreHorizontalIcon.tsx";
import ContextMenu from "../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import FlagIcon from "../../../design/components/Icon/native/redesign/generated/FlagIcon.tsx";
import showReportModalForUserWidget from "../showReportModalForUserWidget.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let userId;

let closure_3 = ["ref"];
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_7 = { top: 8, bottom: 8, left: 8, right: 8 };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let first;
      let hitSlop;
      function action() {
        const obj = showReportModalForUserWidget;
        return obj.showReportModalForUserWidget(userId, widget);
      }
      let obj = userId(576);
      const cResult = obj.c(7);
      userId = userId.userId;
      const widget = userId.widget;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(userId(1126).t.D4GvHE);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === userId) {
        let tmp6;
        let tmp7;
        let tmp8;
        if (cResult[2] === widget) {
          tmp6 = cResult[3];
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function h(ref) {
            const merged = Object.assign(_objectWithoutProperties(ref, closure_1_3));
            const intl = userId(dependencyMap[6]).intl;
            const MoreHorizontalIcon = userId(dependencyMap[9]).MoreHorizontalIcon;
            return (
              <Pressable
                ref={ref.ref}
                hitSlop={hitSlop}
                accessibilityRole="button"
                accessibilityLabel={intl.string(userId(dependencyMap[6]).t.xpSHSk)}
              >
                <MoreHorizontalIcon size="sm" color={widget(dependencyMap[10]).colors.TEXT_MUTED} />
              </Pressable>
            );
          };
          cResult[4] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] !== tmp6) {
          const tmp10 = jsx(userId(7590).ContextMenu, { items: tmp6, children: tmp7 });
          cResult[5] = tmp6;
          cResult[6] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
      const items = [{ label: first, variant: "destructive", IconComponent: userId(8348).FlagIcon, action }];
      cResult[1] = userId;
      cResult[2] = widget;
      cResult[3] = items;
      tmp6 = items;
      ({ label: first, variant: "destructive", IconComponent: userId(8348).FlagIcon, action });
    }
  : (arg0) => {
      let hitSlop;
      let intl;
      ({ userId: require, widget: importDefault } = arg0);
      let obj = {
        label: intl.string(intl2.t.D4GvHE),
        variant: "destructive",
        IconComponent: FlagIcon.FlagIcon,
        action() {
          const obj = showReportModalForUserWidget;
          return obj.showReportModalForUserWidget(require, importDefault);
        },
      };
      intl = intl2.intl;
      const items = [obj];
      return jsx(ContextMenu.ContextMenu, {
        items,
        children(ref) {
          const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
          const intl = intl2.intl;
          const MoreHorizontalIcon = MoreHorizontalIcon2.MoreHorizontalIcon;
          return (
            <Pressable
              ref={ref.ref}
              hitSlop={hitSlop}
              accessibilityRole="button"
              accessibilityLabel={intl.string(intl2.t.xpSHSk)}
            >
              <MoreHorizontalIcon size="sm" color={nativeDefault.colors.TEXT_MUTED} />
            </Pressable>
          );
        },
      });
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReportButton.tsx");

export default tmp3;
