// === Module 12680: ConjureNativeStepImages ===

// Module 12680 (ConjureNativeStepImages)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12455 */;
import openConjureNativeImages from "openConjureNativeImages" /* 12456 */;
import noop from "module_19" /* 19 */;

require = fn;
function StepImage(image) {
  image = image.image;
  const onOpen = image.onOpen;
  let tmp = closure_9();
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
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, Pressable: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { strip: { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_4 }, thumb: null, placeholder: null };
let obj3 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_4 };
obj2.thumb = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.placeholder = { height: 96, aspectRatio: 1.6, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeStepImages.tsx");

export default function ConjureNativeStepImages(projectId) {
  projectId = projectId.projectId;
  const images = projectId.images;
  const items = [images, projectId];
  const onOpen = noop.useCallback((arg0) => {
    const id = arg0;
    const mapped = images.map((id) => ({ id: id.id, alt: id.name }));
    const result = openConjureNativeImages.openConjureNativeImages(projectId, mapped, images.findIndex((id) => id.id === id.id));
  }, items);
  let tmp2 = null;
  if (0 !== images.length) {
    const obj = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.strip, children: images.map((image) => <StepImage key={image.id} projectId={projectId} image={image} onOpen={onOpen} />) };
    tmp2 = <closure_6 horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tmp.strip}>{images.map((image) => <StepImage key={image.id} projectId={projectId} image={image} onOpen={onOpen} />)}</closure_6>;
  }
  return tmp2;
};