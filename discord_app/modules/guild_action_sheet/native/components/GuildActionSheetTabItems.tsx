// === Module 13973: GuildActionSheetTabItems ===

// Module 13973 (GuildActionSheetTabItems)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5434 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7119 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9823 */;
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
  let obj = guild(13961);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(4469)(guild.id).total;
  let obj1 = guild(504);
  const items = [GuildChannelStore];
  stateFromStores = obj1.useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
  let obj2 = guild(9823);
  let shouldRenderInviteResult = obj2.shouldRenderInvite(stateFromStores, guild);
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
  obj = { direction: "horizontal", style: { flexWrap: "wrap" }, children: null };
  if (total > 0) {
    const intl2 = tmp(1114).intl;
    obj = { subscriptions: total };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t["pob/cL"], obj);
  } else {
    const intl = tmp(1114).intl;
    formatToPlainStringResult = intl.string(tmp(1114).t.Uj0md3);
  }
  obj1 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
  obj2 = { color: tmp3(576).unsafe_rawColors.GUILD_BOOSTING_PINK };
  obj1.icon = closure_12(guild(9375).BoostGemIcon, obj2);
  obj1.onPress = function onPress() {
    let obj = { location: null };
    obj = { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON };
    obj.location = obj;
    obj.trackWithMetadata(constants.PREMIUM_GUILD_PROMOTION_OPENED, obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    actions_BoostingActionCreatorsAll.openApplyBoostModal(guild.id);
  };
  const items2 = [closure_12(guild(8097).IconButton, obj1), , , ];
  if (shouldRenderInviteResult) {
    const obj3 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl3 = tmp(1114).intl;
    obj3.label = intl3.string(tmp(1114).t.VINpSK);
    obj3.icon = tmp3(10031);
    obj3.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_2();
    };
    shouldRenderInviteResult = closure_12(tmp(8097).IconButton, obj3);
  }
  items2[1] = shouldRenderInviteResult;
  let obj4 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
  const intl4 = tmp(1114).intl;
  obj4.label = intl4.string(guild(1114).t.HcoRu0);
  obj4.icon = stateFromStores(7949);
  obj4.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
  };
  items2[2] = closure_12(guild(8097).IconButton, obj4);
  if (canAccessSettings) {
    const obj5 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl5 = tmp(1114).intl;
    obj5.label = intl5.string(tmp(1114).t["3D5yo/"]);
    obj5.icon = tmp3(7381);
    obj5.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsActionCreatorsDefault.open(guild.id);
    };
    canAccessSettings = closure_12(tmp(8097).IconButton, obj5);
  }
  items2[3] = canAccessSettings;
  obj.children = items2;
  return closure_13(guild(5433).ButtonGroup, obj);
};