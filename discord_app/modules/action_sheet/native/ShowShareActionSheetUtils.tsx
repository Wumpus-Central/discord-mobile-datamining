// === Module 8493: ShowShareActionSheetUtils ===

// Module 8493 (ShowShareActionSheetUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import FileExtensionUtils from "FileExtensionUtils" /* 5654 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8494 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const presentDelayMs = SharePreparingModalConstants.SHARE_SHEET_PRESENT_DELAY_MS;
const result = size.fileFinishedImporting("modules/action_sheet/native/ShowShareActionSheetUtils.tsx");

export const trackAppClickInNativeShareSheet = function trackAppClickInNativeShareSheet(app, _location) {
  let str = app;
  if (app == null) {
    str = "";
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.NATIVE_SHARE_SHEET_APP_CLICKED, { package_name: str, location: _location });
};
export const getMediaShareParams = function getMediaShareParams(source) {
  if (obj.getMobileMediaViewerShareExperimentEnabled("shareMediaSource")) {
    if (true !== source.disableDownload) {
      if (null != source.shareURI) {
        if (obj11.isDiscordDirectAssetUrl(source.shareURI)) {
          if (tmpResult.isAndroid()) {
            const obj2 = { presentDelayMs };
          }
          ({ videoURI, contentType } = source);
          if (null != videoURI) {
            const decideFileExtensionResult = FileExtensionUtils.decideFileExtension(videoURI, contentType, true);
            const obj3 = { mediaFallbackUrl: videoURI, mediaStagingOptions: null };
            let tmp11;
            if (null != decideFileExtensionResult) {
              const obj4 = { url: videoURI, fileExtension: decideFileExtensionResult, mediaType: "video" };
              const merged = Object.assign(tmp3);
              tmp11 = obj4;
            }
            obj3.mediaStagingOptions = tmp11;
            return obj3;
          } else {
            const decideFileExtensionResult1 = FileExtensionUtils.decideFileExtension(source.uri, contentType, true);
            const obj5 = { mediaFallbackUrl: source.shareURI, mediaStagingOptions: null };
            let tmp6;
            if (null != decideFileExtensionResult1) {
              const obj6 = { url: source.uri, fileExtension: decideFileExtensionResult1, mediaType: "image" };
              const merged1 = Object.assign(tmp3);
              tmp6 = obj6;
            }
            obj5.mediaStagingOptions = tmp6;
            return obj5;
          }
          tmpResult = PlatformUtils;
        } else {
          const obj7 = { mediaFallbackUrl: source.shareURI };
          return obj7;
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