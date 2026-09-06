// discord_app/modules/icymi/native/ContentInventoryEntryRow.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import itemsDefault from "content_inventory/GamingLikeEntryRow.tsx";
import CustomStatusEntryRowDefault from "content_inventory/CustomStatusEntryRow.tsx";
import closure_3 from "../../../stores/RelationshipStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default function ContentInventoryEntryRow(content) {
  content = content.content;
  let flag = content.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = content.visible;
  let obj = content(504);
  const items = [closure_3];
  if (obj.useStateFromStores(items, () => closure_1_3.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (tmp(8130).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8130).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8130).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          obj = { content: null, renderForScreenshot: null, visible: null };
          obj[0] = content;
          obj[1] = flag;
          if (flag2 == null) {
            flag2 = false;
          }
          obj[2] = flag2;
          return jsx(CustomStatusEntryRowDefault, { content: null, renderForScreenshot: null, visible: null });
        } else {
          return null;
        }
      }
    }
    obj = { content: null, renderForScreenshot: null };
    obj[0] = content;
    obj[1] = flag;
    return jsx(itemsDefault, { content: null, renderForScreenshot: null });
  }
}
