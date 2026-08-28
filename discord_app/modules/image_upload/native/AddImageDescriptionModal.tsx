// === Module 10816: AddDescription ===

// Module 10816 (AddDescription)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef10599 from "module_10599" /* 10599 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { DraftType } from "handleChanged" /* 4820 */;
import closure_9 from "map" /* 4819 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function AddDescription(id) {
  ({ source, channelId } = id);
  id = id.id;
  let stateFromStores;
  let first;
  let React;
  let navigation;
  const tmp = callback3();
  let obj = channelId(stateFromStores[8]);
  const items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getUpload(channelId, id, closure_1_8.ChannelMessage));
  ({ width, height } = source);
  let num = 1;
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
  obj1 = React;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.description;
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = first(React.useState(str), 2);
  first = tmp7[0];
  React = obj1.useRef(first);
  const ref = obj1.useRef(null);
  const ref1 = obj1.useRef(null);
  const tmp6 = id(stateFromStores[9])({ ignoreKeyboard: true });
  navigation = channelId(stateFromStores[10]).useNavigation();
  const insets = tmp5(tmp3[11])({ includeKeyboardHeight: true }).insets;
  const items1 = [{ ref, offset: { type: "toBottom" } }];
  id(stateFromStores[12])({ insets, inputs: items1, scrollViewRef: ref1 });
  const items2 = [first];
  const effect = obj1.useEffect(() => {
    closure_4.current = first;
  }, items2);
  const items3 = [channelId, id, stateFromStores, navigation];
  const effect1 = obj1.useEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let obj = closure_1_0(closure_1_2[13]);
        const intl = closure_1_0(closure_1_2[14]).intl;
        obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(intl.string(closure_1_0(closure_1_2[14]).t["R3BPH+"]), () => {
          let obj = closure_1_1(closure_1_2[15]);
          obj = {};
          const merged = Object.assign(closure_2);
          obj.description = ref.current;
          obj.update(closure_0, closure_1, closure_1_8.ChannelMessage, obj);
          closure_1_1(closure_1_2[16]).close();
        });
        let merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    });
  }, items3);
  obj = { ref: ref1, style: tmp.contentContainer, contentContainerStyle: null, children: null };
  obj = { padding: tmp5(tmp3[7]).space.PX_16, paddingBottom: insets.bottom + tmp5(tmp3[7]).space.PX_16 };
  obj[2] = obj;
  obj1 = { style: tmp.imageContainer, children: callback(closure_6, { style: items4, source }) };
  items4 = [tmp.image, { aspectRatio: num, maxHeight: tmp6.height / 2 }];
  const items5 = [callback(navigation, obj1), ];
  const obj2 = { ref, containerStyle: null, label: null, placeholder: null, value: null, onChange: null, placeholderTextColor: null, maxLength: 1000, autoFocus: true };
  const tmp2Result = channelId(stateFromStores[10]);
  obj2[1] = { paddingTop: id(stateFromStores[7]).space.PX_16 };
  let intl = tmp2(tmp3[14]).intl;
  obj2[2] = intl.string(channelId(stateFromStores[14]).t.eOB2eR);
  const intl2 = tmp2(tmp3[14]).intl;
  obj2[3] = intl2.string(channelId(stateFromStores[14]).t.RNH1jn);
  obj2[4] = first;
  obj2[5] = tmp7[1];
  obj2[6] = tmp.placeholderText.color;
  items5[1] = callback(channelId(stateFromStores[17]).TextArea, obj2);
  obj[3] = items5;
  return callback2(closure_7, obj);
}
({ View: c5, Image: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { contentContainer: null, imageContainer: null, image: null, placeholderText: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center", borderRadius: ThemesDefault.radii.sm };
let obj2 = { width: "100%", resizeMode: "contain", height: "Array", borderRadius: true };
obj2[3] = ThemesDefault.radii.sm;
createCacheKey[2] = obj2;
let obj1 = { alignItems: "center", borderRadius: ThemesDefault.radii.sm };
createCacheKey[3] = { color: ThemesDefault.colors.TEXT_MUTED };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const obj3 = { color: ThemesDefault.colors.TEXT_MUTED };
const result = require("set").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModal.tsx");

export default function AddImageDescriptionModal(arg0) {
  ({ source: require, channelId: importDefault, id: dependencyMap } = arg0);
  const obj = { screenKey: "addImageDescriptionModal", title: null, render: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["5S2AK+"]);
  obj[2] = function render() {
    return closure_1_10(closure_1_13, { source: closure_0, channelId: closure_1, id: closure_2 });
  };
  return callback(_modDef10599, obj);
};