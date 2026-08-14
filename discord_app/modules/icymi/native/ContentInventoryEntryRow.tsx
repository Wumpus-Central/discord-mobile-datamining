// discord_app/modules/icymi/native/ContentInventoryEntryRow.tsx
import "noop";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { jsx } from "jsxProd";
import { CustomStatusEntryRow } from "content_inventory/CustomStatusEntryRow.tsx";
import { items } from "content_inventory/GamingLikeEntryRow.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default function ContentInventoryEntryRow(content) {
  content = content.content;
  let flag = content.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = content.visible;
  let obj = content(589);
  const items = [markAllUserIdListsStale];
  if (obj.useStateFromStores(items, () => outer1_3.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (tmp(8303).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8303).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8303).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          obj = { content: null, renderForScreenshot: null, visible: null };
          obj[0] = content;
          obj[1] = flag;
          if (flag2 == null) {
            flag2 = false;
          }
          obj[2] = flag2;
          return jsx(CustomStatusEntryRow, { content: null, renderForScreenshot: null, visible: null });
        } else {
          return null;
        }
      }
    }
    obj = { content: null, renderForScreenshot: null };
    obj[0] = content;
    obj[1] = flag;
    return jsx(items, { content: null, renderForScreenshot: null });
  }
};