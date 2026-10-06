// discord_app/modules/group_dm/native/GroupDMNitroCapBanner.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import LinearGradientDefault from "../../../../_runtime/05612_LinearGradient.js";
import NitroWheelIcon2 from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import usePremiumPrimaryGradientColorsDefault from "../../premium/native/usePremiumPrimaryGradientColors.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const locations = [0.0065, 0.5046, 0.9196];
let c8 = 110.47;
let createStyles = createStyles_mod;
let obj = {
  wrapper: obj2,
  pill: obj3,
  iconContainer: obj4,
  trailing: obj5,
  gradientClip: { overflow: "hidden" },
  border: obj6,
  text: { flex: 1 },
};
obj2 = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj4 = {
  width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
  alignItems: "center",
  justifyContent: "center",
  marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
obj5 = { flexDirection: "row", alignItems: "center", marginStart: nativeDefault.space.PX_8 };
obj6 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let NitroWheelIcon;
      let children;
      let items1;
      let items2;
      let obj12;
      let showLeadingIcon;
      let trailing;
      let wrapperStyle;
      const obj = react2;
      const cResult = obj.c(43);
      ({ children, trailing, showLeadingIcon, wrapperStyle } = arg0);
      const tmp5 = closure_9();
      const tmpResult = useToken;
      const token = tmpResult.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
      const tmp8 = usePremiumPrimaryGradientColorsDefault();
      if (cResult[0] === tmp5.wrapper) {
        let tmp9;
        let tmp10;
        if (cResult[1] === wrapperStyle) {
          tmp9 = cResult[2];
        }
        if (cResult[3] !== token) {
          const obj2 = { borderRadius: token };
          cResult[3] = token;
          cResult[4] = obj2;
          tmp10 = obj2;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === tmp5.pill) {
          let tmp11;
          let tmp12;
          if (cResult[6] === tmp10) {
            tmp11 = cResult[7];
          }
          if (cResult[8] !== token) {
            const obj3 = { borderRadius: token };
            cResult[8] = token;
            cResult[9] = obj3;
            tmp12 = obj3;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] === tmp5.gradientClip) {
            let tmp13;
            let tmp16;
            let tmp18;
            if (cResult[11] === tmp12) {
              tmp13 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [_false.absoluteFill, { opacity: 0.2 }];
              cResult[13] = items;
              tmp16 = items;
            } else {
              tmp16 = cResult[13];
            }
            if (cResult[14] !== tmp8) {
              const obj4 = { style: tmp16, useAngle: true, angle, colors: tmp8, locations };
              const tmp22 = hasOwnProperty(LinearGradientDefault, obj4);
              cResult[14] = tmp8;
              cResult[15] = tmp22;
              tmp18 = tmp22;
            } else {
              tmp18 = cResult[15];
            }
            if (cResult[16] === tmp13) {
              let tmp23;
              if (cResult[17] === tmp18) {
                tmp23 = cResult[18];
              }
              if (cResult[19] === (undefined === showLeadingIcon || showLeadingIcon)) {
                let tmp27;
                if (cResult[20] === tmp5.iconContainer) {
                  tmp27 = cResult[21];
                }
                if (cResult[22] === children) {
                  let tmp31;
                  if (cResult[23] === tmp5.text) {
                    tmp31 = cResult[24];
                  }
                  if (cResult[25] === tmp5.trailing) {
                    let tmp35;
                    let tmp39;
                    if (cResult[26] === trailing) {
                      tmp35 = cResult[27];
                    }
                    if (cResult[28] !== token) {
                      const obj5 = { borderRadius: token };
                      cResult[28] = token;
                      cResult[29] = obj5;
                      tmp39 = obj5;
                    } else {
                      tmp39 = cResult[29];
                    }
                    if (cResult[30] === tmp5.border) {
                      let tmp40;
                      if (cResult[31] === tmp39) {
                        tmp40 = cResult[32];
                      }
                      if (cResult[33] === tmp27) {
                        if (cResult[34] === tmp31) {
                          if (cResult[35] === tmp35) {
                            if (cResult[36] === tmp40) {
                              if (cResult[37] === tmp11) {
                                let tmp45;
                                if (cResult[38] === tmp23) {
                                  tmp45 = cResult[39];
                                }
                                if (cResult[40] === tmp45) {
                                  let tmp49;
                                  if (cResult[41] === tmp9) {
                                    tmp49 = cResult[42];
                                  }
                                  return tmp49;
                                }
                                const obj6 = { style: tmp9, children: tmp45 };
                                const tmp52 = hasOwnProperty(React3, obj6);
                                cResult[40] = tmp45;
                                cResult[41] = tmp9;
                                cResult[42] = tmp52;
                                tmp49 = tmp52;
                              }
                            }
                          }
                        }
                      }
                      const obj7 = { style: tmp11, children: items1 };
                      items1 = [tmp23, tmp27, tmp31, tmp35, tmp40];
                      const tmp48 = metroRequire(React3, obj7);
                      cResult[33] = tmp27;
                      cResult[34] = tmp31;
                      cResult[35] = tmp35;
                      cResult[36] = tmp40;
                      cResult[37] = tmp11;
                      cResult[38] = tmp23;
                      cResult[39] = tmp48;
                      tmp45 = tmp48;
                    }
                    const obj8 = { style: items2, pointerEvents: "none" };
                    items2 = [_false.absoluteFill, tmp5.border, tmp39];
                    const tmp44 = hasOwnProperty(React3, obj8);
                    cResult[30] = tmp5.border;
                    cResult[31] = tmp39;
                    cResult[32] = tmp44;
                    tmp40 = tmp44;
                  }
                  const obj9 = { style: tmp5.trailing, children: trailing };
                  const tmp38 = hasOwnProperty(React3, obj9);
                  cResult[25] = tmp5.trailing;
                  cResult[26] = trailing;
                  cResult[27] = tmp38;
                  tmp35 = tmp38;
                }
                const obj10 = { style: tmp5.text, children };
                const tmp34 = hasOwnProperty(React3, obj10);
                cResult[22] = children;
                cResult[23] = tmp5.text;
                cResult[24] = tmp34;
                tmp31 = tmp34;
              }
              let tmp28 = tmp4;
              if (tmp28) {
                const obj11 = { style: tmp5.iconContainer, children: hasOwnProperty(NitroWheelIcon, obj12) };
                obj12 = { size: "md", color: nativeDefault.colors.WHITE };
                NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
                tmp28 = hasOwnProperty(React3, obj11);
              }
              cResult[19] = undefined === showLeadingIcon || showLeadingIcon;
              cResult[20] = tmp5.iconContainer;
              cResult[21] = tmp28;
              tmp27 = tmp28;
            }
            const obj13 = { style: tmp13, children: tmp18 };
            const tmp26 = hasOwnProperty(React3, obj13);
            cResult[16] = tmp13;
            cResult[17] = tmp18;
            cResult[18] = tmp26;
            tmp23 = tmp26;
          }
          const items3 = [_false.absoluteFill, tmp5.gradientClip, tmp12];
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
    }
  : (showLeadingIcon) => {
      let NitroWheelIcon;
      let children;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj3;
      let obj5;
      let obj7;
      let trailing;
      let flag = showLeadingIcon.showLeadingIcon;
      ({ children, trailing } = showLeadingIcon);
      if (flag === undefined) {
        flag = true;
      }
      const wrapperStyle = showLeadingIcon.wrapperStyle;
      const tmp = closure_9();
      const obj = useToken;
      const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
      const obj2 = { style: items, children: metroRequire(React3, obj3) };
      items = [tmp.wrapper, wrapperStyle];
      obj3 = { style: items1, children: items4 };
      items1 = [tmp.pill, { borderRadius: token }];
      const obj4 = { style: items2, children: hasOwnProperty(LinearGradientDefault, obj5) };
      items2 = [_false.absoluteFill, tmp.gradientClip, { borderRadius: token }];
      obj5 = { style: items3, useAngle: true, angle, colors: usePremiumPrimaryGradientColorsDefault(), locations };
      items3 = [_false.absoluteFill, { opacity: 0.2 }];
      items4 = [hasOwnProperty(React3, obj4), , , ,];
      if (flag) {
        const obj6 = { style: tmp.iconContainer, children: hasOwnProperty(NitroWheelIcon, obj7) };
        obj7 = { size: "md", color: nativeDefault.colors.WHITE };
        NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
        flag = hasOwnProperty(React3, obj6);
      }
      items4[1] = flag;
      const obj8 = { style: tmp.text, children };
      items4[2] = hasOwnProperty(React3, obj8);
      const obj9 = { style: tmp.trailing, children: trailing };
      items4[3] = hasOwnProperty(React3, obj9);
      const obj10 = { style: items5, pointerEvents: "none" };
      items5 = [_false.absoluteFill, tmp.border, { borderRadius: token }];
      items4[4] = hasOwnProperty(React3, obj10);
      return hasOwnProperty(React3, obj2);
    };
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapBanner.tsx");

export default tmp6;
