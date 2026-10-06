// discord_app/modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import QuestDockConstants from "QuestDockConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT;
let QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT;
let QUEST_DOCK_COLLAPSED_HEIGHT;
let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ AccessibilityInfo: hasOwnProperty, View: metroRequire } = react_native);
const QuestDockMode = QuestConstants.QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
({
  QUEST_DOCK_CONTENT_BORDER_RADII: c9,
  QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: c10,
  QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: unpackModuleId,
  QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT,
  QUEST_DOCK_COLLAPSED_HEIGHT,
  QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT,
} = QuestDockConstants);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  header: obj2,
  secondaryContent: { flexGrow: 0, flexShrink: 0 },
  secondaryContentStretched: { alignSelf: "stretch" },
  secondaryContentOverlay: { justifyContent: "center", position: "absolute", bottom: 0, top: 0, right: 0 },
  expandedContent: obj3,
  leadingContent: { alignItems: "center", alignSelf: "stretch", flex: 1, flexDirection: "row" },
  actionDisclosures: { alignItems: "center", display: "flex", flexDirection: "row", gap: 4 },
  actionDisclosuresIcon: { height: 14, width: 14 },
  tertiaryContent: { opacity: 0.7 },
};
obj2 = {
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  height: QUEST_DOCK_COLLAPSED_HEIGHT,
  overflow: "hidden",
  paddingRight: QUEST_DOCK_COLLAPSED_HEADER_PADDING_RIGHT,
  paddingLeft: QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT,
  gap: nativeDefault.space.PX_8,
  position: "absolute",
  zIndex: 2,
};
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_15 = createStyles(obj);
function questDockHeaderLayoutAnimation(originX) {
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  const obj = {
    initialValues: {
      originX: originX.currentOriginX,
      originY: originX.currentOriginY,
      width: originX.currentWidth,
      height: originX.currentHeight,
    },
    animations: size,
  };
  size = {
    originX: obj3.withSpring(originX.targetOriginX, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),
    originY: obj4.withSpring(originX.targetOriginY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),
    height: obj5.withSpring(originX.targetHeight, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),
    width: obj6.withSpring(originX.targetWidth, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),
  };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
let obj4 = { withSpring: spring.withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
questDockHeaderLayoutAnimation.__closure = obj4;
questDockHeaderLayoutAnimation.__workletHash = 13829887811453;
questDockHeaderLayoutAnimation.__initData = {
  code: "function questDockHeaderLayoutAnimation_QuestDockBackgroundBlurHeaderTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:withSpring(values.targetHeight,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}};}",
};
const __initData = {
  code: "function QuestDockBackgroundBlurHeaderTsx2(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}",
};
const __initData2 = {
  code: "function QuestDockBackgroundBlurHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData3 = {
  code: "function QuestDockBackgroundBlurHeaderTsx4(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}",
};
const __initData4 = {
  code: "function QuestDockBackgroundBlurHeaderTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData5 = {
  code: "function QuestDockBackgroundBlurHeaderTsx6(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}",
};
const __initData6 = {
  code: 'function QuestDockBackgroundBlurHeaderTsx7(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?"auto":"none"};}',
};
const __initData7 = {
  code: "function QuestDockBackgroundBlurHeaderTsx8(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}",
};
const __initData8 = {
  code: "function QuestDockBackgroundBlurHeaderTsx9(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData9 = {
  code: "function QuestDockBackgroundBlurHeaderTsx10(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}",
};
const __initData10 = {
  code: "function QuestDockBackgroundBlurHeaderTsx11(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData11 = {
  code: "function QuestDockBackgroundBlurHeaderTsx12(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED*-1:0};}",
};
const __initData12 = {
  code: "function QuestDockBackgroundBlurHeaderTsx13(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData13 = {
  code: "function QuestDockBackgroundBlurHeaderTsx14(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED}=this.__closure;return{right:activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED};}",
};
const __initData14 = {
  code: "function QuestDockBackgroundBlurHeaderTsx15(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}",
};
const __initData15 = {
  code: "function QuestDockBackgroundBlurHeaderTsx16(){const{activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,withSpring,questDockAnimatedBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs}=this.__closure;return{borderRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomRightRadius:activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:withSpring(questDockAnimatedBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),width:questDockWrapperSpecs.get().width};}",
};
const __initData16 = {
  code: "function QuestDockBackgroundBlurHeaderTsx17(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let Text;
        let activeQuestDockMode;
        let animatedStyle6;
        let blurHash;
        let children;
        let closure_4;
        let collapsedContent;
        let hideBlurWhenCollapsed;
        let intl;
        let intl2;
        let items1;
        let items11;
        let items12;
        let items13;
        let items2;
        let items3;
        let items4;
        let obj23;
        let obj27;
        let onDisclosurePress;
        let onSubmenuPress;
        let promotedLabelLeading;
        let secondaryContentWidth;
        let tmp10;
        let tmp11;
        let tmp27Result;
        let tmp9;
        let token;
        let withPressableDisclosure;
        const tmp = activeQuestDockMode;
        let obj = activeQuestDockMode(576);
        const cResult = obj.c(66);
        ({
          blurHash,
          children,
          collapsedContent,
          secondaryContentWidth,
          withPressableDisclosure,
          promotedLabelLeading,
          hideBlurWhenCollapsed,
          onDisclosurePress,
          onSubmenuPress,
        } = arg0);
        let obj2 = react;
        const tmp6 = undefined !== hideBlurWhenCollapsed && hideBlurWhenCollapsed;
        const context = react.useContext(tmp(14913).QuestDockGestureContext);
        activeQuestDockMode = context.activeQuestDockMode;
        const questDockWrapperSpecs = context.questDockWrapperSpecs;
        [tmp9, dependencyMap] = token(react.useState(false), 2);
        token(react.useState(false), 2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n() {
            const obj = utils_PlatformUtils;
            if (obj.isIOS()) {
              const result = hasOwnProperty.isReduceTransparencyEnabled();
              result.then(dependencyMap);
              let closure_0 = hasOwnProperty.addEventListener("reduceTransparencyChanged", dependencyMap);
              return () => closure_0.remove();
            }
          };
          let items = [];
          let num = 0;
          cResult[0] = fn;
          let num2 = 1;
          cResult[1] = items;
          tmp10 = fn;
          tmp11 = items;
        } else {
          [tmp10, tmp11] = cResult;
        }
        const effect = obj2.useEffect(tmp10, tmp11);
        const tmpResult = tmp(4586);
        token = tmpResult.useToken(questDockWrapperSpecs(587).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
        const tmp15 = questDockWrapperSpecs(15001)(token);
        react = tmp15;
        const tmpResult10 = tmp(4618);
        class J {
          constructor() {
            let items;
            let width;
            let withSpringResult;
            let withSpringResult1;
            const obj2 = {
              borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token,
              borderTopRightRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token,
              borderBottomLeftRadius: withSpringResult,
              borderBottomRightRadius: withSpringResult1,
              width,
              transform: items,
            };
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              withSpringResult = c9;
            } else {
              const obj3 = spring;
              withSpringResult = obj3.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
            }
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              withSpringResult1 = c9;
            } else {
              const obj4 = spring;
              withSpringResult1 = obj4.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
            }
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              width = questDockWrapperSpecs.get().width - 2 * unpackModuleId;
            } else {
              width = questDockWrapperSpecs.get().width;
            }
            const withSpring = spring.withSpring;
            let num2 = 0;
            spring;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num2 = unpackModuleId;
            }
            items = [{ translateX: withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }];
            ({ translateX: withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) });
            const withSpring2 = spring.withSpring;
            let num3 = 0;
            spring;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num3 = unpackModuleId;
            }
            items[1] = { translateY: withSpring2(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
            ({ translateY: withSpring2(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) });
            return obj2;
          }
        }
        let obj3 = {
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_CONTENT_BORDER_RADII,
          questDockBorderRadius: token,
          withSpring: tmp(5604).withSpring,
          questDockAnimatedBorderRadius: tmp15,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
          questDockWrapperSpecs,
          QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11,
        };
        J.__closure = obj3;
        J.__workletHash = 17202411570804;
        J.__initData = __initData;
        const animatedStyle = tmpResult10.useAnimatedStyle(J);
        const fn2 = function $() {
          const withSpring = spring.withSpring;
          let num = 1;
          spring;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = 0;
          }
          const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
          return obj;
        };
        const tmpResult11 = tmp(4618);
        let obj4 = {
          withSpring: tmp(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        fn2.__closure = obj4;
        fn2.__workletHash = 5804990093011;
        fn2.__initData = __initData2;
        const animatedStyle1 = tmpResult11.useAnimatedStyle(fn2);
        function ee() {
          let right = 0;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            right = -1 * authStore;
          }
          return { right };
        }
        const obj5 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
        ee.__closure = obj5;
        ee.__workletHash = 14001429324395;
        ee.__initData = __initData3;
        const tmpResult12 = tmp(4618);
        const animatedStyle2 = tmpResult12.useAnimatedStyle(ee);
        function te() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = 1;
          }
          const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
          return obj;
        }
        const tmpResult13 = tmp(4618);
        const obj6 = {
          withSpring: tmp(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        te.__closure = obj6;
        te.__workletHash = 6229744150165;
        te.__initData = __initData4;
        const animatedStyle3 = tmpResult13.useAnimatedStyle(te);
        function oe() {
          let right = 0;
          if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
            right = authStore;
          }
          return { right };
        }
        oe.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
        oe.__workletHash = 10870034799551;
        oe.__initData = __initData5;
        const tmpResult14 = tmp(4618);
        const animatedStyle4 = tmpResult14.useAnimatedStyle(oe);
        function ie() {
          let pointerEvents = "none";
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            pointerEvents = "auto";
          }
          return { pointerEvents };
        }
        ie.__closure = { activeQuestDockMode, QuestDockMode };
        ie.__workletHash = 800759970563;
        ie.__initData = __initData6;
        const tmpResult15 = tmp(4618);
        const animatedProps = tmpResult15.useAnimatedProps(ie);
        const tmpResult16 = tmp(4618);
        class De {
          constructor() {
            let withSpringResult;
            let withSpringResult1;
            const obj2 = {
              borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token,
              borderBottomLeftRadius: withSpringResult,
              borderBottomRightRadius: withSpringResult1,
              width: questDockWrapperSpecs.get().width,
            };
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              withSpringResult = c9;
            } else {
              const obj3 = spring;
              withSpringResult = obj3.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
            }
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              withSpringResult1 = c9;
            } else {
              const obj4 = spring;
              withSpringResult1 = obj4.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
            }
            return obj2;
          }
        }
        De.__closure = {
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_CONTENT_BORDER_RADII,
          questDockBorderRadius: token,
          withSpring: tmp(5604).withSpring,
          questDockAnimatedBorderRadius: tmp15,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
          questDockWrapperSpecs,
        };
        De.__workletHash = 8904986205240;
        De.__initData = __initData7;
        ({
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_CONTENT_BORDER_RADII,
          questDockBorderRadius: token,
          withSpring: tmp(5604).withSpring,
          questDockAnimatedBorderRadius: tmp15,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
          questDockWrapperSpecs,
        });
        const animatedStyle5 = tmpResult16.useAnimatedStyle(De);
        function re() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = 1;
          }
          const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
          return obj;
        }
        const useAnimatedStyle = tmp(4618).useAnimatedStyle;
        const tmpResult17 = tmp(4618);
        re.__closure = {
          withSpring: tmp(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        re.__workletHash = 10022958892825;
        re.__initData = __initData8;
        ({
          withSpring: tmp(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        });
        if (tmp6) {
          animatedStyle6 = useAnimatedStyle(re);
        }
        const tmp25 = closure_15();
        if (cResult[2] === onDisclosurePress) {
          if (cResult[3] === tmp25.actionDisclosures) {
            if (cResult[4] === tmp25.actionDisclosuresIcon) {
              if (cResult[5] === tmp25.tertiaryContent) {
                let tmp26;
                if (cResult[6] === (undefined !== withPressableDisclosure && withPressableDisclosure)) {
                  tmp26 = cResult[7];
                }
                if (cResult[8] === animatedStyle) {
                  let tmp32;
                  let tmp33;
                  if (cResult[9] === tmp25.header) {
                    tmp32 = cResult[10];
                  }
                  if (cResult[11] === blurHash) {
                    if (cResult[12] === animatedStyle5) {
                      if (cResult[13] === animatedStyle6) {
                        if (cResult[14] === tmp9) {
                          tmp33 = cResult[15];
                        }
                        if (cResult[16] === children) {
                          if (cResult[17] === (undefined !== promotedLabelLeading && promotedLabelLeading)) {
                            let tmp40;
                            if (cResult[18] === tmp25.leadingContent) {
                              tmp40 = cResult[19];
                            }
                            if (cResult[20] === secondaryContentWidth) {
                              let tmp44;
                              if (cResult[21] === tmp25.secondaryContentStretched) {
                                tmp44 = cResult[22];
                              }
                              if (cResult[23] === tmp25.secondaryContent) {
                                let tmp47;
                                if (cResult[24] === tmp44) {
                                  tmp47 = cResult[25];
                                }
                                if (cResult[26] === animatedStyle2) {
                                  let tmp48;
                                  if (cResult[27] === tmp25.secondaryContentOverlay) {
                                    tmp48 = cResult[28];
                                  }
                                  if (cResult[29] === collapsedContent) {
                                    let tmp49;
                                    if (cResult[30] === animatedStyle1) {
                                      tmp49 = cResult[31];
                                    }
                                    if (cResult[32] === tmp48) {
                                      let tmp52;
                                      if (cResult[33] === tmp49) {
                                        tmp52 = cResult[34];
                                      }
                                      if (cResult[35] === animatedStyle4) {
                                        let tmp58;
                                        if (
                                          cResult[36] ===
                                          (null != secondaryContentWidth && tmp25.secondaryContentOverlay)
                                        ) {
                                          tmp58 = cResult[37];
                                        }
                                        if (cResult[38] === animatedStyle3) {
                                          let tmp59;
                                          if (cResult[39] === tmp25.expandedContent) {
                                            tmp59 = cResult[40];
                                          }
                                          if (cResult[41] === tmp26) {
                                            let tmp60;
                                            let tmp65;
                                            let tmp67;
                                            if (
                                              cResult[42] ===
                                              (undefined !== promotedLabelLeading && promotedLabelLeading)
                                            ) {
                                              tmp60 = cResult[43];
                                            }
                                            const _Symbol = Symbol;
                                            if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl3 = tmp(1126).intl;
                                              const stringResult = intl3.string(tmp(1126).t.PdRCRg);
                                              cResult[44] = stringResult;
                                              tmp65 = stringResult;
                                            } else {
                                              tmp65 = cResult[44];
                                            }
                                            const _Symbol2 = Symbol;
                                            if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                              const obj9 = {
                                                color: questDockWrapperSpecs(587).colors.INTERACTIVE_TEXT_ACTIVE,
                                              };
                                              const MoreHorizontalIcon = tmp(7588).MoreHorizontalIcon;
                                              const tmp69 = closure_12(MoreHorizontalIcon, obj9);
                                              cResult[45] = tmp69;
                                              tmp67 = tmp69;
                                            } else {
                                              tmp67 = cResult[45];
                                            }
                                            if (cResult[46] === onSubmenuPress) {
                                              let tmp70;
                                              if (cResult[47] === tmp25.tertiaryContent) {
                                                tmp70 = cResult[48];
                                              }
                                              if (cResult[49] === tmp59) {
                                                if (cResult[50] === tmp60) {
                                                  let tmp73;
                                                  if (cResult[51] === tmp70) {
                                                    tmp73 = cResult[52];
                                                  }
                                                  if (cResult[53] === animatedProps) {
                                                    if (cResult[54] === tmp58) {
                                                      let tmp76;
                                                      if (cResult[55] === tmp73) {
                                                        tmp76 = cResult[56];
                                                      }
                                                      if (cResult[57] === tmp47) {
                                                        if (cResult[58] === tmp52) {
                                                          let tmp80;
                                                          if (cResult[59] === tmp76) {
                                                            tmp80 = cResult[60];
                                                          }
                                                          if (cResult[61] === tmp80) {
                                                            if (cResult[62] === tmp32) {
                                                              if (cResult[63] === tmp33) {
                                                                let tmp84;
                                                                if (cResult[64] === tmp40) {
                                                                  tmp84 = cResult[65];
                                                                }
                                                                return tmp84;
                                                              }
                                                            }
                                                          }
                                                          const obj10 = {
                                                            style: tmp32,
                                                            layout: questDockHeaderLayoutAnimation,
                                                            children: items1,
                                                          };
                                                          items1 = [tmp33, tmp40, tmp80];
                                                          const tmp87 = closure_14(questDockWrapperSpecs(6577), obj10);
                                                          cResult[61] = tmp80;
                                                          cResult[62] = tmp32;
                                                          cResult[63] = tmp33;
                                                          cResult[64] = tmp40;
                                                          cResult[65] = tmp87;
                                                          tmp84 = tmp87;
                                                        }
                                                      }
                                                      const obj11 = { style: tmp47, children: items2 };
                                                      items2 = [tmp52, tmp76];
                                                      const tmp83 = closure_14(closure_6, obj11);
                                                      cResult[57] = tmp47;
                                                      cResult[58] = tmp52;
                                                      cResult[59] = tmp76;
                                                      cResult[60] = tmp83;
                                                      tmp80 = tmp83;
                                                    }
                                                  }
                                                  const obj12 = {
                                                    animatedProps,
                                                    style: tmp58,
                                                    layout: questDockHeaderLayoutAnimation,
                                                    children: tmp73,
                                                  };
                                                  const tmp79 = closure_12(questDockWrapperSpecs(6577), obj12);
                                                  cResult[53] = animatedProps;
                                                  cResult[54] = tmp58;
                                                  cResult[55] = tmp73;
                                                  cResult[56] = tmp79;
                                                  tmp76 = tmp79;
                                                }
                                              }
                                              const obj13 = { style: tmp59, children: items3 };
                                              items3 = [tmp60, tmp70];
                                              const tmp75 = closure_14(questDockWrapperSpecs(6577), obj13);
                                              cResult[49] = tmp59;
                                              cResult[50] = tmp60;
                                              cResult[51] = tmp70;
                                              cResult[52] = tmp75;
                                              tmp73 = tmp75;
                                            }
                                            const obj14 = {
                                              accessibilityRole: "button",
                                              accessibilityLabel: tmp65,
                                              onPress: onSubmenuPress,
                                              style: tmp25.tertiaryContent,
                                              children: tmp67,
                                            };
                                            const tmp72 = closure_12(tmp(5916).PressableOpacity, obj14);
                                            cResult[46] = onSubmenuPress;
                                            cResult[47] = tmp25.tertiaryContent;
                                            cResult[48] = tmp72;
                                            tmp70 = tmp72;
                                          }
                                          let tmp61 = !tmp5;
                                          if (tmp61) {
                                            const obj15 = { children: items4 };
                                            items4 = [tmp26, closure_12(questDockWrapperSpecs(15014), {})];
                                            tmp61 = closure_14(closure_13, obj15);
                                          }
                                          cResult[41] = tmp26;
                                          cResult[42] = undefined !== promotedLabelLeading && promotedLabelLeading;
                                          cResult[43] = tmp61;
                                          tmp60 = tmp61;
                                        }
                                        const items5 = [tmp25.expandedContent, animatedStyle3];
                                        cResult[38] = animatedStyle3;
                                        cResult[39] = tmp25.expandedContent;
                                        cResult[40] = items5;
                                        tmp59 = items5;
                                      }
                                      const items6 = [
                                        null != secondaryContentWidth && tmp25.secondaryContentOverlay,
                                        animatedStyle4,
                                      ];
                                      cResult[35] = animatedStyle4;
                                      cResult[36] = null != secondaryContentWidth && tmp25.secondaryContentOverlay;
                                      cResult[37] = items6;
                                      tmp58 = items6;
                                    }
                                    const obj16 = {
                                      style: tmp48,
                                      layout: questDockHeaderLayoutAnimation,
                                      children: tmp49,
                                    };
                                    const tmp55 = closure_12(questDockWrapperSpecs(6577), obj16);
                                    cResult[32] = tmp48;
                                    cResult[33] = tmp49;
                                    cResult[34] = tmp55;
                                    tmp52 = tmp55;
                                  }
                                  const obj17 = { style: animatedStyle1, children: collapsedContent };
                                  const tmp51 = closure_12(questDockWrapperSpecs(6577), obj17);
                                  cResult[29] = collapsedContent;
                                  cResult[30] = animatedStyle1;
                                  cResult[31] = tmp51;
                                  tmp49 = tmp51;
                                }
                                const items7 = [tmp25.secondaryContentOverlay, animatedStyle2];
                                cResult[26] = animatedStyle2;
                                cResult[27] = tmp25.secondaryContentOverlay;
                                cResult[28] = items7;
                                tmp48 = items7;
                              }
                              const items8 = [tmp25.secondaryContent, tmp44];
                              cResult[23] = tmp25.secondaryContent;
                              cResult[24] = tmp44;
                              cResult[25] = items8;
                              tmp47 = items8;
                            }
                            let tmp46 = null != secondaryContentWidth;
                            if (tmp46) {
                              const items9 = [tmp25.secondaryContentStretched];
                              const obj18 = { width: secondaryContentWidth };
                              items9[1] = obj18;
                              tmp46 = items9;
                            }
                            cResult[20] = secondaryContentWidth;
                            cResult[21] = tmp25.secondaryContentStretched;
                            cResult[22] = tmp46;
                            tmp44 = tmp46;
                          }
                        }
                        let tmp41 = children;
                        if (undefined !== promotedLabelLeading && promotedLabelLeading) {
                          const obj19 = { style: tmp25.leadingContent, children };
                          tmp41 = closure_12(closure_6, obj19);
                        }
                        cResult[16] = children;
                        cResult[17] = undefined !== promotedLabelLeading && promotedLabelLeading;
                        cResult[18] = tmp25.leadingContent;
                        cResult[19] = tmp41;
                        tmp40 = tmp41;
                      }
                    }
                  }
                  const tmpResult18 = tmp(1370);
                  if (tmpResult18.isAndroid()) {
                    let tmp37;
                    if (null != blurHash) {
                      const obj20 = {
                        placeholder: blurHash,
                        layoutAnimatedStyle: animatedStyle5,
                        opacityAnimatedStyle: animatedStyle6,
                        layoutAnimation: questDockHeaderLayoutAnimation,
                      };
                      tmp37 = closure_12(tmp13(15012), obj20);
                    }
                    cResult[11] = blurHash;
                    cResult[12] = animatedStyle5;
                    cResult[13] = animatedStyle6;
                    cResult[14] = tmp9;
                    cResult[15] = tmp37;
                    tmp33 = tmp37;
                  }
                  const obj21 = {
                    layoutAnimatedStyle: animatedStyle5,
                    opacityAnimatedStyle: animatedStyle6,
                    layoutAnimation: questDockHeaderLayoutAnimation,
                  };
                  tmp37 = closure_12(tmp13(14978), obj21);
                }
                const items10 = [tmp25.header, animatedStyle];
                let num3 = 8;
                cResult[8] = animatedStyle;
                cResult[9] = tmp25.header;
                cResult[10] = items10;
                tmp32 = items10;
              }
            }
          }
        }
        if (undefined !== withPressableDisclosure && withPressableDisclosure) {
          const obj22 = {
            onPress: onDisclosurePress,
            accessibilityRole: "button",
            style: items11,
            children: closure_14(closure_13, obj23),
          };
          items11 = [,];
          ({ actionDisclosures: arr3[0], tertiaryContent: arr3[1] } = tmp25);
          obj23 = { children: items12 };
          const PressableOpacity = tmp(5916).PressableOpacity;
          const obj24 = {
            color: "interactive-text-active",
            variant: "text-sm/medium",
            children: intl2.string(tmp(1126).t.o6FLcF),
          };
          const Text2 = tmp(4892).Text;
          intl2 = tmp(1126).intl;
          items12 = [closure_12(Text2, obj24)];
          const obj25 = {
            color: questDockWrapperSpecs(587).colors.INTERACTIVE_TEXT_ACTIVE,
            style: tmp25.actionDisclosuresIcon,
          };
          const CircleQuestionIcon = tmp(11028).CircleQuestionIcon;
          items12[1] = closure_12(CircleQuestionIcon, obj25);
          tmp27Result = closure_12(PressableOpacity, obj22);
        } else {
          const obj26 = { style: items13, children: closure_12(Text, obj27) };
          items13 = [,];
          ({ actionDisclosures: arr2[0], tertiaryContent: arr2[1] } = tmp25);
          obj27 = { color: "text-default", variant: "text-sm/medium", children: intl.string(tmp(1126).t.o6FLcF) };
          Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          tmp27Result = closure_12(closure_6, obj26);
        }
        cResult[2] = onDisclosurePress;
        cResult[3] = tmp25.actionDisclosures;
        cResult[4] = tmp25.actionDisclosuresIcon;
        cResult[5] = tmp25.tertiaryContent;
        cResult[6] = undefined !== withPressableDisclosure && withPressableDisclosure;
        cResult[7] = tmp27Result;
        tmp26 = tmp27Result;
      }
    : (collapsedContent) => {
        let MoreHorizontalIcon;
        let Text;
        let blurHash;
        let c2;
        let children;
        let closure_4;
        let intl;
        let intl2;
        let intl3;
        let items;
        let items1;
        let items10;
        let items11;
        let items12;
        let items2;
        let items3;
        let items7;
        let items8;
        let items9;
        let obj16;
        let obj20;
        let obj27;
        let obj29;
        let obj32;
        let onDisclosurePress;
        let onSubmenuPress;
        let secondaryContentWidth;
        let tmp20Result;
        let tmp23;
        let tmp5;
        let tmp7Result6;
        let withPressableDisclosure;
        ({ blurHash, children, secondaryContentWidth, withPressableDisclosure } = collapsedContent);
        collapsedContent = collapsedContent.collapsedContent;
        if (withPressableDisclosure === undefined) {
          withPressableDisclosure = false;
        }
        let flag = collapsedContent.promotedLabelLeading;
        if (flag === undefined) {
          flag = false;
        }
        let flag2 = collapsedContent.hideBlurWhenCollapsed;
        if (flag2 === undefined) {
          flag2 = false;
        }
        let activeQuestDockMode;
        dependencyMap = undefined;
        let token;
        react = undefined;
        const tmp = activeQuestDockMode;
        ({ onDisclosurePress, onSubmenuPress } = collapsedContent);
        const context = react.useContext(activeQuestDockMode(14913).QuestDockGestureContext);
        activeQuestDockMode = context.activeQuestDockMode;
        const questDockWrapperSpecs = context.questDockWrapperSpecs;
        [tmp5, c2] = token(react.useState(false), 2);
        token(react.useState(false), 2);
        const effect = react.useEffect(() => {
          const obj = utils_PlatformUtils;
          if (obj.isIOS()) {
            const result = hasOwnProperty.isReduceTransparencyEnabled();
            result.then(c2);
            let closure_0 = hasOwnProperty.addEventListener("reduceTransparencyChanged", c2);
            return () => closure_0.remove();
          }
        }, []);
        let obj = activeQuestDockMode(4586);
        token = obj.useToken(questDockWrapperSpecs(587).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
        const tmp9 = questDockWrapperSpecs(15001)(token);
        react = tmp9;
        let obj2 = activeQuestDockMode(4618);
        const fn = function q() {
          let items;
          let width;
          let withSpringResult;
          let withSpringResult1;
          const obj2 = {
            borderTopLeftRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token,
            borderTopRightRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token,
            borderBottomLeftRadius: withSpringResult,
            borderBottomRightRadius: withSpringResult1,
            width,
            transform: items,
          };
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            withSpringResult = c9;
          } else {
            const obj3 = spring;
            withSpringResult = obj3.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
          }
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            withSpringResult1 = c9;
          } else {
            const obj4 = spring;
            withSpringResult1 = obj4.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
          }
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            width = questDockWrapperSpecs.get().width - 2 * unpackModuleId;
          } else {
            width = questDockWrapperSpecs.get().width;
          }
          const withSpring = spring.withSpring;
          let num2 = 0;
          spring;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num2 = unpackModuleId;
          }
          items = [{ translateX: withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }];
          ({ translateX: withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) });
          const withSpring2 = spring.withSpring;
          let num3 = 0;
          spring;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num3 = unpackModuleId;
          }
          items[1] = { translateY: withSpring2(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
          ({ translateY: withSpring2(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) });
          return obj2;
        };
        let obj3 = {
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_CONTENT_BORDER_RADII,
          questDockBorderRadius: token,
          withSpring: activeQuestDockMode(5604).withSpring,
          questDockAnimatedBorderRadius: tmp9,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
          questDockWrapperSpecs,
          QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_11,
        };
        fn.__closure = obj3;
        fn.__workletHash = 3882883093351;
        fn.__initData = __initData9;
        const animatedStyle = obj2.useAnimatedStyle(fn);
        let obj4 = activeQuestDockMode(4618);
        class W {
          constructor() {
            const withSpring = spring.withSpring;
            let num = 1;
            spring;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num = 0;
            }
            const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
            return obj;
          }
        }
        const obj5 = {
          withSpring: activeQuestDockMode(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        W.__closure = obj5;
        W.__workletHash = 5461767762400;
        W.__initData = __initData10;
        const animatedStyle1 = obj4.useAnimatedStyle(W);
        const obj6 = activeQuestDockMode(4618);
        class Z {
          constructor() {
            let right = 0;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              right = -1 * authStore;
            }
            return { right };
          }
        }
        const obj7 = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
        Z.__closure = obj7;
        Z.__workletHash = 17147681641180;
        Z.__initData = __initData11;
        const animatedStyle2 = obj6.useAnimatedStyle(Z);
        const obj8 = activeQuestDockMode(4618);
        class F {
          constructor() {
            const withSpring = spring.withSpring;
            let num = 0;
            spring;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num = 1;
            }
            const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
            return obj;
          }
        }
        F.__closure = {
          withSpring: activeQuestDockMode(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        F.__workletHash = 17362940839906;
        F.__initData = __initData12;
        ({
          withSpring: activeQuestDockMode(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        });
        const animatedStyle3 = obj8.useAnimatedStyle(F);
        const obj10 = activeQuestDockMode(4618);
        class V {
          constructor() {
            let right = 0;
            if (activeQuestDockMode.get() !== QuestDockMode.EXPANDED) {
              right = authStore;
            }
            return { right };
          }
        }
        V.__closure = { activeQuestDockMode, QuestDockMode, QUEST_DOCK_HORIZONTAL_EDGE_GUTTER_COLLAPSED: closure_10 };
        V.__workletHash = 7937699213196;
        V.__initData = __initData13;
        const animatedStyle4 = obj10.useAnimatedStyle(V);
        const fn2 = function j() {
          let pointerEvents = "none";
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            pointerEvents = "auto";
          }
          return { pointerEvents };
        };
        fn2.__closure = { activeQuestDockMode, QuestDockMode };
        fn2.__workletHash = 1087474161008;
        fn2.__initData = __initData14;
        const obj11 = activeQuestDockMode(4618);
        const animatedProps = obj11.useAnimatedProps(fn2);
        const fn3 = function z() {
          let withSpringResult;
          let withSpringResult1;
          const obj2 = {
            borderRadius: activeQuestDockMode.get() === QuestDockMode.EXPANDED ? c9 : token,
            borderBottomLeftRadius: withSpringResult,
            borderBottomRightRadius: withSpringResult1,
            width: questDockWrapperSpecs.get().width,
          };
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            withSpringResult = c9;
          } else {
            const obj3 = spring;
            withSpringResult = obj3.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
          }
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            withSpringResult1 = c9;
          } else {
            const obj4 = spring;
            withSpringResult1 = obj4.withSpring(closure_4.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
          }
          return obj2;
        };
        const obj12 = activeQuestDockMode(4618);
        fn3.__closure = {
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_CONTENT_BORDER_RADII,
          questDockBorderRadius: token,
          withSpring: activeQuestDockMode(5604).withSpring,
          questDockAnimatedBorderRadius: tmp9,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
          questDockWrapperSpecs,
        };
        fn3.__workletHash = 5464365691303;
        fn3.__initData = __initData15;
        ({
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_CONTENT_BORDER_RADII,
          questDockBorderRadius: token,
          withSpring: activeQuestDockMode(5604).withSpring,
          questDockAnimatedBorderRadius: tmp9,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
          questDockWrapperSpecs,
        });
        const animatedStyle5 = obj12.useAnimatedStyle(fn3);
        const tmp17 = activeQuestDockMode(4618);
        class J {
          constructor() {
            const withSpring = spring.withSpring;
            let num = 0;
            spring;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num = 1;
            }
            const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
            return obj;
          }
        }
        const useAnimatedStyle = tmp17.useAnimatedStyle;
        J.__closure = {
          withSpring: activeQuestDockMode(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        J.__workletHash = 7025233131750;
        J.__initData = __initData16;
        let animatedStyle6;
        ({
          withSpring: activeQuestDockMode(5604).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        });
        if (flag2) {
          animatedStyle6 = useAnimatedStyle(J);
        }
        const tmp19 = closure_15();
        if (withPressableDisclosure) {
          const obj15 = {
            onPress: onDisclosurePress,
            accessibilityRole: "button",
            style: items,
            children: closure_14(closure_13, obj16),
          };
          items = [,];
          ({ actionDisclosures: arr2[0], tertiaryContent: arr2[1] } = tmp19);
          obj16 = { children: items1 };
          const PressableOpacity = tmp(5916).PressableOpacity;
          const obj17 = {
            color: "interactive-text-active",
            variant: "text-sm/medium",
            children: intl2.string(tmp(1126).t.o6FLcF),
          };
          const Text2 = tmp(4892).Text;
          intl2 = tmp(1126).intl;
          items1 = [closure_12(Text2, obj17)];
          const obj18 = {
            color: questDockWrapperSpecs(587).colors.INTERACTIVE_TEXT_ACTIVE,
            style: tmp19.actionDisclosuresIcon,
          };
          const CircleQuestionIcon = tmp(11028).CircleQuestionIcon;
          items1[1] = closure_12(CircleQuestionIcon, obj18);
          tmp20Result = closure_12(PressableOpacity, obj15);
          tmp23 = closure_12;
        } else {
          const obj19 = { style: items2, children: closure_12(Text, obj20) };
          items2 = [,];
          ({ actionDisclosures: arr[0], tertiaryContent: arr[1] } = tmp19);
          obj20 = { color: "text-default", variant: "text-sm/medium", children: intl.string(tmp(1126).t.o6FLcF) };
          Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          tmp20Result = closure_12(closure_6, obj19);
          tmp23 = closure_12;
        }
        const obj21 = { style: items3, layout: questDockHeaderLayoutAnimation, children: null };
        items3 = [tmp19.header, animatedStyle];
        const tmp7Result = questDockWrapperSpecs(6577);
        const tmpResult = tmp(1370);
        if (tmpResult.isAndroid()) {
          let tmp23Result;
          if (null != blurHash) {
            const obj22 = {
              placeholder: blurHash,
              layoutAnimatedStyle: animatedStyle5,
              opacityAnimatedStyle: animatedStyle6,
              layoutAnimation: questDockHeaderLayoutAnimation,
            };
            tmp23Result = tmp23(tmp7(15012), obj22);
          }
          const items4 = [tmp23Result, ,];
          let tmp23Result2 = children;
          if (flag) {
            const obj23 = { style: tmp19.leadingContent, children };
            tmp23Result2 = tmp23(closure_6, obj23);
          }
          items4[1] = tmp23Result2;
          const items5 = [tmp19.secondaryContent];
          let tmp35 = null != secondaryContentWidth;
          if (tmp35) {
            const items6 = [tmp19.secondaryContentStretched];
            const obj24 = { width: secondaryContentWidth };
            items6[1] = obj24;
            tmp35 = items6;
          }
          const obj25 = { style: items5, children: items8 };
          items5[1] = tmp35;
          const obj26 = {
            style: items7,
            layout: questDockHeaderLayoutAnimation,
            children: tmp23(questDockWrapperSpecs(6577), obj27),
          };
          items7 = [tmp19.secondaryContentOverlay, animatedStyle2];
          obj27 = { style: animatedStyle1, children: collapsedContent };
          const tmp7Result4 = questDockWrapperSpecs(6577);
          items8 = [tmp23(tmp7Result4, obj26)];
          let secondaryContentOverlay = null != secondaryContentWidth;
          const obj28 = {
            animatedProps,
            style: items9,
            layout: questDockHeaderLayoutAnimation,
            children: closure_14(tmp7Result6, obj29),
          };
          const tmp7Result5 = questDockWrapperSpecs(6577);
          if (secondaryContentOverlay) {
            secondaryContentOverlay = tmp19.secondaryContentOverlay;
          }
          items9 = [secondaryContentOverlay, animatedStyle4];
          obj29 = { style: items10, children: items12 };
          items10 = [tmp19.expandedContent, animatedStyle3];
          let tmp26Result = !flag;
          tmp7Result6 = questDockWrapperSpecs(6577);
          if (!flag) {
            const obj30 = { children: items11 };
            items11 = [tmp20Result, tmp23(questDockWrapperSpecs(15014), {})];
            tmp26Result = closure_14(closure_13, obj30);
          }
          items12 = [tmp26Result];
          const obj31 = {
            accessibilityRole: "button",
            accessibilityLabel: intl3.string(tmp(1126).t.PdRCRg),
            onPress: onSubmenuPress,
            style: tmp19.tertiaryContent,
            children: tmp23(MoreHorizontalIcon, obj32),
          };
          const PressableOpacity2 = tmp(5916).PressableOpacity;
          intl3 = tmp(1126).intl;
          obj32 = { color: questDockWrapperSpecs(587).colors.INTERACTIVE_TEXT_ACTIVE };
          MoreHorizontalIcon = tmp(7588).MoreHorizontalIcon;
          items12[1] = tmp23(PressableOpacity2, obj31);
          items8[1] = tmp23(tmp7Result5, obj28);
          items4[2] = closure_14(closure_6, obj25);
          class W {
            constructor() {
              const withSpring = spring.withSpring;
              let num = 1;
              spring;
              if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                num = 0;
              }
              const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
              return obj;
            }
          }
          return closure_14(tmp7Result, obj21);
        }
        tmp23Result = tmp23(tmp7(14978), {
          layoutAnimatedStyle: animatedStyle5,
          opacityAnimatedStyle: animatedStyle6,
          layoutAnimation: questDockHeaderLayoutAnimation,
        });
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBackgroundBlurHeader.tsx");

export default memoResult;
