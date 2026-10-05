// === Module 7118: UserProfileClipsGalleryWidgetTypes ===

// Module 7118 (UserProfileClipsGalleryWidgetTypes)
import _modDef1342 from "module_1342" /* 1342 */;
import WidgetType from "WidgetType" /* 7112 */;
import size from "module_2" /* 2 */;

function isUploadedWidgetClip(status) {
  return "uploading" !== status.status;
}
function convertClip(gameId) {
  let obj6;
  const obj = { game_id: gameId.gameId, title: gameId.title, tags: gameId.tags };
  if ("saved" === gameId.status) {
    const obj5 = {};
    const merged = Object.assign(obj);
    ({ id: obj3.id, fileId: obj3.file_id, localClipId: obj3.local_clip_id } = gameId);
    obj6 = obj5;
  } else {
    obj6 = {};
    const merged1 = Object.assign(obj);
    ({ uploadFilename: obj2.upload_filename, localClipId: obj2.local_clip_id } = gameId);
  }
  return obj6;
}
class ClipsGalleryWidget {
  constructor(arg0) {
    let clips;
    let id;
    ({ id, clips } = arg0);
    const merged = Object.assign({ type: null });
    merged[0] = WidgetType.WidgetType.CLIPS_GALLERY;
    merged.id = id;
    merged.clips = clips;
    return merged;
  }
  getUploadedClips() {
    const clips = this.clips;
    return clips.filter(isUploadedWidgetClip);
  }
  hasUploadingClips() {
    const clips = this.clips;
    return clips.some((status) => "uploading" === status.status);
  }
  toSubmission() {
    let obj2;
    let uploadedClips;
    const obj = { id: this.id, data: obj2 };
    obj2 = { type: this.type, clips: uploadedClips.map(convertClip) };
    uploadedClips = this.getUploadedClips();
    return obj;
  }
  isUpdatable() {
    return true;
  }
  isDiscardable() {
    return 0 === this.getUploadedClips().length;
  }
  isValid() {
    const self = this;
    const tmp = this.getUploadedClips().length > 0 && !self.hasUploadingClips();
    return tmp;
  }
  isEqual(getUploadedClips) {
    let tmp = getUploadedClips instanceof ClipsGalleryWidget;
    if (tmp) {
      const self = this;
      const tmp4 = _modDef1342;
      const uploadedClips = this.getUploadedClips();
      tmp = tmp4(uploadedClips, getUploadedClips.getUploadedClips());
    }
    return tmp;
  }
  getUniqueKey() {
    return this.type;
  }
  getProfileAnalyticsOptions() {
    return { widgetType: this.type };
  }
  getProfileEditAnalyticsOptions() {
    return { widgetEdited: this.type };
  }
}
const prototype = ClipsGalleryWidget.prototype;
const result = size.fileFinishedImporting("modules/user_profile/UserProfileClipsGalleryWidgetTypes.tsx");

export { isUploadedWidgetClip };
export { ClipsGalleryWidget };
export const WIDGET_CLIP_CONTENT_TYPE = "video/mp4";