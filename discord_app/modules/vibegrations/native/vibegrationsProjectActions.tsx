// discord_app/modules/vibegrations/native/vibegrationsProjectActions.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3723 from "../intl/VibegrationsUntranslated.messages.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import CopyIcon from "../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ChannelUtils from "../../../utils/ChannelUtils.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import vibegrationsProjectMute from "../lib/vibegrationsProjectMute.tsx";
import VibegrationsArchivePicker from "VibegrationsArchivePicker.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = globalThis.__r;

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
      return { value: "IconComponent", done: "IconComponent" };
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
        const obj8 = {
          key: "VibegrationsImportOverwrite",
          title: null,
          content: null,
          confirmText: null,
          onConfirm: null,
        };
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
          const intl2 = tmp3(1126).intl;
          await tmp3(16550).sendVibegrationsArchiveImport(id.id, closure_2_2, intl2.string(v2(3723).C7GU2r));
          if (1 === tmp7) {
            dependencyMap = 0;
            const intl = tmp3(1126).intl;
            tmp3(4567).presentError(intl.string(v2(3723)["02GpNr"]));
            c3 = 3;
            tmp3(4567);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            dependencyMap = 0;
          }
          return value;
        });
        obj8.onConfirm = function () {
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
const VibegrationsConnectionStore = fn(12904);
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = VibegrationsConnectionStore);
const VibegrationsProjectStore = fn(8699);
({ canRemixProject: metroRequire, isProjectOwner: closure_7 } = VibegrationsProjectStore);
const StaticChannelRoute = fn(2058).StaticChannelRoute;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/vibegrationsProjectActions.tsx");

export const vibegrationsProjectActions = function vibegrationsProjectActions(project) {
  project = project.project;
  ({ guildId: importDefault, muted } = project);
  ({
    openChat: asyncGeneratorStep,
    onOpenSettings,
    onConnectTool,
    onVersionHistory,
    onRestorePoints,
    onRefresh,
    onClose,
    preview,
  } = project);
  const tmp = closure_7(project);
  const items1 = [];
  if (null != onRefresh) {
    let obj = { label: null, IconComponent: null, action: null };
    let intl = project(muted[7]).intl;
    obj.label = intl.string(require("../intl/VibegrationsUntranslated.messages.js").xKexN1);
    obj.IconComponent = project(muted[9]).RefreshIcon;
    obj.action = onRefresh;
    items1.push(obj);
  }
  if (null != onClose) {
    let obj2 = { label: null, IconComponent: null, action: null };
    let intl2 = project(muted[7]).intl;
    obj2.label = intl2.string(require("../intl/VibegrationsUntranslated.messages.js").Ea0Wrr);
    obj2.IconComponent = project(muted[10]).DoorExitIcon;
    obj2.action = onClose;
    items1.push(obj2);
  }
  if (null != preview) {
    const items = preview.items;
    function _loop(iter) {
      closure_0 = iter;
      const obj = { label: iter.label, IconComponent: null, action: null };
      if ("refresh" === iter.kind) {
        let KeyIcon = project(muted[11]).RetryIcon;
      } else {
        KeyIcon = project(muted[12]).KeyIcon;
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
  let intl3 = project(muted[7]).intl;
  const tmp17 = require("../intl/VibegrationsUntranslated.messages.js");
  if (muted) {
    let fwSfWU = tmp17.ZTkrp3;
    let tmp18 = importDefault;
  } else {
    fwSfWU = tmp17.fwSfWU;
    tmp18 = importDefault;
  }
  let obj3 = { label: intl3.string(fwSfWU), IconComponent: null, action: null };
  if (muted) {
    let BellSlashIcon = tmp14(muted[13]).BellIcon;
  } else {
    BellSlashIcon = tmp14(muted[14]).BellSlashIcon;
  }
  obj3.IconComponent = BellSlashIcon;
  obj3.action = function action() {
    return vibegrationsProjectMute.setVibegrationsProjectMuted(project.id, !muted);
  };
  items1.push(obj3);
  if (closure_6(project)) {
    const obj4 = { label: null, IconComponent: null, action: null };
    const intl4 = tmp14(muted[7]).intl;
    obj4.label = intl4.string(tmp18(muted[8]).vPI794);
    obj4.IconComponent = tmp14(muted[16]).RemixIcon;
    obj4.action = project.onRemix;
    items1.push(obj4);
  }
  const obj5 = { label: null, IconComponent: null, action: null };
  const intl5 = tmp14(muted[7]).intl;
  obj5.label = intl5.string(tmp18(muted[8])["7iamDC"]);
  obj5.IconComponent = project(muted[17]).DownloadIcon;
  obj5.action = function action() {
    if (asyncGeneratorStep != null) {
      tmp();
    }
    React4(project.id);
    const intl = util.intl;
    hasOwnProperty(project.id, intl.string(_modDef3723["2ejwtJ"]));
  };
  items1.push(obj5);
  if (tmp) {
    const obj6 = { label: null, IconComponent: null, action: null };
    const intl6 = tmp14(muted[7]).intl;
    obj6.label = intl6.string(tmp18(muted[8]).lf8HqE);
    obj6.IconComponent = tmp14(muted[18]).FileUpIcon;
    obj6.action = function action() {
      (function importIntoProject() {
        const self = this;
        const apply = closure_1_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(project, asyncGeneratorStep).catch(() => {
        const intl = project(1126).intl;
        project(4567).presentError(intl.string(closure_1_1(3723)["02GpNr"]));
      });
    };
    items1.push(obj6);
  }
  if (null != onConnectTool) {
    const obj7 = { label: null, IconComponent: null, action: null };
    const intl7 = tmp14(muted[7]).intl;
    obj7.label = intl7.string(tmp18(muted[8])["3qelzD"]);
    obj7.IconComponent = tmp14(muted[19]).LinkPlusIcon;
    obj7.action = onConnectTool;
    items1.push(obj7);
  }
  if (null != onVersionHistory) {
    const obj8 = { label: null, IconComponent: null, action: null };
    const intl8 = tmp14(muted[7]).intl;
    obj8.label = intl8.string(tmp18(muted[8]).jAWwzi);
    obj8.IconComponent = tmp14(muted[20]).UndoIcon;
    obj8.action = onVersionHistory;
    items1.push(obj8);
  }
  if (null != onRestorePoints) {
    const obj9 = { label: null, IconComponent: null, action: null };
    const intl9 = tmp14(muted[7]).intl;
    obj9.label = intl9.string(tmp18(muted[8]).FRjicO);
    obj9.IconComponent = tmp14(muted[21]).ServerIcon;
    obj9.action = onRestorePoints;
    items1.push(obj9);
  }
  const obj10 = { label: null, IconComponent: null, action: null };
  const intl10 = tmp14(muted[7]).intl;
  obj10.label = intl10.string(project(muted[7]).t.WqhZss);
  obj10.IconComponent = project(muted[22]).LinkIcon;
  obj10.action = function action() {
    const obj = ClipboardUtils;
    obj.copy(ChannelUtils.getChannelPermalink(importDefault, StaticChannelRoute.VIBEGRATIONS, project.id));
    ToastUtils.presentLinkCopied();
  };
  items1.push(obj10);
  const obj11 = { label: null, IconComponent: null, action: null };
  const intl11 = tmp14(muted[7]).intl;
  obj11.label = intl11.string(tmp18(muted[8]).b4TqpT);
  obj11.IconComponent = project(muted[25]).IdIcon;
  obj11.action = function action() {
    ClipboardUtils.copy(project.id);
    const obj3 = { key: "VIBEGRATIONS_PROJECT_ID_COPIED", content: null, IconComponent: null };
    const intl = util.intl;
    obj3.content = intl.string(_modDef3723.WOKsTg);
    obj3.IconComponent = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open(obj3);
  };
  items1.push(obj11);
  let tmp28 = tmp;
  if (tmp) {
    tmp28 = null != onOpenSettings;
  }
  if (tmp28) {
    const obj12 = { label: null, IconComponent: null, action: null };
    const intl12 = tmp14(muted[7]).intl;
    obj12.label = intl12.string(tmp18(muted[8])["xhcY+n"]);
    obj12.IconComponent = tmp14(muted[28]).SettingsIcon;
    obj12.action = onOpenSettings;
    items1.push(obj12);
  }
  if (tmp) {
    const obj13 = { label: null, IconComponent: null, destructive: true, action: null };
    const intl13 = tmp14(muted[7]).intl;
    obj13.label = intl13.string(tmp14(muted[7]).t.oyYWHE);
    obj13.IconComponent = tmp14(muted[29]).TrashIcon;
    obj13.action = function action() {
      const obj2 = { key: "VibegrationsProjectDelete", title: null, content: null, confirmText: null, onConfirm: null };
      let intl = util.intl;
      obj2.title = intl.formatToPlainString(_modDef3723.ZokHVz, { name: project.name });
      const intl2 = util.intl;
      obj2.content = intl2.string(_modDef3723.NmF939);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t.oyYWHE);
      obj2.onConfirm = function onConfirm() {
        const result = project(muted[30]).deleteProjectInBackground(id.id, () => {
          const intl = id(1126).intl;
          return id(4567).presentError(intl.string(closure_1_1(3723).tqKZCi));
        });
      };
      AlertModal.showConfirmModal(obj2);
    };
    items1.push(obj13);
  }
  return items1;
};
