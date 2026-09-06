// discord_app/modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: null, title: null };
obj = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj.container = obj;
obj.title = { marginBottom: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default function MobileQuestPreviewContainer(title) {
  title = title.title;
  const tmp = closure_5();
  let obj = { style: tmp.container, children: null };
  let tmp4 = null != title;
  if (tmp4) {
    obj = { variant: "text-lg/semibold", color: "text-default", style: tmp.title, children: title };
    tmp4 = React3(Text_Text.Text, obj);
  }
  const items = [tmp4, title.children];
  obj.children = items;
  return React4(View, obj);
}
