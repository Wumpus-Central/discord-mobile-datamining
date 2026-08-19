// discord_app/modules/chat_input/native/guard/ChatInputGuardLurking.tsx
import _startLurkingAll from "../../../../utils/GuildDiscoveryUtils.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../lurker_mode/LurkingStore.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import { TextAreaCta } from "../ChatInputConstants.tsx";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let c4 = importAllResult;
({ AnalyticEvents: closure_8, JoinGuildSources: c9 } = ME);
const memoResult = importAllResult.memo(function ChatInputGuardLurking(channel) {
  channel = channel.channel;
  let guildId = channel.getGuildId();
  let obj = channel(589);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = closure_1_5.isLurking(guildId);
    }
    return { isLurking: isLurkingResult, lurkingSource: closure_1_5.getLurkingSourceForGuild(guildId) };
  }, items1);
  ({ isLurking, lurkingSource } = stateFromStoresObject);
  const items2 = [guildId, channel.id];
  const callback = importAllResult.useCallback(() => {
    const history = channel(table[7]).getHistory();
    history.goBack();
  }, []);
  const items3 = [guildId];
  const callback1 = importAllResult.useCallback(() => {
    if (null != guildId) {
      guildId(dependencyMap[8]);
      const obj = { cta_type: null };
      obj[0] = TextAreaCta.FOLLOW_ANNOUNCEMENT;
      obj.trackWithMetadata(closure_1_8.TEXT_AREA_CTA_CLICKED, obj);
      const result = channel(dependencyMap[9]).showChannelFollowingActionSheet(channel.id, tmp);
      const obj3 = channel(dependencyMap[9]);
    }
  }, items2);
  const callback2 = importAllResult.useCallback(() => {
    if (null != guildId) {
      const lurkingSourceForGuild = closure_1_5.getLurkingSourceForGuild(tmp);
      let type;
      if (lurkingSourceForGuild != null) {
        type = lurkingSourceForGuild.type;
      }
      if (type === closure_1_9.DIRECTORY_ENTRY) {
        channel = closure_1_6.getChannel(lurkingSourceForGuild.directoryChannelId);
        if (null != channel) {
          guildId = channel.getGuildId();
          const result = channel(dependencyMap[10]).setHubProgressActionComplete(guildId, channel(dependencyMap[11]).HubProgressStep.JOIN_GUILD);
          const obj2 = channel(dependencyMap[10]);
        }
      }
      const result1 = _startLurkingAll.trackGuildJoinClicked(tmp);
      let obj = { cta_type: null };
      obj[0] = TextAreaCta.JOIN_GUILD;
      guildId(dependencyMap[8]).trackWithMetadata(closure_1_8.TEXT_AREA_CTA_CLICKED, obj);
      const obj4 = guildId(dependencyMap[8]);
      obj = { source: null };
      obj[0] = closure_1_9.CHAT_INPUT_BLOCKER;
      guildId(dependencyMap[13]).joinGuild(tmp, obj);
      const obj6 = guildId(dependencyMap[13]);
    }
  }, items3);
  let type;
  if (lurkingSource != null) {
    type = lurkingSource.type;
  }
  if (type === constants.DIRECTORY_ENTRY) {
    obj = { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
    const intl6 = tmp2(1236).intl;
    obj[1] = intl6.string(tmp2(1236).t.G42YmG);
    const intl7 = tmp2(1236).intl;
    obj[2] = intl7.string(tmp2(1236).t.GlKb5i);
    obj[3] = callback;
    const intl8 = tmp2(1236).intl;
    obj[4] = intl8.string(tmp2(1236).t.RLch70);
    obj[5] = callback2;
    let tmp15Result = jsx(guildId(11616), { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
    const tmp14 = guildId(11616);
  } else {
    if (channel.isReadonlyAnnouncementsChannel) {
      obj = { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl3 = tmp2(1236).intl;
      obj[1] = intl3.string(tmp2(1236).t.Hl0Mqh);
      let stringResult;
      if (isLurking) {
        const intl4 = tmp2(1236).intl;
        stringResult = intl4.string(tmp2(1236).t.VJlc0S);
      }
      obj[2] = stringResult;
      let tmp10;
      if (isLurking) {
        tmp10 = callback2;
      }
      obj[3] = tmp10;
      const intl5 = tmp2(1236).intl;
      obj[4] = intl5.string(tmp2(1236).t["3aOv+h"]);
      obj[5] = callback1;
      obj1 = obj;
    } else {
      obj1 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl = tmp2(1236).intl;
      obj1[1] = intl.string(tmp2(1236).t.G42YmG);
      const intl2 = tmp2(1236).intl;
      obj1[2] = intl2.string(tmp2(1236).t.RLch70);
      obj1[3] = callback2;
    }
    tmp15Result = jsx(guildId(11616), obj1);
    const tmp17 = guildId(11616);
  }
  return tmp15Result;
});
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default memoResult;