// discord_app/utils/PermissionSpecUtils.tsx
import { VOICE_THREAD_PARENT_CHANNEL_TYPES as closure_4 } from "createChannelRecord";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";
import { getChannelPermissionSpecMap as closure_11 } from "RowType";

let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
function getPermissionOptions(id) {
  let obj = require(15680) /* isGuildEligibleForStageChannels */;
  const result = obj.isGuildEligibleForStageChannels(id);
  const guild = store.getGuild(id);
  let result1 = null != guild;
  if (result1) {
    let tmpResult = tmp(7780);
    result1 = tmpResult.isCreatorMonetizationEnabledGuild(guild);
  }
  tmpResult = tmp(4643);
  const soundmojiRenderingExperiment = tmpResult.getSoundmojiRenderingExperiment({ location: "getPermissionOptions" });
  obj = { guildId: id, location: "getPermissionOptions" };
  obj = { PRIORITY_SPEAKER_DESCRIPTION: null, SOUNDBOARD_DESCRIPTION: null, showStageChannelPermissions: null, showExperimental: true, showMembershipManualApprovalPermissions: true, showCreatorMonetizationAnalyticsPermission: null, inSoundmojiExperiment: null, enableHangoutWindow: null };
  const intl = tmp(1236).intl;
  const obj1 = { keybind: null };
  const intl2 = tmp(1236).intl;
  obj1[0] = intl2.string(require(1236) /* getSystemLocale */.t.DkSwJ2);
  obj[0] = intl.format(require(1236) /* getSystemLocale */.t.ZuzwPz, obj1);
  const intl3 = tmp(1236).intl;
  const obj2 = { helpCenterArticle: null };
  const tmpResult1 = require(15681) /* experiment */;
  obj2[0] = importDefault(1945).getArticleURL(constants.SOUNDBOARD);
  obj[1] = intl3.format(require(1236) /* getSystemLocale */.t.fVE8y8, obj2);
  obj[2] = result;
  obj[5] = result1;
  obj[6] = soundmojiRenderingExperiment;
  obj[7] = tmpResult1.getHangoutWindowExperiment(obj).enableHangoutWindow;
  return obj;
}
({ HelpdeskArticles: closure_6, ChannelTypes: error, GuildFeatures: metroImportAll, Permissions: c9, GuildSettingsSections: c10 } = ME);
let result = require("ME").fileFinishedImporting("utils/PermissionSpecUtils.tsx");

export default {
  generateChannelPermissionSpec(guild_id, stateFromStores, arg2) {
    let set = guild_id;
    const tmp = getPermissionOptions(guild_id);
    let obj = {};
    const merged = Object.assign(arg3);
    obj.enableHangoutWindow = tmp.enableHangoutWindow;
    const tmp3 = callback(stateFromStores, arg2, obj);
    const tmp4 = set;
    let channelEventsSection = dependencyMap;
    const VoiceInThreadsExperiment = set(6052).VoiceInThreadsExperiment;
    obj = { guildId: guild_id, location: "3ad37d_1" };
    let enabled = VoiceInThreadsExperiment.getCurrentConfig(obj).enabled;
    if (enabled) {
      enabled = set.has(stateFromStores.type);
    }
    let tmp4Result = tmp4(5011);
    tmp4Result = tmp4(15682);
    let result = tmp4Result.canCurrentUserManageMessageFilters(guild_id);
    const isMediaChannelResult = stateFromStores.isMediaChannel();
    const importDefault = isMediaChannelResult;
    set = new Set();
    const guild = store.getGuild(guild_id);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.VERIFIED);
    }
    if (hasItem) {
      let obj5 = importDefault(6051);
      obj = { guildId: null, location: "generateChannelPermissionSpec" };
      obj[0] = guild_id;
      hasItem = obj5.getCurrentConfig(obj).enabled;
    }
    if (!hasItem) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
      const str = constants4.MANAGE_OFFICIAL_MESSAGES;
    }
    const inSoundmojiExperiment = tmp.inSoundmojiExperiment;
    const type = stateFromStores.type;
    if (constants2.GUILD_CATEGORY === type) {
      let obj33 = importAll;
      const intl23 = tmp4(1236).intl;
      const items = [importAll(15683).generateChannelGeneralSection(tmp3, intl23.string(tmp4(1236).t["AkPxc+"])), , , , , ];
      const obj34 = importAll(15683);
      const intl24 = tmp4(1236).intl;
      items[1] = importAll(15683).generateChannelMembershipSection(tmp3, intl24.string(tmp4(1236).t.Ny49TN));
      const obj35 = importAll(15683);
      const intl25 = tmp4(1236).intl;
      const obj1 = { showPrivateThreads: true, showCreateThreads: true, inSoundmojiExperiment: null };
      obj1[2] = inSoundmojiExperiment;
      items[2] = importAll(15683).generateChannelTextSection(tmp3, intl25.string(tmp4(1236).t.cKobO5), obj1);
      const obj36 = importAll(15683);
      const intl26 = tmp4(1236).intl;
      items[3] = importAll(15683).generateChannelVoiceSection(tmp3, intl26.string(tmp4(1236).t["46Ra1b"]));
      const obj38 = importAll(15683);
      const intl27 = tmp4(1236).intl;
      items[4] = importAll(15683).generateChannelAppsSection(tmp3, intl27.string(tmp4(1236).t["rrh/W6"]));
      if (tmp.showStageChannelPermissions) {
        const intl28 = tmp4(1236).intl;
        const items1 = [obj33(15683).generateChannelStageSection(tmp3, intl28.string(tmp4(1236).t.yniauk))];
        let items2 = items1;
        const obj33Result = obj33(15683);
      } else {
        items2 = [];
      }
      let arraySpreadResult = HermesBuiltin.arraySpread(items2, 5);
      obj33 = obj33(15683);
      const intl29 = tmp4(1236).intl;
      channelEventsSection = obj33.generateChannelEventsSection(tmp3, intl29.string(tmp4(1236).t.b8lplT));
      items[arraySpreadResult] = channelEventsSection;
      const obj39 = importAll(15683);
    } else {
      if (tmp16.GUILD_VOICE === type) {
        const intl16 = tmp4(1236).intl;
        const items3 = [importAll(15683).generateChannelGeneralSection(tmp3, intl16.string(tmp4(1236).t.ouHggI), { showManageWebhooks: true }), , , , , ];
        const obj25 = importAll(15683);
        const intl17 = tmp4(1236).intl;
        items3[1] = importAll(15683).generateChannelMembershipSection(tmp3, intl17.string(tmp4(1236).t.Ny49TN));
        const obj26 = importAll(15683);
        const intl18 = tmp4(1236).intl;
        items3[2] = importAll(15683).generateChannelVoiceSection(tmp3, intl18.string(tmp4(1236).t["46Ra1b"]));
        const obj27 = importAll(15683);
        const intl19 = tmp4(1236).intl;
        let formatResult;
        const obj28 = importAll(15683);
        if (result) {
          const intl20 = tmp4(1236).intl;
          const obj2 = { setUpAutomod: null };
          obj2[0] = function setUpAutomod() {
            isMediaChannelResult(outer1_3[15]).open(set, outer1_10.GUILD_AUTOMOD);
          };
          formatResult = intl20.format(tmp4(1236).t["4Z9Fbb"], obj2);
        }
        const obj3 = { sectionDescription: null, inSoundmojiExperiment: null };
        obj3[0] = formatResult;
        obj3[1] = inSoundmojiExperiment;
        items3[3] = obj28.generateChannelVoiceChatSection(tmp3, intl19.string(tmp4(1236).t.iqlsnD), obj3);
        let tmp30Result = tmp30(15683);
        const intl21 = tmp4(1236).intl;
        items3[4] = tmp30Result.generateChannelEventsSection(tmp3, intl21.string(tmp4(1236).t.b8lplT));
        tmp30Result = tmp30(15683);
        const intl22 = tmp4(1236).intl;
        items3[5] = tmp30Result.generateChannelAppsSection(tmp3, intl22.string(tmp4(1236).t["rrh/W6"]));
        let items5 = items3;
        const stringResult = intl19.string(tmp4(1236).t.iqlsnD);
      } else if (tmp16.GUILD_STAGE_VOICE === type) {
        const intl8 = tmp4(1236).intl;
        const items4 = [importAll(15683).generateChannelGeneralSection(tmp3, intl8.string(tmp4(1236).t.ouHggI), { showManageWebhooks: false }), , , , , , ];
        const obj16 = importAll(15683);
        const tmp27 = importAll;
        const intl9 = tmp4(1236).intl;
        items4[1] = importAll(15683).generateChannelMembershipSection(tmp3, intl9.string(tmp4(1236).t.Ny49TN));
        const obj17 = importAll(15683);
        const intl10 = tmp4(1236).intl;
        items4[2] = importAll(15683).generateChannelStageVoiceSection(tmp3, intl10.string(tmp4(1236).t["46Ra1b"]), isStageVideoEnabledResult);
        const obj18 = importAll(15683);
        const intl11 = tmp4(1236).intl;
        items4[3] = importAll(15683).generateChannelStageSection(tmp3, intl11.string(tmp4(1236).t.yniauk));
        const obj19 = importAll(15683);
        const intl12 = tmp4(1236).intl;
        items4[4] = importAll(15683).generateChannelEventsSection(tmp3, intl12.string(tmp4(1236).t.b8lplT));
        const obj20 = importAll(15683);
        const intl13 = tmp4(1236).intl;
        let formatResult1;
        const obj21 = importAll(15683);
        if (result) {
          const intl14 = tmp4(1236).intl;
          const obj4 = { setUpAutomod: null };
          obj4[0] = function setUpAutomod() {
            isMediaChannelResult(outer1_3[15]).open(set, outer1_10.GUILD_AUTOMOD);
          };
          formatResult1 = intl14.format(tmp4(1236).t["4Z9Fbb"], obj4);
        }
        obj5 = { sectionDescription: null, inSoundmojiExperiment: null };
        obj5[0] = formatResult1;
        obj5[1] = inSoundmojiExperiment;
        items4[5] = obj21.generateChannelVoiceChatSection(tmp3, intl13.string(tmp4(1236).t.iqlsnD), obj5);
        const stringResult1 = intl13.string(tmp4(1236).t.iqlsnD);
        const intl15 = tmp4(1236).intl;
        items4[6] = tmp27(15683).generateChannelAppsSection(tmp3, intl15.string(tmp4(1236).t["rrh/W6"]), { showActivities: false });
        items5 = items4;
        const tmp27Result = tmp27(15683);
      } else {
        if (tmp16.GUILD_FORUM !== type) {
          if (tmp16.GUILD_MEDIA !== type) {
            const intl30 = tmp4(1236).intl;
            items5 = [importAll(15683).generateChannelGeneralSection(tmp3, intl30.string(tmp4(1236).t.ouHggI)), , , ];
            const obj41 = importAll(15683);
            const tmp38 = importAll;
            const intl31 = tmp4(1236).intl;
            items5[1] = importAll(15683).generateChannelMembershipSection(tmp3, intl31.string(tmp4(1236).t.Ny49TN));
            const obj42 = importAll(15683);
            const intl32 = tmp4(1236).intl;
            const obj6 = { showPrivateThreads: null, showCreateThreads: true, inSoundmojiExperiment: null };
            obj6[0] = stateFromStores.type !== tmp16.GUILD_ANNOUNCEMENT;
            obj6[2] = inSoundmojiExperiment;
            items5[2] = importAll(15683).generateChannelTextSection(tmp3, intl32.string(tmp4(1236).t.cKobO5), obj6);
            const obj43 = importAll(15683);
            const intl33 = tmp4(1236).intl;
            items5[3] = importAll(15683).generateChannelAppsSection(tmp3, intl33.string(tmp4(1236).t["rrh/W6"]));
            if (enabled) {
              const intl = tmp4(1236).intl;
              const items6 = [tmp38(15683).generateChannelVoiceSection(tmp3, intl.string(tmp4(1236).t["46Ra1b"]))];
              let items7 = items6;
              const tmp38Result = tmp38(15683);
            } else {
              items7 = [];
            }
            arraySpreadResult = HermesBuiltin.arraySpread(items7, 4);
            const obj45 = importAll(15683);
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
        let obj8 = importAll(15683);
        const intl3 = tmp4(1236).intl;
        const items8 = [obj8.generateChannelGeneralSection(tmp3, intl3.string(tmp4(1236).t.ouHggI)), , , ];
        const intl4 = tmp4(1236).intl;
        items8[1] = importAll(15683).generateChannelMembershipSection(tmp3, intl4.string(tmp4(1236).t.Ny49TN));
        const obj10 = importAll(15683);
        const tmp21 = isMediaChannelResult ? t2.YjJTtH : t2["1MTnqY"];
        let formatResult2;
        if (result) {
          const intl5 = tmp4(1236).intl;
          const obj7 = { setUpAutomod: null };
          obj7[0] = function setUpAutomod() {
            if (!closure_1) {
              const result = set(outer1_3[16]).trackForumEnableAutomodClicked();
              const obj = set(outer1_3[16]);
            }
            isMediaChannelResult(outer1_3[15]).open(set, outer1_10.GUILD_AUTOMOD);
          };
          formatResult2 = intl5.format(tmp21, obj7);
        }
        obj8 = { showPrivateThreads: false, showCreateThreads: false, sectionDescription: null, inSoundmojiExperiment: null };
        obj8[2] = formatResult2;
        obj8[3] = inSoundmojiExperiment;
        items8[2] = importAll(15683).generateChannelTextSection(tmp3, stringResult2, obj8);
        let tmp22Result = tmp22(15683);
        const intl6 = tmp4(1236).intl;
        items8[3] = tmp22Result.generateChannelAppsSection(tmp3, intl6.string(tmp4(1236).t["rrh/W6"]));
        if (enabled) {
          tmp22Result = tmp22(15683);
          const intl7 = tmp4(1236).intl;
          const items9 = [tmp22Result.generateChannelVoiceSection(tmp3, intl7.string(tmp4(1236).t["46Ra1b"]))];
          let items10 = items9;
        } else {
          items10 = [];
        }
        HermesBuiltin.arraySpread(items10, 4);
        items5 = items8;
        const obj11 = importAll(15683);
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
      enabled = importDefault(6051).getCurrentConfig(obj).enabled;
      const obj2 = importDefault(6051);
    }
    if (!enabled) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
      const str2 = constants4.MANAGE_OFFICIAL_MESSAGES;
    }
    const guildPermissionSpec = importAll(15683).generateGuildPermissionSpec(getPermissionOptions(features.id));
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
    return importAll(15683).getGuildPermissionSpec(getPermissionOptions(id.id));
  }
};