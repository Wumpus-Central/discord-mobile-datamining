// discord_app/modules/chat_input/native/guard/ChatInputGuardLurking.tsx
import importAllResult from "noop";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import { TextAreaCta } from "TextAreaCta";
import ME from "ME";
import { jsx } from "jsxProd";

let c9;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ AnalyticEvents: metroImportAll, JoinGuildSources: c9 } = ME);
const memoResult = importAllResult.memo(function ChatInputGuardLurking(channel) {
  let isLurking;
  let lurkingSource;
  channel = channel.channel;
  let guildId;
  guildId = channel.getGuildId();
  let obj = channel(589);
  const items = [initialize];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let isLurkingResult = null != guildId;
    if (isLurkingResult) {
      isLurkingResult = outer1_5.isLurking(tmp);
    }
    return { isLurking: isLurkingResult, lurkingSource: outer1_5.getLurkingSourceForGuild(guildId) };
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
      let obj = guildId(outer1_3[8]);
      obj = { cta_type: null };
      obj[0] = outer1_7.FOLLOW_ANNOUNCEMENT;
      obj.trackWithMetadata(outer1_8.TEXT_AREA_CTA_CLICKED, obj);
      const result = channel(outer1_3[9]).showChannelFollowingActionSheet(channel.id, tmp);
      const obj3 = channel(outer1_3[9]);
    }
  }, items2);
  const callback2 = importAllResult.useCallback(() => {
    if (null != guildId) {
      const lurkingSourceForGuild = outer1_5.getLurkingSourceForGuild(tmp);
      let type;
      if (lurkingSourceForGuild != null) {
        type = lurkingSourceForGuild.type;
      }
      if (type === outer1_9.DIRECTORY_ENTRY) {
        const channel = outer1_6.getChannel(lurkingSourceForGuild.directoryChannelId);
        if (null != channel) {
          guildId = channel.getGuildId();
          const result = channel(outer1_3[10]).setHubProgressActionComplete(guildId, channel(outer1_3[11]).HubProgressStep.JOIN_GUILD);
          const obj2 = channel(outer1_3[10]);
        }
      }
      const result1 = outer1_2(outer1_3[12]).trackGuildJoinClicked(tmp);
      const obj3 = outer1_2(outer1_3[12]);
      const tmp3 = outer1_9;
      let obj = { cta_type: null };
      obj[0] = outer1_7.JOIN_GUILD;
      guildId(outer1_3[8]).trackWithMetadata(outer1_8.TEXT_AREA_CTA_CLICKED, obj);
      const obj4 = guildId(outer1_3[8]);
      obj = { source: null };
      obj[0] = tmp3.CHAT_INPUT_BLOCKER;
      guildId(outer1_3[13]).joinGuild(tmp, obj);
      const obj6 = guildId(outer1_3[13]);
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
    let tmp15Result = jsx(guildId(11869), { type: "button-action", message: null, buttonSecondaryText: null, buttonSecondaryOnPress: null, buttonPrimaryText: null, buttonPrimaryOnPress: null });
    const tmp14 = guildId(11869);
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
      let obj1 = obj;
    } else {
      obj1 = { type: "button-action", message: null, buttonPrimaryText: null, buttonPrimaryOnPress: null };
      const intl = tmp2(1236).intl;
      obj1[1] = intl.string(tmp2(1236).t.G42YmG);
      const intl2 = tmp2(1236).intl;
      obj1[2] = intl2.string(tmp2(1236).t.RLch70);
      obj1[3] = callback2;
    }
    tmp15Result = jsx(guildId(11869), obj1);
    const tmp15 = jsx;
    const tmp17 = guildId(11869);
  }
  return tmp15Result;
});
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardLurking.tsx");

export default memoResult;