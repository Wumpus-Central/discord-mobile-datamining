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
const createStyles = fn(4890);
let obj2 = {
  containerOuter: { flex: 1, overflow: "hidden" },
  containerOuterTablet: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.md,
    flex: 1,
  },
  container: { flex: 1 },
  containerTablet: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  flex: 1,
};
obj2.containerTablet = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
      if (cResult[2] === left) {
        if (cResult[3] === top) {
          if (cResult[4] === containerOuterTablet) {
            if (cResult[5] === tmp10.containerOuter) {
              if (cResult[6] === tmp10.containerOuterTablet) {
                if (cResult[7] === tmp8) {
                  const tmp12 = tmp8 ? tmp10.containerTablet : tmp10.container;
                  const _Symbol = Symbol;
                  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp16 = jsx(SettingsNavigatorDefault, {});
                    cResult[9] = tmp16;
                    let tmp14 = tmp16;
                  } else {
                    tmp14 = cResult[9];
                  }
                  if (cResult[10] !== tmp12) {
                    const obj3 = { style: tmp12, children: tmp14 };
                    const tmp20 = <View style={tmp12}>{tmp14}</View>;
                    cResult[10] = tmp12;
                    cResult[11] = tmp20;
                    let tmp17 = tmp20;
                  } else {
                    tmp17 = cResult[11];
                  }
                  if (cResult[12] === cResult[8]) {
                    if (cResult[13] === tmp17) {
                      let tmp21 = cResult[14];
                    }
                    return tmp21;
                  }
                  const obj4 = { style: cResult[8], children: tmp17 };
                  const tmp24 = <View style={cResult[8]}>{tmp17}</View>;
                  cResult[12] = cResult[8];
                  cResult[13] = tmp17;
                  cResult[14] = tmp24;
                  tmp21 = tmp24;
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
  : () => {
      const reportProfileModalTransition = profileModalTransition.useReportProfileModalTransition();
      const rect = useSafeAreaInsetsDefault();
      const top = rect.top;
      const left = rect.left;
      const right = rect.right;
      let tmp5 = useIsWindowLargeDefault();
      if (tmp5) {
        tmp5 = !DeviceUtils.isIpadOS();
        const tmpResult = DeviceUtils;
      }
      closure_3 = tmp5;
      const tmp6 = closure_6();
      closure_4 = tmp6;
      let items = [tmp6, tmp5, top, left, right];
      let obj2 = {
        style: noop.useMemo(() => {
          if (closure_3) {
            const items = [closure_4.containerOuterTablet];
            const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
            items[1] = obj2;
            let items1 = items;
          } else {
            items1 = [closure_4.containerOuter];
            const obj = { paddingLeft: left, paddingRight: right };
            items1[1] = obj;
          }
          return items1;
        }, items),
        children: null,
      };
      obj2.children = (
        <View style={tmp5 ? tmp6.containerTablet : tmp6.container}>{jsx(SettingsNavigatorDefault, {})}</View>
      );
      return (
        <View
          style={noop.useMemo(() => {
            if (closure_3) {
              const items = [closure_4.containerOuterTablet];
              const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
              items[1] = obj2;
              let items1 = items;
            } else {
              items1 = [closure_4.containerOuter];
              const obj = { paddingLeft: left, paddingRight: right };
              items1[1] = obj;
            }
            return items1;
          }, items)}
        >
          {null}
        </View>
      );
    };
