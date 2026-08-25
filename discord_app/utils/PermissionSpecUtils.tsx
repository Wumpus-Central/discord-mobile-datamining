// === Module 16176: getPermissionOptions ===

// Module 16176 (getPermissionOptions)
import set2 from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import combinedDefault from "combined" /* 1995 */;
import experimentDefault from "experiment" /* 5995 */;
import RowType from "RowType" /* 7926 */;
import isGuildEligibleForStageChannels from "isGuildEligibleForStageChannels" /* 16177 */;
import experiment from "experiment" /* 16178 */;
import getGuildPermissionSpecAll from "getGuildPermissionSpec" /* 16180 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;

function getPermissionOptions(id) {
  let obj = isGuildEligibleForStageChannels;
  const result = obj.isGuildEligibleForStageChannels(id);
  const guild = store.getGuild(id);
  let result1 = null != guild;
  if (result1) {
    let tmpResult = tmp(5978);
    result1 = tmpResult.isCreatorMonetizationEnabledGuild(guild);
  }
  tmpResult = tmp(4855);
  const soundmojiRenderingExperiment = tmpResult.getSoundmojiRenderingExperiment({ location: "getPermissionOptions" });
  obj = { guildId: id, location: "getPermissionOptions" };
  obj = { PRIORITY_SPEAKER_DESCRIPTION: null, SOUNDBOARD_DESCRIPTION: null, showStageChannelPermissions: null, showExperimental: true, showMembershipManualApprovalPermissions: true, showCreatorMonetizationAnalyticsPermission: null, inSoundmojiExperiment: null, enableHangoutWindow: null };
  const intl = tmp(1236).intl;
  obj1 = { keybind: null };
  const intl2 = tmp(1236).intl;
  obj1[0] = intl2.string(getSystemLocale.t.DkSwJ2);
  obj[0] = intl.format(getSystemLocale.t.ZuzwPz, obj1);
  const intl3 = tmp(1236).intl;
  const obj2 = { helpCenterArticle: null };
  const tmpResult1 = experiment;
  obj2[0] = combinedDefault.getArticleURL(constants.SOUNDBOARD);
  obj[1] = intl3.format(getSystemLocale.t.fVE8y8, obj2);
  obj[2] = result;
  obj[5] = result1;
  obj[6] = soundmojiRenderingExperiment;
  obj[7] = tmpResult1.getHangoutWindowExperiment(obj).enableHangoutWindow;
  return obj;
}
let closure_4 = createChannelRecord.VOICE_THREAD_PARENT_CHANNEL_TYPES;
({ HelpdeskArticles: closure_6, ChannelTypes: error, GuildFeatures: closure_8, Permissions: c9, GuildSettingsSections: c10 } = ME);
let closure_11 = RowType.getChannelPermissionSpecMap;
let result = set2.fileFinishedImporting("utils/PermissionSpecUtils.tsx");

export default {
  generateChannelPermissionSpec(guild_id, closure_5, arg2) {
    let set = guild_id;
    const tmp = getPermissionOptions(guild_id);
    let obj = {};
    const merged = Object.assign(arg3);
    obj.enableHangoutWindow = tmp.enableHangoutWindow;
    const tmp3 = callback(closure_5, arg2, obj);
    const tmp4 = set;
    let channelEventsSection = dependencyMap;
    const VoiceInThreadsExperiment = set(5996).VoiceInThreadsExperiment;
    obj = { guildId: guild_id, location: "3ad37d_1" };
    let enabled = VoiceInThreadsExperiment.getCurrentConfig(obj).enabled;
    if (enabled) {
      enabled = set.has(closure_5.type);
    }
    let tmp4Result = tmp4(5242);
    tmp4Result = tmp4(16179);
    let result = tmp4Result.canCurrentUserManageMessageFilters(guild_id);
    const isMediaChannelResult = closure_5.isMediaChannel();
    importDefault = isMediaChannelResult;
    set = new Set();
    const guild = store.getGuild(guild_id);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.VERIFIED);
    }
    if (hasItem) {
      let obj5 = experimentDefault;
      obj = { guildId: null, location: "generateChannelPermissionSpec" };
      obj[0] = guild_id;
      hasItem = obj5.getCurrentConfig(obj).enabled;
    }
    if (!hasItem) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
      const str = constants4.MANAGE_OFFICIAL_MESSAGES;
    }
    const inSoundmojiExperiment = tmp.inSoundmojiExperiment;
    const type = closure_5.type;
    if (constants2.GUILD_CATEGORY === type) {
      let obj33 = importAll;
      const intl23 = tmp4(1236).intl;
      const items = [getGuildPermissionSpecAll.generateChannelGeneralSection(tmp3, intl23.string(tmp4(1236).t["AkPxc+"])), , , , , ];
      const obj34 = getGuildPermissionSpecAll;
      const intl24 = tmp4(1236).intl;
      items[1] = getGuildPermissionSpecAll.generateChannelMembershipSection(tmp3, intl24.string(tmp4(1236).t.Ny49TN));
      const obj35 = getGuildPermissionSpecAll;
      const intl25 = tmp4(1236).intl;
      obj1 = { showPrivateThreads: true, showCreateThreads: true, inSoundmojiExperiment: null };
      obj1[2] = inSoundmojiExperiment;
      items[2] = getGuildPermissionSpecAll.generateChannelTextSection(tmp3, intl25.string(tmp4(1236).t.cKobO5), obj1);
      const obj36 = getGuildPermissionSpecAll;
      const intl26 = tmp4(1236).intl;
      items[3] = getGuildPermissionSpecAll.generateChannelVoiceSection(tmp3, intl26.string(tmp4(1236).t["46Ra1b"]));
      const obj38 = getGuildPermissionSpecAll;
      const intl27 = tmp4(1236).intl;
      items[4] = getGuildPermissionSpecAll.generateChannelAppsSection(tmp3, intl27.string(tmp4(1236).t["rrh/W6"]));
      if (tmp.showStageChannelPermissions) {
        const intl28 = tmp4(1236).intl;
        const items1 = [obj33(16180).generateChannelStageSection(tmp3, intl28.string(tmp4(1236).t.yniauk))];
        let items2 = items1;
        const obj33Result = obj33(16180);
      } else {
        items2 = [];
      }
      let arraySpreadResult = HermesBuiltin.arraySpread(items2, 5);
      obj33 = obj33(16180);
      const intl29 = tmp4(1236).intl;
      channelEventsSection = obj33.generateChannelEventsSection(tmp3, intl29.string(tmp4(1236).t.b8lplT));
      items[arraySpreadResult] = channelEventsSection;
      const obj39 = getGuildPermissionSpecAll;
    } else {
      if (tmp16.GUILD_VOICE === type) {
        const intl16 = tmp4(1236).intl;
        const items3 = [getGuildPermissionSpecAll.generateChannelGeneralSection(tmp3, intl16.string(tmp4(1236).t.ouHggI), { showManageWebhooks: true }), , , , , ];
        const obj25 = getGuildPermissionSpecAll;
        const intl17 = tmp4(1236).intl;
        items3[1] = getGuildPermissionSpecAll.generateChannelMembershipSection(tmp3, intl17.string(tmp4(1236).t.Ny49TN));
        const obj26 = getGuildPermissionSpecAll;
        const intl18 = tmp4(1236).intl;
        items3[2] = getGuildPermissionSpecAll.generateChannelVoiceSection(tmp3, intl18.string(tmp4(1236).t["46Ra1b"]));
        const obj27 = getGuildPermissionSpecAll;
        const intl19 = tmp4(1236).intl;
        let formatResult;
        const obj28 = getGuildPermissionSpecAll;
        if (result) {
          const intl20 = tmp4(1236).intl;
          const obj2 = { setUpAutomod: null };
          obj2[0] = function setUpAutomod() {
            isMediaChannelResult(closure_1_3[15]).open(set, closure_1_10.GUILD_AUTOMOD);
          };
          formatResult = intl20.format(tmp4(1236).t["4Z9Fbb"], obj2);
        }
        const obj3 = { sectionDescription: null, inSoundmojiExperiment: null };
        obj3[0] = formatResult;
        obj3[1] = inSoundmojiExperiment;
        items3[3] = obj28.generateChannelVoiceChatSection(tmp3, intl19.string(tmp4(1236).t.iqlsnD), obj3);
        let tmp30Result = tmp30(16180);
        const intl21 = tmp4(1236).intl;
        items3[4] = tmp30Result.generateChannelEventsSection(tmp3, intl21.string(tmp4(1236).t.b8lplT));
        tmp30Result = tmp30(16180);
        const intl22 = tmp4(1236).intl;
        items3[5] = tmp30Result.generateChannelAppsSection(tmp3, intl22.string(tmp4(1236).t["rrh/W6"]));
        let items5 = items3;
        const stringResult = intl19.string(tmp4(1236).t.iqlsnD);
      } else if (tmp16.GUILD_STAGE_VOICE === type) {
        const intl8 = tmp4(1236).intl;
        const items4 = [getGuildPermissionSpecAll.generateChannelGeneralSection(tmp3, intl8.string(tmp4(1236).t.ouHggI), { showManageWebhooks: false }), , , , , , ];
        const obj16 = getGuildPermissionSpecAll;
        const tmp27 = importAll;
        const intl9 = tmp4(1236).intl;
        items4[1] = getGuildPermissionSpecAll.generateChannelMembershipSection(tmp3, intl9.string(tmp4(1236).t.Ny49TN));
        const obj17 = getGuildPermissionSpecAll;
        const intl10 = tmp4(1236).intl;
        items4[2] = getGuildPermissionSpecAll.generateChannelStageVoiceSection(tmp3, intl10.string(tmp4(1236).t["46Ra1b"]), isStageVideoEnabledResult);
        const obj18 = getGuildPermissionSpecAll;
        const intl11 = tmp4(1236).intl;
        items4[3] = getGuildPermissionSpecAll.generateChannelStageSection(tmp3, intl11.string(tmp4(1236).t.yniauk));
        const obj19 = getGuildPermissionSpecAll;
        const intl12 = tmp4(1236).intl;
        items4[4] = getGuildPermissionSpecAll.generateChannelEventsSection(tmp3, intl12.string(tmp4(1236).t.b8lplT));
        const obj20 = getGuildPermissionSpecAll;
        const intl13 = tmp4(1236).intl;
        let formatResult1;
        const obj21 = getGuildPermissionSpecAll;
        if (result) {
          const intl14 = tmp4(1236).intl;
          const obj4 = { setUpAutomod: null };
          obj4[0] = function setUpAutomod() {
            isMediaChannelResult(closure_1_3[15]).open(set, closure_1_10.GUILD_AUTOMOD);
          };
          formatResult1 = intl14.format(tmp4(1236).t["4Z9Fbb"], obj4);
        }
        obj5 = { sectionDescription: null, inSoundmojiExperiment: null };
        obj5[0] = formatResult1;
        obj5[1] = inSoundmojiExperiment;
        items4[5] = obj21.generateChannelVoiceChatSection(tmp3, intl13.string(tmp4(1236).t.iqlsnD), obj5);
        const stringResult1 = intl13.string(tmp4(1236).t.iqlsnD);
        const intl15 = tmp4(1236).intl;
        items4[6] = tmp27(16180).generateChannelAppsSection(tmp3, intl15.string(tmp4(1236).t["rrh/W6"]), { showActivities: false });
        items5 = items4;
        const tmp27Result = tmp27(16180);
      } else {
        if (tmp16.GUILD_FORUM !== type) {
          if (tmp16.GUILD_MEDIA !== type) {
            const intl30 = tmp4(1236).intl;
            items5 = [getGuildPermissionSpecAll.generateChannelGeneralSection(tmp3, intl30.string(tmp4(1236).t.ouHggI)), , , ];
            const obj41 = getGuildPermissionSpecAll;
            const tmp38 = importAll;
            const intl31 = tmp4(1236).intl;
            items5[1] = getGuildPermissionSpecAll.generateChannelMembershipSection(tmp3, intl31.string(tmp4(1236).t.Ny49TN));
            const obj42 = getGuildPermissionSpecAll;
            const intl32 = tmp4(1236).intl;
            const obj6 = { showPrivateThreads: null, showCreateThreads: true, inSoundmojiExperiment: null };
            obj6[0] = closure_5.type !== tmp16.GUILD_ANNOUNCEMENT;
            obj6[2] = inSoundmojiExperiment;
            items5[2] = getGuildPermissionSpecAll.generateChannelTextSection(tmp3, intl32.string(tmp4(1236).t.cKobO5), obj6);
            const obj43 = getGuildPermissionSpecAll;
            const intl33 = tmp4(1236).intl;
            items5[3] = getGuildPermissionSpecAll.generateChannelAppsSection(tmp3, intl33.string(tmp4(1236).t["rrh/W6"]));
            if (enabled) {
              const intl = tmp4(1236).intl;
              const items6 = [tmp38(16180).generateChannelVoiceSection(tmp3, intl.string(tmp4(1236).t["46Ra1b"]))];
              let items7 = items6;
              const tmp38Result = tmp38(16180);
            } else {
              items7 = [];
            }
            arraySpreadResult = HermesBuiltin.arraySpread(items7, 4);
            const obj45 = getGuildPermissionSpecAll;
          }
        }
        const intl2 = tmp4(1236).intl;
        const string = intl2.string;
        const t = tmp4(1236).t;
        if (isMediaChannelResult) {
          let stringResult2 = string(t.aSjPgw);
        } else {
          stringResult2 = string(t.TS7Cnb);
        }
        const t2 = tmp4(1236).t;
        let obj8 = getGuildPermissionSpecAll;
        const intl3 = tmp4(1236).intl;
        const items8 = [obj8.generateChannelGeneralSection(tmp3, intl3.string(tmp4(1236).t.ouHggI)), , , ];
        const intl4 = tmp4(1236).intl;
        items8[1] = getGuildPermissionSpecAll.generateChannelMembershipSection(tmp3, intl4.string(tmp4(1236).t.Ny49TN));
        const obj10 = getGuildPermissionSpecAll;
        const tmp21 = isMediaChannelResult ? t2.YjJTtH : t2["1MTnqY"];
        let formatResult2;
        if (result) {
          const intl5 = tmp4(1236).intl;
          const obj7 = { setUpAutomod: null };
          obj7[0] = function setUpAutomod() {
            if (!closure_1) {
              const result = set(closure_1_3[16]).trackForumEnableAutomodClicked();
              const obj = set(closure_1_3[16]);
            }
            isMediaChannelResult(closure_1_3[15]).open(set, closure_1_10.GUILD_AUTOMOD);
          };
          formatResult2 = intl5.format(tmp21, obj7);
        }
        obj8 = { showPrivateThreads: false, showCreateThreads: false, sectionDescription: null, inSoundmojiExperiment: null };
        obj8[2] = formatResult2;
        obj8[3] = inSoundmojiExperiment;
        items8[2] = getGuildPermissionSpecAll.generateChannelTextSection(tmp3, stringResult2, obj8);
        let tmp22Result = tmp22(16180);
        const intl6 = tmp4(1236).intl;
        items8[3] = tmp22Result.generateChannelAppsSection(tmp3, intl6.string(tmp4(1236).t["rrh/W6"]));
        if (enabled) {
          tmp22Result = tmp22(16180);
          const intl7 = tmp4(1236).intl;
          const items9 = [tmp22Result.generateChannelVoiceSection(tmp3, intl7.string(tmp4(1236).t["46Ra1b"]))];
          let items10 = items9;
        } else {
          items10 = [];
        }
        HermesBuiltin.arraySpread(items10, 4);
        items5 = items8;
        const obj11 = getGuildPermissionSpecAll;
      }
      let mapped = items5;
      if (0 !== set.size) {
        mapped = items5.map((permissions) => {
          const obj = {};
          const merged = Object.assign(permissions);
          permissions = permissions.permissions;
          obj.permissions = permissions.filter((flag) => !set.has(flag.flag.toString()));
          return obj;
        });
      }
      return mapped;
    }
  },
  generateGuildPermissionSpec(features) {
    const set = new Set();
    features = features.features;
    if (!features.has(constants3.COMMUNITY)) {
      set.add(constants4.VIEW_GUILD_ANALYTICS.toString());
      const str = constants4.VIEW_GUILD_ANALYTICS;
    }
    const features2 = features.features;
    let enabled = features2.has(constants3.VERIFIED);
    if (enabled) {
      let obj = { guildId: null, location: "generateGuildPermissionSpec" };
      obj[0] = features.id;
      enabled = experimentDefault.getCurrentConfig(obj).enabled;
      const obj2 = experimentDefault;
    }
    if (!enabled) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
      const str2 = constants4.MANAGE_OFFICIAL_MESSAGES;
    }
    const guildPermissionSpec = getGuildPermissionSpecAll.generateGuildPermissionSpec(getPermissionOptions(features.id));
    let mapped = guildPermissionSpec;
    if (0 !== set.size) {
      mapped = guildPermissionSpec.map((permissions) => {
        const obj = {};
        const merged = Object.assign(permissions);
        permissions = permissions.permissions;
        obj.permissions = permissions.filter((flag) => !set.has(flag.flag.toString()));
        return obj;
      });
    }
    return mapped;
  },
  getGuildPermissionSpecMap(id) {
    return getGuildPermissionSpecAll.getGuildPermissionSpec(getPermissionOptions(id.id));
  }
};