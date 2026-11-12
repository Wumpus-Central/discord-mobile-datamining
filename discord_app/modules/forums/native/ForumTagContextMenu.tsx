// === Module 11561: ForumTagContextMenu ===

// Module 11561 (ForumTagContextMenu)
import jsxProd from "jsxProd" /* 21 */;
import ToastUtils from "ToastUtils" /* 5951 */;
import ClipboardUtils from "ClipboardUtils" /* 7877 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(5068).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1113).intl;
  obj.label = intl.string(tagId(1113).t["8VG6IY"]);
  obj.IconComponent = tagId(11562).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  items = [obj];
  return jsx(tagId(9081).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};