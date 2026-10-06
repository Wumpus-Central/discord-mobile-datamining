// === Module 11813: AppLauncherAttachmentOption ===

// Module 11813 (AppLauncherAttachmentOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DraftStore from "DraftStore" /* 7044 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 11056 */;
import FileIcon from "FileIcon" /* 11814 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let option;

let size;
let size1;
let View = react_native.View;
const DraftType = DraftStore.DraftType;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { imageIconWrapper: size, selectedImage: size1 };
size = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let height;
  let isImage;
  let isVideo;
  let uri;
  let width;
  const obj = react2;
  const cResult = obj.c(8);
  ({ uri, isImage, isVideo } = arg0);
  const tmp4 = closure_8();
  ({ width, height } = tmp4.selectedImage);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(FileIcon.FileIcon, { size: "sm" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === height) {
    if (cResult[2] === isImage) {
      if (cResult[3] === isVideo) {
        if (cResult[4] === tmp4.selectedImage) {
          if (cResult[5] === uri) {
            let tmp8;
            if (cResult[6] === width) {
              tmp8 = cResult[7];
            }
            return tmp8;
          }
        }
      }
    }
  }
  const tmp9 = jsx(AttachmentPreviewDefault, { uri, isImage, isVideo, width, height, style: tmp4.selectedImage, defaultPreview: first });
  cResult[1] = height;
  cResult[2] = isImage;
  cResult[3] = isVideo;
  cResult[4] = tmp4.selectedImage;
  cResult[5] = uri;
  cResult[6] = width;
  cResult[7] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let height;
  let isImage;
  let isVideo;
  let uri;
  let width;
  ({ uri, isImage, isVideo } = arg0);
  const tmp = closure_8();
  ({ width, height } = tmp.selectedImage);
  AttachmentPreviewDefault;
  return <tmp2 uri={uri} isImage={isImage} isVideo={isVideo} width={width} height={height} style={tmp.selectedImage} defaultPreview={null} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((option) => {
  let autoFocus;
  let first;
  let hasError;
  let onPress;
  let onSelectAttachment;
  let ref;
  let style;
  let obj = option(onSelectAttachment[8]);
  const cResult = obj.c(29);
  option = option.option;
  const channel = option.channel;
  ({ style, autoFocus, hasError, onPress, onSelectAttachment } = option);
  const tmp4 = closure_8();
  let fileTypes;
  if (option.type === option(onSelectAttachment[11]).ApplicationCommandOptionType.ATTACHMENT) {
    fileTypes = option.fileTypes;
  }
  const tmpResult = option(onSelectAttachment[12]);
  const fileTypesFormattedString = tmpResult.useFileTypesFormattedString(fileTypes);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    let tmp9;
    if (cResult[2] === option.name) {
      tmp9 = cResult[3];
    }
    const tmpResult2 = option(onSelectAttachment[13]);
    const stateFromStores = tmpResult2.useStateFromStores(first, tmp9);
    if (cResult[4] === channel.id) {
      let tmp11;
      let tmp12;
      if (cResult[5] === option.name) {
        tmp11 = cResult[6];
        tmp12 = cResult[7];
      }
      const effect = stateFromStores.useEffect(tmp11, tmp12);
      View = stateFromStores.useRef(onSelectAttachment);
      if (cResult[8] !== onSelectAttachment) {
        class N {
          constructor() {
            ref.current = onSelectAttachment;
          }
        }
        cResult[8] = onSelectAttachment;
        cResult[9] = N;
      } else {
        class N {
          constructor() {
            ref.current = onSelectAttachment;
          }
        }
      }
      const effect1 = obj4.useEffect(N);
      if (cResult[10] !== stateFromStores) {
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
        cResult[10] = stateFromStores;
        cResult[11] = P;
      } else {
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
      }
      if (stateFromStores != null) {
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
      }
      if (cResult[12] !== undefined) {
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
        tmp20[0] = undefined;
        cResult[12] = undefined;
        cResult[13] = tmp20;
      } else {
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
      }
      const effect2 = obj4.useEffect(P, tmp20);
      if (null != stateFromStores) {
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
      }
      if (cResult[14] !== fileTypesFormattedString) {
        let formatResult;
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
        if (null != fileTypesFormattedString) {
          class P {
            constructor() {
              let filename;
              if (stateFromStores != null) {
                filename = stateFromStores.filename;
              }
              if (null != filename) {
                const current = ref.current;
                if (current != null) {
                  current(stateFromStores.filename);
                }
              }
            }
          }
          const obj2 = { types: fileTypesFormattedString };
          formatResult = obj5.format(option(onSelectAttachment[15]).t.NRRxmz, obj2);
        }
        cResult[14] = fileTypesFormattedString;
        cResult[15] = formatResult;
      } else {
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
      }
      if (cResult[16] === stateFromStores) {
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
        if (cResult[19] === autoFocus) {
          class P {
            constructor() {
              let filename;
              if (stateFromStores != null) {
                filename = stateFromStores.filename;
              }
              if (null != filename) {
                const current = ref.current;
                if (current != null) {
                  current(stateFromStores.filename);
                }
              }
            }
          }
        }
        cResult[19] = autoFocus;
        cResult[20] = hasError;
        cResult[21] = onPress;
        cResult[22] = option;
        cResult[23] = style;
        cResult[24] = tmp23;
        cResult[25] = tmp24;
        cResult[26] = tmp26;
        cResult[27] = null != stateFromStores;
        cResult[28] = jsx(channel(onSelectAttachment[18]), { style, hasError, option, selected: null != stateFromStores, selectedItemName: tmp23, unselectedSubLabel: tmp24, leading: tmp26, onPress, autoFocus });
        const tmp35 = jsx(channel(onSelectAttachment[18]), { style, hasError, option, selected: null != stateFromStores, selectedItemName: tmp23, unselectedSubLabel: tmp24, leading: tmp26, onPress, autoFocus });
      }
      if (null != stateFromStores) {
        let tmp30;
        class P {
          constructor() {
            let filename;
            if (stateFromStores != null) {
              filename = stateFromStores.filename;
            }
            if (null != filename) {
              const current = ref.current;
              if (current != null) {
                current(stateFromStores.filename);
              }
            }
          }
        }
        if (tmp27 === option(onSelectAttachment[16]).UploadPlatform.REACT_NATIVE) {
          class P {
            constructor() {
              let filename;
              if (stateFromStores != null) {
                filename = stateFromStores.filename;
              }
              if (null != filename) {
                const current = ref.current;
                if (current != null) {
                  current(stateFromStores.filename);
                }
              }
            }
          }
          ({ isImage: obj8.isImage, isVideo: obj8.isVideo } = stateFromStores);
          tmp30 = <closure_9 uri={stateFromStores.item.uri} isImage={null} isVideo={null} />;
        }
        cResult[16] = stateFromStores;
        cResult[17] = tmp4;
        cResult[18] = tmp30;
      }
      tmp30 = <View style={tmp4.imageIconWrapper}>{jsx(option(onSelectAttachment[17]).ImageFileIcon, { size: "sm", color: "interactive-text-default" })}</View>;
    }
    const fn2 = function b() {
      let id;
      let name;
      return () => {
        const obj = channel(onSelectAttachment[14]);
        return obj.remove(id.id, name.name, DraftType.ApplicationLauncherCommand);
      };
    };
    const items1 = [channel.id, option.name];
    cResult[4] = channel.id;
    cResult[5] = option.name;
    cResult[6] = fn2;
    cResult[7] = items1;
    tmp12 = items1;
    tmp11 = fn2;
  }
  const fn = function h() {
    return UploadAttachmentStore.getUpload(channel.id, option.name, DraftType.ApplicationLauncherCommand);
  };
  cResult[1] = channel.id;
  cResult[2] = option.name;
  cResult[3] = fn;
  tmp9 = fn;
}) : ((option) => {
  let autoFocus;
  let filename1;
  let formatResult;
  let hasError;
  let onPress;
  let style;
  option = option.option;
  const channel = option.channel;
  const onSelectAttachment = option.onSelectAttachment;
  let stateFromStores;
  let ref;
  ({ style, autoFocus, hasError, onPress } = option);
  let fileTypes;
  const tmp = closure_8();
  if (option.type === option(onSelectAttachment[11]).ApplicationCommandOptionType.ATTACHMENT) {
    fileTypes = option.fileTypes;
  }
  const tmp2Result = option(onSelectAttachment[12]);
  const fileTypesFormattedString = tmp2Result.useFileTypesFormattedString(fileTypes);
  const items = [UploadAttachmentStore];
  const tmp2Result2 = option(onSelectAttachment[13]);
  stateFromStores = tmp2Result2.useStateFromStores(items, () => UploadAttachmentStore.getUpload(channel.id, option.name, DraftType.ApplicationLauncherCommand));
  const items1 = [channel.id, option.name];
  const effect = stateFromStores.useEffect(() => {
    let id;
    let name;
    return () => {
      const obj = channel(onSelectAttachment[14]);
      return obj.remove(id.id, name.name, DraftType.ApplicationLauncherCommand);
    };
  }, items1);
  ref = stateFromStores.useRef(onSelectAttachment);
  const effect1 = stateFromStores.useEffect(() => {
    ref.current = onSelectAttachment;
  });
  let filename;
  const useEffect = stateFromStores.useEffect;
  if (stateFromStores != null) {
    filename = stateFromStores.filename;
  }
  const items2 = [filename];
  const effect2 = useEffect(() => {
    let filename;
    if (stateFromStores != null) {
      filename = stateFromStores.filename;
    }
    if (null != filename) {
      const current = ref.current;
      if (current != null) {
        current(stateFromStores.filename);
      }
    }
  }, items2);
  let obj = { style, hasError, option, selected: null != stateFromStores, selectedItemName: filename1, unselectedSubLabel: formatResult, leading: null, onPress: null, autoFocus: null };
  filename1 = undefined;
  channel(onSelectAttachment[18]);
  if (null != stateFromStores) {
    filename1 = stateFromStores.filename;
  }
  formatResult = undefined;
  if (null != fileTypesFormattedString) {
    const intl = tmp2(tmp3[15]).intl;
    const obj2 = { types: fileTypesFormattedString };
    formatResult = intl.format(tmp2(tmp3[15]).t.NRRxmz, obj2);
  }
  if (null != stateFromStores) {
    let tmp12Result;
    if (stateFromStores.item.platform === option(onSelectAttachment[16]).UploadPlatform.REACT_NATIVE) {
      ({ isImage: obj6.isImage, isVideo: obj6.isVideo } = stateFromStores);
      tmp12Result = <closure_9 uri={stateFromStores.item.uri} isImage={null} isVideo={null} />;
    }
    obj.leading = tmp12Result;
    obj.onPress = onPress;
    obj.autoFocus = autoFocus;
    return <tmp13 {...obj} />;
  }
  tmp12Result = <ref style={tmp.imageIconWrapper}>{jsx(option(onSelectAttachment[17]).ImageFileIcon, { size: "sm", color: "interactive-text-default" })}</ref>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx");

export default tmp3;