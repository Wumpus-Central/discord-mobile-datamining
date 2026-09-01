// discord_app/modules/user_profile/native/ApplicationIconAndName.tsx
import set from "../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles((width) => {
  let obj = { gameIcon: null };
  obj = { width, height: width, marginTop: -1, marginRight: 4, borderRadius: ThemesDefault.radii.xs };
  obj[0] = obj;
  return obj;
});
const result = set.fileFinishedImporting("modules/user_profile/native/ApplicationIconAndName.tsx");

export default function ApplicationIconAndName(textVariant) {
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
  const items = [closure_3(Button.Icon, obj, application.id)];
  obj = { variant: textVariant.textVariant, children: null };
  let str2 = "";
  if (useComma) {
    str2 = ", ";
  }
  obj = { children: null };
  obj[1] = "" + application.name + str2;
  items[1] = closure_3(Text.Text, obj);
  obj[0] = items;
  return closure_5(closure_4, obj);
}
