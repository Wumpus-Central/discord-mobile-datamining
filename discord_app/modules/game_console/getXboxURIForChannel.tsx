// discord_app/modules/game_console/getXboxURIForChannel.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import XBOX_URL_BASE from "XBOX_URL_BASE";
import ME from "ME";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ XBOX_HANDOFF_SEARCH_PARAMS: closure_6, XBOX_URL_BASE: error } = XBOX_URL_BASE);
({ Endpoints: metroImportAll, ZERO_STRING_GUILD_ID: c9 } = ME);
const result = require("upsertRelationship").fileFinishedImporting("modules/game_console/getXboxURIForChannel.tsx");

export default function getXboxURIForChannel(channelId) {
  let forQRCode;
  let nonce;
  ({ nonce, forQRCode } = arg1);
  const guildId = channelId.getGuildId();
  guild = guild.getGuild(guildId);
  let tmp4 = guildId;
  if (guildId == null) {
    tmp4 = closure_9;
  }
  const obj = { guildId: tmp4, channelId: channelId.id, channelName: null, guildName: null, muted: null, deafened: null, nonce: null };
  obj[2] = require(4475) /* computeChannelName */.computeChannelName(channelId, mergeGuildAvatar, upsertRelationship);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = tmp5(1236).intl;
    name = intl.string(tmp5(1236).t.LJpTRF);
  }
  obj[3] = name;
  obj[4] = _detectH265HardwareDecode.isSelfMute();
  obj[5] = _detectH265HardwareDecode.isSelfDeaf();
  obj[6] = nonce;
  const str = closure_6(obj);
  if (forQRCode) {
    const aPIBaseURL = tmp5(530).getAPIBaseURL();
    const _HermesInternal2 = HermesInternal;
    let combined = "" + aPIBaseURL + constants.XBOX_HANDOFF + "?" + str.toString();
    const tmp5Result = tmp5(530);
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + closure_7 + "?" + str.toString();
  }
  return combined;
};