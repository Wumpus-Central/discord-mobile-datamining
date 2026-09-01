// discord_app/modules/guild_antiraid/guildIncidentsSerialization.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/guild_antiraid/guildIncidentsSerialization.tsx");

export const fromServerGuildIncidentsData = function fromServerGuildIncidentsData(incidents_data) {
  if (null != incidents_data) {
    const _Object = Object;
    if (0 !== Object.keys(incidents_data).length) {
      let raid_detected_at = incidents_data.raid_detected_at;
      if (raid_detected_at == null) {
        raid_detected_at = null;
      }
      const obj = {
        raidDetectedAt: null,
        dmSpamDetectedAt: null,
        dmsDisabledUntil: null,
        invitesDisabledUntil: null,
        lockdownDurationHours: null,
      };
      obj[0] = raid_detected_at;
      let dm_spam_detected_at = incidents_data.dm_spam_detected_at;
      if (dm_spam_detected_at == null) {
        dm_spam_detected_at = null;
      }
      obj[1] = dm_spam_detected_at;
      let dms_disabled_until = incidents_data.dms_disabled_until;
      if (dms_disabled_until == null) {
        dms_disabled_until = null;
      }
      obj[2] = dms_disabled_until;
      let prop = incidents_data.invites_disabled_until;
      if (prop == null) {
        prop = null;
      }
      obj[3] = prop;
      let prop1 = incidents_data.lockdown_duration_hours;
      if (prop1 == null) {
        prop1 = null;
      }
      obj[4] = prop1;
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
      const obj = {
        raid_detected_at: null,
        dm_spam_detected_at: null,
        dms_disabled_until: null,
        invites_disabled_until: null,
        lockdown_duration_hours: null,
      };
      obj[0] = raidDetectedAt;
      let dmSpamDetectedAt = incidentsData.dmSpamDetectedAt;
      if (dmSpamDetectedAt == null) {
        dmSpamDetectedAt = null;
      }
      obj[1] = dmSpamDetectedAt;
      let dmsDisabledUntil = incidentsData.dmsDisabledUntil;
      if (dmsDisabledUntil == null) {
        dmsDisabledUntil = null;
      }
      obj[2] = dmsDisabledUntil;
      let invitesDisabledUntil = incidentsData.invitesDisabledUntil;
      if (invitesDisabledUntil == null) {
        invitesDisabledUntil = null;
      }
      obj[3] = invitesDisabledUntil;
      let prop = incidentsData.lockdownDurationHours;
      if (prop == null) {
        prop = null;
      }
      obj[4] = prop;
      tmp = obj;
    }
    tmp2 =
      null == incidentsData.raidDetectedAt &&
      null == incidentsData.dmSpamDetectedAt &&
      null == incidentsData.dmsDisabledUntil &&
      null == incidentsData.invitesDisabledUntil &&
      null == incidentsData.lockdownDurationHours;
  }
  return tmp;
};
