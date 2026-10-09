// === Module 9986: ForumTagContextMenu ===

// Module 9986 (ForumTagContextMenu)
import jsxProd from "jsxProd" /* 21 */;
import ToastUtils from "ToastUtils" /* 4767 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ForumTagContextMenu(tagId) {
  const cResult = tagId(576).c(7);
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(2041).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["8VG6IY"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tagId) {
    const obj2 = {
      label: first,
      IconComponent: tmp(9987).IdIcon,
      action() {
          ClipboardUtils.copy(tagId);
          ToastUtils.presentIdCopied();
        }
    };
    const items = [obj2];
    cResult[1] = tagId;
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === children) {
    if (cResult[4] === tmp7) {
      if (cResult[5] === setting) {
        let tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const tmp9 = jsx(tagId(9335).ContextMenu, { triggerOnLongPress: true, items: tmp7, enabled: setting, children });
  cResult[3] = children;
  cResult[4] = tmp7;
  cResult[5] = setting;
  cResult[6] = tmp9;
  tmp8 = tmp9;
  let obj = tagId(576);
}) : (function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(2041).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1126).intl;
  obj.label = intl.string(tagId(1126).t["8VG6IY"]);
  obj.IconComponent = tagId(9987).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(9335).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
});