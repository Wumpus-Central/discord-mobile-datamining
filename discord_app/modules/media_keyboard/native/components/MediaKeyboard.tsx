// discord_app/modules/media_keyboard/native/components/MediaKeyboard.tsx
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import KeyboardTypes from "../../../keyboard/native/KeyboardTypes.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import ThreadIcon from "../../../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
import ImageIcon from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import Upload from "../../../../lib/uploader/Upload.tsx";
import utils_UploadUtils from "../../../../utils/native/UploadUtils.tsx";
import MediaKeyboardUtils from "../MediaKeyboardUtils.tsx";
import PollsIcon from "../../../../design/components/Icon/native/redesign/generated/PollsIcon.tsx";
import AttachmentIcon from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple.tsx";
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions.tsx";
import PollCreationModalActionCreators from "../../../polls/native/PollCreationModalActionCreators.tsx";
import MediaKeyboardAccessoriesContainerDefault from "MediaKeyboardAccessoriesContainer.tsx";
import MediaKeyboardFloatingSendDefault from "MediaKeyboardFloatingSend.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../../../stores/UploadAttachmentStore.tsx";

require = fn;
const DraftType = fn(7031).DraftType;
const MediaKeyboardConstants = fn(1614);
({ MediaKeyboardTarget: metroRequire, MediaPickerActionSheetEngagedActions: closure_7 } = MediaKeyboardConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9 } = Constants);
const AppLauncherRouteName = fn(1489).AppLauncherRouteName;
const KEYBOARD_ANIMATION_CONFIG = fn(11650).KEYBOARD_ANIMATION_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboard.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = channel(ref[9]).c(137);
        channel = channel.channel;
        const chatInputRef = channel.chatInputRef;
        ({ onClose, transitionState } = channel);
        if (cResult[0] === channel.guild_id) {
          if (cResult[1] === channel.id) {
            let tmp4 = cResult[2];
            let tmp5 = cResult[3];
          }
          const effect = sharedValue.useEffect(tmp4, tmp5);
          ref = sharedValue.useRef(null);
          sharedValue = tmp(tmp2[11]).useSharedValue(-1);
          const tmpResult = tmp(tmp2[11]);
          const sharedValue1 = tmp(tmp2[11]).useSharedValue(0);
          const tmpResult7 = tmp(tmp2[11]);
          const keyboardContextForType = tmp(tmp2[12]).useKeyboardContextForType(tmp(tmp2[13]).KeyboardTypes.MEDIA);
          if (cResult[4] === channel) {
            if (cResult[5] === chatInputRef) {
              let tmp13 = cResult[6];
            }
            const appLauncherActionSheet = tmp(tmp2[14]).useAppLauncherActionSheet(tmp13).appLauncherActionSheet;
            const tmpResult9 = tmp(tmp2[14]);
            const token = tmp(tmp2[15]).useToken(
              chatInputRef(tmp2[16]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET,
            );
            if (cResult[7] !== channel) {
              const isAppLauncherEnabled = tmp(tmp2[17]).getIsAppLauncherEnabled(channel);
              cResult[7] = channel;
              cResult[8] = isAppLauncherEnabled;
              const tmpResult11 = tmp(tmp2[17]);
            }
            if (cResult[9] === channel) {
              if (cResult[10] === keyboardContextForType) {
                let tmp18 = cResult[11];
              }
              const tmp19 = tmp14(tmp2[18])(tmp18);
              closure_7 = tmp19;
              const fileTypeFiltering = tmp(tmp2[19]).useFileTypeFiltering(tmp19.fileTypes);
              const allowedExtensions = fileTypeFiltering.allowedExtensions;
              const validateFilenames = fileTypeFiltering.validateFilenames;
              const showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
              const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
              if (cResult[12] === chatInputRef) {
                if (cResult[13] === keyboardContextForType) {
                  let tmp21 = cResult[14];
                }
                closure_11 = tmp21;
                if (cResult[15] === allowedExtensions) {
                  if (cResult[16] === channel.id) {
                    if (cResult[17] === chatInputRef) {
                      if (cResult[18] === keyboardContextForType) {
                        if (cResult[19] === showInvalidFileTypeAlert) {
                          if (cResult[20] === validateFilenames) {
                            let tmp22 = cResult[21];
                          }
                          closure_12 = tmp22;
                          if (cResult[22] === allowedExtensions) {
                            if (cResult[23] === channel) {
                              if (cResult[24] === tmp19.uploadLimit) {
                                if (cResult[25] === tmp21) {
                                  if (cResult[26] === tmp22) {
                                    let tmp23 = cResult[27];
                                  }
                                  closure_13 = tmp23;
                                  if (cResult[28] === allowedExtensions) {
                                    if (cResult[29] === chatInputRef) {
                                      if (cResult[30] === keyboardContextForType) {
                                        if (cResult[31] === showInvalidFileTypeAlert) {
                                          if (cResult[32] === validateFilenames) {
                                            let tmp25 = cResult[33];
                                          }
                                          closure_14 = tmp25;
                                          if (cResult[34] !== tmp23) {
                                            class Z {
                                              constructor() {
                                                obj = closure_0(closure_2[20]);
                                                obj1 = {};
                                                merged = Object.assign(
                                                  closure_13(closure_0(closure_2[23]).UploadOrigin.FILE_ATTACHMENT),
                                                );
                                                handleAttachFileResult = obj.handleAttachFile(obj1);
                                                return;
                                              }
                                            }
                                            const fn3 = function q(previewType) {
                                              const obj2 = {};
                                              const merged = Object.assign(
                                                closure_13(Upload.UploadOrigin.IMAGE_PICKER),
                                              );
                                              obj2.previewType = previewType;
                                              MediaKeyboardUtils.handleCameraDialog(obj2);
                                            };
                                            class Q {
                                              constructor(arg0) {
                                                ({ channelId, item, isIncluded } = channel);
                                                tmp = closure_2;
                                                obj = closure_1(closure_2[10]);
                                                obj1 = { action: closure_7.MEDIA_SELECTED };
                                                trackResult = obj.track(
                                                  AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED,
                                                  obj1,
                                                );
                                                tmp3 = closure_5;
                                                if (closure_5.target === MediaKeyboardTarget.CHAT) {
                                                  tmp13 = closure_0;
                                                  obj5 = closure_0(tmp[20]);
                                                  flag = false;
                                                  tmp14 = obj5;
                                                  tmp15 = channelId;
                                                  tmp16 = item;
                                                  tmp17 = isIncluded;
                                                  result = obj5.handleSelectKeyboardItem(
                                                    channelId,
                                                    item,
                                                    isIncluded,
                                                    false,
                                                  );
                                                } else if (tmp3.target === tmp4.COMMAND) {
                                                  tmp19 = closure_0;
                                                  obj6 = closure_0(tmp[20]);
                                                  result1 = obj6.mediaNodeToUploadItem(item);
                                                  tmp21 = allowedExtensions;
                                                  num = 0;
                                                  if (allowedExtensions.length > 0) {
                                                    tmp5 = validateFilenames;
                                                    tmp19Result = tmp19(tmp[21]);
                                                    items = [];
                                                    items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                    if (!validateFilenames(items)) {
                                                      tmp6 = showInvalidFileTypeAlert;
                                                      return showInvalidFileTypeAlert();
                                                    }
                                                  }
                                                  tmp19Result1 = tmp19(tmp[20]);
                                                  tmp7 = chatInputRef;
                                                  tmp8 = tmp19Result1;
                                                  tmp9 = channelId;
                                                  tmp10 = result1;
                                                  tmp11 = tmp3;
                                                  result2 = tmp19Result1.addAttachmentForCommand(
                                                    channelId,
                                                    chatInputRef,
                                                    result1,
                                                    tmp3,
                                                    tmp19(tmp[23]).UploadOrigin.IMAGE_PICKER,
                                                  );
                                                }
                                                return;
                                              }
                                            }
                                            class J {
                                              constructor() {
                                                obj = closure_0(closure_2[20]);
                                                obj1 = {};
                                                merged = Object.assign(
                                                  closure_13(closure_0(closure_2[23]).UploadOrigin.IMAGE_PICKER),
                                                );
                                                obj1.draftType = closure_7.draftType;
                                                handleViewAllDialogResult = obj.handleViewAllDialog(obj1);
                                                obj3 = closure_0(closure_2[24]);
                                                if (obj3.isAndroid()) {
                                                  tmp3 = closure_2;
                                                  current = closure_2.current;
                                                  tmp4 = null;
                                                  if (current != null) {
                                                    collapseResult = current.collapse();
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            cResult[36] = fn3;
                                          } else {
                                            class Z {
                                              constructor() {
                                                obj = closure_0(closure_2[20]);
                                                obj1 = {};
                                                merged = Object.assign(
                                                  closure_13(closure_0(closure_2[23]).UploadOrigin.FILE_ATTACHMENT),
                                                );
                                                handleAttachFileResult = obj.handleAttachFile(obj1);
                                                return;
                                              }
                                            }
                                          }
                                          class Q {
                                            constructor(arg0) {
                                              ({ channelId, item, isIncluded } = channel);
                                              tmp = closure_2;
                                              obj = closure_1(closure_2[10]);
                                              obj1 = { action: closure_7.MEDIA_SELECTED };
                                              trackResult = obj.track(
                                                AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED,
                                                obj1,
                                              );
                                              tmp3 = closure_5;
                                              if (closure_5.target === MediaKeyboardTarget.CHAT) {
                                                tmp13 = closure_0;
                                                obj5 = closure_0(tmp[20]);
                                                flag = false;
                                                tmp14 = obj5;
                                                tmp15 = channelId;
                                                tmp16 = item;
                                                tmp17 = isIncluded;
                                                result = obj5.handleSelectKeyboardItem(
                                                  channelId,
                                                  item,
                                                  isIncluded,
                                                  false,
                                                );
                                              } else if (tmp3.target === tmp4.COMMAND) {
                                                tmp19 = closure_0;
                                                obj6 = closure_0(tmp[20]);
                                                result1 = obj6.mediaNodeToUploadItem(item);
                                                tmp21 = allowedExtensions;
                                                num = 0;
                                                if (allowedExtensions.length > 0) {
                                                  tmp5 = validateFilenames;
                                                  tmp19Result = tmp19(tmp[21]);
                                                  items = [];
                                                  items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                  if (!validateFilenames(items)) {
                                                    tmp6 = showInvalidFileTypeAlert;
                                                    return showInvalidFileTypeAlert();
                                                  }
                                                }
                                                tmp19Result1 = tmp19(tmp[20]);
                                                tmp7 = chatInputRef;
                                                tmp8 = tmp19Result1;
                                                tmp9 = channelId;
                                                tmp10 = result1;
                                                tmp11 = tmp3;
                                                result2 = tmp19Result1.addAttachmentForCommand(
                                                  channelId,
                                                  chatInputRef,
                                                  result1,
                                                  tmp3,
                                                  tmp19(tmp[23]).UploadOrigin.IMAGE_PICKER,
                                                );
                                              }
                                              return;
                                            }
                                          }
                                          if (cResult[39] === tmp19.draftType) {
                                            class Z {
                                              constructor() {
                                                obj = closure_0(closure_2[20]);
                                                obj1 = {};
                                                merged = Object.assign(
                                                  closure_13(closure_0(closure_2[23]).UploadOrigin.FILE_ATTACHMENT),
                                                );
                                                handleAttachFileResult = obj.handleAttachFile(obj1);
                                                return;
                                              }
                                            }
                                            if (cResult[42] !== tmp21) {
                                              class Z {
                                                constructor() {
                                                  obj = closure_0(closure_2[20]);
                                                  obj1 = {};
                                                  merged = Object.assign(
                                                    closure_13(closure_0(closure_2[23]).UploadOrigin.FILE_ATTACHMENT),
                                                  );
                                                  handleAttachFileResult = obj.handleAttachFile(obj1);
                                                  return;
                                                }
                                              }
                                              cResult[42] = tmp21;
                                              class Q {
                                                constructor(arg0) {
                                                  ({ channelId, item, isIncluded } = channel);
                                                  tmp = closure_2;
                                                  obj = closure_1(closure_2[10]);
                                                  obj1 = { action: closure_7.MEDIA_SELECTED };
                                                  trackResult = obj.track(
                                                    AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED,
                                                    obj1,
                                                  );
                                                  tmp3 = closure_5;
                                                  if (closure_5.target === MediaKeyboardTarget.CHAT) {
                                                    tmp13 = closure_0;
                                                    obj5 = closure_0(tmp[20]);
                                                    flag = false;
                                                    tmp14 = obj5;
                                                    tmp15 = channelId;
                                                    tmp16 = item;
                                                    tmp17 = isIncluded;
                                                    result = obj5.handleSelectKeyboardItem(
                                                      channelId,
                                                      item,
                                                      isIncluded,
                                                      false,
                                                    );
                                                  } else if (tmp3.target === tmp4.COMMAND) {
                                                    tmp19 = closure_0;
                                                    obj6 = closure_0(tmp[20]);
                                                    result1 = obj6.mediaNodeToUploadItem(item);
                                                    tmp21 = allowedExtensions;
                                                    num = 0;
                                                    if (allowedExtensions.length > 0) {
                                                      tmp5 = validateFilenames;
                                                      tmp19Result = tmp19(tmp[21]);
                                                      items = [];
                                                      items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                      if (!validateFilenames(items)) {
                                                        tmp6 = showInvalidFileTypeAlert;
                                                        return showInvalidFileTypeAlert();
                                                      }
                                                    }
                                                    tmp19Result1 = tmp19(tmp[20]);
                                                    tmp7 = chatInputRef;
                                                    tmp8 = tmp19Result1;
                                                    tmp9 = channelId;
                                                    tmp10 = result1;
                                                    tmp11 = tmp3;
                                                    result2 = tmp19Result1.addAttachmentForCommand(
                                                      channelId,
                                                      chatInputRef,
                                                      result1,
                                                      tmp3,
                                                      tmp19(tmp[23]).UploadOrigin.IMAGE_PICKER,
                                                    );
                                                  }
                                                  return;
                                                }
                                              }
                                              cResult[43] = tmp29;
                                              class J {
                                                constructor() {
                                                  obj = closure_0(closure_2[20]);
                                                  obj1 = {};
                                                  merged = Object.assign(
                                                    closure_13(closure_0(closure_2[23]).UploadOrigin.IMAGE_PICKER),
                                                  );
                                                  obj1.draftType = closure_7.draftType;
                                                  handleViewAllDialogResult = obj.handleViewAllDialog(obj1);
                                                  obj3 = closure_0(closure_2[24]);
                                                  if (obj3.isAndroid()) {
                                                    tmp3 = closure_2;
                                                    current = closure_2.current;
                                                    tmp4 = null;
                                                    if (current != null) {
                                                      collapseResult = current.collapse();
                                                    }
                                                  }
                                                  return;
                                                }
                                              }
                                            } else {
                                              class Z {
                                                constructor() {
                                                  obj = closure_0(closure_2[20]);
                                                  obj1 = {};
                                                  merged = Object.assign(
                                                    closure_13(closure_0(closure_2[23]).UploadOrigin.FILE_ATTACHMENT),
                                                  );
                                                  handleAttachFileResult = obj.handleAttachFile(obj1);
                                                  return;
                                                }
                                              }
                                            }
                                            if (cResult[44] !== tmp25) {
                                              class Z {
                                                constructor() {
                                                  obj = closure_0(closure_2[20]);
                                                  obj1 = {};
                                                  merged = Object.assign(
                                                    closure_13(closure_0(closure_2[23]).UploadOrigin.FILE_ATTACHMENT),
                                                  );
                                                  handleAttachFileResult = obj.handleAttachFile(obj1);
                                                  return;
                                                }
                                              }
                                              cResult[44] = tmp25;
                                              class Q {
                                                constructor(arg0) {
                                                  ({ channelId, item, isIncluded } = channel);
                                                  tmp = closure_2;
                                                  obj = closure_1(closure_2[10]);
                                                  obj1 = { action: closure_7.MEDIA_SELECTED };
                                                  trackResult = obj.track(
                                                    AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED,
                                                    obj1,
                                                  );
                                                  tmp3 = closure_5;
                                                  if (closure_5.target === MediaKeyboardTarget.CHAT) {
                                                    tmp13 = closure_0;
                                                    obj5 = closure_0(tmp[20]);
                                                    flag = false;
                                                    tmp14 = obj5;
                                                    tmp15 = channelId;
                                                    tmp16 = item;
                                                    tmp17 = isIncluded;
                                                    result = obj5.handleSelectKeyboardItem(
                                                      channelId,
                                                      item,
                                                      isIncluded,
                                                      false,
                                                    );
                                                  } else if (tmp3.target === tmp4.COMMAND) {
                                                    tmp19 = closure_0;
                                                    obj6 = closure_0(tmp[20]);
                                                    result1 = obj6.mediaNodeToUploadItem(item);
                                                    tmp21 = allowedExtensions;
                                                    num = 0;
                                                    if (allowedExtensions.length > 0) {
                                                      tmp5 = validateFilenames;
                                                      tmp19Result = tmp19(tmp[21]);
                                                      items = [];
                                                      items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                      if (!validateFilenames(items)) {
                                                        tmp6 = showInvalidFileTypeAlert;
                                                        return showInvalidFileTypeAlert();
                                                      }
                                                    }
                                                    tmp19Result1 = tmp19(tmp[20]);
                                                    tmp7 = chatInputRef;
                                                    tmp8 = tmp19Result1;
                                                    tmp9 = channelId;
                                                    tmp10 = result1;
                                                    tmp11 = tmp3;
                                                    result2 = tmp19Result1.addAttachmentForCommand(
                                                      channelId,
                                                      chatInputRef,
                                                      result1,
                                                      tmp3,
                                                      tmp19(tmp[23]).UploadOrigin.IMAGE_PICKER,
                                                    );
                                                  }
                                                  return;
                                                }
                                              }
                                              cResult[45] = tmp30;
                                              class J {
                                                constructor() {
                                                  obj = closure_0(closure_2[20]);
                                                  obj1 = {};
                                                  merged = Object.assign(
                                                    closure_13(closure_0(closure_2[23]).UploadOrigin.IMAGE_PICKER),
                                                  );
                                                  obj1.draftType = closure_7.draftType;
                                                  handleViewAllDialogResult = obj.handleViewAllDialog(obj1);
                                                  obj3 = closure_0(closure_2[24]);
                                                  if (obj3.isAndroid()) {
                                                    tmp3 = closure_2;
                                                    current = closure_2.current;
                                                    tmp4 = null;
                                                    if (current != null) {
                                                      collapseResult = current.collapse();
                                                    }
                                                  }
                                                  return;
                                                }
                                              }
                                            } else {
                                              class Z {
                                                constructor() {
                                                  obj = closure_0(closure_2[20]);
                                                  obj1 = {};
                                                  merged = Object.assign(
                                                    closure_13(closure_0(closure_2[23]).UploadOrigin.FILE_ATTACHMENT),
                                                  );
                                                  handleAttachFileResult = obj.handleAttachFile(obj1);
                                                  return;
                                                }
                                              }
                                            }
                                            class Q {
                                              constructor(arg0) {
                                                ({ channelId, item, isIncluded } = channel);
                                                tmp = closure_2;
                                                obj = closure_1(closure_2[10]);
                                                obj1 = { action: closure_7.MEDIA_SELECTED };
                                                trackResult = obj.track(
                                                  AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED,
                                                  obj1,
                                                );
                                                tmp3 = closure_5;
                                                if (closure_5.target === MediaKeyboardTarget.CHAT) {
                                                  tmp13 = closure_0;
                                                  obj5 = closure_0(tmp[20]);
                                                  flag = false;
                                                  tmp14 = obj5;
                                                  tmp15 = channelId;
                                                  tmp16 = item;
                                                  tmp17 = isIncluded;
                                                  result = obj5.handleSelectKeyboardItem(
                                                    channelId,
                                                    item,
                                                    isIncluded,
                                                    false,
                                                  );
                                                } else if (tmp3.target === tmp4.COMMAND) {
                                                  tmp19 = closure_0;
                                                  obj6 = closure_0(tmp[20]);
                                                  result1 = obj6.mediaNodeToUploadItem(item);
                                                  tmp21 = allowedExtensions;
                                                  num = 0;
                                                  if (allowedExtensions.length > 0) {
                                                    tmp5 = validateFilenames;
                                                    tmp19Result = tmp19(tmp[21]);
                                                    items = [];
                                                    items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                    if (!validateFilenames(items)) {
                                                      tmp6 = showInvalidFileTypeAlert;
                                                      return showInvalidFileTypeAlert();
                                                    }
                                                  }
                                                  tmp19Result1 = tmp19(tmp[20]);
                                                  tmp7 = chatInputRef;
                                                  tmp8 = tmp19Result1;
                                                  tmp9 = channelId;
                                                  tmp10 = result1;
                                                  tmp11 = tmp3;
                                                  result2 = tmp19Result1.addAttachmentForCommand(
                                                    channelId,
                                                    chatInputRef,
                                                    result1,
                                                    tmp3,
                                                    tmp19(tmp[23]).UploadOrigin.IMAGE_PICKER,
                                                  );
                                                }
                                                return;
                                              }
                                            }
                                            function ne(channelId) {
                                              channelId = channelId.channelId;
                                              const item = channelId.item;
                                              const isIncluded = channelId.isIncluded;
                                              const result = channel(ref[20]).mediaNodeToUploadItem(item);
                                              const cloudUpload = new channel(ref[25]).CloudUpload(result, channelId);
                                              let upload;
                                              if (isIncluded) {
                                                upload = keyboardContextForType.getUpload(
                                                  channelId,
                                                  cloudUpload.id,
                                                  sharedValue1.ChannelMessage,
                                                );
                                              }
                                              let onRemove;
                                              if (null != upload) {
                                                onRemove = () =>
                                                  MediaKeyboardUtils.handleSelectKeyboardItem(
                                                    channelId,
                                                    item,
                                                    isIncluded,
                                                    false,
                                                  );
                                              }
                                              const obj2 = {
                                                channelId,
                                                disableAddDescription: null == upload,
                                                disableSpoiler: null == upload,
                                                upload: null,
                                                onAdd: null,
                                                onEdit: null,
                                                onRemove: null,
                                              };
                                              let tmp8 = upload;
                                              const obj = channel(ref[20]);
                                              if (upload == null) {
                                                tmp8 = cloudUpload;
                                              }
                                              obj2.upload = tmp8;
                                              let fn2;
                                              if (null == upload) {
                                                fn2 = () => closure_14({ channelId, item, isIncluded });
                                              }
                                              obj2.onAdd = fn2;
                                              obj2.onEdit = function onEdit(arg0) {
                                                if (fn != null) {
                                                  tmp();
                                                }
                                                const items = [arg0];
                                                closure_12(items, Upload.UploadOrigin.IMAGE_EDITOR);
                                              };
                                              obj2.onRemove = onRemove;
                                              chatInputRef(ref[26])(obj2);
                                              const tmp7 = chatInputRef(ref[26]);
                                            }
                                            class J {
                                              constructor() {
                                                obj = closure_0(closure_2[20]);
                                                obj1 = {};
                                                merged = Object.assign(
                                                  closure_13(closure_0(closure_2[23]).UploadOrigin.IMAGE_PICKER),
                                                );
                                                obj1.draftType = closure_7.draftType;
                                                handleViewAllDialogResult = obj.handleViewAllDialog(obj1);
                                                obj3 = closure_0(closure_2[24]);
                                                if (obj3.isAndroid()) {
                                                  tmp3 = closure_2;
                                                  current = closure_2.current;
                                                  tmp4 = null;
                                                  if (current != null) {
                                                    collapseResult = current.collapse();
                                                  }
                                                }
                                                return;
                                              }
                                            }
                                            cResult[46] = tmp22;
                                            cResult[47] = tmp25;
                                            cResult[48] = ne;
                                          }
                                          class J {
                                            constructor() {
                                              obj = closure_0(closure_2[20]);
                                              obj1 = {};
                                              merged = Object.assign(
                                                closure_13(closure_0(closure_2[23]).UploadOrigin.IMAGE_PICKER),
                                              );
                                              obj1.draftType = closure_7.draftType;
                                              handleViewAllDialogResult = obj.handleViewAllDialog(obj1);
                                              obj3 = closure_0(closure_2[24]);
                                              if (obj3.isAndroid()) {
                                                tmp3 = closure_2;
                                                current = closure_2.current;
                                                tmp4 = null;
                                                if (current != null) {
                                                  collapseResult = current.collapse();
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          cResult[39] = tmp19.draftType;
                                          cResult[40] = tmp23;
                                          cResult[41] = J;
                                        }
                                      }
                                    }
                                  }
                                  class Q {
                                    constructor(arg0) {
                                      ({ channelId, item, isIncluded } = channel);
                                      tmp = closure_2;
                                      obj = closure_1(closure_2[10]);
                                      obj1 = { action: closure_7.MEDIA_SELECTED };
                                      trackResult = obj.track(AnalyticEvents.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj1);
                                      tmp3 = closure_5;
                                      if (closure_5.target === MediaKeyboardTarget.CHAT) {
                                        tmp13 = closure_0;
                                        obj5 = closure_0(tmp[20]);
                                        flag = false;
                                        tmp14 = obj5;
                                        tmp15 = channelId;
                                        tmp16 = item;
                                        tmp17 = isIncluded;
                                        result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
                                      } else if (tmp3.target === tmp4.COMMAND) {
                                        tmp19 = closure_0;
                                        obj6 = closure_0(tmp[20]);
                                        result1 = obj6.mediaNodeToUploadItem(item);
                                        tmp21 = allowedExtensions;
                                        num = 0;
                                        if (allowedExtensions.length > 0) {
                                          tmp5 = validateFilenames;
                                          tmp19Result = tmp19(tmp[21]);
                                          items = [];
                                          items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                          if (!validateFilenames(items)) {
                                            tmp6 = showInvalidFileTypeAlert;
                                            return showInvalidFileTypeAlert();
                                          }
                                        }
                                        tmp19Result1 = tmp19(tmp[20]);
                                        tmp7 = chatInputRef;
                                        tmp8 = tmp19Result1;
                                        tmp9 = channelId;
                                        tmp10 = result1;
                                        tmp11 = tmp3;
                                        result2 = tmp19Result1.addAttachmentForCommand(
                                          channelId,
                                          chatInputRef,
                                          result1,
                                          tmp3,
                                          tmp19(tmp[23]).UploadOrigin.IMAGE_PICKER,
                                        );
                                      }
                                      return;
                                    }
                                  }
                                  cResult[29] = chatInputRef;
                                  cResult[30] = keyboardContextForType;
                                  cResult[31] = showInvalidFileTypeAlert;
                                  cResult[32] = validateFilenames;
                                  cResult[33] = Q;
                                  tmp25 = Q;
                                }
                              }
                            }
                          }
                          class W {
                            constructor(arg0, arg1) {
                              tmp = closure_5;
                              if (closure_5.target === MediaKeyboardTarget.CHAT) {
                                tmp15 = closure_0;
                                tmp16 = closure_2;
                                obj3 = closure_0(closure_2[20]);
                                tmp17 = channel;
                                addImagesFromPickerResult = obj3.addImagesFromPicker(channel.id, channel, arg1);
                              } else if (tmp.target === tmp2.COMMAND) {
                                tmp19 = allowedExtensions;
                                num = 0;
                                if (allowedExtensions.length > 0) {
                                  tmp3 = validateFilenames;
                                  tmp4 = closure_0;
                                  tmp5 = closure_2;
                                  obj = closure_0(closure_2[21]);
                                  items = [];
                                  items[0] = obj.getFileFromUploadItem(channel[0]).filename;
                                  if (!validateFilenames(items)) {
                                    tmp6 = showInvalidFileTypeAlert;
                                    return showInvalidFileTypeAlert();
                                  }
                                }
                                tmp7 = closure_0;
                                tmp8 = closure_2;
                                obj2 = closure_0(closure_2[20]);
                                tmp9 = channel;
                                tmp10 = chatInputRef;
                                tmp11 = obj2;
                                tmp12 = tmp;
                                tmp13 = arg1;
                                result = obj2.addAttachmentForCommand(channel.id, chatInputRef, channel[0], tmp, arg1);
                              }
                              return;
                            }
                          }
                          cResult[23] = channel;
                          cResult[24] = tmp19.uploadLimit;
                          cResult[25] = tmp21;
                          cResult[26] = tmp22;
                          cResult[27] = tmp24;
                          tmp23 = tmp24;
                        }
                      }
                    }
                  }
                }
                class W {
                  constructor(arg0, arg1) {
                    tmp = closure_5;
                    if (closure_5.target === MediaKeyboardTarget.CHAT) {
                      tmp15 = closure_0;
                      tmp16 = closure_2;
                      obj3 = closure_0(closure_2[20]);
                      tmp17 = channel;
                      addImagesFromPickerResult = obj3.addImagesFromPicker(channel.id, channel, arg1);
                    } else if (tmp.target === tmp2.COMMAND) {
                      tmp19 = allowedExtensions;
                      num = 0;
                      if (allowedExtensions.length > 0) {
                        tmp3 = validateFilenames;
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        obj = closure_0(closure_2[21]);
                        items = [];
                        items[0] = obj.getFileFromUploadItem(channel[0]).filename;
                        if (!validateFilenames(items)) {
                          tmp6 = showInvalidFileTypeAlert;
                          return showInvalidFileTypeAlert();
                        }
                      }
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      obj2 = closure_0(closure_2[20]);
                      tmp9 = channel;
                      tmp10 = chatInputRef;
                      tmp11 = obj2;
                      tmp12 = tmp;
                      tmp13 = arg1;
                      result = obj2.addAttachmentForCommand(channel.id, chatInputRef, channel[0], tmp, arg1);
                    }
                    return;
                  }
                }
                cResult[16] = channel.id;
                cResult[17] = chatInputRef;
                cResult[18] = keyboardContextForType;
                cResult[19] = showInvalidFileTypeAlert;
                cResult[20] = validateFilenames;
                cResult[21] = W;
                tmp22 = W;
              }
              let fn2 = function x() {
                if (keyboardContextForType.target !== constants.APP_LAUNCHER) {
                  const current = chatInputRef.current;
                  const obj = { type: KeyboardTypes.KeyboardTypes.MEDIA, context: tmp };
                  current.openCustomKeyboard(obj);
                }
              };
              cResult[12] = chatInputRef;
              cResult[13] = keyboardContextForType;
              cResult[14] = fn2;
              tmp21 = fn2;
              const tmpResult12 = tmp(tmp2[19]);
            }
            let obj2 = { channel, context: keyboardContextForType };
            cResult[9] = channel;
            cResult[10] = keyboardContextForType;
            cResult[11] = obj2;
            tmp18 = obj2;
            tmp14 = chatInputRef;
            const tmpResult10 = tmp(tmp2[15]);
          }
          let obj3 = { chatInputRef, channel };
          cResult[4] = channel;
          cResult[5] = chatInputRef;
          cResult[6] = obj3;
          tmp13 = obj3;
          const tmpResult8 = tmp(tmp2[12]);
        }
        const fn = function u() {
          AnalyticsUtilsDefault.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, {
            type: constants3.MEDIA_PICKER,
            channel_id: channel.id,
            guild_id: channel.guild_id,
          });
        };
        let items = [,];
        ({ id: arr[0], guild_id: arr[1] } = channel);
        cResult[0] = channel.guild_id;
        cResult[1] = channel.id;
        cResult[2] = fn;
        cResult[3] = items;
        tmp5 = items;
        tmp4 = fn;
        let obj = channel(ref[9]);
      }
    : (channel) => {
        channel = channel.channel;
        const chatInputRef = channel.chatInputRef;
        let sharedValue;
        let items = [,];
        ({ id: arr[0], guild_id: arr[1] } = channel);
        ({ onClose, transitionState } = channel);
        const effect = sharedValue.useEffect(() => {
          AnalyticsUtilsDefault.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, {
            type: constants3.MEDIA_PICKER,
            channel_id: channel.id,
            guild_id: channel.guild_id,
          });
        }, items);
        let ref = sharedValue.useRef(null);
        sharedValue = channel(ref[11]).useSharedValue(-1);
        let obj = channel(ref[11]);
        const sharedValue1 = channel(ref[11]).useSharedValue(0);
        let obj2 = channel(ref[11]);
        const keyboardContextForType = channel(ref[12]).useKeyboardContextForType(channel(ref[13]).KeyboardTypes.MEDIA);
        let obj3 = channel(ref[12]);
        let obj4 = channel(ref[14]);
        const token = channel(ref[15]).useToken(
          chatInputRef(ref[16]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET,
        );
        let obj5 = channel(ref[15]);
        const isAppLauncherEnabled = channel(ref[17]).getIsAppLauncherEnabled(channel);
        let tmp8 = chatInputRef(ref[18])({ channel, context: keyboardContextForType });
        closure_8 = tmp8;
        let obj6 = channel(ref[17]);
        const fileTypeFiltering = channel(ref[19]).useFileTypeFiltering(tmp8.fileTypes);
        const allowedExtensions = fileTypeFiltering.allowedExtensions;
        const validateFilenames = fileTypeFiltering.validateFilenames;
        const showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
        let items1 = [
          sharedValue,
          channel,
          chatInputRef,
          keyboardContextForType,
          ref,
          tmp8,
          allowedExtensions,
          validateFilenames,
          showInvalidFileTypeAlert,
        ];
        const memo = sharedValue.useMemo(() => {
          function onRestoreKeyboard() {
            if (keyboardContextForType.target !== token.APP_LAUNCHER) {
              const current = onSelectFiles.current;
              const obj = { type: channel(ref[13]).KeyboardTypes.MEDIA, context: tmp };
              current.openCustomKeyboard(obj);
            }
          }
          function onSelectFiles(items, IMAGE_EDITOR) {
            if (keyboardContextForType.target === token.CHAT) {
              channel(ref[20]).addImagesFromPicker(onRestoreKeyboard.id, items, IMAGE_EDITOR);
              const obj3 = channel(ref[20]);
            } else if (keyboardContextForType.target === tmp2.COMMAND) {
              if (extensions.length > 0) {
                items = [];
                items[0] = channel(ref[21]).getFileFromUploadItem(items[0]).filename;
                if (!validateFilenames(items)) {
                  return showInvalidFileTypeAlert();
                }
                const obj = channel(ref[21]);
              }
              const obj2 = channel(ref[20]);
              const result = obj2.addAttachmentForCommand(
                onRestoreKeyboard.id,
                onSelectFiles,
                items[0],
                keyboardContextForType,
                IMAGE_EDITOR,
              );
            }
          }
          function onSelectItem(arg0) {
            ({ channelId, item, isIncluded } = arg0);
            chatInputRef(ref[10]).track(closure_8.MEDIA_PICKER_ACTION_SHEET_ENGAGED, {
              action: isAppLauncherEnabled.MEDIA_SELECTED,
            });
            if (keyboardContextForType.target === token.CHAT) {
              const obj5 = channel(ref[20]);
              const result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
            } else if (keyboardContextForType.target === tmp4.COMMAND) {
              const result1 = channel(ref[20]).mediaNodeToUploadItem(item);
              if (extensions.length > 0) {
                const items = [channel(ref[21]).getFileFromUploadItem(result1).filename];
                if (!validateFilenames(items)) {
                  return showInvalidFileTypeAlert();
                }
                const tmp19Result = channel(ref[21]);
              }
              const tmp19Result2 = channel(ref[20]);
              const result2 = tmp19Result2.addAttachmentForCommand(
                channelId,
                onSelectFiles,
                result1,
                keyboardContextForType,
                channel(ref[23]).UploadOrigin.IMAGE_PICKER,
              );
              const obj6 = channel(ref[20]);
            }
            const obj = chatInputRef(ref[10]);
            const obj2 = { action: isAppLauncherEnabled.MEDIA_SELECTED };
          }
          return {
            onAttachPress() {
              const FILE_ATTACHMENT = channel(ref[23]).UploadOrigin.FILE_ATTACHMENT;
              const merged = Object.assign({
                channel: onRestoreKeyboard,
                uploadLimit: closure_1_8.uploadLimit,
                extensions,
                onDismissKeyboard() {
                  return IMAGE_PICKER(onSelectItem[22]).dismissKeyboard();
                },
                onRestoreKeyboard: FILE_ATTACHMENT,
                onSelectFiles(arg0) {
                  return onSelectFiles(arg0, IMAGE_PICKER);
                },
              });
              channel(ref[20]).handleAttachFile({});
            },
            onPressCamera(previewType) {
              const obj2 = {};
              const IMAGE_PICKER = channel(ref[23]).UploadOrigin.IMAGE_PICKER;
              const merged = Object.assign({
                channel: onRestoreKeyboard,
                uploadLimit: closure_1_8.uploadLimit,
                extensions,
                onDismissKeyboard() {
                  return IMAGE_PICKER(onSelectItem[22]).dismissKeyboard();
                },
                onRestoreKeyboard: IMAGE_PICKER,
                onSelectFiles(arg0) {
                  return onSelectFiles(arg0, IMAGE_PICKER);
                },
              });
              obj2.previewType = previewType;
              channel(ref[20]).handleCameraDialog(obj2);
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
              const IMAGE_PICKER = channel(ref[23]).UploadOrigin.IMAGE_PICKER;
              const merged = Object.assign({
                channel: onRestoreKeyboard,
                uploadLimit: closure_1_8.uploadLimit,
                extensions,
                onDismissKeyboard() {
                  return IMAGE_PICKER(onSelectItem[22]).dismissKeyboard();
                },
                onRestoreKeyboard: IMAGE_PICKER,
                onSelectFiles(arg0) {
                  return onSelectFiles(arg0, IMAGE_PICKER);
                },
              });
              obj2.draftType = closure_1_8.draftType;
              channel(ref[20]).handleViewAllDialog(obj2);
              const obj = channel(ref[20]);
              const obj3 = {
                channel: onRestoreKeyboard,
                uploadLimit: closure_1_8.uploadLimit,
                extensions,
                onDismissKeyboard() {
                  return IMAGE_PICKER(onSelectItem[22]).dismissKeyboard();
                },
                onRestoreKeyboard: IMAGE_PICKER,
                onSelectFiles(arg0) {
                  return onSelectFiles(arg0, IMAGE_PICKER);
                },
              };
              if (obj4.isAndroid()) {
                const current = onSelectItem.current;
                if (current != null) {
                  current.collapse();
                }
              }
              obj4 = channel(ref[24]);
            },
            onManageLimited() {
              const obj = MediaKeyboardUtils;
              const result = obj.handleLimitedPickerDialog({
                onDismissKeyboard: ChatInputUtils.dismissKeyboard,
                onRestoreKeyboard,
              });
            },
            onPressItem(channelId) {
              onSelectItem({ channelId: channelId.channelId, item: channelId.item, isIncluded: channelId.isIncluded });
            },
            onLongPressItem(channelId) {
              channelId = channelId.channelId;
              const item = channelId.item;
              const isIncluded = channelId.isIncluded;
              let onRemove;
              const result = channel(ref[20]).mediaNodeToUploadItem(item);
              const cloudUpload = new channel(ref[25]).CloudUpload(result, channelId);
              let upload;
              if (isIncluded) {
                upload = keyboardContextForType.getUpload(channelId, cloudUpload.id, sharedValue1.ChannelMessage);
              }
              onRemove = undefined;
              if (null != upload) {
                onRemove = () => MediaKeyboardUtils.handleSelectKeyboardItem(channelId, item, isIncluded, false);
              }
              const obj2 = {
                channelId,
                disableAddDescription: null == upload,
                disableSpoiler: null == upload,
                upload: null,
                onAdd: null,
                onEdit: null,
                onRemove: null,
              };
              let tmp8 = upload;
              const obj = channel(ref[20]);
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
              chatInputRef(ref[26])(obj2);
              const tmp7 = chatInputRef(ref[26]);
            },
            onPollsPress() {
              AnalyticsUtilsDefault.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, {
                type: constants3.POLLS,
                channel_id: channel.id,
                guild_id: channel.guild_id,
              });
              const current = chatInputRef.current;
              current.closeCustomKeyboard();
              const obj2 = { type: constants3.POLLS, channel_id: channel.id, guild_id: channel.guild_id };
              PollCreationModalActionCreators.openCreatePollModal({ channel, onCancel: onRestoreKeyboard });
            },
            onAppsPress() {
              const current = onSelectFiles.current;
              const obj = {
                type: channel(ref[13]).KeyboardTypes.APP_LAUNCHER,
                context: { initialRouteName: validateFilenames.HOME },
              };
              current.openCustomKeyboard(obj);
            },
            onThreadPress() {
              channel(ref[20]).handleSelectThread(onRestoreKeyboard, onSelectFiles);
            },
            onSend() {
              const current = onSelectItem.current;
              if (current != null) {
                current.collapse();
              }
              const current2 = onSelectFiles.current;
              current2.handleSend();
            },
          };
        }, items1);
        const canStartThreads = tmp8.canStartThreads;
        let items2 = [memo, , , ,];
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
        const callback = sharedValue.useCallback(
          (animatedIndex) =>
            __initData(MediaKeyboardBottomSheetHeaderSimpleDefault, {
              animatedIndex: animatedIndex.animatedIndex,
              onPress: memo.onPressHeader,
            }),
          items3,
        );
        const callback1 = sharedValue.useCallback((animateOnMount) => {
          let flag = animateOnMount.animateOnMount;
          if (flag === undefined) {
            flag = false;
          }
          const obj = {
            animateOnMount: flag,
            animatedIndex: sharedValue,
            animatedPosition: sharedValue1,
            initialPosition: animateOnMount.initialPosition,
            children: null,
          };
          const items = [
            __initData(MediaKeyboardFloatingSendDefault, {
              ref,
              animatedIndex: sharedValue,
              channelId: channel.id,
              draftType: closure_8.draftType,
              onSend: memo.onSend,
            }),
            __initData(MediaKeyboardBottomSheetActionsDefault, {
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
              overflowButtons: memo1,
            }),
          ];
          obj.children = items;
          return __initData2(MediaKeyboardAccessoriesContainerDefault, obj);
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
          children: null,
        };
        const obj7 = channel(ref[19]);
        obj8.children = memo(chatInputRef(ref[38]), {
          channel,
          draftType: tmp8.draftType,
          onPressCamera: memo.onPressCamera,
          onAttachPress: memo.onAttachPress,
          onPressItem: memo.onPressItem,
          onLongPressItem: memo.onLongPressItem,
          onViewAll: memo.onViewAll,
          onManageLimited: memo.onManageLimited,
          includedUploadIds: tmp8.includedUploadIds,
          extensions: allowedExtensions,
          allowCamera: fileTypeFiltering.mediaFilesAllowed,
          uploadDisabled: tmp8.uploadDisabled,
          uploadLimit: tmp8.uploadLimit,
          disableWhenReachedLimit: tmp8.disableWhenReachedLimit,
        });
        return memo(chatInputRef(ref[39]), obj8);
      },
);
