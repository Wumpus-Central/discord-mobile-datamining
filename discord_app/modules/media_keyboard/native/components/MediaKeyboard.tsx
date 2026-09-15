// === Module 16910: MediaKeyboard ===

// Module 16910 (MediaKeyboard)
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ChatInputUtils from "ChatInputUtils" /* 4505 */;
import ThreadIcon from "ThreadIcon" /* 5157 */;
import ImageIcon from "ImageIcon" /* 5171 */;
import AppsIcon from "AppsIcon" /* 5190 */;
import Upload from "Upload" /* 5212 */;
import AttachmentIcon from "AttachmentIcon" /* 10242 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10768 */;
import PollsIcon from "PollsIcon" /* 10771 */;
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple" /* 10773 */;
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions" /* 10775 */;
import PollCreationModalActionCreators from "PollCreationModalActionCreators" /* 12331 */;
import MediaKeyboardAccessoriesContainerDefault from "MediaKeyboardAccessoriesContainer" /* 16913 */;
import MediaKeyboardFloatingSendDefault from "MediaKeyboardFloatingSend" /* 16914 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4979 */;

require = fn;
const DraftType = fn(4980).DraftType;
const MediaKeyboardConstants = fn(1608);
({ MediaKeyboardTarget: metroRequire, MediaPickerActionSheetEngagedActions: closure_7 } = MediaKeyboardConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9 } = Constants);
const AppLauncherRouteName = fn(1483).AppLauncherRouteName;
const KEYBOARD_ANIMATION_CONFIG = fn(12170).KEYBOARD_ANIMATION_CONFIG;
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
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants2.MEDIA_PICKER, channel_id: channel.id, guild_id: channel.guild_id });
  }, items);
  let ref = sharedValue.useRef(null);
  sharedValue = channel(ref[9]).useSharedValue(-1);
  let obj = channel(ref[9]);
  const sharedValue1 = channel(ref[9]).useSharedValue(0);
  let obj2 = channel(ref[9]);
  const keyboardContextForType = channel(ref[10]).useKeyboardContextForType(channel(ref[11]).KeyboardTypes.MEDIA);
  let obj3 = channel(ref[10]);
  let obj4 = channel(ref[12]);
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
      } else if (keyboardContextForType.target === tmp2.COMMAND) {
        if (extensions.length > 0) {
          items = [];
          items[0] = channel(ref[19]).getFileFromUploadItem(items[0]).filename;
          if (!validateFilenames(items)) {
            return showInvalidFileTypeAlert();
          }
          const obj = channel(ref[19]);
        }
        const obj2 = channel(ref[18]);
        const result = obj2.addAttachmentForCommand(onRestoreKeyboard.id, onSelectFiles, items[0], keyboardContextForType, IMAGE_PICKER);
      }
    }
    function onSelectItem(arg0) {
      ({ channelId, item, isIncluded } = arg0);
      chatInputRef(ref[8]).track(closure_8.MEDIA_PICKER_ACTION_SHEET_ENGAGED, { action: isAppLauncherEnabled.MEDIA_SELECTED });
      if (keyboardContextForType.target === token.CHAT) {
        const obj5 = channel(ref[18]);
        const result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
      } else if (keyboardContextForType.target === tmp4.COMMAND) {
        const result1 = channel(ref[18]).mediaNodeToUploadItem(item);
        if (extensions.length > 0) {
          const items = [channel(ref[19]).getFileFromUploadItem(result1).filename];
          if (!validateFilenames(items)) {
            return showInvalidFileTypeAlert();
          }
          const tmp19Result = channel(ref[19]);
        }
        const tmp19Result2 = channel(ref[18]);
        const result2 = tmp19Result2.addAttachmentForCommand(channelId, onSelectFiles, result1, keyboardContextForType, channel(ref[21]).UploadOrigin.IMAGE_PICKER);
        const obj6 = channel(ref[18]);
      }
      const obj = chatInputRef(ref[8]);
      const obj2 = { action: isAppLauncherEnabled.MEDIA_SELECTED };
    }
    return {
      onAttachPress() {
        const FILE_ATTACHMENT = channel(ref[21]).UploadOrigin.FILE_ATTACHMENT;
        const merged = Object.assign({
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
        });
        channel(ref[18]).handleAttachFile({});
      },
      onPressCamera(previewType) {
        const obj2 = {};
        const IMAGE_PICKER = channel(ref[21]).UploadOrigin.IMAGE_PICKER;
        const merged = Object.assign({
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
        });
        obj2.previewType = previewType;
        channel(ref[18]).handleCameraDialog(obj2);
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
        const obj2 = {};
        const IMAGE_PICKER = channel(ref[21]).UploadOrigin.IMAGE_PICKER;
        const merged = Object.assign({
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
        });
        obj2.draftType = closure_1_8.draftType;
        channel(ref[18]).handleViewAllDialog(obj2);
        const obj = channel(ref[18]);
        const obj3 = {
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
        if (obj4.isAndroid()) {
          const current = onSelectItem.current;
          if (current != null) {
            current.collapse();
          }
        }
        obj4 = channel(ref[22]);
      },
      onManageLimited() {
        const obj = MediaKeyboardUtils;
        const result = obj.handleLimitedPickerDialog({ onDismissKeyboard: ChatInputUtils.dismissKeyboard, onRestoreKeyboard });
      },
      onPressItem(channelId) {
        onSelectItem({ channelId: channelId.channelId, item: channelId.item, isIncluded: channelId.isIncluded });
      },
      onLongPressItem(channelId) {
        channelId = channelId.channelId;
        const item = channelId.item;
        const isIncluded = channelId.isIncluded;
        let onRemove;
        const result = channel(ref[18]).mediaNodeToUploadItem(item);
        const cloudUpload = new channel(ref[23]).CloudUpload(result, channelId);
        let upload;
        if (isIncluded) {
          upload = keyboardContextForType.getUpload(channelId, cloudUpload.id, sharedValue1.ChannelMessage);
        }
        onRemove = undefined;
        if (null != upload) {
          onRemove = () => MediaKeyboardUtils.handleSelectKeyboardItem(channelId, item, isIncluded, false);
        }
        const obj2 = { channelId, disableAddDescription: null == upload, disableSpoiler: null == upload, upload: null, onAdd: null, onEdit: null, onRemove: null };
        let tmp8 = upload;
        const obj = channel(ref[18]);
        if (upload == null) {
          tmp8 = cloudUpload;
        }
        obj2.upload = tmp8;
        let fn2;
        if (null == upload) {
          fn2 = () => onSelectItem({ channelId, item, isIncluded });
        }
        obj2.onAdd = fn2;
        obj2.onEdit = function onEdit(arg0) {
          if (fn != null) {
            tmp();
          }
          const items = [arg0];
          onSelectFiles(items, Upload.UploadOrigin.IMAGE_EDITOR);
        };
        obj2.onRemove = onRemove;
        chatInputRef(ref[24])(obj2);
        const tmp7 = chatInputRef(ref[24]);
      },
      onPollsPress() {
        AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants2.POLLS, channel_id: channel.id, guild_id: channel.guild_id });
        const current = chatInputRef.current;
        current.closeCustomKeyboard();
        const obj2 = { type: constants2.POLLS, channel_id: channel.id, guild_id: channel.guild_id };
        PollCreationModalActionCreators.openCreatePollModal({ channel, onCancel: onRestoreKeyboard });
      },
      onAppsPress() {
        const current = onSelectFiles.current;
        const obj = { type: channel(ref[11]).KeyboardTypes.APP_LAUNCHER, context: { initialRouteName: validateFilenames.HOME } };
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
      const obj = { text: null, IconComponent: null, onPress: null, disabled: false };
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
      const obj2 = { text: null, IconComponent: null, onPress: null, disabled: false };
      const intl2 = util.intl;
      obj2.text = intl2.string(util.t["7Xm5QI"]);
      obj2.IconComponent = ThreadIcon.ThreadIcon;
      obj2.onPress = memo.onThreadPress;
      const items2 = [obj2];
      let items3 = items2;
    } else {
      items3 = [];
    }
    const obj3 = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl3 = util.intl;
    obj3.text = intl3.string(util.t.RgIi2B);
    obj3.IconComponent = PollsIcon.PollsIcon;
    obj3.onPress = memo.onPollsPress;
    obj3.disabled = !closure_8.canPostPolls;
    const items4 = [obj3, ...items1];
    const obj4 = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl4 = util.intl;
    obj4.text = intl4.string(util.t["8Hvr3+"]);
    obj4.IconComponent = AttachmentIcon.AttachmentIcon;
    obj4.onPress = memo.onAttachPress;
    obj4.disabled = closure_8.uploadDisabled;
    items4[tmp15] = obj4;
    const obj5 = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl5 = util.intl;
    obj5.text = intl5.string(util.t.Zmm6dN);
    obj5.IconComponent = ImageIcon.ImageIcon;
    obj5.onPress = memo.onViewAll;
    obj5.disabled = closure_8.uploadDisabled;
    const items5 = [obj5, ...items4];
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
    const obj = { animateOnMount: flag, animatedIndex: sharedValue, animatedPosition: sharedValue1, initialPosition: animateOnMount.initialPosition, children: null };
    const items = [
      closure_2_12(MediaKeyboardFloatingSendDefault, { ref, animatedIndex: sharedValue, channelId: channel.id, draftType: closure_8.draftType, onSend: memo.onSend }),
      closure_2_12(MediaKeyboardBottomSheetActionsDefault, {
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
      })
    ];
    obj.children = items;
    return map1(MediaKeyboardAccessoriesContainerDefault, obj);
  }, items4);
  const obj8 = {
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
  obj8.children = memo(chatInputRef(ref[37]), { channel, draftType: tmp8.draftType, onPressCamera: memo.onPressCamera, onAttachPress: memo.onAttachPress, onPressItem: memo.onPressItem, onLongPressItem: memo.onLongPressItem, onViewAll: memo.onViewAll, onManageLimited: memo.onManageLimited, includedUploadIds: tmp8.includedUploadIds, extensions: allowedExtensions, allowCamera: fileTypeFiltering.mediaFilesAllowed, uploadDisabled: tmp8.uploadDisabled, uploadLimit: tmp8.uploadLimit, disableWhenReachedLimit: tmp8.disableWhenReachedLimit });
  return memo(chatInputRef(ref[36]), obj8);
});