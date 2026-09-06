// discord_app/modules/chat_input/native/guard/ChatInputGuardLurking.tsx
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import GuildDiscoveryUtilsAll from "../../../../utils/GuildDiscoveryUtils.tsx";
import HubProgressActionCreators from "../../../hub/HubProgressActionCreators.tsx";
import showChannelFollowingActionSheet from "../../../channel_following/native/showChannelFollowingActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import LurkingStore from "../../../lurker_mode/LurkingStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const TextAreaCta = fn(11962).TextAreaCta;
const Constants = fn(1074);
({ AnalyticEvents: closure_8, JoinGuildSources: closure_9 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default noop.memo(function ChatInputGuardLurking(channel) {
  channel = channel.channel;
  let guildId = channel.getGuildId();
  let obj = channel(504);
  const items = [LurkingStore];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items,
    () => {
      let isLurkingResult = null != guildId;
      if (isLurkingResult) {
        isLurkingResult = LurkingStore.isLurking(guildId);
      }
      return { isLurking: isLurkingResult, lurkingSource: LurkingStore.getLurkingSourceForGuild(guildId) };
    },
    items1,
  );
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  const items2 = [guildId, channel.id];
  const callback = noop.useCallback(() => {
    const history = channel(dependencyMap[7]).getHistory();
    history.goBack();
  }, []);
  const items3 = [guildId];
  const callback1 = noop.useCallback(() => {
    if (null != guildId) {
      const obj = { cta_type: TextAreaCta.FOLLOW_ANNOUNCEMENT };
      obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj);
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
          const result = HubProgressActionCreators.setHubProgressActionComplete(
            guildId,
            preloaded_user_settings.HubProgressStep.JOIN_GUILD,
          );
        }
      }
      const result1 = GuildDiscoveryUtilsAll.trackGuildJoinClicked(tmp);
      let obj = { cta_type: TextAreaCta.JOIN_GUILD };
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj);
      obj = { source: constants2.CHAT_INPUT_BLOCKER };
      GuildActionCreatorsDefault.joinGuild(tmp, obj);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants2.DIRECTORY_ENTRY) {
    obj = {
      type: "button-action",
      message: null,
      buttonSecondaryText: null,
      buttonSecondaryOnPress: null,
      buttonPrimaryText: null,
      buttonPrimaryOnPress: null,
    };
    const intl6 = tmp2(1114).intl;
    obj.message = intl6.string(tmp2(1114).t.G42YmG);
    const intl7 = tmp2(1114).intl;
    obj.buttonSecondaryText = intl7.string(tmp2(1114).t.GlKb5i);
    obj.buttonSecondaryOnPress = callback;
    const intl8 = tmp2(1114).intl;
    obj.buttonPrimaryText = intl8.string(tmp2(1114).t.RLch70);
    obj.buttonPrimaryOnPress = callback2;
    let tmp15Result = jsx(guildId(12448), {
      type: "button-action",
      message: null,
      buttonSecondaryText: null,
      buttonSecondaryOnPress: null,
      buttonPrimaryText: null,
      buttonPrimaryOnPress: null,
    });
    const tmp14 = guildId(12448);
  } else {
    if (channel.isReadonlyAnnouncementsChannel) {
      obj = {
        type: "button-action",
        message: null,
        buttonSecondaryText: null,
        buttonSecondaryOnPress: null,
        buttonPrimaryText: null,
        buttonPrimaryOnPress: null,
      };
      const intl3 = tmp2(1114).intl;
      obj.message = intl3.string(tmp2(1114).t.Hl0Mqh);
      let stringResult;
      if (isLurking) {
        const intl4 = tmp2(1114).intl;
        stringResult = intl4.string(tmp2(1114).t.VJlc0S);
      }
      obj.buttonSecondaryText = stringResult;
      let tmp10;
      if (isLurking) {
        tmp10 = callback2;
      }
      obj.buttonSecondaryOnPress = tmp10;
      const intl5 = tmp2(1114).intl;
      obj.buttonPrimaryText = intl5.string(tmp2(1114).t["3aOv+h"]);
      obj.buttonPrimaryOnPress = callback1;
      let obj1 = obj;
    } else {
      obj1 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl = tmp2(1114).intl;
      obj1.message = intl.string(tmp2(1114).t.G42YmG);
      const intl2 = tmp2(1114).intl;
      obj1.buttonPrimaryText = intl2.string(tmp2(1114).t.RLch70);
      obj1.buttonPrimaryOnPress = callback2;
    }
    tmp15Result = jsx(guildId(12448), obj1);
    const tmp17 = guildId(12448);
  }
  return tmp15Result;
});
