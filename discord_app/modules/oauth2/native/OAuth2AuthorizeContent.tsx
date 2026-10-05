// === Module 8965: OAuth2AuthorizeContent ===

// Module 8965 (OAuth2AuthorizeContent)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6537 */;
import ObscuredSurfaceDefault from "ObscuredSurface" /* 8355 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let onScroll;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { fill: { flex: 1 }, scrollView: obj2, scrollViewContentLandscape: { flexDirection: "row", alignItems: "center", width: "100%", flexGrow: 1, gap: 16 }, scrollViewContentPortrait: { flexDirection: "column", width: "100%", flexGrow: 1, gap: 16 }, header: { paddingTop: 24 }, bodyContainer: { flexDirection: "column", gap: 16, padding: 16 }, bodyContainerBackground: obj3, footerPortrait: { flexDirection: "column", padding: 16, gap: 16 }, separator: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: 16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg };
obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onScroll) => {
  let appDetails;
  let body;
  let bottom;
  let centerContent;
  let closure_4;
  let first;
  let first1;
  let first2;
  let footer;
  let header;
  let items1;
  let items2;
  let items3;
  let items4;
  let left;
  let right;
  let setAllContentSeen;
  let obj = react2;
  const cResult = obj.c(57);
  ({ header, body, footer, appDetails, centerContent, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  const obscured = onScroll.obscured;
  const hasContentBackground = onScroll.hasContentBackground;
  const tmp3 = closure_10();
  const ref = react.useRef(null);
  size = useWindowDimensionsDefault();
  const tmp7 = useSafeAreaInsetsDefault();
  ({ left, right, bottom } = tmp7);
  [first, closure_4] = react.useState(-1);
  [first1, metroRequire] = react.useState(-1);
  [first2, metroImportDefault] = react.useState(-1);
  let tmp14 = first >= 0 && first1 >= 0;
  if (tmp14) {
    tmp14 = null == footer || first2 >= 0;
  }
  metroImportAll = tmp14;
  if (cResult[0] === first) {
    if (cResult[1] === tmp14) {
      if (cResult[2] === first1) {
        let tmp16;
        let tmp17;
        let tmp19;
        if (cResult[3] === setAllContentSeen) {
          tmp16 = cResult[4];
          tmp17 = cResult[5];
        }
        const layoutEffect = react.useLayoutEffect(tmp16, tmp17);
        if (cResult[6] !== bottom) {
          let obj3 = { marginBottom: bottom };
          cResult[6] = bottom;
          cResult[7] = obj3;
          tmp19 = obj3;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] === tmp3.fill) {
          let tmp20;
          if (cResult[9] === tmp19) {
            tmp20 = cResult[10];
          }
          if (cResult[11] === left) {
            let tmp21;
            if (cResult[12] === right) {
              tmp21 = cResult[13];
            }
            if (cResult[14] === tmp3.scrollView) {
              let tmp22;
              let tmp24;
              let tmp26;
              let tmp27;
              if (cResult[15] === tmp21) {
                tmp22 = cResult[16];
              }
              const tmp23 = size.width > size.height ? tmp3.scrollViewContentLandscape : tmp3.scrollViewContentPortrait;
              if (cResult[17] !== tmp23) {
                const items = [tmp23];
                cResult[17] = tmp23;
                cResult[18] = items;
                tmp24 = items;
              } else {
                tmp24 = cResult[18];
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
                tmp26 = ee;
              } else {
                tmp26 = cResult[19];
              }
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                function te(nativeEvent) {
                  closure_6(nativeEvent.nativeEvent.layout.height);
                }
                cResult[20] = te;
                tmp27 = te;
              } else {
                tmp27 = cResult[20];
              }
              if (cResult[21] === onScroll) {
                let tmp28;
                if (cResult[22] === setAllContentSeen) {
                  tmp28 = cResult[23];
                }
                if (cResult[24] === header) {
                  let tmp29;
                  let tmp34;
                  if (cResult[25] === tmp3.header) {
                    tmp29 = cResult[26];
                  }
                  let prop = null;
                  if (hasContentBackground) {
                    prop = tmp3.bodyContainerBackground;
                  }
                  if (cResult[27] !== size.width > size.height) {
                    const tmp35 = size.width > size.height ? { flex: 1 } : {};
                    cResult[27] = size.width > size.height;
                    cResult[28] = tmp35;
                    tmp34 = tmp35;
                  } else {
                    tmp34 = cResult[28];
                  }
                  if (cResult[29] === tmp3.bodyContainer) {
                    if (cResult[30] === prop) {
                      let tmp36;
                      if (cResult[31] === tmp34) {
                        tmp36 = cResult[32];
                      }
                      if (cResult[33] === appDetails) {
                        let tmp37;
                        if (cResult[34] === tmp3.separator) {
                          tmp37 = cResult[35];
                        }
                        if (cResult[36] === body) {
                          if (cResult[37] === tmp36) {
                            let tmp43;
                            if (cResult[38] === tmp37) {
                              tmp43 = cResult[39];
                            }
                            if (cResult[40] === obscured) {
                              if (cResult[41] === tmp29) {
                                let tmp47;
                                if (cResult[42] === tmp43) {
                                  tmp47 = cResult[43];
                                }
                                if (cResult[44] === centerContent) {
                                  if (cResult[45] === tmp28) {
                                    if (cResult[46] === tmp47) {
                                      if (cResult[47] === tmp22) {
                                        let tmp50;
                                        if (cResult[48] === tmp24) {
                                          tmp50 = cResult[49];
                                        }
                                        if (cResult[50] === footer) {
                                          let tmp54;
                                          if (cResult[51] === tmp3.footerPortrait) {
                                            tmp54 = cResult[52];
                                          }
                                          if (cResult[53] === tmp50) {
                                            if (cResult[54] === tmp54) {
                                              let tmp58;
                                              if (cResult[55] === tmp20) {
                                                tmp58 = cResult[56];
                                              }
                                              return tmp58;
                                            }
                                          }
                                          const obj4 = { style: tmp20, children: items1 };
                                          items1 = [tmp50, tmp54];
                                          const tmp60 = React4(KeyboardAwareViewDefault, obj4);
                                          cResult[53] = tmp50;
                                          cResult[54] = tmp54;
                                          cResult[55] = tmp20;
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
                                            children: footer
                                          };
                                          tmp55 = metroImportDefault(hasOwnProperty, obj5);
                                        }
                                        cResult[50] = footer;
                                        cResult[51] = tmp3.footerPortrait;
                                        cResult[52] = tmp55;
                                        tmp54 = tmp55;
                                      }
                                    }
                                  }
                                }
                                const obj6 = { style: tmp22, contentContainerStyle: tmp24, ref, onContentSizeChange: tmp26, scrollEventThrottle: 16, onLayout: tmp27, onScroll: tmp28, centerContent, children: tmp47 };
                                const tmp53 = metroImportDefault(metroRequire, obj6);
                                cResult[44] = centerContent;
                                cResult[45] = tmp28;
                                cResult[46] = tmp47;
                                cResult[47] = tmp22;
                                cResult[48] = tmp24;
                                cResult[49] = tmp53;
                                tmp50 = tmp53;
                              }
                            }
                            const obj7 = { obscured, children: items2 };
                            items2 = [tmp29, tmp43];
                            const tmp49 = React4(ObscuredSurfaceDefault, obj7);
                            cResult[40] = obscured;
                            cResult[41] = tmp29;
                            cResult[42] = tmp43;
                            cResult[43] = tmp49;
                            tmp47 = tmp49;
                          }
                        }
                        const obj8 = { style: tmp36, children: items3 };
                        items3 = [body, tmp37];
                        const tmp46 = React4(hasOwnProperty, obj8);
                        cResult[36] = body;
                        cResult[37] = tmp36;
                        cResult[38] = tmp37;
                        cResult[39] = tmp46;
                        tmp43 = tmp46;
                      }
                      let tmp38 = null;
                      if (null != appDetails) {
                        const obj10 = { style: tmp3.separator };
                        const obj9 = { children: items4 };
                        items4 = [metroImportDefault(hasOwnProperty, obj10), ];
                        const obj11 = { children: appDetails };
                        items4[1] = metroImportDefault(hasOwnProperty, obj11);
                        tmp38 = React4(metroImportAll, obj9);
                      }
                      cResult[33] = appDetails;
                      cResult[34] = tmp3.separator;
                      cResult[35] = tmp38;
                      tmp37 = tmp38;
                    }
                  }
                  const items5 = [tmp3.bodyContainer, prop, tmp34];
                  cResult[29] = tmp3.bodyContainer;
                  cResult[30] = prop;
                  cResult[31] = tmp34;
                  cResult[32] = items5;
                  tmp36 = items5;
                }
                let tmp30 = null;
                if (null != header) {
                  const obj12 = { style: tmp3.header, children: header };
                  tmp30 = metroImportDefault(hasOwnProperty, obj12);
                }
                cResult[24] = header;
                cResult[25] = tmp3.header;
                cResult[26] = tmp30;
                tmp29 = tmp30;
              }
              function oe(nativeEvent) {
                nativeEvent = nativeEvent.nativeEvent;
                let contentOffset = nativeEvent.contentOffset;
                const layoutMeasurement = nativeEvent.layoutMeasurement;
                if (contentOffset === undefined) {
                  contentOffset = { y: 0 };
                }
                if (layoutMeasurement.height + contentOffset.y >= nativeEvent.contentSize.height - 5) {
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
              tmp28 = oe;
            }
            const items6 = [tmp3.scrollView, tmp21];
            cResult[14] = tmp3.scrollView;
            cResult[15] = tmp21;
            cResult[16] = items6;
            tmp22 = items6;
          }
          const obj13 = { paddingLeft: left, paddingRight: right };
          cResult[11] = left;
          cResult[12] = right;
          cResult[13] = obj13;
          tmp21 = obj13;
        }
        const items7 = [tmp3.fill, tmp19];
        cResult[8] = tmp3.fill;
        cResult[9] = tmp19;
        cResult[10] = items7;
        tmp20 = items7;
      }
    }
  }
  const fn = function s() {
    let obj2;
    let obj3;
    if (closure_8) {
      const obj = { layoutMeasurement: obj2, contentSize: obj3 };
      let contentOffset = obj.contentOffset;
      const layoutMeasurement = obj.layoutMeasurement;
      obj2 = { height: first1 };
      obj3 = { height };
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (layoutMeasurement.height + contentOffset.y >= obj.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp7(true);
        }
      } else if (setAllContentSeen != null) {
        tmp4(false);
      }
    }
  };
  const items8 = [first, tmp14, first1, setAllContentSeen];
  cResult[0] = first;
  cResult[1] = tmp14;
  cResult[2] = first1;
  cResult[3] = setAllContentSeen;
  cResult[4] = fn;
  cResult[5] = items8;
  tmp17 = items8;
  tmp16 = fn;
}) : ((onScroll) => {
  let appDetails;
  let body;
  let bottom;
  let centerContent;
  let closure_4;
  let first;
  let first1;
  let first2;
  let footer;
  let hasContentBackground;
  let header;
  let items1;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  let left;
  let obj4;
  let obscured;
  let right;
  let setAllContentSeen;
  let tmp3Result2;
  ({ header, footer, appDetails, setAllContentSeen } = onScroll);
  onScroll = onScroll.onScroll;
  first = undefined;
  closure_4 = undefined;
  first1 = undefined;
  metroRequire = undefined;
  metroImportDefault = undefined;
  metroImportAll = undefined;
  ({ body, centerContent, hasContentBackground, obscured } = onScroll);
  const tmp = closure_10();
  const ref = react.useRef(null);
  size = useWindowDimensionsDefault();
  ({ left, right, bottom } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  [first, closure_4] = react.useState(-1);
  [first1, metroRequire] = react.useState(-1);
  [first2, metroImportDefault] = react.useState(-1);
  let tmp13 = first >= 0 && first1 >= 0;
  if (tmp13) {
    tmp13 = null == footer || first2 >= 0;
  }
  metroImportAll = tmp13;
  const items = [first, tmp13, first1, setAllContentSeen];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj2;
    let obj3;
    if (closure_8) {
      const obj = { layoutMeasurement: obj2, contentSize: obj3 };
      let contentOffset = obj.contentOffset;
      const layoutMeasurement = obj.layoutMeasurement;
      obj2 = { height: first1 };
      obj3 = { height };
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (layoutMeasurement.height + contentOffset.y >= obj.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp7(true);
        }
      } else if (setAllContentSeen != null) {
        tmp4(false);
      }
    }
  }, items);
  let obj2 = { style: items1, children: items8 };
  items1 = [tmp.fill, { marginBottom: bottom }];
  let obj3 = {
    style: items2,
    contentContainerStyle: items3,
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
      const layoutMeasurement = nativeEvent.layoutMeasurement;
      if (contentOffset === undefined) {
        contentOffset = { y: 0 };
      }
      if (layoutMeasurement.height + contentOffset.y >= nativeEvent.contentSize.height - 5) {
        if (setAllContentSeen != null) {
          tmp(true);
        }
      }
      if (onScroll != null) {
        onScroll(nativeEvent);
      }
    },
    centerContent,
    children: React4(tmp3Result2, obj4)
  };
  items2 = [tmp.scrollView, { paddingLeft: left, paddingRight: right }];
  items3 = [tmp5 ? tmp.scrollViewContentLandscape : tmp.scrollViewContentPortrait];
  let tmp18Result = null;
  obj4 = { obscured, children: items4 };
  const tmp3Result = KeyboardAwareViewDefault;
  const tmp19 = metroRequire;
  tmp3Result2 = ObscuredSurfaceDefault;
  if (null != header) {
    const obj5 = { style: tmp.header, children: header };
    tmp18Result = tmp18(hasOwnProperty, obj5);
  }
  items4 = [tmp18Result, ];
  const items5 = [tmp.bodyContainer, , ];
  let prop = null;
  if (hasContentBackground) {
    prop = tmp.bodyContainerBackground;
  }
  items5[1] = prop;
  const obj6 = { style: items5, children: items6 };
  items5[2] = size.width > size.height ? { flex: 1 } : {};
  items6 = [body, ];
  let tmp16Result = null;
  if (null != appDetails) {
    const obj7 = { children: items7 };
    const obj8 = { style: tmp.separator };
    items7 = [metroImportDefault(hasOwnProperty, obj8), ];
    const obj9 = { children: appDetails };
    items7[1] = metroImportDefault(hasOwnProperty, obj9);
    tmp16Result = React4(metroImportAll, obj7);
  }
  items6[1] = tmp16Result;
  items4[1] = React4(hasOwnProperty, obj6);
  items8 = [metroImportDefault(tmp19, obj3), ];
  let tmp18Result2 = null;
  if (null != footer) {
    const obj10 = {
      onLayout(nativeEvent) {
          closure_7(nativeEvent.nativeEvent.layout.height);
        },
      style: tmp.footerPortrait,
      children: footer
    };
    tmp18Result2 = tmp18(hasOwnProperty, obj10);
  }
  items8[1] = tmp18Result2;
  return React4(tmp3Result, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeContent.tsx");

export default tmp5;