// discord_app/modules/guild_antiraid/guildIncidentsSerialization.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_antiraid/guildIncidentsSerialization.tsx");

export const fromServerGuildIncidentsData = function fromServerGuildIncidentsData(incidents_data) {
  let dm_spam_detected_at;
  let dms_disabled_until;
  let prop;
  let prop1;
  if (null != incidents_data) {
    const _Object = Object;
    if (0 !== Object.keys(incidents_data).length) {
      let raid_detected_at = incidents_data.raid_detected_at;
      if (raid_detected_at == null) {
        raid_detected_at = null;
      }
      const obj = {
        raidDetectedAt: raid_detected_at,
        dmSpamDetectedAt: dm_spam_detected_at,
        dmsDisabledUntil: dms_disabled_until,
        invitesDisabledUntil: prop,
        lockdownDurationHours: prop1,
      };
      dm_spam_detected_at = incidents_data.dm_spam_detected_at;
      if (dm_spam_detected_at == null) {
        dm_spam_detected_at = null;
      }
      dms_disabled_until = incidents_data.dms_disabled_until;
      if (dms_disabled_until == null) {
        dms_disabled_until = null;
      }
      prop = incidents_data.invites_disabled_until;
      if (prop == null) {
        prop = null;
      }
      prop1 = incidents_data.lockdown_duration_hours;
      if (prop1 == null) {
        prop1 = null;
      }
      let tmp7 = null;
      const tmp6 =
        null == obj.raidDetectedAt &&
        null == obj.dmSpamDetectedAt &&
        null == obj.dmsDisabledUntil &&
        null == obj.invitesDisabledUntil &&
        null == obj.lockdownDurationHours;
      if (!tmp6) {
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  return null;
};
export const toServerGuildIncidentsData = function toServerGuildIncidentsData(incidentsData) {
  let dmSpamDetectedAt;
  let dmsDisabledUntil;
  let invitesDisabledUntil;
  let prop;
  let tmp = null;
  if (null != incidentsData) {
    tmp = null;
    const tmp2 =
      null == incidentsData.raidDetectedAt &&
      null == incidentsData.dmSpamDetectedAt &&
      null == incidentsData.dmsDisabledUntil &&
      null == incidentsData.invitesDisabledUntil &&
      null == incidentsData.lockdownDurationHours;
    if (!tmp2) {
      let raidDetectedAt = incidentsData.raidDetectedAt;
      if (raidDetectedAt == null) {
        raidDetectedAt = null;
      }
      const obj = {
        raid_detected_at: raidDetectedAt,
        dm_spam_detected_at: dmSpamDetectedAt,
        dms_disabled_until: dmsDisabledUntil,
        invites_disabled_until: invitesDisabledUntil,
        lockdown_duration_hours: prop,
      };
      dmSpamDetectedAt = incidentsData.dmSpamDetectedAt;
      if (dmSpamDetectedAt == null) {
        dmSpamDetectedAt = null;
      }
      dmsDisabledUntil = incidentsData.dmsDisabledUntil;
      if (dmsDisabledUntil == null) {
        dmsDisabledUntil = null;
      }
      invitesDisabledUntil = incidentsData.invitesDisabledUntil;
      if (invitesDisabledUntil == null) {
        invitesDisabledUntil = null;
      }
      prop = incidentsData.lockdownDurationHours;
      if (prop == null) {
        prop = null;
      }
      tmp = obj;
    }
  }
  return tmp;
};
