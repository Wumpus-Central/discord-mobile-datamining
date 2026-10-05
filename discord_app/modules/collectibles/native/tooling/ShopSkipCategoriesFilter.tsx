// === Module 15599: ShopSkipCategoriesFilter ===

// Module 15599 (ShopSkipCategoriesFilter)
import nativeDefault from "native" /* 587 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ View: c2, Pressable: c3 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3, stepperContainer: obj4, stepperButton: size, stepperButtonDisabled: { opacity: 0.5 }, valueText: { minWidth: 40, textAlign: "center" } };
obj2 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
let closure_7 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let items2;
  let skipNumCategories;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(38);
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
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function x() {
      if (stateFromStores > 0) {
        const obj = CollectiblesActionCreators;
        obj.setSkipNumCategories(tmp - 1);
      }
    };
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn3 = function y() {
      if (stateFromStores < 100) {
        const obj = CollectiblesActionCreators;
        obj.setSkipNumCategories(tmp + 1);
      }
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn3;
    tmp10 = fn3;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== tmp4.label) {
    const obj2 = { variant: "text-md/normal", style: tmp4.label, children: "Hide first # of categories" };
    const tmp15 = closure_5(tmp(4886).Text, obj2);
    cResult[6] = tmp4.label;
    cResult[7] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp4.stepperButton) {
    let tmp17;
    let tmp18;
    if (cResult[9] === (stateFromStores <= 0 && tmp4.stepperButtonDisabled)) {
      tmp17 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp20 = closure_5(tmp(4886).Text, { variant: "text-lg/semibold", children: "\u2212" });
      cResult[11] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp9) {
      if (cResult[13] === stateFromStores <= 0) {
        let tmp21;
        if (cResult[14] === tmp17) {
          tmp21 = cResult[15];
        }
        if (cResult[16] === stateFromStores) {
          let tmp25;
          if (cResult[17] === tmp4.valueText) {
            tmp25 = cResult[18];
          }
          if (cResult[19] === tmp4.stepperButton) {
            let tmp29;
            let tmp30;
            if (cResult[20] === (stateFromStores >= 100 && tmp4.stepperButtonDisabled)) {
              tmp29 = cResult[21];
            }
            const _Symbol2 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp32 = closure_5(tmp(4886).Text, { variant: "text-lg/semibold", children: "+" });
              cResult[22] = tmp32;
              tmp30 = tmp32;
            } else {
              tmp30 = cResult[22];
            }
            if (cResult[23] === tmp10) {
              if (cResult[24] === stateFromStores >= 100) {
                let tmp33;
                if (cResult[25] === tmp29) {
                  tmp33 = cResult[26];
                }
                if (cResult[27] === tmp4.stepperContainer) {
                  if (cResult[28] === tmp33) {
                    if (cResult[29] === tmp21) {
                      let tmp37;
                      if (cResult[30] === tmp25) {
                        tmp37 = cResult[31];
                      }
                      if (cResult[32] === tmp37) {
                        let tmp41;
                        if (cResult[33] === tmp13) {
                          tmp41 = cResult[34];
                        }
                        if (cResult[35] === tmp4.container) {
                          let tmp44;
                          if (cResult[36] === tmp41) {
                            tmp44 = cResult[37];
                          }
                          return tmp44;
                        }
                        const obj3 = { style: tmp4.container, children: tmp41 };
                        const tmp47 = closure_5(closure_2, obj3);
                        cResult[35] = tmp4.container;
                        cResult[36] = tmp41;
                        cResult[37] = tmp47;
                        tmp44 = tmp47;
                      }
                      const obj4 = { spacing: 8, children: items1 };
                      items1 = [tmp13, tmp37];
                      const tmp43 = closure_6(tmp(5593).Stack, obj4);
                      cResult[32] = tmp37;
                      cResult[33] = tmp13;
                      cResult[34] = tmp43;
                      tmp41 = tmp43;
                    }
                  }
                }
                const obj5 = { style: tmp4.stepperContainer, children: items2 };
                items2 = [tmp21, tmp25, tmp33];
                const tmp40 = closure_6(closure_2, obj5);
                cResult[27] = tmp4.stepperContainer;
                cResult[28] = tmp33;
                cResult[29] = tmp21;
                cResult[30] = tmp25;
                cResult[31] = tmp40;
                tmp37 = tmp40;
              }
            }
            const obj6 = { style: tmp29, onPress: tmp10, disabled: stateFromStores >= 100, children: tmp30 };
            const tmp36 = closure_5(closure_3, obj6);
            cResult[23] = tmp10;
            cResult[24] = stateFromStores >= 100;
            cResult[25] = tmp29;
            cResult[26] = tmp36;
            tmp33 = tmp36;
          }
          const items3 = [tmp4.stepperButton, stateFromStores >= 100 && tmp4.stepperButtonDisabled];
          cResult[19] = tmp4.stepperButton;
          cResult[20] = stateFromStores >= 100 && tmp4.stepperButtonDisabled;
          cResult[21] = items3;
          tmp29 = items3;
        }
        const obj7 = { variant: "text-md/semibold", style: tmp4.valueText, children: stateFromStores };
        const tmp27 = closure_5(tmp(4886).Text, obj7);
        cResult[16] = stateFromStores;
        cResult[17] = tmp4.valueText;
        cResult[18] = tmp27;
        tmp25 = tmp27;
      }
    }
    const obj8 = { style: tmp17, onPress: tmp9, disabled: stateFromStores <= 0, children: tmp18 };
    const tmp24 = closure_5(closure_3, obj8);
    cResult[12] = tmp9;
    cResult[13] = stateFromStores <= 0;
    cResult[14] = tmp17;
    cResult[15] = tmp24;
    tmp21 = tmp24;
  }
  const items4 = [tmp4.stepperButton, stateFromStores <= 0 && tmp4.stepperButtonDisabled];
  cResult[8] = tmp4.stepperButton;
  cResult[9] = stateFromStores <= 0 && tmp4.stepperButtonDisabled;
  cResult[10] = items4;
  tmp17 = items4;
}) : (() => {
  let Stack;
  let items3;
  let obj7;
  let skipNumCategories;
  let stateFromStores;
  const tmp = closure_7();
  let obj = stateFromStores(504);
  const items = [CollectiblesCategoryStore];
  stateFromStores = obj.useStateFromStores(items, () => skipNumCategories.skipNumCategories);
  const obj2 = { style: tmp.container, children: closure_6(Stack, obj7) };
  Stack = stateFromStores(5593).Stack;
  const items1 = [, ];
  const obj3 = { variant: "text-md/normal", style: tmp.label, children: "Hide first # of categories" };
  items1[0] = closure_5(stateFromStores(4886).Text, obj3);
  const items2 = [tmp.stepperButton, ];
  const obj4 = { style: tmp.stepperContainer, children: items3 };
  const tmp11 = stateFromStores <= 0 && tmp.stepperButtonDisabled;
  items2[1] = tmp11;
  items3 = [, , ];
  const obj5 = {
    style: items2,
    onPress() {
      if (stateFromStores > 0) {
        const obj = CollectiblesActionCreators;
        obj.setSkipNumCategories(tmp - 1);
      }
    },
    disabled: stateFromStores <= 0,
    children: closure_5(stateFromStores(4886).Text, { variant: "text-lg/semibold", children: "\u2212" })
  };
  items3[0] = closure_5(closure_3, obj5);
  const obj6 = { variant: "text-md/semibold", style: tmp.valueText, children: stateFromStores };
  items3[1] = closure_5(stateFromStores(4886).Text, obj6);
  const items4 = [tmp.stepperButton, ];
  obj7 = { spacing: 8, children: items1 };
  const tmp12 = stateFromStores >= 100 && tmp.stepperButtonDisabled;
  items4[1] = tmp12;
  const obj8 = {
    style: items4,
    onPress() {
      if (stateFromStores < 100) {
        const obj = CollectiblesActionCreators;
        obj.setSkipNumCategories(tmp + 1);
      }
    },
    disabled: stateFromStores >= 100,
    children: closure_5(stateFromStores(4886).Text, { variant: "text-lg/semibold", children: "+" })
  };
  items3[2] = closure_5(closure_3, obj8);
  items1[1] = closure_6(closure_2, obj4);
  return closure_5(closure_2, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx");

export const ShopSkipCategoriesFilter = tmp6;