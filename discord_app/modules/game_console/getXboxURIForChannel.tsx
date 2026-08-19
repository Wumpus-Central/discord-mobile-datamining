// discord_app/modules/game_console/getXboxURIForChannel.tsx
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import computeChannelName from "../channel/useChannelName.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import _detectH265HardwareDecode from "../../stores/MediaEngineStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import XBOX_URL_BASE from "GameConsoleConstants.tsx";
import ME from "../../Constants.tsx";

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