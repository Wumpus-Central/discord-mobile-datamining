// discord_app/modules/messages/native/renderer/transformMessageAttachments.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MediaFormatTesters from "../../MediaFormatTesters.tsx";
import noConflictDefault from "../../../../../_runtime/05220_noConflict.js";
import RowGeneratorConstants from "RowGeneratorConstants.tsx";
import sanitizeMediaDimension from "sanitizeMediaDimension.tsx";
import RowGeneratorUtilsDefault from "RowGeneratorUtils.tsx";
import ExplicitMediaUtils from "ExplicitMediaUtils.tsx";
import SuspiciousDownloadUtils from "../../../suspicious_downloads/SuspiciousDownloadUtils.tsx";
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
    const result = MediaPlaybackFacts.rememberMediaPlaybackFacts(attachment);
    const isImageFileResult = MediaFormatTesters.isImageFile(filename);
    const isAudioFileResult = MediaFormatTesters.isAudioFile(filename);
    const isVideoFileResult = MediaFormatTesters.isVideoFile(filename);
    let tmp8 = isImageFileResult;
    if (!isImageFileResult) {
      tmp8 = isVideoFileResult;
    }
    if (tmp9) {
      const size2 = length[index];
    }
    FlagUtils;
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj6 = RowGeneratorUtilsDefault;
          let imageSrc = obj6.getImageSrc(proxy_url, width, height, !dependencyMap);
        }
        let str4 = "default";
        if (tmpResult7.isAndroid()) {
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
        tmpResult7 = PlatformUtils;
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
        const result1 = sanitizeMediaDimension.sanitizeMediaDimension(num4);
        const tmpResult8 = sanitizeMediaDimension;
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
        const result2 = sanitizeMediaDimension.sanitizeMediaDimension(num5);
        const tmpResult9 = sanitizeMediaDimension;
        if (flags == null) {
          flags = 0;
        }
        let tmp28;
        if (tmpResult10.hasFlag(flags, MessageAttachmentFlags.IS_CLIP)) {
          const obj7 = {
            attachmentTagText: null,
            attachmentTagIconType: "clip",
            attachmentTagBackgroundColor: null,
            attachmentTagTextColor: null,
          };
          const intl = util.intl;
          obj7.attachmentTagText = intl.string(util.t.gESDiU);
          ({
            clipTagBackgroundColor: obj11.attachmentTagBackgroundColor,
            clipTagTextColor: obj11.attachmentTagTextColor,
          } = closure_1_9);
          tmp28 = obj7;
        }
        let localUri = imageSrc;
        if (null != size2) {
          localUri = imageSrc;
          if (null != size2.localUri) {
            localUri = imageSrc;
            if (tmp8) {
              localUri = imageSrc;
              if (closure_1_1) {
                localUri = size2.localUri;
              }
            }
          }
        }
        const size1 = {
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
          tmp30 = null != SuspiciousDownloadUtils.isSuspiciousDownload(localUri);
          const tmpResult11 = SuspiciousDownloadUtils;
        }
        size1.isSuspiciousDownload = tmp30;
        size1.videoUrl = tmp16;
        size1.filename = getDisplayFilenameDefault(attachment);
        tmpResult10 = FlagUtils;
        size1.size = noConflictDefault.filesize(size);
        size1.description = description;
        const intl2 = util.intl;
        size1.alt = intl2.string(util.t.jCV1Tz).toUpperCase();
        const intl3 = util.intl;
        size1.altTextHint = intl3.string(util.t.fSiQ3A);
        size1.showDescription = showDescription;
        size1.durationSecs = duration_secs;
        size1.waveform = waveform;
        size1.width = result1;
        size1.height = result2;
        const intl4 = util.intl;
        const string = intl4.string;
        const t = util.t;
        if (isVideoFileResult) {
          let stringResult = string(t["BEWw/7"]);
        } else {
          stringResult = string(t.IPzNKE);
        }
        size1.hint = stringResult;
        const intl5 = util.intl;
        const string2 = intl5.string;
        const t2 = util.t;
        if (isVideoFileResult) {
          let string2Result = string2(t2["/SCpvi"]);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        size1.role = string2Result;
        if (isImageFileResult) {
          let VIDEO = AttachmentType.IMAGE;
        } else if (isVideoFileResult) {
          VIDEO = AttachmentType.VIDEO;
        } else {
          VIDEO = isAudioFileResult ? AttachmentType.AUDIO : AttachmentType.OTHER;
        }
        size1.attachmentType = VIDEO;
        size1.id = id;
        size1.isAnimated = !constants;
        let uploaderId;
        if (size2 != null) {
          uploaderId = size2.uploaderId;
        }
        size1.uploaderId = uploaderId;
        let uploaderItemId;
        if (size2 != null) {
          uploaderItemId = size2.uploaderItemId;
        }
        size1.uploaderItemId = uploaderItemId;
        size1.backgroundColor = backgroundColor;
        size1.placeholder = placeholder;
        size1.placeholderVersion = placeholder_version;
        size1.mediaViewerHttpEngine = str4;
        size1.srcIsAnimated = tmp12;
        size1.inlinePlaybackDisabled = isWebPlayerVideoFileResult;
        const str5 = intl2.string(util.t.jCV1Tz);
        const obj8 = { attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags, shouldAgeVerify };
        const merged = Object.assign(ExplicitMediaUtils.getAttachmentObscurityProps(obj8));
        const merged1 = Object.assign(tmp28);
        return size1;
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
    isWebPlayerVideoFileResult = MediaFormatTesters.isWebPlayerVideoFile(filename);
    tmp9 = null != length && index < length.length;
  });
}
