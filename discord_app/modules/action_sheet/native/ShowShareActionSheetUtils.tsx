// discord_app/modules/action_sheet/native/ShowShareActionSheetUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../utils/PlatformUtils.tsx";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import isDiscordProxiedAssetUrlDefault from "../../../utils/URLUtils.tsx";
import decideFileExtension from "../../media/FileExtensionUtils.tsx";
import SHARE_PREPARING_MODAL_KEY from "../../share/native/SharePreparingModalConstants.tsx";
import apexExperiment from "../../media_viewer/native/MobileMediaViewerShareExperiment.tsx";

const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = SHARE_PREPARING_MODAL_KEY.SHARE_SHEET_PRESENT_DELAY_MS;
const result = obj132.fileFinishedImporting("modules/action_sheet/native/ShowShareActionSheetUtils.tsx");

export const trackAppClickInNativeShareSheet = function trackAppClickInNativeShareSheet(app, _location) {
  let str = app;
  let obj = expandEventPropertiesDefault;
  if (app == null) {
    str = "";
  }
  obj = { package_name: str, location: _location };
  obj.track(AnalyticEvents.NATIVE_SHARE_SHEET_APP_CLICKED, obj);
};
export const getMediaShareParams = function getMediaShareParams(source) {
  let obj = apexExperiment;
  if (obj.getMobileMediaViewerShareExperimentEnabled("shareMediaSource")) {
    if (true !== source.disableDownload) {
      if (null != source.shareURI) {
        if (obj11.isDiscordDirectAssetUrl(source.shareURI)) {
          let tmpResult = obj1322;
          if (tmpResult.isAndroid()) {
            obj = { presentDelayMs: null };
            obj[0] = closure_4;
          }
          ({ videoURI, contentType } = source);
          if (null != videoURI) {
            tmpResult = decideFileExtension;
            const decideFileExtensionResult = tmpResult.decideFileExtension(videoURI, contentType, true);
            obj = { mediaFallbackUrl: null, mediaStagingOptions: null };
            obj[0] = videoURI;
            let tmp11;
            if (null != decideFileExtensionResult) {
              obj1 = { url: null, fileExtension: null, mediaType: "video" };
              obj1[0] = videoURI;
              obj1[1] = decideFileExtensionResult;
              const merged = Object.assign(tmp3);
              tmp11 = obj1;
            }
            obj[1] = tmp11;
            return obj;
          } else {
            const decideFileExtensionResult1 = decideFileExtension.decideFileExtension(source.uri, contentType, true);
            const obj2 = { mediaFallbackUrl: null, mediaStagingOptions: null };
            obj2[0] = source.shareURI;
            let tmp6;
            if (null != decideFileExtensionResult1) {
              const obj3 = { url: null, fileExtension: null, mediaType: "image" };
              obj3[0] = source.uri;
              obj3[1] = decideFileExtensionResult1;
              const merged1 = Object.assign(tmp3);
              tmp6 = obj3;
            }
            obj2[1] = tmp6;
            return obj2;
          }
        } else {
          const obj4 = { mediaFallbackUrl: null };
          obj4[0] = source.shareURI;
          return obj4;
        }
        obj11 = isDiscordProxiedAssetUrlDefault;
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
export const resolveShareFileExtension = function resolveShareFileExtension(closure_1_0, closure_1_1) {
  return decideFileExtension.decideFileExtension(closure_1_0, importDefault, true);
};