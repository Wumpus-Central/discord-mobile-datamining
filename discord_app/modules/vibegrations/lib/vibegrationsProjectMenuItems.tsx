// === Module 17092: vibegrationsProjectMenuItems ===

// Module 17092 (vibegrationsProjectMenuItems)
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsProjectMenuItems.tsx");

export const previewMenuItems = function previewMenuItems(canRefresh) {
  ({ offers, connectPending } = canRefresh);
  const items = [];
  if (canRefresh.canRefresh) {
    const obj = { id: "preview-refresh", label: null, kind: "refresh", disabled: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3714["8oRfMw"]);
    obj.disabled = tmp;
    items.push(obj);
  }
  const iter = offers[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let connection = nextResult.connection;
    if ("authorize" === nextResult.offer) {
      let obj2 = { id: null, label: null, kind: "connect", connectionType: null, disabled: null };
      let _HermesInternal = HermesInternal;
      obj2.id = "preview-connect-" + connection.type;
      let intl2 = util.intl;
      let obj3 = { label: connection.label };
      obj2.label = intl2.formatToPlainString(_modDef3714.JXACNA, obj3);
      obj2.connectionType = connection.type;
      obj2.disabled = connectPending.has(connection.type);
      let obj4 = obj2;
    } else {
      obj4 = { id: null, label: null, kind: "connect", connectionType: null, disabled: true };
      let _HermesInternal2 = HermesInternal;
      obj4.id = "preview-connect-" + connection.type;
      let intl3 = util.intl;
      let obj5 = { label: connection.label };
      obj4.label = intl3.formatToPlainString(_modDef3714.JMd7xW, obj5);
      obj4.connectionType = connection.type;
    }
    let arr3 = items.push(obj4);
    continue;
  }
  return items;
};