// discord_app/modules/icymi/native/ContentInventoryEntryRow.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import GamingLikeEntryRowDefault from "content_inventory/GamingLikeEntryRow.tsx";
import CustomStatusEntryRowDefault from "content_inventory/CustomStatusEntryRow.tsx";
import react from "../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let content;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (content) => {
      let first;
      let renderForScreenshot;
      let tmp7;
      let visible;
      const obj = content(576);
      const cResult = obj.c(10);
      content = content.content;
      ({ renderForScreenshot, visible } = content);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== content.author_id) {
        const fn = function s() {
          return RelationshipStore.isBlockedOrIgnored(content.author_id);
        };
        cResult[1] = content.author_id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = content(504);
      if (tmpResult.useStateFromStores(first, tmp7)) {
        return null;
      } else {
        const content_type = content.content_type;
        if (content(7824).ContentInventoryEntryType.TOP_GAME !== content_type) {
          if (content(7824).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
            if (content(7824).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
              if (visible == null) {
                visible = false;
              }
              if (cResult[6] === (undefined !== renderForScreenshot && renderForScreenshot)) {
                if (cResult[7] === content) {
                  let tmp10;
                  if (cResult[8] === visible) {
                    tmp10 = cResult[9];
                  }
                  return tmp10;
                }
              }
              const tmp13 = jsx(CustomStatusEntryRowDefault, {
                content,
                renderForScreenshot: undefined !== renderForScreenshot && renderForScreenshot,
                visible,
              });
              cResult[6] = undefined !== renderForScreenshot && renderForScreenshot;
              cResult[7] = content;
              cResult[8] = visible;
              cResult[9] = tmp13;
              tmp10 = tmp13;
            } else {
              return null;
            }
          }
        }
        if (cResult[3] === (undefined !== renderForScreenshot && renderForScreenshot)) {
          let tmp14;
          if (cResult[4] === content) {
            tmp14 = cResult[5];
          }
          return tmp14;
        }
        const tmp17 = jsx(GamingLikeEntryRowDefault, {
          content,
          renderForScreenshot: undefined !== renderForScreenshot && renderForScreenshot,
        });
        cResult[3] = undefined !== renderForScreenshot && renderForScreenshot;
        cResult[4] = content;
        cResult[5] = tmp17;
        tmp14 = tmp17;
      }
    }
  : (content) => {
      content = content.content;
      let flag = content.renderForScreenshot;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = content.visible;
      const items = [RelationshipStore];
      const obj = content(504);
      if (obj.useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(content.author_id))) {
        return null;
      } else {
        const content_type = content.content_type;
        if (content(7824).ContentInventoryEntryType.TOP_GAME !== content_type) {
          if (content(7824).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
            if (content(7824).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
              CustomStatusEntryRowDefault;
              if (flag2 == null) {
                flag2 = false;
              }
              return <tmp6 content={content} renderForScreenshot={flag} visible={flag2} />;
            } else {
              return null;
            }
          }
        }
        return jsx(GamingLikeEntryRowDefault, { content, renderForScreenshot: flag });
      }
    };
const result = size.fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default tmp3;
