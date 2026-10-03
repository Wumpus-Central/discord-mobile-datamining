// === Module 16451: ICYMILoading ===

// Module 16451 (ICYMILoading)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import useChatPlaceholderAnimatedStylesDefault from "useChatPlaceholderAnimatedStyles" /* 12305 */;
import ICYMIShared from "ICYMIShared" /* 16431 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createICYMIStyles = fn(16390);
let closure_8 = createICYMIStyles.createICYMIStyles((marginBottom) => {
  const obj = { backgroundColor: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, container: { padding: marginBottom.margin }, avatarRow: { flexDirection: "row", alignItems: "center", marginBottom: marginBottom.margin }, avatar: null, avatarTitle: null, title: null, subtitle: null, image: null, separator: null };
  const size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, marginRight: nativeDefault.space.PX_12 };
  obj.avatar = size;
  obj.avatarTitle = { height: 18, borderRadius: 10, flexShrink: 1 };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.title = { height: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, borderRadius: 10, flexShrink: 1 };
  const obj3 = { height: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, borderRadius: 10, flexShrink: 1 };
  obj.subtitle = { height: nativeDefault.space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 };
  const size1 = { width: "100%", height: 240, borderRadius: nativeDefault.radii.lg };
  obj.image = size1;
  obj.separator = {};
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(38);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { visible: true, animated: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp7 = useChatPlaceholderAnimatedStylesDefault(first);
  const rounded = Math.floor(10 * Math.random());
  const rounded1 = Math.floor(10 * Math.random());
  const rounded2 = Math.floor(10 * Math.random());
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { avatarTitle: rounded, title: rounded1, subtitle: rounded2 };
    cResult[1] = obj3;
  }
  if (cResult[2] === tmp7) {
    if (cResult[3] === tmp4.avatar) {
      if (cResult[4] === tmp4.backgroundColor) {
        let tmp15 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { width: null };
        const _Math = Math;
        const result = 100 * Math.sin(tmp12);
        const _Math2 = Math;
        const _HermesInternal = HermesInternal;
        obj4.width = "" + (result - Math.floor(result)) * 30 + 30 + "%";
        cResult[6] = obj4;
        let tmp17 = obj4;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] === tmp7) {
        if (cResult[8] === tmp4.avatarTitle) {
          if (cResult[9] === tmp4.backgroundColor) {
            let tmp19 = cResult[10];
          }
          if (cResult[11] === tmp4.avatarRow) {
            if (cResult[12] === tmp15) {
              if (cResult[13] === tmp19) {
                let tmp22 = cResult[14];
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { width: null };
                const _Math3 = Math;
                const result1 = 100 * Math.sin(tmp13);
                const _Math4 = Math;
                const _HermesInternal2 = HermesInternal;
                obj5.width = "" + (result1 - Math.floor(result1)) * 25 + 75 + "%";
                cResult[15] = obj5;
                let tmp26 = obj5;
              } else {
                tmp26 = cResult[15];
              }
              if (cResult[16] === tmp7) {
                if (cResult[17] === tmp4.backgroundColor) {
                  if (cResult[18] === tmp4.title) {
                    let tmp28 = cResult[19];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { width: null };
                    const _Math5 = Math;
                    const result2 = 100 * Math.sin(tmp14);
                    const _Math6 = Math;
                    const _HermesInternal3 = HermesInternal;
                    obj6.width = "" + (result2 - Math.floor(result2)) * 25 + 75 + "%";
                    cResult[20] = obj6;
                    let tmp31 = obj6;
                  } else {
                    tmp31 = cResult[20];
                  }
                  if (cResult[21] === tmp7) {
                    if (cResult[22] === tmp4.backgroundColor) {
                      if (cResult[23] === tmp4.subtitle) {
                        let tmp33 = cResult[24];
                      }
                      if (cResult[25] === tmp7) {
                        if (cResult[26] === tmp4.backgroundColor) {
                          if (cResult[27] === tmp4.image) {
                            let tmp36 = cResult[28];
                          }
                          if (cResult[29] === tmp4.container) {
                            if (cResult[30] === tmp36) {
                              if (cResult[31] === tmp22) {
                                if (cResult[32] === tmp28) {
                                  if (cResult[33] === tmp33) {
                                    let tmp39 = cResult[34];
                                  }
                                  const _Symbol4 = Symbol;
                                  if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                    const tmp45 = hasOwnProperty(ICYMIShared.Separator, {});
                                    cResult[35] = tmp45;
                                    let tmp43 = tmp45;
                                  } else {
                                    tmp43 = cResult[35];
                                  }
                                  if (cResult[36] !== tmp39) {
                                    const obj7 = { children: null };
                                    const items = [tmp39, tmp43];
                                    obj7.children = items;
                                    const tmp49 = timestampProducer(React5, obj7);
                                    cResult[36] = tmp39;
                                    cResult[37] = tmp49;
                                    let tmp46 = tmp49;
                                  } else {
                                    tmp46 = cResult[37];
                                  }
                                  return tmp46;
                                }
                              }
                            }
                          }
                          const obj8 = { style: tmp4.container, children: null };
                          const items1 = [tmp22, tmp28, tmp33, tmp36];
                          obj8.children = items1;
                          const tmp42 = timestampProducer(View, obj8);
                          cResult[29] = tmp4.container;
                          cResult[30] = tmp36;
                          cResult[31] = tmp22;
                          cResult[32] = tmp28;
                          cResult[33] = tmp33;
                          cResult[34] = tmp42;
                          tmp39 = tmp42;
                        }
                      }
                      const obj9 = { style: null };
                      const items2 = [, , ];
                      ({ backgroundColor: arr6[0], image: arr6[1] } = tmp4);
                      items2[2] = tmp7;
                      obj9.style = items2;
                      const tmp38 = hasOwnProperty(ReanimatedRexportDefault.View, obj9);
                      cResult[25] = tmp7;
                      cResult[26] = tmp4.backgroundColor;
                      cResult[27] = tmp4.image;
                      cResult[28] = tmp38;
                      tmp36 = tmp38;
                    }
                  }
                  const obj10 = { style: null };
                  const items3 = [, , , ];
                  ({ backgroundColor: arr5[0], subtitle: arr5[1] } = tmp4);
                  items3[2] = tmp7;
                  items3[3] = tmp31;
                  obj10.style = items3;
                  const tmp35 = hasOwnProperty(ReanimatedRexportDefault.View, obj10);
                  cResult[21] = tmp7;
                  cResult[22] = tmp4.backgroundColor;
                  cResult[23] = tmp4.subtitle;
                  cResult[24] = tmp35;
                  tmp33 = tmp35;
                }
              }
              const obj11 = { style: null };
              const items4 = [, , , ];
              ({ backgroundColor: arr4[0], title: arr4[1] } = tmp4);
              items4[2] = tmp7;
              items4[3] = tmp26;
              obj11.style = items4;
              const tmp30 = hasOwnProperty(ReanimatedRexportDefault.View, obj11);
              cResult[16] = tmp7;
              cResult[17] = tmp4.backgroundColor;
              cResult[18] = tmp4.title;
              cResult[19] = tmp30;
              tmp28 = tmp30;
            }
          }
          const obj12 = { style: tmp4.avatarRow, children: null };
          const items5 = [tmp15, tmp19];
          obj12.children = items5;
          const tmp25 = timestampProducer(View, obj12);
          cResult[11] = tmp4.avatarRow;
          cResult[12] = tmp15;
          cResult[13] = tmp19;
          cResult[14] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj13 = { style: null };
      const items6 = [, , , ];
      ({ backgroundColor: arr2[0], avatarTitle: arr2[1] } = tmp4);
      items6[2] = tmp7;
      items6[3] = tmp17;
      obj13.style = items6;
      const tmp21 = hasOwnProperty(ReanimatedRexportDefault.View, obj13);
      cResult[7] = tmp7;
      cResult[8] = tmp4.avatarTitle;
      cResult[9] = tmp4.backgroundColor;
      cResult[10] = tmp21;
      tmp19 = tmp21;
    }
  }
  const obj14 = { style: null };
  const items7 = [, , ];
  ({ backgroundColor: arr[0], avatar: arr[1] } = tmp4);
  items7[2] = tmp7;
  obj14.style = items7;
  const tmp16 = hasOwnProperty(ReanimatedRexportDefault.View, obj14);
  cResult[2] = tmp7;
  cResult[3] = tmp4.avatar;
  cResult[4] = tmp4.backgroundColor;
  cResult[5] = tmp16;
  tmp15 = tmp16;
}) : (() => {
  const tmp = closure_8();
  const tmp2 = useChatPlaceholderAnimatedStylesDefault({ visible: true, animated: true });
  const memo = noop.useMemo(() => ({ avatarTitle: Math.floor(10 * Math.random()), title: Math.floor(10 * Math.random()), subtitle: Math.floor(10 * Math.random()) }), []);
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.avatarRow, children: null };
  ({ avatarTitle, title, subtitle } = memo);
  const obj4 = { style: null };
  const items = [, , ];
  ({ backgroundColor: arr[0], avatar: arr[1] } = tmp);
  items[2] = tmp2;
  obj4.style = items;
  const items1 = [hasOwnProperty(ReanimatedRexportDefault.View, obj4), ];
  const obj5 = { style: null };
  const items2 = [, , , ];
  ({ backgroundColor: arr3[0], avatarTitle: arr3[1] } = tmp);
  items2[2] = tmp2;
  const obj6 = { width: null };
  const result = 100 * Math.sin(avatarTitle);
  obj6.width = "" + (result - Math.floor(result)) * 30 + 30 + "%";
  items2[3] = obj6;
  obj5.style = items2;
  items1[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj5);
  obj3.children = items1;
  const items3 = [timestampProducer(View, obj3), , , ];
  const obj7 = { style: null };
  const items4 = [, , , ];
  ({ backgroundColor: arr5[0], title: arr5[1] } = tmp);
  items4[2] = tmp2;
  const obj8 = { width: null };
  const result1 = 100 * Math.sin(title);
  obj8.width = "" + (result1 - Math.floor(result1)) * 25 + 75 + "%";
  items4[3] = obj8;
  obj7.style = items4;
  items3[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj7);
  const obj9 = { style: null };
  const items5 = [, , , ];
  ({ backgroundColor: arr6[0], subtitle: arr6[1] } = tmp);
  items5[2] = tmp2;
  const obj10 = { width: null };
  const result2 = 100 * Math.sin(subtitle);
  obj10.width = "" + (result2 - Math.floor(result2)) * 25 + 75 + "%";
  items5[3] = obj10;
  obj9.style = items5;
  items3[2] = hasOwnProperty(ReanimatedRexportDefault.View, obj9);
  const obj11 = { style: null };
  const items6 = [, , ];
  ({ backgroundColor: arr7[0], image: arr7[1] } = tmp);
  items6[2] = tmp2;
  obj11.style = items6;
  items3[3] = hasOwnProperty(ReanimatedRexportDefault.View, obj11);
  obj2.children = items3;
  const items7 = [timestampProducer(View, obj2), hasOwnProperty(ICYMIShared.Separator, {})];
  obj.children = items7;
  return timestampProducer(React5, obj);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMILoading.tsx");

export const ICYMILoading = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: null };
    const items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_9, {})];
    obj2.children = items;
    const tmp7 = timestampProducer(React5, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { children: null };
  const items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_9, {})];
  obj.children = items;
  return timestampProducer(React5, obj);
});