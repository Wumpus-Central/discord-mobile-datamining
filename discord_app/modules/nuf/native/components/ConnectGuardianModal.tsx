// === Module 17920: ConnectGuardianModal ===

// Module 17920 (ConnectGuardianModal)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const FamilyCenterAction = fn(7248).FamilyCenterAction;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, centered: null, header: null, title: null, description: null, cardSection: null, scanPrompt: null, grow: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.centered = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.header = { marginBottom: nativeDefault.space.PX_40 };
let obj5 = { marginBottom: nativeDefault.space.PX_40 };
obj2.title = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.description = { paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj2.cardSection = { alignItems: "center" };
let obj7 = { paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj2.scanPrompt = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24, textAlign: "center" };
obj2.grow = { flexGrow: 1 };
let obj8 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24, textAlign: "center" };
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj9 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectGuardianModal(route) {
  const cResult = onComplete(576).c(51);
  onComplete = route.route.params.onComplete;
  const tmp4 = closure_9();
  let obj = onComplete(576);
  const connectGuardianGate = onComplete(17921).useConnectGuardianGate();
  dependencyMap = noop.useRef(false);
  if (cResult[0] === connectGuardianGate.state) {
    if (cResult[1] === onComplete) {
      let tmp7 = cResult[2];
      let tmp8 = cResult[3];
    }
    const effect = noop.useEffect(tmp7, tmp8);
    if ("gate" !== connectGuardianGate.state) {
      if (cResult[4] === tmp4.centered) {
        if (cResult[5] === tmp4.container) {
          let tmp56 = cResult[6];
        }
        const _Symbol4 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp60 = closure_7(tmp(6158).ActivityIndicator, {});
          cResult[7] = tmp60;
          let tmp58 = tmp60;
        } else {
          tmp58 = cResult[7];
        }
        if (cResult[8] !== tmp56) {
          const obj4 = { style: tmp56, children: tmp58 };
          const tmp64 = closure_7(View, obj4);
          cResult[8] = tmp56;
          cResult[9] = tmp64;
          let tmp61 = tmp64;
        } else {
          tmp61 = cResult[9];
        }
        return tmp61;
      }
      const items = [, ];
      ({ container: arr6[0], centered: arr6[1] } = tmp4);
      cResult[4] = tmp4.centered;
      cResult[5] = tmp4.container;
      cResult[6] = items;
      tmp56 = items;
    } else {
      const _Symbol5 = Symbol;
      ({ container, header, title } = tmp4);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp5(2565).ITlV6p);
        cResult[10] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[10];
      }
      if (cResult[11] !== tmp4.title) {
        const obj5 = { style: title, variant: "heading-xl/bold", color: "text-default", children: tmp10 };
        const tmp14 = closure_7(tmp(5086).Text, obj5);
        cResult[11] = tmp4.title;
        cResult[12] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[12];
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const formatResult = intl2.format(tmp5(2565).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
        cResult[13] = formatResult;
        let tmp15 = formatResult;
      } else {
        tmp15 = cResult[13];
      }
      if (cResult[14] === tmp4.description) {
        if (cResult[15] === tmp15) {
          let tmp17 = cResult[16];
        }
        if (cResult[17] === tmp4.header) {
          if (cResult[18] === tmp17) {
            if (cResult[19] === tmp12) {
              let tmp20 = cResult[20];
            }
            const _Symbol2 = Symbol;
            ({ cardSection, scanPrompt } = tmp4);
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult1 = intl3.string(tmp5(2565).Mi60fm);
              cResult[21] = stringResult1;
              let tmp24 = stringResult1;
            } else {
              tmp24 = cResult[21];
            }
            if (cResult[22] !== tmp4.scanPrompt) {
              const obj6 = { style: scanPrompt, variant: "text-md/semibold", color: "text-default", children: tmp24 };
              const tmp28 = closure_7(tmp(5086).Text, obj6);
              cResult[22] = tmp4.scanPrompt;
              cResult[23] = tmp28;
              let tmp26 = tmp28;
            } else {
              tmp26 = cResult[23];
            }
            if (cResult[24] === connectGuardianGate.expiresAt) {
              if (cResult[25] === connectGuardianGate.linkCode) {
                if (cResult[26] === connectGuardianGate.refresh) {
                  let tmp29 = cResult[27];
                }
                if (cResult[28] === tmp4.cardSection) {
                  if (cResult[29] === tmp26) {
                    if (cResult[30] === tmp29) {
                      let tmp32 = cResult[31];
                    }
                    if (cResult[32] !== tmp4.grow) {
                      const obj7 = { style: tmp4.grow };
                      const tmp39 = closure_7(View, obj7);
                      cResult[32] = tmp4.grow;
                      cResult[33] = tmp39;
                      let tmp36 = tmp39;
                    } else {
                      tmp36 = cResult[33];
                    }
                    const sum = connectGuardianGate(1630)().bottom + tmp5(587).space.PX_16;
                    if (cResult[34] !== sum) {
                      const obj9 = { paddingBottom: sum };
                      cResult[34] = sum;
                      cResult[35] = obj9;
                      let tmp41 = obj9;
                    } else {
                      tmp41 = cResult[35];
                    }
                    if (cResult[36] === tmp4.footer) {
                      if (cResult[37] === tmp41) {
                        let tmp42 = cResult[38];
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = tmp(1126).intl;
                        const stringResult2 = intl4.string(tmp(1126).t["3PatSz"]);
                        cResult[39] = stringResult2;
                        let tmp43 = stringResult2;
                      } else {
                        tmp43 = cResult[39];
                      }
                      if (cResult[40] !== onComplete) {
                        const obj10 = {
                          variant: "primary",
                          size: "lg",
                          text: tmp43,
                          onPress() {
                                                  let tmpResult;
                                                  if (onComplete != null) {
                                                    tmpResult = tmp(false);
                                                  }
                                                  return tmpResult;
                                                }
                        };
                        const tmp47 = closure_7(tmp(5375).Button, obj10);
                        cResult[40] = onComplete;
                        cResult[41] = tmp47;
                        let tmp45 = tmp47;
                      } else {
                        tmp45 = cResult[41];
                      }
                      if (cResult[42] === tmp42) {
                        if (cResult[43] === tmp45) {
                          let tmp48 = cResult[44];
                        }
                        if (cResult[45] === tmp4.container) {
                          if (cResult[46] === tmp20) {
                            if (cResult[47] === tmp32) {
                              if (cResult[48] === tmp36) {
                                if (cResult[49] === tmp48) {
                                  let tmp52 = cResult[50];
                                }
                                return tmp52;
                              }
                            }
                          }
                        }
                        const obj11 = { style: container, children: null };
                        const items1 = [tmp20, tmp32, tmp36, tmp48];
                        obj11.children = items1;
                        const tmp55 = closure_8(View, obj11);
                        cResult[45] = tmp4.container;
                        cResult[46] = tmp20;
                        cResult[47] = tmp32;
                        cResult[48] = tmp36;
                        cResult[49] = tmp48;
                        cResult[50] = tmp55;
                        tmp52 = tmp55;
                      }
                      const obj12 = { style: tmp42, children: tmp45 };
                      const tmp51 = closure_7(View, obj12);
                      cResult[42] = tmp42;
                      cResult[43] = tmp45;
                      cResult[44] = tmp51;
                      tmp48 = tmp51;
                    }
                    const items2 = [tmp4.footer, tmp41];
                    cResult[36] = tmp4.footer;
                    cResult[37] = tmp41;
                    cResult[38] = items2;
                    tmp42 = items2;
                  }
                }
                const obj13 = { style: cardSection, children: null };
                const items3 = [tmp26, tmp29];
                obj13.children = items3;
                const tmp35 = closure_8(View, obj13);
                cResult[28] = tmp4.cardSection;
                cResult[29] = tmp26;
                cResult[30] = tmp29;
                cResult[31] = tmp35;
                tmp32 = tmp35;
              }
            }
            ({ linkCode: obj8.linkCode, expiresAt: obj8.expiresAt, refresh: obj8.onRefresh } = connectGuardianGate);
            const tmp31 = closure_7(tmp(14966).ConnectGuardianCard, { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null });
            cResult[24] = connectGuardianGate.expiresAt;
            cResult[25] = connectGuardianGate.linkCode;
            cResult[26] = connectGuardianGate.refresh;
            cResult[27] = tmp31;
            tmp29 = tmp31;
            const obj14 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
          }
        }
        const obj15 = { style: header, children: null };
        const items4 = [tmp12, tmp17];
        obj15.children = items4;
        const tmp23 = closure_8(View, obj15);
        cResult[17] = tmp4.header;
        cResult[18] = tmp17;
        cResult[19] = tmp12;
        cResult[20] = tmp23;
        tmp20 = tmp23;
      }
      const obj27 = { style: tmp4.description, variant: "text-sm/medium", color: "text-muted", children: tmp15 };
      const tmp19 = closure_7(tmp(5086).Text, obj27);
      cResult[14] = tmp4.description;
      cResult[15] = tmp15;
      cResult[16] = tmp19;
      tmp17 = tmp19;
    }
  }
  const fn = function f() {
    let current = "error" !== connectGuardianGate.state;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const obj2 = { action: FamilyCenterAction.NufConsentGateLinkCodeError, source: "NUF Connect Guardian" };
      AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      if (onComplete != null) {
        onComplete(true);
      }
    }
  };
  const items5 = [connectGuardianGate.state, onComplete];
  cResult[0] = connectGuardianGate.state;
  cResult[1] = onComplete;
  cResult[2] = fn;
  cResult[3] = items5;
  tmp8 = items5;
  tmp7 = fn;
  let obj2 = onComplete(17921);
}) : (function ConnectGuardianModal(route) {
  const onComplete = route.route.params.onComplete;
  const tmp = closure_9();
  const connectGuardianGate = onComplete(17921).useConnectGuardianGate();
  dependencyMap = noop.useRef(false);
  const items = [connectGuardianGate.state, onComplete];
  const effect = noop.useEffect(() => {
    let current = "error" !== connectGuardianGate.state;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const obj2 = { action: FamilyCenterAction.NufConsentGateLinkCodeError, source: "NUF Connect Guardian" };
      AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      if (onComplete != null) {
        onComplete(true);
      }
    }
  }, items);
  if ("gate" !== connectGuardianGate.state) {
    let obj2 = { style: null, children: null };
    const items1 = [, ];
    ({ container: arr2[0], centered: arr2[1] } = tmp);
    obj2.style = items1;
    obj2.children = closure_7(tmp4(6158).ActivityIndicator, {});
    let tmp9 = closure_7(View, obj2);
  } else {
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.header, children: null };
    const obj5 = { style: tmp.title, variant: "heading-xl/bold", color: "text-default", children: null };
    const intl = tmp4(1126).intl;
    obj5.children = intl.string(tmp2(2565).ITlV6p);
    const items2 = [closure_7(tmp4(5086).Text, obj5), ];
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp4(1126).intl;
    obj6.children = intl2.format(tmp2(2565).F4GT2S, { link: "https://support.discord.com/hc/articles/14155060633623" });
    items2[1] = closure_7(tmp4(5086).Text, obj6);
    obj4.children = items2;
    const items3 = [closure_8(View, obj4), , , ];
    const obj7 = { style: tmp.cardSection, children: null };
    const obj8 = { style: tmp.scanPrompt, variant: "text-md/semibold", color: "text-default", children: null };
    const intl3 = tmp4(1126).intl;
    obj8.children = intl3.string(tmp2(2565).Mi60fm);
    const items4 = [closure_7(tmp4(5086).Text, obj8), ];
    ({ linkCode: obj9.linkCode, expiresAt: obj9.expiresAt, refresh: obj9.onRefresh } = connectGuardianGate);
    items4[1] = closure_7(tmp4(14966).ConnectGuardianCard, { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null });
    obj7.children = items4;
    items3[1] = closure_8(View, obj7);
    const obj11 = { style: tmp.grow };
    items3[2] = closure_7(View, obj11);
    const obj12 = { style: null, children: null };
    const items5 = [tmp.footer, ];
    const obj13 = { paddingBottom: connectGuardianGate(1630)().bottom + tmp2(587).space.PX_16 };
    items5[1] = obj13;
    obj12.style = items5;
    const obj25 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl4 = tmp4(1126).intl;
    obj25.text = intl4.string(tmp4(1126).t["3PatSz"]);
    obj25.onPress = function onPress() {
      let tmpResult;
      if (onComplete != null) {
        tmpResult = tmp(false);
      }
      return tmpResult;
    };
    obj12.children = closure_7(tmp4(5375).Button, obj25);
    items3[3] = closure_7(View, obj12);
    obj3.children = items3;
    tmp9 = closure_8(View, obj3);
    const obj10 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
  }
  return tmp9;
});