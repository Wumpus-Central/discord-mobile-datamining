// discord_app/modules/guild_scheduled_events/utils/getGuildEventImage.tsx
import { Endpoints } from "ME";
import { handleImageLoad } from "../../image_upload/ImageLoaderUtils.tsx";

let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/utils/getGuildEventImage.tsx");

export default function getGuildEventImageURL(image, size) {
  if (null == image.image) {
    return null;
  } else {
    let result = size;
    if (null == size) {
      const _window = window;
      result = window.screen.width * handleImageLoad.getDevicePixelRatio();
      const obj = handleImageLoad;
    }
    const _window2 = window;
    const bestMediaProxySize = handleImageLoad.getBestMediaProxySize(result);
    if (null != CDN_HOST) {
      const _HermesInternal = HermesInternal;
      let combined = "https://" + CDN_HOST + "/guild-events/" + image.id + "/" + image.image;
    } else {
      const _location = location;
      const _window3 = window;
      const sum = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
      combined = sum + Endpoints.GUILD_EVENT_IMAGE(image.id, image.image, "png");
    }
    const _HermesInternal2 = HermesInternal;
    return combined + "?size=" + bestMediaProxySize;
  }
};