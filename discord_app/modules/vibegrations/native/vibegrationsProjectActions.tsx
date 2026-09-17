// === Module 16775: vibegrationsProjectActions ===

// Module 16775 (vibegrationsProjectActions)
import util from "util" /* 1115 */;
import _modDef3593 from "module_3593" /* 3593 */;
import ToastUtils from "ToastUtils" /* 4337 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import CopyIcon from "CopyIcon" /* 4586 */;
import ChannelUtils from "ChannelUtils" /* 4785 */;
import ClipboardUtils from "ClipboardUtils" /* 7303 */;
import VibegrationsArchivePicker from "VibegrationsArchivePicker" /* 16769 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_9 = async function _importIntoProject(arg0) {
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
          const obj5 = { value: VibegrationsArchivePicker.pickVibegrationsArchive(), done: false };
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
          closure_130_4 = closure_131_0(closure_131_2[4]).describeVibegrationsArchiveRejection(closure_130_2);
          if (null != closure_130_4) {
            closure_131_0(closure_131_2[5]).presentError(closure_130_4);
            const obj = closure_131_0(closure_131_2[5]);
          }
          const obj10 = closure_131_0(closure_131_2[4]);
        }
        const obj8 = { key: "VibegrationsImportOverwrite", title: null, content: null, confirmText: null, onConfirm: null };
        let intl = closure_131_0(closure_131_2[7]).intl;
        const obj9 = { name: closure_130_0.name };
        obj8.title = intl.formatToPlainString(closure_131_1(closure_131_2[8]).XYZqZK, obj9);
        let intl2 = closure_131_0(closure_131_2[7]).intl;
        obj8.content = intl2.string(closure_131_1(closure_131_2[8])["6syXoH"]);
        const intl3 = closure_131_0(closure_131_2[7]).intl;
        obj8.confirmText = intl3.string(closure_131_1(closure_131_2[8]).pgFuyr);
        closure_130_3 = closure_131_3(async () => {
          if (closure_2_1 != null) {
            closure_2_1();
          }
          const intl2 = tmp3(1115).intl;
          await tmp3(16769).sendVibegrationsArchiveImport(id.id, closure_2_2, intl2.string(v2(3593).C7GU2r));
          if (1 === tmp7) {
            dependencyMap = 0;
            const intl = tmp3(1115).intl;
            tmp3(4337).presentError(intl.string(v2(3593)["02GpNr"]));
            c3 = 3;
            tmp3(4337);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            dependencyMap = 0;
          }
          return value;
        });
        obj8.onConfirm = function() {
          const self = this;
          const apply = closure_1_3.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        closure_131_0(closure_131_2[6]).showConfirmModal(obj8);
        const obj2 = closure_131_0(closure_131_2[6]);
      }
    } catch (tmp33) {
      c5 = tmp;
      throw tmp33;
    }
  }
};
const VibegrationsConnectionStore = fn(16752);
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = VibegrationsConnectionStore);
const VibegrationsProjectStore = fn(16754);
({ canRemixProject: metroRequire, isProjectOwner: closure_7 } = VibegrationsProjectStore);
const StaticChannelRoute = fn(1965).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/vibegrationsProjectActions.tsx");

export const vibegrationsProjectActions = function vibegrationsProjectActions(project) {
  project = project.project;
  ({ guildId: importDefault, openChat: dependencyMap, onOpenSettings, onConnectTool, onVersionHistory, onRestorePoints } = project);
  const tmp = closure_7(project);
  const items = [];
  if (closure_6(project)) {
    let obj = { label: null, IconComponent: null, action: null };
    let intl = project(1115).intl;
    obj.label = intl.string(_modDef3593.vPI794);
    obj.IconComponent = project(16776).RemixIcon;
    obj.action = project.onRemix;
    items.push(obj);
  }
  let obj2 = { label: null, IconComponent: null, action: null };
  let intl2 = project(1115).intl;
  obj2.label = intl2.string(_modDef3593["7iamDC"]);
  obj2.IconComponent = project(4588).DownloadIcon;
  obj2.action = function action() {
    if (dependencyMap != null) {
      tmp();
    }
    React4(project.id);
    const intl = util.intl;
    hasOwnProperty(project.id, intl.string(_modDef3593["2ejwtJ"]));
  };
  items.push(obj2);
  if (tmp) {
    let obj3 = { label: null, IconComponent: null, action: null };
    let intl3 = tmp6(1115).intl;
    obj3.label = intl3.string(_modDef3593.lf8HqE);
    obj3.IconComponent = tmp6(15659).FileUpIcon;
    obj3.action = function action() {
      (function importIntoProject() {
        const self = this;
        const apply = closure_1_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(project, dependencyMap).catch(() => {
        const intl = project(1115).intl;
        project(4337).presentError(intl.string(closure_1_1(3593)["02GpNr"]));
      });
    };
    items.push(obj3);
  }
  if (null != onConnectTool) {
    let obj4 = { label: null, IconComponent: null, action: null };
    const intl4 = tmp6(1115).intl;
    obj4.label = intl4.string(_modDef3593["3qelzD"]);
    obj4.IconComponent = tmp6(16778).LinkPlusIcon;
    obj4.action = onConnectTool;
    items.push(obj4);
  }
  if (null != onVersionHistory) {
    let obj5 = { label: null, IconComponent: null, action: null };
    const intl5 = tmp6(1115).intl;
    obj5.label = intl5.string(_modDef3593.jAWwzi);
    obj5.IconComponent = tmp6(15221).UndoIcon;
    obj5.action = onVersionHistory;
    items.push(obj5);
  }
  if (null != onRestorePoints) {
    let obj6 = { label: null, IconComponent: null, action: null };
    const intl6 = tmp6(1115).intl;
    obj6.label = intl6.string(_modDef3593.FRjicO);
    obj6.IconComponent = tmp6(9440).ServerIcon;
    obj6.action = onRestorePoints;
    items.push(obj6);
  }
  const obj7 = { label: null, IconComponent: null, action: null };
  const intl7 = tmp6(1115).intl;
  obj7.label = intl7.string(project(1115).t.WqhZss);
  obj7.IconComponent = project(4582).LinkIcon;
  obj7.action = function action() {
    const obj = ClipboardUtils;
    obj.copy(ChannelUtils.getChannelPermalink(importDefault, StaticChannelRoute.VIBEGRATIONS, project.id));
    ToastUtils.presentLinkCopied();
  };
  items.push(obj7);
  const obj8 = { label: null, IconComponent: null, action: null };
  const intl8 = tmp6(1115).intl;
  obj8.label = intl8.string(_modDef3593.b4TqpT);
  obj8.IconComponent = project(10778).IdIcon;
  obj8.action = function action() {
    ClipboardUtils.copy(project.id);
    const obj3 = { key: "VIBEGRATIONS_PROJECT_ID_COPIED", content: null, IconComponent: null };
    const intl = util.intl;
    obj3.content = intl.string(_modDef3593.WOKsTg);
    obj3.IconComponent = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open(obj3);
  };
  items.push(obj8);
  let tmp16 = tmp;
  if (tmp) {
    tmp16 = null != onOpenSettings;
  }
  if (tmp16) {
    const obj9 = { label: null, IconComponent: null, action: null };
    const intl9 = tmp6(1115).intl;
    obj9.label = intl9.string(_modDef3593["xhcY+n"]);
    obj9.IconComponent = tmp6(7494).SettingsIcon;
    obj9.action = onOpenSettings;
    items.push(obj9);
  }
  if (tmp) {
    const obj10 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl10 = tmp6(1115).intl;
    obj10.label = intl10.string(tmp6(1115).t.oyYWHE);
    obj10.IconComponent = tmp6(4597).TrashIcon;
    obj10.action = function action() {
      let obj2 = { key: "VibegrationsProjectDelete", title: null, content: null, confirmText: null, onConfirm: null };
      let intl = project(1115).intl;
      obj2.title = intl.formatToPlainString(_modDef3593.ZokHVz, { name: project.name });
      const intl2 = project(1115).intl;
      obj2.content = intl2.string(_modDef3593.NmF939);
      const intl3 = project(1115).intl;
      obj2.confirmText = intl3.string(project(1115).t.oyYWHE);
      project = asyncGeneratorStep(async () => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c1 = 1;
                c2 = 1;
                const obj5 = { value: tmp4(16760).deleteProject(tmp4.id), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              if (!value.ok) {
                const intl = tmp4(1115).intl;
                tmp4(4337).presentError(intl.string(_modDef3593.tqKZCi));
                const obj = tmp4(4337);
              }
              c2 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp16) {
            c2 = tmp;
            throw tmp16;
          }
        }
      });
      obj2.onConfirm = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      project(4990).showConfirmModal(obj2);
    };
    items.push(obj10);
  }
  return items;
};