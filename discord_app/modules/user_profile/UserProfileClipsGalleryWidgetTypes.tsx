// === Module 7321: convertClip ===

// Module 7321 (convertClip)
import set from "set" /* 2 */;
import isUndefinedOrNullDefault from "isUndefinedOrNull" /* 659 */;
import WidgetType from "WidgetType" /* 7314 */;

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
    obj = Object.create(new.target.prototype);
    obj[0] = require("WidgetType").WidgetType.CLIPS_GALLERY;
    obj.id = id;
    obj.clips = clips;
    return obj;
  }
}
const prototype = ClipsGalleryWidget.prototype;
prototype["toSubmission"] = function toSubmission() {
  let obj = { id: this.id, data: null };
  obj = { type: this.type, clips: clips.map(convertClip) };
  clips = this.clips;
  obj[1] = obj;
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
    tmp = isUndefinedOrNullDefault(this.clips, clips.clips);
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
const result = set.fileFinishedImporting("modules/user_profile/UserProfileClipsGalleryWidgetTypes.tsx");

export { ClipsGalleryWidget };
export const WIDGET_CLIP_CONTENT_TYPE = "video/mp4";