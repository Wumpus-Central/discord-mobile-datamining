// === Module 16833: ContentInventoryEntryRow ===

// Module 16833 (ContentInventoryEntryRow)
import GamingLikeEntryRowDefault from "GamingLikeEntryRow" /* 16834 */;
import CustomStatusEntryRowDefault from "CustomStatusEntryRow" /* 16843 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;

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
  const items = [RelationshipStore];
  if (obj.useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (tmp(8398).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8398).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8398).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          const obj2 = { content, renderForScreenshot: flag, visible: null };
          if (flag2 == null) {
            flag2 = false;
          }
          obj2.visible = flag2;
          return jsx(CustomStatusEntryRowDefault, { content, renderForScreenshot: flag, visible: null });
        } else {
          return null;
        }
      }
    }
    const obj3 = { content, renderForScreenshot: flag };
    return jsx(GamingLikeEntryRowDefault, { content, renderForScreenshot: flag });
  }
  obj = content(504);
};