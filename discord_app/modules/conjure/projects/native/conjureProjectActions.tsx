// === Module 12304: conjureProjectActions ===

// Module 12304 (conjureProjectActions)
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ToastUtils from "ToastUtils" /* 5698 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import CopyIcon from "CopyIcon" /* 5718 */;
import ChannelUtils from "ChannelUtils" /* 6030 */;
import ClipboardUtils from "ClipboardUtils" /* 7321 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10757 */;
import conjureProjectMute from "conjureProjectMute" /* 10760 */;
import conjureRemoveApp from "conjureRemoveApp" /* 12297 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 12318 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 12322 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10749 */;

const require = globalThis.__r;

require = fn;
let closure_11 = async function _importIntoProject(arg0) {
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
      return { value: "IconComponent", done: null };
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
          closure_130_4 = closure_131_0(closure_131_2[5]).describeConjureArchiveRejection(closure_130_2);
          if (null != closure_130_4) {
            closure_131_0(closure_131_2[6]).presentError(closure_130_4);
            const obj = closure_131_0(closure_131_2[6]);
          }
          const obj10 = closure_131_0(closure_131_2[5]);
        }
        const obj8 = { key: "ConjureImportOverwrite", title: null, content: null, confirmText: null, onConfirm: null };
        let intl = closure_131_0(closure_131_2[8]).intl;
        const obj9 = { name: closure_130_0.name };
        obj8.title = intl.formatToPlainString(closure_131_1(closure_131_2[9])["Gm+u1+"], obj9);
        let intl2 = closure_131_0(closure_131_2[8]).intl;
        obj8.content = intl2.string(closure_131_1(closure_131_2[9]).M7H3sJ);
        const intl3 = closure_131_0(closure_131_2[8]).intl;
        obj8.confirmText = intl3.string(closure_131_1(closure_131_2[9]).gFHykw);
        closure_130_3 = closure_131_3(async () => {
          if (closure_2_1 != null) {
            closure_2_1();
          }
          const intl2 = tmp3(1125).intl;
          await tmp3(12305).sendConjureArchiveImport(id.id, closure_2_2, intl2.string(v2(3863).Owerd3));
          if (1 === tmp7) {
            dependencyMap = 0;
            const intl = tmp3(1125).intl;
            tmp3(5698).presentError(intl.string(v2(3863)["Q+l4Hv"]));
            c3 = 3;
            tmp3(5698);
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
        closure_131_0(closure_131_2[7]).showConfirmModal(obj8);
        const obj2 = closure_131_0(closure_131_2[7]);
      }
    } catch (tmp33) {
      c5 = tmp;
      throw tmp33;
    }
  }
};
function deleteConjureProject(project, removeTarget) {
  _require = project;
  if (null == removeTarget) {
    const obj3 = { key: "ConjureProjectDelete", title: null, content: null, confirmText: null, onConfirm: null };
    let intl = require("util").intl;
    const obj4 = { name: project.name };
    obj3.title = intl.formatToPlainString(_modDef3863.CJBhb2, obj4);
    const intl2 = require("util").intl;
    obj3.content = intl2.string(_modDef3863["0OmrVn"]);
    const intl3 = require("util").intl;
    obj3.confirmText = intl3.string(require("util").t.oyYWHE);
    obj3.onConfirm = function onConfirm() {
      const result = ConjureActionCreators.deleteProjectInBackground(project.id, () => {
        const intl = project(1125).intl;
        return project(5698).presentError(intl.string(closure_1_1(3863)["0XDHob"]));
      });
    };
    require("AlertModal").showConfirmModal(obj3);
    const obj2 = require("AlertModal");
  } else {
    const obj = { project, target: removeTarget, action: "delete" };
    openConjureRemoveAppAlertDefault(obj);
  }
}
const ConjureConnectionStore = fn(10733);
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
const ConjureProjectStore = fn(6808);
({ canPublishProject: closure_7, canRemixProject: closure_8, isProjectOwner: closure_9 } = ConjureProjectStore);
const StaticChannelRoute = fn(4863).StaticChannelRoute;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/conjureProjectActions.tsx");

export const exportConjureProject = function exportConjureProject(project, fn) {
  if (fn != null) {
    fn();
  }
  React4(project.id);
  const intl = util.intl;
  hasOwnProperty(project.id, intl.string(_modDef3863.oU20rd));
};
export const importConjureProject = function importConjureProject(project, arg1) {
  (function importIntoProject() {
    const self = this;
    const apply = closure_1_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(project, arg1).catch(() => {
    const intl = project(1125).intl;
    project(5698).presentError(intl.string(closure_1_1(3863)["Q+l4Hv"]));
  });
};
export const copyConjureProjectLink = function copyConjureProjectLink(project, guild_id) {
  const obj = ClipboardUtils;
  obj.copy(ChannelUtils.getChannelPermalink(guild_id, StaticChannelRoute.CONJURE, project.id));
  ToastUtils.presentLinkCopied();
};
export const copyConjureProjectId = function copyConjureProjectId(project) {
  ClipboardUtils.copy(project.id);
  const obj3 = { text: null, icon: null };
  const intl = util.intl;
  obj3.text = intl.string(_modDef3863.CmfaZG);
  obj3.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open("CONJURE_PROJECT_ID_COPIED", obj3);
};
export const canUnpublishConjureUserApp = function canUnpublishConjureUserApp(project) {
  let result = React6(project);
  if (result) {
    result = conjureRemoveApp.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  return result;
};
export { deleteConjureProject };
export const conjureProjectActions = function conjureProjectActions(project) {
  project = project.project;
  ({ guildId: importDefault, muted } = project);
  const removeTarget = project.removeTarget;
  ({ openChat: closure_4, onOpenSettings } = project);
  const tmp2 = closure_9(project);
  const items = [];
  let intl = project(muted[8]).intl;
  const tmp6 = require("module_3863");
  if (muted) {
    let s9rCuH = tmp6.s9rCuH;
    let tmp8 = importDefault;
  } else {
    s9rCuH = tmp6["a+i/As"];
    tmp8 = importDefault;
  }
  let obj = { label: intl.string(s9rCuH), IconComponent: null, action: null };
  if (muted) {
    let BellSlashIcon = tmp3(muted[17]).BellIcon;
  } else {
    BellSlashIcon = tmp3(muted[18]).BellSlashIcon;
  }
  obj.IconComponent = BellSlashIcon;
  obj.action = function action() {
    return conjureProjectMute.setConjureProjectMuted(project.id, !muted);
  };
  items.push(obj);
  if (closure_8(project)) {
    let obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = tmp3(muted[8]).intl;
    obj2.label = intl2.string(tmp8(muted[9]).XWgAfc);
    obj2.IconComponent = tmp3(muted[20]).RemixIcon;
    obj2.action = project.onRemix;
    items.push(obj2);
  }
  let obj3 = { label: null, IconComponent: null, action: null };
  const intl3 = tmp3(muted[8]).intl;
  obj3.label = intl3.string(tmp8(muted[9]).WsEEP7);
  obj3.IconComponent = project(muted[21]).DownloadIcon;
  obj3.action = function action() {
    if (closure_1_4 != null) {
      tmp2();
    }
    React4(project.id);
    const intl = util.intl;
    hasOwnProperty(project.id, intl.string(_modDef3863.oU20rd));
  };
  items.push(obj3);
  if (tmp2) {
    const obj4 = { label: null, IconComponent: null, action: null };
    const intl4 = tmp3(muted[8]).intl;
    obj4.label = intl4.string(tmp8(muted[9]).rWGY3e);
    obj4.IconComponent = tmp3(muted[22]).FileUpIcon;
    obj4.action = function action() {
      (function importIntoProject() {
        const self = this;
        const apply = closure_1_11.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(project, closure_1_4).catch(() => {
        const intl = project(1125).intl;
        project(5698).presentError(intl.string(closure_1_1(3863)["Q+l4Hv"]));
      });
    };
    items.push(obj4);
  }
  const obj5 = { label: null, IconComponent: null, action: null };
  const intl5 = tmp3(muted[8]).intl;
  obj5.label = intl5.string(project(muted[8]).t.WqhZss);
  obj5.IconComponent = project(muted[23]).LinkIcon;
  obj5.action = function action() {
    const obj = ClipboardUtils;
    obj.copy(ChannelUtils.getChannelPermalink(importDefault, StaticChannelRoute.CONJURE, project.id));
    ToastUtils.presentLinkCopied();
  };
  items.push(obj5);
  const obj6 = { label: null, IconComponent: null, action: null };
  const intl6 = tmp3(muted[8]).intl;
  obj6.label = intl6.string(tmp8(muted[9])["nm/zuU"]);
  obj6.IconComponent = project(muted[24]).IdIcon;
  obj6.action = function action() {
    ClipboardUtils.copy(project.id);
    const obj3 = { text: null, icon: null };
    const intl = util.intl;
    obj3.text = intl.string(_modDef3863.CmfaZG);
    obj3.icon = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open("CONJURE_PROJECT_ID_COPIED", obj3);
  };
  items.push(obj6);
  let tmp15 = closure_7(project);
  if (tmp15) {
    tmp15 = null != onOpenSettings;
  }
  if (tmp15) {
    const obj7 = { label: null, IconComponent: null, action: null };
    const intl7 = tmp3(muted[8]).intl;
    obj7.label = intl7.string(tmp8(muted[9]).FzfmQ8);
    obj7.IconComponent = tmp3(muted[25]).SettingsIcon;
    obj7.action = onOpenSettings;
    items.push(obj7);
  }
  let canRemoveBot;
  if (removeTarget != null) {
    canRemoveBot = removeTarget.canRemoveBot;
  }
  if (true === canRemoveBot) {
    const obj8 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl8 = tmp3(muted[8]).intl;
    const obj9 = { server: removeTarget.guildName };
    obj8.label = intl8.formatToPlainString(tmp8(muted[9])["3gKG2j"], obj9);
    obj8.IconComponent = tmp3(muted[26]).DoorExitIcon;
    obj8.action = function action() {
      return openConjureRemoveAppAlertDefault({ project, target: removeTarget, action: "remove" });
    };
    items.push(obj8);
  }
  let result = closure_9(project);
  if (result) {
    result = tmp3(muted[14]).isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
    const tmp3Result = tmp3(muted[14]);
  }
  if (result) {
    const obj10 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl9 = tmp3(muted[8]).intl;
    obj10.label = intl9.string(tmp8(muted[9]).jYAR58);
    obj10.IconComponent = tmp3(muted[27]).EyeSlashIcon;
    obj10.action = function action() {
      return openConjureUnpublishUserAppAlertDefault(project);
    };
    items.push(obj10);
  }
  if (tmp2) {
    const obj11 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl10 = tmp3(muted[8]).intl;
    obj11.label = intl10.string(tmp3(muted[8]).t.oyYWHE);
    obj11.IconComponent = tmp3(muted[29]).TrashIcon;
    obj11.action = function action() {
      deleteConjureProject(project, removeTarget);
    };
    items.push(obj11);
  }
  return items;
};