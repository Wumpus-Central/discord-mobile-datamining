// === Module 16472: ProfileCustomizationScrollAwayTabs ===

// Module 16472 (ProfileCustomizationScrollAwayTabs)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import useToken from "useToken" /* 5289 */;
import SegmentedControlPages from "SegmentedControlPages" /* 11240 */;
import Tabs_Tabs from "Tabs/Tabs" /* 12315 */;
import ProfileCustomizationHeaderContextDefault from "ProfileCustomizationHeaderContext" /* 16355 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { container: { flex: 1, overflow: "hidden" }, header: null };
const rect = { position: "absolute", zIndex: 1, top: 0, left: 0, right: 0, paddingTop: nativeDefault.space.PX_4 };
obj2.header = rect;
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function ProfileCustomizationScrollAwayTabsTsx1(){const{activeIndex,mainScrollY,height,guildScrollY}=this.__closure;const guildPageVisibility=Math.min(Math.max(activeIndex.get(),0),1);const mainOffset=Math.min(Math.max(mainScrollY.get(),0),height);const guildOffset=Math.min(Math.max(guildScrollY.get(),0),height);const offset=mainOffset*(1-guildPageVisibility)+guildOffset*guildPageVisibility;return{transform:[{translateY:-offset}]};}" };
const __initData2 = { code: "function ProfileCustomizationScrollAwayTabsTsx2(){const{activeIndex,mainScrollY,height,guildScrollY}=this.__closure;const guildPageVisibility=Math.min(Math.max(activeIndex.get(),0),1);const mainOffset=Math.min(Math.max(mainScrollY.get(),0),height);const guildOffset=Math.min(Math.max(guildScrollY.get(),0),height);const offset=mainOffset*(1-guildPageVisibility)+guildOffset*guildPageVisibility;return{transform:[{translateY:-offset}]};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationScrollAwayTabs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationScrollAwayTabs(state) {
  const cResult = c.c(26);
  state = state.state;
  const tmp4 = closure_8();
  [height, closure_1] = noop.useState(0);
  const token = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  const sharedValue1 = ReanimatedRexport.useSharedValue(0);
  const activeIndex = state.activeIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(nativeEvent) {
      closure_1(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  class O {
    constructor() {
      bound = Math.min(Math.max(activeIndex.get(), 0), 1);
      obj = { transform: null };
      obj1 = { translateY: null };
      result = Math.min(Math.max(closure_2.get(), 0), closure_0) * (1 - bound);
      obj1.translateY = -result + Math.min(Math.max(closure_3.get(), 0), closure_0) * bound;
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  O.__closure = { activeIndex, mainScrollY: sharedValue, height, guildScrollY: sharedValue1 };
  O.__workletHash = 14885523841037;
  O.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(O);
  if (cResult[1] === token) {
    if (cResult[2] === sharedValue1) {
      if (cResult[3] === height) {
        if (cResult[4] === sharedValue) {
          let tmp13 = cResult[5];
        }
        if (cResult[6] !== token) {
          const obj5 = { backgroundColor: token };
          cResult[6] = token;
          cResult[7] = obj5;
          let tmp14 = obj5;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === animatedStyle) {
          if (cResult[9] === tmp4.header) {
            if (cResult[10] === tmp14) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] !== state) {
              const obj6 = { state };
              const tmp18 = timestampProducer(Tabs_Tabs.Tabs, obj6);
              cResult[12] = state;
              cResult[13] = tmp18;
              let tmp16 = tmp18;
            } else {
              tmp16 = cResult[13];
            }
            if (cResult[14] === tmp15) {
              if (cResult[15] === tmp16) {
                let tmp19 = cResult[16];
              }
              if (cResult[17] !== state) {
                const obj7 = { state };
                const tmp24 = timestampProducer(SegmentedControlPages.SegmentedControlPages, obj7);
                cResult[17] = state;
                cResult[18] = tmp24;
                let tmp22 = tmp24;
              } else {
                tmp22 = cResult[18];
              }
              if (cResult[19] === tmp4.container) {
                if (cResult[20] === tmp19) {
                  if (cResult[21] === tmp22) {
                    let tmp25 = cResult[22];
                  }
                  if (cResult[23] === tmp13) {
                    if (cResult[24] === tmp25) {
                      let tmp29 = cResult[25];
                    }
                    return tmp29;
                  }
                  const obj8 = { value: tmp13, children: tmp25 };
                  const tmp31 = timestampProducer(ProfileCustomizationHeaderContextDefault.Provider, obj8);
                  cResult[23] = tmp13;
                  cResult[24] = tmp25;
                  cResult[25] = tmp31;
                  tmp29 = tmp31;
                }
              }
              const obj9 = { style: tmp4.container, children: null };
              let items = [tmp19, tmp22];
              obj9.children = items;
              const tmp28 = React5(View, obj9);
              cResult[19] = tmp4.container;
              cResult[20] = tmp19;
              cResult[21] = tmp22;
              cResult[22] = tmp28;
              tmp25 = tmp28;
            }
            const obj10 = { style: tmp15, onLayout: first1, children: tmp16 };
            const tmp21 = timestampProducer(ReanimatedRexportDefault.View, obj10);
            cResult[14] = tmp15;
            cResult[15] = tmp16;
            cResult[16] = tmp21;
            tmp19 = tmp21;
          }
        }
        const items1 = [tmp4.header, tmp14, animatedStyle];
        cResult[8] = animatedStyle;
        cResult[9] = tmp4.header;
        cResult[10] = tmp14;
        cResult[11] = items1;
        tmp15 = items1;
      }
    }
  }
  const obj11 = { height, backgroundColor: token, mainScrollY: sharedValue, guildScrollY: sharedValue1 };
  cResult[1] = token;
  cResult[2] = sharedValue1;
  cResult[3] = height;
  cResult[4] = sharedValue;
  cResult[5] = obj11;
  tmp13 = obj11;
  const tmpResult = ReanimatedRexport;
}) : (function ProfileCustomizationScrollAwayTabs(state) {
  state = state.state;
  height = undefined;
  closure_1 = undefined;
  const tmp = closure_8();
  [height, closure_1] = noop.useState(0);
  const token = useToken.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  const sharedValue1 = ReanimatedRexport.useSharedValue(0);
  const activeIndex = state.activeIndex;
  const callback = noop.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.layout.height);
  }, []);
  const fn = function h() {
    const bound = Math.min(Math.max(activeIndex.get(), 0), 1);
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const result = Math.min(Math.max(sharedValue.get(), 0), first) * (1 - bound);
    obj2.translateY = -result + Math.min(Math.max(sharedValue1.get(), 0), first) * bound;
    const items = [obj2];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { activeIndex, mainScrollY: sharedValue, height, guildScrollY: sharedValue1 };
  fn.__workletHash = 11093326166862;
  fn.__initData = __initData2;
  let items = [height, token, sharedValue, sharedValue1];
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const memo = noop.useMemo(() => ({ height, backgroundColor: token, mainScrollY: sharedValue, guildScrollY: sharedValue1 }), items);
  const obj5 = { value: memo, children: null };
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: null, onLayout: callback, children: timestampProducer(Tabs_Tabs.Tabs, { state }) };
  const items1 = [tmp.header, { backgroundColor: token }, animatedStyle];
  obj7.style = items1;
  const items2 = [timestampProducer(ReanimatedRexportDefault.View, obj7), timestampProducer(SegmentedControlPages.SegmentedControlPages, { state })];
  obj6.children = items2;
  obj5.children = React5(View, obj6);
  return timestampProducer(ProfileCustomizationHeaderContextDefault.Provider, obj5);
});