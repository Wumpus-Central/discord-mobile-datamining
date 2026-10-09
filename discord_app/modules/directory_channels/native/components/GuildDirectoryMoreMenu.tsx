// === Module 11965: GuildDirectoryMoreMenu ===

// Module 11965 (GuildDirectoryMoreMenu)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
import ReportModals from "ReportModals" /* 7704 */;
import useCanManageGuildDirectoryEntryDefault from "useCanManageGuildDirectoryEntry" /* 11959 */;
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 11966 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11968 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryMoreMenu(entry) {
  let ContextMenu = entry;
  let tmp = dependencyMap;
  const cResult = entry(576).c(25);
  entry = entry.entry;
  let obj = entry(576);
  ({ isEntryAdmin, canEdit, canRemove } = useCanManageGuildDirectoryEntryDefault(entry));
  if (cResult[0] !== entry) {
    function handleEdit() {
      GuildDirectoryEditDescriptionModalActionCreatorsDefault.open({ entry });
    }
    cResult[0] = entry;
    cResult[1] = handleEdit;
    let tmp4 = handleEdit;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== entry) {
    function handleRemove() {
      const obj2 = { title: null, body: null, onConfirm: null, confirmColor: null, confirmText: null, cancelText: null, onCancel: null, isDismissable: false };
      const intl = util.intl;
      obj2.title = intl.string(util.t.KUxYWH);
      const intl2 = util.intl;
      obj2.body = intl2.formatToPlainString(util.t["/5y0uV"], { guildName: entry.name });
      obj2.onConfirm = function onConfirm() {
        const result = GuildDirectoryActionCreatorsAll.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
      };
      obj2.confirmColor = native.ButtonColors.RED;
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t.N86XcP);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t["ETE/oC"]);
      obj2.onCancel = function onCancel() {
        closure_1_1(dependencyMap[7]).close();
      };
      actions_AlertActionCreatorsDefault.show(obj2);
    }
    cResult[2] = entry;
    cResult[3] = handleRemove;
    let tmp5 = handleRemove;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== entry) {
    function handleReport() {
      const result = ReportModals.showReportModalForGuildDirectoryEntry(entry);
    }
    cResult[4] = entry;
    cResult[5] = handleReport;
    let tmp6 = handleReport;
  } else {
    tmp6 = cResult[5];
  }
  if (cResult[6] === canEdit) {
    if (cResult[7] === canRemove) {
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp6) {
            if (0 === arr.length) {
              return null;
            } else {
              const _Symbol2 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(entry, closure_1_4);
                    obj = { ref: entry.ref };
                    merged = Object.assign(tmp);
                    obj.size = "sm";
                    obj.variant = "secondary";
                    intl = entry(closure_1_3[8]).intl;
                    obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
                    obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
                    obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
                    return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
                  }
                }
                cResult[22] = R;
              } else {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(entry, closure_1_4);
                    obj = { ref: entry.ref };
                    merged = Object.assign(tmp);
                    obj.size = "sm";
                    obj.variant = "secondary";
                    intl = entry(closure_1_3[8]).intl;
                    obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
                    obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
                    obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
                    return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
                  }
                }
              }
              if (cResult[23] !== arr) {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(entry, closure_1_4);
                    obj = { ref: entry.ref };
                    merged = Object.assign(tmp);
                    obj.size = "sm";
                    obj.variant = "secondary";
                    intl = entry(closure_1_3[8]).intl;
                    obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
                    obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
                    obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
                    return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
                  }
                }
                ContextMenu = ContextMenu(9335).ContextMenu;
                const obj3 = { items: arr, children: R };
                tmp = <ContextMenu items={arr}>{R}</ContextMenu>;
                cResult[23] = arr;
                cResult[24] = tmp;
              } else {
                class R {
                  constructor(arg0) {
                    tmp = closure_1_5(entry, closure_1_4);
                    obj = { ref: entry.ref };
                    merged = Object.assign(tmp);
                    obj.size = "sm";
                    obj.variant = "secondary";
                    intl = entry(closure_1_3[8]).intl;
                    obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
                    obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
                    obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
                    return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const items = [];
  if (!canEdit) {
    class R {
      constructor(arg0) {
        tmp = closure_1_5(entry, closure_1_4);
        obj = { ref: entry.ref };
        merged = Object.assign(tmp);
        obj.size = "sm";
        obj.variant = "secondary";
        intl = entry(closure_1_3[8]).intl;
        obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
        obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
        obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
        return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
      }
    }
  } else {
    class R {
      constructor(arg0) {
        tmp = closure_1_5(entry, closure_1_4);
        obj = { ref: entry.ref };
        merged = Object.assign(tmp);
        obj.size = "sm";
        obj.variant = "secondary";
        intl = entry(closure_1_3[8]).intl;
        obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
        obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
        obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
        return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
      }
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(arg0) {
          tmp = closure_1_5(entry, closure_1_4);
          obj = { ref: entry.ref };
          merged = Object.assign(tmp);
          obj.size = "sm";
          obj.variant = "secondary";
          intl = entry(closure_1_3[8]).intl;
          obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
          obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
          obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
          return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
        }
      }
      const stringResult = obj2.string(ContextMenu(1126).t.XnuOvN);
      cResult[13] = stringResult;
      let PencilIcon = stringResult;
    } else {
      class R {
        constructor(arg0) {
          tmp = closure_1_5(entry, closure_1_4);
          obj = { ref: entry.ref };
          merged = Object.assign(tmp);
          obj.size = "sm";
          obj.variant = "secondary";
          intl = entry(closure_1_3[8]).intl;
          obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
          obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
          obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
          return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
        }
      }
    }
    if (cResult[14] !== tmp4) {
      class R {
        constructor(arg0) {
          tmp = closure_1_5(entry, closure_1_4);
          obj = { ref: entry.ref };
          merged = Object.assign(tmp);
          obj.size = "sm";
          obj.variant = "secondary";
          intl = entry(closure_1_3[8]).intl;
          obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
          obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
          obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
          return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
        }
      }
      tmp9[0] = PencilIcon;
      PencilIcon = ContextMenu(9694).PencilIcon;
      tmp9[1] = PencilIcon;
      tmp9[2] = tmp4;
      cResult[14] = tmp4;
      cResult[15] = tmp9;
    } else {
      class R {
        constructor(arg0) {
          tmp = closure_1_5(entry, closure_1_4);
          obj = { ref: entry.ref };
          merged = Object.assign(tmp);
          obj.size = "sm";
          obj.variant = "secondary";
          intl = entry(closure_1_3[8]).intl;
          obj.accessibilityLabel = intl.string(entry(closure_1_3[8]).t.PdRCRg);
          obj1 = { size: "sm", color: closure_1_1(closure_1_3[17]).colors.WHITE };
          obj.icon = closure_1_6(entry(closure_1_3[16]).MoreHorizontalIcon, obj1);
          return closure_1_6(entry(closure_1_3[15]).IconButton, obj);
        }
      }
    }
    items.push(tmp9);
  }
  const tmp3 = useCanManageGuildDirectoryEntryDefault(entry);
}) : (function GuildDirectoryMoreMenu(entry) {
  entry = entry.entry;
  const tmp2 = useCanManageGuildDirectoryEntryDefault(entry);
  const items = [];
  ({ isEntryAdmin, canRemove } = tmp2);
  if (tmp2.canEdit) {
    let obj = { label: null, IconComponent: null, action: null };
    let intl = entry(1126).intl;
    obj.label = intl.string(entry(1126).t.XnuOvN);
    obj.IconComponent = entry(9694).PencilIcon;
    obj.action = function handleEdit() {
      GuildDirectoryEditDescriptionModalActionCreatorsDefault.open({ entry });
    };
    items.push(obj);
  }
  if (canRemove) {
    let obj2 = { label: null, IconComponent: null, variant: "destructive", action: null };
    let intl2 = entry(1126).intl;
    obj2.label = intl2.string(entry(1126).t.KUxYWH);
    obj2.IconComponent = entry(5048).TrashIcon;
    obj2.action = function handleRemove() {
      const obj2 = { title: null, body: null, onConfirm: null, confirmColor: null, confirmText: null, cancelText: null, onCancel: null, isDismissable: false };
      const intl = util.intl;
      obj2.title = intl.string(util.t.KUxYWH);
      const intl2 = util.intl;
      obj2.body = intl2.formatToPlainString(util.t["/5y0uV"], { guildName: entry.name });
      obj2.onConfirm = function onConfirm() {
        const result = GuildDirectoryActionCreatorsAll.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
      };
      obj2.confirmColor = native.ButtonColors.RED;
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t.N86XcP);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t["ETE/oC"]);
      obj2.onCancel = function onCancel() {
        closure_1_1(dependencyMap[7]).close();
      };
      actions_AlertActionCreatorsDefault.show(obj2);
    };
    items.push(obj2);
  }
  if (!isEntryAdmin) {
    const obj3 = { label: null, IconComponent: null, variant: "destructive", action: null };
    let intl3 = entry(1126).intl;
    obj3.label = intl3.string(entry(1126).t.Aen9eh);
    obj3.IconComponent = entry(9545).FlagIcon;
    obj3.action = function handleReport() {
      const result = ReportModals.showReportModalForGuildDirectoryEntry(entry);
    };
    items.push(obj3);
  }
  let tmp9 = null;
  if (0 !== items.length) {
    const obj4 = {
      items,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.size = "sm";
          obj.variant = "secondary";
          const intl = entry(1126).intl;
          obj.accessibilityLabel = intl.string(entry(1126).t.PdRCRg);
          obj.icon = jsx(entry(9214).MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.WHITE });
          return jsx(entry(8114).IconButton, { ref: ref.ref });
        }
    };
    tmp9 = jsx(entry(9335).ContextMenu, {
      items,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.size = "sm";
          obj.variant = "secondary";
          const intl = entry(1126).intl;
          obj.accessibilityLabel = intl.string(entry(1126).t.PdRCRg);
          obj.icon = jsx(entry(9214).MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.WHITE });
          return jsx(entry(8114).IconButton, { ref: ref.ref });
        }
    });
  }
  return tmp9;
});