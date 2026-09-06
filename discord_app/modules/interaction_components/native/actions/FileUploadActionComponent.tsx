// === Module 17395: FileUploadActionComponent ===

// Module 17395 (FileUploadActionComponent)
import util from "util" /* 1114 */;
import FileSizeUtils from "FileSizeUtils" /* 4457 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4520 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 4785 */;
import TableRow from "TableRow" /* 5605 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import IconButton from "IconButton" /* 8097 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9307 */;
import AttachmentPreview from "AttachmentPreview" /* 10196 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10635 */;
import FileUpIcon from "FileUpIcon" /* 15538 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const AttachmentPreviewDefault = AttachmentPreview;

require = fn;
function MainAreaCanUpload(arg0) {
  ({ minValues, maxValues } = arg0);
  ({ openFilePicker, types, maxSizeBytes } = arg0);
  let obj = { onPress: openFilePicker, icon: null, label: null, subLabel: null, start: true, end: true, arrow: true };
  obj = { IconComponent: FileUpIcon.FileUpIcon };
  obj.icon = React7(TableRow.TableRow.Icon, obj);
  const intl = util.intl;
  obj.label = intl.format(util.t["/2JwTv"], { maxValues });
  const formatSizeResult = obj.formatSize(maxSizeBytes / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true, useSpace: true });
  obj.subLabel = InteractionComponentUtils.getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult);
  return React7(TableRow.TableRow, obj);
}
function MainAreaLimitReached() {
  let obj = { icon: null, label: null, subLabel: null, disabled: true, start: true, end: true };
  obj = { IconComponent: CircleCheckIcon.CircleCheckIcon };
  obj.icon = React7(TableRow.TableRow.Icon, obj);
  const intl = util.intl;
  obj.label = intl.string(util.t["0PhgpK"]);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(util.t.HYg2Hn);
  return React7(TableRow.TableRow, obj);
}
function File(upload) {
  upload = upload.upload;
  const handleRemoveFile = upload.handleRemoveFile;
  let obj = { icon: null, label: null, trailing: null, start: true, end: true };
  const size = { uri: upload.item.uri, isImage: upload.isImage, isVideo: upload.isVideo, width: 32, height: 32, defaultPreview: null };
  obj = { style: closure_11().defaultAttachmentIconWrapper, children: null };
  const tmp = closure_11();
  obj = { fileName: upload.filename };
  obj.children = React7(AttachmentPreview.AttachmentIcon, obj);
  size.defaultPreview = React7(View, obj);
  obj.icon = React7(AttachmentPreviewDefault, size);
  let filename = upload.filename;
  if (filename == null) {
    const intl = util.intl;
    filename = intl.string(util.t.ZMirp0);
  }
  obj.label = filename;
  const obj1 = {
    variant: "tertiary",
    size: "sm",
    icon: React7(XSmallIcon.XSmallIcon, { size: "sm" }),
    onPress() {
      return handleRemoveFile(upload.id);
    },
    accessibilityLabel: null
  };
  const intl2 = util.intl;
  obj1.accessibilityLabel = intl2.string(util.t.N86XcP);
  obj.trailing = React7(IconButton.IconButton, obj1);
  return React7(TableRow.TableRow, obj);
}
const View = fn(17).View;
const DraftType = fn(4901).DraftType;
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ defaultAttachmentIconWrapper: { width: 32, alignItems: "center" } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/actions/FileUploadActionComponent.tsx");

export default function FileUploadActionComponent(maxValues) {
  maxValues = maxValues.maxValues;
  _require = maxValues;
  let obj = require("ComponentStateContext");
  const componentStateContext = obj.useComponentStateContext();
  channelId(customId[18])(null != componentStateContext, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  channelId = componentStateContext.channelId;
  channelId(customId[18])(null != channelId, "FileUploadActionComponent must be used inside a channel");
  const modal = componentStateContext.modal;
  customId = undefined;
  if (modal != null) {
    customId = modal.customId;
  }
  channelId(customId[18])(null != customId, "FileUploadActionComponent requires modalCustomId from context");
  let tmpResult = tmp(tmp2[19]);
  let items = [showInvalidFileTypeAlert];
  const stateFromStores = tmpResult.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(customId[18])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
  tmpResult = tmp(tmp2[20]);
  const fileTypeFiltering = tmpResult.useFileTypeFiltering(maxValues.fileTypes);
  const allowedExtensions = fileTypeFiltering.allowedExtensions;
  const validateFilenames = fileTypeFiltering.validateFilenames;
  showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
  const kestrelConfig = require("KestrelExperiment").getKestrelConfig({ location: "native.FileUploadActionComponent" });
  const tmpResult1 = require("KestrelExperiment");
  const tmpResult2 = require("KestrelExperiment");
  const effectiveKestrelLimit = tmpResult2.getEffectiveKestrelLimit(kestrelConfig, require("FileUtils").maxFileSize(stateFromStores.guild_id));
  const tmpResult3 = require("FileUtils");
  const fileUploadComponentState = require("useFileUploadComponentState").useFileUploadComponentState(maxValues);
  const uploadIds = fileUploadComponentState.uploadIds;
  const setUploadIds = fileUploadComponentState.setUploadIds;
  const currentUploads = fileUploadComponentState.currentUploads;
  const parents = componentStateContext.getParents(maxValues);
  let first;
  if (parents != null) {
    first = parents[0];
  }
  let type;
  if (first != null) {
    type = first.type;
  }
  let tmp17;
  if (type === require("Server").ComponentType.LABEL) {
    tmp17 = first;
  }
  channelId(customId[18])(null != tmp17, "FileUploadActionComponent must be used within a label Component");
  _require = stateFromStores(function*(arg0) {
    if (c8 === 2) {
      c8 = 3;
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
      while (true) {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp2;
            closure_131_0 = closure_0;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            if (0 !== closure_0.length) {
              if (uploadIds.length + closure_0.length > closure_0) {
                let obj6 = channelId(customId[25]);
                let obj1 = { title: null, body: null };
                let intl = closure_0(customId[11]).intl;
                obj1.title = intl.string(closure_0(customId[11]).t.wOr6hB);
                let intl2 = closure_0(customId[11]).intl;
                let obj2 = { maxValues: tmp59 };
                obj1.body = intl2.formatToPlainString(closure_0(customId[11]).t.dy6viJ, obj2);
                c8 = 3;
                let obj3 = { value: obj6.show(obj1), done: true };
                return obj3;
              } else {
                channelId = closure_0[Symbol.iterator]();
              }
            }
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp5) {
          let v1 = 0;
          channelId.return();
          throw validateFilenames;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          v1 = 0;
          channelId.return();
          c8 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_131_2 = value;
          if (closure_131_2 > c8) {
            obj = closure_0(customId[27]);
            v1 = 0;
            let result = obj.showFileSizeExceededAlert(c8, closure_131_2);
            channelId.return();
            c8 = 3;
            let obj5 = { value: result, done: true };
            return obj5;
          } else {
            v1 = 0;
          }
        }
        if (channelId === undefined) {
          if (tmp.length > 0) {
            if (!validateFilenames(closure_131_0.map((item) => closure_1_0(arr[26]).getFileFromUploadItem(item).filename))) {
              c8 = 3;
              obj6 = { value: v1(), done: true };
              return obj6;
            }
          }
          closure_131_3 = closure_131_0.map((item) => {
            let obj = closure_0(arr[12]);
            const componentUploadId = obj.makeComponentUploadId(closure_1_2);
            obj = { channelId, id: componentUploadId, file: null, draftType: null, allowOptimization: false };
            obj = {};
            const merged = Object.assign(item);
            obj.id = componentUploadId;
            obj.file = obj;
            obj.draftType = InteractionModal.InteractionModal;
            channelId(arr[28]).setFile(obj);
            return componentUploadId;
          });
          let tmp40 = setUploadIds(uploadIds.concat(closure_131_3));
        } else {
          v1 = 1;
          closure_131_1 = tmp20;
          obj3 = closure_0(customId[26]);
          c7 = 2;
          c8 = 1;
          let obj7 = { value: obj3.getFileSize(closure_131_1.uri), done: false };
          return obj7;
        }
      }
    }
  });
  const items1 = [uploadIds, maxValues, allowedExtensions.length, validateFilenames, setUploadIds, effectiveKestrelLimit, showInvalidFileTypeAlert, customId, channelId];
  const callback = allowedExtensions.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [channelId, uploadIds, setUploadIds];
  const callback1 = allowedExtensions.useCallback((arg0) => {
    closure_0 = arg0;
    UploadAttachmentActionCreatorsDefault.remove(channelId, arg0, DraftType.InteractionModal);
    setUploadIds(uploadIds.filter((item) => item !== closure_0));
  }, items2);
  const items3 = [stateFromStores, allowedExtensions, maxValues, mediaFilesAllowed, callback, uploadIds, currentUploads, callback1];
  const callback2 = allowedExtensions.useCallback(() => {
    const InteractionModal = mediaFilesAllowed.InteractionModal;
    let obj = {
      channel: stateFromStores,
      extensions: allowedExtensions,
      uploadLimit: InteractionModal,
      onDismissKeyboard() {
        return InteractionModal(10636).hideMediaKeyboardActionSheet();
      },
      onRestoreKeyboard: effectiveKestrelLimit,
      onSelectFiles(arg0) {
        callback(arg0);
      }
    };
    let result = InteractionModal(customId[30]).dismissGlobalKeyboard();
    if (mediaFilesAllowed) {
      let tmp4Result = tmp4(customId[29]);
      obj = {
        channel: stateFromStores,
        draftType: InteractionModal,
        extensions: allowedExtensions,
        uploadLimit: tmp3,
        disableWhenReachedLimit: true,
        includedUploadIds: uploadIds,
        onAttachPress() {
            obj = {};
            const merged = Object.assign(obj);
            obj.handleAttachFile(obj);
          },
        onPressCamera(previewType) {
            obj = {};
            const merged = Object.assign(obj);
            obj.previewType = previewType;
            obj.handleCameraDialog(obj);
          },
        onPressItem(item) {
            item = item.item;
            const result = InteractionModal(customId[29]).hideMediaKeyboardActionSheet();
            if (item.isIncluded) {
              const found = currentUploads.find((item) => InteractionModal(5136).doesImageMatchUpload(item.node.image, item));
              if (null != found) {
                callback1(found.id);
              }
            } else {
              const items = [InteractionModal(customId[31]).mediaNodeToUploadItem(item)];
              callback(items);
              const tmpResult = InteractionModal(customId[31]);
            }
            obj = InteractionModal(customId[29]);
          },
        onViewAll() {
            obj = {};
            const merged = Object.assign(obj);
            obj.draftType = InteractionModal;
            obj.includedUploadIds = uploadIds;
            obj.handleViewAllDialog(obj);
          },
        onManageLimited() {
            InteractionModal(10635);
            obj = { onDismissKeyboard: InteractionModal(10636).hideMediaKeyboardActionSheet, onRestoreKeyboard };
            const result = obj.handleLimitedPickerDialog(obj);
          },
        onClose: tmp4(customId[29]).hideMediaKeyboardActionSheet,
        onBack: tmp4(customId[29]).hideMediaKeyboardActionSheet
      };
      const result1 = tmp4Result.showMediaKeyboardActionSheet(obj);
    } else {
      tmp4Result = tmp4(customId[31]);
      obj = {};
      let merged = Object.assign(obj);
      tmp4Result.handleAttachFile(obj);
    }
    const obj2 = InteractionModal(customId[30]);
    tmp3 = InteractionModal;
  }, items3);
  if (1 === maxValues) {
    if (1 === currentUploads.length) {
      obj = { upload: currentUploads[0], handleRemoveFile: callback1 };
      let tmp22Result = uploadIds(File, obj);
    }
    return tmp22Result;
  }
  obj = { spacing: tmp3(tmp2[34]).space.PX_12, children: null };
  if (uploadIds.length >= maxValues) {
    let tmp26 = uploadIds(callback1, {});
    let tmp25 = uploadIds;
  } else {
    let obj1 = { openFilePicker: callback2, minValues: maxValues.minValues, maxValues, types: fileTypeFiltering.typesFormattedString, maxSizeBytes: effectiveKestrelLimit };
    tmp25 = uploadIds;
    tmp26 = uploadIds(callback, obj1);
  }
  const items4 = [tmp26, ];
  let tmp25Result = currentUploads.length > 0;
  if (tmp25Result) {
    let obj2 = { hasIcons: true, children: currentUploads.map((upload) => React7(File, { upload, handleRemoveFile: callback1 }, upload.id)) };
    tmp25Result = tmp25(tmp(tmp2[35]).TableRowGroup, obj2);
  }
  items4[1] = tmp25Result;
  obj.children = items4;
  tmp22Result = setUploadIds(tmp(tmp2[33]).Stack, obj);
  const tmpResult4 = require("useFileUploadComponentState");
};