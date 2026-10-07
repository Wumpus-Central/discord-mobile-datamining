// discord_app/modules/group_dm/native/GroupDMNitroCapBanner.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import LinearGradientDefault from "../../../../_runtime/05612_LinearGradient.js";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import usePremiumPrimaryGradientColorsDefault from "../../premium/native/usePremiumPrimaryGradientColors.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const locations = [0.0065, 0.5046, 0.9196];
let c8 = 110.47;
const createStyles = fn(4896);
let obj2 = {
  wrapper: {
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_8,
    paddingBottom: nativeDefault.space.PX_16,
  },
  pill: null,
  iconContainer: null,
  trailing: null,
  gradientClip: null,
  border: null,
  text: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.pill = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj2.iconContainer = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  alignItems: "center",
  justifyContent: "center",
  marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
let obj5 = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  alignItems: "center",
  justifyContent: "center",
  marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
obj2.trailing = { flexDirection: "row", alignItems: "center", marginStart: nativeDefault.space.PX_8 };
obj2.gradientClip = { overflow: "hidden" };
let obj6 = { flexDirection: "row", alignItems: "center", marginStart: nativeDefault.space.PX_8 };
obj2.border = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.text = { flex: 1 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(43);
      ({ children, trailing, showLeadingIcon, wrapperStyle } = arg0);
      const tmp5 = closure_9();
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
      const tmp8 = usePremiumPrimaryGradientColorsDefault();
      if (cResult[0] === tmp5.wrapper) {
        if (cResult[1] === wrapperStyle) {
          let tmp9 = cResult[2];
        }
        if (cResult[3] !== token) {
          const obj2 = { borderRadius: token };
          cResult[3] = token;
          cResult[4] = obj2;
          let tmp10 = obj2;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === tmp5.pill) {
          if (cResult[6] === tmp10) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] !== token) {
            const obj3 = { borderRadius: token };
            cResult[8] = token;
            cResult[9] = obj3;
            let tmp12 = obj3;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] === tmp5.gradientClip) {
            if (cResult[11] === tmp12) {
              let tmp13 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [React3.absoluteFill, { opacity: 0.2 }];
              cResult[13] = items;
              let tmp16 = items;
            } else {
              tmp16 = cResult[13];
            }
            if (cResult[14] !== tmp8) {
              const obj4 = { style: tmp16, useAngle: true, angle, colors: tmp8, locations };
              const tmp22 = hasOwnProperty(LinearGradientDefault, obj4);
              cResult[14] = tmp8;
              cResult[15] = tmp22;
              let tmp18 = tmp22;
            } else {
              tmp18 = cResult[15];
            }
            if (cResult[16] === tmp13) {
              if (cResult[17] === tmp18) {
                let tmp23 = cResult[18];
              }
              if (cResult[19] === tmp4) {
                if (cResult[20] === tmp5.iconContainer) {
                  let tmp27 = cResult[21];
                }
                if (cResult[22] === children) {
                  if (cResult[23] === tmp5.text) {
                    let tmp31 = cResult[24];
                  }
                  if (cResult[25] === tmp5.trailing) {
                    if (cResult[26] === trailing) {
                      let tmp35 = cResult[27];
                    }
                    if (cResult[28] !== token) {
                      const obj5 = { borderRadius: token };
                      cResult[28] = token;
                      cResult[29] = obj5;
                      let tmp39 = obj5;
                    } else {
                      tmp39 = cResult[29];
                    }
                    if (cResult[30] === tmp5.border) {
                      if (cResult[31] === tmp39) {
                        let tmp40 = cResult[32];
                      }
                      if (cResult[33] === tmp27) {
                        if (cResult[34] === tmp31) {
                          if (cResult[35] === tmp35) {
                            if (cResult[36] === tmp40) {
                              if (cResult[37] === tmp11) {
                                if (cResult[38] === tmp23) {
                                  let tmp45 = cResult[39];
                                }
                                if (cResult[40] === tmp45) {
                                  if (cResult[41] === tmp9) {
                                    let tmp49 = cResult[42];
                                  }
                                  return tmp49;
                                }
                                const obj6 = { style: tmp9, children: tmp45 };
                                const tmp52 = hasOwnProperty(React4, obj6);
                                cResult[40] = tmp45;
                                cResult[41] = tmp9;
                                cResult[42] = tmp52;
                                tmp49 = tmp52;
                              }
                            }
                          }
                        }
                      }
                      const obj7 = { style: tmp11, children: null };
                      const items1 = [tmp23, tmp27, tmp31, tmp35, tmp40];
                      obj7.children = items1;
                      const tmp48 = timestampProducer(React4, obj7);
                      cResult[33] = tmp27;
                      cResult[34] = tmp31;
                      cResult[35] = tmp35;
                      cResult[36] = tmp40;
                      cResult[37] = tmp11;
                      cResult[38] = tmp23;
                      cResult[39] = tmp48;
                      tmp45 = tmp48;
                    }
                    const obj8 = { style: null, pointerEvents: "none" };
                    const items2 = [React3.absoluteFill, tmp5.border, tmp39];
                    obj8.style = items2;
                    const tmp44 = hasOwnProperty(React4, obj8);
                    cResult[30] = tmp5.border;
                    cResult[31] = tmp39;
                    cResult[32] = tmp44;
                    tmp40 = tmp44;
                  }
                  const obj9 = { style: tmp5.trailing, children: trailing };
                  const tmp38 = hasOwnProperty(React4, obj9);
                  cResult[25] = tmp5.trailing;
                  cResult[26] = trailing;
                  cResult[27] = tmp38;
                  tmp35 = tmp38;
                }
                const obj10 = { style: tmp5.text, children };
                const tmp34 = hasOwnProperty(React4, obj10);
                cResult[22] = children;
                cResult[23] = tmp5.text;
                cResult[24] = tmp34;
                tmp31 = tmp34;
              }
              let tmp28 = tmp4;
              if (tmp4) {
                const obj11 = { style: tmp5.iconContainer, children: null };
                const obj12 = { size: "md", color: nativeDefault.colors.WHITE };
                obj11.children = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj12);
                tmp28 = hasOwnProperty(React4, obj11);
              }
              cResult[19] = tmp4;
              cResult[20] = tmp5.iconContainer;
              cResult[21] = tmp28;
              tmp27 = tmp28;
            }
            const obj13 = { style: tmp13, children: tmp18 };
            const tmp26 = hasOwnProperty(React4, obj13);
            cResult[16] = tmp13;
            cResult[17] = tmp18;
            cResult[18] = tmp26;
            tmp23 = tmp26;
          }
          const items3 = [React3.absoluteFill, tmp5.gradientClip, tmp12];
          cResult[10] = tmp5.gradientClip;
          cResult[11] = tmp12;
          cResult[12] = items3;
          tmp13 = items3;
        }
        const items4 = [tmp5.pill, tmp10];
        cResult[5] = tmp5.pill;
        cResult[6] = tmp10;
        cResult[7] = items4;
        tmp11 = items4;
      }
      const items5 = [tmp5.wrapper, wrapperStyle];
      cResult[0] = tmp5.wrapper;
      cResult[1] = wrapperStyle;
      cResult[2] = items5;
      tmp9 = items5;
      const tmpResult = useToken;
    }
  : (showLeadingIcon) => {
      let flag = showLeadingIcon.showLeadingIcon;
      ({ children, trailing } = showLeadingIcon);
      if (flag === undefined) {
        flag = true;
      }
      const tmp = closure_9();
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
      const obj2 = { style: null, children: null };
      const items = [tmp.wrapper, showLeadingIcon.wrapperStyle];
      obj2.style = items;
      const obj3 = { style: null, children: null };
      const items1 = [tmp.pill, { borderRadius: token }];
      obj3.style = items1;
      const obj4 = { style: null, children: null };
      const items2 = [React3.absoluteFill, tmp.gradientClip, { borderRadius: token }];
      obj4.style = items2;
      const obj5 = { style: null, useAngle: true, angle, colors: usePremiumPrimaryGradientColorsDefault(), locations };
      const items3 = [React3.absoluteFill, { opacity: 0.2 }];
      obj5.style = items3;
      obj4.children = hasOwnProperty(LinearGradientDefault, obj5);
      const items4 = [hasOwnProperty(React4, obj4), , , ,];
      if (flag) {
        const obj6 = { style: tmp.iconContainer, children: null };
        const obj7 = { size: "md", color: nativeDefault.colors.WHITE };
        obj6.children = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, obj7);
        flag = hasOwnProperty(React4, obj6);
      }
      items4[1] = flag;
      items4[2] = hasOwnProperty(React4, { style: tmp.text, children });
      items4[3] = hasOwnProperty(React4, { style: tmp.trailing, children: trailing });
      const obj10 = { style: null, pointerEvents: "none" };
      const items5 = [React3.absoluteFill, tmp.border, { borderRadius: token }];
      obj10.style = items5;
      items4[4] = hasOwnProperty(React4, obj10);
      obj3.children = items4;
      obj2.children = timestampProducer(React4, obj3);
      return hasOwnProperty(React4, obj2);
    };
