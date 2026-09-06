// discord_app/modules/game_console/getXboxURIForChannel.tsx
import util from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const GameConsoleConstants = fn(9233);
({ XBOX_HANDOFF_SEARCH_PARAMS: metroRequire, XBOX_URL_BASE: closure_7 } = GameConsoleConstants);
const Constants = fn(1074);
({ Endpoints: closure_8, ZERO_STRING_GUILD_ID: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(channelId, arg1) {
  ({ nonce, forQRCode } = arg1);
  const guildId = channelId.getGuildId();
  const guild = GuildStore.getGuild(guildId);
  let tmp4 = guildId;
  if (guildId == null) {
    tmp4 = React7;
  }
  const obj = {
    guildId: tmp4,
    channelId: channelId.id,
    channelName: useChannelName.computeChannelName(channelId, UserStore, RelationshipStore),
    guildName: null,
    muted: null,
    deafened: null,
    nonce: null,
  };
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
    combined = "" + React5 + "?" + str.toString();
  }
  return combined;
}
