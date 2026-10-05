// === Module 7198: v2/Video ===

// Module 7198 (v2/Video)
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/types/v2/Video.tsx");

export const videoAssetFromServer = function videoAssetFromServer(url) {
  size = { url: url.url, width: url.width, height: url.height, thumbnail: url.thumbnail, caption: url.caption, transcript: url.transcript };
  return size;
};
export const desktopVideoAssetsFromServer = function desktopVideoAssetsFromServer(assets) {
  let video;
  const obj = { video: { url: video.url, width: video.width, height: video.height, thumbnail: video.thumbnail, caption: video.caption, transcript: video.transcript } };
  video = assets.video;
  if (null != assets.video_low_res) {
    size = { url: null, width: null, height: null, thumbnail: null, caption: null, transcript: null };
    ({ url: obj2.url, width: obj2.width, height: obj2.height, thumbnail: obj2.thumbnail, caption: obj2.caption, transcript: obj2.transcript } = assets.video_low_res);
    obj.videoLowRes = size;
  }
  if (null != assets.video_hls) {
    const size1 = { url: null, width: null, height: null, thumbnail: null, caption: null, transcript: null };
    ({ url: obj3.url, width: obj3.width, height: obj3.height, thumbnail: obj3.thumbnail, caption: obj3.caption, transcript: obj3.transcript } = assets.video_hls);
    obj.videoHls = size1;
  }
  return obj;
};
export const desktopVideoMessagesFromServer = function desktopVideoMessagesFromServer(messages) {
  return { videoTitle: messages.video_title };
};
export const mobileVideoAssetsFromServer = function mobileVideoAssetsFromServer(assets) {
  let video;
  const obj = { video: { url: video.url, width: video.width, height: video.height, thumbnail: video.thumbnail, caption: video.caption, transcript: video.transcript } };
  video = assets.video;
  if (null != assets.video_low_res) {
    size = { url: null, width: null, height: null, thumbnail: null, caption: null, transcript: null };
    ({ url: obj2.url, width: obj2.width, height: obj2.height, thumbnail: obj2.thumbnail, caption: obj2.caption, transcript: obj2.transcript } = assets.video_low_res);
    obj.videoLowRes = size;
  }
  if (null != assets.video_hls) {
    const size1 = { url: null, width: null, height: null, thumbnail: null, caption: null, transcript: null };
    ({ url: obj3.url, width: obj3.width, height: obj3.height, thumbnail: obj3.thumbnail, caption: obj3.caption, transcript: obj3.transcript } = assets.video_hls);
    obj.videoHls = size1;
  }
  return obj;
};
export const mobileVideoMessagesFromServer = function mobileVideoMessagesFromServer(messages) {
  return { videoTitle: messages.video_title };
};