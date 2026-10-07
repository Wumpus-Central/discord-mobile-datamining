// === Module 10379: MediaKeyboardActionSheet ===

// Module 10379 (MediaKeyboardActionSheet)
import util from "util" /* 1126 */;
import ImageIcon from "ImageIcon" /* 5878 */;
import PollsIcon from "PollsIcon" /* 10380 */;
import AttachmentIcon from "AttachmentIcon" /* 10382 */;
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple" /* 10384 */;
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions" /* 10386 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(1614).MediaPickerActionSheetEngagedActions;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onBack) => {
  const cResult = onClose(sharedValue[5]).c(41);
  ({ channel, draftType, uploadLimit, disableWhenReachedLimit, includedUploadIds, extensions, allowCamera, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, onClose } = onBack);
  onBack = onBack.onBack;
  let obj = onClose(sharedValue[5]);
  sharedValue = onClose(sharedValue[6]).useSharedValue(-1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = onClose(tmp2[7]).intl;
    const stringResult = intl.string(onClose(tmp2[7]).t.RgIi2B);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {
      text: first,
      IconComponent: onClose(tmp2[8]).PollsIcon,
      onPress() {

        },
      disabled: true
    };
    const intl2 = onClose(tmp2[7]).intl;
    const stringResult1 = intl2.string(onClose(tmp2[7]).t["8Hvr3+"]);
    cResult[1] = obj3;
    cResult[2] = stringResult1;
    let tmp8 = stringResult1;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  if (cResult[3] !== onAttachPress) {
    const items = [tmp7, ];
    const obj4 = { text: tmp8, IconComponent: onClose(tmp2[9]).AttachmentIcon, onPress: onAttachPress, disabled: false };
    items[1] = obj4;
    cResult[3] = onAttachPress;
    cResult[4] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === sharedValue) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          obj = onClose(closure_2[11]);
          result = obj.triggerHapticFeedback(onBack(closure_2[12]).IMPACT_LIGHT);
          obj2 = onBack(closure_2[13]);
          obj1 = { action: closure_1_4.FULLY_EXPANDED };
          trackResult = obj2.track(closure_1_5.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj1);
          return;
        }
      }
      cResult[8] = H;
    } else {
      class H {
        constructor() {
          obj = onClose(closure_2[11]);
          result = obj.triggerHapticFeedback(onBack(closure_2[12]).IMPACT_LIGHT);
          obj2 = onBack(closure_2[13]);
          obj1 = { action: closure_1_4.FULLY_EXPANDED };
          trackResult = obj2.track(closure_1_5.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj1);
          return;
        }
      }
    }
    if (cResult[9] !== onClose) {
      class B {
        constructor() {
          if (onClose != null) {
            tmpResult = tmp();
          }
          return;
        }
      }
      cResult[9] = onClose;
      cResult[10] = B;
    } else {
      class B {
        constructor() {
          if (onClose != null) {
            tmpResult = tmp();
          }
          return;
        }
      }
    }
    closure_3 = B;
    if (cResult[11] !== B) {
      class G {
        constructor() {
          return () => {
            let tmp;
            if (closure_1_3 != null) {
              tmp = closure_1_3();
            }
            return tmp;
          };
        }
      }
      cResult[11] = B;
      cResult[12] = G;
    } else {
      class G {
        constructor() {
          return () => {
            let tmp;
            if (closure_1_3 != null) {
              tmp = closure_1_3();
            }
            return tmp;
          };
        }
      }
    }
    onBack(tmp2[14])(G);
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          return;
        }
      }
      cResult[13] = U;
    } else {
      class U {
        constructor() {
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          return;
        }
      }
      const stringResult2 = obj5.string(onClose(tmp2[7]).t.Zmm6dN);
      cResult[14] = stringResult2;
      const tmp18 = stringResult2;
    } else {
      class U {
        constructor() {
          return;
        }
      }
    }
    if (cResult[15] !== onViewAll) {
      class U {
        constructor() {
          return;
        }
      }
      tmp21[0] = tmp18;
      tmp21[1] = onClose(tmp2[15]).ImageIcon;
      tmp21[2] = onViewAll;
      cResult[15] = onViewAll;
      cResult[16] = tmp21;
    } else {
      class U {
        constructor() {
          return;
        }
      }
    }
    if (cResult[17] === tmp10) {
      class U {
        constructor() {
          return;
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return;
          }
        }
        const isMetaQuestResult = obj7.isMetaQuest();
        cResult[20] = isMetaQuestResult;
      } else {
        class U {
          constructor() {
            return;
          }
        }
      }
      if (cResult[21] === allowCamera) {
        class U {
          constructor() {
            return;
          }
        }
      }
      const obj6 = { channel, draftType, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, includedUploadIds, extensions, allowCamera, uploadLimit, disableWhenReachedLimit };
      const tmp33 = jsx(tmp15(tmp2[18]), { channel, draftType, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, includedUploadIds, extensions, allowCamera, uploadLimit, disableWhenReachedLimit });
      cResult[21] = allowCamera;
      cResult[22] = channel;
      cResult[23] = disableWhenReachedLimit;
      cResult[24] = draftType;
      cResult[25] = extensions;
      cResult[26] = includedUploadIds;
      cResult[27] = onAttachPress;
      cResult[28] = onLongPressItem;
      cResult[29] = onManageLimited;
      cResult[30] = onPressCamera;
      cResult[31] = onPressItem;
      cResult[32] = onViewAll;
      cResult[33] = uploadLimit;
      cResult[34] = tmp33;
    }
    const obj8 = { canPostPolls: false, onHeightChange: U, uploadDisabled: false, overflowButtons: null };
    const items1 = [tmp21];
    HermesBuiltin.arraySpread(tmp10, 1);
    obj8.overflowButtons = items1;
    const tmp28 = jsx(onBack(tmp2[16]), { canPostPolls: false, onHeightChange: U, uploadDisabled: false, overflowButtons: null });
    cResult[17] = tmp10;
    cResult[18] = tmp21;
    cResult[19] = tmp28;
    const tmp15Result = onBack(tmp2[16]);
  }
  const fn = function k() {
    return jsx(MediaKeyboardBottomSheetHeaderSimpleDefault, { animatedIndex: sharedValue, onPress: onBack });
  };
  cResult[5] = sharedValue;
  cResult[6] = onBack;
  cResult[7] = fn;
  const obj2 = onClose(sharedValue[6]);
}) : ((onAttachPress) => {
  onAttachPress = onAttachPress.onAttachPress;
  const onViewAll = onAttachPress.onViewAll;
  const onClose = onAttachPress.onClose;
  const onBack = onAttachPress.onBack;
  ({ channel, draftType, uploadLimit, disableWhenReachedLimit, includedUploadIds, extensions, allowCamera, onPressCamera, onPressItem, onLongPressItem, onManageLimited } = onAttachPress);
  const sharedValue = onAttachPress(onClose[6]).useSharedValue(-1);
  let items = [onAttachPress];
  const memo = onBack.useMemo(() => {
    const obj = { text: null, IconComponent: null, onPress: null, disabled: true };
    const intl = util.intl;
    obj.text = intl.string(util.t.RgIi2B);
    obj.IconComponent = PollsIcon.PollsIcon;
    obj.onPress = function onPress() {

    };
    const items = [obj, ];
    const obj2 = { text: null, IconComponent: null, onPress: null, disabled: false };
    const intl2 = util.intl;
    obj2.text = intl2.string(util.t["8Hvr3+"]);
    obj2.IconComponent = AttachmentIcon.AttachmentIcon;
    obj2.onPress = onAttachPress;
    items[1] = obj2;
    return items;
  }, items);
  const items1 = [sharedValue, onBack];
  const callback = onBack.useCallback(() => jsx(MediaKeyboardBottomSheetHeaderSimpleDefault, { animatedIndex: sharedValue, onPress: onBack }), items1);
  const items2 = [onClose];
  const callback1 = onBack.useCallback(() => {
    const result = onAttachPress(onClose[11]).triggerHapticFeedback(onViewAll(onClose[12]).IMPACT_LIGHT);
    const obj = onAttachPress(onClose[11]);
    onViewAll(onClose[13]).track(memo.MEDIA_PICKER_ACTION_SHEET_ENGAGED, { action: sharedValue.FULLY_EXPANDED });
  }, []);
  const callback2 = onBack.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
  }, items2);
  onViewAll(onClose[14])(() => () => {
    let tmp;
    if (callback2 != null) {
      tmp = callback2();
    }
    return tmp;
  });
  const items3 = [onViewAll, memo];
  const memo1 = onBack.useMemo(() => {
    const obj = {
      canPostPolls: false,
      onHeightChange() {

      },
      uploadDisabled: false,
      overflowButtons: null
    };
    const obj2 = { text: null, IconComponent: null, onPress: null, disabled: false };
    const intl = util.intl;
    obj2.text = intl.string(util.t.Zmm6dN);
    obj2.IconComponent = ImageIcon.ImageIcon;
    obj2.onPress = onViewAll;
    const items = [obj2, ...memo];
    obj.overflowButtons = items;
    return jsx(MediaKeyboardBottomSheetActionsDefault, {
      canPostPolls: false,
      onHeightChange() {

      },
      uploadDisabled: false,
      overflowButtons: null
    });
  }, items3);
  let obj2 = { handleComponent: callback, scrollable: true, startExpanded: null, onExpand: null, onDismiss: null, animatedIndex: null, footer: null, children: null };
  let obj = onAttachPress(onClose[6]);
  obj2.startExpanded = onAttachPress(onClose[17]).isMetaQuest();
  obj2.onExpand = callback1;
  obj2.onDismiss = callback2;
  obj2.animatedIndex = sharedValue;
  obj2.footer = memo1;
  obj2.children = callback2(onViewAll(onClose[18]), { channel, draftType, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, includedUploadIds, extensions, allowCamera, uploadLimit, disableWhenReachedLimit });
  return callback2(onAttachPress(onClose[19]).BottomSheet, obj2);
});