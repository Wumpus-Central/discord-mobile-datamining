// === Module 12309: ApplicationIconAndName ===

// Module 12309 (ApplicationIconAndName)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { gameIcon: size };
  size = { width, height: width, marginTop: -1, marginRight: 4, borderRadius: nativeDefault.radii.xs };
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let iconSize;
  let items;
  let textVariant;
  let useComma;
  const obj = react;
  const cResult = obj.c(15);
  ({ application, textVariant, iconSize, useComma } = arg0);
  const tmp4 = undefined !== useComma && useComma;
  const tmp5 = closure_6(iconSize);
  if (cResult[0] === application) {
    let tmp6;
    let tmp7;
    if (cResult[1] === iconSize) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj2 = { uri: tmp6 };
      cResult[3] = tmp6;
      cResult[4] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === application.id) {
      if (cResult[6] === tmp5.gameIcon) {
        let tmp8;
        if (cResult[7] === tmp7) {
          tmp8 = cResult[8];
        }
        let str3 = "";
        const name = application.name;
        if (tmp4) {
          str3 = ", ";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + name + str3;
        if (cResult[9] === combined) {
          let tmp13;
          if (cResult[10] === textVariant) {
            tmp13 = cResult[11];
          }
          if (cResult[12] === tmp8) {
            let tmp16;
            if (cResult[13] === tmp13) {
              tmp16 = cResult[14];
            }
            return tmp16;
          }
          const obj3 = { children: items };
          items = [tmp8, tmp13];
          const tmp19 = hasOwnProperty(React3, obj3);
          cResult[12] = tmp8;
          cResult[13] = tmp13;
          cResult[14] = tmp19;
          tmp16 = tmp19;
        }
        const obj4 = { variant: textVariant, children: combined };
        const tmp15 = _false(Text_Text.Text, obj4);
        cResult[9] = combined;
        cResult[10] = textVariant;
        cResult[11] = tmp15;
        tmp13 = tmp15;
      }
    }
    const obj5 = { style: tmp5.gameIcon, resizeMode: "contain", source: tmp7, disableColor: true };
    const tmp10 = _false(native.Icon, obj5, application.id);
    cResult[5] = application.id;
    cResult[6] = tmp5.gameIcon;
    cResult[7] = tmp7;
    cResult[8] = tmp10;
    tmp8 = tmp10;
  }
  let str = application.getIconURL(iconSize);
  if (str == null) {
    str = "";
  }
  cResult[0] = application;
  cResult[1] = iconSize;
  cResult[2] = str;
  tmp6 = str;
}) : ((textVariant) => {
  let application;
  let iconSize;
  let name;
  let str;
  let str2;
  let useComma;
  ({ application, iconSize, useComma } = textVariant);
  textVariant = textVariant.textVariant;
  if (useComma === undefined) {
    useComma = false;
  }
  const obj = { style: closure_6(iconSize).gameIcon, resizeMode: "contain", source: { uri: str }, disableColor: true };
  const Icon = native.Icon;
  str = application.getIconURL(iconSize);
  if (str == null) {
    str = "";
  }
  const items = [_false(Icon, obj, application.id), ];
  const obj2 = { variant: textVariant, children: "" + name + str2 };
  str2 = "";
  const Text = Text_Text.Text;
  name = application.name;
  if (useComma) {
    str2 = ", ";
  }
  const obj3 = { children: items };
  items[1] = _false(Text, obj2);
  return hasOwnProperty(React3, obj3);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/ApplicationIconAndName.tsx");

export default tmp3;