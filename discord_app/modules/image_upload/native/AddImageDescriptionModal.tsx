// discord_app/modules/image_upload/native/AddImageDescriptionModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ModalStackNavigatorDefault from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";

require = fn;
function AddDescription(id) {
  ({ source, channelId } = id);
  id = id.id;
  let stateFromStores;
  value = undefined;
  noop = undefined;
  let navigation;
  const tmp = closure_12();
  const items = [UploadAttachmentStore];
  stateFromStores = channelId(stateFromStores[8]).useStateFromStores(items, () =>
    UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage),
  );
  ({ width, height } = source);
  let num = 1;
  let obj = channelId(stateFromStores[8]);
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
  const tmp6 = id(stateFromStores[9])({ ignoreKeyboard: true });
  navigation = channelId(stateFromStores[10]).useNavigation();
  const insets = tmp5(tmp3[11])({ includeKeyboardHeight: true }).insets;
  const obj3 = { insets, inputs: null, scrollViewRef: ref1 };
  const items1 = [{ ref, offset: { type: "toBottom" } }];
  obj3.inputs = items1;
  id(stateFromStores[12])(obj3);
  const items2 = [value];
  const effect = obj2.useEffect(() => {
    closure_4.current = current;
  }, items2);
  const items3 = [channelId, id, stateFromStores, navigation];
  const effect1 = obj2.useEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const intl = channelId(stateFromStores[14]).intl;
        const renderHeaderTextButton = channelId(stateFromStores[13]).getRenderHeaderTextButton(
          intl.string(channelId(stateFromStores[14]).t["R3BPH+"]),
          () => {
            const obj2 = {};
            const merged = Object.assign(dependencyMap);
            obj2.description = ref.current;
            id(9502).update(closure_1_0, closure_1_1, ChannelMessage.ChannelMessage, obj2);
            const obj = id(9502);
            id(11591).close();
          },
        );
        let merged = Object.assign(arg0);
        return renderHeaderTextButton({});
      },
    });
  }, items3);
  const obj4 = { ref: ref1, style: tmp.contentContainer, contentContainerStyle: null, children: null };
  const tmp2Result = channelId(stateFromStores[10]);
  obj4.contentContainerStyle = {
    padding: id(stateFromStores[7]).space.PX_16,
    paddingBottom: insets.bottom + id(stateFromStores[7]).space.PX_16,
  };
  const obj6 = { style: tmp.imageContainer, children: null };
  const obj7 = { style: null, source };
  const items4 = [tmp.image, { aspectRatio: num, maxHeight: tmp6.height / 2 }];
  obj7.style = items4;
  obj6.children = closure_10(closure_6, obj7);
  const items5 = [closure_10(navigation, obj6)];
  const obj8 = {
    ref,
    containerStyle: null,
    label: null,
    placeholder: null,
    value: null,
    onChange: null,
    placeholderTextColor: null,
    maxLength: 1000,
    autoFocus: true,
  };
  const obj5 = {
    padding: id(stateFromStores[7]).space.PX_16,
    paddingBottom: insets.bottom + id(stateFromStores[7]).space.PX_16,
  };
  obj8.containerStyle = { paddingTop: id(stateFromStores[7]).space.PX_16 };
  let intl = tmp2(tmp3[14]).intl;
  obj8.label = intl.string(channelId(stateFromStores[14]).t.eOB2eR);
  const intl2 = tmp2(tmp3[14]).intl;
  obj8.placeholder = intl2.string(channelId(stateFromStores[14]).t.RNH1jn);
  obj8.value = value;
  obj8.onChange = tmp7[1];
  obj8.placeholderTextColor = tmp.placeholderText.color;
  items5[1] = closure_10(channelId(stateFromStores[17]).TextArea, obj8);
  obj4.children = items5;
  return closure_11(closure_7, obj4);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const DraftType = fn(5192).DraftType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  contentContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  imageContainer: null,
  image: null,
  placeholderText: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.imageContainer = { alignItems: "center", borderRadius: nativeDefault.radii.sm };
let size = { width: "100%", resizeMode: "contain", height: "Array", borderRadius: nativeDefault.radii.sm };
obj2.image = size;
let obj4 = { alignItems: "center", borderRadius: nativeDefault.radii.sm };
obj2.placeholderText = { color: nativeDefault.colors.TEXT_MUTED };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModal.tsx");

export default function AddImageDescriptionModal(arg0) {
  ({ source: require, channelId: importDefault, id: dependencyMap } = arg0);
  const obj = { screenKey: "addImageDescriptionModal", title: null, render: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["5S2AK+"]);
  obj.render = function render() {
    return closure_2_10(AddDescription, { source, channelId, id });
  };
  return closure_10(ModalStackNavigatorDefault, obj);
}
