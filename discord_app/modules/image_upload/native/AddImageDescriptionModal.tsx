// discord_app/modules/image_upload/native/AddImageDescriptionModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ModalStackNavigatorDefault from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UploadAttachmentStore from "../../../stores/UploadAttachmentStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const DraftType = fn(7232).DraftType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
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
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddDescription(id) {
      const cResult = channelId(stateFromStores[9]).c(43);
      ({ source, channelId } = id);
      id = id.id;
      closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UploadAttachmentStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === id) {
          let tmp7 = cResult[3];
        }
        stateFromStores = channelId(tmp2[10]).useStateFromStores(first, tmp7);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { ignoreKeyboard: true };
          cResult[4] = obj2;
          let tmp9 = obj2;
        } else {
          tmp9 = cResult[4];
        }
        ({ width, height } = source);
        id(tmp2[11])(tmp9);
        let str;
        if (stateFromStores != null) {
          str = stateFromStores.description;
        }
        if (str == null) {
          str = "";
        }
        class R {
          constructor() {
            return closure_9.getUpload(channelId, id, DraftType.ChannelMessage);
          }
        }
        const tmp13 = first1(noop.useState(str), 2);
        first1 = tmp13[0];
        noop = obj4.useRef(first1);
        const tmpResult = channelId(tmp2[10]);
        const ref = noop.useRef(null);
        const ref1 = noop.useRef(null);
        const navigation = channelId(tmp2[12]).useNavigation();
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { includeKeyboardHeight: true };
          cResult[5] = obj3;
          let tmp19 = obj3;
        } else {
          tmp19 = cResult[5];
        }
        const insets = tmp10(tmp2[13])(tmp19).insets;
        const _Symbol3 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { ref, offset: { type: "toBottom" } };
          const items1 = [obj5];
          cResult[6] = items1;
          let tmp20 = items1;
        } else {
          tmp20 = cResult[6];
        }
        if (cResult[7] !== insets) {
          const obj6 = { insets, inputs: tmp20, scrollViewRef: ref1 };
          cResult[7] = insets;
          cResult[8] = obj6;
          let tmp21 = obj6;
        } else {
          tmp21 = cResult[8];
        }
        id(tmp2[14])(tmp21);
        if (cResult[9] !== first1) {
          class V {
            constructor() {
              closure_4.current = closure_3;
              return;
            }
          }
          const items2 = [first1];
          cResult[9] = first1;
          cResult[10] = V;
          cResult[11] = items2;
          let tmp24 = items2;
        } else {
          class V {
            constructor() {
              closure_4.current = closure_3;
              return;
            }
          }
          tmp24 = cResult[11];
        }
        const effect = obj4.useEffect(V, tmp24);
        if (cResult[12] === channelId) {
          class V {
            constructor() {
              closure_4.current = closure_3;
              return;
            }
          }
        }
        const fn = function z() {
          navigation.setOptions({
            headerRight(arg0) {
              const intl = channelId(stateFromStores[16]).intl;
              const renderHeaderTextButton = channelId(stateFromStores[15]).getRenderHeaderTextButton(
                intl.string(channelId(stateFromStores[16]).t["R3BPH+"]),
                () => {
                  const obj2 = {};
                  const merged = Object.assign(dependencyMap);
                  obj2.description = ref.current;
                  id(9201).update(closure_1_0, closure_1_1, ChannelMessage.ChannelMessage, obj2);
                  const obj = id(9201);
                  id(12793).close();
                },
              );
              let merged = Object.assign(arg0);
              return renderHeaderTextButton({});
            },
          });
        };
        const items3 = [channelId, id, stateFromStores, navigation];
        cResult[12] = channelId;
        cResult[13] = id;
        cResult[14] = navigation;
        cResult[15] = stateFromStores;
        cResult[16] = items3;
        cResult[17] = fn;
        const tmpResult2 = channelId(tmp2[12]);
      }
      class R {
        constructor() {
          return closure_9.getUpload(channelId, id, DraftType.ChannelMessage);
        }
      }
      cResult[1] = channelId;
      cResult[2] = id;
      cResult[3] = R;
      tmp7 = R;
      let obj = channelId(stateFromStores[9]);
    }
  : function AddDescription(id) {
      ({ source, channelId } = id);
      id = id.id;
      let stateFromStores;
      value = undefined;
      noop = undefined;
      let navigation;
      const tmp = closure_12();
      const items = [UploadAttachmentStore];
      stateFromStores = channelId(stateFromStores[10]).useStateFromStores(items, () =>
        UploadAttachmentStore.getUpload(channelId, id, DraftType.ChannelMessage),
      );
      ({ width, height } = source);
      let num = 1;
      let obj = channelId(stateFromStores[10]);
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
      const tmp6 = id(stateFromStores[11])({ ignoreKeyboard: true });
      navigation = channelId(stateFromStores[12]).useNavigation();
      const insets = tmp5(tmp3[13])({ includeKeyboardHeight: true }).insets;
      const obj3 = { insets, inputs: null, scrollViewRef: ref1 };
      const items1 = [{ ref, offset: { type: "toBottom" } }];
      obj3.inputs = items1;
      id(stateFromStores[14])(obj3);
      const items2 = [value];
      const effect = obj2.useEffect(() => {
        closure_4.current = current;
      }, items2);
      const items3 = [channelId, id, stateFromStores, navigation];
      const effect1 = obj2.useEffect(() => {
        navigation.setOptions({
          headerRight(arg0) {
            const intl = channelId(stateFromStores[16]).intl;
            const renderHeaderTextButton = channelId(stateFromStores[15]).getRenderHeaderTextButton(
              intl.string(channelId(stateFromStores[16]).t["R3BPH+"]),
              () => {
                const obj2 = {};
                const merged = Object.assign(dependencyMap);
                obj2.description = ref.current;
                id(9201).update(closure_1_0, closure_1_1, ChannelMessage.ChannelMessage, obj2);
                const obj = id(9201);
                id(12793).close();
              },
            );
            let merged = Object.assign(arg0);
            return renderHeaderTextButton({});
          },
        });
      }, items3);
      const obj4 = { ref: ref1, style: tmp.contentContainer, contentContainerStyle: null, children: null };
      const tmp2Result = channelId(stateFromStores[12]);
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
      let intl = tmp2(tmp3[16]).intl;
      obj8.label = intl.string(channelId(stateFromStores[16]).t.eOB2eR);
      const intl2 = tmp2(tmp3[16]).intl;
      obj8.placeholder = intl2.string(channelId(stateFromStores[16]).t.RNH1jn);
      obj8.value = value;
      obj8.onChange = tmp7[1];
      obj8.placeholderTextColor = tmp.placeholderText.color;
      items5[1] = closure_10(channelId(stateFromStores[19]).TextArea, obj8);
      obj4.children = items5;
      return closure_11(closure_7, obj4);
    };
ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.TEXT_MUTED };
size = fn(2);
const result = size.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AddImageDescriptionModal(source) {
      const cResult = source(id[9]).c(5);
      source = source.source;
      const channelId = source.channelId;
      id = source.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[16]).intl;
        const stringResult = intl.string(tmp(tmp2[16]).t["5S2AK+"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        if (cResult[2] === id) {
          if (cResult[3] === source) {
            let tmp6 = cResult[4];
          }
          return tmp6;
        }
      }
      const tmp7 = closure_10(channelId(id[20]), {
        screenKey: "addImageDescriptionModal",
        title: first,
        render() {
          return collapsed(closure_13, { source, channelId, id });
        },
      });
      cResult[1] = channelId;
      cResult[2] = id;
      cResult[3] = source;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : function AddImageDescriptionModal(arg0) {
      ({ source: require, channelId: importDefault, id: dependencyMap } = arg0);
      const obj = { screenKey: "addImageDescriptionModal", title: null, render: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["5S2AK+"]);
      obj.render = function render() {
        return collapsed(closure_13, { source, channelId, id });
      };
      return closure_10(ModalStackNavigatorDefault, obj);
    };
