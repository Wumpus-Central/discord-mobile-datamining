// === Module 17852: FileUploadActionComponent ===

// Module 17852 (FileUploadActionComponent)
import c from "c" /* 576 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4992 */;
import XSmallIcon from "XSmallIcon" /* 6210 */;
import IconButton from "IconButton" /* 8106 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9201 */;
import MediaKeyboardUtils from "MediaKeyboardUtils" /* 9974 */;
import AttachmentPreview from "AttachmentPreview" /* 11884 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;

const require = globalThis.__r;
const AttachmentPreviewDefault = AttachmentPreview;

const util = obj(1126);
const InteractionComponentUtils = obj(5432);
const FileSizeUtils = obj(5636);
const TableRow = obj(6184);
const FileUpIcon = obj(15642);
require = fn;
const View = fn(17).View;
const DraftType = fn(7232).DraftType;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let closure_11 = createStyles.createStyles({ defaultAttachmentIconWrapper: { width: 32, alignItems: "center" } });
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainAreaCanUpload(arg0) {
  let obj = require;
  let fileUploadComponentSubtitle = dependencyMap;
  const cResult = c.c(9);
  ({ openFilePicker, minValues, maxValues, types, maxSizeBytes } = arg0);
  if (cResult[0] === maxSizeBytes) {
    if (cResult[1] === maxValues) {
      if (cResult[2] === minValues) {
        if (cResult[3] === openFilePicker) {
          if (cResult[4] === types) {
            return cResult[5];
          }
        }
      }
    }
  }
  const objResult = FileSizeUtils;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { IconComponent: FileUpIcon.FileUpIcon };
    const tmp6 = options(TableRow.TableRow.Icon, obj3);
    cResult[6] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[6];
  }
  if (cResult[7] !== maxValues) {
    const intl = util.intl;
    const obj4 = { maxValues };
    const formatResult = intl.format(util.t["/2JwTv"], obj4);
    cResult[7] = maxValues;
    cResult[8] = formatResult;
    let tmp7 = formatResult;
  } else {
    tmp7 = cResult[8];
  }
  const obj5 = { onPress: openFilePicker, icon: tmp4, label: tmp7, subLabel: null, start: true, end: true, arrow: true };
  obj = InteractionComponentUtils;
  fileUploadComponentSubtitle = obj.getFileUploadComponentSubtitle(minValues, maxValues, types, FileSizeUtils.formatSize(maxSizeBytes / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true, useSpace: true }));
  obj5.subLabel = fileUploadComponentSubtitle;
  const formatSizeResult = FileSizeUtils.formatSize(maxSizeBytes / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true, useSpace: true });
  cResult[0] = maxSizeBytes;
  cResult[1] = maxValues;
  cResult[2] = minValues;
  cResult[3] = openFilePicker;
  cResult[4] = types;
  cResult[5] = options(TableRow.TableRow, obj5);
  const tmp9 = options(TableRow.TableRow, obj5);
}) : (function MainAreaCanUpload(arg0) {
  ({ minValues, maxValues } = arg0);
  ({ openFilePicker, types, maxSizeBytes } = arg0);
  const obj2 = { onPress: openFilePicker, icon: null, label: null, subLabel: null, start: true, end: true, arrow: true };
  const formatSizeResult = FileSizeUtils.formatSize(maxSizeBytes / FileSizeUtils.BYTE_IN_KB, { useKibibytes: true, useSpace: true });
  obj2.icon = options(TableRow.TableRow.Icon, { IconComponent: FileUpIcon.FileUpIcon });
  const intl = util.intl;
  obj2.label = intl.format(util.t["/2JwTv"], { maxValues });
  const obj3 = { IconComponent: FileUpIcon.FileUpIcon };
  obj2.subLabel = InteractionComponentUtils.getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult);
  return options(TableRow.TableRow, obj2);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainAreaLimitReached() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { icon: null, label: null, subLabel: null, disabled: true, start: true, end: true };
    const obj3 = { IconComponent: CircleCheckIcon.CircleCheckIcon };
    obj2.icon = options(TableRow.TableRow.Icon, obj3);
    const intl = util.intl;
    obj2.label = intl.string(util.t["0PhgpK"]);
    const intl2 = util.intl;
    obj2.subLabel = intl2.string(util.t.HYg2Hn);
    const tmp6 = options(TableRow.TableRow, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function MainAreaLimitReached() {
  const obj = { icon: options(TableRow.TableRow.Icon, { IconComponent: CircleCheckIcon.CircleCheckIcon }), label: null, subLabel: null, disabled: true, start: true, end: true };
  const intl = util.intl;
  obj.label = intl.string(util.t["0PhgpK"]);
  const intl2 = util.intl;
  obj.subLabel = intl2.string(util.t.HYg2Hn);
  return options(TableRow.TableRow, obj);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function File(upload) {
  const cResult = c.c(23);
  upload = upload.upload;
  const handleRemoveFile = upload.handleRemoveFile;
  const tmp4 = closure_11();
  const item = upload.item;
  if (cResult[0] !== upload.filename) {
    const obj2 = { fileName: upload.filename };
    const tmp7 = options(AttachmentPreview.AttachmentIcon, obj2);
    cResult[0] = upload.filename;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.defaultAttachmentIconWrapper) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === item.uri) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === upload.isImage) {
          if (cResult[8] === upload.isVideo) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] !== upload.filename) {
            let filename = upload.filename;
            if (filename == null) {
              const intl = util.intl;
              filename = intl.string(util.t.ZMirp0);
            }
            cResult[10] = upload.filename;
            cResult[11] = filename;
            let tmp14 = filename;
          } else {
            tmp14 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp19 = options(XSmallIcon.XSmallIcon, { size: "sm" });
            cResult[12] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === handleRemoveFile) {
            if (cResult[14] === upload.id) {
              let tmp20 = cResult[15];
            }
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = util.intl;
              const stringResult = intl2.string(util.t.N86XcP);
              cResult[16] = stringResult;
              let tmp21 = stringResult;
            } else {
              tmp21 = cResult[16];
            }
            if (cResult[17] !== tmp20) {
              const obj3 = { variant: "tertiary", size: "sm", icon: tmp17, onPress: tmp20, accessibilityLabel: tmp21 };
              const tmp25 = options(IconButton.IconButton, obj3);
              cResult[17] = tmp20;
              cResult[18] = tmp25;
              let tmp23 = tmp25;
            } else {
              tmp23 = cResult[18];
            }
            if (cResult[19] === tmp10) {
              if (cResult[20] === tmp14) {
                if (cResult[21] === tmp23) {
                  let tmp26 = cResult[22];
                }
                return tmp26;
              }
            }
            const obj5 = { icon: tmp10, label: tmp14, trailing: tmp23, start: true, end: true };
            const tmp28 = options(TableRow.TableRow, obj5);
            cResult[19] = tmp10;
            cResult[20] = tmp14;
            cResult[21] = tmp23;
            cResult[22] = tmp28;
            tmp26 = tmp28;
          }
          const fn = function h() {
            return handleRemoveFile(upload.id);
          };
          cResult[13] = handleRemoveFile;
          cResult[14] = upload.id;
          cResult[15] = fn;
          tmp20 = fn;
        }
      }
    }
    const size = { uri: item.uri, isImage: null, isVideo: null, width: 32, height: 32, defaultPreview: null };
    ({ isImage: obj4.isImage, isVideo: obj4.isVideo } = upload);
    size.defaultPreview = tmp8;
    const tmp13 = options(AttachmentPreviewDefault, size);
    cResult[5] = item.uri;
    cResult[6] = tmp8;
    cResult[7] = upload.isImage;
    cResult[8] = upload.isVideo;
    cResult[9] = tmp13;
    tmp10 = tmp13;
  }
  const tmp9 = options(View, { style: tmp4.defaultAttachmentIconWrapper, children: tmp5 });
  cResult[2] = tmp4.defaultAttachmentIconWrapper;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj6 = { style: tmp4.defaultAttachmentIconWrapper, children: tmp5 };
}) : (function File(upload) {
  upload = upload.upload;
  const handleRemoveFile = upload.handleRemoveFile;
  const obj = { icon: null, label: null, trailing: null, start: true, end: true };
  const size = { uri: upload.item.uri, isImage: upload.isImage, isVideo: upload.isVideo, width: 32, height: 32, defaultPreview: null };
  const obj2 = { style: closure_11().defaultAttachmentIconWrapper, children: null };
  const tmp = closure_11();
  obj2.children = options(AttachmentPreview.AttachmentIcon, { fileName: upload.filename });
  size.defaultPreview = options(View, obj2);
  obj.icon = options(AttachmentPreviewDefault, size);
  let filename = upload.filename;
  if (filename == null) {
    const intl = util.intl;
    filename = intl.string(util.t.ZMirp0);
  }
  obj.label = filename;
  const obj4 = {
    variant: "tertiary",
    size: "sm",
    icon: options(XSmallIcon.XSmallIcon, { size: "sm" }),
    onPress() {
      return handleRemoveFile(upload.id);
    },
    accessibilityLabel: null
  };
  const intl2 = util.intl;
  obj4.accessibilityLabel = intl2.string(util.t.N86XcP);
  obj.trailing = options(IconButton.IconButton, obj4);
  return options(TableRow.TableRow, obj);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/actions/FileUploadActionComponent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FileUploadActionComponent(fileTypes) {
  const cResult = require("c").c(44);
  ({ minValues, maxValues } = fileTypes);
  _require = maxValues;
  let obj = require("c");
  const componentStateContext = require("ComponentStateContext").useComponentStateContext();
  channelId(customId[20])(null != componentStateContext, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  channelId = componentStateContext.channelId;
  channelId(customId[20])(null != channelId, "FileUploadActionComponent must be used inside a channel");
  const modal = componentStateContext.modal;
  customId = undefined;
  if (modal != null) {
    customId = modal.customId;
  }
  channelId(customId[20])(null != customId, "FileUploadActionComponent requires modalCustomId from context");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [showInvalidFileTypeAlert];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class A {
      constructor() {
        return closure_6.getChannel(channelId);
      }
    }
    cResult[1] = channelId;
    cResult[2] = A;
  } else {
    class A {
      constructor() {
        return closure_6.getChannel(channelId);
      }
    }
  }
  let obj2 = require("ComponentStateContext");
  const stateFromStores = require("initialize").useStateFromStores(first, A);
  channelId(customId[20])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
  let tmpResult = require("initialize");
  const fileTypeFiltering = require("FileTypeFiltering").useFileTypeFiltering(fileTypes.fileTypes);
  const allowedExtensions = fileTypeFiltering.allowedExtensions;
  ({ typesFormattedString, validateFilenames } = fileTypeFiltering);
  showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
  const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
  if (cResult[3] !== stateFromStores.guild_id) {
    class A {
      constructor() {
        return closure_6.getChannel(channelId);
      }
    }
    let effectiveUploadLimit = obj6.getEffectiveUploadLimit(tmp(tmp2[24]).maxFileSize(stateFromStores.guild_id));
    cResult[3] = stateFromStores.guild_id;
    cResult[4] = effectiveUploadLimit;
    const tmpResult5 = tmp(tmp2[24]);
  } else {
    class A {
      constructor() {
        return closure_6.getChannel(channelId);
      }
    }
  }
  effectiveUploadLimit = tmp15;
  const tmpResult4 = require("FileTypeFiltering");
  const fileUploadComponentState = require("useFileUploadComponentState").useFileUploadComponentState(fileTypes);
  const uploadIds = fileUploadComponentState.uploadIds;
  const setUploadIds = fileUploadComponentState.setUploadIds;
  const currentUploads = fileUploadComponentState.currentUploads;
  const parents = componentStateContext.getParents(fileTypes);
  if (parents != null) {
    class A {
      constructor() {
        return closure_6.getChannel(channelId);
      }
    }
  }
  if (undefined != null) {
    class A {
      constructor() {
        return closure_6.getChannel(channelId);
      }
    }
  }
  if (undefined === require("Server").ComponentType.LABEL) {
    class A {
      constructor() {
        return closure_6.getChannel(channelId);
      }
    }
  }
  channelId(customId[20])(null != undefined, "FileUploadActionComponent must be used within a label Component");
  if (cResult[5] === allowedExtensions.length) {
    class A {
      constructor() {
        return closure_6.getChannel(channelId);
      }
    }
  }
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
        return { value: "IconComponent", done: null };
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
                let obj7 = channelId(customId[27]);
                let obj5 = { title: null, body: null };
                let intl = closure_0(customId[13]).intl;
                obj5.title = intl.string(closure_0(customId[13]).t.wOr6hB);
                let intl2 = closure_0(customId[13]).intl;
                let obj6 = { maxValues: tmp59 };
                obj5.body = intl2.formatToPlainString(closure_0(customId[13]).t.dy6viJ, obj6);
                c8 = 3;
                let obj8 = { value: obj7.show(obj5), done: true };
                return obj8;
              } else {
                channelId = closure_0[Symbol.iterator]();
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
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
            let obj = closure_0(customId[29]);
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
            if (!validateFilenames(closure_131_0.map((item) => closure_1_0(arr[28]).getFileFromUploadItem(item).filename))) {
              c8 = 3;
              let obj11 = { value: v1(), done: true };
              return obj11;
            }
          }
          closure_131_3 = closure_131_0.map((item) => {
            const componentUploadId = closure_0(arr[14]).makeComponentUploadId(closure_1_2);
            const obj = closure_0(arr[14]);
            const obj3 = { channelId, id: componentUploadId, file: null, draftType: null, allowOptimization: false };
            const obj4 = {};
            const merged = Object.assign(item);
            obj4.id = componentUploadId;
            obj3.file = obj4;
            obj3.draftType = InteractionModal.InteractionModal;
            channelId(arr[30]).setFile(obj3);
            return componentUploadId;
          });
          let tmp40 = setUploadIds(uploadIds.concat(closure_131_3));
        } else {
          v1 = 1;
          closure_131_1 = tmp20;
          let obj4 = closure_0(customId[28]);
          c7 = 2;
          c8 = 1;
          let obj12 = { value: obj4.getFileSize(closure_131_1.uri), done: false };
          return obj12;
        }
      }
    }
  });
  function t3() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[5] = allowedExtensions.length;
  cResult[6] = channelId;
  cResult[7] = tmp15;
  cResult[8] = maxValues;
  cResult[9] = customId;
  cResult[10] = setUploadIds;
  cResult[11] = showInvalidFileTypeAlert;
  cResult[12] = uploadIds;
  cResult[13] = validateFilenames;
  cResult[14] = t3;
  const tmpResult6 = require("useFileUploadComponentState");
}) : (function FileUploadActionComponent(maxValues) {
  maxValues = maxValues.maxValues;
  _require = maxValues;
  const componentStateContext = require("ComponentStateContext").useComponentStateContext();
  channelId(customId[20])(null != componentStateContext, "FileUploadActionComponent must be used within a ComponentStateContextProvider");
  channelId = componentStateContext.channelId;
  channelId(customId[20])(null != channelId, "FileUploadActionComponent must be used inside a channel");
  const modal = componentStateContext.modal;
  customId = undefined;
  if (modal != null) {
    customId = modal.customId;
  }
  channelId(customId[20])(null != customId, "FileUploadActionComponent requires modalCustomId from context");
  let obj = require("ComponentStateContext");
  let items = [showInvalidFileTypeAlert];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  channelId(customId[20])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
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
  channelId(customId[20])(null != tmp16, "FileUploadActionComponent must be used within a label Component");
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
        return { value: "IconComponent", done: null };
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
                let obj7 = channelId(customId[27]);
                let obj5 = { title: null, body: null };
                let intl = closure_0(customId[13]).intl;
                obj5.title = intl.string(closure_0(customId[13]).t.wOr6hB);
                let intl2 = closure_0(customId[13]).intl;
                let obj6 = { maxValues: tmp59 };
                obj5.body = intl2.formatToPlainString(closure_0(customId[13]).t.dy6viJ, obj6);
                c8 = 3;
                let obj8 = { value: obj7.show(obj5), done: true };
                return obj8;
              } else {
                channelId = closure_0[Symbol.iterator]();
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
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
            let obj = closure_0(customId[29]);
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
            if (!validateFilenames(closure_131_0.map((item) => closure_1_0(arr[28]).getFileFromUploadItem(item).filename))) {
              c8 = 3;
              let obj11 = { value: v1(), done: true };
              return obj11;
            }
          }
          closure_131_3 = closure_131_0.map((item) => {
            const componentUploadId = closure_0(arr[14]).makeComponentUploadId(closure_1_2);
            const obj = closure_0(arr[14]);
            const obj3 = { channelId, id: componentUploadId, file: null, draftType: null, allowOptimization: false };
            const obj4 = {};
            const merged = Object.assign(item);
            obj4.id = componentUploadId;
            obj3.file = obj4;
            obj3.draftType = InteractionModal.InteractionModal;
            channelId(arr[30]).setFile(obj3);
            return componentUploadId;
          });
          let tmp40 = setUploadIds(uploadIds.concat(closure_131_3));
        } else {
          v1 = 1;
          closure_131_1 = tmp20;
          let obj4 = closure_0(customId[28]);
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
        return InteractionModal(9975).hideMediaKeyboardActionSheet();
      },
      onRestoreKeyboard: effectiveUploadLimit,
      onSelectFiles(arg0) {
        callback(arg0);
      }
    };
    let result = InteractionModal(customId[32]).dismissGlobalKeyboard();
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
            const result = InteractionModal(customId[31]).hideMediaKeyboardActionSheet();
            if (item.isIncluded) {
              const found = currentUploads.find((item) => InteractionModal(7739).doesImageMatchUpload(item.node.image, item));
              if (null != found) {
                callback1(found.id);
              }
            } else {
              const items = [InteractionModal(customId[33]).mediaNodeToUploadItem(item)];
              callback(items);
              const tmpResult = InteractionModal(customId[33]);
            }
            obj = InteractionModal(customId[31]);
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
            obj = InteractionModal(9974);
            const result = obj.handleLimitedPickerDialog({ onDismissKeyboard: InteractionModal(9975).hideMediaKeyboardActionSheet, onRestoreKeyboard });
          },
        onClose: tmp4(customId[31]).hideMediaKeyboardActionSheet,
        onBack: tmp4(customId[31]).hideMediaKeyboardActionSheet
      };
      const result1 = tmp4(customId[31]).showMediaKeyboardActionSheet(obj3);
      const tmp4Result = tmp4(customId[31]);
    } else {
      const obj4 = {};
      let merged = Object.assign(obj);
      tmp4(customId[33]).handleAttachFile(obj4);
      const tmp4Result2 = tmp4(customId[33]);
    }
    let obj2 = InteractionModal(customId[32]);
    tmp3 = InteractionModal;
  }, items3);
  if (1 === maxValues) {
    if (1 === currentUploads.length) {
      let obj2 = { upload: currentUploads[0], handleRemoveFile: callback1 };
      let tmp21Result = uploadIds(closure_14, obj2);
    }
    return tmp21Result;
  }
  let obj3 = { spacing: channelId(customId[37]).space.PX_12, children: null };
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
    let obj5 = { hasIcons: true, children: currentUploads.map((upload) => options(closure_14, { upload, handleRemoveFile: callback1 }, upload.id)) };
    tmp24Result = tmp24(tmp(tmp2[35]).TableRowGroup, obj5);
  }
  items4[1] = tmp24Result;
  obj3.children = items4;
  tmp21Result = setUploadIds(tmp(tmp2[36]).Stack, obj3);
  const tmpResult8 = require("useFileUploadComponentState");
});