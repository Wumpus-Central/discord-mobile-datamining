// discord_app/modules/group_dm/native/ChatGDMUpsellActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef11239 from "../../../../_runtime/metro/11239__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  title: { marginBottom: nativeDefault.space.PX_4, textAlign: "center" },
  footer: null,
  body: null,
  noticeContainer: null,
  innerContainer: null,
  secondInnerContainer: null,
  text: null,
  titleImage: null,
  item: null,
  button: null,
};
let obj3 = { marginBottom: nativeDefault.space.PX_4, textAlign: "center" };
obj2.footer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj2.body = { textAlign: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj2.noticeContainer = {
  borderRadius: nativeDefault.radii.sm,
  marginVertical: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
};
obj2.innerContainer = { flexDirection: "row", alignItems: "center", paddingBottom: 16 };
obj2.secondInnerContainer = { flexDirection: "row", alignItems: "center" };
obj2.text = { flex: 1 };
obj2.titleImage = { padding: 16, justifyContent: "center", alignItems: "center" };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  marginRight: 16,
  height: 40,
  width: 40,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
};
obj2.item = size;
let obj5 = {
  borderRadius: nativeDefault.radii.sm,
  marginVertical: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
};
obj2.button = { paddingTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { paddingTop: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onClick) => {
      const cResult = onClick(576).c(59);
      onClick = onClick.onClick;
      const tmp4 = closure_7();
      if (cResult[0] !== onClick) {
        const fn = function o() {
          const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
            dismissible_content.DismissibleContent.GDM_INVITE_REMINDER,
          );
          ActionSheetActionCreatorsDefault.hideActionSheet();
          onClick();
        };
        cResult[0] = onClick;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        cResult[2] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { source: _modDef11239, resizeMode: "contain" };
        const tmp11 = closure_5(FastImageDefault, obj2);
        cResult[3] = tmp11;
        let tmp8 = tmp11;
        const tmp5Result = FastImageDefault;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp4.titleImage) {
        const obj3 = { style: tmp4.titleImage, children: tmp8 };
        const tmp15 = closure_5(View, obj3);
        cResult[4] = tmp4.titleImage;
        cResult[5] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[5];
      }
      const sum = useSafeAreaInsetsDefault().bottom + 16;
      if (cResult[6] !== sum) {
        const obj4 = { padding: 16, paddingBottom: sum };
        cResult[6] = sum;
        cResult[7] = obj4;
        let tmp17 = obj4;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === tmp4.footer) {
        if (cResult[9] === tmp17) {
          let tmp18 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["3PatSz"]);
          cResult[11] = stringResult;
          let tmp19 = stringResult;
        } else {
          tmp19 = cResult[11];
        }
        if (cResult[12] !== tmp6) {
          const obj5 = { text: tmp19, onPress: tmp6 };
          const tmp23 = closure_5(tmp(5601).Button, obj5);
          cResult[12] = tmp6;
          cResult[13] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { text: null, onPress: null, variant: "tertiary" };
          const intl2 = tmp(1126).intl;
          obj6.text = intl2.string(tmp(1126).t["ETE/oC"]);
          obj6.onPress = tmp7;
          const tmp26 = closure_5(tmp(5601).Button, obj6);
          cResult[14] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[14];
        }
        if (cResult[15] !== tmp4.button) {
          const obj7 = { style: tmp4.button, children: tmp24 };
          const tmp30 = closure_5(View, obj7);
          cResult[15] = tmp4.button;
          cResult[16] = tmp30;
          let tmp27 = tmp30;
        } else {
          tmp27 = cResult[16];
        }
        if (cResult[17] === tmp27) {
          if (cResult[18] === tmp18) {
            if (cResult[19] === tmp21) {
              let tmp31 = cResult[20];
            }
            const _Symbol3 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult1 = intl3.string(tmp(1126).t["bkqux/"]);
              cResult[21] = stringResult1;
              let tmp35 = stringResult1;
            } else {
              tmp35 = cResult[21];
            }
            if (cResult[22] !== tmp4.title) {
              const obj8 = {
                style: tmp4.title,
                variant: "heading-lg/extrabold",
                accessibilityRole: "header",
                children: tmp35,
              };
              const tmp39 = closure_5(tmp(4892).Text, obj8);
              cResult[22] = tmp4.title;
              cResult[23] = tmp39;
              let tmp37 = tmp39;
            } else {
              tmp37 = cResult[23];
            }
            const _Symbol4 = Symbol;
            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult2 = intl4.string(tmp(1126).t.N6TdqN);
              cResult[24] = stringResult2;
              let tmp40 = stringResult2;
            } else {
              tmp40 = cResult[24];
            }
            if (cResult[25] !== tmp4.body) {
              const obj9 = { style: tmp4.body, variant: "text-md/medium", color: "text-muted", children: tmp40 };
              const tmp44 = closure_5(tmp(4892).Text, obj9);
              cResult[25] = tmp4.body;
              cResult[26] = tmp44;
              let tmp42 = tmp44;
            } else {
              tmp42 = cResult[26];
            }
            const _Symbol5 = Symbol;
            ({ noticeContainer, innerContainer } = tmp4);
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp47 = closure_5(tmp(11240).TimerIcon, { size: "sm" });
              cResult[27] = tmp47;
              let tmp45 = tmp47;
            } else {
              tmp45 = cResult[27];
            }
            if (cResult[28] !== tmp4.item) {
              const obj10 = { style: tmp4.item, children: tmp45 };
              const tmp51 = closure_5(View, obj10);
              cResult[28] = tmp4.item;
              cResult[29] = tmp51;
              let tmp48 = tmp51;
            } else {
              tmp48 = cResult[29];
            }
            const _Symbol6 = Symbol;
            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
              const intl5 = tmp(1126).intl;
              const stringResult3 = intl5.string(tmp(1126).t.Fq3DJb);
              cResult[30] = stringResult3;
              let tmp52 = stringResult3;
            } else {
              tmp52 = cResult[30];
            }
            if (cResult[31] !== tmp4.text) {
              const obj11 = { style: tmp4.text, variant: "text-sm/medium", color: "text-default", children: tmp52 };
              const tmp56 = closure_5(tmp(4892).Text, obj11);
              cResult[31] = tmp4.text;
              cResult[32] = tmp56;
              let tmp54 = tmp56;
            } else {
              tmp54 = cResult[32];
            }
            if (cResult[33] === tmp4.innerContainer) {
              if (cResult[34] === tmp48) {
                if (cResult[35] === tmp54) {
                  let tmp57 = cResult[36];
                }
                const _Symbol7 = Symbol;
                if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp63 = closure_5(tmp(4845).LinkIcon, { size: "sm" });
                  cResult[37] = tmp63;
                  let tmp61 = tmp63;
                } else {
                  tmp61 = cResult[37];
                }
                if (cResult[38] !== tmp4.item) {
                  const obj12 = { style: tmp4.item, children: tmp61 };
                  const tmp67 = closure_5(View, obj12);
                  cResult[38] = tmp4.item;
                  cResult[39] = tmp67;
                  let tmp64 = tmp67;
                } else {
                  tmp64 = cResult[39];
                }
                const _Symbol8 = Symbol;
                if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl6 = tmp(1126).intl;
                  const stringResult4 = intl6.string(tmp(1126).t.XKbf2G);
                  cResult[40] = stringResult4;
                  let tmp68 = stringResult4;
                } else {
                  tmp68 = cResult[40];
                }
                if (cResult[41] !== tmp4.text) {
                  const obj13 = { style: tmp4.text, variant: "text-sm/medium", color: "text-default", children: tmp68 };
                  const tmp72 = closure_5(tmp(4892).Text, obj13);
                  cResult[41] = tmp4.text;
                  cResult[42] = tmp72;
                  let tmp70 = tmp72;
                } else {
                  tmp70 = cResult[42];
                }
                if (cResult[43] === tmp4.secondInnerContainer) {
                  if (cResult[44] === tmp64) {
                    if (cResult[45] === tmp70) {
                      let tmp73 = cResult[46];
                    }
                    if (cResult[47] === tmp4.noticeContainer) {
                      if (cResult[48] === tmp57) {
                        if (cResult[49] === tmp73) {
                          let tmp77 = cResult[50];
                        }
                        if (cResult[51] === tmp37) {
                          if (cResult[52] === tmp42) {
                            if (cResult[53] === tmp77) {
                              let tmp81 = cResult[54];
                            }
                            if (cResult[55] === tmp31) {
                              if (cResult[56] === tmp81) {
                                if (cResult[57] === tmp12) {
                                  let tmp84 = cResult[58];
                                }
                                return tmp84;
                              }
                            }
                            const obj14 = {
                              showGradient: true,
                              scrollable: true,
                              startExpanded: true,
                              header: tmp12,
                              footer: tmp31,
                              children: tmp81,
                            };
                            const tmp86 = closure_5(tmp(6652).BottomSheet, obj14);
                            cResult[55] = tmp31;
                            cResult[56] = tmp81;
                            cResult[57] = tmp12;
                            cResult[58] = tmp86;
                            tmp84 = tmp86;
                          }
                        }
                        const obj15 = { children: null };
                        const items = [tmp37, tmp42, tmp77];
                        obj15.children = items;
                        const tmp83 = closure_6(tmp(6119).BottomSheetScrollView, obj15);
                        cResult[51] = tmp37;
                        cResult[52] = tmp42;
                        cResult[53] = tmp77;
                        cResult[54] = tmp83;
                        tmp81 = tmp83;
                      }
                    }
                    const obj16 = { style: noticeContainer, children: null };
                    const items1 = [tmp57, tmp73];
                    obj16.children = items1;
                    const tmp80 = closure_6(View, obj16);
                    cResult[47] = tmp4.noticeContainer;
                    cResult[48] = tmp57;
                    cResult[49] = tmp73;
                    cResult[50] = tmp80;
                    tmp77 = tmp80;
                  }
                }
                const obj17 = { style: tmp4.secondInnerContainer, children: null };
                const items2 = [tmp64, tmp70];
                obj17.children = items2;
                const tmp76 = closure_6(View, obj17);
                cResult[43] = tmp4.secondInnerContainer;
                cResult[44] = tmp64;
                cResult[45] = tmp70;
                cResult[46] = tmp76;
                tmp73 = tmp76;
              }
            }
            const obj18 = { style: innerContainer, children: null };
            const items3 = [tmp48, tmp54];
            obj18.children = items3;
            const tmp60 = closure_6(View, obj18);
            cResult[33] = tmp4.innerContainer;
            cResult[34] = tmp48;
            cResult[35] = tmp54;
            cResult[36] = tmp60;
            tmp57 = tmp60;
          }
        }
        const obj19 = { style: tmp18, children: null };
        const items4 = [tmp21, tmp27];
        obj19.children = items4;
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
      let obj = onClick(576);
    }
  : (onClick) => {
      onClick = onClick.onClick;
      const tmp = closure_7();
      const items = [onClick];
      const callback = noop.useCallback(() => {
        const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
          dismissible_content.DismissibleContent.GDM_INVITE_REMINDER,
        );
        ActionSheetActionCreatorsDefault.hideActionSheet();
        onClick();
      }, items);
      let obj = {
        showGradient: true,
        scrollable: true,
        startExpanded: true,
        header: null,
        footer: null,
        children: null,
      };
      const obj2 = { style: tmp.titleImage, children: null };
      const obj3 = { source: _modDef11239, resizeMode: "contain" };
      obj2.children = closure_5(FastImageDefault, obj3);
      obj.header = closure_5(View, obj2);
      const obj4 = { style: null, children: null };
      const items1 = [tmp.footer];
      items1[1] = { padding: 16, paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
      obj4.style = items1;
      const obj6 = { text: null, onPress: null };
      const intl = onClick(1126).intl;
      obj6.text = intl.string(onClick(1126).t["3PatSz"]);
      obj6.onPress = callback;
      const items2 = [closure_5(onClick(5601).Button, obj6)];
      const obj7 = { style: tmp.button, children: null };
      const obj8 = { text: null, onPress: null, variant: "tertiary" };
      const intl2 = onClick(1126).intl;
      obj8.text = intl2.string(onClick(1126).t["ETE/oC"]);
      obj8.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      obj7.children = closure_5(onClick(5601).Button, obj8);
      items2[1] = closure_5(View, obj7);
      obj4.children = items2;
      obj.footer = closure_6(View, obj4);
      const obj9 = { children: null };
      const obj10 = { style: tmp.title, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
      const intl3 = onClick(1126).intl;
      obj10.children = intl3.string(onClick(1126).t["bkqux/"]);
      const items3 = [closure_5(onClick(4892).Text, obj10), ,];
      const obj11 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: null };
      const intl4 = onClick(1126).intl;
      obj11.children = intl4.string(onClick(1126).t.N6TdqN);
      items3[1] = closure_5(onClick(4892).Text, obj11);
      const obj12 = { style: tmp.noticeContainer, children: null };
      const obj13 = { style: tmp.innerContainer, children: null };
      const obj5 = { padding: 16, paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
      const items4 = [
        closure_5(View, { style: tmp.item, children: closure_5(onClick(11240).TimerIcon, { size: "sm" }) }),
      ];
      const obj15 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
      const intl5 = onClick(1126).intl;
      obj15.children = intl5.string(onClick(1126).t.Fq3DJb);
      items4[1] = closure_5(onClick(4892).Text, obj15);
      obj13.children = items4;
      const items5 = [closure_6(View, obj13)];
      const obj16 = { style: tmp.secondInnerContainer, children: null };
      const obj14 = { style: tmp.item, children: closure_5(onClick(11240).TimerIcon, { size: "sm" }) };
      const items6 = [
        closure_5(View, { style: tmp.item, children: closure_5(onClick(4845).LinkIcon, { size: "sm" }) }),
      ];
      const obj18 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
      const intl6 = onClick(1126).intl;
      obj18.children = intl6.string(onClick(1126).t.XKbf2G);
      items6[1] = closure_5(onClick(4892).Text, obj18);
      obj16.children = items6;
      items5[1] = closure_6(View, obj16);
      obj12.children = items5;
      items3[2] = closure_6(View, obj12);
      obj9.children = items3;
      obj.children = closure_6(onClick(6119).BottomSheetScrollView, obj9);
      return closure_5(onClick(6652).BottomSheet, obj);
    };
