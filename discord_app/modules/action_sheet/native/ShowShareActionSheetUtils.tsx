// === Module 8040: ShowShareActionSheetUtils ===

// Module 8040 (ShowShareActionSheetUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import FileExtensionUtils from "FileExtensionUtils" /* 5959 */;
import SharePreparingModalConstants from "SharePreparingModalConstants" /* 8041 */;
import MobileMediaViewerShareExperiment from "MobileMediaViewerShareExperiment" /* 8042 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const presentDelayMs = SharePreparingModalConstants.SHARE_SHEET_PRESENT_DELAY_MS;
const result = size.fileFinishedImporting("modules/action_sheet/native/ShowShareActionSheetUtils.tsx");

export const trackAppClickInNativeShareSheet = function trackAppClickInNativeShareSheet(app, _location) {
  let str = app;
  const track = AnalyticsUtilsDefault.track;
  const NATIVE_SHARE_SHEET_APP_CLICKED = AnalyticEvents.NATIVE_SHARE_SHEET_APP_CLICKED;
  AnalyticsUtilsDefault;
  if (app == null) {
    str = "";
  }
  const obj = { package_name: str, location: _location };
  track(NATIVE_SHARE_SHEET_APP_CLICKED, obj);
};
export const getMediaShareParams = function getMediaShareParams(source) {
  let contentType;
  let tmp11;
  let tmp6;
  let videoURI;
  const obj = MobileMediaViewerShareExperiment;
  if (obj.getMobileMediaViewerShareExperimentEnabled("shareMediaSource")) {
    if (true !== source.disableDownload) {
      if (null != source.shareURI) {
        const obj11 = URLUtilsDefault;
        if (obj11.isDiscordDirectAssetUrl(source.shareURI)) {
          const tmpResult = PlatformUtils;
          ({ videoURI, contentType } = source);
          if (null != videoURI) {
            const tmpResult3 = FileExtensionUtils;
            const decideFileExtensionResult = tmpResult3.decideFileExtension(videoURI, contentType, true);
            const obj3 = { mediaFallbackUrl: videoURI, mediaStagingOptions: tmp11 };
            tmp11 = undefined;
            if (null != decideFileExtensionResult) {
              const obj4 = { url: videoURI, fileExtension: decideFileExtensionResult, mediaType: "video" };
              const merged = Object.assign(tmp3);
              tmp11 = obj4;
            }
            return obj3;
          } else {
            const uri = source.uri;
            const tmpResult4 = FileExtensionUtils;
            const decideFileExtensionResult1 = tmpResult4.decideFileExtension(uri, contentType, true);
            const obj5 = { mediaFallbackUrl: source.shareURI, mediaStagingOptions: tmp6 };
            tmp6 = undefined;
            if (null != decideFileExtensionResult1) {
              const obj6 = { url: source.uri, fileExtension: decideFileExtensionResult1, mediaType: "image" };
              const merged1 = Object.assign(tmp3);
              tmp6 = obj6;
            }
            return obj5;
          }
        } else {
          return { mediaFallbackUrl: source.shareURI };
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
export const resolveShareFileExtension = function resolveShareFileExtension(uri, contentType) {
  const obj = FileExtensionUtils;
  return obj.decideFileExtension(uri, contentType, true);
};