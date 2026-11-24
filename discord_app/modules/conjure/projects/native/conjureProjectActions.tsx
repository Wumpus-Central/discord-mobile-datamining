// === Module 18429: conjureProjectActions ===

// Module 18429 (conjureProjectActions)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import CopyIcon from "CopyIcon" /* 5617 */;
import ChannelUtils from "ChannelUtils" /* 6675 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7541 */;
import conjureProjectMute from "conjureProjectMute" /* 7544 */;
import conjureRemoveApp from "conjureRemoveApp" /* 12293 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 18342 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 18431 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 7563 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7576 */;

const require = globalThis.__r;

require = fn;
let closure_13 = async function _importIntoProject(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = id;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          c4 = 1;
          c5 = 1;
          const obj5 = { value: require("ConjureArchivePicker").pickConjureArchive(), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_130_2 = value;
        if (null == closure_130_2) {
          c5 = 3;
        } else {
          closure_130_4 = closure_131_0(closure_131_2[6]).describeConjureArchiveRejection(closure_130_2);
          if (null != closure_130_4) {
            closure_131_0(closure_131_2[7]).presentError(closure_130_4);
            const obj = closure_131_0(closure_131_2[7]);
          }
          const obj10 = closure_131_0(closure_131_2[6]);
        }
        const obj8 = { key: "ConjureImportOverwrite", title: null, content: null, confirmText: null, onConfirm: null };
        let intl = closure_131_0(closure_131_2[9]).intl;
        const obj9 = { name: closure_130_0.name };
        obj8.title = intl.formatToPlainString(closure_131_1(closure_131_2[10])["Gm+u1+"], obj9);
        let intl2 = closure_131_0(closure_131_2[9]).intl;
        obj8.content = intl2.string(closure_131_1(closure_131_2[10]).M7H3sJ);
        const intl3 = closure_131_0(closure_131_2[9]).intl;
        obj8.confirmText = intl3.string(closure_131_1(closure_131_2[10]).gFHykw);
        closure_130_3 = closure_131_3(async () => {
          if (closure_2_1 != null) {
            closure_2_1();
          }
          const intl2 = tmp3(1112).intl;
          await tmp3(18430).sendConjureArchiveImport(id.id, closure_2_2, intl2.string(v2(4192).Owerd3));
          if (1 === tmp7) {
            dependencyMap = 0;
            const intl = tmp3(1112).intl;
            tmp3(5598).presentError(intl.string(v2(4192)["Q+l4Hv"]));
            c3 = 3;
            tmp3(5598);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            dependencyMap = 0;
          }
          return value;
        });
        obj8.onConfirm = function onConfirm() {
          const self = this;
          const apply = closure_1_3.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        closure_131_0(closure_131_2[8]).showConfirmModal(obj8);
        const obj2 = closure_131_0(closure_131_2[8]);
      }
    } catch (tmp33) {
      c5 = tmp;
      throw tmp33;
    }
  }
};
function deleteConjureProject(project, target) {
  _require = project;
  if (null == target) {
    const obj3 = { key: "ConjureProjectDelete", title: null, content: null, confirmText: null, onConfirm: null };
    let intl = require("util").intl;
    const obj4 = { name: project.name };
    obj3.title = intl.formatToPlainString(_modDef4192.CJBhb2, obj4);
    const intl2 = require("util").intl;
    obj3.content = intl2.string(_modDef4192["0OmrVn"]);
    const intl3 = require("util").intl;
    obj3.confirmText = intl3.string(require("util").t.oyYWHE);
    obj3.onConfirm = function onConfirm() {
      const result = ConjureActionCreators.deleteProjectInBackground(project.id, () => {
        const intl = project(1112).intl;
        return project(5598).presentError(intl.string(closure_1_1(4192)["0XDHob"]));
      });
    };
    require("AlertModal").showConfirmModal(obj3);
    const obj2 = require("AlertModal");
  } else {
    const obj = { project, target, action: "delete" };
    openConjureRemoveAppAlertDefault(obj);
  }
}
let ConjureConnectionStore = fn(7563);
({ ensureConnection: hasOwnProperty, sendUserMessage: closure_6 } = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const ConjureProjectStore = fn(6808);
({ canPublishProject: closure_9, canRemixProject: closure_10, isProjectOwner: closure_11 } = ConjureProjectStore);
const StaticChannelRoute = fn(4773).StaticChannelRoute;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/conjureProjectActions.tsx");

export function exportConjureProject(project, fn) {
  if (fn != null) {
    fn();
  }
  hasOwnProperty(project.id);
  const intl = util.intl;
  timestampProducer(project.id, intl.string(_modDef4192.oU20rd));
}
export function importConjureProject(project, UserStore) {
  (function importIntoProject() {
    const self = this;
    const apply = closure_1_13.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(project, UserStore).catch(() => {
    const intl = project(1112).intl;
    project(5598).presentError(intl.string(closure_1_1(4192)["Q+l4Hv"]));
  });
}
export function copyConjureProjectLink(project, guild_id) {
  const obj = ClipboardUtils;
  obj.copy(ChannelUtils.getChannelPermalink(guild_id, StaticChannelRoute.CONJURE_PROJECT, project.id));
  ToastUtils.presentLinkCopied();
}
export function copyConjureProjectId(project) {
  ClipboardUtils.copy(project.id);
  const obj3 = { text: null, icon: null };
  const intl = util.intl;
  obj3.text = intl.string(_modDef4192.CmfaZG);
  obj3.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open("CONJURE_PROJECT_ID_COPIED", obj3);
}
export function canUnpublishConjureUserApp(project) {
  let result = closure_1_11(project);
  if (result) {
    result = conjureRemoveApp.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  return result;
}
export { deleteConjureProject };
export function conjureProjectActions(project) {
  project = project.project;
  ({ guildId: importDefault, muted } = project);
  ({ removeTarget: asyncGeneratorStep, openChat: UserStore, onOpenSettings } = project);
  const tmp2 = closure_11(project);
  items = [];
  let intl = project(muted[9]).intl;
  const tmp6 = require("module_4192");
  if (muted) {
    let s9rCuH = tmp6.s9rCuH;
    let tmp8 = importDefault;
  } else {
    s9rCuH = tmp6["a+i/As"];
    tmp8 = importDefault;
  }
  let obj = { label: intl.string(s9rCuH), IconComponent: null, action: null };
  if (muted) {
    let BellSlashIcon = tmp3(muted[18]).BellIcon;
  } else {
    BellSlashIcon = tmp3(muted[19]).BellSlashIcon;
  }
  obj.IconComponent = BellSlashIcon;
  obj.action = function action() {
    return conjureProjectMute.setConjureProjectMuted(project.id, !muted);
  };
  items.push(obj);
  if (closure_10(project)) {
    let obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = tmp3(muted[9]).intl;
    obj2.label = intl2.string(tmp8(muted[10]).XWgAfc);
    obj2.IconComponent = tmp3(muted[21]).PaperPlusIcon;
    obj2.action = project.onRemix;
    items.push(obj2);
  }
  let obj3 = { label: null, IconComponent: null, action: null };
  const intl3 = tmp3(muted[9]).intl;
  obj3.label = intl3.string(tmp8(muted[10]).WsEEP7);
  obj3.IconComponent = project(muted[22]).DownloadIcon;
  obj3.action = function action() {
    if (UserStore != null) {
      tmp2();
    }
    hasOwnProperty(project.id);
    const intl = util.intl;
    timestampProducer(project.id, intl.string(_modDef4192.oU20rd));
  };
  items.push(obj3);
  if (tmp2) {
    const obj4 = { label: null, IconComponent: null, action: null };
    const intl4 = tmp3(muted[9]).intl;
    obj4.label = intl4.string(tmp8(muted[10]).rWGY3e);
    obj4.IconComponent = tmp3(muted[23]).FileUpIcon;
    obj4.action = function action() {
      (function importIntoProject() {
        const self = this;
        const apply = closure_1_13.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(project, UserStore).catch(() => {
        const intl = project(1112).intl;
        project(5598).presentError(intl.string(closure_1_1(4192)["Q+l4Hv"]));
      });
    };
    items.push(obj4);
  }
  const obj5 = { label: null, IconComponent: null, action: null };
  const intl5 = tmp3(muted[9]).intl;
  obj5.label = intl5.string(project(muted[9]).t.WqhZss);
  obj5.IconComponent = project(muted[24]).LinkIcon;
  obj5.action = function action() {
    const obj = ClipboardUtils;
    obj.copy(ChannelUtils.getChannelPermalink(importDefault, StaticChannelRoute.CONJURE_PROJECT, project.id));
    ToastUtils.presentLinkCopied();
  };
  items.push(obj5);
  const obj6 = { label: null, IconComponent: null, action: null };
  const intl6 = tmp3(muted[9]).intl;
  obj6.label = intl6.string(tmp8(muted[10])["nm/zuU"]);
  obj6.IconComponent = project(muted[25]).IdIcon;
  obj6.action = function action() {
    ClipboardUtils.copy(project.id);
    const obj3 = { text: null, icon: null };
    const intl = util.intl;
    obj3.text = intl.string(_modDef4192.CmfaZG);
    obj3.icon = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open("CONJURE_PROJECT_ID_COPIED", obj3);
  };
  items.push(obj6);
  let tmp15 = closure_9(project);
  if (tmp15) {
    tmp15 = null != onOpenSettings;
  }
  if (tmp15) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp15 = !ConjureConnectionStore.isAccessRefused(project.id, id);
  }
  if (tmp15) {
    const obj7 = { label: null, IconComponent: null, action: null };
    const intl7 = tmp3(muted[9]).intl;
    obj7.label = intl7.string(tmp8(muted[10]).FzfmQ8);
    obj7.IconComponent = tmp3(muted[26]).SettingsIcon;
    obj7.action = onOpenSettings;
    items.push(obj7);
  }
  let result = closure_11(project);
  if (result) {
    result = tmp3(muted[15]).isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
    const tmp3Result = tmp3(muted[15]);
  }
  if (result) {
    const obj8 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl8 = tmp3(muted[9]).intl;
    obj8.label = intl8.string(tmp8(muted[10]).jYAR58);
    obj8.IconComponent = tmp3(muted[27]).EyeSlashIcon;
    obj8.action = function action() {
      return openConjureUnpublishUserAppAlertDefault(project);
    };
    items.push(obj8);
  }
  if (tmp2) {
    const obj9 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl9 = tmp3(muted[9]).intl;
    obj9.label = intl9.string(tmp3(muted[9]).t.oyYWHE);
    obj9.IconComponent = tmp3(muted[29]).TrashIcon;
    obj9.action = function action() {
      deleteConjureProject(project, asyncGeneratorStep);
    };
    items.push(obj9);
  }
  return items;
}