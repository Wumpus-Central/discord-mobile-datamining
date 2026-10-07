// === Module 14990: MobileQuestPreviewContainer ===

// Module 14990 (MobileQuestPreviewContainer)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 }, title: null };
let obj2 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.title = { marginBottom: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ children, title } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === tmp4.title) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp4.container) {
        if (cResult[5] === tmp5) {
          let tmp8 = cResult[6];
        }
        return tmp8;
      }
    }
    const obj2 = { style: tmp4.container, children: null };
    const items = [tmp5, children];
    obj2.children = items;
    const tmp11 = React4(View, obj2);
    cResult[3] = children;
    cResult[4] = tmp4.container;
    cResult[5] = tmp5;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  let tmp6 = null != title;
  if (tmp6) {
    const obj3 = { variant: "text-lg/semibold", color: "text-default", style: tmp4.title, children: title };
    tmp6 = React3(Text_Text.Text, obj3);
  }
  cResult[0] = tmp4.title;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((title) => {
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
});