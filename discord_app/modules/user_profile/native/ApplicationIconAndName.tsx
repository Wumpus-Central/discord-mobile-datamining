// discord_app/modules/user_profile/native/ApplicationIconAndName.tsx
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";

let c3;
let c4;
let c5;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles((width) => {
  let obj = { gameIcon: null };
  obj = { width, height: width, marginTop: -1, marginRight: 4, borderRadius: Themes.radii.xs };
  obj[0] = obj;
  return obj;
});
const result = require("Themes").fileFinishedImporting("modules/user_profile/native/ApplicationIconAndName.tsx");

export default function ApplicationIconAndName(textVariant) {
  let application;
  let iconSize;
  let useComma;
  ({ application, iconSize, useComma } = textVariant);
  if (useComma === undefined) {
    useComma = false;
  }
  let obj = { style: callback(iconSize).gameIcon, resizeMode: "contain", source: null, disableColor: true };
  let str = application.getIconURL(iconSize);
  if (str == null) {
    str = "";
  }
  obj[2] = { uri: str };
  const items = [closure_3(Button /* Button */.Icon, obj, application.id), ];
  obj = { variant: textVariant.textVariant, children: null };
  let str2 = "";
  if (useComma) {
    str2 = ", ";
  }
  obj = { children: null };
  obj[1] = "" + application.name + str2;
  items[1] = closure_3(Text /* Text */.Text, obj);
  obj[0] = items;
  return closure_5(closure_4, obj);
};