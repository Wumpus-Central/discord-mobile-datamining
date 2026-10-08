// discord_app/modules/auth/native/components/AuthFormView.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useWideAuthViewDefault from "../useWideAuthView.tsx";
import WideAuthScrollContext from "WideAuthScrollContext.tsx";
import AuthHeaderDefault from "atoms/AuthHeader.tsx";
import BackgroundImageDefault from "atoms/BackgroundImage.tsx";
import AuthNavbarPlaceholderDefault from "atoms/AuthNavbarPlaceholder.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
    flex: { flex: 1 },
    content: null,
    subHeader: null,
  };
  let num = 0;
  if (arg0) {
    num = 12;
  }
  const obj3 = { paddingTop: num, paddingRight: null, paddingLeft: null, paddingBottom: null, flex: null };
  let num2 = 16;
  if (arg0) {
    num2 = 24;
  }
  obj3.paddingRight = num2;
  let num3 = 16;
  if (arg0) {
    num3 = 24;
  }
  obj3.paddingLeft = num3;
  let num4 = 0;
  if (arg0) {
    num4 = 16;
  }
  obj3.paddingBottom = num4;
  let num5 = 1;
  if (arg0) {
    num5 = 0;
  }
  obj3.flex = num5;
  obj.content = obj3;
  obj.subHeader = { marginTop: 8, alignItems: "center" };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/AuthFormView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AuthFormView(arg0) {
      const cResult = c.c(45);
      ({ children, headerText, subHeader, contentStyle, backgroundImageSource, backgroundImageCover } = arg0);
      const tmp4 = useWideAuthViewDefault();
      let container = closure_8(tmp4);
      const context = noop.useContext(WideAuthScrollContext.WideAuthScrollContext);
      if (tmp4) {
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { top: 0 };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== context) {
          const fn = function h(nativeEvent) {
            return context(nativeEvent.nativeEvent.contentOffset.y > 0);
          };
          cResult[1] = context;
          cResult[2] = fn;
          let tmp32 = fn;
        } else {
          tmp32 = cResult[2];
        }
        if (cResult[3] === contentStyle) {
          if (cResult[4] === container.content) {
            let tmp33 = cResult[5];
          }
          if (cResult[6] !== headerText) {
            let tmp35 = null;
            if (null != headerText) {
              const obj3 = { children: headerText };
              tmp35 = timestampProducer(AuthHeaderDefault, obj3);
            }
            cResult[6] = headerText;
            cResult[7] = tmp35;
            let tmp34 = tmp35;
          } else {
            tmp34 = cResult[7];
          }
          if (cResult[8] === container.subHeader) {
            if (cResult[9] === subHeader) {
              let tmp37 = cResult[10];
            }
            if (cResult[11] === children) {
              if (cResult[12] === container.container) {
                if (cResult[13] === tmp32) {
                  if (cResult[14] === tmp33) {
                    if (cResult[15] === tmp34) {
                    }
                  }
                }
              }
            }
            const obj4 = {
              contentInset: first,
              automaticallyAdjustContentInsets: false,
              keyboardShouldPersistTaps: "handled",
              alwaysBounceVertical: false,
              scrollEventThrottle: 16,
              onScroll: tmp32,
              style: container.container,
              contentContainerStyle: tmp33,
              children: null,
            };
            first = [tmp34, tmp37, children];
            obj4.children = first;
            const tmp44 = React5(hasOwnProperty, obj4);
            cResult[11] = children;
            container = container.container;
            cResult[12] = container;
            cResult[13] = tmp32;
            cResult[14] = tmp33;
            cResult[15] = tmp34;
            cResult[16] = tmp37;
            cResult[17] = tmp44;
          }
          let tmp38 = null;
          if (null != subHeader) {
            const obj5 = { style: container.subHeader, children: subHeader };
            tmp38 = timestampProducer(React4, obj5);
          }
          cResult[8] = container.subHeader;
          cResult[9] = subHeader;
          cResult[10] = tmp38;
          tmp37 = tmp38;
        }
        const items = [container.content, contentStyle];
        cResult[3] = contentStyle;
        cResult[4] = container.content;
        cResult[5] = items;
        tmp33 = items;
      } else {
        if (cResult[18] === container.container) {
          if (cResult[19] === container.flex) {
            let tmp6 = cResult[20];
          }
          if (cResult[21] === backgroundImageCover) {
            if (cResult[22] === backgroundImageSource) {
              let tmp7 = cResult[23];
            }
            const _Symbol = Symbol;
            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp13 = timestampProducer(AuthNavbarPlaceholderDefault, {});
              cResult[24] = tmp13;
              let tmp11 = tmp13;
            } else {
              tmp11 = cResult[24];
            }
            const _Symbol2 = Symbol;
            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { top: 0 };
              cResult[25] = obj6;
              let tmp14 = obj6;
            } else {
              tmp14 = cResult[25];
            }
            if (cResult[26] === contentStyle) {
              if (cResult[27] === container.content) {
                if (cResult[28] === container.flex) {
                  let tmp15 = cResult[29];
                }
                if (cResult[30] !== headerText) {
                  let tmp17 = null;
                  if (null != headerText) {
                    const obj7 = { children: headerText };
                    tmp17 = timestampProducer(AuthHeaderDefault, obj7);
                  }
                  cResult[30] = headerText;
                  cResult[31] = tmp17;
                  let tmp16 = tmp17;
                } else {
                  tmp16 = cResult[31];
                }
                if (cResult[32] === container.subHeader) {
                  if (cResult[33] === subHeader) {
                    let tmp19 = cResult[34];
                  }
                  if (cResult[35] === children) {
                    if (cResult[36] === container.flex) {
                      if (cResult[37] === tmp15) {
                        if (cResult[38] === tmp16) {
                          if (cResult[39] === tmp19) {
                            let tmp23 = cResult[40];
                          }
                          if (cResult[41] === tmp6) {
                            if (cResult[42] === tmp7) {
                              if (cResult[43] === tmp23) {
                                let tmp27 = cResult[44];
                              }
                              return tmp27;
                            }
                          }
                          const obj8 = { style: tmp6, children: null };
                          const items1 = [tmp7, tmp11, tmp23];
                          obj8.children = items1;
                          const tmp30 = React5(React4, obj8);
                          cResult[41] = tmp6;
                          cResult[42] = tmp7;
                          cResult[43] = tmp23;
                          cResult[44] = tmp30;
                          tmp27 = tmp30;
                        }
                      }
                    }
                  }
                  const obj9 = {
                    contentInset: tmp14,
                    automaticallyAdjustContentInsets: false,
                    keyboardShouldPersistTaps: "handled",
                    alwaysBounceVertical: false,
                    style: container.flex,
                    contentContainerStyle: tmp15,
                    children: null,
                  };
                  const items2 = [tmp16, tmp19, children];
                  obj9.children = items2;
                  const tmp26 = React5(hasOwnProperty, obj9);
                  cResult[35] = children;
                  cResult[36] = container.flex;
                  cResult[37] = tmp15;
                  cResult[38] = tmp16;
                  cResult[39] = tmp19;
                  cResult[40] = tmp26;
                  tmp23 = tmp26;
                }
                let tmp20 = null;
                if (null != subHeader) {
                  const obj10 = { style: container.subHeader, children: subHeader };
                  tmp20 = timestampProducer(React4, obj10);
                }
                cResult[32] = container.subHeader;
                cResult[33] = subHeader;
                cResult[34] = tmp20;
                tmp19 = tmp20;
              }
            }
            const items3 = [, ,];
            ({ content: arr2[0], flex: arr2[1] } = container);
            items3[2] = contentStyle;
            cResult[26] = contentStyle;
            cResult[27] = container.content;
            cResult[28] = container.flex;
            cResult[29] = items3;
            tmp15 = items3;
          }
          const obj11 = { backgroundImageSource, backgroundImageCover };
          const tmp9 = timestampProducer(BackgroundImageDefault, obj11);
          cResult[21] = backgroundImageCover;
          cResult[22] = backgroundImageSource;
          cResult[23] = tmp9;
          tmp7 = tmp9;
        }
        const items4 = [,];
        ({ container: arr[0], flex: arr[1] } = container);
        cResult[18] = container.container;
        cResult[19] = container.flex;
        cResult[20] = items4;
        tmp6 = items4;
      }
    }
  : function AuthFormView(arg0) {
      ({ children, headerText, subHeader, contentStyle } = arg0);
      ({ backgroundImageSource, backgroundImageCover } = arg0);
      const tmp3 = useWideAuthViewDefault();
      const tmp4 = closure_8(tmp3);
      closure_0 = noop.useContext(WideAuthScrollContext.WideAuthScrollContext);
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
          contentContainerStyle: null,
          children: null,
        };
        const items = [tmp4.content, contentStyle];
        obj2.contentContainerStyle = items;
        let tmp15 = null;
        if (null != headerText) {
          const obj3 = { children: headerText };
          tmp15 = timestampProducer(AuthHeaderDefault, obj3);
        }
        const items1 = [tmp15, ,];
        let tmp17 = null;
        if (null != subHeader) {
          const obj4 = { style: tmp4.subHeader, children: subHeader };
          tmp17 = timestampProducer(React4, obj4);
        }
        items1[1] = tmp17;
        items1[2] = children;
        obj2.children = items1;
        let tmp5Result = React5(hasOwnProperty, obj2);
      } else {
        const obj = { style: null, children: null };
        const items2 = [,];
        ({ container: arr[0], flex: arr[1] } = tmp4);
        obj.style = items2;
        const obj5 = { backgroundImageSource, backgroundImageCover };
        const items3 = [
          timestampProducer(BackgroundImageDefault, obj5),
          timestampProducer(AuthNavbarPlaceholderDefault, {}),
        ];
        const obj6 = {
          contentInset: { top: 0 },
          automaticallyAdjustContentInsets: false,
          keyboardShouldPersistTaps: "handled",
          alwaysBounceVertical: false,
          style: tmp4.flex,
          contentContainerStyle: null,
          children: null,
        };
        const items4 = [, ,];
        ({ content: arr3[0], flex: arr3[1] } = tmp4);
        items4[2] = contentStyle;
        obj6.contentContainerStyle = items4;
        let tmp7Result = null;
        if (null != headerText) {
          const obj7 = { children: headerText };
          tmp7Result = timestampProducer(AuthHeaderDefault, obj7);
        }
        const items5 = [tmp7Result, ,];
        let tmp7Result2 = null;
        if (null != subHeader) {
          const obj8 = { style: tmp4.subHeader, children: subHeader };
          tmp7Result2 = timestampProducer(React4, obj8);
        }
        items5[1] = tmp7Result2;
        items5[2] = children;
        obj6.children = items5;
        items3[2] = React5(hasOwnProperty, obj6);
        obj.children = items3;
        tmp5Result = React5(React4, obj);
      }
      return tmp5Result;
    };
