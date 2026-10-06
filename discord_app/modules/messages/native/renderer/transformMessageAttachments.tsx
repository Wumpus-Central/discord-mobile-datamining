// === Module 13038: transformMessageAttachments ===

// Module 13038 (transformMessageAttachments)
import Constants from "Constants" /* 1085 */;
import intl8 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5046 */;
import _modDef7284 from "module_7284" /* 7284 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7603 */;
import sanitizeMediaDimension3 from "sanitizeMediaDimension" /* 7801 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 7802 */;
import ExplicitMediaUtils from "ExplicitMediaUtils" /* 7819 */;
import SuspiciousDownloadUtils from "SuspiciousDownloadUtils" /* 7821 */;
import getDisplayFilenameDefault from "getDisplayFilename" /* 7951 */;
import MediaPlaybackFacts from "MediaPlaybackFacts" /* 10006 */;
import PlaintextFilePreviewHelpers from "PlaintextFilePreviewHelpers" /* 11336 */;
import size from "module_2" /* 2 */;

const AttachmentType = RowGeneratorConstants.AttachmentType;
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformMessageAttachments.tsx");

export default function transformMessageAttachments(arg0) {
  let attachments;
  let backgroundColor;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let enabledContentHarmTypeFlags;
  let shouldAgeVerify;
  let shouldObscureSpoiler;
  let showDescription;
  ({ attachments, uploadAttachments: require, shouldInlineAttachmentMedia: importDefault, gifAutoPlay: dependencyMap, viewImageDescriptions: AttachmentType, useReducedMotion: MessageAttachmentFlags, shouldObscureSpoiler: closure_5, themedBackgroundColor: closure_6, enabledContentHarmTypeFlags: closure_7, shouldAgeVerify: closure_8, colors: closure_9 } = arg0);
  const found = attachments.filter((flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      const obj = FlagUtils;
      tmp = !obj.hasFlag(flags.flags, MessageAttachmentFlags.IS_THUMBNAIL);
    }
    return tmp;
  });
  return found.map((attachment, index) => {
    let AUDIO;
    let description;
    let duration_secs;
    let filename;
    let flags;
    let height;
    let id;
    let imageSrc;
    let intl;
    let intl5;
    let obj12;
    let placeholder;
    let placeholder_version;
    let proxy_url;
    let size2;
    let str6;
    let string2Result;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let tmp18;
    let tmp36;
    let uploaderId;
    let uploaderItemId;
    let url;
    let waveform;
    let width;
    ({ proxy_url, url, filename, width, height, flags } = attachment);
    ({ size, description, duration_secs, waveform, id, placeholder, placeholder_version } = attachment);
    const obj = MediaPlaybackFacts;
    const result = obj.rememberMediaPlaybackFacts(attachment);
    const obj2 = MediaFormatTesters;
    const isImageFileResult = obj2.isImageFile(filename);
    const obj3 = MediaFormatTesters;
    const isAudioFileResult = obj3.isAudioFile(filename);
    const obj4 = MediaFormatTesters;
    const isVideoFileResult = obj4.isVideoFile(filename);
    let tmp8 = isImageFileResult;
    const obj5 = MediaFormatTesters;
    const isWebPlayerVideoFileResult = obj5.isWebPlayerVideoFile(filename);
    if (!isImageFileResult) {
      tmp8 = isVideoFileResult;
    }
    const tmp9 = null != require && index < require.length;
    if (tmp9) {
      size2 = require[index];
    }
    let num = flags;
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    if (flags == null) {
      num = 0;
    }
    const hasFlagResult = hasFlag(num, MessageAttachmentFlags.IS_ANIMATED);
    MediaFormatTesters;
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj6 = RowGeneratorUtilsDefault;
          imageSrc = obj6.getImageSrc(proxy_url, width, height, !dependencyMap);
        }
        let str4 = "default";
        const tmpResult10 = PlatformUtils;
        if (tmpResult10.isAndroid()) {
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
        const sanitizeMediaDimension = sanitizeMediaDimension3.sanitizeMediaDimension;
        sanitizeMediaDimension3;
        if (importDefault) {
          num4 = 0;
          if (tmp8) {
            num4 = 0;
            if (null != width2) {
              num4 = width2;
            }
          }
        }
        const result1 = sanitizeMediaDimension(num4);
        let num5 = 0;
        const sanitizeMediaDimension2 = sanitizeMediaDimension3.sanitizeMediaDimension;
        sanitizeMediaDimension3;
        if (importDefault) {
          num5 = 0;
          if (tmp8) {
            num5 = 0;
            if (null != height2) {
              num5 = height2;
            }
          }
        }
        const result2 = sanitizeMediaDimension2(num5);
        const hasFlag2 = FlagUtils.hasFlag;
        FlagUtils;
        if (flags == null) {
          flags = 0;
        }
        let tmp33;
        if (hasFlag2(flags, MessageAttachmentFlags.IS_CLIP)) {
          const obj7 = { attachmentTagText: intl.string(intl8.t.gESDiU), attachmentTagIconType: "clip", attachmentTagBackgroundColor: null, attachmentTagTextColor: null };
          intl = intl8.intl;
          ({ clipTagBackgroundColor: obj8.attachmentTagBackgroundColor, clipTagTextColor: obj8.attachmentTagTextColor } = closure_9);
          tmp33 = obj7;
        }
        let localUri = imageSrc;
        if (null != size2) {
          localUri = imageSrc;
          if (null != size2.localUri) {
            localUri = imageSrc;
            if (tmp8) {
              localUri = imageSrc;
              if (importDefault) {
                localUri = size2.localUri;
              }
            }
          }
        }
        let result3 = !isImageFileResult && !isVideoFileResult && !isAudioFileResult && null == size2 && null != localUri && "" !== localUri;
        if (result3) {
          const tmpResult14 = PlaintextFilePreviewHelpers;
          result3 = tmpResult14.isPlaintextPreviewableFile(filename);
        }
        const size1 = { url: localUri, isSuspiciousDownload: tmp36, textPreviewLabel: stringResult, textPreviewHint: stringResult1, videoUrl: tmp18, filename: getDisplayFilenameDefault(attachment), size: obj12.filesize(size), description, alt: str6.toUpperCase(), altTextHint: intl5.string(intl8.t.fSiQ3A), showDescription: AttachmentType, durationSecs: duration_secs, waveform, width: result1, height: result2, hint: stringResult2, role: string2Result, attachmentType: AUDIO, id, isAnimated: !MessageAttachmentFlags, uploaderId, uploaderItemId, backgroundColor, placeholder, placeholderVersion: placeholder_version, mediaViewerBufferForPlaybackMs: 1000, mediaViewerBufferForPlaybackAfterRebufferMs: 1000, mediaViewerMinBufferMs: 20000, mediaViewerMaxBufferMs: 20000, mediaViewerEnableDecoderFallback: false, mediaViewerEnableAsyncBufferQueueing: true, mediaViewerHttpEngine: str4, srcIsAnimated: hasFlagResult, inlinePlaybackDisabled: isWebPlayerVideoFileResult };
        tmp36 = null != localUri;
        if (tmp36) {
          const tmpResult15 = SuspiciousDownloadUtils;
          tmp36 = null != tmpResult15.isSuspiciousDownload(localUri);
        }
        stringResult = undefined;
        if (result3) {
          const intl2 = intl8.intl;
          stringResult = intl2.string(intl8.t["HO/oXl"]);
        }
        stringResult1 = undefined;
        if (result3) {
          const intl3 = intl8.intl;
          stringResult1 = intl3.string(intl8.t["0PQYk3"]);
        }
        obj12 = _modDef7284;
        const intl4 = intl8.intl;
        str6 = intl4.string(intl8.t.jCV1Tz);
        intl5 = intl8.intl;
        const intl6 = intl8.intl;
        const string = intl6.string;
        const t = intl8.t;
        if (isVideoFileResult) {
          stringResult2 = string(t["BEWw/7"]);
        } else {
          stringResult2 = string(t.IPzNKE);
        }
        const intl7 = intl8.intl;
        const string2 = intl7.string;
        const t2 = intl8.t;
        if (isVideoFileResult) {
          string2Result = string2(t2["/SCpvi"]);
        } else if (tmp14) {
          string2Result = string2(t2.OBp3V3);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        if (isImageFileResult) {
          AUDIO = AttachmentType.IMAGE;
        } else if (isVideoFileResult) {
          AUDIO = AttachmentType.VIDEO;
        } else if (isAudioFileResult) {
          AUDIO = AttachmentType.AUDIO;
        } else {
          AUDIO = result3 ? AttachmentType.PLAINTEXT : AttachmentType.OTHER;
        }
        uploaderId = undefined;
        if (size2 != null) {
          uploaderId = size2.uploaderId;
        }
        uploaderItemId = undefined;
        if (size2 != null) {
          uploaderItemId = size2.uploaderItemId;
        }
        const obj9 = { attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags, shouldAgeVerify };
        const tmpResult16 = ExplicitMediaUtils;
        const merged = Object.assign(tmpResult16.getAttachmentObscurityProps(obj9));
        const merged1 = Object.assign(tmp33);
        return size1;
      }
    }
    let tmp15 = isVideoFileResult;
    if (tmp15) {
      tmp15 = importDefault || null != size2;
    }
    imageSrc = url;
    if (tmp15) {
      let text = url;
      if (null != proxy_url) {
        text = `${proxy_url}?format=webp`;
      }
      let tmp20 = url;
      if (null != proxy_url) {
        tmp20 = url;
        if ("" !== proxy_url) {
          tmp20 = proxy_url;
        }
      }
      imageSrc = text;
      tmp18 = tmp20;
    }
  });
};