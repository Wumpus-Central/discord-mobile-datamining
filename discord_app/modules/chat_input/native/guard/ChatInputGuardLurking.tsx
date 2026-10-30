// === Module 13978: ChatInputGuardLurking ===

// Module 13978 (ChatInputGuardLurking)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6896 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6900 */;
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 7515 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9111 */;
import showChannelFollowingActionSheet from "showChannelFollowingActionSheet" /* 11176 */;
import noop from "module_19" /* 19 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import ChannelStore from "ChannelStore" /* 4858 */;

require = fn;
const TextAreaCta = fn(12771).TextAreaCta;
const Constants = fn(1072);
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
      GuildActionCreatorsDefault.joinGuild(tmp, obj5).catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
      const joinGuildResult = GuildActionCreatorsDefault.joinGuild(tmp, obj5);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants2.DIRECTORY_ENTRY) {
    let obj2 = { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
    const intl9 = tmp2(1114).intl;
    obj2.message = intl9.string(tmp2(1114).t.G42YmG);
    const intl10 = tmp2(1114).intl;
    obj2.buttonSecondaryText = intl10.string(tmp2(1114).t.GlKb5i);
    obj2.buttonSecondaryOnPress = callback;
    const intl11 = tmp2(1114).intl;
    obj2.buttonPrimaryText = intl11.string(tmp2(1114).t.RLch70);
    obj2.buttonPrimaryOnPress = callback2;
    let tmp15Result = jsx(guildId(13971), { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
    const tmp14 = guildId(13971);
  } else {
    if (null != pendingGameProfileReturn) {
      let obj3 = { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonSecondaryLoading: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl6 = tmp2(1114).intl;
      obj3.message = intl6.string(tmp2(1114).t.G42YmG);
      const intl7 = tmp2(1114).intl;
      obj3.buttonSecondaryText = intl7.string(tmp2(1114).t.DjifDP);
      ({ onReturnToGameProfile: obj4.buttonSecondaryOnPress, isReturning: obj4.buttonSecondaryLoading } = pendingGameProfileReturn);
      const intl8 = tmp2(1114).intl;
      obj3.buttonPrimaryText = intl8.string(tmp2(1114).t.RLch70);
      obj3.buttonPrimaryOnPress = callback2;
      let obj9 = obj3;
    } else if (channel.isReadonlyAnnouncementsChannel) {
      let obj5 = { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl3 = tmp2(1114).intl;
      obj5.message = intl3.string(tmp2(1114).t.Hl0Mqh);
      let stringResult;
      if (isLurking) {
        const intl4 = tmp2(1114).intl;
        stringResult = intl4.string(tmp2(1114).t.VJlc0S);
      }
      obj5.buttonSecondaryText = stringResult;
      let tmp10;
      if (isLurking) {
        tmp10 = callback2;
      }
      obj5.buttonSecondaryOnPress = tmp10;
      const intl5 = tmp2(1114).intl;
      obj5.buttonPrimaryText = intl5.string(tmp2(1114).t["3aOv+h"]);
      obj5.buttonPrimaryOnPress = callback1;
      obj9 = obj5;
    } else {
      obj9 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl = tmp2(1114).intl;
      obj9.message = intl.string(tmp2(1114).t.G42YmG);
      const intl2 = tmp2(1114).intl;
      obj9.buttonPrimaryText = intl2.string(tmp2(1114).t.RLch70);
      obj9.buttonPrimaryOnPress = callback2;
    }
    tmp15Result = jsx(guildId(13971), obj9);
    const tmp17 = guildId(13971);
  }
  return tmp15Result;
});