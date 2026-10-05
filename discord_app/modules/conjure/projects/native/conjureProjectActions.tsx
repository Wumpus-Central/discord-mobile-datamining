// discord_app/modules/conjure/projects/native/conjureProjectActions.tsx
import intl13 from "../../../../intl/index.native.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import conjureProjectMute from "../conjureProjectMute.tsx";
import ConjureArchivePicker from "../../archive/native/ConjureArchivePicker.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import ConjureConnectionStore from "../../connection/ConjureConnectionStore.tsx";
import ConjureProjectStore from "../ConjureProjectStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c3, closure_2, closure_3;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj = function _importIntoProject() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const name = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let intl;
      let intl2;
      let intl3;
      let obj5;
      let obj8;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_4;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              c4 = 1;
              c5 = 1;
              let obj4 = { value: obj5.pickConjureArchive(), done: false };
              obj5 = ConjureArchivePicker;
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_2 = value;
            if (null != closure_2) {
              const obj9 = closure_131_0(closure_131_2[4]);
              closure_4 = obj9.describeConjureArchiveRejection(closure_2);
              if (null == closure_4) {
                const obj7 = {
                  key: "VibegrationsImportOverwrite",
                  title: intl.formatToPlainString(closure_131_1(closure_131_2[8])["Gm+u1+"], obj8),
                  content: intl2.string(closure_131_1(closure_131_2[8]).M7H3sJ),
                  confirmText: intl3.string(closure_131_1(closure_131_2[8]).gFHykw),
                  onConfirm: function () {
                    return closure_1_3(...arguments);
                  },
                };
                const showConfirmModal = closure_131_0(closure_131_2[6]).showConfirmModal;
                closure_131_0(closure_131_2[6]);
                intl = closure_131_0(closure_131_2[7]).intl;
                obj8 = { name: name.name };
                intl2 = closure_131_0(closure_131_2[7]).intl;
                intl3 = closure_131_0(closure_131_2[7]).intl;
                closure_3 = closure_131_3(async () => {
                  let closure_0;
                  let v1;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    let c2;
                    try {
                      c3 = 2;
                      if (0 === v1) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          if (closure_2_1 != null) {
                            closure_2_1();
                          }
                          c2 = 1;
                          const sendConjureArchiveImport = tmp(c2[4]).sendConjureArchiveImport;
                          id = id.id;
                          const tmp17 = tmp(c2[4]);
                          const intl2 = tmp(c2[7]).intl;
                          v1 = 2;
                          c3 = 1;
                          const obj4 = {
                            value: sendConjureArchiveImport(id, closure_2_2, intl2.string(v1(c2[8]).Owerd3)),
                            done: false,
                          };
                          return obj4;
                        }
                      } else {
                        if (1 === tmp4) {
                          c2 = 0;
                          const presentError = tmp(c2[5]).presentError;
                          const tmp8 = tmp(c2[5]);
                          const intl = tmp(c2[7]).intl;
                          presentError(intl.string(v1(c2[8])["Q+l4Hv"]));
                        } else if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          c3 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          c2 = 0;
                        }
                        c3 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } catch (tmp24) {
                      if (0 === c2) {
                        c3 = 3;
                        throw tmp24;
                      } else {
                        v1 = 1;
                      }
                    }
                  }
                });
                showConfirmModal(obj7);
              } else {
                obj = closure_131_0(closure_131_2[5]);
                obj.presentError(closure_4);
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp33) {
          c5 = 3;
          throw tmp33;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
({ canRemixProject: metroRequire, isProjectOwner: metroImportDefault } = ConjureProjectStore);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/conjure/projects/native/conjureProjectActions.tsx");

export const conjureProjectActions = function conjureProjectActions(project) {
  let BellSlashIcon;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let muted;
  let onClose;
  let onConnectTool;
  let onHistory;
  let onOpenSettings;
  let onRefresh;
  let preview;
  let s9rCuH;
  let tmp19;
  project = project.project;
  ({ guildId: importDefault, muted } = project);
  ({ openChat: _asyncToGenerator, onOpenSettings, onConnectTool, onHistory, onRefresh, onClose, preview } = project);
  const onRemix = project.onRemix;
  let tmp = closure_7(project);
  const items1 = [];
  if (null != onRefresh) {
    obj = {
      label: intl.string(require("../../intl/ConjureUntranslated.messages.js")["p4B/7M"]),
      IconComponent: project(muted[9]).RefreshIcon,
      action: onRefresh,
    };
    let push = items1.push;
    intl = project(muted[7]).intl;
    push(obj);
  }
  if (null != onClose) {
    let obj2 = {
      label: intl2.string(require("../../intl/ConjureUntranslated.messages.js")["/TlGcK"]),
      IconComponent: project(muted[10]).DoorExitIcon,
      action: onClose,
    };
    const push2 = items1.push;
    intl2 = project(muted[7]).intl;
    push2(obj2);
  }
  if (null != preview) {
    const items = preview.items;
    function _loop(iter) {
      let KeyIcon;
      let closure_0 = iter;
      const push = items1.push;
      obj = {
        label: iter.label,
        IconComponent: KeyIcon,
        action() {
          return preview.onPress(iter);
        },
      };
      if ("refresh" === iter.kind) {
        KeyIcon = project(muted[11]).RetryIcon;
      } else {
        KeyIcon = project(muted[12]).KeyIcon;
      }
      push(obj);
    }
    const iter = items[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
  }
  const push3 = items1.push;
  let intl3 = project(muted[7]).intl;
  const string = intl3.string;
  const tmp17 = require("../../intl/ConjureUntranslated.messages.js");
  if (muted) {
    s9rCuH = tmp17.s9rCuH;
    tmp19 = importDefault;
  } else {
    s9rCuH = tmp17["a+i/As"];
    tmp19 = importDefault;
  }
  const obj3 = {
    label: string(s9rCuH),
    IconComponent: BellSlashIcon,
    action() {
      obj = conjureProjectMute;
      return obj.setConjureProjectMuted(project.id, !muted);
    },
  };
  if (muted) {
    BellSlashIcon = tmp14(muted[13]).BellIcon;
  } else {
    BellSlashIcon = tmp14(muted[14]).BellSlashIcon;
  }
  push3(obj3);
  if (closure_6(project)) {
    const push4 = items1.push;
    const obj4 = {
      label: intl4.string(tmp19(muted[8]).XWgAfc),
      IconComponent: project(muted[16]).RemixIcon,
      action: onRemix,
    };
    intl4 = tmp14(muted[7]).intl;
    push4(obj4);
  }
  const push5 = items1.push;
  const obj5 = {
    label: intl5.string(tmp19(muted[8]).WsEEP7),
    IconComponent: project(muted[17]).DownloadIcon,
    action() {
      if (_asyncToGenerator != null) {
        tmp();
      }
      React3(project.id);
      const id = project.id;
      const intl = intl13.intl;
      hasOwnProperty(id, intl.string(_modDef3723.oU20rd));
    },
  };
  intl5 = tmp14(muted[7]).intl;
  push5(obj5);
  if (tmp) {
    const push6 = items1.push;
    const obj6 = {
      label: intl6.string(tmp19(muted[8]).rWGY3e),
      IconComponent: project(muted[18]).FileUpIcon,
      action() {
        function importIntoProject() {
          return closure_1_9(...arguments);
        }
        const promise = importIntoProject(project, _asyncToGenerator);
        promise.catch(() => {
          const presentError = project(muted[5]).presentError;
          project(muted[5]);
          const intl = project(muted[7]).intl;
          presentError(intl.string(closure_1_1(muted[8])["Q+l4Hv"]));
        });
      },
    };
    intl6 = tmp14(muted[7]).intl;
    push6(obj6);
  }
  if (null != onConnectTool) {
    const push7 = items1.push;
    const obj7 = {
      label: intl7.string(tmp19(muted[8]).yOIql5),
      IconComponent: project(muted[19]).LinkPlusIcon,
      action: onConnectTool,
    };
    intl7 = tmp14(muted[7]).intl;
    push7(obj7);
  }
  if (null != onHistory) {
    const push8 = items1.push;
    const obj8 = {
      label: intl8.string(tmp19(muted[8])["3hIVou"]),
      IconComponent: project(muted[20]).ClockIcon,
      action: onHistory,
    };
    intl8 = tmp14(muted[7]).intl;
    push8(obj8);
  }
  const push9 = items1.push;
  const obj9 = {
    label: intl9.string(project(muted[7]).t.WqhZss),
    IconComponent: project(muted[21]).LinkIcon,
    action() {
      const copy = ClipboardUtils.copy;
      ClipboardUtils;
      obj = ChannelUtils;
      copy(obj.getChannelPermalink(importDefault, StaticChannelRoute.CONJURE, project.id));
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    },
  };
  intl9 = tmp14(muted[7]).intl;
  push9(obj9);
  const push10 = items1.push;
  const obj10 = {
    label: intl10.string(tmp19(muted[8])["nm/zuU"]),
    IconComponent: project(muted[24]).IdIcon,
    action() {
      let intl;
      obj = ClipboardUtils;
      obj.copy(project.id);
      const obj2 = {
        key: "VIBEGRATIONS_PROJECT_ID_COPIED",
        content: intl.string(_modDef3723.CmfaZG),
        IconComponent: CopyIcon.CopyIcon,
      };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl13.intl;
      open(obj2);
    },
  };
  intl10 = tmp14(muted[7]).intl;
  push10(obj10);
  const tmp28 = tmp && null != onOpenSettings;
  if (tmp28) {
    const push11 = items1.push;
    const obj11 = {
      label: intl11.string(tmp19(muted[8]).FzfmQ8),
      IconComponent: project(muted[27]).SettingsIcon,
      action: onOpenSettings,
    };
    intl11 = tmp14(muted[7]).intl;
    push11(obj11);
  }
  if (tmp) {
    const push12 = items1.push;
    const obj12 = {
      label: intl12.string(project(muted[7]).t.oyYWHE),
      IconComponent: project(muted[28]).TrashIcon,
      destructive: true,
      action() {
        let id;
        let intl;
        let intl2;
        let intl3;
        let obj2;
        const tmp = AlertModal;
        obj = {
          key: "VibegrationsProjectDelete",
          title: intl.formatToPlainString(_modDef3723.CJBhb2, obj2),
          content: intl2.string(_modDef3723["0OmrVn"]),
          confirmText: intl3.string(intl13.t.oyYWHE),
          onConfirm() {
            obj = project(muted[29]);
            const result = obj.deleteProjectInBackground(id.id, () => {
              const presentError = id(closure_1_2[5]).presentError;
              id(closure_1_2[5]);
              const intl = id(closure_1_2[7]).intl;
              return presentError(intl.string(closure_1_1(closure_1_2[8])["0XDHob"]));
            });
          },
        };
        const showConfirmModal = tmp.showConfirmModal;
        intl = intl13.intl;
        obj2 = { name: project.name };
        intl2 = intl13.intl;
        intl3 = intl13.intl;
        showConfirmModal(obj);
      },
    };
    intl12 = tmp14(muted[7]).intl;
    push12(obj12);
  }
  return items1;
};
