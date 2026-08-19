// discord_app/modules/application_commands/ApplicationCommandUserAppUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import EphemeralMessageReason from "../../../discord_common/js/shared/shared-constants/EphemeralMessageReason.tsx";

const result = obj132.fileFinishedImporting("modules/application_commands/ApplicationCommandUserAppUtils.tsx");

export const getEphemeralReasonMessage = function getEphemeralReasonMessage(ephemerality_reason1) {
  if (EphemeralMessageReason.EphemeralMessageReason.FEATURE_LIMITED === ephemerality_reason1) {
    const intl19 = getSystemLocale.intl;
    return intl19.string(getSystemLocale.t.WCvmrR);
  } else if (EphemeralMessageReason.EphemeralMessageReason.GUILD_FEATURE_LIMITED === ephemerality_reason1) {
    const intl18 = getSystemLocale.intl;
    return intl18.string(getSystemLocale.t["0QUDYf"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.USER_FEATURE_LIMITED === ephemerality_reason1) {
    const intl17 = getSystemLocale.intl;
    return intl17.string(getSystemLocale.t.gs1sxd);
  } else if (EphemeralMessageReason.EphemeralMessageReason.SLOWMODE === ephemerality_reason1) {
    const intl16 = getSystemLocale.intl;
    return intl16.string(getSystemLocale.t["9UAXh4"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.RATE_LIMIT === ephemerality_reason1) {
    const intl15 = getSystemLocale.intl;
    return intl15.string(getSystemLocale.t.zBB9xD);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_MESSAGE_USER === ephemerality_reason1) {
    const intl14 = getSystemLocale.intl;
    return intl14.string(getSystemLocale.t.w7sHnP);
  } else if (EphemeralMessageReason.EphemeralMessageReason.USER_VERIFICATION_LEVEL === ephemerality_reason1) {
    const intl13 = getSystemLocale.intl;
    return intl13.string(getSystemLocale.t.SLAkFX);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_UNARCHIVE_THREAD === ephemerality_reason1) {
    const intl12 = getSystemLocale.intl;
    return intl12.string(getSystemLocale.t.AIqS3n);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_JOIN_THREAD === ephemerality_reason1) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.BqKxlT);
  } else if (EphemeralMessageReason.EphemeralMessageReason.MISSING_PERMISSIONS === ephemerality_reason1) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.LLF2DJ);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_ATTACHMENTS === ephemerality_reason1) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.Htl7W1);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_EMBEDS === ephemerality_reason1) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.vGgPMH);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_STICKERS === ephemerality_reason1) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.byrr7l);
  } else if (EphemeralMessageReason.EphemeralMessageReason.AUTOMOD_BLOCKED === ephemerality_reason1) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t["24PAJ+"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.HARMFUL_LINK === ephemerality_reason1) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.zeqgmP);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_USE_COMMAND === ephemerality_reason1) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.kzMhhk);
  } else if (EphemeralMessageReason.EphemeralMessageReason.BETA_GUILD_SIZE === ephemerality_reason1) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.Af3rGY);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_USE_EXTERNAL_APPS === ephemerality_reason1) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.Ji4l7E);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["v/OAcs"]);
  }
};