// discord_app/modules/stickers/native/StickerPickerListRow.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import ExpressionPickerConstants from "../../expression_picker/ExpressionPickerConstants.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import StickersConstants from "../StickersConstants.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../haptics/HapticFeedbackTypes.tsx";
import StickersUtils from "../StickersUtils.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import StickerSendability from "../StickerSendability.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserStore from "../../../stores/UserStore.tsx";
import StickerPickerConstants from "StickerPickerConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_12, onLongPressStickerDetail, rowContentPaddingVertical;

let StyleSheet;
let alphaResult;
let c3;
let c9;
let metroImportAll;
let obj2;
let obj3;
({ View: c3, StyleSheet } = react_native);
const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const STICKER_SIZE = StickerPickerConstants.STICKER_SIZE;
const ROW_HEIGHT = StickerPickerConstants.ROW_HEIGHT;
const PADDING_VERTICAL = ExpressionPickerConstants.PADDING_VERTICAL;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  row: {
    height: ROW_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  stickerImage: { height: STICKER_SIZE, width: STICKER_SIZE },
  disabledOverlay: obj2,
  lockContainer: obj3,
  lock: { width: 16, height: 16, tintColor: "white" },
};
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: alphaResult.hex(), alignItems: "center", justifyContent: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let obj4 = _modDef683("#000000");
alphaResult = obj4.alpha(0.2);
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      const tmp4 = closure_10();
      if (cResult[0] !== tmp4.lock) {
        const obj2 = { style: tmp4.lock };
        const tmp7 = metroImportAll(LockIcon.LockIcon, obj2);
        cResult[0] = tmp4.lock;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.lockContainer) {
        let tmp8;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      const obj3 = { importantForAccessibility: "no-hide-descendants", style: tmp4.lockContainer, children: tmp5 };
      const tmp9 = metroImportAll(_false, obj3);
      cResult[2] = tmp4.lockContainer;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : () => {
      let obj2;
      const tmp = closure_10();
      const obj = {
        importantForAccessibility: "no-hide-descendants",
        style: tmp.lockContainer,
        children: metroImportAll(LockIcon.LockIcon, obj2),
      };
      obj2 = { style: tmp.lock };
      return metroImportAll(_false, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onLongPressStickerDetail) => {
      let containerWidth;
      let found;
      let isDisabled;
      let isLocked;
      let isOpaque;
      let isSectionNitroLocked;
      let obj7;
      let onPressSticker;
      let rowSize;
      let stickers;
      let sum;
      let tmp8;
      function _loop() {
        let closure_0;
        let isAnimated;
        let isDisabled;
        let isOpaque;
        let items;
        let items1;
        stickers = tmp2;
        if (undefined === stickers[c14]) {
          const obj2 = { style: closure_7.stickerImage };
          closure_13.push(setting(focusedSticker, obj2, c14));
          return 1;
        } else {
          const tmp16 = closure_12(stickers[c14]);
          const isLocked = tmp16.isLocked;
          ({ isAnimated, isOpaque, isDisabled } = tmp16);
          const push = closure_13.push;
          const obj3 = {
            accessibilityRole: "button",
            accessibilityLabel: stickers[c14].name,
            style: items,
            disabled: isDisabled,
            onPress() {
              return closure_10(closure_0);
            },
            onLongPress() {
              return closure_11(closure_0);
            },
            children: items1,
          };
          items = [closure_7.stickerImage];
          let disabledOverlay = isLocked;
          const PressableOpacity = stickers(onLongPressStickerDetail[24]).PressableOpacity;
          if (isLocked) {
            disabledOverlay = closure_7.disabledOverlay;
          }
          items[1] = disabledOverlay;
          const obj = { sticker: stickers[c14], size, animated: isAnimated, opaque: isOpaque };
          items1 = [setting(onPressSticker(onLongPressStickerDetail[21]), obj, c14)];
          let tmp6 = null;
          if (isLocked) {
            tmp6 = setting(closure_11, {});
          }
          items1[1] = tmp6;
          push(mobileStickerPickerUpsellRestyleEnabled(PressableOpacity, obj3, stickers[c14].id));
        }
      }
      let tmp2 = onLongPressStickerDetail;
      let obj = stickers(onLongPressStickerDetail[11]);
      const cResult = obj.c(37);
      ({ containerWidth, stickers } = onLongPressStickerDetail);
      ({ rowSize, isSectionNitroLocked, onPressSticker } = onLongPressStickerDetail);
      onLongPressStickerDetail = onLongPressStickerDetail.onLongPressStickerDetail;
      const focusedSticker = onLongPressStickerDetail.focusedSticker;
      const setFocusedSticker = onLongPressStickerDetail.setFocusedSticker;
      const channel = onLongPressStickerDetail.channel;
      let nativeRow = onLongPressStickerDetail.nativeRow;
      size = tmp4;
      if (undefined === nativeRow) {
        let tmpResult = stickers(tmp2[13]);
        nativeRow = tmpResult.isAndroid();
      }
      const tmp5 = closure_10();
      let closure_7 = tmp5;
      let AnimateStickers = stickers(tmp2[14]).AnimateStickers;
      const setting = AnimateStickers.useSetting();
      const tmpResult2 = stickers(tmp2[15]);
      const mobileStickerPickerUpsellRestyleEnabled =
        tmpResult2.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPickerListRow");
      if (cResult[0] !== onPressSticker) {
        function handleOnPressSticker(arg0) {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          if (onPressSticker != null) {
            tmp2(arg0);
          }
        }
        cResult[0] = onPressSticker;
        cResult[1] = handleOnPressSticker;
        tmp8 = handleOnPressSticker;
      } else {
        tmp8 = cResult[1];
      }
      closure_10 = tmp8;
      if (cResult[2] === onLongPressStickerDetail) {
        let tmp9;
        if (cResult[3] === setFocusedSticker) {
          tmp9 = cResult[4];
        }
        closure_11 = tmp9;
        if (cResult[5] === setting) {
          if (cResult[6] === channel) {
            let id;
            const tmp10 = cResult[7];
            if (focusedSticker != null) {
              id = focusedSticker.id;
            }
            if (tmp10 === id) {
              if (cResult[8] === (undefined !== isSectionNitroLocked && isSectionNitroLocked)) {
                if (cResult[9] === onPressSticker) {
                  let tmp13;
                  if (cResult[10] === mobileStickerPickerUpsellRestyleEnabled) {
                    tmp13 = cResult[11];
                  }
                  closure_12 = tmp13;
                  if (nativeRow) {
                    if (cResult[12] === containerWidth) {
                      if (cResult[13] === tmp9) {
                        if (cResult[14] === tmp8) {
                          if (cResult[15] === rowSize) {
                            if (cResult[16] === tmp13) {
                              if (cResult[17] === stickers) {
                                const _Symbol2 = Symbol;
                                if (tmp23 !== Symbol.for("react.early_return_sentinel")) {
                                  return tmp23;
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
                        let tmp29;
                        let tmp26 = stickers[num24];
                        if (undefined !== tmp26) {
                          let tmp13Result = tmp13(tmp26);
                          let isAnimated = tmp13Result.isAnimated;
                          let obj2 = {
                            stickerId: null,
                            stickerName: null,
                            stickerType: null,
                            stickerUrl: obj7.getStickerAssetUrl(tmp26, size, isAnimated),
                            stickerAnimated: isAnimated,
                            stickerDisabled: isDisabled,
                            stickerOpaque: isOpaque,
                            stickerLocked: isLocked,
                          };
                          ({ id: obj6.stickerId, name: obj6.stickerName, format_type: obj6.stickerType } = tmp26);
                          ({ isOpaque, isDisabled, isLocked } = tmp13Result);
                          let push2 = items.push;
                          obj7 = stickers(onLongPressStickerDetail[21]);
                          let push2Result = push2(obj2);
                          tmp29 = onLongPressStickerDetail;
                        } else {
                          let obj3 = {
                            stickerId: "",
                            stickerName: "",
                            stickerType: stickers(onLongPressStickerDetail[20]).StickerFormat.PNG,
                            stickerUrl: "",
                            stickerAnimated: false,
                            stickerDisabled: true,
                            stickerOpaque: false,
                            stickerLocked: false,
                          };
                          tmp29 = onLongPressStickerDetail;
                          let push = items.push;
                          let arr = push(obj3);
                        }
                        num24 = num24 + 1;
                        tmp2 = tmp29;
                      } while (num24 < rowSize);
                    }
                    try {
                      if (cResult[20] === tmp8) {
                        class J {
                          constructor(arg0) {
                            let closure_0 = arg0;
                            const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                            if (null != found) {
                              closure_10(found);
                            }
                          }
                        }
                        class Q {
                          constructor(arg0) {
                            let closure_0 = arg0;
                            const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                            if (null != found) {
                              closure_11(found);
                            }
                          }
                        }
                        cResult[23] = tmp9;
                        cResult[24] = stickers;
                        cResult[25] = Q;
                      }
                      class J {
                        constructor(arg0) {
                          let closure_0 = arg0;
                          const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                          if (null != found) {
                            closure_10(found);
                          }
                        }
                      }
                      cResult[20] = tmp8;
                      cResult[21] = stickers;
                      cResult[22] = J;
                    } catch (tmp40) {
                      class J {
                        constructor(arg0) {
                          let closure_0 = arg0;
                          const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                          if (null != found) {
                            closure_10(found);
                          }
                        }
                      }
                      class Q {
                        constructor(arg0) {
                          let closure_0 = arg0;
                          const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                          if (null != found) {
                            closure_11(found);
                          }
                        }
                      }
                      const addBreadcrumb = tmp42.addBreadcrumb;
                      const obj4 = {
                        itemLength: items.length,
                        items: found.map((stickerId) => ({
                          stickerId: stickerId.stickerId,
                          stickerName: stickerId.stickerName,
                          stickerUrl: stickerId.stickerUrl,
                        })),
                      };
                      found = items.filter(
                        (stickerId) =>
                          null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl,
                      );
                      tmp43[2] = obj4;
                      addBreadcrumb(tmp43);
                      throw tmp40;
                    }
                  } else {
                    if (cResult[26] === tmp9) {
                      if (cResult[27] === tmp8) {
                        if (cResult[28] === rowSize) {
                          if (cResult[29] === tmp13) {
                            if (cResult[30] === stickers) {
                              if (cResult[31] === tmp5.disabledOverlay) {
                                let tmp16;
                                if (cResult[32] === tmp5.stickerImage) {
                                  tmp16 = cResult[33];
                                  class J {
                                    constructor(arg0) {
                                      let closure_0 = arg0;
                                      const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                                      if (null != found) {
                                        closure_10(found);
                                      }
                                    }
                                  }
                                }
                                class J {
                                  constructor(arg0) {
                                    let closure_0 = arg0;
                                    const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                                    if (null != found) {
                                      closure_10(found);
                                    }
                                  }
                                }
                                class Q {
                                  constructor(arg0) {
                                    let closure_0 = arg0;
                                    const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                                    if (null != found) {
                                      closure_11(found);
                                    }
                                  }
                                }
                                const obj5 = { style: tmp5.row, children: tmp16 };
                                cResult[34] = tmp16;
                                cResult[35] = tmp5.row;
                                cResult[36] = setting(focusedSticker, obj5);
                                const tmp22 = setting(focusedSticker, obj5);
                              }
                            }
                          }
                        }
                      }
                    }
                    class J {
                      constructor(arg0) {
                        let closure_0 = arg0;
                        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                        if (null != found) {
                          closure_10(found);
                        }
                      }
                    }
                    class Q {
                      constructor(arg0) {
                        let closure_0 = arg0;
                        const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
                        if (null != found) {
                          closure_11(found);
                        }
                      }
                    }
                    let c14 = 0;
                    let num12 = 0;
                    if (0 < rowSize) {
                      do {
                        let tmp18 = _loop();
                        sum = num12 + 1;
                        c14 = sum;
                        num12 = sum;
                      } while (sum < rowSize);
                    }
                    cResult[26] = tmp9;
                    cResult[27] = tmp8;
                    cResult[28] = rowSize;
                    cResult[29] = tmp13;
                    cResult[30] = stickers;
                    cResult[31] = tmp5.disabledOverlay;
                    cResult[32] = tmp5.stickerImage;
                    cResult[33] = tmp17;
                    tmp16 = tmp17;
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
          let id1;
          const shouldAnimateSticker = StickersUtils.shouldAnimateSticker;
          id = id.id;
          StickersUtils;
          if (focusedSticker != null) {
            id1 = focusedSticker.id;
          }
          let isSendableStickerResult = size;
          const shouldAnimateStickerResult = shouldAnimateSticker(setting, id === id1);
          if (!size) {
            isSendableStickerResult = null == channel;
          }
          if (!isSendableStickerResult) {
            const tmpResult = StickerSendability;
            isSendableStickerResult = tmpResult.isSendableSticker(id, UserStore.getCurrentUser(), channel);
          }
          return {
            isAnimated: shouldAnimateStickerResult,
            isOpaque: isSendableStickerResult,
            isDisabled: null == onPressSticker,
            isLocked: mobileStickerPickerUpsellRestyleEnabled && !isSendableStickerResult,
          };
        }
        cResult[7] = id1;
        cResult[8] = undefined !== isSectionNitroLocked && isSectionNitroLocked;
        cResult[9] = onPressSticker;
        cResult[10] = mobileStickerPickerUpsellRestyleEnabled;
        cResult[11] = rowTraits;
        tmp13 = rowTraits;
      }
      function handleOnLongPressSticker(arg0) {
        if (null != onLongPressStickerDetail) {
          const obj2 = HapticUtils;
          const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          tmp(arg0);
        } else {
          const AnimateStickers = UserSettings.AnimateStickers;
          if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
            const obj = HapticUtils;
            const result1 = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
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
    }
  : function StickerPickerListRow(stickers) {
      let closure_3;
      let closure_7;
      let currentUser;
      let found;
      let isDisabled;
      let isLocked;
      let isOpaque;
      let isSectionNitroLocked;
      let nativeRow;
      let obj10;
      let obj6;
      let obj8;
      let rowSize;
      let sum;
      function _loop2() {
        let closure_0;
        let items1;
        stickers = tmp2;
        if (undefined === stickers[c12]) {
          let obj = { style: closure_7.stickerImage };
          items.push(closure_8(closure_3, obj, c12));
          return 1;
        } else {
          let id1;
          const shouldAnimateSticker = stickers(dependencyMap[18]).shouldAnimateSticker;
          const id = tmp2.id;
          stickers(dependencyMap[18]);
          if (UserStore != null) {
            id1 = UserStore.id;
          }
          let isSendableStickerResult = isSectionNitroLocked;
          const shouldAnimateStickerResult = shouldAnimateSticker(closure_8, id === id1);
          if (!isSectionNitroLocked) {
            isSendableStickerResult = null == closure_6;
          }
          if (!isSendableStickerResult) {
            const tmp26Result = stickers(dependencyMap[19]);
            isSendableStickerResult = tmp26Result.isSendableSticker(tmp2, UserStore.getCurrentUser(), closure_6);
          }
          let tmp11 = closure_9;
          const tmp10 = null == dependencyMap;
          if (closure_9) {
            tmp11 = !isSendableStickerResult;
          }
          const push = items.push;
          const obj2 = {
            accessibilityRole: "button",
            accessibilityLabel: stickers[c12].name,
            style: items,
            disabled: tmp10,
            onPress() {
              const obj = closure_0(closure_1_2[16]);
              const result = obj.triggerHapticFeedback(isSectionNitroLocked(closure_1_2[17]).IMPACT_LIGHT);
              if (dependencyMap != null) {
                dependencyMap(closure_0);
              }
            },
            onLongPress() {
              return handleOnLongPressSticker(closure_0);
            },
            children: items1,
          };
          items = [closure_7.stickerImage];
          let disabledOverlay = tmp11;
          const PressableOpacity = tmp26(dependencyMap[24]).PressableOpacity;
          if (tmp11) {
            disabledOverlay = closure_7.disabledOverlay;
          }
          items[1] = disabledOverlay;
          const obj3 = {
            sticker: stickers[c12],
            size: STICKER_SIZE,
            animated: shouldAnimateStickerResult,
            opaque: isSendableStickerResult,
          };
          items1 = [closure_8(isSectionNitroLocked(dependencyMap[21]), obj3, c12)];
          let tmp17 = null;
          if (tmp11) {
            tmp17 = closure_8(items, {});
          }
          items1[1] = tmp17;
          push(closure_9(PressableOpacity, obj2, stickers[c12].id));
        }
      }
      stickers = stickers.stickers;
      ({ rowSize, isSectionNitroLocked } = stickers);
      const containerWidth = stickers.containerWidth;
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
        const tmp = stickers;
        let obj = stickers(1369);
        nativeRow = obj.isAndroid();
      }
      let c12;
      function handleOnLongPressSticker(arg0) {
        if (null != closure_3) {
          const obj2 = HapticUtils;
          const result = obj2.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
          tmp(arg0);
        } else {
          const AnimateStickers = UserSettings.AnimateStickers;
          if (AnimateStickers.getSetting() === StickerAnimationSettings.ANIMATE_ON_INTERACTION) {
            const obj = HapticUtils;
            const result1 = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            if (StickerAnimationSettings != null) {
              StickerAnimationSettings(arg0);
            }
          }
        }
      }
      function rowTraits(id) {
        let id1;
        const shouldAnimateSticker = StickersUtils.shouldAnimateSticker;
        id = id.id;
        StickersUtils;
        if (UserStore != null) {
          id1 = UserStore.id;
        }
        let isSendableStickerResult = isSectionNitroLocked;
        const shouldAnimateStickerResult = shouldAnimateSticker(closure_8, id === id1);
        if (!isSectionNitroLocked) {
          isSendableStickerResult = null == STICKER_SIZE;
        }
        if (!isSendableStickerResult) {
          const tmpResult = StickerSendability;
          isSendableStickerResult = tmpResult.isSendableSticker(id, UserStore.getCurrentUser(), STICKER_SIZE);
        }
        return {
          isAnimated: shouldAnimateStickerResult,
          isOpaque: isSendableStickerResult,
          isDisabled: null == dependencyMap,
          isLocked: closure_9 && !isSendableStickerResult,
        };
      }
      const tmp3 = handleOnLongPressSticker();
      rowContentPaddingVertical = tmp3;
      let AnimateStickers = stickers(2028).AnimateStickers;
      let closure_8 = AnimateStickers.useSetting();
      let obj2 = stickers(8826);
      let closure_9 = obj2.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPickerListRow");
      let items = [];
      if (nativeRow) {
        let num4 = 0;
        if (0 < rowSize) {
          do {
            let tmp9 = stickers[num4];
            let tmp10 = num4;
            if (undefined !== tmp9) {
              let rowTraitsResult = rowTraits(tmp9);
              let isAnimated = rowTraitsResult.isAnimated;
              let obj3 = {
                stickerId: null,
                stickerName: null,
                stickerType: null,
                stickerUrl: obj6.getStickerAssetUrl(tmp9, STICKER_SIZE, isAnimated),
                stickerAnimated: isAnimated,
                stickerDisabled: isDisabled,
                stickerOpaque: isOpaque,
                stickerLocked: isLocked,
              };
              ({ id: obj5.stickerId, name: obj5.stickerName, format_type: obj5.stickerType } = tmp9);
              ({ isOpaque, isDisabled, isLocked } = rowTraitsResult);
              let push2 = items.push;
              obj6 = stickers(10127);
              let push2Result = push2(obj3);
            } else {
              let obj4 = {
                stickerId: "",
                stickerName: "",
                stickerType: stickers(5429).StickerFormat.PNG,
                stickerUrl: "",
                stickerAnimated: false,
                stickerDisabled: true,
                stickerOpaque: false,
                stickerLocked: false,
              };
              let tmp11 = stickers;
              let push = items.push;
              let arr = push(obj4);
            }
            num4 = num4 + 1;
          } while (num4 < rowSize);
        }
        try {
          const obj7 = {
            style: tmp3.row,
            rowData: obj8,
            onPressSticker(arg0) {
              let closure_0 = arg0;
              const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
              if (null != found) {
                const obj = HapticUtils;
                const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
                if (dependencyMap != null) {
                  dependencyMap(found);
                }
              }
            },
            onLongPressSticker(arg0) {
              let closure_0 = arg0;
              const found = stickers.find((id) => id.id === nativeEvent.nativeEvent.stickerId);
              if (null != found) {
                handleOnLongPressSticker(found);
              }
            },
          };
          obj8 = { rowContentWidth: containerWidth, rowContentPaddingVertical, itemSize: STICKER_SIZE, items };
          return closure_8(isSectionNitroLocked(10130), obj7);
        } catch (tmp23) {
          const obj9 = { message: "Error in StickerPickerListRowNativeComponent", category: "sticker", data: obj10 };
          obj10 = {
            itemLength: items.length,
            items: found.map((stickerId) => ({
              stickerId: stickerId.stickerId,
              stickerName: stickerId.stickerName,
              stickerUrl: stickerId.stickerUrl,
            })),
          };
          const addBreadcrumb = isSectionNitroLocked(1242).addBreadcrumb;
          isSectionNitroLocked(1242);
          found = items.filter(
            (stickerId) => null == stickerId.stickerId || null == stickerId.stickerName || null == stickerId.stickerUrl,
          );
          addBreadcrumb(obj9);
          throw tmp23;
        }
      } else {
        c12 = 0;
        let num2 = 0;
        if (0 < rowSize) {
          do {
            let tmp5 = _loop2();
            sum = num2 + 1;
            c12 = sum;
            num2 = sum;
          } while (sum < rowSize);
        }
        const obj17 = { style: tmp3.row, children: items };
        return closure_8(closure_3, obj17);
      }
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListRow.tsx");

export default tmp8;
