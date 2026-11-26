// === Module 19760: buildImageLoadMetricProperties ===

// Module 19760 (buildImageLoadMetricProperties)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

function getQueryParams(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    const searchParams = uRL.searchParams;
    const obj = { format: searchParams.get("format"), quality: searchParams.get("quality") };
    return obj;
  } catch (err) {
    return { format: null, quality: null };
  }
}
const ImageReadyStates = Constants.ImageReadyStates;
const result = size.fileFinishedImporting("modules/media/native/buildImageLoadMetricProperties.tsx");

export function buildImageLoadMetricProperties(url, device_pixel_ratio) {
  let tmp = null;
  if (obj.test(url.url)) {
    const obj3 = { location: url.location, duration_ms: null, state: null, trigger: "LOAD", url: null, requested_url: null, requested_width: null, requested_height: null, display_width: null, display_height: null, device_pixel_ratio: null };
    const _Math = Math;
    obj3.duration_ms = Math.round(url.durationMs);
    obj3.state = url.succeeded ? ImageReadyStates.READY : ImageReadyStates.ERROR;
    ({ url: obj2.url, url: obj2.requested_url, imageWidth } = url);
    let rounded = null;
    if (imageWidth > 0) {
      const _Math2 = Math;
      rounded = Math.round(imageWidth);
    }
    obj3.requested_width = rounded;
    const imageHeight = url.imageHeight;
    let rounded1 = null;
    if (imageHeight > 0) {
      const _Math3 = Math;
      rounded1 = Math.round(imageHeight);
    }
    obj3.requested_height = rounded1;
    const displayWidth = url.displayWidth;
    let rounded2 = null;
    if (displayWidth > 0) {
      const _Math4 = Math;
      rounded2 = Math.round(displayWidth);
    }
    obj3.display_width = rounded2;
    const displayHeight = url.displayHeight;
    let rounded3 = null;
    if (displayHeight > 0) {
      const _Math5 = Math;
      rounded3 = Math.round(displayHeight);
    }
    obj3.display_height = rounded3;
    obj3.device_pixel_ratio = device_pixel_ratio;
    const merged = Object.assign(getQueryParams(url.url));
    tmp = obj3;
  }
  return tmp;
}