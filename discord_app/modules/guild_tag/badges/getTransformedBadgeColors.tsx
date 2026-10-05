// discord_app/modules/guild_tag/badges/getTransformedBadgeColors.tsx
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_tag/badges/getTransformedBadgeColors.tsx");

export const getTransformedBadgeColors = function getTransformedBadgeColors(primaryLuminanceWeights) {
  let primaryBaseColors;
  let primaryColorsTransformed;
  let primaryTintColor;
  let primaryTintLuminances;
  let secondaryBaseColors;
  let secondaryLuminanceWeights;
  let secondaryTintColor;
  let secondaryTintLuminances;
  const f115467 = () => "#000000";
  const f115468 = (item, index) => {
    const luminanceResult = obj4.luminance(
      (item * secondaryLuminanceWeights[index].base + closure_2 * secondaryLuminanceWeights[index].tint) /
        (secondaryLuminanceWeights[index].base + secondaryLuminanceWeights[index].tint),
    );
    return luminanceResult.hex();
  };
  ({
    primaryBaseColors,
    primaryTintColor,
    primaryTintLuminances,
    secondaryBaseColors,
    secondaryTintColor,
    secondaryTintLuminances,
    secondaryLuminanceWeights,
  } = primaryLuminanceWeights);
  if (null != primaryTintColor) {
    let mapped;
    primaryLuminanceWeights = primaryLuminanceWeights.primaryLuminanceWeights;
    const obj = _modDef683;
    if (obj.valid(primaryTintColor)) {
      const obj2 = _modDef683(primaryTintColor);
      let closure_2 = obj2.luminance();
      mapped = primaryTintLuminances.map(f115468);
    } else {
      mapped = primaryTintLuminances.map(f115467);
    }
    primaryColorsTransformed = mapped;
  }
  const tmp4 = null != secondaryBaseColors && null != secondaryTintLuminances && null != secondaryLuminanceWeights;
  if (tmp4) {
    if (null != secondaryTintColor) {
      let mapped1;
      const obj3 = _modDef683;
      if (obj3.valid(secondaryTintColor)) {
        const obj4 = _modDef683(secondaryTintColor);
        closure_2 = obj4.luminance();
        mapped1 = secondaryTintLuminances.map(f115468);
      } else {
        mapped1 = secondaryTintLuminances.map(f115467);
      }
      secondaryBaseColors = mapped1;
    }
  }
  return { primaryColorsTransformed, secondaryColorsTransformed: [] };
};
