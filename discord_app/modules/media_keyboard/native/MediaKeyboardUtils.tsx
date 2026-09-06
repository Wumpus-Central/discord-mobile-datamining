// discord_app/modules/media_keyboard/native/MediaKeyboardUtils.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import setAccessibilityFocus from "../../a11y/native/setAccessibilityFocus.android.tsx";
import Upload from "../../../lib/uploader/Upload.tsx";
import uploader_UploadUtils from "../../../lib/uploader/UploadUtils.tsx";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import NativePermissionUtilsDefault from "../../native_permissions/NativePermissionUtils.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import showMediaKeyboardActionSheet from "showMediaKeyboardActionSheet.tsx";
import navigateToThreadCreation from "../../threads/native/navigateToThreadCreation.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";

require = fn;
function handleLimitedPickerDialog() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _handleLimitedPickerDialog() {
  closure_129_0();
  await closure_130_0(closure_130_2[18]).presentLimitedLibraryPicker();
  closure_129_1();
  await "HermesInternal";
  closure_1 = tmp2;
  ({ onDismissKeyboard: closure_129_0, onRestoreKeyboard: closure_129_1 } = closure_0);
  return "PX_16";
};
function handleAttachFile() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _handleAttachFile(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ channel: closure_129_0, uploadLimit: closure_129_1, extensions: closure_129_2, onDismissKeyboard: closure_129_3, onRestoreKeyboard: closure_129_4, onSelectFiles: closure_129_5 } = closure_0);
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_129_3();
          const obj2 = { type: closure_130_16.ATTACH_FILE, channel_id: closure_129_0.id, guild_id: closure_129_0.guild_id };
          closure_130_1(closure_130_2[14]).track(closure_130_11.CHAT_INPUT_COMPONENT_VIEWED, obj2);
          const obj8 = closure_130_1(closure_130_2[14]);
          const obj3 = { pickMultiple: closure_129_1 > 1, extensions: closure_129_2 };
          c3 = 2;
          c4 = 1;
          const obj4 = { value: closure_130_0(closure_130_2[23]).handleDocumentSelection(obj3), done: false };
          return obj4;
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_129_6 = value;
            closure_129_4();
            if (null != closure_129_6) {
              if (closure_129_6.length >= 1) {
                const _Array = Array;
                c3 = 3;
                c4 = 1;
                const obj6 = {
                  value: Promise.all(Array.from(closure_129_6).map((() => {
                                  closure_0 = closure_1_3(function*(arg0) {
                                    closure_5 = tmp2;
                                    closure_4 = tmp3;
                                    closure_132_0 = closure_0;
                                    const uri = closure_0.uri;
                                    closure_132_1 = uri;
                                    const name2 = closure_0.name;
                                    c1 = name2;
                                    if (name2 == null) {
                                      c1 = undefined;
                                    }
                                    yield closure_0(5138).getImageDimensionsIfMissing(uri, undefined, undefined, c1);
                                    closure_132_2 = value;
                                    const width = closure_132_2.width;
                                    const height = closure_132_2.height;
                                    const size = { id: closure_2_1(12).uniqueId(closure_132_1), uri: closure_132_1, originalUri: closure_132_1, filename: null, mimeType: null, channelId: null, platform: null, origin: null, width: null, height: null };
                                    const name = closure_132_0.name;
                                    let filename = name;
                                    if (name == null) {
                                      const parts = closure_132_1.split("/");
                                      filename = parts.at(-1);
                                    }
                                    size.filename = filename;
                                    const type = closure_132_0.type;
                                    let mimeType = type;
                                    if (type == null) {
                                      mimeType = undefined;
                                    }
                                    size.mimeType = mimeType;
                                    size.channelId = closure_0.id;
                                    size.platform = closure_0(5128).UploadPlatform.REACT_NATIVE;
                                    size.origin = closure_0(5128).UploadOrigin.FILE_ATTACHMENT;
                                    size.width = width;
                                    size.height = height;
                                    return size;
                                  });
                                  return function() {
                                    const self = this;
                                    const apply = closure_0.apply;
                                    if (typeof apply === "unknown") {
                                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                    } else {
                                      applyArgumentsResult = apply(self, arguments);
                                    }
                                    return applyArgumentsResult;
                                  };
                                })())),
                  done: false
                };
                return obj6;
              }
            }
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_7 = value;
          closure_129_5(closure_129_7);
        }
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp15) {
      c4 = tmp;
      throw tmp15;
    }
  }
};
function handleSelectKeyboardItem(channelId, node, isIncluded, createdUsingInAppCamera) {
  let image = node.node.image;
  if (isIncluded) {
    const findUploadResult = UploadAttachmentStore.findUpload(channelId, DraftType.ChannelMessage, (id) => uploader_UploadUtils.doesImageMatchUpload(image, id));
    if (null != findUploadResult) {
      UploadAttachmentActionCreatorsDefault.remove(channelId, findUploadResult.id, DraftType.ChannelMessage);
    }
  } else {
    let obj = { channelId, file: null, draftType: null };
    image = node.node.image;
    let uri = node.node.id;
    if (uri == null) {
      uri = image.uri;
    }
    const size = { id: uri, origin: image(5128).UploadOrigin.IMAGE_PICKER, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, playableDuration: null, platform: null };
    ({ uri: obj3.uri, uri: obj3.originalUri, mimeType: obj3.mimeType, width: obj3.width, height: obj3.height, filename: obj3.filename, playableDuration: obj3.playableDuration } = image);
    size.platform = image(5128).UploadPlatform.REACT_NATIVE;
    let tmp6 = null != createdUsingInAppCamera;
    if (tmp6) {
      obj = { createdUsingInAppCamera };
      tmp6 = obj;
    }
    const merged = Object.assign(tmp6);
    obj.file = size;
    obj.draftType = DraftType.ChannelMessage;
    obj.addFile(obj);
  }
}
const DraftType = fn(4901).DraftType;
const MediaKeyboardConstants = fn(1607);
({ MediaKeyboardTarget: closure_9, InAppCameraUsedViews: c10 } = MediaKeyboardConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, AnalyticsObjects: closure_12, AnalyticsObjectTypes: map1, AnalyticsPages: closure_14, AnalyticsSections: closure_15, ChatInputComponentViewedTypes: closure_16, ComponentActions: closure_17, MAX_UPLOAD_COUNT: closure_18 } = Constants);
const NativePermissionTypes = fn(4770).NativePermissionTypes;
function animatedIndexThreshold(get, arg1) {
  if (1 === get.get().length) {
    let diff = arg1 - 1;
  } else {
    diff = arg1 * (get.get().length - 1);
  }
  return diff;
}
animatedIndexThreshold.__closure = {};
animatedIndexThreshold.__workletHash = 97398083076;
animatedIndexThreshold.__initData = { code: "function animatedIndexThreshold_MediaKeyboardUtilsTsx1(animatedSnapPoints,thresholdPercent){return animatedSnapPoints.get().length===1?thresholdPercent-1:thresholdPercent*(animatedSnapPoints.get().length-1);}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardUtils.tsx");
function showSimpleMediaKeyboard(channel) {
  _require = channel;
  const CHAT = constants.CHAT;
  if (constants.CHAT === CHAT) {
    let InteractionModal = DraftType.ChannelMessage;
  } else if (constants.COMMAND === CHAT) {
    InteractionModal = DraftType.SlashCommand;
  } else if (constants.APP_LAUNCHER === CHAT) {
    InteractionModal = DraftType.ApplicationLauncherCommand;
  } else if (constants.INTERACTION_MODAL === CHAT) {
    InteractionModal = DraftType.InteractionModal;
  }
  require("showMediaKeyboardActionSheet");
  let obj = {
    channel,
    draftType: InteractionModal,
    uploadLimit,
    disableWhenReachedLimit: true,
    onAttachPress() {
      let obj = {};
      const FILE_ATTACHMENT = channel(5128).UploadOrigin.FILE_ATTACHMENT;
      obj = {
        channel: FILE_ATTACHMENT,
        uploadLimit,
        onDismissKeyboard() {
          return _undefined(_undefined3[18]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          showSimpleMediaKeyboard(c0);
        },
        onSelectFiles(files) {
          const id = _undefined.id;
          const origin = c0;
          if (c0 !== Upload.UploadOrigin.FILE_ATTACHMENT) {
            const found = files.filter((uri) => {
              closure_0 = uri;
              let tmp2 = null != id;
              if (tmp2) {
                tmp2 = null != uri.uri;
              }
              if (tmp2) {
                tmp2 = "" !== uri.uri;
              }
              if (tmp2) {
                tmp2 = null == closure_2_8.findUpload(id, ChannelMessage.ChannelMessage, (id) => id(_undefined3[11]).doesImageMatchUpload(closure_0, id));
              }
              return tmp2;
            });
            const mapped = found.map((item) => {
              const obj = {};
              const merged = Object.assign(item);
              obj.origin = origin;
              return obj;
            });
            let obj = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
            UploadAttachmentActionCreatorsDefault.addFiles(obj);
          } else {
            obj = { files, channelId: id, draftType: DraftType.ChannelMessage };
            obj.addFiles(obj);
          }
        }
      };
      const merged = Object.assign(obj);
      handleAttachFile(obj);
    },
    onPressCamera(previewType) {
      let obj = {};
      channel = channel(5128).UploadOrigin.IMAGE_PICKER;
      obj = {
        channel,
        uploadLimit,
        onDismissKeyboard() {
          return _undefined(_undefined3[18]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          showSimpleMediaKeyboard(c0);
        },
        onSelectFiles(files) {
          const id = _undefined.id;
          const origin = c0;
          if (c0 !== Upload.UploadOrigin.FILE_ATTACHMENT) {
            const found = files.filter((uri) => {
              closure_0 = uri;
              let tmp2 = null != id;
              if (tmp2) {
                tmp2 = null != uri.uri;
              }
              if (tmp2) {
                tmp2 = "" !== uri.uri;
              }
              if (tmp2) {
                tmp2 = null == closure_2_8.findUpload(id, ChannelMessage.ChannelMessage, (id) => id(_undefined3[11]).doesImageMatchUpload(closure_0, id));
              }
              return tmp2;
            });
            const mapped = found.map((item) => {
              const obj = {};
              const merged = Object.assign(item);
              obj.origin = origin;
              return obj;
            });
            let obj = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
            UploadAttachmentActionCreatorsDefault.addFiles(obj);
          } else {
            obj = { files, channelId: id, draftType: DraftType.ChannelMessage };
            obj.addFiles(obj);
          }
        }
      };
      const merged = Object.assign(obj);
      obj.previewType = previewType;
      channel = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      ({ channel: c0, previewType: c1, onDismissKeyboard: c2, onRestoreKeyboard: c3, onSelectFiles: c4 } = obj);
      const permission = InteractionModal(5139).requestPermission(constants3.CAMERA);
      permission.then((result) => {
        if (result) {
          InteractionModal(1242);
          let obj = { type: constants2.CAMERA, channel_id: null, guild_id: null };
          ({ id: obj2.channel_id, guild_id: obj2.guild_id } = c0);
          obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
          _undefined2();
          obj = { mediaType: "mixed", includeBase64: false, quality: null, videoQuality: "high", saveToPhotos: null, skipProcessing: true };
          const obj3 = InteractionModal(5150);
          obj.quality = _undefined(5138).getImageCompressionQuality();
          obj.saveToPhotos = UnsyncedUserSettingsStore.saveCameraUploadsToDevice;
          obj3.launchCamera(obj, (didCancel) => {
            if (didCancel.didCancel) {
              closure_1_3();
            } else if (null == didCancel.errorCode) {
              if (null != didCancel.assets) {
                if (didCancel.assets.length > 0) {
                  let size = didCancel.assets[0];
                  if (null != size) {
                    if (null != size.uri) {
                      if (null != size.height) {
                        if (null != size.width) {
                          let str8 = size.type;
                          if (null == str8) {
                            let arr;
                            if (size.fileName != null) {
                              const parts = str.split(".");
                              arr = parts.pop();
                            }
                            let str4 = "image/jpeg";
                            if (null != arr) {
                              str4 = "image/jpeg";
                              if (null != size.fileType) {
                                const _HermesInternal = HermesInternal;
                                str4 = "" + size.fileType + "/" + arr.toLowerCase();
                                const str7 = "" + size.fileType + "/" + arr;
                              }
                            }
                            str8 = str4;
                          }
                          size = { id: null, uri: null, originalUri: null, width: null, height: null, filename: null, playableDuration: null, platform: null, createdUsingInAppCamera: true, mimeType: null };
                          ({ id: obj.id, uri: obj.uri, uri: obj.originalUri, width: obj.width, height: obj.height } = size);
                          if (null != size.fileName) {
                            if ("" !== size.fileName) {
                              let fileName = size.fileName;
                            }
                            size.filename = fileName;
                            size.playableDuration = size.duration;
                            size.platform = c0(5128).UploadPlatform.REACT_NATIVE;
                            size.mimeType = str8;
                            const items = [size];
                            closure_1_4(items);
                            const obj = { camera_view: constants.FULLY_EXPANDED, camera_preview_type };
                            camera_preview_type(1242).track(constants2.IN_APP_CAMERA_USED, obj);
                            closure_1_3();
                            const obj2 = camera_preview_type(1242);
                          }
                          let str11 = str8.split("/")[1];
                          if (str11 == null) {
                            str11 = "jpeg";
                          }
                          const _HermesInternal2 = HermesInternal;
                          fileName = "camera_upload." + str11;
                        }
                      }
                    }
                  }
                }
              }
            }
          });
          const obj5 = _undefined(5138);
        }
      });
    },
    onPressItem(arg0) {
      ({ channelId, item, isIncluded } = arg0);
      const result = channel(10636).hideMediaKeyboardActionSheet();
      handleSelectKeyboardItem(channelId, item, isIncluded);
    },
    onViewAll() {
      let obj = {};
      channel = channel(5128).UploadOrigin.IMAGE_PICKER;
      obj = {
        channel,
        uploadLimit,
        onDismissKeyboard() {
          return _undefined(_undefined3[18]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          showSimpleMediaKeyboard(c0);
        },
        onSelectFiles(files) {
          const id = _undefined.id;
          const origin = c0;
          if (c0 !== Upload.UploadOrigin.FILE_ATTACHMENT) {
            const found = files.filter((uri) => {
              closure_0 = uri;
              let tmp2 = null != id;
              if (tmp2) {
                tmp2 = null != uri.uri;
              }
              if (tmp2) {
                tmp2 = "" !== uri.uri;
              }
              if (tmp2) {
                tmp2 = null == closure_2_8.findUpload(id, ChannelMessage.ChannelMessage, (id) => id(_undefined3[11]).doesImageMatchUpload(closure_0, id));
              }
              return tmp2;
            });
            const mapped = found.map((item) => {
              const obj = {};
              const merged = Object.assign(item);
              obj.origin = origin;
              return obj;
            });
            let obj = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
            UploadAttachmentActionCreatorsDefault.addFiles(obj);
          } else {
            obj = { files, channelId: id, draftType: DraftType.ChannelMessage };
            obj.addFiles(obj);
          }
        }
      };
      let merged = Object.assign(obj);
      obj.draftType = draftType;
      channel = undefined;
      draftType = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      ({ channel: c0, draftType: c1, uploadLimit: c2, includedUploadIds: c3, onDismissKeyboard: c4, onRestoreKeyboard: c5, onSelectFiles: c6 } = obj);
      if (obj3.isIOS()) {
        if (tmpResult.getSystemVersionMajor() >= 14) {
          let resolved = Promise.resolve(true);
        }
        resolved.then((result) => {
          if (result) {
            _undefined2(_undefined3[14]);
            let obj = { type: constants2.NATIVE_MEDIA_PICKER, channel_id: null, guild_id: null };
            ({ id: obj2.channel_id, guild_id: obj2.guild_id } = found);
            obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
            _undefined4();
            const uploads = closure_1_8.getUploads(found.id, _undefined2);
            found = uploads;
            let arr2 = uploads;
            if (null != c3) {
              found = uploads.filter((id) => closure_1_3.includes(id.id));
              arr2 = found;
            }
            if (_undefined3 <= 1) {
              obj = { mediaType: "any", includeBase64: false, selectionLimit: 1, selections: arr2.map((id) => id.id), includeExtra: !_undefined(_undefined3[16]).isIOS(), skipProcessing: true };
              const obj5 = _undefined(_undefined3[16]);
              _undefined2(_undefined3[15]).launchImageLibrary(obj, (didCancel) => {
                c5();
                if (!didCancel.didCancel) {
                  if (null == didCancel.errorCode) {
                    if (0 !== found.length) {
                      if (didCancel.replaceSelection) {
                        const item = found.forEach((origin) => {
                          didCancel = origin;
                          let tmp2 = origin.origin !== didCancel(5128).UploadOrigin.IMAGE_PICKER;
                          if (!tmp2) {
                            const assets = didCancel.assets;
                            let someResult;
                            if (assets != null) {
                              someResult = assets.some(() => { ... });
                            }
                            tmp2 = someResult;
                          }
                          if (!tmp2) {
                            c1(9307).remove(found.id, origin.id, ChannelMessage.ChannelMessage);
                            const obj = c1(9307);
                          }
                        });
                      }
                      const items = [];
                      let assets = didCancel.assets;
                      for (const item10018 of assets) {
                        if (null != item10018.uri) {
                          let size = { id: null, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, playableDuration: null, platform: null };
                          ({ id: obj.id, uri: obj.uri, uri: obj.originalUri, mimeType: obj.mimeType, width: obj.width, height: obj.height, fileName: obj.filename, duration: obj.playableDuration } = item10018);
                          size.platform = didCancel(5128).UploadPlatform.REACT_NATIVE;
                          let arr = items.push(size);
                        }
                        continue;
                      }
                      if (items.length > 0) {
                        c6(items);
                      }
                    }
                  }
                }
              });
              const tmpResult = _undefined2(_undefined3[15]);
            } else {
              if (obj3.isIOS()) {
                let length = arr2.filter((origin) => origin.origin !== found(_undefined3[9]).UploadOrigin.IMAGE_PICKER).length;
              } else {
                length = arr2.length;
              }
              const diff = tmp14 - length;
              obj3 = _undefined(_undefined3[16]);
            }
          }
        });
        tmpResult = tmp(4539);
      }
      obj3 = channel(1115);
      tmp = channel;
      resolved = InteractionModal(5139).requestPermission(constants3.PHOTOS);
      let obj5 = InteractionModal(5139);
    },
    onManageLimited() {
      handleLimitedPickerDialog({
        onDismissKeyboard: showMediaKeyboardActionSheet.hideMediaKeyboardActionSheet,
        onRestoreKeyboard() {
          showSimpleMediaKeyboard(channel);
        }
      });
    },
    onClose: require("showMediaKeyboardActionSheet").hideMediaKeyboardActionSheet,
    onBack: require("showMediaKeyboardActionSheet").hideMediaKeyboardActionSheet
  };
  let result = obj.showMediaKeyboardActionSheet(obj);
}

export const addImagesFromPicker = function addImagesFromPicker(id, items, IMAGE_PICKER) {
  _require = id;
  importDefault = IMAGE_PICKER;
  if (IMAGE_PICKER !== require("Upload").UploadOrigin.FILE_ATTACHMENT) {
    const found = items.filter((uri) => {
      closure_0 = uri;
      let tmp2 = null != id;
      if (tmp2) {
        tmp2 = null != uri.uri;
      }
      if (tmp2) {
        tmp2 = "" !== uri.uri;
      }
      if (tmp2) {
        tmp2 = null == closure_2_8.findUpload(id, ChannelMessage.ChannelMessage, (id) => id(_undefined3[11]).doesImageMatchUpload(closure_0, id));
      }
      return tmp2;
    });
    const mapped = found.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.origin = origin;
      return obj;
    });
    let obj = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
    UploadAttachmentActionCreatorsDefault.addFiles(obj);
  } else {
    obj = { files: items, channelId: id, draftType: DraftType.ChannelMessage };
    obj.addFiles(obj);
  }
};
export const addAttachmentForCommand = function addAttachmentForCommand(channelId, chatInputRef, result1, option, IMAGE_PICKER) {
  option = option.option;
  let obj = utils_UploadUtils;
  const filename = obj.getFileFromUploadItem(result1).filename;
  if (option.target === constants.COMMAND) {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (applicationCommandManager != null) {
      obj = { displayText: filename, preferred: true };
      const result = applicationCommandManager.insertOrJumpCommandOption(option, undefined, false, obj);
    }
  }
  const target = option.target;
  if (constants.CHAT === target) {
    let InteractionModal = DraftType.ChannelMessage;
  } else if (constants.COMMAND === target) {
    InteractionModal = DraftType.SlashCommand;
  } else if (constants.APP_LAUNCHER === target) {
    InteractionModal = DraftType.ApplicationLauncherCommand;
  } else if (constants.INTERACTION_MODAL === target) {
    InteractionModal = DraftType.InteractionModal;
  }
  UploadAttachmentActionCreatorsDefault.remove(channelId, option.option.name, InteractionModal);
  obj = { channelId, file: null, draftType: null, allowOptimization: false };
  const obj1 = {};
  const merged = Object.assign(result1);
  obj1.origin = IMAGE_PICKER;
  obj1.id = option.name;
  obj1.filename = filename;
  obj.file = obj1;
  obj.draftType = InteractionModal;
  UploadAttachmentActionCreatorsDefault.addFile(obj);
};
export const handleCameraDialog = function handleCameraDialog(arg0) {
  ({ channel: require, previewType: importDefault, onDismissKeyboard: dependencyMap, onRestoreKeyboard: asyncGeneratorStep, onSelectFiles: UnsyncedUserSettingsStore } = arg0);
  const permission = NativePermissionUtilsDefault.requestPermission(NativePermissionTypes.CAMERA);
  permission.then((result) => {
    if (result) {
      InteractionModal(1242);
      let obj = { type: constants2.CAMERA, channel_id: null, guild_id: null };
      ({ id: obj2.channel_id, guild_id: obj2.guild_id } = c0);
      obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
      _undefined2();
      obj = { mediaType: "mixed", includeBase64: false, quality: null, videoQuality: "high", saveToPhotos: null, skipProcessing: true };
      const obj3 = InteractionModal(5150);
      obj.quality = _undefined(5138).getImageCompressionQuality();
      obj.saveToPhotos = UnsyncedUserSettingsStore.saveCameraUploadsToDevice;
      obj3.launchCamera(obj, (didCancel) => {
        if (didCancel.didCancel) {
          closure_1_3();
        } else if (null == didCancel.errorCode) {
          if (null != didCancel.assets) {
            if (didCancel.assets.length > 0) {
              let size = didCancel.assets[0];
              if (null != size) {
                if (null != size.uri) {
                  if (null != size.height) {
                    if (null != size.width) {
                      let str8 = size.type;
                      if (null == str8) {
                        let arr;
                        if (size.fileName != null) {
                          const parts = str.split(".");
                          arr = parts.pop();
                        }
                        let str4 = "image/jpeg";
                        if (null != arr) {
                          str4 = "image/jpeg";
                          if (null != size.fileType) {
                            const _HermesInternal = HermesInternal;
                            str4 = "" + size.fileType + "/" + arr.toLowerCase();
                            const str7 = "" + size.fileType + "/" + arr;
                          }
                        }
                        str8 = str4;
                      }
                      size = { id: null, uri: null, originalUri: null, width: null, height: null, filename: null, playableDuration: null, platform: null, createdUsingInAppCamera: true, mimeType: null };
                      ({ id: obj.id, uri: obj.uri, uri: obj.originalUri, width: obj.width, height: obj.height } = size);
                      if (null != size.fileName) {
                        if ("" !== size.fileName) {
                          let fileName = size.fileName;
                        }
                        size.filename = fileName;
                        size.playableDuration = size.duration;
                        size.platform = c0(5128).UploadPlatform.REACT_NATIVE;
                        size.mimeType = str8;
                        const items = [size];
                        closure_1_4(items);
                        const obj = { camera_view: constants.FULLY_EXPANDED, camera_preview_type };
                        camera_preview_type(1242).track(constants2.IN_APP_CAMERA_USED, obj);
                        closure_1_3();
                        const obj2 = camera_preview_type(1242);
                      }
                      let str11 = str8.split("/")[1];
                      if (str11 == null) {
                        str11 = "jpeg";
                      }
                      const _HermesInternal2 = HermesInternal;
                      fileName = "camera_upload." + str11;
                    }
                  }
                }
              }
            }
          }
        }
      });
      const obj5 = _undefined(5138);
    }
  });
};
export const handleViewAllDialog = function handleViewAllDialog(arg0) {
  ({ channel: require, draftType: importDefault, uploadLimit: dependencyMap, includedUploadIds: asyncGeneratorStep, onDismissKeyboard: UnsyncedUserSettingsStore, onRestoreKeyboard: ChannelStore, onSelectFiles: DraftType } = arg0);
  if (obj.isIOS()) {
    if (tmpResult.getSystemVersionMajor() >= 14) {
      let resolved = Promise.resolve(true);
    }
    resolved.then((result) => {
      if (result) {
        _undefined2(_undefined3[14]);
        let obj = { type: constants2.NATIVE_MEDIA_PICKER, channel_id: null, guild_id: null };
        ({ id: obj2.channel_id, guild_id: obj2.guild_id } = found);
        obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
        _undefined4();
        const uploads = closure_1_8.getUploads(found.id, _undefined2);
        found = uploads;
        let arr2 = uploads;
        if (null != c3) {
          found = uploads.filter((id) => closure_1_3.includes(id.id));
          arr2 = found;
        }
        if (_undefined3 <= 1) {
          obj = { mediaType: "any", includeBase64: false, selectionLimit: 1, selections: arr2.map((id) => id.id), includeExtra: !_undefined(_undefined3[16]).isIOS(), skipProcessing: true };
          const obj5 = _undefined(_undefined3[16]);
          _undefined2(_undefined3[15]).launchImageLibrary(obj, (didCancel) => {
            c5();
            if (!didCancel.didCancel) {
              if (null == didCancel.errorCode) {
                if (0 !== found.length) {
                  if (didCancel.replaceSelection) {
                    const item = found.forEach((origin) => {
                      didCancel = origin;
                      let tmp2 = origin.origin !== didCancel(5128).UploadOrigin.IMAGE_PICKER;
                      if (!tmp2) {
                        const assets = didCancel.assets;
                        let someResult;
                        if (assets != null) {
                          someResult = assets.some((item) => origin(5136).doesImageMatchUpload(item, origin));
                        }
                        tmp2 = someResult;
                      }
                      if (!tmp2) {
                        c1(9307).remove(found.id, origin.id, ChannelMessage.ChannelMessage);
                        const obj = c1(9307);
                      }
                    });
                  }
                  const items = [];
                  let assets = didCancel.assets;
                  for (const item10018 of assets) {
                    if (null != item10018.uri) {
                      let size = { id: null, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, playableDuration: null, platform: null };
                      ({ id: obj.id, uri: obj.uri, uri: obj.originalUri, mimeType: obj.mimeType, width: obj.width, height: obj.height, fileName: obj.filename, duration: obj.playableDuration } = item10018);
                      size.platform = didCancel(5128).UploadPlatform.REACT_NATIVE;
                      let arr = items.push(size);
                    }
                    continue;
                  }
                  if (items.length > 0) {
                    c6(items);
                  }
                }
              }
            }
          });
          const tmpResult = _undefined2(_undefined3[15]);
        } else {
          if (obj3.isIOS()) {
            let length = arr2.filter((origin) => origin.origin !== found(_undefined3[9]).UploadOrigin.IMAGE_PICKER).length;
          } else {
            length = arr2.length;
          }
          const diff = tmp14 - length;
          obj3 = _undefined(_undefined3[16]);
        }
      }
    });
    tmpResult = DeviceUtils;
  }
  obj = PlatformUtils;
  resolved = NativePermissionUtilsDefault.requestPermission(NativePermissionTypes.PHOTOS);
};
export { handleLimitedPickerDialog };
export const handleSelectGift = function handleSelectGift(analyticsLocations, chatInput, current2) {
  _require = current2;
  let current = chatInput.current;
  const channelId = SelectedChannelStore.getChannelId();
  current.closeCustomKeyboard();
  const channel = ChannelStore.getChannel(channelId);
  const ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
  ComponentDispatch.dispatch(constants8.MEDIA_KEYBOARD_GIFT_SELECTED);
  let obj = { section: constants6.CHANNEL_TEXT_AREA, object: constants3.BUTTON_ICON, objectType: constants4.GIFT, page: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (null != guild_id) {
    let DM_CHANNEL = constants5.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = constants5.DM_CHANNEL;
  }
  obj.page = DM_CHANNEL;
  obj = { type: constants7.NITRO_GIFTING, channel_id: null, guild_id: null };
  let id;
  if (channel != null) {
    id = channel.id;
  }
  obj.channel_id = id;
  let guild_id1;
  if (channel != null) {
    guild_id1 = channel.guild_id;
  }
  obj.guild_id = guild_id1;
  AnalyticsUtilsDefault.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
  let recipientId;
  if (null != channel) {
    if (channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
  }
  const obj1 = { recipientUserId: recipientId, analyticsLocation: obj, analyticsLocations, navigationParams: { presentation: "card" }, onDismiss: null };
  current = undefined;
  if (current2 != null) {
    current = current2.current;
  }
  let fn;
  if (null != current) {
    fn = () => {
      const obj = { ref };
      return obj.setAccessibilityFocus(obj);
    };
  }
  obj1.onDismiss = fn;
  require("utils/openGiftModal").openGiftModal(obj1);
  const tmp3Result = require("utils/openGiftModal");
};
export const handleSelectThread = function handleSelectThread(channel, chatInput) {
  const obj = { type: constants7.START_THREAD, channel_id: channel.id, guild_id: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
  if (null != channel) {
    const current = chatInput.current;
    current.openSystemKeyboard();
    if (obj3.isIOS()) {
      const current2 = chatInput.current;
      current2.blur();
    }
    obj3 = PlatformUtils;
    const result = navigateToThreadCreation.navigateToThreadCreation(channel, "Plus Button");
    const tmp6Result = navigateToThreadCreation;
  }
};
export { handleAttachFile };
export const mediaNodeToUploadItem = function mediaNodeToUploadItem(node, createdUsingInAppCamera) {
  const image = node.node.image;
  let uri = node.node.id;
  if (uri == null) {
    uri = image.uri;
  }
  const size = { id: uri, origin: Upload.UploadOrigin.IMAGE_PICKER, uri: image.uri, originalUri: image.uri, mimeType: image.mimeType, width: image.width, height: image.height, filename: image.filename, playableDuration: image.playableDuration, platform: Upload.UploadPlatform.REACT_NATIVE };
  let tmp = null != createdUsingInAppCamera;
  if (tmp) {
    const obj = { createdUsingInAppCamera };
    tmp = obj;
  }
  const merged = Object.assign(tmp);
  return size;
};
export const cropResultToUploadItem = function cropResultToUploadItem(path) {
  path = path.path;
  const path2 = path.path;
  if (path.startsWith("file://")) {
    let combined = path2;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "file://" + path2;
  }
  const parts = path.path.split("/");
  const size = { id: null, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, platform: null };
  const arr = parts.pop();
  size.id = _modDef12.uniqueId(path.path);
  size.uri = combined;
  size.originalUri = combined;
  ({ mime: obj.mimeType, width: obj.width, height: obj.height } = path);
  size.filename = arr;
  size.platform = Upload.UploadPlatform.REACT_NATIVE;
  return size;
};
export { handleSelectKeyboardItem };
export { showSimpleMediaKeyboard };
export { animatedIndexThreshold };
export const getMediaKeyboardDraftType = function getMediaKeyboardDraftType(target) {
  if (constants.CHAT === target) {
    return DraftType.ChannelMessage;
  } else if (constants.COMMAND === target) {
    return DraftType.SlashCommand;
  } else if (constants.APP_LAUNCHER === target) {
    return DraftType.ApplicationLauncherCommand;
  } else if (constants.INTERACTION_MODAL === target) {
    return DraftType.InteractionModal;
  }
};