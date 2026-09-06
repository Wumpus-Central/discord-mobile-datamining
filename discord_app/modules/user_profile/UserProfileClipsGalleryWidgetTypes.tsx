// === Module 7629: UserProfileClipsGalleryWidgetTypes ===

// Module 7629 (UserProfileClipsGalleryWidgetTypes)
import _modDef1332 from "module_1332" /* 1332 */;
import WidgetType from "WidgetType" /* 7622 */;
import size from "module_2" /* 2 */;

function convertClip(gameId) {
  let obj = { game_id: gameId.gameId, title: gameId.title, tags: gameId.tags };
  if ("saved" === gameId.status) {
    obj = {};
    const merged = Object.assign(obj);
    ({ id: obj3.id, fileId: obj3.file_id, localClipId: obj3.local_clip_id } = gameId);
  } else {
    obj = {};
    const merged1 = Object.assign(obj);
    ({ uploadFilename: obj2.upload_filename, localClipId: obj2.local_clip_id } = gameId);
  }
  return obj;
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
prototype["toSubmission"] = function toSubmission() {
  let obj = { id: this.id, data: null };
  obj = { type: this.type, clips: null };
  const clips = this.clips;
  obj.clips = clips.map(convertClip);
  obj.data = obj;
  return obj;
};
prototype["isUpdatable"] = function isUpdatable() {
  return true;
};
prototype["isDiscardable"] = function isDiscardable() {
  return 0 === this.clips.length;
};
prototype["isValid"] = function isValid() {
  return this.clips.length > 0;
};
prototype["isEqual"] = function isEqual(clips) {
  let tmp = clips instanceof ClipsGalleryWidget;
  if (tmp) {
    const self = this;
    tmp = _modDef1332(this.clips, clips.clips);
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

export { ClipsGalleryWidget };
export const WIDGET_CLIP_CONTENT_TYPE = "video/mp4";