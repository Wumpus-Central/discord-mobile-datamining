// === Module 10406: getStickerDiscoverableGuild ===

// Module 10406 (getStickerDiscoverableGuild)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7341 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/messages/getStickerDiscoverableGuild.tsx");

export default function getStickerDiscoverableGuild(arg0) {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true });
  let obj = { url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true };
  return value.then((body) => {
    body = undefined;
    if (body != null) {
      body = body.body;
    }
    let discoverableGuild = null;
    if (null != body) {
      discoverableGuild = GuildDiscoveryUtils.makeDiscoverableGuild(body.body);
    }
    return discoverableGuild;
  }).catch(() => null);
};