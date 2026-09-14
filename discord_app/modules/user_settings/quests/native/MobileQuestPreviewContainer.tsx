// === Module 15254: MobileQuestPreviewContainer ===

// Module 15254 (MobileQuestPreviewContainer)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4632 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4636 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 }, title: null };
let obj2 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.title = { marginBottom: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default function MobileQuestPreviewContainer(title) {
  title = title.title;
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  let tmp4 = null != title;
  if (tmp4) {
    const obj2 = { variant: "text-lg/semibold", color: "text-default", style: tmp.title, children: title };
    tmp4 = React3(Text_Text.Text, obj2);
  }
  const items = [tmp4, title.children];
  obj.children = items;
  return React4(View, obj);
};