// discord_app/modules/conjure/publish/ConjurePublishStatusStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import discord_common_shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const map = new Map();
const set = new Set();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const set1 = new Set();
let closure_9 = [];
const Store = initializeDefault.Store;
class ConjurePublishStatusStore extends Store {}
const prototype = ConjurePublishStatusStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ConjureProjectStore);
};
prototype["getPublishStatus"] = function getPublishStatus(id) {
  value = map.get(id);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isProjectPublishing"] = function isProjectPublishing(arg0) {
  return set.has(arg0);
};
prototype["getPublishApprovalUrl"] = function getPublishApprovalUrl(projectId) {
  value = map1.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getPublishProgress"] = function getPublishProgress(projectId) {
  value = map2.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getPublishFailure"] = function getPublishFailure(arg0) {
  value = map3.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isAppChannelPending"] = function isAppChannelPending(id) {
  return set1.has(id);
};
let closure_10 = [];
const conjurePublishStatusStore = new ConjurePublishStatusStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      if (0 === set.size) {
        if (0 === map1.size) {
          if (0 === map2.size) {
            if (0 === map3.size) {
              if (0 === set1.size) {
                return false;
              }
            }
          }
        }
      }
    }
    map.clear();
    set.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    set1.clear();
  },
  CONJURE_PROJECTS_FETCH_SUCCESS: function handleProjectsFetchSuccess() {
    let flag = false;
    const keys = map.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null == ConjureProjectStore.getProject(nextResult)) {
        let deleteResult = map.delete(tmp3);
        flag = true;
      }
      continue;
    }
    const keys1 = map1.keys();
    for (const item10031 of keys1) {
      if (null == ConjureProjectStore.getProject(item10031)) {
        let deleteResult1 = map1.delete(item10031);
        flag = true;
      }
      continue;
    }
    const keys2 = map2.keys();
    for (const item10048 of keys2) {
      if (null == ConjureProjectStore.getProject(item10048)) {
        let deleteResult2 = map2.delete(item10048);
        flag = true;
      }
      continue;
    }
    const keys3 = map3.keys();
    for (const item10065 of keys3) {
      if (null == ConjureProjectStore.getProject(item10065)) {
        let deleteResult3 = map3.delete(item10065);
        flag = true;
      }
      continue;
    }
    return flag ? undefined : false;
  },
  CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function handleProjectPublishStatusUpdate(publishedRevision) {
    ({ projectId, publishState, surface, previewAppChannels, previewDevicePermissions } = publishedRevision);
    if (previewDevicePermissions === undefined) {
      previewDevicePermissions = closure_10;
    }
    publishedRevision = publishedRevision.publishedRevision;
    if (publishedRevision === undefined) {
      publishedRevision = null;
    }
    let publishedAt = publishedRevision.publishedAt;
    if (publishedAt === undefined) {
      publishedAt = null;
    }
    let flag = publishedRevision.publishing;
    if (flag === undefined) {
      flag = false;
    }
    ({ patchNotesSent, newUiUnpublished } = publishedRevision);
    if (newUiUnpublished === undefined) {
      newUiUnpublished = false;
    }
    let deleteResult = !flag;
    if (!flag) {
      deleteResult = map1.delete(projectId);
    }
    let deleteResult1 = !flag;
    if (!flag) {
      deleteResult1 = map2.delete(projectId);
    }
    value = map.get(projectId);
    let deleteResult2 = flag;
    if (!flag) {
      deleteResult2 = null != value && value.publishedRevision !== publishedRevision;
      const tmp10 = null != value && value.publishedRevision !== publishedRevision;
    }
    if (deleteResult2) {
      deleteResult2 = map3.delete(projectId);
    }
    if (null == patchNotesSent) {
      let patchNotesSent1;
      if (value != null) {
        patchNotesSent1 = value.patchNotesSent;
      }
      if (patchNotesSent1 == null) {
        patchNotesSent1 = closure_9;
      }
      patchNotesSent = patchNotesSent1;
    } else {
      let patchNotesSent2;
      if (value != null) {
        patchNotesSent2 = value.patchNotesSent;
      }
      if (patchNotesSent2 == null) {
        patchNotesSent2 = closure_9;
      }
      patchNotesSent2.length === patchNotesSent.length &&
        patchNotesSent2.every(
          (publishedRevision, index) =>
            publishedRevision.publishedRevision === patchNotesSent[index].publishedRevision &&
            publishedRevision.messageId === tmp[index].messageId,
        );
    }
    if (!deleteResult) {
      if (!deleteResult1) {
        if (!deleteResult2) {
          let publishState1;
          if (value != null) {
            publishState1 = value.publishState;
          }
          if (publishState1 === publishState) {
            if (value.surface === surface) {
              if (obj3.areArraysShallowEqual(value.previewAppChannels, previewAppChannels)) {
                let previewDevicePermissions2 = value.previewDevicePermissions;
                if (previewDevicePermissions2 == null) {
                  previewDevicePermissions2 = closure_10;
                }
                if (tmp17Result.areArraysShallowEqual(previewDevicePermissions2, previewDevicePermissions)) {
                  if (value.publishedRevision === publishedRevision) {
                    if (value.publishedAt === publishedAt) {
                      if (value.publishing === flag) {
                        if (value.patchNotesSent === patchNotesSent) {
                          if (value.newUiUnpublished === newUiUnpublished) {
                            return false;
                          }
                        }
                      }
                    }
                  }
                }
                tmp17Result = discord_common_shallowEqual;
              }
              obj3 = discord_common_shallowEqual;
            }
          }
        }
      }
    }
    const result = map.set(projectId, {
      publishState,
      surface,
      previewAppChannels,
      previewDevicePermissions,
      publishedRevision,
      publishedAt,
      publishing: flag,
      patchNotesSent,
      newUiUnpublished,
    });
  },
  CONJURE_PROJECT_PUBLISH_START: function handleProjectPublishStart(projectId) {
    projectId = projectId.projectId;
    set.add(projectId);
    map3.delete(projectId);
  },
  CONJURE_PROJECT_PUBLISH_SETTLE: function handleProjectPublishSettle(projectId) {
    projectId = projectId.projectId;
    let deleteResult = set.delete(projectId);
    value = map.get(projectId);
    let publishing;
    if (value != null) {
      publishing = value.publishing;
    }
    let deleteResult1 = true !== publishing;
    if (deleteResult1) {
      deleteResult1 = map2.delete(projectId);
    }
    if (!deleteResult) {
      deleteResult = deleteResult1;
    }
    return deleteResult;
  },
  CONJURE_PROJECT_PUBLISH_FAILED: function handleProjectPublishFailed(arg0) {
    ({ projectId, message } = arg0);
    if (map3.get(projectId) === message) {
      return false;
    } else {
      const result = map3.set(projectId, message);
    }
  },
  CONJURE_PROJECT_PUBLISH_APPROVAL: function handleProjectPublishApproval(arg0) {
    ({ projectId, approvalUrl } = arg0);
    if (null == approvalUrl) {
      let deleteResult = map1.delete(projectId);
    } else {
      deleteResult = map1.get(projectId) !== approvalUrl;
      if (deleteResult) {
        const result = map1.set(projectId, approvalUrl);
      }
    }
    return deleteResult;
  },
  CONJURE_PROJECT_PUBLISH_PROGRESS: function handleProjectPublishProgress(arg0) {
    ({ projectId, progress } = arg0);
    value = map2.get(projectId);
    let stage;
    if (value != null) {
      stage = value.stage;
    }
    if (stage === progress.stage) {
      return false;
    } else {
      const result = map2.set(projectId, progress);
    }
  },
  CONJURE_PROJECT_APP_CHANNEL_PENDING: function handleProjectAppChannelPending(arg0) {
    ({ projectId, pending } = arg0);
    if (set1.has(projectId) === pending) {
      return false;
    } else if (pending) {
      set1.add(projectId);
    } else {
      set1.delete(projectId);
    }
  },
  CONJURE_PROJECT_PATCH_NOTES_SENT: function handleProjectPatchNotesSent(arg0) {
    ({ projectId, sent } = arg0);
    value = map.get(projectId);
    if (null == value) {
      return false;
    } else {
      const obj2 = {};
      const merged = Object.assign(value);
      let patchNotesSent = value.patchNotesSent;
      if (patchNotesSent == null) {
        patchNotesSent = closure_9;
      }
      const items = [];
      items[
        HermesBuiltin.arraySpread(
          patchNotesSent.filter((publishedRevision) => publishedRevision.publishedRevision !== sent.publishedRevision),
          0,
        )
      ] = sent;
      obj2.patchNotesSent = items;
      const result = map.set(projectId, obj2);
    }
  },
  CONJURE_PROJECT_DELETE_SUCCESS: function handleProjectDeleteSuccess(projectId) {
    projectId = projectId.projectId;
    map.delete(projectId);
    set.delete(projectId);
    map1.delete(projectId);
    map2.delete(projectId);
    map3.delete(projectId);
    set1.delete(projectId);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePublishStatusStore.tsx");

export default conjurePublishStatusStore;
