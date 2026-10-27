// === Module 14438: maybeFetchContentInventoryOutbox ===

// Module 14438 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1101 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 14439 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 9385 */;

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