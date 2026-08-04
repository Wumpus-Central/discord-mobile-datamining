// discord_app/modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx
import noop from "noop";
import { MediaPickerActionSheetEngagedActions as closure_4 } from "DRAG_HANDLE";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx");

export default function MediaKeyboardActionSheet(onAttachPress) {
  let allowCamera;
  let channel;
  let disableWhenReachedLimit;
  let draftType;
  let extensions;
  let includedUploadIds;
  let onLongPressItem;
  let onManageLimited;
  let onPressCamera;
  let onPressItem;
  let uploadLimit;
  onAttachPress = onAttachPress.onAttachPress;
  const onViewAll = onAttachPress.onViewAll;
  const onClose = onAttachPress.onClose;
  const onBack = onAttachPress.onBack;
  let sharedValue;
  let memo;
  let callback2;
  ({ channel, draftType, uploadLimit, disableWhenReachedLimit, includedUploadIds, extensions, allowCamera, onPressCamera, onPressItem, onLongPressItem, onManageLimited } = onAttachPress);
  let obj = onAttachPress(onClose[4]);
  sharedValue = obj.useSharedValue(-1);
  let items = [onAttachPress];
  memo = onBack.useMemo(() => {
    let obj = { text: null, IconComponent: null, onPress: null, disabled: true };
    const intl = onAttachPress(onClose[5]).intl;
    obj[0] = intl.string(onAttachPress(onClose[5]).t.RgIi2B);
    obj[1] = onAttachPress(onClose[6]).PollsIcon;
    obj[2] = function onPress() {

    };
    const items = [obj, ];
    obj = { text: null, IconComponent: null, onPress: null, disabled: false };
    const intl2 = onAttachPress(onClose[5]).intl;
    obj[0] = intl2.string(onAttachPress(onClose[5]).t["8Hvr3+"]);
    obj[1] = onAttachPress(onClose[7]).AttachmentIcon;
    obj[2] = onAttachPress;
    items[1] = obj;
    return items;
  }, items);
  const items1 = [sharedValue, onBack];
  const callback = onBack.useCallback(() => callback2(onViewAll(onClose[8]), { animatedIndex: sharedValue, onPress: onBack }), items1);
  const items2 = [onClose];
  const callback1 = onBack.useCallback(() => {
    let obj = onAttachPress(onClose[9]);
    const result = obj.triggerHapticFeedback(onViewAll(onClose[10]).IMPACT_LIGHT);
    obj = { action: sharedValue.FULLY_EXPANDED };
    onViewAll(onClose[11]).track(memo.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
  }, []);
  callback2 = onBack.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
  }, items2);
  onViewAll(onClose[12])(() => () => {
    let tmp;
    if (callback != null) {
      tmp = callback();
    }
    return tmp;
  });
  const items3 = [onViewAll, memo];
  const memo1 = onBack.useMemo(() => {
    let obj = {
      canPostPolls: false,
      onHeightChange() {

      },
      uploadDisabled: false,
      overflowButtons: null
    };
    obj = { text: null, IconComponent: null, onPress: null, disabled: false };
    const intl = onAttachPress(onClose[5]).intl;
    obj[0] = intl.string(onAttachPress(onClose[5]).t.Zmm6dN);
    obj[1] = onAttachPress(onClose[14]).ImageIcon;
    obj[2] = onViewAll;
    const items = [obj, ...memo];
    obj[3] = items;
    return callback2(onViewAll(onClose[13]), obj);
  }, items3);
  obj = { handleComponent: callback, scrollable: true, startExpanded: null, onExpand: null, onDismiss: null, animatedIndex: null, footer: null, children: null };
  obj[2] = onAttachPress(onClose[16]).isMetaQuest();
  obj[3] = callback1;
  obj[4] = callback2;
  obj[5] = sharedValue;
  obj[6] = memo1;
  obj[7] = callback2(onViewAll(onClose[17]), { channel, draftType, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, includedUploadIds, extensions, allowCamera, uploadLimit, disableWhenReachedLimit });
  return callback2(onAttachPress(onClose[15]).BottomSheet, obj);
};