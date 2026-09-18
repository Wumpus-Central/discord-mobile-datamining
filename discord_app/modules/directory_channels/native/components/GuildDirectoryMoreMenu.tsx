// === Module 12556: GuildDirectoryMoreMenu ===

// Module 12556 (GuildDirectoryMoreMenu)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5067 */;
import ReportModals from "ReportModals" /* 8867 */;
import useCanManageGuildDirectoryEntryDefault from "useCanManageGuildDirectoryEntry" /* 12550 */;
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 12557 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 12559 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default function GuildDirectoryMoreMenu(entry) {
  entry = entry.entry;
  const tmp2 = useCanManageGuildDirectoryEntryDefault(entry);
  const items = [];
  ({ isEntryAdmin, canRemove } = tmp2);
  if (tmp2.canEdit) {
    let obj = { label: null, IconComponent: null, action: null };
    let intl = entry(1115).intl;
    obj.label = intl.string(entry(1115).t.XnuOvN);
    obj.IconComponent = entry(10491).PencilIcon;
    obj.action = function handleEdit() {
      GuildDirectoryEditDescriptionModalActionCreatorsDefault.open({ entry });
    };
    items.push(obj);
  }
  if (canRemove) {
    let obj2 = { label: null, IconComponent: null, variant: "destructive", action: null };
    let intl2 = entry(1115).intl;
    obj2.label = intl2.string(entry(1115).t.KUxYWH);
    obj2.IconComponent = entry(4679).TrashIcon;
    obj2.action = function handleRemove() {
      const obj2 = { title: null, body: null, onConfirm: null, confirmColor: null, confirmText: null, cancelText: null, onCancel: null };
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
        closure_1_1(dependencyMap[4]).close();
      };
      actions_AlertActionCreatorsDefault.show(obj2);
    };
    items.push(obj2);
  }
  if (!isEntryAdmin) {
    const obj3 = { label: null, IconComponent: null, variant: "destructive", action: null };
    let intl3 = entry(1115).intl;
    obj3.label = intl3.string(entry(1115).t.Aen9eh);
    obj3.IconComponent = entry(8902).FlagIcon;
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
          const intl = entry(1115).intl;
          obj.accessibilityLabel = intl.string(entry(1115).t.PdRCRg);
          obj.icon = jsx(entry(8142).MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.WHITE });
          return jsx(entry(8140).IconButton, { ref: ref.ref });
        }
    };
    tmp9 = jsx(entry(8135).ContextMenu, {
      items,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.size = "sm";
          obj.variant = "secondary";
          const intl = entry(1115).intl;
          obj.accessibilityLabel = intl.string(entry(1115).t.PdRCRg);
          obj.icon = jsx(entry(8142).MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.WHITE });
          return jsx(entry(8140).IconButton, { ref: ref.ref });
        }
    });
  }
  return tmp9;
};