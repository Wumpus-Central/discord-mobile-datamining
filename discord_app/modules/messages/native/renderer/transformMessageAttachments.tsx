// discord_app/modules/messages/native/renderer/transformMessageAttachments.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../../utils/PlatformUtils.tsx";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import hasFlag from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import urlMatchesFileExtension from "../../MediaFormatTesters.tsx";
import noConflictDefault from "../../../../../_runtime/04835_noConflict.js";
import Changeset from "RowGeneratorConstants.tsx";
import sanitizeMediaDimension from "sanitizeMediaDimension.tsx";
import nativeStylePropertiesDefault from "RowGeneratorUtils.tsx";
import getAttachmentObscurityProps from "ExplicitMediaUtils.tsx";
import set from "../../../suspicious_downloads/SuspiciousDownloadUtils.tsx";
import getDisplayFilenameDefault from "../../getDisplayFilename.tsx";

const AttachmentType = Changeset.AttachmentType;
const MessageAttachmentFlags = ME.MessageAttachmentFlags;
let result = obj132.fileFinishedImporting("modules/messages/native/renderer/transformMessageAttachments.tsx");

export default function transformMessageAttachments(arg0) {
  ({ attachments, uploadAttachments: require, shouldInlineAttachmentMedia: importDefault, gifAutoPlay: dependencyMap, viewImageDescriptions: AttachmentType, useReducedMotion: MessageAttachmentFlags, shouldObscureSpoiler: closure_5, themedBackgroundColor: closure_6, enabledContentHarmTypeFlags: closure_7, shouldAgeVerify: closure_8, colors: closure_9 } = arg0);
  const found = attachments.filter((item, index) => {
    let tmp = null == item.flags;
    if (!tmp) {
      tmp = !callback(table[2]).hasFlag(item.flags, constants.IS_THUMBNAIL);
      const obj = callback(table[2]);
    }
    return tmp;
  });
  return found.map((item, index) => {
    ({ proxy_url, url, filename, width, height, flags } = item);
    ({ size, description, duration_secs, waveform, id, placeholder, placeholder_version } = item);
    let obj = urlMatchesFileExtension;
    const isImageFileResult = obj.isImageFile(filename);
    obj1 = urlMatchesFileExtension;
    const isAudioFileResult = obj1.isAudioFile(filename);
    const isVideoFileResult = urlMatchesFileExtension.isVideoFile(filename);
    let tmp7 = isImageFileResult;
    if (!isImageFileResult) {
      tmp7 = isVideoFileResult;
    }
    if (tmp8) {
      const size2 = length[index];
    }
    let tmpResult = hasFlag;
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj5 = nativeStylePropertiesDefault;
          let imageSrc = obj5.getImageSrc(proxy_url, width, height, !closure_2);
        }
        tmpResult = obj1322;
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
        if (closure_1) {
          num4 = 0;
          if (tmp7) {
            num4 = 0;
            if (null != width2) {
              num4 = width2;
            }
          }
        }
        const result = sanitizeMediaDimension.sanitizeMediaDimension(num4);
        const tmpResult1 = sanitizeMediaDimension;
        let num5 = 0;
        if (closure_1) {
          num5 = 0;
          if (tmp7) {
            num5 = 0;
            if (null != height2) {
              num5 = height2;
            }
          }
        }
        const result1 = sanitizeMediaDimension.sanitizeMediaDimension(num5);
        const tmpResult2 = sanitizeMediaDimension;
        if (flags == null) {
          flags = 0;
        }
        let tmp27;
        if (tmpResult3.hasFlag(flags, MessageAttachmentFlags.IS_CLIP)) {
          obj = { attachmentTagText: null, attachmentTagIconType: "clip", attachmentTagBackgroundColor: null, attachmentTagTextColor: null };
          const intl = getSystemLocale.intl;
          obj[0] = intl.string(getSystemLocale.t.gESDiU);
          ({ clipTagBackgroundColor: obj10[2], clipTagTextColor: obj10[3] } = closure_9);
          tmp27 = obj;
        }
        let localUri = imageSrc;
        if (null != size2) {
          localUri = imageSrc;
          if (null != size2.localUri) {
            localUri = imageSrc;
            if (tmp7) {
              localUri = imageSrc;
              if (closure_1) {
                localUri = size2.localUri;
              }
            }
          }
        }
        obj = { url: null, isSuspiciousDownload: null, videoUrl: null, filename: null, size: null, description: null, alt: null, altTextHint: null, showDescription: null, durationSecs: null, waveform: null, width: null, height: null, hint: null, role: null, attachmentType: null, id: null, isAnimated: null, uploaderId: null, uploaderItemId: null, backgroundColor: null, placeholder: null, placeholderVersion: null, mediaViewerBufferForPlaybackMs: 1000, mediaViewerBufferForPlaybackAfterRebufferMs: 1000, mediaViewerMinBufferMs: 20000, mediaViewerMaxBufferMs: 20000, mediaViewerEnableDecoderFallback: false, mediaViewerEnableAsyncBufferQueueing: true, mediaViewerHttpEngine: null, srcIsAnimated: null, inlinePlaybackDisabled: null };
        obj[0] = localUri;
        let tmp29 = null != localUri;
        if (tmp29) {
          tmp29 = null != set.isSuspiciousDownload(localUri);
          const tmpResult4 = set;
        }
        obj[1] = tmp29;
        obj[2] = tmp15;
        obj[3] = getDisplayFilenameDefault(item);
        tmpResult3 = hasFlag;
        obj[4] = noConflictDefault.filesize(size);
        obj[5] = description;
        const intl2 = getSystemLocale.intl;
        obj[6] = intl2.string(getSystemLocale.t.jCV1Tz).toUpperCase();
        const intl3 = getSystemLocale.intl;
        obj[7] = intl3.string(getSystemLocale.t.fSiQ3A);
        obj[8] = closure_3;
        obj[9] = duration_secs;
        obj[10] = waveform;
        obj[11] = result;
        obj[12] = result1;
        const intl4 = getSystemLocale.intl;
        const string = intl4.string;
        const t = getSystemLocale.t;
        if (isVideoFileResult) {
          let stringResult = string(t["BEWw/7"]);
        } else {
          stringResult = string(t.IPzNKE);
        }
        obj[13] = stringResult;
        const intl5 = getSystemLocale.intl;
        const string2 = intl5.string;
        const t2 = getSystemLocale.t;
        if (isVideoFileResult) {
          let string2Result = string2(t2["/SCpvi"]);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        obj[14] = string2Result;
        if (isImageFileResult) {
          let VIDEO = AttachmentType.IMAGE;
        } else if (isVideoFileResult) {
          VIDEO = AttachmentType.VIDEO;
        } else {
          VIDEO = isAudioFileResult ? AttachmentType.AUDIO : AttachmentType.OTHER;
        }
        obj[15] = VIDEO;
        obj[16] = id;
        obj[17] = !closure_4;
        let uploaderId;
        if (size2 != null) {
          uploaderId = size2.uploaderId;
        }
        obj[18] = uploaderId;
        let uploaderItemId;
        if (size2 != null) {
          uploaderItemId = size2.uploaderItemId;
        }
        obj[19] = uploaderItemId;
        obj[20] = closure_6;
        obj[21] = placeholder;
        obj[22] = placeholder_version;
        obj[29] = str4;
        obj[30] = tmp11;
        obj[31] = isWebPlayerVideoFileResult;
        const str5 = intl2.string(getSystemLocale.t.jCV1Tz);
        obj1 = { attachment: null, shouldObscureSpoiler: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null };
        obj1[0] = item;
        obj1[1] = closure_5;
        obj1[2] = closure_7;
        obj1[3] = closure_8;
        const merged = Object.assign(getAttachmentObscurityProps.getAttachmentObscurityProps(obj1));
        const merged1 = Object.assign(tmp27);
        return obj;
      }
    }
    let tmp12 = isVideoFileResult;
    if (isVideoFileResult) {
      let tmp13 = closure_1;
      if (!closure_1) {
        tmp13 = null != size2;
      }
      tmp12 = tmp13;
    }
    imageSrc = url;
    if (tmp12) {
      let text = url;
      if (null != proxy_url) {
        text = `${proxy_url}?format=webp`;
      }
      let tmp17 = url;
      if (null != proxy_url) {
        tmp17 = url;
        if ("" !== proxy_url) {
          tmp17 = proxy_url;
        }
      }
      imageSrc = text;
      tmp15 = tmp17;
    }
    isWebPlayerVideoFileResult = urlMatchesFileExtension.isWebPlayerVideoFile(filename);
    tmp8 = null != length && index < length.length;
  });
};