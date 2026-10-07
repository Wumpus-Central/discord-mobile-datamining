// === Module 11872: EditPollCreationImageAltTextModal ===

// Module 11872 (EditPollCreationImageAltTextModal)
import nativeDefault from "native" /* 587 */;
import EditPollCreationImageAltTextModalActionCreators from "EditPollCreationImageAltTextModalActionCreators" /* 11871 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const MAX_POLL_ANSWER_LENGTH = fn(7468).MAX_POLL_ANSWER_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 18, paddingTop: 10 }, separator: null, contentContainer: null, imageContainer: null, formContainer: null, textInput: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.separator = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj2.contentContainer = { flex: 1, justifyContent: "center" };
let obj4 = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj2.imageContainer = { borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
obj2.formContainer = { paddingHorizontal: 16 };
let obj5 = { borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", alignSelf: "center", overflow: "hidden", aspectRatio: 1 };
obj2.textInput = { backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.radii.lg };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.radii.lg };
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((imageSize) => {
  const cResult = onSave(576).c(35);
  ({ channelId, answer, onSave } = imageSize);
  imageSize = imageSize.imageSize;
  const tmp4 = closure_10();
  let obj = onSave(576);
  ({ renderImage, upload } = value(11869)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize));
  let str;
  if (upload != null) {
    str = upload.description;
  }
  if (str == null) {
    str = "";
  }
  const tmp6 = value(11869)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
  value = _slicedToArray(noop.useState(str), 2)[0];
  if (cResult[0] === onSave) {
    if (cResult[1] === value) {
      let tmp11 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { onPress: onSave(11871).closeEditPollCreationImageAltTextModal, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = onSave(1126).intl;
      obj2.accessibilityLabel = intl.string(onSave(1126).t.cpT0Cq);
      const obj3 = { source: tmp5(4815) };
      obj2.children = closure_8(onSave(1188).Icon, obj3);
      const tmp16 = closure_8(closure_5, obj2);
      cResult[3] = tmp16;
      let tmp13 = tmp16;
    } else {
      tmp13 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
      const intl2 = onSave(1126).intl;
      obj4.children = intl2.string(onSave(1126).t.Cq44Rg);
      const tmp19 = closure_8(onSave(4892).Text, obj4);
      cResult[4] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[4];
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "text-md/medium", color: "text-brand", children: null };
      const intl3 = onSave(1126).intl;
      obj5.children = intl3.string(onSave(1126).t["R3BPH+"]);
      const tmp22 = closure_8(onSave(4892).Text, obj5);
      cResult[5] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[5];
    }
    if (cResult[6] !== tmp11) {
      const obj6 = { onPress: tmp11, activeOpacity: 0.5, children: tmp20 };
      const tmp26 = closure_8(closure_5, obj6);
      cResult[6] = tmp11;
      cResult[7] = tmp26;
      let tmp23 = tmp26;
    } else {
      tmp23 = cResult[7];
    }
    if (cResult[8] === tmp4.header) {
      if (cResult[9] === tmp23) {
        let tmp27 = cResult[10];
      }
      if (cResult[11] !== tmp4.separator) {
        const obj7 = { style: tmp4.separator };
        const tmp34 = closure_8(closure_6, obj7);
        cResult[11] = tmp4.separator;
        cResult[12] = tmp34;
        let tmp31 = tmp34;
      } else {
        tmp31 = cResult[12];
      }
      if (cResult[13] === renderImage) {
        if (cResult[14] === tmp4.imageContainer) {
          let tmp36 = cResult[15];
        }
        const _Symbol4 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp42 = closure_8(onSave(1188).Spacer, { size: 27 });
          cResult[16] = tmp42;
          let tmp40 = tmp42;
        } else {
          tmp40 = cResult[16];
        }
        const _Symbol5 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { children: null };
          const intl4 = onSave(1126).intl;
          obj8.children = intl4.string(onSave(1126).t["/2Gnoa"]);
          const tmp46 = closure_8(tmp5(9490), obj8);
          cResult[17] = tmp46;
          let tmp43 = tmp46;
          const tmp5Result = tmp5(9490);
        } else {
          tmp43 = cResult[17];
        }
        const _Symbol6 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = onSave(1126).intl;
          const stringResult = intl5.string(onSave(1126).t["/2Gnoa"]);
          cResult[18] = stringResult;
          let tmp47 = stringResult;
        } else {
          tmp47 = cResult[18];
        }
        if (cResult[19] === tmp4.textInput) {
          if (cResult[20] === value) {
            let tmp49 = cResult[21];
          }
          const _Symbol7 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp55 = closure_8(onSave(1188).Spacer, { size: 27 });
            cResult[22] = tmp55;
            let tmp53 = tmp55;
          } else {
            tmp53 = cResult[22];
          }
          if (cResult[23] === tmp4.formContainer) {
            if (cResult[24] === tmp49) {
              let tmp56 = cResult[25];
            }
            if (cResult[26] === tmp4.contentContainer) {
              if (cResult[27] === tmp36) {
                if (cResult[28] === tmp56) {
                  let tmp60 = cResult[29];
                }
                if (cResult[30] === tmp4.container) {
                  if (cResult[31] === tmp60) {
                    if (cResult[32] === tmp27) {
                      if (cResult[33] === tmp31) {
                        let tmp63 = cResult[34];
                      }
                      return tmp63;
                    }
                  }
                }
                const obj9 = { top: true, style: tmp4.container, children: null };
                const items = [tmp27, tmp31, tmp60];
                obj9.children = items;
                const tmp65 = closure_9(onSave(6626).SafeAreaPaddingView, obj9);
                cResult[30] = tmp4.container;
                cResult[31] = tmp60;
                cResult[32] = tmp27;
                cResult[33] = tmp31;
                cResult[34] = tmp65;
                tmp63 = tmp65;
              }
            }
            const obj10 = { style: tmp35, children: null };
            const items1 = [tmp36, tmp56];
            obj10.children = items1;
            const tmp62 = closure_9(tmp5(6544), obj10);
            cResult[26] = tmp4.contentContainer;
            cResult[27] = tmp36;
            cResult[28] = tmp56;
            cResult[29] = tmp62;
            tmp60 = tmp62;
          }
          const obj11 = { style: tmp4.formContainer, children: null };
          const items2 = [tmp40, tmp43, tmp49, tmp53];
          obj11.children = items2;
          const tmp59 = closure_9(closure_6, obj11);
          cResult[23] = tmp4.formContainer;
          cResult[24] = tmp49;
          cResult[25] = tmp59;
          tmp56 = tmp59;
        }
        const obj12 = { showTopContainer: false, showBorder: false, multiline: false, value, onChange: tmp10, clearButtonVisibility: onSave(1188).ClearButtonVisibility.WITH_CONTENT, style: tmp4.textInput, textContentType: "none", maxLength: MAX_POLL_ANSWER_LENGTH, autoFocus: true, autoCorrect: true, accessibilityLabel: tmp47 };
        const tmp52 = closure_8(onSave(8924).FormInput, obj12);
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
    const obj14 = { style: tmp4.header, children: null };
    const items3 = [tmp13, tmp17, tmp23];
    obj14.children = items3;
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
    const result = EditPollCreationImageAltTextModalActionCreators.closeEditPollCreationImageAltTextModal();
  };
  cResult[0] = onSave;
  cResult[1] = value;
  cResult[2] = fn;
  tmp11 = fn;
  const tmp8 = _slicedToArray(noop.useState(str), 2);
}) : ((imageSize) => {
  ({ channelId, answer, onSave } = imageSize);
  imageSize = imageSize.imageSize;
  value = undefined;
  const tmp = closure_10();
  const tmp4 = value(11869)(channelId, answer.localCreationAnswerId, answer.image, imageSize, imageSize);
  const upload = tmp4.upload;
  let str;
  if (upload != null) {
    str = upload.description;
  }
  if (str == null) {
    str = "";
  }
  const tmp5 = _slicedToArray(noop.useState(str), 2);
  value = tmp5[0];
  const items = [onSave, value];
  const callback = noop.useCallback(() => {
    if (null != first) {
      onSave(tmp);
    }
    const result = EditPollCreationImageAltTextModalActionCreators.closeEditPollCreationImageAltTextModal();
  }, items);
  const obj2 = { top: true, style: tmp.container, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { onPress: onSave(11871).closeEditPollCreationImageAltTextModal, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl = onSave(1126).intl;
  obj4.accessibilityLabel = intl.string(onSave(1126).t.cpT0Cq);
  obj4.children = closure_8(onSave(1188).Icon, { source: value(4815) });
  const items1 = [closure_8(closure_5, obj4), , ];
  const obj6 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = onSave(1126).intl;
  obj6.children = intl2.string(onSave(1126).t.Cq44Rg);
  items1[1] = closure_8(onSave(4892).Text, obj6);
  const obj7 = { onPress: callback, activeOpacity: 0.5, children: null };
  const obj8 = { variant: "text-md/medium", color: "text-brand", children: null };
  const intl3 = onSave(1126).intl;
  obj8.children = intl3.string(onSave(1126).t["R3BPH+"]);
  obj7.children = closure_8(onSave(4892).Text, obj8);
  items1[2] = closure_8(closure_5, obj7);
  obj3.children = items1;
  const items2 = [closure_9(closure_6, obj3), closure_8(closure_6, { style: tmp.separator }), ];
  const obj10 = { style: tmp.contentContainer, children: null };
  const obj11 = { style: tmp.imageContainer, children: tmp4.renderImage };
  const obj5 = { source: value(4815) };
  const obj9 = { style: tmp.separator };
  const items3 = [closure_8(closure_6, obj11), ];
  const obj12 = { style: tmp.formContainer, children: null };
  const items4 = [closure_8(onSave(1188).Spacer, { size: 27 }), , , ];
  const obj13 = { children: null };
  const tmp2Result = value(6544);
  const intl4 = onSave(1126).intl;
  obj13.children = intl4.string(onSave(1126).t["/2Gnoa"]);
  items4[1] = closure_8(value(9490), obj13);
  const obj14 = { showTopContainer: false, showBorder: false, multiline: false, value, onChange: tmp5[1], clearButtonVisibility: onSave(1188).ClearButtonVisibility.WITH_CONTENT, style: tmp.textInput, textContentType: "none", maxLength: MAX_POLL_ANSWER_LENGTH, autoFocus: true, autoCorrect: true, accessibilityLabel: null };
  const intl5 = onSave(1126).intl;
  obj14.accessibilityLabel = intl5.string(onSave(1126).t["/2Gnoa"]);
  items4[2] = closure_8(onSave(8924).FormInput, obj14);
  items4[3] = closure_8(onSave(1188).Spacer, { size: 27 });
  obj12.children = items4;
  items3[1] = closure_9(closure_6, obj12);
  obj10.children = items3;
  items2[2] = closure_9(tmp2Result, obj10);
  obj2.children = items2;
  return closure_9(onSave(6626).SafeAreaPaddingView, obj2);
});