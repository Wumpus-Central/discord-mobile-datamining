// discord_app/modules/main_tabs_v2/native/tabs/settings/Settings.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import DeviceUtils from "../../../../../utils/native/DeviceUtils.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import profileModalTransition from "../../../../user_profile/native/profileModalTransition.tsx";
import SettingsNavigatorDefault from "../../../../user_settings/core/native/SettingsNavigator.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj2 = {
  containerOuter: { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  containerOuterTablet: null,
  container: null,
  containerTablet: null,
};
let obj3 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.containerOuterTablet = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  flex: 1,
};
obj2.container = { flex: 1 };
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  flex: 1,
};
obj2.containerTablet = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Settings() {
      const cResult = c.c(15);
      const reportProfileModalTransition = profileModalTransition.useReportProfileModalTransition();
      ({ top, left, right: containerOuterTablet } = useSafeAreaInsetsDefault());
      const tmp7 = useIsWindowLargeDefault();
      if (cResult[0] !== tmp7) {
        let tmp9 = tmp7;
        if (tmp7) {
          tmp9 = !DeviceUtils.isIpadOS();
          const tmpResult = DeviceUtils;
        }
        cResult[0] = tmp7;
        cResult[1] = tmp9;
        let tmp8 = tmp9;
      } else {
        tmp8 = cResult[1];
      }
      const tmp10 = closure_6();
      if (tmp7) {
        if (tmpResult2.isIpadOS()) {
          let containerOuter = tmp10.containerOuter;
        }
        const tmp11 = tmp8 ? tmp10.containerTablet : tmp10.container;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp15 = jsx(SettingsNavigatorDefault, {});
          cResult[9] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[9];
        }
        if (cResult[10] !== tmp11) {
          const obj3 = { style: tmp11, children: tmp13 };
          const tmp19 = <View style={tmp11}>{tmp13}</View>;
          cResult[10] = tmp11;
          cResult[11] = tmp19;
          let tmp16 = tmp19;
        } else {
          tmp16 = cResult[11];
        }
        if (cResult[12] === containerOuter) {
          if (cResult[13] === tmp16) {
            let tmp20 = cResult[14];
          }
          return tmp20;
        }
        const obj4 = { style: containerOuter, children: tmp16 };
        const tmp23 = <View style={containerOuter}>{tmp16}</View>;
        cResult[12] = containerOuter;
        cResult[13] = tmp16;
        cResult[14] = tmp23;
        tmp20 = tmp23;
        tmpResult2 = DeviceUtils;
      }
      if (cResult[2] === left) {
        if (cResult[3] === top) {
          if (cResult[4] === containerOuterTablet) {
            if (cResult[5] === tmp10.containerOuter) {
              if (cResult[6] === tmp10.containerOuterTablet) {
                if (cResult[7] === tmp8) {
                  containerOuter = cResult[8];
                }
              }
            }
          }
        }
      }
      if (tmp8) {
        const items = [tmp10.containerOuterTablet];
        const obj5 = { paddingTop: top, paddingLeft: left, paddingRight: containerOuterTablet };
        items[1] = obj5;
        let items1 = items;
      } else {
        items1 = [tmp10.containerOuter];
        const obj6 = { paddingLeft: left, paddingRight: containerOuterTablet };
        items1[1] = obj6;
      }
      cResult[2] = left;
      cResult[3] = top;
      cResult[4] = containerOuterTablet;
      ({ containerOuter: tmp3[5], containerOuterTablet } = tmp10);
      cResult[6] = containerOuterTablet;
      cResult[7] = tmp8;
      cResult[8] = items1;
      const tmp6 = useSafeAreaInsetsDefault();
    }
  : function Settings() {
      const reportProfileModalTransition = top(right[7]).useReportProfileModalTransition();
      const rect = left(right[8])();
      top = rect.top;
      left = rect.left;
      right = rect.right;
      const tmp5 = left(right[9])();
      noop = tmp5;
      let tmp6 = tmp5;
      if (tmp5) {
        tmp6 = !tmp(tmp2[10]).isIpadOS();
        const tmpResult = tmp(tmp2[10]);
      }
      closure_4 = tmp6;
      const tmp7 = closure_6();
      let containerOuter = tmp7;
      let items = [tmp7, tmp5, tmp6, top, left, right];
      let obj2 = {
        style: noop.useMemo(() => {
          if (closure_3) {
            if (obj.isIpadOS()) {
              containerOuter = containerOuter.containerOuter;
            }
            return containerOuter;
          }
          if (closure_4) {
            const items = [tmp3.containerOuterTablet];
            const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
            items[1] = obj2;
            containerOuter = items;
          } else {
            containerOuter = [tmp3.containerOuter];
            const obj3 = { paddingLeft: left, paddingRight: right };
            containerOuter[1] = obj3;
          }
        }, items),
        children: null,
      };
      const obj = top(right[7]);
      tmp = top;
      obj2.children = containerOuter(closure_4, {
        style: tmp6 ? tmp7.containerTablet : tmp7.container,
        children: containerOuter(left(right[11]), {}),
      });
      return containerOuter(closure_4, obj2);
    };
