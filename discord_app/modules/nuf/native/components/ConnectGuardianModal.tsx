// discord_app/modules/nuf/native/components/ConnectGuardianModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import FamilyCenterConstants from "../../../parent_tools/FamilyCenterConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const FamilyCenterAction = FamilyCenterConstants.FamilyCenterAction;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  centered: obj3,
  header: obj4,
  title: obj5,
  description: obj6,
  cardSection: { alignItems: "center" },
  scanPrompt: obj7,
  grow: { flexGrow: 1 },
  footer: obj8,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_40 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24, textAlign: "center" };
obj8 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      let cardSection;
      let connectGuardianGate;
      let container;
      let header;
      let items1;
      let items3;
      let items4;
      let onComplete;
      let ref;
      let scanPrompt;
      let title;
      const tmp = onComplete;
      let obj = onComplete(576);
      const cResult = obj.c(51);
      onComplete = route.route.params.onComplete;
      const tmp4 = closure_9();
      const bottom = connectGuardianGate(1618)().bottom;
      let obj2 = onComplete(17593);
      connectGuardianGate = obj2.useConnectGuardianGate();
      dependencyMap = react.useRef(false);
      if (cResult[0] === connectGuardianGate.state) {
        let tmp7;
        let tmp8;
        if (cResult[1] === onComplete) {
          tmp7 = cResult[2];
          tmp8 = cResult[3];
        }
        const effect = react.useEffect(tmp7, tmp8);
        if ("gate" !== connectGuardianGate.state) {
          if (cResult[4] === tmp4.centered) {
            let tmp56;
            let tmp58;
            let tmp61;
            if (cResult[5] === tmp4.container) {
              tmp56 = cResult[6];
            }
            const _Symbol4 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp60 = closure_7(tmp(5968).ActivityIndicator, {});
              cResult[7] = tmp60;
              tmp58 = tmp60;
            } else {
              tmp58 = cResult[7];
            }
            if (cResult[8] !== tmp56) {
              const obj4 = { style: tmp56, children: tmp58 };
              const tmp64 = closure_7(View, obj4);
              cResult[8] = tmp56;
              cResult[9] = tmp64;
              tmp61 = tmp64;
            } else {
              tmp61 = cResult[9];
            }
            return tmp61;
          }
          const items = [,];
          ({ container: arr6[0], centered: arr6[1] } = tmp4);
          cResult[4] = tmp4.centered;
          cResult[5] = tmp4.container;
          cResult[6] = items;
          tmp56 = items;
        } else {
          let tmp10;
          let tmp12;
          let tmp15;
          const _Symbol5 = Symbol;
          ({ container, header, title } = tmp4);
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(connectGuardianGate(2493).ITlV6p);
            cResult[10] = stringResult;
            tmp10 = stringResult;
          } else {
            tmp10 = cResult[10];
          }
          if (cResult[11] !== tmp4.title) {
            const obj5 = { style: title, variant: "heading-xl/bold", color: "text-default", children: tmp10 };
            const tmp14 = closure_7(tmp(4886).Text, obj5);
            cResult[11] = tmp4.title;
            cResult[12] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[12];
          }
          const _Symbol = Symbol;
          const description = tmp4.description;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const formatResult = intl2.format(connectGuardianGate(2493).F4GT2S, {
              link: "https://support.discord.com/hc/articles/14155060633623",
            });
            cResult[13] = formatResult;
            tmp15 = formatResult;
          } else {
            tmp15 = cResult[13];
          }
          if (cResult[14] === tmp4.description) {
            let tmp17;
            if (cResult[15] === tmp15) {
              tmp17 = cResult[16];
            }
            if (cResult[17] === tmp4.header) {
              if (cResult[18] === tmp17) {
                let tmp20;
                let tmp24;
                let tmp26;
                if (cResult[19] === tmp12) {
                  tmp20 = cResult[20];
                }
                const _Symbol2 = Symbol;
                ({ cardSection, scanPrompt } = tmp4);
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(1126).intl;
                  const stringResult1 = intl3.string(connectGuardianGate(2493).Mi60fm);
                  cResult[21] = stringResult1;
                  tmp24 = stringResult1;
                } else {
                  tmp24 = cResult[21];
                }
                if (cResult[22] !== tmp4.scanPrompt) {
                  const obj6 = {
                    style: scanPrompt,
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: tmp24,
                  };
                  const tmp28 = closure_7(tmp(4886).Text, obj6);
                  cResult[22] = tmp4.scanPrompt;
                  cResult[23] = tmp28;
                  tmp26 = tmp28;
                } else {
                  tmp26 = cResult[23];
                }
                if (cResult[24] === connectGuardianGate.expiresAt) {
                  if (cResult[25] === connectGuardianGate.linkCode) {
                    let tmp29;
                    if (cResult[26] === connectGuardianGate.refresh) {
                      tmp29 = cResult[27];
                    }
                    if (cResult[28] === tmp4.cardSection) {
                      if (cResult[29] === tmp26) {
                        let tmp32;
                        let tmp36;
                        let tmp41;
                        if (cResult[30] === tmp29) {
                          tmp32 = cResult[31];
                        }
                        if (cResult[32] !== tmp4.grow) {
                          const obj7 = { style: tmp4.grow };
                          const tmp39 = closure_7(View, obj7);
                          cResult[32] = tmp4.grow;
                          cResult[33] = tmp39;
                          tmp36 = tmp39;
                        } else {
                          tmp36 = cResult[33];
                        }
                        const sum = bottom + tmp5(587).space.PX_16;
                        if (cResult[34] !== sum) {
                          const obj9 = { paddingBottom: sum };
                          cResult[34] = sum;
                          cResult[35] = obj9;
                          tmp41 = obj9;
                        } else {
                          tmp41 = cResult[35];
                        }
                        if (cResult[36] === tmp4.footer) {
                          let tmp42;
                          let tmp43;
                          let tmp45;
                          if (cResult[37] === tmp41) {
                            tmp42 = cResult[38];
                          }
                          const _Symbol3 = Symbol;
                          if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl4 = tmp(1126).intl;
                            const stringResult2 = intl4.string(tmp(1126).t["3PatSz"]);
                            cResult[39] = stringResult2;
                            tmp43 = stringResult2;
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
                              },
                            };
                            const tmp47 = closure_7(tmp(5594).Button, obj10);
                            cResult[40] = onComplete;
                            cResult[41] = tmp47;
                            tmp45 = tmp47;
                          } else {
                            tmp45 = cResult[41];
                          }
                          if (cResult[42] === tmp42) {
                            let tmp48;
                            if (cResult[43] === tmp45) {
                              tmp48 = cResult[44];
                            }
                            if (cResult[45] === tmp4.container) {
                              if (cResult[46] === tmp20) {
                                if (cResult[47] === tmp32) {
                                  if (cResult[48] === tmp36) {
                                    let tmp52;
                                    if (cResult[49] === tmp48) {
                                      tmp52 = cResult[50];
                                    }
                                    return tmp52;
                                  }
                                }
                              }
                            }
                            const obj11 = { style: container, children: items1 };
                            items1 = [tmp20, tmp32, tmp36, tmp48];
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
                    const obj13 = { style: cardSection, children: items3 };
                    items3 = [tmp26, tmp29];
                    const tmp35 = closure_8(View, obj13);
                    cResult[28] = tmp4.cardSection;
                    cResult[29] = tmp26;
                    cResult[30] = tmp29;
                    cResult[31] = tmp35;
                    tmp32 = tmp35;
                  }
                }
                const obj14 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
                ({ linkCode: obj8.linkCode, expiresAt: obj8.expiresAt, refresh: obj8.onRefresh } = connectGuardianGate);
                const tmp31 = closure_7(tmp(14689).ConnectGuardianCard, obj14);
                cResult[24] = connectGuardianGate.expiresAt;
                cResult[25] = connectGuardianGate.linkCode;
                cResult[26] = connectGuardianGate.refresh;
                cResult[27] = tmp31;
                tmp29 = tmp31;
              }
            }
            const obj15 = { style: header, children: items4 };
            items4 = [tmp12, tmp17];
            const tmp23 = closure_8(View, obj15);
            cResult[17] = tmp4.header;
            cResult[18] = tmp17;
            cResult[19] = tmp12;
            cResult[20] = tmp23;
            tmp20 = tmp23;
          }
          const obj27 = { style: description, variant: "text-sm/medium", color: "text-muted", children: tmp15 };
          const tmp19 = closure_7(tmp(4886).Text, obj27);
          cResult[14] = tmp4.description;
          cResult[15] = tmp15;
          cResult[16] = tmp19;
          tmp17 = tmp19;
        }
      }
      const fn = function f() {
        const current = "error" !== connectGuardianGate.state || ref.current;
        if (!current) {
          ref.current = true;
          const obj2 = { action: FamilyCenterAction.NufConsentGateLinkCodeError, source: "NUF Connect Guardian" };
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
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
    }
  : (route) => {
      let Button;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj25;
      let ref;
      let tmp9;
      let connectGuardianGate;
      const onComplete = route.route.params.onComplete;
      const tmp = closure_9();
      const bottom = connectGuardianGate(1618)().bottom;
      let obj = onComplete(17593);
      connectGuardianGate = obj.useConnectGuardianGate();
      dependencyMap = react.useRef(false);
      const items = [connectGuardianGate.state, onComplete];
      const effect = react.useEffect(() => {
        const current = "error" !== connectGuardianGate.state || ref.current;
        if (!current) {
          ref.current = true;
          const obj2 = { action: FamilyCenterAction.NufConsentGateLinkCodeError, source: "NUF Connect Guardian" };
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
          if (onComplete != null) {
            onComplete(true);
          }
        }
      }, items);
      if ("gate" !== connectGuardianGate.state) {
        let obj2 = { style: items1, children: closure_7(onComplete(5968).ActivityIndicator, {}) };
        items1 = [,];
        ({ container: arr2[0], centered: arr2[1] } = tmp);
        tmp9 = closure_7(View, obj2);
      } else {
        const obj3 = { style: tmp.container, children: items3 };
        const obj4 = { style: tmp.header, children: items2 };
        const obj5 = {
          style: tmp.title,
          variant: "heading-xl/bold",
          color: "text-default",
          children: intl.string(connectGuardianGate(2493).ITlV6p),
        };
        const Text = tmp4(4886).Text;
        intl = tmp4(1126).intl;
        items2 = [closure_7(Text, obj5)];
        const obj6 = {
          style: tmp.description,
          variant: "text-sm/medium",
          color: "text-muted",
          children: intl2.format(connectGuardianGate(2493).F4GT2S, {
            link: "https://support.discord.com/hc/articles/14155060633623",
          }),
        };
        const Text2 = tmp4(4886).Text;
        intl2 = tmp4(1126).intl;
        items2[1] = closure_7(Text2, obj6);
        items3 = [closure_8(View, obj4), , ,];
        const obj7 = { style: tmp.cardSection, children: items4 };
        const obj8 = {
          style: tmp.scanPrompt,
          variant: "text-md/semibold",
          color: "text-default",
          children: intl3.string(connectGuardianGate(2493).Mi60fm),
        };
        const Text3 = tmp4(4886).Text;
        intl3 = tmp4(1126).intl;
        items4 = [closure_7(Text3, obj8)];
        const obj10 = { shareActions: "compact", linkCode: null, expiresAt: null, onRefresh: null };
        ({ linkCode: obj9.linkCode, expiresAt: obj9.expiresAt, refresh: obj9.onRefresh } = connectGuardianGate);
        items4[1] = closure_7(onComplete(14689).ConnectGuardianCard, obj10);
        items3[1] = closure_8(View, obj7);
        const obj11 = { style: tmp.grow };
        items3[2] = closure_7(View, obj11);
        const obj12 = { style: items5, children: closure_7(Button, obj25) };
        items5 = [tmp.footer];
        items5[1] = { paddingBottom: bottom + connectGuardianGate(587).space.PX_16 };
        const obj13 = { paddingBottom: bottom + connectGuardianGate(587).space.PX_16 };
        obj25 = {
          variant: "primary",
          size: "lg",
          text: intl4.string(onComplete(1126).t["3PatSz"]),
          onPress() {
            let tmpResult;
            if (onComplete != null) {
              tmpResult = tmp(false);
            }
            return tmpResult;
          },
        };
        Button = tmp4(5594).Button;
        intl4 = tmp4(1126).intl;
        items3[3] = closure_7(View, obj12);
        tmp9 = closure_8(View, obj3);
      }
      return tmp9;
    };
const result = size.fileFinishedImporting("modules/nuf/native/components/ConnectGuardianModal.tsx");

export default tmp4;
