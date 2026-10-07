// discord_app/design/components/Sheet/native/PromoSheet.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ExpressiveGradient from "../../ExpressiveGradient/native/ExpressiveGradient.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
let closure_4 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  content: { paddingHorizontal: 20, position: "relative" },
  title: { textAlign: "center" },
  description: { textAlign: "center" },
  illustration: { alignSelf: "stretch", alignItems: "center" },
  graphic: { alignSelf: "center", maxWidth: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH },
};
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignSelf: "center", maxWidth: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? (actions) => {
      const cResult = require("c").c(33);
      if (cResult[0] !== actions) {
        ({ title, description, illustration: illustration2, graphic, gradientColor } = actions);
        _require = gradientColor;
        actions = actions.actions;
        const tmp12 = _objectWithoutProperties(actions, closure_3);
        cResult[0] = actions;
        cResult[1] = actions;
        cResult[2] = description;
        cResult[3] = gradientColor;
        cResult[4] = graphic;
        cResult[5] = illustration2;
        cResult[6] = tmp12;
        cResult[7] = title;
        let tmp9 = title;
        let tmp8 = tmp12;
        illustration = illustration2;
        let tmp7 = graphic;
        let tmp5 = description;
        let tmp4 = actions;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        _require = cResult[3];
        tmp7 = cResult[4];
        illustration = cResult[5];
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      const tmp13 = closure_10();
      if (null == gradientColor) {
        if (cResult[10] === tmp7) {
          if (cResult[11] === illustration) {
            if (cResult[12] === tmp13.graphic) {
              if (cResult[13] === tmp13.illustration) {
                if (cResult[15] === tmp13.title) {
                  if (cResult[16] === tmp9) {
                    let tmp25 = cResult[17];
                  }
                  if (cResult[18] === tmp5) {
                    if (cResult[19] === tmp13.description) {
                      let tmp28 = cResult[20];
                    }
                    if (cResult[21] === tmp25) {
                      if (cResult[22] === tmp28) {
                        let tmp31 = cResult[23];
                      }
                      if (cResult[24] === tmp4) {
                        if (cResult[25] === tmp16) {
                          if (cResult[26] === tmp31) {
                            let tmp34 = cResult[27];
                          }
                          if (cResult[28] === undefined) {
                            if (cResult[29] === tmp8) {
                              if (cResult[30] === tmp13.content) {
                                if (cResult[31] === tmp34) {
                                  let tmp37 = cResult[32];
                                }
                                return tmp37;
                              }
                            }
                          }
                          const obj2 = {};
                          let merged = Object.assign(tmp8);
                          obj2.startExpanded = true;
                          obj2.contentStyles = tmp13.content;
                          obj2.backgroundComponent = undefined;
                          obj2.children = tmp34;
                          const tmp42 = closure_8(tmp(6652).BottomSheet, obj2);
                          cResult[28] = undefined;
                          cResult[29] = tmp8;
                          cResult[30] = tmp13.content;
                          cResult[31] = tmp34;
                          cResult[32] = tmp42;
                          tmp37 = tmp42;
                        }
                      }
                      const obj3 = { spacing: 24, children: null };
                      const items = [tmp16, tmp31, tmp4];
                      obj3.children = items;
                      const tmp36 = closure_9(tmp(5600).Stack, obj3);
                      cResult[24] = tmp4;
                      cResult[25] = tmp16;
                      cResult[26] = tmp31;
                      cResult[27] = tmp36;
                      tmp34 = tmp36;
                    }
                    const obj4 = { children: null };
                    const items1 = [tmp25, tmp28];
                    obj4.children = items1;
                    const tmp33 = closure_9(tmp(5600).Stack, obj4);
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
                      style: tmp13.description,
                      children: tmp5,
                    };
                    tmp29 = closure_8(tmp(4892).Text, obj5);
                  }
                  cResult[18] = tmp5;
                  cResult[19] = tmp13.description;
                  cResult[20] = tmp29;
                  tmp28 = tmp29;
                }
                const obj6 = {
                  variant: "heading-xl/semibold",
                  color: "mobile-text-heading-primary",
                  style: tmp13.title,
                  children: tmp9,
                };
                const tmp27 = closure_8(tmp(4892).Text, obj6);
                cResult[15] = tmp13.title;
                cResult[16] = tmp9;
                cResult[17] = tmp27;
                tmp25 = tmp27;
              }
            }
          }
        }
        if (null != tmp7) {
          const obj7 = {};
          const merged1 = Object.assign(tmp7);
          obj7.style = tmp13.graphic;
          let tmp17 = closure_8(tmp(9904).Graphic, obj7);
        } else {
          tmp17 = null;
          if (null != illustration) {
            const obj8 = { style: tmp13.illustration, children: illustration };
            tmp17 = closure_8(View, obj8);
          }
        }
        cResult[10] = tmp7;
        cResult[11] = illustration;
        ({ graphic: tmp3[12], illustration } = tmp13);
        cResult[13] = illustration;
        cResult[14] = tmp17;
      } else if (cResult[8] !== gradientColor) {
        const fn = function _(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.children = closure_2_8(ExpressiveGradient.ExpressiveGradient, {
            offsetBottom: 0.25,
            color,
            backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
          });
          return closure_2_8(View, obj);
        };
        cResult[8] = gradientColor;
        cResult[9] = fn;
      }
      let obj = require("c");
    }
  : (arg0) => {
      ({ description, illustration, graphic, gradientColor } = arg0);
      ({ title, actions } = arg0);
      const tmp2 = closure_10();
      const items = [gradientColor];
      const memo = noop.useMemo(
        () =>
          null != gradientColor
            ? (arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.children = closure_2_8(gradientColor(9905).ExpressiveGradient, {
                  offsetBottom: 0.25,
                  color,
                  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
                });
                return closure_2_8(View, obj);
              }
            : undefined,
        items,
      );
      let obj = {};
      let merged = Object.assign(_objectWithoutProperties(arg0, closure_4));
      obj.startExpanded = true;
      obj.contentStyles = tmp2.content;
      obj.backgroundComponent = memo;
      if (null != graphic) {
        const obj2 = {};
        const merged1 = Object.assign(graphic);
        obj2.style = tmp2.graphic;
        let tmp4Result = closure_8(gradientColor(9904).Graphic, obj2);
      } else {
        tmp4Result = null;
        if (null != illustration) {
          const obj3 = { style: tmp2.illustration, children: illustration };
          tmp4Result = closure_8(View, obj3);
        }
      }
      const items1 = [tmp4Result, ,];
      const items2 = [
        closure_8(gradientColor(4892).Text, {
          variant: "heading-xl/semibold",
          color: "mobile-text-heading-primary",
          style: tmp2.title,
          children: title,
        }),
      ];
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
      const obj6 = { spacing: 24, children: null };
      items2[1] = tmp4Result2;
      items1[1] = closure_9(gradientColor(5600).Stack, { children: items2 });
      items1[2] = actions;
      obj6.children = items1;
      obj.children = closure_9(gradientColor(5600).Stack, obj6);
      return closure_8(gradientColor(6652).BottomSheet, obj);
    };
