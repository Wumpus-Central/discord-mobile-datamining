// discord_app/modules/checkpoint/native/components/customization/TraitPicker.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import _modDef3092 from "../../../Checkpoint2026.messages.js";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import CheckpointTextDefault from "../CheckpointText.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

require = fn;
function EarnedCountHeader(customizationOption) {
  ({ earnedCount, totalCount } = customizationOption);
  const tmp = closure_11();
  const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(
    customizationOption.customizationOption,
  );
  const intl = util.intl;
  const combined =
    "" +
    customizationOptionName +
    ", " +
    intl.formatToPlainString(_modDef3092.Vfq58K, {
      earnedCount,
      totalCount,
      countHook(arg0) {
        return arg0;
      },
    });
  const obj3 = {
    variant: "experimental/body-sm/medium",
    color: "text-default",
    style: tmp.earnedRow,
    accessibilityRole: "header",
    accessibilityLabel: combined,
    children: null,
  };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3092.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      return closure_1_8(CheckpointTextDefault, { variant: "experimental/mono-md/bold", children }, arg1);
    },
  });
  return React6(Text_Text.Text, obj3);
}
const View = fn(17).View;
const rarityOrder = fn(6066).CHECKPOINT_RARITY_ORDER_MOBILE;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5014);
let obj2 = { container: { gap: fn(13680).TRAIT_OPTION_SPACING }, earnedRow: null, details: null };
let obj3 = { gap: fn(13680).TRAIT_OPTION_SPACING };
obj2.earnedRow = { paddingHorizontal: fn(13680).CONTENT_INSET };
let obj4 = { paddingHorizontal: fn(13680).CONTENT_INSET };
obj2.details = { paddingHorizontal: fn(13680).CONTENT_INSET };
let closure_11 = createStyles.createStyles(obj2);
const __initData = {
  code: "function TraitPickerTsx1(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default function TraitPicker(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  let flag = customizationOption.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const selectedOptionId = customizationOption.selectedOptionId;
  ({ showEarnedCount, optionIds, savedOptionId } = customizationOption);
  if (showEarnedCount === undefined) {
    showEarnedCount = false;
  }
  const onSelectOption = customizationOption.onSelectOption;
  earnedCount = undefined;
  let useReducedMotion;
  const tmp = closure_11();
  const tmp4 = !customizationOption(6434).getIsTraitRarityVisible(customizationOption);
  let obj = customizationOption(6434);
  let items = [useReducedMotion];
  dependencyMap = customizationOption(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = customizationOption(504);
  _slicedToArray = customizationOption(5274).useIsScreenReaderEnabled();
  let obj3 = customizationOption(5274);
  const traitPickerOptions = customizationOption(13682).useTraitPickerOptions({
    customizationOption,
    optionIds,
    savedOptionId,
    rarityOrder,
  });
  ({ availableTraitOptions, earnedCount } = traitPickerOptions);
  closure_5 = tmp6;
  const tmp8 = selectedOptionId(5612)(() => {
    let num = 0;
    if (!closure_5) {
      num = 0;
      if (customizationOption !== tmp2) {
        num = 0;
        if (!closure_2) {
          num = 0;
          if (!closure_3) {
            const _Math = Math;
            num = Math.max(earnedCount - 1, 0);
          }
        }
      }
    }
    return num;
  });
  let tmp9 = tmp6;
  if (null == selectedOptionId) {
    tmp9 = 0 === tmp8;
  }
  useReducedMotion = tmp9;
  const obj4 = customizationOption(13682);
  const obj5 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const fn = function b() {
    const obj = { duration: 600, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
    let num = 0;
    if (closure_6) {
      num = 1;
    }
    const obj3 = { opacity: timing.withTiming(num, obj), transform: null };
    let num2 = 0;
    if (!closure_6) {
      num2 = PX_12;
    }
    const tmpResult = timing;
    const items = [{ translateY: timing.withTiming(num2, obj) }];
    obj3.transform = items;
    return obj3;
  };
  const tmp2Result = customizationOption(5095);
  fn.__closure = {
    INTRO_DETAILS_DURATION_MS: 600,
    Easing: customizationOption(5095).Easing,
    withTiming: customizationOption(5254).withTiming,
    isDetailsVisible: tmp9,
    INTRO_DETAILS_OFFSET_Y: PX_12,
  };
  fn.__workletHash = 9456849062820;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const obj6 = {
    INTRO_DETAILS_DURATION_MS: 600,
    Easing: customizationOption(5095).Easing,
    withTiming: customizationOption(5254).withTiming,
    isDetailsVisible: tmp9,
    INTRO_DETAILS_OFFSET_Y: PX_12,
  };
  [tmp12, tmp13] = earnedCount.useState(tmp8);
  const tmp11 = _slicedToArray(earnedCount.useState(tmp8), 2);
  const obj7 = { availableTraitOptions, selectedOptionId, onSelectOption, paused: null };
  let tmp14 = flag;
  if (!flag) {
    let tmp15 = !tmp6;
    if (!tmp6) {
      tmp15 = tmp12 > 0;
    }
    tmp14 = tmp15;
  }
  obj7.paused = tmp14;
  const autoSelectTraitOption = customizationOption(13683).useAutoSelectTraitOption(obj7);
  let diff = earnedCount;
  if (null == selectedOptionId) {
    diff = earnedCount - tmp12;
  }
  let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
  if (found == null) {
    found = availableTraitOptions[0];
  }
  const obj8 = { style: null, children: null };
  const items1 = [tmp.container, customizationOption.style];
  obj8.style = items1;
  if (showEarnedCount) {
    const obj9 = { customizationOption, earnedCount: diff, totalCount: traitPickerOptions.totalCount };
    showEarnedCount = closure_8(EarnedCountHeader, obj9);
  }
  const items2 = [
    showEarnedCount,
    closure_8(selectedOptionId(13680), {
      customizationOption,
      options: availableTraitOptions,
      selectedOptionId,
      disabled: flag,
      hideRarity: tmp4,
      introStartIndex: tmp8,
      onIntroStep: tmp13,
      onSelectOption,
    }),
  ];
  let tmp23Result = null != found;
  if (tmp23Result) {
    const obj10 = { style: null, children: null };
    const items3 = [tmp.details, animatedStyle];
    obj10.style = items3;
    const obj11 = { asset: found, hideDescriptionAndRarity: tmp4 };
    obj10.children = closure_8(tmp7(13684), obj11);
    tmp23Result = closure_8(tmp7(5095).View, obj10);
  }
  items2[2] = tmp23Result;
  obj8.children = items2;
  return closure_9(closure_5, obj8);
}
