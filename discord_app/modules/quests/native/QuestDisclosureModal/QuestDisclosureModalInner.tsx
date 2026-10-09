// discord_app/modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  container: { flex: 1, width: "100%", maxWidth: 480, alignSelf: "center" },
  contentContainer: { flexGrow: 1, padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 },
  illustration: null,
  closeButton: null,
  targetList: null,
  targetItem: null,
  lastTargetItem: null,
  disclosureText: null,
};
let obj2 = { flexGrow: 1, padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj.illustration = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
let obj3 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
obj.closeButton = {
  marginTop: "auto",
  paddingHorizontal: nativeDefault.space.PX_8,
  marginBottom: nativeDefault.space.PX_24,
};
obj.targetList = { padding: 0 };
let obj4 = { marginTop: "auto", paddingHorizontal: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
obj.targetItem = {
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  paddingLeft: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
obj.lastTargetItem = { borderBottomWidth: 0 };
let obj5 = {
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  paddingLeft: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
obj.disclosureText = {
  flex: 1,
  paddingVertical: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_8 = createStyles.createStyles(obj);
let obj6 = {
  flex: 1,
  paddingVertical: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestDisclosureModalInner(arg0) {
      const cResult = require("c").c(36);
      ({ adCreativeType, isTargetedDisclosure, gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = arg0);
      const tmp4 = closure_8();
      _require = tmp4;
      const DropsOptedOut = require("UserSettings").DropsOptedOut;
      const setting = DropsOptedOut.useSetting();
      if (cResult[0] !== setting) {
        const obj2 = { icon: null, text: null };
        let intl = closure_6;
        if (setting) {
          obj2.icon = intl(tmp(9216).ServerIcon, { size: "xs" });
          intl = tmp(1126).intl;
          obj2.text = intl.string(tmp(1126).t["2bL0wT"]);
          let items = [obj2];
          let items1 = items;
        } else {
          obj2.icon = intl(tmp(9083).GlobeEarthIcon, { size: "xs" });
          const intl2 = tmp(1126).intl;
          obj2.text = intl2.string(tmp(1126).t.xQSdPv);
          items1 = [obj2, ,];
          const obj3 = { icon: intl(tmp(11338).UserIcon, { size: "xs" }), text: null };
          const intl3 = tmp(1126).intl;
          obj3.text = intl3.string(tmp(1126).t.mYt7hQ);
          items1[1] = obj3;
          const obj4 = { icon: intl(tmp(9184).GameControllerIcon, { size: "xs" }), text: null };
          const intl4 = tmp(1126).intl;
          obj4.text = intl4.string(tmp(1126).t.XAsWxQ);
          items1[2] = obj4;
        }
        cResult[0] = setting;
        cResult[1] = items1;
      } else {
        const _Symbol = Symbol;
        ({ container, contentContainer } = tmp4);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = closure_6(tmp(15306).WumpusCouchSpotIllustration, {});
          cResult[2] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] !== tmp4.illustration) {
          const obj5 = { style: tmp4.illustration, children: tmp8 };
          const tmp14 = closure_6(closure_4, obj5);
          cResult[3] = tmp4.illustration;
          cResult[4] = tmp14;
          let tmp11 = tmp14;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] === adCreativeType) {
          if (cResult[6] === cosponsorName) {
            if (cResult[7] === gamePublisher) {
              if (cResult[8] === gameTitle) {
                if (cResult[9] === setting) {
                  if (cResult[10] === isTargetedDisclosure) {
                    if (cResult[11] === isVideoQuest) {
                      let tmp15 = cResult[12];
                    }
                    if (cResult[13] !== tmp15) {
                      const obj6 = { variant: "text-md/normal", color: "mobile-text-heading-primary", children: tmp15 };
                      const tmp19 = closure_6(tmp(5087).Text, obj6);
                      cResult[13] = tmp15;
                      cResult[14] = tmp19;
                      let tmp17 = tmp19;
                    } else {
                      tmp17 = cResult[14];
                    }
                    if (cResult[15] === isTargetedDisclosure) {
                      if (cResult[16] === tmp4.disclosureText) {
                        if (cResult[17] === tmp4.lastTargetItem) {
                          if (cResult[18] === tmp4.targetItem) {
                            if (cResult[19] === tmp4.targetList) {
                              if (cResult[20] === arr) {
                                let tmp20 = cResult[21];
                              }
                              const _Symbol2 = Symbol;
                              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                                const obj7 = {
                                  variant: "text-md/medium",
                                  color: "mobile-text-heading-primary",
                                  children: null,
                                };
                                const intl5 = tmp(1126).intl;
                                const obj8 = {
                                  privacySettingsUrl: arr(2127).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS),
                                };
                                obj7.children = intl5.format(tmp(1126).t.tzq9Wa, obj8);
                                const tmp27 = closure_6(tmp(5087).Text, obj7);
                                cResult[22] = tmp27;
                                let tmp23 = tmp27;
                                const obj12 = arr(2127);
                              } else {
                                tmp23 = cResult[22];
                              }
                              const _Symbol3 = Symbol;
                              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl6 = tmp(1126).intl;
                                const stringResult = intl6.string(tmp(1126).t.cpT0Cq);
                                cResult[23] = stringResult;
                                let tmp28 = stringResult;
                              } else {
                                tmp28 = cResult[23];
                              }
                              if (cResult[24] !== onClose) {
                                const obj9 = {
                                  variant: "primary",
                                  grow: true,
                                  size: "lg",
                                  text: tmp28,
                                  onPress: onClose,
                                };
                                const tmp32 = closure_6(tmp(5376).Button, obj9);
                                cResult[24] = onClose;
                                cResult[25] = tmp32;
                                let tmp30 = tmp32;
                              } else {
                                tmp30 = cResult[25];
                              }
                              if (cResult[26] === tmp4.closeButton) {
                                if (cResult[27] === tmp30) {
                                  let tmp33 = cResult[28];
                                }
                                if (cResult[29] === tmp4.container) {
                                  if (cResult[30] === tmp4.contentContainer) {
                                    if (cResult[31] === tmp33) {
                                      if (cResult[32] === tmp11) {
                                        if (cResult[33] === tmp17) {
                                          if (cResult[34] === tmp20) {
                                            let tmp37 = cResult[35];
                                          }
                                          return tmp37;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj10 = {
                                  style: container,
                                  contentContainerStyle: contentContainer,
                                  children: null,
                                };
                                const items2 = [tmp11, tmp17, tmp20, tmp23, tmp33];
                                obj10.children = items2;
                                const tmp40 = closure_7(closure_3, obj10);
                                cResult[29] = tmp4.container;
                                cResult[30] = tmp4.contentContainer;
                                cResult[31] = tmp33;
                                cResult[32] = tmp11;
                                cResult[33] = tmp17;
                                cResult[34] = tmp20;
                                cResult[35] = tmp40;
                                tmp37 = tmp40;
                              }
                              const obj11 = { style: tmp4.closeButton, children: tmp30 };
                              const tmp36 = closure_6(closure_4, obj11);
                              cResult[26] = tmp4.closeButton;
                              cResult[27] = tmp30;
                              cResult[28] = tmp36;
                              tmp33 = tmp36;
                            }
                          }
                        }
                      }
                    }
                    let tmp21 = isTargetedDisclosure;
                    if (isTargetedDisclosure) {
                      const obj13 = {
                        radius: 16,
                        style: tmp4.targetList,
                        children: arr.map((children, index) => {
                          const obj = { style: closure_0.targetItem, children: null };
                          const items = [children.icon];
                          const items1 = [closure_0.disclosureText];
                          let lastTargetItem = index === arr.length - 1;
                          if (lastTargetItem) {
                            lastTargetItem = closure_0.lastTargetItem;
                          }
                          items1[1] = lastTargetItem;
                          items[1] = timestampProducer(React4, {
                            style: items1,
                            children: timestampProducer(Text_Text.Text, {
                              variant: "text-md/semibold",
                              children: children.text,
                            }),
                          });
                          obj.children = items;
                          return React5(React4, obj, index);
                        }),
                      };
                      tmp21 = closure_6(tmp(6188).Card, obj13);
                    }
                    cResult[15] = isTargetedDisclosure;
                    cResult[16] = tmp4.disclosureText;
                    cResult[17] = tmp4.lastTargetItem;
                    cResult[18] = tmp4.targetItem;
                    cResult[19] = tmp4.targetList;
                    cResult[20] = arr;
                    cResult[21] = tmp21;
                    tmp20 = tmp21;
                  }
                }
              }
            }
          }
        }
        const obj14 = {
          adCreativeType,
          gamePublisher,
          gameTitle,
          isTargetedDisclosure,
          isContextualDisclosure: setting,
          cosponsorName,
          isVideoQuest,
        };
        const disclosureText = tmp(9165).getDisclosureText(obj14);
        cResult[5] = adCreativeType;
        cResult[6] = cosponsorName;
        cResult[7] = gamePublisher;
        cResult[8] = gameTitle;
        cResult[9] = setting;
        cResult[10] = isTargetedDisclosure;
        cResult[11] = isVideoQuest;
        cResult[12] = disclosureText;
        tmp15 = disclosureText;
        const tmpResult = tmp(9165);
      }
      let obj = require("c");
    }
  : function QuestDisclosureModalInner(isTargetedDisclosure) {
      isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
      let items1;
      ({ adCreativeType, gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = isTargetedDisclosure);
      const tmp = closure_8();
      _require = tmp;
      const DropsOptedOut = require("UserSettings").DropsOptedOut;
      const setting = DropsOptedOut.useSetting();
      let obj = { icon: null, text: null };
      if (setting) {
        obj.icon = closure_6(tmp2(9216).ServerIcon, { size: "xs" });
        const intl4 = tmp2(1126).intl;
        obj.text = intl4.string(tmp2(1126).t["2bL0wT"]);
        let items = [obj];
        let tmp6 = closure_6;
        items1 = items;
      } else {
        obj.icon = closure_6(tmp2(9083).GlobeEarthIcon, { size: "xs" });
        const intl = tmp2(1126).intl;
        obj.text = intl.string(tmp2(1126).t.xQSdPv);
        items1 = [obj, ,];
        const obj2 = { icon: closure_6(tmp2(11338).UserIcon, { size: "xs" }), text: null };
        const intl2 = tmp2(1126).intl;
        obj2.text = intl2.string(tmp2(1126).t.mYt7hQ);
        items1[1] = obj2;
        const obj3 = { icon: closure_6(tmp2(9184).GameControllerIcon, { size: "xs" }), text: null };
        const intl3 = tmp2(1126).intl;
        obj3.text = intl3.string(tmp2(1126).t.XAsWxQ);
        items1[2] = obj3;
        tmp6 = closure_6;
      }
      const obj4 = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: null };
      const items2 = [
        tmp6(closure_4, {
          style: tmp.illustration,
          children: tmp6(require("WumpusCouchSpotIllustration").WumpusCouchSpotIllustration, {}),
        }),
        ,
        ,
        ,
      ];
      const obj6 = { variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
      const obj5 = {
        style: tmp.illustration,
        children: tmp6(require("WumpusCouchSpotIllustration").WumpusCouchSpotIllustration, {}),
      };
      obj6.children = require("QuestCopyUtils").getDisclosureText({
        adCreativeType,
        gamePublisher,
        gameTitle,
        isTargetedDisclosure,
        isContextualDisclosure: setting,
        cosponsorName,
        isVideoQuest,
      });
      items2[1] = tmp6(require("Text/Text").Text, obj6);
      if (isTargetedDisclosure) {
        const obj7 = {
          radius: 16,
          style: tmp.targetList,
          children: items1.map((children, index) => {
            const obj = { style: closure_0.targetItem, children: null };
            const items = [children.icon];
            items1 = [closure_0.disclosureText];
            let lastTargetItem = index === items1.length - 1;
            if (lastTargetItem) {
              lastTargetItem = closure_0.lastTargetItem;
            }
            items1[1] = lastTargetItem;
            items[1] = timestampProducer(React4, {
              style: items1,
              children: timestampProducer(Text_Text.Text, { variant: "text-md/semibold", children: children.text }),
            });
            obj.children = items;
            return React5(React4, obj, index);
          }),
        };
        isTargetedDisclosure = tmp6(tmp2(6188).Card, obj7);
      }
      items2[2] = isTargetedDisclosure;
      const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
      const intl5 = tmp2(1126).intl;
      const obj9 = { privacySettingsUrl: null };
      const tmp2Result = require("QuestCopyUtils");
      obj9.privacySettingsUrl = items1(2127).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
      obj8.children = intl5.format(require("util").t.tzq9Wa, obj9);
      items2[3] = tmp6(require("Text/Text").Text, obj8);
      const obj10 = { style: tmp.closeButton, children: null };
      const obj12 = { variant: "primary", grow: true, size: "lg", text: null, onPress: null };
      const intl6 = tmp2(1126).intl;
      obj12.text = intl6.string(require("util").t.cpT0Cq);
      obj12.onPress = onClose;
      obj10.children = tmp6(require("components/Button/Button").Button, obj12);
      items2[4] = tmp6(closure_4, obj10);
      obj4.children = items2;
      return closure_7(closure_3, obj4);
    };
