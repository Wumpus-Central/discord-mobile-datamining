// discord_app/modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import ReportModals from "../../../in_app_reports/ReportModals.tsx";
import useCanManageGuildDirectoryEntryDefault from "../../useCanManageGuildDirectoryEntry.tsx";
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (entry) => {
      const cResult = entry(576).c(25);
      entry = entry.entry;
      let obj = entry(576);
      ({ isEntryAdmin, canEdit, canRemove } = useCanManageGuildDirectoryEntryDefault(entry));
      if (cResult[0] !== entry) {
        const fn = function c() {
          GuildDirectoryEditDescriptionModalActionCreatorsDefault.open({ entry });
        };
        cResult[0] = entry;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== entry) {
        class I {
          constructor() {
            obj = closure_1(closure_3[7]);
            obj1 = {
              title: null,
              body: null,
              onConfirm: null,
              confirmColor: null,
              confirmText: null,
              cancelText: null,
              onCancel: null,
              isDismissable: false,
            };
            intl = closure_0(closure_3[8]).intl;
            obj1.title = intl.string(closure_0(closure_3[8]).t.KUxYWH);
            intl2 = closure_0(closure_3[8]).intl;
            obj4 = { guildName: entry.name };
            obj1.body = intl2.formatToPlainString(closure_0(closure_3[8]).t["/5y0uV"], obj4);
            obj1.onConfirm = function onConfirm() {
              const result = GuildDirectoryActionCreatorsAll.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
            };
            obj1.confirmColor = closure_0(closure_3[10]).ButtonColors.RED;
            intl3 = closure_0(closure_3[8]).intl;
            obj1.confirmText = intl3.string(closure_0(closure_3[8]).t.N86XcP);
            intl4 = closure_0(closure_3[8]).intl;
            obj1.cancelText = intl4.string(closure_0(closure_3[8]).t["ETE/oC"]);
            obj1.onCancel = function onCancel() {
              closure_1_1(dependencyMap[7]).close();
            };
            showResult = obj.show(obj1);
            return;
          }
        }
        cResult[2] = entry;
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            obj = closure_1(closure_3[7]);
            obj1 = {
              title: null,
              body: null,
              onConfirm: null,
              confirmColor: null,
              confirmText: null,
              cancelText: null,
              onCancel: null,
              isDismissable: false,
            };
            intl = closure_0(closure_3[8]).intl;
            obj1.title = intl.string(closure_0(closure_3[8]).t.KUxYWH);
            intl2 = closure_0(closure_3[8]).intl;
            obj4 = { guildName: entry.name };
            obj1.body = intl2.formatToPlainString(closure_0(closure_3[8]).t["/5y0uV"], obj4);
            obj1.onConfirm = function onConfirm() {
              const result = GuildDirectoryActionCreatorsAll.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
            };
            obj1.confirmColor = closure_0(closure_3[10]).ButtonColors.RED;
            intl3 = closure_0(closure_3[8]).intl;
            obj1.confirmText = intl3.string(closure_0(closure_3[8]).t.N86XcP);
            intl4 = closure_0(closure_3[8]).intl;
            obj1.cancelText = intl4.string(closure_0(closure_3[8]).t["ETE/oC"]);
            obj1.onCancel = function onCancel() {
              closure_1_1(dependencyMap[7]).close();
            };
            showResult = obj.show(obj1);
            return;
          }
        }
      }
      if (cResult[4] !== entry) {
        class C {
          constructor() {
            obj = closure_0(closure_3[11]);
            result = obj.showReportModalForGuildDirectoryEntry(entry);
            return;
          }
        }
        cResult[4] = entry;
        cResult[5] = C;
      } else {
        class C {
          constructor() {
            obj = closure_0(closure_3[11]);
            result = obj.showReportModalForGuildDirectoryEntry(entry);
            return;
          }
        }
      }
      if (cResult[6] === canEdit) {
        class C {
          constructor() {
            obj = closure_0(closure_3[11]);
            result = obj.showReportModalForGuildDirectoryEntry(entry);
            return;
          }
        }
      }
      const items = [];
      if (!canEdit) {
        class C {
          constructor() {
            obj = closure_0(closure_3[11]);
            result = obj.showReportModalForGuildDirectoryEntry(entry);
            return;
          }
        }
      } else {
        class C {
          constructor() {
            obj = closure_0(closure_3[11]);
            result = obj.showReportModalForGuildDirectoryEntry(entry);
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              obj = closure_0(closure_3[11]);
              result = obj.showReportModalForGuildDirectoryEntry(entry);
              return;
            }
          }
          const stringResult = obj2.string(tmp(1126).t.XnuOvN);
          cResult[13] = stringResult;
          let PencilIcon = stringResult;
        } else {
          class C {
            constructor() {
              obj = closure_0(closure_3[11]);
              result = obj.showReportModalForGuildDirectoryEntry(entry);
              return;
            }
          }
        }
        if (cResult[14] !== tmp5) {
          class C {
            constructor() {
              obj = closure_0(closure_3[11]);
              result = obj.showReportModalForGuildDirectoryEntry(entry);
              return;
            }
          }
          tmp10[0] = PencilIcon;
          PencilIcon = tmp(10058).PencilIcon;
          tmp10[1] = PencilIcon;
          tmp10[2] = tmp5;
          cResult[14] = tmp5;
          cResult[15] = tmp10;
        } else {
          class C {
            constructor() {
              obj = closure_0(closure_3[11]);
              result = obj.showReportModalForGuildDirectoryEntry(entry);
              return;
            }
          }
        }
        items.push(tmp10);
      }
      const tmp4 = useCanManageGuildDirectoryEntryDefault(entry);
    }
  : (entry) => {
      entry = entry.entry;
      const tmp2 = useCanManageGuildDirectoryEntryDefault(entry);
      const items = [];
      ({ isEntryAdmin, canRemove } = tmp2);
      if (tmp2.canEdit) {
        let obj = { label: null, IconComponent: null, action: null };
        let intl = entry(1126).intl;
        obj.label = intl.string(entry(1126).t.XnuOvN);
        obj.IconComponent = entry(10058).PencilIcon;
        obj.action = function handleEdit() {
          GuildDirectoryEditDescriptionModalActionCreatorsDefault.open({ entry });
        };
        items.push(obj);
      }
      if (canRemove) {
        let obj2 = { label: null, IconComponent: null, variant: "destructive", action: null };
        let intl2 = entry(1126).intl;
        obj2.label = intl2.string(entry(1126).t.KUxYWH);
        obj2.IconComponent = entry(4847).TrashIcon;
        obj2.action = function handleRemove() {
          const obj2 = {
            title: null,
            body: null,
            onConfirm: null,
            confirmColor: null,
            confirmText: null,
            cancelText: null,
            onCancel: null,
            isDismissable: false,
          };
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
        obj3.IconComponent = entry(8315).FlagIcon;
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
            obj.icon = jsx(entry(7577).MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.WHITE });
            return jsx(entry(7575).IconButton, { ref: ref.ref });
          },
        };
        tmp9 = jsx(entry(7579).ContextMenu, {
          items,
          children(ref) {
            const merged = Object.assign(ref, Object.assign({ ref: 0 }));
            const obj = { ref: ref.ref };
            const merged1 = Object.assign(merged);
            obj.size = "sm";
            obj.variant = "secondary";
            const intl = entry(1126).intl;
            obj.accessibilityLabel = intl.string(entry(1126).t.PdRCRg);
            obj.icon = jsx(entry(7577).MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.WHITE });
            return jsx(entry(7575).IconButton, { ref: ref.ref });
          },
        });
      }
      return tmp9;
    };
