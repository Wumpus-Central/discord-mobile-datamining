// discord_app/modules/user_profile/UserProfileClipsGalleryWidgetTypes.tsx
function convertClip(gameId) {
  let obj = { game_id: gameId.gameId, title: gameId.title, tags: gameId.tags };
  if ("saved" === gameId.status) {
    obj = {};
    const merged = Object.assign(obj);
    ({ id: obj3.id, fileId: obj3.file_id } = gameId);
  } else {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.upload_filename = gameId.uploadFilename;
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
    tmp = importDefault(659)(this.clips, clips.clips);
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
const result = require("set").fileFinishedImporting("modules/user_profile/UserProfileClipsGalleryWidgetTypes.tsx");

export { ClipsGalleryWidget };
export const WIDGET_CLIP_CONTENT_TYPE = "video/mp4";