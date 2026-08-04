// discord_app/modules/action_sheet/native/ShowShareActionSheetUtils.tsx
import { AnalyticEvents } from "ME";

const result = require("apexExperiment").fileFinishedImporting("modules/action_sheet/native/ShowShareActionSheetUtils.tsx");

export const trackAppClickInNativeShareSheet = function trackAppClickInNativeShareSheet(app, _location) {
  let str = app;
  let obj = importDefault(698);
  if (app == null) {
    str = "";
  }
  obj = { package_name: str, location: _location };
  obj.track(AnalyticEvents.NATIVE_SHARE_SHEET_APP_CLICKED, obj);
};
export const getMediaShareParams = function getMediaShareParams(source) {
  let contentType;
  let videoURI;
  let obj = require(8203) /* apexExperiment */;
  if (obj.getMobileMediaViewerShareExperimentEnabled("shareMediaSource")) {
    if (true !== source.disableDownload) {
      if (true === source.isGIFV) {
        let uri2 = source.embedURI;
        if (uri2 == null) {
          uri2 = source.sourceURI;
        }
        if (uri2 == null) {
          uri2 = source.uri;
        }
        obj = { mediaFallbackUrl: null };
        obj[0] = uri2;
        return obj;
      } else {
        ({ videoURI, contentType } = source);
        if (null != videoURI) {
          let tmpResult = tmp(5204);
          const decideFileExtensionResult = tmpResult.decideFileExtension(videoURI, contentType, true);
          obj = { mediaFallbackUrl: null, mediaStagingOptions: null };
          obj[0] = videoURI;
          let tmp6;
          if (null != decideFileExtensionResult) {
            const obj1 = { url: null, fileExtension: null, mediaType: "video" };
            obj1[0] = videoURI;
            obj1[1] = decideFileExtensionResult;
            tmp6 = obj1;
          }
          obj[1] = tmp6;
          return obj;
        } else {
          tmpResult = tmp(5204);
          const decideFileExtensionResult1 = tmpResult.decideFileExtension(source.uri, contentType, true);
          let uri = source.sourceURI;
          if (uri == null) {
            uri = source.uri;
          }
          const obj2 = { mediaFallbackUrl: null, mediaStagingOptions: null };
          obj2[0] = uri;
          let tmp4;
          if (null != decideFileExtensionResult1) {
            const obj3 = { url: null, fileExtension: null, mediaType: "image" };
            obj3[0] = source.uri;
            obj3[1] = decideFileExtensionResult1;
            tmp4 = obj3;
          }
          obj2[1] = tmp4;
          return obj2;
        }
      }
    }
  }
  let mediaFallbackUrl = source.videoURI;
  if (mediaFallbackUrl == null) {
    mediaFallbackUrl = source.sourceURI;
  }
  if (mediaFallbackUrl == null) {
    mediaFallbackUrl = source.uri;
  }
  return { mediaFallbackUrl };
};
export const resolveShareFileExtension = function resolveShareFileExtension(closure_0, contentType) {
  return require(5204) /* decideFileExtension */.decideFileExtension(closure_0, contentType, true);
};