// === Module 7464: videoAssetFromServer ===

// Module 7464 (videoAssetFromServer)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/quests/types/v2/Video.tsx");

export const videoAssetFromServer = function videoAssetFromServer(url) {
  return { url: url.url, width: url.width, height: url.height, thumbnail: url.thumbnail, caption: url.caption, transcript: url.transcript };
};
export const desktopVideoAssetsFromServer = function desktopVideoAssetsFromServer(assets) {
  const video = assets.video;
  let obj = { url: video.url, width: video.width, height: video.height, thumbnail: video.thumbnail, caption: video.caption, transcript: video.transcript };
  if (null != assets.video_low_res) {
    obj = { url: null, width: null, height: null, thumbnail: null, caption: null, transcript: null };
    ({ url: obj3[0], width: obj3[1], height: obj3[2], thumbnail: obj3[3], caption: obj3[4], transcript: obj3[5] } = assets.video_low_res);
    obj.videoLowRes = obj;
  }
  if (null != assets.video_hls) {
    ({ url: obj4[0], width: obj4[1], height: obj4[2], thumbnail: obj4[3], caption: obj4[4], transcript: obj4[5] } = assets.video_hls);
    obj.videoHls = { url: null, width: null, height: null, thumbnail: null, caption: null, transcript: null };
  }
  return obj;
};
export const desktopVideoMessagesFromServer = function desktopVideoMessagesFromServer(messages) {
  return { videoTitle: messages.video_title };
};
export const mobileVideoAssetsFromServer = function mobileVideoAssetsFromServer(assets) {
  const video = assets.video;
  let obj = { url: video.url, width: video.width, height: video.height, thumbnail: video.thumbnail, caption: video.caption, transcript: video.transcript };
  if (null != assets.video_low_res) {
    obj = { url: null, width: null, height: null, thumbnail: null, caption: null, transcript: null };
    ({ url: obj3[0], width: obj3[1], height: obj3[2], thumbnail: obj3[3], caption: obj3[4], transcript: obj3[5] } = assets.video_low_res);
    obj.videoLowRes = obj;
  }
  if (null != assets.video_hls) {
    ({ url: obj4[0], width: obj4[1], height: obj4[2], thumbnail: obj4[3], caption: obj4[4], transcript: obj4[5] } = assets.video_hls);
    obj.videoHls = { url: null, width: null, height: null, thumbnail: null, caption: null, transcript: null };
  }
  return obj;
};
export const mobileVideoMessagesFromServer = function mobileVideoMessagesFromServer(messages) {
  return { videoTitle: messages.video_title };
};