// discord_app/modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useCanManageGuildDirectoryEntry").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default function GuildDirectoryMoreMenu(entry) {
  let canRemove;
  let isEntryAdmin;
  entry = entry.entry;
  const tmp2 = importDefault(11591)(entry);
  const items = [];
  ({ isEntryAdmin, canRemove } = tmp2);
  if (tmp2.canEdit) {
    let obj = { label: null, IconComponent: null, action: null };
    let intl = entry(1236).intl;
    obj[0] = intl.string(entry(1236).t.XnuOvN);
    obj[1] = entry(9591).PencilIcon;
    obj[2] = function handleEdit() {
      let obj = outer1_1(outer1_3[3]);
      obj = { entry };
      obj.open(obj);
    };
    items.push(obj);
  }
  if (canRemove) {
    obj = { label: null, IconComponent: null, variant: "destructive", action: null };
    let intl2 = entry(1236).intl;
    obj[0] = intl2.string(entry(1236).t.KUxYWH);
    obj[1] = entry(4244).TrashIcon;
    obj[3] = function handleRemove() {
      let obj = outer1_1(outer1_3[4]);
      obj = { title: null, body: null, onConfirm: null, confirmColor: null, confirmText: null, cancelText: null, onCancel: null };
      const intl = entry(outer1_3[5]).intl;
      obj[0] = intl.string(entry(outer1_3[5]).t.KUxYWH);
      const intl2 = entry(outer1_3[5]).intl;
      obj = { guildName: entry.name };
      obj[1] = intl2.formatToPlainString(entry(outer1_3[5]).t["/5y0uV"], obj);
      obj[2] = function onConfirm() {
        const result = outer1_2(outer1_3[6]).removeDirectoryGuildEntry(closure_0.channelId, closure_0.guildId);
      };
      obj[3] = entry(outer1_3[7]).ButtonColors.RED;
      const intl3 = entry(outer1_3[5]).intl;
      obj[4] = intl3.string(entry(outer1_3[5]).t.N86XcP);
      const intl4 = entry(outer1_3[5]).intl;
      obj[5] = intl4.string(entry(outer1_3[5]).t["ETE/oC"]);
      obj[6] = function onCancel() {
        callback(table[4]).close();
      };
      obj.show(obj);
    };
    items.push(obj);
  }
  if (!isEntryAdmin) {
    obj = { label: null, IconComponent: null, variant: "destructive", action: null };
    let intl3 = entry(1236).intl;
    obj[0] = intl3.string(entry(1236).t.Aen9eh);
    obj[1] = entry(8691).FlagIcon;
    obj[3] = function handleReport() {
      const result = entry(outer1_3[8]).showReportModalForGuildDirectoryEntry(entry);
    };
    items.push(obj);
  }
  let tmp9 = null;
  if (0 !== items.length) {
    const obj1 = { items: null, children: null };
    obj1[0] = items;
    obj1[1] = function children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      let obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.size = "sm";
      obj.variant = "secondary";
      const intl = entry(1236).intl;
      obj.accessibilityLabel = intl.string(entry(1236).t.PdRCRg);
      obj = { size: "sm", color: null };
      obj[1] = callback(712).colors.WHITE;
      obj.icon = callback2(entry(8414).MoreHorizontalIcon, obj);
      return callback2(entry(7672).IconButton, obj);
    };
    tmp9 = jsx(entry(8408).ContextMenu, { items: null, children: null });
  }
  return tmp9;
};