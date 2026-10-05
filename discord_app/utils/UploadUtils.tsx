// === Module 7243: UploadUtils ===

// Module 7243 (UploadUtils)
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 7244 */;
import clipPayloadUtils from "clipPayloadUtils" /* 7245 */;
import UploadPlatform from "UploadPlatform" /* 7247 */;
import size from "module_2" /* 2 */;

let reName;

let obj = {
  reName: /\.jpe?g$/i,
  name(arg0) {
    return "image" + arg0 + ".jpg";
  },
  type: "image/jpeg"
};
const items = [
  obj,
  {
    reName: /\.jfif$/i,
    name(arg0) {
      return "image" + arg0 + ".jpg";
    },
    type: "image/jpeg"
  },
  {
    reName: /\.png$/i,
    name(arg0) {
      return "image" + arg0 + ".png";
    },
    type: "image/png"
  },
  {
    reName: /\.gif$/i,
    name(arg0) {
      return "image" + arg0 + ".gif";
    },
    type: "image/gif"
  },
  {
    reName: /\.webp$/i,
    name(arg0) {
      return "image" + arg0 + ".webp";
    },
    type: "image/webp"
  },
  {
    reName: /\.avif$/i,
    name(arg0) {
      return "image" + arg0 + ".avif";
    },
    type: "image/avif"
  },
  {
    reName: /\.heic$/i,
    name(arg0) {
      return "image" + arg0 + ".heic";
    },
    type: "image/heic"
  },
  {
    reName: /\.heif$/i,
    name(arg0) {
      return "image" + arg0 + ".heif";
    },
    type: "image/heif"
  },
  {
    reName: /\.dng$/i,
    name(arg0) {
      return "image" + arg0 + ".dng";
    },
    type: "image/x-adobe-dng"
  },
  {
    reName: /\.mov$/i,
    name(arg0) {
      return "video" + arg0 + ".mov";
    },
    type: "video/quicktime"
  },
  {
    reName: /\.qt$/i,
    name(arg0) {
      return "video" + arg0 + ".qt";
    },
    type: "video/quicktime"
  },
  {
    reName: /\.avi$/i,
    name(arg0) {
      return "video" + arg0 + ".avi";
    },
    type: "video/x-msvideo"
  },
  {
    reName: /\.mp4$/i,
    name(arg0) {
      return "video" + arg0 + ".mp4";
    },
    type: "video/mp4"
  },
  {
    reName: /\.webm$/i,
    name(arg0) {
      return "video" + arg0 + ".webm";
    },
    type: "image/webm"
  }
];
let c3 = 524288000;
let c4 = 1073741824;
const result = size.fileFinishedImporting("utils/UploadUtils.tsx");

export const MAX_TOTAL_ATTACHMENT_SIZE = 524288000;
export const MAX_TOTAL_ATTACHMENT_SIZE_1GB = 1073741824;
export const MAX_TOTAL_ATTACHMENT_SIZE_MB = 500;
export const getMaxTotalAttachmentSize = function getMaxTotalAttachmentSize(location) {
  const _location = location.location;
  const obj = NitroFileUploadExperiments;
  return obj.getNitroFileUploadRolloutConfig({ location: _location }).enabled ? c4 : c3;
};
export const getAttachmentPayload = function getAttachmentPayload(id) {
  let filename;
  let tmp = index;
  if (index === undefined) {
    tmp = null;
  }
  let str1;
  if (tmp != null) {
    str1 = tmp.toString();
  }
  if (str1 == null) {
    str1 = id.id;
  }
  const obj = { id: str1, filename, uploaded_filename: id.uploadedFilename };
  if (null != id.description) {
    obj.description = id.description;
  }
  filename = name;
  if (name == null) {
    filename = id.filename;
  }
  if (id.spoiler) {
    obj.is_spoiler = true;
  }
  const tmp3 = "durationSecs" in id && null != id.durationSecs;
  if (tmp3) {
    obj.duration_secs = id.durationSecs;
  }
  const tmp4 = "waveform" in id && null != id.waveform;
  if (tmp4) {
    obj.waveform = id.waveform;
  }
  const tmp5 = "isThumbnail" in id && true === id.isThumbnail;
  if (tmp5) {
    obj.is_thumbnail = id.isThumbnail;
  }
  const tmp6 = "clip" in id && null != id.clip;
  if (tmp6) {
    obj.is_clip = true;
    obj.title = id.clip.name;
    obj.application_id = id.clip.applicationId;
    const obj2 = clipPayloadUtils;
    obj.clip_created_at = obj2.getClipCreatedAt(id.clip.createdAt);
    const obj3 = clipPayloadUtils;
    obj.clip_participant_ids = obj3.getClipParticipantIds(id.clip.users);
    obj.clip_remote_id = id.clip.remoteClipId;
    const obj4 = clipPayloadUtils;
    obj.clip_events_timeline = obj4.getClipEventsTimeline(id.clip);
    const obj5 = clipPayloadUtils;
    obj.clip_sync_timestamp = obj5.getClipSyncTimestamp(id.clip);
  }
  const tmp9 = "item" in id && null != id.item && id.item.platform === UploadPlatform.UploadPlatform.WEB && "mimeType" in id && null != id.mimeType;
  if (tmp9) {
    obj.original_content_type = id.mimeType;
  }
  return obj;
};
export const getFileData = function getFileData(arg0) {
  let closure_0 = arg0;
  let xMLHttpRequest = new XMLHttpRequest();
  const promise = new Promise((arg0, arg1) => {
    let closure_1;
    closure_0 = arg0;
    xMLHttpRequest = arg1;
    xMLHttpRequest.open("GET", closure_0, true);
    xMLHttpRequest.responseType = "blob";
    xMLHttpRequest.onabort = (arg0) => closure_1(arg0);
    xMLHttpRequest.onerror = (arg0) => closure_1(arg0);
    xMLHttpRequest.ontimeout = (arg0) => closure_1(arg0);
    xMLHttpRequest.onload = () => {
      let data;
      if (xMLHttpRequest != null) {
        const response = xMLHttpRequest.response;
        if (response != null) {
          data = response.data;
        }
      }
      return closure_0(data);
    };
    xMLHttpRequest.send();
  });
  return promise;
};
export const getFileContentLength = function getFileContentLength(arg0) {
  let closure_0 = arg0;
  const promise = new Promise((arg0, onerror) => {
    closure_0 = arg0;
    let closure_1 = onerror;
    const xMLHttpRequest = new XMLHttpRequest();
    xMLHttpRequest.open("HEAD", closure_0, true);
    xMLHttpRequest.onload = function() {
      if (xMLHttpRequest.status >= 200) {
        if (xMLHttpRequest.status < 300) {
          const responseHeader = xMLHttpRequest.getResponseHeader("Content-Length");
          if (null != responseHeader) {
            if ("" !== responseHeader) {
              const _parseInt = parseInt;
              closure_0(parseInt(responseHeader, 10));
            }
          }
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Content-Length header is missing");
          closure_1(error);
        }
      }
      const error1 = new Error("HTTP request failed with status code " + xMLHttpRequest.status);
      closure_1(error1);
    };
    xMLHttpRequest.onerror = onerror;
    xMLHttpRequest.onabort = onerror;
    xMLHttpRequest.ontimeout = onerror;
    xMLHttpRequest.send();
  });
  return promise;
};
export const getFile = function getFile(overrideType) {
  let i;
  let overrideFilename;
  let str10;
  let str11;
  let str5;
  let uri;
  ({ uri, i, overrideFilename } = overrideType);
  let str = overrideType.overrideType;
  const parts = uri.split("/");
  const parts1 = str2.split("?");
  let str3;
  if (parts1 != null) {
    if (parts1[0] != null) {
      str3 = str4.toLowerCase();
    }
  }
  if (str3 == null) {
    str3 = "";
  }
  const found = items.find((reName) => {
    reName = reName.reName;
    return reName.test(str3);
  });
  let found1 = found;
  const tmp3 = null == found && null != overrideFilename;
  if (tmp3) {
    found1 = items.find((reName) => {
      reName = reName.reName;
      return reName.test(overrideFilename);
    });
  }
  if (null != found1) {
    if (null != overrideFilename) {
      let combined;
      const str6 = found1.name(i);
      const parts2 = str6.split(".");
      const arr = parts2.pop();
      const lastIndexOfResult = overrideFilename.lastIndexOf(".");
      if (-1 !== lastIndexOfResult) {
        const _HermesInternal2 = HermesInternal;
        combined = "" + overrideFilename.substr(0, lastIndexOfResult) + "." + arr;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + overrideFilename + "." + arr;
      }
      str5 = combined;
    }
    const obj = { uri, filename: str5, type: str10, isVideo: -1 !== str11.indexOf("video"), isImage: -1 !== str.indexOf("image") };
    str10 = str;
    if (str == null) {
      let type;
      if (found1 != null) {
        type = found1.type;
      }
      str10 = type;
    }
    if (str10 == null) {
      str10 = "unknown";
    }
    str11 = str;
    if (str == null) {
      let nameResult;
      if (found1 != null) {
        nameResult = found1.name(i);
      }
      str11 = nameResult;
    }
    if (str11 == null) {
      str11 = "";
    }
    if (str == null) {
      let nameResult1;
      if (found1 != null) {
        nameResult1 = found1.name(i);
      }
      str = nameResult1;
    }
    if (str == null) {
      str = "";
    }
    return obj;
  }
  if (null != found1) {
    str5 = found1.name(i);
  } else {
    str5 = overrideFilename;
    if (overrideFilename == null) {
      str5 = "unknown";
    }
  }
};