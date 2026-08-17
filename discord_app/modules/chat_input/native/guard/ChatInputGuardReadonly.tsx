// discord_app/modules/chat_input/native/guard/ChatInputGuardReadonly.tsx
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import { isTextChannel } from "createChannelRecord" /* 1395 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "comparator" /* 1980 */;
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_6 } from "comparator" /* 1980 */;
import closure_7 from "getUncachedChannelPermissions" /* 4021 */;
import closure_8 from "generateOldThreadCutoff" /* 4772 */;
import closure_9 from "markAllUserIdListsStale" /* 4030 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import { TextAreaCta } from "TextAreaCta" /* 11149 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
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
    const mapped = closure_1_5.getChannels(guildId)[closure_1_6].map((channel) => channel.channel);
    return mapped.sort(closure_1_15);
  });
  const items2 = [closure_7];
  const items3 = [stateFromStoresArray];
  stateFromStoresArray1 = guildId(stateFromStores[12]).useStateFromStoresArray(items2, () => {
    const found = stateFromStoresArray.filter(guildId(stateFromStores[13]).isNotNullish);
    const found1 = found.filter((type) => callback(type.type));
    return found1.filter((arg0) => closure_7.can(constants.SEND_MESSAGES, arg0));
  }, items3);
  if (null != stateFromStores) {
    obj = { text: null, handlePress: null };
    const intl2 = tmp(tmp2[14]).intl;
    obj = { channelName: null };
    obj[0] = tmp(tmp2[15]).computeChannelName(stateFromStores, closure_10, closure_9);
    obj[0] = intl2.formatToPlainString(tmp(tmp2[14]).t.q1krfU, obj);
    obj[1] = function handlePress() {
      let obj = lib(stateFromStores[16]);
      obj = { cta_type: closure_1_11.CHANNEL_LINK };
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
      let obj = lib(stateFromStores[16]);
      obj = { cta_type: closure_1_11.CHANNEL_LIST };
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
      let obj = lib(stateFromStores[16]);
      obj = { cta_type: closure_1_11.CHANNEL_LINK };
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
const result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReadonly.tsx");

export default memoResult;