// === Module 11941: GuildDirectoryMoreMenu ===

// Module 11941 (GuildDirectoryMoreMenu)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import ReportModals from "ReportModals" /* 8279 */;
import useCanManageGuildDirectoryEntryDefault from "useCanManageGuildDirectoryEntry" /* 11935 */;
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 11942 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11944 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let entry, obj1, showResult;

let closure_4 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  let canEdit;
  let canRemove;
  let isEntryAdmin;
  let obj2;
  let tmp5;
  let tmp = entry;
  let obj = entry(576);
  const cResult = obj.c(25);
  entry = entry.entry;
  ({ isEntryAdmin, canEdit, canRemove } = useCanManageGuildDirectoryEntryDefault(entry));
  useCanManageGuildDirectoryEntryDefault(entry);
  if (cResult[0] !== entry) {
    const fn = function c() {
      const obj = GuildDirectoryEditDescriptionModalActionCreatorsDefault;
      const obj2 = { entry };
      obj.open(obj2);
    };
    cResult[0] = entry;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== entry) {
    class I {
      constructor() {
        tmp = closure_1(closure_3[7]);
        obj = { title: null, body: null, onConfirm: null, confirmColor: null, confirmText: null, cancelText: null, onCancel: null, isDismissable: false };
        show = tmp.show;
        intl = closure_0(closure_3[8]).intl;
        obj.title = intl.string(closure_0(closure_3[8]).t.KUxYWH);
        intl2 = closure_0(closure_3[8]).intl;
        obj1 = { guildName: entry.name };
        obj.body = intl2.formatToPlainString(closure_0(closure_3[8]).t["/5y0uV"], obj1);
        obj.onConfirm = function onConfirm() {
          const obj = GuildDirectoryActionCreatorsAll;
          const result = obj.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
        };
        obj.confirmColor = closure_0(closure_3[10]).ButtonColors.RED;
        intl3 = closure_0(closure_3[8]).intl;
        obj.confirmText = intl3.string(closure_0(closure_3[8]).t.N86XcP);
        intl4 = closure_0(closure_3[8]).intl;
        obj.cancelText = intl4.string(closure_0(closure_3[8]).t["ETE/oC"]);
        obj.onCancel = function onCancel() {
          const obj = closure_1_1(closure_1_3[7]);
          obj.close();
        };
        showResult = show(obj);
        return;
      }
    }
    cResult[2] = entry;
    cResult[3] = I;
  } else {
    class I {
      constructor() {
        tmp = closure_1(closure_3[7]);
        obj = { title: null, body: null, onConfirm: null, confirmColor: null, confirmText: null, cancelText: null, onCancel: null, isDismissable: false };
        show = tmp.show;
        intl = closure_0(closure_3[8]).intl;
        obj.title = intl.string(closure_0(closure_3[8]).t.KUxYWH);
        intl2 = closure_0(closure_3[8]).intl;
        obj1 = { guildName: entry.name };
        obj.body = intl2.formatToPlainString(closure_0(closure_3[8]).t["/5y0uV"], obj1);
        obj.onConfirm = function onConfirm() {
          const obj = GuildDirectoryActionCreatorsAll;
          const result = obj.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
        };
        obj.confirmColor = closure_0(closure_3[10]).ButtonColors.RED;
        intl3 = closure_0(closure_3[8]).intl;
        obj.confirmText = intl3.string(closure_0(closure_3[8]).t.N86XcP);
        intl4 = closure_0(closure_3[8]).intl;
        obj.cancelText = intl4.string(closure_0(closure_3[8]).t["ETE/oC"]);
        obj.onCancel = function onCancel() {
          const obj = closure_1_1(closure_1_3[7]);
          obj.close();
        };
        showResult = show(obj);
        return;
      }
    }
  }
  if (cResult[4] !== entry) {
    class C {
      constructor() {
        const obj = ReportModals;
        const result = obj.showReportModalForGuildDirectoryEntry(entry);
      }
    }
    cResult[4] = entry;
    cResult[5] = C;
  } else {
    class C {
      constructor() {
        const obj = ReportModals;
        const result = obj.showReportModalForGuildDirectoryEntry(entry);
      }
    }
  }
  if (cResult[6] === canEdit) {
    class C {
      constructor() {
        const obj = ReportModals;
        const result = obj.showReportModalForGuildDirectoryEntry(entry);
      }
    }
  }
  const items = [];
  if (canEdit) {
    let tmp8;
    class C {
      constructor() {
        const obj = ReportModals;
        const result = obj.showReportModalForGuildDirectoryEntry(entry);
      }
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
      const stringResult = obj2.string(tmp(1126).t.XnuOvN);
      cResult[13] = stringResult;
      tmp8 = stringResult;
    } else {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
    }
    if (cResult[14] !== tmp5) {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
      tmp11[0] = tmp8;
      tmp11[1] = tmp(10058).PencilIcon;
      tmp11[2] = tmp5;
      cResult[14] = tmp5;
      cResult[15] = tmp11;
    } else {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
    }
    items.push(tmp11);
  }
  if (canRemove) {
    let tmp13;
    class C {
      constructor() {
        const obj = ReportModals;
        const result = obj.showReportModalForGuildDirectoryEntry(entry);
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
      const stringResult1 = obj3.string(tmp(1126).t.KUxYWH);
      cResult[16] = stringResult1;
      tmp13 = stringResult1;
    } else {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
    }
    if (cResult[17] !== I) {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
      tmp16[0] = tmp13;
      tmp16[1] = tmp(4847).TrashIcon;
      tmp16[3] = I;
      cResult[17] = I;
      cResult[18] = tmp16;
    } else {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
    }
    items.push(tmp16);
  }
  if (!isEntryAdmin) {
    let tmp18;
    class C {
      constructor() {
        const obj = ReportModals;
        const result = obj.showReportModalForGuildDirectoryEntry(entry);
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
      const stringResult2 = obj4.string(tmp(1126).t.Aen9eh);
      cResult[19] = stringResult2;
      tmp18 = stringResult2;
    } else {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
    }
    if (cResult[20] !== C) {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
      tmp21[0] = tmp18;
      tmp21[1] = tmp(8315).FlagIcon;
      tmp21[3] = C;
      cResult[20] = C;
      cResult[21] = tmp21;
    } else {
      class C {
        constructor() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
      }
    }
    items.push(tmp21);
  }
  cResult[6] = canEdit;
  cResult[7] = canRemove;
  cResult[8] = tmp5;
  cResult[9] = I;
  cResult[10] = C;
  cResult[11] = isEntryAdmin;
  cResult[12] = items;
}) : ((entry) => {
  let canRemove;
  let intl;
  let intl2;
  let intl3;
  let isEntryAdmin;
  entry = entry.entry;
  const tmp2 = useCanManageGuildDirectoryEntryDefault(entry);
  const items = [];
  ({ isEntryAdmin, canRemove } = tmp2);
  if (tmp2.canEdit) {
    let obj = {
      label: intl.string(entry(1126).t.XnuOvN),
      IconComponent: entry(10058).PencilIcon,
      action: function handleEdit() {
          const obj = GuildDirectoryEditDescriptionModalActionCreatorsDefault;
          const obj2 = { entry };
          obj.open(obj2);
        }
    };
    const push = items.push;
    intl = entry(1126).intl;
    push(obj);
  }
  if (canRemove) {
    let obj2 = {
      label: intl2.string(entry(1126).t.KUxYWH),
      IconComponent: entry(4847).TrashIcon,
      variant: "destructive",
      action: function handleRemove() {
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let obj2;
          let obj = {
            title: intl.string(intl5.t.KUxYWH),
            body: intl2.formatToPlainString(intl5.t["/5y0uV"], obj2),
            onConfirm() {
              const obj = GuildDirectoryActionCreatorsAll;
              const result = obj.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
            },
            confirmColor: native.ButtonColors.RED,
            confirmText: intl3.string(intl5.t.N86XcP),
            cancelText: intl4.string(intl5.t["ETE/oC"]),
            onCancel() {
              const obj = closure_1_1(closure_1_3[7]);
              obj.close();
            },
            isDismissable: false
          };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl5.intl;
          intl2 = intl5.intl;
          obj2 = { guildName: entry.name };
          intl3 = intl5.intl;
          intl4 = intl5.intl;
          show(obj);
        }
    };
    const push2 = items.push;
    intl2 = entry(1126).intl;
    push2(obj2);
  }
  if (!isEntryAdmin) {
    const push3 = items.push;
    const obj3 = {
      label: intl3.string(entry(1126).t.Aen9eh),
      IconComponent: entry(8315).FlagIcon,
      variant: "destructive",
      action: function handleReport() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
    };
    intl3 = entry(1126).intl;
    push3(obj3);
  }
  let tmp9 = null;
  if (0 !== items.length) {
    tmp9 = jsx(entry(7579).ContextMenu, {
      items,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged1 = Object.assign(merged);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref.ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
    });
  }
  return tmp9;
});
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default tmp3;