// discord_app/modules/media_keyboard/native/MediaKeyboardUtils.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import set from "../../../utils/PlatformUtils.tsx";
import cancel from "../../../lib/uploader/Upload.tsx";
import openImagePickerUnhandled from "../../../utils/native/UploadUtils.tsx";
import NativePermissionsRequestOptionsDefault from "../../native_permissions/NativePermissionUtils.tsx";
import _modDef8171 from "../../../actions/UploadAttachmentActionCreators.tsx";
import navigateToThreadCreation from "../../threads/native/navigateToThreadCreation.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import closure_5 from "../../../stores/ChannelStore.tsx";
import { DraftType } from "../../../stores/DraftStore.tsx";
import closure_7 from "../../../stores/SelectedChannelStore.tsx";
import closure_8 from "../../../stores/UploadAttachmentStore.tsx";
import DRAG_HANDLE from "MediaKeyboardConstants.tsx";
import ME from "../../../Constants.tsx";
import { NativePermissionTypes } from "../../native_permissions/NativePermissionConstants.tsx";
import { hideMediaKeyboardActionSheet } from "showMediaKeyboardActionSheet.tsx";

require = arg1;
function handleLimitedPickerDialog(arg0) {
  const self = this;
  const apply = _handleLimitedPickerDialog.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleLimitedPickerDialog() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              ({ onDismissKeyboard: c0, onRestoreKeyboard: c1 } = callback);
              c3 = 1;
              c4 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              callback();
              obj1 = callback(table[18]);
              c3 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj1.presentLimitedLibraryPicker();
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback2();
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c4 = tmp;
          throw tmp16;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleAttachFile(arg0) {
  const self = this;
  const apply = _handleAttachFile.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleAttachFile() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v02 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let callback = tmp2;
              let lib;
              callback = undefined;
              dependencyMap = undefined;
              v0 = undefined;
              v02 = undefined;
              let callback2;
              ({ channel: c0, uploadLimit: c1, extensions: c2, onDismissKeyboard: c3, onRestoreKeyboard: c4, onSelectFiles: c5 } = lib);
              let length;
              closure_7 = undefined;
              v0 = 1;
              v02 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              v0();
              const obj2 = { type: null, channel_id: null, guild_id: null };
              obj2[0] = constants2.ATTACH_FILE;
              obj2[1] = lib.id;
              obj2[2] = lib.guild_id;
              callback(695).track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj2);
              const obj8 = callback(695);
              let obj3 = { pickMultiple: null, extensions: null };
              obj3[0] = callback > 1;
              obj3[1] = dependencyMap;
              v0 = 2;
              v02 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = lib(11081).handleDocumentSelection(obj3);
              return obj4;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v02 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                length = arg1;
                v02();
                if (null != length) {
                  if (length.length >= 1) {
                    const _Array = Array;
                    v0 = 3;
                    v02 = 1;
                    const obj6 = { value: null, done: false };
                    obj6[0] = Promise.all(Array.from(length).map((() => {
                      closure_0 = v3((arg0) => {
                        closure_0 = arg0;
                        c6 = 0;
                        c7 = 0;
                        return (/* F124827 */ function*() { ... })();
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
                    })()));
                    return obj6;
                  }
                }
                v02 = 3;
              }
            } else if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_7 = arg1;
              callback2(closure_7);
            }
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp15) {
          v02 = tmp;
          throw tmp15;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_23 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleSelectKeyboardItem(channelId, item, isIncluded, arg3) {
  let image = item.node.image;
  if (isIncluded) {
    const findUploadResult = closure_8.findUpload(channelId, DraftType.ChannelMessage, (closure_0) => image(closure_1_2[11]).doesImageMatchUpload(image, closure_0));
    if (null != findUploadResult) {
      _modDef8171.remove(channelId, findUploadResult.id, tmp13.ChannelMessage);
      const obj5 = _modDef8171;
    }
    tmp13 = DraftType;
  } else {
    let obj = _modDef8171;
    obj = { channelId: null, file: null, draftType: null };
    obj[0] = channelId;
    image = item.node.image;
    let uri = item.node.id;
    if (uri == null) {
      uri = image.uri;
    }
    obj = { id: null, origin: null, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, playableDuration: null, platform: null };
    obj[0] = uri;
    obj[1] = image(5081).UploadOrigin.IMAGE_PICKER;
    ({ uri: obj3[2], uri: obj3[3], mimeType: obj3[4], width: obj3[5], height: obj3[6], filename: obj3[7], playableDuration: obj3[8] } = image);
    obj[9] = image(5081).UploadPlatform.REACT_NATIVE;
    let tmp6 = null != arg3;
    if (tmp6) {
      obj1 = { createdUsingInAppCamera: null };
      obj1[0] = arg3;
      tmp6 = obj1;
    }
    const merged = Object.assign(tmp6);
    obj[1] = obj;
    obj[2] = DraftType.ChannelMessage;
    obj.addFile(obj);
  }
}
({ MediaKeyboardTarget: c9, InAppCameraUsedViews: c10 } = DRAG_HANDLE);
({ AnalyticEvents: unpackModuleId, AnalyticsObjects: closure_12, AnalyticsObjectTypes: map1, AnalyticsPages: closure_14, AnalyticsSections: closure_15, ChatInputComponentViewedTypes: closure_16, ComponentActions: closure_17, MAX_UPLOAD_COUNT: closure_18 } = ME);
function animatedIndexThreshold(get) {
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
let result = require("set").fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardUtils.tsx");
function showSimpleMediaKeyboard(channel) {
  const _require = channel;
  const CHAT = constants.CHAT;
  if (constants.CHAT === CHAT) {
    let InteractionModal = DraftType.ChannelMessage;
  } else if (tmp.COMMAND === CHAT) {
    InteractionModal = DraftType.SlashCommand;
  } else if (tmp.APP_LAUNCHER === CHAT) {
    InteractionModal = DraftType.ApplicationLauncherCommand;
  } else if (tmp.INTERACTION_MODAL === CHAT) {
    InteractionModal = DraftType.InteractionModal;
  }
  let obj = hideMediaKeyboardActionSheet;
  obj = {
    channel,
    draftType: InteractionModal,
    uploadLimit: closure_18,
    disableWhenReachedLimit: true,
    onAttachPress() {
      let obj = {};
      const FILE_ATTACHMENT = channel(closure_1_2[9]).UploadOrigin.FILE_ATTACHMENT;
      obj = {
        channel: FILE_ATTACHMENT,
        uploadLimit: closure_1_18,
        onDismissKeyboard() {
          return _undefined(_undefined3[18]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          closure_1_25(c0);
        },
        onSelectFiles(arr) {
          const id = _undefined.id;
          closure_1 = id;
          if (id !== _undefined(closure_2_2[9]).UploadOrigin.FILE_ATTACHMENT) {
            const found = arr.filter((uri) => {
              closure_0 = uri;
              let tmp2 = null != closure_0;
              if (tmp2) {
                tmp2 = null != uri.uri;
              }
              if (tmp2) {
                tmp2 = "" !== uri.uri;
              }
              if (tmp2) {
                tmp2 = null == closure_1_8.findUpload(closure_0, closure_1_6.ChannelMessage, (closure_0) => uri(closure_1_2[11]).doesImageMatchUpload(uri, closure_0));
              }
              return tmp2;
            });
            const mapped = found.map((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.origin = closure_1;
              return obj;
            });
            let obj = { files: null, channelId: null, draftType: null };
            obj[0] = mapped;
            obj[1] = id;
            obj[2] = closure_2_6.ChannelMessage;
            InteractionModal(tmp[10]).addFiles(obj);
            const obj3 = InteractionModal(tmp[10]);
          } else {
            obj = InteractionModal(tmp[10]);
            obj = { files: null, channelId: null, draftType: null };
            obj[0] = arr;
            obj[1] = id;
            obj[2] = closure_2_6.ChannelMessage;
            obj.addFiles(obj);
          }
        }
      };
      const merged = Object.assign(obj);
      closure_1_22(obj);
    },
    onPressCamera(previewType) {
      let obj = {};
      let IMAGE_PICKER = channel(closure_1_2[9]).UploadOrigin.IMAGE_PICKER;
      obj = {
        channel: IMAGE_PICKER,
        uploadLimit: closure_1_18,
        onDismissKeyboard() {
          return _undefined(_undefined3[18]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          closure_1_25(c0);
        },
        onSelectFiles(arr) {
          const id = _undefined.id;
          closure_1 = id;
          if (id !== _undefined(closure_2_2[9]).UploadOrigin.FILE_ATTACHMENT) {
            const found = arr.filter((uri) => {
              closure_0 = uri;
              let tmp2 = null != closure_0;
              if (tmp2) {
                tmp2 = null != uri.uri;
              }
              if (tmp2) {
                tmp2 = "" !== uri.uri;
              }
              if (tmp2) {
                tmp2 = null == closure_1_8.findUpload(closure_0, closure_1_6.ChannelMessage, (closure_0) => uri(closure_1_2[11]).doesImageMatchUpload(uri, closure_0));
              }
              return tmp2;
            });
            const mapped = found.map((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.origin = closure_1;
              return obj;
            });
            let obj = { files: null, channelId: null, draftType: null };
            obj[0] = mapped;
            obj[1] = id;
            obj[2] = closure_2_6.ChannelMessage;
            InteractionModal(tmp[10]).addFiles(obj);
            const obj3 = InteractionModal(tmp[10]);
          } else {
            obj = InteractionModal(tmp[10]);
            obj = { files: null, channelId: null, draftType: null };
            obj[0] = arr;
            obj[1] = id;
            obj[2] = closure_2_6.ChannelMessage;
            obj.addFiles(obj);
          }
        }
      };
      const merged = Object.assign(obj);
      obj.previewType = previewType;
      IMAGE_PICKER = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      ({ channel: c0, previewType: c1, onDismissKeyboard: c2, onRestoreKeyboard: c3, onSelectFiles: c4 } = obj);
      const permission = InteractionModal(closure_1_2[13]).requestPermission(closure_1_19.CAMERA);
      permission.then((arg0) => {
        if (arg0) {
          let obj = _undefined2(_undefined3[14]);
          obj = { type: null, channel_id: null, guild_id: null };
          obj[0] = closure_1_16.CAMERA;
          ({ id: obj2[1], guild_id: obj2[2] } = _undefined);
          obj.track(closure_1_11.CHAT_INPUT_COMPONENT_VIEWED, obj);
          _undefined3();
          obj = { mediaType: "mixed", includeBase64: false, quality: null, videoQuality: "high", saveToPhotos: null, skipProcessing: true };
          const obj3 = _undefined2(_undefined3[15]);
          obj[2] = _undefined(_undefined3[12]).getImageCompressionQuality();
          obj[4] = _undefined4.saveCameraUploadsToDevice;
          obj3.launchCamera(obj, (didCancel) => {
            if (didCancel.didCancel) {
              callback();
            } else if (null == didCancel.errorCode) {
              if (null != didCancel.assets) {
                if (didCancel.assets.length > 0) {
                  const size = didCancel.assets[0];
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
                          let obj = { id: null, uri: null, originalUri: null, width: null, height: null, filename: null, playableDuration: null, platform: null, createdUsingInAppCamera: true, mimeType: null };
                          ({ id: obj[0], uri: obj[1], uri: obj[2], width: obj[3], height: obj[4] } = size);
                          if (null != size.fileName) {
                            if ("" !== size.fileName) {
                              let fileName = size.fileName;
                            }
                            obj[5] = fileName;
                            obj[6] = size.duration;
                            obj[7] = closure_1_0(closure_1_2[9]).UploadPlatform.REACT_NATIVE;
                            obj[9] = str8;
                            const items = [obj];
                            callback2(items);
                            obj = { camera_view: null, camera_preview_type: null };
                            obj[0] = closure_1_10.FULLY_EXPANDED;
                            obj[1] = closure_1;
                            closure_1_1(closure_1_2[14]).track(closure_1_11.IN_APP_CAMERA_USED, obj);
                            callback();
                            const obj2 = closure_1_1(closure_1_2[14]);
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
          const obj5 = _undefined(_undefined3[12]);
        }
      });
    },
    onPressItem(arg0) {
      ({ channelId, item, isIncluded } = arg0);
      const result = channel(table[18]).hideMediaKeyboardActionSheet();
      callback(channelId, item, isIncluded);
    },
    onViewAll() {
      let obj = {};
      let IMAGE_PICKER = channel(closure_1_2[9]).UploadOrigin.IMAGE_PICKER;
      obj = {
        channel: IMAGE_PICKER,
        uploadLimit: closure_1_18,
        onDismissKeyboard() {
          return _undefined(_undefined3[18]).hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          closure_1_25(c0);
        },
        onSelectFiles(arr) {
          const id = _undefined.id;
          closure_1 = id;
          if (id !== _undefined(closure_2_2[9]).UploadOrigin.FILE_ATTACHMENT) {
            const found = arr.filter((uri) => {
              closure_0 = uri;
              let tmp2 = null != closure_0;
              if (tmp2) {
                tmp2 = null != uri.uri;
              }
              if (tmp2) {
                tmp2 = "" !== uri.uri;
              }
              if (tmp2) {
                tmp2 = null == closure_1_8.findUpload(closure_0, closure_1_6.ChannelMessage, (closure_0) => uri(closure_1_2[11]).doesImageMatchUpload(uri, closure_0));
              }
              return tmp2;
            });
            const mapped = found.map((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.origin = closure_1;
              return obj;
            });
            let obj = { files: null, channelId: null, draftType: null };
            obj[0] = mapped;
            obj[1] = id;
            obj[2] = closure_2_6.ChannelMessage;
            InteractionModal(tmp[10]).addFiles(obj);
            const obj3 = InteractionModal(tmp[10]);
          } else {
            obj = InteractionModal(tmp[10]);
            obj = { files: null, channelId: null, draftType: null };
            obj[0] = arr;
            obj[1] = id;
            obj[2] = closure_2_6.ChannelMessage;
            obj.addFiles(obj);
          }
        }
      };
      let merged = Object.assign(obj);
      obj.draftType = c1;
      IMAGE_PICKER = undefined;
      c1 = undefined;
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
        resolved.then((arg0) => {
          if (arg0) {
            let obj = _undefined2(_undefined3[14]);
            obj = { type: null, channel_id: null, guild_id: null };
            obj[0] = closure_1_16.NATIVE_MEDIA_PICKER;
            ({ id: obj2[1], guild_id: obj2[2] } = found);
            obj.track(closure_1_11.CHAT_INPUT_COMPONENT_VIEWED, obj);
            _undefined4();
            const uploads = closure_1_8.getUploads(found.id, _undefined2);
            found = uploads;
            let arr2 = uploads;
            if (null != c3) {
              found = uploads.filter((id) => closure_3.includes(id.id));
              arr2 = found;
            }
            if (_undefined3 <= 1) {
              obj = { mediaType: "any", includeBase64: false, selectionLimit: null, selections: null, includeExtra: null, skipProcessing: true };
              obj[2] = 1;
              obj[3] = arr2.map((id) => id.id);
              obj[4] = !_undefined(tmp2[16]).isIOS();
              const obj5 = _undefined(tmp2[16]);
              tmp(tmp2[15]).launchImageLibrary(obj, (didCancel) => {
                const lib = didCancel;
                closure_1_5();
                if (!didCancel.didCancel) {
                  if (null == didCancel.errorCode) {
                    if (0 !== lib.length) {
                      if (didCancel.replaceSelection) {
                        const item = arr2.forEach((origin) => {
                          didCancel = origin;
                          let tmp2 = origin.origin !== found(closure_2_2[9]).UploadOrigin.IMAGE_PICKER;
                          if (!tmp2) {
                            const assets = didCancel.assets;
                            let someResult;
                            if (assets != null) {
                              someResult = assets.some(() => { ... });
                            }
                            tmp2 = someResult;
                          }
                          if (!tmp2) {
                            closure_2_1(closure_2_2[10]).remove(didCancel.id, origin.id, closure_2_6.ChannelMessage);
                            const obj = closure_2_1(closure_2_2[10]);
                          }
                        });
                      }
                      const items = [];
                      let assets = didCancel.assets;
                      for (const item10018 of assets) {
                        let tmp6 = item10018;
                        if (null != item10018.uri) {
                          let obj = { id: null, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, playableDuration: null, platform: null };
                          let tmp9 = item10018;
                          ({ id: obj[0], uri: obj[1], uri: obj[2], mimeType: obj[3], width: obj[4], height: obj[5], fileName: obj[6], duration: obj[7] } = tmp6);
                          let tmp10 = lib;
                          let tmp11 = dependencyMap;
                          obj[8] = lib(5081).UploadPlatform.REACT_NATIVE;
                          let arr = items.push(obj);
                        }
                        continue;
                      }
                      if (items.length > 0) {
                        closure_1_6(items);
                      }
                    }
                    arr2 = lib;
                  }
                }
              });
              const tmpResult = tmp(tmp2[15]);
            } else {
              if (obj3.isIOS()) {
                let length = arr2.filter((origin) => origin.origin !== found(5081).UploadOrigin.IMAGE_PICKER).length;
              } else {
                length = arr2.length;
              }
              const diff = tmp14 - length;
              obj3 = _undefined(tmp2[16]);
            }
            tmp = _undefined2;
          }
        });
      }
      obj3 = channel(closure_1_2[16]);
      let tmp = channel;
      resolved = InteractionModal(closure_1_2[13]).requestPermission(closure_1_19.PHOTOS);
    },
    onManageLimited() {
      closure_1_20({
        onDismissKeyboard: channel(closure_1_2[18]).hideMediaKeyboardActionSheet,
        onRestoreKeyboard() {
          closure_1_25(closure_0);
        }
      });
    },
    onClose: require("showMediaKeyboardActionSheet.tsx").hideMediaKeyboardActionSheet,
    onBack: require("showMediaKeyboardActionSheet.tsx").hideMediaKeyboardActionSheet
  };
  let result = obj.showMediaKeyboardActionSheet(obj);
}

export const addImagesFromPicker = function addImagesFromPicker(id, items, IMAGE_PICKER) {
  const _require = id;
  importDefault = IMAGE_PICKER;
  if (IMAGE_PICKER !== require("../../../lib/uploader/Upload.tsx").UploadOrigin.FILE_ATTACHMENT) {
    const found = items.filter((uri) => {
      closure_0 = uri;
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = null != uri.uri;
      }
      if (tmp2) {
        tmp2 = "" !== uri.uri;
      }
      if (tmp2) {
        tmp2 = null == closure_1_8.findUpload(closure_0, closure_1_6.ChannelMessage, (closure_0) => uri(closure_1_2[11]).doesImageMatchUpload(uri, closure_0));
      }
      return tmp2;
    });
    const mapped = found.map((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.origin = closure_1;
      return obj;
    });
    let obj = { files: null, channelId: null, draftType: null };
    obj[0] = mapped;
    obj[1] = id;
    obj[2] = DraftType.ChannelMessage;
    _modDef8171.addFiles(obj);
    const obj3 = _modDef8171;
  } else {
    obj = _modDef8171;
    obj = { files: null, channelId: null, draftType: null };
    obj[0] = items;
    obj[1] = id;
    obj[2] = DraftType.ChannelMessage;
    obj.addFiles(obj);
  }
};
export const addAttachmentForCommand = function addAttachmentForCommand(channelId, onSelectFiles, result1, closure_1_1, IMAGE_PICKER) {
  const option = closure_1_1.option;
  let obj = openImagePickerUnhandled;
  const filename = obj.getFileFromUploadItem(result1).filename;
  if (closure_1_1.target === constants.COMMAND) {
    const current = onSelectFiles.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (applicationCommandManager != null) {
      obj = { displayText: null, preferred: true };
      obj[0] = filename;
      const result = applicationCommandManager.insertOrJumpCommandOption(option, undefined, false, obj);
    }
  }
  const target = closure_1_1.target;
  if (constants.CHAT === target) {
    let InteractionModal = DraftType.ChannelMessage;
  } else if (tmp2.COMMAND === target) {
    InteractionModal = DraftType.SlashCommand;
  } else if (tmp2.APP_LAUNCHER === target) {
    InteractionModal = DraftType.ApplicationLauncherCommand;
  } else if (tmp2.INTERACTION_MODAL === target) {
    InteractionModal = DraftType.InteractionModal;
  }
  _modDef8171.remove(channelId, closure_1_1.option.name, InteractionModal);
  const obj4 = _modDef8171;
  obj = { channelId, file: null, draftType: null, allowOptimization: false };
  obj1 = {};
  const merged = Object.assign(result1);
  obj1.origin = IMAGE_PICKER;
  obj1.id = option.name;
  obj1.filename = filename;
  obj[1] = obj1;
  obj[2] = InteractionModal;
  _modDef8171.addFile(obj);
};
export const handleCameraDialog = function handleCameraDialog(arg0) {
  ({ channel: require, previewType: importDefault, onDismissKeyboard: dependencyMap, onRestoreKeyboard: closure_3, onSelectFiles: closure_4 } = arg0);
  const permission = NativePermissionsRequestOptionsDefault.requestPermission(NativePermissionTypes.CAMERA);
  permission.then((arg0) => {
    if (arg0) {
      let obj = _undefined2(_undefined3[14]);
      obj = { type: null, channel_id: null, guild_id: null };
      obj[0] = closure_1_16.CAMERA;
      ({ id: obj2[1], guild_id: obj2[2] } = _undefined);
      obj.track(closure_1_11.CHAT_INPUT_COMPONENT_VIEWED, obj);
      _undefined3();
      obj = { mediaType: "mixed", includeBase64: false, quality: null, videoQuality: "high", saveToPhotos: null, skipProcessing: true };
      const obj3 = _undefined2(_undefined3[15]);
      obj[2] = _undefined(_undefined3[12]).getImageCompressionQuality();
      obj[4] = _undefined4.saveCameraUploadsToDevice;
      obj3.launchCamera(obj, (didCancel) => {
        if (didCancel.didCancel) {
          callback();
        } else if (null == didCancel.errorCode) {
          if (null != didCancel.assets) {
            if (didCancel.assets.length > 0) {
              const size = didCancel.assets[0];
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
                      let obj = { id: null, uri: null, originalUri: null, width: null, height: null, filename: null, playableDuration: null, platform: null, createdUsingInAppCamera: true, mimeType: null };
                      ({ id: obj[0], uri: obj[1], uri: obj[2], width: obj[3], height: obj[4] } = size);
                      if (null != size.fileName) {
                        if ("" !== size.fileName) {
                          let fileName = size.fileName;
                        }
                        obj[5] = fileName;
                        obj[6] = size.duration;
                        obj[7] = closure_1_0(closure_1_2[9]).UploadPlatform.REACT_NATIVE;
                        obj[9] = str8;
                        const items = [obj];
                        callback2(items);
                        obj = { camera_view: null, camera_preview_type: null };
                        obj[0] = closure_1_10.FULLY_EXPANDED;
                        obj[1] = closure_1;
                        closure_1_1(closure_1_2[14]).track(closure_1_11.IN_APP_CAMERA_USED, obj);
                        callback();
                        const obj2 = closure_1_1(closure_1_2[14]);
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
      const obj5 = _undefined(_undefined3[12]);
    }
  });
};
export const handleViewAllDialog = function handleViewAllDialog(arg0) {
  ({ channel: require, draftType: importDefault, uploadLimit: dependencyMap, includedUploadIds: closure_3, onDismissKeyboard: closure_4, onRestoreKeyboard: closure_5, onSelectFiles: DraftType } = arg0);
  if (obj.isIOS()) {
    if (tmpResult.getSystemVersionMajor() >= 14) {
      let resolved = Promise.resolve(true);
    }
    resolved.then((arg0) => {
      if (arg0) {
        let obj = _undefined2(_undefined3[14]);
        obj = { type: null, channel_id: null, guild_id: null };
        obj[0] = closure_1_16.NATIVE_MEDIA_PICKER;
        ({ id: obj2[1], guild_id: obj2[2] } = found);
        obj.track(closure_1_11.CHAT_INPUT_COMPONENT_VIEWED, obj);
        _undefined4();
        const uploads = closure_1_8.getUploads(found.id, _undefined2);
        found = uploads;
        let arr2 = uploads;
        if (null != c3) {
          found = uploads.filter((id) => closure_3.includes(id.id));
          arr2 = found;
        }
        if (_undefined3 <= 1) {
          obj = { mediaType: "any", includeBase64: false, selectionLimit: null, selections: null, includeExtra: null, skipProcessing: true };
          obj[2] = 1;
          obj[3] = arr2.map((id) => id.id);
          obj[4] = !_undefined(tmp2[16]).isIOS();
          const obj5 = _undefined(tmp2[16]);
          tmp(tmp2[15]).launchImageLibrary(obj, (didCancel) => {
            const lib = didCancel;
            closure_1_5();
            if (!didCancel.didCancel) {
              if (null == didCancel.errorCode) {
                if (0 !== lib.length) {
                  if (didCancel.replaceSelection) {
                    const item = arr2.forEach((origin) => {
                      didCancel = origin;
                      let tmp2 = origin.origin !== found(closure_2_2[9]).UploadOrigin.IMAGE_PICKER;
                      if (!tmp2) {
                        const assets = didCancel.assets;
                        let someResult;
                        if (assets != null) {
                          someResult = assets.some((image) => origin(closure_1_2[11]).doesImageMatchUpload(image, origin));
                        }
                        tmp2 = someResult;
                      }
                      if (!tmp2) {
                        closure_2_1(closure_2_2[10]).remove(didCancel.id, origin.id, closure_2_6.ChannelMessage);
                        const obj = closure_2_1(closure_2_2[10]);
                      }
                    });
                  }
                  const items = [];
                  let assets = didCancel.assets;
                  for (const item10018 of assets) {
                    let tmp6 = item10018;
                    if (null != item10018.uri) {
                      let obj = { id: null, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, playableDuration: null, platform: null };
                      let tmp9 = item10018;
                      ({ id: obj[0], uri: obj[1], uri: obj[2], mimeType: obj[3], width: obj[4], height: obj[5], fileName: obj[6], duration: obj[7] } = tmp6);
                      let tmp10 = lib;
                      let tmp11 = dependencyMap;
                      obj[8] = lib(5081).UploadPlatform.REACT_NATIVE;
                      let arr = items.push(obj);
                    }
                    continue;
                  }
                  if (items.length > 0) {
                    closure_1_6(items);
                  }
                }
                arr2 = lib;
              }
            }
          });
          const tmpResult = tmp(tmp2[15]);
        } else {
          if (obj3.isIOS()) {
            let length = arr2.filter((origin) => origin.origin !== found(5081).UploadOrigin.IMAGE_PICKER).length;
          } else {
            length = arr2.length;
          }
          const diff = tmp14 - length;
          obj3 = _undefined(tmp2[16]);
        }
        tmp = _undefined2;
      }
    });
  }
  obj = set;
  const tmp = require;
  resolved = NativePermissionsRequestOptionsDefault.requestPermission(NativePermissionTypes.PHOTOS);
};
export { handleLimitedPickerDialog };
export const handleSelectGift = function handleSelectGift(analyticsLocations, chatInput, current2) {
  const _require = current2;
  let current = chatInput.current;
  channelId = channelId.getChannelId();
  current.closeCustomKeyboard();
  channel = channel.getChannel(channelId);
  const ComponentDispatch = require("../../../utils/ComponentDispatchUtils.tsx").ComponentDispatch;
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
  obj[3] = DM_CHANNEL;
  obj = { type: constants7.NITRO_GIFTING, channel_id: null, guild_id: null };
  let id;
  if (channel != null) {
    id = channel.id;
  }
  obj[1] = id;
  let guild_id1;
  if (channel != null) {
    guild_id1 = channel.guild_id;
  }
  obj[2] = guild_id1;
  expandEventPropertiesDefault.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
  const obj3 = expandEventPropertiesDefault;
  const tmp3 = _require;
  let recipientId;
  if (null != channel) {
    if (channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
  }
  obj1 = { recipientUserId: recipientId, analyticsLocation: obj, analyticsLocations, navigationParams: { presentation: "card" }, onDismiss: null };
  current = undefined;
  if (current2 != null) {
    current = current2.current;
  }
  let fn;
  if (null != current) {
    fn = () => {
      let obj = current2(closure_1_2[21]);
      obj = { ref: current2 };
      return obj.setAccessibilityFocus(obj);
    };
  }
  obj1[4] = fn;
  require("../../premium/native/utils/openGiftModal.tsx").openGiftModal(obj1);
};
export const handleSelectThread = function handleSelectThread(channel, chatInput) {
  let obj = expandEventPropertiesDefault;
  obj = { type: constants7.START_THREAD, channel_id: channel.id, guild_id: null };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj[2] = guild_id;
  obj.track(constants2.CHAT_INPUT_COMPONENT_VIEWED, obj);
  if (null != channel) {
    const current = chatInput.current;
    current.openSystemKeyboard();
    if (obj3.isIOS()) {
      const current2 = chatInput.current;
      current2.blur();
    }
    obj3 = set;
    const tmp6 = require;
    const result = navigateToThreadCreation.navigateToThreadCreation(channel, "Plus Button");
    const tmp6Result = navigateToThreadCreation;
  }
};
export { handleAttachFile };
export const mediaNodeToUploadItem = function mediaNodeToUploadItem(item) {
  const image = item.node.image;
  let uri = item.node.id;
  if (uri == null) {
    uri = image.uri;
  }
  let obj = { id: uri, origin: cancel.UploadOrigin.IMAGE_PICKER, uri: image.uri, originalUri: image.uri, mimeType: image.mimeType, width: image.width, height: image.height, filename: image.filename, playableDuration: image.playableDuration, platform: cancel.UploadPlatform.REACT_NATIVE };
  let tmp = null != arg1;
  if (tmp) {
    obj = { createdUsingInAppCamera: null };
    obj[0] = arg1;
    tmp = obj;
  }
  const merged = Object.assign(tmp);
  return obj;
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
  const obj = { id: null, uri: null, originalUri: null, mimeType: null, width: null, height: null, filename: null, platform: null };
  const arr = parts.pop();
  const str = path.path;
  obj[0] = applyDefault.uniqueId(path.path);
  obj[1] = combined;
  obj[2] = combined;
  ({ mime: obj[3], width: obj[4], height: obj[5] } = path);
  obj[6] = arr;
  obj[7] = cancel.UploadPlatform.REACT_NATIVE;
  return obj;
};
export { handleSelectKeyboardItem };
export { showSimpleMediaKeyboard };
export { animatedIndexThreshold };
export const getMediaKeyboardDraftType = function getMediaKeyboardDraftType(target) {
  if (constants.CHAT === target) {
    return DraftType.ChannelMessage;
  } else if (tmp.COMMAND === target) {
    return DraftType.SlashCommand;
  } else if (tmp.APP_LAUNCHER === target) {
    return DraftType.ApplicationLauncherCommand;
  } else if (tmp.INTERACTION_MODAL === target) {
    return DraftType.InteractionModal;
  }
};