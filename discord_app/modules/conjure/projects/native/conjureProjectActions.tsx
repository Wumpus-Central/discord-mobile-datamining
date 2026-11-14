// === Module 13310: conjureProjectActions ===

// Module 13310 (conjureProjectActions)
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ToastUtils from "ToastUtils" /* 6014 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import CopyIcon from "CopyIcon" /* 6033 */;
import ChannelUtils from "ChannelUtils" /* 6356 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7329 */;
import conjureProjectMute from "conjureProjectMute" /* 7332 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import conjureRemoveApp from "conjureRemoveApp" /* 13206 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 13207 */;
import showConjureShareToServerSheetDefault from "showConjureShareToServerSheet" /* 13312 */;
import openConjureMakePersonalAlertDefault from "openConjureMakePersonalAlert" /* 13320 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 13321 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;

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
          const intl2 = tmp3(1113).intl;
          await tmp3(13311).sendConjureArchiveImport(id.id, closure_2_2, intl2.string(v2(4131).Owerd3));
          if (1 === tmp7) {
            dependencyMap = 0;
            const intl = tmp3(1113).intl;
            tmp3(6014).presentError(intl.string(v2(4131)["Q+l4Hv"]));
            c3 = 3;
            tmp3(6014);
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
    obj3.title = intl.formatToPlainString(_modDef4131.CJBhb2, obj4);
    const intl2 = require("util").intl;
    obj3.content = intl2.string(_modDef4131["0OmrVn"]);
    const intl3 = require("util").intl;
    obj3.confirmText = intl3.string(require("util").t.oyYWHE);
    obj3.onConfirm = function onConfirm() {
      const result = ConjureActionCreators.deleteProjectInBackground(project.id, () => {
        const intl = project(1113).intl;
        return project(6014).presentError(intl.string(closure_1_1(4131)["0XDHob"]));
      });
    };
    require("AlertModal").showConfirmModal(obj3);
    const obj2 = require("AlertModal");
  } else {
    const obj = { project, target: removeTarget, action: "delete" };
    openConjureRemoveAppAlertDefault(obj);
  }
}
const ConjureConnectionStore = fn(7365);
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
const ConjureProjectStore = fn(7017);
({ canPublishProject: metroImportDefault, canRemixProject: closure_8, isProjectOwner: closure_9 } = ConjureProjectStore);
const StaticChannelRoute = fn(5162).StaticChannelRoute;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/conjureProjectActions.tsx");

export function exportConjureProject(project, fn) {
  if (fn != null) {
    fn();
  }
  React4(project.id);
  const intl = util.intl;
  hasOwnProperty(project.id, intl.string(_modDef4131.oU20rd));
}
export function importConjureProject(project, arg1) {
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
    const intl = project(1113).intl;
    project(6014).presentError(intl.string(guildId(4131)["Q+l4Hv"]));
  });
}
export function copyConjureProjectLink(project, guild_id) {
  const obj = ClipboardUtils;
  obj.copy(ChannelUtils.getChannelPermalink(guild_id, StaticChannelRoute.CONJURE, project.id));
  ToastUtils.presentLinkCopied();
}
export function copyConjureProjectId(project) {
  ClipboardUtils.copy(project.id);
  const obj3 = { text: null, icon: null };
  const intl = util.intl;
  obj3.text = intl.string(_modDef4131.CmfaZG);
  obj3.icon = CopyIcon.CopyIcon;
  ToastActionCreatorsDefault.open("CONJURE_PROJECT_ID_COPIED", obj3);
}
export function canUnpublishConjureUserApp(project) {
  let result = React6(project);
  if (result) {
    result = conjureRemoveApp.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  return result;
}
export function openConjureAddToAnotherServerSheet(id, guildId) {
  showConjureShareToServerSheetDefault({ projectId: id, guildId, publishOptions: null, addingToAnother: true });
}
export { deleteConjureProject };
export function conjureProjectActions(project) {
  project = project.project;
  const guildId = project.guildId;
  const muted = project.muted;
  const removeTarget = project.removeTarget;
  ({ openChat: closure_4, onOpenSettings } = project);
  let conjureViewedRemoveTarget;
  const tmp2 = closure_9(project);
  items = [];
  let intl = project(muted[8]).intl;
  const tmp6 = guildId(muted[9]);
  if (muted) {
    let s9rCuH = tmp6.s9rCuH;
    let tmp8 = tmp5;
  } else {
    s9rCuH = tmp6["a+i/As"];
    tmp8 = tmp5;
  }
  let obj = { label: intl.string(s9rCuH), IconComponent: null, action: null };
  if (muted) {
    let BellSlashIcon = tmp3(tmp4[18]).BellIcon;
  } else {
    BellSlashIcon = tmp3(tmp4[19]).BellSlashIcon;
  }
  obj.IconComponent = BellSlashIcon;
  obj.action = function action() {
    return conjureProjectMute.setConjureProjectMuted(project.id, !muted);
  };
  items.push(obj);
  if (closure_8(project)) {
    let obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = tmp3(tmp4[8]).intl;
    obj2.label = intl2.string(tmp8(tmp4[9])["276ll6"]);
    obj2.IconComponent = tmp3(tmp4[21]).PaperPlusIcon;
    obj2.action = project.onRemix;
    items.push(obj2);
  }
  let obj3 = { label: null, IconComponent: null, action: null };
  const intl3 = tmp3(tmp4[8]).intl;
  obj3.label = intl3.string(tmp8(muted[9]).WsEEP7);
  obj3.IconComponent = project(muted[22]).DownloadIcon;
  obj3.action = function action() {
    if (closure_1_4 != null) {
      tmp2();
    }
    React4(project.id);
    const intl = util.intl;
    hasOwnProperty(project.id, intl.string(_modDef4131.oU20rd));
  };
  items.push(obj3);
  if (tmp2) {
    const obj4 = { label: null, IconComponent: null, action: null };
    const intl4 = tmp3(tmp4[8]).intl;
    obj4.label = intl4.string(tmp8(tmp4[9]).rWGY3e);
    obj4.IconComponent = tmp3(tmp4[23]).FileUpIcon;
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
        const intl = project(1113).intl;
        project(6014).presentError(intl.string(guildId(4131)["Q+l4Hv"]));
      });
    };
    items.push(obj4);
  }
  const obj5 = { label: null, IconComponent: null, action: null };
  const intl5 = tmp3(tmp4[8]).intl;
  obj5.label = intl5.string(project(muted[8]).t.WqhZss);
  obj5.IconComponent = project(muted[24]).LinkIcon;
  obj5.action = function action() {
    const obj = ClipboardUtils;
    obj.copy(ChannelUtils.getChannelPermalink(guildId, StaticChannelRoute.CONJURE, project.id));
    ToastUtils.presentLinkCopied();
  };
  items.push(obj5);
  const obj6 = { label: null, IconComponent: null, action: null };
  const intl6 = tmp3(tmp4[8]).intl;
  obj6.label = intl6.string(tmp8(muted[9])["nm/zuU"]);
  obj6.IconComponent = project(muted[25]).IdIcon;
  obj6.action = function action() {
    ClipboardUtils.copy(project.id);
    const obj3 = { text: null, icon: null };
    const intl = util.intl;
    obj3.text = intl.string(_modDef4131.CmfaZG);
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
    const intl7 = tmp3(tmp4[8]).intl;
    obj7.label = intl7.string(tmp8(tmp4[9]).FzfmQ8);
    obj7.IconComponent = tmp3(tmp4[26]).SettingsIcon;
    obj7.action = onOpenSettings;
    items.push(obj7);
  }
  if (tmp3Result.canAddConjureProjectToAnotherServer(project, removeTarget, "ConjureProjectActions")) {
    const obj8 = { label: null, IconComponent: null, action: null };
    const intl8 = tmp3(tmp4[8]).intl;
    obj8.label = intl8.string(tmp8(tmp4[9]).RBPj0b);
    obj8.IconComponent = tmp3(tmp4[28]).ServerIcon;
    obj8.action = function action() {
      showConjureShareToServerSheetDefault({ projectId: project.id, guildId, publishOptions: null, addingToAnother: true });
    };
    items.push(obj8);
  }
  tmp3Result = project(muted[27]);
  conjureViewedRemoveTarget = project(muted[14]).readConjureViewedRemoveTarget(project, guildId);
  let result = null != conjureViewedRemoveTarget;
  if (result) {
    result = tmp3(tmp4[14]).canRemoveConjureAppFromServer(conjureViewedRemoveTarget, tmp2);
    const tmp3Result6 = tmp3(tmp4[14]);
  }
  if (result) {
    const obj9 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl9 = tmp3(tmp4[8]).intl;
    const obj10 = { server: conjureViewedRemoveTarget.guildName };
    obj9.label = intl9.formatToPlainString(tmp8(tmp4[9])["3gKG2j"], obj10);
    obj9.IconComponent = tmp3(tmp4[29]).DoorExitIcon;
    obj9.action = function action() {
      return openConjureRemoveAppAlertDefault({ project, target: conjureViewedRemoveTarget, action: "remove" });
    };
    items.push(obj9);
  }
  const tmp3Result5 = project(muted[14]);
  const tmp3Result7 = project(muted[30]);
  if (tmp22) {
    const obj11 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl10 = tmp3(tmp4[8]).intl;
    obj11.label = intl10.string(tmp8(tmp4[9]).jNGawP);
    obj11.IconComponent = tmp3(tmp4[31]).UserIcon;
    obj11.action = function action() {
      return openConjureMakePersonalAlertDefault({ project });
    };
    items.push(obj11);
  }
  let result1 = closure_9(project);
  if (result1) {
    result1 = tmp3(tmp4[14]).isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
    const tmp3Result8 = tmp3(tmp4[14]);
  }
  if (result1) {
    const obj12 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl11 = tmp3(tmp4[8]).intl;
    obj12.label = intl11.string(tmp8(tmp4[9]).jYAR58);
    obj12.IconComponent = tmp3(tmp4[33]).EyeSlashIcon;
    obj12.action = function action() {
      return openConjureUnpublishUserAppAlertDefault(project);
    };
    items.push(obj12);
  }
  if (tmp2) {
    const obj13 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl12 = tmp3(tmp4[8]).intl;
    obj13.label = intl12.string(tmp3(tmp4[8]).t.oyYWHE);
    obj13.IconComponent = tmp3(tmp4[35]).TrashIcon;
    obj13.action = function action() {
      deleteConjureProject(project, removeTarget);
    };
    items.push(obj13);
  }
  return items;
}