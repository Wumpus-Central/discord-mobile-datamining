// discord_app/modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import MediaKeyboardConstants from "../MediaKeyboardConstants.tsx";
import ImageIcon from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import PollsIcon from "../../../../design/components/Icon/native/redesign/generated/PollsIcon.tsx";
import AttachmentIcon from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple.tsx";
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

const constants = MediaKeyboardConstants.MediaPickerActionSheetEngagedActions;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onBack) => {
      let allowCamera;
      let channel;
      let constants2;
      let disableWhenReachedLimit;
      let draftType;
      let extensions;
      let first;
      let includedUploadIds;
      let onAttachPress;
      let onClose;
      let onLongPressItem;
      let onManageLimited;
      let onPressCamera;
      let onPressItem;
      let onViewAll;
      let sharedValue;
      let tmp11;
      let tmp8;
      let tmp9;
      let uploadLimit;
      let obj = onClose(sharedValue[5]);
      const cResult = obj.c(41);
      ({
        channel,
        draftType,
        uploadLimit,
        disableWhenReachedLimit,
        includedUploadIds,
        extensions,
        allowCamera,
        onPressCamera,
        onAttachPress,
        onPressItem,
        onLongPressItem,
        onViewAll,
        onManageLimited,
        onClose,
      } = onBack);
      onBack = onBack.onBack;
      let obj2 = onClose(sharedValue[6]);
      sharedValue = obj2.useSharedValue(-1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onClose(tmp3[7]).intl;
        const stringResult = intl.string(onClose(sharedValue[7]).t.RgIi2B);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = {
          text: first,
          IconComponent: onClose(sharedValue[8]).PollsIcon,
          onPress() {},
          disabled: true,
        };
        const intl2 = onClose(tmp3[7]).intl;
        const stringResult1 = intl2.string(onClose(sharedValue[7]).t["8Hvr3+"]);
        cResult[1] = obj3;
        cResult[2] = stringResult1;
        tmp9 = stringResult1;
        tmp8 = obj3;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      if (cResult[3] !== onAttachPress) {
        const items = [tmp8];
        items[1] = {
          text: tmp9,
          IconComponent: onClose(sharedValue[9]).AttachmentIcon,
          onPress: onAttachPress,
          disabled: false,
        };
        cResult[3] = onAttachPress;
        cResult[4] = items;
        tmp11 = items;
        const obj4 = {
          text: tmp9,
          IconComponent: onClose(sharedValue[9]).AttachmentIcon,
          onPress: onAttachPress,
          disabled: false,
        };
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === sharedValue) {
        let tmp19;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor() {
              const obj = onClose(sharedValue[11]);
              const result = obj.triggerHapticFeedback(onBack(sharedValue[12]).IMPACT_LIGHT);
              const obj2 = onBack(sharedValue[13]);
              const obj3 = { action: constants.FULLY_EXPANDED };
              obj2.track(constants2.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
            }
          }
          cResult[8] = H;
        } else {
          class H {
            constructor() {
              const obj = onClose(sharedValue[11]);
              const result = obj.triggerHapticFeedback(onBack(sharedValue[12]).IMPACT_LIGHT);
              const obj2 = onBack(sharedValue[13]);
              const obj3 = { action: constants.FULLY_EXPANDED };
              obj2.track(constants2.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
            }
          }
        }
        if (cResult[9] !== onClose) {
          class B {
            constructor() {
              if (onClose != null) {
                tmp();
              }
            }
          }
          cResult[9] = onClose;
          cResult[10] = B;
        } else {
          class B {
            constructor() {
              if (onClose != null) {
                tmp();
              }
            }
          }
        }
        B = tmp14;
        if (cResult[11] !== tmp14) {
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
          cResult[11] = tmp14;
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
        onBack(sharedValue[14])(G);
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {}
          }
          cResult[13] = U;
        } else {
          class U {
            constructor() {}
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {}
          }
          const stringResult2 = obj5.string(onClose(sharedValue[7]).t.Zmm6dN);
          cResult[14] = stringResult2;
          tmp19 = stringResult2;
        } else {
          class U {
            constructor() {}
          }
        }
        if (cResult[15] !== onViewAll) {
          class U {
            constructor() {}
          }
          tmp22[0] = tmp19;
          tmp22[1] = onClose(sharedValue[15]).ImageIcon;
          tmp22[2] = onViewAll;
          cResult[15] = onViewAll;
          cResult[16] = tmp22;
        } else {
          class U {
            constructor() {}
          }
        }
        if (cResult[17] === tmp11) {
          class U {
            constructor() {}
          }
          const _Symbol4 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {}
            }
            cResult[20] = obj7.isMetaQuest();
            const isMetaQuestResult = obj7.isMetaQuest();
          } else {
            class U {
              constructor() {}
            }
          }
          if (cResult[21] === allowCamera) {
            class U {
              constructor() {}
            }
          }
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
          cResult[34] = jsx(onBack(sharedValue[18]), {
            channel,
            draftType,
            onPressCamera,
            onAttachPress,
            onPressItem,
            onLongPressItem,
            onViewAll,
            onManageLimited,
            includedUploadIds,
            extensions,
            allowCamera,
            uploadLimit,
            disableWhenReachedLimit,
          });
          const tmp34 = jsx(onBack(sharedValue[18]), {
            channel,
            draftType,
            onPressCamera,
            onAttachPress,
            onPressItem,
            onLongPressItem,
            onViewAll,
            onManageLimited,
            includedUploadIds,
            extensions,
            allowCamera,
            uploadLimit,
            disableWhenReachedLimit,
          });
        }
        const items1 = [tmp22];
        onBack(sharedValue[16]);
        HermesBuiltin.arraySpread(items1, tmp11, 1);
        const tmp29 = (
          <tmp16Result canPostPolls={false} onHeightChange={U} uploadDisabled={false} overflowButtons={items1} />
        );
        cResult[17] = tmp11;
        cResult[18] = tmp22;
        cResult[19] = tmp29;
      }
      const fn = function k() {
        return jsx(MediaKeyboardBottomSheetHeaderSimpleDefault, { animatedIndex: sharedValue, onPress: onBack });
      };
      cResult[5] = sharedValue;
      cResult[6] = onBack;
      cResult[7] = fn;
    }
  : (onAttachPress) => {
      let allowCamera;
      let channel;
      let disableWhenReachedLimit;
      let draftType;
      let extensions;
      let includedUploadIds;
      let obj3;
      let onLongPressItem;
      let onManageLimited;
      let onPressCamera;
      let onPressItem;
      let uploadLimit;
      onAttachPress = onAttachPress.onAttachPress;
      const onViewAll = onAttachPress.onViewAll;
      const onClose = onAttachPress.onClose;
      const onBack = onAttachPress.onBack;
      ({
        channel,
        draftType,
        uploadLimit,
        disableWhenReachedLimit,
        includedUploadIds,
        extensions,
        allowCamera,
        onPressCamera,
        onPressItem,
        onLongPressItem,
        onManageLimited,
      } = onAttachPress);
      let obj = onAttachPress(onClose[6]);
      const sharedValue = obj.useSharedValue(-1);
      let items = [onAttachPress];
      const memo = onBack.useMemo(() => {
        let intl;
        let intl2;
        const obj = {
          text: intl.string(intl3.t.RgIi2B),
          IconComponent: PollsIcon.PollsIcon,
          onPress() {},
          disabled: true,
        };
        intl = intl3.intl;
        const items = [obj];
        const obj2 = {
          text: intl2.string(intl3.t["8Hvr3+"]),
          IconComponent: AttachmentIcon.AttachmentIcon,
          onPress: onAttachPress,
          disabled: false,
        };
        intl2 = intl3.intl;
        items[1] = obj2;
        return items;
      }, items);
      const items1 = [sharedValue, onBack];
      const callback = onBack.useCallback(
        () => jsx(MediaKeyboardBottomSheetHeaderSimpleDefault, { animatedIndex: sharedValue, onPress: onBack }),
        items1,
      );
      const items2 = [onClose];
      const callback1 = onBack.useCallback(() => {
        const obj = onAttachPress(onClose[11]);
        const result = obj.triggerHapticFeedback(onViewAll(onClose[12]).IMPACT_LIGHT);
        const obj2 = onViewAll(onClose[13]);
        const obj3 = { action: sharedValue.FULLY_EXPANDED };
        obj2.track(memo.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj3);
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
        let intl;
        const obj2 = {
          text: intl.string(intl3.t.Zmm6dN),
          IconComponent: ImageIcon.ImageIcon,
          onPress: onViewAll,
          disabled: false,
        };
        MediaKeyboardBottomSheetActionsDefault;
        intl = intl3.intl;
        const items = [obj2, ...memo];
        return (
          <tmp
            canPostPolls={false}
            onHeightChange={function onHeightChange() {}}
            uploadDisabled={false}
            overflowButtons={items}
          />
        );
      }, items3);
      let obj2 = {
        handleComponent: callback,
        scrollable: true,
        startExpanded: obj3.isMetaQuest(),
        onExpand: callback1,
        onDismiss: callback2,
        animatedIndex: sharedValue,
        footer: memo1,
        children: callback2(onViewAll(onClose[18]), {
          channel,
          draftType,
          onPressCamera,
          onAttachPress,
          onPressItem,
          onLongPressItem,
          onViewAll,
          onManageLimited,
          includedUploadIds,
          extensions,
          allowCamera,
          uploadLimit,
          disableWhenReachedLimit,
        }),
      };
      BottomSheet = onAttachPress(onClose[19]).BottomSheet;
      obj3 = onAttachPress(onClose[17]);
      return callback2(BottomSheet, obj2);
    };
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx");

export default tmp2;
