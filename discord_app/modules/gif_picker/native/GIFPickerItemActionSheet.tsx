// discord_app/modules/gif_picker/native/GIFPickerItemActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import GIFPickerActionCreators from "../../../actions/GIFPickerActionCreators.tsx";
import GifIcon from "../../../design/components/Icon/native/redesign/generated/GifIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, dependencyMap, item, onPress;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentWrapper: obj2, gifContainer: { flexDirection: "column", alignItems: "center" }, gifImage: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (item) => {
      let closure_2;
      let height;
      let items1;
      let obj5;
      let tmp5;
      let width;
      let obj = item(576);
      const cResult = obj.c(37);
      item = item.item;
      const tmp4 = closure_7();
      if (cResult[0] !== item.url) {
        const tmpResult = item(10090);
        const gifUrlKeyResult = tmpResult.gifUrlKey(item.url);
        cResult[0] = item.url;
        cResult[1] = gifUrlKeyResult;
        tmp5 = gifUrlKeyResult;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult2 = item(10094);
      const isFavoriteGIF = tmpResult2.useIsFavoriteGIF(tmp5);
      ({ width, height } = isFavoriteGIF(1484)());
      isFavoriteGIF(1484)();
      const bound = Math.min((width - 2 * isFavoriteGIF(587).space.PX_16) / item.width, (0.5 * height) / item.height);
      const result = item.width * bound;
      const result1 = item.height * bound;
      if (cResult[2] === result) {
        let tmp12;
        let tmp13;
        if (cResult[3] === result1) {
          tmp12 = cResult[4];
        }
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function w() {
            const obj = isFavoriteGIF(closure_2[10]);
            obj.hideActionSheet();
          };
          cResult[5] = fn;
          tmp13 = fn;
        } else {
          tmp13 = cResult[5];
        }
        dependencyMap = tmp13;
        if (cResult[6] === isFavoriteGIF) {
          let tmp14;
          let tmp15;
          if (cResult[7] === item) {
            tmp14 = cResult[8];
          }
          onPress = tmp14;
          if (cResult[9] !== item.url) {
            const fn2 = function x() {
              closure_2();
              const obj = ClipboardUtils;
              obj.copy(item.url, ToastUtils.presentLinkCopied);
            };
            cResult[9] = item.url;
            class B {
              constructor() {
                let stringResult;
                let str = "primary";
                const Button = components_Button_Button.Button;
                if (isFavoriteGIF) {
                  str = "destructive";
                }
                const obj = { variant: str, onPress, text: stringResult, grow: true };
                const intl = intl3.intl;
                const string = intl.string;
                const t = intl3.t;
                if (isFavoriteGIF) {
                  stringResult = string(t["5/NS74"]);
                } else {
                  stringResult = string(t.nIH0v8);
                }
                return hasOwnProperty(Button, obj);
              }
            }
            tmp15 = fn2;
          } else {
            tmp15 = cResult[10];
          }
          if (cResult[11] === tmp14) {
            let tmp16;
            if (cResult[12] === isFavoriteGIF) {
              tmp16 = cResult[13];
            }
            if (cResult[14] === tmp12) {
              let tmp19;
              let tmp20;
              if (cResult[15] === tmp4.gifImage) {
                tmp19 = cResult[16];
              }
              if (cResult[17] !== item.src) {
                let obj2 = { uri: item.src };
                cResult[17] = item.src;
                class B {
                  constructor() {
                    let stringResult;
                    let str = "primary";
                    const Button = components_Button_Button.Button;
                    if (isFavoriteGIF) {
                      str = "destructive";
                    }
                    const obj = { variant: str, onPress, text: stringResult, grow: true };
                    const intl = intl3.intl;
                    const string = intl.string;
                    const t = intl3.t;
                    if (isFavoriteGIF) {
                      stringResult = string(t["5/NS74"]);
                    } else {
                      stringResult = string(t.nIH0v8);
                    }
                    return hasOwnProperty(Button, obj);
                  }
                }
                cResult[18] = obj2;
                tmp20 = obj2;
              } else {
                tmp20 = cResult[18];
              }
              if (cResult[19] === tmp19) {
                let tmp21;
                let tmp25;
                let tmp29;
                if (cResult[20] === tmp20) {
                  tmp21 = cResult[21];
                }
                if (cResult[22] !== tmp16) {
                  cResult[22] = tmp16;
                  const tmp16Result = tmp16();
                  class B {
                    constructor() {
                      let stringResult;
                      let str = "primary";
                      const Button = components_Button_Button.Button;
                      if (isFavoriteGIF) {
                        str = "destructive";
                      }
                      const obj = { variant: str, onPress, text: stringResult, grow: true };
                      const intl = intl3.intl;
                      const string = intl.string;
                      const t = intl3.t;
                      if (isFavoriteGIF) {
                        stringResult = string(t["5/NS74"]);
                      } else {
                        stringResult = string(t.nIH0v8);
                      }
                      return hasOwnProperty(Button, obj);
                    }
                  }
                  tmp25 = tmp16Result;
                } else {
                  tmp25 = cResult[23];
                }
                const _Symbol2 = Symbol;
                class B {
                  constructor() {
                    let stringResult;
                    let str = "primary";
                    const Button = components_Button_Button.Button;
                    if (isFavoriteGIF) {
                      str = "destructive";
                    }
                    const obj = { variant: str, onPress, text: stringResult, grow: true };
                    const intl = intl3.intl;
                    const string = intl.string;
                    const t = intl3.t;
                    if (isFavoriteGIF) {
                      stringResult = string(t["5/NS74"]);
                    } else {
                      stringResult = string(t.nIH0v8);
                    }
                    return hasOwnProperty(Button, obj);
                  }
                }
                if (cResult[25] !== tmp15) {
                  let obj3 = { variant: "secondary", onPress: tmp15, text: tmp28, grow: true };
                  class B {
                    constructor() {
                      let stringResult;
                      let str = "primary";
                      const Button = components_Button_Button.Button;
                      if (isFavoriteGIF) {
                        str = "destructive";
                      }
                      const obj = { variant: str, onPress, text: stringResult, grow: true };
                      const intl = intl3.intl;
                      const string = intl.string;
                      const t = intl3.t;
                      if (isFavoriteGIF) {
                        stringResult = string(t["5/NS74"]);
                      } else {
                        stringResult = string(t.nIH0v8);
                      }
                      return hasOwnProperty(Button, obj);
                    }
                  }
                  cResult[25] = tmp15;
                  class O {
                    constructor() {
                      let intl;
                      let intl2;
                      closure_2();
                      const obj = GIFPickerActionCreators;
                      if (isFavoriteGIF) {
                        obj.removeFavoriteGIF(item.url);
                        const obj2 = {
                          key: "REMOVED_FROM_FAVORITES",
                          content: intl2.string(intl3.t.in1rga),
                          IconComponent: GifIcon.GifIcon,
                        };
                        const open2 = ToastActionCreatorsDefault.open;
                        ToastActionCreatorsDefault;
                        intl2 = intl3.intl;
                        open2(obj2);
                      } else {
                        obj.addFavoriteGIF(item);
                        const obj3 = {
                          key: "ADDED_TO_FAVORITES",
                          content: intl.string(intl3.t.okQonm),
                          IconComponent: GifIcon.GifIcon,
                        };
                        const open = ToastActionCreatorsDefault.open;
                        ToastActionCreatorsDefault;
                        intl = intl3.intl;
                        open(obj3);
                      }
                    }
                  }
                  cResult[26] = tmp31;
                  tmp29 = tmp31;
                } else {
                  tmp29 = cResult[26];
                }
                if (cResult[27] === tmp25) {
                  let tmp32;
                  if (cResult[28] === tmp29) {
                    tmp32 = cResult[29];
                  }
                  if (cResult[30] === tmp4.gifContainer) {
                    if (cResult[31] === tmp21) {
                      let tmp34;
                      if (cResult[32] === tmp32) {
                        tmp34 = cResult[33];
                      }
                      if (cResult[34] === tmp4.contentWrapper) {
                        let tmp39;
                        if (cResult[35] === tmp34) {
                          tmp39 = cResult[36];
                        }
                        return tmp39;
                      }
                      const obj4 = { startExpanded: true, children: closure_5(View, obj5) };
                      class B {
                        constructor() {
                          let stringResult;
                          let str = "primary";
                          const Button = components_Button_Button.Button;
                          if (isFavoriteGIF) {
                            str = "destructive";
                          }
                          const obj = { variant: str, onPress, text: stringResult, grow: true };
                          const intl = intl3.intl;
                          const string = intl.string;
                          const t = intl3.t;
                          if (isFavoriteGIF) {
                            stringResult = string(t["5/NS74"]);
                          } else {
                            stringResult = string(t.nIH0v8);
                          }
                          return hasOwnProperty(Button, obj);
                        }
                      }
                      obj5 = { style: tmp17, children: null };
                      class O {
                        constructor() {
                          let intl;
                          let intl2;
                          closure_2();
                          const obj = GIFPickerActionCreators;
                          if (isFavoriteGIF) {
                            obj.removeFavoriteGIF(item.url);
                            const obj2 = {
                              key: "REMOVED_FROM_FAVORITES",
                              content: intl2.string(intl3.t.in1rga),
                              IconComponent: GifIcon.GifIcon,
                            };
                            const open2 = ToastActionCreatorsDefault.open;
                            ToastActionCreatorsDefault;
                            intl2 = intl3.intl;
                            open2(obj2);
                          } else {
                            obj.addFavoriteGIF(item);
                            const obj3 = {
                              key: "ADDED_TO_FAVORITES",
                              content: intl.string(intl3.t.okQonm),
                              IconComponent: GifIcon.GifIcon,
                            };
                            const open = ToastActionCreatorsDefault.open;
                            ToastActionCreatorsDefault;
                            intl = intl3.intl;
                            open(obj3);
                          }
                        }
                      }
                      BottomSheet = tmp(6645).BottomSheet;
                      const tmp41 = closure_5(BottomSheet, obj4);
                      cResult[34] = tmp4.contentWrapper;
                      cResult[35] = tmp34;
                      cResult[36] = tmp41;
                      tmp39 = tmp41;
                    }
                  }
                  class B {
                    constructor() {
                      let stringResult;
                      let str = "primary";
                      const Button = components_Button_Button.Button;
                      if (isFavoriteGIF) {
                        str = "destructive";
                      }
                      const obj = { variant: str, onPress, text: stringResult, grow: true };
                      const intl = intl3.intl;
                      const string = intl.string;
                      const t = intl3.t;
                      if (isFavoriteGIF) {
                        stringResult = string(t["5/NS74"]);
                      } else {
                        stringResult = string(t.nIH0v8);
                      }
                      return hasOwnProperty(Button, obj);
                    }
                  }
                  tmp37[0] = tmp18;
                  const items = [,];
                  class O {
                    constructor() {
                      let intl;
                      let intl2;
                      closure_2();
                      const obj = GIFPickerActionCreators;
                      if (isFavoriteGIF) {
                        obj.removeFavoriteGIF(item.url);
                        const obj2 = {
                          key: "REMOVED_FROM_FAVORITES",
                          content: intl2.string(intl3.t.in1rga),
                          IconComponent: GifIcon.GifIcon,
                        };
                        const open2 = ToastActionCreatorsDefault.open;
                        ToastActionCreatorsDefault;
                        intl2 = intl3.intl;
                        open2(obj2);
                      } else {
                        obj.addFavoriteGIF(item);
                        const obj3 = {
                          key: "ADDED_TO_FAVORITES",
                          content: intl.string(intl3.t.okQonm),
                          IconComponent: GifIcon.GifIcon,
                        };
                        const open = ToastActionCreatorsDefault.open;
                        ToastActionCreatorsDefault;
                        intl = intl3.intl;
                        open(obj3);
                      }
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
                    let intl;
                    let intl2;
                    closure_2();
                    const obj = GIFPickerActionCreators;
                    if (isFavoriteGIF) {
                      obj.removeFavoriteGIF(item.url);
                      const obj2 = {
                        key: "REMOVED_FROM_FAVORITES",
                        content: intl2.string(intl3.t.in1rga),
                        IconComponent: GifIcon.GifIcon,
                      };
                      const open2 = ToastActionCreatorsDefault.open;
                      ToastActionCreatorsDefault;
                      intl2 = intl3.intl;
                      open2(obj2);
                    } else {
                      obj.addFavoriteGIF(item);
                      const obj3 = {
                        key: "ADDED_TO_FAVORITES",
                        content: intl.string(intl3.t.okQonm),
                        IconComponent: GifIcon.GifIcon,
                      };
                      const open = ToastActionCreatorsDefault.open;
                      ToastActionCreatorsDefault;
                      intl = intl3.intl;
                      open(obj3);
                    }
                  }
                }
                const obj6 = { children: items1 };
                items1 = [tmp25, tmp29];
                const tmp33 = closure_6(item(5592).ButtonGroup, obj6);
                cResult[27] = tmp25;
                cResult[28] = tmp29;
                cResult[29] = tmp33;
                tmp32 = tmp33;
              }
              class B {
                constructor() {
                  let stringResult;
                  let str = "primary";
                  const Button = components_Button_Button.Button;
                  if (isFavoriteGIF) {
                    str = "destructive";
                  }
                  const obj = { variant: str, onPress, text: stringResult, grow: true };
                  const intl = intl3.intl;
                  const string = intl.string;
                  const t = intl3.t;
                  if (isFavoriteGIF) {
                    stringResult = string(t["5/NS74"]);
                  } else {
                    stringResult = string(t.nIH0v8);
                  }
                  return hasOwnProperty(Button, obj);
                }
              }
              tmp23[0] = tmp19;
              tmp23[1] = tmp20;
              class O {
                constructor() {
                  let intl;
                  let intl2;
                  closure_2();
                  const obj = GIFPickerActionCreators;
                  if (isFavoriteGIF) {
                    obj.removeFavoriteGIF(item.url);
                    const obj2 = {
                      key: "REMOVED_FROM_FAVORITES",
                      content: intl2.string(intl3.t.in1rga),
                      IconComponent: GifIcon.GifIcon,
                    };
                    const open2 = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl2 = intl3.intl;
                    open2(obj2);
                  } else {
                    obj.addFavoriteGIF(item);
                    const obj3 = {
                      key: "ADDED_TO_FAVORITES",
                      content: intl.string(intl3.t.okQonm),
                      IconComponent: GifIcon.GifIcon,
                    };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl3.intl;
                    open(obj3);
                  }
                }
              }
              cResult[19] = tmp19;
              cResult[20] = tmp20;
              cResult[21] = tmp24;
              tmp21 = tmp24;
            }
            const items2 = [tmp4.gifImage];
            class B {
              constructor() {
                let stringResult;
                let str = "primary";
                const Button = components_Button_Button.Button;
                if (isFavoriteGIF) {
                  str = "destructive";
                }
                const obj = { variant: str, onPress, text: stringResult, grow: true };
                const intl = intl3.intl;
                const string = intl.string;
                const t = intl3.t;
                if (isFavoriteGIF) {
                  stringResult = string(t["5/NS74"]);
                } else {
                  stringResult = string(t.nIH0v8);
                }
                return hasOwnProperty(Button, obj);
              }
            }
            cResult[14] = tmp12;
            class O {
              constructor() {
                let intl;
                let intl2;
                closure_2();
                const obj = GIFPickerActionCreators;
                if (isFavoriteGIF) {
                  obj.removeFavoriteGIF(item.url);
                  const obj2 = {
                    key: "REMOVED_FROM_FAVORITES",
                    content: intl2.string(intl3.t.in1rga),
                    IconComponent: GifIcon.GifIcon,
                  };
                  const open2 = ToastActionCreatorsDefault.open;
                  ToastActionCreatorsDefault;
                  intl2 = intl3.intl;
                  open2(obj2);
                } else {
                  obj.addFavoriteGIF(item);
                  const obj3 = {
                    key: "ADDED_TO_FAVORITES",
                    content: intl.string(intl3.t.okQonm),
                    IconComponent: GifIcon.GifIcon,
                  };
                  const open = ToastActionCreatorsDefault.open;
                  ToastActionCreatorsDefault;
                  intl = intl3.intl;
                  open(obj3);
                }
              }
            }
            cResult[15] = tmp4.gifImage;
            cResult[16] = items2;
            tmp19 = items2;
          }
          class B {
            constructor() {
              let stringResult;
              let str = "primary";
              const Button = components_Button_Button.Button;
              if (isFavoriteGIF) {
                str = "destructive";
              }
              const obj = { variant: str, onPress, text: stringResult, grow: true };
              const intl = intl3.intl;
              const string = intl.string;
              const t = intl3.t;
              if (isFavoriteGIF) {
                stringResult = string(t["5/NS74"]);
              } else {
                stringResult = string(t.nIH0v8);
              }
              return hasOwnProperty(Button, obj);
            }
          }
          cResult[11] = tmp14;
          class O {
            constructor() {
              let intl;
              let intl2;
              closure_2();
              const obj = GIFPickerActionCreators;
              if (isFavoriteGIF) {
                obj.removeFavoriteGIF(item.url);
                const obj2 = {
                  key: "REMOVED_FROM_FAVORITES",
                  content: intl2.string(intl3.t.in1rga),
                  IconComponent: GifIcon.GifIcon,
                };
                const open2 = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl2 = intl3.intl;
                open2(obj2);
              } else {
                obj.addFavoriteGIF(item);
                const obj3 = {
                  key: "ADDED_TO_FAVORITES",
                  content: intl.string(intl3.t.okQonm),
                  IconComponent: GifIcon.GifIcon,
                };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl3.intl;
                open(obj3);
              }
            }
          }
          cResult[12] = isFavoriteGIF;
          cResult[13] = B;
          tmp16 = B;
        }
        class O {
          constructor() {
            let intl;
            let intl2;
            closure_2();
            const obj = GIFPickerActionCreators;
            if (isFavoriteGIF) {
              obj.removeFavoriteGIF(item.url);
              const obj2 = {
                key: "REMOVED_FROM_FAVORITES",
                content: intl2.string(intl3.t.in1rga),
                IconComponent: GifIcon.GifIcon,
              };
              const open2 = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl2 = intl3.intl;
              open2(obj2);
            } else {
              obj.addFavoriteGIF(item);
              const obj3 = {
                key: "ADDED_TO_FAVORITES",
                content: intl.string(intl3.t.okQonm),
                IconComponent: GifIcon.GifIcon,
              };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl3.intl;
              open(obj3);
            }
          }
        }
        cResult[6] = isFavoriteGIF;
        cResult[7] = item;
        cResult[8] = O;
        tmp14 = O;
      }
      size = { width: result, height: result1 };
      cResult[2] = result;
      cResult[3] = result1;
      cResult[4] = size;
      tmp12 = size;
    }
  : (item) => {
      let intl;
      let items4;
      let items5;
      let items6;
      let obj3;
      let obj4;
      item = item.item;
      let width;
      const tmp = closure_7();
      const useIsFavoriteGIF = item(width[8]).useIsFavoriteGIF;
      item(width[8]);
      let obj = item(width[7]);
      const isFavoriteGIF = useIsFavoriteGIF(obj.gifUrlKey(item.url));
      size = isFavoriteGIF(width[9])();
      width = size.width;
      const height = size.height;
      const items = [, , ,];
      ({ width: arr[0], height: arr[1] } = item);
      items[2] = width;
      items[3] = height;
      const memo = height.useMemo(() => {
        const bound = Math.min((width - 2 * nativeDefault.space.PX_16) / item.width, (0.5 * height) / item.height);
        size = { width: item.width * bound, height: item.height * bound };
        return size;
      }, items);
      const callback = height.useCallback(() => {
        const obj = isFavoriteGIF(width[10]);
        obj.hideActionSheet();
      }, []);
      const items1 = [callback, isFavoriteGIF, item];
      const callback1 = height.useCallback(() => {
        let intl;
        let intl2;
        callback();
        const obj = GIFPickerActionCreators;
        if (isFavoriteGIF) {
          obj.removeFavoriteGIF(item.url);
          const obj2 = {
            key: "REMOVED_FROM_FAVORITES",
            content: intl2.string(intl3.t.in1rga),
            IconComponent: GifIcon.GifIcon,
          };
          const open2 = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl2 = intl3.intl;
          open2(obj2);
        } else {
          obj.addFavoriteGIF(item);
          const obj3 = {
            key: "ADDED_TO_FAVORITES",
            content: intl.string(intl3.t.okQonm),
            IconComponent: GifIcon.GifIcon,
          };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl3.intl;
          open(obj3);
        }
      }, items1);
      const items2 = [callback, item.url];
      const items3 = [callback1, isFavoriteGIF];
      const callback2 = height.useCallback(() => {
        callback();
        const obj = ClipboardUtils;
        obj.copy(item.url, ToastUtils.presentLinkCopied);
      }, items2);
      const callback3 = height.useCallback(() => {
        let stringResult;
        let str = "primary";
        const Button = components_Button_Button.Button;
        if (isFavoriteGIF) {
          str = "destructive";
        }
        const obj = { variant: str, onPress: callback1, text: stringResult, grow: true };
        const intl = intl3.intl;
        const string = intl.string;
        const t = intl3.t;
        if (isFavoriteGIF) {
          stringResult = string(t["5/NS74"]);
        } else {
          stringResult = string(t.nIH0v8);
        }
        return hasOwnProperty(Button, obj);
      }, items3);
      let obj2 = { startExpanded: true, children: callback1(callback, obj3) };
      obj3 = { style: tmp.contentWrapper, children: closure_6(callback, obj4) };
      obj4 = { style: tmp.gifContainer, children: items5 };
      BottomSheet = item(width[19]).BottomSheet;
      const obj5 = { style: items4, source: { uri: item.src } };
      items4 = [tmp.gifImage, memo];
      items5 = [callback1(isFavoriteGIF(width[17]), obj5)];
      const obj6 = { children: items6 };
      const ButtonGroup = item(width[18]).ButtonGroup;
      items6 = [callback3()];
      const obj7 = {
        variant: "secondary",
        onPress: callback2,
        text: intl.string(item(width[12]).t.WqhZss),
        grow: true,
      };
      let Button = item(width[16]).Button;
      intl = item(width[12]).intl;
      items6[1] = callback1(Button, obj7);
      items5[1] = closure_6(ButtonGroup, obj6);
      return callback1(BottomSheet, obj2);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerItemActionSheet.tsx");

export default tmp4;
