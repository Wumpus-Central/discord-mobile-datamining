// discord_app/design/components/Sheet/native/BottomSheetTitleHeader.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../../modules/screen/useWindowDimensions.native.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import HeaderDebugOverlayDefault from "../../../../modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4896);
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
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(11);
      ({ title, subtitle } = arg0);
      const tmp2 = closure_8();
      if (cResult[0] !== title) {
        const obj2 = { lineClamp: 2, children: title };
        const tmp6 = timestampProducer(closure_14, obj2);
        cResult[0] = title;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] !== subtitle) {
        let tmp8 = null;
        if (null != subtitle) {
          const obj3 = { children: subtitle };
          tmp8 = timestampProducer(closure_15, obj3);
        }
        cResult[2] = subtitle;
        cResult[3] = tmp8;
        let tmp7 = tmp8;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === tmp2.titles) {
        if (cResult[5] === tmp3) {
          if (cResult[6] === tmp7) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp2.container) {
            if (cResult[9] === tmp11) {
              let tmp13 = cResult[10];
            }
            return tmp13;
          }
          const obj4 = { style: tmp2.container, children: tmp11 };
          const tmp16 = timestampProducer(View, obj4);
          cResult[8] = tmp2.container;
          cResult[9] = tmp11;
          cResult[10] = tmp16;
          tmp13 = tmp16;
        }
      }
      const obj5 = { style: tmp2.titles, children: null };
      const items = [tmp3, tmp7];
      obj5.children = items;
      const tmp12 = React5(View, obj5);
      cResult[4] = tmp2.titles;
      cResult[5] = tmp3;
      cResult[6] = tmp7;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  : (children) => {
      const subtitle = children.subtitle;
      const tmp = closure_8();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.titles, children: null };
      const items = [timestampProducer(closure_14, { lineClamp: 2, children: children.title })];
      let tmp2Result = null;
      if (null != subtitle) {
        const obj3 = { children: subtitle };
        tmp2Result = timestampProducer(closure_15, obj3);
      }
      items[1] = tmp2Result;
      obj2.children = items;
      obj.children = React5(View, obj2);
      return timestampProducer(View, obj);
    };
createStyles = fn(4896);
let closure_10 = createStyles.createStyles(() => ({
  container: { flexDirection: "column" },
  accessories: { flexDirection: "row", justifyContent: "space-between" },
  item: { flexShrink: 0 },
}));
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(25);
      ({ title, subtitle, leading, trailing } = arg0);
      const tmp2 = closure_8();
      const tmp3 = closure_10();
      if (cResult[0] === tmp3.container) {
        if (cResult[1] === tmp2.container) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === leading) {
          if (cResult[4] === tmp3.item) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === tmp3.item) {
            if (cResult[7] === trailing) {
              let tmp9 = cResult[8];
            }
            if (cResult[9] === tmp3.accessories) {
              if (cResult[10] === tmp5) {
                if (cResult[11] === tmp9) {
                  let tmp13 = cResult[12];
                }
                if (cResult[13] !== title) {
                  const obj2 = { children: title };
                  const tmp20 = timestampProducer(closure_14, obj2);
                  cResult[13] = title;
                  cResult[14] = tmp20;
                  let tmp17 = tmp20;
                } else {
                  tmp17 = cResult[14];
                }
                if (cResult[15] !== subtitle) {
                  let tmp22 = null;
                  if (null != subtitle) {
                    const obj3 = { children: subtitle };
                    tmp22 = timestampProducer(closure_15, obj3);
                  }
                  cResult[15] = subtitle;
                  cResult[16] = tmp22;
                  let tmp21 = tmp22;
                } else {
                  tmp21 = cResult[16];
                }
                if (cResult[17] === tmp2.titles) {
                  if (cResult[18] === tmp17) {
                    if (cResult[19] === tmp21) {
                      let tmp25 = cResult[20];
                    }
                    if (cResult[21] === tmp4) {
                      if (cResult[22] === tmp13) {
                        if (cResult[23] === tmp25) {
                          let tmp29 = cResult[24];
                        }
                        return tmp29;
                      }
                    }
                    const obj4 = { style: tmp4, children: null };
                    const items = [tmp13, tmp25];
                    obj4.children = items;
                    const tmp32 = React5(View, obj4);
                    cResult[21] = tmp4;
                    cResult[22] = tmp13;
                    cResult[23] = tmp25;
                    cResult[24] = tmp32;
                    tmp29 = tmp32;
                  }
                }
                const obj5 = { style: tmp2.titles, children: null };
                const items1 = [tmp17, tmp21];
                obj5.children = items1;
                const tmp28 = React5(View, obj5);
                cResult[17] = tmp2.titles;
                cResult[18] = tmp17;
                cResult[19] = tmp21;
                cResult[20] = tmp28;
                tmp25 = tmp28;
              }
            }
            const obj6 = { style: tmp3.accessories, children: null };
            const items2 = [tmp5, tmp9];
            obj6.children = items2;
            const tmp16 = React5(View, obj6);
            cResult[9] = tmp3.accessories;
            cResult[10] = tmp5;
            cResult[11] = tmp9;
            cResult[12] = tmp16;
            tmp13 = tmp16;
          }
          const obj7 = { style: tmp3.item, children: trailing };
          const tmp12 = timestampProducer(View, obj7);
          cResult[6] = tmp3.item;
          cResult[7] = trailing;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
        const obj8 = { style: tmp3.item, children: leading };
        const tmp8 = timestampProducer(View, obj8);
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
      subtitle = subtitle.subtitle;
      ({ title, leading, trailing } = subtitle);
      const tmp = closure_8();
      const tmp2 = closure_10();
      const obj = { style: null, children: null };
      const items = [tmp.container, tmp2.container];
      obj.style = items;
      const obj2 = { style: tmp2.accessories, children: null };
      const items1 = [
        timestampProducer(View, { style: tmp2.item, children: leading }),
        timestampProducer(View, { style: tmp2.item, children: trailing }),
      ];
      obj2.children = items1;
      const items2 = [React5(View, obj2)];
      const obj5 = { style: tmp.titles, children: null };
      const items3 = [timestampProducer(closure_14, { children: title })];
      let tmp5Result = null;
      if (null != subtitle) {
        const obj6 = { children: subtitle };
        tmp5Result = timestampProducer(closure_15, obj6);
      }
      items3[1] = tmp5Result;
      obj5.children = items3;
      items2[1] = React5(View, obj5);
      obj.children = items2;
      return React5(View, obj);
    };
createStyles = fn(4896);
let closure_12 = createStyles.createStyles(() => {
  const obj = {
    accessory: { position: "absolute", top: 0, bottom: 0, flexShrink: 0, flexDirection: "row", flexGrow: 1 },
    leading: { left: nativeDefault.space.PX_16, justifyContent: "flex-start" },
    trailing: null,
  };
  const obj2 = { left: nativeDefault.space.PX_16, justifyContent: "flex-start" };
  obj.trailing = { right: nativeDefault.space.PX_16, justifyContent: "flex-end" };
  return obj;
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(39);
      ({ title, subtitle, leading, trailing, onTitleTextLayout } = arg0);
      const tmp2 = closure_8();
      const tmp3 = closure_12();
      const diff =
        useWindowDimensionsDefault().width -
        2 * useToken.useToken(nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL);
      [tmp6, require] = noop.useState(undefined);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(nativeEvent) {
          const width = nativeEvent.nativeEvent.layout.width;
          require((arg0) => {
            let num = arg0;
            if (arg0 == null) {
              num = 0;
            }
            return Math.max(num, width);
          });
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp6) {
        const obj3 = { style: null };
        const obj4 = { width: tmp6 };
        obj3.style = obj4;
        const tmp11 = timestampProducer(View, obj3);
        cResult[1] = tmp6;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === onTitleTextLayout) {
        if (cResult[4] === title) {
          let tmp12 = cResult[5];
        }
        if (cResult[6] !== subtitle) {
          let tmp15 = null;
          if (null != subtitle) {
            const obj5 = { children: subtitle };
            tmp15 = timestampProducer(closure_15, obj5);
          }
          cResult[6] = subtitle;
          cResult[7] = tmp15;
          let tmp14 = tmp15;
        } else {
          tmp14 = cResult[7];
        }
        if (cResult[8] === tmp2.titles) {
          if (cResult[9] === tmp12) {
            if (cResult[10] === tmp14) {
              let tmp18 = cResult[11];
            }
            if (cResult[12] !== tmp6) {
              const obj6 = { style: null };
              const obj7 = { width: tmp6 };
              obj6.style = obj7;
              const tmp25 = timestampProducer(View, obj6);
              cResult[12] = tmp6;
              cResult[13] = tmp25;
              let tmp22 = tmp25;
            } else {
              tmp22 = cResult[13];
            }
            const result = diff / 4;
            if (cResult[14] !== result) {
              const obj8 = { maxWidth: result };
              cResult[14] = result;
              cResult[15] = obj8;
              let tmp27 = obj8;
            } else {
              tmp27 = cResult[15];
            }
            if (cResult[16] === tmp3.accessory) {
              if (cResult[17] === tmp3.leading) {
                if (cResult[18] === tmp27) {
                  let tmp28 = cResult[19];
                }
                if (cResult[20] === leading) {
                  if (cResult[21] === tmp28) {
                    let tmp29 = cResult[22];
                  }
                  if (cResult[23] !== result) {
                    const obj9 = { maxWidth: result };
                    cResult[23] = result;
                    cResult[24] = obj9;
                    let tmp33 = obj9;
                  } else {
                    tmp33 = cResult[24];
                  }
                  if (cResult[25] === tmp3.accessory) {
                    if (cResult[26] === tmp3.trailing) {
                      if (cResult[27] === tmp33) {
                        let tmp34 = cResult[28];
                      }
                      if (cResult[29] === tmp34) {
                        if (cResult[30] === trailing) {
                          let tmp35 = cResult[31];
                        }
                        if (cResult[32] === tmp2.container) {
                          if (cResult[33] === tmp35) {
                            if (cResult[34] === tmp8) {
                              if (cResult[35] === tmp18) {
                                if (cResult[36] === tmp22) {
                                  if (cResult[37] === tmp29) {
                                    let tmp39 = cResult[38];
                                  }
                                  return tmp39;
                                }
                              }
                            }
                          }
                        }
                        const obj10 = { style: tmp2.container, children: null };
                        const items = [tmp8, tmp18, tmp22, tmp29, tmp35];
                        obj10.children = items;
                        const tmp42 = React5(View, obj10);
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
                      const tmp38 = timestampProducer(View, obj11);
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
                const tmp32 = timestampProducer(View, obj12);
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
        const obj13 = { style: tmp2.titles, children: null };
        const items3 = [tmp12, tmp14];
        obj13.children = items3;
        const tmp21 = React5(View, obj13);
        cResult[8] = tmp2.titles;
        cResult[9] = tmp12;
        cResult[10] = tmp14;
        cResult[11] = tmp21;
        tmp18 = tmp21;
      }
      const tmp13 = timestampProducer(closure_14, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title });
      cResult[3] = onTitleTextLayout;
      cResult[4] = title;
      cResult[5] = tmp13;
      tmp12 = tmp13;
      const tmp5 = _slicedToArray(noop.useState(undefined), 2);
    }
  : (subtitle) => {
      subtitle = subtitle.subtitle;
      c0 = undefined;
      ({ title, leading, trailing, onTitleTextLayout } = subtitle);
      const tmp = closure_8();
      const tmp2 = closure_12();
      const diff =
        useWindowDimensionsDefault().width -
        2 * useToken.useToken(nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL);
      [tmp5, c0] = noop.useState(undefined);
      const callback = noop.useCallback((nativeEvent) => {
        const width = nativeEvent.nativeEvent.layout.width;
        _undefined((arg0) => {
          let num = arg0;
          if (arg0 == null) {
            num = 0;
          }
          return Math.max(num, width);
        });
      }, []);
      const obj2 = { style: tmp.container, children: null };
      const items = [timestampProducer(View, { style: { width: tmp5 } }), , , ,];
      const obj4 = { style: tmp.titles, children: null };
      const items1 = [
        timestampProducer(closure_14, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title }),
      ];
      let tmp9Result = null;
      if (null != subtitle) {
        const obj5 = { children: subtitle };
        tmp9Result = timestampProducer(closure_15, obj5);
      }
      const result = diff / 4;
      items1[1] = tmp9Result;
      obj4.children = items1;
      items[1] = React5(View, obj4);
      items[2] = timestampProducer(View, { style: { width: tmp5 } });
      const obj7 = { onLayout: callback, style: null, children: leading };
      const items2 = [, ,];
      ({ accessory: arr3[0], leading: arr3[1] } = tmp2);
      items2[2] = { maxWidth: result };
      obj7.style = items2;
      items[3] = timestampProducer(View, obj7);
      const obj8 = { onLayout: callback, style: null, children: trailing };
      const items3 = [, ,];
      ({ accessory: arr4[0], trailing: arr4[1] } = tmp2);
      items3[2] = { maxWidth: result };
      obj8.style = items3;
      items[4] = timestampProducer(View, obj8);
      obj2.children = items;
      return React5(View, obj2);
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      const tmp4 = closure_8();
      if (cResult[0] === arg0) {
        if (cResult[1] === tmp4.title) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const merged = Object.assign(arg0);
      const tmp7 = timestampProducer(Text_Text.Text, {
        variant: "redesign/heading-18/semibold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        style: tmp4.title,
      });
      cResult[0] = arg0;
      cResult[1] = tmp4.title;
      cResult[2] = tmp7;
      tmp5 = tmp7;
      const obj2 = {
        variant: "redesign/heading-18/semibold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        style: tmp4.title,
      };
    }
  : (arg0) => {
      const tmp = closure_8();
      const merged = Object.assign(arg0);
      return timestampProducer(Text_Text.Text, {
        variant: "redesign/heading-18/semibold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        style: closure_8().title,
      });
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(3);
      children = children.children;
      const tmp4 = closure_8();
      if (cResult[0] === children) {
        if (cResult[1] === tmp4.subtitle) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = timestampProducer(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp4.subtitle,
        textBreakStrategy: "balanced",
        lineBreakStrategyIOS: "push-out",
        children,
      });
      cResult[0] = children;
      cResult[1] = tmp4.subtitle;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj2 = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp4.subtitle,
        textBreakStrategy: "balanced",
        lineBreakStrategyIOS: "push-out",
        children,
      };
    }
  : (children) => {
      const tmp = closure_8();
      return timestampProducer(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        style: closure_8().subtitle,
        textBreakStrategy: "balanced",
        lineBreakStrategyIOS: "push-out",
        children: children.children,
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetTitleHeader.native.tsx");

export const BottomSheetTitleHeader = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(11);
      ({ leading, trailing } = arg0);
      let num = 2;
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      closure_0 = tmp2[1];
      const tmp3 = HeaderDebugOverlayDefault("sheet");
      if (null != leading) {
        if (tmp2[0]) {
          if (cResult[2] !== arg0) {
            const obj2 = {};
            const merged = Object.assign(arg0);
            const tmp26 = timestampProducer(closure_11, obj2);
            cResult[num] = arg0;
            num = 3;
            cResult[3] = tmp26;
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function v(nativeEvent) {
              closure_0(nativeEvent.nativeEvent.lines.length > 2);
            };
            cResult[4] = fn;
            let tmp12 = fn;
          } else {
            tmp12 = cResult[4];
          }
          if (cResult[5] !== arg0) {
            const obj3 = {};
            const merged1 = Object.assign(arg0);
            obj3.onTitleTextLayout = tmp12;
            const tmp19 = timestampProducer(closure_13, obj3);
            cResult[5] = arg0;
            cResult[6] = tmp19;
            let tmp13 = tmp19;
          } else {
            tmp13 = cResult[6];
          }
          let tmp4 = tmp13;
          if (null == tmp3) {
            return tmp4;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { position: "relative" };
              cResult[7] = obj4;
              let items = obj4;
            } else {
              items = cResult[7];
            }
            if (cResult[8] === tmp4) {
            }
            const obj5 = { style: items, children: null };
            items = [tmp4, tmp3];
            obj5.children = items;
            const tmp32 = React5(View, obj5);
            cResult[8] = tmp4;
            cResult[9] = tmp3;
            cResult[10] = tmp32;
          }
        }
      }
      if (cResult[0] !== arg0) {
        const obj6 = {};
        const merged2 = Object.assign(arg0);
        const tmp10 = timestampProducer(closure_9, obj6);
        cResult[0] = arg0;
        cResult[1] = tmp10;
        tmp4 = tmp10;
      } else {
        tmp4 = cResult[1];
      }
    }
  : (arg0) => {
      let merged = arg0;
      ({ leading, trailing } = arg0);
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      closure_0 = tmp2[1];
      const tmp3 = HeaderDebugOverlayDefault("sheet");
      if (null != leading) {
        if (tmp2[0]) {
          const obj2 = {};
          merged = Object.assign(merged);
          let tmp6Result = timestampProducer(closure_11, obj2);
        } else {
          const obj3 = {};
          const merged1 = Object.assign(merged);
          obj3.onTitleTextLayout = function onTitleTextLayout(nativeEvent) {
            closure_0(nativeEvent.nativeEvent.lines.length > 2);
          };
          tmp6Result = timestampProducer(closure_13, obj3);
        }
      }
      const merged2 = Object.assign(merged);
      const tmp5 = timestampProducer(closure_9, {});
      let tmp16 = tmp5;
      if (null != tmp3) {
        const obj4 = { style: { position: "relative" }, children: null };
        const items = [tmp5, tmp3];
        obj4.children = items;
        tmp16 = React5(View, obj4);
      }
      return tmp16;
    };
