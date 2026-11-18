// === Module 14506: maybeFetchContentInventoryOutbox ===

// Module 14506 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1089 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 14507 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8900 */;

require = fn;
const MINUTE = DurationsDefault.Millis.MINUTE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/maybeFetchContentInventoryOutbox.tsx");

export default function maybeFetchContentInventoryOutbox(id, arg1) {
  if (!ContentInventoryOutboxStore.isFetchingUserOutbox(id)) {
    const userOutbox = ContentInventoryOutboxStore.getUserOutbox(id);
    let num;
    if (userOutbox != null) {
      num = userOutbox.lastFetched;
    }
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    if (Date.now() - num >= MINUTE) {
      return ContentInventoryHttpApi.getContentInventoryOutbox(id, arg1);
    }
  }
};