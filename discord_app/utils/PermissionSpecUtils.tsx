// === Module 16648: PermissionSpecUtils ===

// Module 16648 (PermissionSpecUtils)
import util from "util" /* 1115 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 5325 */;
import useIsCreatorMonetizationEnabledGuild from "useIsCreatorMonetizationEnabledGuild" /* 6669 */;
import GuildOfficialMessagesExperimentDefault from "GuildOfficialMessagesExperiment" /* 6686 */;
import tracking_Tracking from "tracking/Tracking" /* 7186 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 7849 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import useGuildEligibleForStageChannels from "useGuildEligibleForStageChannels" /* 16649 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 16650 */;
import permissions_PermissionUtilsAll from "permissions/PermissionUtils" /* 16652 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function getPermissionOptions(id) {
  const result = useGuildEligibleForStageChannels.isGuildEligibleForStageChannels(id);
  const guild = GuildStore.getGuild(id);
  let result1 = null != guild;
  if (result1) {
    result1 = useIsCreatorMonetizationEnabledGuild.isCreatorMonetizationEnabledGuild(guild);
    const tmpResult = useIsCreatorMonetizationEnabledGuild;
  }
  const soundmojiRenderingExperiment = SoundmojiRenderingExperiment.getSoundmojiRenderingExperiment({ location: "getPermissionOptions" });
  const tmpResult3 = SoundmojiRenderingExperiment;
  const obj3 = { PRIORITY_SPEAKER_DESCRIPTION: null, SOUNDBOARD_DESCRIPTION: null, showStageChannelPermissions: null, showExperimental: true, showMembershipManualApprovalPermissions: true, showCreatorMonetizationAnalyticsPermission: null, inSoundmojiExperiment: null, enableHangoutWindow: null };
  const intl = util.intl;
  const obj4 = { keybind: null };
  const intl2 = util.intl;
  obj4.keybind = intl2.string(util.t.DkSwJ2);
  obj3.PRIORITY_SPEAKER_DESCRIPTION = intl.format(util.t.ZuzwPz, obj4);
  const intl3 = util.intl;
  const obj5 = { helpCenterArticle: null };
  const obj2 = { guildId: id, location: "getPermissionOptions" };
  const tmpResult4 = HangoutWindowExperiment;
  obj5.helpCenterArticle = HelpdeskUtilsDefault.getArticleURL(constants.SOUNDBOARD);
  obj3.SOUNDBOARD_DESCRIPTION = intl3.format(util.t.fVE8y8, obj5);
  obj3.showStageChannelPermissions = result;
  obj3.showCreatorMonetizationAnalyticsPermission = result1;
  obj3.inSoundmojiExperiment = soundmojiRenderingExperiment;
  obj3.enableHangoutWindow = tmpResult4.getHangoutWindowExperiment(obj2).enableHangoutWindow;
  return obj3;
}
ChannelRecord.VOICE_THREAD_PARENT_CHANNEL_TYPES;
({ HelpdeskArticles: metroRequire, ChannelTypes: closure_7, GuildFeatures: closure_8, Permissions: closure_9, GuildSettingsSections: c10 } = Constants);
let closure_11 = ChannelPermissionsConstants.getChannelPermissionSpecMap;
let result = size.fileFinishedImporting("utils/PermissionSpecUtils.tsx");

export default {
  generateChannelPermissionSpec(guild_id, stateFromStores, arg2, arg3) {
    set = guild_id;
    const tmp = getPermissionOptions(guild_id);
    let obj = {};
    const merged = Object.assign(arg3);
    obj.enableHangoutWindow = tmp.enableHangoutWindow;
    const tmp3 = closure_11(stateFromStores, arg2, obj);
    const tmp4 = set;
    let channelEventsSection = dependencyMap;
    const VoiceInThreadsExperiment = set(6687).VoiceInThreadsExperiment;
    let enabled = VoiceInThreadsExperiment.getCurrentConfig({ guildId: guild_id, location: "3ad37d_1" }).enabled;
    if (enabled) {
      enabled = set.has(stateFromStores.type);
    }
    let obj2 = { guildId: guild_id, location: "3ad37d_1" };
    const tmp4Result = tmp4(5729);
    const isStageVideoEnabledResult = tmp4(5729).isStageVideoEnabled(guild_id);
    let result = tmp4(16651).canCurrentUserManageMessageFilters(guild_id);
    const isMediaChannelResult = stateFromStores.isMediaChannel();
    importDefault = isMediaChannelResult;
    set = new Set();
    const guild = GuildStore.getGuild(guild_id);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.VERIFIED);
    }
    if (hasItem) {
      const obj3 = { guildId: guild_id, location: "generateChannelPermissionSpec" };
      hasItem = GuildOfficialMessagesExperimentDefault.getCurrentConfig(obj3).enabled;
    }
    if (!hasItem) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
    }
    const inSoundmojiExperiment = tmp.inSoundmojiExperiment;
    const type = stateFromStores.type;
    if (constants2.GUILD_CATEGORY === type) {
      let obj33 = importAll;
      const intl23 = tmp4(1115).intl;
      const items = [permissions_PermissionUtilsAll.generateChannelGeneralSection(tmp3, intl23.string(tmp4(1115).t["AkPxc+"])), , , , , ];
      const intl24 = tmp4(1115).intl;
      items[1] = permissions_PermissionUtilsAll.generateChannelMembershipSection(tmp3, intl24.string(tmp4(1115).t.Ny49TN));
      const intl25 = tmp4(1115).intl;
      const obj4 = { showPrivateThreads: true, showCreateThreads: true, inSoundmojiExperiment };
      items[2] = permissions_PermissionUtilsAll.generateChannelTextSection(tmp3, intl25.string(tmp4(1115).t.cKobO5), obj4);
      const intl26 = tmp4(1115).intl;
      items[3] = permissions_PermissionUtilsAll.generateChannelVoiceSection(tmp3, intl26.string(tmp4(1115).t["46Ra1b"]));
      const intl27 = tmp4(1115).intl;
      items[4] = permissions_PermissionUtilsAll.generateChannelAppsSection(tmp3, intl27.string(tmp4(1115).t["rrh/W6"]));
      if (tmp.showStageChannelPermissions) {
        const intl28 = tmp4(1115).intl;
        const items1 = [obj33(16652).generateChannelStageSection(tmp3, intl28.string(tmp4(1115).t.yniauk))];
        let items2 = items1;
        const obj33Result = obj33(16652);
      } else {
        items2 = [];
      }
      obj33 = obj33(16652);
      const intl29 = tmp4(1115).intl;
      channelEventsSection = obj33.generateChannelEventsSection(tmp3, intl29.string(tmp4(1115).t.b8lplT));
      items[HermesBuiltin.arraySpread(items2, 5)] = channelEventsSection;
      const arraySpreadResult = HermesBuiltin.arraySpread(items2, 5);
    } else {
      if (constants2.GUILD_VOICE === type) {
        const intl16 = tmp4(1115).intl;
        const items3 = [permissions_PermissionUtilsAll.generateChannelGeneralSection(tmp3, intl16.string(tmp4(1115).t.ouHggI), { showManageWebhooks: true }), , , , , ];
        const intl17 = tmp4(1115).intl;
        items3[1] = permissions_PermissionUtilsAll.generateChannelMembershipSection(tmp3, intl17.string(tmp4(1115).t.Ny49TN));
        const intl18 = tmp4(1115).intl;
        items3[2] = permissions_PermissionUtilsAll.generateChannelVoiceSection(tmp3, intl18.string(tmp4(1115).t["46Ra1b"]));
        const intl19 = tmp4(1115).intl;
        let formatResult;
        const obj28 = permissions_PermissionUtilsAll;
        if (result) {
          const intl20 = tmp4(1115).intl;
          const obj5 = {
            setUpAutomod() {
                    GuildSettingsActionCreatorsDefault.open(set, constants5.GUILD_AUTOMOD);
                  }
          };
          formatResult = intl20.format(tmp4(1115).t["4Z9Fbb"], obj5);
        }
        const obj7 = { sectionDescription: formatResult, inSoundmojiExperiment };
        items3[3] = obj28.generateChannelVoiceChatSection(tmp3, intl19.string(tmp4(1115).t.iqlsnD), obj7);
        const stringResult = intl19.string(tmp4(1115).t.iqlsnD);
        const intl21 = tmp4(1115).intl;
        items3[4] = permissions_PermissionUtilsAll.generateChannelEventsSection(tmp3, intl21.string(tmp4(1115).t.b8lplT));
        const tmp30Result = permissions_PermissionUtilsAll;
        const intl22 = tmp4(1115).intl;
        items3[5] = permissions_PermissionUtilsAll.generateChannelAppsSection(tmp3, intl22.string(tmp4(1115).t["rrh/W6"]));
        let items5 = items3;
        const tmp30Result2 = permissions_PermissionUtilsAll;
      } else if (constants2.GUILD_STAGE_VOICE === type) {
        const intl8 = tmp4(1115).intl;
        const items4 = [permissions_PermissionUtilsAll.generateChannelGeneralSection(tmp3, intl8.string(tmp4(1115).t.ouHggI), { showManageWebhooks: false }), , , , , , ];
        const intl9 = tmp4(1115).intl;
        items4[1] = permissions_PermissionUtilsAll.generateChannelMembershipSection(tmp3, intl9.string(tmp4(1115).t.Ny49TN));
        const intl10 = tmp4(1115).intl;
        items4[2] = permissions_PermissionUtilsAll.generateChannelStageVoiceSection(tmp3, intl10.string(tmp4(1115).t["46Ra1b"]), isStageVideoEnabledResult);
        const intl11 = tmp4(1115).intl;
        items4[3] = permissions_PermissionUtilsAll.generateChannelStageSection(tmp3, intl11.string(tmp4(1115).t.yniauk));
        const intl12 = tmp4(1115).intl;
        items4[4] = permissions_PermissionUtilsAll.generateChannelEventsSection(tmp3, intl12.string(tmp4(1115).t.b8lplT));
        const intl13 = tmp4(1115).intl;
        let formatResult1;
        const obj21 = permissions_PermissionUtilsAll;
        if (result) {
          const intl14 = tmp4(1115).intl;
          const obj8 = {
            setUpAutomod() {
                    GuildSettingsActionCreatorsDefault.open(set, constants5.GUILD_AUTOMOD);
                  }
          };
          formatResult1 = intl14.format(tmp4(1115).t["4Z9Fbb"], obj8);
        }
        const obj12 = { sectionDescription: formatResult1, inSoundmojiExperiment };
        items4[5] = obj21.generateChannelVoiceChatSection(tmp3, intl13.string(tmp4(1115).t.iqlsnD), obj12);
        const stringResult1 = intl13.string(tmp4(1115).t.iqlsnD);
        const intl15 = tmp4(1115).intl;
        items4[6] = permissions_PermissionUtilsAll.generateChannelAppsSection(tmp3, intl15.string(tmp4(1115).t["rrh/W6"]), { showActivities: false });
        items5 = items4;
        const tmp27Result = permissions_PermissionUtilsAll;
      } else {
        if (constants2.GUILD_FORUM !== type) {
          if (constants2.GUILD_MEDIA !== type) {
            const intl30 = tmp4(1115).intl;
            items5 = [permissions_PermissionUtilsAll.generateChannelGeneralSection(tmp3, intl30.string(tmp4(1115).t.ouHggI)), , , ];
            const intl31 = tmp4(1115).intl;
            items5[1] = permissions_PermissionUtilsAll.generateChannelMembershipSection(tmp3, intl31.string(tmp4(1115).t.Ny49TN));
            const intl32 = tmp4(1115).intl;
            const obj13 = { showPrivateThreads: stateFromStores.type !== constants2.GUILD_ANNOUNCEMENT, showCreateThreads: true, inSoundmojiExperiment };
            items5[2] = permissions_PermissionUtilsAll.generateChannelTextSection(tmp3, intl32.string(tmp4(1115).t.cKobO5), obj13);
            const intl33 = tmp4(1115).intl;
            items5[3] = permissions_PermissionUtilsAll.generateChannelAppsSection(tmp3, intl33.string(tmp4(1115).t["rrh/W6"]));
            if (enabled) {
              const intl = tmp4(1115).intl;
              const items6 = [permissions_PermissionUtilsAll.generateChannelVoiceSection(tmp3, intl.string(tmp4(1115).t["46Ra1b"]))];
              let items7 = items6;
              const tmp38Result = permissions_PermissionUtilsAll;
            } else {
              items7 = [];
            }
            HermesBuiltin.arraySpread(items7, 4);
          }
        }
        const intl2 = tmp4(1115).intl;
        const string = intl2.string;
        const t = tmp4(1115).t;
        if (isMediaChannelResult) {
          let stringResult2 = string(t.aSjPgw);
        } else {
          stringResult2 = string(t.TS7Cnb);
        }
        const t2 = tmp4(1115).t;
        const intl3 = tmp4(1115).intl;
        const items8 = [permissions_PermissionUtilsAll.generateChannelGeneralSection(tmp3, intl3.string(tmp4(1115).t.ouHggI)), , , ];
        const tmp21 = isMediaChannelResult ? t2.YjJTtH : t2["1MTnqY"];
        const intl4 = tmp4(1115).intl;
        items8[1] = permissions_PermissionUtilsAll.generateChannelMembershipSection(tmp3, intl4.string(tmp4(1115).t.Ny49TN));
        let formatResult2;
        if (result) {
          const intl5 = tmp4(1115).intl;
          const obj14 = {
            setUpAutomod() {
                    if (!isMediaChannelResult) {
                      const result = tracking_Tracking.trackForumEnableAutomodClicked();
                    }
                    GuildSettingsActionCreatorsDefault.open(set, constants5.GUILD_AUTOMOD);
                  }
          };
          formatResult2 = intl5.format(tmp21, obj14);
        }
        const obj15 = { showPrivateThreads: false, showCreateThreads: false, sectionDescription: formatResult2, inSoundmojiExperiment };
        items8[2] = permissions_PermissionUtilsAll.generateChannelTextSection(tmp3, stringResult2, obj15);
        const intl6 = tmp4(1115).intl;
        items8[3] = permissions_PermissionUtilsAll.generateChannelAppsSection(tmp3, intl6.string(tmp4(1115).t["rrh/W6"]));
        if (enabled) {
          const intl7 = tmp4(1115).intl;
          const items9 = [permissions_PermissionUtilsAll.generateChannelVoiceSection(tmp3, intl7.string(tmp4(1115).t["46Ra1b"]))];
          let items10 = items9;
          const tmp22Result2 = permissions_PermissionUtilsAll;
        } else {
          items10 = [];
        }
        HermesBuiltin.arraySpread(items10, 4);
        items5 = items8;
        const tmp22Result = permissions_PermissionUtilsAll;
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
    const tmp4Result2 = tmp4(16651);
  },
  generateGuildPermissionSpec(features) {
    set = new Set();
    features = features.features;
    if (!features.has(constants3.COMMUNITY)) {
      set.add(constants4.VIEW_GUILD_ANALYTICS.toString());
    }
    const features2 = features.features;
    let enabled = features2.has(constants3.VERIFIED);
    if (enabled) {
      let obj = { guildId: features.id, location: "generateGuildPermissionSpec" };
      enabled = GuildOfficialMessagesExperimentDefault.getCurrentConfig(obj).enabled;
    }
    if (!enabled) {
      set.add(constants4.MANAGE_OFFICIAL_MESSAGES.toString());
    }
    const guildPermissionSpec = permissions_PermissionUtilsAll.generateGuildPermissionSpec(getPermissionOptions(features.id));
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
    return permissions_PermissionUtilsAll.getGuildPermissionSpec(getPermissionOptions(id.id));
  }
};