// discord_app/modules/media_keyboard/native/components/MediaKeyboard.tsx
import intl6 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AppLauncherNativeConstants from "../../../app_launcher/native/AppLauncherNativeConstants.tsx";
import KeyboardTypes from "../../../keyboard/native/KeyboardTypes.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import ThreadIcon from "../../../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
import ImageIcon from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import DraftStore from "../../../../stores/DraftStore.tsx";
import Upload from "../../../../lib/uploader/Upload.tsx";
import utils_UploadUtils from "../../../../utils/native/UploadUtils.tsx";
import MediaKeyboardUtils from "../MediaKeyboardUtils.tsx";
import PollsIcon from "../../../../design/components/Icon/native/redesign/generated/PollsIcon.tsx";
import AttachmentIcon from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import MediaKeyboardBottomSheetHeaderSimpleDefault from "MediaKeyboardBottomSheetHeaderSimple.tsx";
import MediaKeyboardBottomSheetActionsDefault from "MediaKeyboardBottomSheetActions.tsx";
import PortalKeyboardConstants from "../../../keyboard/native/PortalKeyboardConstants.tsx";
import PollCreationModalActionCreators from "../../../polls/native/PollCreationModalActionCreators.tsx";
import MediaKeyboardAccessoriesContainerDefault from "MediaKeyboardAccessoriesContainer.tsx";
import MediaKeyboardFloatingSendDefault from "MediaKeyboardFloatingSend.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UploadAttachmentStore from "../../../../stores/UploadAttachmentStore.tsx";
import MediaKeyboardConstants from "../MediaKeyboardConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const DraftType = DraftStore.DraftType;
({ MediaKeyboardTarget: metroRequire, MediaPickerActionSheetEngagedActions: metroImportDefault } =
  MediaKeyboardConstants);
({ AnalyticEvents: metroImportAll, ChatInputComponentViewedTypes: c9 } = Constants);
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const KEYBOARD_ANIMATION_CONFIG = PortalKeyboardConstants.KEYBOARD_ANIMATION_CONFIG;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let onClose;
        let overflowButtons;
        let ref;
        let sharedValue;
        let transitionState;
        let tmp = channel;
        let tmp2 = ref;
        let obj = channel(ref[9]);
        const cResult = obj.c(137);
        channel = channel.channel;
        const chatInputRef = channel.chatInputRef;
        ({ onClose, transitionState } = channel);
        if (cResult[0] === channel.guild_id) {
          let tmp4;
          let tmp5;
          if (cResult[1] === channel.id) {
            tmp4 = cResult[2];
            tmp5 = cResult[3];
          }
          const effect = sharedValue.useEffect(tmp4, tmp5);
          let tmp8 = null;
          ref = sharedValue.useRef(null);
          const tmpResult = tmp(tmp2[11]);
          sharedValue = tmpResult.useSharedValue(-1);
          const tmpResult7 = tmp(tmp2[11]);
          const sharedValue1 = tmpResult7.useSharedValue(0);
          const tmpResult8 = tmp(tmp2[12]);
          const keyboardContextForType = tmpResult8.useKeyboardContextForType(tmp(tmp2[13]).KeyboardTypes.MEDIA);
          if (cResult[4] === channel) {
            let tmp13;
            if (cResult[5] === chatInputRef) {
              tmp13 = cResult[6];
            }
            const tmpResult9 = tmp(tmp2[14]);
            const appLauncherActionSheet = tmpResult9.useAppLauncherActionSheet(tmp13).appLauncherActionSheet;
            const tmpResult10 = tmp(tmp2[15]);
            const token = tmpResult10.useToken(
              chatInputRef(tmp2[16]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET,
            );
            const tmp14 = chatInputRef;
            if (cResult[7] !== channel) {
              const tmpResult11 = tmp(tmp2[17]);
              const isAppLauncherEnabled = tmpResult11.getIsAppLauncherEnabled(channel);
              cResult[7] = channel;
              cResult[8] = isAppLauncherEnabled;
            }
            if (cResult[9] === channel) {
              let tmp18;
              if (cResult[10] === keyboardContextForType) {
                tmp18 = cResult[11];
              }
              const tmp19 = tmp14(tmp2[18])(tmp18);
              let closure_7 = tmp19;
              const tmpResult12 = tmp(tmp2[19]);
              const fileTypeFiltering = tmpResult12.useFileTypeFiltering(tmp19.fileTypes);
              const allowedExtensions = fileTypeFiltering.allowedExtensions;
              const validateFilenames = fileTypeFiltering.validateFilenames;
              const showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
              const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
              if (cResult[12] === chatInputRef) {
                let tmp21;
                if (cResult[13] === keyboardContextForType) {
                  tmp21 = cResult[14];
                }
                let closure_11 = tmp21;
                if (cResult[15] === allowedExtensions) {
                  if (cResult[16] === channel.id) {
                    if (cResult[17] === chatInputRef) {
                      if (cResult[18] === keyboardContextForType) {
                        if (cResult[19] === showInvalidFileTypeAlert) {
                          let tmp22;
                          if (cResult[20] === validateFilenames) {
                            tmp22 = cResult[21];
                          }
                          closure_12 = tmp22;
                          if (cResult[22] === allowedExtensions) {
                            if (cResult[23] === channel) {
                              if (cResult[24] === tmp19.uploadLimit) {
                                if (cResult[25] === tmp21) {
                                  let tmp23;
                                  if (cResult[26] === tmp22) {
                                    tmp23 = cResult[27];
                                  }
                                  let closure_13 = tmp23;
                                  if (cResult[28] === allowedExtensions) {
                                    if (cResult[29] === chatInputRef) {
                                      if (cResult[30] === keyboardContextForType) {
                                        if (cResult[31] === showInvalidFileTypeAlert) {
                                          let tmp25;
                                          if (cResult[32] === validateFilenames) {
                                            tmp25 = cResult[33];
                                          }
                                          let closure_14 = tmp25;
                                          if (cResult[34] !== tmp23) {
                                            class Z {
                                              constructor() {
                                                const handleAttachFile = MediaKeyboardUtils.handleAttachFile;
                                                const obj = {};
                                                MediaKeyboardUtils;
                                                const merged = Object.assign(
                                                  closure_13(Upload.UploadOrigin.FILE_ATTACHMENT),
                                                );
                                                handleAttachFile(obj);
                                              }
                                            }
                                            const fn3 = function q(previewType) {
                                              const obj = { previewType };
                                              const handleCameraDialog = MediaKeyboardUtils.handleCameraDialog;
                                              MediaKeyboardUtils;
                                              const merged = Object.assign(
                                                closure_13(Upload.UploadOrigin.IMAGE_PICKER),
                                              );
                                              handleCameraDialog(obj);
                                            };
                                            class Q {
                                              constructor(arg0) {
                                                let channelId;
                                                let isIncluded;
                                                let item;
                                                ({ channelId, item, isIncluded } = arg0);
                                                const obj = AnalyticsUtilsDefault;
                                                const obj2 = { action: metroImportDefault.MEDIA_SELECTED };
                                                obj.track(metroImportAll.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj2);
                                                if (keyboardContextForType.target === metroRequire.CHAT) {
                                                  const obj5 = MediaKeyboardUtils;
                                                  const result = obj5.handleSelectKeyboardItem(
                                                    channelId,
                                                    item,
                                                    isIncluded,
                                                    false,
                                                  );
                                                } else if (keyboardContextForType.target === tmp4.COMMAND) {
                                                  const obj6 = MediaKeyboardUtils;
                                                  const result1 = obj6.mediaNodeToUploadItem(item);
                                                  if (allowedExtensions.length > 0) {
                                                    const items = [];
                                                    const tmp19Result = utils_UploadUtils;
                                                    items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                    if (!validateFilenames(items)) {
                                                      return showInvalidFileTypeAlert();
                                                    }
                                                  }
                                                  const tmp19Result2 = MediaKeyboardUtils;
                                                  const result2 = tmp19Result2.addAttachmentForCommand(
                                                    channelId,
                                                    chatInputRef,
                                                    result1,
                                                    keyboardContextForType,
                                                    Upload.UploadOrigin.IMAGE_PICKER,
                                                  );
                                                }
                                              }
                                            }
                                            class J {
                                              constructor() {
                                                const obj = { draftType: closure_7.draftType };
                                                const handleViewAllDialog = MediaKeyboardUtils.handleViewAllDialog;
                                                MediaKeyboardUtils;
                                                const merged = Object.assign(
                                                  closure_13(Upload.UploadOrigin.IMAGE_PICKER),
                                                );
                                                handleViewAllDialog(obj);
                                                const obj2 = PlatformUtils;
                                                if (obj2.isAndroid()) {
                                                  const current = ref.current;
                                                  if (current != null) {
                                                    current.collapse();
                                                  }
                                                }
                                              }
                                            }
                                            cResult[36] = fn3;
                                          } else {
                                            class Z {
                                              constructor() {
                                                const handleAttachFile = MediaKeyboardUtils.handleAttachFile;
                                                const obj = {};
                                                MediaKeyboardUtils;
                                                const merged = Object.assign(
                                                  closure_13(Upload.UploadOrigin.FILE_ATTACHMENT),
                                                );
                                                handleAttachFile(obj);
                                              }
                                            }
                                          }
                                          class Q {
                                            constructor(arg0) {
                                              let channelId;
                                              let isIncluded;
                                              let item;
                                              ({ channelId, item, isIncluded } = arg0);
                                              const obj = AnalyticsUtilsDefault;
                                              const obj2 = { action: metroImportDefault.MEDIA_SELECTED };
                                              obj.track(metroImportAll.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj2);
                                              if (keyboardContextForType.target === metroRequire.CHAT) {
                                                const obj5 = MediaKeyboardUtils;
                                                const result = obj5.handleSelectKeyboardItem(
                                                  channelId,
                                                  item,
                                                  isIncluded,
                                                  false,
                                                );
                                              } else if (keyboardContextForType.target === tmp4.COMMAND) {
                                                const obj6 = MediaKeyboardUtils;
                                                const result1 = obj6.mediaNodeToUploadItem(item);
                                                if (allowedExtensions.length > 0) {
                                                  const items = [];
                                                  const tmp19Result = utils_UploadUtils;
                                                  items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                  if (!validateFilenames(items)) {
                                                    return showInvalidFileTypeAlert();
                                                  }
                                                }
                                                const tmp19Result2 = MediaKeyboardUtils;
                                                const result2 = tmp19Result2.addAttachmentForCommand(
                                                  channelId,
                                                  chatInputRef,
                                                  result1,
                                                  keyboardContextForType,
                                                  Upload.UploadOrigin.IMAGE_PICKER,
                                                );
                                              }
                                            }
                                          }
                                          if (cResult[39] === tmp19.draftType) {
                                            class Z {
                                              constructor() {
                                                const handleAttachFile = MediaKeyboardUtils.handleAttachFile;
                                                const obj = {};
                                                MediaKeyboardUtils;
                                                const merged = Object.assign(
                                                  closure_13(Upload.UploadOrigin.FILE_ATTACHMENT),
                                                );
                                                handleAttachFile(obj);
                                              }
                                            }
                                            if (cResult[42] !== tmp21) {
                                              class Z {
                                                constructor() {
                                                  const handleAttachFile = MediaKeyboardUtils.handleAttachFile;
                                                  const obj = {};
                                                  MediaKeyboardUtils;
                                                  const merged = Object.assign(
                                                    closure_13(Upload.UploadOrigin.FILE_ATTACHMENT),
                                                  );
                                                  handleAttachFile(obj);
                                                }
                                              }
                                              cResult[42] = tmp21;
                                              class Q {
                                                constructor(arg0) {
                                                  let channelId;
                                                  let isIncluded;
                                                  let item;
                                                  ({ channelId, item, isIncluded } = arg0);
                                                  const obj = AnalyticsUtilsDefault;
                                                  const obj2 = { action: metroImportDefault.MEDIA_SELECTED };
                                                  obj.track(metroImportAll.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj2);
                                                  if (keyboardContextForType.target === metroRequire.CHAT) {
                                                    const obj5 = MediaKeyboardUtils;
                                                    const result = obj5.handleSelectKeyboardItem(
                                                      channelId,
                                                      item,
                                                      isIncluded,
                                                      false,
                                                    );
                                                  } else if (keyboardContextForType.target === tmp4.COMMAND) {
                                                    const obj6 = MediaKeyboardUtils;
                                                    const result1 = obj6.mediaNodeToUploadItem(item);
                                                    if (allowedExtensions.length > 0) {
                                                      const items = [];
                                                      const tmp19Result = utils_UploadUtils;
                                                      items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                      if (!validateFilenames(items)) {
                                                        return showInvalidFileTypeAlert();
                                                      }
                                                    }
                                                    const tmp19Result2 = MediaKeyboardUtils;
                                                    const result2 = tmp19Result2.addAttachmentForCommand(
                                                      channelId,
                                                      chatInputRef,
                                                      result1,
                                                      keyboardContextForType,
                                                      Upload.UploadOrigin.IMAGE_PICKER,
                                                    );
                                                  }
                                                }
                                              }
                                              cResult[43] = tmp29;
                                              class J {
                                                constructor() {
                                                  const obj = { draftType: closure_7.draftType };
                                                  const handleViewAllDialog = MediaKeyboardUtils.handleViewAllDialog;
                                                  MediaKeyboardUtils;
                                                  const merged = Object.assign(
                                                    closure_13(Upload.UploadOrigin.IMAGE_PICKER),
                                                  );
                                                  handleViewAllDialog(obj);
                                                  const obj2 = PlatformUtils;
                                                  if (obj2.isAndroid()) {
                                                    const current = ref.current;
                                                    if (current != null) {
                                                      current.collapse();
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              class Z {
                                                constructor() {
                                                  const handleAttachFile = MediaKeyboardUtils.handleAttachFile;
                                                  const obj = {};
                                                  MediaKeyboardUtils;
                                                  const merged = Object.assign(
                                                    closure_13(Upload.UploadOrigin.FILE_ATTACHMENT),
                                                  );
                                                  handleAttachFile(obj);
                                                }
                                              }
                                            }
                                            if (cResult[44] !== tmp25) {
                                              class Z {
                                                constructor() {
                                                  const handleAttachFile = MediaKeyboardUtils.handleAttachFile;
                                                  const obj = {};
                                                  MediaKeyboardUtils;
                                                  const merged = Object.assign(
                                                    closure_13(Upload.UploadOrigin.FILE_ATTACHMENT),
                                                  );
                                                  handleAttachFile(obj);
                                                }
                                              }
                                              cResult[44] = tmp25;
                                              class Q {
                                                constructor(arg0) {
                                                  let channelId;
                                                  let isIncluded;
                                                  let item;
                                                  ({ channelId, item, isIncluded } = arg0);
                                                  const obj = AnalyticsUtilsDefault;
                                                  const obj2 = { action: metroImportDefault.MEDIA_SELECTED };
                                                  obj.track(metroImportAll.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj2);
                                                  if (keyboardContextForType.target === metroRequire.CHAT) {
                                                    const obj5 = MediaKeyboardUtils;
                                                    const result = obj5.handleSelectKeyboardItem(
                                                      channelId,
                                                      item,
                                                      isIncluded,
                                                      false,
                                                    );
                                                  } else if (keyboardContextForType.target === tmp4.COMMAND) {
                                                    const obj6 = MediaKeyboardUtils;
                                                    const result1 = obj6.mediaNodeToUploadItem(item);
                                                    if (allowedExtensions.length > 0) {
                                                      const items = [];
                                                      const tmp19Result = utils_UploadUtils;
                                                      items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                      if (!validateFilenames(items)) {
                                                        return showInvalidFileTypeAlert();
                                                      }
                                                    }
                                                    const tmp19Result2 = MediaKeyboardUtils;
                                                    const result2 = tmp19Result2.addAttachmentForCommand(
                                                      channelId,
                                                      chatInputRef,
                                                      result1,
                                                      keyboardContextForType,
                                                      Upload.UploadOrigin.IMAGE_PICKER,
                                                    );
                                                  }
                                                }
                                              }
                                              cResult[45] = tmp30;
                                              class J {
                                                constructor() {
                                                  const obj = { draftType: closure_7.draftType };
                                                  const handleViewAllDialog = MediaKeyboardUtils.handleViewAllDialog;
                                                  MediaKeyboardUtils;
                                                  const merged = Object.assign(
                                                    closure_13(Upload.UploadOrigin.IMAGE_PICKER),
                                                  );
                                                  handleViewAllDialog(obj);
                                                  const obj2 = PlatformUtils;
                                                  if (obj2.isAndroid()) {
                                                    const current = ref.current;
                                                    if (current != null) {
                                                      current.collapse();
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              class Z {
                                                constructor() {
                                                  const handleAttachFile = MediaKeyboardUtils.handleAttachFile;
                                                  const obj = {};
                                                  MediaKeyboardUtils;
                                                  const merged = Object.assign(
                                                    closure_13(Upload.UploadOrigin.FILE_ATTACHMENT),
                                                  );
                                                  handleAttachFile(obj);
                                                }
                                              }
                                            }
                                            class Q {
                                              constructor(arg0) {
                                                let channelId;
                                                let isIncluded;
                                                let item;
                                                ({ channelId, item, isIncluded } = arg0);
                                                const obj = AnalyticsUtilsDefault;
                                                const obj2 = { action: metroImportDefault.MEDIA_SELECTED };
                                                obj.track(metroImportAll.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj2);
                                                if (keyboardContextForType.target === metroRequire.CHAT) {
                                                  const obj5 = MediaKeyboardUtils;
                                                  const result = obj5.handleSelectKeyboardItem(
                                                    channelId,
                                                    item,
                                                    isIncluded,
                                                    false,
                                                  );
                                                } else if (keyboardContextForType.target === tmp4.COMMAND) {
                                                  const obj6 = MediaKeyboardUtils;
                                                  const result1 = obj6.mediaNodeToUploadItem(item);
                                                  if (allowedExtensions.length > 0) {
                                                    const items = [];
                                                    const tmp19Result = utils_UploadUtils;
                                                    items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                                    if (!validateFilenames(items)) {
                                                      return showInvalidFileTypeAlert();
                                                    }
                                                  }
                                                  const tmp19Result2 = MediaKeyboardUtils;
                                                  const result2 = tmp19Result2.addAttachmentForCommand(
                                                    channelId,
                                                    chatInputRef,
                                                    result1,
                                                    keyboardContextForType,
                                                    Upload.UploadOrigin.IMAGE_PICKER,
                                                  );
                                                }
                                              }
                                            }
                                            function ne(channelId) {
                                              let fn2;
                                              let tmp8;
                                              channelId = channelId.channelId;
                                              const item = channelId.item;
                                              const isIncluded = channelId.isIncluded;
                                              let obj = channel(ref[20]);
                                              const result = obj.mediaNodeToUploadItem(item);
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
                                                onRemove = () => {
                                                  const obj = MediaKeyboardUtils;
                                                  return obj.handleSelectKeyboardItem(
                                                    channelId,
                                                    item,
                                                    isIncluded,
                                                    false,
                                                  );
                                                };
                                              }
                                              const obj2 = {
                                                channelId,
                                                disableAddDescription: null == upload,
                                                disableSpoiler: null == upload,
                                                upload: tmp8,
                                                onAdd: fn2,
                                                onEdit(arg0) {
                                                  if (fn != null) {
                                                    tmp();
                                                  }
                                                  const items = [arg0];
                                                  closure_12(items, Upload.UploadOrigin.IMAGE_EDITOR);
                                                },
                                                onRemove,
                                              };
                                              tmp8 = upload;
                                              const tmp7 = chatInputRef(ref[26]);
                                              if (upload == null) {
                                                tmp8 = cloudUpload;
                                              }
                                              fn2 = undefined;
                                              if (null == upload) {
                                                fn2 = () => {
                                                  const obj = { channelId, item, isIncluded };
                                                  return closure_14(obj);
                                                };
                                              }
                                              tmp7(obj2);
                                            }
                                            class J {
                                              constructor() {
                                                const obj = { draftType: closure_7.draftType };
                                                const handleViewAllDialog = MediaKeyboardUtils.handleViewAllDialog;
                                                MediaKeyboardUtils;
                                                const merged = Object.assign(
                                                  closure_13(Upload.UploadOrigin.IMAGE_PICKER),
                                                );
                                                handleViewAllDialog(obj);
                                                const obj2 = PlatformUtils;
                                                if (obj2.isAndroid()) {
                                                  const current = ref.current;
                                                  if (current != null) {
                                                    current.collapse();
                                                  }
                                                }
                                              }
                                            }
                                            cResult[46] = tmp22;
                                            cResult[47] = tmp25;
                                            cResult[48] = ne;
                                          }
                                          class J {
                                            constructor() {
                                              const obj = { draftType: closure_7.draftType };
                                              const handleViewAllDialog = MediaKeyboardUtils.handleViewAllDialog;
                                              MediaKeyboardUtils;
                                              const merged = Object.assign(
                                                closure_13(Upload.UploadOrigin.IMAGE_PICKER),
                                              );
                                              handleViewAllDialog(obj);
                                              const obj2 = PlatformUtils;
                                              if (obj2.isAndroid()) {
                                                const current = ref.current;
                                                if (current != null) {
                                                  current.collapse();
                                                }
                                              }
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
                                      let channelId;
                                      let isIncluded;
                                      let item;
                                      ({ channelId, item, isIncluded } = arg0);
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = { action: metroImportDefault.MEDIA_SELECTED };
                                      obj.track(metroImportAll.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj2);
                                      if (keyboardContextForType.target === metroRequire.CHAT) {
                                        const obj5 = MediaKeyboardUtils;
                                        const result = obj5.handleSelectKeyboardItem(
                                          channelId,
                                          item,
                                          isIncluded,
                                          false,
                                        );
                                      } else if (keyboardContextForType.target === tmp4.COMMAND) {
                                        const obj6 = MediaKeyboardUtils;
                                        const result1 = obj6.mediaNodeToUploadItem(item);
                                        if (allowedExtensions.length > 0) {
                                          const items = [];
                                          const tmp19Result = utils_UploadUtils;
                                          items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                                          if (!validateFilenames(items)) {
                                            return showInvalidFileTypeAlert();
                                          }
                                        }
                                        const tmp19Result2 = MediaKeyboardUtils;
                                        const result2 = tmp19Result2.addAttachmentForCommand(
                                          channelId,
                                          chatInputRef,
                                          result1,
                                          keyboardContextForType,
                                          Upload.UploadOrigin.IMAGE_PICKER,
                                        );
                                      }
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
                            constructor(items, IMAGE_EDITOR) {
                              if (keyboardContextForType.target === metroRequire.CHAT) {
                                const obj3 = MediaKeyboardUtils;
                                obj3.addImagesFromPicker(channel.id, items, IMAGE_EDITOR);
                              } else if (keyboardContextForType.target === tmp2.COMMAND) {
                                if (allowedExtensions.length > 0) {
                                  items = [];
                                  const obj = utils_UploadUtils;
                                  items[0] = obj.getFileFromUploadItem(items[0]).filename;
                                  if (!validateFilenames(items)) {
                                    return showInvalidFileTypeAlert();
                                  }
                                }
                                const obj2 = MediaKeyboardUtils;
                                const result = obj2.addAttachmentForCommand(
                                  channel.id,
                                  chatInputRef,
                                  items[0],
                                  keyboardContextForType,
                                  IMAGE_EDITOR,
                                );
                              }
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
                  constructor(items, IMAGE_EDITOR) {
                    if (keyboardContextForType.target === metroRequire.CHAT) {
                      const obj3 = MediaKeyboardUtils;
                      obj3.addImagesFromPicker(channel.id, items, IMAGE_EDITOR);
                    } else if (keyboardContextForType.target === tmp2.COMMAND) {
                      if (allowedExtensions.length > 0) {
                        items = [];
                        const obj = utils_UploadUtils;
                        items[0] = obj.getFileFromUploadItem(items[0]).filename;
                        if (!validateFilenames(items)) {
                          return showInvalidFileTypeAlert();
                        }
                      }
                      const obj2 = MediaKeyboardUtils;
                      const result = obj2.addAttachmentForCommand(
                        channel.id,
                        chatInputRef,
                        items[0],
                        keyboardContextForType,
                        IMAGE_EDITOR,
                      );
                    }
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
                if (keyboardContextForType.target !== metroRequire.APP_LAUNCHER) {
                  const current = chatInputRef.current;
                  const openCustomKeyboard = current.openCustomKeyboard;
                  const obj = { type: KeyboardTypes.KeyboardTypes.MEDIA, context: tmp };
                  openCustomKeyboard(obj);
                }
              };
              cResult[12] = chatInputRef;
              cResult[13] = keyboardContextForType;
              cResult[14] = fn2;
              tmp21 = fn2;
            }
            let obj2 = { channel, context: keyboardContextForType };
            cResult[9] = channel;
            cResult[10] = keyboardContextForType;
            cResult[11] = obj2;
            tmp18 = obj2;
          }
          let obj3 = { chatInputRef, channel };
          cResult[4] = channel;
          cResult[5] = chatInputRef;
          cResult[6] = obj3;
          tmp13 = obj3;
        }
        const fn = function u() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type: validateFilenames.MEDIA_PICKER, channel_id: channel.id, guild_id: channel.guild_id };
          obj.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj2);
        };
        let items = [,];
        ({ id: arr[0], guild_id: arr[1] } = channel);
        cResult[0] = channel.guild_id;
        cResult[1] = channel.id;
        cResult[2] = fn;
        cResult[3] = items;
        tmp5 = items;
        tmp4 = fn;
      }
    : (channel) => {
        let obj9;
        let onClose;
        let transitionState;
        channel = channel.channel;
        const chatInputRef = channel.chatInputRef;
        let sharedValue;
        let items = [,];
        ({ id: arr[0], guild_id: arr[1] } = channel);
        ({ onClose, transitionState } = channel);
        const effect = sharedValue.useEffect(() => {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type: allowedExtensions.MEDIA_PICKER, channel_id: channel.id, guild_id: channel.guild_id };
          obj.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj2);
        }, items);
        let ref = sharedValue.useRef(null);
        let obj = channel(ref[11]);
        sharedValue = obj.useSharedValue(-1);
        let obj2 = channel(ref[11]);
        const sharedValue1 = obj2.useSharedValue(0);
        let obj3 = channel(ref[12]);
        const keyboardContextForType = obj3.useKeyboardContextForType(channel(ref[13]).KeyboardTypes.MEDIA);
        let obj4 = channel(ref[14]);
        const appLauncherActionSheet = obj4.useAppLauncherActionSheet({ chatInputRef, channel }).appLauncherActionSheet;
        let obj5 = channel(ref[15]);
        const token = obj5.useToken(chatInputRef(ref[16]).modules.mobile.MEDIA_KEYBOARD_SEND_VERTICAL_INSET);
        let obj6 = channel(ref[17]);
        const isAppLauncherEnabled = obj6.getIsAppLauncherEnabled(channel);
        let tmp8 = chatInputRef(ref[18])({ channel, context: keyboardContextForType });
        let closure_8 = tmp8;
        const obj7 = channel(ref[19]);
        const fileTypeFiltering = obj7.useFileTypeFiltering(tmp8.fileTypes);
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
        const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
        const memo = sharedValue.useMemo(() => {
          let extensions;
          function onRestoreKeyboard() {
            if (keyboardContextForType.target !== token.APP_LAUNCHER) {
              const current = onSelectFiles.current;
              const openCustomKeyboard = current.openCustomKeyboard;
              const obj = { type: channel(ref[13]).KeyboardTypes.MEDIA, context: tmp };
              openCustomKeyboard(obj);
            }
          }
          function onSelectFiles(items, IMAGE_EDITOR) {
            if (keyboardContextForType.target === token.CHAT) {
              const obj3 = channel(ref[20]);
              obj3.addImagesFromPicker(onRestoreKeyboard.id, items, IMAGE_EDITOR);
            } else if (keyboardContextForType.target === tmp2.COMMAND) {
              if (extensions.length > 0) {
                items = [];
                const obj = channel(ref[21]);
                items[0] = obj.getFileFromUploadItem(items[0]).filename;
                if (!validateFilenames(items)) {
                  return showInvalidFileTypeAlert();
                }
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
            let channelId;
            let isIncluded;
            let item;
            ({ channelId, item, isIncluded } = arg0);
            const obj = chatInputRef(ref[10]);
            const obj2 = { action: isAppLauncherEnabled.MEDIA_SELECTED };
            obj.track(closure_8.MEDIA_PICKER_ACTION_SHEET_ENGAGED, obj2);
            if (keyboardContextForType.target === token.CHAT) {
              const obj5 = channel(ref[20]);
              const result = obj5.handleSelectKeyboardItem(channelId, item, isIncluded, false);
            } else if (keyboardContextForType.target === tmp4.COMMAND) {
              const obj6 = channel(ref[20]);
              const result1 = obj6.mediaNodeToUploadItem(item);
              if (extensions.length > 0) {
                const items = [];
                const tmp19Result = channel(ref[21]);
                items[0] = tmp19Result.getFileFromUploadItem(result1).filename;
                if (!validateFilenames(items)) {
                  return showInvalidFileTypeAlert();
                }
              }
              const tmp19Result2 = channel(ref[20]);
              const result2 = tmp19Result2.addAttachmentForCommand(
                channelId,
                onSelectFiles,
                result1,
                keyboardContextForType,
                channel(ref[23]).UploadOrigin.IMAGE_PICKER,
              );
            }
          }
          let obj = {
            onAttachPress() {
              const handleAttachFile = channel(ref[20]).handleAttachFile;
              const obj = {};
              channel(ref[20]);
              const FILE_ATTACHMENT = channel(ref[23]).UploadOrigin.FILE_ATTACHMENT;
              const obj2 = {
                channel: onRestoreKeyboard,
                uploadLimit: closure_1_8.uploadLimit,
                extensions,
                onDismissKeyboard() {
                  const obj = IMAGE_PICKER(onSelectItem[22]);
                  return obj.dismissKeyboard();
                },
                onRestoreKeyboard: FILE_ATTACHMENT,
                onSelectFiles(arg0) {
                  return onSelectFiles(arg0, IMAGE_PICKER);
                },
              };
              const merged = Object.assign(obj2);
              handleAttachFile(obj);
            },
            onPressCamera(previewType) {
              const obj = { previewType };
              const handleCameraDialog = channel(ref[20]).handleCameraDialog;
              channel(ref[20]);
              const IMAGE_PICKER = channel(ref[23]).UploadOrigin.IMAGE_PICKER;
              const obj2 = {
                channel: onRestoreKeyboard,
                uploadLimit: closure_1_8.uploadLimit,
                extensions,
                onDismissKeyboard() {
                  const obj = IMAGE_PICKER(onSelectItem[22]);
                  return obj.dismissKeyboard();
                },
                onRestoreKeyboard: IMAGE_PICKER,
                onSelectFiles(arg0) {
                  return onSelectFiles(arg0, IMAGE_PICKER);
                },
              };
              const merged = Object.assign(obj2);
              handleCameraDialog(obj);
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
              let obj = { draftType: closure_1_8.draftType };
              const handleViewAllDialog = channel(ref[20]).handleViewAllDialog;
              channel(ref[20]);
              const IMAGE_PICKER = channel(ref[23]).UploadOrigin.IMAGE_PICKER;
              const obj2 = {
                channel: onRestoreKeyboard,
                uploadLimit: closure_1_8.uploadLimit,
                extensions,
                onDismissKeyboard() {
                  const obj = IMAGE_PICKER(onSelectItem[22]);
                  return obj.dismissKeyboard();
                },
                onRestoreKeyboard: IMAGE_PICKER,
                onSelectFiles(arg0) {
                  return onSelectFiles(arg0, IMAGE_PICKER);
                },
              };
              const merged = Object.assign(obj2);
              handleViewAllDialog(obj);
              const obj3 = channel(ref[24]);
              if (obj3.isAndroid()) {
                const current = onSelectItem.current;
                if (current != null) {
                  current.collapse();
                }
              }
            },
            onManageLimited() {
              const obj = MediaKeyboardUtils;
              const obj2 = { onDismissKeyboard: ChatInputUtils.dismissKeyboard, onRestoreKeyboard };
              const result = obj.handleLimitedPickerDialog(obj2);
            },
            onPressItem(channelId) {
              const obj = { channelId: channelId.channelId, item: channelId.item, isIncluded: channelId.isIncluded };
              onSelectItem(obj);
            },
            onLongPressItem(channelId) {
              let fn2;
              let tmp8;
              channelId = channelId.channelId;
              const item = channelId.item;
              const isIncluded = channelId.isIncluded;
              let onRemove;
              let obj = channel(ref[20]);
              const result = obj.mediaNodeToUploadItem(item);
              const cloudUpload = new channel(ref[25]).CloudUpload(result, channelId);
              let upload;
              if (isIncluded) {
                upload = keyboardContextForType.getUpload(channelId, cloudUpload.id, sharedValue1.ChannelMessage);
              }
              onRemove = undefined;
              if (null != upload) {
                onRemove = () => {
                  const obj = MediaKeyboardUtils;
                  return obj.handleSelectKeyboardItem(channelId, item, isIncluded, false);
                };
              }
              const obj2 = {
                channelId,
                disableAddDescription: null == upload,
                disableSpoiler: null == upload,
                upload: tmp8,
                onAdd: fn2,
                onEdit(arg0) {
                  if (fn != null) {
                    tmp();
                  }
                  const items = [arg0];
                  onSelectFiles(items, Upload.UploadOrigin.IMAGE_EDITOR);
                },
                onRemove,
              };
              tmp8 = upload;
              const tmp7 = chatInputRef(ref[26]);
              if (upload == null) {
                tmp8 = cloudUpload;
              }
              fn2 = undefined;
              if (null == upload) {
                fn2 = () => {
                  const obj = { channelId, item, isIncluded };
                  return onSelectItem(obj);
                };
              }
              tmp7(obj2);
            },
            onPollsPress() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { type: extensions.POLLS, channel_id: channel.id, guild_id: channel.guild_id };
              obj.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj2);
              const current = chatInputRef.current;
              current.closeCustomKeyboard();
              const obj3 = PollCreationModalActionCreators;
              const obj4 = { channel, onCancel: onRestoreKeyboard };
              obj3.openCreatePollModal(obj4);
            },
            onAppsPress() {
              let obj2;
              const current = onSelectFiles.current;
              const obj = { type: channel(ref[13]).KeyboardTypes.APP_LAUNCHER, context: obj2 };
              obj2 = { initialRouteName: validateFilenames.HOME };
              current.openCustomKeyboard(obj);
            },
            onThreadPress() {
              const obj = channel(ref[20]);
              obj.handleSelectThread(onRestoreKeyboard, onSelectFiles);
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
          return obj;
        }, items1);
        const canStartThreads = tmp8.canStartThreads;
        let items2 = [memo, , , ,];
        ({ uploadDisabled: arr3[1], canPostPolls: arr3[2] } = tmp8);
        items2[3] = isAppLauncherEnabled;
        items2[4] = canStartThreads;
        const memo1 = sharedValue.useMemo(() => {
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let intl5;
          let items1;
          if (isAppLauncherEnabled) {
            const obj = {
              text: intl.string(intl6.t.PHjkRE),
              IconComponent: AppsIcon.AppsIcon,
              onPress: memo.onAppsPress,
              disabled: false,
            };
            intl = intl6.intl;
            const items = [obj];
            items1 = items;
          } else {
            items1 = [];
          }
          if (canStartThreads) {
            const obj2 = {
              text: intl2.string(intl6.t["7Xm5QI"]),
              IconComponent: ThreadIcon.ThreadIcon,
              onPress: memo.onThreadPress,
              disabled: false,
            };
            intl2 = intl6.intl;
            const items2 = [obj2];
            let items3 = items2;
          } else {
            items3 = [];
          }
          const obj3 = {
            text: intl3.string(intl6.t.RgIi2B),
            IconComponent: PollsIcon.PollsIcon,
            onPress: memo.onPollsPress,
            disabled: !closure_8.canPostPolls,
          };
          intl3 = intl6.intl;
          const items4 = [obj3, ...items1];
          const obj4 = {
            text: intl4.string(intl6.t["8Hvr3+"]),
            IconComponent: AttachmentIcon.AttachmentIcon,
            onPress: memo.onAttachPress,
            disabled: closure_8.uploadDisabled,
          };
          intl4 = intl6.intl;
          items4[tmp17] = obj4;
          const obj5 = {
            text: intl5.string(intl6.t.Zmm6dN),
            IconComponent: ImageIcon.ImageIcon,
            onPress: memo.onViewAll,
            disabled: closure_8.uploadDisabled,
          };
          intl5 = intl6.intl;
          const items5 = [obj5, ...items4];
          return items5;
        }, items2);
        ref = sharedValue.useRef(null);
        let items3 = [memo];
        let items4 = [sharedValue, sharedValue1, memo, channel.id, tmp8, memo1, token];
        const callback = sharedValue.useCallback((animatedIndex) => {
          const obj = { animatedIndex: animatedIndex.animatedIndex, onPress: memo.onPressHeader };
          return memo(MediaKeyboardBottomSheetHeaderSimpleDefault, obj);
        }, items3);
        const callback1 = sharedValue.useCallback((animateOnMount) => {
          let items;
          let flag = animateOnMount.animateOnMount;
          if (flag === undefined) {
            flag = false;
          }
          const obj = {
            animateOnMount: flag,
            animatedIndex: sharedValue,
            animatedPosition: sharedValue1,
            initialPosition: animateOnMount.initialPosition,
            children: items,
          };
          items = [,];
          const obj2 = {
            ref,
            animatedIndex: sharedValue,
            channelId: channel.id,
            draftType: closure_8.draftType,
            onSend: memo.onSend,
          };
          const tmp = MediaKeyboardAccessoriesContainerDefault;
          items[0] = memo(MediaKeyboardFloatingSendDefault, obj2);
          const obj3 = {
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
          };
          items[1] = memo(MediaKeyboardBottomSheetActionsDefault, obj3);
          return map1(tmp, obj);
        }, items4);
        const obj8 = {
          animationConfigs: showInvalidFileTypeAlert,
          animatedIndex: sharedValue,
          animatedPosition: sharedValue1,
          bottomSheetRef: ref,
          accessoriesComponent: callback1,
          handleComponent: callback,
          overlayComponent: appLauncherActionSheet,
          onClose,
          onAccessibilityFocusRestore() {
            const current = chatInputRef.current;
            return current.focusPhotosButton();
          },
          transitionState,
          children: memo(chatInputRef(ref[38]), obj9),
        };
        obj9 = {
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
          allowCamera: mediaFilesAllowed,
          uploadDisabled: tmp8.uploadDisabled,
          uploadLimit: tmp8.uploadLimit,
          disableWhenReachedLimit: tmp8.disableWhenReachedLimit,
        };
        const tmp14 = chatInputRef(ref[39]);
        return memo(tmp14, obj8);
      },
);
let result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboard.tsx");

export default memoResult;
