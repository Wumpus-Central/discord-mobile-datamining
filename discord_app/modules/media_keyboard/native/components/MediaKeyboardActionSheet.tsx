// discord_app/modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { MediaPickerActionSheetEngagedActions as closure_4 } from "../MediaKeyboardConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx");

export default function MediaKeyboardActionSheet(onAttachPress) {
  onAttachPress = onAttachPress.onAttachPress;
  const onViewAll = onAttachPress.onViewAll;
  const onClose = onAttachPress.onClose;
  const onBack = onAttachPress.onBack;
  ({ channel, draftType, uploadLimit, disableWhenReachedLimit, includedUploadIds, extensions, allowCamera, onPressCamera, onPressItem, onLongPressItem, onManageLimited } = onAttachPress);
  let obj = onAttachPress(onClose[4]);
  const sharedValue = obj.useSharedValue(-1);
  let items = [onAttachPress];
  const memo = onBack.useMemo(() => {
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
  const callback2 = onBack.useCallback(() => {
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
    const obj = { text: null, IconComponent: null, onPress: null, disabled: false };
    const intl = onAttachPress(onClose[5]).intl;
    obj[0] = intl.string(onAttachPress(onClose[5]).t.Zmm6dN);
    obj[1] = onAttachPress(onClose[14]).ImageIcon;
    obj[2] = onViewAll;
    const items = [obj, ...memo];
    obj[3] = items;
    return callback2(onViewAll(onClose[13]), obj);
  }, items3);
  obj = { handleComponent: callback, scrollable: true, startExpanded: onAttachPress(onClose[16]).isMetaQuest(), onExpand: callback1, onDismiss: callback2, animatedIndex: sharedValue, footer: memo1, children: callback2(onViewAll(onClose[17]), { channel, draftType, onPressCamera, onAttachPress, onPressItem, onLongPressItem, onViewAll, onManageLimited, includedUploadIds, extensions, allowCamera, uploadLimit, disableWhenReachedLimit }) };
  return callback2(onAttachPress(onClose[15]).BottomSheet, obj);
};