// === Module 17041: vibegrationsProjectActions ===

// Module 17041 (vibegrationsProjectActions)
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import ToastUtils from "ToastUtils" /* 4522 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import CopyIcon from "CopyIcon" /* 4775 */;
import ChannelUtils from "ChannelUtils" /* 4974 */;
import ClipboardUtils from "ClipboardUtils" /* 7522 */;
import VibegrationsArchivePicker from "VibegrationsArchivePicker" /* 17028 */;
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
          await tmp3(17028).sendVibegrationsArchiveImport(id.id, closure_2_2, intl2.string(v2(3714).C7GU2r));
          if (1 === tmp7) {
            dependencyMap = 0;
            const intl = tmp3(1115).intl;
            tmp3(4522).presentError(intl.string(v2(3714)["02GpNr"]));
            c3 = 3;
            tmp3(4522);
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
const VibegrationsConnectionStore = fn(13457);
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = VibegrationsConnectionStore);
const VibegrationsProjectStore = fn(9389);
({ canRemixProject: metroRequire, isProjectOwner: closure_7 } = VibegrationsProjectStore);
const StaticChannelRoute = fn(2051).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/vibegrationsProjectActions.tsx");

export const vibegrationsProjectActions = function vibegrationsProjectActions(project) {
  project = project.project;
  ({ guildId: importDefault, openChat: dependencyMap, onOpenSettings, onConnectTool, onVersionHistory, onRestorePoints, onRefresh, onClose, preview } = project);
  const tmp = closure_7(project);
  const items1 = [];
  if (null != onRefresh) {
    let obj = { label: null, IconComponent: null, action: null };
    let intl = project(1115).intl;
    obj.label = intl.string(_modDef3714.xKexN1);
    obj.IconComponent = project(15494).RefreshIcon;
    obj.action = onRefresh;
    items1.push(obj);
  }
  if (null != onClose) {
    let obj2 = { label: null, IconComponent: null, action: null };
    let intl2 = project(1115).intl;
    obj2.label = intl2.string(_modDef3714.Ea0Wrr);
    obj2.IconComponent = project(10261).DoorExitIcon;
    obj2.action = onClose;
    items1.push(obj2);
  }
  if (null != preview) {
    const items = preview.items;
    function _loop(iter) {
      closure_0 = iter;
      const obj = { label: iter.label, IconComponent: null, action: null };
      if ("refresh" === iter.kind) {
        let KeyIcon = project(10527).RetryIcon;
      } else {
        KeyIcon = project(7289).KeyIcon;
      }
      obj.IconComponent = KeyIcon;
      obj.action = function action() {
        return preview.onPress(closure_0);
      };
      items1.push(obj);
    }
    const iter = items[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  }
  if (closure_6(project)) {
    let obj3 = { label: null, IconComponent: null, action: null };
    let intl3 = project(1115).intl;
    obj3.label = intl3.string(_modDef3714.vPI794);
    obj3.IconComponent = project(17042).RemixIcon;
    obj3.action = project.onRemix;
    items1.push(obj3);
  }
  let obj4 = { label: null, IconComponent: null, action: null };
  const intl4 = project(1115).intl;
  obj4.label = intl4.string(_modDef3714["7iamDC"]);
  obj4.IconComponent = project(4777).DownloadIcon;
  obj4.action = function action() {
    if (dependencyMap != null) {
      tmp();
    }
    React4(project.id);
    const intl = util.intl;
    hasOwnProperty(project.id, intl.string(_modDef3714["2ejwtJ"]));
  };
  items1.push(obj4);
  if (tmp) {
    let obj5 = { label: null, IconComponent: null, action: null };
    const intl5 = tmp18(1115).intl;
    obj5.label = intl5.string(_modDef3714.lf8HqE);
    obj5.IconComponent = tmp18(15895).FileUpIcon;
    obj5.action = function action() {
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
        project(4522).presentError(intl.string(closure_1_1(3714)["02GpNr"]));
      });
    };
    items1.push(obj5);
  }
  if (null != onConnectTool) {
    let obj6 = { label: null, IconComponent: null, action: null };
    const intl6 = tmp18(1115).intl;
    obj6.label = intl6.string(_modDef3714["3qelzD"]);
    obj6.IconComponent = tmp18(17044).LinkPlusIcon;
    obj6.action = onConnectTool;
    items1.push(obj6);
  }
  if (null != onVersionHistory) {
    const obj7 = { label: null, IconComponent: null, action: null };
    const intl7 = tmp18(1115).intl;
    obj7.label = intl7.string(_modDef3714.jAWwzi);
    obj7.IconComponent = tmp18(15445).UndoIcon;
    obj7.action = onVersionHistory;
    items1.push(obj7);
  }
  if (null != onRestorePoints) {
    const obj8 = { label: null, IconComponent: null, action: null };
    const intl8 = tmp18(1115).intl;
    obj8.label = intl8.string(_modDef3714.FRjicO);
    obj8.IconComponent = tmp18(9481).ServerIcon;
    obj8.action = onRestorePoints;
    items1.push(obj8);
  }
  const obj9 = { label: null, IconComponent: null, action: null };
  const intl9 = tmp18(1115).intl;
  obj9.label = intl9.string(project(1115).t.WqhZss);
  obj9.IconComponent = project(4771).LinkIcon;
  obj9.action = function action() {
    const obj = ClipboardUtils;
    obj.copy(ChannelUtils.getChannelPermalink(importDefault, StaticChannelRoute.VIBEGRATIONS, project.id));
    ToastUtils.presentLinkCopied();
  };
  items1.push(obj9);
  const obj10 = { label: null, IconComponent: null, action: null };
  const intl10 = tmp18(1115).intl;
  obj10.label = intl10.string(_modDef3714.b4TqpT);
  obj10.IconComponent = project(10977).IdIcon;
  obj10.action = function action() {
    ClipboardUtils.copy(project.id);
    const obj3 = { key: "VIBEGRATIONS_PROJECT_ID_COPIED", content: null, IconComponent: null };
    const intl = util.intl;
    obj3.content = intl.string(_modDef3714.WOKsTg);
    obj3.IconComponent = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open(obj3);
  };
  items1.push(obj10);
  let tmp28 = tmp;
  if (tmp) {
    tmp28 = null != onOpenSettings;
  }
  if (tmp28) {
    const obj11 = { label: null, IconComponent: null, action: null };
    const intl11 = tmp18(1115).intl;
    obj11.label = intl11.string(_modDef3714["xhcY+n"]);
    obj11.IconComponent = tmp18(7710).SettingsIcon;
    obj11.action = onOpenSettings;
    items1.push(obj11);
  }
  if (tmp) {
    const obj12 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl12 = tmp18(1115).intl;
    obj12.label = intl12.string(tmp18(1115).t.oyYWHE);
    obj12.IconComponent = tmp18(4786).TrashIcon;
    obj12.action = function action() {
      let obj2 = { key: "VibegrationsProjectDelete", title: null, content: null, confirmText: null, onConfirm: null };
      let intl = project(1115).intl;
      obj2.title = intl.formatToPlainString(_modDef3714.ZokHVz, { name: project.name });
      const intl2 = project(1115).intl;
      obj2.content = intl2.string(_modDef3714.NmF939);
      const intl3 = project(1115).intl;
      obj2.confirmText = intl3.string(project(1115).t.oyYWHE);
      project = preview(function*() {
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
                const obj5 = { value: tmp4(9390).deleteProject(tmp4.id), done: false };
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
                tmp4(4522).presentError(intl.string(_modDef3714.tqKZCi));
                const obj = tmp4(4522);
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
      obj2.onConfirm = function onConfirm() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      project(5201).showConfirmModal(obj2);
    };
    items1.push(obj12);
  }
  return items1;
};