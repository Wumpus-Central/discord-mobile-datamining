// === Module 6467: AuthFormView ===

// Module 6467 (AuthFormView)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6439 */;
import react3 from "react" /* 6468 */;
import AuthHeaderDefault from "AuthHeader" /* 6469 */;
import BackgroundImageDefault from "BackgroundImage" /* 6470 */;
import AuthNavbarPlaceholderDefault from "AuthNavbarPlaceholder" /* 6473 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((arg0) => {
  let num2;
  let num3;
  let num4;
  let num5;
  let obj3;
  let num = 0;
  const obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, flex: { flex: 1 }, content: obj3, subHeader: { marginTop: 8, alignItems: "center" } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 });
  if (arg0) {
    num = 12;
  }
  obj3 = { paddingTop: num, paddingRight: num2, paddingLeft: num3, paddingBottom: num4, flex: num5 };
  num2 = 16;
  if (arg0) {
    num2 = 24;
  }
  num3 = 16;
  if (arg0) {
    num3 = 24;
  }
  num4 = 0;
  if (arg0) {
    num4 = 16;
  }
  num5 = 1;
  if (arg0) {
    num5 = 0;
  }
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundImageCover;
  let backgroundImageSource;
  let children;
  let contentStyle;
  let headerText;
  let items;
  let items2;
  let items3;
  let subHeader;
  let tmp28;
  const obj = react2;
  const cResult = obj.c(45);
  ({ children, headerText, subHeader, contentStyle, backgroundImageSource, backgroundImageCover } = arg0);
  const tmp4 = useWideAuthViewDefault();
  const tmp5 = closure_8(tmp4);
  const context = react.useContext(react3.WideAuthScrollContext);
  if (tmp4) {
    let first;
    let tmp34;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { top: 0 };
      cResult[0] = obj2;
      first = obj2;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== context) {
      const fn = function h(nativeEvent) {
        return context(nativeEvent.nativeEvent.contentOffset.y > 0);
      };
      cResult[1] = context;
      cResult[2] = fn;
      tmp34 = fn;
    } else {
      tmp34 = cResult[2];
    }
    if (cResult[3] === contentStyle) {
      let tmp35;
      let tmp36;
      if (cResult[4] === tmp5.content) {
        tmp35 = cResult[5];
      }
      if (cResult[6] !== headerText) {
        let tmp37 = null;
        if (null != headerText) {
          const obj3 = { children: headerText };
          tmp37 = metroRequire(AuthHeaderDefault, obj3);
        }
        cResult[6] = headerText;
        cResult[7] = tmp37;
        tmp36 = tmp37;
      } else {
        tmp36 = cResult[7];
      }
      if (cResult[8] === tmp5.subHeader) {
        let tmp39;
        if (cResult[9] === subHeader) {
          tmp39 = cResult[10];
        }
        if (cResult[11] === children) {
          if (cResult[12] === tmp5.container) {
            if (cResult[13] === tmp34) {
              if (cResult[14] === tmp35) {
                if (cResult[15] === tmp36) {
                  let tmp43;
                  if (cResult[16] === tmp39) {
                    tmp43 = cResult[17];
                  }
                  tmp28 = tmp43;
                }
              }
            }
          }
        }
        const obj4 = { contentInset: first, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, scrollEventThrottle: 16, onScroll: tmp34, style: tmp5.container, contentContainerStyle: tmp35, children: items };
        items = [tmp36, tmp39, children];
        const tmp46 = metroImportDefault(hasOwnProperty, obj4);
        cResult[11] = children;
        cResult[12] = tmp5.container;
        cResult[13] = tmp34;
        cResult[14] = tmp35;
        cResult[15] = tmp36;
        cResult[16] = tmp39;
        cResult[17] = tmp46;
        tmp43 = tmp46;
      }
      let tmp40 = null;
      if (null != subHeader) {
        const obj5 = { style: tmp5.subHeader, children: subHeader };
        tmp40 = metroRequire(React3, obj5);
      }
      cResult[8] = tmp5.subHeader;
      cResult[9] = subHeader;
      cResult[10] = tmp40;
      tmp39 = tmp40;
    }
    const items1 = [tmp5.content, contentStyle];
    cResult[3] = contentStyle;
    cResult[4] = tmp5.content;
    cResult[5] = items1;
    tmp35 = items1;
  } else {
    if (cResult[18] === tmp5.container) {
      let tmp7;
      if (cResult[19] === tmp5.flex) {
        tmp7 = cResult[20];
      }
      if (cResult[21] === backgroundImageCover) {
        let tmp8;
        let tmp12;
        let tmp15;
        if (cResult[22] === backgroundImageSource) {
          tmp8 = cResult[23];
        }
        const _Symbol = Symbol;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp14 = metroRequire(AuthNavbarPlaceholderDefault, {});
          cResult[24] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[24];
        }
        const _Symbol2 = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { top: 0 };
          cResult[25] = obj6;
          tmp15 = obj6;
        } else {
          tmp15 = cResult[25];
        }
        if (cResult[26] === contentStyle) {
          if (cResult[27] === tmp5.content) {
            let tmp16;
            let tmp17;
            if (cResult[28] === tmp5.flex) {
              tmp16 = cResult[29];
            }
            if (cResult[30] !== headerText) {
              let tmp18 = null;
              if (null != headerText) {
                const obj7 = { children: headerText };
                tmp18 = metroRequire(AuthHeaderDefault, obj7);
              }
              cResult[30] = headerText;
              cResult[31] = tmp18;
              tmp17 = tmp18;
            } else {
              tmp17 = cResult[31];
            }
            if (cResult[32] === tmp5.subHeader) {
              let tmp20;
              if (cResult[33] === subHeader) {
                tmp20 = cResult[34];
              }
              if (cResult[35] === children) {
                if (cResult[36] === tmp5.flex) {
                  if (cResult[37] === tmp16) {
                    if (cResult[38] === tmp17) {
                      let tmp24;
                      if (cResult[39] === tmp20) {
                        tmp24 = cResult[40];
                      }
                      if (cResult[41] === tmp7) {
                        if (cResult[42] === tmp8) {
                          if (cResult[43] === tmp24) {
                            tmp28 = cResult[44];
                          }
                        }
                      }
                      const obj8 = { style: tmp7, children: items2 };
                      items2 = [tmp8, tmp12, tmp24];
                      const tmp31 = metroImportDefault(React3, obj8);
                      cResult[41] = tmp7;
                      cResult[42] = tmp8;
                      cResult[43] = tmp24;
                      cResult[44] = tmp31;
                      tmp28 = tmp31;
                    }
                  }
                }
              }
              const obj9 = { contentInset: tmp15, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp5.flex, contentContainerStyle: tmp16, children: items3 };
              items3 = [tmp17, tmp20, children];
              const tmp27 = metroImportDefault(hasOwnProperty, obj9);
              cResult[35] = children;
              cResult[36] = tmp5.flex;
              cResult[37] = tmp16;
              cResult[38] = tmp17;
              cResult[39] = tmp20;
              cResult[40] = tmp27;
              tmp24 = tmp27;
            }
            let tmp21 = null;
            if (null != subHeader) {
              const obj10 = { style: tmp5.subHeader, children: subHeader };
              tmp21 = metroRequire(React3, obj10);
            }
            cResult[32] = tmp5.subHeader;
            cResult[33] = subHeader;
            cResult[34] = tmp21;
            tmp20 = tmp21;
          }
        }
        const items4 = [, , ];
        ({ content: arr2[0], flex: arr2[1] } = tmp5);
        items4[2] = contentStyle;
        cResult[26] = contentStyle;
        cResult[27] = tmp5.content;
        cResult[28] = tmp5.flex;
        cResult[29] = items4;
        tmp16 = items4;
      }
      const obj11 = { backgroundImageSource, backgroundImageCover };
      const tmp10 = metroRequire(BackgroundImageDefault, obj11);
      cResult[21] = backgroundImageCover;
      cResult[22] = backgroundImageSource;
      cResult[23] = tmp10;
      tmp8 = tmp10;
    }
    const items5 = [, ];
    ({ container: arr[0], flex: arr[1] } = tmp5);
    cResult[18] = tmp5.container;
    cResult[19] = tmp5.flex;
    cResult[20] = items5;
    tmp7 = items5;
  }
  return tmp28;
}) : ((arg0) => {
  let backgroundImageCover;
  let backgroundImageSource;
  let children;
  let contentStyle;
  let headerText;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let subHeader;
  let tmp5Result;
  ({ children, headerText, subHeader, contentStyle } = arg0);
  ({ backgroundImageSource, backgroundImageCover } = arg0);
  const tmp3 = useWideAuthViewDefault();
  const tmp4 = closure_8(tmp3);
  let closure_0 = react.useContext(react3.WideAuthScrollContext);
  if (tmp3) {
    const obj2 = {
      contentInset: { top: 0 },
      automaticallyAdjustContentInsets: false,
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      scrollEventThrottle: 16,
      onScroll(nativeEvent) {
          return closure_0(nativeEvent.nativeEvent.contentOffset.y > 0);
        },
      style: tmp4.container,
      contentContainerStyle: items,
      children: items1
    };
    items = [tmp4.content, contentStyle];
    let tmp15 = null;
    if (null != headerText) {
      const obj3 = { children: headerText };
      tmp15 = metroRequire(AuthHeaderDefault, obj3);
    }
    items1 = [tmp15, , ];
    let tmp17 = null;
    if (null != subHeader) {
      const obj4 = { style: tmp4.subHeader, children: subHeader };
      tmp17 = metroRequire(React3, obj4);
    }
    items1[1] = tmp17;
    items1[2] = children;
    tmp5Result = metroImportDefault(hasOwnProperty, obj2);
  } else {
    const obj = { style: items2, children: items3 };
    items2 = [, ];
    ({ container: arr[0], flex: arr[1] } = tmp4);
    const obj5 = { backgroundImageSource, backgroundImageCover };
    items3 = [metroRequire(BackgroundImageDefault, obj5), metroRequire(AuthNavbarPlaceholderDefault, {}), ];
    const obj6 = { contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp4.flex, contentContainerStyle: items4, children: items5 };
    items4 = [, , ];
    ({ content: arr3[0], flex: arr3[1] } = tmp4);
    items4[2] = contentStyle;
    let tmp7Result = null;
    if (null != headerText) {
      const obj7 = { children: headerText };
      tmp7Result = metroRequire(AuthHeaderDefault, obj7);
    }
    items5 = [tmp7Result, , ];
    let tmp7Result2 = null;
    if (null != subHeader) {
      const obj8 = { style: tmp4.subHeader, children: subHeader };
      tmp7Result2 = metroRequire(React3, obj8);
    }
    items5[1] = tmp7Result2;
    items5[2] = children;
    items3[2] = metroImportDefault(hasOwnProperty, obj6);
    tmp5Result = metroImportDefault(React3, obj);
  }
  return tmp5Result;
});
const result = size.fileFinishedImporting("modules/auth/native/components/AuthFormView.tsx");

export default tmp4;