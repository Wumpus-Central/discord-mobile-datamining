// discord_app/modules/interaction_components/native/actions/FileUploadActionComponent.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import CircleCheckIcon from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import InteractionComponentUtils from "../../InteractionComponentUtils.tsx";
import FileSizeUtils from "../../../../utils/FileSizeUtils.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import DraftStore from "../../../../stores/DraftStore.tsx";
import IconButton2 from "../../../../design/components/Button/native/IconButton.native.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../../actions/UploadAttachmentActionCreators.tsx";
import MediaKeyboardUtils from "../../../media_keyboard/native/MediaKeyboardUtils.tsx";
import AttachmentPreview from "../../../media/native/AttachmentPreview.tsx";
import FileUpIcon from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const AttachmentPreviewDefault = AttachmentPreview;
let c7, c8, upload;

let c10;
let c9;
const View = react_native.View;
const DraftType = DraftStore.DraftType;
const NOOP = Constants.NOOP;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ defaultAttachmentIconWrapper: { width: 32, alignItems: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let maxSizeBytes;
      let maxValues;
      let minValues;
      let openFilePicker;
      let tmp6;
      let tmp9;
      let tmpResult2;
      let types;
      const obj = react2;
      const cResult = obj.c(9);
      ({ openFilePicker, minValues, maxValues, types, maxSizeBytes } = arg0);
      if (cResult[0] === maxSizeBytes) {
        if (cResult[1] === maxValues) {
          if (cResult[2] === minValues) {
            if (cResult[3] === openFilePicker) {
              let tmp4;
              if (cResult[4] === types) {
                tmp4 = cResult[5];
              }
              return tmp4;
            }
          }
        }
      }
      const tmpResult = FileSizeUtils;
      const formatSizeResult = tmpResult.formatSize(maxSizeBytes / FileSizeUtils.BYTE_IN_KB, {
        useKibibytes: true,
        useSpace: true,
      });
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { IconComponent: FileUpIcon.FileUpIcon };
        const Icon = TableRow2.TableRow.Icon;
        const tmp8 = React4(Icon, obj2);
        cResult[6] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[6];
      }
      if (cResult[7] !== maxValues) {
        const intl = intl3.intl;
        const obj3 = { maxValues };
        const formatResult = intl.format(intl3.t["/2JwTv"], obj3);
        cResult[7] = maxValues;
        cResult[8] = formatResult;
        tmp9 = formatResult;
      } else {
        tmp9 = cResult[8];
      }
      const obj4 = {
        onPress: openFilePicker,
        icon: tmp6,
        label: tmp9,
        subLabel: tmpResult2.getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult),
        start: true,
        end: true,
        arrow: true,
      };
      const TableRow = TableRow2.TableRow;
      tmpResult2 = InteractionComponentUtils;
      const tmp11 = React4(TableRow, obj4);
      cResult[0] = maxSizeBytes;
      cResult[1] = maxValues;
      cResult[2] = minValues;
      cResult[3] = openFilePicker;
      cResult[4] = types;
      cResult[5] = tmp11;
      tmp4 = tmp11;
    }
  : (arg0) => {
      let Icon;
      let formatSizeResult;
      let intl;
      let maxSizeBytes;
      let maxValues;
      let minValues;
      let obj3;
      let obj4;
      let openFilePicker;
      let types;
      ({ minValues, maxValues } = arg0);
      ({ openFilePicker, types, maxSizeBytes } = arg0);
      const obj = FileSizeUtils;
      const obj2 = {
        onPress: openFilePicker,
        icon: React4(Icon, obj3),
        label: intl.format(intl3.t["/2JwTv"], { maxValues }),
        subLabel: obj4.getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult),
        start: true,
        end: true,
        arrow: true,
      };
      formatSizeResult = obj.formatSize(maxSizeBytes / FileSizeUtils.BYTE_IN_KB, {
        useKibibytes: true,
        useSpace: true,
      });
      const TableRow = TableRow2.TableRow;
      obj3 = { IconComponent: FileUpIcon.FileUpIcon };
      Icon = TableRow2.TableRow.Icon;
      intl = intl3.intl;
      obj4 = InteractionComponentUtils;
      return React4(TableRow, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Icon;
      let first;
      let intl;
      let intl2;
      let obj3;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          icon: React4(Icon, obj3),
          label: intl.string(intl3.t["0PhgpK"]),
          subLabel: intl2.string(intl3.t.HYg2Hn),
          disabled: true,
          start: true,
          end: true,
        };
        const TableRow = TableRow2.TableRow;
        obj3 = { IconComponent: CircleCheckIcon.CircleCheckIcon };
        Icon = TableRow2.TableRow.Icon;
        intl = intl3.intl;
        intl2 = intl3.intl;
        const tmp6 = React4(TableRow, obj2);
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let Icon;
      let intl;
      let intl2;
      let obj2;
      const obj = {
        icon: React4(Icon, obj2),
        label: intl.string(intl3.t["0PhgpK"]),
        subLabel: intl2.string(intl3.t.HYg2Hn),
        disabled: true,
        start: true,
        end: true,
      };
      const TableRow = TableRow2.TableRow;
      obj2 = { IconComponent: CircleCheckIcon.CircleCheckIcon };
      Icon = TableRow2.TableRow.Icon;
      intl = intl3.intl;
      intl2 = intl3.intl;
      return React4(TableRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (upload) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(23);
      upload = upload.upload;
      const handleRemoveFile = upload.handleRemoveFile;
      const tmp4 = closure_11();
      const item = upload.item;
      if (cResult[0] !== upload.filename) {
        const obj2 = { fileName: upload.filename };
        const tmp7 = React4(AttachmentPreview.AttachmentIcon, obj2);
        cResult[0] = upload.filename;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.defaultAttachmentIconWrapper) {
        let tmp8;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === item.uri) {
          if (cResult[6] === tmp8) {
            if (cResult[7] === upload.isImage) {
              let tmp10;
              let tmp14;
              let tmp17;
              if (cResult[8] === upload.isVideo) {
                tmp10 = cResult[9];
              }
              if (cResult[10] !== upload.filename) {
                let filename = upload.filename;
                if (filename == null) {
                  const intl = intl3.intl;
                  filename = intl.string(intl3.t.ZMirp0);
                }
                cResult[10] = upload.filename;
                cResult[11] = filename;
                tmp14 = filename;
              } else {
                tmp14 = cResult[11];
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp19 = React4(XSmallIcon.XSmallIcon, { size: "sm" });
                cResult[12] = tmp19;
                tmp17 = tmp19;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] === handleRemoveFile) {
                let tmp20;
                let tmp21;
                let tmp23;
                if (cResult[14] === upload.id) {
                  tmp20 = cResult[15];
                }
                const _Symbol2 = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = intl3.intl;
                  const stringResult = intl2.string(intl3.t.N86XcP);
                  cResult[16] = stringResult;
                  tmp21 = stringResult;
                } else {
                  tmp21 = cResult[16];
                }
                if (cResult[17] !== tmp20) {
                  const obj3 = {
                    variant: "tertiary",
                    size: "sm",
                    icon: tmp17,
                    onPress: tmp20,
                    accessibilityLabel: tmp21,
                  };
                  const tmp25 = React4(IconButton2.IconButton, obj3);
                  cResult[17] = tmp20;
                  cResult[18] = tmp25;
                  tmp23 = tmp25;
                } else {
                  tmp23 = cResult[18];
                }
                if (cResult[19] === tmp10) {
                  if (cResult[20] === tmp14) {
                    let tmp26;
                    if (cResult[21] === tmp23) {
                      tmp26 = cResult[22];
                    }
                    return tmp26;
                  }
                }
                const obj5 = { icon: tmp10, label: tmp14, trailing: tmp23, start: true, end: true };
                const tmp28 = React4(TableRow2.TableRow, obj5);
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
        size = { uri: item.uri, isImage: null, isVideo: null, width: 32, height: 32, defaultPreview: tmp8 };
        ({ isImage: obj4.isImage, isVideo: obj4.isVideo } = upload);
        const tmp13 = React4(AttachmentPreviewDefault, size);
        cResult[5] = item.uri;
        cResult[6] = tmp8;
        cResult[7] = upload.isImage;
        cResult[8] = upload.isVideo;
        cResult[9] = tmp13;
        tmp10 = tmp13;
      }
      const obj6 = { style: tmp4.defaultAttachmentIconWrapper, children: tmp5 };
      const tmp9 = React4(View, obj6);
      cResult[2] = tmp4.defaultAttachmentIconWrapper;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (upload) => {
      let IconButton;
      let filename;
      let intl2;
      let obj2;
      let obj3;
      let obj4;
      let tmp5;
      upload = upload.upload;
      const handleRemoveFile = upload.handleRemoveFile;
      const obj = {
        icon: React4(tmp5, size),
        label: filename,
        trailing: React4(IconButton, obj4),
        start: true,
        end: true,
      };
      const tmp = closure_11();
      const TableRow = TableRow2.TableRow;
      size = {
        uri: upload.item.uri,
        isImage: upload.isImage,
        isVideo: upload.isVideo,
        width: 32,
        height: 32,
        defaultPreview: React4(View, obj2),
      };
      obj2 = { style: tmp.defaultAttachmentIconWrapper, children: React4(AttachmentPreview.AttachmentIcon, obj3) };
      obj3 = { fileName: upload.filename };
      filename = upload.filename;
      tmp5 = AttachmentPreviewDefault;
      if (filename == null) {
        const intl = intl3.intl;
        filename = intl.string(intl3.t.ZMirp0);
      }
      obj4 = {
        variant: "tertiary",
        size: "sm",
        icon: React4(XSmallIcon.XSmallIcon, { size: "sm" }),
        onPress() {
          return handleRemoveFile(upload.id);
        },
        accessibilityLabel: intl2.string(intl3.t.N86XcP),
      };
      IconButton = IconButton2.IconButton;
      intl2 = intl3.intl;
      return React4(TableRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (fileTypes) => {
      let channelId;
      let customId;
      let first;
      let handleRemoveFile;
      let maxValues;
      let minValues;
      let showInvalidFileTypeAlert;
      let typesFormattedString;
      let validateFilenames;
      const tmp2 = customId;
      let obj = maxValues(customId[9]);
      const cResult = obj.c(44);
      ({ minValues, maxValues } = fileTypes);
      let obj2 = maxValues(customId[19]);
      const componentStateContext = obj2.useComponentStateContext();
      const tmp4 = channelId;
      const tmp5 = channelId(customId[20])(
        null != componentStateContext,
        "FileUploadActionComponent must be used within a ComponentStateContextProvider",
      );
      channelId = componentStateContext.channelId;
      let tmp6 = channelId(customId[20])(null != channelId, "FileUploadActionComponent must be used inside a channel");
      const modal = componentStateContext.modal;
      customId = undefined;
      if (modal != null) {
        customId = modal.customId;
      }
      tmp4(tmp2[20])(null != customId, "FileUploadActionComponent requires modalCustomId from context");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp10 = showInvalidFileTypeAlert;
        let items = [showInvalidFileTypeAlert];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        class S {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
        let num2 = 1;
        cResult[1] = channelId;
        let num3 = 2;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      let tmpResult = maxValues(tmp2[21]);
      const stateFromStores = tmpResult.useStateFromStores(first, S);
      let tmp13 = tmp4(tmp2[20])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
      const tmpResult4 = maxValues(tmp2[22]);
      const fileTypeFiltering = tmpResult4.useFileTypeFiltering(fileTypes.fileTypes);
      const allowedExtensions = fileTypeFiltering.allowedExtensions;
      ({ typesFormattedString, validateFilenames } = fileTypeFiltering);
      showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
      const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
      if (cResult[3] !== stateFromStores.guild_id) {
        class S {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
        const getEffectiveUploadLimit = tmp16.getEffectiveUploadLimit;
        const tmpResult5 = maxValues(tmp2[24]);
        let effectiveUploadLimit = getEffectiveUploadLimit(tmpResult5.maxFileSize(stateFromStores.guild_id));
        let num4 = 3;
        cResult[3] = stateFromStores.guild_id;
        let num5 = 4;
        cResult[4] = effectiveUploadLimit;
      } else {
        class S {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      effectiveUploadLimit = tmp15;
      const tmpResult6 = maxValues(tmp2[25]);
      const fileUploadComponentState = tmpResult6.useFileUploadComponentState(fileTypes);
      const uploadIds = fileUploadComponentState.uploadIds;
      const setUploadIds = fileUploadComponentState.setUploadIds;
      const currentUploads = fileUploadComponentState.currentUploads;
      const parents = componentStateContext.getParents(fileTypes);
      if (parents != null) {
        class S {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      if (undefined != null) {
        class S {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      if (undefined === maxValues(tmp2[26]).ComponentType.LABEL) {
        class S {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      const tmp20 = tmp4(tmp2[20])(
        null != undefined,
        "FileUploadActionComponent must be used within a label Component",
      );
      if (cResult[5] === allowedExtensions.length) {
        class S {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      let closure_0 = stateFromStores(function* (arg0) {
        let arr;
        let intl;
        let intl2;
        let length;
        let obj6;
        closure_0 = arg0;
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          while (true) {
            let uri;
            let closure_2;
            let closure_3;
            let v1;
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
                uri = undefined;
                closure_2 = undefined;
                closure_3 = undefined;
                if (0 !== closure_0.length) {
                  if (uploadIds.length + closure_0.length > closure_0) {
                    let tmp43 = channelId(customId[27]);
                    let obj5 = {
                      title: intl.string(closure_0(customId[13]).t.wOr6hB),
                      body: intl2.formatToPlainString(closure_0(customId[13]).t.dy6viJ, obj6),
                    };
                    let show = tmp43.show;
                    intl = closure_0(customId[13]).intl;
                    intl2 = closure_0(customId[13]).intl;
                    obj6 = { maxValues: tmp60 };
                    c8 = 3;
                    let obj7 = { value: show(obj5), done: true };
                    return obj7;
                  } else {
                    channelId = closure_0[Symbol.iterator]();
                  }
                }
                c8 = 3;
                return { value: "IconComponent", done: null };
              }
            } else if (1 === tmp5) {
              v1 = 0;
              channelId.return();
              throw validateFilenames;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              v1 = 0;
              channelId.return();
              c8 = 3;
              let obj8 = { value, done: true };
              return obj8;
            } else {
              closure_2 = value;
              if (closure_2 > c8) {
                let obj = closure_0(customId[29]);
                v1 = 0;
                let result = obj.showFileSizeExceededAlert(c8, closure_2);
                channelId.return();
                c8 = 3;
                let obj9 = { value: result, done: true };
                return obj9;
              } else {
                v1 = 0;
              }
            }
            if (channelId === undefined) {
              if (tmp.length > 0) {
                if (
                  !validateFilenames(
                    closure_0.map((item) => {
                      const obj = closure_1_0(arr[28]);
                      return obj.getFileFromUploadItem(item).filename;
                    }),
                  )
                ) {
                  c8 = 3;
                  let obj10 = { value: v1(), done: true };
                  return obj10;
                }
              }
              closure_3 = closure_0.map((item) => {
                let obj3;
                const obj = closure_0(arr[14]);
                const componentUploadId = obj.makeComponentUploadId(closure_1_2);
                const obj2 = {
                  channelId,
                  id: componentUploadId,
                  file: obj3,
                  draftType: InteractionModal.InteractionModal,
                  allowOptimization: false,
                };
                obj3 = { id: componentUploadId };
                const setFile = channelId(arr[30]).setFile;
                channelId(arr[30]);
                const merged = Object.assign(item);
                setFile(obj2);
                return componentUploadId;
              });
              let tmp40 = setUploadIds(uploadIds.concat(closure_3));
            } else {
              v1 = 1;
              uri = tmp20;
              let obj4 = closure_0(customId[28]);
              c7 = 2;
              c8 = 1;
              let obj11 = { value: obj4.getFileSize(uri.uri), done: false };
              return obj11;
            }
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[5] = allowedExtensions.length;
      cResult[6] = channelId;
      cResult[7] = tmp15;
      cResult[8] = maxValues;
      cResult[9] = customId;
      cResult[10] = setUploadIds;
      cResult[11] = showInvalidFileTypeAlert;
      cResult[12] = uploadIds;
      cResult[13] = validateFilenames;
      cResult[14] = fn;
    }
  : (maxValues) => {
      let channelId;
      let customId;
      let items4;
      let showInvalidFileTypeAlert;
      let tmp25;
      let tmp26;
      maxValues = maxValues.maxValues;
      const tmp = maxValues;
      const tmp2 = customId;
      const minValues = maxValues.minValues;
      let obj = maxValues(customId[19]);
      const componentStateContext = obj.useComponentStateContext();
      let tmp3 = channelId;
      const tmp4 = channelId(customId[20])(
        null != componentStateContext,
        "FileUploadActionComponent must be used within a ComponentStateContextProvider",
      );
      channelId = componentStateContext.channelId;
      const tmp5 = channelId(customId[20])(
        null != channelId,
        "FileUploadActionComponent must be used inside a channel",
      );
      const modal = componentStateContext.modal;
      customId = undefined;
      if (modal != null) {
        customId = modal.customId;
      }
      tmp3(tmp2[20])(null != customId, "FileUploadActionComponent requires modalCustomId from context");
      let tmpResult = tmp(tmp2[21]);
      let items = [showInvalidFileTypeAlert];
      const stateFromStores = tmpResult.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      tmp3(tmp2[20])(null != stateFromStores, "FileUploadActionComponent requires a valid channel");
      const tmpResult5 = tmp(tmp2[22]);
      const fileTypeFiltering = tmpResult5.useFileTypeFiltering(maxValues.fileTypes);
      const allowedExtensions = fileTypeFiltering.allowedExtensions;
      const validateFilenames = fileTypeFiltering.validateFilenames;
      showInvalidFileTypeAlert = fileTypeFiltering.showInvalidFileTypeAlert;
      const mediaFilesAllowed = fileTypeFiltering.mediaFilesAllowed;
      const typesFormattedString = fileTypeFiltering.typesFormattedString;
      const getEffectiveUploadLimit = tmp(tmp2[23]).getEffectiveUploadLimit;
      tmp(tmp2[23]);
      const tmpResult7 = tmp(tmp2[24]);
      const effectiveUploadLimit = getEffectiveUploadLimit(tmpResult7.maxFileSize(stateFromStores.guild_id));
      const tmpResult8 = tmp(tmp2[25]);
      const fileUploadComponentState = tmpResult8.useFileUploadComponentState(maxValues);
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
      if (type === tmp(tmp2[26]).ComponentType.LABEL) {
        tmp17 = first;
      }
      tmp3(tmp2[20])(null != tmp17, "FileUploadActionComponent must be used within a label Component");
      const useCallback = allowedExtensions.useCallback;
      let closure_0 = stateFromStores(function* (arg0) {
        let arr;
        let intl;
        let intl2;
        let length;
        let obj6;
        closure_0 = arg0;
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          while (true) {
            let uri;
            let closure_2;
            let closure_3;
            let v1;
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
                uri = undefined;
                closure_2 = undefined;
                closure_3 = undefined;
                if (0 !== closure_0.length) {
                  if (uploadIds.length + closure_0.length > closure_0) {
                    let tmp43 = channelId(customId[27]);
                    let obj5 = {
                      title: intl.string(closure_0(customId[13]).t.wOr6hB),
                      body: intl2.formatToPlainString(closure_0(customId[13]).t.dy6viJ, obj6),
                    };
                    let show = tmp43.show;
                    intl = closure_0(customId[13]).intl;
                    intl2 = closure_0(customId[13]).intl;
                    obj6 = { maxValues: tmp60 };
                    c8 = 3;
                    let obj7 = { value: show(obj5), done: true };
                    return obj7;
                  } else {
                    channelId = closure_0[Symbol.iterator]();
                  }
                }
                c8 = 3;
                return { value: "IconComponent", done: null };
              }
            } else if (1 === tmp5) {
              v1 = 0;
              channelId.return();
              throw validateFilenames;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              v1 = 0;
              channelId.return();
              c8 = 3;
              let obj8 = { value, done: true };
              return obj8;
            } else {
              closure_2 = value;
              if (closure_2 > c8) {
                let obj = closure_0(customId[29]);
                v1 = 0;
                let result = obj.showFileSizeExceededAlert(c8, closure_2);
                channelId.return();
                c8 = 3;
                let obj9 = { value: result, done: true };
                return obj9;
              } else {
                v1 = 0;
              }
            }
            if (channelId === undefined) {
              if (tmp.length > 0) {
                if (
                  !validateFilenames(
                    closure_0.map((item) => {
                      const obj = closure_1_0(arr[28]);
                      return obj.getFileFromUploadItem(item).filename;
                    }),
                  )
                ) {
                  c8 = 3;
                  let obj10 = { value: v1(), done: true };
                  return obj10;
                }
              }
              closure_3 = closure_0.map((item) => {
                let obj3;
                const obj = closure_0(arr[14]);
                const componentUploadId = obj.makeComponentUploadId(closure_1_2);
                const obj2 = {
                  channelId,
                  id: componentUploadId,
                  file: obj3,
                  draftType: InteractionModal.InteractionModal,
                  allowOptimization: false,
                };
                obj3 = { id: componentUploadId };
                const setFile = channelId(arr[30]).setFile;
                channelId(arr[30]);
                const merged = Object.assign(item);
                setFile(obj2);
                return componentUploadId;
              });
              let tmp40 = setUploadIds(uploadIds.concat(closure_3));
            } else {
              v1 = 1;
              uri = tmp20;
              let obj4 = closure_0(customId[28]);
              c7 = 2;
              c8 = 1;
              let obj11 = { value: obj4.getFileSize(uri.uri), done: false };
              return obj11;
            }
          }
        }
      });
      const items1 = [
        uploadIds,
        maxValues,
        allowedExtensions.length,
        validateFilenames,
        setUploadIds,
        effectiveUploadLimit,
        showInvalidFileTypeAlert,
        customId,
        channelId,
      ];
      const callback = useCallback(function () {
        return closure_0(...arguments);
      }, items1);
      const items2 = [channelId, uploadIds, setUploadIds];
      const callback1 = allowedExtensions.useCallback((arg0) => {
        let closure_0 = arg0;
        const obj = UploadAttachmentActionCreatorsDefault;
        obj.remove(channelId, arg0, DraftType.InteractionModal);
        setUploadIds(uploadIds.filter((item) => item !== closure_0));
      }, items2);
      const items3 = [
        stateFromStores,
        allowedExtensions,
        maxValues,
        mediaFilesAllowed,
        callback,
        uploadIds,
        currentUploads,
        callback1,
      ];
      const callback2 = allowedExtensions.useCallback(() => {
        let onRestoreKeyboard;
        const InteractionModal = mediaFilesAllowed.InteractionModal;
        let obj = {
          channel: stateFromStores,
          extensions: allowedExtensions,
          uploadLimit: InteractionModal,
          onDismissKeyboard() {
            obj = InteractionModal(customId[31]);
            return obj.hideMediaKeyboardActionSheet();
          },
          onRestoreKeyboard: effectiveUploadLimit,
          onSelectFiles(arg0) {
            callback(arg0);
          },
        };
        let obj2 = maxValues(customId[32]);
        let result = obj2.dismissGlobalKeyboard();
        const tmp3 = InteractionModal;
        if (mediaFilesAllowed) {
          const obj3 = {
            channel: stateFromStores,
            draftType: InteractionModal,
            extensions: allowedExtensions,
            uploadLimit: tmp3,
            disableWhenReachedLimit: true,
            includedUploadIds: uploadIds,
            onAttachPress() {
              obj = {};
              const handleAttachFile = MediaKeyboardUtils.handleAttachFile;
              MediaKeyboardUtils;
              const merged = Object.assign(obj);
              handleAttachFile(obj);
            },
            onPressCamera(previewType) {
              obj = { previewType };
              const handleCameraDialog = MediaKeyboardUtils.handleCameraDialog;
              MediaKeyboardUtils;
              const merged = Object.assign(obj);
              handleCameraDialog(obj);
            },
            onPressItem(item) {
              item = item.item;
              const isIncluded = item.isIncluded;
              obj = maxValues(customId[31]);
              const result = obj.hideMediaKeyboardActionSheet();
              if (isIncluded) {
                const found = currentUploads.find((item) => {
                  obj = InteractionModal(closure_2_2[34]);
                  return obj.doesImageMatchUpload(item.node.image, item);
                });
                if (null != found) {
                  callback1(found.id);
                }
              } else {
                const items = [];
                const tmpResult = maxValues(customId[33]);
                items[0] = tmpResult.mediaNodeToUploadItem(item);
                callback(items);
              }
            },
            onViewAll() {
              obj = { draftType: InteractionModal, includedUploadIds: uploadIds };
              const handleViewAllDialog = MediaKeyboardUtils.handleViewAllDialog;
              MediaKeyboardUtils;
              const merged = Object.assign(obj);
              handleViewAllDialog(obj);
            },
            onManageLimited() {
              obj = InteractionModal(customId[33]);
              const obj2 = {
                onDismissKeyboard: InteractionModal(customId[31]).hideMediaKeyboardActionSheet,
                onRestoreKeyboard,
              };
              const result = obj.handleLimitedPickerDialog(obj2);
            },
            onClose: maxValues(customId[31]).hideMediaKeyboardActionSheet,
            onBack: maxValues(customId[31]).hideMediaKeyboardActionSheet,
          };
          const showMediaKeyboardActionSheet = maxValues(customId[31]).showMediaKeyboardActionSheet;
          maxValues(customId[31]);
          const result1 = showMediaKeyboardActionSheet(obj3);
        } else {
          const obj4 = {};
          let handleAttachFile = maxValues(customId[33]).handleAttachFile;
          maxValues(customId[33]);
          let merged = Object.assign(obj);
          handleAttachFile(obj4);
        }
      }, items3);
      if (1 === maxValues) {
        let tmp22Result;
        if (1 === currentUploads.length) {
          let obj2 = { upload: currentUploads[0], handleRemoveFile: callback1 };
          tmp22Result = uploadIds(closure_14, obj2);
        }
        return tmp22Result;
      }
      let obj3 = { spacing: tmp3(tmp2[37]).space.PX_12, children: items4 };
      const Stack = tmp(tmp2[36]).Stack;
      const tmp22 = setUploadIds;
      if (uploadIds.length >= maxValues) {
        let tmp28 = callback1;
        tmp26 = uploadIds(callback1, {});
        tmp25 = uploadIds;
      } else {
        let obj4 = {
          openFilePicker: callback2,
          minValues,
          maxValues,
          types: typesFormattedString,
          maxSizeBytes: effectiveUploadLimit,
        };
        tmp25 = uploadIds;
        tmp26 = uploadIds(callback, obj4);
      }
      items4 = [tmp26];
      let tmp25Result = currentUploads.length > 0;
      if (tmp25Result) {
        let obj5 = {
          hasIcons: true,
          children: currentUploads.map((upload) => {
            const obj = { upload, handleRemoveFile: callback1 };
            return React4(closure_14, obj, upload.id);
          }),
        };
        const TableRowGroup = tmp(tmp2[35]).TableRowGroup;
        tmp25Result = tmp25(TableRowGroup, obj5);
      }
      items4[1] = tmp25Result;
      tmp22Result = tmp22(Stack, obj3);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/interaction_components/native/actions/FileUploadActionComponent.tsx");

export default tmp3;
