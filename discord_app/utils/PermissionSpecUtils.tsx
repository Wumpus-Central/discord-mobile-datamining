// === Module 17035: PermissionSpecUtils ===

// Module 17035 (PermissionSpecUtils)
import intl34 from "intl" /* 1126 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 5809 */;
import useIsCreatorMonetizationEnabledGuild from "useIsCreatorMonetizationEnabledGuild" /* 6764 */;
import GuildOfficialMessagesExperimentDefault from "GuildOfficialMessagesExperiment" /* 6781 */;
import tracking_Tracking from "tracking/Tracking" /* 7276 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 8110 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import useGuildEligibleForStageChannels from "useGuildEligibleForStageChannels" /* 17036 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17037 */;
import permissions_PermissionUtilsAll from "permissions/PermissionUtils" /* 17039 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, permissions;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function getPermissionOptions(id) {
  let ZuzwPz;
  let enableHangoutWindow;
  let fVE8y8;
  let format;
  let format2;
  let intl2;
  let obj4;
  let obj5;
  let obj9;
  const obj = useGuildEligibleForStageChannels;
  const result = obj.isGuildEligibleForStageChannels(id);
  const guild = GuildStore.getGuild(id);
  let result1 = null != guild;
  if (result1) {
    const tmpResult = useIsCreatorMonetizationEnabledGuild;
    result1 = tmpResult.isCreatorMonetizationEnabledGuild(guild);
  }
  const tmpResult3 = SoundmojiRenderingExperiment;
  const soundmojiRenderingExperiment = tmpResult3.getSoundmojiRenderingExperiment({ location: "getPermissionOptions" });
  const obj2 = { guildId: id, location: "getPermissionOptions" };
  const obj3 = { PRIORITY_SPEAKER_DESCRIPTION: format(ZuzwPz, obj4), SOUNDBOARD_DESCRIPTION: format2(fVE8y8, obj5), showStageChannelPermissions: result, showExperimental: true, showMembershipManualApprovalPermissions: true, showCreatorMonetizationAnalyticsPermission: result1, inSoundmojiExperiment: soundmojiRenderingExperiment, enableHangoutWindow };
  const tmpResult4 = HangoutWindowExperiment;
  enableHangoutWindow = tmpResult4.getHangoutWindowExperiment(obj2).enableHangoutWindow;
  const intl = intl34.intl;
  format = intl.format;
  obj4 = { keybind: intl2.string(intl34.t.DkSwJ2) };
  ZuzwPz = intl34.t.ZuzwPz;
  intl2 = intl34.intl;
  const intl3 = intl34.intl;
  format2 = intl3.format;
  obj5 = { helpCenterArticle: obj9.getArticleURL(metroRequire.SOUNDBOARD) };
  fVE8y8 = intl34.t.fVE8y8;
  obj9 = HelpdeskUtilsDefault;
  return obj3;
}
let set = ChannelRecord.VOICE_THREAD_PARENT_CHANNEL_TYPES;
({ HelpdeskArticles: metroRequire, ChannelTypes: metroImportDefault, GuildFeatures: metroImportAll, Permissions: c9, GuildSettingsSections: c10 } = Constants);
let closure_11 = ChannelPermissionsConstants.getChannelPermissionSpecMap;
let obj = {
  generateChannelPermissionSpec(guild_id, stateFromStores, arg2, arg3) {
    let items5;
    _require = guild_id;
    const tmp = getPermissionOptions(guild_id);
    let obj = { enableHangoutWindow: tmp.enableHangoutWindow };
    const merged = Object.assign(arg3);
    const tmp3 = closure_11(stateFromStores, arg2, obj);
    const tmp4 = _require;
    const VoiceInThreadsExperiment = require("ThreadHooks").VoiceInThreadsExperiment;
    let obj2 = { guildId: guild_id, location: "3ad37d_1" };
    const enabled = VoiceInThreadsExperiment.getCurrentConfig(obj2).enabled && set.has(stateFromStores.type);
    const tmp4Result = tmp4(5581);
    const isStageVideoEnabledResult = tmp4Result.isStageVideoEnabled(guild_id);
    const tmp4Result2 = tmp4(17038);
    let result = tmp4Result2.canCurrentUserManageMessageFilters(guild_id);
    const isMediaChannelResult = stateFromStores.isMediaChannel();
    importDefault = isMediaChannelResult;
    const self = this;
    set = new Set();
    const guild = GuildStore.getGuild(guild_id);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.VERIFIED);
    }
    if (hasItem) {
      const obj3 = { guildId: guild_id, location: "generateChannelPermissionSpec" };
      const obj6 = GuildOfficialMessagesExperimentDefault;
      hasItem = obj6.getCurrentConfig(obj3).enabled;
    }
    if (!hasItem) {
      const str = constants4.MANAGE_OFFICIAL_MESSAGES;
      set.add(str.toString());
    }
    const inSoundmojiExperiment = tmp.inSoundmojiExperiment;
    const type = stateFromStores.type;
    if (constants2.GUILD_CATEGORY === type) {
      let items2;
      const generateChannelGeneralSection4 = permissions_PermissionUtilsAll.generateChannelGeneralSection;
      permissions_PermissionUtilsAll;
      const intl23 = tmp4(1126).intl;
      const items = [generateChannelGeneralSection4(tmp3, intl23.string(tmp4(1126).t["AkPxc+"])), , , , , ];
      const generateChannelMembershipSection4 = permissions_PermissionUtilsAll.generateChannelMembershipSection;
      permissions_PermissionUtilsAll;
      const intl24 = tmp4(1126).intl;
      items[1] = generateChannelMembershipSection4(tmp3, intl24.string(tmp4(1126).t.Ny49TN));
      const generateChannelTextSection2 = permissions_PermissionUtilsAll.generateChannelTextSection;
      permissions_PermissionUtilsAll;
      const intl25 = tmp4(1126).intl;
      const obj4 = { showPrivateThreads: true, showCreateThreads: true, inSoundmojiExperiment };
      items[2] = generateChannelTextSection2(tmp3, intl25.string(tmp4(1126).t.cKobO5), obj4);
      const generateChannelVoiceSection4 = permissions_PermissionUtilsAll.generateChannelVoiceSection;
      permissions_PermissionUtilsAll;
      const intl26 = tmp4(1126).intl;
      items[3] = generateChannelVoiceSection4(tmp3, intl26.string(tmp4(1126).t["46Ra1b"]));
      const generateChannelAppsSection4 = permissions_PermissionUtilsAll.generateChannelAppsSection;
      permissions_PermissionUtilsAll;
      const intl27 = tmp4(1126).intl;
      items[4] = generateChannelAppsSection4(tmp3, intl27.string(tmp4(1126).t["rrh/W6"]));
      if (tmp.showStageChannelPermissions) {
        const generateChannelStageSection2 = permissions_PermissionUtilsAll.generateChannelStageSection;
        permissions_PermissionUtilsAll;
        const intl28 = tmp4(1126).intl;
        const items1 = [generateChannelStageSection2(tmp3, intl28.string(tmp4(1126).t.yniauk))];
        items2 = items1;
      } else {
        items2 = [];
      }
      const arraySpreadResult = HermesBuiltin.arraySpread(items, items2, 5);
      const generateChannelEventsSection3 = permissions_PermissionUtilsAll.generateChannelEventsSection;
      permissions_PermissionUtilsAll;
      const intl29 = tmp4(1126).intl;
      items[arraySpreadResult] = generateChannelEventsSection3(tmp3, intl29.string(tmp4(1126).t.b8lplT));
      items5 = items;
    } else if (constants2.GUILD_VOICE === type) {
      const generateChannelGeneralSection3 = permissions_PermissionUtilsAll.generateChannelGeneralSection;
      permissions_PermissionUtilsAll;
      const intl16 = tmp4(1126).intl;
      const items3 = [generateChannelGeneralSection3(tmp3, intl16.string(tmp4(1126).t.ouHggI), { showManageWebhooks: true }), , , , , ];
      const generateChannelMembershipSection3 = permissions_PermissionUtilsAll.generateChannelMembershipSection;
      permissions_PermissionUtilsAll;
      const intl17 = tmp4(1126).intl;
      items3[1] = generateChannelMembershipSection3(tmp3, intl17.string(tmp4(1126).t.Ny49TN));
      const generateChannelVoiceSection3 = permissions_PermissionUtilsAll.generateChannelVoiceSection;
      permissions_PermissionUtilsAll;
      const intl18 = tmp4(1126).intl;
      items3[2] = generateChannelVoiceSection3(tmp3, intl18.string(tmp4(1126).t["46Ra1b"]));
      const generateChannelVoiceChatSection2 = permissions_PermissionUtilsAll.generateChannelVoiceChatSection;
      permissions_PermissionUtilsAll;
      const intl19 = tmp4(1126).intl;
      let formatResult;
      const stringResult = intl19.string(tmp4(1126).t.iqlsnD);
      if (result) {
        const intl20 = tmp4(1126).intl;
        const obj5 = {
          setUpAutomod() {
                const obj = GuildSettingsActionCreatorsDefault;
                obj.open(guild_id, constants.GUILD_AUTOMOD);
              }
        };
        formatResult = intl20.format(tmp4(1126).t["4Z9Fbb"], obj5);
      }
      const obj7 = { sectionDescription: formatResult, inSoundmojiExperiment };
      items3[3] = generateChannelVoiceChatSection2(tmp3, stringResult, obj7);
      const generateChannelEventsSection2 = permissions_PermissionUtilsAll.generateChannelEventsSection;
      permissions_PermissionUtilsAll;
      const intl21 = tmp4(1126).intl;
      items3[4] = generateChannelEventsSection2(tmp3, intl21.string(tmp4(1126).t.b8lplT));
      const generateChannelAppsSection3 = permissions_PermissionUtilsAll.generateChannelAppsSection;
      permissions_PermissionUtilsAll;
      const intl22 = tmp4(1126).intl;
      items3[5] = generateChannelAppsSection3(tmp3, intl22.string(tmp4(1126).t["rrh/W6"]));
      items5 = items3;
    } else if (constants2.GUILD_STAGE_VOICE === type) {
      const generateChannelGeneralSection2 = permissions_PermissionUtilsAll.generateChannelGeneralSection;
      permissions_PermissionUtilsAll;
      const intl8 = tmp4(1126).intl;
      const items4 = [generateChannelGeneralSection2(tmp3, intl8.string(tmp4(1126).t.ouHggI), { showManageWebhooks: false }), , , , , , ];
      const generateChannelMembershipSection2 = permissions_PermissionUtilsAll.generateChannelMembershipSection;
      permissions_PermissionUtilsAll;
      const intl9 = tmp4(1126).intl;
      items4[1] = generateChannelMembershipSection2(tmp3, intl9.string(tmp4(1126).t.Ny49TN));
      const generateChannelStageVoiceSection = permissions_PermissionUtilsAll.generateChannelStageVoiceSection;
      permissions_PermissionUtilsAll;
      const intl10 = tmp4(1126).intl;
      items4[2] = generateChannelStageVoiceSection(tmp3, intl10.string(tmp4(1126).t["46Ra1b"]), isStageVideoEnabledResult);
      const generateChannelStageSection = permissions_PermissionUtilsAll.generateChannelStageSection;
      permissions_PermissionUtilsAll;
      const intl11 = tmp4(1126).intl;
      items4[3] = generateChannelStageSection(tmp3, intl11.string(tmp4(1126).t.yniauk));
      const generateChannelEventsSection = permissions_PermissionUtilsAll.generateChannelEventsSection;
      permissions_PermissionUtilsAll;
      const intl12 = tmp4(1126).intl;
      items4[4] = generateChannelEventsSection(tmp3, intl12.string(tmp4(1126).t.b8lplT));
      const generateChannelVoiceChatSection = permissions_PermissionUtilsAll.generateChannelVoiceChatSection;
      permissions_PermissionUtilsAll;
      const intl13 = tmp4(1126).intl;
      let formatResult1;
      const stringResult1 = intl13.string(tmp4(1126).t.iqlsnD);
      if (result) {
        const intl14 = tmp4(1126).intl;
        const obj8 = {
          setUpAutomod() {
                const obj = GuildSettingsActionCreatorsDefault;
                obj.open(guild_id, constants.GUILD_AUTOMOD);
              }
        };
        formatResult1 = intl14.format(tmp4(1126).t["4Z9Fbb"], obj8);
      }
      const obj9 = { sectionDescription: formatResult1, inSoundmojiExperiment };
      items4[5] = generateChannelVoiceChatSection(tmp3, stringResult1, obj9);
      const generateChannelAppsSection2 = permissions_PermissionUtilsAll.generateChannelAppsSection;
      permissions_PermissionUtilsAll;
      const intl15 = tmp4(1126).intl;
      items4[6] = generateChannelAppsSection2(tmp3, intl15.string(tmp4(1126).t["rrh/W6"]), { showActivities: false });
      items5 = items4;
    } else {
      let stringResult2;
      let items10;
      if (constants2.GUILD_FORUM !== type) {
        if (constants2.GUILD_MEDIA !== type) {
          let items7;
          const generateChannelGeneralSection5 = permissions_PermissionUtilsAll.generateChannelGeneralSection;
          permissions_PermissionUtilsAll;
          const intl30 = tmp4(1126).intl;
          items5 = [generateChannelGeneralSection5(tmp3, intl30.string(tmp4(1126).t.ouHggI)), , , ];
          const generateChannelMembershipSection5 = permissions_PermissionUtilsAll.generateChannelMembershipSection;
          permissions_PermissionUtilsAll;
          const intl31 = tmp4(1126).intl;
          items5[1] = generateChannelMembershipSection5(tmp3, intl31.string(tmp4(1126).t.Ny49TN));
          const generateChannelTextSection3 = permissions_PermissionUtilsAll.generateChannelTextSection;
          permissions_PermissionUtilsAll;
          const intl32 = tmp4(1126).intl;
          const obj10 = { showPrivateThreads: stateFromStores.type !== constants2.GUILD_ANNOUNCEMENT, showCreateThreads: true, inSoundmojiExperiment };
          items5[2] = generateChannelTextSection3(tmp3, intl32.string(tmp4(1126).t.cKobO5), obj10);
          const generateChannelAppsSection5 = permissions_PermissionUtilsAll.generateChannelAppsSection;
          permissions_PermissionUtilsAll;
          const intl33 = tmp4(1126).intl;
          items5[3] = generateChannelAppsSection5(tmp3, intl33.string(tmp4(1126).t["rrh/W6"]));
          if (enabled) {
            const generateChannelVoiceSection = permissions_PermissionUtilsAll.generateChannelVoiceSection;
            permissions_PermissionUtilsAll;
            const intl = tmp4(1126).intl;
            const items6 = [generateChannelVoiceSection(tmp3, intl.string(tmp4(1126).t["46Ra1b"]))];
            items7 = items6;
          } else {
            items7 = [];
          }
          HermesBuiltin.arraySpread(items5, items7, 4);
        }
      }
      const intl2 = tmp4(1126).intl;
      const string = intl2.string;
      const t = tmp4(1126).t;
      if (isMediaChannelResult) {
        stringResult2 = string(t.aSjPgw);
      } else {
        stringResult2 = string(t.TS7Cnb);
      }
      const t2 = tmp4(1126).t;
      const tmp22 = isMediaChannelResult ? t2.YjJTtH : t2["1MTnqY"];
      const generateChannelGeneralSection = permissions_PermissionUtilsAll.generateChannelGeneralSection;
      permissions_PermissionUtilsAll;
      const intl3 = tmp4(1126).intl;
      const items8 = [generateChannelGeneralSection(tmp3, intl3.string(tmp4(1126).t.ouHggI)), , , ];
      const generateChannelMembershipSection = permissions_PermissionUtilsAll.generateChannelMembershipSection;
      permissions_PermissionUtilsAll;
      const intl4 = tmp4(1126).intl;
      items8[1] = generateChannelMembershipSection(tmp3, intl4.string(tmp4(1126).t.Ny49TN));
      let formatResult2;
      const generateChannelTextSection = permissions_PermissionUtilsAll.generateChannelTextSection;
      permissions_PermissionUtilsAll;
      if (result) {
        const intl5 = tmp4(1126).intl;
        const obj11 = {
          setUpAutomod() {
                if (!importDefault) {
                  const obj = tracking_Tracking;
                  const result = obj.trackForumEnableAutomodClicked();
                }
                const obj2 = GuildSettingsActionCreatorsDefault;
                obj2.open(guild_id, constants.GUILD_AUTOMOD);
              }
        };
        formatResult2 = intl5.format(tmp22, obj11);
      }
      const obj12 = { showPrivateThreads: false, showCreateThreads: false, sectionDescription: formatResult2, inSoundmojiExperiment };
      items8[2] = generateChannelTextSection(tmp3, stringResult2, obj12);
      const generateChannelAppsSection = permissions_PermissionUtilsAll.generateChannelAppsSection;
      permissions_PermissionUtilsAll;
      const intl6 = tmp4(1126).intl;
      items8[3] = generateChannelAppsSection(tmp3, intl6.string(tmp4(1126).t["rrh/W6"]));
      if (enabled) {
        const generateChannelVoiceSection2 = permissions_PermissionUtilsAll.generateChannelVoiceSection;
        permissions_PermissionUtilsAll;
        const intl7 = tmp4(1126).intl;
        const items9 = [generateChannelVoiceSection2(tmp3, intl7.string(tmp4(1126).t["46Ra1b"]))];
        items10 = items9;
      } else {
        items10 = [];
      }
      HermesBuiltin.arraySpread(items8, items10, 4);
      items5 = items8;
    }
    let mapped = items5;
    if (0 !== set.size) {
      mapped = items5.map((permissions) => {
        const obj = {
          permissions: permissions.filter((flag) => {
            const str = flag.flag;
            return !set.has(str.toString());
          })
        };
        const merged = Object.assign(permissions);
        permissions = permissions.permissions;
        return obj;
      });
    }
    return mapped;
  },
  generateGuildPermissionSpec(features) {
    set = new Set();
    features = features.features;
    if (!features.has(metroImportAll.COMMUNITY)) {
      let str = constants4.VIEW_GUILD_ANALYTICS;
      set.add(str.toString());
    }
    const features2 = features.features;
    let enabled = features2.has(metroImportAll.VERIFIED);
    if (enabled) {
      let obj = { guildId: features.id, location: "generateGuildPermissionSpec" };
      const obj2 = GuildOfficialMessagesExperimentDefault;
      enabled = obj2.getCurrentConfig(obj).enabled;
    }
    if (!enabled) {
      const str2 = constants4.MANAGE_OFFICIAL_MESSAGES;
      set.add(str2.toString());
    }
    const obj4 = permissions_PermissionUtilsAll;
    const guildPermissionSpec = obj4.generateGuildPermissionSpec(getPermissionOptions(features.id));
    let mapped = guildPermissionSpec;
    if (0 !== set.size) {
      mapped = guildPermissionSpec.map((permissions) => {
        const obj = {
          permissions: permissions.filter((flag) => {
            const str = flag.flag;
            return !set.has(str.toString());
          })
        };
        const merged = Object.assign(permissions);
        permissions = permissions.permissions;
        return obj;
      });
    }
    return mapped;
  },
  getGuildPermissionSpecMap(id) {
    const obj = permissions_PermissionUtilsAll;
    return obj.getGuildPermissionSpec(getPermissionOptions(id.id));
  }
};
let result = size.fileFinishedImporting("utils/PermissionSpecUtils.tsx");

export default obj;