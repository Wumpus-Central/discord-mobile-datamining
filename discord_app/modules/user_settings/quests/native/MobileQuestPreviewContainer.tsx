import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { container: null, title: null };
obj = { marginTop: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16 };
obj[0] = obj;
obj[1] = { marginBottom: require("Themes").space.PX_16 };
let closure_5 = createCacheKey.createStyles(obj);
const obj1 = { marginBottom: require("Themes").space.PX_16 };
const result = require("createCacheKey").fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default function MobileQuestPreviewContainer(title) {
  title = title.title;
  const tmp = callback2();
  let obj = { style: tmp.container, children: null };
  let tmp4 = null != title;
  if (tmp4) {
    obj = { variant: "text-lg/semibold", color: "text-default", style: null, children: null };
    obj[2] = tmp.title;
    obj[3] = title;
    tmp4 = callback(require(4251) /* Text */.Text, obj);
  }
  const items = [tmp4, title.children];
  obj[1] = items;
  return closure_4(View, obj);
};