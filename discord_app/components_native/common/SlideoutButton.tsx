// discord_app/components_native/common/SlideoutButton.tsx
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../design/void/native.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { button: { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }, buttonText: null };
let obj3 = { color: null, fontSize: 12, fontFamily: null, marginTop: 2, marginHorizontal: 2, textAlign: "center" };
const ColorUtils = fn(4927);
obj3.color = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.6);
obj3.fontFamily = fn(1085).Fonts.PRIMARY_SEMIBOLD;
obj2.buttonText = obj3;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SlideoutButton(arg0) {
      const cResult = c.c(20);
      ({ onPress, color, IconComponent, title, height } = arg0);
      let num = 60;
      if (undefined !== height) {
        num = height;
      }
      const tmp4 = closure_6();
      if (cResult[0] === color) {
        if (cResult[1] === num) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.button) {
          if (cResult[4] === tmp5) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] !== IconComponent) {
            const obj2 = { color: nativeDefault.colors.WHITE };
            const tmp10 = React4(IconComponent, obj2);
            cResult[6] = IconComponent;
            cResult[7] = tmp10;
            let tmp7 = tmp10;
          } else {
            tmp7 = cResult[7];
          }
          if (cResult[8] !== title) {
            const formatted = title.toUpperCase();
            cResult[8] = title;
            cResult[9] = formatted;
            let tmp11 = formatted;
          } else {
            tmp11 = cResult[9];
          }
          if (cResult[10] === tmp4.buttonText) {
            if (cResult[11] === tmp11) {
              let tmp13 = cResult[12];
            }
            if (cResult[13] === tmp6) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp13) {
                  let tmp16 = cResult[16];
                }
                if (cResult[17] === onPress) {
                  if (cResult[18] === tmp16) {
                    let tmp20 = cResult[19];
                  }
                  return tmp20;
                }
                const obj3 = { accessibilityRole: "button", onPress, children: tmp16 };
                const tmp22 = React4(Pressables.PressableOpacity, obj3);
                cResult[17] = onPress;
                cResult[18] = tmp16;
                cResult[19] = tmp22;
                tmp20 = tmp22;
              }
            }
            const obj4 = { style: tmp6, children: null };
            const items = [tmp7, tmp13];
            obj4.children = items;
            const tmp19 = hasOwnProperty(View, obj4);
            cResult[13] = tmp6;
            cResult[14] = tmp7;
            cResult[15] = tmp13;
            cResult[16] = tmp19;
            tmp16 = tmp19;
          }
          const obj5 = { style: tmp4.buttonText, children: tmp11 };
          const tmp15 = React4(native.LegacyText, obj5);
          cResult[10] = tmp4.buttonText;
          cResult[11] = tmp11;
          cResult[12] = tmp15;
          tmp13 = tmp15;
        }
        const items1 = [tmp4.button, tmp5];
        cResult[3] = tmp4.button;
        cResult[4] = tmp5;
        cResult[5] = items1;
        tmp6 = items1;
      }
      const size = { backgroundColor: color, width: 72, height: num };
      cResult[0] = color;
      cResult[1] = num;
      cResult[2] = size;
      tmp5 = size;
    }
  : function SlideoutButton(arg0) {
      ({ title, height } = arg0);
      ({ onPress, color, IconComponent } = arg0);
      if (height === undefined) {
        height = 60;
      }
      const tmp = closure_6();
      const obj = { accessibilityRole: "button", onPress, children: null };
      const obj2 = { style: null, children: null };
      const items = [tmp.button, { backgroundColor: color, width: 72, height }];
      obj2.style = items;
      const items1 = [React4(IconComponent, { color: nativeDefault.colors.WHITE })];
      const obj3 = { color: nativeDefault.colors.WHITE };
      items1[1] = React4(native.LegacyText, { style: tmp.buttonText, children: title.toUpperCase() });
      obj2.children = items1;
      obj.children = hasOwnProperty(View, obj2);
      return React4(Pressables.PressableOpacity, obj);
    };
tmp4.width = 72;
let size = fn(2);
const result = size.fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default tmp4;
