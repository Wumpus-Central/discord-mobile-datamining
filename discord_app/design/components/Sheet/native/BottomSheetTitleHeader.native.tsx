// discord_app/design/components/Sheet/native/BottomSheetTitleHeader.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../../modules/screen/useWindowDimensions.native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import HeaderDebugOverlayDefault from "../../../../modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles(() => {
  const obj = {
    container: {
      paddingHorizontal: nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL,
      flexDirection: "row",
      gap: 4,
      position: "relative",
    },
    titles: { flexGrow: 1, flexShrink: 1, gap: 2 },
    subtitle: { textAlign: "center" },
    title: { textAlign: "center" },
  };
  ({
    paddingHorizontal: nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL,
    flexDirection: "row",
    gap: 4,
    position: "relative",
  });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let subtitle;
      let title;
      let tmp3;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(11);
      ({ title, subtitle } = arg0);
      const tmp2 = closure_8();
      if (cResult[0] !== title) {
        const obj2 = { lineClamp: 2, children: title };
        const tmp6 = metroRequire(closure_14, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] !== subtitle) {
        let tmp8 = null;
        if (null != subtitle) {
          const obj3 = { children: subtitle };
          tmp8 = metroRequire(closure_15, obj3);
        }
        cResult[2] = subtitle;
        cResult[3] = tmp8;
        tmp7 = tmp8;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp2.titles) {
        if (cResult[5] === tmp3) {
          let tmp11;
          if (cResult[6] === tmp7) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp2.container) {
            let tmp13;
            if (cResult[9] === tmp11) {
              tmp13 = cResult[10];
            }
            return tmp13;
          }
          const obj4 = { style: tmp2.container, children: tmp11 };
          const tmp16 = metroRequire(View, obj4);
          cResult[8] = tmp2.container;
          cResult[9] = tmp11;
          cResult[10] = tmp16;
          tmp13 = tmp16;
        }
      }
      const obj5 = { style: tmp2.titles, children: items };
      items = [tmp3, tmp7];
      const tmp12 = metroImportDefault(View, obj5);
      cResult[4] = tmp2.titles;
      cResult[5] = tmp3;
      cResult[6] = tmp7;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  : (subtitle) => {
      let items;
      let obj2;
      subtitle = subtitle.subtitle;
      const title = subtitle.title;
      const tmp = closure_8();
      const obj = { style: tmp.container, children: metroImportDefault(View, obj2) };
      obj2 = { style: tmp.titles, children: items };
      items = [metroRequire(closure_14, { lineClamp: 2, children: title })];
      let tmp2Result = null;
      if (null != subtitle) {
        const obj3 = { children: subtitle };
        tmp2Result = metroRequire(closure_15, obj3);
      }
      items[1] = tmp2Result;
      return metroRequire(View, obj);
    };
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles(() => ({
  container: { flexDirection: "column" },
  accessories: { flexDirection: "row", justifyContent: "space-between" },
  item: { flexShrink: 0 },
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let items1;
      let items2;
      let leading;
      let subtitle;
      let title;
      let trailing;
      const obj = react2;
      const cResult = obj.c(25);
      ({ title, subtitle, leading, trailing } = arg0);
      const tmp2 = closure_8();
      const tmp3 = closure_10();
      if (cResult[0] === tmp3.container) {
        let tmp4;
        if (cResult[1] === tmp2.container) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === leading) {
          let tmp5;
          if (cResult[4] === tmp3.item) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === tmp3.item) {
            let tmp9;
            if (cResult[7] === trailing) {
              tmp9 = cResult[8];
            }
            if (cResult[9] === tmp3.accessories) {
              if (cResult[10] === tmp5) {
                let tmp13;
                let tmp17;
                let tmp21;
                if (cResult[11] === tmp9) {
                  tmp13 = cResult[12];
                }
                if (cResult[13] !== title) {
                  const obj2 = { children: title };
                  const tmp20 = metroRequire(closure_14, obj2);
                  cResult[13] = title;
                  cResult[14] = tmp20;
                  tmp17 = tmp20;
                } else {
                  tmp17 = cResult[14];
                }
                if (cResult[15] !== subtitle) {
                  let tmp22 = null;
                  if (null != subtitle) {
                    const obj3 = { children: subtitle };
                    tmp22 = metroRequire(closure_15, obj3);
                  }
                  cResult[15] = subtitle;
                  cResult[16] = tmp22;
                  tmp21 = tmp22;
                } else {
                  tmp21 = cResult[16];
                }
                if (cResult[17] === tmp2.titles) {
                  if (cResult[18] === tmp17) {
                    let tmp25;
                    if (cResult[19] === tmp21) {
                      tmp25 = cResult[20];
                    }
                    if (cResult[21] === tmp4) {
                      if (cResult[22] === tmp13) {
                        let tmp29;
                        if (cResult[23] === tmp25) {
                          tmp29 = cResult[24];
                        }
                        return tmp29;
                      }
                    }
                    const obj4 = { style: tmp4, children: items };
                    items = [tmp13, tmp25];
                    const tmp32 = metroImportDefault(View, obj4);
                    cResult[21] = tmp4;
                    cResult[22] = tmp13;
                    cResult[23] = tmp25;
                    cResult[24] = tmp32;
                    tmp29 = tmp32;
                  }
                }
                const obj5 = { style: tmp2.titles, children: items1 };
                items1 = [tmp17, tmp21];
                const tmp28 = metroImportDefault(View, obj5);
                cResult[17] = tmp2.titles;
                cResult[18] = tmp17;
                cResult[19] = tmp21;
                cResult[20] = tmp28;
                tmp25 = tmp28;
              }
            }
            const obj6 = { style: tmp3.accessories, children: items2 };
            items2 = [tmp5, tmp9];
            const tmp16 = metroImportDefault(View, obj6);
            cResult[9] = tmp3.accessories;
            cResult[10] = tmp5;
            cResult[11] = tmp9;
            cResult[12] = tmp16;
            tmp13 = tmp16;
          }
          const obj7 = { style: tmp3.item, children: trailing };
          const tmp12 = metroRequire(View, obj7);
          cResult[6] = tmp3.item;
          cResult[7] = trailing;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
        const obj8 = { style: tmp3.item, children: leading };
        const tmp8 = metroRequire(View, obj8);
        cResult[3] = leading;
        cResult[4] = tmp3.item;
        cResult[5] = tmp8;
        tmp5 = tmp8;
      }
      const items3 = [tmp2.container, tmp3.container];
      cResult[0] = tmp3.container;
      cResult[1] = tmp2.container;
      cResult[2] = items3;
      tmp4 = items3;
    }
  : (subtitle) => {
      let items;
      let items1;
      let items2;
      let items3;
      let leading;
      let title;
      let trailing;
      subtitle = subtitle.subtitle;
      ({ title, leading, trailing } = subtitle);
      const tmp = closure_8();
      const tmp2 = closure_10();
      const obj = { style: items, children: items2 };
      items = [tmp.container, tmp2.container];
      const obj2 = { style: tmp2.accessories, children: items1 };
      items1 = [,];
      const obj3 = { style: tmp2.item, children: leading };
      items1[0] = metroRequire(View, obj3);
      const obj4 = { style: tmp2.item, children: trailing };
      items1[1] = metroRequire(View, obj4);
      items2 = [metroImportDefault(View, obj2)];
      const obj5 = { style: tmp.titles, children: items3 };
      items3 = [metroRequire(closure_14, { children: title })];
      let tmp5Result = null;
      if (null != subtitle) {
        const obj6 = { children: subtitle };
        tmp5Result = metroRequire(closure_15, obj6);
      }
      items3[1] = tmp5Result;
      items2[1] = metroImportDefault(View, obj5);
      return metroImportDefault(View, obj);
    };
createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles(() => {
  const obj = {
    accessory: { position: "absolute", top: 0, bottom: 0, flexShrink: 0, flexDirection: "row", flexGrow: 1 },
    leading: { left: nativeDefault.space.PX_16, justifyContent: "flex-start" },
    trailing: { right: nativeDefault.space.PX_16, justifyContent: "flex-end" },
  };
  ({ left: nativeDefault.space.PX_16, justifyContent: "flex-start" });
  ({ right: nativeDefault.space.PX_16, justifyContent: "flex-end" });
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_129_0;
      let first;
      let items;
      let items3;
      let leading;
      let obj4;
      let obj7;
      let onTitleTextLayout;
      let subtitle;
      let title;
      let tmp6;
      let tmp8;
      let trailing;
      const obj = react2;
      const cResult = obj.c(39);
      ({ title, subtitle, leading, trailing, onTitleTextLayout } = arg0);
      const tmp2 = closure_8();
      const tmp3 = closure_12();
      let width = useWindowDimensionsDefault().width;
      const obj2 = useToken;
      const diff = width - 2 * obj2.useToken(nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL);
      [tmp6, closure_129_0] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(nativeEvent) {
          const width = nativeEvent.nativeEvent.layout.width;
          closure_1_0((arg0) => {
            let num = arg0;
            const _Math = Math;
            if (arg0 == null) {
              num = 0;
            }
            return max(num, width);
          });
        };
        let num = 0;
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp6) {
        const obj3 = { style: obj4 };
        obj4 = { width: tmp6 };
        const tmp11 = metroRequire(View, obj3);
        cResult[1] = tmp6;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === onTitleTextLayout) {
        let tmp12;
        let tmp14;
        if (cResult[4] === title) {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== subtitle) {
          let tmp15 = null;
          if (null != subtitle) {
            const obj5 = { children: subtitle };
            tmp15 = metroRequire(closure_15, obj5);
          }
          cResult[6] = subtitle;
          cResult[7] = tmp15;
          tmp14 = tmp15;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === tmp2.titles) {
          if (cResult[9] === tmp12) {
            let tmp18;
            let tmp22;
            let tmp27;
            if (cResult[10] === tmp14) {
              tmp18 = cResult[11];
            }
            if (cResult[12] !== tmp6) {
              const obj6 = { style: obj7 };
              obj7 = { width: tmp6 };
              const tmp25 = metroRequire(View, obj6);
              cResult[12] = tmp6;
              cResult[13] = tmp25;
              tmp22 = tmp25;
            } else {
              tmp22 = cResult[13];
            }
            const result = diff / 4;
            if (cResult[14] !== result) {
              const obj8 = { maxWidth: result };
              cResult[14] = result;
              cResult[15] = obj8;
              tmp27 = obj8;
            } else {
              tmp27 = cResult[15];
            }
            if (cResult[16] === tmp3.accessory) {
              if (cResult[17] === tmp3.leading) {
                let tmp28;
                if (cResult[18] === tmp27) {
                  tmp28 = cResult[19];
                }
                if (cResult[20] === leading) {
                  let tmp29;
                  let tmp33;
                  if (cResult[21] === tmp28) {
                    tmp29 = cResult[22];
                  }
                  if (cResult[23] !== result) {
                    const obj9 = { maxWidth: result };
                    cResult[23] = result;
                    cResult[24] = obj9;
                    tmp33 = obj9;
                  } else {
                    tmp33 = cResult[24];
                  }
                  if (cResult[25] === tmp3.accessory) {
                    if (cResult[26] === tmp3.trailing) {
                      let tmp34;
                      if (cResult[27] === tmp33) {
                        tmp34 = cResult[28];
                      }
                      if (cResult[29] === tmp34) {
                        let tmp35;
                        if (cResult[30] === trailing) {
                          tmp35 = cResult[31];
                        }
                        if (cResult[32] === tmp2.container) {
                          if (cResult[33] === tmp35) {
                            if (cResult[34] === tmp8) {
                              if (cResult[35] === tmp18) {
                                if (cResult[36] === tmp22) {
                                  let tmp39;
                                  if (cResult[37] === tmp29) {
                                    tmp39 = cResult[38];
                                  }
                                  return tmp39;
                                }
                              }
                            }
                          }
                        }
                        const obj10 = { style: tmp2.container, children: items };
                        items = [tmp8, tmp18, tmp22, tmp29, tmp35];
                        const tmp42 = metroImportDefault(View, obj10);
                        cResult[32] = tmp2.container;
                        cResult[33] = tmp35;
                        cResult[34] = tmp8;
                        cResult[35] = tmp18;
                        cResult[36] = tmp22;
                        cResult[37] = tmp29;
                        cResult[38] = tmp42;
                        tmp39 = tmp42;
                      }
                      const obj11 = { onLayout: first, style: tmp34, children: trailing };
                      const tmp38 = metroRequire(View, obj11);
                      cResult[29] = tmp34;
                      cResult[30] = trailing;
                      cResult[31] = tmp38;
                      tmp35 = tmp38;
                    }
                  }
                  const items1 = [, ,];
                  ({ accessory: arr3[0], trailing: arr3[1] } = tmp3);
                  items1[2] = tmp33;
                  cResult[25] = tmp3.accessory;
                  cResult[26] = tmp3.trailing;
                  cResult[27] = tmp33;
                  cResult[28] = items1;
                  tmp34 = items1;
                }
                const obj12 = { onLayout: first, style: tmp28, children: leading };
                const tmp32 = metroRequire(View, obj12);
                cResult[20] = leading;
                cResult[21] = tmp28;
                cResult[22] = tmp32;
                tmp29 = tmp32;
              }
            }
            const items2 = [, ,];
            ({ accessory: arr2[0], leading: arr2[1] } = tmp3);
            items2[2] = tmp27;
            cResult[16] = tmp3.accessory;
            cResult[17] = tmp3.leading;
            cResult[18] = tmp27;
            cResult[19] = items2;
            tmp28 = items2;
          }
        }
        const obj13 = { style: tmp2.titles, children: items3 };
        items3 = [tmp12, tmp14];
        const tmp21 = metroImportDefault(View, obj13);
        cResult[8] = tmp2.titles;
        cResult[9] = tmp12;
        cResult[10] = tmp14;
        cResult[11] = tmp21;
        tmp18 = tmp21;
      }
      const tmp13 = metroRequire(closure_14, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title });
      cResult[3] = onTitleTextLayout;
      cResult[4] = title;
      cResult[5] = tmp13;
      tmp12 = tmp13;
    }
  : (subtitle) => {
      let c0;
      let items;
      let items1;
      let items2;
      let items3;
      let leading;
      let onTitleTextLayout;
      let title;
      let tmp5;
      let trailing;
      subtitle = subtitle.subtitle;
      c0 = undefined;
      ({ title, leading, trailing, onTitleTextLayout } = subtitle);
      const tmp = closure_8();
      const tmp2 = closure_12();
      let width = useWindowDimensionsDefault().width;
      const obj = useToken;
      const diff = width - 2 * obj.useToken(nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL);
      [tmp5, c0] = react.useState(undefined);
      _slicedToArray(react.useState(undefined), 2);
      const callback = react.useCallback((nativeEvent) => {
        const width = nativeEvent.nativeEvent.layout.width;
        _undefined((arg0) => {
          let num = arg0;
          const _Math = Math;
          if (arg0 == null) {
            num = 0;
          }
          return max(num, width);
        });
      }, []);
      const obj2 = { style: tmp.container, children: items };
      items = [, , , ,];
      const obj3 = { style: { width: tmp5 } };
      items[0] = metroRequire(View, obj3);
      const obj4 = { style: tmp.titles, children: items1 };
      items1 = [metroRequire(closure_14, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title })];
      let tmp9Result = null;
      if (null != subtitle) {
        const obj5 = { children: subtitle };
        tmp9Result = metroRequire(closure_15, obj5);
      }
      const result = diff / 4;
      items1[1] = tmp9Result;
      items[1] = metroImportDefault(View, obj4);
      const obj6 = { style: { width: tmp5 } };
      items[2] = metroRequire(View, obj6);
      const obj7 = { onLayout: callback, style: items2, children: leading };
      items2 = [, ,];
      ({ accessory: arr3[0], leading: arr3[1] } = tmp2);
      items2[2] = { maxWidth: result };
      items[3] = metroRequire(View, obj7);
      const obj8 = { onLayout: callback, style: items3, children: trailing };
      items3 = [, ,];
      ({ accessory: arr4[0], trailing: arr4[1] } = tmp2);
      items3[2] = { maxWidth: result };
      items[4] = metroRequire(View, obj8);
      return metroImportDefault(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_8();
      if (cResult[0] === arg0) {
        let tmp5;
        if (cResult[1] === tmp4.title) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj2 = {
        variant: "redesign/heading-18/semibold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        style: tmp4.title,
      };
      const Text = Text_Text.Text;
      const merged = Object.assign(arg0);
      const tmp7 = metroRequire(Text, obj2);
      cResult[0] = arg0;
      cResult[1] = tmp4.title;
      cResult[2] = tmp7;
      tmp5 = tmp7;
    }
  : (arg0) => {
      const obj = {
        variant: "redesign/heading-18/semibold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        style: closure_8().title,
      };
      const Text = Text_Text.Text;
      const merged = Object.assign(arg0);
      return metroRequire(Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const tmp4 = closure_8();
      if (cResult[0] === children) {
        let tmp5;
        if (cResult[1] === tmp4.subtitle) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj2 = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp4.subtitle,
        textBreakStrategy: "balanced",
        lineBreakStrategyIOS: "push-out",
        children,
      };
      const tmp6 = metroRequire(Text_Text.Text, obj2);
      cResult[0] = children;
      cResult[1] = tmp4.subtitle;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (children) => {
      children = children.children;
      const obj = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: closure_8().subtitle,
        textBreakStrategy: "balanced",
        lineBreakStrategyIOS: "push-out",
        children,
      };
      return metroRequire(Text_Text.Text, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let items;
      let leading;
      let tmp5;
      let trailing;
      const obj = react2;
      const cResult = obj.c(11);
      ({ leading, trailing } = arg0);
      [first, closure_0] = react.useState(false);
      const tmp4 = HeaderDebugOverlayDefault("sheet");
      if (null != leading) {
        if (first) {
          let tmp21;
          if (cResult[2] !== arg0) {
            const obj2 = {};
            const merged = Object.assign(arg0);
            const tmp27 = metroRequire(closure_11, obj2);
            cResult[2] = arg0;
            cResult[3] = tmp27;
            tmp21 = tmp27;
          } else {
            tmp21 = cResult[3];
          }
          tmp5 = tmp21;
        } else {
          let tmp13;
          let tmp14;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v(nativeEvent) {
              closure_0(nativeEvent.nativeEvent.lines.length > 2);
            };
            cResult[4] = fn;
            tmp13 = fn;
          } else {
            tmp13 = cResult[4];
          }
          if (cResult[5] !== arg0) {
            const obj3 = { onTitleTextLayout: tmp13 };
            const merged1 = Object.assign(arg0);
            const tmp20 = metroRequire(closure_13, obj3);
            cResult[5] = arg0;
            cResult[6] = tmp20;
            tmp14 = tmp20;
          } else {
            tmp14 = cResult[6];
          }
          tmp5 = tmp14;
        }
        let tmp28 = tmp5;
        if (null != tmp4) {
          let tmp29;
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { position: "relative" };
            cResult[7] = obj4;
            tmp29 = obj4;
          } else {
            tmp29 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            let tmp30;
            if (cResult[9] === tmp4) {
              tmp30 = cResult[10];
            }
            tmp28 = tmp30;
          }
          const obj5 = { style: tmp29, children: items };
          items = [tmp5, tmp4];
          const tmp33 = metroImportDefault(View, obj5);
          cResult[8] = tmp5;
          cResult[9] = tmp4;
          cResult[10] = tmp33;
          tmp30 = tmp33;
        }
        return tmp28;
      }
      if (cResult[0] !== arg0) {
        const obj6 = {};
        const merged2 = Object.assign(arg0);
        const tmp11 = metroRequire(closure_9, obj6);
        cResult[0] = arg0;
        cResult[1] = tmp11;
        tmp5 = tmp11;
      } else {
        tmp5 = cResult[1];
      }
    }
  : (arg0) => {
      let closure_0;
      let first;
      let items;
      let leading;
      let tmp5;
      let trailing;
      ({ leading, trailing } = arg0);
      [first, closure_0] = react.useState(false);
      const tmp3 = HeaderDebugOverlayDefault("sheet");
      if (null != leading) {
        let tmp6Result;
        if (false !== leading) {
          let tmp16 = tmp5;
          if (null != tmp3) {
            const obj2 = { style: { position: "relative" }, children: items };
            items = [tmp5, tmp3];
            tmp16 = metroImportDefault(View, obj2);
          }
          return tmp16;
        }
        if (first) {
          const obj3 = {};
          const merged = Object.assign(arg0);
          tmp6Result = metroRequire(closure_11, obj3);
        } else {
          const obj4 = {
            onTitleTextLayout(nativeEvent) {
              closure_0(nativeEvent.nativeEvent.lines.length > 2);
            },
          };
          const merged1 = Object.assign(arg0);
          tmp6Result = metroRequire(closure_13, obj4);
        }
        tmp5 = tmp6Result;
      }
      const obj = {};
      const merged2 = Object.assign(arg0);
      tmp5 = metroRequire(closure_9, obj);
    };
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetTitleHeader.native.tsx");

export const BottomSheetTitleHeader = tmp3;
