// discord_app/modules/parent_tools/native/ConnectGuardianCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import shareGuardianConnectLink from "shareGuardianConnectLink.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(7248).FAMILY_CENTER_REQUEST_QR_CODE_URL;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { paddingHorizontal: nativeDefault.space.PX_16 },
  compactContainer: null,
  card: null,
  countdown: null,
  divider: null,
  compactDividerFlush: null,
  dividerLine: null,
  dividerText: null,
  buttonGroup: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.compactContainer = { alignSelf: "center", gap: nativeDefault.space.PX_16 };
let obj4 = { alignSelf: "center", gap: nativeDefault.space.PX_16 };
obj2.card = {
  alignSelf: "center",
  padding: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
};
obj2.countdown = { textAlign: "center" };
let obj5 = {
  alignSelf: "center",
  padding: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
};
obj2.divider = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.compactDividerFlush = { paddingHorizontal: 0 };
let obj6 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.dividerLine = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
let obj7 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj2.dividerText = { marginHorizontal: nativeDefault.space.PX_8 };
obj2.buttonGroup = { paddingTop: 0 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { marginHorizontal: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianCard.tsx");

export const ConnectGuardianCard = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectGuardianCard(linkCode) {
      const cResult = linkCode(id[8]).c(69);
      linkCode = linkCode.linkCode;
      ({ expiresAt, shareActions } = linkCode);
      let str = "none";
      if (undefined !== shareActions) {
        str = shareActions;
      }
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function p() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = linkCode(id[8]);
      const stateFromStores = linkCode(id[9]).useStateFromStores(tmp5, tmp6);
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const time = stateFromStores(tmp2[10])(expiresAt);
      const sum = 86400 * time.days + 3600 * time.hours + 60 * time.minutes + time.seconds;
      stateFromStores(id[11])(expiresAt, linkCode.onRefresh);
      if (cResult[2] === stateFromStores) {
        if (cResult[5] === id) {
          if (null == id) {
            return null;
          } else {
            if (cResult[8] === id) {
              if (cResult[9] === linkCode) {
                let tmp15 = cResult[10];
              }
              const _Symbol = Symbol;
              class O {
                constructor() {
                  tmp2 = null != id;
                  tmp = id;
                  if (tmp2) {
                    tmp3 = linkCode;
                    str = "";
                    tmp2 = "" !== linkCode;
                  }
                  if (tmp2) {
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[13]);
                    tmp6 = closure_6;
                    tmp7 = linkCode;
                    tmp8 = closure_6(tmp, linkCode);
                    copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                  }
                  return;
                }
              }
              if (tmp18 === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(tmp2[15]).intl.string;
                class O {
                  constructor() {
                    tmp2 = null != id;
                    tmp = id;
                    if (tmp2) {
                      tmp3 = linkCode;
                      str = "";
                      tmp2 = "" !== linkCode;
                    }
                    if (tmp2) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[13]);
                      tmp6 = closure_6;
                      tmp7 = linkCode;
                      tmp8 = closure_6(tmp, linkCode);
                      copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                    }
                    return;
                  }
                }
                cResult[11] = tmp20;
                let tmp19 = tmp20;
              } else {
                tmp19 = cResult[11];
              }
              if (cResult[12] !== tmp15) {
                class O {
                  constructor() {
                    tmp2 = null != id;
                    tmp = id;
                    if (tmp2) {
                      tmp3 = linkCode;
                      str = "";
                      tmp2 = "" !== linkCode;
                    }
                    if (tmp2) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[13]);
                      tmp6 = closure_6;
                      tmp7 = linkCode;
                      tmp8 = closure_6(tmp, linkCode);
                      copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                    }
                    return;
                  }
                }
                const tmp23 = closure_7(tmp(tmp2[17]).QRCodeWithOverlay, { size: 160, text: null });
                cResult[12] = tmp15;
                cResult[13] = tmp23;
                let tmp21 = tmp23;
                const obj2 = { size: 160, text: null };
              } else {
                tmp21 = cResult[13];
              }
              if (cResult[14] !== sum) {
                const timeFormat = tmp(tmp2[18]).getTimeFormat(sum);
                class O {
                  constructor() {
                    tmp2 = null != id;
                    tmp = id;
                    if (tmp2) {
                      tmp3 = linkCode;
                      str = "";
                      tmp2 = "" !== linkCode;
                    }
                    if (tmp2) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[13]);
                      tmp6 = closure_6;
                      tmp7 = linkCode;
                      tmp8 = closure_6(tmp, linkCode);
                      copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                    }
                    return;
                  }
                }
                cResult[14] = sum;
                cResult[15] = timeFormat;
                let tmp24 = timeFormat;
                const tmpResult2 = tmp(tmp2[18]);
              } else {
                tmp24 = cResult[15];
              }
              const _HermesInternal = HermesInternal;
              const combined = "" + tmp19 + " " + tmp24;
              if (cResult[16] === tmp4.countdown) {
                if (cResult[17] === combined) {
                  let tmp27 = cResult[18];
                }
                if (cResult[19] === tmp27) {
                  if (cResult[20] === tmp21) {
                    let tmp30 = cResult[21];
                  }
                  if (cResult[22] === tmp4.card) {
                    if (cResult[23] === tmp30) {
                      let tmp32 = cResult[24];
                    }
                    if ("none" === str) {
                      return tmp32;
                    } else {
                      class O {
                        constructor() {
                          tmp2 = null != id;
                          tmp = id;
                          if (tmp2) {
                            tmp3 = linkCode;
                            str = "";
                            tmp2 = "" !== linkCode;
                          }
                          if (tmp2) {
                            tmp4 = closure_0;
                            tmp5 = closure_2;
                            obj = closure_0(closure_2[13]);
                            tmp6 = closure_6;
                            tmp7 = linkCode;
                            tmp8 = closure_6(tmp, linkCode);
                            copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                          }
                          return;
                        }
                      }
                      if (tmp41) {
                        const compactDividerFlush = tmp4.compactDividerFlush;
                      }
                      if (cResult[25] === tmp4.divider) {
                        if (cResult[28] !== tmp4.dividerLine) {
                          class O {
                            constructor() {
                              tmp2 = null != id;
                              tmp = id;
                              if (tmp2) {
                                tmp3 = linkCode;
                                str = "";
                                tmp2 = "" !== linkCode;
                              }
                              if (tmp2) {
                                tmp4 = closure_0;
                                tmp5 = closure_2;
                                obj = closure_0(closure_2[13]);
                                tmp6 = closure_6;
                                tmp7 = linkCode;
                                tmp8 = closure_6(tmp, linkCode);
                                copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                              }
                              return;
                            }
                          }
                          tmp39[0] = tmp4.dividerLine;
                          const tmp40 = closure_7(View, tmp39);
                          cResult[28] = tmp4.dividerLine;
                          cResult[29] = tmp40;
                        }
                        class O {
                          constructor() {
                            tmp2 = null != id;
                            tmp = id;
                            if (tmp2) {
                              tmp3 = linkCode;
                              str = "";
                              tmp2 = "" !== linkCode;
                            }
                            if (tmp2) {
                              tmp4 = closure_0;
                              tmp5 = closure_2;
                              obj = closure_0(closure_2[13]);
                              tmp6 = closure_6;
                              tmp7 = linkCode;
                              tmp8 = closure_6(tmp, linkCode);
                              copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                            }
                            return;
                          }
                        }
                      }
                      const items1 = [tmp4.divider, compactDividerFlush];
                      cResult[25] = tmp4.divider;
                      cResult[26] = compactDividerFlush;
                      cResult[27] = items1;
                      tmp41 = "compact" === str;
                    }
                  }
                  class O {
                    constructor() {
                      tmp2 = null != id;
                      tmp = id;
                      if (tmp2) {
                        tmp3 = linkCode;
                        str = "";
                        tmp2 = "" !== linkCode;
                      }
                      if (tmp2) {
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        obj = closure_0(closure_2[13]);
                        tmp6 = closure_6;
                        tmp7 = linkCode;
                        tmp8 = closure_6(tmp, linkCode);
                        copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                      }
                      return;
                    }
                  }
                  const obj3 = { style: tmp4.card, children: tmp30 };
                  const tmp34 = closure_7(View, obj3);
                  cResult[22] = tmp4.card;
                  cResult[23] = tmp30;
                  cResult[24] = tmp34;
                  tmp32 = tmp34;
                }
                class O {
                  constructor() {
                    tmp2 = null != id;
                    tmp = id;
                    if (tmp2) {
                      tmp3 = linkCode;
                      str = "";
                      tmp2 = "" !== linkCode;
                    }
                    if (tmp2) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[13]);
                      tmp6 = closure_6;
                      tmp7 = linkCode;
                      tmp8 = closure_6(tmp, linkCode);
                      copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                    }
                    return;
                  }
                }
                const obj4 = { align: "center", spacing: tmp10(tmp2[6]).space.PX_8, children: null };
                const items2 = [tmp21, tmp27];
                obj4.children = items2;
                const tmp31 = closure_8(tmp(tmp2[20]).Stack, obj4);
                cResult[19] = tmp27;
                cResult[20] = tmp21;
                cResult[21] = tmp31;
                tmp30 = tmp31;
              }
              const obj5 = { style: tmp4.countdown, variant: "text-xs/normal", children: combined };
              const tmp29 = closure_7(tmp(tmp2[19]).Text, obj5);
              cResult[16] = tmp4.countdown;
              cResult[17] = combined;
              cResult[18] = tmp29;
              tmp27 = tmp29;
            }
            class O {
              constructor() {
                tmp2 = null != id;
                tmp = id;
                if (tmp2) {
                  tmp3 = linkCode;
                  str = "";
                  tmp2 = "" !== linkCode;
                }
                if (tmp2) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[13]);
                  tmp6 = closure_6;
                  tmp7 = linkCode;
                  tmp8 = closure_6(tmp, linkCode);
                  copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
                }
                return;
              }
            }
            cResult[8] = id;
            cResult[9] = linkCode;
            cResult[10] = tmp17;
            tmp15 = tmp17;
          }
        }
        class O {
          constructor() {
            tmp2 = null != id;
            tmp = id;
            if (tmp2) {
              tmp3 = linkCode;
              str = "";
              tmp2 = "" !== linkCode;
            }
            if (tmp2) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[13]);
              tmp6 = closure_6;
              tmp7 = linkCode;
              tmp8 = closure_6(tmp, linkCode);
              copyResult = obj.copy(tmp8, closure_0(closure_2[14]).presentLinkCopied);
            }
            return;
          }
        }
        cResult[5] = id;
        cResult[6] = linkCode;
        cResult[7] = O;
      }
      const fn2 = function f() {
        let tmp2 = null != stateFromStores;
        if (tmp2) {
          tmp2 = "" !== linkCode;
        }
        if (tmp2) {
          const result = shareGuardianConnectLink.shareGuardianConnectLink(stateFromStores, linkCode);
        }
      };
      cResult[2] = stateFromStores;
      cResult[3] = linkCode;
      cResult[4] = fn2;
      tmp10 = stateFromStores;
      const tmpResult = linkCode(id[9]);
    }
  : function ConnectGuardianCard(linkCode) {
      linkCode = linkCode.linkCode;
      ({ expiresAt, shareActions } = linkCode);
      if (shareActions === undefined) {
        shareActions = "none";
      }
      let id;
      const tmp = closure_9();
      const items = [UserStore];
      const stateFromStores = linkCode(id[9]).useStateFromStores(items, () => currentUser.getCurrentUser());
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      let obj = linkCode(id[9]);
      ({ days, hours, minutes, seconds } = stateFromStores(id[10])(expiresAt));
      stateFromStores(id[11])(expiresAt, linkCode.onRefresh);
      const items1 = [stateFromStores, linkCode];
      const callback = noop.useCallback(() => {
        let tmp2 = null != stateFromStores;
        if (tmp2) {
          tmp2 = "" !== linkCode;
        }
        if (tmp2) {
          const result = shareGuardianConnectLink.shareGuardianConnectLink(stateFromStores, linkCode);
        }
      }, items1);
      const items2 = [id, linkCode];
      if (null == id) {
        return null;
      } else {
        const intl5 = tmp2(tmp3[15]).intl;
        const obj2 = { style: tmp.card, children: null };
        const tmp16 = closure_6(id, linkCode);
        const obj3 = { align: "center", spacing: tmp6(tmp3[6]).space.PX_8, children: null };
        const obj4 = { size: 160, text: tmp16 };
        const items3 = [closure_7(tmp2(tmp3[17]).QRCodeWithOverlay, obj4)];
        const obj5 = { style: tmp.countdown, variant: "text-xs/normal", children: null };
        const stringResult = intl5.string(tmp6(tmp3[16]).RfkLDs);
        const _HermesInternal = HermesInternal;
        obj5.children =
          "" + stringResult + " " + tmp2(tmp3[18]).getTimeFormat(86400 * days + 3600 * hours + 60 * minutes + seconds);
        items3[1] = closure_7(tmp2(tmp3[19]).Text, obj5);
        obj3.children = items3;
        obj2.children = closure_8(tmp2(tmp3[20]).Stack, obj3);
        const tmp22 = closure_7(View, obj2);
        if ("none" === shareActions) {
          return tmp22;
        } else {
          const items4 = [tmp.divider];
          let compactDividerFlush = tmp23;
          if ("compact" === shareActions) {
            compactDividerFlush = tmp.compactDividerFlush;
          }
          const obj6 = { style: null, children: null };
          items4[1] = compactDividerFlush;
          obj6.style = items4;
          const obj7 = { style: tmp.dividerLine };
          const items5 = [closure_7(View, obj7), ,];
          const obj8 = { style: tmp.dividerText, variant: "text-sm/medium", color: "text-muted", children: null };
          const intl = tmp2(tmp3[15]).intl;
          const tmp6Result = tmp6(tmp3[16]);
          obj8.children = intl.string("compact" === shareActions ? tmp6Result.XhROZk : tmp6Result.lggBOi);
          items5[1] = closure_7(tmp2(tmp3[19]).Text, obj8);
          const obj9 = { style: tmp.dividerLine };
          items5[2] = closure_7(View, obj9);
          obj6.children = items5;
          const tmp20Result = closure_8(View, obj6);
          if ("compact" === shareActions) {
            const obj10 = { style: tmp.compactContainer, children: null };
            const items6 = [tmp22, tmp20Result];
            const obj11 = { variant: "secondary", size: "md", text: null, icon: null, disabled: null, onPress: null };
            const intl4 = tmp2(tmp3[15]).intl;
            obj11.text = intl4.string(tmp2(tmp3[15]).t.Ej3B3Y);
            const obj12 = { size: "md", color: tmp6(tmp3[6]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
            obj11.icon = closure_7(tmp2(tmp3[21]).ShareIcon, obj12);
            obj11.disabled = "" === linkCode;
            obj11.onPress = callback;
            items6[2] = closure_7(tmp2(tmp3[22]).Button, obj11);
            obj10.children = items6;
            let tmp20Result2 = closure_8(View, obj10);
          } else {
            const obj13 = { spacing: tmp6(tmp3[6]).space.PX_32, style: tmp.container, children: null };
            const items7 = [tmp22, tmp20Result];
            const obj14 = { style: tmp.buttonGroup, children: null };
            const obj15 = { variant: "secondary", size: "md", text: null, disabled: null, onPress: null };
            const intl2 = tmp2(tmp3[15]).intl;
            obj15.text = intl2.string(tmp2(tmp3[15]).t.Ej3B3Y);
            obj15.disabled = "" === linkCode;
            obj15.onPress = callback;
            const items8 = [closure_7(tmp2(tmp3[22]).Button, obj15)];
            const obj16 = { variant: "secondary", size: "md", text: null, disabled: null, onPress: null };
            const intl3 = tmp2(tmp3[15]).intl;
            obj16.text = intl3.string(tmp2(tmp3[15]).t.WqhZss);
            obj16.disabled = "" === linkCode;
            obj16.onPress = tmp10;
            items8[1] = closure_7(tmp2(tmp3[22]).Button, obj16);
            obj14.children = items8;
            items7[2] = closure_8(tmp2(tmp3[23]).ButtonGroup, obj14);
            obj13.children = items7;
            tmp20Result2 = closure_8(tmp2(tmp3[20]).Stack, obj13);
          }
          return tmp20Result2;
        }
        const tmp2Result = tmp2(tmp3[18]);
      }
      const tmp7 = stateFromStores(id[10])(expiresAt);
    };
