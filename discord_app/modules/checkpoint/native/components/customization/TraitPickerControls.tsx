// === Module 16019: TraitPickerControls ===

// Module 16019 (TraitPickerControls)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import CheckpointTrait from "CheckpointTrait" /* 5461 */;
import CheckpointCharacterOutfit from "CheckpointCharacterOutfit" /* 5494 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15986 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 15987 */;
import TraitPickerDefault from "TraitPicker" /* 16020 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15977 */;

require = fn;
let closure_3 = ["activeCustomizationOption", "onSelectOption"];
let closure_4 = ["activeCustomizationOption"];
let closure_5 = ["activeCustomizationOption"];
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedAndSavedTraits() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function o() {
      return { selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStoresObject(tmp4, tmp5);
}) : (function useSelectedAndSavedTraits() {
  const items = [CheckpointStore];
  return initialize.useStateFromStoresObject(items, () => ({ selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character }));
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutfitControls(arg0) {
  const cResult = c.c(18);
  if (cResult[0] !== arg0) {
    ({ activeCustomizationOption, onSelectOption } = arg0);
    _require = onSelectOption;
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = activeCustomizationOption;
    cResult[2] = onSelectOption;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
    let tmp4 = activeCustomizationOption;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
  }
  ({ savedSelection, selectedCharacterTraits } = closure_10());
  const tmp11 = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.OUTFIT];
  if (cResult[4] !== tmp11) {
    let outfitDefaultOptionId;
    if (null != tmp11) {
      outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp11);
      const tmpResult = CheckpointCharacterTraits;
    }
    cResult[4] = tmp11;
    cResult[5] = outfitDefaultOptionId;
    let tmp12 = outfitDefaultOptionId;
  } else {
    tmp12 = cResult[5];
  }
  closure_1 = tmp12;
  let NONE;
  if (savedSelection != null) {
    NONE = savedSelection[CheckpointTrait.CheckpointTrait.OUTFIT];
  }
  if (NONE == null) {
    NONE = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
  }
  if (cResult[6] !== NONE) {
    const outfitDefaultOptionId1 = CheckpointCharacterTraits.getOutfitDefaultOptionId(NONE);
    cResult[6] = NONE;
    cResult[7] = outfitDefaultOptionId1;
    let tmp16 = outfitDefaultOptionId1;
    const tmpResult3 = CheckpointCharacterTraits;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const traitOptions = CheckpointCustomizationUtils.getTraitOptions(CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, CheckpointCharacterTraits.OUTFIT_DEFAULT_OPTION_IDS);
    cResult[8] = traitOptions;
    let tmp18 = traitOptions;
    const tmpResult4 = CheckpointCustomizationUtils;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === tmp12) {
    if (cResult[10] === onSelectOption) {
      let tmp20 = cResult[11];
    }
    if (cResult[12] === tmp4) {
      if (cResult[13] === tmp12) {
        if (cResult[14] === tmp20) {
          if (cResult[15] === tmp6) {
            if (cResult[16] === tmp16) {
              let tmp21 = cResult[17];
            }
            return tmp21;
          }
        }
      }
    }
    const obj2 = {};
    const merged = Object.assign(tmp6);
    obj2.customizationOption = tmp4;
    obj2.options = tmp18;
    obj2.savedOptionId = tmp16;
    obj2.selectedOptionId = tmp12;
    obj2.onSelectOption = tmp20;
    cResult[12] = tmp4;
    cResult[13] = tmp12;
    cResult[14] = tmp20;
    cResult[15] = tmp6;
    cResult[16] = tmp16;
    class U {
      constructor(arg0, arg1) {
        if (arg1 !== closure_1) {
          tmp = arg0;
          tmp2 = closure_0;
          tmp3 = closure_0(arg0, arg1);
        }
        return;
      }
    }
    tmp21 = jsx(TraitPickerDefault, {});
    const tmp28 = jsx(TraitPickerDefault, {});
  }
  class U {
    constructor(arg0, arg1) {
      if (arg1 !== closure_1) {
        tmp = arg0;
        tmp2 = closure_0;
        tmp3 = closure_0(arg0, arg1);
      }
      return;
    }
  }
  cResult[9] = tmp12;
  cResult[10] = onSelectOption;
  cResult[11] = U;
  tmp20 = U;
  const tmp10 = closure_10();
}) : (function OutfitControls(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  const merged = Object.assign(onSelectOption, Object.assign({ activeCustomizationOption: 0, onSelectOption: 0 }));
  const tmp2 = closure_10();
  const savedSelection = tmp2.savedSelection;
  const tmp5 = tmp2.selectedCharacterTraits[onSelectOption(undefined, 5461).CheckpointTrait.OUTFIT];
  let outfitDefaultOptionId;
  if (null != tmp5) {
    outfitDefaultOptionId = tmp3(15987).getOutfitDefaultOptionId(tmp5);
    const tmp3Result = tmp3(15987);
  }
  let NONE;
  if (savedSelection != null) {
    NONE = savedSelection[tmp3(undefined, 5461).CheckpointTrait.OUTFIT];
  }
  if (NONE == null) {
    NONE = tmp3(5494).CheckpointCharacterOutfit.NONE;
  }
  const outfitDefaultOptionId1 = onSelectOption(15987).getOutfitDefaultOptionId(NONE);
  const items = [onSelectOption, outfitDefaultOptionId];
  const memo = noop.useMemo(() => onSelectOption(15986).getTraitOptions(onSelectOption(15986).CheckpointCustomizationOption.OUTFIT, onSelectOption(15987).OUTFIT_DEFAULT_OPTION_IDS), []);
  const callback = noop.useCallback((arg0, arg1) => {
    if (arg1 !== outfitDefaultOptionId) {
      onSelectOption(arg0, arg1);
    }
  }, items);
  const obj = {};
  const tmp3Result2 = onSelectOption(15987);
  const merged1 = Object.assign(merged);
  obj.customizationOption = onSelectOption.activeCustomizationOption;
  obj.options = memo;
  obj.savedOptionId = outfitDefaultOptionId1;
  obj.selectedOptionId = outfitDefaultOptionId;
  obj.onSelectOption = callback;
  return jsx(outfitDefaultOptionId(16020), {});
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutfitColorControls(activeCustomizationOption) {
  const cResult = c.c(13);
  if (cResult[0] !== activeCustomizationOption) {
    activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
    const tmp8 = _objectWithoutProperties(activeCustomizationOption, closure_4);
    cResult[0] = activeCustomizationOption;
    cResult[1] = activeCustomizationOption;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = activeCustomizationOption;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  ({ savedSelection, selectedCharacterTraits } = closure_10());
  const tmp10 = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.OUTFIT];
  if (cResult[3] !== tmp10) {
    let NONE = tmp10;
    if (tmp10 == null) {
      NONE = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
    }
    let NONE2 = CheckpointCharacterTraits.getOutfitDefaultOptionId(NONE);
    if (NONE2 == null) {
      NONE2 = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
    }
    cResult[3] = tmp10;
    cResult[4] = NONE2;
    let tmp11 = NONE2;
    const tmpResult = CheckpointCharacterTraits;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp11) {
    const tmpResult3 = CheckpointCustomizationUtils;
    const traitOptions = tmpResult3.getTraitOptions(CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR, CheckpointCharacterTraits.getOutfitColorOptionIds(tmp11));
    cResult[5] = tmp11;
    cResult[6] = traitOptions;
    let tmp13 = traitOptions;
    const tmpResult4 = CheckpointCharacterTraits;
  } else {
    tmp13 = cResult[6];
  }
  let tmp15;
  if (savedSelection != null) {
    tmp15 = savedSelection[CheckpointTrait.CheckpointTrait.OUTFIT];
  }
  if (cResult[7] === tmp4) {
    if (cResult[8] === tmp13) {
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp10) {
          if (cResult[11] === tmp15) {
            let tmp16 = cResult[12];
          }
          return tmp16;
        }
      }
    }
  }
  const obj2 = {};
  const tmp9 = closure_10();
  const merged = Object.assign(tmp5);
  obj2.customizationOption = tmp4;
  obj2.options = tmp13;
  obj2.savedOptionId = tmp15;
  obj2.selectedOptionId = tmp10;
  obj2.hideDescriptionAndRarity = true;
  const tmp19 = jsx(TraitPickerDefault, {});
  cResult[7] = tmp4;
  cResult[8] = tmp13;
  cResult[9] = tmp5;
  cResult[10] = tmp10;
  cResult[11] = tmp15;
  cResult[12] = tmp19;
  tmp16 = tmp19;
}) : (function OutfitColorControls(activeCustomizationOption) {
  const merged = Object.assign(activeCustomizationOption, Object.assign({ activeCustomizationOption: 0 }));
  let NONE2;
  const tmp2 = closure_10();
  const savedSelection = tmp2.savedSelection;
  const tmp5 = tmp2.selectedCharacterTraits[NONE2(undefined, 5461).CheckpointTrait.OUTFIT];
  let NONE = tmp5;
  if (tmp5 == null) {
    NONE = tmp3(5494).CheckpointCharacterOutfit.NONE;
  }
  NONE2 = NONE2(15987).getOutfitDefaultOptionId(NONE);
  if (NONE2 == null) {
    NONE2 = tmp3(5494).CheckpointCharacterOutfit.NONE;
  }
  const items = [NONE2];
  const memo = noop.useMemo(() => {
    const obj = CheckpointCustomizationUtils;
    return obj.getTraitOptions(CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR, CheckpointCharacterTraits.getOutfitColorOptionIds(NONE2));
  }, items);
  const obj2 = {};
  let obj = NONE2(15987);
  const merged1 = Object.assign(merged);
  obj2.customizationOption = activeCustomizationOption.activeCustomizationOption;
  obj2.options = memo;
  let tmp10;
  if (savedSelection != null) {
    tmp10 = savedSelection[tmp3(undefined, 5461).CheckpointTrait.OUTFIT];
  }
  obj2.savedOptionId = tmp10;
  obj2.selectedOptionId = tmp5;
  obj2.hideDescriptionAndRarity = true;
  return jsx(TraitPickerDefault, {});
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitControls(activeCustomizationOption) {
  const cResult = c.c(11);
  if (cResult[0] !== activeCustomizationOption) {
    activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
    const tmp8 = _objectWithoutProperties(activeCustomizationOption, closure_5);
    cResult[0] = activeCustomizationOption;
    cResult[1] = activeCustomizationOption;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = activeCustomizationOption;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  ({ savedSelection, selectedCharacterTraits } = closure_10());
  const tmp10 = CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TRAITS[tmp4];
  if (cResult[3] !== tmp4) {
    const traitOptions = CheckpointCustomizationUtils.getTraitOptions(tmp4);
    cResult[3] = tmp4;
    cResult[4] = traitOptions;
    let tmp12 = traitOptions;
    const tmpResult = CheckpointCustomizationUtils;
  } else {
    tmp12 = cResult[4];
  }
  let tmp14;
  if (savedSelection != null) {
    tmp14 = savedSelection[tmp10];
  }
  if (cResult[5] === tmp4) {
    if (cResult[6] === tmp12) {
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp11) {
          if (cResult[9] === tmp14) {
            let tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
    }
  }
  const obj2 = {};
  const tmp9 = closure_10();
  const merged = Object.assign(tmp5);
  obj2.customizationOption = tmp4;
  obj2.options = tmp12;
  obj2.savedOptionId = tmp14;
  obj2.selectedOptionId = selectedCharacterTraits[tmp10];
  const tmp18 = jsx(TraitPickerDefault, {});
  cResult[5] = tmp4;
  cResult[6] = tmp12;
  cResult[7] = tmp5;
  cResult[8] = selectedCharacterTraits[tmp10];
  cResult[9] = tmp14;
  cResult[10] = tmp18;
  tmp15 = tmp18;
}) : (function TraitControls(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const merged = Object.assign(activeCustomizationOption, Object.assign({ activeCustomizationOption: 0 }));
  const tmp2 = closure_10();
  const savedSelection = tmp2.savedSelection;
  const tmp3 = activeCustomizationOption(15986).CUSTOMIZATION_OPTION_TRAITS[activeCustomizationOption];
  const items = [activeCustomizationOption];
  const memo = noop.useMemo(() => CheckpointCustomizationUtils.getTraitOptions(activeCustomizationOption), items);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.customizationOption = activeCustomizationOption;
  obj.options = memo;
  let tmp8;
  if (savedSelection != null) {
    tmp8 = savedSelection[tmp3];
  }
  obj.savedOptionId = tmp8;
  obj.selectedOptionId = tmp2.selectedCharacterTraits[tmp3];
  return jsx(TraitPickerDefault, {});
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPickerControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPickerControls(activeCustomizationOption) {
  const cResult = c.c(12);
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === activeCustomizationOption) {
    if (cResult[0] === activeCustomizationOption) {
      if (cResult[1] === activeCustomizationOption) {
        let tmp25 = cResult[2];
      }
      return tmp25;
    }
    const obj2 = {};
    const merged = Object.assign(activeCustomizationOption);
    const tmp31 = <closure_11 key={activeCustomizationOption} />;
    cResult[0] = activeCustomizationOption;
    cResult[1] = activeCustomizationOption;
    cResult[2] = tmp31;
    tmp25 = tmp31;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR === activeCustomizationOption) {
    if (cResult[3] === activeCustomizationOption) {
      if (cResult[4] === activeCustomizationOption) {
        let tmp18 = cResult[5];
      }
      return tmp18;
    }
    const obj3 = {};
    const merged1 = Object.assign(activeCustomizationOption);
    const tmp24 = <closure_12 key={activeCustomizationOption} />;
    cResult[3] = activeCustomizationOption;
    cResult[4] = activeCustomizationOption;
    cResult[5] = tmp24;
    tmp18 = tmp24;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE === activeCustomizationOption) {
    if (cResult[6] === activeCustomizationOption) {
      if (cResult[7] === activeCustomizationOption) {
        let tmp11 = cResult[8];
      }
      return tmp11;
    }
    const obj4 = {};
    const merged2 = Object.assign(activeCustomizationOption);
    obj4.hideDescriptionAndRarity = true;
    obj4.skipIntro = true;
    const tmp17 = <closure_13 key={activeCustomizationOption} />;
    cResult[6] = activeCustomizationOption;
    cResult[7] = activeCustomizationOption;
    cResult[8] = tmp17;
    tmp11 = tmp17;
  } else {
    if (cResult[9] === activeCustomizationOption) {
      if (cResult[10] === activeCustomizationOption) {
        let tmp4 = cResult[11];
      }
      return tmp4;
    }
    const obj5 = {};
    const merged3 = Object.assign(activeCustomizationOption);
    const tmp10 = <closure_13 key={activeCustomizationOption} />;
    cResult[9] = activeCustomizationOption;
    cResult[10] = activeCustomizationOption;
    cResult[11] = tmp10;
    tmp4 = tmp10;
  }
}) : (function TraitPickerControls(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === activeCustomizationOption) {
    const obj2 = {};
    const merged = Object.assign(activeCustomizationOption);
    return <closure_11 key={activeCustomizationOption} />;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR === activeCustomizationOption) {
    const obj3 = {};
    const merged1 = Object.assign(activeCustomizationOption);
    return <closure_12 key={activeCustomizationOption} />;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE === activeCustomizationOption) {
    const obj4 = {};
    const merged2 = Object.assign(activeCustomizationOption);
    obj4.hideDescriptionAndRarity = true;
    obj4.skipIntro = true;
    return <closure_13 key={activeCustomizationOption} />;
  } else {
    const obj = {};
    const merged3 = Object.assign(activeCustomizationOption);
    return <closure_13 key={activeCustomizationOption} />;
  }
});