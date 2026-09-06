// === Module 8086: ApplicationCommandUserAppUtils ===

// Module 8086 (ApplicationCommandUserAppUtils)
import EphemeralMessageReason from "EphemeralMessageReason" /* 8087 */;
import size from "module_2" /* 2 */;

const util = tmp(1114);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandUserAppUtils.tsx");

export const getEphemeralReasonMessage = function getEphemeralReasonMessage(ephemerality_reason1) {
  if (EphemeralMessageReason.EphemeralMessageReason.FEATURE_LIMITED === ephemerality_reason1) {
    const intl19 = util.intl;
    return intl19.string(util.t.WCvmrR);
  } else if (EphemeralMessageReason.EphemeralMessageReason.GUILD_FEATURE_LIMITED === ephemerality_reason1) {
    const intl18 = util.intl;
    return intl18.string(util.t["0QUDYf"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.USER_FEATURE_LIMITED === ephemerality_reason1) {
    const intl17 = util.intl;
    return intl17.string(util.t.gs1sxd);
  } else if (EphemeralMessageReason.EphemeralMessageReason.SLOWMODE === ephemerality_reason1) {
    const intl16 = util.intl;
    return intl16.string(util.t["9UAXh4"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.RATE_LIMIT === ephemerality_reason1) {
    const intl15 = util.intl;
    return intl15.string(util.t.zBB9xD);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_MESSAGE_USER === ephemerality_reason1) {
    const intl14 = util.intl;
    return intl14.string(util.t.w7sHnP);
  } else if (EphemeralMessageReason.EphemeralMessageReason.USER_VERIFICATION_LEVEL === ephemerality_reason1) {
    const intl13 = util.intl;
    return intl13.string(util.t.SLAkFX);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_UNARCHIVE_THREAD === ephemerality_reason1) {
    const intl12 = util.intl;
    return intl12.string(util.t.AIqS3n);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_JOIN_THREAD === ephemerality_reason1) {
    const intl11 = util.intl;
    return intl11.string(util.t.BqKxlT);
  } else if (EphemeralMessageReason.EphemeralMessageReason.MISSING_PERMISSIONS === ephemerality_reason1) {
    const intl10 = util.intl;
    return intl10.string(util.t.LLF2DJ);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_ATTACHMENTS === ephemerality_reason1) {
    const intl9 = util.intl;
    return intl9.string(util.t.Htl7W1);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_EMBEDS === ephemerality_reason1) {
    const intl8 = util.intl;
    return intl8.string(util.t.vGgPMH);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_STICKERS === ephemerality_reason1) {
    const intl7 = util.intl;
    return intl7.string(util.t.byrr7l);
  } else if (EphemeralMessageReason.EphemeralMessageReason.AUTOMOD_BLOCKED === ephemerality_reason1) {
    const intl6 = util.intl;
    return intl6.string(util.t["24PAJ+"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.HARMFUL_LINK === ephemerality_reason1) {
    const intl5 = util.intl;
    return intl5.string(util.t.zeqgmP);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_USE_COMMAND === ephemerality_reason1) {
    const intl4 = util.intl;
    return intl4.string(util.t.kzMhhk);
  } else if (EphemeralMessageReason.EphemeralMessageReason.BETA_GUILD_SIZE === ephemerality_reason1) {
    const intl3 = util.intl;
    return intl3.string(util.t.Af3rGY);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_USE_EXTERNAL_APPS === ephemerality_reason1) {
    const intl2 = util.intl;
    return intl2.string(util.t.Ji4l7E);
  } else {
    const intl = util.intl;
    return intl.string(util.t["v/OAcs"]);
  }
};