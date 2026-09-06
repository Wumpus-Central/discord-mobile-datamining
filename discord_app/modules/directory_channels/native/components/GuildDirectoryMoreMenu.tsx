// discord_app/modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import ReportModals from "../../../in_app_reports/ReportModals.tsx";
import useCanManageGuildDirectoryEntryDefault from "../../useCanManageGuildDirectoryEntry.tsx";
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators.tsx";
import GuildDirectoryActionCreatorsAll from "../../GuildDirectoryActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    let intl = entry(1114).intl;
    obj.label = intl.string(entry(1114).t.XnuOvN);
    obj.IconComponent = entry(10250).PencilIcon;
    obj.action = function handleEdit() {
      const obj = { entry };
      obj.open(obj);
    };
    items.push(obj);
  }
  if (canRemove) {
    obj = { label: null, IconComponent: null, variant: "destructive", action: null };
    let intl2 = entry(1114).intl;
    obj.label = intl2.string(entry(1114).t.KUxYWH);
    obj.IconComponent = entry(4518).TrashIcon;
    obj.action = function handleRemove() {
      let obj = {
        title: null,
        body: null,
        onConfirm: null,
        confirmColor: null,
        confirmText: null,
        cancelText: null,
        onCancel: null,
      };
      const intl = util.intl;
      obj.title = intl.string(util.t.KUxYWH);
      const intl2 = util.intl;
      obj = { guildName: entry.name };
      obj.body = intl2.formatToPlainString(util.t["/5y0uV"], obj);
      obj.onConfirm = function onConfirm() {
        const result = GuildDirectoryActionCreatorsAll.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
      };
      obj.confirmColor = native.ButtonColors.RED;
      const intl3 = util.intl;
      obj.confirmText = intl3.string(util.t.N86XcP);
      const intl4 = util.intl;
      obj.cancelText = intl4.string(util.t["ETE/oC"]);
      obj.onCancel = function onCancel() {
        closure_1_1(dependencyMap[4]).close();
      };
      obj.show(obj);
    };
    items.push(obj);
  }
  if (!isEntryAdmin) {
    obj = { label: null, IconComponent: null, variant: "destructive", action: null };
    let intl3 = entry(1114).intl;
    obj.label = intl3.string(entry(1114).t.Aen9eh);
    obj.IconComponent = entry(8664).FlagIcon;
    obj.action = function handleReport() {
      const result = ReportModals.showReportModalForGuildDirectoryEntry(entry);
    };
    items.push(obj);
  }
  let tmp9 = null;
  if (0 !== items.length) {
    const obj1 = {
      items,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary";
        const intl = entry(1114).intl;
        obj.accessibilityLabel = intl.string(entry(1114).t.PdRCRg);
        obj = { size: "sm", color: nativeDefault.colors.WHITE };
        obj.icon = jsx(entry(8672).MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.WHITE });
        return jsx(entry(8097).IconButton, { size: "sm", color: nativeDefault.colors.WHITE });
      },
    };
    tmp9 = jsx(entry(8666).ContextMenu, {
      items,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        let obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.size = "sm";
        obj.variant = "secondary";
        const intl = entry(1114).intl;
        obj.accessibilityLabel = intl.string(entry(1114).t.PdRCRg);
        obj = { size: "sm", color: nativeDefault.colors.WHITE };
        obj.icon = jsx(entry(8672).MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.WHITE });
        return jsx(entry(8097).IconButton, { size: "sm", color: nativeDefault.colors.WHITE });
      },
    });
  }
  return tmp9;
}
