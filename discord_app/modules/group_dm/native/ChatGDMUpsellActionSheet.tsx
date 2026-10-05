// === Module 11225: ChatGDMUpsellActionSheet ===

// Module 11225 (ChatGDMUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import FastImageDefault from "FastImage" /* 5974 */;
import AssetRegistryDefault from "AssetRegistry" /* 11226 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, onClick;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: obj2, footer: obj3, body: { textAlign: "center" }, noticeContainer: obj4, innerContainer: { flexDirection: "row", alignItems: "center", paddingBottom: 16 }, secondInnerContainer: { flexDirection: "row", alignItems: "center" }, text: { flex: 1 }, titleImage: { padding: 16, justifyContent: "center", alignItems: "center" }, item: size, button: obj5 };
obj2 = { marginBottom: nativeDefault.space.PX_4, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj4 = { borderRadius: nativeDefault.radii.sm, marginVertical: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, marginRight: 16, height: 40, width: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" };
obj5 = { paddingTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClick) => {
  let innerContainer;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let noticeContainer;
  let tmp12;
  let tmp17;
  let tmp6;
  let tmp7;
  let tmp8;
  let obj = onClick(576);
  const cResult = obj.c(59);
  onClick = onClick.onClick;
  const tmp4 = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== onClick) {
    const fn = function o() {
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      onClick();
    };
    cResult[0] = onClick;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    };
    cResult[2] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { source: AssetRegistryDefault, resizeMode: "contain" };
    const tmp5Result = FastImageDefault;
    const tmp11 = closure_5(tmp5Result, obj2);
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp4.titleImage) {
    const obj3 = { style: tmp4.titleImage, children: tmp8 };
    const tmp15 = closure_5(View, obj3);
    cResult[4] = tmp4.titleImage;
    cResult[5] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[5];
  }
  const sum = bottom + 16;
  if (cResult[6] !== sum) {
    const obj4 = { padding: 16, paddingBottom: sum };
    cResult[6] = sum;
    cResult[7] = obj4;
    tmp17 = obj4;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === tmp4.footer) {
    let tmp18;
    let tmp19;
    let tmp21;
    let tmp24;
    let tmp27;
    if (cResult[9] === tmp17) {
      tmp18 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(onClick(1126).t["3PatSz"]);
      cResult[11] = stringResult;
      tmp19 = stringResult;
    } else {
      tmp19 = cResult[11];
    }
    if (cResult[12] !== tmp6) {
      const obj5 = { text: tmp19, onPress: tmp6 };
      const tmp23 = closure_5(onClick(5594).Button, obj5);
      cResult[12] = tmp6;
      cResult[13] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[13];
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { text: intl2.string(onClick(1126).t["ETE/oC"]), onPress: tmp7, variant: "tertiary" };
      const Button = tmp(5594).Button;
      intl2 = tmp(1126).intl;
      const tmp26 = closure_5(Button, obj6);
      cResult[14] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[14];
    }
    if (cResult[15] !== tmp4.button) {
      const obj7 = { style: tmp4.button, children: tmp24 };
      const tmp30 = closure_5(View, obj7);
      cResult[15] = tmp4.button;
      cResult[16] = tmp30;
      tmp27 = tmp30;
    } else {
      tmp27 = cResult[16];
    }
    if (cResult[17] === tmp27) {
      if (cResult[18] === tmp18) {
        let tmp31;
        let tmp35;
        let tmp37;
        let tmp40;
        let tmp42;
        let tmp45;
        let tmp48;
        let tmp52;
        let tmp54;
        if (cResult[19] === tmp21) {
          tmp31 = cResult[20];
        }
        const _Symbol3 = Symbol;
        const title = tmp4.title;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(onClick(1126).t["bkqux/"]);
          cResult[21] = stringResult1;
          tmp35 = stringResult1;
        } else {
          tmp35 = cResult[21];
        }
        if (cResult[22] !== tmp4.title) {
          const obj8 = { style: title, variant: "heading-lg/extrabold", accessibilityRole: "header", children: tmp35 };
          const tmp39 = closure_5(onClick(4886).Text, obj8);
          cResult[22] = tmp4.title;
          cResult[23] = tmp39;
          tmp37 = tmp39;
        } else {
          tmp37 = cResult[23];
        }
        const _Symbol4 = Symbol;
        const body = tmp4.body;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult2 = intl4.string(onClick(1126).t.N6TdqN);
          cResult[24] = stringResult2;
          tmp40 = stringResult2;
        } else {
          tmp40 = cResult[24];
        }
        if (cResult[25] !== tmp4.body) {
          const obj9 = { style: body, variant: "text-md/medium", color: "text-muted", children: tmp40 };
          const tmp44 = closure_5(onClick(4886).Text, obj9);
          cResult[25] = tmp4.body;
          cResult[26] = tmp44;
          tmp42 = tmp44;
        } else {
          tmp42 = cResult[26];
        }
        const _Symbol5 = Symbol;
        ({ noticeContainer, innerContainer } = tmp4);
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp47 = closure_5(onClick(11227).TimerIcon, { size: "sm" });
          cResult[27] = tmp47;
          tmp45 = tmp47;
        } else {
          tmp45 = cResult[27];
        }
        if (cResult[28] !== tmp4.item) {
          const obj10 = { style: tmp4.item, children: tmp45 };
          const tmp51 = closure_5(View, obj10);
          cResult[28] = tmp4.item;
          cResult[29] = tmp51;
          tmp48 = tmp51;
        } else {
          tmp48 = cResult[29];
        }
        const _Symbol6 = Symbol;
        const text = tmp4.text;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = tmp(1126).intl;
          const stringResult3 = intl5.string(onClick(1126).t.Fq3DJb);
          cResult[30] = stringResult3;
          tmp52 = stringResult3;
        } else {
          tmp52 = cResult[30];
        }
        if (cResult[31] !== tmp4.text) {
          const obj11 = { style: text, variant: "text-sm/medium", color: "text-default", children: tmp52 };
          const tmp56 = closure_5(onClick(4886).Text, obj11);
          cResult[31] = tmp4.text;
          cResult[32] = tmp56;
          tmp54 = tmp56;
        } else {
          tmp54 = cResult[32];
        }
        if (cResult[33] === tmp4.innerContainer) {
          if (cResult[34] === tmp48) {
            let tmp57;
            let tmp61;
            let tmp64;
            let tmp68;
            let tmp70;
            if (cResult[35] === tmp54) {
              tmp57 = cResult[36];
            }
            const _Symbol7 = Symbol;
            const secondInnerContainer = tmp4.secondInnerContainer;
            if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp63 = closure_5(onClick(4839).LinkIcon, { size: "sm" });
              cResult[37] = tmp63;
              tmp61 = tmp63;
            } else {
              tmp61 = cResult[37];
            }
            if (cResult[38] !== tmp4.item) {
              const obj12 = { style: tmp4.item, children: tmp61 };
              const tmp67 = closure_5(View, obj12);
              cResult[38] = tmp4.item;
              cResult[39] = tmp67;
              tmp64 = tmp67;
            } else {
              tmp64 = cResult[39];
            }
            const _Symbol8 = Symbol;
            const text2 = tmp4.text;
            if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
              const intl6 = tmp(1126).intl;
              const stringResult4 = intl6.string(onClick(1126).t.XKbf2G);
              cResult[40] = stringResult4;
              tmp68 = stringResult4;
            } else {
              tmp68 = cResult[40];
            }
            if (cResult[41] !== tmp4.text) {
              const obj13 = { style: text2, variant: "text-sm/medium", color: "text-default", children: tmp68 };
              const tmp72 = closure_5(onClick(4886).Text, obj13);
              cResult[41] = tmp4.text;
              cResult[42] = tmp72;
              tmp70 = tmp72;
            } else {
              tmp70 = cResult[42];
            }
            if (cResult[43] === tmp4.secondInnerContainer) {
              if (cResult[44] === tmp64) {
                let tmp73;
                if (cResult[45] === tmp70) {
                  tmp73 = cResult[46];
                }
                if (cResult[47] === tmp4.noticeContainer) {
                  if (cResult[48] === tmp57) {
                    let tmp77;
                    if (cResult[49] === tmp73) {
                      tmp77 = cResult[50];
                    }
                    if (cResult[51] === tmp37) {
                      if (cResult[52] === tmp42) {
                        let tmp81;
                        if (cResult[53] === tmp77) {
                          tmp81 = cResult[54];
                        }
                        if (cResult[55] === tmp31) {
                          if (cResult[56] === tmp81) {
                            let tmp84;
                            if (cResult[57] === tmp12) {
                              tmp84 = cResult[58];
                            }
                            return tmp84;
                          }
                        }
                        const obj14 = { showGradient: true, scrollable: true, startExpanded: true, header: tmp12, footer: tmp31, children: tmp81 };
                        const tmp86 = closure_5(onClick(6645).BottomSheet, obj14);
                        cResult[55] = tmp31;
                        cResult[56] = tmp81;
                        cResult[57] = tmp12;
                        cResult[58] = tmp86;
                        tmp84 = tmp86;
                      }
                    }
                    const obj15 = { children: items };
                    items = [tmp37, tmp42, tmp77];
                    const tmp83 = closure_6(onClick(6112).BottomSheetScrollView, obj15);
                    cResult[51] = tmp37;
                    cResult[52] = tmp42;
                    cResult[53] = tmp77;
                    cResult[54] = tmp83;
                    tmp81 = tmp83;
                  }
                }
                const obj16 = { style: noticeContainer, children: items1 };
                items1 = [tmp57, tmp73];
                const tmp80 = closure_6(View, obj16);
                cResult[47] = tmp4.noticeContainer;
                cResult[48] = tmp57;
                cResult[49] = tmp73;
                cResult[50] = tmp80;
                tmp77 = tmp80;
              }
            }
            const obj17 = { style: secondInnerContainer, children: items2 };
            items2 = [tmp64, tmp70];
            const tmp76 = closure_6(View, obj17);
            cResult[43] = tmp4.secondInnerContainer;
            cResult[44] = tmp64;
            cResult[45] = tmp70;
            cResult[46] = tmp76;
            tmp73 = tmp76;
          }
        }
        const obj18 = { style: innerContainer, children: items3 };
        items3 = [tmp48, tmp54];
        const tmp60 = closure_6(View, obj18);
        cResult[33] = tmp4.innerContainer;
        cResult[34] = tmp48;
        cResult[35] = tmp54;
        cResult[36] = tmp60;
        tmp57 = tmp60;
      }
    }
    const obj19 = { style: tmp18, children: items4 };
    items4 = [tmp21, tmp27];
    const tmp34 = closure_6(View, obj19);
    cResult[17] = tmp27;
    cResult[18] = tmp18;
    cResult[19] = tmp21;
    cResult[20] = tmp34;
    tmp31 = tmp34;
  }
  const items5 = [tmp4.footer, tmp17];
  cResult[8] = tmp4.footer;
  cResult[9] = tmp17;
  cResult[10] = items5;
  tmp18 = items5;
}) : ((onClick) => {
  let BottomSheetScrollView;
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj2;
  let obj3;
  let obj4;
  let obj8;
  let obj9;
  let tmp3;
  onClick = onClick.onClick;
  const tmp = closure_7();
  const items = [onClick];
  const bottom = useSafeAreaInsetsDefault().bottom;
  const callback = react.useCallback(() => {
    const obj = DismissibleContentUnsafeUtils;
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
    onClick();
  }, items);
  let obj = { showGradient: true, scrollable: true, startExpanded: true, header: closure_5(View, obj2), footer: closure_6(View, obj4), children: closure_6(BottomSheetScrollView, obj9) };
  obj2 = { style: tmp.titleImage, children: closure_5(tmp3, obj3) };
  BottomSheet = onClick(6645).BottomSheet;
  obj3 = { source: AssetRegistryDefault, resizeMode: "contain" };
  obj4 = { style: items1, children: items2 };
  items1 = [tmp.footer, ];
  const obj5 = { padding: 16, paddingBottom: bottom + 16 };
  items1[1] = obj5;
  tmp3 = FastImageDefault;
  const obj6 = { text: intl.string(onClick(1126).t["3PatSz"]), onPress: callback };
  const Button = onClick(5594).Button;
  intl = onClick(1126).intl;
  items2 = [closure_5(Button, obj6), ];
  const obj7 = { style: tmp.button, children: closure_5(Button2, obj8) };
  obj8 = {
    text: intl2.string(onClick(1126).t["ETE/oC"]),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    variant: "tertiary"
  };
  Button2 = onClick(5594).Button;
  intl2 = onClick(1126).intl;
  items2[1] = closure_5(View, obj7);
  obj9 = { children: items3 };
  BottomSheetScrollView = onClick(6112).BottomSheetScrollView;
  const obj10 = { style: tmp.title, variant: "heading-lg/extrabold", accessibilityRole: "header", children: intl3.string(onClick(1126).t["bkqux/"]) };
  const Text = onClick(4886).Text;
  intl3 = onClick(1126).intl;
  items3 = [closure_5(Text, obj10), , ];
  const obj11 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: intl4.string(onClick(1126).t.N6TdqN) };
  const Text2 = onClick(4886).Text;
  intl4 = onClick(1126).intl;
  items3[1] = closure_5(Text2, obj11);
  const obj13 = { style: tmp.innerContainer, children: items4 };
  items4 = [, ];
  const obj12 = { style: tmp.noticeContainer, children: items5 };
  const obj14 = { style: tmp.item, children: closure_5(onClick(11227).TimerIcon, { size: "sm" }) };
  items4[0] = closure_5(View, obj14);
  const obj15 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: intl5.string(onClick(1126).t.Fq3DJb) };
  const Text3 = onClick(4886).Text;
  intl5 = onClick(1126).intl;
  items4[1] = closure_5(Text3, obj15);
  items5 = [closure_6(View, obj13), ];
  const obj16 = { style: tmp.secondInnerContainer, children: items6 };
  items6 = [, ];
  const obj17 = { style: tmp.item, children: closure_5(onClick(4839).LinkIcon, { size: "sm" }) };
  items6[0] = closure_5(View, obj17);
  const obj18 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: intl6.string(onClick(1126).t.XKbf2G) };
  const Text4 = onClick(4886).Text;
  intl6 = onClick(1126).intl;
  items6[1] = closure_5(Text4, obj18);
  items5[1] = closure_6(View, obj16);
  items3[2] = closure_6(View, obj12);
  return closure_5(BottomSheet, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMUpsellActionSheet.tsx");

export default tmp4;