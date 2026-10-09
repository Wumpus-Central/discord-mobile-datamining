// === Module 16870: ContentInventoryEntryRow ===

// Module 16870 (ContentInventoryEntryRow)
import GamingLikeEntryRowDefault from "GamingLikeEntryRow" /* 16871 */;
import CustomStatusEntryRowDefault from "CustomStatusEntryRow" /* 16878 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ContentInventoryEntryRow(content) {
  const cResult = content(576).c(10);
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== content.author_id) {
    const fn = function s() {
      return RelationshipStore.isBlockedOrIgnored(content.author_id);
    };
    cResult[1] = content.author_id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = content(576);
  if (tmpResult.useStateFromStores(first, tmp7)) {
    return null;
  } else {
    const content_type = content.content_type;
    if (tmp(8251).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8251).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8251).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          if (visible == null) {
            visible = false;
          }
          if (cResult[6] === tmp4) {
            if (cResult[7] === content) {
              if (cResult[8] === visible) {
                let tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
          const obj2 = { content, renderForScreenshot: tmp4, visible };
          const tmp13 = jsx(CustomStatusEntryRowDefault, { content, renderForScreenshot: tmp4, visible });
          cResult[6] = tmp4;
          cResult[7] = content;
          cResult[8] = visible;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        } else {
          return null;
        }
      }
    }
    if (cResult[3] === tmp4) {
      if (cResult[4] === content) {
        let tmp14 = cResult[5];
      }
      return tmp14;
    }
    const obj3 = { content, renderForScreenshot: tmp4 };
    const tmp17 = jsx(GamingLikeEntryRowDefault, { content, renderForScreenshot: tmp4 });
    cResult[3] = tmp4;
    cResult[4] = content;
    cResult[5] = tmp17;
    tmp14 = tmp17;
  }
  tmpResult = content(504);
}) : (function ContentInventoryEntryRow(content) {
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
    if (tmp(8251).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8251).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8251).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
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
});