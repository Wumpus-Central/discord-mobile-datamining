// === Module 16187: ? ===

// Module 16187
import importAllResult from "noop" /* 19 */;
import { DraftType } from "handleChanged" /* 4806 */;
import closure_5 from "map" /* 4805 */;
import DRAG_HANDLE from "DRAG_HANDLE" /* 1624 */;
import ME from "ME" /* 676 */;
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import { KEYBOARD_ANIMATION_CONFIG } from "KEYBOARD_ANIMATION_DURATION" /* 11692 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ MediaKeyboardTarget: closure_6, MediaPickerActionSheetEngagedActions: error } = DRAG_HANDLE);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: c9 } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const memoResult = importAllResult.memo(function MediaKeyboard(channel) {
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  let ref;
  let sharedValue;
  let sharedValue1;
  let keyboardContextForType;
  let token;
  let isAppLauncherEnabled;
  closure_8 = undefined;
  let allowedExtensions;
  let validateFilenames;
  let showInvalidFileTypeAlert;
  let memo;
  let canStartThreads;
  let memo1;
  closure_15 = undefined;
  let obj = sharedValue;
  let items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  ({ onClose, transitionState } = channel);
  const effect = sharedValue.useEffect(() => {
    let obj = chatInputRef(ref[8]);
    obj = { type: allowedExtensions.MEDIA_PICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(closure_8.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items);
  ref = sharedValue.useRef(null);
  sharedValue = channel(ref[9]).useSharedValue(-1);
  let obj2 = channel(ref[9]);
  sharedValue1 = channel(ref[9]).useSharedValue(0);
  let obj3 = channel(ref[9]);
  keyboardContextForType = channel(ref[10]).useKeyboardContextForType(channel(ref[11]).KeyboardTypes.MEDIA);
  const obj4 = channel(ref[10]);
  let obj5 = channel(ref[12]);
  canStartThreads = channel(ref[13]).useMobileVisualRefreshConfig({ location: "MediaKeyboard" }).chatInputFloating;
  let obj6 = channel(ref[13]);
  token = channel(ref[14]).useToken(chatInputRef(ref[15]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET);
  isAppLauncherEnabled = canStartThreads;
  if (canStartThreads) {
    let tmp3Result = tmp3(tmp4[16]);
    isAppLauncherEnabled = tmp3Result.getIsAppLauncherEnabled(channel);
  }
  const tmp11 = chatInputRef(ref[17])({ channel, context: keyboardContextForType });
  closure_8 = tmp11;
  tmp3Result = tmp3(tmp4[18]);
  const fileTypeFiltering = tmp3Result.useFileTypeFiltering(tmp11.fileTypes);
  allowedExtensions = fileTypeFiltering.allowedExtensions;
  validateFilenames = fileTypeFiltering.validateFilenames;
  showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  let items1 = [sharedValue, channel, chatInputRef, keyboardContextForType, ref, tmp11, allowedExtensions, validateFilenames, showInvalidFileTypeAlert];
  memo = obj.useMemo(() => {
    function onRestoreKeyboard() {
      if (closure_5.target !== closure_1_6.APP_LAUNCHER) {
        const current = onSelectFiles.current;
        const obj = { type: null, context: null };
        obj[0] = onRestoreKeyboard(onSelectItem[11]).KeyboardTypes.MEDIA;
        obj[1] = tmp;
        current.openCustomKeyboard(obj);
      }
    }
    function onSelectFiles(items, IMAGE_PICKER) {
      if (closure_5.target === closure_1_6.CHAT) {
        onRestoreKeyboard(onSelectItem[19]).addImagesFromPicker(onRestoreKeyboard.id, items, IMAGE_PICKER);
        const obj3 = onRestoreKeyboard(onSelectItem[19]);
      } else if (tmp.target === tmp2.COMMAND) {
        if (closure_9.length > 0) {
          items = [onRestoreKeyboard(onSelectItem[20]).getFileFromUploadItem(items[0]).filename];
          if (!callback(items)) {
            return callback2();
          }
          const obj = onRestoreKeyboard(onSelectItem[20]);
        }
        const obj2 = onRestoreKeyboard(onSelectItem[19]);
        const result = obj2.addAttachmentForCommand(onRestoreKeyboard.id, onSelectFiles, items[0], tmp, IMAGE_PICKER);
      }
    }
    function onSelectItem(arg0) {
      ({ channelId, item, isIncluded } = arg0);
      let obj = onSelectFiles(onSelectItem[8]);
      obj = { action: closure_1_7.MEDIA_SELECTED };
      obj.track(closure_1_8.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj);
      if (closure_5.target === closure_1_6.CHAT) {
        const obj5 = onRestoreKeyboard(tmp[19]);
        const result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
      } else if (tmp3.target === tmp4.COMMAND) {
        const result1 = onRestoreKeyboard(tmp[19]).mediaNodeToUploadItem(item);
        if (closure_9.length > 0) {
          let tmp19Result = tmp19(tmp[20]);
          const items = [tmp19Result.getFileFromUploadItem(result1).filename];
          if (!callback(items)) {
            return callback2();
          }
        }
        tmp19Result = tmp19(tmp[19]);
        const result2 = tmp19Result.addAttachmentForCommand(channelId, onSelectFiles, result1, tmp3, tmp19(tmp[22]).UploadOrigin.IMAGE_PICKER);
        const obj6 = onRestoreKeyboard(tmp[19]);
      }
    }
    return {
      onAttachPress() {
        let obj = channel(ref[19]);
        obj = {};
        const FILE_ATTACHMENT = channel(ref[22]).UploadOrigin.FILE_ATTACHMENT;
        obj = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions: closure_1_9,
          onDismissKeyboard() {
            return IMAGE_PICKER(table[21]).dismissKeyboard();
          },
          onRestoreKeyboard: FILE_ATTACHMENT,
          onSelectFiles(arg0) {
            return closure_1_1(arg0, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj);
        obj.handleAttachFile(obj);
      },
      onPressCamera(previewType) {
        let obj = channel(ref[19]);
        obj = {};
        const IMAGE_PICKER = channel(ref[22]).UploadOrigin.IMAGE_PICKER;
        obj = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions: closure_1_9,
          onDismissKeyboard() {
            return IMAGE_PICKER(table[21]).dismissKeyboard();
          },
          onRestoreKeyboard: IMAGE_PICKER,
          onSelectFiles(arg0) {
            return closure_1_1(arg0, IMAGE_PICKER);
          }
        };
        const merged = Object.assign(obj);
        obj.previewType = previewType;
        obj.handleCameraDialog(obj);
      },
      onPressHeader() {
        if (0 === closure_3.get()) {
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
        let obj = channel(ref[19]);
        obj = {};
        const IMAGE_PICKER = channel(ref[22]).UploadOrigin.IMAGE_PICKER;
        obj = {
          channel: onRestoreKeyboard,
          uploadLimit: closure_1_8.uploadLimit,
          extensions: closure_1_9,
          onDismissKeyboard() {
            return IMAGE_PICKER(table[21]).dismissKeyboard();
          },
          onRestoreKeyboard: IMAGE_PICKER,
          onSelectFiles(arg0) {
            return closure_1_1(arg0, IMAGE_PICKER);
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
        let obj = channel(ref[19]);
        obj = { onDismissKeyboard: channel(ref[21]).dismissKeyboard, onRestoreKeyboard };
        const result = obj.handleLimitedPickerDialog(obj);
      },
      onPressItem(channelId) {
        onSelectItem({ channelId: channelId.channelId, item: channelId.item, isIncluded: channelId.isIncluded });
      },
      onLongPressItem(channelId) {
        channelId = channelId.channelId;
        const item = channelId.item;
        const isIncluded = channelId.isIncluded;
        let fn;
        let obj = channel(ref[19]);
        const result = obj.mediaNodeToUploadItem(item);
        const cloudUpload = new channel(ref[24]).CloudUpload(result, channelId);
        let upload;
        if (isIncluded) {
          upload = keyboardContextForType.getUpload(channelId, cloudUpload.id, sharedValue1.ChannelMessage);
        }
        fn = undefined;
        if (null != upload) {
          fn = () => channel(ref[19]).handleSelectKeyboardItem(channelId, item, isIncluded, false);
        }
        obj = { channelId, disableAddDescription: null == upload, disableSpoiler: null == upload, upload: null, onAdd: null, onEdit: null, onRemove: null };
        let tmp8 = upload;
        if (upload == null) {
          tmp8 = cloudUpload;
        }
        obj[3] = tmp8;
        let fn2;
        if (null == upload) {
          fn2 = () => isIncluded({ channelId, item, isIncluded });
        }
        obj[4] = fn2;
        obj[5] = function onEdit(arg0) {
          if (fn != null) {
            tmp();
          }
          const items = [arg0];
          item(items, channel(ref[22]).UploadOrigin.IMAGE_EDITOR);
        };
        obj[6] = fn;
        chatInputRef(ref[25])(obj);
      },
      onPollsPress() {
        let obj = chatInputRef(ref[8]);
        obj = { type: allowedExtensions.POLLS, channel_id: onRestoreKeyboard.id, guild_id: onRestoreKeyboard.guild_id };
        obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
        const current = onSelectFiles.current;
        current.closeCustomKeyboard();
        obj = { channel: onRestoreKeyboard, onCancel: onRestoreKeyboard };
        channel(ref[26]).openCreatePollModal(obj);
      },
      onAppsPress() {
        const current = onSelectFiles.current;
        obj = { type: onRestoreKeyboard(onSelectItem[11]).KeyboardTypes.APP_LAUNCHER, context: obj };
        obj = { initialRouteName: closure_1_10.HOME };
        current.openCustomKeyboard(obj);
      },
      onThreadPress(arg0) {
        onRestoreKeyboard(onSelectItem[19]).handleSelectThread(onRestoreKeyboard, onSelectFiles);
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
  if (canStartThreads) {
    canStartThreads = tmp11.canStartThreads;
  }
  let items2 = [memo, , , , ];
  ({ uploadDisabled: arr3[1], canPostPolls: arr3[2] } = tmp11);
  items2[3] = isAppLauncherEnabled;
  items2[4] = canStartThreads;
  memo1 = obj.useMemo(() => {
    if (isAppLauncherEnabled) {
      let obj = { text: null, IconComponent: null, onPress: null, disabled: false };
      const intl = channel(ref[27]).intl;
      obj[0] = intl.string(channel(ref[27]).t.PHjkRE);
      obj[1] = channel(ref[28]).AppsIcon;
      obj[2] = memo.onAppsPress;
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    if (canStartThreads) {
      obj = { text: null, IconComponent: null, onPress: null, disabled: false };
      const intl2 = channel(ref[27]).intl;
      obj[0] = intl2.string(channel(ref[27]).t["7Xm5QI"]);
      obj[1] = channel(ref[29]).ThreadIcon;
      obj[2] = memo.onThreadPress;
      const items2 = [obj];
      let items3 = items2;
    } else {
      items3 = [];
    }
    obj = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl3 = channel(ref[27]).intl;
    obj[0] = intl3.string(channel(ref[27]).t.RgIi2B);
    obj[1] = channel(ref[30]).PollsIcon;
    obj[2] = memo.onPollsPress;
    obj[3] = !closure_8.canPostPolls;
    const items4 = [obj, ...items1];
    obj1 = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl4 = channel(ref[27]).intl;
    obj1[0] = intl4.string(channel(ref[27]).t["8Hvr3+"]);
    obj1[1] = channel(ref[31]).AttachmentIcon;
    obj1[2] = memo.onAttachPress;
    obj1[3] = closure_8.uploadDisabled;
    items4[tmp15] = obj1;
    const obj2 = { text: null, IconComponent: null, onPress: null, disabled: null };
    const intl5 = channel(ref[27]).intl;
    obj2[0] = intl5.string(channel(ref[27]).t.Zmm6dN);
    obj2[1] = channel(ref[32]).ImageIcon;
    obj2[2] = memo.onViewAll;
    obj2[3] = closure_8.uploadDisabled;
    const items5 = [obj2, ...items4];
    return items5;
  }, items2);
  closure_15 = obj.useRef(null);
  let items3 = [memo];
  let items4 = [sharedValue, sharedValue1, memo, channel.id, tmp11, memo1, token];
  const callback = obj.useCallback((animatedIndex) => memo(chatInputRef(ref[33]), { animatedIndex: animatedIndex.animatedIndex, onPress: memo.onPressHeader }), items3);
  const callback1 = obj.useCallback((animateOnMount) => {
    let flag = animateOnMount.animateOnMount;
    if (flag === undefined) {
      flag = false;
    }
    let obj = { animateOnMount: flag, animatedIndex: sharedValue, animatedPosition: sharedValue1, initialPosition: animateOnMount.initialPosition, children: null };
    obj = { ref: closure_15, animatedIndex: sharedValue, channelId: channel.id, draftType: closure_8.draftType, onSend: memo.onSend };
    const items = [memo(chatInputRef(ref[35]), obj), ];
    obj = {
      canPostPolls: closure_8.canPostPolls,
      onHeightChange(arg0) {
        const current = ref.current;
        let setInsetFabResult;
        if (current != null) {
          setInsetFabResult = current.setInsetFab(arg0 + closure_6);
        }
        return setInsetFabResult;
      },
      uploadDisabled: closure_8.uploadDisabled,
      overflowButtons: memo1
    };
    items[1] = memo(chatInputRef(ref[36]), obj);
    obj[4] = items;
    return canStartThreads(chatInputRef(ref[34]), obj);
  }, items4);
  obj = {
    animationConfigs: showInvalidFileTypeAlert,
    animatedIndex: sharedValue,
    animatedPosition: sharedValue1,
    bottomSheetRef: ref,
    accessoriesComponent: callback1,
    handleComponent: callback,
    overlayComponent: obj5.useAppLauncherActionSheet({ chatInputRef, channel }).appLauncherActionSheet,
    onClose,
    onAccessibilityFocusRestore() {
      const current = chatInputRef.current;
      return current.focusPhotosButton();
    },
    transitionState,
    children: null
  };
  const obj7 = channel(ref[14]);
  obj = { channel, draftType: tmp11.draftType, onPressCamera: memo.onPressCamera, onAttachPress: memo.onAttachPress, onPressItem: memo.onPressItem, onLongPressItem: memo.onLongPressItem, onViewAll: memo.onViewAll, onManageLimited: memo.onManageLimited, includedUploadIds: tmp11.includedUploadIds, extensions: allowedExtensions, allowCamera: fileTypeFiltering.mediaFilesAllowed, uploadDisabled: tmp11.uploadDisabled, uploadLimit: tmp11.uploadLimit, disableWhenReachedLimit: tmp11.disableWhenReachedLimit };
  obj[10] = memo(chatInputRef(ref[38]), obj);
  return memo(chatInputRef(ref[37]), obj);
});
let result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboard.tsx");

export default memoResult;