// === Module 12707: ChatInputGuardLurking ===

// Module 12707 (ChatInputGuardLurking)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4936 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5732 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 7581 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 10085 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 11586 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 4396 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
const TextAreaCta = fn(12213).TextAreaCta;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, JoinGuildSources: closure_9 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default noop.memo(function ChatInputGuardLurking(channel) {
  channel = channel.channel;
  let guildId = channel.getGuildId();
  const items = [LurkingStore];
  const items1 = [guildId];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(guildId);
    }
    return { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(guildId) };
  }, items1);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  const items2 = [guildId, channel.id];
  const callback = noop.useCallback(() => {
    const history = channel(dependencyMap[7]).getHistory();
    history.goBack();
  }, []);
  const items3 = [guildId];
  const callback1 = noop.useCallback(() => {
    if (null != guildId) {
      const obj2 = { cta_type: TextAreaCta.FOLLOW_ANNOUNCEMENT };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj2);
      const result = showChannelFollowingActionSheet.showChannelFollowingActionSheet(channel.id, tmp);
    }
  }, items2);
  const callback2 = noop.useCallback(() => {
    if (null != guildId) {
      const lurkingSourceForGuild = LurkingStore.getLurkingSourceForGuild(tmp);
      let type;
      if (lurkingSourceForGuild != null) {
        type = lurkingSourceForGuild.type;
      }
      if (type === constants2.DIRECTORY_ENTRY) {
        channel = ChannelStore.getChannel(lurkingSourceForGuild.directoryChannelId);
        if (null != channel) {
          guildId = channel.getGuildId();
          const result = HubProgressActionCreators.setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.JOIN_GUILD);
        }
      }
      const result1 = GuildDiscoveryUtilsAll.trackGuildJoinClicked(tmp);
      const obj = { cta_type: TextAreaCta.JOIN_GUILD };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj);
      const obj5 = { source: constants2.CHAT_INPUT_BLOCKER };
      GuildActionCreatorsDefault.joinGuild(tmp, obj5);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants2.DIRECTORY_ENTRY) {
    let obj2 = { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
    const intl6 = tmp2(1115).intl;
    obj2.message = intl6.string(tmp2(1115).t.G42YmG);
    const intl7 = tmp2(1115).intl;
    obj2.buttonSecondaryText = intl7.string(tmp2(1115).t.GlKb5i);
    obj2.buttonSecondaryOnPress = callback;
    const intl8 = tmp2(1115).intl;
    obj2.buttonPrimaryText = intl8.string(tmp2(1115).t.RLch70);
    obj2.buttonPrimaryOnPress = callback2;
    let tmp15Result = jsx(guildId(12700), { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
    const tmp14 = guildId(12700);
  } else {
    if (channel.isReadonlyAnnouncementsChannel) {
      let obj3 = { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl3 = tmp2(1115).intl;
      obj3.message = intl3.string(tmp2(1115).t.Hl0Mqh);
      let stringResult;
      if (isLurking) {
        const intl4 = tmp2(1115).intl;
        stringResult = intl4.string(tmp2(1115).t.VJlc0S);
      }
      obj3.buttonSecondaryText = stringResult;
      let tmp10;
      if (isLurking) {
        tmp10 = callback2;
      }
      obj3.buttonSecondaryOnPress = tmp10;
      const intl5 = tmp2(1115).intl;
      obj3.buttonPrimaryText = intl5.string(tmp2(1115).t["3aOv+h"]);
      obj3.buttonPrimaryOnPress = callback1;
      let obj4 = obj3;
    } else {
      obj4 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl = tmp2(1115).intl;
      obj4.message = intl.string(tmp2(1115).t.G42YmG);
      const intl2 = tmp2(1115).intl;
      obj4.buttonPrimaryText = intl2.string(tmp2(1115).t.RLch70);
      obj4.buttonPrimaryOnPress = callback2;
    }
    tmp15Result = jsx(guildId(12700), obj4);
    const tmp17 = guildId(12700);
  }
  return tmp15Result;
});