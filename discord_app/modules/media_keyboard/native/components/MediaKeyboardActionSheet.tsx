// discord_app/modules/media_keyboard/native/components/MediaKeyboardActionSheet.tsx
import util from "../../../../intl/index.native.tsx";
import ImageIcon from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import AttachmentIcon from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import PollsIcon from "../../../../design/components/Icon/native/redesign/generated/PollsIcon.tsx";
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple.tsx";
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(1607).MediaPickerActionSheetEngagedActions;
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
  let obj = onAttachPress(onClose[4]);
  const sharedValue = obj.useSharedValue(-1);
  let items = [onAttachPress];
  const memo = onBack.useMemo(() => {
    let obj = { text: null, IconComponent: null, onPress: null, disabled: true };
    const intl = util.intl;
    obj.text = intl.string(util.t.RgIi2B);
    obj.IconComponent = PollsIcon.PollsIcon;
    obj.onPress = function onPress() {};
    const items = [obj];
    obj = { text: null, IconComponent: null, onPress: null, disabled: false };
    const intl2 = util.intl;
    obj.text = intl2.string(util.t["8Hvr3+"]);
    obj.IconComponent = AttachmentIcon.AttachmentIcon;
    obj.onPress = onAttachPress;
    items[1] = obj;
    return items;
  }, items);
  const items1 = [sharedValue, onBack];
  const callback = onBack.useCallback(
    () => jsx(MediaKeyboardBottomSheetHeaderSimpleDefault, { animatedIndex: sharedValue, onPress: onBack }),
    items1,
  );
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
    if (callback2 != null) {
      tmp = callback2();
    }
    return tmp;
  });
  const items3 = [onViewAll, memo];
  const memo1 = onBack.useMemo(() => {
    let obj = {
      canPostPolls: false,
      onHeightChange() {},
      uploadDisabled: false,
      overflowButtons: null,
    };
    obj = { text: null, IconComponent: null, onPress: null, disabled: false };
    const intl = util.intl;
    obj.text = intl.string(util.t.Zmm6dN);
    obj.IconComponent = ImageIcon.ImageIcon;
    obj.onPress = onViewAll;
    const items = [obj, ...memo];
    obj.overflowButtons = items;
    return jsx(MediaKeyboardBottomSheetActionsDefault, {
      text: null,
      IconComponent: null,
      onPress: null,
      disabled: false,
    });
  }, items3);
  obj = {
    handleComponent: callback,
    scrollable: true,
    startExpanded: onAttachPress(onClose[16]).isMetaQuest(),
    onExpand: callback1,
    onDismiss: callback2,
    animatedIndex: sharedValue,
    footer: memo1,
    children: callback2(onViewAll(onClose[17]), {
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
  return callback2(onAttachPress(onClose[15]).BottomSheet, obj);
}
