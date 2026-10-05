// discord_app/modules/main_tabs_v2/native/tabs/settings/Settings.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import DeviceUtils from "../../../../../utils/native/DeviceUtils.tsx";
import useIsWindowLargeDefault from "../../../../screen/native/useIsWindowLarge.tsx";
import profileModalTransition from "../../../../user_profile/native/profileModalTransition.tsx";
import SettingsNavigatorDefault from "../../../../user_settings/core/native/SettingsNavigator.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = {
  containerOuter: { flex: 1, overflow: "hidden" },
  containerOuterTablet: obj2,
  container: { flex: 1 },
  containerTablet: obj3,
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  flex: 1,
};
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", flex: 1 };
let closure_6 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items1;
      let left;
      let right;
      let tmp8;
      let top;
      const obj = react2;
      const cResult = obj.c(15);
      const obj2 = profileModalTransition;
      const reportProfileModalTransition = obj2.useReportProfileModalTransition();
      ({ top, left, right } = useSafeAreaInsetsDefault());
      useSafeAreaInsetsDefault();
      const tmp7 = useIsWindowLargeDefault();
      if (cResult[0] !== tmp7) {
        let tmp9 = tmp7;
        if (tmp9) {
          const tmpResult = DeviceUtils;
          tmp9 = !tmpResult.isIpadOS();
        }
        cResult[0] = tmp7;
        cResult[1] = tmp9;
        tmp8 = tmp9;
      } else {
        tmp8 = cResult[1];
      }
      const tmp10 = closure_6();
      if (cResult[2] === left) {
        if (cResult[3] === top) {
          if (cResult[4] === right) {
            if (cResult[5] === tmp10.containerOuter) {
              if (cResult[6] === tmp10.containerOuterTablet) {
                let tmp11;
                let tmp14;
                let tmp17;
                if (cResult[7] === tmp8) {
                  tmp11 = cResult[8];
                }
                const tmp12 = tmp8 ? tmp10.containerTablet : tmp10.container;
                const _Symbol = Symbol;
                if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp16 = jsx(SettingsNavigatorDefault, {});
                  cResult[9] = tmp16;
                  tmp14 = tmp16;
                } else {
                  tmp14 = cResult[9];
                }
                if (cResult[10] !== tmp12) {
                  const tmp20 = <View style={tmp12}>{tmp14}</View>;
                  cResult[10] = tmp12;
                  cResult[11] = tmp20;
                  tmp17 = tmp20;
                } else {
                  tmp17 = cResult[11];
                }
                if (cResult[12] === tmp11) {
                  let tmp21;
                  if (cResult[13] === tmp17) {
                    tmp21 = cResult[14];
                  }
                  return tmp21;
                }
                const tmp24 = <View style={tmp11}>{tmp17}</View>;
                cResult[12] = tmp11;
                cResult[13] = tmp17;
                cResult[14] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
        }
      }
      if (tmp8) {
        const items = [tmp10.containerOuterTablet];
        const obj5 = { paddingTop: top, paddingLeft: left, paddingRight: right };
        items[1] = obj5;
        items1 = items;
      } else {
        items1 = [tmp10.containerOuter];
        const obj6 = { paddingLeft: left, paddingRight: right };
        items1[1] = obj6;
      }
      cResult[2] = left;
      cResult[3] = top;
      cResult[4] = right;
      cResult[5] = tmp10.containerOuter;
      cResult[6] = tmp10.containerOuterTablet;
      cResult[7] = tmp8;
      cResult[8] = items1;
      tmp11 = items1;
    }
  : () => {
      let obj = profileModalTransition;
      const reportProfileModalTransition = obj.useReportProfileModalTransition();
      const rect = useSafeAreaInsetsDefault();
      const top = rect.top;
      const left = rect.left;
      const right = rect.right;
      let tmp5 = useIsWindowLargeDefault();
      if (tmp5) {
        const tmpResult = DeviceUtils;
        tmp5 = !tmpResult.isIpadOS();
      }
      let closure_3 = tmp5;
      const tmp6 = closure_6();
      let closure_4 = tmp6;
      let items = [tmp6, tmp5, top, left, right];
      ({ style: tmp5 ? tmp6.containerTablet : tmp6.container, children: jsx(SettingsNavigatorDefault, {}) });
      return (
        <View
          style={react.useMemo(() => {
            let items1;
            if (closure_3) {
              const items = [closure_4.containerOuterTablet];
              const obj2 = { paddingTop: top, paddingLeft: left, paddingRight: right };
              items[1] = obj2;
              items1 = items;
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
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/settings/Settings.tsx");

export default tmp3;
