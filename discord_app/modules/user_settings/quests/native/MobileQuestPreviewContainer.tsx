// discord_app/modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { container: null, title: null };
obj = { marginTop: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_5 = createCacheKey.createStyles(obj);
const obj1 = { marginBottom: ThemesDefault.space.PX_16 };
const result = set.fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default function MobileQuestPreviewContainer(title) {
  title = title.title;
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  let tmp4 = null != title;
  if (tmp4) {
    obj = { variant: "text-lg/semibold", color: "text-default", style: null, children: null };
    obj[2] = tmp.title;
    obj[3] = title;
    tmp4 = callback(Text.Text, obj);
  }
  const items = [tmp4, title.children];
  obj[1] = items;
  return closure_4(View, obj);
};