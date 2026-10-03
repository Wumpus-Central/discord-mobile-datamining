// discord_app/modules/oauth2/native/OAuth2AuthorizeContent.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import KeyboardAwareViewDefault from "../../keyboard/native/KeyboardAwareView.tsx";
import ObscuredSurfaceDefault from "../../safety_common/native/ObscuredSurface.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  fill: { flex: 1 },
  scrollView: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 },
  scrollViewContentLandscape: { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 },
  scrollViewContentPortrait: { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 },
  header: { paddingTop: 24 },
  bodyContainer: { flexDirection: "column", gap: 16, padding: 16 },
  bodyContainerBackground: null,
  footerPortrait: null,
  separator: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
obj2.bodyContainerBackground = {
  marginHorizontal: 16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.lg,
};
obj2.footerPortrait = { flexDirection: "column", padding: 16, gap: 16 };
let obj4 = {
  marginHorizontal: 16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.lg,
};
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onScroll) => {
      const cResult = c.c(57);
      ({ header, body, footer, appDetails, centerContent, setAllContentSeen } = onScroll);
      onScroll = onScroll.onScroll;
      const obscured = onScroll.obscured;
      const tmp3 = closure_10();
      const size = useWindowDimensionsDefault();
      const ref = noop.useRef(null);
      ({ left, right, bottom } = useSafeAreaInsetsDefault());
      [height, closure_4] = noop.useState(-1);
      [first1, closure_6] = noop.useState(-1);
      const tmp12 = _slicedToArray(noop.useState(-1), 2);
      closure_7 = tmp12[1];
      let tmp13 = height >= 0;
      if (tmp13) {
        tmp13 = first1 >= 0;
      }
      if (tmp13) {
        tmp13 = null == footer || tmp12[0] >= 0;
        const tmp14 = null == footer || tmp12[0] >= 0;
      }
      closure_8 = tmp13;
      if (cResult[0] === height) {
        if (cResult[1] === tmp13) {
          if (cResult[2] === first1) {
            if (cResult[3] === setAllContentSeen) {
              let tmp15 = cResult[4];
              let tmp16 = cResult[5];
            }
            const layoutEffect = noop.useLayoutEffect(tmp15, tmp16);
            if (cResult[6] !== bottom) {
              let obj3 = { marginBottom: bottom };
              cResult[6] = bottom;
              cResult[7] = obj3;
              let tmp18 = obj3;
            } else {
              tmp18 = cResult[7];
            }
            if (cResult[8] === tmp3.fill) {
              if (cResult[9] === tmp18) {
                let tmp19 = cResult[10];
              }
              if (cResult[11] === left) {
                if (cResult[12] === right) {
                  let tmp20 = cResult[13];
                }
                if (cResult[14] === tmp3.scrollView) {
                  if (cResult[15] === tmp20) {
                    let tmp21 = cResult[16];
                  }
                  const tmp22 = tmp6 ? tmp3.scrollViewContentLandscape : tmp3.scrollViewContentPortrait;
                  if (cResult[17] !== tmp22) {
                    const items = [tmp22];
                    cResult[17] = tmp22;
                    cResult[18] = items;
                    let tmp23 = items;
                  } else {
                    tmp23 = cResult[18];
                  }
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    function ee(arg0, arg1) {
                      const current = ref.current;
                      if (current != null) {
                        current.scrollTo({ y: 0 });
                      }
                      closure_4(arg1);
                    }
                    cResult[19] = ee;
                    let tmp25 = ee;
                  } else {
                    tmp25 = cResult[19];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    function te(nativeEvent) {
                      closure_6(nativeEvent.nativeEvent.layout.height);
                    }
                    cResult[20] = te;
                    let tmp26 = te;
                  } else {
                    tmp26 = cResult[20];
                  }
                  if (cResult[21] === onScroll) {
                    if (cResult[22] === setAllContentSeen) {
                      let tmp27 = cResult[23];
                    }
                    if (cResult[24] === header) {
                      if (cResult[25] === tmp3.header) {
                        let tmp28 = cResult[26];
                      }
                      let prop = null;
                      if (onScroll.hasContentBackground) {
                        prop = tmp3.bodyContainerBackground;
                      }
                      if (cResult[27] !== tmp6) {
                        const tmp34 = tmp6 ? { flex: 1 } : {};
                        cResult[27] = tmp6;
                        cResult[28] = tmp34;
                      } else {
                        if (cResult[29] === tmp3.bodyContainer) {
                          if (cResult[30] === prop) {
                            if (cResult[31] === tmp33) {
                              let tmp36 = cResult[32];
                            }
                            if (cResult[33] === appDetails) {
                              if (cResult[34] === tmp3.separator) {
                                let tmp37 = cResult[35];
                              }
                              if (cResult[36] === body) {
                                if (cResult[37] === tmp36) {
                                  if (cResult[38] === tmp37) {
                                    let tmp43 = cResult[39];
                                  }
                                  if (cResult[40] === obscured) {
                                    if (cResult[41] === tmp28) {
                                      if (cResult[42] === tmp43) {
                                        let tmp47 = cResult[43];
                                      }
                                      if (cResult[44] === centerContent) {
                                        if (cResult[45] === tmp27) {
                                          if (cResult[46] === tmp47) {
                                            if (cResult[47] === tmp21) {
                                              if (cResult[48] === tmp23) {
                                                let tmp50 = cResult[49];
                                              }
                                              if (cResult[50] === footer) {
                                                if (cResult[51] === tmp3.footerPortrait) {
                                                  let tmp54 = cResult[52];
                                                }
                                                if (cResult[53] === tmp50) {
                                                  if (cResult[54] === tmp54) {
                                                    if (cResult[55] === tmp19) {
                                                      let tmp58 = cResult[56];
                                                    }
                                                    return tmp58;
                                                  }
                                                }
                                                const obj4 = { style: tmp19, children: null };
                                                const items1 = [tmp50, tmp54];
                                                obj4.children = items1;
                                                const tmp60 = options(KeyboardAwareViewDefault, obj4);
                                                cResult[53] = tmp50;
                                                cResult[54] = tmp54;
                                                cResult[55] = tmp19;
                                                cResult[56] = tmp60;
                                                tmp58 = tmp60;
                                              }
                                              let tmp55 = null;
                                              if (null != footer) {
                                                const obj5 = {
                                                  onLayout(nativeEvent) {
                                                    closure_7(nativeEvent.nativeEvent.layout.height);
                                                  },
                                                  style: tmp3.footerPortrait,
                                                  children: footer,
                                                };
                                                tmp55 = React5(hasOwnProperty, obj5);
                                              }
                                              cResult[50] = footer;
                                              cResult[51] = tmp3.footerPortrait;
                                              cResult[52] = tmp55;
                                              tmp54 = tmp55;
                                            }
                                          }
                                        }
                                      }
                                      const obj6 = {
                                        style: tmp21,
                                        contentContainerStyle: tmp23,
                                        ref,
                                        onContentSizeChange: tmp25,
                                        scrollEventThrottle: 16,
                                        onLayout: tmp26,
                                        onScroll: tmp27,
                                        centerContent,
                                        children: tmp47,
                                      };
                                      const tmp53 = React5(timestampProducer, obj6);
                                      cResult[44] = centerContent;
                                      cResult[45] = tmp27;
                                      cResult[46] = tmp47;
                                      cResult[47] = tmp21;
                                      cResult[48] = tmp23;
                                      cResult[49] = tmp53;
                                      tmp50 = tmp53;
                                    }
                                  }
                                  const obj7 = { obscured, children: null };
                                  const items2 = [tmp28, tmp43];
                                  obj7.children = items2;
                                  const tmp49 = options(ObscuredSurfaceDefault, obj7);
                                  cResult[40] = obscured;
                                  cResult[41] = tmp28;
                                  cResult[42] = tmp43;
                                  cResult[43] = tmp49;
                                  tmp47 = tmp49;
                                }
                              }
                              const obj8 = { style: tmp36, children: null };
                              const items3 = [body, tmp37];
                              obj8.children = items3;
                              const tmp46 = options(hasOwnProperty, obj8);
                              cResult[36] = body;
                              cResult[37] = tmp36;
                              cResult[38] = tmp37;
                              cResult[39] = tmp46;
                              tmp43 = tmp46;
                            }
                            let tmp38 = null;
                            if (null != appDetails) {
                              const obj9 = { children: null };
                              const obj10 = { style: tmp3.separator };
                              const items4 = [React5(hasOwnProperty, obj10)];
                              const obj11 = { children: appDetails };
                              items4[1] = React5(hasOwnProperty, obj11);
                              obj9.children = items4;
                              tmp38 = options(closure_1_8, obj9);
                            }
                            cResult[33] = appDetails;
                            cResult[34] = tmp3.separator;
                            cResult[35] = tmp38;
                            tmp37 = tmp38;
                          }
                        }
                        const items5 = [tmp3.bodyContainer, prop, cResult[28]];
                        cResult[29] = tmp3.bodyContainer;
                        cResult[30] = prop;
                        cResult[31] = cResult[28];
                        cResult[32] = items5;
                        tmp36 = items5;
                      }
                    }
                    let tmp29 = null;
                    if (null != header) {
                      const obj12 = { style: tmp3.header, children: header };
                      tmp29 = React5(hasOwnProperty, obj12);
                    }
                    cResult[24] = header;
                    cResult[25] = tmp3.header;
                    cResult[26] = tmp29;
                    tmp28 = tmp29;
                  }
                  function oe(nativeEvent) {
                    nativeEvent = nativeEvent.nativeEvent;
                    let contentOffset = nativeEvent.contentOffset;
                    if (contentOffset === undefined) {
                      contentOffset = { y: 0 };
                    }
                    if (nativeEvent.layoutMeasurement.height + contentOffset.y >= nativeEvent.contentSize.height - 5) {
                      if (setAllContentSeen != null) {
                        tmp(true);
                      }
                    }
                    if (onScroll != null) {
                      onScroll(nativeEvent);
                    }
                  }
                  cResult[21] = onScroll;
                  cResult[22] = setAllContentSeen;
                  cResult[23] = oe;
                  tmp27 = oe;
                }
                const items6 = [tmp3.scrollView, tmp20];
                cResult[14] = tmp3.scrollView;
                cResult[15] = tmp20;
                cResult[16] = items6;
                tmp21 = items6;
              }
              const obj13 = { paddingLeft: left, paddingRight: right };
              cResult[11] = left;
              cResult[12] = right;
              cResult[13] = obj13;
              tmp20 = obj13;
            }
            const items7 = [tmp3.fill, tmp18];
            cResult[8] = tmp3.fill;
            cResult[9] = tmp18;
            cResult[10] = items7;
            tmp19 = items7;
          }
        }
      }
      const fn = function s() {
        if (closure_8) {
          const obj = { layoutMeasurement: null, contentSize: null };
          const obj2 = { height: first1 };
          obj.layoutMeasurement = obj2;
          const obj3 = { height };
          obj.contentSize = obj3;
          let contentOffset = obj.contentOffset;
          if (contentOffset === undefined) {
            contentOffset = { y: 0 };
          }
          if (obj.layoutMeasurement.height + contentOffset.y >= obj.contentSize.height - 5) {
            if (setAllContentSeen != null) {
              tmp6(true);
            }
          } else if (setAllContentSeen != null) {
            tmp3(false);
          }
        }
      };
      const items8 = [height, tmp13, first1, setAllContentSeen];
      cResult[0] = height;
      cResult[1] = tmp13;
      cResult[2] = first1;
      cResult[3] = setAllContentSeen;
      cResult[4] = fn;
      cResult[5] = items8;
      tmp16 = items8;
      tmp15 = fn;
      const tmp7 = useSafeAreaInsetsDefault();
    }
  : (onScroll) => {
      ({ header, footer, appDetails, setAllContentSeen } = onScroll);
      onScroll = onScroll.onScroll;
      height = undefined;
      closure_4 = undefined;
      first1 = undefined;
      closure_6 = undefined;
      closure_8 = undefined;
      ({ body, centerContent, hasContentBackground, obscured } = onScroll);
      const tmp = closure_10();
      const ref = noop.useRef(null);
      const size = useWindowDimensionsDefault();
      ({ left, right, bottom } = useSafeAreaInsetsDefault());
      [height, closure_4] = noop.useState(-1);
      [first1, closure_6] = noop.useState(-1);
      const tmp11 = _slicedToArray(noop.useState(-1), 2);
      closure_7 = tmp11[1];
      let tmp12 = height >= 0;
      if (tmp12) {
        tmp12 = first1 >= 0;
      }
      if (tmp12) {
        tmp12 = null == footer || tmp11[0] >= 0;
        const tmp13 = null == footer || tmp11[0] >= 0;
      }
      closure_8 = tmp12;
      const items = [height, tmp12, first1, setAllContentSeen];
      const layoutEffect = noop.useLayoutEffect(() => {
        if (closure_8) {
          const obj = { layoutMeasurement: null, contentSize: null };
          const obj2 = { height: first1 };
          obj.layoutMeasurement = obj2;
          const obj3 = { height };
          obj.contentSize = obj3;
          let contentOffset = obj.contentOffset;
          if (contentOffset === undefined) {
            contentOffset = { y: 0 };
          }
          if (obj.layoutMeasurement.height + contentOffset.y >= obj.contentSize.height - 5) {
            if (setAllContentSeen != null) {
              tmp6(true);
            }
          } else if (setAllContentSeen != null) {
            tmp3(false);
          }
        }
      }, items);
      let obj2 = { style: null, children: null };
      const items1 = [tmp.fill, { marginBottom: bottom }];
      obj2.style = items1;
      let obj3 = {
        style: null,
        contentContainerStyle: null,
        ref,
        onContentSizeChange(arg0, arg1) {
          const current = ref.current;
          if (current != null) {
            current.scrollTo({ y: 0 });
          }
          closure_4(arg1);
        },
        scrollEventThrottle: 16,
        onLayout(nativeEvent) {
          closure_6(nativeEvent.nativeEvent.layout.height);
        },
        onScroll(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          let contentOffset = nativeEvent.contentOffset;
          if (contentOffset === undefined) {
            contentOffset = { y: 0 };
          }
          if (nativeEvent.layoutMeasurement.height + contentOffset.y >= nativeEvent.contentSize.height - 5) {
            if (setAllContentSeen != null) {
              tmp(true);
            }
          }
          if (onScroll != null) {
            onScroll(nativeEvent);
          }
        },
        centerContent,
        children: null,
      };
      const items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
      obj3.style = items2;
      const items3 = [size.width > size.height ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait];
      obj3.contentContainerStyle = items3;
      const tmp6 = useSafeAreaInsetsDefault();
      const obj4 = { obscured, children: null };
      let tmp17Result = null;
      const tmp3Result = KeyboardAwareViewDefault;
      if (null != header) {
        const obj5 = { style: tmp.header, children: header };
        tmp17Result = React5(hasOwnProperty, obj5);
      }
      const items4 = [tmp17Result];
      const items5 = [tmp.bodyContainer, ,];
      let prop = null;
      if (hasContentBackground) {
        prop = tmp.bodyContainerBackground;
      }
      items5[1] = prop;
      const obj6 = { style: items5, children: null };
      items5[2] = size.width > size.height ? { flex: 1 } : {};
      const items6 = [body];
      let tmp15Result = null;
      if (null != appDetails) {
        const obj7 = { children: null };
        const obj8 = { style: tmp.separator };
        const items7 = [React5(hasOwnProperty, obj8)];
        const obj9 = { children: appDetails };
        items7[1] = React5(hasOwnProperty, obj9);
        obj7.children = items7;
        tmp15Result = options(closure_1_8, obj7);
      }
      items6[1] = tmp15Result;
      obj6.children = items6;
      items4[1] = options(hasOwnProperty, obj6);
      obj4.children = items4;
      obj3.children = options(ObscuredSurfaceDefault, obj4);
      const items8 = [React5(timestampProducer, obj3)];
      let tmp17Result2 = null;
      if (null != footer) {
        const obj10 = {
          onLayout(nativeEvent) {
            closure_7(nativeEvent.nativeEvent.layout.height);
          },
          style: tmp.footerPortrait,
          children: footer,
        };
        tmp17Result2 = React5(hasOwnProperty, obj10);
      }
      items8[1] = tmp17Result2;
      obj2.children = items8;
      return options(tmp3Result, obj2);
    };
