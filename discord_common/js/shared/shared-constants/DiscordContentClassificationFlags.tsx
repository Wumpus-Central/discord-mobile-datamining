// === Module 5901: DiscordContentClassificationFlags ===

// Module 5901 (DiscordContentClassificationFlags)
import "BigFlagUtils";
import BigFlagUtils_mod from "BigFlagUtils" /* 1097 */;
import size from "module_2" /* 2 */;

let BigFlagUtils;
const obj = { EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED: BigFlagUtils.getBrandedFlag(0), SEXUALLY_SUGGESTIVE_IMAGERY: BigFlagUtils.getBrandedFlag(1), SEXUALLY_SUGGESTIVE_TEXT: BigFlagUtils.getBrandedFlag(2), SEXUALLY_EXPLICIT_IMAGERY: BigFlagUtils.getBrandedFlag(3), SEXUALLY_EXPLICIT_TEXT: BigFlagUtils.getBrandedFlag(4), NUDITY: BigFlagUtils.getBrandedFlag(5), DATING: BigFlagUtils.getBrandedFlag(6), REGULATED_GOODS_USAGE: BigFlagUtils.getBrandedFlag(7), REGULATED_GOODS_DEPICTION: BigFlagUtils.getBrandedFlag(8), VIOLENCE_DOMESTIC_SIMULATED: BigFlagUtils.getBrandedFlag(9), VIOLENCE_ANIMALS: BigFlagUtils.getBrandedFlag(10), VIOLENCE_FANTASY: BigFlagUtils.getBrandedFlag(11), VIOLENCE_GRAPHIC: BigFlagUtils.getBrandedFlag(12), SELF_HARM_DEPICTION: BigFlagUtils.getBrandedFlag(13), SELF_HARM_REFERENCE: BigFlagUtils.getBrandedFlag(14), GAMBLING_REAL: BigFlagUtils.getBrandedFlag(15), GAMBLING_SIMULATED: BigFlagUtils.getBrandedFlag(16), PROFANITY_MILD: BigFlagUtils.getBrandedFlag(17), PROFANITY_SEVERE: BigFlagUtils.getBrandedFlag(18), SLURS: BigFlagUtils.getBrandedFlag(19), DANGEROUS_PHYSICALLY_HARMFUL: BigFlagUtils.getBrandedFlag(20), DANGEROUS_MENTALLY_HARMFUL: BigFlagUtils.getBrandedFlag(21), TRAGEDY_SIMULATED_HISTORICAL: BigFlagUtils.getBrandedFlag(22), TRAGEDY_SIMULATED_NATURAL_DISASTER: BigFlagUtils.getBrandedFlag(23), TRAGEDY_REAL_MILITARY_CONFLICT: BigFlagUtils.getBrandedFlag(24) };
BigFlagUtils = BigFlagUtils_mod;
const freezeResult = freeze(obj);
const freeze2 = Object.freeze;
const obj2 = { RESTRICTED_TO_ADULT: BigFlagUtils.combine(freezeResult.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED, freezeResult.SEXUALLY_EXPLICIT_IMAGERY, freezeResult.SEXUALLY_EXPLICIT_TEXT) };
BigFlagUtils = BigFlagUtils_mod;
const freeze2Result = freeze2(obj2);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/DiscordContentClassificationFlags.tsx");

export const DiscordContentClassificationFlags = freezeResult;
export const DiscordContentClassificationFlagMasks = freeze2Result;