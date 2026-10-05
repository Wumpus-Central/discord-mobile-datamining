// discord_app/modules/media_keyboard/native/MediaKeyboardUtils.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import NativePermissionConstants from "../../native_permissions/NativePermissionConstants.tsx";
import react_native from "../../a11y/native/setAccessibilityFocus.android.tsx";
import DraftStore from "../../../stores/DraftStore.tsx";
import UploadPlatform from "../../media_uploads/UploadPlatform.tsx";
import Upload from "../../../lib/uploader/Upload.tsx";
import uploader_UploadUtils from "../../../lib/uploader/UploadUtils.tsx";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import NativePermissionUtilsDefault from "../../native_permissions/NativePermissionUtils.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../actions/UploadAttachmentActionCreators.tsx";
import showMediaKeyboardActionSheet from "showMediaKeyboardActionSheet.tsx";
import navigateToThreadCreation from "../../threads/native/navigateToThreadCreation.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";
import MediaKeyboardConstants from "MediaKeyboardConstants.tsx";
import Constants from "../../../Constants.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, uploads;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let unpackModuleId;
const f103869 = (item) => {
  obj = { origin };
  const merged = Object.assign(item);
  return obj;
};
function handleLimitedPickerDialog() {
  return obj(...arguments);
}
let obj = function _handleLimitedPickerDialog() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let obj2;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            ({ onDismissKeyboard: c0, onRestoreKeyboard: c1 } = closure_0);
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c0();
            c3 = 2;
            c4 = 1;
            const obj6 = { value: obj2.presentLimitedLibraryPicker(), done: false };
            obj2 = closure_130_0(closure_130_2[19]);
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          tmp();
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp15) {
        c4 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
function handleAttachFile() {
  return obj(...arguments);
}
obj = function _handleAttachFile() {
  obj = _asyncToGenerator(async (arg0) => {
    let arr;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let obj10;
    let v3;
    let v32;
    let closure_0 = arg0;
    if (v32 === 2) {
      v32 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let extensions;
        let length;
        let closure_7;
        v32 = 2;
        const tmp4 = v3;
        if (0 === v3) {
          if (arg0 === 1) {
            v32 = 3;
            throw value;
          } else if (arg0 === 2) {
            v32 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            extensions = undefined;
            c5 = undefined;
            ({
              channel: c0,
              uploadLimit: c1,
              extensions: c2,
              onDismissKeyboard: c3,
              onRestoreKeyboard: c4,
              onSelectFiles: c5,
            } = closure_0);
            length = undefined;
            closure_7 = undefined;
            v3 = 1;
            v32 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            v32 = 3;
            throw value;
          } else if (arg0 === 2) {
            v32 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp26 = v3();
            let obj8 = closure_130_1(closure_130_2[14]);
            const obj5 = { type: closure_130_16.ATTACH_FILE, channel_id: c0.id, guild_id: c0.guild_id };
            obj8.track(closure_130_11.CHAT_INPUT_COMPONENT_VIEWED, obj5);
            const obj6 = { pickMultiple: c1 > 1, extensions };
            v3 = 2;
            v32 = 1;
            const obj7 = { value: obj10.handleDocumentSelection(obj6), done: false };
            obj10 = closure_130_0(closure_130_2[24]);
            return obj7;
          }
        } else {
          if (2 === tmp4) {
            if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              v32 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              length = value;
              const tmp20 = v32();
              if (null != length) {
                if (length.length >= 1) {
                  const tmp12 = globalThis;
                  const _Array = Array;
                  v3 = 3;
                  v32 = 1;
                  const obj11 = {
                    value: all(
                      arr.map(
                        (() => {
                          closure_0 = v3(function* (arg0) {
                            let c6;
                            let c7;
                            let closure_4;
                            let closure_5;
                            let mimeType;
                            let obj8;
                            closure_0 = arg0;
                            const uri = closure_0.uri;
                            const tmp42 = closure_0(extensions[12]);
                            const name2 = closure_0.name;
                            let c1 = name2;
                            const getImageDimensionsIfMissing = tmp42.getImageDimensionsIfMissing;
                            if (name2 == null) {
                              c1 = undefined;
                            }
                            yield getImageDimensionsIfMissing(uri, undefined, undefined, c1);
                            let filename = value;
                            const width = filename.width;
                            const height = filename.height;
                            size = {
                              id: obj8.uniqueId(uri),
                              uri,
                              originalUri: uri,
                              filename,
                              mimeType,
                              channelId: closure_0.id,
                              platform: closure_0(extensions[16]).UploadPlatform.REACT_NATIVE,
                              origin: closure_0(extensions[9]).UploadOrigin.FILE_ATTACHMENT,
                              width,
                              height,
                            };
                            obj8 = closure_2_1(extensions[25]);
                            const name = closure_0.name;
                            filename = name;
                            if (name == null) {
                              const parts = uri.split("/");
                              filename = parts.at(-1);
                            }
                            const type = closure_0.type;
                            mimeType = type;
                            if (type == null) {
                              mimeType = undefined;
                            }
                            return size;
                          });
                          return function () {
                            return closure_0(...arguments);
                          };
                        })(),
                      ),
                    ),
                    done: false,
                  };
                  arr = Array.from(length);
                  return obj11;
                }
              }
            }
          } else if (arg0 === 1) {
            v32 = 3;
            throw value;
          } else if (arg0 === 2) {
            v32 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_7 = value;
            const tmp8 = c5(closure_7);
          }
          v32 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        v32 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
function handleSelectKeyboardItem(channelId, node, isIncluded, createdUsingInAppCamera) {
  let image = node.node.image;
  const tmp = isIncluded;
  if (tmp) {
    const findUploadResult = UploadAttachmentStore.findUpload(channelId, DraftType.ChannelMessage, (id) => {
      obj = uploader_UploadUtils;
      return obj.doesImageMatchUpload(image, id);
    });
    if (null != findUploadResult) {
      const obj4 = UploadAttachmentActionCreatorsDefault;
      obj4.remove(channelId, findUploadResult.id, DraftType.ChannelMessage);
    }
  } else {
    obj = { channelId, file: size, draftType: DraftType.ChannelMessage };
    image = node.node.image;
    let uri = node.node.id;
    const addFile = UploadAttachmentActionCreatorsDefault.addFile;
    UploadAttachmentActionCreatorsDefault;
    if (uri == null) {
      uri = image.uri;
    }
    size = {
      id: uri,
      origin: image(7269).UploadOrigin.IMAGE_PICKER,
      uri: null,
      originalUri: null,
      mimeType: null,
      width: null,
      height: null,
      filename: null,
      playableDuration: null,
      platform: image(7247).UploadPlatform.REACT_NATIVE,
    };
    ({
      uri: obj2.uri,
      uri: obj2.originalUri,
      mimeType: obj2.mimeType,
      width: obj2.width,
      height: obj2.height,
      filename: obj2.filename,
      playableDuration: obj2.playableDuration,
    } = image);
    let tmp8 = null != createdUsingInAppCamera;
    if (tmp8) {
      tmp8 = { createdUsingInAppCamera };
      const obj3 = { createdUsingInAppCamera };
    }
    const merged = Object.assign(tmp8);
    addFile(obj);
  }
}
const DraftType = DraftStore.DraftType;
({ MediaKeyboardTarget: c9, InAppCameraUsedViews: c10 } = MediaKeyboardConstants);
({
  AnalyticEvents: unpackModuleId,
  AnalyticsObjects: closure_12,
  AnalyticsObjectTypes: map1,
  AnalyticsPages: closure_14,
  AnalyticsSections: closure_15,
  ChatInputComponentViewedTypes: closure_16,
  ComponentActions: closure_17,
  MAX_UPLOAD_COUNT: closure_18,
} = Constants);
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
function animatedIndexThreshold(get, arg1) {
  let diff;
  if (1 === get.get().length) {
    diff = arg1 - 1;
  } else {
    diff = arg1 * (get.get().length - 1);
  }
  return diff;
}
animatedIndexThreshold.__closure = {};
animatedIndexThreshold.__workletHash = 97398083076;
animatedIndexThreshold.__initData = {
  code: "function animatedIndexThreshold_MediaKeyboardUtilsTsx1(animatedSnapPoints,thresholdPercent){return animatedSnapPoints.get().length===1?thresholdPercent-1:thresholdPercent*(animatedSnapPoints.get().length-1);}",
};
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_keyboard/native/MediaKeyboardUtils.tsx");
function showSimpleMediaKeyboard(channel) {
  let InteractionModal;
  _require = channel;
  const CHAT = constants.CHAT;
  if (constants.CHAT === CHAT) {
    InteractionModal = DraftType.ChannelMessage;
  } else if (constants.COMMAND === CHAT) {
    InteractionModal = DraftType.SlashCommand;
  } else if (constants.APP_LAUNCHER === CHAT) {
    InteractionModal = DraftType.ApplicationLauncherCommand;
  } else if (constants.INTERACTION_MODAL === CHAT) {
    InteractionModal = DraftType.InteractionModal;
  }
  obj = require("showMediaKeyboardActionSheet");
  let obj2 = {
    channel,
    draftType: InteractionModal,
    uploadLimit,
    disableWhenReachedLimit: true,
    onAttachPress() {
      obj = {};
      const FILE_ATTACHMENT = channel(dependencyMap[9]).UploadOrigin.FILE_ATTACHMENT;
      const obj2 = {
        channel: FILE_ATTACHMENT,
        uploadLimit,
        onDismissKeyboard() {
          obj = IMAGE_PICKER(closure_1_2[19]);
          return obj.hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          showSimpleMediaKeyboard(IMAGE_PICKER);
        },
        onSelectFiles(files) {
          let ChannelMessage;
          const id = IMAGE_PICKER.id;
          let closure_1 = IMAGE_PICKER;
          if (IMAGE_PICKER !== Upload.UploadOrigin.FILE_ATTACHMENT) {
            const found = files.filter((uri) => {
              let closure_0 = uri;
              const tmp2 =
                null != id &&
                null != uri.uri &&
                "" !== uri.uri &&
                null ==
                  closure_2_8.findUpload(id, ChannelMessage.ChannelMessage, (id) => {
                    obj = id(closure_2_2[11]);
                    return obj.doesImageMatchUpload(closure_0, id);
                  });
              return tmp2;
            });
            const mapped = found.map(f103869);
            const obj2 = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
            const obj3 = UploadAttachmentActionCreatorsDefault;
            obj3.addFiles(obj2);
          } else {
            obj = UploadAttachmentActionCreatorsDefault;
            const obj4 = { files, channelId: id, draftType: DraftType.ChannelMessage };
            obj.addFiles(obj4);
          }
        },
      };
      const merged = Object.assign(obj2);
      handleAttachFile(obj);
    },
    onPressCamera(previewType) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      obj = { previewType };
      const IMAGE_PICKER = channel(dependencyMap[9]).UploadOrigin.IMAGE_PICKER;
      let obj2 = {
        channel: IMAGE_PICKER,
        uploadLimit,
        onDismissKeyboard() {
          obj = IMAGE_PICKER(closure_1_2[19]);
          return obj.hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          showSimpleMediaKeyboard(IMAGE_PICKER);
        },
        onSelectFiles(files) {
          let ChannelMessage;
          const id = IMAGE_PICKER.id;
          let closure_1 = IMAGE_PICKER;
          if (IMAGE_PICKER !== Upload.UploadOrigin.FILE_ATTACHMENT) {
            const found = files.filter((uri) => {
              let closure_0 = uri;
              const tmp2 =
                null != id &&
                null != uri.uri &&
                "" !== uri.uri &&
                null ==
                  closure_2_8.findUpload(id, ChannelMessage.ChannelMessage, (id) => {
                    obj = id(closure_2_2[11]);
                    return obj.doesImageMatchUpload(closure_0, id);
                  });
              return tmp2;
            });
            const mapped = found.map(f103869);
            const obj2 = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
            const obj3 = UploadAttachmentActionCreatorsDefault;
            obj3.addFiles(obj2);
          } else {
            obj = UploadAttachmentActionCreatorsDefault;
            const obj4 = { files, channelId: id, draftType: DraftType.ChannelMessage };
            obj.addFiles(obj4);
          }
        },
      };
      const merged = Object.assign(obj2);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      ({ channel: c0, previewType: c1, onDismissKeyboard: c2, onRestoreKeyboard: c3, onSelectFiles: c4 } = obj);
      let obj3 = InteractionModal(dependencyMap[13]);
      const permission = obj3.requestPermission(constants.CAMERA);
      permission.then((result) => {
        let camera_preview_type;
        let obj4;
        const tmp = result;
        if (tmp) {
          obj = InteractionModal(closure_2_2[14]);
          let obj3 = { type: constants2.CAMERA, channel_id: null, guild_id: null };
          ({ id: obj2.channel_id, guild_id: obj2.guild_id } = c0);
          obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj3);
          _undefined();
          const obj6 = {
            mediaType: "mixed",
            includeBase64: false,
            quality: obj4.getImageCompressionQuality(),
            videoQuality: "high",
            saveToPhotos: closure_2_4.saveCameraUploadsToDevice,
            skipProcessing: true,
          };
          const launchCamera = InteractionModal(closure_2_2[15]).launchCamera;
          InteractionModal(closure_2_2[15]);
          obj4 = IMAGE_PICKER(closure_2_2[12]);
          launchCamera(obj6, (didCancel) => {
            if (didCancel.didCancel) {
              closure_1_3();
            } else if (null == didCancel.errorCode) {
              if (null != didCancel.assets) {
                if (didCancel.assets.length > 0) {
                  size = didCancel.assets[0];
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
                                const str7 = "" + size.fileType + "/" + arr;
                                str4 = str7.toLowerCase();
                              }
                            }
                            str8 = str4;
                          }
                          const size1 = {
                            id: null,
                            uri: null,
                            originalUri: null,
                            width: null,
                            height: null,
                            filename: null,
                            playableDuration: null,
                            platform: null,
                            createdUsingInAppCamera: true,
                            mimeType: null,
                          };
                          ({
                            id: obj.id,
                            uri: obj.uri,
                            uri: obj.originalUri,
                            width: obj.width,
                            height: obj.height,
                          } = size);
                          if (null != size.fileName) {
                            let fileName;
                            if ("" !== size.fileName) {
                              fileName = size.fileName;
                            }
                            size1.filename = fileName;
                            size1.playableDuration = size.duration;
                            size1.platform = c0(c2[16]).UploadPlatform.REACT_NATIVE;
                            size1.mimeType = str8;
                            const items = [size1];
                            closure_1_4(items);
                            const obj3 = { camera_view: constants.FULLY_EXPANDED, camera_preview_type };
                            const obj2 = camera_preview_type(c2[14]);
                            obj2.track(constants2.IN_APP_CAMERA_USED, obj3);
                            closure_1_3();
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
        }
      });
    },
    onPressItem(arg0) {
      let channelId;
      let isIncluded;
      let item;
      ({ channelId, item, isIncluded } = arg0);
      obj = channel(dependencyMap[19]);
      const result = obj.hideMediaKeyboardActionSheet();
      handleSelectKeyboardItem(channelId, item, isIncluded);
    },
    onViewAll() {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      obj = { draftType: InteractionModal };
      const IMAGE_PICKER = channel(dependencyMap[9]).UploadOrigin.IMAGE_PICKER;
      let obj2 = {
        channel: IMAGE_PICKER,
        uploadLimit,
        onDismissKeyboard() {
          obj = IMAGE_PICKER(closure_1_2[19]);
          return obj.hideMediaKeyboardActionSheet();
        },
        onRestoreKeyboard() {
          showSimpleMediaKeyboard(IMAGE_PICKER);
        },
        onSelectFiles(files) {
          let ChannelMessage;
          const id = IMAGE_PICKER.id;
          let closure_1 = IMAGE_PICKER;
          if (IMAGE_PICKER !== Upload.UploadOrigin.FILE_ATTACHMENT) {
            const found = files.filter((uri) => {
              let closure_0 = uri;
              const tmp2 =
                null != id &&
                null != uri.uri &&
                "" !== uri.uri &&
                null ==
                  closure_2_8.findUpload(id, ChannelMessage.ChannelMessage, (id) => {
                    obj = id(closure_2_2[11]);
                    return obj.doesImageMatchUpload(closure_0, id);
                  });
              return tmp2;
            });
            const mapped = found.map(f103869);
            const obj2 = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
            const obj3 = UploadAttachmentActionCreatorsDefault;
            obj3.addFiles(obj2);
          } else {
            obj = UploadAttachmentActionCreatorsDefault;
            const obj4 = { files, channelId: id, draftType: DraftType.ChannelMessage };
            obj.addFiles(obj4);
          }
        },
      };
      let merged = Object.assign(obj2);
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      ({
        channel: c0,
        draftType: c1,
        uploadLimit: c2,
        includedUploadIds: c3,
        onDismissKeyboard: c4,
        onRestoreKeyboard: c5,
        onSelectFiles: c6,
      } = obj);
      let obj3 = channel(dependencyMap[17]);
      if (obj3.isIOS()) {
        let resolved;
        let num = 14;
        const tmpResult = channel(dependencyMap[18]);
        if (tmpResult.getSystemVersionMajor() >= 14) {
          const tmp4 = globalThis;
          resolved = Promise.resolve(true);
        }
        resolved.then((result) => {
          let found;
          let obj5;
          const tmp = result;
          if (tmp) {
            obj = _undefined2(_undefined3[14]);
            const obj4 = { type: constants2.NATIVE_MEDIA_PICKER, channel_id: null, guild_id: null };
            ({ id: obj2.channel_id, guild_id: obj2.guild_id } = found);
            obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj4);
            _undefined4();
            uploads = uploads.getUploads(found.id, _undefined2);
            found = uploads;
            let arr2 = uploads;
            if (null != c3) {
              found = uploads.filter((id) => closure_1_3.includes(id.id));
              arr2 = found;
            }
            let num = 1;
            if (_undefined3 > 1) {
              let length;
              const obj3 = _undefined(_undefined3[17]);
              if (obj3.isIOS()) {
                length = arr2.filter(
                  (origin) => origin.origin !== found(_undefined3[9]).UploadOrigin.IMAGE_PICKER,
                ).length;
              } else {
                length = arr2.length;
              }
              num = tmp15 - length;
            }
            const obj6 = {
              mediaType: "any",
              includeBase64: false,
              selectionLimit: num,
              selections: arr2.map((id) => id.id),
              includeExtra: !obj5.isIOS(),
              skipProcessing: true,
            };
            obj5 = _undefined(_undefined3[17]);
            const tmp2Result = _undefined2(_undefined3[15]);
            tmp2Result.launchImageLibrary(obj6, (didCancel) => {
              const id = didCancel;
              c5();
              if (!didCancel.didCancel) {
                let tmp2 = null;
                if (null == didCancel.errorCode) {
                  if (0 !== found.length) {
                    if (didCancel.replaceSelection) {
                      const item = found.forEach((origin) => {
                        assets = origin;
                        let tmp2 = origin.origin !== found(_undefined3[9]).UploadOrigin.IMAGE_PICKER;
                        if (!tmp2) {
                          assets = assets.assets;
                          let someResult;
                          if (assets != null) {
                            someResult = assets.some((item) => {
                              obj = assets(closure_2_2[11]);
                              return obj.doesImageMatchUpload(item, closure_0);
                            });
                          }
                          tmp2 = someResult;
                        }
                        if (!tmp2) {
                          obj = _undefined2(_undefined3[10]);
                          obj.remove(id.id, origin.id, closure_3_6.ChannelMessage);
                        }
                      });
                    }
                    const items = [];
                    let assets = didCancel.assets;
                    for (const item10018 of assets) {
                      if (null != item10018.uri) {
                        size = {
                          id: null,
                          uri: null,
                          originalUri: null,
                          mimeType: null,
                          width: null,
                          height: null,
                          filename: null,
                          playableDuration: null,
                          platform: IMAGE_PICKER(closure_3_2[16]).UploadPlatform.REACT_NATIVE,
                        };
                        ({
                          id: obj.id,
                          uri: obj.uri,
                          uri: obj.originalUri,
                          mimeType: obj.mimeType,
                          width: obj.width,
                          height: obj.height,
                          fileName: obj.filename,
                          duration: obj.playableDuration,
                        } = item10018);
                        let push = items.push;
                        let arr = push(size);
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
          }
        });
      }
      let obj5 = InteractionModal(dependencyMap[13]);
      resolved = obj5.requestPermission(constants.PHOTOS);
    },
    onManageLimited() {
      obj = {
        onDismissKeyboard: showMediaKeyboardActionSheet.hideMediaKeyboardActionSheet,
        onRestoreKeyboard() {
          showSimpleMediaKeyboard(channel);
        },
      };
      handleLimitedPickerDialog(obj);
    },
    onClose: require("showMediaKeyboardActionSheet").hideMediaKeyboardActionSheet,
    onBack: require("showMediaKeyboardActionSheet").hideMediaKeyboardActionSheet,
  };
  let result = obj.showMediaKeyboardActionSheet(obj2);
}

export const addImagesFromPicker = function addImagesFromPicker(id, items, IMAGE_EDITOR) {
  _require = id;
  importDefault = IMAGE_EDITOR;
  if (IMAGE_EDITOR !== require("Upload").UploadOrigin.FILE_ATTACHMENT) {
    const found = items.filter((uri) => {
      let closure_0 = uri;
      const tmp2 =
        null != id &&
        null != uri.uri &&
        "" !== uri.uri &&
        null ==
          closure_2_8.findUpload(id, ChannelMessage.ChannelMessage, (id) => {
            obj = id(closure_2_2[11]);
            return obj.doesImageMatchUpload(closure_0, id);
          });
      return tmp2;
    });
    const mapped = found.map(f103869);
    const obj2 = { files: mapped, channelId: id, draftType: DraftType.ChannelMessage };
    const obj3 = UploadAttachmentActionCreatorsDefault;
    obj3.addFiles(obj2);
  } else {
    const obj4 = { files: items, channelId: id, draftType: DraftType.ChannelMessage };
    obj = UploadAttachmentActionCreatorsDefault;
    obj.addFiles(obj4);
  }
};
export const addAttachmentForCommand = function addAttachmentForCommand(
  channelId,
  chatInputRef,
  result1,
  keyboardContextForType,
  IMAGE_PICKER,
) {
  let InteractionModal;
  let obj5;
  const option = keyboardContextForType.option;
  obj = utils_UploadUtils;
  const filename = obj.getFileFromUploadItem(result1).filename;
  if (keyboardContextForType.target === constants.COMMAND) {
    const current = chatInputRef.current;
    const applicationCommandManager = current.getApplicationCommandManager();
    if (applicationCommandManager != null) {
      const obj2 = { displayText: filename, preferred: true };
      const result = applicationCommandManager.insertOrJumpCommandOption(option, undefined, false, obj2);
    }
  }
  const target = keyboardContextForType.target;
  if (constants.CHAT === target) {
    InteractionModal = DraftType.ChannelMessage;
  } else if (constants.COMMAND === target) {
    InteractionModal = DraftType.SlashCommand;
  } else if (constants.APP_LAUNCHER === target) {
    InteractionModal = DraftType.ApplicationLauncherCommand;
  } else if (constants.INTERACTION_MODAL === target) {
    InteractionModal = DraftType.InteractionModal;
  }
  const obj4 = UploadAttachmentActionCreatorsDefault;
  obj4.remove(channelId, keyboardContextForType.option.name, InteractionModal);
  const obj3 = { channelId, file: obj5, draftType: InteractionModal, allowOptimization: false };
  obj5 = { origin: IMAGE_PICKER, id: option.name, filename };
  const addFile = UploadAttachmentActionCreatorsDefault.addFile;
  UploadAttachmentActionCreatorsDefault;
  const merged = Object.assign(result1);
  addFile(obj3);
};
export const handleCameraDialog = function handleCameraDialog(arg0) {
  let require;
  ({
    channel: require,
    previewType: importDefault,
    onDismissKeyboard: dependencyMap,
    onRestoreKeyboard: _asyncToGenerator,
    onSelectFiles: UnsyncedUserSettingsStore,
  } = arg0);
  obj = NativePermissionUtilsDefault;
  const permission = obj.requestPermission(NativePermissionTypes.CAMERA);
  permission.then((result) => {
    let camera_preview_type;
    let obj4;
    const tmp = result;
    if (tmp) {
      obj = InteractionModal(closure_2_2[14]);
      let obj3 = { type: constants2.CAMERA, channel_id: null, guild_id: null };
      ({ id: obj2.channel_id, guild_id: obj2.guild_id } = c0);
      obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj3);
      _undefined();
      const obj6 = {
        mediaType: "mixed",
        includeBase64: false,
        quality: obj4.getImageCompressionQuality(),
        videoQuality: "high",
        saveToPhotos: closure_2_4.saveCameraUploadsToDevice,
        skipProcessing: true,
      };
      const launchCamera = InteractionModal(closure_2_2[15]).launchCamera;
      InteractionModal(closure_2_2[15]);
      obj4 = IMAGE_PICKER(closure_2_2[12]);
      launchCamera(obj6, (didCancel) => {
        if (didCancel.didCancel) {
          closure_1_3();
        } else if (null == didCancel.errorCode) {
          if (null != didCancel.assets) {
            if (didCancel.assets.length > 0) {
              size = didCancel.assets[0];
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
                            const str7 = "" + size.fileType + "/" + arr;
                            str4 = str7.toLowerCase();
                          }
                        }
                        str8 = str4;
                      }
                      const size1 = {
                        id: null,
                        uri: null,
                        originalUri: null,
                        width: null,
                        height: null,
                        filename: null,
                        playableDuration: null,
                        platform: null,
                        createdUsingInAppCamera: true,
                        mimeType: null,
                      };
                      ({ id: obj.id, uri: obj.uri, uri: obj.originalUri, width: obj.width, height: obj.height } = size);
                      if (null != size.fileName) {
                        let fileName;
                        if ("" !== size.fileName) {
                          fileName = size.fileName;
                        }
                        size1.filename = fileName;
                        size1.playableDuration = size.duration;
                        size1.platform = c0(c2[16]).UploadPlatform.REACT_NATIVE;
                        size1.mimeType = str8;
                        const items = [size1];
                        closure_1_4(items);
                        const obj3 = { camera_view: constants.FULLY_EXPANDED, camera_preview_type };
                        const obj2 = camera_preview_type(c2[14]);
                        obj2.track(constants2.IN_APP_CAMERA_USED, obj3);
                        closure_1_3();
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
    }
  });
};
export const handleViewAllDialog = function handleViewAllDialog(arg0) {
  let require;
  ({
    channel: require,
    draftType: importDefault,
    uploadLimit: dependencyMap,
    includedUploadIds: _asyncToGenerator,
    onDismissKeyboard: UnsyncedUserSettingsStore,
    onRestoreKeyboard: ChannelStore,
    onSelectFiles: DraftType,
  } = arg0);
  obj = PlatformUtils;
  if (obj.isIOS()) {
    let resolved;
    const tmpResult = DeviceUtils;
    if (tmpResult.getSystemVersionMajor() >= 14) {
      resolved = Promise.resolve(true);
    }
    resolved.then((result) => {
      let found;
      let obj5;
      const tmp = result;
      if (tmp) {
        obj = _undefined2(_undefined3[14]);
        const obj4 = { type: constants2.NATIVE_MEDIA_PICKER, channel_id: null, guild_id: null };
        ({ id: obj2.channel_id, guild_id: obj2.guild_id } = found);
        obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj4);
        _undefined4();
        uploads = uploads.getUploads(found.id, _undefined2);
        found = uploads;
        let arr2 = uploads;
        if (null != c3) {
          found = uploads.filter((id) => closure_1_3.includes(id.id));
          arr2 = found;
        }
        let num = 1;
        if (_undefined3 > 1) {
          let length;
          const obj3 = _undefined(_undefined3[17]);
          if (obj3.isIOS()) {
            length = arr2.filter((origin) => origin.origin !== found(_undefined3[9]).UploadOrigin.IMAGE_PICKER).length;
          } else {
            length = arr2.length;
          }
          num = tmp15 - length;
        }
        const obj6 = {
          mediaType: "any",
          includeBase64: false,
          selectionLimit: num,
          selections: arr2.map((id) => id.id),
          includeExtra: !obj5.isIOS(),
          skipProcessing: true,
        };
        obj5 = _undefined(_undefined3[17]);
        const tmp2Result = _undefined2(_undefined3[15]);
        tmp2Result.launchImageLibrary(obj6, (didCancel) => {
          const id = didCancel;
          c5();
          if (!didCancel.didCancel) {
            let tmp2 = null;
            if (null == didCancel.errorCode) {
              if (0 !== found.length) {
                if (didCancel.replaceSelection) {
                  const item = found.forEach((origin) => {
                    assets = origin;
                    let tmp2 = origin.origin !== found(_undefined3[9]).UploadOrigin.IMAGE_PICKER;
                    if (!tmp2) {
                      assets = assets.assets;
                      let someResult;
                      if (assets != null) {
                        someResult = assets.some((item) => {
                          obj = assets(closure_2_2[11]);
                          return obj.doesImageMatchUpload(item, closure_0);
                        });
                      }
                      tmp2 = someResult;
                    }
                    if (!tmp2) {
                      obj = _undefined2(_undefined3[10]);
                      obj.remove(id.id, origin.id, closure_3_6.ChannelMessage);
                    }
                  });
                }
                const items = [];
                let assets = didCancel.assets;
                for (const item10018 of assets) {
                  if (null != item10018.uri) {
                    size = {
                      id: null,
                      uri: null,
                      originalUri: null,
                      mimeType: null,
                      width: null,
                      height: null,
                      filename: null,
                      playableDuration: null,
                      platform: IMAGE_PICKER(closure_3_2[16]).UploadPlatform.REACT_NATIVE,
                    };
                    ({
                      id: obj.id,
                      uri: obj.uri,
                      uri: obj.originalUri,
                      mimeType: obj.mimeType,
                      width: obj.width,
                      height: obj.height,
                      fileName: obj.filename,
                      duration: obj.playableDuration,
                    } = item10018);
                    let push = items.push;
                    let arr = push(size);
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
      }
    });
  }
  const obj3 = NativePermissionUtilsDefault;
  resolved = obj3.requestPermission(NativePermissionTypes.PHOTOS);
};
export { handleLimitedPickerDialog };
export const handleSelectGift = function handleSelectGift(analyticsLocations, chatInput, current2) {
  let DM_CHANNEL;
  let fn;
  let guild_id1;
  let id;
  let ref;
  _require = current2;
  const current = chatInput.current;
  const channelId = SelectedChannelStore.getChannelId();
  current.closeCustomKeyboard();
  const channel = ChannelStore.getChannel(channelId);
  const ComponentDispatch = require("ComponentDispatchUtils").ComponentDispatch;
  ComponentDispatch.dispatch(constants8.MEDIA_KEYBOARD_GIFT_SELECTED);
  obj = {
    section: constants6.CHANNEL_TEXT_AREA,
    object: constants3.BUTTON_ICON,
    objectType: constants4.GIFT,
    page: DM_CHANNEL,
  };
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (null != guild_id) {
    DM_CHANNEL = constants5.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = constants5.DM_CHANNEL;
  }
  let obj2 = { type: constants7.NITRO_GIFTING, channel_id: id, guild_id: guild_id1 };
  id = undefined;
  const track = AnalyticsUtilsDefault.track;
  const CHAT_INPUT_COMPONENT_VIEWED = constants2.CHAT_INPUT_COMPONENT_VIEWED;
  AnalyticsUtilsDefault;
  if (channel != null) {
    id = channel.id;
  }
  guild_id1 = undefined;
  if (channel != null) {
    guild_id1 = channel.guild_id;
  }
  track(CHAT_INPUT_COMPONENT_VIEWED, obj2);
  let recipientId;
  const openGiftModal = tmp3(10392).openGiftModal;
  require("utils/openGiftModal");
  if (null != channel) {
    if (channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
  }
  let current1;
  const obj3 = {
    recipientUserId: recipientId,
    analyticsLocation: obj,
    analyticsLocations,
    navigationParams: { presentation: "card" },
    onDismiss: fn,
  };
  if (current2 != null) {
    current1 = current2.current;
  }
  fn = undefined;
  if (null != current1) {
    fn = () => {
      obj = react_native;
      const obj2 = { ref };
      return obj.setAccessibilityFocus(obj2);
    };
  }
  openGiftModal(obj3);
};
export const handleSelectThread = function handleSelectThread(channel, chatInput) {
  let guild_id;
  obj = { type: constants7.START_THREAD, channel_id: channel.id, guild_id };
  guild_id = undefined;
  const track = AnalyticsUtilsDefault.track;
  const CHAT_INPUT_COMPONENT_VIEWED = unpackModuleId.CHAT_INPUT_COMPONENT_VIEWED;
  AnalyticsUtilsDefault;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  track(CHAT_INPUT_COMPONENT_VIEWED, obj);
  if (null != channel) {
    const current = chatInput.current;
    current.openSystemKeyboard();
    const obj2 = PlatformUtils;
    if (obj2.isIOS()) {
      const current2 = chatInput.current;
      current2.blur();
    }
    const tmp7Result = navigateToThreadCreation;
    const result = tmp7Result.navigateToThreadCreation(channel, "Plus Button");
  }
};
export { handleAttachFile };
export const mediaNodeToUploadItem = function mediaNodeToUploadItem(node, createdUsingInAppCamera) {
  const image = node.node.image;
  let uri = node.node.id;
  if (uri == null) {
    uri = image.uri;
  }
  size = {
    id: uri,
    origin: Upload.UploadOrigin.IMAGE_PICKER,
    uri: image.uri,
    originalUri: image.uri,
    mimeType: image.mimeType,
    width: image.width,
    height: image.height,
    filename: image.filename,
    playableDuration: image.playableDuration,
    platform: UploadPlatform.UploadPlatform.REACT_NATIVE,
  };
  let tmp = null != createdUsingInAppCamera;
  if (tmp) {
    tmp = { createdUsingInAppCamera };
    obj = { createdUsingInAppCamera };
  }
  const merged = Object.assign(tmp);
  return size;
};
export const cropResultToUploadItem = function cropResultToUploadItem(path) {
  let arr;
  let combined;
  let obj2;
  path = path.path;
  const path2 = path.path;
  if (path.startsWith("file://")) {
    combined = path2;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "file://" + path2;
  }
  const str = path.path;
  const parts = str.split("/");
  size = {
    id: obj2.uniqueId(path.path),
    uri: combined,
    originalUri: combined,
    mimeType: null,
    width: null,
    height: null,
    filename: arr,
    platform: UploadPlatform.UploadPlatform.REACT_NATIVE,
  };
  arr = parts.pop();
  ({ mime: obj.mimeType, width: obj.width, height: obj.height } = path);
  obj2 = _modDef12;
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
