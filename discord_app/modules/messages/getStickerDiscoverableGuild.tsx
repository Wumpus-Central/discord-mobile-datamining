// discord_app/modules/messages/getStickerDiscoverableGuild.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ME from "../../Constants.tsx";

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("modules/messages/getStickerDiscoverableGuild.tsx");

export default function getStickerDiscoverableGuild(arg0) {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true });
  let obj = { url: Endpoints.STICKER_GUILD_DATA(arg0), oldFormErrors: true, rejectWithError: true };
  return value.then((result) => {
    let body;
    if (result != null) {
      body = result.body;
    }
    let discoverableGuild = null;
    if (null != body) {
      discoverableGuild = callback(table[2]).makeDiscoverableGuild(result.body);
      const obj = callback(table[2]);
    }
    return discoverableGuild;
  }).catch((error) => null);
};