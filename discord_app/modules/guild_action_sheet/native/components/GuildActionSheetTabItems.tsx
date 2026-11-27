// === Module 15397: GuildActionSheetTabItems ===

// Module 15397 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6013 */;
import BoostingActionCreatorsAll from "BoostingActionCreators" /* 6864 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7476 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8574 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10429 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 10432 */;
import GuildActionSheetAnalyticsUtils from "GuildActionSheetAnalyticsUtils" /* 15398 */;
import GuildActionSheetTypes from "GuildActionSheetTypes" /* 15399 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildChannelStore from "GuildChannelStore" /* 4973 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;

require = fn;
const Constants = fn(1071);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  guild = guild.guild;
  let canAccessSettings = guild(15377).useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = canAccessSettings(10370)(guild.id).total;
  let obj = guild(15377);
  items = [GuildChannelStore];
  const stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(504);
  let shouldRenderInviteResult = guild(10432).shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  dependencyMap = noop.useCallback(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    let channel = ChannelStore.getChannel(utils_InstantInviteUtils.getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = GuildChannelStore.getDefaultChannel(guild.id);
    }
    if (null != channel) {
      const tmp3Result = instant_invite_InstantInviteUtils;
      const result = tmp3Result.handleOpenInviteActionsheet(guild, channel.id, stateFromStores, constants4.SERVER_PROFILE);
    }
  }, items1);
  let obj4 = { direction: "horizontal", style: { flexWrap: "wrap" }, children: null };
  if (total > 0) {
    const intl2 = tmp(1112).intl;
    let obj5 = { subscriptions: total };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1112).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1112).intl;
    formatToPlainStringResult = intl.string(tmp(1112).t.Uj0md3);
  }
  let obj6 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
  let obj3 = guild(10432);
  obj6.icon = closure_12(guild(9366).BoostGemIcon, { color: canAccessSettings(575).unsafe_rawColors.GUILD_BOOSTING_PINK });
  obj6.onPress = function onPress() {
    const obj2 = { location: { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON } };
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
    const obj3 = { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON };
    const obj4 = GuildActionSheetAnalyticsUtils;
    const result = obj4.trackGuildActionSheetOptionPressed({ guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.BOOST, canAccessSettings });
    const obj5 = { guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.BOOST, canAccessSettings };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    BoostingActionCreatorsAll.openApplyBoostModal(guild.id);
  };
  const items2 = [closure_12(guild(7944).IconButton, obj6), , , , ];
  if (shouldRenderInviteResult) {
    const obj8 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl3 = tmp(1112).intl;
    obj8.label = intl3.string(tmp(1112).t.VINpSK);
    obj8.icon = tmp3(10549);
    obj8.onPress = function onPress() {
      const obj = GuildActionSheetAnalyticsUtils;
      const result = obj.trackGuildActionSheetOptionPressed({ guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.INVITE, canAccessSettings });
      const obj2 = { guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.INVITE, canAccessSettings };
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_3();
    };
    shouldRenderInviteResult = closure_12(tmp(7944).IconButton, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
  const intl4 = tmp(1112).intl;
  obj9.label = intl4.string(guild(1112).t.HcoRu0);
  obj9.icon = canAccessSettings(8599);
  obj9.onPress = function onPress() {
    const obj = GuildActionSheetAnalyticsUtils;
    const result = obj.trackGuildActionSheetOptionPressed({ guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.NOTIFICATIONS, canAccessSettings });
    const obj2 = { guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.NOTIFICATIONS, canAccessSettings };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  items2[2] = closure_12(guild(7944).IconButton, obj9);
  if (canAccessSettings) {
    const obj10 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl5 = tmp(1112).intl;
    obj10.label = intl5.string(tmp(1112).t["3D5yo/"]);
    obj10.icon = tmp3(10456);
    obj10.onPress = function onPress() {
      const obj = GuildActionSheetAnalyticsUtils;
      const result = obj.trackGuildActionSheetOptionPressed({ guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.SETTINGS, canAccessSettings });
      const obj2 = { guildId: guild.id, option: GuildActionSheetTypes.GuildActionSheetOptions.SETTINGS, canAccessSettings };
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsActionCreatorsDefault.open(guild.id);
    };
    canAccessSettings = closure_12(tmp(7944).IconButton, obj10);
  }
  items2[3] = canAccessSettings;
  items2[4] = closure_12(canAccessSettings(15400), { guild });
  obj4.children = items2;
  return closure_13(guild(6863).ButtonGroup, obj4);
};