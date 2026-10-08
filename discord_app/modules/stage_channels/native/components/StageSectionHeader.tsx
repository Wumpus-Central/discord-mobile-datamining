// discord_app/modules/stage_channels/native/components/StageSectionHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _modDef6837 from "../../../../../_runtime/metro/06837__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: hasOwnProperty, jsx: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  section: { height: 48, paddingHorizontal: 4 },
  children: { marginLeft: 12 },
  collapseButton: { marginLeft: "auto" },
  collapseIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  audience: null,
};
let obj3 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.audience = {
  height: 48,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: 4,
  borderRadius: nativeDefault.radii.xs,
};
let closure_7 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function StageSectionHeaderTsx1(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?"180deg":"0deg",{duration:150})}]};}',
};
const __initData2 = {
  code: "function StageSectionHeaderTsx2(){const{withTiming,collapsed}=this.__closure;return{transform:[{rotate:withTiming(collapsed?'180deg':'0deg',{duration:150})}]};}",
};
const ReactCompilerGating = fn(558);
let obj4 = {
  height: 48,
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingHorizontal: 4,
  borderRadius: nativeDefault.radii.xs,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSectionHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StageSectionHeader(arg0) {
      const cResult = collapsed(576).c(23);
      ({ label, count, collapsed } = arg0);
      ({ onToggleCollapse, children } = arg0);
      const tmp4 = closure_7();
      let obj = collapsed(576);
      const fn = function n() {
        let str = "0deg";
        if (collapsed) {
          str = "180deg";
        }
        const obj2 = { transform: null };
        const items = [{ rotate: timing.withTiming(str, { duration: 150 }) }];
        obj2.transform = items;
        return obj2;
      };
      let obj2 = collapsed(4810);
      fn.__closure = { withTiming: collapsed(5091).withTiming, collapsed };
      fn.__workletHash = 8513320305499;
      fn.__initData = __initData;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === count) {
        if (cResult[1] === label) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp4.children) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] !== tmp4.collapseIcon) {
            const obj4 = { source: _modDef6837, style: tmp4.collapseIcon };
            const tmp16 = closure_6(collapsed(1200).Icon, obj4);
            cResult[6] = tmp4.collapseIcon;
            cResult[7] = tmp16;
            let tmp13 = tmp16;
          } else {
            tmp13 = cResult[7];
          }
          if (cResult[8] === tmp13) {
            if (cResult[9] === animatedStyle) {
              let tmp17 = cResult[10];
            }
            if (cResult[11] === tmp4.collapseButton) {
              if (cResult[12] === tmp17) {
                let tmp21 = cResult[13];
              }
              if (cResult[14] === onToggleCollapse) {
                if (cResult[15] === tmp4.audience) {
                  if (cResult[16] === tmp6) {
                    if (cResult[17] === tmp8) {
                      if (cResult[18] === tmp21) {
                        let tmp25 = cResult[19];
                      }
                      if (cResult[20] === tmp4.section) {
                        if (cResult[21] === tmp25) {
                          let tmp29 = cResult[22];
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
              const obj6 = { style: tmp4.audience, onPress: onToggleCollapse, children: null };
              let items = [tmp6, tmp8, tmp21];
              obj6.children = items;
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
        children: null,
      };
      const items1 = [label, " \u2014 ", count];
      obj10.children = items1;
      const tmp7 = closure_5(collapsed(5086).Text, obj10);
      cResult[0] = count;
      cResult[1] = label;
      cResult[2] = tmp7;
      tmp6 = tmp7;
      const obj3 = { withTiming: collapsed(5091).withTiming, collapsed };
    }
  : function StageSectionHeader(collapsed) {
      collapsed = collapsed.collapsed;
      const children = collapsed.children;
      ({ label, count, onToggleCollapse } = collapsed);
      const tmp = closure_7();
      class T {
        constructor() {
          obj = closure_0(closure_2[8]);
          str = "0deg";
          if (collapsed) {
            str = "180deg";
          }
          obj1 = { transform: null };
          obj4 = { rotate: obj.withTiming(str, { duration: 150 }) };
          items = [];
          items[0] = obj4;
          obj1.transform = items;
          return obj1;
        }
      }
      let obj = collapsed(4810);
      const tmp2 = collapsed;
      T.__closure = { withTiming: collapsed(5091).withTiming, collapsed };
      T.__workletHash = 13209446315864;
      T.__initData = __initData2;
      const obj3 = { style: tmp.section, children: null };
      const obj4 = { style: tmp.audience, onPress: onToggleCollapse, children: null };
      const animatedStyle = obj.useAnimatedStyle(T);
      const obj5 = {
        variant: "text-md/semibold",
        color: "text-overlay-light",
        accessibilityRole: "header",
        children: null,
      };
      let items = [label, " \u2014 ", count];
      obj5.children = items;
      const items1 = [closure_5(collapsed(5086).Text, obj5), ,];
      let tmp5Result = null != children;
      if (tmp5Result) {
        const obj6 = { style: tmp.children, children };
        tmp5Result = closure_6(closure_4, obj6);
      }
      items1[1] = tmp5Result;
      const obj7 = { style: tmp.collapseButton, children: null };
      const obj8 = { style: animatedStyle, children: null };
      let obj2 = { withTiming: collapsed(5091).withTiming, collapsed };
      obj8.children = closure_6(tmp2(1200).Icon, { source: _modDef6837, style: tmp.collapseIcon });
      obj7.children = closure_6(ReanimatedRexportDefault.View, obj8);
      items1[2] = closure_6(closure_4, obj7);
      obj4.children = items1;
      obj3.children = closure_5(closure_3, obj4);
      return closure_6(closure_4, obj3);
    };
