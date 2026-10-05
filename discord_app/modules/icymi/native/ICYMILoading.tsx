// discord_app/modules/icymi/native/ICYMILoading.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import useChatPlaceholderAnimatedStylesDefault from "../../chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createICYMIStyles from "createICYMIStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let closure_8 = createICYMIStyles.createICYMIStyles((marginBottom) => {
  let size1;
  const obj = {
    backgroundColor: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE },
    container: { padding: marginBottom.margin },
    avatarRow: { flexDirection: "row", alignItems: "center", marginBottom: marginBottom.margin },
    avatar: size,
    avatarTitle: { height: 18, borderRadius: 10, flexShrink: 1 },
    title: {
      height: nativeDefault.space.PX_16,
      marginBottom: nativeDefault.space.PX_12,
      borderRadius: 10,
      flexShrink: 1,
    },
    subtitle: { height: nativeDefault.space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 },
    image: size1,
    separator: {},
  };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, marginRight: nativeDefault.space.PX_12 };
  ({ height: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, borderRadius: 10, flexShrink: 1 });
  ({ height: nativeDefault.space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 });
  size1 = { width: "100%", height: 240, borderRadius: nativeDefault.radii.lg };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let result;
      let result1;
      let result2;
      const obj = react2;
      const cResult = obj.c(38);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { visible: true, animated: true };
        cResult[0] = obj2;
        first = obj2;
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
          let tmp15;
          let tmp17;
          if (cResult[4] === tmp4.backgroundColor) {
            tmp15 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { width: "" + (result - Math.floor(result)) * 30 + 30 + "%" };
            const _Math = Math;
            result = 100 * Math.sin(tmp12);
            const _Math2 = Math;
            const _HermesInternal = HermesInternal;
            cResult[6] = obj4;
            tmp17 = obj4;
          } else {
            tmp17 = cResult[6];
          }
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp4.avatarTitle) {
              let tmp19;
              if (cResult[9] === tmp4.backgroundColor) {
                tmp19 = cResult[10];
              }
              if (cResult[11] === tmp4.avatarRow) {
                if (cResult[12] === tmp15) {
                  let tmp22;
                  let tmp26;
                  if (cResult[13] === tmp19) {
                    tmp22 = cResult[14];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj5 = { width: "" + (result1 - Math.floor(result1)) * 25 + 75 + "%" };
                    const _Math3 = Math;
                    result1 = 100 * Math.sin(tmp13);
                    const _Math4 = Math;
                    const _HermesInternal2 = HermesInternal;
                    cResult[15] = obj5;
                    tmp26 = obj5;
                  } else {
                    tmp26 = cResult[15];
                  }
                  if (cResult[16] === tmp7) {
                    if (cResult[17] === tmp4.backgroundColor) {
                      let tmp28;
                      let tmp31;
                      if (cResult[18] === tmp4.title) {
                        tmp28 = cResult[19];
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj6 = { width: "" + (result2 - Math.floor(result2)) * 25 + 75 + "%" };
                        const _Math5 = Math;
                        result2 = 100 * Math.sin(tmp14);
                        const _Math6 = Math;
                        const _HermesInternal3 = HermesInternal;
                        cResult[20] = obj6;
                        tmp31 = obj6;
                      } else {
                        tmp31 = cResult[20];
                      }
                      if (cResult[21] === tmp7) {
                        if (cResult[22] === tmp4.backgroundColor) {
                          let tmp33;
                          if (cResult[23] === tmp4.subtitle) {
                            tmp33 = cResult[24];
                          }
                          if (cResult[25] === tmp7) {
                            if (cResult[26] === tmp4.backgroundColor) {
                              let tmp36;
                              if (cResult[27] === tmp4.image) {
                                tmp36 = cResult[28];
                              }
                              if (cResult[29] === tmp4.container) {
                                if (cResult[30] === tmp36) {
                                  if (cResult[31] === tmp22) {
                                    if (cResult[32] === tmp28) {
                                      let tmp39;
                                      let tmp43;
                                      let tmp46;
                                      if (cResult[33] === tmp33) {
                                        tmp39 = cResult[34];
                                      }
                                      const _Symbol4 = Symbol;
                                      if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                        const tmp45 = hasOwnProperty(ICYMIShared.Separator, {});
                                        cResult[35] = tmp45;
                                        tmp43 = tmp45;
                                      } else {
                                        tmp43 = cResult[35];
                                      }
                                      if (cResult[36] !== tmp39) {
                                        const obj7 = { children: items };
                                        items = [tmp39, tmp43];
                                        const tmp49 = metroRequire(metroImportDefault, obj7);
                                        cResult[36] = tmp39;
                                        cResult[37] = tmp49;
                                        tmp46 = tmp49;
                                      } else {
                                        tmp46 = cResult[37];
                                      }
                                      return tmp46;
                                    }
                                  }
                                }
                              }
                              const obj8 = { style: tmp4.container, children: items1 };
                              items1 = [tmp22, tmp28, tmp33, tmp36];
                              const tmp42 = metroRequire(View, obj8);
                              cResult[29] = tmp4.container;
                              cResult[30] = tmp36;
                              cResult[31] = tmp22;
                              cResult[32] = tmp28;
                              cResult[33] = tmp33;
                              cResult[34] = tmp42;
                              tmp39 = tmp42;
                            }
                          }
                          const obj9 = { style: items2 };
                          items2 = [, ,];
                          ({ backgroundColor: arr6[0], image: arr6[1] } = tmp4);
                          items2[2] = tmp7;
                          const tmp38 = hasOwnProperty(ReanimatedRexportDefault.View, obj9);
                          cResult[25] = tmp7;
                          cResult[26] = tmp4.backgroundColor;
                          cResult[27] = tmp4.image;
                          cResult[28] = tmp38;
                          tmp36 = tmp38;
                        }
                      }
                      const obj10 = { style: items3 };
                      items3 = [, , ,];
                      ({ backgroundColor: arr5[0], subtitle: arr5[1] } = tmp4);
                      items3[2] = tmp7;
                      items3[3] = tmp31;
                      const tmp35 = hasOwnProperty(ReanimatedRexportDefault.View, obj10);
                      cResult[21] = tmp7;
                      cResult[22] = tmp4.backgroundColor;
                      cResult[23] = tmp4.subtitle;
                      cResult[24] = tmp35;
                      tmp33 = tmp35;
                    }
                  }
                  const obj11 = { style: items4 };
                  items4 = [, , ,];
                  ({ backgroundColor: arr4[0], title: arr4[1] } = tmp4);
                  items4[2] = tmp7;
                  items4[3] = tmp26;
                  const tmp30 = hasOwnProperty(ReanimatedRexportDefault.View, obj11);
                  cResult[16] = tmp7;
                  cResult[17] = tmp4.backgroundColor;
                  cResult[18] = tmp4.title;
                  cResult[19] = tmp30;
                  tmp28 = tmp30;
                }
              }
              const obj12 = { style: tmp4.avatarRow, children: items5 };
              items5 = [tmp15, tmp19];
              const tmp25 = metroRequire(View, obj12);
              cResult[11] = tmp4.avatarRow;
              cResult[12] = tmp15;
              cResult[13] = tmp19;
              cResult[14] = tmp25;
              tmp22 = tmp25;
            }
          }
          const obj13 = { style: items6 };
          items6 = [, , ,];
          ({ backgroundColor: arr2[0], avatarTitle: arr2[1] } = tmp4);
          items6[2] = tmp7;
          items6[3] = tmp17;
          const tmp21 = hasOwnProperty(ReanimatedRexportDefault.View, obj13);
          cResult[7] = tmp7;
          cResult[8] = tmp4.avatarTitle;
          cResult[9] = tmp4.backgroundColor;
          cResult[10] = tmp21;
          tmp19 = tmp21;
        }
      }
      const obj14 = { style: items7 };
      items7 = [, ,];
      ({ backgroundColor: arr[0], avatar: arr[1] } = tmp4);
      items7[2] = tmp7;
      const tmp16 = hasOwnProperty(ReanimatedRexportDefault.View, obj14);
      cResult[2] = tmp7;
      cResult[3] = tmp4.avatar;
      cResult[4] = tmp4.backgroundColor;
      cResult[5] = tmp16;
      tmp15 = tmp16;
    }
  : () => {
      let avatarTitle;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let result;
      let result1;
      let result2;
      let subtitle;
      let title;
      const tmp = closure_8();
      const tmp2 = useChatPlaceholderAnimatedStylesDefault({ visible: true, animated: true });
      const memo = react.useMemo(() => {
        const obj = {
          avatarTitle: Math.floor(10 * Math.random()),
          title: Math.floor(10 * Math.random()),
          subtitle: Math.floor(10 * Math.random()),
        };
        return obj;
      }, []);
      let obj = { children: items7 };
      const obj2 = { style: tmp.container, children: items3 };
      const obj3 = { style: tmp.avatarRow, children: items1 };
      ({ avatarTitle, title, subtitle } = memo);
      const obj4 = { style: items };
      items = [, ,];
      ({ backgroundColor: arr[0], avatar: arr[1] } = tmp);
      items[2] = tmp2;
      items1 = [hasOwnProperty(ReanimatedRexportDefault.View, obj4)];
      const obj5 = { style: items2 };
      items2 = [, , ,];
      ({ backgroundColor: arr3[0], avatarTitle: arr3[1] } = tmp);
      items2[2] = tmp2;
      const obj6 = { width: "" + (result - Math.floor(result)) * 30 + 30 + "%" };
      View = ReanimatedRexportDefault.View;
      result = 100 * Math.sin(avatarTitle);
      items2[3] = obj6;
      items1[1] = hasOwnProperty(View, obj5);
      items3 = [metroRequire(View, obj3), , ,];
      const obj7 = { style: items4 };
      items4 = [, , ,];
      ({ backgroundColor: arr5[0], title: arr5[1] } = tmp);
      items4[2] = tmp2;
      const obj8 = { width: "" + (result1 - Math.floor(result1)) * 25 + 75 + "%" };
      const View2 = ReanimatedRexportDefault.View;
      result1 = 100 * Math.sin(title);
      items4[3] = obj8;
      items3[1] = hasOwnProperty(View2, obj7);
      const obj9 = { style: items5 };
      items5 = [, , ,];
      ({ backgroundColor: arr6[0], subtitle: arr6[1] } = tmp);
      items5[2] = tmp2;
      const obj10 = { width: "" + (result2 - Math.floor(result2)) * 25 + 75 + "%" };
      const View3 = ReanimatedRexportDefault.View;
      result2 = 100 * Math.sin(subtitle);
      items5[3] = obj10;
      items3[2] = hasOwnProperty(View3, obj9);
      const obj11 = { style: items6 };
      items6 = [, ,];
      ({ backgroundColor: arr7[0], image: arr7[1] } = tmp);
      items6[2] = tmp2;
      items3[3] = hasOwnProperty(ReanimatedRexportDefault.View, obj11);
      items7 = [metroRequire(View, obj2), hasOwnProperty(ICYMIShared.Separator, {})];
      return metroRequire(metroImportDefault, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: items };
        items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_9, {})];
        const tmp7 = metroRequire(metroImportDefault, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let items;
      const obj = { children: items };
      items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_9, {})];
      return metroRequire(metroImportDefault, obj);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMILoading.tsx");

export const ICYMILoading = tmp3;
