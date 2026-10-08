// === Module 10648: OAuth2AuthorizeContent ===

// Module 10648 (OAuth2AuthorizeContent)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6720 */;
import ObscuredSurfaceDefault from "ObscuredSurface" /* 8886 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { fill: { flex: 1 }, scrollView: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 }, scrollViewContentLandscape: { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 }, scrollViewContentPortrait: { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 }, header: { paddingTop: 24 }, bodyContainer: { flexDirection: "column", gap: 16, padding: 16 }, bodyContainerBackground: null, footerPortrait: null, separator: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
obj2.bodyContainerBackground = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj2.footerPortrait = { flexDirection: "column", padding: 16, gap: 16 };
let obj4 = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj2.separator = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OAuth2AuthorizeContent(onScroll) {
  const cResult = c.c(55);
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
              const _Symbol = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function $(arg0, arg1) {
                  const current = ref.current;
                  if (current != null) {
                    current.scrollTo({ y: 0 });
                  }
                  closure_4(arg1);
                };
                cResult[17] = fn2;
                let tmp24 = fn2;
              } else {
                tmp24 = cResult[17];
              }
              const _Symbol2 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                function ee(nativeEvent) {
                  closure_6(nativeEvent.nativeEvent.layout.height);
                }
                cResult[18] = ee;
                let tmp25 = ee;
              } else {
                tmp25 = cResult[18];
              }
              if (cResult[19] === onScroll) {
                if (cResult[20] === setAllContentSeen) {
                  let tmp26 = cResult[21];
                }
                if (cResult[22] === header) {
                  if (cResult[23] === tmp3.header) {
                    let tmp27 = cResult[24];
                  }
                  let prop = null;
                  if (onScroll.hasContentBackground) {
                    prop = tmp3.bodyContainerBackground;
                  }
                  if (cResult[25] !== tmp6) {
                    const tmp33 = tmp6 ? { flex: 1 } : {};
                    cResult[25] = tmp6;
                    cResult[26] = tmp33;
                  } else {
                    if (cResult[27] === tmp3.bodyContainer) {
                      if (cResult[28] === prop) {
                        if (cResult[29] === tmp32) {
                          let tmp35 = cResult[30];
                        }
                        if (cResult[31] === appDetails) {
                          if (cResult[32] === tmp3.separator) {
                            let tmp36 = cResult[33];
                          }
                          if (cResult[34] === body) {
                            if (cResult[35] === tmp35) {
                              if (cResult[36] === tmp36) {
                                let tmp42 = cResult[37];
                              }
                              if (cResult[38] === obscured) {
                                if (cResult[39] === tmp27) {
                                  if (cResult[40] === tmp42) {
                                    let tmp46 = cResult[41];
                                  }
                                  if (cResult[42] === centerContent) {
                                    if (cResult[43] === tmp26) {
                                      if (cResult[44] === tmp46) {
                                        if (cResult[45] === tmp21) {
                                          if (cResult[46] === tmp22) {
                                            let tmp49 = cResult[47];
                                          }
                                          if (cResult[48] === footer) {
                                            if (cResult[49] === tmp3.footerPortrait) {
                                              let tmp53 = cResult[50];
                                            }
                                            if (cResult[51] === tmp49) {
                                              if (cResult[52] === tmp53) {
                                                if (cResult[53] === tmp19) {
                                                  let tmp57 = cResult[54];
                                                }
                                                return tmp57;
                                              }
                                            }
                                            const obj4 = { style: tmp19, children: null };
                                            const items = [tmp49, tmp53];
                                            obj4.children = items;
                                            const tmp59 = options(KeyboardAwareViewDefault, obj4);
                                            cResult[51] = tmp49;
                                            cResult[52] = tmp53;
                                            cResult[53] = tmp19;
                                            cResult[54] = tmp59;
                                            tmp57 = tmp59;
                                          }
                                          let tmp54 = null;
                                          if (null != footer) {
                                            const obj5 = {
                                              onLayout(nativeEvent) {
                                                                                          closure_7(nativeEvent.nativeEvent.layout.height);
                                                                                        },
                                              style: tmp3.footerPortrait,
                                              children: footer
                                            };
                                            tmp54 = React5(hasOwnProperty, obj5);
                                          }
                                          cResult[48] = footer;
                                          cResult[49] = tmp3.footerPortrait;
                                          cResult[50] = tmp54;
                                          tmp53 = tmp54;
                                        }
                                      }
                                    }
                                  }
                                  const obj6 = { style: tmp21, contentContainerStyle: tmp22, ref, onContentSizeChange: tmp24, scrollEventThrottle: 16, onLayout: tmp25, onScroll: tmp26, centerContent, children: tmp46 };
                                  const tmp52 = React5(timestampProducer, obj6);
                                  cResult[42] = centerContent;
                                  cResult[43] = tmp26;
                                  cResult[44] = tmp46;
                                  cResult[45] = tmp21;
                                  cResult[46] = tmp22;
                                  cResult[47] = tmp52;
                                  tmp49 = tmp52;
                                }
                              }
                              const obj7 = { obscured, children: null };
                              const items1 = [tmp27, tmp42];
                              obj7.children = items1;
                              const tmp48 = options(ObscuredSurfaceDefault, obj7);
                              cResult[38] = obscured;
                              cResult[39] = tmp27;
                              cResult[40] = tmp42;
                              cResult[41] = tmp48;
                              tmp46 = tmp48;
                            }
                          }
                          const obj8 = { style: tmp35, children: null };
                          const items2 = [body, tmp36];
                          obj8.children = items2;
                          const tmp45 = options(hasOwnProperty, obj8);
                          cResult[34] = body;
                          cResult[35] = tmp35;
                          cResult[36] = tmp36;
                          cResult[37] = tmp45;
                          tmp42 = tmp45;
                        }
                        let tmp37 = null;
                        if (null != appDetails) {
                          const obj9 = { children: null };
                          const obj10 = { style: tmp3.separator };
                          const items3 = [React5(hasOwnProperty, obj10), ];
                          const obj11 = { children: appDetails };
                          items3[1] = React5(hasOwnProperty, obj11);
                          obj9.children = items3;
                          tmp37 = options(closure_1_8, obj9);
                        }
                        cResult[31] = appDetails;
                        cResult[32] = tmp3.separator;
                        cResult[33] = tmp37;
                        tmp36 = tmp37;
                      }
                    }
                    const items4 = [tmp3.bodyContainer, prop, cResult[26]];
                    cResult[27] = tmp3.bodyContainer;
                    cResult[28] = prop;
                    cResult[29] = cResult[26];
                    cResult[30] = items4;
                    tmp35 = items4;
                  }
                }
                let tmp28 = null;
                if (null != header) {
                  const obj12 = { style: tmp3.header, children: header };
                  tmp28 = React5(hasOwnProperty, obj12);
                }
                cResult[22] = header;
                cResult[23] = tmp3.header;
                cResult[24] = tmp28;
                tmp27 = tmp28;
              }
              function te(nativeEvent) {
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
              cResult[19] = onScroll;
              cResult[20] = setAllContentSeen;
              cResult[21] = te;
              tmp26 = te;
            }
            const items5 = [tmp3.scrollView, tmp20];
            cResult[14] = tmp3.scrollView;
            cResult[15] = tmp20;
            cResult[16] = items5;
            tmp21 = items5;
          }
          const obj13 = { paddingLeft: left, paddingRight: right };
          cResult[11] = left;
          cResult[12] = right;
          cResult[13] = obj13;
          tmp20 = obj13;
        }
        const items6 = [tmp3.fill, tmp18];
        cResult[8] = tmp3.fill;
        cResult[9] = tmp18;
        cResult[10] = items6;
        tmp19 = items6;
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
  const items7 = [height, tmp13, first1, setAllContentSeen];
  cResult[0] = height;
  cResult[1] = tmp13;
  cResult[2] = first1;
  cResult[3] = setAllContentSeen;
  cResult[4] = fn;
  cResult[5] = items7;
  tmp16 = items7;
  tmp15 = fn;
  const tmp7 = useSafeAreaInsetsDefault();
}) : (function OAuth2AuthorizeContent(onScroll) {
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
    contentContainerStyle: size.width > size.height ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait,
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
    children: null
  };
  const items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
  obj3.style = items2;
  const tmp6 = useSafeAreaInsetsDefault();
  const obj4 = { obscured, children: null };
  let tmp17Result = null;
  const tmp3Result = KeyboardAwareViewDefault;
  if (null != header) {
    const obj5 = { style: tmp.header, children: header };
    tmp17Result = React5(hasOwnProperty, obj5);
  }
  const items3 = [tmp17Result, ];
  const items4 = [tmp.bodyContainer, , ];
  let prop = null;
  if (hasContentBackground) {
    prop = tmp.bodyContainerBackground;
  }
  items4[1] = prop;
  const obj6 = { style: items4, children: null };
  items4[2] = size.width > size.height ? { flex: 1 } : {};
  const items5 = [body, ];
  let tmp15Result = null;
  if (null != appDetails) {
    const obj7 = { children: null };
    const obj8 = { style: tmp.separator };
    const items6 = [React5(hasOwnProperty, obj8), ];
    const obj9 = { children: appDetails };
    items6[1] = React5(hasOwnProperty, obj9);
    obj7.children = items6;
    tmp15Result = options(closure_1_8, obj7);
  }
  items5[1] = tmp15Result;
  obj6.children = items5;
  items3[1] = options(hasOwnProperty, obj6);
  obj4.children = items3;
  obj3.children = options(ObscuredSurfaceDefault, obj4);
  const items7 = [React5(timestampProducer, obj3), ];
  let tmp17Result2 = null;
  if (null != footer) {
    const obj10 = {
      onLayout(nativeEvent) {
          closure_7(nativeEvent.nativeEvent.layout.height);
        },
      style: tmp.footerPortrait,
      children: footer
    };
    tmp17Result2 = React5(hasOwnProperty, obj10);
  }
  items7[1] = tmp17Result2;
  obj2.children = items7;
  return options(tmp3Result, obj2);
});