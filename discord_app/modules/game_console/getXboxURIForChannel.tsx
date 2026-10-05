// discord_app/modules/game_console/getXboxURIForChannel.tsx
import intl2 from "../../intl/index.native.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import GameConsoleConstants from "GameConsoleConstants.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ XBOX_HANDOFF_SEARCH_PARAMS: metroRequire, XBOX_URL_BASE: metroImportDefault } = GameConsoleConstants);
({ Endpoints: metroImportAll, ZERO_STRING_GUILD_ID: c9 } = Constants);
const result = size.fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(channelId, arg1) {
  let combined;
  let forQRCode;
  let name;
  let nonce;
  let obj2;
  ({ nonce, forQRCode } = arg1);
  const guildId = channelId.getGuildId();
  const guild = GuildStore.getGuild(guildId);
  let tmp4 = guildId;
  if (guildId == null) {
    tmp4 = React4;
  }
  const obj = {
    guildId: tmp4,
    channelId: channelId.id,
    channelName: obj2.computeChannelName(channelId, UserStore, RelationshipStore),
    guildName: name,
    muted: MediaEngineStore.isSelfMute(),
    deafened: MediaEngineStore.isSelfDeaf(),
    nonce,
  };
  name = undefined;
  obj2 = useChannelName;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = intl2.intl;
    name = intl.string(intl2.t.LJpTRF);
  }
  const str = metroRequire(obj);
  if (forQRCode) {
    const tmp5Result = HTTPUtils;
    const aPIBaseURL = tmp5Result.getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    combined = "" + aPIBaseURL + metroImportAll.XBOX_HANDOFF + "?" + str.toString();
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + metroImportDefault + "?" + str.toString();
  }
  return combined;
}
