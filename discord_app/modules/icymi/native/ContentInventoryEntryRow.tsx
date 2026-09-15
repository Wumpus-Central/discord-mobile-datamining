// discord_app/modules/icymi/native/ContentInventoryEntryRow.tsx
import GamingLikeEntryRowDefault from "content_inventory/GamingLikeEntryRow.tsx";
import CustomStatusEntryRowDefault from "content_inventory/CustomStatusEntryRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

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
    if (tmp(8250).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8250).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8250).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
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
}
