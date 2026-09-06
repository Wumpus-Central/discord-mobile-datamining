// === Module 1977: guildIncidentsSerialization ===

// Module 1977 (guildIncidentsSerialization)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_antiraid/guildIncidentsSerialization.tsx");

export const fromServerGuildIncidentsData = function fromServerGuildIncidentsData(incidents_data) {
  if (null != incidents_data) {
    const _Object = Object;
    if (0 !== Object.keys(incidents_data).length) {
      let raid_detected_at = incidents_data.raid_detected_at;
      if (raid_detected_at == null) {
        raid_detected_at = null;
      }
      const obj = { raidDetectedAt: raid_detected_at, dmSpamDetectedAt: null, dmsDisabledUntil: null, invitesDisabledUntil: null, lockdownDurationHours: null };
      let dm_spam_detected_at = incidents_data.dm_spam_detected_at;
      if (dm_spam_detected_at == null) {
        dm_spam_detected_at = null;
      }
      obj.dmSpamDetectedAt = dm_spam_detected_at;
      let dms_disabled_until = incidents_data.dms_disabled_until;
      if (dms_disabled_until == null) {
        dms_disabled_until = null;
      }
      obj.dmsDisabledUntil = dms_disabled_until;
      let prop = incidents_data.invites_disabled_until;
      if (prop == null) {
        prop = null;
      }
      obj.invitesDisabledUntil = prop;
      let prop1 = incidents_data.lockdown_duration_hours;
      if (prop1 == null) {
        prop1 = null;
      }
      obj.lockdownDurationHours = prop1;
      let tmp7 = null;
      if (!tmp6) {
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  return null;
};
export const toServerGuildIncidentsData = function toServerGuildIncidentsData(incidentsData) {
  let tmp = null;
  if (null != incidentsData) {
    tmp = null;
    if (!tmp2) {
      let raidDetectedAt = incidentsData.raidDetectedAt;
      if (raidDetectedAt == null) {
        raidDetectedAt = null;
      }
      const obj = { raid_detected_at: raidDetectedAt, dm_spam_detected_at: null, dms_disabled_until: null, invites_disabled_until: null, lockdown_duration_hours: null };
      let dmSpamDetectedAt = incidentsData.dmSpamDetectedAt;
      if (dmSpamDetectedAt == null) {
        dmSpamDetectedAt = null;
      }
      obj.dm_spam_detected_at = dmSpamDetectedAt;
      let dmsDisabledUntil = incidentsData.dmsDisabledUntil;
      if (dmsDisabledUntil == null) {
        dmsDisabledUntil = null;
      }
      obj.dms_disabled_until = dmsDisabledUntil;
      let invitesDisabledUntil = incidentsData.invitesDisabledUntil;
      if (invitesDisabledUntil == null) {
        invitesDisabledUntil = null;
      }
      obj.invites_disabled_until = invitesDisabledUntil;
      let prop = incidentsData.lockdownDurationHours;
      if (prop == null) {
        prop = null;
      }
      obj.lockdown_duration_hours = prop;
      tmp = obj;
    }
    tmp2 = null == incidentsData.raidDetectedAt && null == incidentsData.dmSpamDetectedAt && null == incidentsData.dmsDisabledUntil && null == incidentsData.invitesDisabledUntil && null == incidentsData.lockdownDurationHours;
  }
  return tmp;
};