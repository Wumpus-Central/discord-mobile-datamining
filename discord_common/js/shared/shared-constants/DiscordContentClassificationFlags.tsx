// discord_common/js/shared/shared-constants/DiscordContentClassificationFlags.tsx
import BigFlagUtils from "../utils/BigFlagUtils.tsx";

let obj = {
  EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED: null,
  SEXUALLY_SUGGESTIVE_IMAGERY: null,
  SEXUALLY_SUGGESTIVE_TEXT: null,
  SEXUALLY_EXPLICIT_IMAGERY: null,
  SEXUALLY_EXPLICIT_TEXT: null,
  NUDITY: null,
  DATING: null,
  REGULATED_GOODS_USAGE: null,
  REGULATED_GOODS_DEPICTION: null,
  VIOLENCE_DOMESTIC_SIMULATED: null,
  VIOLENCE_ANIMALS: null,
  VIOLENCE_FANTASY: null,
  VIOLENCE_GRAPHIC: null,
  SELF_HARM_DEPICTION: null,
  SELF_HARM_REFERENCE: null,
  GAMBLING_REAL: null,
  GAMBLING_SIMULATED: null,
  PROFANITY_MILD: null,
  PROFANITY_SEVERE: null,
  SLURS: null,
  DANGEROUS_PHYSICALLY_HARMFUL: null,
  DANGEROUS_MENTALLY_HARMFUL: null,
  TRAGEDY_SIMULATED_HISTORICAL: null,
  TRAGEDY_SIMULATED_NATURAL_DISASTER: null,
  TRAGEDY_REAL_MILITARY_CONFLICT: null,
};
obj.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED = BigFlagUtils.getBrandedFlag(0);
obj.SEXUALLY_SUGGESTIVE_IMAGERY = BigFlagUtils.getBrandedFlag(1);
obj.SEXUALLY_SUGGESTIVE_TEXT = BigFlagUtils.getBrandedFlag(2);
obj.SEXUALLY_EXPLICIT_IMAGERY = BigFlagUtils.getBrandedFlag(3);
obj.SEXUALLY_EXPLICIT_TEXT = BigFlagUtils.getBrandedFlag(4);
obj.NUDITY = BigFlagUtils.getBrandedFlag(5);
obj.DATING = BigFlagUtils.getBrandedFlag(6);
obj.REGULATED_GOODS_USAGE = BigFlagUtils.getBrandedFlag(7);
obj.REGULATED_GOODS_DEPICTION = BigFlagUtils.getBrandedFlag(8);
obj.VIOLENCE_DOMESTIC_SIMULATED = BigFlagUtils.getBrandedFlag(9);
obj.VIOLENCE_ANIMALS = BigFlagUtils.getBrandedFlag(10);
obj.VIOLENCE_FANTASY = BigFlagUtils.getBrandedFlag(11);
obj.VIOLENCE_GRAPHIC = BigFlagUtils.getBrandedFlag(12);
obj.SELF_HARM_DEPICTION = BigFlagUtils.getBrandedFlag(13);
obj.SELF_HARM_REFERENCE = BigFlagUtils.getBrandedFlag(14);
obj.GAMBLING_REAL = BigFlagUtils.getBrandedFlag(15);
obj.GAMBLING_SIMULATED = BigFlagUtils.getBrandedFlag(16);
obj.PROFANITY_MILD = BigFlagUtils.getBrandedFlag(17);
obj.PROFANITY_SEVERE = BigFlagUtils.getBrandedFlag(18);
obj.SLURS = BigFlagUtils.getBrandedFlag(19);
obj.DANGEROUS_PHYSICALLY_HARMFUL = BigFlagUtils.getBrandedFlag(20);
obj.DANGEROUS_MENTALLY_HARMFUL = BigFlagUtils.getBrandedFlag(21);
obj.TRAGEDY_SIMULATED_HISTORICAL = BigFlagUtils.getBrandedFlag(22);
obj.TRAGEDY_SIMULATED_NATURAL_DISASTER = BigFlagUtils.getBrandedFlag(23);
obj.TRAGEDY_REAL_MILITARY_CONFLICT = BigFlagUtils.getBrandedFlag(24);
const frozen = Object.freeze(obj);
obj = { RESTRICTED_TO_ADULT: null };
obj.RESTRICTED_TO_ADULT = BigFlagUtils.combine(
  frozen.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
  frozen.SEXUALLY_EXPLICIT_IMAGERY,
  frozen.SEXUALLY_EXPLICIT_TEXT,
);
const frozen1 = Object.freeze(obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/shared/shared-constants/DiscordContentClassificationFlags.tsx",
);

export const DiscordContentClassificationFlags = frozen;
export const DiscordContentClassificationFlagMasks = frozen1;
