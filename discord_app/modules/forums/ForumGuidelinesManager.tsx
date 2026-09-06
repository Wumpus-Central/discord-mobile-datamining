// === Module 10269: ForumGuidelinesManager ===

// Module 10269 (ForumGuidelinesManager)
import Storage2 from "Storage" /* 510 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
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
  const Storage = Storage2.Storage;
  value = Storage.get(formGuidelinesStorageKey);
  if (null != value) {
    const self = this;
    const _Set = Set;
    const set = new Set(value);
    this.seenForumGuidelines = set;
  }
};
prototype["_terminate"] = function _terminate() {
  const Storage = Storage2.Storage;
  const result = Storage.set(formGuidelinesStorageKey, this.seenForumGuidelines);
};
prototype["markAsSeen"] = function markAsSeen(arg0) {
  const seenForumGuidelines = this.seenForumGuidelines;
  seenForumGuidelines.add(arg0);
  const Storage = Storage2.Storage;
  const result = Storage.set(formGuidelinesStorageKey, this.seenForumGuidelines);
};
prototype["hasSeen"] = function hasSeen(arg0) {
  const seenForumGuidelines = this.seenForumGuidelines;
  return seenForumGuidelines.has(arg0);
};
const forumGuidelinesManager = new ForumGuidelinesManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/ForumGuidelinesManager.tsx");

export default forumGuidelinesManager;