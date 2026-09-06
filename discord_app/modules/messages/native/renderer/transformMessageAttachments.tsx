// === Module 13180: transformMessageAttachments ===

// Module 13180 (transformMessageAttachments)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4710 */;
import noConflictDefault from "noConflict" /* 5135 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7933 */;
import sanitizeMediaDimension from "sanitizeMediaDimension" /* 8107 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 8108 */;
import ExplicitMediaUtils from "ExplicitMediaUtils" /* 8125 */;
import SuspiciousDownloadUtils from "SuspiciousDownloadUtils" /* 8127 */;
import getDisplayFilenameDefault from "getDisplayFilename" /* 8264 */;
import MediaPlaybackFacts from "MediaPlaybackFacts" /* 11275 */;
import size from "module_2" /* 2 */;

const AttachmentType = RowGeneratorConstants.AttachmentType;
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformMessageAttachments.tsx");

export default function transformMessageAttachments(arg0) {
  ({ attachments, uploadAttachments: require, shouldInlineAttachmentMedia: importDefault, gifAutoPlay: dependencyMap, viewImageDescriptions: AttachmentType, useReducedMotion: MessageAttachmentFlags, shouldObscureSpoiler: closure_5, themedBackgroundColor: closure_6, enabledContentHarmTypeFlags: closure_7, shouldAgeVerify: closure_8, colors: closure_9 } = arg0);
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
      const size2 = length[index];
    }
    let tmpResult = FlagUtils;
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj6 = RowGeneratorUtilsDefault;
          let imageSrc = obj6.getImageSrc(proxy_url, width, height, !dependencyMap);
        }
        tmpResult = PlatformUtils;
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
        const result1 = sanitizeMediaDimension.sanitizeMediaDimension(num4);
        const tmpResult1 = sanitizeMediaDimension;
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
        const tmpResult2 = sanitizeMediaDimension;
        if (flags == null) {
          flags = 0;
        }
        let tmp28;
        if (tmpResult3.hasFlag(flags, MessageAttachmentFlags.IS_CLIP)) {
          obj = { attachmentTagText: null, attachmentTagIconType: "clip", attachmentTagBackgroundColor: null, attachmentTagTextColor: null };
          const intl = util.intl;
          obj.attachmentTagText = intl.string(util.t.gESDiU);
          ({ clipTagBackgroundColor: obj11.attachmentTagBackgroundColor, clipTagTextColor: obj11.attachmentTagTextColor } = closure_1_9);
          tmp28 = obj;
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
        size = { url: localUri, isSuspiciousDownload: null, videoUrl: null, filename: null, size: null, description: null, alt: null, altTextHint: null, showDescription: null, durationSecs: null, waveform: null, width: null, height: null, hint: null, role: null, attachmentType: null, id: null, isAnimated: null, uploaderId: null, uploaderItemId: null, backgroundColor: null, placeholder: null, placeholderVersion: null, mediaViewerBufferForPlaybackMs: 1000, mediaViewerBufferForPlaybackAfterRebufferMs: 1000, mediaViewerMinBufferMs: 20000, mediaViewerMaxBufferMs: 20000, mediaViewerEnableDecoderFallback: false, mediaViewerEnableAsyncBufferQueueing: true, mediaViewerHttpEngine: null, srcIsAnimated: null, inlinePlaybackDisabled: null };
        let tmp30 = null != localUri;
        if (tmp30) {
          tmp30 = null != SuspiciousDownloadUtils.isSuspiciousDownload(localUri);
          const tmpResult4 = SuspiciousDownloadUtils;
        }
        size.isSuspiciousDownload = tmp30;
        size.videoUrl = tmp16;
        size.filename = getDisplayFilenameDefault(attachment);
        tmpResult3 = FlagUtils;
        size.size = noConflictDefault.filesize(size);
        size.description = description;
        const intl2 = util.intl;
        size.alt = intl2.string(util.t.jCV1Tz).toUpperCase();
        const intl3 = util.intl;
        size.altTextHint = intl3.string(util.t.fSiQ3A);
        size.showDescription = showDescription;
        size.durationSecs = duration_secs;
        size.waveform = waveform;
        size.width = result1;
        size.height = result2;
        const intl4 = util.intl;
        const string = intl4.string;
        const t = util.t;
        if (isVideoFileResult) {
          let stringResult = string(t["BEWw/7"]);
        } else {
          stringResult = string(t.IPzNKE);
        }
        size.hint = stringResult;
        const intl5 = util.intl;
        const string2 = intl5.string;
        const t2 = util.t;
        if (isVideoFileResult) {
          let string2Result = string2(t2["/SCpvi"]);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        size.role = string2Result;
        if (isImageFileResult) {
          let VIDEO = AttachmentType.IMAGE;
        } else if (isVideoFileResult) {
          VIDEO = AttachmentType.VIDEO;
        } else {
          VIDEO = isAudioFileResult ? AttachmentType.AUDIO : AttachmentType.OTHER;
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
        const str5 = intl2.string(util.t.jCV1Tz);
        obj = { attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags, shouldAgeVerify };
        const merged = Object.assign(ExplicitMediaUtils.getAttachmentObscurityProps(obj));
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
    isWebPlayerVideoFileResult = MediaFormatTesters.isWebPlayerVideoFile(filename);
    tmp9 = null != length && index < length.length;
  });
};