// discord_app/modules/parent_tools/native/ConnectGuardianCard.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import shareGuardianConnectLink from "shareGuardianConnectLink.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let linkCode;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
let closure_6 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  compactContainer: obj3,
  card: obj4,
  countdown: { textAlign: "center" },
  divider: obj5,
  compactDividerFlush: { paddingHorizontal: 0 },
  dividerLine: obj6,
  dividerText: obj7,
  buttonGroup: { paddingTop: 0 },
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", gap: nativeDefault.space.PX_16 };
obj4 = {
  alignSelf: "center",
  padding: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
};
obj5 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj6 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj7 = { marginHorizontal: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (linkCode) => {
      let currentUser;
      let expiresAt;
      let id;
      let items1;
      let items3;
      let shareActions;
      let tmp5;
      let tmp6;
      let tmp2 = id;
      let obj = linkCode(id[8]);
      const cResult = obj.c(69);
      linkCode = linkCode.linkCode;
      ({ expiresAt, shareActions } = linkCode);
      let str = "none";
      const onRefresh = linkCode.onRefresh;
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
        tmp6 = fn;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = linkCode(tmp2[9]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const time = stateFromStores(tmp2[10])(expiresAt);
      const sum = 86400 * time.days + 3600 * time.hours + 60 * time.minutes + time.seconds;
      stateFromStores(tmp2[11])(expiresAt, onRefresh);
      const tmp10 = stateFromStores;
      if (cResult[2] === stateFromStores) {
        if (cResult[5] === id) {
          if (null == id) {
            return null;
          } else {
            if (cResult[8] === id) {
              let tmp15;
              let tmp19;
              let tmp21;
              let tmp24;
              if (cResult[9] === linkCode) {
                tmp15 = cResult[10];
              }
              const _Symbol = Symbol;
              class O {
                constructor() {
                  const tmp2 = null != id && "" !== linkCode;
                  if (tmp2) {
                    const copy = ClipboardUtils.copy;
                    ClipboardUtils;
                    const tmp9 = closure_6(id, linkCode);
                    copy(tmp9, ToastUtils.presentLinkCopied);
                  }
                }
              }
              if (tmp18 === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(tmp2[15]).intl.string;
                class O {
                  constructor() {
                    const tmp2 = null != id && "" !== linkCode;
                    if (tmp2) {
                      const copy = ClipboardUtils.copy;
                      ClipboardUtils;
                      const tmp9 = closure_6(id, linkCode);
                      copy(tmp9, ToastUtils.presentLinkCopied);
                    }
                  }
                }
                cResult[11] = tmp20;
                tmp19 = tmp20;
              } else {
                tmp19 = cResult[11];
              }
              const card = tmp4.card;
              if (cResult[12] !== tmp15) {
                const obj2 = { size: 160, text: null };
                class O {
                  constructor() {
                    const tmp2 = null != id && "" !== linkCode;
                    if (tmp2) {
                      const copy = ClipboardUtils.copy;
                      ClipboardUtils;
                      const tmp9 = closure_6(id, linkCode);
                      copy(tmp9, ToastUtils.presentLinkCopied);
                    }
                  }
                }
                const tmp23 = closure_7(linkCode(tmp2[17]).QRCodeWithOverlay, obj2);
                cResult[12] = tmp15;
                cResult[13] = tmp23;
                tmp21 = tmp23;
              } else {
                tmp21 = cResult[13];
              }
              const countdown = tmp4.countdown;
              if (cResult[14] !== sum) {
                const tmpResult2 = linkCode(tmp2[18]);
                const timeFormat = tmpResult2.getTimeFormat(sum);
                class O {
                  constructor() {
                    const tmp2 = null != id && "" !== linkCode;
                    if (tmp2) {
                      const copy = ClipboardUtils.copy;
                      ClipboardUtils;
                      const tmp9 = closure_6(id, linkCode);
                      copy(tmp9, ToastUtils.presentLinkCopied);
                    }
                  }
                }
                cResult[14] = sum;
                cResult[15] = timeFormat;
                tmp24 = timeFormat;
              } else {
                tmp24 = cResult[15];
              }
              const _HermesInternal = HermesInternal;
              const combined = "" + tmp19 + " " + tmp24;
              if (cResult[16] === tmp4.countdown) {
                let tmp27;
                if (cResult[17] === combined) {
                  tmp27 = cResult[18];
                }
                if (cResult[19] === tmp27) {
                  let tmp30;
                  if (cResult[20] === tmp21) {
                    tmp30 = cResult[21];
                  }
                  if (cResult[22] === tmp4.card) {
                    let tmp32;
                    if (cResult[23] === tmp30) {
                      tmp32 = cResult[24];
                    }
                    if ("none" === str) {
                      return tmp32;
                    } else {
                      class O {
                        constructor() {
                          const tmp2 = null != id && "" !== linkCode;
                          if (tmp2) {
                            const copy = ClipboardUtils.copy;
                            ClipboardUtils;
                            const tmp9 = closure_6(id, linkCode);
                            copy(tmp9, ToastUtils.presentLinkCopied);
                          }
                        }
                      }
                      if (cResult[25] === tmp4.divider) {
                        let tmp36;
                        let tmp37;
                        let tmp43;
                        if (cResult[26] === tmp35) {
                          tmp36 = cResult[27];
                        }
                        if (cResult[28] !== tmp4.dividerLine) {
                          class O {
                            constructor() {
                              const tmp2 = null != id && "" !== linkCode;
                              if (tmp2) {
                                const copy = ClipboardUtils.copy;
                                ClipboardUtils;
                                const tmp9 = closure_6(id, linkCode);
                                copy(tmp9, ToastUtils.presentLinkCopied);
                              }
                            }
                          }
                          tmp40[0] = tmp4.dividerLine;
                          const tmp41 = closure_7(View, tmp40);
                          cResult[28] = tmp4.dividerLine;
                          cResult[29] = tmp41;
                          tmp37 = tmp41;
                        } else {
                          tmp37 = cResult[29];
                        }
                        class O {
                          constructor() {
                            const tmp2 = null != id && "" !== linkCode;
                            if (tmp2) {
                              const copy = ClipboardUtils.copy;
                              ClipboardUtils;
                              const tmp9 = closure_6(id, linkCode);
                              copy(tmp9, ToastUtils.presentLinkCopied);
                            }
                          }
                        }
                        if (cResult[30] !== ("compact" === str)) {
                          const intl = tmp(tmp2[15]).intl;
                          const string2 = intl.string;
                          class O {
                            constructor() {
                              const tmp2 = null != id && "" !== linkCode;
                              if (tmp2) {
                                const copy = ClipboardUtils.copy;
                                ClipboardUtils;
                                const tmp9 = closure_6(id, linkCode);
                                copy(tmp9, ToastUtils.presentLinkCopied);
                              }
                            }
                          }
                          const string2Result = string2("compact" === str ? tmp44.XhROZk : tmp44.lggBOi);
                          cResult[30] = "compact" === str;
                          cResult[31] = string2Result;
                          tmp43 = string2Result;
                        } else {
                          tmp43 = cResult[31];
                        }
                        if (cResult[32] === tmp4.dividerText) {
                          let tmp46;
                          let tmp49;
                          if (cResult[33] === tmp43) {
                            tmp46 = cResult[34];
                          }
                          if (cResult[35] !== tmp4.dividerLine) {
                            class O {
                              constructor() {
                                const tmp2 = null != id && "" !== linkCode;
                                if (tmp2) {
                                  const copy = ClipboardUtils.copy;
                                  ClipboardUtils;
                                  const tmp9 = closure_6(id, linkCode);
                                  copy(tmp9, ToastUtils.presentLinkCopied);
                                }
                              }
                            }
                            tmp52[0] = tmp4.dividerLine;
                            const tmp53 = closure_7(View, tmp52);
                            cResult[35] = tmp4.dividerLine;
                            cResult[36] = tmp53;
                            tmp49 = tmp53;
                          } else {
                            tmp49 = cResult[36];
                          }
                          class O {
                            constructor() {
                              const tmp2 = null != id && "" !== linkCode;
                              if (tmp2) {
                                const copy = ClipboardUtils.copy;
                                ClipboardUtils;
                                const tmp9 = closure_6(id, linkCode);
                                copy(tmp9, ToastUtils.presentLinkCopied);
                              }
                            }
                          }
                          const obj3 = { style: tmp36, children: items1 };
                          items1 = [tmp37, tmp46, tmp49];
                          cResult[37] = tmp36;
                          cResult[38] = tmp37;
                          cResult[39] = tmp46;
                          cResult[40] = tmp49;
                          cResult[41] = closure_8(View, obj3);
                          const tmp57 = closure_8(View, obj3);
                        }
                        const obj4 = { style: tmp42, variant: "text-sm/medium", color: "text-muted", children: tmp43 };
                        const tmp48 = closure_7(linkCode(tmp2[19]).Text, obj4);
                        cResult[32] = tmp4.dividerText;
                        cResult[33] = tmp43;
                        cResult[34] = tmp48;
                        tmp46 = tmp48;
                      }
                      const items2 = [tmp4.divider, tmp35];
                      cResult[25] = tmp4.divider;
                      cResult[26] = tmp35;
                      cResult[27] = items2;
                      tmp36 = items2;
                    }
                  }
                  class O {
                    constructor() {
                      const tmp2 = null != id && "" !== linkCode;
                      if (tmp2) {
                        const copy = ClipboardUtils.copy;
                        ClipboardUtils;
                        const tmp9 = closure_6(id, linkCode);
                        copy(tmp9, ToastUtils.presentLinkCopied);
                      }
                    }
                  }
                  const obj5 = { style: card, children: tmp30 };
                  const tmp34 = closure_7(View, obj5);
                  cResult[22] = tmp4.card;
                  cResult[23] = tmp30;
                  cResult[24] = tmp34;
                  tmp32 = tmp34;
                }
                class O {
                  constructor() {
                    const tmp2 = null != id && "" !== linkCode;
                    if (tmp2) {
                      const copy = ClipboardUtils.copy;
                      ClipboardUtils;
                      const tmp9 = closure_6(id, linkCode);
                      copy(tmp9, ToastUtils.presentLinkCopied);
                    }
                  }
                }
                const obj6 = { align: "center", spacing: tmp10(tmp2[6]).space.PX_8, children: items3 };
                const Stack = tmp(tmp2[20]).Stack;
                items3 = [tmp21, tmp27];
                const tmp31 = closure_8(Stack, obj6);
                cResult[19] = tmp27;
                cResult[20] = tmp21;
                cResult[21] = tmp31;
                tmp30 = tmp31;
              }
              const obj7 = { style: countdown, variant: "text-xs/normal", children: combined };
              const tmp29 = closure_7(linkCode(tmp2[19]).Text, obj7);
              cResult[16] = tmp4.countdown;
              cResult[17] = combined;
              cResult[18] = tmp29;
              tmp27 = tmp29;
            }
            class O {
              constructor() {
                const tmp2 = null != id && "" !== linkCode;
                if (tmp2) {
                  const copy = ClipboardUtils.copy;
                  ClipboardUtils;
                  const tmp9 = closure_6(id, linkCode);
                  copy(tmp9, ToastUtils.presentLinkCopied);
                }
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
            const tmp2 = null != id && "" !== linkCode;
            if (tmp2) {
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              const tmp9 = closure_6(id, linkCode);
              copy(tmp9, ToastUtils.presentLinkCopied);
            }
          }
        }
        cResult[5] = id;
        cResult[6] = linkCode;
        cResult[7] = O;
      }
      const fn2 = function f() {
        const tmp2 = null != stateFromStores && "" !== linkCode;
        if (tmp2) {
          const obj = shareGuardianConnectLink;
          const result = obj.shareGuardianConnectLink(stateFromStores, linkCode);
        }
      };
      cResult[2] = stateFromStores;
      cResult[3] = linkCode;
      cResult[4] = fn2;
    }
  : (linkCode) => {
      let ShareIcon;
      let Stack2;
      let currentUser;
      let days;
      let expiresAt;
      let hours;
      let intl2;
      let intl3;
      let intl4;
      let items3;
      let items5;
      let items6;
      let items7;
      let items8;
      let minutes;
      let obj12;
      let obj3;
      let seconds;
      let shareActions;
      let string;
      let tmp2Result;
      let tmp6Result;
      linkCode = linkCode.linkCode;
      ({ expiresAt, shareActions } = linkCode);
      const onRefresh = linkCode.onRefresh;
      if (shareActions === undefined) {
        shareActions = "none";
      }
      let id;
      const tmp = closure_9();
      let tmp2 = linkCode;
      let obj = linkCode(id[9]);
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp6 = stateFromStores;
      ({ days, hours, minutes, seconds } = stateFromStores(id[10])(expiresAt));
      stateFromStores(id[10])(expiresAt);
      stateFromStores(id[11])(expiresAt, onRefresh);
      const items1 = [stateFromStores, linkCode];
      const callback = react.useCallback(() => {
        const tmp2 = null != stateFromStores && "" !== linkCode;
        if (tmp2) {
          const obj = shareGuardianConnectLink;
          const result = obj.shareGuardianConnectLink(stateFromStores, linkCode);
        }
      }, items1);
      const items2 = [id, linkCode];
      if (null == id) {
        return null;
      } else {
        const tmp17 = closure_6(id, linkCode);
        const intl5 = tmp2(tmp3[15]).intl;
        const obj2 = { style: tmp.card, children: closure_8(Stack2, obj3) };
        obj3 = { align: "center", spacing: tmp6(id[6]).space.PX_8, children: items3 };
        const stringResult = intl5.string(tmp6(id[16]).RfkLDs);
        Stack2 = tmp2(tmp3[20]).Stack;
        const obj4 = { size: 160, text: tmp17 };
        items3 = [closure_7(tmp2(id[17]).QRCodeWithOverlay, obj4)];
        const obj5 = {
          style: tmp.countdown,
          variant: "text-xs/normal",
          children:
            "" + stringResult + " " + tmp2Result.getTimeFormat(86400 * days + 3600 * hours + 60 * minutes + seconds),
        };
        const Text2 = tmp2(tmp3[19]).Text;
        const _HermesInternal = HermesInternal;
        tmp2Result = tmp2(id[18]);
        items3[1] = closure_7(Text2, obj5);
        const tmp23 = closure_7(View, obj2);
        if ("none" === shareActions) {
          return tmp23;
        } else {
          let tmp21Result2;
          const items4 = [tmp.divider];
          const obj6 = { style: items4, children: items5 };
          const tmp11 = "compact" === shareActions && tmp.compactDividerFlush;
          items4[1] = tmp11;
          const obj7 = { style: tmp.dividerLine };
          items5 = [closure_7(View, obj7), ,];
          const obj8 = {
            style: tmp.dividerText,
            variant: "text-sm/medium",
            color: "text-muted",
            children: string("compact" === shareActions ? tmp6Result.XhROZk : tmp6Result.lggBOi),
          };
          const Text = tmp2(tmp3[19]).Text;
          const intl = tmp2(tmp3[15]).intl;
          string = intl.string;
          tmp6Result = tmp6(id[16]);
          items5[1] = closure_7(Text, obj8);
          const obj9 = { style: tmp.dividerLine };
          items5[2] = closure_7(View, obj9);
          const tmp21Result = closure_8(View, obj6);
          if ("compact" === shareActions) {
            const obj10 = { style: tmp.compactContainer, children: items6 };
            items6 = [tmp23, tmp21Result];
            const obj11 = {
              variant: "secondary",
              size: "md",
              text: intl4.string(tmp2(id[15]).t.Ej3B3Y),
              icon: closure_7(ShareIcon, obj12),
              disabled: "" === linkCode,
              onPress: callback,
            };
            const Button3 = tmp2(tmp3[22]).Button;
            intl4 = tmp2(tmp3[15]).intl;
            obj12 = { size: "md", color: tmp6(id[6]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
            ShareIcon = tmp2(tmp3[21]).ShareIcon;
            items6[2] = closure_7(Button3, obj11);
            tmp21Result2 = closure_8(View, obj10);
          } else {
            const obj13 = { spacing: tmp6(id[6]).space.PX_32, style: tmp.container, children: items7 };
            const Stack = tmp2(tmp3[20]).Stack;
            items7 = [tmp23, tmp21Result];
            const obj14 = { style: tmp.buttonGroup, children: items8 };
            const ButtonGroup = tmp2(tmp3[23]).ButtonGroup;
            const obj15 = {
              variant: "secondary",
              size: "md",
              text: intl2.string(tmp2(id[15]).t.Ej3B3Y),
              disabled: "" === linkCode,
              onPress: callback,
            };
            const Button = tmp2(tmp3[22]).Button;
            intl2 = tmp2(tmp3[15]).intl;
            items8 = [closure_7(Button, obj15)];
            const obj16 = {
              variant: "secondary",
              size: "md",
              text: intl3.string(tmp2(id[15]).t.WqhZss),
              disabled: "" === linkCode,
              onPress: tmp10,
            };
            const Button2 = tmp2(tmp3[22]).Button;
            intl3 = tmp2(tmp3[15]).intl;
            items8[1] = closure_7(Button2, obj16);
            items7[2] = closure_8(ButtonGroup, obj14);
            tmp21Result2 = closure_8(Stack, obj13);
          }
          return tmp21Result2;
        }
      }
    };
let result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianCard.tsx");

export const ConnectGuardianCard = tmp4;
