// discord_app/modules/application_commands/ApplicationCommandUserAppUtils.tsx
import intl20 from "../../intl/index.native.tsx";
import EphemeralMessageReason from "../../../discord_common/js/shared/shared-constants/EphemeralMessageReason.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandUserAppUtils.tsx");

export const getEphemeralReasonMessage = function getEphemeralReasonMessage(ephemerality_reason1) {
  if (EphemeralMessageReason.EphemeralMessageReason.FEATURE_LIMITED === ephemerality_reason1) {
    const intl19 = intl20.intl;
    return intl19.string(intl20.t.WCvmrR);
  } else if (EphemeralMessageReason.EphemeralMessageReason.GUILD_FEATURE_LIMITED === ephemerality_reason1) {
    const intl18 = intl20.intl;
    return intl18.string(intl20.t["0QUDYf"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.USER_FEATURE_LIMITED === ephemerality_reason1) {
    const intl17 = intl20.intl;
    return intl17.string(intl20.t.gs1sxd);
  } else if (EphemeralMessageReason.EphemeralMessageReason.SLOWMODE === ephemerality_reason1) {
    const intl16 = intl20.intl;
    return intl16.string(intl20.t["9UAXh4"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.RATE_LIMIT === ephemerality_reason1) {
    const intl15 = intl20.intl;
    return intl15.string(intl20.t.zBB9xD);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_MESSAGE_USER === ephemerality_reason1) {
    const intl14 = intl20.intl;
    return intl14.string(intl20.t.w7sHnP);
  } else if (EphemeralMessageReason.EphemeralMessageReason.USER_VERIFICATION_LEVEL === ephemerality_reason1) {
    const intl13 = intl20.intl;
    return intl13.string(intl20.t.SLAkFX);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_UNARCHIVE_THREAD === ephemerality_reason1) {
    const intl12 = intl20.intl;
    return intl12.string(intl20.t.AIqS3n);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_JOIN_THREAD === ephemerality_reason1) {
    const intl11 = intl20.intl;
    return intl11.string(intl20.t.BqKxlT);
  } else if (EphemeralMessageReason.EphemeralMessageReason.MISSING_PERMISSIONS === ephemerality_reason1) {
    const intl10 = intl20.intl;
    return intl10.string(intl20.t.LLF2DJ);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_ATTACHMENTS === ephemerality_reason1) {
    const intl9 = intl20.intl;
    return intl9.string(intl20.t.Htl7W1);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_EMBEDS === ephemerality_reason1) {
    const intl8 = intl20.intl;
    return intl8.string(intl20.t.vGgPMH);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_SEND_STICKERS === ephemerality_reason1) {
    const intl7 = intl20.intl;
    return intl7.string(intl20.t.byrr7l);
  } else if (EphemeralMessageReason.EphemeralMessageReason.AUTOMOD_BLOCKED === ephemerality_reason1) {
    const intl6 = intl20.intl;
    return intl6.string(intl20.t["24PAJ+"]);
  } else if (EphemeralMessageReason.EphemeralMessageReason.HARMFUL_LINK === ephemerality_reason1) {
    const intl5 = intl20.intl;
    return intl5.string(intl20.t.zeqgmP);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_USE_COMMAND === ephemerality_reason1) {
    const intl4 = intl20.intl;
    return intl4.string(intl20.t.kzMhhk);
  } else if (EphemeralMessageReason.EphemeralMessageReason.BETA_GUILD_SIZE === ephemerality_reason1) {
    const intl3 = intl20.intl;
    return intl3.string(intl20.t.Af3rGY);
  } else if (EphemeralMessageReason.EphemeralMessageReason.CANNOT_USE_EXTERNAL_APPS === ephemerality_reason1) {
    const intl2 = intl20.intl;
    return intl2.string(intl20.t.Ji4l7E);
  } else {
    const intl = intl20.intl;
    return intl.string(intl20.t["v/OAcs"]);
  }
};
