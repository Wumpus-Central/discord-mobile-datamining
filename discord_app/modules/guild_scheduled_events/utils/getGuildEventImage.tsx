// discord_app/modules/guild_scheduled_events/utils/getGuildEventImage.tsx
import Constants from "../../../Constants.tsx";
import ImageLoaderUtils from "../../image_upload/ImageLoaderUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/guild_scheduled_events/utils/getGuildEventImage.tsx");

export default function getGuildEventImageURL(image, size) {
  if (null == image.image) {
    return null;
  } else {
    let result = size;
    if (null == size) {
      const _window = window;
      result = window.screen.width * ImageLoaderUtils.getDevicePixelRatio();
    }
    const _window2 = window;
    const bestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize(result);
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
}
