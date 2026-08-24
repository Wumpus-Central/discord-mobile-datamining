// discord_app/modules/messages/getStickerDiscoverableGuild.tsx
import set from "../../../_runtime/00002_set.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../Constants.tsx";

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/messages/getStickerDiscoverableGuild.tsx");

export default function getStickerDiscoverableGuild(arg0) {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true });
  let obj = { url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true };
  return value.then((body) => {
    body = undefined;
    if (body != null) {
      body = body.body;
    }
    let discoverableGuild = null;
    if (null != body) {
      discoverableGuild = callback(table[2]).makeDiscoverableGuild(body.body);
      const obj = callback(table[2]);
    }
    return discoverableGuild;
  }).catch(() => null);
};