// === Module 11635: sortChannelsByLastMessageId ===

// Module 11635 (sortChannelsByLastMessageId)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import { isTextChannel } from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_6 } from "comparator" /* 1980 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { TextAreaCta } from "TextAreaCta" /* 11149 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
function sortChannelsByLastMessageId(id, id2) {
  const obj = DISCORD_EPOCHDefault;
  return obj.compare(closure_8.lastMessageId(id2.id), closure_8.lastMessageId(id.id));
}
({ AnalyticEvents: closure_12, Permissions: map1 } = ME);
const memoResult = importAllResult.memo(function ChatInputGuardReadonly(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let obj = guildId(stateFromStores[11]);
  const channelAction = obj.useMemberActionsForChannel(guildId, guildId.channel).channelAction;
  obj1 = guildId(stateFromStores[11]);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  importDefault = obj1.useNextMemberAction(guildId, channelId);
  let tmpResult = tmp(tmp2[12]);
  const items = [stateFromStoresArray1];
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    let channelId;
    if (lib != null) {
      channelId = lib.channelId;
    }
    return stateFromStoresArray1.getChannel(channelId);
  });
  tmpResult = tmp(tmp2[12]);
  const items1 = [closure_5];
  stateFromStoresArray = tmpResult.useStateFromStoresArray(items1, () => {
    const mapped = closure_1_5.getChannels(guildId)[closure_1_6].map((item, index) => item.channel);
    return mapped.sort(sortChannelsByLastMessageId);
  });
  const items2 = [closure_7];
  const items3 = [stateFromStoresArray];
  stateFromStoresArray1 = guildId(stateFromStores[12]).useStateFromStoresArray(items2, () => {
    const found = stateFromStoresArray.filter(guildId(stateFromStores[13]).isNotNullish);
    const found1 = found.filter((item, index) => callback(item.type));
    return found1.filter((item, index) => closure_7.can(constants.SEND_MESSAGES, item));
  }, items3);
  if (null != stateFromStores) {
    const intl2 = tmp(tmp2[14]).intl;
    obj = { channelName: null };
    obj[0] = tmp(tmp2[15]).computeChannelName(stateFromStores, closure_10, closure_9);
    obj[0] = intl2.formatToPlainString(tmp(tmp2[14]).t.q1krfU, obj);
    obj[1] = function handlePress() {
      lib(stateFromStores[16]);
      const obj = { cta_type: TextAreaCta.CHANNEL_LINK };
      obj.trackWithMetadata(closure_1_12.TEXT_AREA_CTA_CLICKED, obj);
      guildId(stateFromStores[17]).transitionToGuild(guildId, stateFromStores.id);
    };
    let obj2 = obj;
    const tmpResult2 = tmp(tmp2[15]);
  } else if (0 === stateFromStoresArray1.length) {
    obj1 = { text: null, handlePress: null };
    const intl = tmp(tmp2[14]).intl;
    obj1[0] = intl.string(tmp(tmp2[14]).t["gHD/nZ"]);
    obj1[1] = function handlePress() {
      lib(stateFromStores[16]);
      const obj = { cta_type: TextAreaCta.CHANNEL_LIST };
      obj.trackWithMetadata(closure_1_12.TEXT_AREA_CTA_CLICKED, obj);
      guildId(stateFromStores[17]).transitionToGuild(guildId, undefined);
    };
    obj2 = obj1;
  } else {
    const intl4 = tmp(tmp2[14]).intl;
    let str = "";
    if (null != stateFromStoresArray1[0]) {
      str = tmp(tmp2[15]).computeChannelName(stateFromStoresArray1[0], closure_10, closure_9);
      const tmpResult3 = tmp(tmp2[15]);
    }
    obj2 = { text: null, handlePress: null };
    const obj3 = { channelName: null };
    obj3[0] = str;
    obj2[0] = intl4.formatToPlainString(tmp(tmp2[14]).t.q1krfU, obj3);
    obj2[1] = function handlePress() {
      lib(stateFromStores[16]);
      const obj = { cta_type: TextAreaCta.CHANNEL_LINK };
      obj.trackWithMetadata(closure_1_12.TEXT_AREA_CTA_CLICKED, obj);
      guildId(stateFromStores[17]).transitionToGuild(guildId, stateFromStoresArray1[0].id);
    };
  }
  ({ text, handlePress } = obj2);
  const obj4 = { type: "simple-action", actionOnPress: handlePress, actionLabel: null, message: null };
  const tmpResult1 = guildId(stateFromStores[12]);
  const intl3 = tmp(tmp2[14]).intl;
  obj4[2] = intl3.string(guildId(stateFromStores[14]).t["9cs5LM"]);
  obj4[3] = text;
  return jsx(importDefault(stateFromStores[19]), { type: "simple-action", actionOnPress: handlePress, actionLabel: null, message: null });
});
const result = require("obj132").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReadonly.tsx");

export default memoResult;