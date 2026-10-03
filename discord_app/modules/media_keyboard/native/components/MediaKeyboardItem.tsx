// === Module 10379: MediaKeyboardItem ===

// Module 10379 (MediaKeyboardItem)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import timing from "timing" /* 4891 */;
import ImageIcon from "ImageIcon" /* 5871 */;
import _modDef10123 from "module_10123" /* 10123 */;
import AttachmentIcon from "AttachmentIcon" /* 10369 */;
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators" /* 10381 */;
import CameraIcon from "CameraIcon" /* 10384 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7267 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const DeviceConstants = fn(10380);
({ ALAssetsType: closure_7, DeviceMediaType: closure_8 } = DeviceConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = fn(4890);
let obj = { container: { flexDirection: "row", paddingHorizontal: 12, alignItems: "center" }, image: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND }, imageContainer: null, labelContainer: null, mediaKeyboardItemLabelContainer: null, icon: null, checkIcon: null, checkIconContainer: null, selectedOverlay: null, specialButton: null, disabled: null, imageDisabled: null };
let obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
obj.imageContainer = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
const rect = { flexDirection: "row", alignItems: "center", backgroundColor: null, borderRadius: null, paddingHorizontal: 5, paddingVertical: 4, position: "absolute", left: 8, bottom: 8 };
let ColorUtils = fn(4727);
rect.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.6);
rect.borderRadius = nativeDefault.radii.xs;
obj.labelContainer = rect;
obj.mediaKeyboardItemLabelContainer = { right: 10 };
let size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE, marginEnd: 4 };
obj.icon = size;
let size1 = { width: 14, height: 14, color: nativeDefault.colors.BACKGROUND_BRAND };
obj.checkIcon = size1;
let size2 = { width: 24, height: 24, position: "absolute", justifyContent: "center", alignItems: "center", right: 6, top: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.WHITE, borderWidth: 1, borderColor: null };
ColorUtils = fn(4727);
size2.borderColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.1);
obj.checkIconContainer = size2;
let obj5 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj5.borderRadius = nativeDefault.radii.xs;
ColorUtils = fn(4727);
obj5.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3);
obj.selectedOverlay = obj5;
obj.specialButton = { flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8 };
obj.disabled = { opacity: 0.4 };
obj.imageDisabled = { opacity: 0.2 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  const cResult = c.c(6);
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
    let tmp3 = arg0 === arg1 - 1;
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
    let num8 = 16;
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
          if (cResult[4] === num9) {
            let tmp4 = cResult[5];
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
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  const items = [arg0, arg1, arg2];
  return noop.useMemo(() => {
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
    const obj = { borderTopLeftRadius: num4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, marginLeft: null };
    if (closure_2 >= closure_1) {
      let tmp7 = closure_0 === closure_1 - 1;
    } else {
      tmp7 = closure_0 === closure_2 - 1;
    }
    let num7 = num3;
    if (tmp7) {
      num7 = 16;
    }
    obj.borderTopRightRadius = num7;
    let num8 = num3;
    if (rounded === num) {
      num8 = num3;
      if (closure_0 % closure_1 == 0) {
        num8 = 16;
      }
    }
    obj.borderBottomLeftRadius = num8;
    if (closure_0 === closure_2 - 1) {
      let num9 = 16;
    } else {
      num9 = num3;
      if (closure_2 % closure_1 != 0) {
        num9 = num3;
      }
    }
    obj.borderBottomRightRadius = num9;
    if (closure_0 % closure_1 == 0) {
      num3 = 0;
    }
    obj.marginLeft = num3;
    return obj;
  }, items);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ label, style, textStyle } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.labelContainer) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== tmp4.icon) {
      const obj2 = { source: _modDef10123, style: tmp4.icon };
      const tmp9 = options(native.Icon, obj2);
      cResult[3] = tmp4.icon;
      cResult[4] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[5] === label) {
      if (cResult[6] === textStyle) {
        let tmp10 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp10) {
            let tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj3 = { style: tmp5, children: null };
      const items = [tmp6, tmp10];
      obj3.children = items;
      const tmp16 = v65535(React4, obj3);
      cResult[8] = tmp5;
      cResult[9] = tmp6;
      cResult[10] = tmp10;
      cResult[11] = tmp16;
      tmp13 = tmp16;
    }
    const obj4 = { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label };
    const tmp12 = options(Text_Text.Text, obj4);
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
  ({ label, style, textStyle } = arg0);
  const tmp = closure_12();
  const obj = { style: null, children: null };
  const items = [tmp.labelContainer, style];
  obj.style = items;
  const items1 = [options(native.Icon, { source: _modDef10123, style: tmp.icon }), options(Text_Text.Text, { style: textStyle, color: "text-overlay-light", variant: "text-xs/bold", children: label })];
  obj.children = items1;
  return v65535(React4, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((draftType) => {
  const cResult = draftType(channelId[10]).c(67);
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
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === draftType) {
      if (cResult[3] === image) {
        if (cResult[4] === includedUploadIds) {
          let tmp7 = cResult[5];
          let tmp8 = cResult[6];
        }
        const stateFromStoresObject = tmp(channelId[15]).useStateFromStoresObject(first, tmp7, tmp8);
        isIncluded = tmp11;
        if (cResult[7] === channelId) {
          if (cResult[8] === tmp11) {
            if (cResult[9] === item) {
              if (cResult[10] === onPressItem) {
                let tmp12 = cResult[11];
              }
              if (cResult[12] === channelId) {
                if (cResult[13] === tmp11) {
                  if (cResult[14] === item) {
                    if (cResult[15] === onLongPressItem) {
                      let tmp13 = cResult[16];
                    }
                    if (cResult[17] === tmp12) {
                      if (cResult[18] === tmp13) {
                        let tmp14 = cResult[19];
                      }
                      const onPress = tmp14.onPress;
                      class U {
                        constructor() {
                          obj = closure_1(closure_2[16]);
                          hideNativeMenuResult = obj.hideNativeMenu();
                          if (onLongPressItem != null) {
                            obj1 = { channelId: null, item: null, isIncluded: null };
                            tmp3 = channelId;
                            obj1.channelId = channelId;
                            tmp4 = item;
                            obj1.item = item;
                            tmp5 = closure_7;
                            obj1.isIncluded = closure_7;
                            tmp2Result = tmp2(obj1);
                          }
                          return;
                        }
                      }
                      if (isIncluded.PHOTO !== type) {
                        if (constants.IMAGE !== type) {
                          if (tmp16.VIDEO === type) {
                            const _Symbol = Symbol;
                            class U {
                              constructor() {
                                obj = closure_1(closure_2[16]);
                                hideNativeMenuResult = obj.hideNativeMenu();
                                if (onLongPressItem != null) {
                                  obj1 = { channelId: null, item: null, isIncluded: null };
                                  tmp3 = channelId;
                                  obj1.channelId = channelId;
                                  tmp4 = item;
                                  obj1.item = item;
                                  tmp5 = closure_7;
                                  obj1.isIncluded = closure_7;
                                  tmp2Result = tmp2(obj1);
                                }
                                return;
                              }
                            }
                          }
                          if (tmp16.VIDEO !== type) {
                            if (constants.VIDEO !== type) {
                              if (tmp16.PHOTO === type) {
                                class U {
                                  constructor() {
                                    obj = closure_1(closure_2[16]);
                                    hideNativeMenuResult = obj.hideNativeMenu();
                                    if (onLongPressItem != null) {
                                      obj1 = { channelId: null, item: null, isIncluded: null };
                                      tmp3 = channelId;
                                      obj1.channelId = channelId;
                                      tmp4 = item;
                                      obj1.item = item;
                                      tmp5 = closure_7;
                                      obj1.isIncluded = closure_7;
                                      tmp2Result = tmp2(obj1);
                                    }
                                    return;
                                  }
                                }
                                if ("image/gif" === tmpResult2.getType(image.uri)) {
                                  if (cResult[26] !== tmp4.mediaKeyboardItemLabelContainer) {
                                    class U {
                                      constructor() {
                                        obj = closure_1(closure_2[16]);
                                        hideNativeMenuResult = obj.hideNativeMenu();
                                        if (onLongPressItem != null) {
                                          obj1 = { channelId: null, item: null, isIncluded: null };
                                          tmp3 = channelId;
                                          obj1.channelId = channelId;
                                          tmp4 = item;
                                          obj1.item = item;
                                          tmp5 = closure_7;
                                          obj1.isIncluded = closure_7;
                                          tmp2Result = tmp2(obj1);
                                        }
                                        return;
                                      }
                                    }
                                    const tmp26 = closure_9(tmp(channelId[20]).Caption, { style: null, label: "GIF" });
                                    cResult[26] = tmp4.mediaKeyboardItemLabelContainer;
                                    cResult[27] = tmp26;
                                    let obj2 = { style: null, label: "GIF" };
                                  }
                                }
                                tmpResult2 = tmp(channelId[19]);
                              }
                              class U {
                                constructor() {
                                  obj = closure_1(closure_2[16]);
                                  hideNativeMenuResult = obj.hideNativeMenu();
                                  if (onLongPressItem != null) {
                                    obj1 = { channelId: null, item: null, isIncluded: null };
                                    tmp3 = channelId;
                                    obj1.channelId = channelId;
                                    tmp4 = item;
                                    obj1.item = item;
                                    tmp5 = closure_7;
                                    obj1.isIncluded = closure_7;
                                    tmp2Result = tmp2(obj1);
                                  }
                                  return;
                                }
                              }
                              if (cResult[28] !== tmp4.checkIcon) {
                                const obj3 = { source: null, disableColor: false, color: null, style: null };
                                class U {
                                  constructor() {
                                    obj = closure_1(closure_2[16]);
                                    hideNativeMenuResult = obj.hideNativeMenu();
                                    if (onLongPressItem != null) {
                                      obj1 = { channelId: null, item: null, isIncluded: null };
                                      tmp3 = channelId;
                                      obj1.channelId = channelId;
                                      tmp4 = item;
                                      obj1.item = item;
                                      tmp5 = closure_7;
                                      obj1.isIncluded = closure_7;
                                      tmp2Result = tmp2(obj1);
                                    }
                                    return;
                                  }
                                }
                                obj3.source = item(channelId[21]);
                                obj3.color = tmp4.checkIcon.color;
                                obj3.style = tmp4.checkIcon;
                                const tmp37 = closure_9(tmp(channelId[11]).Icon, obj3);
                                cResult[28] = tmp4.checkIcon;
                                cResult[29] = tmp37;
                                let tmp35 = tmp37;
                              } else {
                                tmp35 = cResult[29];
                              }
                              if (cResult[30] === tmp4.checkIconContainer) {
                                class U {
                                  constructor() {
                                    obj = closure_1(closure_2[16]);
                                    hideNativeMenuResult = obj.hideNativeMenu();
                                    if (onLongPressItem != null) {
                                      obj1 = { channelId: null, item: null, isIncluded: null };
                                      tmp3 = channelId;
                                      obj1.channelId = channelId;
                                      tmp4 = item;
                                      obj1.item = item;
                                      tmp5 = closure_7;
                                      obj1.isIncluded = closure_7;
                                      tmp2Result = tmp2(obj1);
                                    }
                                    return;
                                  }
                                }
                                if (cResult[33] !== tmp11) {
                                  const obj4 = { selected: tmp11 };
                                  class U {
                                    constructor() {
                                      obj = closure_1(closure_2[16]);
                                      hideNativeMenuResult = obj.hideNativeMenu();
                                      if (onLongPressItem != null) {
                                        obj1 = { channelId: null, item: null, isIncluded: null };
                                        tmp3 = channelId;
                                        obj1.channelId = channelId;
                                        tmp4 = item;
                                        obj1.item = item;
                                        tmp5 = closure_7;
                                        obj1.isIncluded = closure_7;
                                        tmp2Result = tmp2(obj1);
                                      }
                                      return;
                                    }
                                  }
                                  cResult[33] = tmp11;
                                  cResult[34] = obj4;
                                }
                                let imageDisabled;
                                if (tmp34) {
                                  imageDisabled = tmp4.imageDisabled;
                                }
                                if (cResult[35] === tmp43) {
                                  if (cResult[36] === tmp4.imageContainer) {
                                    if (cResult[39] !== size) {
                                      const size1 = { height: size, width: null };
                                      class U {
                                        constructor() {
                                          obj = closure_1(closure_2[16]);
                                          hideNativeMenuResult = obj.hideNativeMenu();
                                          if (onLongPressItem != null) {
                                            obj1 = { channelId: null, item: null, isIncluded: null };
                                            tmp3 = channelId;
                                            obj1.channelId = channelId;
                                            tmp4 = item;
                                            obj1.item = item;
                                            tmp5 = closure_7;
                                            obj1.isIncluded = closure_7;
                                            tmp2Result = tmp2(obj1);
                                          }
                                          return;
                                        }
                                      }
                                      cResult[39] = size;
                                      cResult[40] = size1;
                                      let tmp47 = size1;
                                    } else {
                                      tmp47 = cResult[40];
                                    }
                                    class U {
                                      constructor() {
                                        obj = closure_1(closure_2[16]);
                                        hideNativeMenuResult = obj.hideNativeMenu();
                                        if (onLongPressItem != null) {
                                          obj1 = { channelId: null, item: null, isIncluded: null };
                                          tmp3 = channelId;
                                          obj1.channelId = channelId;
                                          tmp4 = item;
                                          obj1.item = item;
                                          tmp5 = closure_7;
                                          obj1.isIncluded = closure_7;
                                          tmp2Result = tmp2(obj1);
                                        }
                                        return;
                                      }
                                    }
                                    const items1 = [tmp4.image, tmp47];
                                    cResult[41] = tmp4.image;
                                    cResult[42] = tmp47;
                                    cResult[43] = items1;
                                  }
                                }
                                const items2 = [tmp4.imageContainer, imageDisabled, tmp43];
                                cResult[35] = tmp43;
                                cResult[36] = tmp4.imageContainer;
                                cResult[37] = imageDisabled;
                                cResult[38] = items2;
                              }
                              const obj5 = { style: tmp4.checkIconContainer, children: tmp35 };
                              const tmp41 = closure_9(onLongPressItem, obj5);
                              cResult[30] = tmp4.checkIconContainer;
                              cResult[31] = tmp35;
                              cResult[32] = tmp41;
                              tmp34 = !tmp11;
                            }
                          }
                          class U {
                            constructor() {
                              obj = closure_1(closure_2[16]);
                              hideNativeMenuResult = obj.hideNativeMenu();
                              if (onLongPressItem != null) {
                                obj1 = { channelId: null, item: null, isIncluded: null };
                                tmp3 = channelId;
                                obj1.channelId = channelId;
                                tmp4 = item;
                                obj1.item = item;
                                tmp5 = closure_7;
                                obj1.isIncluded = closure_7;
                                tmp2Result = tmp2(obj1);
                              }
                              return;
                            }
                          }
                          if (cResult[24] !== tmp27) {
                            class U {
                              constructor() {
                                obj = closure_1(closure_2[16]);
                                hideNativeMenuResult = obj.hideNativeMenu();
                                if (onLongPressItem != null) {
                                  obj1 = { channelId: null, item: null, isIncluded: null };
                                  tmp3 = channelId;
                                  obj1.channelId = channelId;
                                  tmp4 = item;
                                  obj1.item = item;
                                  tmp5 = closure_7;
                                  obj1.isIncluded = closure_7;
                                  tmp2Result = tmp2(obj1);
                                }
                                return;
                              }
                            }
                            tmp31[0] = tmp27;
                            const tmp32 = closure_9(closure_14, tmp31);
                            cResult[24] = tmp27;
                            cResult[25] = tmp32;
                          }
                        }
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                        const string = tmp(channelId[17]).intl.string;
                        class U {
                          constructor() {
                            obj = closure_1(closure_2[16]);
                            hideNativeMenuResult = obj.hideNativeMenu();
                            if (onLongPressItem != null) {
                              obj1 = { channelId: null, item: null, isIncluded: null };
                              tmp3 = channelId;
                              obj1.channelId = channelId;
                              tmp4 = item;
                              obj1.item = item;
                              tmp5 = closure_7;
                              obj1.isIncluded = closure_7;
                              tmp2Result = tmp2(obj1);
                            }
                            return;
                          }
                        }
                        cResult[20] = tmp21;
                      }
                    }
                    class U {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        hideNativeMenuResult = obj.hideNativeMenu();
                        if (onLongPressItem != null) {
                          obj1 = { channelId: null, item: null, isIncluded: null };
                          tmp3 = channelId;
                          obj1.channelId = channelId;
                          tmp4 = item;
                          obj1.item = item;
                          tmp5 = closure_7;
                          obj1.isIncluded = closure_7;
                          tmp2Result = tmp2(obj1);
                        }
                        return;
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
                  obj = closure_1(closure_2[16]);
                  hideNativeMenuResult = obj.hideNativeMenu();
                  if (onLongPressItem != null) {
                    obj1 = { channelId: null, item: null, isIncluded: null };
                    tmp3 = channelId;
                    obj1.channelId = channelId;
                    tmp4 = item;
                    obj1.item = item;
                    tmp5 = closure_7;
                    obj1.isIncluded = closure_7;
                    tmp2Result = tmp2(obj1);
                  }
                  return;
                }
              }
              cResult[12] = channelId;
              cResult[13] = tmp11;
              cResult[14] = item;
              cResult[15] = onLongPressItem;
              cResult[16] = U;
              tmp13 = U;
            }
          }
        }
        const fn2 = function z() {
          NativeMenuActionCreatorsDefault.hideNativeMenu();
          onPressItem({ channelId, item, isIncluded });
        };
        cResult[7] = channelId;
        cResult[8] = null != stateFromStoresObject.upload;
        cResult[9] = item;
        cResult[10] = onPressItem;
        cResult[11] = fn2;
        tmp12 = fn2;
        const tmpResult = tmp(channelId[15]);
      }
    }
  }
  const fn = function s() {
    const obj = {
      upload: UploadAttachmentStore.findUpload(channelId, draftType, (id) => {
        let doesImageMatchUploadResult = draftType(channelId[14]).doesImageMatchUpload(image, id);
        if (doesImageMatchUploadResult) {
          doesImageMatchUploadResult = null == includedUploadIds || includedUploadIds.includes(id.id);
          const tmp3 = null == includedUploadIds || includedUploadIds.includes(id.id);
        }
        return doesImageMatchUploadResult;
      }),
      uploadCount: null
    };
    let length;
    if (includedUploadIds != null) {
      length = includedUploadIds.length;
    }
    if (length == null) {
      length = UploadAttachmentStore.getUploadCount(channelId, draftType);
    }
    obj.uploadCount = length;
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
  let obj = draftType(channelId[10]);
}) : ((draftType) => {
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
  const items = [image];
  const items1 = [channelId, draftType, image, includedUploadIds];
  const stateFromStoresObject = draftType(channelId[15]).useStateFromStoresObject(items, () => {
    const obj = {
      upload: UploadAttachmentStore.findUpload(channelId, draftType, (id) => {
        let doesImageMatchUploadResult = draftType(channelId[14]).doesImageMatchUpload(image, id);
        if (doesImageMatchUploadResult) {
          doesImageMatchUploadResult = null == includedUploadIds || includedUploadIds.includes(id.id);
          const tmp3 = null == includedUploadIds || includedUploadIds.includes(id.id);
        }
        return doesImageMatchUploadResult;
      }),
      uploadCount: null
    };
    let length;
    if (includedUploadIds != null) {
      length = includedUploadIds.length;
    }
    if (length == null) {
      length = UploadAttachmentStore.getUploadCount(channelId, draftType);
    }
    obj.uploadCount = length;
    return obj;
  }, items1);
  isIncluded = tmp5;
  const items2 = [channelId, item, null != stateFromStoresObject.upload, onPressItem, onLongPressItem];
  const memo = onPressItem.useMemo(() => ({
    onPress() {
      item(channelId[16]).hideNativeMenu();
      onPressItem({ channelId, item, isIncluded });
    },
    onLongPress() {
      item(channelId[16]).hideNativeMenu();
      if (onLongPressItem != null) {
        const obj2 = { channelId, item, isIncluded };
        tmp2(obj2);
      }
      const obj = item(channelId[16]);
    }
  }), items2);
  if (isIncluded.PHOTO !== type) {
    if (constants.IMAGE !== type) {
      if (tmp9.VIDEO === type) {
        const intl = tmp2(channelId[17]).intl;
        let stringResult = intl.string(tmp2(channelId[17]).t.FlNoSV);
      }
    }
    if (tmp9.VIDEO !== type) {
      if (constants.VIDEO !== type) {
        if (tmp9.PHOTO === type) {
          let tmp12 = null;
          if ("image/gif" === tmp2Result.getType(image.uri)) {
            let obj2 = { style: tmp.mediaKeyboardItemLabelContainer, label: "GIF" };
            tmp12 = closure_9(tmp2(channelId[20]).Caption, obj2);
          }
          tmp2Result = tmp2(channelId[19]);
        } else {
          tmp12 = null;
        }
      }
      let tmp16 = !tmp5;
      if (!tmp5) {
        tmp16 = stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
        const tmp17 = stateFromStoresObject.uploadCount >= uploadLimit && disableWhenReachedLimit || disabled;
      }
      const obj3 = { style: tmp.checkIconContainer, children: null };
      const obj4 = { source: item(channelId[21]), disableColor: false, color: tmp.checkIcon.color, style: tmp.checkIcon };
      obj3.children = closure_9(tmp2(channelId[11]).Icon, obj4);
      const obj5 = { accessibilityRole: "button", accessibilityLabel: stringResult, accessibilityState: null, onPress: null, onLongPress: null, disabled: null, style: null, children: null };
      const obj6 = { selected: tmp5 };
      obj5.accessibilityState = obj6;
      obj5.onPress = tmp7;
      obj5.onLongPress = tmp8;
      obj5.disabled = tmp16;
      const items3 = [tmp.imageContainer, , ];
      let imageDisabled;
      const tmp19 = onLongPressItem;
      const tmp21 = closure_9(onLongPressItem, obj3);
      if (tmp16) {
        imageDisabled = tmp.imageDisabled;
      }
      items3[1] = imageDisabled;
      items3[2] = closure_13(index, numItemsPerRow, totalNumItems);
      obj5.style = items3;
      const obj7 = { resizeMode: "cover", resizeMethod: "resize", style: null, source: null, localImageSource: null };
      const items4 = [tmp.image, ];
      const size1 = { height: size, width: size };
      items4[1] = size1;
      obj7.style = items4;
      const size2 = { uri: image.uri, width: size, height: size, cache: "force-cache" };
      obj7.source = size2;
      const size3 = { uri: image.uri, width: size, height: size };
      obj7.localImageSource = size3;
      const items5 = [closure_9(tmp2(channelId[11]).ThumbnailImage, obj7), tmp12, , ];
      let tmp18Result = null;
      if (tmp5) {
        const obj8 = { style: null };
        const items6 = [tmp.selectedOverlay, ];
        const size4 = { height: size, width: size };
        items6[1] = size4;
        obj8.style = items6;
        tmp18Result = closure_9(tmp19, obj8);
      }
      items5[2] = tmp18Result;
      let tmp28 = null;
      if (tmp5) {
        tmp28 = tmp21;
      }
      items5[3] = tmp28;
      obj5.children = items5;
      return closure_10(includedUploadIds, obj5);
    }
    const obj9 = { label: tmp2(channelId[18]).getTimeFormat(image.playableDuration) };
    tmp12 = closure_9(closure_14, obj9);
    const tmp2Result2 = tmp2(channelId[18]);
  }
  const intl2 = tmp2(channelId[17]).intl;
  stringResult = intl2.string(tmp2(channelId[17]).t.SkfkEJ);
  let obj = draftType(channelId[15]);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ size, isFirstInRow } = arg0);
  const tmp2 = closure_12();
  if (cResult[0] !== isFirstInRow) {
    let obj2 = !isFirstInRow;
    if (!isFirstInRow) {
      obj2 = { marginLeft: 4 };
    }
    cResult[0] = isFirstInRow;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.imageContainer) {
    if (cResult[3] === tmp3) {
      let tmp4 = cResult[4];
    }
    if (cResult[5] !== size) {
      const size1 = { height: size, width: size };
      cResult[5] = size;
      cResult[6] = size1;
      let tmp5 = size1;
    } else {
      tmp5 = cResult[6];
    }
    if (cResult[7] === tmp2.image) {
      if (cResult[8] === tmp5) {
        let tmp6 = cResult[9];
      }
      if (cResult[10] === tmp4) {
        if (cResult[11] === tmp6) {
          let tmp10 = cResult[12];
        }
        return tmp10;
      }
      const obj3 = { style: tmp4, children: tmp6 };
      const tmp13 = options(React4, obj3);
      cResult[10] = tmp4;
      cResult[11] = tmp6;
      cResult[12] = tmp13;
      tmp10 = tmp13;
    }
    const obj4 = { style: null };
    const items = [tmp2.image, tmp5];
    obj4.style = items;
    const tmp9 = options(React4, obj4);
    cResult[7] = tmp2.image;
    cResult[8] = tmp5;
    cResult[9] = tmp9;
    tmp6 = tmp9;
  }
  const items1 = [tmp2.imageContainer, tmp3];
  cResult[2] = tmp2.imageContainer;
  cResult[3] = tmp3;
  cResult[4] = items1;
  tmp4 = items1;
}) : ((arg0) => {
  ({ size, isFirstInRow } = arg0);
  const tmp = closure_12();
  const items = [tmp.imageContainer, ];
  let obj = !isFirstInRow;
  if (!isFirstInRow) {
    obj = { marginLeft: 4 };
  }
  const obj2 = { style: items, children: null };
  items[1] = obj;
  const obj3 = { style: null };
  const items1 = [tmp.image, { height: size, width: size }];
  obj3.style = items1;
  obj2.children = options(React4, obj3);
  return options(React4, obj2);
});
createStyles = fn(4890);
let obj4 = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", position: "relative" };
let closure_17 = createStyles.createStyleProperties({ backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE });
const __initData = { code: "function MediaKeyboardItemTsx1(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
const __initData2 = { code: "function MediaKeyboardItemTsx2(){const{withTiming,interpolateColor,pressed,backgroundColor,pressedBackgroundColor,Easing}=this.__closure;return{backgroundColor:withTiming(interpolateColor(pressed.get(),[0,1],[backgroundColor,pressedBackgroundColor]),{duration:200,easing:Easing.out(Easing.quad)})};}" };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = sharedValue(pressedBackgroundColor[10]).c(20);
  ({ size, onPress, disabled, accessibilityLabel, children } = arg0);
  ({ index, totalNumItems, numItemsPerRow } = arg0);
  const tmp2 = closure_12();
  let obj = sharedValue(pressedBackgroundColor[10]);
  sharedValue = sharedValue(pressedBackgroundColor[5]).useSharedValue(0);
  const tmp4 = closure_17();
  const backgroundColor = tmp4.backgroundColor;
  pressedBackgroundColor = tmp4.pressedBackgroundColor;
  let obj2 = sharedValue(pressedBackgroundColor[5]);
  const fn = function i() {
    const obj = { backgroundColor: null };
    const obj2 = timing;
    const items = [backgroundColor, pressedBackgroundColor];
    const obj4 = { duration: 200, easing: null };
    const Easing = ReanimatedRexport2.Easing;
    obj4.easing = Easing.out(ReanimatedRexport2.Easing.quad);
    obj.backgroundColor = obj2.withTiming(ReanimatedRexport2.interpolateColor(sharedValue.get(), [0, 1], items), obj4);
    return obj;
  };
  let obj3 = sharedValue(pressedBackgroundColor[5]);
  fn.__closure = { withTiming: sharedValue(pressedBackgroundColor[22]).withTiming, interpolateColor: sharedValue(pressedBackgroundColor[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: sharedValue(pressedBackgroundColor[5]).Easing };
  fn.__workletHash = 15924448581794;
  fn.__initData = __initData;
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
    let tmp8 = fn3;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  if (cResult[3] !== size) {
    const size1 = { width: size, height: size };
    cResult[3] = size;
    cResult[4] = size1;
    let tmp9 = size1;
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
            if (cResult[10] === disabled1) {
              let tmp11 = cResult[11];
            }
            if (cResult[12] === accessibilityLabel) {
              if (cResult[13] === children) {
                if (cResult[14] === disabled) {
                  if (cResult[15] === onPress) {
                    if (cResult[16] === tmp7) {
                      if (cResult[17] === tmp8) {
                        if (cResult[18] === tmp11) {
                          let tmp12 = cResult[19];
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
  let obj4 = { withTiming: sharedValue(pressedBackgroundColor[22]).withTiming, interpolateColor: sharedValue(pressedBackgroundColor[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: sharedValue(pressedBackgroundColor[5]).Easing };
}) : ((arg0) => {
  ({ size, disabled } = arg0);
  let sharedValue;
  let pressedBackgroundColor;
  ({ onPress, accessibilityLabel, children, index, totalNumItems, numItemsPerRow } = arg0);
  const tmp = closure_12();
  sharedValue = sharedValue(pressedBackgroundColor[5]).useSharedValue(0);
  const tmp3 = closure_17();
  const backgroundColor = tmp3.backgroundColor;
  pressedBackgroundColor = tmp3.pressedBackgroundColor;
  let obj = sharedValue(pressedBackgroundColor[5]);
  const fn = function h() {
    const obj = { backgroundColor: null };
    const obj2 = timing;
    const items = [backgroundColor, pressedBackgroundColor];
    const obj4 = { duration: 200, easing: null };
    const Easing = ReanimatedRexport2.Easing;
    obj4.easing = Easing.out(ReanimatedRexport2.Easing.quad);
    obj.backgroundColor = obj2.withTiming(ReanimatedRexport2.interpolateColor(sharedValue.get(), [0, 1], items), obj4);
    return obj;
  };
  let obj2 = sharedValue(pressedBackgroundColor[5]);
  fn.__closure = { withTiming: sharedValue(pressedBackgroundColor[22]).withTiming, interpolateColor: sharedValue(pressedBackgroundColor[5]).interpolateColor, pressed: sharedValue, backgroundColor, pressedBackgroundColor, Easing: sharedValue(pressedBackgroundColor[5]).Easing };
  fn.__workletHash = 8873076780545;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = {
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
    style: null,
    children: null
  };
  let items = [animatedStyle, , , , , ];
  ({ imageContainer: arr[1], specialButton: arr[2] } = tmp);
  items[3] = { width: size, height: size };
  items[4] = closure_13(index, numItemsPerRow, totalNumItems);
  let disabled1;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items[5] = disabled1;
  obj4.style = items;
  obj4.children = children;
  return closure_9(closure_11, obj4);
});
ReactCompilerGating = fn(558);
function isSpecialMediaGridNode(type) {
  let hasItem = "type" in type;
  if (hasItem) {
    const items = ["allphotos", "attach", "camera"];
    hasItem = items.includes(type.type);
  }
  return hasItem;
}
let obj6 = { backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, pressedBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_ACTIVE };
size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((draftType) => {
  const cResult = channel(onPressItem[10]).c(20);
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
                                if (cResult[15] === uploadLimit) {
                                  let tmp6 = cResult[16];
                                }
                                if (cResult[17] === tmp6) {
                                  if (cResult[18] === tmp4.container) {
                                    let tmp8 = cResult[19];
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
  obj3 = { camera: null, allphotos: null, attach: null };
  let obj = channel(onPressItem[10]);
  obj3.camera = { text: channel(onPressItem[17]).t.uje3P9, onPress: handleCameraPress, Icon: channel(onPressItem[24]).CameraIcon };
  let obj4 = { text: channel(onPressItem[17]).t.uje3P9, onPress: handleCameraPress, Icon: channel(onPressItem[24]).CameraIcon };
  obj3.allphotos = { text: channel(onPressItem[17]).t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: channel(onPressItem[25]).ImageIcon };
  const obj5 = { text: channel(onPressItem[17]).t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: channel(onPressItem[25]).ImageIcon };
  obj3.attach = { text: channel(onPressItem[17]).t["8Hvr3+"], onPress: handleAttachPress, Icon: channel(onPressItem[26]).AttachmentIcon };
  const mapped = items.map((type, index) => {
    if (null == type) {
      const obj2 = { size: result, isFirstInRow: 0 === index };
      return options(closure_16, obj2, index);
    } else {
      let hasItem = "type" in type;
      if (hasItem) {
        const items = ["allphotos", "attach", "camera"];
        hasItem = items.includes(type.type);
      }
      if (hasItem) {
        obj3 = { size: result, onPress: null, disabled: null, accessibilityLabel: null, index: null, totalNumItems: null, numItemsPerRow: null, children: null };
        obj3.onPress = obj3[type.type].onPress;
        obj3.disabled = disabled;
        const intl = util.intl;
        obj3.accessibilityLabel = intl.string(obj3[type.type].text);
        obj3.index = rowIndex * numPerRow + index;
        obj3.totalNumItems = totalNumItems;
        obj3.numItemsPerRow = numPerRow;
        const obj4 = { color: nativeDefault.colors.ICON_SUBTLE, size: "lg" };
        obj3.children = options(obj3[type.type].Icon, obj4);
        return options(closure_20, obj3, index);
      } else {
        const obj = { channelId: channel.id, draftType, index: rowIndex * numPerRow + index, totalNumItems, numItemsPerRow: numPerRow, item: type, includedUploadIds, uploadLimit, disableWhenReachedLimit, size: result, onPressItem, onLongPressItem, disabled };
        return options(closure_15, obj, index);
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
  ({ items, channel: require, draftType: importDefault, onPressItem: dependencyMap, onLongPressItem: noop, rowIndex: closure_4, totalNumItems: Pressable, numPerRow } = arg0);
  ({ includedUploadIds: closure_7, uploadLimit: closure_8, disableWhenReachedLimit: closure_9, disabled: closure_10 } = arg0);
  ({ handleCameraPress, handleAttachPress, handleViewAllPhotosPress } = arg0);
  const size = (useWindowDimensionsDefault().width - (24 + 4 * (numPerRow - 1))) / numPerRow;
  let obj = { camera: null, allphotos: null, attach: null };
  const tmp = obj();
  obj.camera = { text: util.t.uje3P9, onPress: handleCameraPress, Icon: CameraIcon.CameraIcon };
  let obj2 = { text: util.t.uje3P9, onPress: handleCameraPress, Icon: CameraIcon.CameraIcon };
  obj.allphotos = { text: util.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: ImageIcon.ImageIcon };
  let obj3 = { text: util.t.Zmm6dN, onPress: handleViewAllPhotosPress, Icon: ImageIcon.ImageIcon };
  obj.attach = { text: util.t["8Hvr3+"], onPress: handleAttachPress, Icon: AttachmentIcon.AttachmentIcon };
  let obj4 = { text: util.t["8Hvr3+"], onPress: handleAttachPress, Icon: AttachmentIcon.AttachmentIcon };
  return disableWhenReachedLimit(closure_4, {
    style: tmp.container,
    children: items.map((type, index) => {
      if (null == type) {
        const obj2 = { size, isFirstInRow: 0 === index };
        return options(closure_16, obj2, index);
      } else {
        let hasItem = "type" in type;
        if (hasItem) {
          const items = ["allphotos", "attach", "camera"];
          hasItem = items.includes(type.type);
        }
        if (hasItem) {
          const obj3 = { size, onPress: obj[type.type].onPress, disabled, accessibilityLabel: null, index: null, totalNumItems: null, numItemsPerRow: null, children: null };
          const intl = util.intl;
          obj3.accessibilityLabel = intl.string(obj[type.type].text);
          obj3.index = closure_1_4 * numPerRow + index;
          obj3.totalNumItems = totalNumItems;
          obj3.numItemsPerRow = numPerRow;
          const obj4 = { color: nativeDefault.colors.ICON_SUBTLE, size: "lg" };
          obj3.children = options(obj[type.type].Icon, obj4);
          return options(closure_20, obj3, index);
        } else {
          obj = { channelId: id.id, draftType, index: closure_1_4 * numPerRow + index, totalNumItems, numItemsPerRow: numPerRow, item: type, includedUploadIds, uploadLimit, disableWhenReachedLimit, size, onPressItem, onLongPressItem, disabled };
          return options(closure_15, obj, index);
        }
      }
    })
  });
}));
export const PARENT_PADDING = 24;
export const CHILD_PADDING = 4;
export const SEPARATOR_SIZE = 4;
export const isMediaCameraNode = function isMediaCameraNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "camera" === type.type;
  }
  return tmp;
};
export const isAttachFilesNode = function isAttachFilesNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "attach" === type.type;
  }
  return tmp;
};
export const isViewAllPhotosNode = function isViewAllPhotosNode(type) {
  let tmp = "type" in type;
  if (tmp) {
    tmp = "allphotos" === type.type;
  }
  return tmp;
};
export { isSpecialMediaGridNode };