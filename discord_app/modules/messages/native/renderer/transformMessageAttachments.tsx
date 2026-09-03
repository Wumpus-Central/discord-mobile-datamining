// === Module 8136: transformMessageAttachments ===

// Module 8136 (transformMessageAttachments)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import Changeset from "Changeset" /* 7854 */;

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
  return found.map((id) => {
    ({ proxy_url, url, filename, width, height, flags } = id);
    ({ size, description, duration_secs, waveform, id, placeholder, placeholder_version } = id);
    let obj = closure_1_0(closure_1_2[3]);
    const result = obj.rememberMediaPlaybackFacts(id);
    obj1 = closure_1_0(closure_1_2[4]);
    const isImageFileResult = obj1.isImageFile(filename);
    const obj3 = closure_1_0(closure_1_2[4]);
    const isAudioFileResult = closure_1_0(closure_1_2[4]).isAudioFile(filename);
    const isVideoFileResult = closure_1_0(closure_1_2[4]).isVideoFile(filename);
    const obj4 = closure_1_0(closure_1_2[4]);
    let tmp8 = isImageFileResult;
    const obj5 = closure_1_0(closure_1_2[4]);
    if (!isImageFileResult) {
      tmp8 = isVideoFileResult;
    }
    if (tmp9) {
      const size2 = arr[arg1];
    }
    let tmpResult = tmp(tmp2[2]);
    if (isImageFileResult) {
      if (null != width) {
        if (null != height) {
          const obj6 = closure_1_1(tmp2[5]);
          let imageSrc = obj6.getImageSrc(proxy_url, width, height, !closure_2);
        }
        tmpResult = tmp(tmp2[6]);
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
          if (tmp8) {
            num4 = 0;
            if (null != width2) {
              num4 = width2;
            }
          }
        }
        const result1 = tmp(tmp2[7]).sanitizeMediaDimension(num4);
        const tmpResult1 = tmp(tmp2[7]);
        let num5 = 0;
        if (closure_1) {
          num5 = 0;
          if (tmp8) {
            num5 = 0;
            if (null != height2) {
              num5 = height2;
            }
          }
        }
        const result2 = tmp(tmp2[7]).sanitizeMediaDimension(num5);
        const tmpResult2 = tmp(tmp2[7]);
        if (flags == null) {
          flags = 0;
        }
        let tmp28;
        if (tmpResult3.hasFlag(flags, closure_1_4.IS_CLIP)) {
          obj = { attachmentTagText: null, attachmentTagIconType: "clip", attachmentTagBackgroundColor: null, attachmentTagTextColor: null };
          const intl = tmp(tmp2[8]).intl;
          obj[0] = intl.string(tmp(tmp2[8]).t.gESDiU);
          ({ clipTagBackgroundColor: obj11[2], clipTagTextColor: obj11[3] } = closure_9);
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
        obj = { url: null, isSuspiciousDownload: null, videoUrl: null, filename: null, size: null, description: null, alt: null, altTextHint: null, showDescription: null, durationSecs: null, waveform: null, width: null, height: null, hint: null, role: null, attachmentType: null, id: null, isAnimated: null, uploaderId: null, uploaderItemId: null, backgroundColor: null, placeholder: null, placeholderVersion: null, mediaViewerBufferForPlaybackMs: 1000, mediaViewerBufferForPlaybackAfterRebufferMs: 1000, mediaViewerMinBufferMs: 20000, mediaViewerMaxBufferMs: 20000, mediaViewerEnableDecoderFallback: false, mediaViewerEnableAsyncBufferQueueing: true, mediaViewerHttpEngine: null, srcIsAnimated: null, inlinePlaybackDisabled: null };
        obj[0] = localUri;
        let tmp30 = null != localUri;
        if (tmp30) {
          tmp30 = null != tmp(tmp2[9]).isSuspiciousDownload(localUri);
          const tmpResult4 = tmp(tmp2[9]);
        }
        obj[1] = tmp30;
        obj[2] = tmp16;
        obj[3] = closure_1_1(tmp2[10])(id);
        tmpResult3 = tmp(tmp2[2]);
        obj[4] = closure_1_1(tmp2[11]).filesize(size);
        obj[5] = description;
        const intl2 = tmp(tmp2[8]).intl;
        const obj14 = closure_1_1(tmp2[11]);
        obj[6] = intl2.string(tmp(tmp2[8]).t.jCV1Tz).toUpperCase();
        const intl3 = tmp(tmp2[8]).intl;
        obj[7] = intl3.string(tmp(tmp2[8]).t.fSiQ3A);
        obj[8] = closure_3;
        obj[9] = duration_secs;
        obj[10] = waveform;
        obj[11] = result1;
        obj[12] = result2;
        const intl4 = tmp(tmp2[8]).intl;
        const string = intl4.string;
        const t = tmp(tmp2[8]).t;
        if (isVideoFileResult) {
          let stringResult = string(t["BEWw/7"]);
        } else {
          stringResult = string(t.IPzNKE);
        }
        obj[13] = stringResult;
        const intl5 = tmp(tmp2[8]).intl;
        const string2 = intl5.string;
        const t2 = tmp(tmp2[8]).t;
        if (isVideoFileResult) {
          let string2Result = string2(t2["/SCpvi"]);
        } else {
          string2Result = string2(t2.fKyfca);
        }
        obj[14] = string2Result;
        if (isImageFileResult) {
          let VIDEO = tmp35.IMAGE;
        } else if (isVideoFileResult) {
          VIDEO = tmp35.VIDEO;
        } else {
          VIDEO = isAudioFileResult ? tmp35.AUDIO : tmp35.OTHER;
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
        obj[30] = tmp12;
        obj[31] = isWebPlayerVideoFileResult;
        const str5 = intl2.string(tmp(tmp2[8]).t.jCV1Tz);
        const tmp39 = closure_6;
        obj1 = { attachment: null, shouldObscureSpoiler: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null };
        obj1[0] = id;
        obj1[1] = closure_5;
        obj1[2] = closure_7;
        obj1[3] = closure_8;
        const merged = Object.assign(tmp(tmp2[12]).getAttachmentObscurityProps(obj1));
        const merged1 = Object.assign(tmp28);
        return obj;
      }
    }
    let tmp13 = isVideoFileResult;
    if (isVideoFileResult) {
      let tmp14 = closure_1;
      if (!closure_1) {
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
};