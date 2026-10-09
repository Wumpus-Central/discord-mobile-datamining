// === Module 15928: CheckpointCharacterStage ===

// Module 15928 (CheckpointCharacterStage)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import CheckpointTrait from "CheckpointTrait" /* 5458 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 15925 */;
import CheckpointTraitOptionNames from "CheckpointTraitOptionNames" /* 15926 */;
import CheckpointStore from "CheckpointStore" /* 15915 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { flexGrow: 1, justifyContent: "flex-start", alignItems: "center", gap: nativeDefault.space.PX_12 } };
let closure_6 = createStyles.createStyles(obj);
let obj2 = { flexGrow: 1, justifyContent: "flex-start", alignItems: "center", gap: nativeDefault.space.PX_12 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterStage(arg0) {
  let flatMapResult = dependencyMap;
  const cResult = stateFromStores(576).c(17);
  ({ stage, activeCustomizationOption } = arg0);
  const tmp3 = closure_6();
  let values = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
      return CheckpointStore.selectedCharacterTraits;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_4(tmp(5087).Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" });
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stage) {
    const obj2 = { color: "text-muted", variant: "text-md/medium", children: stage };
    const tmp13 = closure_4(tmp(5087).Text, obj2);
    cResult[3] = stage;
    cResult[4] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== activeCustomizationOption) {
    const customizationOptionName = tmp(15924).getCustomizationOptionName(activeCustomizationOption);
    cResult[5] = activeCustomizationOption;
    cResult[6] = customizationOptionName;
    let tmp14 = customizationOptionName;
    const tmpResult2 = tmp(15924);
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== tmp14) {
    const obj3 = { color: "text-muted", variant: "text-md/medium", children: null };
    const items1 = ["Trait: ", tmp14];
    obj3.children = items1;
    const tmp18 = closure_5(tmp(5087).Heading, obj3);
    cResult[7] = tmp14;
    cResult[8] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          obj = { color: "text-muted", variant: "text-md/medium", children: arg0 };
          return closure_1_4(closure_0(closure_1_1[12]).Text, obj, arg0);
        }
      }
      cResult[11] = I;
    } else {
      class I {
        constructor(arg0) {
          obj = { color: "text-muted", variant: "text-md/medium", children: arg0 };
          return closure_1_4(closure_0(closure_1_1[12]).Text, obj, arg0);
        }
      }
    }
    const _Object = values.Object;
    values = _Object.values(tmp(5458).CheckpointTrait);
    flatMapResult = values.flatMap((item) => {
      if (null == stateFromStores[item]) {
        let items = [];
      } else if (item !== CheckpointTrait.CheckpointTrait.OUTFIT) {
        const intl2 = util.intl;
        const _HermesInternal2 = HermesInternal;
        const items1 = ["" + item + ": " + intl2.string(CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item][tmp])];
        items = items1;
      } else {
        const intl3 = util.intl;
        let outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp);
        if (outfitDefaultOptionId == null) {
          outfitDefaultOptionId = tmp;
        }
        const tmp7Result = CheckpointCharacterTraits;
        const intl = util.intl;
        const _HermesInternal = HermesInternal;
        items = ["" + item + ": " + intl3.string(CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item][outfitDefaultOptionId]) + " (" + intl.string(CheckpointTraitOptionNames.CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[tmp]) + ")"];
        const stringResult = intl3.string(CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item][outfitDefaultOptionId]);
      }
      return items;
    });
    const mapped = flatMapResult.map(I);
    cResult[9] = stateFromStores;
    cResult[10] = mapped;
  } else {
    class I {
      constructor(arg0) {
        obj = { color: "text-muted", variant: "text-md/medium", children: arg0 };
        return closure_1_4(closure_0(closure_1_1[12]).Text, obj, arg0);
      }
    }
    if (cResult[12] === tmp3.container) {
      class I {
        constructor(arg0) {
          obj = { color: "text-muted", variant: "text-md/medium", children: arg0 };
          return closure_1_4(closure_0(closure_1_1[12]).Text, obj, arg0);
        }
      }
    }
    const obj4 = { style: tmp3.container, children: null };
    const items2 = [tmp8, tmp11, tmp16, tmp19];
    obj4.children = items2;
    const tmp26 = closure_5(View, obj4);
    cResult[12] = tmp3.container;
    cResult[13] = tmp11;
    cResult[14] = tmp16;
    cResult[15] = tmp19;
    cResult[16] = tmp26;
  }
  const tmpResult = stateFromStores(504);
}) : (function CheckpointCharacterStage(arg0) {
  ({ stage, activeCustomizationOption } = arg0);
  const tmp = closure_6();
  let items = [CheckpointStore];
  const obj2 = { style: tmp.container, children: null };
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => CheckpointStore.selectedCharacterTraits);
  let items1 = [closure_4(stateFromStores(5087).Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }), closure_4(stateFromStores(5087).Text, { color: "text-muted", variant: "text-md/medium", children: stage }), , ];
  const obj3 = { color: "text-muted", variant: "text-md/medium", children: null };
  const obj = stateFromStores(504);
  const items2 = ["Trait: ", stateFromStores(15924).getCustomizationOptionName(activeCustomizationOption)];
  obj3.children = items2;
  items1[2] = closure_5(stateFromStores(5087).Heading, obj3);
  const values = Object.values(stateFromStores(5458).CheckpointTrait);
  const obj4 = stateFromStores(15924);
  items1[3] = values.flatMap((item) => {
    if (null == stateFromStores[item]) {
      let items = [];
    } else if (item !== CheckpointTrait.CheckpointTrait.OUTFIT) {
      const intl2 = util.intl;
      const _HermesInternal2 = HermesInternal;
      const items1 = ["" + item + ": " + intl2.string(CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item][tmp])];
      items = items1;
    } else {
      const intl3 = util.intl;
      let outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp);
      if (outfitDefaultOptionId == null) {
        outfitDefaultOptionId = tmp;
      }
      const tmp7Result = CheckpointCharacterTraits;
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      items = ["" + item + ": " + intl3.string(CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item][outfitDefaultOptionId]) + " (" + intl.string(CheckpointTraitOptionNames.CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[tmp]) + ")"];
      const stringResult = intl3.string(CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item][outfitDefaultOptionId]);
    }
    return items;
  }).map((children) => closure_1_4(stateFromStores(dependencyMap[12]).Text, { color: "text-muted", variant: "text-md/medium", children }, children));
  obj2.children = items1;
  return closure_5(View, obj2);
});