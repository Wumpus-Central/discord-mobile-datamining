// discord_app/modules/stage_channels/native/components/StageSectionHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import AssetRegistryDefault from "../../../../../_runtime/06653_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj1;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsxs: hasOwnProperty, jsx: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  section: { height: 48, paddingHorizontal: 4 },
  children: { marginLeft: 12 },
  collapseButton: { marginLeft: "auto" },
  collapseIcon: obj2,
  audience: obj3,
};
obj2 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = {
  height: 48,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: 4,
  borderRadius: nativeDefault.radii.xs,
};
let closure_7 = createStyles(obj);
const __initData = {
  code: 'function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?"180deg":"0deg",{duration:150})}]};}',
};
const __initData2 = {
  code: "function StageSectionHeaderTsx2(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}",
};
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let collapsed;
      let count;
      let items;
      let items1;
      let label;
      let onToggleCollapse;
      let obj = collapsed(576);
      const cResult = obj.c(23);
      ({ label, count, collapsed } = arg0);
      ({ onToggleCollapse, children } = arg0);
      const tmp4 = closure_7();
      const obj2 = collapsed(4612);
      const fn = function n() {
        let items;
        let str = "0deg";
        const withTiming = timing.withTiming;
        timing;
        if (collapsed) {
          str = "180deg";
        }
        const obj = { transform: items };
        items = [{ rotate: withTiming(str, { duration: 150 }) }];
        ({ rotate: withTiming(str, { duration: 150 }) });
        return obj;
      };
      fn.__closure = { withTiming: collapsed(4891).withTiming, collapsed };
      fn.__workletHash = 8513320305499;
      fn.__initData = __initData;
      ({ withTiming: collapsed(4891).withTiming, collapsed });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === count) {
        let tmp6;
        if (cResult[1] === label) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === children) {
          let tmp8;
          let tmp13;
          if (cResult[4] === tmp4.children) {
            tmp8 = cResult[5];
          }
          if (cResult[6] !== tmp4.collapseIcon) {
            const obj4 = { source: AssetRegistryDefault, style: tmp4.collapseIcon };
            const Icon = collapsed(1188).Icon;
            const tmp16 = closure_6(Icon, obj4);
            cResult[6] = tmp4.collapseIcon;
            cResult[7] = tmp16;
            tmp13 = tmp16;
          } else {
            tmp13 = cResult[7];
          }
          if (cResult[8] === tmp13) {
            let tmp17;
            if (cResult[9] === animatedStyle) {
              tmp17 = cResult[10];
            }
            if (cResult[11] === tmp4.collapseButton) {
              let tmp21;
              if (cResult[12] === tmp17) {
                tmp21 = cResult[13];
              }
              if (cResult[14] === onToggleCollapse) {
                if (cResult[15] === tmp4.audience) {
                  if (cResult[16] === tmp6) {
                    if (cResult[17] === tmp8) {
                      let tmp25;
                      if (cResult[18] === tmp21) {
                        tmp25 = cResult[19];
                      }
                      if (cResult[20] === tmp4.section) {
                        let tmp29;
                        if (cResult[21] === tmp25) {
                          tmp29 = cResult[22];
                        }
                        return tmp29;
                      }
                      const obj5 = { style: tmp4.section, children: tmp25 };
                      const tmp32 = closure_6(closure_4, obj5);
                      cResult[20] = tmp4.section;
                      cResult[21] = tmp25;
                      cResult[22] = tmp32;
                      tmp29 = tmp32;
                    }
                  }
                }
              }
              const obj6 = { style: tmp4.audience, onPress: onToggleCollapse, children: items };
              items = [tmp6, tmp8, tmp21];
              const tmp28 = closure_5(closure_3, obj6);
              cResult[14] = onToggleCollapse;
              cResult[15] = tmp4.audience;
              cResult[16] = tmp6;
              cResult[17] = tmp8;
              cResult[18] = tmp21;
              cResult[19] = tmp28;
              tmp25 = tmp28;
            }
            const obj7 = { style: tmp4.collapseButton, children: tmp17 };
            const tmp24 = closure_6(closure_4, obj7);
            cResult[11] = tmp4.collapseButton;
            cResult[12] = tmp17;
            cResult[13] = tmp24;
            tmp21 = tmp24;
          }
          const obj8 = { style: animatedStyle, children: tmp13 };
          const tmp20 = closure_6(ReanimatedRexportDefault.View, obj8);
          cResult[8] = tmp13;
          cResult[9] = animatedStyle;
          cResult[10] = tmp20;
          tmp17 = tmp20;
        }
        let tmp10 = null != children;
        if (tmp10) {
          const obj9 = { style: tmp4.children, children };
          tmp10 = closure_6(closure_4, obj9);
        }
        cResult[3] = children;
        cResult[4] = tmp4.children;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      const obj10 = {
        variant: "text-md/semibold",
        color: "text-overlay-light",
        accessibilityRole: "header",
        children: items1,
      };
      items1 = [label, " \u2014 ", count];
      const tmp7 = closure_5(collapsed(4886).Text, obj10);
      cResult[0] = count;
      cResult[1] = label;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (collapsed) => {
      let Icon;
      let View;
      let count;
      let items;
      let items1;
      let label;
      let obj4;
      let obj8;
      let obj9;
      let onToggleCollapse;
      collapsed = collapsed.collapsed;
      const children = collapsed.children;
      ({ label, count, onToggleCollapse } = collapsed);
      const tmp = closure_7();
      let obj = collapsed(4612);
      const tmp2 = collapsed;
      class T {
        constructor() {
          tmp = closure_0(closure_2[8]);
          str = "0deg";
          withTiming = tmp.withTiming;
          if (collapsed) {
            str = "180deg";
          }
          obj = { transform: null };
          obj1 = { rotate: withTiming(str, { duration: 150 }) };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      const obj2 = { withTiming: collapsed(4891).withTiming, collapsed };
      T.__closure = obj2;
      T.__workletHash = 13209446315864;
      T.__initData = __initData2;
      const obj3 = { style: tmp.section, children: closure_5(closure_3, obj4) };
      obj4 = { style: tmp.audience, onPress: onToggleCollapse, children: items1 };
      const animatedStyle = obj.useAnimatedStyle(T);
      const obj5 = {
        variant: "text-md/semibold",
        color: "text-overlay-light",
        accessibilityRole: "header",
        children: items,
      };
      items = [label, " \u2014 ", count];
      items1 = [closure_5(collapsed(4886).Text, obj5), ,];
      let tmp5Result = null != children;
      if (tmp5Result) {
        const obj6 = { style: tmp.children, children };
        tmp5Result = closure_6(closure_4, obj6);
      }
      items1[1] = tmp5Result;
      const obj7 = { style: tmp.collapseButton, children: closure_6(View, obj8) };
      obj8 = { style: animatedStyle, children: closure_6(Icon, obj9) };
      View = ReanimatedRexportDefault.View;
      obj9 = { source: AssetRegistryDefault, style: tmp.collapseIcon };
      Icon = tmp2(1188).Icon;
      items1[2] = closure_6(closure_4, obj7);
      return closure_6(closure_4, obj3);
    };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default tmp6;
