// === Module 9916: getXboxURIForChannel ===

// Module 9916 (getXboxURIForChannel)
import computeChannelName from "computeChannelName" /* 4674 */;
import closure_2 from "createGuildRecordFromRust" /* 1908 */;
import closure_3 from "_detectH265HardwareDecode" /* 4529 */;
import closure_4 from "markAllUserIdListsStale" /* 4130 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;
import XBOX_URL_BASE from "XBOX_URL_BASE" /* 9330 */;
import ME from "ME" /* 673 */;

require = arg1;
({ XBOX_HANDOFF_SEARCH_PARAMS: closure_6, XBOX_URL_BASE: error } = XBOX_URL_BASE);
({ Endpoints: closure_8, ZERO_STRING_GUILD_ID: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

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
    const intl = tmp5(1233).intl;
    name = intl.string(tmp5(1233).t.LJpTRF);
  }
  obj[3] = name;
  obj[4] = closure_3.isSelfMute();
  obj[5] = closure_3.isSelfDeaf();
  obj[6] = nonce;
  const str = closure_6(obj);
  if (forQRCode) {
    const aPIBaseURL = tmp5(527).getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    let combined = "" + aPIBaseURL + constants.XBOX_HANDOFF + "?" + str.toString();
    const tmp5Result = tmp5(527);
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_7 + "?" + str.toString();
  }
  return combined;
};