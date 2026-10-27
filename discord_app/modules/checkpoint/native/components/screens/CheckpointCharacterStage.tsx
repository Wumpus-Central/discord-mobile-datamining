// === Module 12980: CheckpointCharacterStage ===

// Module 12980 (CheckpointCharacterStage)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import Text_Text from "Text/Text" /* 5235 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6040 */;
import CheckpointTrait from "CheckpointTrait" /* 6041 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6364 */;
import CheckpointTraitOptionNames from "CheckpointTraitOptionNames" /* 6366 */;
import CheckpointStore from "CheckpointStore" /* 12968 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
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
  const cResult = c.c(17);
  ({ stage, activeCustomizationOption } = arg0);
  const tmp3 = closure_6();
  let values = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    class T {
      constructor() {
        return closure_1_3.selectedCharacterTraits;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, T);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        return closure_1_3.selectedCharacterTraits;
      }
    }
    let tmp8 = closure_4(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" });
    const tmp10 = closure_4(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" });
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stage) {
    { color: "text-muted", variant: "text-md/medium", children: null }.children = stage;
    class T {
      constructor() {
        return closure_1_3.selectedCharacterTraits;
      }
    }
    cResult[3] = stage;
    cResult[4] = tmp13;
    let tmp11 = tmp13;
    const obj2 = { color: "text-muted", variant: "text-md/medium", children: null };
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== activeCustomizationOption) {
    const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(activeCustomizationOption);
    class T {
      constructor() {
        return closure_1_3.selectedCharacterTraits;
      }
    }
    cResult[6] = customizationOptionName;
    let tmp14 = customizationOptionName;
    const tmpResult2 = CheckpointCustomizationUtils;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== tmp14) {
    const obj3 = { color: "text-muted", variant: "text-md/medium", children: null };
    const items1 = ["Trait: "];
    class T {
      constructor() {
        return closure_1_3.selectedCharacterTraits;
      }
    }
    obj3.children = items1;
    const tmp18 = closure_5(Text_Text.Heading, obj3);
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
      class T {
        constructor() {
          return closure_1_3.selectedCharacterTraits;
        }
      }
    } else {
      class I {
        constructor(arg0) {
          obj = { color: "text-muted", variant: "text-md/medium", children: arg0 };
          return closure_1_4(closure_0(closure_1_1[12]).Text, obj, arg0);
        }
      }
    }
    class T {
      constructor() {
        return closure_1_3.selectedCharacterTraits;
      }
    }
    const _Object = values.Object;
    values = _Object.values(CheckpointTrait.CheckpointTrait);
    flatMapResult = values.flatMap((item) => {
      if (null == stateFromStores[item]) {
        return [];
      } else if (item !== CheckpointTrait.CheckpointTrait.OUTFIT) {
        const tmp9 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[item][tmp];
        let str9 = "";
        if (null != tmp9) {
          const intl3 = util.intl;
          str9 = intl3.string(tmp9);
        }
        const _HermesInternal2 = HermesInternal;
        const items = ["" + item + ": " + str9];
        return items;
      } else {
        let outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp);
        if (outfitDefaultOptionId == null) {
          outfitDefaultOptionId = tmp;
        }
        const tmp3 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[item][outfitDefaultOptionId];
        const tmp4 = CheckpointTraitOptionNames.CHECKPOINT_OUTFIT_TO_COLOR_NAME[tmp];
        let str2 = "";
        if (null != tmp3) {
          const intl = util.intl;
          str2 = intl.string(tmp3);
        }
        let str3 = "";
        if (null != tmp4) {
          const intl2 = util.intl;
          str3 = intl2.string(tmp4);
        }
        const _HermesInternal = HermesInternal;
        const items1 = ["" + item + ": " + str2 + " (" + str3 + ")"];
        return items1;
      }
    });
    const mapped = flatMapResult.map(tmp20);
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
    class T {
      constructor() {
        return closure_1_3.selectedCharacterTraits;
      }
    }
    const obj4 = { style: tmp3.container, children: null };
    const items2 = [tmp8, tmp11, tmp16, tmp19];
    obj4.children = items2;
    const tmp25 = closure_5(View, obj4);
    cResult[12] = tmp3.container;
    cResult[13] = tmp11;
    cResult[14] = tmp16;
    cResult[15] = tmp19;
    cResult[16] = tmp25;
  }
  const tmpResult = initialize;
}) : (function CheckpointCharacterStage(arg0) {
  ({ stage, activeCustomizationOption } = arg0);
  const tmp = closure_6();
  let items = [CheckpointStore];
  const obj2 = { style: tmp.container, children: null };
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => CheckpointStore.selectedCharacterTraits);
  let items1 = [closure_4(stateFromStores(5235).Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }), closure_4(stateFromStores(5235).Text, { color: "text-muted", variant: "text-md/medium", children: stage }), , ];
  const obj3 = { color: "text-muted", variant: "text-md/medium", children: null };
  const obj = stateFromStores(504);
  const items2 = ["Trait: ", stateFromStores(6364).getCustomizationOptionName(activeCustomizationOption)];
  obj3.children = items2;
  items1[2] = closure_5(stateFromStores(5235).Heading, obj3);
  const values = Object.values(stateFromStores(6041).CheckpointTrait);
  const obj4 = stateFromStores(6364);
  items1[3] = values.flatMap((item) => {
    if (null == stateFromStores[item]) {
      return [];
    } else if (item !== CheckpointTrait.CheckpointTrait.OUTFIT) {
      const tmp9 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[item][tmp];
      let str9 = "";
      if (null != tmp9) {
        const intl3 = util.intl;
        str9 = intl3.string(tmp9);
      }
      const _HermesInternal2 = HermesInternal;
      const items = ["" + item + ": " + str9];
      return items;
    } else {
      let outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp);
      if (outfitDefaultOptionId == null) {
        outfitDefaultOptionId = tmp;
      }
      const tmp3 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[item][outfitDefaultOptionId];
      const tmp4 = CheckpointTraitOptionNames.CHECKPOINT_OUTFIT_TO_COLOR_NAME[tmp];
      let str2 = "";
      if (null != tmp3) {
        const intl = util.intl;
        str2 = intl.string(tmp3);
      }
      let str3 = "";
      if (null != tmp4) {
        const intl2 = util.intl;
        str3 = intl2.string(tmp4);
      }
      const _HermesInternal = HermesInternal;
      const items1 = ["" + item + ": " + str2 + " (" + str3 + ")"];
      return items1;
    }
  }).map((children) => closure_1_4(stateFromStores(dependencyMap[12]).Text, { color: "text-muted", variant: "text-md/medium", children }, children));
  obj2.children = items1;
  return closure_5(View, obj2);
});