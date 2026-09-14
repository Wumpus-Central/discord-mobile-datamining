// === Module 14061: GuildActionSheetTabItems ===

// Module 14061 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4816 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5515 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7222 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9192 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9950 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9953 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  guild = guild.guild;
  let stateFromStores;
  let canAccessSettings = guild(14049).useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(4545)(guild.id).total;
  let obj = guild(14049);
  const items = [GuildChannelStore];
  stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(504);
  let shouldRenderInviteResult = guild(9953).shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  closure_2 = noop.useCallback(() => {
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
    const intl2 = tmp(1114).intl;
    const obj5 = { subscriptions: total };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1114).intl;
    formatToPlainStringResult = intl.string(tmp(1114).t.Uj0md3);
  }
  const obj6 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
  let obj3 = guild(9953);
  obj6.icon = closure_12(guild(9505).BoostGemIcon, { color: stateFromStores(576).unsafe_rawColors.GUILD_BOOSTING_PINK });
  obj6.onPress = function onPress() {
    const obj2 = { location: { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON } };
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
    const obj3 = { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    actions_BoostingActionCreatorsAll.openApplyBoostModal(guild.id);
  };
  const items2 = [closure_12(guild(8202).IconButton, obj6), , , ];
  if (shouldRenderInviteResult) {
    const obj8 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl3 = tmp(1114).intl;
    obj8.label = intl3.string(tmp(1114).t.VINpSK);
    obj8.icon = tmp3(10160);
    obj8.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_2();
    };
    shouldRenderInviteResult = closure_12(tmp(8202).IconButton, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
  const intl4 = tmp(1114).intl;
  obj9.label = intl4.string(guild(1114).t.HcoRu0);
  obj9.icon = stateFromStores(8053);
  obj9.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  items2[2] = closure_12(guild(8202).IconButton, obj9);
  if (canAccessSettings) {
    const obj10 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl5 = tmp(1114).intl;
    obj10.label = intl5.string(tmp(1114).t["3D5yo/"]);
    obj10.icon = tmp3(7484);
    obj10.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsActionCreatorsDefault.open(guild.id);
    };
    canAccessSettings = closure_12(tmp(8202).IconButton, obj10);
  }
  items2[3] = canAccessSettings;
  obj4.children = items2;
  return closure_13(guild(5514).ButtonGroup, obj4);
};