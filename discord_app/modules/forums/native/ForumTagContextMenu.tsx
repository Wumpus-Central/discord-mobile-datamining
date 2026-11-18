// === Module 11575: ForumTagContextMenu ===

// Module 11575 (ForumTagContextMenu)
import jsxProd from "jsxProd" /* 21 */;
import ToastUtils from "ToastUtils" /* 5504 */;
import ClipboardUtils from "ClipboardUtils" /* 7456 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(4648).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1113).intl;
  obj.label = intl.string(tagId(1113).t["8VG6IY"]);
  obj.IconComponent = tagId(10338).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  items = [obj];
  return jsx(tagId(8570).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};