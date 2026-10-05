// === Module 12917: maybeFetchContentInventoryOutbox ===

// Module 12917 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1102 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 12918 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8447 */;

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