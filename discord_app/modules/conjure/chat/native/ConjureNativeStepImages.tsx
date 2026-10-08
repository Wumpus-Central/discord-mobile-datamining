// === Module 16967: ConjureNativeStepImages ===

// Module 16967 (ConjureNativeStepImages)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 6164 */;
import openMediaModal from "openMediaModal" /* 8362 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 16941 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const getAttachmentUrl = fn(13072).getAttachmentUrl;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { strip: { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_4 }, thumb: null, placeholder: null };
let obj3 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_4 };
obj2.thumb = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.placeholder = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function StepImage(image) {
  const cResult = c.c(12);
  let name = image.image;
  const onOpen = image.onOpen;
  let thumb = closure_10();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(image.projectId, name.id);
  ({ src, handleError } = conjureAttachmentImage);
  if (cResult[0] === name) {
    if (cResult[1] === onOpen) {
      let tmp5 = cResult[2];
    }
    if (tmp4) {
      return null;
    } else {
      if (cResult[3] === handleError) {
        if (cResult[4] === src) {
          if (cResult[5] === thumb.placeholder) {
            if (cResult[6] === thumb.thumb) {
              if (cResult[8] === tmp5) {
                if (cResult[9] === name.name) {
                }
              }
              const obj3 = { onPress: tmp5, accessibilityRole: "imagebutton", accessibilityLabel: name.name, children: cResult[7] };
              const tmp19 = <hasOwnProperty onPress={tmp5} accessibilityRole="imagebutton" accessibilityLabel={name.name}>{cResult[7]}</hasOwnProperty>;
              cResult[8] = tmp5;
              name = name.name;
              cResult[9] = name;
              cResult[10] = cResult[7];
              cResult[11] = tmp19;
            }
          }
        }
      }
      if (null == src) {
        const obj4 = { style: thumb.placeholder, children: <React4 size="small" /> };
        let tmp11 = <React5 style={thumb.placeholder}><React4 size="small" /></React5>;
      } else {
        const obj5 = { source: null, style: null, resizeMode: "cover", onError: null };
        const obj6 = { uri: src };
        obj5.source = obj6;
        obj5.style = thumb.thumb;
        obj5.onError = handleError;
        tmp11 = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover", onError: null });
      }
      cResult[3] = handleError;
      cResult[4] = src;
      src = thumb.placeholder;
      cResult[5] = src;
      thumb = thumb.thumb;
      cResult[6] = thumb;
      cResult[7] = tmp11;
    }
  }
  const fn = function n() {
    return onOpen(name);
  };
  cResult[0] = name;
  cResult[1] = onOpen;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function StepImage(image) {
  image = image.image;
  const onOpen = image.onOpen;
  let tmp = closure_10();
  const conjureAttachmentImage = useConjureAttachmentImage.useConjureAttachmentImage(image.projectId, image.id);
  const src = conjureAttachmentImage.src;
  const items = [image, onOpen];
  ({ gone, handleError } = conjureAttachmentImage);
  if (gone) {
    return null;
  } else {
    const obj2 = { onPress: tmp4, accessibilityRole: "imagebutton", accessibilityLabel: image.name, children: null };
    if (null == src) {
      const obj3 = { style: tmp.placeholder, children: null };
      tmp = React4;
      obj3.children = <React4 size="small" />;
      let tmp5Result = <React5 style={tmp.placeholder}>{null}</React5>;
    } else {
      const obj4 = { source: null, style: null, resizeMode: "cover", onError: null };
      const obj5 = { uri: src };
      obj4.source = obj5;
      obj4.style = tmp.thumb;
      obj4.onError = handleError;
      tmp5Result = jsx(FastImageDefault, { source: null, style: null, resizeMode: "cover", onError: null });
    }
    obj2.children = tmp5Result;
    <hasOwnProperty onPress={tmp4} accessibilityRole="imagebutton" accessibilityLabel={image.name}>{null}</hasOwnProperty>;
  }
});
ReactCompilerGating = fn(558);
let obj5 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeStepImages.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeStepImages(projectId) {
  const cResult = projectId(576).c(13);
  projectId = projectId.projectId;
  let images = projectId.images;
  const tmp2 = closure_10();
  if (cResult[0] === images) {
    if (cResult[1] === projectId) {
      let tmp3 = cResult[2];
    }
    dependencyMap = tmp3;
    if (0 === images.length) {
      return null;
    } else {
      if (cResult[3] === tmp3) {
        if (cResult[4] === images) {
          if (cResult[5] === projectId) {
            if (cResult[10] === tmp2.strip) {
              if (cResult[11] === tmp4) {
                let tmp8 = cResult[12];
              }
              return tmp8;
            }
            class C {
              constructor(arg0) {
                obj = { projectId, image: projectId, onOpen: closure_2 };
                return jsx(StepImage, obj, projectId.id);
              }
            }
            const obj2 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp12, children: cResult[6] };
            const tmp10 = <closure_6 horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tmp12}>{cResult[6]}</closure_6>;
            cResult[10] = tmp2.strip;
            cResult[11] = cResult[6];
            cResult[12] = tmp10;
            tmp8 = tmp10;
          }
        }
      }
      if (cResult[7] === tmp3) {
        if (cResult[8] === projectId) {
          let tmp5 = cResult[9];
        }
        let mapped = images.map(tmp5);
        class C {
          constructor(arg0) {
            obj = { projectId, image: projectId, onOpen: closure_2 };
            return jsx(StepImage, obj, projectId.id);
          }
        }
        cResult[3] = tmp3;
        cResult[4] = images;
        cResult[5] = projectId;
        cResult[6] = mapped;
      }
      class C {
        constructor(arg0) {
          obj = { projectId, image: projectId, onOpen: closure_2 };
          return jsx(StepImage, obj, projectId.id);
        }
      }
      cResult[7] = tmp3;
      cResult[8] = projectId;
      cResult[9] = C;
      tmp5 = C;
    }
  }
  const fn = function n(arg0) {
    const id = arg0;
    images = images.findIndex((id) => id.id === id.id);
    Promise.all(images.map((id) => getAttachmentUrl(closure_0, id.id))).then((arr) => {
      const mapped = arr.map((uri, mediaIndex) => {
        const size = { uri, mediaIndex, width: 1280, height: 800, accessoryType: "embed", description: closure_1_1[mediaIndex].name, disableDownload: true };
        return size;
      });
      const obj = openMediaModal;
      obj.openMediaModal({ initialSources: mapped, initialIndex: Math.max(0, closure_1), analyticsSource: "VibegrationsChat", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true });
    }, () => {

    });
  };
  cResult[0] = images;
  cResult[1] = projectId;
  cResult[2] = fn;
  tmp3 = fn;
  let obj = projectId(576);
}) : (function ConjureNativeStepImages(projectId) {
  projectId = projectId.projectId;
  let images = projectId.images;
  const items = [images, projectId];
  const onOpen = noop.useCallback((arg0) => {
    const id = arg0;
    images = images.findIndex((id) => id.id === id.id);
    Promise.all(images.map((id) => getAttachmentUrl(closure_0, id.id))).then((arr) => {
      const mapped = arr.map((uri, mediaIndex) => {
        const size = { uri, mediaIndex, width: 1280, height: 800, accessoryType: "embed", description: closure_1_1[mediaIndex].name, disableDownload: true };
        return size;
      });
      const obj = openMediaModal;
      obj.openMediaModal({ initialSources: mapped, initialIndex: Math.max(0, closure_1), analyticsSource: "VibegrationsChat", shareable: false, disableDownload: true, disableMediaOverlayButton: true, disableMediaOverlayFooter: true });
    }, () => {

    });
  }, items);
  let tmp2 = null;
  if (0 !== images.length) {
    let obj = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.strip, children: images.map((image) => <closure_11 key={image.id} projectId={projectId} image={image} onOpen={onOpen} />) };
    tmp2 = <closure_6 horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tmp.strip}>{images.map((image) => <closure_11 key={image.id} projectId={projectId} image={image} onOpen={onOpen} />)}</closure_6>;
  }
  return tmp2;
});