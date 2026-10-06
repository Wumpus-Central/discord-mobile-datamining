// === Module 16694: ConjureNativeStepImages ===

// Module 16694 (ConjureNativeStepImages)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import openMediaModal from "openMediaModal" /* 7944 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 16678 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let onOpen;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ ActivityIndicator: c3, Image: closure_4, Pressable: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
const getAttachmentUrl = ConjureConnectionStore.getAttachmentUrl;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { strip: obj2, thumb: obj3, placeholder: obj4 };
obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((image) => {
  let handleError;
  let src;
  const obj = react2;
  const cResult = obj.c(12);
  image = image.image;
  onOpen = image.onOpen;
  const projectId = image.projectId;
  const tmp2 = closure_10();
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, image.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (cResult[0] === image) {
    let tmp5;
    if (cResult[1] === onOpen) {
      tmp5 = cResult[2];
    }
    let tmp7 = null;
    if (!tmp4) {
      let tmp11;
      if (cResult[3] === handleError) {
        if (cResult[4] === src) {
          if (cResult[5] === tmp2.placeholder) {
            let tmp8;
            if (cResult[6] === tmp2.thumb) {
              tmp8 = cResult[7];
            }
            if (cResult[8] === tmp5) {
              if (cResult[9] === image.name) {
                let tmp15;
                if (cResult[10] === tmp8) {
                  tmp15 = cResult[11];
                }
                tmp7 = tmp15;
              }
            }
            const tmp18 = <hasOwnProperty onPress={tmp5} accessibilityRole="imagebutton" accessibilityLabel={image.name}>{tmp8}</hasOwnProperty>;
            cResult[8] = tmp5;
            cResult[9] = image.name;
            cResult[10] = tmp8;
            cResult[11] = tmp18;
            tmp15 = tmp18;
          }
        }
      }
      if (null == src) {
        tmp11 = <metroImportDefault style={tmp2.placeholder}><_false size="small" /></metroImportDefault>;
      } else {
        tmp11 = <React3 source={{ uri: src }} style={tmp2.thumb} resizeMode="cover" onError={handleError} />;
        const obj6 = { uri: src };
      }
      cResult[3] = handleError;
      cResult[4] = src;
      cResult[5] = tmp2.placeholder;
      cResult[6] = tmp2.thumb;
      cResult[7] = tmp11;
      tmp8 = tmp11;
    }
    return tmp7;
  }
  const fn = function n() {
    return onOpen(image);
  };
  cResult[0] = image;
  cResult[1] = onOpen;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((image) => {
  let gone;
  let handleError;
  image = image.image;
  onOpen = image.onOpen;
  const projectId = image.projectId;
  const tmp = closure_10();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, image.id);
  const src = conjureAttachmentImage.src;
  const items = [image, onOpen];
  ({ gone, handleError } = conjureAttachmentImage);
  let tmp5Result2 = null;
  if (!gone) {
    let tmp5Result;
    if (null == src) {
      tmp5Result = <metroImportDefault style={tmp.placeholder}><_false size="small" /></metroImportDefault>;
    } else {
      tmp5Result = <React3 source={{ uri: src }} style={tmp.thumb} resizeMode="cover" onError={handleError} />;
      const obj5 = { uri: src };
    }
    tmp5Result2 = <hasOwnProperty onPress={tmp3} accessibilityRole="imagebutton" accessibilityLabel={image.name}>{tmp5Result}</hasOwnProperty>;
  }
  return tmp5Result2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let images;
  let obj = projectId(images[7]);
  const cResult = obj.c(13);
  projectId = projectId.projectId;
  images = projectId.images;
  const tmp2 = closure_10();
  if (cResult[0] === images) {
    let tmp3;
    if (cResult[1] === projectId) {
      tmp3 = cResult[2];
    }
    onOpen = tmp3;
    if (0 === images.length) {
      return null;
    } else {
      let tmp4;
      if (cResult[3] === tmp3) {
        if (cResult[4] === images) {
          if (cResult[5] === projectId) {
            tmp4 = cResult[6];
          }
          if (cResult[10] === tmp2.strip) {
            let tmp7;
            if (cResult[11] === tmp4) {
              tmp7 = cResult[12];
            }
            return tmp7;
          }
          class C {
            constructor(image) {
              return <closure_11 key={image.id} projectId={projectId} image={image} onOpen={onOpen} />;
            }
          }
          const tmp9 = <closure_6 horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tmp11}>{tmp4}</closure_6>;
          cResult[10] = tmp2.strip;
          cResult[11] = tmp4;
          cResult[12] = tmp9;
          tmp7 = tmp9;
        }
      }
      if (cResult[7] === tmp3) {
        let tmp5;
        if (cResult[8] === projectId) {
          tmp5 = cResult[9];
        }
        let mapped = images.map(tmp5);
        class C {
          constructor(image) {
            return <closure_11 key={image.id} projectId={projectId} image={image} onOpen={onOpen} />;
          }
        }
        cResult[3] = tmp3;
        cResult[4] = images;
        cResult[5] = projectId;
        cResult[6] = mapped;
        tmp4 = mapped;
      }
      class C {
        constructor(image) {
          return <closure_11 key={image.id} projectId={projectId} image={image} onOpen={onOpen} />;
        }
      }
      cResult[7] = tmp3;
      cResult[8] = projectId;
      cResult[9] = C;
      tmp5 = C;
    }
  }
  const fn = function n(arg0) {
    let closure_1;
    const id = arg0;
    images = images.findIndex((id) => id.id === id.id);
    const allPromises = Promise.all(images.map((id) => getAttachmentUrl(id, id.id)));
    allPromises.then((arr) => {
      const mapped = arr.map((uri, mediaIndex) => {
        size = { uri, mediaIndex, width: 1280, height: 800, accessoryType: "embed", description: closure_1_1[mediaIndex].name, disableDownload: true };
        return size;
      });
      const obj = openMediaModal;
      const obj2 = { initialSources: mapped, initialIndex: Math.max(0, closure_1), analyticsSource: "VibegrationsChat", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
      obj.openMediaModal(obj2);
    }, () => {

    });
  };
  cResult[0] = images;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((projectId) => {
  projectId = projectId.projectId;
  let images = projectId.images;
  onOpen = undefined;
  const items = [images, projectId];
  const tmp = closure_10();
  onOpen = onOpen.useCallback((arg0) => {
    let closure_1;
    const id = arg0;
    images = images.findIndex((id) => id.id === id.id);
    const allPromises = Promise.all(images.map((id) => getAttachmentUrl(id, id.id)));
    allPromises.then((arr) => {
      const mapped = arr.map((uri, mediaIndex) => {
        size = { uri, mediaIndex, width: 1280, height: 800, accessoryType: "embed", description: closure_1_1[mediaIndex].name, disableDownload: true };
        return size;
      });
      const obj = openMediaModal;
      const obj2 = { initialSources: mapped, initialIndex: Math.max(0, closure_1), analyticsSource: "VibegrationsChat", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true };
      obj.openMediaModal(obj2);
    }, () => {

    });
  }, items);
  let tmp2 = null;
  if (0 !== images.length) {
    tmp2 = <closure_6 horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tmp.strip}>{images.map((image) => <closure_11 key={image.id} projectId={projectId} image={image} onOpen={onOpen} />)}</closure_6>;
  }
  return tmp2;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeStepImages.tsx");

export default tmp4;