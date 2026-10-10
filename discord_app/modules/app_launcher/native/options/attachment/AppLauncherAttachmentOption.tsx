// discord_app/modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import FileIcon from "../../../../../design/components/Icon/native/redesign/generated/FileIcon.tsx";
import AttachmentPreviewDefault from "../../../../media/native/AttachmentPreview.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../../../../stores/UploadAttachmentStore.tsx";

require = fn;
let View = fn(17).View;
const DraftType = fn(7243).DraftType;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { imageIconWrapper: null, selectedImage: null };
let size = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.lg,
};
obj2.imageIconWrapper = size;
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.selectedImage = size1;
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AttachmentPreviewAppLauncher(arg0) {
      const cResult = c.c(8);
      ({ uri, isImage, isVideo } = arg0);
      const tmp4 = closure_8();
      ({ width, height } = tmp4.selectedImage);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(FileIcon.FileIcon, { size: "sm" });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === height) {
        if (cResult[2] === isImage) {
          if (cResult[3] === isVideo) {
            if (cResult[4] === tmp4.selectedImage) {
              if (cResult[5] === uri) {
                if (cResult[6] === width) {
                  let tmp8 = cResult[7];
                }
                return tmp8;
              }
            }
          }
        }
      }
      const size = { uri, isImage, isVideo, width, height, style: tmp4.selectedImage, defaultPreview: first };
      const tmp9 = jsx(AttachmentPreviewDefault, {
        uri,
        isImage,
        isVideo,
        width,
        height,
        style: tmp4.selectedImage,
        defaultPreview: first,
      });
      cResult[1] = height;
      cResult[2] = isImage;
      cResult[3] = isVideo;
      cResult[4] = tmp4.selectedImage;
      cResult[5] = uri;
      cResult[6] = width;
      cResult[7] = tmp9;
      tmp8 = tmp9;
    }
  : function AttachmentPreviewAppLauncher(arg0) {
      ({ uri, isImage, isVideo } = arg0);
      const tmp = closure_8();
      ({ width, height } = tmp.selectedImage);
      const size = {
        uri,
        isImage,
        isVideo,
        width,
        height,
        style: tmp.selectedImage,
        defaultPreview: jsx(FileIcon.FileIcon, { size: "sm" }),
      };
      return jsx(AttachmentPreviewDefault, {
        uri,
        isImage,
        isVideo,
        width,
        height,
        style: tmp.selectedImage,
        defaultPreview: jsx(FileIcon.FileIcon, { size: "sm" }),
      });
    };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherAttachmentOption(option) {
      const cResult = option(onSelectAttachment[8]).c(29);
      option = option.option;
      const channel = option.channel;
      ({ style, autoFocus, hasError, onPress, onSelectAttachment } = option);
      const tmp4 = closure_8();
      let fileTypes;
      if (option.type === option(onSelectAttachment[11]).ApplicationCommandOptionType.ATTACHMENT) {
        fileTypes = option.fileTypes;
      }
      const obj = option(onSelectAttachment[8]);
      const fileTypesFormattedString = option(onSelectAttachment[12]).useFileTypesFormattedString(fileTypes);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UploadAttachmentStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channel.id) {
        if (cResult[2] === option.name) {
          let tmp9 = cResult[3];
        }
        const stateFromStores = tmp(onSelectAttachment[13]).useStateFromStores(first, tmp9);
        if (cResult[4] === channel.id) {
          if (cResult[5] === option.name) {
            let tmp11 = cResult[6];
            let tmp12 = cResult[7];
          }
          const effect = stateFromStores.useEffect(tmp11, tmp12);
          View = stateFromStores.useRef(onSelectAttachment);
          if (cResult[8] !== onSelectAttachment) {
            class P {
              constructor() {
                closure_4.current = onSelectAttachment;
                return;
              }
            }
            cResult[8] = onSelectAttachment;
            cResult[9] = P;
          } else {
            class P {
              constructor() {
                closure_4.current = onSelectAttachment;
                return;
              }
            }
          }
          const effect1 = obj4.useEffect(P);
          if (cResult[10] !== stateFromStores) {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
            cResult[10] = stateFromStores;
            cResult[11] = V;
          } else {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
          }
          if (stateFromStores != null) {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
          }
          if (cResult[12] !== undefined) {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
            tmp20[0] = tmp18;
            cResult[12] = tmp18;
            cResult[13] = tmp20;
          } else {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
          }
          const effect2 = obj4.useEffect(V, tmp20);
          if (null != stateFromStores) {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
          }
          if (cResult[14] !== fileTypesFormattedString) {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
            if (null != fileTypesFormattedString) {
              class V {
                constructor() {
                  tmp = closure_3;
                  filename = undefined;
                  if (closure_3 != null) {
                    filename = tmp.filename;
                  }
                  if (null != filename) {
                    current = closure_4.current;
                    if (current != null) {
                      currentResult = current(tmp.filename);
                    }
                  }
                  return;
                }
              }
              const obj2 = { types: fileTypesFormattedString };
              const formatResult = obj5.format(tmp(onSelectAttachment[15]).t.NRRxmz, obj2);
            }
            cResult[14] = fileTypesFormattedString;
            cResult[15] = formatResult;
          } else {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
          }
          if (cResult[16] === stateFromStores) {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
          }
          if (null == stateFromStores) {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
            const obj3 = {
              style: tmp4.imageIconWrapper,
              children: jsx(tmp(onSelectAttachment[17]).ImageFileIcon, {
                size: "sm",
                color: "interactive-text-default",
              }),
            };
            let tmp27 = (
              <View style={tmp4.imageIconWrapper}>
                {jsx(tmp(onSelectAttachment[17]).ImageFileIcon, { size: "sm", color: "interactive-text-default" })}
              </View>
            );
            cResult[16] = stateFromStores;
            cResult[17] = tmp4;
            cResult[18] = tmp27;
          } else {
            class V {
              constructor() {
                tmp = closure_3;
                filename = undefined;
                if (closure_3 != null) {
                  filename = tmp.filename;
                }
                if (null != filename) {
                  current = closure_4.current;
                  if (current != null) {
                    currentResult = current(tmp.filename);
                  }
                }
                return;
              }
            }
          }
          const obj6 = { uri: stateFromStores.item.uri, isImage: null, isVideo: null };
          ({ isImage: obj8.isImage, isVideo: obj8.isVideo } = stateFromStores);
          tmp27 = <closure_9 uri={stateFromStores.item.uri} isImage={null} isVideo={null} />;
        }
        const fn2 = function b() {
          return () => channel(onSelectAttachment[14]).remove(id.id, name.name, DraftType.ApplicationLauncherCommand);
        };
        const items1 = [channel.id, option.name];
        cResult[4] = channel.id;
        cResult[5] = option.name;
        cResult[6] = fn2;
        cResult[7] = items1;
        tmp12 = items1;
        tmp11 = fn2;
        const tmpResult2 = tmp(onSelectAttachment[13]);
      }
      const fn = function f() {
        return UploadAttachmentStore.getUpload(channel.id, option.name, DraftType.ApplicationLauncherCommand);
      };
      cResult[1] = channel.id;
      cResult[2] = option.name;
      cResult[3] = fn;
      tmp9 = fn;
      const tmpResult = option(onSelectAttachment[12]);
    }
  : function AppLauncherAttachmentOption(option) {
      option = option.option;
      const channel = option.channel;
      const onSelectAttachment = option.onSelectAttachment;
      let stateFromStores;
      let ref;
      ({ style, autoFocus, hasError, onPress } = option);
      let fileTypes;
      if (option.type === option(onSelectAttachment[11]).ApplicationCommandOptionType.ATTACHMENT) {
        fileTypes = option.fileTypes;
      }
      const tmp = closure_8();
      const fileTypesFormattedString = option(onSelectAttachment[12]).useFileTypesFormattedString(fileTypes);
      const tmp2Result = option(onSelectAttachment[12]);
      const items = [UploadAttachmentStore];
      stateFromStores = option(onSelectAttachment[13]).useStateFromStores(items, () =>
        UploadAttachmentStore.getUpload(channel.id, option.name, DraftType.ApplicationLauncherCommand),
      );
      const items1 = [channel.id, option.name];
      const effect = stateFromStores.useEffect(
        () => () => channel(onSelectAttachment[14]).remove(id.id, name.name, DraftType.ApplicationLauncherCommand),
        items1,
      );
      ref = stateFromStores.useRef(onSelectAttachment);
      const effect1 = stateFromStores.useEffect(() => {
        closure_4.current = onSelectAttachment;
      });
      let filename;
      if (stateFromStores != null) {
        filename = stateFromStores.filename;
      }
      const items2 = [filename];
      const effect2 = stateFromStores.useEffect(() => {
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
      const obj = {
        style,
        hasError,
        option,
        selected: null != stateFromStores,
        selectedItemName: null,
        unselectedSubLabel: null,
        leading: null,
        onPress: null,
        autoFocus: null,
      };
      let filename1;
      const tmp2Result2 = option(onSelectAttachment[13]);
      if (null != stateFromStores) {
        filename1 = stateFromStores.filename;
      }
      obj.selectedItemName = filename1;
      let formatResult;
      if (null != fileTypesFormattedString) {
        const intl = tmp2(tmp3[15]).intl;
        const obj2 = { types: fileTypesFormattedString };
        formatResult = intl.format(tmp2(tmp3[15]).t.NRRxmz, obj2);
      }
      obj.unselectedSubLabel = formatResult;
      if (null != stateFromStores) {
        if (stateFromStores.item.platform === tmp2(tmp3[16]).UploadPlatform.REACT_NATIVE) {
          const obj3 = { uri: stateFromStores.item.uri, isImage: null, isVideo: null };
          ({ isImage: obj6.isImage, isVideo: obj6.isVideo } = stateFromStores);
          let tmp12Result = <closure_9 uri={stateFromStores.item.uri} isImage={null} isVideo={null} />;
        }
        obj.leading = tmp12Result;
        obj.onPress = onPress;
        obj.autoFocus = autoFocus;
        return <tmp13 {...obj} />;
      }
      const tmp13 = channel(onSelectAttachment[18]);
      tmp12Result = (
        <ref style={tmp.imageIconWrapper}>
          {jsx(option(onSelectAttachment[17]).ImageFileIcon, { size: "sm", color: "interactive-text-default" })}
        </ref>
      );
      const obj4 = {
        style: tmp.imageIconWrapper,
        children: jsx(option(onSelectAttachment[17]).ImageFileIcon, { size: "sm", color: "interactive-text-default" }),
      };
    };
