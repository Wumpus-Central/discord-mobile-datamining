// === Module 13021: ProductDetailsActionSheetSkeleton ===

// Module 13021 (ProductDetailsActionSheetSkeleton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import ButtonConstants from "ButtonConstants" /* 5607 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let size2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, scrollArea: { flex: 1 }, block: obj2, preview: obj3, info: obj4, title: size, description: size1, price: size2, purchaseSection: obj5, purchaseButton: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, height: 280, borderRadius: nativeDefault.radii.md };
obj4 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
size = { height: 24, width: "60%", borderRadius: nativeDefault.radii.xs };
size1 = { height: 16, width: "90%", borderRadius: nativeDefault.radii.xs };
size2 = { marginTop: nativeDefault.space.PX_12, height: 20, width: "30%", borderRadius: nativeDefault.radii.xs };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16 };
obj6 = { height: ButtonConstants.LARGE_BUTTON_HEIGHT, borderRadius: nativeDefault.radii.round };
let closure_7 = createStyles(obj);
const __initData = { code: "function ProductDetailsActionSheetSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function ProductDetailsActionSheetSkeletonTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let sharedValue;
  let tmp5;
  let tmp6;
  const tmp = sharedValue;
  let obj = sharedValue(576);
  const cResult = obj.c(3);
  const obj2 = sharedValue(4618);
  sharedValue = obj2.useSharedValue(0.3);
  if (cResult[0] !== sharedValue) {
    const fn = function o() {
      set = sharedValue.set;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const obj = timing;
      const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  const fn2 = function l() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn2.__closure = { opacity: sharedValue };
  fn2.__workletHash = 4141895524740;
  fn2.__initData = __initData;
  const tmpResult = tmp(4618);
  return tmpResult.useAnimatedStyle(fn2);
}) : (() => {
  let sharedValue;
  let obj = sharedValue(4618);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const fn = function o() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 5056040834599;
  fn.__initData = __initData2;
  const obj2 = sharedValue(4618);
  return obj2.useAnimatedStyle(fn);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  const obj = react2;
  const cResult = obj.c(36);
  const tmp3 = closure_7();
  const tmp4 = closure_10();
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp3.block) {
      let tmp5;
      if (cResult[2] === tmp3.preview) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp3.block) {
          let tmp7;
          if (cResult[6] === tmp3.title) {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp4) {
            if (cResult[9] === tmp3.block) {
              let tmp11;
              if (cResult[10] === tmp3.description) {
                tmp11 = cResult[11];
              }
              if (cResult[12] === tmp4) {
                if (cResult[13] === tmp3.block) {
                  let tmp15;
                  if (cResult[14] === tmp3.price) {
                    tmp15 = cResult[15];
                  }
                  if (cResult[16] === tmp3.info) {
                    if (cResult[17] === tmp7) {
                      if (cResult[18] === tmp11) {
                        let tmp19;
                        if (cResult[19] === tmp15) {
                          tmp19 = cResult[20];
                        }
                        if (cResult[21] === tmp3.scrollArea) {
                          if (cResult[22] === tmp5) {
                            let tmp23;
                            if (cResult[23] === tmp19) {
                              tmp23 = cResult[24];
                            }
                            if (cResult[25] === tmp4) {
                              if (cResult[26] === tmp3.block) {
                                let tmp27;
                                if (cResult[27] === tmp3.purchaseButton) {
                                  tmp27 = cResult[28];
                                }
                                if (cResult[29] === tmp3.purchaseSection) {
                                  let tmp31;
                                  if (cResult[30] === tmp27) {
                                    tmp31 = cResult[31];
                                  }
                                  if (cResult[32] === tmp3.container) {
                                    if (cResult[33] === tmp23) {
                                      let tmp35;
                                      if (cResult[34] === tmp31) {
                                        tmp35 = cResult[35];
                                      }
                                      return tmp35;
                                    }
                                  }
                                  const obj2 = { style: tmp3.container, children: items };
                                  items = [tmp23, tmp31];
                                  const tmp38 = metroRequire(View, obj2);
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
                            const obj4 = { style: items1 };
                            items1 = [, , ];
                            ({ block: arr7[0], purchaseButton: arr7[1] } = tmp3);
                            items1[2] = tmp4;
                            const tmp30 = hasOwnProperty(ReanimatedRexportDefault.View, obj4);
                            cResult[25] = tmp4;
                            cResult[26] = tmp3.block;
                            cResult[27] = tmp3.purchaseButton;
                            cResult[28] = tmp30;
                            tmp27 = tmp30;
                          }
                        }
                        const obj5 = { style: tmp3.scrollArea, children: items2 };
                        items2 = [tmp5, tmp19];
                        const tmp26 = metroRequire(View, obj5);
                        cResult[21] = tmp3.scrollArea;
                        cResult[22] = tmp5;
                        cResult[23] = tmp19;
                        cResult[24] = tmp26;
                        tmp23 = tmp26;
                      }
                    }
                  }
                  const obj6 = { style: tmp3.info, children: items3 };
                  items3 = [tmp7, tmp11, tmp15];
                  const tmp22 = metroRequire(View, obj6);
                  cResult[16] = tmp3.info;
                  cResult[17] = tmp7;
                  cResult[18] = tmp11;
                  cResult[19] = tmp15;
                  cResult[20] = tmp22;
                  tmp19 = tmp22;
                }
              }
              const obj7 = { style: items4 };
              items4 = [, , ];
              ({ block: arr4[0], price: arr4[1] } = tmp3);
              items4[2] = tmp4;
              const tmp18 = hasOwnProperty(ReanimatedRexportDefault.View, obj7);
              cResult[12] = tmp4;
              cResult[13] = tmp3.block;
              cResult[14] = tmp3.price;
              cResult[15] = tmp18;
              tmp15 = tmp18;
            }
          }
          const obj8 = { style: items5 };
          items5 = [, , ];
          ({ block: arr3[0], description: arr3[1] } = tmp3);
          items5[2] = tmp4;
          const tmp14 = hasOwnProperty(ReanimatedRexportDefault.View, obj8);
          cResult[8] = tmp4;
          cResult[9] = tmp3.block;
          cResult[10] = tmp3.description;
          cResult[11] = tmp14;
          tmp11 = tmp14;
        }
      }
      const obj9 = { style: items6 };
      items6 = [, , ];
      ({ block: arr2[0], title: arr2[1] } = tmp3);
      items6[2] = tmp4;
      const tmp10 = hasOwnProperty(ReanimatedRexportDefault.View, obj9);
      cResult[4] = tmp4;
      cResult[5] = tmp3.block;
      cResult[6] = tmp3.title;
      cResult[7] = tmp10;
      tmp7 = tmp10;
    }
  }
  const obj10 = { style: items7 };
  items7 = [, , ];
  ({ block: arr[0], preview: arr[1] } = tmp3);
  items7[2] = tmp4;
  const tmp6 = hasOwnProperty(ReanimatedRexportDefault.View, obj10);
  cResult[0] = tmp4;
  cResult[1] = tmp3.block;
  cResult[2] = tmp3.preview;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : (() => {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj9;
  const tmp = closure_7();
  const tmp2 = closure_10();
  const obj3 = { style: items };
  items = [, , ];
  const obj = { style: tmp.container, children: items6 };
  const obj2 = { style: tmp.scrollArea, children: items1 };
  ({ block: arr[0], preview: arr[1] } = tmp);
  items[2] = tmp2;
  items1 = [hasOwnProperty(ReanimatedRexportDefault.View, obj3), ];
  const obj5 = { style: items2 };
  items2 = [, , ];
  const obj4 = { style: tmp.info, children: items3 };
  ({ block: arr3[0], title: arr3[1] } = tmp);
  items2[2] = tmp2;
  items3 = [hasOwnProperty(ReanimatedRexportDefault.View, obj5), , ];
  const obj6 = { style: items4 };
  items4 = [, , ];
  ({ block: arr5[0], description: arr5[1] } = tmp);
  items4[2] = tmp2;
  items3[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj6);
  const obj7 = { style: items5 };
  items5 = [, , ];
  ({ block: arr6[0], price: arr6[1] } = tmp);
  items5[2] = tmp2;
  items3[2] = hasOwnProperty(ReanimatedRexportDefault.View, obj7);
  items1[1] = metroRequire(View, obj4);
  items6 = [metroRequire(View, obj2), ];
  const obj8 = { style: tmp.purchaseSection, children: hasOwnProperty(ReanimatedRexportDefault.View, obj9) };
  obj9 = { style: items7 };
  items7 = [, , ];
  ({ block: arr8[0], purchaseButton: arr8[1] } = tmp);
  items7[2] = tmp2;
  items6[1] = hasOwnProperty(View, obj8);
  return metroRequire(View, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetSkeleton.tsx");

export default tmp4;