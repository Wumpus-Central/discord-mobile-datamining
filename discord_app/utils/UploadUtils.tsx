const items = [
  {
    reName: /\.jpe?g$/i,
    name(arg0) {
      return "image" + arg0 + ".jpg";
    },
    type: "image/jpeg"
  },
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
const result = require("set").fileFinishedImporting("utils/UploadUtils.tsx");

export const MAX_TOTAL_ATTACHMENT_SIZE = 524288000;
export const MAX_TOTAL_ATTACHMENT_SIZE_MB = 500;
export const getAttachmentPayload = function getAttachmentPayload(closure_0, closure_1, name) {
  let tmp = closure_1;
  if (closure_1 === undefined) {
    tmp = null;
  }
  let str;
  if (tmp != null) {
    str = tmp.toString();
  }
  if (str == null) {
    str = closure_0.id;
  }
  const obj = { id: str };
  if (null != closure_0.description) {
    obj.description = closure_0.description;
  }
  let filename = name;
  if (name == null) {
    filename = closure_0.filename;
  }
  obj.filename = filename;
  obj.uploaded_filename = closure_0.uploadedFilename;
  if (closure_0.spoiler) {
    obj.is_spoiler = true;
  }
  if (tmp3) {
    obj.duration_secs = closure_0.durationSecs;
  }
  if (tmp4) {
    obj.waveform = closure_0.waveform;
  }
  let tmp5 = "isThumbnail" in closure_0;
  if (tmp5) {
    tmp5 = true === closure_0.isThumbnail;
  }
  if (tmp5) {
    obj.is_thumbnail = closure_0.isThumbnail;
  }
  if (tmp6) {
    obj.is_clip = true;
    obj.title = closure_0.clip.name;
    obj.application_id = closure_0.clip.applicationId;
    obj.clip_created_at = require(4790) /* getClipCreatedAt */.getClipCreatedAt(closure_0.clip.createdAt);
    const obj2 = require(4790) /* getClipCreatedAt */;
    obj.clip_participant_ids = require(4790) /* getClipCreatedAt */.getClipParticipantIds(closure_0.clip.users);
    obj.clip_remote_id = closure_0.clip.remoteClipId;
    const obj3 = require(4790) /* getClipCreatedAt */;
    obj.clip_events_timeline = require(4790) /* getClipCreatedAt */.getClipEventsTimeline(closure_0.clip);
    const obj4 = require(4790) /* getClipCreatedAt */;
  }
  let tmp9 = "item" in closure_0 && null != closure_0.item;
  if (tmp9) {
    tmp9 = closure_0.item.platform === require(4788) /* cancel */.UploadPlatform.WEB;
  }
  if (tmp9) {
    str = "mimeType";
    tmp9 = "mimeType" in closure_0;
  }
  if (tmp9) {
    tmp9 = null != closure_0.mimeType;
  }
  if (tmp9) {
    obj.original_content_type = closure_0.mimeType;
  }
  return obj;
};
export const getFileData = function getFileData(arg0) {
  let closure_0 = arg0;
  let xMLHttpRequest = new XMLHttpRequest();
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    const xMLHttpRequest = arg1;
    xMLHttpRequest.open("GET", closure_0, true);
    xMLHttpRequest.responseType = "blob";
    xMLHttpRequest.onabort = (arg0) => lib(arg0);
    xMLHttpRequest.onerror = (arg0) => lib(arg0);
    xMLHttpRequest.ontimeout = (arg0) => lib(arg0);
    xMLHttpRequest.onload = () => {
      let data;
      if (lib != null) {
        const response = lib.response;
        if (response != null) {
          data = response.data;
        }
      }
      return closure_0(data);
    };
    xMLHttpRequest.send();
  });
};
export const getFileContentLength = function getFileContentLength(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0, onerror) => {
    let closure_0 = arg0;
    let closure_1 = onerror;
    const xMLHttpRequest = new XMLHttpRequest();
    xMLHttpRequest.open("HEAD", closure_0, true);
    xMLHttpRequest.onload = () => {
      if (xMLHttpRequest.status >= 200) {
        if (obj.status < 300) {
          const responseHeader = obj.getResponseHeader("Content-Length");
          if (null != responseHeader) {
            if ("" !== responseHeader) {
              const _parseInt = parseInt;
              callback(parseInt(responseHeader, 10));
            }
          }
          const _Error = Error;
          const error = new Error("Content-Length header is missing");
          onerror(error);
        }
      }
      const error1 = new Error("HTTP request failed with status code " + obj.status);
      onerror(error1);
    };
    xMLHttpRequest.onerror = onerror;
    xMLHttpRequest.onabort = onerror;
    xMLHttpRequest.ontimeout = onerror;
    xMLHttpRequest.send();
  });
};
export const getFile = function getFile(overrideType) {
  let i;
  let overrideFilename;
  let uri;
  ({ uri, i, overrideFilename } = overrideType);
  let str = overrideType.overrideType;
  let str3;
  const parts = uri.split("/");
  str3 = str2;
  const parts1 = str2.split("?");
  str3 = undefined;
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
  if (tmp3) {
    found1 = items.find((reName) => {
      reName = reName.reName;
      return reName.test(overrideFilename);
    });
  }
  if (null != found1) {
    if (null != overrideFilename) {
      const parts2 = found1.name(i).split(".");
      const arr = parts2.pop();
      let concat = overrideFilename.lastIndexOf(".");
      if (-1 !== concat) {
        overrideFilename = overrideFilename.substr(0, concat);
        const _HermesInternal2 = HermesInternal;
        concat = HermesInternal.concat;
        let combined = concat(overrideFilename, ".", arr);
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + overrideFilename + "." + arr;
      }
      const str6 = found1.name(i);
    }
  }
  if (null != found1) {
    let str5 = found1.name(i);
  } else {
    str5 = overrideFilename;
    if (overrideFilename == null) {
      str5 = "unknown";
    }
  }
  const obj = { uri, filename: str5, type: null, isVideo: null, isImage: null };
  let str10 = str;
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
  obj[2] = str10;
  let str11 = str;
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
  obj[3] = -1 !== str11.indexOf("video");
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
  obj[4] = -1 !== str.indexOf("image");
  return obj;
};