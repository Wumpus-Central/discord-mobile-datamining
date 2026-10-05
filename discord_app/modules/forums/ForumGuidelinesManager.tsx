// === Module 10078: ForumGuidelinesManager ===

// Module 10078 (ForumGuidelinesManager)
import Storage2 from "Storage" /* 510 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let set;

const formGuidelinesStorageKey = "formGuidelinesStorageKey";
class ForumGuidelinesManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.seenForumGuidelines = new Set();
    new Set();
    return applyArgumentsResult;
  }
  _initialize() {
    const Storage = Storage2.Storage;
    const value = Storage.get(formGuidelinesStorageKey);
    if (null != value) {
      const self = this;
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      this.seenForumGuidelines = new Set(value);
      set = new Set(value);
    }
  }
  _terminate() {
    const Storage = Storage2.Storage;
    const result = Storage.set(formGuidelinesStorageKey, this.seenForumGuidelines);
  }
  markAsSeen(arg0) {
    const seenForumGuidelines = this.seenForumGuidelines;
    seenForumGuidelines.add(arg0);
    const Storage = Storage2.Storage;
    const result = Storage.set(formGuidelinesStorageKey, this.seenForumGuidelines);
  }
  hasSeen(arg0) {
    const seenForumGuidelines = this.seenForumGuidelines;
    return seenForumGuidelines.has(arg0);
  }
}
const prototype = ForumGuidelinesManager.prototype;
const forumGuidelinesManager = new ForumGuidelinesManager();
let result = size.fileFinishedImporting("modules/forums/ForumGuidelinesManager.tsx");

export default forumGuidelinesManager;