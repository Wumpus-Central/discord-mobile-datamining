// discord_app/modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesActionCreators from "../../CollectiblesActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../../CollectiblesCategoryStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Pressable: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 },
  label: null,
  stepperContainer: null,
  stepperButton: null,
  stepperButtonDisabled: null,
  valueText: null,
};
let obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.label = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.stepperContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  justifyContent: "center",
  alignItems: "center",
};
obj2.stepperButton = size;
obj2.stepperButtonDisabled = { opacity: 0.5 };
obj2.valueText = { minWidth: 40, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(38);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesCategoryStore];
        const fn = function o() {
          return skipNumCategories.skipNumCategories;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function x() {
          if (stateFromStores > 0) {
            CollectiblesActionCreators.setSkipNumCategories(tmp - 1);
          }
        };
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const fn3 = function y() {
          if (stateFromStores < 100) {
            CollectiblesActionCreators.setSkipNumCategories(tmp + 1);
          }
        };
        cResult[4] = stateFromStores;
        cResult[5] = fn3;
        let tmp10 = fn3;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp4.label) {
        const obj2 = { variant: "text-md/normal", style: tmp4.label, children: "Hide first # of categories" };
        const tmp15 = closure_5(tmp(4892).Text, obj2);
        cResult[6] = tmp4.label;
        cResult[7] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      let stepperButtonDisabled = tmp11;
      if (stateFromStores <= 0) {
        stepperButtonDisabled = tmp4.stepperButtonDisabled;
      }
      if (cResult[8] === tmp4.stepperButton) {
        if (cResult[9] === stepperButtonDisabled) {
          let tmp16 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp19 = closure_5(tmp(4892).Text, { variant: "text-lg/semibold", children: "\u2212" });
          cResult[11] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[11];
        }
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp11) {
            if (cResult[14] === tmp16) {
              let tmp20 = cResult[15];
            }
            if (cResult[16] === stateFromStores) {
              if (cResult[17] === tmp4.valueText) {
                let tmp24 = cResult[18];
              }
              let stepperButtonDisabled2 = tmp12;
              if (tmp12) {
                stepperButtonDisabled2 = tmp4.stepperButtonDisabled;
              }
              if (cResult[19] === tmp4.stepperButton) {
                if (cResult[20] === stepperButtonDisabled2) {
                  let tmp27 = cResult[21];
                }
                const _Symbol2 = Symbol;
                if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp30 = closure_5(tmp(4892).Text, { variant: "text-lg/semibold", children: "+" });
                  cResult[22] = tmp30;
                  let tmp28 = tmp30;
                } else {
                  tmp28 = cResult[22];
                }
                if (cResult[23] === tmp10) {
                  if (cResult[24] === tmp12) {
                    if (cResult[25] === tmp27) {
                      let tmp31 = cResult[26];
                    }
                    if (cResult[27] === tmp4.stepperContainer) {
                      if (cResult[28] === tmp31) {
                        if (cResult[29] === tmp20) {
                          if (cResult[30] === tmp24) {
                            let tmp35 = cResult[31];
                          }
                          if (cResult[32] === tmp35) {
                            if (cResult[33] === tmp13) {
                              let tmp39 = cResult[34];
                            }
                            if (cResult[35] === tmp4.container) {
                              if (cResult[36] === tmp39) {
                                let tmp42 = cResult[37];
                              }
                              return tmp42;
                            }
                            const obj3 = { style: tmp4.container, children: tmp39 };
                            const tmp45 = closure_5(closure_2, obj3);
                            cResult[35] = tmp4.container;
                            cResult[36] = tmp39;
                            cResult[37] = tmp45;
                            tmp42 = tmp45;
                          }
                          const obj4 = { spacing: 8, children: null };
                          const items1 = [tmp13, tmp35];
                          obj4.children = items1;
                          const tmp41 = closure_6(tmp(5600).Stack, obj4);
                          cResult[32] = tmp35;
                          cResult[33] = tmp13;
                          cResult[34] = tmp41;
                          tmp39 = tmp41;
                        }
                      }
                    }
                    const obj5 = { style: tmp4.stepperContainer, children: null };
                    const items2 = [tmp20, tmp24, tmp31];
                    obj5.children = items2;
                    const tmp38 = closure_6(closure_2, obj5);
                    cResult[27] = tmp4.stepperContainer;
                    cResult[28] = tmp31;
                    cResult[29] = tmp20;
                    cResult[30] = tmp24;
                    cResult[31] = tmp38;
                    tmp35 = tmp38;
                  }
                }
                const obj6 = { style: tmp27, onPress: tmp10, disabled: tmp12, children: tmp28 };
                const tmp34 = closure_5(closure_3, obj6);
                cResult[23] = tmp10;
                cResult[24] = tmp12;
                cResult[25] = tmp27;
                cResult[26] = tmp34;
                tmp31 = tmp34;
              }
              const items3 = [tmp4.stepperButton, stepperButtonDisabled2];
              cResult[19] = tmp4.stepperButton;
              cResult[20] = stepperButtonDisabled2;
              cResult[21] = items3;
              tmp27 = items3;
            }
            const obj7 = { variant: "text-md/semibold", style: tmp4.valueText, children: stateFromStores };
            const tmp26 = closure_5(tmp(4892).Text, obj7);
            cResult[16] = stateFromStores;
            cResult[17] = tmp4.valueText;
            cResult[18] = tmp26;
            tmp24 = tmp26;
          }
        }
        const obj8 = { style: tmp16, onPress: tmp9, disabled: tmp11, children: tmp17 };
        const tmp23 = closure_5(closure_3, obj8);
        cResult[12] = tmp9;
        cResult[13] = tmp11;
        cResult[14] = tmp16;
        cResult[15] = tmp23;
        tmp20 = tmp23;
      }
      const items4 = [tmp4.stepperButton, stepperButtonDisabled];
      cResult[8] = tmp4.stepperButton;
      cResult[9] = stepperButtonDisabled;
      cResult[10] = items4;
      tmp16 = items4;
      const tmpResult = stateFromStores(504);
    }
  : () => {
      const tmp = closure_7();
      const items = [CollectiblesCategoryStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => skipNumCategories.skipNumCategories);
      const obj2 = { style: tmp.container, children: null };
      const items1 = [
        closure_5(stateFromStores(4892).Text, {
          variant: "text-md/normal",
          style: tmp.label,
          children: "Hide first # of categories",
        }),
      ];
      const obj4 = { style: tmp.stepperContainer, children: null };
      const items2 = [tmp.stepperButton];
      let stepperButtonDisabled = tmp5;
      if (stateFromStores <= 0) {
        stepperButtonDisabled = tmp.stepperButtonDisabled;
      }
      let obj = stateFromStores(504);
      const obj3 = { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" };
      items2[1] = stepperButtonDisabled;
      const items3 = [
        closure_5(closure_3, {
          style: items2,
          onPress() {
            if (stateFromStores > 0) {
              CollectiblesActionCreators.setSkipNumCategories(tmp - 1);
            }
          },
          disabled: stateFromStores <= 0,
          children: closure_5(stateFromStores(4892).Text, { variant: "text-lg/semibold", children: "\u2212" }),
        }),
        closure_5(stateFromStores(4892).Text, {
          variant: "text-md/semibold",
          style: tmp.valueText,
          children: stateFromStores,
        }),
      ];
      const items4 = [tmp.stepperButton];
      let stepperButtonDisabled2 = tmp6;
      if (stateFromStores >= 100) {
        stepperButtonDisabled2 = tmp.stepperButtonDisabled;
      }
      const obj7 = { spacing: 8, children: null };
      const obj5 = {
        style: items2,
        onPress() {
          if (stateFromStores > 0) {
            CollectiblesActionCreators.setSkipNumCategories(tmp - 1);
          }
        },
        disabled: stateFromStores <= 0,
        children: closure_5(stateFromStores(4892).Text, { variant: "text-lg/semibold", children: "\u2212" }),
      };
      const obj6 = { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores };
      items4[1] = stepperButtonDisabled2;
      items3[2] = closure_5(closure_3, {
        style: items4,
        onPress() {
          if (stateFromStores < 100) {
            CollectiblesActionCreators.setSkipNumCategories(tmp + 1);
          }
        },
        disabled: stateFromStores >= 100,
        children: closure_5(stateFromStores(4892).Text, { variant: "text-lg/semibold", children: "+" }),
      });
      obj4.children = items3;
      items1[1] = closure_6(closure_2, obj4);
      obj7.children = items1;
      obj2.children = closure_6(stateFromStores(5600).Stack, obj7);
      return closure_5(closure_2, obj2);
    };
