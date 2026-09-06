// discord_app/modules/messages/native/renderer/transformMessageAttachments.tsx
import Constants from "../../../../Constants.tsx";
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MediaFormatTesters from "../../MediaFormatTesters.tsx";
import noConflictDefault from "../../../../../_runtime/05135_noConflict.js";
import RowGeneratorConstants from "RowGeneratorConstants.tsx";
import RowGeneratorUtilsDefault from "RowGeneratorUtils.tsx";
import getDisplayFilenameDefault from "../../getDisplayFilename.tsx";
import MediaPlaybackFacts from "../../MediaPlaybackFacts.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AttachmentType = RowGeneratorConstants.AttachmentType;
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformMessageAttachments.tsx");

export default function transformMessageAttachments(arg0) {
  ({
    attachments,
    uploadAttachments: require,
    shouldInlineAttachmentMedia: importDefault,
    gifAutoPlay: dependencyMap,
    viewImageDescriptions: AttachmentType,
    useReducedMotion: MessageAttachmentFlags,
    shouldObscureSpoiler: closure_5,
    themedBackgroundColor: closure_6,
    enabledContentHarmTypeFlags: closure_7,
    shouldAgeVerify: closure_8,
    colors: closure_9,
  } = arg0);
  const found = attachments.filter((flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      tmp = !FlagUtils.hasFlag(flags.flags, constants.IS_THUMBNAIL);
    }
    return tmp;
  });
  return found.map((attachment, index) => {
    ({ proxy_url, url, filename, width, height, flags } = attachment);
    ({ size, description, duration_secs, waveform, id, placeholder, placeholder_version } = attachment);
    let obj = MediaPlaybackFacts;
    const result = obj.rememberMediaPlaybackFacts(attachment);
    const isImageFileResult = MediaFormatTesters.isImageFile(filename);
    const isAudioFileResult = MediaFormatTesters.isAudioFile(filename);
    const isVideoFileResult = MediaFormatTesters.isVideoFile(filename);
    let tmp8 = isImageFileResult;
    if (!isImageFileResult) {
      tmp8 = isVideoFileResult;
    }
    if (tmp9) {
      const size2 = arr[index];
    }
    let tmpResult = tmp(1384);
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj6 = RowGeneratorUtilsDefault;
          let imageSrc = obj6.getImageSrc(proxy_url, width, height, !dependencyMap);
        }
        tmpResult = tmp(1115);
        let str4 = "default";
        if (tmpResult.isAndroid()) {
          str4 = "default";
          if (isVideoFileResult) {
            str4 = "cronet";
          }
        }
        let width2 = width;
        if (null != size2) {
          width2 = width;
          if (size2.width > 0) {
            width2 = size2.width;
          }
        }
        let height2 = height;
        if (null != size2) {
          height2 = height;
          if (size2.height > 0) {
            height2 = size2.height;
          }
        }
        let num4 = 0;
        if (closure_1_1) {
          num4 = 0;
          if (tmp8) {
            num4 = 0;
            if (null != width2) {
              num4 = width2;
            }
          }
        }
        const result1 = tmp(8107).sanitizeMediaDimension(num4);
        const tmpResult1 = tmp(8107);
        let num5 = 0;
        if (closure_1_1) {
          num5 = 0;
          if (tmp8) {
            num5 = 0;
            if (null != height2) {
              num5 = height2;
            }
          }
        }
        const result2 = tmp(8107).sanitizeMediaDimension(num5);
        const tmpResult2 = tmp(8107);
        if (flags == null) {
          flags = 0;
        }
        let tmp28;
        if (tmpResult3.hasFlag(flags, MessageAttachmentFlags.IS_CLIP)) {
          obj = {
            attachmentTagText: null,
            attachmentTagIconType: "clip",
            attachmentTagBackgroundColor: null,
            attachmentTagTextColor: null,
          };
          const intl = tmp(1114).intl;
          obj.attachmentTagText = intl.string(tmp(1114).t.gESDiU);
          ({
            clipTagBackgroundColor: obj11.attachmentTagBackgroundColor,
            clipTagTextColor: obj11.attachmentTagTextColor,
          } = closure_1_9);
          tmp28 = obj;
        }
        let localUri = imageSrc;
        if (null != size2) {
          localUri = imageSrc;
          if (null != size2.localUri) {
            localUri = imageSrc;
            if (tmp8) {
              localUri = imageSrc;
              if (tmp25) {
                localUri = size2.localUri;
              }
            }
          }
        }
        size = {
          url: localUri,
          isSuspiciousDownload: null,
          videoUrl: null,
          filename: null,
          size: null,
          description: null,
          alt: null,
          altTextHint: null,
          showDescription: null,
          durationSecs: null,
          waveform: null,
          width: null,
          height: null,
          hint: null,
          role: null,
          attachmentType: null,
          id: null,
          isAnimated: null,
          uploaderId: null,
          uploaderItemId: null,
          backgroundColor: null,
          placeholder: null,
          placeholderVersion: null,
          mediaViewerBufferForPlaybackMs: 1000,
          mediaViewerBufferForPlaybackAfterRebufferMs: 1000,
          mediaViewerMinBufferMs: 20000,
          mediaViewerMaxBufferMs: 20000,
          mediaViewerEnableDecoderFallback: false,
          mediaViewerEnableAsyncBufferQueueing: true,
          mediaViewerHttpEngine: null,
          srcIsAnimated: null,
          inlinePlaybackDisabled: null,
        };
        let tmp30 = null != localUri;
        if (tmp30) {
          tmp30 = null != tmp(8127).isSuspiciousDownload(localUri);
          const tmpResult4 = tmp(8127);
        }
        size.isSuspiciousDownload = tmp30;
        size.videoUrl = tmp16;
        size.filename = getDisplayFilenameDefault(attachment);
        tmpResult3 = tmp(1384);
        size.size = noConflictDefault.filesize(size);
        size.description = description;
        const intl2 = tmp(1114).intl;
        size.alt = intl2.string(tmp(1114).t.jCV1Tz).toUpperCase();
        const intl3 = tmp(1114).intl;
        size.altTextHint = intl3.string(tmp(1114).t.fSiQ3A);
        size.showDescription = showDescription;
        size.durationSecs = duration_secs;
        size.waveform = waveform;
        size.width = result1;
        size.height = result2;
        const intl4 = tmp(1114).intl;
        const string = intl4.string;
        const t = tmp(1114).t;
        if (isVideoFileResult) {
          let stringResult = string(t["BEWw/7"]);
        } else {
          stringResult = string(t.IPzNKE);
        }
        size.hint = stringResult;
        const intl5 = tmp(1114).intl;
        const string2 = intl5.string;
        const t2 = tmp(1114).t;
        if (isVideoFileResult) {
          let string2Result = string2(t2["/SCpvi"]);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        size.role = string2Result;
        if (isImageFileResult) {
          let VIDEO = tmp35.IMAGE;
        } else if (isVideoFileResult) {
          VIDEO = tmp35.VIDEO;
        } else {
          VIDEO = isAudioFileResult ? tmp35.AUDIO : tmp35.OTHER;
        }
        size.attachmentType = VIDEO;
        size.id = id;
        size.isAnimated = !constants;
        let uploaderId;
        if (size2 != null) {
          uploaderId = size2.uploaderId;
        }
        size.uploaderId = uploaderId;
        let uploaderItemId;
        if (size2 != null) {
          uploaderItemId = size2.uploaderItemId;
        }
        size.uploaderItemId = uploaderItemId;
        size.backgroundColor = backgroundColor;
        size.placeholder = placeholder;
        size.placeholderVersion = placeholder_version;
        size.mediaViewerHttpEngine = str4;
        size.srcIsAnimated = tmp12;
        size.inlinePlaybackDisabled = isWebPlayerVideoFileResult;
        const str5 = intl2.string(tmp(1114).t.jCV1Tz);
        obj = { attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags, shouldAgeVerify };
        const merged = Object.assign(tmp(8125).getAttachmentObscurityProps(obj));
        const merged1 = Object.assign(tmp28);
        return size;
      }
    }
    let tmp13 = isVideoFileResult;
    if (isVideoFileResult) {
      let tmp14 = closure_1_1;
      if (!closure_1_1) {
        tmp14 = null != size2;
      }
      tmp13 = tmp14;
    }
    imageSrc = url;
    if (tmp13) {
      let text = url;
      if (null != proxy_url) {
        text = `${proxy_url}?format=webp`;
      }
      let tmp18 = url;
      if (null != proxy_url) {
        tmp18 = url;
        if ("" !== proxy_url) {
          tmp18 = proxy_url;
        }
      }
      imageSrc = text;
      tmp16 = tmp18;
    }
  });
}
