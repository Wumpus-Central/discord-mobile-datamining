// === Module 16063: GuildActionSheetTabItems ===

// Module 16063 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5897 */;
import BoostingActionCreatorsAll from "BoostingActionCreators" /* 6906 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7427 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9226 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9270 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9273 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import GuildChannelStore from "GuildChannelStore" /* 5073 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5046 */;

require = fn;
const Constants = fn(1072);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  guild = guild.guild;
  let stateFromStores;
  let canAccessSettings = guild(16045).useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(8614)(guild.id).total;
  let obj = guild(16045);
  items = [GuildChannelStore];
  stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(504);
  let shouldRenderInviteResult = guild(9273).shouldRenderInvite(stateFromStores, guild);
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
    const intl2 = tmp(1113).intl;
    const obj5 = { subscriptions: total };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t["pob/cL"], obj5);
  } else {
    const intl = tmp(1113).intl;
    formatToPlainStringResult = intl.string(tmp(1113).t.Uj0md3);
  }
  const obj6 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
  let obj3 = guild(9273);
  obj6.icon = closure_12(guild(10107).BoostGemIcon, { color: stateFromStores(575).unsafe_rawColors.GUILD_BOOSTING_PINK });
  obj6.onPress = function onPress() {
    const obj2 = { location: { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON } };
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
    const obj3 = { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON };
    ActionSheetActionCreatorsDefault.hideActionSheet();
    BoostingActionCreatorsAll.openApplyBoostModal(guild.id);
  };
  const items2 = [closure_12(guild(8173).IconButton, obj6), , , ];
  if (shouldRenderInviteResult) {
    const obj8 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl3 = tmp(1113).intl;
    obj8.label = intl3.string(tmp(1113).t.VINpSK);
    obj8.icon = tmp3(11167);
    obj8.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_2();
    };
    shouldRenderInviteResult = closure_12(tmp(8173).IconButton, obj8);
  }
  items2[1] = shouldRenderInviteResult;
  const obj9 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
  const intl4 = tmp(1113).intl;
  obj9.label = intl4.string(guild(1113).t.HcoRu0);
  obj9.icon = stateFromStores(8545);
  obj9.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  items2[2] = closure_12(guild(8173).IconButton, obj9);
  if (canAccessSettings) {
    const obj10 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl5 = tmp(1113).intl;
    obj10.label = intl5.string(tmp(1113).t["3D5yo/"]);
    obj10.icon = tmp3(7704);
    obj10.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsActionCreatorsDefault.open(guild.id);
    };
    canAccessSettings = closure_12(tmp(8173).IconButton, obj10);
  }
  items2[3] = canAccessSettings;
  obj4.children = items2;
  return closure_13(guild(6905).ButtonGroup, obj4);
};