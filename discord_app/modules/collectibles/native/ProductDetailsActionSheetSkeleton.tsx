// discord_app/modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { flex: 1 },
  scrollArea: { flex: 1 },
  block: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE },
  preview: null,
  info: null,
  title: null,
  description: null,
  price: null,
  purchaseSection: null,
  purchaseButton: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.preview = {
  marginTop: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  height: 280,
  borderRadius: nativeDefault.radii.md,
};
let obj4 = {
  marginTop: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  height: 280,
  borderRadius: nativeDefault.radii.md,
};
obj2.info = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
let size = { height: 24, width: "60%", borderRadius: nativeDefault.radii.xs };
obj2.title = size;
const size1 = { height: 16, width: "90%", borderRadius: nativeDefault.radii.xs };
obj2.description = size1;
const size2 = { marginTop: nativeDefault.space.PX_12, height: 20, width: "30%", borderRadius: nativeDefault.radii.xs };
obj2.price = size2;
let obj5 = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
obj2.purchaseSection = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
};
let obj6 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.purchaseButton = { height: fn(5380).LARGE_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ProductDetailsActionSheetSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function ProductDetailsActionSheetSkeletonTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePulseStyle() {
      const cResult = sharedValue(576).c(3);
      let obj = sharedValue(576);
      const tmp = sharedValue;
      sharedValue = sharedValue(4810).useSharedValue(0.3);
      if (cResult[0] !== sharedValue) {
        const fn = function o() {
          const obj = ReanimatedRexport;
          const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
        };
        const items = [sharedValue];
        cResult[0] = sharedValue;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      const obj2 = sharedValue(4810);
      const fn2 = function l() {
        return { opacity: sharedValue.get() };
      };
      fn2.__closure = { opacity: sharedValue };
      fn2.__workletHash = 4141895524740;
      fn2.__initData = __initData;
      return tmp(4810).useAnimatedStyle(fn2);
    }
  : function usePulseStyle() {
      sharedValue = sharedValue(4810).useSharedValue(0.3);
      const items = [sharedValue];
      const effect = noop.useEffect(() => {
        const obj = ReanimatedRexport;
        const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
      }, items);
      let obj = sharedValue(4810);
      const fn = function o() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 5056040834599;
      fn.__initData = __initData2;
      return sharedValue(4810).useAnimatedStyle(fn);
    };
ReactCompilerGating = fn(558);
let obj7 = { height: fn(5380).LARGE_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round };
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ProductDetailsActionSheetSkeleton() {
      const cResult = c.c(36);
      const tmp3 = closure_7();
      const tmp4 = closure_10();
      if (cResult[0] === tmp4) {
        if (cResult[1] === tmp3.block) {
          if (cResult[2] === tmp3.preview) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] === tmp4) {
            if (cResult[5] === tmp3.block) {
              if (cResult[6] === tmp3.title) {
                let tmp7 = cResult[7];
              }
              if (cResult[8] === tmp4) {
                if (cResult[9] === tmp3.block) {
                  if (cResult[10] === tmp3.description) {
                    let tmp11 = cResult[11];
                  }
                  if (cResult[12] === tmp4) {
                    if (cResult[13] === tmp3.block) {
                      if (cResult[14] === tmp3.price) {
                        let tmp15 = cResult[15];
                      }
                      if (cResult[16] === tmp3.info) {
                        if (cResult[17] === tmp7) {
                          if (cResult[18] === tmp11) {
                            if (cResult[19] === tmp15) {
                              let tmp19 = cResult[20];
                            }
                            if (cResult[21] === tmp3.scrollArea) {
                              if (cResult[22] === tmp5) {
                                if (cResult[23] === tmp19) {
                                  let tmp23 = cResult[24];
                                }
                                if (cResult[25] === tmp4) {
                                  if (cResult[26] === tmp3.block) {
                                    if (cResult[27] === tmp3.purchaseButton) {
                                      let tmp27 = cResult[28];
                                    }
                                    if (cResult[29] === tmp3.purchaseSection) {
                                      if (cResult[30] === tmp27) {
                                        let tmp31 = cResult[31];
                                      }
                                      if (cResult[32] === tmp3.container) {
                                        if (cResult[33] === tmp23) {
                                          if (cResult[34] === tmp31) {
                                            let tmp35 = cResult[35];
                                          }
                                          return tmp35;
                                        }
                                      }
                                      const obj2 = { style: tmp3.container, children: null };
                                      const items = [tmp23, tmp31];
                                      obj2.children = items;
                                      const tmp38 = timestampProducer(View, obj2);
                                      cResult[32] = tmp3.container;
                                      cResult[33] = tmp23;
                                      cResult[34] = tmp31;
                                      cResult[35] = tmp38;
                                      tmp35 = tmp38;
                                    }
                                    const obj3 = { style: tmp3.purchaseSection, children: tmp27 };
                                    const tmp34 = hasOwnProperty(View, obj3);
                                    cResult[29] = tmp3.purchaseSection;
                                    cResult[30] = tmp27;
                                    cResult[31] = tmp34;
                                    tmp31 = tmp34;
                                  }
                                }
                                const obj4 = { style: null };
                                const items1 = [, ,];
                                ({ block: arr7[0], purchaseButton: arr7[1] } = tmp3);
                                items1[2] = tmp4;
                                obj4.style = items1;
                                const tmp30 = hasOwnProperty(ReanimatedRexportDefault.View, obj4);
                                cResult[25] = tmp4;
                                cResult[26] = tmp3.block;
                                cResult[27] = tmp3.purchaseButton;
                                cResult[28] = tmp30;
                                tmp27 = tmp30;
                              }
                            }
                            const obj5 = { style: tmp3.scrollArea, children: null };
                            const items2 = [tmp5, tmp19];
                            obj5.children = items2;
                            const tmp26 = timestampProducer(View, obj5);
                            cResult[21] = tmp3.scrollArea;
                            cResult[22] = tmp5;
                            cResult[23] = tmp19;
                            cResult[24] = tmp26;
                            tmp23 = tmp26;
                          }
                        }
                      }
                      const obj6 = { style: tmp3.info, children: null };
                      const items3 = [tmp7, tmp11, tmp15];
                      obj6.children = items3;
                      const tmp22 = timestampProducer(View, obj6);
                      cResult[16] = tmp3.info;
                      cResult[17] = tmp7;
                      cResult[18] = tmp11;
                      cResult[19] = tmp15;
                      cResult[20] = tmp22;
                      tmp19 = tmp22;
                    }
                  }
                  const obj7 = { style: null };
                  const items4 = [, ,];
                  ({ block: arr4[0], price: arr4[1] } = tmp3);
                  items4[2] = tmp4;
                  obj7.style = items4;
                  const tmp18 = hasOwnProperty(ReanimatedRexportDefault.View, obj7);
                  cResult[12] = tmp4;
                  cResult[13] = tmp3.block;
                  cResult[14] = tmp3.price;
                  cResult[15] = tmp18;
                  tmp15 = tmp18;
                }
              }
              const obj8 = { style: null };
              const items5 = [, ,];
              ({ block: arr3[0], description: arr3[1] } = tmp3);
              items5[2] = tmp4;
              obj8.style = items5;
              const tmp14 = hasOwnProperty(ReanimatedRexportDefault.View, obj8);
              cResult[8] = tmp4;
              cResult[9] = tmp3.block;
              cResult[10] = tmp3.description;
              cResult[11] = tmp14;
              tmp11 = tmp14;
            }
          }
          const obj9 = { style: null };
          const items6 = [, ,];
          ({ block: arr2[0], title: arr2[1] } = tmp3);
          items6[2] = tmp4;
          obj9.style = items6;
          const tmp10 = hasOwnProperty(ReanimatedRexportDefault.View, obj9);
          cResult[4] = tmp4;
          cResult[5] = tmp3.block;
          cResult[6] = tmp3.title;
          cResult[7] = tmp10;
          tmp7 = tmp10;
        }
      }
      const obj10 = { style: null };
      const items7 = [, ,];
      ({ block: arr[0], preview: arr[1] } = tmp3);
      items7[2] = tmp4;
      obj10.style = items7;
      const tmp6 = hasOwnProperty(ReanimatedRexportDefault.View, obj10);
      cResult[0] = tmp4;
      cResult[1] = tmp3.block;
      cResult[2] = tmp3.preview;
      cResult[3] = tmp6;
      tmp5 = tmp6;
    }
  : function ProductDetailsActionSheetSkeleton() {
      const tmp = closure_7();
      const tmp2 = closure_10();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.scrollArea, children: null };
      const obj3 = { style: null };
      const items = [, ,];
      ({ block: arr[0], preview: arr[1] } = tmp);
      items[2] = tmp2;
      obj3.style = items;
      const items1 = [hasOwnProperty(ReanimatedRexportDefault.View, obj3)];
      const obj4 = { style: tmp.info, children: null };
      const obj5 = { style: null };
      const items2 = [, ,];
      ({ block: arr3[0], title: arr3[1] } = tmp);
      items2[2] = tmp2;
      obj5.style = items2;
      const items3 = [hasOwnProperty(ReanimatedRexportDefault.View, obj5), ,];
      const obj6 = { style: null };
      const items4 = [, ,];
      ({ block: arr5[0], description: arr5[1] } = tmp);
      items4[2] = tmp2;
      obj6.style = items4;
      items3[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj6);
      const obj7 = { style: null };
      const items5 = [, ,];
      ({ block: arr6[0], price: arr6[1] } = tmp);
      items5[2] = tmp2;
      obj7.style = items5;
      items3[2] = hasOwnProperty(ReanimatedRexportDefault.View, obj7);
      obj4.children = items3;
      items1[1] = timestampProducer(View, obj4);
      obj2.children = items1;
      const items6 = [timestampProducer(View, obj2)];
      const obj8 = { style: tmp.purchaseSection, children: null };
      const obj9 = { style: null };
      const items7 = [, ,];
      ({ block: arr8[0], purchaseButton: arr8[1] } = tmp);
      items7[2] = tmp2;
      obj9.style = items7;
      obj8.children = hasOwnProperty(ReanimatedRexportDefault.View, obj9);
      items6[1] = hasOwnProperty(View, obj8);
      obj.children = items6;
      return timestampProducer(View, obj);
    };
