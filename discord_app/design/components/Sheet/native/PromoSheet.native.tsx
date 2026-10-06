// discord_app/design/components/Sheet/native/PromoSheet.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ExpressiveGradient2 from "../../ExpressiveGradient/native/ExpressiveGradient.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, _require;

let c9;
let metroImportAll;
let obj2;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
let closure_4 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = {
  content: { paddingHorizontal: 20, position: "relative" },
  title: { textAlign: "center" },
  description: { textAlign: "center" },
  illustration: { alignSelf: "stretch", alignItems: "center" },
  graphic: obj2,
};
obj2 = { alignSelf: "center", maxWidth: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
let closure_10 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (actions) => {
      let color;
      let description;
      let gradientColor;
      let graphic;
      let illustration;
      let items;
      let items1;
      let title;
      let tmp10;
      let tmp18;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(33);
      if (cResult[0] !== actions) {
        ({ title, description, illustration, graphic, gradientColor } = actions);
        _require = gradientColor;
        actions = actions.actions;
        const tmp13 = _objectWithoutProperties(actions, closure_3);
        cResult[0] = actions;
        cResult[1] = actions;
        cResult[2] = description;
        cResult[3] = gradientColor;
        cResult[4] = graphic;
        cResult[5] = illustration;
        cResult[6] = tmp13;
        cResult[7] = title;
        tmp10 = title;
        tmp9 = tmp13;
        tmp8 = illustration;
        tmp7 = graphic;
        tmp5 = description;
        tmp4 = actions;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        _require = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
      }
      const tmp14 = closure_10();
      if (null != gradientColor) {
        if (cResult[8] !== gradientColor) {
          const fn = function _(arg0) {
            let ExpressiveGradient;
            let obj2;
            const obj = { children: metroImportAll(ExpressiveGradient, obj2) };
            const merged = Object.assign(arg0);
            obj2 = { offsetBottom: 0.25, color, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
            ExpressiveGradient = ExpressiveGradient2.ExpressiveGradient;
            return metroImportAll(View, obj);
          };
          cResult[8] = gradientColor;
          cResult[9] = fn;
        }
      }
      if (cResult[10] === tmp7) {
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp14.graphic) {
            let tmp17;
            if (cResult[13] === tmp14.illustration) {
              tmp17 = cResult[14];
            }
            if (cResult[15] === tmp14.title) {
              let tmp25;
              if (cResult[16] === tmp10) {
                tmp25 = cResult[17];
              }
              if (cResult[18] === tmp5) {
                let tmp28;
                if (cResult[19] === tmp14.description) {
                  tmp28 = cResult[20];
                }
                if (cResult[21] === tmp25) {
                  let tmp31;
                  if (cResult[22] === tmp28) {
                    tmp31 = cResult[23];
                  }
                  if (cResult[24] === tmp4) {
                    if (cResult[25] === tmp17) {
                      let tmp34;
                      if (cResult[26] === tmp31) {
                        tmp34 = cResult[27];
                      }
                      if (cResult[28] === tmp15) {
                        if (cResult[29] === tmp9) {
                          if (cResult[30] === tmp14.content) {
                            let tmp37;
                            if (cResult[31] === tmp34) {
                              tmp37 = cResult[32];
                            }
                            return tmp37;
                          }
                        }
                      }
                      let obj2 = {
                        startExpanded: true,
                        contentStyles: tmp14.content,
                        backgroundComponent: tmp15,
                        children: tmp34,
                      };
                      BottomSheet = tmp(6652).BottomSheet;
                      let merged = Object.assign(tmp9);
                      const tmp42 = closure_8(BottomSheet, obj2);
                      cResult[28] = tmp15;
                      cResult[29] = tmp9;
                      cResult[30] = tmp14.content;
                      cResult[31] = tmp34;
                      cResult[32] = tmp42;
                      tmp37 = tmp42;
                    }
                  }
                  const obj3 = { spacing: 24, children: items };
                  items = [tmp17, tmp31, tmp4];
                  const tmp36 = closure_9(require("Stack/Stack").Stack, obj3);
                  cResult[24] = tmp4;
                  cResult[25] = tmp17;
                  cResult[26] = tmp31;
                  cResult[27] = tmp36;
                  tmp34 = tmp36;
                }
                const obj4 = { children: items1 };
                items1 = [tmp25, tmp28];
                const tmp33 = closure_9(require("Stack/Stack").Stack, obj4);
                cResult[21] = tmp25;
                cResult[22] = tmp28;
                cResult[23] = tmp33;
                tmp31 = tmp33;
              }
              let tmp29 = null;
              if (null != tmp5) {
                const obj5 = {
                  variant: "redesign/heading-18/medium",
                  color: "text-subtle",
                  style: tmp14.description,
                  children: tmp5,
                };
                tmp29 = closure_8(tmp(4892).Text, obj5);
              }
              cResult[18] = tmp5;
              cResult[19] = tmp14.description;
              cResult[20] = tmp29;
              tmp28 = tmp29;
            }
            const obj6 = {
              variant: "heading-xl/semibold",
              color: "mobile-text-heading-primary",
              style: tmp14.title,
              children: tmp10,
            };
            const tmp27 = closure_8(require("Text/Text").Text, obj6);
            cResult[15] = tmp14.title;
            cResult[16] = tmp10;
            cResult[17] = tmp27;
            tmp25 = tmp27;
          }
        }
      }
      if (null != tmp7) {
        const obj7 = { style: tmp14.graphic };
        const Graphic = tmp(9904).Graphic;
        const merged1 = Object.assign(tmp7);
        tmp18 = closure_8(Graphic, obj7);
      } else {
        tmp18 = null;
        if (null != tmp8) {
          const obj8 = { style: tmp14.illustration, children: tmp8 };
          tmp18 = closure_8(View, obj8);
        }
      }
      cResult[10] = tmp7;
      cResult[11] = tmp8;
      cResult[12] = tmp14.graphic;
      cResult[13] = tmp14.illustration;
      cResult[14] = tmp18;
      tmp17 = tmp18;
    }
  : (arg0) => {
      let Stack;
      let actions;
      let description;
      let gradientColor;
      let graphic;
      let illustration;
      let obj6;
      let title;
      let tmp4Result;
      ({ description, illustration, graphic, gradientColor } = arg0);
      ({ title, actions } = arg0);
      const tmp = _objectWithoutProperties(arg0, closure_4);
      const tmp2 = closure_10();
      const items = [gradientColor];
      const memo = react.useMemo(() => {
        let color;
        return null != gradientColor
          ? (arg0) => {
              let ExpressiveGradient;
              let obj2;
              const obj = { children: closure_2_8(ExpressiveGradient, obj2) };
              const merged = Object.assign(arg0);
              obj2 = { offsetBottom: 0.25, color, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
              ExpressiveGradient = gradientColor(dependencyMap[8]).ExpressiveGradient;
              return closure_2_8(View, obj);
            }
          : undefined;
      }, items);
      let obj = {
        startExpanded: true,
        contentStyles: tmp2.content,
        backgroundComponent: memo,
        children: closure_9(Stack, obj6),
      };
      BottomSheet = gradientColor(6652).BottomSheet;
      let merged = Object.assign(tmp);
      Stack = gradientColor(5600).Stack;
      if (null != graphic) {
        let obj2 = { style: tmp2.graphic };
        const Graphic = gradientColor(9904).Graphic;
        const merged1 = Object.assign(graphic);
        tmp4Result = closure_8(Graphic, obj2);
      } else {
        tmp4Result = null;
        if (null != illustration) {
          const obj3 = { style: tmp2.illustration, children: illustration };
          tmp4Result = closure_8(View, obj3);
        }
      }
      const items1 = [tmp4Result, ,];
      const Stack2 = gradientColor(5600).Stack;
      const items2 = [,];
      const obj4 = {
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        style: tmp2.title,
        children: title,
      };
      items2[0] = closure_8(gradientColor(4892).Text, obj4);
      let tmp4Result2 = null;
      if (null != description) {
        const obj5 = {
          variant: "redesign/heading-18/medium",
          color: "text-subtle",
          style: tmp2.description,
          children: description,
        };
        tmp4Result2 = closure_8(gradientColor(4892).Text, obj5);
      }
      obj6 = { spacing: 24, children: items1 };
      items2[1] = tmp4Result2;
      items1[1] = closure_9(Stack2, { children: items2 });
      items1[2] = actions;
      return closure_8(BottomSheet, obj);
    };
const result = size.fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = tmp3;
