// discord_app/modules/stickers/native/StickerPickerListRow.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import UserSettings from "../../user_settings/UserSettings.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickersUtils from "../StickersUtils.tsx";
import StickerSendability from "../StickerSendability.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const StickerAnimationSettings = fn(2043).StickerAnimationSettings;
const StickerPickerConstants = fn(9679);
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const PADDING_VERTICAL = fn(1241).PADDING_VERTICAL;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  row: {
    height: StickerPickerConstants.ROW_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE },
  disabledOverlay: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" },
  lockContainer: null,
  lock: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj5 = _modDef683("#000000");
obj4.backgroundColor = _modDef683("#000000").alpha(0.2).hex();
obj4.alignItems = "center";
obj4.justifyContent = "center";
obj2.lockContainer = obj4;
obj2.lock = { width: 16, height: 16, tintColor: "white" };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StickerItemLockedOverlay() {
      const cResult = c.c(5);
      const tmp4 = closure_10();
      if (cResult[0] !== tmp4.lock) {
        const obj2 = { style: tmp4.lock };
        const tmp7 = closure_1_8(LockIcon.LockIcon, obj2);
        cResult[0] = tmp4.lock;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.lockContainer) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = closure_1_8(React3, {
        importantForAccessibility: "no-hide-descendants",
        style: tmp4.lockContainer,
        children: tmp5,
      });
      cResult[2] = tmp4.lockContainer;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { importantForAccessibility: "no-hide-descendants", style: tmp4.lockContainer, children: tmp5 };
    }
  : function StickerItemLockedOverlay() {
      const tmp = closure_10();
      const obj = {
        importantForAccessibility: "no-hide-descendants",
        style: tmp.lockContainer,
        children: closure_1_8(LockIcon.LockIcon, { style: tmp.lock }),
      };
      return closure_1_8(React3, obj);
    };
ReactCompilerGating = fn(558);
const alphaResult = _modDef683("#000000").alpha(0.2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StickerPickerListRow(onLongPressStickerDetail) {
      let sum;
      let tmp2 = onLongPressStickerDetail;
      const cResult = stickers(onLongPressStickerDetail[11]).c(37);
      ({ containerWidth, stickers } = onLongPressStickerDetail);
      ({ rowSize, isSectionNitroLocked, onPressSticker } = onLongPressStickerDetail);
      onLongPressStickerDetail = onLongPressStickerDetail.onLongPressStickerDetail;
      const focusedSticker = onLongPressStickerDetail.focusedSticker;
      const setFocusedSticker = onLongPressStickerDetail.setFocusedSticker;
      const channel = onLongPressStickerDetail.channel;
      let nativeRow = onLongPressStickerDetail.nativeRow;
      const size = tmp4;
      if (undefined === nativeRow) {
        nativeRow = stickers(tmp2[13]).isAndroid();
        let tmpResult = stickers(tmp2[13]);
      }
      const tmp5 = closure_10();
      closure_7 = tmp5;
      let AnimateStickers = stickers(tmp2[14]).AnimateStickers;
      const setting = AnimateStickers.useSetting();
      let obj = stickers(onLongPressStickerDetail[11]);
      const mobileStickerPickerUpsellRestyleEnabled = stickers(tmp2[15]).useMobileStickerPickerUpsellRestyleEnabled(
        "native.StickerPickerListRow",
      );
      if (cResult[0] !== onPressSticker) {
        function handleOnPressSticker(arg0) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          if (onPressSticker != null) {
            tmp2(arg0);
          }
        }
        cResult[0] = onPressSticker;
        cResult[1] = handleOnPressSticker;
        let tmp8 = handleOnPressSticker;
      } else {
        tmp8 = cResult[1];
      }
      closure_10 = tmp8;
      if (cResult[2] === onLongPressStickerDetail) {
        if (cResult[3] === setFocusedSticker) {
          let tmp9 = cResult[4];
        }
        closure_11 = tmp9;
        if (cResult[5] === setting) {
          if (cResult[6] === channel) {
            let id;
            if (focusedSticker != null) {
              id = focusedSticker.id;
            }
            if (cResult[7] === id) {
              if (cResult[8] === tmp4) {
                if (cResult[9] === onPressSticker) {
                  if (cResult[10] === mobileStickerPickerUpsellRestyleEnabled) {
                    let tmp12 = cResult[11];
                  }
                  closure_12 = tmp12;
                  if (nativeRow) {
                    if (cResult[12] === containerWidth) {
                      if (cResult[13] === tmp9) {
                        if (cResult[14] === tmp8) {
                          if (cResult[15] === rowSize) {
                            if (cResult[16] === tmp12) {
                              if (cResult[17] === stickers) {
                                if (cResult[18] === tmp5) {
                                  while (true) {
                                    let tmp38 = globalThis;
                                    let _Symbol2 = Symbol;
                                    let str2 = "react.early_return_sentinel";
                                    if (tmp22 !== Symbol.for("react.early_return_sentinel")) {
                                      return tmp22;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const _Symbol = Symbol;
                    Symbol.for("react.early_return_sentinel");
                    let items = [];
                    let num24 = 0;
                    if (0 < rowSize) {
                      do {
                        let tmp25 = stickers[num24];
                        if (undefined !== tmp25) {
                          let tmp12Result = tmp12(tmp25);
                          let isAnimated = tmp12Result.isAnimated;
                          let obj2 = {
                            stickerId: null,
                            stickerName: null,
                            stickerType: null,
                            stickerUrl: null,
                            stickerAnimated: null,
                            stickerDisabled: null,
                            stickerOpaque: null,
                            stickerLocked: null,
                          };
                          ({ id: obj6.stickerId, name: obj6.stickerName, format_type: obj6.stickerType } = tmp25);
                          ({ isOpaque, isDisabled, isLocked } = tmp12Result);
                          let obj7 = stickers(onLongPressStickerDetail[21]);
                          obj2.stickerUrl = obj7.getStickerAssetUrl(tmp25, size, isAnimated);
                          obj2.stickerAnimated = isAnimated;
                          obj2.stickerDisabled = isDisabled;
                          obj2.stickerOpaque = isOpaque;
                          obj2.stickerLocked = isLocked;
                          let arr2 = items.push(obj2);
                          let tmp28 = onLongPressStickerDetail;
                        } else {
                          let obj3 = {
                            stickerId: "",
                            stickerName: "",
                            stickerType: null,
                            stickerUrl: "",
                            stickerAnimated: false,
                            stickerDisabled: true,
                            stickerOpaque: false,
                            stickerLocked: false,
                          };
                          tmp28 = onLongPressStickerDetail;
                          obj3.stickerType = stickers(onLongPressStickerDetail[20]).StickerFormat.PNG;
                          let arr3 = items.push(obj3);
                        }
                        num24 = num24 + 1;
                        tmp2 = tmp28;
                      } while (num24 < rowSize);
                    }
                    try {
                      if (cResult[20] === tmp8) {
                        class J {
                          constructor(arg0) {
                            closure_0 = onLongPressStickerDetail;
                            found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                            if (null != found) {
                              tmp2 = closure_10;
                              tmp3 = closure_10(found);
                            }
                            return;
                          }
                        }
                        class Q {
                          constructor(arg0) {
                            closure_0 = onLongPressStickerDetail;
                            found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                            if (null != found) {
                              tmp2 = closure_11;
                              tmp3 = closure_11(found);
                            }
                            return;
                          }
                        }
                        cResult[23] = tmp9;
                        cResult[24] = stickers;
                        cResult[25] = Q;
                      }
                      class J {
                        constructor(arg0) {
                          closure_0 = onLongPressStickerDetail;
                          found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                          if (null != found) {
                            tmp2 = closure_10;
                            tmp3 = closure_10(found);
                          }
                          return;
                        }
                      }
                      cResult[20] = tmp8;
                      cResult[21] = stickers;
                      cResult[22] = J;
                    } catch (tmp39) {
                      class J {
                        constructor(arg0) {
                          closure_0 = onLongPressStickerDetail;
                          found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                          if (null != found) {
                            tmp2 = closure_10;
                            tmp3 = closure_10(found);
                          }
                          return;
                        }
                      }
                      class Q {
                        constructor(arg0) {
                          closure_0 = onLongPressStickerDetail;
                          found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                          if (null != found) {
                            tmp2 = closure_11;
                            tmp3 = closure_11(found);
                          }
                          return;
                        }
                      }
                      const obj4 = { itemLength: arr.length, items: null };
                      let found = arr.filter(
                        (stickerId) =>
                          null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl,
                      );
                      obj4.items = found.map((stickerId) => ({
                        stickerId: stickerId.stickerId,
                        stickerName: stickerId.stickerName,
                        stickerUrl: stickerId.stickerUrl,
                      }));
                      tmp41[2] = obj4;
                      obj8.addBreadcrumb(tmp41);
                      throw tmp39;
                    }
                  } else {
                    if (cResult[26] === tmp9) {
                      if (cResult[27] === tmp8) {
                        if (cResult[28] === rowSize) {
                          if (cResult[29] === tmp12) {
                            if (cResult[30] === stickers) {
                              if (cResult[31] === tmp5.disabledOverlay) {
                                if (cResult[32] === tmp5.stickerImage) {
                                  let tmp15 = cResult[33];
                                  class J {
                                    constructor(arg0) {
                                      closure_0 = onLongPressStickerDetail;
                                      found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                                      if (null != found) {
                                        tmp2 = closure_10;
                                        tmp3 = closure_10(found);
                                      }
                                      return;
                                    }
                                  }
                                }
                                class J {
                                  constructor(arg0) {
                                    closure_0 = onLongPressStickerDetail;
                                    found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                                    if (null != found) {
                                      tmp2 = closure_10;
                                      tmp3 = closure_10(found);
                                    }
                                    return;
                                  }
                                }
                                class Q {
                                  constructor(arg0) {
                                    closure_0 = onLongPressStickerDetail;
                                    found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                                    if (null != found) {
                                      tmp2 = closure_11;
                                      tmp3 = closure_11(found);
                                    }
                                    return;
                                  }
                                }
                                const obj5 = { style: tmp5.row, children: tmp15 };
                                const tmp21 = setting(focusedSticker, obj5);
                                cResult[34] = tmp15;
                                cResult[35] = tmp5.row;
                                cResult[36] = tmp21;
                              }
                            }
                          }
                        }
                      }
                    }
                    class J {
                      constructor(arg0) {
                        closure_0 = onLongPressStickerDetail;
                        found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                        if (null != found) {
                          tmp2 = closure_10;
                          tmp3 = closure_10(found);
                        }
                        return;
                      }
                    }
                    class Q {
                      constructor(arg0) {
                        closure_0 = onLongPressStickerDetail;
                        found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                        if (null != found) {
                          tmp2 = closure_11;
                          tmp3 = closure_11(found);
                        }
                        return;
                      }
                    }
                    c14 = 0;
                    let num12 = 0;
                    if (0 < rowSize) {
                      do {
                        let tmp17 = (function _loop() {
                          stickers = tmp2;
                          if (undefined === stickers[c14]) {
                            const obj2 = { style: closure_7.stickerImage };
                            closure_13.push(setting(focusedSticker, obj2, c14));
                            return 1;
                          } else {
                            const tmp16 = closure_12(tmp2);
                            const isLocked = tmp16.isLocked;
                            ({ isAnimated, isOpaque, isDisabled } = tmp16);
                            const obj3 = {
                              accessibilityRole: "button",
                              accessibilityLabel: tmp2.name,
                              style: null,
                              disabled: null,
                              onPress: null,
                              onLongPress: null,
                              children: null,
                            };
                            const items = [closure_7.stickerImage];
                            let disabledOverlay = isLocked;
                            if (isLocked) {
                              disabledOverlay = closure_7.disabledOverlay;
                            }
                            items[1] = disabledOverlay;
                            obj3.style = items;
                            obj3.disabled = isDisabled;
                            obj3.onPress = function onPress() {
                              return closure_10(closure_0);
                            };
                            obj3.onLongPress = function onLongPress() {
                              return closure_11(closure_0);
                            };
                            const obj = { sticker: tmp2, size, animated: isAnimated, opaque: isOpaque };
                            const items1 = [setting(onPressSticker(onLongPressStickerDetail[21]), obj, c14)];
                            let tmp6 = null;
                            if (isLocked) {
                              tmp6 = setting(closure_11, {});
                            }
                            items1[1] = tmp6;
                            obj3.children = items1;
                            closure_13.push(
                              mobileStickerPickerUpsellRestyleEnabled(
                                stickers(onLongPressStickerDetail[24]).PressableOpacity,
                                obj3,
                                tmp2.id,
                              ),
                            );
                          }
                        })();
                        sum = num12 + 1;
                        c14 = sum;
                        num12 = sum;
                      } while (sum < rowSize);
                    }
                    cResult[26] = tmp9;
                    cResult[27] = tmp8;
                    cResult[28] = rowSize;
                    cResult[29] = tmp12;
                    cResult[30] = stickers;
                    cResult[31] = tmp5.disabledOverlay;
                    cResult[32] = tmp5.stickerImage;
                    cResult[33] = tmp16;
                    tmp15 = tmp16;
                  }
                }
              }
            }
          }
        }
        cResult[5] = setting;
        cResult[6] = channel;
        let id1;
        if (focusedSticker != null) {
          id1 = focusedSticker.id;
        }
        function rowTraits(id) {
          id = undefined;
          if (focusedSticker != null) {
            id = focusedSticker.id;
          }
          let isSendableStickerResult = closure_6;
          if (!closure_6) {
            isSendableStickerResult = null == channel;
          }
          if (!isSendableStickerResult) {
            isSendableStickerResult = StickerSendability.isSendableSticker(id, UserStore.getCurrentUser(), channel);
            const tmpResult = StickerSendability;
          }
          const obj2 = {
            isAnimated: StickersUtils.shouldAnimateSticker(setting, id.id === id),
            isOpaque: isSendableStickerResult,
            isDisabled: null == onPressSticker,
            isLocked: null,
          };
          let tmp10 = mobileStickerPickerUpsellRestyleEnabled;
          if (mobileStickerPickerUpsellRestyleEnabled) {
            tmp10 = !isSendableStickerResult;
          }
          obj2.isLocked = tmp10;
          return obj2;
        }
        cResult[7] = id1;
        cResult[8] = tmp4;
        cResult[9] = onPressSticker;
        cResult[10] = mobileStickerPickerUpsellRestyleEnabled;
        cResult[11] = rowTraits;
        tmp12 = rowTraits;
      }
      function handleOnLongPressSticker(arg0) {
        if (null != onLongPressStickerDetail) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          tmp(arg0);
        } else {
          const AnimateStickers = UserSettings.AnimateStickers;
          if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
            const result1 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            if (setFocusedSticker != null) {
              setFocusedSticker(arg0);
            }
          }
        }
      }
      cResult[2] = onLongPressStickerDetail;
      cResult[3] = setFocusedSticker;
      cResult[4] = handleOnLongPressSticker;
      tmp9 = handleOnLongPressSticker;
      const tmpResult2 = stickers(tmp2[15]);
    }
  : function StickerPickerListRow(stickers) {
      let sum;
      stickers = stickers.stickers;
      ({ rowSize, isSectionNitroLocked } = stickers);
      if (isSectionNitroLocked === undefined) {
        isSectionNitroLocked = false;
      }
      ({
        onPressSticker: dependencyMap,
        onLongPressStickerDetail: closure_3,
        focusedSticker: UserStore,
        setFocusedSticker: StickerAnimationSettings,
        channel: STICKER_SIZE,
        nativeRow,
      } = stickers);
      if (nativeRow === undefined) {
        nativeRow = stickers(1381).isAndroid();
        let obj = stickers(1381);
      }
      c12 = undefined;
      function handleOnLongPressSticker(arg0) {
        if (null != closure_1_3) {
          const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          tmp(arg0);
        } else {
          const AnimateStickers = UserSettings.AnimateStickers;
          if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
            const result1 = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            if (closure_1_5 != null) {
              closure_1_5(arg0);
            }
          }
        }
      }
      function rowTraits(id) {
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        let isSendableStickerResult = isSectionNitroLocked;
        if (!isSectionNitroLocked) {
          isSendableStickerResult = null == size;
        }
        if (!isSendableStickerResult) {
          isSendableStickerResult = StickerSendability.isSendableSticker(id, UserStore.getCurrentUser(), size);
          const tmpResult = StickerSendability;
        }
        const obj2 = {
          isAnimated: StickersUtils.shouldAnimateSticker(closure_8, id.id === id),
          isOpaque: isSendableStickerResult,
          isDisabled: null == dependencyMap,
          isLocked: null,
        };
        let tmp10 = closure_9;
        if (closure_9) {
          tmp10 = !isSendableStickerResult;
        }
        obj2.isLocked = tmp10;
        return obj2;
      }
      const tmp6 = handleOnLongPressSticker();
      rowContentPaddingVertical = tmp6;
      let AnimateStickers = stickers(2040).AnimateStickers;
      closure_8 = AnimateStickers.useSetting();
      closure_9 = stickers(9468).useMobileStickerPickerUpsellRestyleEnabled("native.StickerPickerListRow");
      let items = [];
      if (nativeRow) {
        let num4 = 0;
        if (0 < rowSize) {
          do {
            let tmp12 = stickers[num4];
            if (undefined !== tmp12) {
              let rowTraitsResult = rowTraits(tmp12);
              let isAnimated = rowTraitsResult.isAnimated;
              let obj3 = {
                stickerId: null,
                stickerName: null,
                stickerType: null,
                stickerUrl: null,
                stickerAnimated: null,
                stickerDisabled: null,
                stickerOpaque: null,
                stickerLocked: null,
              };
              ({ id: obj5.stickerId, name: obj5.stickerName, format_type: obj5.stickerType } = tmp12);
              ({ isOpaque, isDisabled, isLocked } = rowTraitsResult);
              let obj6 = stickers(9725);
              obj3.stickerUrl = obj6.getStickerAssetUrl(tmp12, STICKER_SIZE, isAnimated);
              obj3.stickerAnimated = isAnimated;
              obj3.stickerDisabled = isDisabled;
              obj3.stickerOpaque = isOpaque;
              obj3.stickerLocked = isLocked;
              let arr2 = items.push(obj3);
            } else {
              let obj4 = {
                stickerId: "",
                stickerName: "",
                stickerType: null,
                stickerUrl: "",
                stickerAnimated: false,
                stickerDisabled: true,
                stickerOpaque: false,
                stickerLocked: false,
              };
              obj4.stickerType = stickers(5746).StickerFormat.PNG;
              let arr3 = items.push(obj4);
            }
            num4 = num4 + 1;
          } while (num4 < rowSize);
        }
        try {
          const obj7 = { style: tmp6.row, rowData: null, onPressSticker: null, onLongPressSticker: null };
          const obj8 = { rowContentWidth: tmp3, rowContentPaddingVertical, itemSize: STICKER_SIZE, items };
          obj7.rowData = obj8;
          obj7.onPressSticker = function onPressSticker(arg0) {
            const nativeEvent = arg0;
            const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
            if (null != found) {
              const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              if (dependencyMap != null) {
                dependencyMap(found);
              }
            }
          };
          obj7.onLongPressSticker = function onLongPressSticker(arg0) {
            const nativeEvent = arg0;
            const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
            if (null != found) {
              handleOnLongPressSticker(found);
            }
          };
          return closure_8(isSectionNitroLocked(9728), obj7);
        } catch (tmp26) {
          const obj10 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: null };
          const obj11 = { itemLength: arr.length, items: null };
          let found = arr.filter(
            (stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl,
          );
          obj11.items = found.map((stickerId) => ({
            stickerId: stickerId.stickerId,
            stickerName: stickerId.stickerName,
            stickerUrl: stickerId.stickerUrl,
          }));
          obj10.data = obj11;
          isSectionNitroLocked(tmp[23]).addBreadcrumb(obj10);
          throw tmp26;
        }
      } else {
        c12 = 0;
        let num2 = 0;
        if (0 < rowSize) {
          do {
            let tmp8 = (function _loop2() {
              stickers = tmp2;
              if (undefined === stickers[c12]) {
                let obj = { style: closure_7.stickerImage };
                items.push(closure_8(closure_1_3, obj, c12));
                return 1;
              } else {
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                let isSendableStickerResult = isSectionNitroLocked;
                const obj5 = stickers(5745);
                if (!isSectionNitroLocked) {
                  isSendableStickerResult = null == closure_6;
                }
                if (!isSendableStickerResult) {
                  isSendableStickerResult = tmp26(7037).isSendableSticker(
                    tmp2,
                    currentUser.getCurrentUser(),
                    closure_6,
                  );
                  const tmp26Result = tmp26(7037);
                }
                let tmp11 = closure_9;
                if (closure_9) {
                  tmp11 = !isSendableStickerResult;
                }
                const obj2 = {
                  accessibilityRole: "button",
                  accessibilityLabel: tmp2.name,
                  style: null,
                  disabled: null,
                  onPress: null,
                  onLongPress: null,
                  children: null,
                };
                items = [closure_7.stickerImage];
                let disabledOverlay = tmp11;
                if (tmp11) {
                  disabledOverlay = closure_7.disabledOverlay;
                }
                items[1] = disabledOverlay;
                obj2.style = items;
                obj2.disabled = null == dependencyMap;
                obj2.onPress = function onPress() {
                  const result = closure_0(5055).triggerHapticFeedback(isSectionNitroLocked(5056).IMPACT_LIGHT);
                  if (dependencyMap != null) {
                    dependencyMap(closure_0);
                  }
                  const obj = closure_0(5055);
                };
                obj2.onLongPress = function onLongPress() {
                  return handleOnLongPressSticker(closure_0);
                };
                const obj3 = {
                  sticker: tmp2,
                  size,
                  animated: stickers(5745).shouldAnimateSticker(closure_8, tmp2.id === id),
                  opaque: isSendableStickerResult,
                };
                const items1 = [closure_8(isSectionNitroLocked(9725), obj3, c12)];
                let tmp17 = null;
                if (tmp11) {
                  tmp17 = closure_8(items, {});
                }
                items1[1] = tmp17;
                obj2.children = items1;
                items.push(closure_9(stickers(6189).PressableOpacity, obj2, tmp2.id));
                const shouldAnimateStickerResult = stickers(5745).shouldAnimateSticker(closure_8, tmp2.id === id);
                const tmp10 = null == dependencyMap;
              }
            })();
            sum = num2 + 1;
            c12 = sum;
            num2 = sum;
          } while (sum < rowSize);
        }
        const obj18 = { style: tmp6.row, children: items };
        return closure_8(closure_3, obj18);
      }
      let obj2 = stickers(9468);
    };
