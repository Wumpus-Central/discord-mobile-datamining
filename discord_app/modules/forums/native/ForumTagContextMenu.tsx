// === Module 10357: ForumTagContextMenu ===

// Module 10357 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tagId;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((tagId) => {
  let first;
  let tmp7;
  let obj = tagId(576);
  const cResult = obj.c(7);
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(2028).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tagId(1126).t["8VG6IY"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tagId) {
    let obj2 = {
      label: first,
      IconComponent: tagId(10358).IdIcon,
      action() {
          const obj = ClipboardUtils;
          obj.copy(tagId);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        }
    };
    const items = [obj2];
    cResult[1] = tagId;
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === children) {
    if (cResult[4] === tmp7) {
      let tmp8;
      if (cResult[5] === setting) {
        tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const tmp9 = jsx(tagId(7579).ContextMenu, { triggerOnLongPress: true, items: tmp7, enabled: setting, children });
  cResult[3] = children;
  cResult[4] = tmp7;
  cResult[5] = setting;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : ((tagId) => {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(2028).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1126).t["8VG6IY"]),
    IconComponent: tagId(10358).IdIcon,
    action() {
      const obj = ClipboardUtils;
      obj.copy(tagId);
      const obj2 = ToastUtils;
      obj2.presentIdCopied();
    }
  };
  const enabled = DeveloperMode.useSetting();
  intl = tagId(1126).intl;
  const items = [obj];
  return jsx(tagId(7579).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
});
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default tmp2;