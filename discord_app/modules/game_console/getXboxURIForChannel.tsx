// === Module 11032: getXboxURIForChannel ===

// Module 11032 (getXboxURIForChannel)
import util from "util" /* 1112 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import useChannelName from "useChannelName" /* 5529 */;
import GuildStore from "GuildStore" /* 4784 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const GameConsoleConstants = fn(7073);
({ XBOX_HANDOFF_SEARCH_PARAMS: closure_6, XBOX_URL_BASE: metroImportDefault } = GameConsoleConstants);
const Constants = fn(1071);
({ Endpoints: closure_8, ZERO_STRING_GUILD_ID: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(channelId, arg1) {
  ({ nonce, forQRCode } = arg1);
  const guildId = channelId.getGuildId();
  guild = GuildStore.getGuild(guildId);
  let tmp4 = guildId;
  if (guildId == null) {
    tmp4 = React6;
  }
  const obj = { guildId: tmp4, channelId: channelId.id, channelName: useChannelName.computeChannelName(channelId, UserStore, RelationshipStore), guildName: null, muted: null, deafened: null, nonce: null };
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = util.intl;
    name = intl.string(util.t.LJpTRF);
  }
  obj.guildName = name;
  obj.muted = MediaEngineStore.isSelfMute();
  obj.deafened = MediaEngineStore.isSelfDeaf();
  obj.nonce = nonce;
  const str = timestampProducer(obj);
  if (forQRCode) {
    const aPIBaseURL = HTTPUtils.getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    let combined = "" + aPIBaseURL + constants.XBOX_HANDOFF + "?" + str.toString();
    const tmp5Result = HTTPUtils;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + metroImportDefault + "?" + str.toString();
  }
  return combined;
};