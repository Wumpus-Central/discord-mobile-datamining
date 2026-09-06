// === Module 8363: ShowShareActionSheetUtils ===

// Module 8363 (ShowShareActionSheetUtils)
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import FileExtensionUtils from "FileExtensionUtils" /* 5568 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8364 */;
import MobileMediaViewerShareExperiment from "MobileMediaViewerShareExperiment" /* 8365 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const presentDelayMs = SharePreparingModalConstants.SHARE_SHEET_PRESENT_DELAY_MS;
const result = size.fileFinishedImporting("modules/action_sheet/native/ShowShareActionSheetUtils.tsx");

export const trackAppClickInNativeShareSheet = function trackAppClickInNativeShareSheet(app, _location) {
  let str = app;
  let obj = AnalyticsUtilsDefault;
  if (app == null) {
    str = "";
  }
  obj = { package_name: str, location: _location };
  obj.track(AnalyticEvents.NATIVE_SHARE_SHEET_APP_CLICKED, obj);
};
export const getMediaShareParams = function getMediaShareParams(source) {
  let obj = MobileMediaViewerShareExperiment;
  if (obj.getMobileMediaViewerShareExperimentEnabled("shareMediaSource")) {
    if (true !== source.disableDownload) {
      if (null != source.shareURI) {
        if (obj11.isDiscordDirectAssetUrl(source.shareURI)) {
          let tmpResult = PlatformUtils;
          if (tmpResult.isAndroid()) {
            obj = { presentDelayMs };
          }
          ({ videoURI, contentType } = source);
          if (null != videoURI) {
            tmpResult = FileExtensionUtils;
            const decideFileExtensionResult = tmpResult.decideFileExtension(videoURI, contentType, true);
            obj = { mediaFallbackUrl: videoURI, mediaStagingOptions: null };
            let tmp11;
            if (null != decideFileExtensionResult) {
              const obj1 = { url: videoURI, fileExtension: decideFileExtensionResult, mediaType: "video" };
              const merged = Object.assign(tmp3);
              tmp11 = obj1;
            }
            obj.mediaStagingOptions = tmp11;
            return obj;
          } else {
            const decideFileExtensionResult1 = FileExtensionUtils.decideFileExtension(source.uri, contentType, true);
            const obj2 = { mediaFallbackUrl: source.shareURI, mediaStagingOptions: null };
            let tmp6;
            if (null != decideFileExtensionResult1) {
              const obj3 = { url: source.uri, fileExtension: decideFileExtensionResult1, mediaType: "image" };
              const merged1 = Object.assign(tmp3);
              tmp6 = obj3;
            }
            obj2.mediaStagingOptions = tmp6;
            return obj2;
          }
        } else {
          const obj4 = { mediaFallbackUrl: source.shareURI };
          return obj4;
        }
        obj11 = URLUtilsDefault;
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
export const resolveShareFileExtension = function resolveShareFileExtension(uri, contentType) {
  return FileExtensionUtils.decideFileExtension(uri, contentType, true);
};