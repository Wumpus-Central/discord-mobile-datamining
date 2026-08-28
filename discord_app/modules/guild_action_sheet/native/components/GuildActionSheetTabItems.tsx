// === Module 13645: GuildActionSheetTabItems ===

// Module 13645 (GuildActionSheetTabItems)
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "comparator" /* 1983 */;
import closure_7 from "handleConnectionOpen" /* 1982 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ AnalyticEvents: closure_8, AnalyticsObjects: c9, AnalyticsSections: c10, InstantInviteSources: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  guild = guild.guild;
  let stateFromStores;
  closure_2 = undefined;
  let obj = guild(13633);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(4352)(guild.id).total;
  obj1 = guild(589);
  const items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_6.getChannels(guild.id));
  let obj2 = guild(9850);
  let shouldRenderInviteResult = obj2.shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  closure_2 = React.useCallback(() => {
    const channelId = closure_1_7.getChannelId(guild.id);
    let channel = closure_1_5.getChannel(guild(closure_1_3[9]).getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = closure_1_6.getDefaultChannel(tmp.id);
    }
    if (null != channel) {
      const tmp3Result = guild(closure_1_3[10]);
      const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, closure_1_11.SERVER_PROFILE);
    }
  }, items1);
  obj = { direction: "horizontal", style: { flexWrap: "wrap" }, children: null };
  if (total > 0) {
    const intl2 = tmp(1236).intl;
    obj = { subscriptions: null };
    obj[0] = total;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t["pob/cL"], obj);
  } else {
    const intl = tmp(1236).intl;
    formatToPlainStringResult = intl.string(tmp(1236).t.Uj0md3);
  }
  obj1 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
  obj2 = { color: tmp3(712).unsafe_rawColors.GUILD_BOOSTING_PINK };
  obj1[2] = closure_12(guild(8180).BoostGemIcon, obj2);
  obj1[4] = function onPress() {
    let obj = stateFromStores(closure_1_3[16]);
    obj = { section: closure_1_10.GUILD_POPOUT, object: closure_1_9.BOOST_GEM_ICON };
    obj.trackWithMetadata(closure_1_8.PREMIUM_GUILD_PROMOTION_OPENED, { location: obj });
    stateFromStores(closure_1_3[17]).hideActionSheet();
    const obj3 = stateFromStores(closure_1_3[17]);
    callback(closure_1_3[18]).openApplyBoostModal(guild.id);
  };
  const items2 = [closure_12(guild(7952).IconButton, obj1), , , ];
  if (shouldRenderInviteResult) {
    let obj3 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl3 = tmp(1236).intl;
    obj3[1] = intl3.string(tmp(1236).t.VINpSK);
    obj3[2] = tmp3(10052);
    obj3[4] = function onPress() {
      stateFromStores(closure_1_3[17]).hideActionSheet();
      callback();
    };
    shouldRenderInviteResult = tmp7(tmp(7952).IconButton, obj3);
  }
  items2[1] = shouldRenderInviteResult;
  const obj4 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
  const intl4 = tmp(1236).intl;
  obj4[1] = intl4.string(guild(1236).t.HcoRu0);
  obj4[2] = stateFromStores(7805);
  obj4[4] = function onPress() {
    stateFromStores(closure_1_3[17]).hideActionSheet();
    const obj = stateFromStores(closure_1_3[17]);
    stateFromStores(closure_1_3[21]).open(guild.id);
  };
  items2[2] = closure_12(guild(7952).IconButton, obj4);
  if (canAccessSettings) {
    const obj5 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl5 = tmp(1236).intl;
    obj5[1] = intl5.string(tmp(1236).t["3D5yo/"]);
    obj5[2] = tmp3(6206);
    obj5[4] = function onPress() {
      stateFromStores(closure_1_3[17]).hideActionSheet();
      const obj = stateFromStores(closure_1_3[17]);
      stateFromStores(closure_1_3[23]).open(guild.id);
    };
    canAccessSettings = tmp7(tmp(7952).IconButton, obj5);
  }
  items2[3] = canAccessSettings;
  obj[2] = items2;
  return closure_13(guild(5341).ButtonGroup, obj);
};