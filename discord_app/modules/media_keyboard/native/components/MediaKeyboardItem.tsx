// === Module 10379: MediaKeyboardItem ===

// Module 10379 (MediaKeyboardItem)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import ImageIcon from "ImageIcon" /* 5871 */;
import AssetRegistryDefault from "AssetRegistry" /* 10123 */;
import AttachmentIcon from "AttachmentIcon" /* 10369 */;
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators" /* 10381 */;
import CameraIcon from "CameraIcon" /* 10384 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7267 */;
import DeviceConstants from "DeviceConstants" /* 10380 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let isIncluded;

let ColorUtils;
let Pressable;
let c10;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let size1;
let size2;
({ View: closure_4, Pressable } = react_native);
const StyleSheet = react_native.StyleSheet;
({ ALAssetsType: metroImportDefault, DeviceMediaType: metroImportAll } = DeviceConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", paddingHorizontal: 12, alignItems: "center" }, image: obj2, imageContainer: obj3, labelContainer: rect, mediaKeyboardItemLabelContainer: { right: 10 }, icon: size, checkIcon: size1, checkIconContainer: size2, selectedOverlay: obj4, specialButton: { flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8 }, disabled: { opacity: 0.4 }, imageDisabled: { opacity: 0.2 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
rect = { flexDirection: "row", alignItems: "center", backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.6), borderRadius: nativeDefault.radii.xs, paddingHorizontal: 5, paddingVertical: 4, position: "absolute", left: 8, bottom: 8 };
ColorUtils = ColorUtils_mod;
size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE, marginEnd: 4 };
size1 = { width: 14, height: 14, color: nativeDefault.colors.BACKGROUND_BRAND };
size2 = { width: 24, height: 24, position: "absolute", justifyContent: "center", alignItems: "center", right: 6, top: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.WHITE, borderWidth: 1, borderColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.1) };
ColorUtils = ColorUtils_mod;
obj4 = { borderRadius: nativeDefault.radii.xs, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3) };
const merged = Object.assign(StyleSheet.absoluteFillObject);
ColorUtils = ColorUtils_mod;
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let num8;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(6);
  let num = 0;
  if (0 !== arg2) {
    const _Math = Math;
    num = Math.floor((arg2 - 1) / arg1);
  }
  let num3 = 4;
  if (0 === arg0) {
    num3 = 16;
  }
  if (arg2 >= arg1) {
    tmp3 = arg0 === arg1 - 1;
  } else {
    tmp3 = arg0 === arg2 - 1;
  }
  let num6 = 4;
  if (tmp3) {
    num6 = 16;
  }
  let num7 = 4;
  if (Math.floor(arg0 / arg1) === num) {
    num7 = 4;
    if (arg0 % arg1 == 0) {
      num7 = 16;
    }
  }
  if (arg0 === arg2 - 1) {
    num8 = 16;
  } else {
    num8 = 4;
    if (arg2 % arg1 != 0) {
      num8 = 4;
    }
  }
  let num9 = 4;
  if (arg0 % arg1 == 0) {
    num9 = 0;
  }
  if (cResult[0] === num3) {
    if (cResult[1] === num6) {
      if (cResult[2] === num7) {
        if (cResult[3] === num8) {
          let tmp4;
          if (cResult[4] === num9) {
            tmp4 = cResult[5];
          }
          return tmp4;
        }
      }
    }
  }
  const obj2 = { borderTopLeftRadius: num3, borderTopRightRadius: num6, borderBottomLeftRadius: num7, borderBottomRightRadius: num8, marginLeft: num9 };
  cResult[0] = num3;
  cResult[1] = num6;
  cResult[2] = num7;
  cResult[3] = num8;
  cResult[4] = num9;
  cResult[5] = obj2;
  tmp4 = obj2;
}) : ((arg0, arg1, arg2) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const items = [arg0, arg1, arg2];
  return react.useMemo(() => {
    let num7;
    let num8;
    let num9;
    let tmp7;
    let num = 0;
    if (0 !== closure_2) {
      const _Math = Math;
      num = Math.floor((closure_2 - 1) / closure_1);
    }
    let num3 = 4;
    let num4 = 4;
    const rounded = Math.floor(closure_0 / closure_1);
    if (0 === closure_0) {
      num4 = 16;
    }
    const obj = { borderTopLeftRadius: num4, borderTopRightRadius: num7, borderBottomLeftRadius: num8, borderBottomRightRadius: num9, marginLeft: num3 };
    if (closure_2 >= closure_1) {
      tmp7 = closure_0 === closure_1 - 1;
    } else {
      tmp7 = closure_0 === closure_2 - 1;
    }
    num7 = num3;
    if (tmp7) {
      num7 = 16;
    }
    num8 = num3;
    if (rounded === num) {
      num8 = num3;
      if (closure_0 % closure_1 == 0) {
        num8 = 16;
      }
    }
    if (closure_0 === closure_2 - 1) {
      num9 = 16;
    } else {
      num9 = num3;
      if (closure_2 % closure_1 != 0) {
        num9 = num3;
      }
    }
    if (closure_0 % closure_1 == 0) {
      num3 = 0;
    }
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let label;
  let style;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(12);
  ({ label, style, textStyle } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === style) {
    let tmp5;
    let tmp6;
    if (cResult[1] === tmp4.labelContainer) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4.icon) {
      const obj2 = { source: AssetRegistryDefault, style: tmp4.icon };
      const Icon = native.Icon;
      const tmp9 = React4(Icon, obj2);
      cResult[3] = tmp4.icon;
      cResult[4] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === label) {
      let tmp10;
      if (cResult[6] === textStyle) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp6) {
          let tmp13;
          if (cResult[10] === tmp10) {
            tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj3 = { style: tmp5, children: items };
      items = [tmp6, tmp10];
      const tmp16 = authStore(React3, obj3);
      cResult[8] = tmp5;
      cResult[9] = tmp6;
      cResult[10] = tmp10;
      cResult[11] = tmp16;
      tmp13 = tmp16;
    }
    const obj4 = { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label };
    const tmp12 = React4(Text_Text.Text, obj4);
    cResult[5] = label;
    cResult[6] = textStyle;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  const items1 = [tmp4.labelContainer, style];
  cResult[0] = style;
  cResult[1] = tmp4.labelContainer;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  let items;
  let items1;
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = closure_12();
  const obj = { style: items, children: items1 };
  items = [tmp.labelContainer, style];
  const obj2 = { source: AssetRegistryDefault, style: tmp.icon };
  const Icon = native.Icon;
  items1 = [React4(Icon, obj2), React4(Text_Text.Text, { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label })];
  return authStore(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((draftType) => {
  let channelId;
  let disableWhenReachedLimit;
  let disabled;
  let first;
  let index;
  let numItemsPerRow;
  let totalNumItems;
  let uploadLimit;
  let obj = draftType(channelId[10]);
  const cResult = obj.c(67);
  draftType = draftType.draftType;
  const item = draftType.item;
  ({ size, channelId } = draftType);
  const onPressItem = draftType.onPressItem;
  const onLongPressItem = draftType.onLongPressItem;
  const includedUploadIds = draftType.includedUploadIds;
  ({ index, totalNumItems, numItemsPerRow, disabled, uploadLimit, disableWhenReachedLimit } = draftType);
  const tmp4 = closure_12();
  const node = item.node;
  const image = node.image;
  const type = node.type;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [image];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === draftType) {
      if (cResult[3] === image) {
        let tmp7;
        let tmp8;
        if (cResult[4] === includedUploadIds) {
          tmp7 = cResult[5];
          tmp8 = cResult[6];
        }
        const tmpResult = draftType(channelId[15]);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
        isIncluded = tmp11;
        if (cResult[7] === channelId) {
          if (cResult[8] === null != stateFromStoresObject.upload) {
            if (cResult[9] === item) {
              let tmp12;
              if (cResult[10] === onPressItem) {
                tmp12 = cResult[11];
              }
              if (cResult[12] === channelId) {
                if (cResult[13] === null != stateFromStoresObject.upload) {
                  if (cResult[14] === item) {
                    let tmp13;
                    if (cResult[15] === onLongPressItem) {
                      tmp13 = cResult[16];
                    }
                    if (cResult[17] === tmp12) {
                      let tmp14;
                      if (cResult[18] === tmp13) {
                        tmp14 = cResult[19];
                      }
                      const onPress = tmp14.onPress;
                      class U {
                        constructor() {
                          const obj = NativeMenuActionCreatorsDefault;
                          obj.hideNativeMenu();
                          if (onLongPressItem != null) {
                            const obj2 = { channelId, item, isIncluded };
                            tmp2(obj2);
                          }
                        }
                      }
                      if (isIncluded.PHOTO !== type) {
                        if (constants.IMAGE !== type) {
                          if (isIncluded.VIDEO === type) {
                            const _Symbol = Symbol;
                            class U {
                              constructor() {
                                const obj = NativeMenuActionCreatorsDefault;
                                obj.hideNativeMenu();
                                if (onLongPressItem != null) {
                                  const obj2 = { channelId, item, isIncluded };
                                  tmp2(obj2);
                                }
                              }
                            }
                          }
                        }
                        if (isIncluded.VIDEO !== type) {
                          let tmp33;
                          if (constants.VIDEO !== type) {
                            if (isIncluded.PHOTO === type) {
                              const tmpResult2 = draftType(channelId[19]);
                              class U {
                                constructor() {
                                  const obj = NativeMenuActionCreatorsDefault;
                                  obj.hideNativeMenu();
                                  if (onLongPressItem != null) {
                                    const obj2 = { channelId, item, isIncluded };
                                    tmp2(obj2);
                                  }
                                }
                              }
                              if ("image/gif" === tmpResult2.getType(image.uri)) {
                                if (cResult[26] !== tmp4.mediaKeyboardItemLabelContainer) {
                                  let obj2 = { style: null, label: "GIF" };
                                  class U {
                                    constructor() {
                                      const obj = NativeMenuActionCreatorsDefault;
                                      obj.hideNativeMenu();
                                      if (onLongPressItem != null) {
                                        const obj2 = { channelId, item, isIncluded };
                                        tmp2(obj2);
                                      }
                                    }
                                  }
                                  const tmp25 = closure_9(draftType(channelId[20]).Caption, obj2);
                                  cResult[26] = tmp4.mediaKeyboardItemLabelContainer;
                                  cResult[27] = tmp25;
                                }
                              }
                            }
                          }
                          const tmp32 = null == stateFromStoresObject.upload;
                          class U {
                            constructor() {
                              const obj = NativeMenuActionCreatorsDefault;
                              obj.hideNativeMenu();
                              if (onLongPressItem != null) {
                                const obj2 = { channelId, item, isIncluded };
                                tmp2(obj2);
                              }
                            }
                          }
                          if (cResult[28] !== tmp4.checkIcon) {
                            const obj3 = { source: item(channelId[21]), disableColor: false, color: tmp4.checkIcon.color, style: tmp4.checkIcon };
                            class U {
                              constructor() {
                                const obj = NativeMenuActionCreatorsDefault;
                                obj.hideNativeMenu();
                                if (onLongPressItem != null) {
                                  const obj2 = { channelId, item, isIncluded };
                                  tmp2(obj2);
                                }
                              }
                            }
                            const Icon = tmp(channelId[11]).Icon;
                            const tmp35 = closure_9(Icon, obj3);
                            cResult[28] = tmp4.checkIcon;
                            cResult[29] = tmp35;
                            tmp33 = tmp35;
                          } else {
                            tmp33 = cResult[29];
                          }
                          if (cResult[30] === tmp4.checkIconContainer) {
                            class U {
                              constructor() {
                                const obj = NativeMenuActionCreatorsDefault;
                                obj.hideNativeMenu();
                                if (onLongPressItem != null) {
                                  const obj2 = { channelId, item, isIncluded };
                                  tmp2(obj2);
                                }
                              }
                            }
                            if (cResult[33] !== (null != stateFromStoresObject.upload)) {
                              const obj4 = { selected: null != stateFromStoresObject.upload };
                              class U {
                                constructor() {
                                  const obj = NativeMenuActionCreatorsDefault;
                                  obj.hideNativeMenu();
                                  if (onLongPressItem != null) {
                                    const obj2 = { channelId, item, isIncluded };
                                    tmp2(obj2);
                                  }
                                }
                              }
                              cResult[33] = null != stateFromStoresObject.upload;
                              cResult[34] = obj4;
                            }
                            let imageDisabled;
                            if (tmp32) {
                              imageDisabled = tmp4.imageDisabled;
                            }
                            if (cResult[35] === tmp41) {
                              if (cResult[36] === tmp4.imageContainer) {
                                let tmp45;
                                if (cResult[39] !== size) {
                                  const size1 = { height: size, width: null };
                                  class U {
                                    constructor() {
                                      const obj = NativeMenuActionCreatorsDefault;
                                      obj.hideNativeMenu();
                                      if (onLongPressItem != null) {
                                        const obj2 = { channelId, item, isIncluded };
                                        tmp2(obj2);
                                      }
                                    }
                                  }
                                  cResult[39] = size;
                                  cResult[40] = size1;
                                  tmp45 = size1;
                                } else {
                                  tmp45 = cResult[40];
                                }
                                class U {
                                  constructor() {
                                    const obj = NativeMenuActionCreatorsDefault;
                                    obj.hideNativeMenu();
                                    if (onLongPressItem != null) {
                                      const obj2 = { channelId, item, isIncluded };
                                      tmp2(obj2);
                                    }
                                  }
                                }
                                const items1 = [tmp4.image, tmp45];
                                cResult[41] = tmp4.image;
                                cResult[42] = tmp45;
                                cResult[43] = items1;
                              }
                            }
                            const items2 = [tmp4.imageContainer, imageDisabled, tmp41];
                            cResult[35] = tmp41;
                            cResult[36] = tmp4.imageContainer;
                            cResult[37] = imageDisabled;
                            cResult[38] = items2;
                          }
                          const obj5 = { style: tmp4.checkIconContainer, children: tmp33 };
                          cResult[30] = tmp4.checkIconContainer;
                          cResult[31] = tmp33;
                          cResult[32] = closure_9(onLongPressItem, obj5);
                          const tmp39 = closure_9(onLongPressItem, obj5);
                        }
                        class U {
                          constructor() {
                            const obj = NativeMenuActionCreatorsDefault;
                            obj.hideNativeMenu();
                            if (onLongPressItem != null) {
                              const obj2 = { channelId, item, isIncluded };
                              tmp2(obj2);
                            }
                          }
                        }
                        if (cResult[24] !== tmp26) {
                          class U {
                            constructor() {
                              const obj = NativeMenuActionCreatorsDefault;
                              obj.hideNativeMenu();
                              if (onLongPressItem != null) {
                                const obj2 = { channelId, item, isIncluded };
                                tmp2(obj2);
                              }
                            }
                          }
                          tmp30[0] = tmp26;
                          const tmp31 = closure_9(closure_14, tmp30);
                          cResult[24] = tmp26;
                          cResult[25] = tmp31;
                        }
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                        const string = tmp(channelId[17]).intl.string;
                        class U {
                          constructor() {
                            const obj = NativeMenuActionCreatorsDefault;
                            obj.hideNativeMenu();
                            if (onLongPressItem != null) {
                              const obj2 = { channelId, item, isIncluded };
                              tmp2(obj2);
                            }
                          }
                        }
                        cResult[20] = tmp21;
                      }
                    }
                    class U {
                      constructor() {
                        const obj = NativeMenuActionCreatorsDefault;
                        obj.hideNativeMenu();
                        if (onLongPressItem != null) {
                          const obj2 = { channelId, item, isIncluded };
                          tmp2(obj2);
                        }
                      }
                    }
                    tmp15[0] = tmp12;
                    tmp15[1] = tmp13;
                    cResult[17] = tmp12;
                    cResult[18] = tmp13;
                    cResult[19] = tmp15;
                    tmp14 = tmp15;
                  }
                }
              }
              class U {
                constructor() {
                  const obj = NativeMenuActionCreatorsDefault;
                  obj.hideNativeMenu();
                  if (onLongPressItem != null) {
                    const obj2 = { channelId, item, isIncluded };
                    tmp2(obj2);
                  }
                }
              }
              cResult[12] = channelId;
              cResult[13] = null != stateFromStoresObject.upload;
              cResult[14] = item;
              cResult[15] = onLongPressItem;
              cResult[16] = U;
              tmp13 = U;
            }
          }
        }
        const fn2 = function z() {
          const obj = NativeMenuActionCreatorsDefault;
          obj.hideNativeMenu();
          const obj2 = { channelId, item, isIncluded };
          onPressItem(obj2);
        };
        cResult[7] = channelId;
        cResult[8] = null != stateFromStoresObject.upload;
        cResult[9] = item;
        cResult[10] = onPressItem;
        cResult[11] = fn2;
        tmp12 = fn2;
      }
    }
  }
  const fn = function s() {
    let length;
    let obj = {
      upload: UploadAttachmentStore.findUpload(channelId, draftType, (id) => {
        const obj = draftType(channelId[14]);
        let doesImageMatchUploadResult = obj.doesImageMatchUpload(image, id);
        if (doesImageMatchUploadResult) {
          doesImageMatchUploadResult = null == includedUploadIds || includedUploadIds.includes(id.id);
          null == includedUploadIds || includedUploadIds.includes(id.id);
        }
        return doesImageMatchUploadResult;
      }),
      uploadCount: length
    };
    length = undefined;
    if (includedUploadIds != null) {
      length = includedUploadIds.length;
    }
    if (length == null) {
      length = UploadAttachmentStore.getUploadCount(channelId, draftType);
    }
    return obj;
  };
  const items3 = [channelId, draftType, image, includedUploadIds];
  cResult[1] = channelId;
  cResult[2] = draftType;
  cResult[3] = image;
  cResult[4] = includedUploadIds;
  cResult[5] = fn;
  cResult[6] = items3;
  tmp8 = items3;
  tmp7 = fn;
}) : ((draftType) => {
  let Icon;
  let channelId;
  let closure_7;
  let disableWhenReachedLimit;
  let disabled;
  let index;
  let items3;
  let items4;
  let items5;
  let items6;
  let numItemsPerRow;
  let obj4;
  let obj6;
  let size2;
  let size3;
  let tmp2Result2;
  let totalNumItems;
  let uploadLimit;
  draftType = draftType.draftType;
  const item = draftType.item;
  ({ size, channelId } = draftType);
  const onPressItem = draftType.onPressItem;
  const onLongPressItem = draftType.onLongPressItem;
  const includedUploadIds = draftType.includedUploadIds;
  ({ index, totalNumItems, numItemsPerRow, disabled, uploadLimit, disableWhenReachedLimit } = draftType);
  const tmp = closure_12();
  const node = item.node;
  const image = node.image;
  const type = node.type;
  const tmp2 = draftType;
  let obj = draftType(channelId[15]);
  const items = [image];
  const items1 = [channelId, draftType, image, includedUploadIds];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let length;
    let obj = {
      upload: UploadAttachmentStore.findUpload(channelId, draftType, (id) => {
        const obj = draftType(channelId[14]);
        let doesImageMatchUploadResult = obj.doesImageMatchUpload(image, id);
        if (doesImageMatchUploadResult) {
          doesImageMatchUploadResult = null == includedUploadIds || includedUploadIds.includes(id.id);
          null == includedUploadIds || includedUploadIds.includes(id.id);
        }
        return doesImageMatchUploadResult;
      }),
      uploadCount: length
    };
    length = undefined;
    if (includedUploadIds != null) {
      length = includedUploadIds.length;
    }
    if (length == null) {
      length = UploadAttachmentStore.getUploadCount(channelId, draftType);
    }
    return obj;
  }, items1);
  isIncluded = tmp5;
  const items2 = [channelId, item, null != stateFromStoresObject.upload, onPressItem, onLongPressItem];
  const uploadCount = stateFromStoresObject.uploadCount;
  const memo = onPressItem.useMemo(() => {
    let obj = {
      onPress() {
        const obj = item(channelId[16]);
        obj.hideNativeMenu();
        const obj2 = { channelId, item, isIncluded };
        onPressItem(obj2);
      },
      onLongPress() {
        const obj = item(channelId[16]);
        obj.hideNativeMenu();
        if (onLongPressItem != null) {
          const obj2 = { channelId, item, isIncluded };
          tmp2(obj2);
        }
      }
    };
    return obj;
  }, items2);
  if (isIncluded.PHOTO !== type) {
    let stringResult;
    if (constants.IMAGE !== type) {
      if (isIncluded.VIDEO === type) {
        const intl = tmp2(channelId[17]).intl;
        stringResult = intl.string(tmp2(channelId[17]).t.FlNoSV);
      }
    }
    if (isIncluded.VIDEO !== type) {
      let tmp12;
      if (constants.VIDEO !== type) {
        if (isIncluded.PHOTO === type) {
          tmp12 = null;
          const tmp2Result = tmp2(channelId[19]);
          if ("image/gif" === tmp2Result.getType(image.uri)) {
            let obj2 = { style: tmp.mediaKeyboardItemLabelContainer, label: "GIF" };
            tmp12 = closure_9(tmp2(channelId[20]).Caption, obj2);
          }
        } else {
          tmp12 = null;
        }
      }
      let tmp16 = !tmp5;
      if (tmp16) {
        tmp16 = uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
      }
      const obj3 = { style: tmp.checkIconContainer, children: closure_9(Icon, obj4) };
      obj4 = { source: item(channelId[21]), disableColor: false, color: tmp.checkIcon.color, style: tmp.checkIcon };
      Icon = tmp2(channelId[11]).Icon;
      const obj5 = { accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: obj6, onPress: tmp7, onLongPress: tmp8, disabled: tmp16, style: items3, children: items5 };
      items3 = [tmp.imageContainer, , ];
      let imageDisabled;
      obj6 = { selected: null != stateFromStoresObject.upload };
      const tmp21 = closure_9(onLongPressItem, obj3);
      const tmp19 = onLongPressItem;
      const tmp23 = closure_13(index, numItemsPerRow, totalNumItems);
      const tmp25 = includedUploadIds;
      if (tmp16) {
        imageDisabled = tmp.imageDisabled;
      }
      items3[1] = imageDisabled;
      items3[2] = tmp23;
      const obj7 = { resizeMode: "cover", resizeMethod: "resize", style: items4, source: size2, localImageSource: size3 };
      items4 = [tmp.image, ];
      const size1 = { height: size, width: size };
      items4[1] = size1;
      size2 = { uri: image.uri, width: size, height: size, cache: "force-cache" };
      size3 = { uri: image.uri, width: size, height: size };
      items5 = [closure_9(tmp2(channelId[11]).ThumbnailImage, obj7), tmp12, , ];
      let tmp18Result = null;
      if (null != stateFromStoresObject.upload) {
        const obj8 = { style: items6 };
        items6 = [tmp.selectedOverlay, ];
        const size4 = { height: size, width: size };
        items6[1] = size4;
        tmp18Result = closure_9(tmp19, obj8);
      }
      items5[2] = tmp18Result;
      let tmp28 = null;
      if (null != stateFromStoresObject.upload) {
        tmp28 = tmp21;
      }
      items5[3] = tmp28;
      return closure_10(tmp25, obj5);
    }
    const obj9 = { label: tmp2Result2.getTimeFormat(image.playableDuration) };
    tmp2Result2 = tmp2(channelId[18]);
    tmp12 = closure_9(closure_14, obj9);
  }
  const intl2 = tmp2(channelId[17]).intl;
  stringResult = intl2.string(tmp2(channelId[17]).t.SkfkEJ);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isFirstInRow;
  let items;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(13);
  ({ size, isFirstInRow } = arg0);
  const tmp2 = closure_12();
  if (cResult[0] !== isFirstInRow) {
    const tmp4 = !isFirstInRow && { marginLeft: 4 };
    cResult[0] = isFirstInRow;
    cResult[1] = tmp4;
    tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.imageContainer) {
    let tmp5;
    let tmp6;
    if (cResult[3] === tmp3) {
      tmp5 = cResult[4];
    }
    if (cResult[5] !== size) {
      const size1 = { height: size, width: size };
      cResult[5] = size;
      cResult[6] = size1;
      tmp6 = size1;
    } else {
      tmp6 = cResult[6];
    }
    if (cResult[7] === tmp2.image) {
      let tmp7;
      if (cResult[8] === tmp6) {
        tmp7 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        let tmp11;
        if (cResult[11] === tmp7) {
          tmp11 = cResult[12];
        }
        return tmp11;
      }
      const obj2 = { style: tmp5, children: tmp7 };
      const tmp14 = React4(React3, obj2);
      cResult[10] = tmp5;
      cResult[11] = tmp7;
      cResult[12] = tmp14;
      tmp11 = tmp14;
    }
    const obj3 = { style: items };
    items = [tmp2.image, tmp6];
    const tmp10 = React4(React3, obj3);
    cResult[7] = tmp2.image;
    cResult[8] = tmp6;
    cResult[9] = tmp10;
    tmp7 = tmp10;
  }
  const items1 = [tmp2.imageContainer, tmp3];
  cResult[2] = tmp2.imageContainer;
  cResult[3] = tmp3;
  cResult[4] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  let isFirstInRow;
  let items1;
  let obj2;
  ({ size, isFirstInRow } = arg0);
  const tmp = closure_12();
  const items = [tmp.imageContainer, ];
  const tmp4 = !isFirstInRow && { marginLeft: 4 };
  items[1] = tmp4;
  const obj = { style: items, children: React4(React3, obj2) };
  obj2 = { style: items1 };
  items1 = [tmp.image, { height: size, width: size }];
  return React4(React3, obj);
});
createStyles = createStyles_mod;
let obj5 = { backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE };
let closure_17 = createStyles.createStyleProperties(obj5);
const __initData = { code: "function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
const __initData2 = { code: "function MediaKeyboardItemTsx2(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let children;
  let disabled;
  let index;
  let numItemsPerRow;
  let onPress;
  let pressedBackgroundColor;
  let sharedValue;
  let tmp7;
  let tmp8;
  let tmp9;
  let totalNumItems;
  let obj = sharedValue(pressedBackgroundColor[10]);
  const cResult = obj.c(20);
  ({ size, onPress, disabled, accessibilityLabel, children } = arg0);
  ({ index, totalNumItems, numItemsPerRow } = arg0);
  const tmp2 = closure_12();
  let obj2 = sharedValue(pressedBackgroundColor[5]);
  sharedValue = obj2.useSharedValue(0);
  const tmp4 = closure_17();
  const backgroundColor = tmp4.backgroundColor;
  pressedBackgroundColor = tmp4.pressedBackgroundColor;
  let obj3 = sharedValue(pressedBackgroundColor[5]);
  const fn = function i() {
    let Easing;
    let interpolateColorResult;
    let obj3;
    let withTiming;
    const obj = { backgroundColor: withTiming(interpolateColorResult, obj3) };
    withTiming = timing.withTiming;
    timing;
    const items = [backgroundColor, pressedBackgroundColor];
    obj3 = { duration: 200, easing: Easing.out(ReanimatedRexport2.Easing.quad) };
    const obj2 = ReanimatedRexport2;
    interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
    Easing = ReanimatedRexport2.Easing;
    return obj;
  };
  fn.__closure = { withTiming: sharedValue(pressedBackgroundColor[22]).withTiming, interpolateColor: sharedValue(pressedBackgroundColor[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: sharedValue(pressedBackgroundColor[5]).Easing };
  fn.__workletHash = 15924448581794;
  fn.__initData = __initData;
  ({ withTiming: sharedValue(pressedBackgroundColor[22]).withTiming, interpolateColor: sharedValue(pressedBackgroundColor[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: sharedValue(pressedBackgroundColor[5]).Easing });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp6 = closure_13(index, numItemsPerRow, totalNumItems);
  if (cResult[0] !== sharedValue) {
    const fn2 = function o() {
      const result = sharedValue.set(1);
    };
    const fn3 = function n() {
      const result = sharedValue.set(0);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn2;
    cResult[2] = fn3;
    tmp8 = fn3;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  if (cResult[3] !== size) {
    const size1 = { width: size, height: size };
    cResult[3] = size;
    cResult[4] = size1;
    tmp9 = size1;
  } else {
    tmp9 = cResult[4];
  }
  let disabled1;
  if (disabled) {
    disabled1 = tmp2.disabled;
  }
  if (cResult[5] === animatedStyle) {
    if (cResult[6] === tmp6) {
      if (cResult[7] === tmp2.imageContainer) {
        if (cResult[8] === tmp2.specialButton) {
          if (cResult[9] === tmp9) {
            let tmp11;
            if (cResult[10] === disabled1) {
              tmp11 = cResult[11];
            }
            if (cResult[12] === accessibilityLabel) {
              if (cResult[13] === children) {
                if (cResult[14] === disabled) {
                  if (cResult[15] === onPress) {
                    if (cResult[16] === tmp7) {
                      if (cResult[17] === tmp8) {
                        let tmp12;
                        if (cResult[18] === tmp11) {
                          tmp12 = cResult[19];
                        }
                        return tmp12;
                      }
                    }
                  }
                }
              }
            }
            const obj5 = { disabled, accessibilityRole: "button", accessibilityLabel, onPressIn: tmp7, onPressOut: tmp8, onPress, style: tmp11, children };
            const tmp15 = closure_9(closure_11, obj5);
            cResult[12] = accessibilityLabel;
            cResult[13] = children;
            cResult[14] = disabled;
            cResult[15] = onPress;
            cResult[16] = tmp7;
            cResult[17] = tmp8;
            cResult[18] = tmp11;
            cResult[19] = tmp15;
            tmp12 = tmp15;
          }
        }
      }
    }
  }
  let items = [animatedStyle, , , , , ];
  ({ imageContainer: arr[1], specialButton: arr[2] } = tmp2);
  items[3] = tmp9;
  items[4] = tmp6;
  items[5] = disabled1;
  cResult[5] = animatedStyle;
  cResult[6] = tmp6;
  cResult[7] = tmp2.imageContainer;
  cResult[8] = tmp2.specialButton;
  cResult[9] = tmp9;
  cResult[10] = disabled1;
  cResult[11] = items;
  tmp11 = items;
}) : ((arg0) => {
  let accessibilityLabel;
  let children;
  let disabled;
  let index;
  let items;
  let numItemsPerRow;
  let onPress;
  let totalNumItems;
  ({ size, disabled } = arg0);
  let sharedValue;
  let pressedBackgroundColor;
  ({ onPress, accessibilityLabel, children, index, totalNumItems, numItemsPerRow } = arg0);
  const tmp = closure_12();
  let obj = sharedValue(pressedBackgroundColor[5]);
  sharedValue = obj.useSharedValue(0);
  const tmp3 = closure_17();
  const backgroundColor = tmp3.backgroundColor;
  pressedBackgroundColor = tmp3.pressedBackgroundColor;
  let obj2 = sharedValue(pressedBackgroundColor[5]);
  const fn = function h() {
    let Easing;
    let interpolateColorResult;
    let obj3;
    let withTiming;
    const obj = { backgroundColor: withTiming(interpolateColorResult, obj3) };
    withTiming = timing.withTiming;
    timing;
    const items = [backgroundColor, pressedBackgroundColor];
    obj3 = { duration: 200, easing: Easing.out(ReanimatedRexport2.Easing.quad) };
    const obj2 = ReanimatedRexport2;
    interpolateColorResult = obj2.interpolateColor(sharedValue.get(), [0, 1], items);
    Easing = ReanimatedRexport2.Easing;
    return obj;
  };
  let obj3 = { withTiming: sharedValue(pressedBackgroundColor[22]).withTiming, interpolateColor: sharedValue(pressedBackgroundColor[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: sharedValue(pressedBackgroundColor[5]).Easing };
  fn.__closure = obj3;
  fn.__workletHash = 8873076780545;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = {
    disabled,
    accessibilityRole: "button",
    accessibilityLabel,
    onPressIn() {
      const result = sharedValue.set(1);
    },
    onPressOut() {
      const result = sharedValue.set(0);
    },
    onPress,
    style: items,
    children
  };
  items = [animatedStyle, , , , , ];
  ({ imageContainer: arr[1], specialButton: arr[2] } = tmp);
  items[3] = { width: size, height: size };
  items[4] = closure_13(index, numItemsPerRow, totalNumItems);
  let disabled1;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items[5] = disabled1;
  return closure_9(closure_11, obj4);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
function isSpecialMediaGridNode(type) {
  let hasItem = "type" in type;
  if (hasItem) {
    const items = ["allphotos", "attach", "camera"];
    hasItem = items.includes(type.type);
  }
  return hasItem;
}
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((draftType) => {
  let channel;
  let disabled;
  let handleAttachPress;
  let handleCameraPress;
  let handleViewAllPhotosPress;
  let items;
  let obj3;
  let obj4;
  let onPressItem;
  let obj = channel(onPressItem[10]);
  const cResult = obj.c(20);
  ({ items, channel } = draftType);
  draftType = draftType.draftType;
  onPressItem = draftType.onPressItem;
  const onLongPressItem = draftType.onLongPressItem;
  const rowIndex = draftType.rowIndex;
  const totalNumItems = draftType.totalNumItems;
  const numPerRow = draftType.numPerRow;
  const includedUploadIds = draftType.includedUploadIds;
  const uploadLimit = draftType.uploadLimit;
  const disableWhenReachedLimit = draftType.disableWhenReachedLimit;
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress, disabled } = draftType);
  const tmp4 = obj3();
  const result = (draftType(onPressItem[23])().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  size = result;
  if (cResult[0] === channel) {
    if (cResult[1] === disableWhenReachedLimit) {
      if (cResult[2] === disabled) {
        if (cResult[3] === draftType) {
          if (cResult[4] === handleAttachPress) {
            if (cResult[5] === handleCameraPress) {
              if (cResult[6] === handleViewAllPhotosPress) {
                if (cResult[7] === includedUploadIds) {
                  if (cResult[8] === items) {
                    if (cResult[9] === numPerRow) {
                      if (cResult[10] === onLongPressItem) {
                        if (cResult[11] === onPressItem) {
                          if (cResult[12] === rowIndex) {
                            if (cResult[13] === result) {
                              if (cResult[14] === totalNumItems) {
                                let tmp6;
                                if (cResult[15] === uploadLimit) {
                                  tmp6 = cResult[16];
                                }
                                if (cResult[17] === tmp6) {
                                  let tmp8;
                                  if (cResult[18] === tmp4.container) {
                                    tmp8 = cResult[19];
                                  }
                                  return tmp8;
                                }
                                let obj2 = { style: tmp4.container, children: tmp6 };
                                const tmp11 = disableWhenReachedLimit(rowIndex, obj2);
                                cResult[17] = tmp6;
                                cResult[18] = tmp4.container;
                                cResult[19] = tmp11;
                                tmp8 = tmp11;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  obj3 = { camera: obj4, allphotos: { text: channel(onPressItem[17]).t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: channel(onPressItem[25]).ImageIcon }, attach: { text: channel(onPressItem[17]).t["8Hvr3+"], onPress: handleAttachPress, Icon: channel(onPressItem[26]).AttachmentIcon } };
  obj4 = { text: tmp(tmp2[17]).t.uje3P9, onPress: handleCameraPress, Icon: tmp(tmp2[24]).CameraIcon };
  ({ text: channel(onPressItem[17]).t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: channel(onPressItem[25]).ImageIcon });
  ({ text: channel(onPressItem[17]).t["8Hvr3+"], onPress: handleAttachPress, Icon: channel(onPressItem[26]).AttachmentIcon });
  const mapped = items.map((type, index) => {
    let Icon;
    let intl;
    let obj4;
    if (null == type) {
      const obj2 = { size, isFirstInRow: 0 === index };
      return React4(closure_16, obj2, index);
    } else {
      let hasItem = "type" in type;
      if (hasItem) {
        const items = ["allphotos", "attach", "camera"];
        hasItem = items.includes(type.type);
      }
      if (hasItem) {
        obj3 = { size, onPress: obj3[type.type].onPress, disabled, accessibilityLabel: intl.string(obj3[type.type].text), index: rowIndex * numPerRow + index, totalNumItems, numItemsPerRow: numPerRow, children: React4(Icon, obj4) };
        intl = intl3.intl;
        Icon = tmp17.Icon;
        obj4 = { color: nativeDefault.colors.ICON_SUBTLE, size: "lg" };
        return React4(closure_20, obj3, index);
      } else {
        const obj = { channelId: channel.id, draftType, index: rowIndex * numPerRow + index, totalNumItems, numItemsPerRow: numPerRow, item: type, includedUploadIds, uploadLimit, disableWhenReachedLimit, size, onPressItem, onLongPressItem, disabled };
        return React4(closure_15, obj, index);
      }
    }
  });
  cResult[0] = channel;
  cResult[1] = disableWhenReachedLimit;
  cResult[2] = disabled;
  cResult[3] = draftType;
  cResult[4] = handleAttachPress;
  cResult[5] = handleCameraPress;
  cResult[6] = handleViewAllPhotosPress;
  cResult[7] = includedUploadIds;
  cResult[8] = items;
  cResult[9] = numPerRow;
  cResult[10] = onLongPressItem;
  cResult[11] = onPressItem;
  cResult[12] = rowIndex;
  cResult[13] = result;
  cResult[14] = totalNumItems;
  cResult[15] = uploadLimit;
  cResult[16] = mapped;
  tmp6 = mapped;
}) : ((arg0) => {
  let closure_10;
  let closure_4;
  let closure_7;
  let closure_8;
  let closure_9;
  let disabled;
  let draftType;
  let handleAttachPress;
  let handleCameraPress;
  let handleViewAllPhotosPress;
  let id;
  let includedUploadIds;
  let items;
  let numPerRow;
  let obj2;
  let obj3;
  let obj4;
  let onLongPressItem;
  let onPressItem;
  let totalNumItems;
  let uploadLimit;
  ({ items, channel: require, draftType: importDefault, onPressItem: dependencyMap, onLongPressItem: react, rowIndex: closure_4, totalNumItems: Pressable, numPerRow } = arg0);
  ({ includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: closure_9, disabled: closure_10 } = arg0);
  let obj;
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress } = arg0);
  const tmp = obj();
  size = (useWindowDimensionsDefault().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  obj = { camera: obj2, allphotos: obj3, attach: obj4 };
  obj2 = { text: intl3.t.uje3P9, onPress: handleCameraPress, Icon: CameraIcon.CameraIcon };
  obj3 = { text: intl3.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: ImageIcon.ImageIcon };
  obj4 = { text: intl3.t["8Hvr3+"], onPress: handleAttachPress, Icon: AttachmentIcon.AttachmentIcon };
  const obj5 = {
    style: tmp.container,
    children: items.map((type, index) => {
      let Icon;
      let intl;
      let obj4;
      if (null == type) {
        const obj2 = { size, isFirstInRow: 0 === index };
        return React4(closure_16, obj2, index);
      } else {
        let hasItem = "type" in type;
        if (hasItem) {
          const items = ["allphotos", "attach", "camera"];
          hasItem = items.includes(type.type);
        }
        if (hasItem) {
          const obj3 = { size, onPress: obj[type.type].onPress, disabled, accessibilityLabel: intl.string(obj[type.type].text), index: closure_4 * numPerRow + index, totalNumItems: Pressable, numItemsPerRow: numPerRow, children: React4(Icon, obj4) };
          intl = intl3.intl;
          Icon = tmp17.Icon;
          obj4 = { color: nativeDefault.colors.ICON_SUBTLE, size: "lg" };
          return React4(closure_20, obj3, index);
        } else {
          obj = { channelId: require.id, draftType: importDefault, index: closure_4 * numPerRow + index, totalNumItems: Pressable, numItemsPerRow: numPerRow, item: type, includedUploadIds, uploadLimit, disableWhenReachedLimit, size, onPressItem: dependencyMap, onLongPressItem: react, disabled };
          return React4(closure_15, obj, index);
        }
      }
    })
  };
  return disableWhenReachedLimit(closure_4, obj5);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardItem.tsx");

export default memoResult;
export const PARENT_PADDING = 24;
export const CHILD_PADDING = 4;
export const SEPARATOR_SIZE = 4;
export const isMediaCameraNode = function isMediaCameraNode(type) {
  return "type" in type && "camera" === type.type;
};
export const isAttachFilesNode = function isAttachFilesNode(type) {
  return "type" in type && "attach" === type.type;
};
export const isViewAllPhotosNode = function isViewAllPhotosNode(type) {
  return "type" in type && "allphotos" === type.type;
};
export { isSpecialMediaGridNode };