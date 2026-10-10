// discord_app/modules/app_launcher/native/screens/home/EmptyState.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = {
  container: {
    padding: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: { textAlign: "center" },
};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyState() {
      const cResult = c.c(6);
      const tmp4 = closure_4();
      const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(
        AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY,
      );
      ({ container, textContainer } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["V7+xhH"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.textContainer) {
        const obj3 = { style: textContainer, variant: "text-md/semibold", color: "text-default", children: first };
        const tmp10 = jsx(Text_Text.Text, {
          style: textContainer,
          variant: "text-md/semibold",
          color: "text-default",
          children: first,
        });
        cResult[1] = tmp4.textContainer;
        cResult[2] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        if (cResult[4] === tmp8) {
          let tmp11 = cResult[5];
        }
        return tmp11;
      }
      const tmp12 = <View style={container}>{tmp8}</View>;
      cResult[3] = tmp4.container;
      cResult[4] = tmp8;
      cResult[5] = tmp12;
      tmp11 = tmp12;
    }
  : function EmptyState() {
      const tmp = closure_4();
      const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(
        AppLauncherTypes.AppLauncherEmptyStateType.HOME_EMPTY,
      );
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["V7+xhH"]);
      obj2.children = jsx(Text_Text.Text, {
        style: tmp.textContainer,
        variant: "text-md/semibold",
        color: "text-default",
        children: null,
      });
      return <View style={tmp.container}>{null}</View>;
    };
