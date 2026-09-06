// === Module 12628: ApplicationIconAndName ===

// Module 12628 (ApplicationIconAndName)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { gameIcon: null };
  const size = { width, height: width, marginTop: -1, marginRight: 4, borderRadius: nativeDefault.radii.xs };
  obj.gameIcon = size;
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/native/ApplicationIconAndName.tsx");

export default function ApplicationIconAndName(textVariant) {
  ({ application, iconSize, useComma } = textVariant);
  if (useComma === undefined) {
    useComma = false;
  }
  let obj = { style: closure_6(iconSize).gameIcon, resizeMode: "contain", source: null, disableColor: true };
  let str = application.getIconURL(iconSize);
  if (str == null) {
    str = "";
  }
  obj.source = { uri: str };
  const items = [React3(native.Icon, obj, application.id), ];
  obj = { variant: textVariant.textVariant, children: null };
  let str2 = "";
  if (useComma) {
    str2 = ", ";
  }
  obj = { children: "" + application.name + str2 };
  items[1] = React3(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(React4, obj);
};