// discord_app/modules/forums/ForumGuidelinesManager.tsx
import "initialize";

const require = arg1;
const formGuidelinesStorageKey = "formGuidelinesStorageKey";
class ForumGuidelinesManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    set = new Set();
    applyArgumentsResult.seenForumGuidelines = set;
    return applyArgumentsResult;
  }
}
const prototype = ForumGuidelinesManager.prototype;
prototype["_initialize"] = function _initialize() {
  const Storage = require("../../../discord_common/js/packages/storage/Storage.tsx") /* Storage */.Storage;
  const value = Storage.get(formGuidelinesStorageKey);
  if (null != value) {
    const self = this;
    const _Set = Set;
    const set = new Set(value);
    this.seenForumGuidelines = set;
  }
};
prototype["_terminate"] = function _terminate() {
  const Storage = require("../../../discord_common/js/packages/storage/Storage.tsx") /* Storage */.Storage;
  const result = Storage.set(formGuidelinesStorageKey, this.seenForumGuidelines);
};
prototype["markAsSeen"] = function markAsSeen(arg0) {
  const seenForumGuidelines = this.seenForumGuidelines;
  seenForumGuidelines.add(arg0);
  const Storage = require("../../../discord_common/js/packages/storage/Storage.tsx") /* Storage */.Storage;
  const result = Storage.set(formGuidelinesStorageKey, this.seenForumGuidelines);
};
prototype["hasSeen"] = function hasSeen(arg0) {
  const seenForumGuidelines = this.seenForumGuidelines;
  return seenForumGuidelines.has(arg0);
};
const forumGuidelinesManager = new ForumGuidelinesManager();
let result = require("set").fileFinishedImporting("modules/forums/ForumGuidelinesManager.tsx");

export default forumGuidelinesManager;