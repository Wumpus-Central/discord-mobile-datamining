// discord_app/modules/polls/native/EditPollCreationImageAltTextModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PollsConstants from "../PollsConstants.tsx";
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let imageSize;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native);
const MAX_POLL_ANSWER_LENGTH = PollsConstants.MAX_POLL_ANSWER_LENGTH;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, paddingTop: 10 },
  separator: obj3,
  contentContainer: { flex: 1, justifyContent: "center" },
  imageContainer: obj4,
  formContainer: { paddingHorizontal: 16 },
  textInput: obj5,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj4 = {
  borderRadius: nativeDefault.radii.lg,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  overflow: "hidden",
  aspectRatio: 1,
};
obj5 = { backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.radii.lg };
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (imageSize) => {
      let Icon;
      let answer;
      let channelId;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let obj3;
      let onSave;
      let renderImage;
      let upload;
      let value;
      let obj = onSave(576);
      const cResult = obj.c(35);
      ({ channelId, answer, onSave } = imageSize);
      imageSize = imageSize.imageSize;
      const tmp4 = closure_10();
      ({ renderImage, upload } = value(11869)(
        channelId,
        answer.localCreationAnswerId,
        answer.image,
        imageSize,
        imageSize,
      ));
      let str;
      const useState = react.useState;
      value(11869)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
      if (upload != null) {
        str = upload.description;
      }
      if (str == null) {
        str = "";
      }
      value = _slicedToArray(useState(str), 2)[0];
      _slicedToArray(useState(str), 2);
      if (cResult[0] === onSave) {
        let tmp11;
        let tmp13;
        let tmp17;
        let tmp20;
        let tmp23;
        if (cResult[1] === value) {
          tmp11 = cResult[2];
        }
        const _Symbol = Symbol;
        const container = tmp4.container;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            onPress: onSave(11871).closeEditPollCreationImageAltTextModal,
            activeOpacity: 0.5,
            accessibilityRole: "button",
            accessibilityLabel: intl.string(onSave(1126).t.cpT0Cq),
            children: closure_8(Icon, obj3),
          };
          intl = onSave(1126).intl;
          obj3 = { source: value(4815) };
          Icon = onSave(1188).Icon;
          const tmp16 = closure_8(closure_5, obj2);
          cResult[3] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = {
            variant: "redesign/heading-18/bold",
            color: "mobile-text-heading-primary",
            children: intl2.string(onSave(1126).t.Cq44Rg),
          };
          const Text = onSave(4892).Text;
          intl2 = onSave(1126).intl;
          const tmp19 = closure_8(Text, obj4);
          cResult[4] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[4];
        }
        const _Symbol3 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = {
            variant: "text-md/medium",
            color: "text-brand",
            children: intl3.string(onSave(1126).t["R3BPH+"]),
          };
          const Text2 = onSave(4892).Text;
          intl3 = onSave(1126).intl;
          const tmp22 = closure_8(Text2, obj5);
          cResult[5] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[5];
        }
        if (cResult[6] !== tmp11) {
          const obj6 = { onPress: tmp11, activeOpacity: 0.5, children: tmp20 };
          const tmp26 = closure_8(closure_5, obj6);
          cResult[6] = tmp11;
          cResult[7] = tmp26;
          tmp23 = tmp26;
        } else {
          tmp23 = cResult[7];
        }
        if (cResult[8] === tmp4.header) {
          let tmp27;
          let tmp31;
          if (cResult[9] === tmp23) {
            tmp27 = cResult[10];
          }
          if (cResult[11] !== tmp4.separator) {
            const obj7 = { style: tmp4.separator };
            const tmp34 = closure_8(closure_6, obj7);
            cResult[11] = tmp4.separator;
            cResult[12] = tmp34;
            tmp31 = tmp34;
          } else {
            tmp31 = cResult[12];
          }
          if (cResult[13] === renderImage) {
            let tmp36;
            let tmp40;
            let tmp43;
            let tmp47;
            if (cResult[14] === tmp4.imageContainer) {
              tmp36 = cResult[15];
            }
            const _Symbol4 = Symbol;
            const formContainer = tmp4.formContainer;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp42 = closure_8(onSave(1188).Spacer, { size: 27 });
              cResult[16] = tmp42;
              tmp40 = tmp42;
            } else {
              tmp40 = cResult[16];
            }
            const _Symbol5 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { children: intl4.string(onSave(1126).t["/2Gnoa"]) };
              const tmp5Result = value(9490);
              intl4 = onSave(1126).intl;
              const tmp46 = closure_8(tmp5Result, obj8);
              cResult[17] = tmp46;
              tmp43 = tmp46;
            } else {
              tmp43 = cResult[17];
            }
            const _Symbol6 = Symbol;
            const textInput = tmp4.textInput;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = onSave(1126).intl;
              const stringResult = intl5.string(onSave(1126).t["/2Gnoa"]);
              cResult[18] = stringResult;
              tmp47 = stringResult;
            } else {
              tmp47 = cResult[18];
            }
            if (cResult[19] === tmp4.textInput) {
              let tmp49;
              let tmp53;
              if (cResult[20] === value) {
                tmp49 = cResult[21];
              }
              const _Symbol7 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp55 = closure_8(onSave(1188).Spacer, { size: 27 });
                cResult[22] = tmp55;
                tmp53 = tmp55;
              } else {
                tmp53 = cResult[22];
              }
              if (cResult[23] === tmp4.formContainer) {
                let tmp56;
                if (cResult[24] === tmp49) {
                  tmp56 = cResult[25];
                }
                if (cResult[26] === tmp4.contentContainer) {
                  if (cResult[27] === tmp36) {
                    let tmp60;
                    if (cResult[28] === tmp56) {
                      tmp60 = cResult[29];
                    }
                    if (cResult[30] === tmp4.container) {
                      if (cResult[31] === tmp60) {
                        if (cResult[32] === tmp27) {
                          let tmp63;
                          if (cResult[33] === tmp31) {
                            tmp63 = cResult[34];
                          }
                          return tmp63;
                        }
                      }
                    }
                    const obj9 = { top: true, style: container, children: items };
                    items = [tmp27, tmp31, tmp60];
                    const tmp65 = closure_9(onSave(6626).SafeAreaPaddingView, obj9);
                    cResult[30] = tmp4.container;
                    cResult[31] = tmp60;
                    cResult[32] = tmp27;
                    cResult[33] = tmp31;
                    cResult[34] = tmp65;
                    tmp63 = tmp65;
                  }
                }
                const obj10 = { style: tmp35, children: items1 };
                items1 = [tmp36, tmp56];
                const tmp62 = closure_9(value(6544), obj10);
                cResult[26] = tmp4.contentContainer;
                cResult[27] = tmp36;
                cResult[28] = tmp56;
                cResult[29] = tmp62;
                tmp60 = tmp62;
              }
              const obj11 = { style: formContainer, children: items2 };
              items2 = [tmp40, tmp43, tmp49, tmp53];
              const tmp59 = closure_9(closure_6, obj11);
              cResult[23] = tmp4.formContainer;
              cResult[24] = tmp49;
              cResult[25] = tmp59;
              tmp56 = tmp59;
            }
            const obj12 = {
              showTopContainer: false,
              showBorder: false,
              multiline: false,
              value,
              onChange: tmp10,
              clearButtonVisibility: onSave(1188).ClearButtonVisibility.WITH_CONTENT,
              style: textInput,
              textContentType: "none",
              maxLength: MAX_POLL_ANSWER_LENGTH,
              autoFocus: true,
              autoCorrect: true,
              accessibilityLabel: tmp47,
            };
            const FormInput = onSave(8924).FormInput;
            const tmp52 = closure_8(FormInput, obj12);
            cResult[19] = tmp4.textInput;
            cResult[20] = value;
            cResult[21] = tmp52;
            tmp49 = tmp52;
          }
          const obj13 = { style: tmp4.imageContainer, children: renderImage };
          const tmp39 = closure_8(closure_6, obj13);
          cResult[13] = renderImage;
          cResult[14] = tmp4.imageContainer;
          cResult[15] = tmp39;
          tmp36 = tmp39;
        }
        const obj14 = { style: tmp4.header, children: items3 };
        items3 = [tmp13, tmp17, tmp23];
        const tmp30 = closure_9(closure_6, obj14);
        cResult[8] = tmp4.header;
        cResult[9] = tmp23;
        cResult[10] = tmp30;
        tmp27 = tmp30;
      }
      const fn = function u() {
        if (null != first) {
          onSave(tmp);
        }
        const obj = EditPollCreationImageAltTextModalActionCreators;
        const result = obj.closeEditPollCreationImageAltTextModal();
      };
      cResult[0] = onSave;
      cResult[1] = value;
      cResult[2] = fn;
      tmp11 = fn;
    }
  : (imageSize) => {
      let Icon;
      let Text2;
      let answer;
      let channelId;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj5;
      let obj8;
      let onSave;
      let tmp7;
      let value;
      ({ channelId, answer, onSave } = imageSize);
      imageSize = imageSize.imageSize;
      value = undefined;
      const tmp = closure_10();
      const tmp4 = value(11869)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
      const upload = tmp4.upload;
      let str;
      const renderImage = tmp4.renderImage;
      const useState = react.useState;
      if (upload != null) {
        str = upload.description;
      }
      if (str == null) {
        str = "";
      }
      [value, tmp7] = useState(str);
      const items = [onSave, value];
      const callback = react.useCallback(() => {
        if (null != first) {
          onSave(tmp);
        }
        const obj = EditPollCreationImageAltTextModalActionCreators;
        const result = obj.closeEditPollCreationImageAltTextModal();
      }, items);
      const obj2 = { top: true, style: tmp.container, children: items2 };
      const obj3 = { style: tmp.header, children: items1 };
      const obj4 = {
        onPress: onSave(11871).closeEditPollCreationImageAltTextModal,
        activeOpacity: 0.5,
        accessibilityRole: "button",
        accessibilityLabel: intl.string(onSave(1126).t.cpT0Cq),
        children: closure_8(Icon, obj5),
      };
      const SafeAreaPaddingView = onSave(6626).SafeAreaPaddingView;
      intl = onSave(1126).intl;
      obj5 = { source: value(4815) };
      Icon = onSave(1188).Icon;
      items1 = [closure_8(closure_5, obj4), ,];
      const obj6 = {
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        children: intl2.string(onSave(1126).t.Cq44Rg),
      };
      const Text = onSave(4892).Text;
      intl2 = onSave(1126).intl;
      items1[1] = closure_8(Text, obj6);
      const obj7 = { onPress: callback, activeOpacity: 0.5, children: closure_8(Text2, obj8) };
      obj8 = { variant: "text-md/medium", color: "text-brand", children: intl3.string(onSave(1126).t["R3BPH+"]) };
      Text2 = onSave(4892).Text;
      intl3 = onSave(1126).intl;
      items1[2] = closure_8(closure_5, obj7);
      items2 = [closure_9(closure_6, obj3), ,];
      const obj9 = { style: tmp.separator };
      items2[1] = closure_8(closure_6, obj9);
      const obj10 = { style: tmp.contentContainer, children: items3 };
      items3 = [,];
      const obj11 = { style: tmp.imageContainer, children: renderImage };
      const tmp2Result = value(6544);
      items3[0] = closure_8(closure_6, obj11);
      const obj12 = { style: tmp.formContainer, children: items4 };
      items4 = [closure_8(onSave(1188).Spacer, { size: 27 }), , ,];
      const obj13 = { children: intl4.string(onSave(1126).t["/2Gnoa"]) };
      const tmp2Result2 = value(9490);
      intl4 = onSave(1126).intl;
      items4[1] = closure_8(tmp2Result2, obj13);
      const obj14 = {
        showTopContainer: false,
        showBorder: false,
        multiline: false,
        value,
        onChange: tmp7,
        clearButtonVisibility: onSave(1188).ClearButtonVisibility.WITH_CONTENT,
        style: tmp.textInput,
        textContentType: "none",
        maxLength: MAX_POLL_ANSWER_LENGTH,
        autoFocus: true,
        autoCorrect: true,
        accessibilityLabel: intl5.string(onSave(1126).t["/2Gnoa"]),
      };
      const FormInput = onSave(8924).FormInput;
      intl5 = onSave(1126).intl;
      items4[2] = closure_8(FormInput, obj14);
      items4[3] = closure_8(onSave(1188).Spacer, { size: 27 });
      items3[1] = closure_9(closure_6, obj12);
      items2[2] = closure_9(tmp2Result, obj10);
      return closure_9(SafeAreaPaddingView, obj2);
    };
let result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModal.tsx");

export default tmp5;
