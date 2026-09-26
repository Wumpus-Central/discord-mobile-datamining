// === Module 17159: FileUploadActionComponent ===

// Module 17159 (FileUploadActionComponent)
import util from "util" /* 1115 */;
import FileSizeUtils from "FileSizeUtils" /* 4731 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4792 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5060 */;
import TableRow from "TableRow" /* 5917 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import IconButton from "IconButton" /* 7363 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8608 */;
import AttachmentPreview from "AttachmentPreview" /* 9657 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 10098 */;
import FileUpIcon from "FileUpIcon" /* 15093 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const require = globalThis.__r;
const AttachmentPreviewDefault = AttachmentPreview;

require = fn;
function MainAreaCanUpload(arg0) {
  ({ minValues, maxValues } = arg0);
  ({ openFilePicker, types, maxSizeBytes } = arg0);
  const obj2 = { onPress: openFilePicker, icon: null, label: null, subLabel: null, start: true, end: true, arrow: true };
  const formatSizeResult = FileSizeUtils.formatSize(maxSizeBytes / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true, useSpace: true });
  obj2.icon = React7(TableRow.TableRow.Icon, { IconComponent: FileUpIcon.FileUpIcon });
  const intl = util.intl;
  obj2.label = intl.format(util.t["/2JwTv"], { maxValues });
  const obj3 = { IconComponent: FileUpIcon.FileUpIcon };
  obj2.subLabel = InteractionComponentUtils.getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult);
  return React7(TableRow.TableRow, obj2);
}
function MainAreaLimitReached() {
  const obj = { icon: React7(TableRow.TableRow.Icon, { IconComponent: CircleCheckIcon.CircleCheckIcon }), label: null, subLabel: null, disabled: true, start: true, end: true };
  const intl = util.intl;
  obj.label = intl.string(util.t["0PhgpK"]);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(util.t.HYg2Hn);
  return React7(TableRow.TableRow, obj);
}
function File(upload) {
  upload = upload.upload;
  const handleRemoveFile = upload.handleRemoveFile;
  const obj = { icon: null, label: null, trailing: null, start: true, end: true };
  const size = { uri: upload.item.uri, isImage: upload.isImage, isVideo: upload.isVideo, width: 32, height: 32, defaultPreview: null };
  const obj2 = { style: closure_11().defaultAttachmentIconWrapper, children: null };
  const tmp = closure_11();
  obj2.children = React7(AttachmentPreview.AttachmentIcon, { fileName: upload.filename });
  size.defaultPreview = React7(View, obj2);
  obj.icon = React7(AttachmentPreviewDefault, size);
  let filename = upload.filename;
  if (filename == null) {
    const intl = util.intl;
    filename = intl.string(util.t.ZMirp0);
  }
  obj.label = filename;
  const obj4 = {
    variant: "tertiary",
    size: "sm",
    icon: React7(XSmallIcon.XSmallIcon, { size: "sm" }),
    onPress() {
      return handleRemoveFile(upload.id);
    },
    accessibilityLabel: null
  };
  const intl2 = util.intl;
  obj4.accessibilityLabel = intl2.string(util.t.N86XcP);
  obj.trailing = React7(IconButton.IconButton, obj4);
  return React7(TableRow.TableRow, obj);
}
const View = fn(17).View;
const DraftType = fn(5200).DraftType;
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4836);
let closure_11 = createStyles.createStyles({ defaultAttachmentIconWrapper: { width: 32, alignItems: "center" } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/actions/FileUploadActionComponent.tsx");

export default function FileUploadActionComponent(maxValues) {
  maxValues = maxValues.maxValues;
  _require = maxValues;
  const componentStateContext = require("ComponentStateContext").useComponentStateContext();
  channelId(customId[18])(null != componentStateContext, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  channelId = componentStateContext.channelId;
  channelId(customId[18])(null != channelId, "FileUploadActionComponent must be used inside a channel");
  const modal = componentStateContext.modal;
  customId = undefined;
  if (modal != null) {
    customId = modal.customId;
  }
  channelId(customId[18])(null != customId, "FileUploadActionComponent requires modalCustomId from context");
  let obj = require("ComponentStateContext");
  let items = [showInvalidFileTypeAlert];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(customId[18])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
  let tmpResult = require("initialize");
  const fileTypeFiltering = require("FileTypeFiltering").useFileTypeFiltering(maxValues.fileTypes);
  const allowedExtensions = fileTypeFiltering.allowedExtensions;
  const validateFilenames = fileTypeFiltering.validateFilenames;
  showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
  const tmpResult5 = require("FileTypeFiltering");
  const tmpResult6 = require("UploadLimits");
  const effectiveUploadLimit = tmpResult6.getEffectiveUploadLimit(require("FileUtils").maxFileSize(stateFromStores.guild_id));
  const tmpResult7 = require("FileUtils");
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
  let tmp16;
  if (type === require("Server").ComponentType.LABEL) {
    tmp16 = first;
  }
  channelId(customId[18])(null != tmp16, "FileUploadActionComponent must be used within a label Component");
  _require = stateFromStores(function*(arg0) {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            closure_131_0 = closure_0;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            if (0 !== closure_0.length) {
              if (uploadIds.length + closure_0.length > closure_0) {
                let obj7 = channelId(customId[25]);
                let obj5 = { title: null, body: null };
                let intl = closure_0(customId[11]).intl;
                obj5.title = intl.string(closure_0(customId[11]).t.wOr6hB);
                let intl2 = closure_0(customId[11]).intl;
                let obj6 = { maxValues: tmp59 };
                obj5.body = intl2.formatToPlainString(closure_0(customId[11]).t.dy6viJ, obj6);
                c8 = 3;
                let obj8 = { value: obj7.show(obj5), done: true };
                return obj8;
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
          let obj9 = { value, done: true };
          return obj9;
        } else {
          closure_131_2 = value;
          if (closure_131_2 > c8) {
            let obj = closure_0(customId[27]);
            v1 = 0;
            let result = obj.showFileSizeExceededAlert(c8, closure_131_2);
            channelId.return();
            c8 = 3;
            let obj10 = { value: result, done: true };
            return obj10;
          } else {
            v1 = 0;
          }
        }
        if (channelId === undefined) {
          if (tmp.length > 0) {
            if (!validateFilenames(closure_131_0.map((item) => closure_1_0(arr[26]).getFileFromUploadItem(item).filename))) {
              c8 = 3;
              let obj11 = { value: v1(), done: true };
              return obj11;
            }
          }
          closure_131_3 = closure_131_0.map((item) => {
            const componentUploadId = closure_0(arr[12]).makeComponentUploadId(closure_1_2);
            const obj = closure_0(arr[12]);
            const obj3 = { channelId, id: componentUploadId, file: null, draftType: null, allowOptimization: false };
            const obj4 = {};
            const merged = Object.assign(item);
            obj4.id = componentUploadId;
            obj3.file = obj4;
            obj3.draftType = InteractionModal.InteractionModal;
            channelId(arr[28]).setFile(obj3);
            return componentUploadId;
          });
          let tmp40 = setUploadIds(uploadIds.concat(closure_131_3));
        } else {
          v1 = 1;
          closure_131_1 = tmp20;
          let obj4 = closure_0(customId[26]);
          c7 = 2;
          c8 = 1;
          let obj12 = { value: obj4.getFileSize(closure_131_1.uri), done: false };
          return obj12;
        }
      }
    }
  });
  const items1 = [uploadIds, maxValues, allowedExtensions.length, validateFilenames, setUploadIds, effectiveUploadLimit, showInvalidFileTypeAlert, customId, channelId];
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
        return InteractionModal(10099).hideMediaKeyboardActionSheet();
      },
      onRestoreKeyboard: effectiveUploadLimit,
      onSelectFiles(arg0) {
        callback(arg0);
      }
    };
    let result = InteractionModal(customId[30]).dismissGlobalKeyboard();
    if (mediaFilesAllowed) {
      const obj3 = {
        channel: stateFromStores,
        draftType: InteractionModal,
        extensions: allowedExtensions,
        uploadLimit: tmp3,
        disableWhenReachedLimit: true,
        includedUploadIds: uploadIds,
        onAttachPress() {
            obj = MediaKeyboardUtils;
            const merged = Object.assign(obj);
            obj.handleAttachFile({});
          },
        onPressCamera(previewType) {
            obj = MediaKeyboardUtils;
            const obj2 = {};
            const merged = Object.assign(obj);
            obj2.previewType = previewType;
            obj.handleCameraDialog(obj2);
          },
        onPressItem(item) {
            item = item.item;
            const result = InteractionModal(customId[29]).hideMediaKeyboardActionSheet();
            if (item.isIncluded) {
              const found = currentUploads.find((item) => InteractionModal(5448).doesImageMatchUpload(item.node.image, item));
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
            obj = MediaKeyboardUtils;
            const obj2 = {};
            const merged = Object.assign(obj);
            obj2.draftType = InteractionModal;
            obj2.includedUploadIds = uploadIds;
            obj.handleViewAllDialog(obj2);
          },
        onManageLimited() {
            obj = InteractionModal(10098);
            const result = obj.handleLimitedPickerDialog({ onDismissKeyboard: InteractionModal(10099).hideMediaKeyboardActionSheet, onRestoreKeyboard });
          },
        onClose: tmp4(customId[29]).hideMediaKeyboardActionSheet,
        onBack: tmp4(customId[29]).hideMediaKeyboardActionSheet
      };
      const result1 = tmp4(customId[29]).showMediaKeyboardActionSheet(obj3);
      const tmp4Result = tmp4(customId[29]);
    } else {
      const obj4 = {};
      let merged = Object.assign(obj);
      tmp4(customId[31]).handleAttachFile(obj4);
      const tmp4Result2 = tmp4(customId[31]);
    }
    let obj2 = InteractionModal(customId[30]);
    tmp3 = InteractionModal;
  }, items3);
  if (1 === maxValues) {
    if (1 === currentUploads.length) {
      let obj2 = { upload: currentUploads[0], handleRemoveFile: callback1 };
      let tmp21Result = uploadIds(File, obj2);
    }
    return tmp21Result;
  }
  let obj3 = { spacing: channelId(customId[34]).space.PX_12, children: null };
  if (uploadIds.length >= maxValues) {
    let tmp25 = uploadIds(callback1, {});
    let tmp24 = uploadIds;
  } else {
    let obj4 = { openFilePicker: callback2, minValues: maxValues.minValues, maxValues, types: fileTypeFiltering.typesFormattedString, maxSizeBytes: effectiveUploadLimit };
    tmp24 = uploadIds;
    tmp25 = uploadIds(callback, obj4);
  }
  const items4 = [tmp25, ];
  let tmp24Result = currentUploads.length > 0;
  if (tmp24Result) {
    let obj5 = { hasIcons: true, children: currentUploads.map((upload) => React7(File, { upload, handleRemoveFile: callback1 }, upload.id)) };
    tmp24Result = tmp24(tmp(tmp2[35]).TableRowGroup, obj5);
  }
  items4[1] = tmp24Result;
  obj3.children = items4;
  tmp21Result = setUploadIds(tmp(tmp2[33]).Stack, obj3);
  const tmpResult8 = require("useFileUploadComponentState");
};