// === Module 10104: GIFPickerItemActionSheet ===

// Module 10104 (GIFPickerItemActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import GIFPickerActionCreators from "GIFPickerActionCreators" /* 10090 */;
import GifIcon from "GifIcon" /* 10105 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { contentWrapper: { paddingHorizontal: nativeDefault.space.PX_16 }, gifContainer: { flexDirection: "column", alignItems: "center" }, gifImage: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.gifImage = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  const cResult = item(576).c(37);
  item = item.item;
  const tmp4 = closure_7();
  if (cResult[0] !== item.url) {
    const gifUrlKeyResult = tmp(10090).gifUrlKey(item.url);
    cResult[0] = item.url;
    cResult[1] = gifUrlKeyResult;
    let tmp5 = gifUrlKeyResult;
    const tmpResult = tmp(10090);
  } else {
    tmp5 = cResult[1];
  }
  let obj = item(576);
  const isFavoriteGIF = item(10094).useIsFavoriteGIF(tmp5);
  const tmpResult2 = item(10094);
  ({ width, height } = isFavoriteGIF(1484)());
  const bound = Math.min((width - 2 * isFavoriteGIF(587).space.PX_16) / item.width, 0.5 * height / item.height);
  const result = item.width * bound;
  const result1 = item.height * bound;
  if (cResult[2] === result) {
    if (cResult[3] === result1) {
      let tmp12 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function w() {
        isFavoriteGIF(4854).hideActionSheet();
      };
      cResult[5] = fn;
      let tmp13 = fn;
    } else {
      tmp13 = cResult[5];
    }
    dependencyMap = tmp13;
    if (cResult[6] === isFavoriteGIF) {
      if (cResult[7] === item) {
        let tmp14 = cResult[8];
      }
      onPress = tmp14;
      if (cResult[9] !== item.url) {
        const fn2 = function x() {
          dependencyMap();
          ClipboardUtils.copy(item.url, ToastUtils.presentLinkCopied);
        };
        cResult[9] = item.url;
        class B {
          constructor() {
            tmp2 = closure_0;
            tmp3 = closure_2;
            tmp = jsx;
            str = "primary";
            tmp4 = closure_1;
            if (closure_1) {
              str = "destructive";
            }
            obj = { variant: str, onPress: closure_3, text: null, grow: true };
            intl = tmp2(tmp3[12]).intl;
            string = intl.string;
            t = tmp2(tmp3[12]).t;
            if (tmp4) {
              stringResult = string(t["5/NS74"]);
            } else {
              stringResult = string(t.nIH0v8);
            }
            obj.text = stringResult;
            return tmp(closure_0(closure_2[16]).Button, obj);
          }
        }
        let tmp15 = fn2;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] === tmp14) {
        if (cResult[12] === isFavoriteGIF) {
          let tmp16 = cResult[13];
        }
        if (cResult[14] === tmp12) {
          if (cResult[15] === tmp4.gifImage) {
            let tmp19 = cResult[16];
          }
          if (cResult[17] !== item.src) {
            let obj2 = { uri: item.src };
            cResult[17] = item.src;
            class B {
              constructor() {
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = jsx;
                str = "primary";
                tmp4 = closure_1;
                if (closure_1) {
                  str = "destructive";
                }
                obj = { variant: str, onPress: closure_3, text: null, grow: true };
                intl = tmp2(tmp3[12]).intl;
                string = intl.string;
                t = tmp2(tmp3[12]).t;
                if (tmp4) {
                  stringResult = string(t["5/NS74"]);
                } else {
                  stringResult = string(t.nIH0v8);
                }
                obj.text = stringResult;
                return tmp(closure_0(closure_2[16]).Button, obj);
              }
            }
            cResult[18] = obj2;
            let tmp20 = obj2;
          } else {
            tmp20 = cResult[18];
          }
          if (cResult[19] === tmp19) {
            if (cResult[20] === tmp20) {
              let tmp21 = cResult[21];
            }
            if (cResult[22] !== tmp16) {
              cResult[22] = tmp16;
              class B {
                constructor() {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = jsx;
                  str = "primary";
                  tmp4 = closure_1;
                  if (closure_1) {
                    str = "destructive";
                  }
                  obj = { variant: str, onPress: closure_3, text: null, grow: true };
                  intl = tmp2(tmp3[12]).intl;
                  string = intl.string;
                  t = tmp2(tmp3[12]).t;
                  if (tmp4) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  obj.text = stringResult;
                  return tmp(closure_0(closure_2[16]).Button, obj);
                }
              }
              let tmp25 = tmp16();
              const tmp16Result = tmp16();
            } else {
              tmp25 = cResult[23];
            }
            const _Symbol2 = Symbol;
            class B {
              constructor() {
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = jsx;
                str = "primary";
                tmp4 = closure_1;
                if (closure_1) {
                  str = "destructive";
                }
                obj = { variant: str, onPress: closure_3, text: null, grow: true };
                intl = tmp2(tmp3[12]).intl;
                string = intl.string;
                t = tmp2(tmp3[12]).t;
                if (tmp4) {
                  stringResult = string(t["5/NS74"]);
                } else {
                  stringResult = string(t.nIH0v8);
                }
                obj.text = stringResult;
                return tmp(closure_0(closure_2[16]).Button, obj);
              }
            }
            if (cResult[25] !== tmp15) {
              let obj3 = { variant: "secondary", onPress: tmp15, text: tmp28, grow: true };
              class B {
                constructor() {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = jsx;
                  str = "primary";
                  tmp4 = closure_1;
                  if (closure_1) {
                    str = "destructive";
                  }
                  obj = { variant: str, onPress: closure_3, text: null, grow: true };
                  intl = tmp2(tmp3[12]).intl;
                  string = intl.string;
                  t = tmp2(tmp3[12]).t;
                  if (tmp4) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  obj.text = stringResult;
                  return tmp(closure_0(closure_2[16]).Button, obj);
                }
              }
              cResult[25] = tmp15;
              class O {
                constructor() {
                  tmp = closure_2();
                  obj = closure_0(closure_2[7]);
                  if (closure_1) {
                    tmp13 = item;
                    removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                    tmp15 = closure_1;
                    tmp16 = closure_2;
                    obj4 = closure_1(closure_2[11]);
                    obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                    tmp17 = closure_0;
                    tmp18 = closure_2;
                    intl2 = closure_0(closure_2[12]).intl;
                    tmp19 = closure_0;
                    tmp20 = closure_2;
                    obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                    tmp21 = closure_0;
                    tmp22 = closure_2;
                    obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                    openResult = obj4.open(obj1);
                  } else {
                    tmp2 = item;
                    addFavoriteGIFResult = obj.addFavoriteGIF(item);
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    obj2 = closure_1(closure_2[11]);
                    obj6 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    intl = closure_0(closure_2[12]).intl;
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj6.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj6.IconComponent = closure_0(closure_2[13]).GifIcon;
                    openResult1 = obj2.open(obj6);
                  }
                  return;
                }
              }
              cResult[26] = tmp31;
              let tmp29 = tmp31;
            } else {
              tmp29 = cResult[26];
            }
            if (cResult[27] === tmp25) {
              if (cResult[28] === tmp29) {
                let tmp32 = cResult[29];
              }
              if (cResult[30] === tmp4.gifContainer) {
                if (cResult[31] === tmp21) {
                  if (cResult[32] === tmp32) {
                    let tmp34 = cResult[33];
                  }
                  if (cResult[34] === tmp4.contentWrapper) {
                    if (cResult[35] === tmp34) {
                      let tmp39 = cResult[36];
                    }
                    return tmp39;
                  }
                  let obj4 = { startExpanded: true, children: null };
                  class B {
                    constructor() {
                      tmp2 = closure_0;
                      tmp3 = closure_2;
                      tmp = jsx;
                      str = "primary";
                      tmp4 = closure_1;
                      if (closure_1) {
                        str = "destructive";
                      }
                      obj = { variant: str, onPress: closure_3, text: null, grow: true };
                      intl = tmp2(tmp3[12]).intl;
                      string = intl.string;
                      t = tmp2(tmp3[12]).t;
                      if (tmp4) {
                        stringResult = string(t["5/NS74"]);
                      } else {
                        stringResult = string(t.nIH0v8);
                      }
                      obj.text = stringResult;
                      return tmp(closure_0(closure_2[16]).Button, obj);
                    }
                  }
                  let obj5 = { style: tmp17, children: null };
                  class O {
                    constructor() {
                      tmp = closure_2();
                      obj = closure_0(closure_2[7]);
                      if (closure_1) {
                        tmp13 = item;
                        removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                        tmp15 = closure_1;
                        tmp16 = closure_2;
                        obj4 = closure_1(closure_2[11]);
                        obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                        tmp17 = closure_0;
                        tmp18 = closure_2;
                        intl2 = closure_0(closure_2[12]).intl;
                        tmp19 = closure_0;
                        tmp20 = closure_2;
                        obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                        tmp21 = closure_0;
                        tmp22 = closure_2;
                        obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                        openResult = obj4.open(obj1);
                      } else {
                        tmp2 = item;
                        addFavoriteGIFResult = obj.addFavoriteGIF(item);
                        tmp4 = closure_1;
                        tmp5 = closure_2;
                        obj2 = closure_1(closure_2[11]);
                        obj6 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        intl = closure_0(closure_2[12]).intl;
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        obj6.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj6.IconComponent = closure_0(closure_2[13]).GifIcon;
                        openResult1 = obj2.open(obj6);
                      }
                      return;
                    }
                  }
                  obj4.children = closure_5(View, obj5);
                  const tmp41 = closure_5(tmp(6645).BottomSheet, obj4);
                  cResult[34] = tmp4.contentWrapper;
                  cResult[35] = tmp34;
                  cResult[36] = tmp41;
                  tmp39 = tmp41;
                }
              }
              class B {
                constructor() {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  tmp = jsx;
                  str = "primary";
                  tmp4 = closure_1;
                  if (closure_1) {
                    str = "destructive";
                  }
                  obj = { variant: str, onPress: closure_3, text: null, grow: true };
                  intl = tmp2(tmp3[12]).intl;
                  string = intl.string;
                  t = tmp2(tmp3[12]).t;
                  if (tmp4) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  obj.text = stringResult;
                  return tmp(closure_0(closure_2[16]).Button, obj);
                }
              }
              tmp37[0] = tmp18;
              const items = [, ];
              class O {
                constructor() {
                  tmp = closure_2();
                  obj = closure_0(closure_2[7]);
                  if (closure_1) {
                    tmp13 = item;
                    removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                    tmp15 = closure_1;
                    tmp16 = closure_2;
                    obj4 = closure_1(closure_2[11]);
                    obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                    tmp17 = closure_0;
                    tmp18 = closure_2;
                    intl2 = closure_0(closure_2[12]).intl;
                    tmp19 = closure_0;
                    tmp20 = closure_2;
                    obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                    tmp21 = closure_0;
                    tmp22 = closure_2;
                    obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                    openResult = obj4.open(obj1);
                  } else {
                    tmp2 = item;
                    addFavoriteGIFResult = obj.addFavoriteGIF(item);
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    obj2 = closure_1(closure_2[11]);
                    obj6 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    intl = closure_0(closure_2[12]).intl;
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj6.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj6.IconComponent = closure_0(closure_2[13]).GifIcon;
                    openResult1 = obj2.open(obj6);
                  }
                  return;
                }
              }
              items[1] = tmp32;
              tmp37[1] = items;
              const tmp38 = closure_6(View, tmp37);
              cResult[30] = tmp4.gifContainer;
              cResult[31] = tmp21;
              cResult[32] = tmp32;
              cResult[33] = tmp38;
              tmp34 = tmp38;
            }
            class O {
              constructor() {
                tmp = closure_2();
                obj = closure_0(closure_2[7]);
                if (closure_1) {
                  tmp13 = item;
                  removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                  tmp15 = closure_1;
                  tmp16 = closure_2;
                  obj4 = closure_1(closure_2[11]);
                  obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                  tmp17 = closure_0;
                  tmp18 = closure_2;
                  intl2 = closure_0(closure_2[12]).intl;
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                  openResult = obj4.open(obj1);
                } else {
                  tmp2 = item;
                  addFavoriteGIFResult = obj.addFavoriteGIF(item);
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj2 = closure_1(closure_2[11]);
                  obj6 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  intl = closure_0(closure_2[12]).intl;
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  obj6.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj6.IconComponent = closure_0(closure_2[13]).GifIcon;
                  openResult1 = obj2.open(obj6);
                }
                return;
              }
            }
            const obj6 = { children: null };
            const items1 = [tmp25, tmp29];
            obj6.children = items1;
            const tmp33 = closure_6(tmp(5592).ButtonGroup, obj6);
            cResult[27] = tmp25;
            cResult[28] = tmp29;
            cResult[29] = tmp33;
            tmp32 = tmp33;
          }
          class B {
            constructor() {
              tmp2 = closure_0;
              tmp3 = closure_2;
              tmp = jsx;
              str = "primary";
              tmp4 = closure_1;
              if (closure_1) {
                str = "destructive";
              }
              obj = { variant: str, onPress: closure_3, text: null, grow: true };
              intl = tmp2(tmp3[12]).intl;
              string = intl.string;
              t = tmp2(tmp3[12]).t;
              if (tmp4) {
                stringResult = string(t["5/NS74"]);
              } else {
                stringResult = string(t.nIH0v8);
              }
              obj.text = stringResult;
              return tmp(closure_0(closure_2[16]).Button, obj);
            }
          }
          tmp23[0] = tmp19;
          tmp23[1] = tmp20;
          class O {
            constructor() {
              tmp = closure_2();
              obj = closure_0(closure_2[7]);
              if (closure_1) {
                tmp13 = item;
                removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                tmp15 = closure_1;
                tmp16 = closure_2;
                obj4 = closure_1(closure_2[11]);
                obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
                tmp17 = closure_0;
                tmp18 = closure_2;
                intl2 = closure_0(closure_2[12]).intl;
                tmp19 = closure_0;
                tmp20 = closure_2;
                obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
                tmp21 = closure_0;
                tmp22 = closure_2;
                obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
                openResult = obj4.open(obj1);
              } else {
                tmp2 = item;
                addFavoriteGIFResult = obj.addFavoriteGIF(item);
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[11]);
                obj6 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
                tmp6 = closure_0;
                tmp7 = closure_2;
                intl = closure_0(closure_2[12]).intl;
                tmp8 = closure_0;
                tmp9 = closure_2;
                obj6.content = intl.string(closure_0(closure_2[12]).t.okQonm);
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj6.IconComponent = closure_0(closure_2[13]).GifIcon;
                openResult1 = obj2.open(obj6);
              }
              return;
            }
          }
          cResult[19] = tmp19;
          cResult[20] = tmp20;
          cResult[21] = tmp24;
          tmp21 = tmp24;
        }
        const items2 = [tmp4.gifImage, ];
        class B {
          constructor() {
            tmp2 = closure_0;
            tmp3 = closure_2;
            tmp = jsx;
            str = "primary";
            tmp4 = closure_1;
            if (closure_1) {
              str = "destructive";
            }
            obj = { variant: str, onPress: closure_3, text: null, grow: true };
            intl = tmp2(tmp3[12]).intl;
            string = intl.string;
            t = tmp2(tmp3[12]).t;
            if (tmp4) {
              stringResult = string(t["5/NS74"]);
            } else {
              stringResult = string(t.nIH0v8);
            }
            obj.text = stringResult;
            return tmp(closure_0(closure_2[16]).Button, obj);
          }
        }
        cResult[14] = tmp12;
        class O {
          constructor() {
            tmp = closure_2();
            obj = closure_0(closure_2[7]);
            if (closure_1) {
              tmp13 = item;
              removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
              tmp15 = closure_1;
              tmp16 = closure_2;
              obj4 = closure_1(closure_2[11]);
              obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
              tmp17 = closure_0;
              tmp18 = closure_2;
              intl2 = closure_0(closure_2[12]).intl;
              tmp19 = closure_0;
              tmp20 = closure_2;
              obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
              tmp21 = closure_0;
              tmp22 = closure_2;
              obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
              openResult = obj4.open(obj1);
            } else {
              tmp2 = item;
              addFavoriteGIFResult = obj.addFavoriteGIF(item);
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj2 = closure_1(closure_2[11]);
              obj6 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
              tmp6 = closure_0;
              tmp7 = closure_2;
              intl = closure_0(closure_2[12]).intl;
              tmp8 = closure_0;
              tmp9 = closure_2;
              obj6.content = intl.string(closure_0(closure_2[12]).t.okQonm);
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj6.IconComponent = closure_0(closure_2[13]).GifIcon;
              openResult1 = obj2.open(obj6);
            }
            return;
          }
        }
        cResult[15] = tmp4.gifImage;
        cResult[16] = items2;
        tmp19 = items2;
      }
      class B {
        constructor() {
          tmp2 = closure_0;
          tmp3 = closure_2;
          tmp = jsx;
          str = "primary";
          tmp4 = closure_1;
          if (closure_1) {
            str = "destructive";
          }
          obj = { variant: str, onPress: closure_3, text: null, grow: true };
          intl = tmp2(tmp3[12]).intl;
          string = intl.string;
          t = tmp2(tmp3[12]).t;
          if (tmp4) {
            stringResult = string(t["5/NS74"]);
          } else {
            stringResult = string(t.nIH0v8);
          }
          obj.text = stringResult;
          return tmp(closure_0(closure_2[16]).Button, obj);
        }
      }
      cResult[11] = tmp14;
      class O {
        constructor() {
          tmp = closure_2();
          obj = closure_0(closure_2[7]);
          if (closure_1) {
            tmp13 = item;
            removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
            tmp15 = closure_1;
            tmp16 = closure_2;
            obj4 = closure_1(closure_2[11]);
            obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
            tmp17 = closure_0;
            tmp18 = closure_2;
            intl2 = closure_0(closure_2[12]).intl;
            tmp19 = closure_0;
            tmp20 = closure_2;
            obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
            tmp21 = closure_0;
            tmp22 = closure_2;
            obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
            openResult = obj4.open(obj1);
          } else {
            tmp2 = item;
            addFavoriteGIFResult = obj.addFavoriteGIF(item);
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj2 = closure_1(closure_2[11]);
            obj6 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
            tmp6 = closure_0;
            tmp7 = closure_2;
            intl = closure_0(closure_2[12]).intl;
            tmp8 = closure_0;
            tmp9 = closure_2;
            obj6.content = intl.string(closure_0(closure_2[12]).t.okQonm);
            tmp10 = closure_0;
            tmp11 = closure_2;
            obj6.IconComponent = closure_0(closure_2[13]).GifIcon;
            openResult1 = obj2.open(obj6);
          }
          return;
        }
      }
      cResult[12] = isFavoriteGIF;
      cResult[13] = B;
      tmp16 = B;
    }
    class O {
      constructor() {
        tmp = closure_2();
        obj = closure_0(closure_2[7]);
        if (closure_1) {
          tmp13 = item;
          removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
          tmp15 = closure_1;
          tmp16 = closure_2;
          obj4 = closure_1(closure_2[11]);
          obj1 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
          tmp17 = closure_0;
          tmp18 = closure_2;
          intl2 = closure_0(closure_2[12]).intl;
          tmp19 = closure_0;
          tmp20 = closure_2;
          obj1.content = intl2.string(closure_0(closure_2[12]).t.in1rga);
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj1.IconComponent = closure_0(closure_2[13]).GifIcon;
          openResult = obj4.open(obj1);
        } else {
          tmp2 = item;
          addFavoriteGIFResult = obj.addFavoriteGIF(item);
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj2 = closure_1(closure_2[11]);
          obj6 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
          tmp6 = closure_0;
          tmp7 = closure_2;
          intl = closure_0(closure_2[12]).intl;
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj6.content = intl.string(closure_0(closure_2[12]).t.okQonm);
          tmp10 = closure_0;
          tmp11 = closure_2;
          obj6.IconComponent = closure_0(closure_2[13]).GifIcon;
          openResult1 = obj2.open(obj6);
        }
        return;
      }
    }
    cResult[6] = isFavoriteGIF;
    cResult[7] = item;
    cResult[8] = O;
    tmp14 = O;
  }
  const size = { width: result, height: result1 };
  cResult[2] = result;
  cResult[3] = result1;
  cResult[4] = size;
  tmp12 = size;
  const tmp8 = isFavoriteGIF(1484)();
}) : ((item) => {
  item = item.item;
  let width;
  const tmp = closure_7();
  let obj = item(width[8]);
  const isFavoriteGIF = obj.useIsFavoriteGIF(item(width[7]).gifUrlKey(item.url));
  let size = isFavoriteGIF(width[9])();
  width = size.width;
  const height = size.height;
  const items = [, , , ];
  ({ width: arr[0], height: arr[1] } = item);
  items[2] = width;
  items[3] = height;
  const memo = height.useMemo(() => {
    const bound = Math.min((width - 2 * nativeDefault.space.PX_16) / item.width, 0.5 * height / item.height);
    const size = { width: item.width * bound, height: item.height * bound };
    return size;
  }, items);
  const callback = height.useCallback(() => {
    isFavoriteGIF(width[10]).hideActionSheet();
  }, []);
  const items1 = [callback, isFavoriteGIF, item];
  const callback1 = height.useCallback(() => {
    callback();
    const obj = GIFPickerActionCreators;
    if (isFavoriteGIF) {
      obj.removeFavoriteGIF(item.url);
      const obj3 = { key: "REMOVED_FROM_FAVORITES", content: null, IconComponent: null };
      const intl2 = util.intl;
      obj3.content = intl2.string(util.t.in1rga);
      obj3.IconComponent = GifIcon.GifIcon;
      ToastActionCreatorsDefault.open(obj3);
    } else {
      obj.addFavoriteGIF(item);
      const obj5 = { key: "ADDED_TO_FAVORITES", content: null, IconComponent: null };
      const intl = util.intl;
      obj5.content = intl.string(util.t.okQonm);
      obj5.IconComponent = GifIcon.GifIcon;
      ToastActionCreatorsDefault.open(obj5);
    }
  }, items1);
  const items2 = [callback, item.url];
  const items3 = [callback1, isFavoriteGIF];
  const callback2 = height.useCallback(() => {
    callback();
    ClipboardUtils.copy(item.url, ToastUtils.presentLinkCopied);
  }, items2);
  const callback3 = height.useCallback(() => {
    let str = "primary";
    if (isFavoriteGIF) {
      str = "destructive";
    }
    const obj = { variant: str, onPress: callback1, text: null, grow: true };
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (isFavoriteGIF) {
      let stringResult = string(t["5/NS74"]);
    } else {
      stringResult = string(t.nIH0v8);
    }
    obj.text = stringResult;
    return hasOwnProperty(components_Button_Button.Button, obj);
  }, items3);
  let obj3 = { startExpanded: true, children: null };
  let obj4 = { style: tmp.contentWrapper, children: null };
  let obj5 = { style: tmp.gifContainer, children: null };
  const obj6 = { style: null, source: { uri: item.src } };
  const items4 = [tmp.gifImage, memo];
  obj6.style = items4;
  const items5 = [callback1(isFavoriteGIF(width[17]), obj6), ];
  const obj7 = { children: null };
  const items6 = [callback3(), ];
  const obj8 = { variant: "secondary", onPress: callback2, text: null, grow: true };
  let intl = item(width[12]).intl;
  obj8.text = intl.string(item(width[12]).t.WqhZss);
  items6[1] = callback1(item(width[16]).Button, obj8);
  obj7.children = items6;
  items5[1] = closure_6(item(width[18]).ButtonGroup, obj7);
  obj5.children = items5;
  obj4.children = closure_6(callback, obj5);
  obj3.children = callback1(callback, obj4);
  return callback1(item(width[19]).BottomSheet, obj3);
});