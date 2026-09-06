// === Module 16500: ContentInventoryEntryRow ===

// Module 16500 (ContentInventoryEntryRow)
import GamingLikeEntryRowDefault from "GamingLikeEntryRow" /* 16501 */;
import CustomStatusEntryRowDefault from "CustomStatusEntryRow" /* 16510 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default function ContentInventoryEntryRow(content) {
  content = content.content;
  let flag = content.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = content.visible;
  let obj = content(504);
  const items = [RelationshipStore];
  if (obj.useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (tmp(8130).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8130).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8130).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          obj = { content, renderForScreenshot: flag, visible: null };
          if (flag2 == null) {
            flag2 = false;
          }
          obj.visible = flag2;
          return jsx(CustomStatusEntryRowDefault, { content, renderForScreenshot: flag, visible: null });
        } else {
          return null;
        }
      }
    }
    obj = { content, renderForScreenshot: flag };
    return jsx(GamingLikeEntryRowDefault, { content, renderForScreenshot: flag });
  }
};