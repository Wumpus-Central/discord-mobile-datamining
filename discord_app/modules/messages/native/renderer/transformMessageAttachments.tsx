// === Module 8427: transformMessageAttachments ===

// Module 8427 (transformMessageAttachments)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import Changeset from "Changeset" /* 8158 */;

const AttachmentType = Changeset.AttachmentType;
const MessageAttachmentFlags = ME.MessageAttachmentFlags;
let result = set.fileFinishedImporting("modules/messages/native/renderer/transformMessageAttachments.tsx");

export default function transformMessageAttachments(arg0) {
  ({ attachments, uploadAttachments: require, shouldInlineAttachmentMedia: importDefault, gifAutoPlay: dependencyMap, viewImageDescriptions: AttachmentType, useReducedMotion: MessageAttachmentFlags, shouldObscureSpoiler: closure_5, themedBackgroundColor: closure_6, enabledContentHarmTypeFlags: closure_7, shouldAgeVerify: closure_8, colors: closure_9 } = arg0);
  const found = attachments.filter((flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      tmp = !callback(table[2]).hasFlag(flags.flags, constants.IS_THUMBNAIL);
      const obj = callback(table[2]);
    }
    return tmp;
  });
  return found.map((arg0, arg1) => {
    ({ proxy_url, url, filename, width, height, flags } = arg0);
    ({ size, description, duration_secs, waveform, id, placeholder, placeholder_version } = arg0);
    let obj = closure_1_0(closure_1_2[3]);
    const isImageFileResult = obj.isImageFile(filename);
    obj1 = closure_1_0(closure_1_2[3]);
    const isAudioFileResult = obj1.isAudioFile(filename);
    const isVideoFileResult = closure_1_0(closure_1_2[3]).isVideoFile(filename);
    const obj3 = closure_1_0(closure_1_2[3]);
    let tmp7 = isImageFileResult;
    const obj4 = closure_1_0(closure_1_2[3]);
    if (!isImageFileResult) {
      tmp7 = isVideoFileResult;
    }
    if (tmp8) {
      const size2 = arr[arg1];
    }
    let tmpResult = tmp(tmp2[2]);
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj5 = closure_1_1(tmp2[4]);
          let imageSrc = obj5.getImageSrc(proxy_url, width, height, !closure_2);
        }
        tmpResult = tmp(tmp2[5]);
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
        const result = tmp(tmp2[6]).sanitizeMediaDimension(num4);
        const tmpResult1 = tmp(tmp2[6]);
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
        const result1 = tmp(tmp2[6]).sanitizeMediaDimension(num5);
        const tmpResult2 = tmp(tmp2[6]);
        if (flags == null) {
          flags = 0;
        }
        let tmp27;
        if (tmpResult3.hasFlag(flags, closure_1_4.IS_CLIP)) {
          obj = { attachmentTagText: null, attachmentTagIconType: "clip", attachmentTagBackgroundColor: null, attachmentTagTextColor: null };
          const intl = tmp(tmp2[7]).intl;
          obj[0] = intl.string(tmp(tmp2[7]).t.gESDiU);
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
              if (tmp24) {
                localUri = size2.localUri;
              }
            }
          }
        }
        obj = { url: null, isSuspiciousDownload: null, videoUrl: null, filename: null, size: null, description: null, alt: null, altTextHint: null, showDescription: null, durationSecs: null, waveform: null, width: null, height: null, hint: null, role: null, attachmentType: null, id: null, isAnimated: null, uploaderId: null, uploaderItemId: null, backgroundColor: null, placeholder: null, placeholderVersion: null, mediaViewerBufferForPlaybackMs: 1000, mediaViewerBufferForPlaybackAfterRebufferMs: 1000, mediaViewerMinBufferMs: 20000, mediaViewerMaxBufferMs: 20000, mediaViewerEnableDecoderFallback: false, mediaViewerEnableAsyncBufferQueueing: true, mediaViewerHttpEngine: null, srcIsAnimated: null, inlinePlaybackDisabled: null };
        obj[0] = localUri;
        let tmp29 = null != localUri;
        if (tmp29) {
          tmp29 = null != tmp(tmp2[8]).isSuspiciousDownload(localUri);
          const tmpResult4 = tmp(tmp2[8]);
        }
        obj[1] = tmp29;
        obj[2] = tmp15;
        obj[3] = closure_1_1(tmp2[9])(arg0);
        tmpResult3 = tmp(tmp2[2]);
        obj[4] = closure_1_1(tmp2[10]).filesize(size);
        obj[5] = description;
        const intl2 = tmp(tmp2[7]).intl;
        const obj13 = closure_1_1(tmp2[10]);
        obj[6] = intl2.string(tmp(tmp2[7]).t.jCV1Tz).toUpperCase();
        const intl3 = tmp(tmp2[7]).intl;
        obj[7] = intl3.string(tmp(tmp2[7]).t.fSiQ3A);
        obj[8] = closure_3;
        obj[9] = duration_secs;
        obj[10] = waveform;
        obj[11] = result;
        obj[12] = result1;
        const intl4 = tmp(tmp2[7]).intl;
        const string = intl4.string;
        const t = tmp(tmp2[7]).t;
        if (isVideoFileResult) {
          let stringResult = string(t["BEWw/7"]);
        } else {
          stringResult = string(t.IPzNKE);
        }
        obj[13] = stringResult;
        const intl5 = tmp(tmp2[7]).intl;
        const string2 = intl5.string;
        const t2 = tmp(tmp2[7]).t;
        if (isVideoFileResult) {
          let string2Result = string2(t2["/SCpvi"]);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        obj[14] = string2Result;
        if (isImageFileResult) {
          let VIDEO = tmp34.IMAGE;
        } else if (isVideoFileResult) {
          VIDEO = tmp34.VIDEO;
        } else {
          VIDEO = isAudioFileResult ? tmp34.AUDIO : tmp34.OTHER;
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
        const str5 = intl2.string(tmp(tmp2[7]).t.jCV1Tz);
        const tmp38 = closure_6;
        obj1 = { attachment: null, shouldObscureSpoiler: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null };
        obj1[0] = arg0;
        obj1[1] = closure_5;
        obj1[2] = closure_7;
        obj1[3] = closure_8;
        const merged = Object.assign(tmp(tmp2[11]).getAttachmentObscurityProps(obj1));
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
  });
};