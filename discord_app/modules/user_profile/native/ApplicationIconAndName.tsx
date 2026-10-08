// discord_app/modules/user_profile/native/ApplicationIconAndName.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { gameIcon: null };
  const size = { width, height: width, marginTop: -1, marginRight: 4, borderRadius: nativeDefault.radii.xs };
  obj.gameIcon = size;
  return obj;
});
const result = size.fileFinishedImporting("modules/user_profile/native/ApplicationIconAndName.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ApplicationIconAndName(arg0) {
      const cResult = c.c(15);
      ({ application, textVariant, iconSize, useComma } = arg0);
      const tmp5 = closure_6(iconSize);
      if (cResult[0] === application) {
        if (cResult[1] === iconSize) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== tmp6) {
          const obj2 = { uri: tmp6 };
          cResult[3] = tmp6;
          cResult[4] = obj2;
          let tmp7 = obj2;
        } else {
          tmp7 = cResult[4];
        }
        if (cResult[5] === application.id) {
          if (cResult[6] === tmp5.gameIcon) {
            if (cResult[7] === tmp7) {
              let tmp8 = cResult[8];
            }
            let str3 = "";
            if (tmp4) {
              str3 = ", ";
            }
            const _HermesInternal = HermesInternal;
            const combined = "" + application.name + str3;
            if (cResult[9] === combined) {
              if (cResult[10] === textVariant) {
                let tmp13 = cResult[11];
              }
              if (cResult[12] === tmp8) {
                if (cResult[13] === tmp13) {
                  let tmp16 = cResult[14];
                }
                return tmp16;
              }
              const obj3 = { children: null };
              const items = [tmp8, tmp13];
              obj3.children = items;
              const tmp19 = hasOwnProperty(React4, obj3);
              cResult[12] = tmp8;
              cResult[13] = tmp13;
              cResult[14] = tmp19;
              tmp16 = tmp19;
            }
            const obj4 = { variant: textVariant, children: combined };
            const tmp15 = React3(Text_Text.Text, obj4);
            cResult[9] = combined;
            cResult[10] = textVariant;
            cResult[11] = tmp15;
            tmp13 = tmp15;
          }
        }
        const obj5 = { style: tmp5.gameIcon, resizeMode: "contain", source: tmp7, disableColor: true };
        const tmp10 = React3(native.Icon, obj5, application.id);
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
      tmp4 = undefined !== useComma && useComma;
    }
  : function ApplicationIconAndName(textVariant) {
      ({ application, iconSize, useComma } = textVariant);
      if (useComma === undefined) {
        useComma = false;
      }
      const obj = { style: closure_6(iconSize).gameIcon, resizeMode: "contain", source: null, disableColor: true };
      let str = application.getIconURL(iconSize);
      if (str == null) {
        str = "";
      }
      obj.source = { uri: str };
      const items = [React3(native.Icon, obj, application.id)];
      const obj2 = { variant: textVariant.textVariant, children: null };
      let str2 = "";
      if (useComma) {
        str2 = ", ";
      }
      const obj3 = { children: null };
      obj2.children = "" + application.name + str2;
      items[1] = React3(Text_Text.Text, obj2);
      obj3.children = items;
      return hasOwnProperty(React4, obj3);
    };
