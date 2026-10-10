// discord_app/modules/gif_picker/native/GIFPickerItemActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import GIFPickerActionCreators from "../../../actions/GIFPickerActionCreators.tsx";
import GifIcon from "../../../design/components/Icon/native/redesign/generated/GifIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  contentWrapper: { paddingHorizontal: nativeDefault.space.PX_16 },
  gifContainer: { flexDirection: "column", alignItems: "center" },
  gifImage: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.gifImage = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let size = fn(2);
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GIFPickerItemActionSheet(item) {
      const cResult = item(576).c(37);
      item = item.item;
      const tmp4 = closure_7();
      if (cResult[0] !== item.url) {
        const gifUrlKeyResult = tmp(9735).gifUrlKey(item.url);
        cResult[0] = item.url;
        cResult[1] = gifUrlKeyResult;
        let tmp5 = gifUrlKeyResult;
        const tmpResult = tmp(9735);
      } else {
        tmp5 = cResult[1];
      }
      let obj = item(576);
      const isFavoriteGIF = item(9739).useIsFavoriteGIF(tmp5);
      const tmpResult2 = item(9739);
      ({ width, height } = isFavoriteGIF(1497)());
      const bound = Math.min((width - 2 * isFavoriteGIF(587).space.PX_16) / item.width, (0.5 * height) / item.height);
      const result = item.width * bound;
      const result1 = item.height * bound;
      if (cResult[2] === result) {
        if (cResult[3] === result1) {
          let tmp12 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function w() {
            isFavoriteGIF(5056).hideActionSheet();
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
            class R {
              constructor() {
                tmp = closure_2();
                obj = closure_0(closure_2[14]);
                copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                return;
              }
            }
            cResult[9] = item.url;
            class P {
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
          } else {
            class R {
              constructor() {
                tmp = closure_2();
                obj = closure_0(closure_2[14]);
                copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                return;
              }
            }
          }
          if (cResult[11] === tmp14) {
            class R {
              constructor() {
                tmp = closure_2();
                obj = closure_0(closure_2[14]);
                copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                return;
              }
            }
            if (cResult[14] === tmp12) {
              class R {
                constructor() {
                  tmp = closure_2();
                  obj = closure_0(closure_2[14]);
                  copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                  return;
                }
              }
              if (cResult[17] !== item.src) {
                class R {
                  constructor() {
                    tmp = closure_2();
                    obj = closure_0(closure_2[14]);
                    copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                    return;
                  }
                }
                tmp20[0] = item.src;
                cResult[17] = item.src;
                class P {
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
                cResult[18] = tmp20;
              } else {
                class R {
                  constructor() {
                    tmp = closure_2();
                    obj = closure_0(closure_2[14]);
                    copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                    return;
                  }
                }
              }
              if (cResult[19] === tmp18) {
                class R {
                  constructor() {
                    tmp = closure_2();
                    obj = closure_0(closure_2[14]);
                    copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                    return;
                  }
                }
                if (cResult[22] !== P) {
                  class R {
                    constructor() {
                      tmp = closure_2();
                      obj = closure_0(closure_2[14]);
                      copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                      return;
                    }
                  }
                  cResult[22] = P;
                  class P {
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
                } else {
                  class R {
                    constructor() {
                      tmp = closure_2();
                      obj = closure_0(closure_2[14]);
                      copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                      return;
                    }
                  }
                }
                const _Symbol2 = Symbol;
                class P {
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
                if (cResult[25] !== R) {
                  class R {
                    constructor() {
                      tmp = closure_2();
                      obj = closure_0(closure_2[14]);
                      copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                      return;
                    }
                  }
                  let obj2 = { variant: "secondary", onPress: R, text: tmp28, grow: true };
                  class P {
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
                  cResult[25] = R;
                  class C {
                    constructor() {
                      tmp = closure_2();
                      obj = closure_0(closure_2[7]);
                      if (closure_1) {
                        tmp13 = item;
                        removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                        tmp15 = closure_1;
                        tmp16 = closure_2;
                        obj4 = closure_1(closure_2[11]);
                        obj1 = { text: null, icon: null };
                        tmp17 = closure_0;
                        tmp18 = closure_2;
                        intl2 = closure_0(closure_2[12]).intl;
                        tmp19 = closure_0;
                        tmp20 = closure_2;
                        obj1.text = intl2.string(closure_0(closure_2[12]).t.in1rga);
                        tmp21 = closure_0;
                        tmp22 = closure_2;
                        obj1.icon = closure_0(closure_2[13]).GifIcon;
                        str2 = "REMOVED_FROM_FAVORITES";
                        openResult = obj4.open("REMOVED_FROM_FAVORITES", obj1);
                      } else {
                        tmp2 = item;
                        addFavoriteGIFResult = obj.addFavoriteGIF(item);
                        tmp4 = closure_1;
                        tmp5 = closure_2;
                        obj2 = closure_1(closure_2[11]);
                        obj6 = { text: null, icon: null };
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        intl = closure_0(closure_2[12]).intl;
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        obj6.text = intl.string(closure_0(closure_2[12]).t.okQonm);
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj6.icon = closure_0(closure_2[13]).GifIcon;
                        str = "ADDED_TO_FAVORITES";
                        openResult1 = obj2.open("ADDED_TO_FAVORITES", obj6);
                      }
                      return;
                    }
                  }
                  cResult[26] = tmp30;
                } else {
                  class R {
                    constructor() {
                      tmp = closure_2();
                      obj = closure_0(closure_2[14]);
                      copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                      return;
                    }
                  }
                }
                if (cResult[27] === tmp26) {
                  class R {
                    constructor() {
                      tmp = closure_2();
                      obj = closure_0(closure_2[14]);
                      copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                      return;
                    }
                  }
                  if (cResult[30] === tmp4.gifContainer) {
                    class R {
                      constructor() {
                        tmp = closure_2();
                        obj = closure_0(closure_2[14]);
                        copyResult = obj.copy(item.url, closure_0(closure_2[15]).presentLinkCopied);
                        return;
                      }
                    }
                  }
                  class P {
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
                  tmp36[0] = tmp17;
                  const items = [,];
                  class C {
                    constructor() {
                      tmp = closure_2();
                      obj = closure_0(closure_2[7]);
                      if (closure_1) {
                        tmp13 = item;
                        removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                        tmp15 = closure_1;
                        tmp16 = closure_2;
                        obj4 = closure_1(closure_2[11]);
                        obj1 = { text: null, icon: null };
                        tmp17 = closure_0;
                        tmp18 = closure_2;
                        intl2 = closure_0(closure_2[12]).intl;
                        tmp19 = closure_0;
                        tmp20 = closure_2;
                        obj1.text = intl2.string(closure_0(closure_2[12]).t.in1rga);
                        tmp21 = closure_0;
                        tmp22 = closure_2;
                        obj1.icon = closure_0(closure_2[13]).GifIcon;
                        str2 = "REMOVED_FROM_FAVORITES";
                        openResult = obj4.open("REMOVED_FROM_FAVORITES", obj1);
                      } else {
                        tmp2 = item;
                        addFavoriteGIFResult = obj.addFavoriteGIF(item);
                        tmp4 = closure_1;
                        tmp5 = closure_2;
                        obj2 = closure_1(closure_2[11]);
                        obj6 = { text: null, icon: null };
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        intl = closure_0(closure_2[12]).intl;
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        obj6.text = intl.string(closure_0(closure_2[12]).t.okQonm);
                        tmp10 = closure_0;
                        tmp11 = closure_2;
                        obj6.icon = closure_0(closure_2[13]).GifIcon;
                        str = "ADDED_TO_FAVORITES";
                        openResult1 = obj2.open("ADDED_TO_FAVORITES", obj6);
                      }
                      return;
                    }
                  }
                  items[1] = tmp31;
                  tmp36[1] = items;
                  const tmp37 = closure_6(View, tmp36);
                  cResult[30] = tmp4.gifContainer;
                  cResult[31] = tmp24;
                  cResult[32] = tmp31;
                  cResult[33] = tmp37;
                }
                class C {
                  constructor() {
                    tmp = closure_2();
                    obj = closure_0(closure_2[7]);
                    if (closure_1) {
                      tmp13 = item;
                      removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                      tmp15 = closure_1;
                      tmp16 = closure_2;
                      obj4 = closure_1(closure_2[11]);
                      obj1 = { text: null, icon: null };
                      tmp17 = closure_0;
                      tmp18 = closure_2;
                      intl2 = closure_0(closure_2[12]).intl;
                      tmp19 = closure_0;
                      tmp20 = closure_2;
                      obj1.text = intl2.string(closure_0(closure_2[12]).t.in1rga);
                      tmp21 = closure_0;
                      tmp22 = closure_2;
                      obj1.icon = closure_0(closure_2[13]).GifIcon;
                      str2 = "REMOVED_FROM_FAVORITES";
                      openResult = obj4.open("REMOVED_FROM_FAVORITES", obj1);
                    } else {
                      tmp2 = item;
                      addFavoriteGIFResult = obj.addFavoriteGIF(item);
                      tmp4 = closure_1;
                      tmp5 = closure_2;
                      obj2 = closure_1(closure_2[11]);
                      obj6 = { text: null, icon: null };
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      intl = closure_0(closure_2[12]).intl;
                      tmp8 = closure_0;
                      tmp9 = closure_2;
                      obj6.text = intl.string(closure_0(closure_2[12]).t.okQonm);
                      tmp10 = closure_0;
                      tmp11 = closure_2;
                      obj6.icon = closure_0(closure_2[13]).GifIcon;
                      str = "ADDED_TO_FAVORITES";
                      openResult1 = obj2.open("ADDED_TO_FAVORITES", obj6);
                    }
                    return;
                  }
                }
                let obj3 = { children: null };
                const items1 = [tmp26, tmp30];
                obj3.children = items1;
                const tmp32 = closure_6(tmp(5958).ButtonGroup, obj3);
                cResult[27] = tmp26;
                cResult[28] = tmp30;
                cResult[29] = tmp32;
              }
              class P {
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
              tmp23[0] = tmp18;
              tmp23[1] = tmp20;
              class C {
                constructor() {
                  tmp = closure_2();
                  obj = closure_0(closure_2[7]);
                  if (closure_1) {
                    tmp13 = item;
                    removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                    tmp15 = closure_1;
                    tmp16 = closure_2;
                    obj4 = closure_1(closure_2[11]);
                    obj1 = { text: null, icon: null };
                    tmp17 = closure_0;
                    tmp18 = closure_2;
                    intl2 = closure_0(closure_2[12]).intl;
                    tmp19 = closure_0;
                    tmp20 = closure_2;
                    obj1.text = intl2.string(closure_0(closure_2[12]).t.in1rga);
                    tmp21 = closure_0;
                    tmp22 = closure_2;
                    obj1.icon = closure_0(closure_2[13]).GifIcon;
                    str2 = "REMOVED_FROM_FAVORITES";
                    openResult = obj4.open("REMOVED_FROM_FAVORITES", obj1);
                  } else {
                    tmp2 = item;
                    addFavoriteGIFResult = obj.addFavoriteGIF(item);
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    obj2 = closure_1(closure_2[11]);
                    obj6 = { text: null, icon: null };
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    intl = closure_0(closure_2[12]).intl;
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj6.text = intl.string(closure_0(closure_2[12]).t.okQonm);
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    obj6.icon = closure_0(closure_2[13]).GifIcon;
                    str = "ADDED_TO_FAVORITES";
                    openResult1 = obj2.open("ADDED_TO_FAVORITES", obj6);
                  }
                  return;
                }
              }
              cResult[19] = tmp18;
              cResult[20] = tmp20;
              cResult[21] = tmp24;
            }
            const items2 = [tmp4.gifImage];
            class P {
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
            class C {
              constructor() {
                tmp = closure_2();
                obj = closure_0(closure_2[7]);
                if (closure_1) {
                  tmp13 = item;
                  removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                  tmp15 = closure_1;
                  tmp16 = closure_2;
                  obj4 = closure_1(closure_2[11]);
                  obj1 = { text: null, icon: null };
                  tmp17 = closure_0;
                  tmp18 = closure_2;
                  intl2 = closure_0(closure_2[12]).intl;
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  obj1.text = intl2.string(closure_0(closure_2[12]).t.in1rga);
                  tmp21 = closure_0;
                  tmp22 = closure_2;
                  obj1.icon = closure_0(closure_2[13]).GifIcon;
                  str2 = "REMOVED_FROM_FAVORITES";
                  openResult = obj4.open("REMOVED_FROM_FAVORITES", obj1);
                } else {
                  tmp2 = item;
                  addFavoriteGIFResult = obj.addFavoriteGIF(item);
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj2 = closure_1(closure_2[11]);
                  obj6 = { text: null, icon: null };
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  intl = closure_0(closure_2[12]).intl;
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  obj6.text = intl.string(closure_0(closure_2[12]).t.okQonm);
                  tmp10 = closure_0;
                  tmp11 = closure_2;
                  obj6.icon = closure_0(closure_2[13]).GifIcon;
                  str = "ADDED_TO_FAVORITES";
                  openResult1 = obj2.open("ADDED_TO_FAVORITES", obj6);
                }
                return;
              }
            }
            cResult[15] = tmp4.gifImage;
            cResult[16] = items2;
          }
          class P {
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
          class C {
            constructor() {
              tmp = closure_2();
              obj = closure_0(closure_2[7]);
              if (closure_1) {
                tmp13 = item;
                removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
                tmp15 = closure_1;
                tmp16 = closure_2;
                obj4 = closure_1(closure_2[11]);
                obj1 = { text: null, icon: null };
                tmp17 = closure_0;
                tmp18 = closure_2;
                intl2 = closure_0(closure_2[12]).intl;
                tmp19 = closure_0;
                tmp20 = closure_2;
                obj1.text = intl2.string(closure_0(closure_2[12]).t.in1rga);
                tmp21 = closure_0;
                tmp22 = closure_2;
                obj1.icon = closure_0(closure_2[13]).GifIcon;
                str2 = "REMOVED_FROM_FAVORITES";
                openResult = obj4.open("REMOVED_FROM_FAVORITES", obj1);
              } else {
                tmp2 = item;
                addFavoriteGIFResult = obj.addFavoriteGIF(item);
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj2 = closure_1(closure_2[11]);
                obj6 = { text: null, icon: null };
                tmp6 = closure_0;
                tmp7 = closure_2;
                intl = closure_0(closure_2[12]).intl;
                tmp8 = closure_0;
                tmp9 = closure_2;
                obj6.text = intl.string(closure_0(closure_2[12]).t.okQonm);
                tmp10 = closure_0;
                tmp11 = closure_2;
                obj6.icon = closure_0(closure_2[13]).GifIcon;
                str = "ADDED_TO_FAVORITES";
                openResult1 = obj2.open("ADDED_TO_FAVORITES", obj6);
              }
              return;
            }
          }
          cResult[12] = isFavoriteGIF;
          cResult[13] = P;
        }
        class C {
          constructor() {
            tmp = closure_2();
            obj = closure_0(closure_2[7]);
            if (closure_1) {
              tmp13 = item;
              removeFavoriteGIFResult = obj.removeFavoriteGIF(item.url);
              tmp15 = closure_1;
              tmp16 = closure_2;
              obj4 = closure_1(closure_2[11]);
              obj1 = { text: null, icon: null };
              tmp17 = closure_0;
              tmp18 = closure_2;
              intl2 = closure_0(closure_2[12]).intl;
              tmp19 = closure_0;
              tmp20 = closure_2;
              obj1.text = intl2.string(closure_0(closure_2[12]).t.in1rga);
              tmp21 = closure_0;
              tmp22 = closure_2;
              obj1.icon = closure_0(closure_2[13]).GifIcon;
              str2 = "REMOVED_FROM_FAVORITES";
              openResult = obj4.open("REMOVED_FROM_FAVORITES", obj1);
            } else {
              tmp2 = item;
              addFavoriteGIFResult = obj.addFavoriteGIF(item);
              tmp4 = closure_1;
              tmp5 = closure_2;
              obj2 = closure_1(closure_2[11]);
              obj6 = { text: null, icon: null };
              tmp6 = closure_0;
              tmp7 = closure_2;
              intl = closure_0(closure_2[12]).intl;
              tmp8 = closure_0;
              tmp9 = closure_2;
              obj6.text = intl.string(closure_0(closure_2[12]).t.okQonm);
              tmp10 = closure_0;
              tmp11 = closure_2;
              obj6.icon = closure_0(closure_2[13]).GifIcon;
              str = "ADDED_TO_FAVORITES";
              openResult1 = obj2.open("ADDED_TO_FAVORITES", obj6);
            }
            return;
          }
        }
        cResult[6] = isFavoriteGIF;
        cResult[7] = item;
        cResult[8] = C;
        tmp14 = C;
      }
      const size = { width: result, height: result1 };
      cResult[2] = result;
      cResult[3] = result1;
      cResult[4] = size;
      tmp12 = size;
      const tmp8 = isFavoriteGIF(1497)();
    }
  : function GIFPickerItemActionSheet(item) {
      item = item.item;
      let width;
      const tmp = closure_7();
      let obj = item(width[8]);
      const isFavoriteGIF = obj.useIsFavoriteGIF(item(width[7]).gifUrlKey(item.url));
      let size = isFavoriteGIF(width[9])();
      width = size.width;
      const height = size.height;
      const items = [, , ,];
      ({ width: arr[0], height: arr[1] } = item);
      items[2] = width;
      items[3] = height;
      const memo = height.useMemo(() => {
        const bound = Math.min((width - 2 * nativeDefault.space.PX_16) / item.width, (0.5 * height) / item.height);
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
          const obj3 = { text: null, icon: null };
          const intl2 = util.intl;
          obj3.text = intl2.string(util.t.in1rga);
          obj3.icon = GifIcon.GifIcon;
          ToastActionCreatorsDefault.open("REMOVED_FROM_FAVORITES", obj3);
        } else {
          obj.addFavoriteGIF(item);
          const obj5 = { text: null, icon: null };
          const intl = util.intl;
          obj5.text = intl.string(util.t.okQonm);
          obj5.icon = GifIcon.GifIcon;
          ToastActionCreatorsDefault.open("ADDED_TO_FAVORITES", obj5);
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
      const items5 = [callback1(isFavoriteGIF(width[17]), obj6)];
      const obj7 = { children: null };
      const items6 = [callback3()];
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
    };
