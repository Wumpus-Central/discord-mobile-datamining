// === Module 10628: ForumTagContextMenu ===

// Module 10628 (ForumTagContextMenu)
import jsxProd from "jsxProd" /* 21 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(1935).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1114).intl;
  obj.label = intl.string(tagId(1114).t["8VG6IY"]);
  obj.IconComponent = tagId(10629).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(8666).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};