// === Module 16758: MediaKeyboard ===

// Module 16758 (MediaKeyboard)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import ThreadIcon from "ThreadIcon" /* 5073 */;
import ImageIcon from "ImageIcon" /* 5087 */;
import AppsIcon from "AppsIcon" /* 5106 */;
import Upload from "Upload" /* 5128 */;
import AttachmentIcon from "AttachmentIcon" /* 10112 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10635 */;
import PollsIcon from "PollsIcon" /* 10638 */;
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple" /* 10640 */;
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions" /* 10642 */;
import PollCreationModalActionCreators from "PollCreationModalActionCreators" /* 12197 */;
import MediaKeyboardAccessoriesContainerDefault from "MediaKeyboardAccessoriesContainer" /* 16761 */;
import MediaKeyboardFloatingSendDefault from "MediaKeyboardFloatingSend" /* 16762 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;

require = fn;
const DraftType = fn(4901).DraftType;
const MediaKeyboardConstants = fn(1607);
({ MediaKeyboardTarget: metroRequire, MediaPickerActionSheetEngagedActions: closure_7 } = MediaKeyboardConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9 } = Constants);
const AppLauncherRouteName = fn(1482).AppLauncherRouteName;
const KEYBOARD_ANIMATION_CONFIG = fn(12036).KEYBOARD_ANIMATION_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboard.tsx");

export default noop.memo(function MediaKeyboard(channel) {
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  let sharedValue;
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  ({ onClose, transitionState } = channel);
  const effect = sharedValue.useEffect(() => {
    const obj = { type: constants2.MEDIA_PICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items);
  let ref = sharedValue.useRef(null);
  let obj = channel(ref[9]);
  sharedValue = obj.useSharedValue(-1);
  const sharedValue1 = channel(ref[9]).useSharedValue(0);
  let obj2 = channel(ref[9]);
  const keyboardContextForType = channel(ref[10]).useKeyboardContextForType(channel(ref[11]).KeyboardTypes.MEDIA);
  let obj3 = channel(ref[10]);
  const obj4 = channel(ref[12]);
  const token = channel(ref[13]).useToken(chatInputRef(ref[14]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET);
  let obj5 = channel(ref[13]);
  const isAppLauncherEnabled = channel(ref[15]).getIsAppLauncherEnabled(channel);
  let tmp8 = chatInputRef(ref[16])({ channel, context: keyboardContextForType });
  closure_8 = tmp8;
  let obj6 = channel(ref[15]);
  const fileTypeFiltering = channel(ref[17]).useFileTypeFiltering(tmp8.fileTypes);
  const allowedExtensions = fileTypeFiltering.allowedExtensions;
  const validateFilenames = fileTypeFiltering.validateFilenames;
  const showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  let items1 = [sharedValue, channel, chatInputRef, keyboardContextForType, ref, tmp8, allowedExtensions, validateFilenames, showInvalidFileTypeAlert];
  const memo = sharedValue.useMemo(() => {
    function onRestoreKeyboard() {
      if (keyboardContextForType.target !== token.APP_LAUNCHER) {
        const current = onSelectFiles.current;
        const obj = { type: channel(ref[11]).KeyboardTypes.MEDIA, context: tmp };
        current.openCustomKeyboard(obj);
      }
    }
    function onSelectFiles(items, IMAGE_PICKER) {
      if (keyboardContextForType.target === token.CHAT) {
        channel(ref[18]).addImagesFromPicker(onRestoreKeyboard.id, items, IMAGE_PICKER);
        const obj3 = channel(ref[18]);
      } else if (tmp.target === tmp2.COMMAND) {
        if (extensions.length > 0) {
          items = [channel(ref[19]).getFileFromUploadItem(items[0]).filename];
          if (!validateFilenames(items)) {
            return showInvalidFileTypeAlert();
          }
          const obj = channel(ref[19]);
        }
        const obj2 = channel(ref[18]);
        const result = obj2.addAttachmentForCommand(onRestoreKeyboard.id, onSelectFiles, items[0], tmp, IMAGE_PICKER);
      }
    }
    function onSelectItem(arg0) {
      ({ channelId, item, isIncluded } = arg0);
      chatInputRef(ref[8]);
      const obj = { action: isAppLauncherEnabled.MEDIA_SELECTED };
      obj.track(closure_8.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
      if (keyboardContextForType.target === token.CHAT) {
        const obj5 = channel(tmp[18]);
        const result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
      } else if (tmp3.target === tmp4.COMMAND) {
        const result1 = channel(tmp[18]).mediaNodeToUploadItem(item);
        if (extensions.length > 0) {
          let tmp19Result = tmp19(tmp[19]);
          const items = [tmp19Result.getFileFromUploadItem(result1).filename];
          if (!validateFilenames(items)) {
            return showInvalidFileTypeAlert();
          }
        }
        tmp19Result = tmp19(tmp[18]);
        const result2 = tmp19Result.addAttachmentForCommand(channelId, onSelectFiles, result1, tmp3, tmp19(tmp[21]).UploadOrigin.IMAGE_PICKER);
        const obj6 = channel(tmp[18]);
      }
    }
    return {
      onAttachPress() {
        channel(ref[18]);
        let obj = {};
        const FILE_ATTACHMENT = channel(ref[21]).UploadOrigin.FILE_ATTACHMENT;
        obj = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(onSelectItem[20]).dismissKeyboard();
          },
          onRestoreKeyboard: FILE_ATTACHMENT,
          onSelectFiles(arg0) {
            return onSelectFiles(arg0, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj);
        obj.handleAttachFile(obj);
      },
      onPressCamera(previewType) {
        channel(ref[18]);
        let obj = {};
        const IMAGE_PICKER = channel(ref[21]).UploadOrigin.IMAGE_PICKER;
        obj = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(onSelectItem[20]).dismissKeyboard();
          },
          onRestoreKeyboard: IMAGE_PICKER,
          onSelectFiles(arg0) {
            return onSelectFiles(arg0, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj);
        obj.previewType = previewType;
        obj.handleCameraDialog(obj);
      },
      onPressHeader() {
        if (0 === sharedValue.get()) {
          const current2 = onSelectItem.current;
          if (current2 != null) {
            current2.expand();
          }
        } else {
          const current = onSelectItem.current;
          if (current != null) {
            current.collapse();
          }
        }
      },
      onViewAll() {
        channel(ref[18]);
        let obj = {};
        const IMAGE_PICKER = channel(ref[21]).UploadOrigin.IMAGE_PICKER;
        obj = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions,
          onDismissKeyboard() {
            return IMAGE_PICKER(onSelectItem[20]).dismissKeyboard();
          },
          onRestoreKeyboard: IMAGE_PICKER,
          onSelectFiles(arg0) {
            return onSelectFiles(arg0, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj);
        obj.draftType = closure_1_8.draftType;
        obj.handleViewAllDialog(obj);
        if (obj4.isAndroid()) {
          const current = onSelectItem.current;
          if (current != null) {
            current.collapse();
          }
        }
      },
      onManageLimited() {
        const obj = { onDismissKeyboard: ChatInputUtils.dismissKeyboard, onRestoreKeyboard };
        const result = obj.handleLimitedPickerDialog(obj);
      },
      onPressItem(channelId) {
        onSelectItem({ channelId: channelId.channelId, item: channelId.item, isIncluded: channelId.isIncluded });
      },
      onLongPressItem(channelId) {
        channelId = channelId.channelId;
        const item = channelId.item;
        const isIncluded = channelId.isIncluded;
        let onRemove;
        let obj = channel(ref[18]);
        const result = obj.mediaNodeToUploadItem(item);
        const cloudUpload = new channel(ref[23]).CloudUpload(result, channelId);
        let upload;
        if (isIncluded) {
          upload = keyboardContextForType.getUpload(channelId, cloudUpload.id, sharedValue1.ChannelMessage);
        }
        onRemove = undefined;
        if (null != upload) {
          onRemove = () => MediaKeyboardUtils.handleSelectKeyboardItem(channelId, item, isIncluded, false);
        }
        obj = { channelId, disableAddDescription: null == upload, disableSpoiler: null == upload, upload: null, onAdd: null, onEdit: null, onRemove: null };
        let tmp8 = upload;
        if (upload == null) {
          tmp8 = cloudUpload;
        }
        obj.upload = tmp8;
        let fn2;
        if (null == upload) {
          fn2 = () => onSelectItem({ channelId, item, isIncluded });
        }
        obj.onAdd = fn2;
        obj.onEdit = function onEdit(arg0) {
          if (fn != null) {
            tmp();
          }
          const items = [arg0];
          onSelectFiles(items, Upload.UploadOrigin.IMAGE_EDITOR);
        };
        obj.onRemove = onRemove;
        chatInputRef(ref[24])(obj);
      },
      onPollsPress() {
        let obj = { type: constants2.POLLS, channel_id: channel.id, guild_id: channel.guild_id };
        obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
        const current = chatInputRef.current;
        current.closeCustomKeyboard();
        obj = { channel, onCancel: onRestoreKeyboard };
        PollCreationModalActionCreators.openCreatePollModal(obj);
      },
      onAppsPress() {
        const current = onSelectFiles.current;
        let obj = { type: channel(ref[11]).KeyboardTypes.APP_LAUNCHER, context: null };
        obj = { initialRouteName: validateFilenames.HOME };
        obj.context = obj;
        current.openCustomKeyboard(obj);
      },
      onThreadPress() {
        channel(ref[18]).handleSelectThread(onRestoreKeyboard, onSelectFiles);
      },
      onSend() {
        const current = onSelectItem.current;
        if (current != null) {
          current.collapse();
        }
        const current2 = onSelectFiles.current;
        current2.handleSend();
      }
    };
  }, items1);
  const canStartThreads = tmp8.canStartThreads;
  let items2 = [memo, , , , ];
  ({ uploadDisabled: arr3[1], canPostPolls: arr3[2] } = tmp8);
  items2[3] = isAppLauncherEnabled;
  items2[4] = canStartThreads;
  const memo1 = sharedValue.useMemo(() => {
    if (isAppLauncherEnabled) {
      let obj = { text: null, IconComponent: null, onPress: null, disabled: false };
      const intl = util.intl;
      obj.text = intl.string(util.t.PHjkRE);
      obj.IconComponent = AppsIcon.AppsIcon;
      obj.onPress = memo.onAppsPress;
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    if (canStartThreads) {
      obj = { text: null, IconComponent: null, onPress: null, disabled: false };
      const intl2 = util.intl;
      obj.text = intl2.string(util.t["7Xm5QI"]);
      obj.IconComponent = ThreadIcon.ThreadIcon;
      obj.onPress = memo.onThreadPress;
      const items2 = [obj];
      let items3 = items2;
    } else {
      items3 = [];
    }
    obj = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl3 = util.intl;
    obj.text = intl3.string(util.t.RgIi2B);
    obj.IconComponent = PollsIcon.PollsIcon;
    obj.onPress = memo.onPollsPress;
    obj.disabled = !closure_8.canPostPolls;
    const items4 = [obj, ...items1];
    const obj1 = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl4 = util.intl;
    obj1.text = intl4.string(util.t["8Hvr3+"]);
    obj1.IconComponent = AttachmentIcon.AttachmentIcon;
    obj1.onPress = memo.onAttachPress;
    obj1.disabled = closure_8.uploadDisabled;
    items4[tmp15] = obj1;
    const obj2 = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl5 = util.intl;
    obj2.text = intl5.string(util.t.Zmm6dN);
    obj2.IconComponent = ImageIcon.ImageIcon;
    obj2.onPress = memo.onViewAll;
    obj2.disabled = closure_8.uploadDisabled;
    const items5 = [obj2, ...items4];
    return items5;
  }, items2);
  ref = sharedValue.useRef(null);
  let items3 = [memo];
  let items4 = [sharedValue, sharedValue1, memo, channel.id, tmp8, memo1, token];
  const callback = sharedValue.useCallback((animatedIndex) => closure_2_12(MediaKeyboardBottomSheetHeaderSimpleDefault, { animatedIndex: animatedIndex.animatedIndex, onPress: memo.onPressHeader }), items3);
  const callback1 = sharedValue.useCallback((animateOnMount) => {
    let flag = animateOnMount.animateOnMount;
    if (flag === undefined) {
      flag = false;
    }
    let obj = { animateOnMount: flag, animatedIndex: sharedValue, animatedPosition: sharedValue1, initialPosition: animateOnMount.initialPosition, children: null };
    obj = { ref, animatedIndex: sharedValue, channelId: channel.id, draftType: closure_8.draftType, onSend: memo.onSend };
    const items = [closure_2_12(MediaKeyboardFloatingSendDefault, obj), ];
    obj = {
      canPostPolls: closure_8.canPostPolls,
      onHeightChange(arg0) {
        const current = ref.current;
        let setInsetFabResult;
        if (current != null) {
          setInsetFabResult = current.setInsetFab(arg0 + token);
        }
        return setInsetFabResult;
      },
      uploadDisabled: closure_8.uploadDisabled,
      overflowButtons: memo1
    };
    items[1] = closure_2_12(MediaKeyboardBottomSheetActionsDefault, obj);
    obj.children = items;
    return map1(MediaKeyboardAccessoriesContainerDefault, obj);
  }, items4);
  obj = {
    animationConfigs: showInvalidFileTypeAlert,
    animatedIndex: sharedValue,
    animatedPosition: sharedValue1,
    bottomSheetRef: ref,
    accessoriesComponent: callback1,
    handleComponent: callback,
    overlayComponent: obj4.useAppLauncherActionSheet({ chatInputRef, channel }).appLauncherActionSheet,
    onClose,
    onAccessibilityFocusRestore() {
      const current = chatInputRef.current;
      return current.focusPhotosButton();
    },
    transitionState,
    children: null
  };
  const obj7 = channel(ref[17]);
  obj = { channel, draftType: tmp8.draftType, onPressCamera: memo.onPressCamera, onAttachPress: memo.onAttachPress, onPressItem: memo.onPressItem, onLongPressItem: memo.onLongPressItem, onViewAll: memo.onViewAll, onManageLimited: memo.onManageLimited, includedUploadIds: tmp8.includedUploadIds, extensions: allowedExtensions, allowCamera: fileTypeFiltering.mediaFilesAllowed, uploadDisabled: tmp8.uploadDisabled, uploadLimit: tmp8.uploadLimit, disableWhenReachedLimit: tmp8.disableWhenReachedLimit };
  obj.children = memo(chatInputRef(ref[37]), obj);
  return memo(chatInputRef(ref[36]), obj);
});