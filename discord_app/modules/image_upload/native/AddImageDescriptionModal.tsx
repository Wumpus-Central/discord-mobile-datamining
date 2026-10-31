// === Module 14509: AddImageDescriptionModal ===

// Module 14509 (AddImageDescriptionModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10143 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8208 */;

require = fn;
function AddDescription(id) {
  ({ source, channelId } = id);
  id = id.id;
  let stateFromStores;
  value = undefined;
  noop = undefined;
  let navigation;
  const tmp = closure_13();
  const items = [UploadAttachmentStore];
  stateFromStores = channelId(stateFromStores[9]).useStateFromStores(items, () => UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage));
  ({ width, height } = source);
  let num = 1;
  let obj = channelId(stateFromStores[9]);
  if (null != width) {
    num = 1;
    if (null != height) {
      num = 1;
      if (0 !== width) {
        num = 1;
        if (0 !== height) {
          num = width / height;
        }
      }
    }
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.description;
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = value(noop.useState(str), 2);
  value = tmp7[0];
  noop = obj2.useRef(value);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const tmp6 = id(stateFromStores[10])({ ignoreKeyboard: true });
  navigation = channelId(stateFromStores[11]).useNavigation();
  const insets = tmp5(tmp3[12])({ includeKeyboardHeight: true }).insets;
  const obj3 = { insets, inputs: null, scrollViewRef: ref1 };
  const items1 = [{ ref, offset: { type: "toBottom" } }];
  obj3.inputs = items1;
  id(stateFromStores[13])(obj3);
  const items2 = [value];
  const effect = obj2.useEffect(() => {
    closure_4.current = current;
  }, items2);
  const items3 = [channelId, id, stateFromStores, navigation];
  const effect1 = obj2.useEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const intl = channelId(stateFromStores[15]).intl;
        const renderHeaderTextButton = channelId(stateFromStores[14]).getRenderHeaderTextButton(intl.string(channelId(stateFromStores[15]).t["R3BPH+"]), () => {
          const obj2 = {};
          const merged = Object.assign(dependencyMap);
          obj2.description = ref.current;
          id(9778).update(closure_1_0, closure_1_1, ChannelMessage.ChannelMessage, obj2);
          const obj = id(9778);
          id(14508).close();
        });
        let merged = Object.assign(arg0);
        return renderHeaderTextButton({});
      }
    });
  }, items3);
  const obj4 = { ref: ref1, style: tmp.contentContainer, contentContainerStyle: null, children: null };
  const tmp2Result = channelId(stateFromStores[11]);
  obj4.contentContainerStyle = { padding: id(stateFromStores[8]).space.PX_16, paddingBottom: insets.bottom + id(stateFromStores[8]).space.PX_16 };
  const obj6 = { style: tmp.imageContainer, children: null };
  const obj7 = { style: null, source: { uri: source.uri } };
  const items4 = [tmp.image, { aspectRatio: num, maxHeight: tmp6.height / 2 }];
  obj7.style = items4;
  obj6.children = closure_11(closure_6, obj7);
  const items5 = [closure_11(navigation, obj6), ];
  const obj8 = { ref, containerStyle: null, label: null, placeholder: null, value: null, onChange: null, placeholderTextColor: null, maxLength: null, autoFocus: true };
  const obj5 = { padding: id(stateFromStores[8]).space.PX_16, paddingBottom: insets.bottom + id(stateFromStores[8]).space.PX_16 };
  obj8.containerStyle = { paddingTop: id(stateFromStores[8]).space.PX_16 };
  let intl = tmp2(tmp3[15]).intl;
  obj8.label = intl.string(channelId(stateFromStores[15]).t.eOB2eR);
  const intl2 = tmp2(tmp3[15]).intl;
  obj8.placeholder = intl2.string(channelId(stateFromStores[15]).t.RNH1jn);
  obj8.value = value;
  obj8.onChange = tmp7[1];
  obj8.placeholderTextColor = tmp.placeholderText.color;
  obj8.maxLength = maxLength;
  items5[1] = closure_11(channelId(stateFromStores[18]).TextArea, obj8);
  obj4.children = items5;
  return closure_12(closure_7, obj4);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const DraftType = fn(7701).DraftType;
const maxLength = fn(14510).MAX_ATTACHMENT_DESCRIPTION_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { contentContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, imageContainer: null, image: null, placeholderText: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.imageContainer = { alignItems: "center", borderRadius: nativeDefault.radii.sm };
let size = { width: "100%", resizeMode: "contain", height: "Array", borderRadius: nativeDefault.radii.sm };
obj2.image = size;
let obj4 = { alignItems: "center", borderRadius: nativeDefault.radii.sm };
obj2.placeholderText = { color: nativeDefault.colors.TEXT_MUTED };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModal.tsx");

export default function AddImageDescriptionModal(arg0) {
  ({ source: require, channelId: importDefault, id: dependencyMap } = arg0);
  const obj = { screenKey: "addImageDescriptionModal", title: null, render: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["5S2AK+"]);
  obj.render = function render() {
    return closure_2_11(AddDescription, { source, channelId, id });
  };
  return closure_11(ModalStackNavigatorDefault, obj);
};