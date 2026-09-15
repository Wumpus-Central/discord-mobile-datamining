// discord_app/modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx
import util from "../../../../intl/index.native.tsx";
import ImageIcon from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import AttachmentIcon from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import PollsIcon from "../../../../design/components/Icon/native/redesign/generated/PollsIcon.tsx";
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple.tsx";
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(1608).MediaPickerActionSheetEngagedActions;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx");

export default function MediaKeyboardActionSheet(onAttachPress) {
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
  const sharedValue = onAttachPress(onClose[4]).useSharedValue(-1);
  let items = [onAttachPress];
  const memo = onBack.useMemo(() => {
    const obj = { text: null, IconComponent: null, onPress: null, disabled: true };
    const intl = util.intl;
    obj.text = intl.string(util.t.RgIi2B);
    obj.IconComponent = PollsIcon.PollsIcon;
    obj.onPress = function onPress() {};
    const items = [obj];
    const obj2 = { text: null, IconComponent: null, onPress: null, disabled: false };
    const intl2 = util.intl;
    obj2.text = intl2.string(util.t["8Hvr3+"]);
    obj2.IconComponent = AttachmentIcon.AttachmentIcon;
    obj2.onPress = onAttachPress;
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
    const result = onAttachPress(onClose[9]).triggerHapticFeedback(onViewAll(onClose[10]).IMPACT_LIGHT);
    const obj = onAttachPress(onClose[9]);
    onViewAll(onClose[11]).track(memo.MEDIA_PICKER_ACTION_SHEET_ENGAGED, { action: sharedValue.FULLY_EXPANDED });
  }, []);
  const callback2 = onBack.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
  }, items2);
  onViewAll(onClose[12])(() => () => {
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
      onHeightChange() {},
      uploadDisabled: false,
      overflowButtons: null,
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
      onHeightChange() {},
      uploadDisabled: false,
      overflowButtons: null,
    });
  }, items3);
  let obj2 = {
    handleComponent: callback,
    scrollable: true,
    startExpanded: null,
    onExpand: null,
    onDismiss: null,
    animatedIndex: null,
    footer: null,
    children: null,
  };
  let obj = onAttachPress(onClose[4]);
  obj2.startExpanded = onAttachPress(onClose[16]).isMetaQuest();
  obj2.onExpand = callback1;
  obj2.onDismiss = callback2;
  obj2.animatedIndex = sharedValue;
  obj2.footer = memo1;
  obj2.children = callback2(onViewAll(onClose[17]), {
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
  return callback2(onAttachPress(onClose[15]).BottomSheet, obj2);
}
