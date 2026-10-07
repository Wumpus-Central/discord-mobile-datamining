// discord_app/modules/messages/getStickerDiscoverableGuild.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import GuildDiscoveryUtils from "../../utils/GuildDiscoveryUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/messages/getStickerDiscoverableGuild.tsx");

export default function getStickerDiscoverableGuild(arg0) {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true });
  let obj = { url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true };
  return value
    .then((body) => {
      body = undefined;
      if (body != null) {
        body = body.body;
      }
      let discoverableGuild = null;
      if (null != body) {
        discoverableGuild = GuildDiscoveryUtils.makeDiscoverableGuild(body.body);
      }
      return discoverableGuild;
    })
    .catch(() => null);
}
