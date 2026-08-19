// discord_app/modules/interaction_components/native/actions/FileUploadActionComponent.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import formatSize from "../../../../utils/FileSizeUtils.tsx";
import CircleCheckIcon from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import flattenComponents from "../../InteractionComponentUtils.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import FileUpIcon from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import { DraftType } from "../../../../stores/DraftStore.tsx";
import { NOOP } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function MainAreaCanUpload(arg0) {
  ({ minValues, maxValues } = arg0);
  ({ openFilePicker, types, maxSizeBytes } = arg0);
  const obj = { IconComponent: FileUpIcon.FileUpIcon };
  obj[1] = callback(TableRowInner.TableRow.Icon, obj);
  const intl = getSystemLocale.intl;
  obj[2] = intl.format(getSystemLocale.t["/2JwTv"], { maxValues });
  const formatSizeResult = obj.formatSize(maxSizeBytes / formatSize.BYTE_IN_KB, { useKibibytes: true, useSpace: true });
  obj[3] = flattenComponents.getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult);
  return callback(TableRowInner.TableRow, obj);
}
function MainAreaLimitReached() {
  const obj = { IconComponent: CircleCheckIcon.CircleCheckIcon };
  obj[0] = callback(TableRowInner.TableRow.Icon, obj);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["0PhgpK"]);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.HYg2Hn);
  return callback(TableRowInner.TableRow, obj);
}
function File(upload) {
  upload = upload.upload;
  const handleRemoveFile = upload.handleRemoveFile;
  const obj = { style: callback2().defaultAttachmentIconWrapper, children: null };
  const tmp = callback2();
  obj[1] = callback(upload(10139).AttachmentIcon, { fileName: upload.filename });
  obj[5] = callback(View, obj);
  obj[0] = callback(handleRemoveFile(10139), obj);
  let filename = upload.filename;
  if (filename == null) {
    const intl = tmp3(1236).intl;
    filename = intl.string(tmp3(1236).t.ZMirp0);
  }
  obj[1] = filename;
  const obj2 = {
    variant: "tertiary",
    size: "sm",
    icon: callback(upload(6368).XSmallIcon, { size: "sm" }),
    onPress() {
      return handleRemoveFile(upload.id);
    },
    accessibilityLabel: null
  };
  const intl2 = tmp3(1236).intl;
  obj2[4] = intl2.string(upload(1236).t.N86XcP);
  obj[2] = callback(upload(8035).IconButton, obj2);
  return callback(upload(6291).TableRow, obj);
}
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ defaultAttachmentIconWrapper: { width: 32, alignItems: "center" } });
let result = require("obj132").fileFinishedImporting("modules/interaction_components/native/actions/FileUploadActionComponent.tsx");

export default function FileUploadActionComponent(maxValues) {
  maxValues = maxValues.maxValues;
  let _require = maxValues;
  let obj = _require(customId[17]);
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
  const stateFromStores = tmpResult.useStateFromStores(items, () => showInvalidFileTypeAlert.getChannel(channelId));
  channelId(customId[18])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
  tmpResult = tmp(tmp2[20]);
  const fileTypeFiltering = tmpResult.useFileTypeFiltering(maxValues.fileTypes);
  const allowedExtensions = fileTypeFiltering.allowedExtensions;
  const validateFilenames = fileTypeFiltering.validateFilenames;
  showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
  const kestrelConfig = _require(customId[21]).getKestrelConfig({ location: "native.FileUploadActionComponent" });
  const tmpResult1 = _require(customId[21]);
  const tmpResult2 = _require(customId[21]);
  const effectiveKestrelLimit = tmpResult2.getEffectiveKestrelLimit(kestrelConfig, _require(customId[22]).maxFileSize(stateFromStores.guild_id));
  const tmpResult3 = _require(customId[22]);
  const fileUploadComponentState = _require(customId[23]).useFileUploadComponentState(maxValues);
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
  if (type === _require(customId[24]).ComponentType.LABEL) {
    tmp17 = first;
  }
  channelId(customId[18])(null != tmp17, "FileUploadActionComponent must be used within a label Component");
  _require = stateFromStores((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp;
              let tmp20;
              closure_2 = undefined;
              c3 = undefined;
              if (0 !== lib.length) {
                if (uploadIds.length + lib.length > lib) {
                  let obj6 = channelId(customId[25]);
                  obj1 = { title: null, body: null };
                  let intl = lib(customId[11]).intl;
                  obj1[0] = intl.string(lib(customId[11]).t.wOr6hB);
                  let intl2 = lib(customId[11]).intl;
                  let obj2 = { maxValues: null };
                  obj2[0] = tmp60;
                  obj1[1] = intl2.formatToPlainString(lib(customId[11]).t.dy6viJ, obj2);
                  c8 = 3;
                  let obj3 = { value: null, done: true };
                  obj3[0] = obj6.show(obj1);
                  return obj3;
                } else {
                  closure_2 = lib;
                  tmp20 = lib[Symbol.iterator]();
                }
              }
              c8 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (1 === tmp5) {
            let v0 = 0;
            tmp20.return();
            throw closure_5;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 0;
            tmp20.return();
            c8 = 3;
            let obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_2 = arg1;
            if (closure_2 > c8) {
              obj = lib(customId[27]);
              v0 = 0;
              let result = obj.showFileSizeExceededAlert(c8, closure_1_2);
              tmp20.return();
              c8 = 3;
              let obj5 = { value: null, done: true };
              obj5[0] = result;
              return obj5;
            } else {
              v0 = 0;
            }
          }
          if (tmp20 === undefined) {
            if (allowedExtensions.length > 0) {
              if (!validateFilenames(lib.map((item, index) => callback(4838).getFileFromUploadItem(item).filename))) {
                c8 = 3;
                obj6 = { value: null, done: true };
                obj6[0] = v0();
                return obj6;
              }
            }
            closure_3 = lib.map((item, index) => {
              let obj = callback(4805);
              const componentUploadId = obj.makeComponentUploadId(dependencyMap);
              obj = {};
              const merged = Object.assign(item);
              obj.id = componentUploadId;
              obj[2] = obj;
              obj[3] = InteractionModal.InteractionModal;
              callback2(8466).setFile(obj);
              return componentUploadId;
            });
            let tmp40 = setUploadIds(uploadIds.concat(closure_3));
          } else {
            v0 = 1;
            obj3 = lib(customId[26]);
            c7 = 2;
            c8 = 1;
            let obj7 = { value: null, done: false };
            obj7[0] = obj3.getFileSize(tmp20.uri);
            return obj7;
          }
        }
      }
    })();
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
    channelId(customId[28]).remove(channelId, arg0, mediaFilesAllowed.InteractionModal);
    setUploadIds(uploadIds.filter((item, index) => item !== closure_0));
  }, items2);
  const items3 = [stateFromStores, allowedExtensions, maxValues, mediaFilesAllowed, callback, uploadIds, currentUploads, callback1];
  const callback2 = allowedExtensions.useCallback(() => {
    const InteractionModal = mediaFilesAllowed.InteractionModal;
    let obj = {
      channel: stateFromStores,
      extensions: allowedExtensions,
      uploadLimit: InteractionModal,
      onDismissKeyboard() {
        return InteractionModal(10270).hideMediaKeyboardActionSheet();
      },
      onRestoreKeyboard: effectiveKestrelLimit,
      onSelectFiles(arg0) {
        callback(arg0);
      }
    };
    let result = callback(customId[30]).dismissGlobalKeyboard();
    if (mediaFilesAllowed) {
      let tmp4Result = callback(customId[29]);
      obj = { channel: null, draftType: null, extensions: null, uploadLimit: null, disableWhenReachedLimit: true, includedUploadIds: null, onAttachPress: null, onPressCamera: null, onPressItem: null, onViewAll: null, onManageLimited: null, onClose: null, onBack: null };
      obj[0] = stateFromStores;
      obj[1] = InteractionModal;
      obj[2] = allowedExtensions;
      obj[3] = tmp3;
      obj[5] = uploadIds;
      obj[6] = function onAttachPress() {
        InteractionModal(customId[31]);
        obj = {};
        const merged = Object.assign(obj);
        obj.handleAttachFile(obj);
      };
      obj[7] = function onPressCamera(previewType) {
        InteractionModal(customId[31]);
        obj = {};
        const merged = Object.assign(obj);
        obj.previewType = previewType;
        obj.handleCameraDialog(obj);
      };
      obj[8] = function onPressItem(item) {
        item = item.item;
        const result = InteractionModal(customId[29]).hideMediaKeyboardActionSheet();
        if (item.isIncluded) {
          const found = closure_11.find((item, index) => item(closure_1_2[32]).doesImageMatchUpload(item.node.image, item));
          if (null != found) {
            callback2(found.id);
          }
        } else {
          const items = [InteractionModal(customId[31]).mediaNodeToUploadItem(item)];
          callback(items);
          const tmpResult = InteractionModal(customId[31]);
        }
        obj = InteractionModal(customId[29]);
      };
      obj[9] = function onViewAll() {
        InteractionModal(customId[31]);
        obj = {};
        const merged = Object.assign(obj);
        obj.draftType = InteractionModal;
        obj.includedUploadIds = uploadIds;
        obj.handleViewAllDialog(obj);
      };
      obj[10] = function onManageLimited() {
        InteractionModal(10269);
        obj = { onDismissKeyboard: InteractionModal(10270).hideMediaKeyboardActionSheet, onRestoreKeyboard: closure_8 };
        const result = obj.handleLimitedPickerDialog(obj);
      };
      obj[11] = callback(customId[29]).hideMediaKeyboardActionSheet;
      obj[12] = callback(customId[29]).hideMediaKeyboardActionSheet;
      const result1 = tmp4Result.showMediaKeyboardActionSheet(obj);
    } else {
      tmp4Result = callback(customId[31]);
      obj = {};
      let merged = Object.assign(obj);
      tmp4Result.handleAttachFile(obj);
    }
    const obj2 = callback(customId[30]);
    tmp3 = InteractionModal;
  }, items3);
  if (1 === maxValues) {
    if (1 === currentUploads.length) {
      obj = { upload: null, handleRemoveFile: null };
      obj[0] = currentUploads[0];
      obj[1] = callback1;
      let tmp22Result = uploadIds(File, obj);
    }
    return tmp22Result;
  }
  obj = { spacing: tmp3(tmp2[34]).space.PX_12, children: null };
  if (uploadIds.length >= maxValues) {
    let tmp26 = uploadIds(callback1, {});
    let tmp25 = uploadIds;
  } else {
    obj1 = { openFilePicker: null, minValues: null, maxValues: null, types: null, maxSizeBytes: null };
    obj1[0] = callback2;
    obj1[1] = maxValues.minValues;
    obj1[2] = maxValues;
    obj1[3] = fileTypeFiltering.typesFormattedString;
    obj1[4] = effectiveKestrelLimit;
    tmp25 = uploadIds;
    tmp26 = uploadIds(callback, obj1);
  }
  const items4 = [tmp26, ];
  let tmp25Result = currentUploads.length > 0;
  if (tmp25Result) {
    let obj2 = { hasIcons: true, children: null };
    obj2[1] = currentUploads.map((item, index) => uploadIds(File, { upload: item, handleRemoveFile: callback1 }, item.id));
    tmp25Result = tmp25(tmp(tmp2[35]).TableRowGroup, obj2);
  }
  items4[1] = tmp25Result;
  obj[1] = items4;
  tmp22Result = setUploadIds(tmp(tmp2[33]).Stack, obj);
  const tmpResult4 = _require(customId[23]);
};