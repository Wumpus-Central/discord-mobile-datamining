// === Module 9858: getXboxURIForChannel ===

// Module 9858 (getXboxURIForChannel)
import sendRequest from "sendRequest" /* 530 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import computeChannelName from "computeChannelName" /* 4984 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import XBOX_URL_BASE from "XBOX_URL_BASE" /* 9763 */;
import ME from "ME" /* 676 */;

require = fn;
({ XBOX_HANDOFF_SEARCH_PARAMS: closure_6, XBOX_URL_BASE: error } = XBOX_URL_BASE);
({ Endpoints: closure_8, ZERO_STRING_GUILD_ID: c9 } = ME);
const result = require("obj132").fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(channelId) {
  ({ nonce, forQRCode } = arg1);
  const guildId = channelId.getGuildId();
  guild = guild.getGuild(guildId);
  let tmp4 = guildId;
  if (guildId == null) {
    tmp4 = closure_9;
  }
  const obj = { guildId: tmp4, channelId: channelId.id, channelName: computeChannelName.computeChannelName(channelId, closure_5, closure_4), guildName: null, muted: null, deafened: null, nonce: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = getSystemLocale.intl;
    name = intl.string(getSystemLocale.t.LJpTRF);
  }
  obj[3] = name;
  obj[4] = closure_3.isSelfMute();
  obj[5] = closure_3.isSelfDeaf();
  obj[6] = nonce;
  const str = callback(obj);
  if (forQRCode) {
    const aPIBaseURL = sendRequest.getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    let combined = "" + aPIBaseURL + constants.XBOX_HANDOFF + "?" + str.toString();
    const tmp5Result = sendRequest;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_7 + "?" + str.toString();
  }
  return combined;
};