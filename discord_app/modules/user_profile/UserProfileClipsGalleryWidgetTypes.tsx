// === Module 7825: UserProfileClipsGalleryWidgetTypes ===

// Module 7825 (UserProfileClipsGalleryWidgetTypes)
import _modDef1331 from "module_1331" /* 1331 */;
import WidgetType from "WidgetType" /* 7818 */;
import size from "module_2" /* 2 */;

function isUploadedWidgetClip(status) {
  return "uploading" !== status.status;
}
function convertClip(gameId) {
  const obj = { game_id: gameId.gameId, title: gameId.title, tags: gameId.tags };
  if ("saved" === gameId.status) {
    const obj5 = {};
    const merged = Object.assign(obj);
    ({ id: obj3.id, fileId: obj3.file_id, localClipId: obj3.local_clip_id } = gameId);
    let obj6 = obj5;
  } else {
    obj6 = {};
    const merged1 = Object.assign(obj);
    ({ uploadFilename: obj2.upload_filename, localClipId: obj2.local_clip_id } = gameId);
  }
  return obj6;
}
let ClipsGalleryWidget;
class ClipsGalleryWidget {
  constructor(arg0) {
    ({ id, clips } = global);
    merged = Object.assign({ type: null });
    merged[0] = closure_0(closure_2[0]).WidgetType.CLIPS_GALLERY;
    merged.id = id;
    merged.clips = clips;
    return merged;
  }
}
const prototype = ClipsGalleryWidget.prototype;
prototype["getUploadedClips"] = function getUploadedClips() {
  const clips = this.clips;
  return clips.filter(isUploadedWidgetClip);
};
prototype["hasUploadingClips"] = function hasUploadingClips() {
  const clips = this.clips;
  return clips.some((status) => "uploading" === status.status);
};
prototype["toSubmission"] = function toSubmission() {
  const obj = { id: this.id, data: null };
  const obj2 = { type: this.type, clips: null };
  const uploadedClips = this.getUploadedClips();
  obj2.clips = uploadedClips.map(convertClip);
  obj.data = obj2;
  return obj;
};
prototype["isUpdatable"] = function isUpdatable() {
  return true;
};
prototype["isDiscardable"] = function isDiscardable() {
  return 0 === this.getUploadedClips().length;
};
prototype["isValid"] = function isValid() {
  const self = this;
  return this.getUploadedClips().length > 0 && !self.hasUploadingClips();
};
prototype["isEqual"] = function isEqual(getUploadedClips) {
  let tmp = getUploadedClips instanceof ClipsGalleryWidget;
  if (tmp) {
    const self = this;
    const uploadedClips = this.getUploadedClips();
    tmp = _modDef1331(uploadedClips, getUploadedClips.getUploadedClips());
  }
  return tmp;
};
prototype["getUniqueKey"] = function getUniqueKey() {
  return this.type;
};
prototype["getProfileAnalyticsOptions"] = function getProfileAnalyticsOptions() {
  return { widgetType: this.type };
};
prototype["getProfileEditAnalyticsOptions"] = function getProfileEditAnalyticsOptions() {
  return { widgetEdited: this.type };
};
const result = size.fileFinishedImporting("modules/user_profile/UserProfileClipsGalleryWidgetTypes.tsx");

export { isUploadedWidgetClip };
export { ClipsGalleryWidget };
export const WIDGET_CLIP_CONTENT_TYPE = "video/mp4";