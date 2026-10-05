// === Module 14916: QuestDisclosureModalInner ===

// Module 14916 (QuestDisclosureModalInner)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Text_Text from "Text/Text" /* 4886 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ ScrollView: c3, View: closure_4 } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, width: "100%", maxWidth: 480, alignSelf: "center" }, contentContainer: obj2, illustration: obj3, closeButton: obj4, targetList: { padding: 0 }, targetItem: obj5, lastTargetItem: { borderBottomWidth: 0 }, disclosureText: obj6 };
obj2 = { flexGrow: 1, padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginTop: "auto", paddingHorizontal: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
obj5 = { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingLeft: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj6 = { flex: 1, paddingVertical: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let adCreativeType;
  let arr;
  let closure_0;
  let container;
  let contentContainer;
  let cosponsorName;
  let format;
  let gamePublisher;
  let gameTitle;
  let intl2;
  let intl3;
  let isTargetedDisclosure;
  let isVideoQuest;
  let items2;
  let obj11;
  let obj8;
  let onClose;
  let tmp10;
  let tmp7;
  let tzq9Wa;
  let obj = require("react");
  const cResult = obj.c(36);
  ({ adCreativeType, isTargetedDisclosure, gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = arg0);
  const tmp4 = closure_8();
  _require = tmp4;
  const DropsOptedOut = require("UserSettings").DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  if (cResult[0] !== setting) {
    let items1;
    let obj2 = { icon: null, text: null };
    if (setting) {
      obj2.icon = closure_6(require("ServerIcon").ServerIcon, { size: "xs" });
      const intl4 = tmp(1126).intl;
      obj2.text = intl4.string(require("intl").t["2bL0wT"]);
      let items = [obj2];
      items1 = items;
    } else {
      obj2.icon = closure_6(require("GlobeEarthIcon").GlobeEarthIcon, { size: "xs" });
      const intl = tmp(1126).intl;
      obj2.text = intl.string(require("intl").t.xQSdPv);
      items1 = [obj2, , ];
      const obj3 = { icon: closure_6(require("UserIcon").UserIcon, { size: "xs" }), text: intl2.string(require("intl").t.mYt7hQ) };
      intl2 = tmp(1126).intl;
      items1[1] = obj3;
      const obj4 = { icon: closure_6(require("GameControllerIcon").GameControllerIcon, { size: "xs" }), text: intl3.string(require("intl").t.XAsWxQ) };
      intl3 = tmp(1126).intl;
      items1[2] = obj4;
    }
    cResult[0] = setting;
    cResult[1] = items1;
    arr = items1;
  } else {
    arr = cResult[1];
  }
  ({ container, contentContainer } = tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = closure_6(require("WumpusCouchSpotIllustration").WumpusCouchSpotIllustration, {});
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.illustration) {
    const obj5 = { style: tmp4.illustration, children: tmp7 };
    const tmp13 = closure_6(closure_4, obj5);
    cResult[3] = tmp4.illustration;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === adCreativeType) {
    if (cResult[6] === cosponsorName) {
      if (cResult[7] === gamePublisher) {
        if (cResult[8] === gameTitle) {
          if (cResult[9] === setting) {
            if (cResult[10] === isTargetedDisclosure) {
              let tmp14;
              let tmp16;
              if (cResult[11] === isVideoQuest) {
                tmp14 = cResult[12];
              }
              if (cResult[13] !== tmp14) {
                const obj6 = { variant: "text-md/normal", color: "mobile-text-heading-primary", children: tmp14 };
                const tmp18 = closure_6(require("Text/Text").Text, obj6);
                cResult[13] = tmp14;
                cResult[14] = tmp18;
                tmp16 = tmp18;
              } else {
                tmp16 = cResult[14];
              }
              if (cResult[15] === isTargetedDisclosure) {
                if (cResult[16] === tmp4.disclosureText) {
                  if (cResult[17] === tmp4.lastTargetItem) {
                    if (cResult[18] === tmp4.targetItem) {
                      if (cResult[19] === tmp4.targetList) {
                        let tmp19;
                        let tmp22;
                        let tmp27;
                        let tmp29;
                        if (cResult[20] === arr) {
                          tmp19 = cResult[21];
                        }
                        const _Symbol = Symbol;
                        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                          const obj7 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: format(tzq9Wa, obj8) };
                          const Text = tmp(4886).Text;
                          const intl5 = tmp(1126).intl;
                          format = intl5.format;
                          obj8 = { privacySettingsUrl: obj11.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
                          tzq9Wa = tmp(1126).t.tzq9Wa;
                          obj11 = arr(2115);
                          const tmp26 = closure_6(Text, obj7);
                          cResult[22] = tmp26;
                          tmp22 = tmp26;
                        } else {
                          tmp22 = cResult[22];
                        }
                        const _Symbol2 = Symbol;
                        const closeButton = tmp4.closeButton;
                        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl6 = tmp(1126).intl;
                          const stringResult = intl6.string(require("intl").t.cpT0Cq);
                          cResult[23] = stringResult;
                          tmp27 = stringResult;
                        } else {
                          tmp27 = cResult[23];
                        }
                        if (cResult[24] !== onClose) {
                          const obj9 = { variant: "primary", grow: true, size: "lg", text: tmp27, onPress: onClose };
                          const tmp31 = closure_6(require("components/Button/Button").Button, obj9);
                          cResult[24] = onClose;
                          cResult[25] = tmp31;
                          tmp29 = tmp31;
                        } else {
                          tmp29 = cResult[25];
                        }
                        if (cResult[26] === tmp4.closeButton) {
                          let tmp32;
                          if (cResult[27] === tmp29) {
                            tmp32 = cResult[28];
                          }
                          if (cResult[29] === tmp4.container) {
                            if (cResult[30] === tmp4.contentContainer) {
                              if (cResult[31] === tmp32) {
                                if (cResult[32] === tmp10) {
                                  if (cResult[33] === tmp16) {
                                    let tmp36;
                                    if (cResult[34] === tmp19) {
                                      tmp36 = cResult[35];
                                    }
                                    return tmp36;
                                  }
                                }
                              }
                            }
                          }
                          const obj10 = { style: container, contentContainerStyle: contentContainer, children: items2 };
                          items2 = [tmp10, tmp16, tmp19, tmp22, tmp32];
                          const tmp39 = closure_7(closure_3, obj10);
                          cResult[29] = tmp4.container;
                          cResult[30] = tmp4.contentContainer;
                          cResult[31] = tmp32;
                          cResult[32] = tmp10;
                          cResult[33] = tmp16;
                          cResult[34] = tmp19;
                          cResult[35] = tmp39;
                          tmp36 = tmp39;
                        }
                        const obj12 = { style: closeButton, children: tmp29 };
                        const tmp35 = closure_6(closure_4, obj12);
                        cResult[26] = tmp4.closeButton;
                        cResult[27] = tmp29;
                        cResult[28] = tmp35;
                        tmp32 = tmp35;
                      }
                    }
                  }
                }
              }
              let tmp20 = isTargetedDisclosure;
              if (tmp20) {
                const obj13 = {
                  radius: 16,
                  style: tmp4.targetList,
                  children: arr.map((icon, index) => {
                                  let items;
                                  const obj = { style: closure_0.targetItem, children: items };
                                  items = [icon.icon, ];
                                  const items1 = [closure_0.disclosureText, ];
                                  let lastTargetItem = index === arr.length - 1;
                                  const text = icon.text;
                                  if (lastTargetItem) {
                                    lastTargetItem = closure_0.lastTargetItem;
                                  }
                                  items1[1] = lastTargetItem;
                                  const obj2 = { style: items1, children: metroRequire(Text_Text.Text, { variant: "text-md/semibold", children: text }) };
                                  items[1] = metroRequire(React3, obj2);
                                  return metroImportDefault(React3, obj, index);
                                })
                };
                const Card = tmp(5995).Card;
                tmp20 = closure_6(Card, obj13);
              }
              cResult[15] = isTargetedDisclosure;
              cResult[16] = tmp4.disclosureText;
              cResult[17] = tmp4.lastTargetItem;
              cResult[18] = tmp4.targetItem;
              cResult[19] = tmp4.targetList;
              cResult[20] = arr;
              cResult[21] = tmp20;
              tmp19 = tmp20;
            }
          }
        }
      }
    }
  }
  const tmpResult = require("QuestCopyUtils");
  const disclosureText = tmpResult.getDisclosureText({ adCreativeType, gamePublisher, gameTitle, isTargetedDisclosure, isContextualDisclosure: setting, cosponsorName, isVideoQuest });
  cResult[5] = adCreativeType;
  cResult[6] = cosponsorName;
  cResult[7] = gamePublisher;
  cResult[8] = gameTitle;
  cResult[9] = setting;
  cResult[10] = isTargetedDisclosure;
  cResult[11] = isVideoQuest;
  cResult[12] = disclosureText;
  tmp14 = disclosureText;
}) : ((isTargetedDisclosure) => {
  let Button;
  let adCreativeType;
  let closure_0;
  let cosponsorName;
  let format;
  let gamePublisher;
  let gameTitle;
  let intl2;
  let intl3;
  let intl6;
  let isVideoQuest;
  let items2;
  let obj11;
  let obj12;
  let obj9;
  let onClose;
  let tmp2Result;
  let tmp6;
  let tzq9Wa;
  isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
  let items1;
  ({ adCreativeType, gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = isTargetedDisclosure);
  const tmp = closure_8();
  _require = tmp;
  const DropsOptedOut = require("UserSettings").DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  let obj = { icon: null, text: null };
  if (setting) {
    obj.icon = closure_6(require("ServerIcon").ServerIcon, { size: "xs" });
    const intl4 = tmp2(1126).intl;
    obj.text = intl4.string(require("intl").t["2bL0wT"]);
    let items = [obj];
    tmp6 = closure_6;
    items1 = items;
  } else {
    obj.icon = closure_6(require("GlobeEarthIcon").GlobeEarthIcon, { size: "xs" });
    const intl = tmp2(1126).intl;
    obj.text = intl.string(require("intl").t.xQSdPv);
    items1 = [obj, , ];
    let obj2 = { icon: closure_6(require("UserIcon").UserIcon, { size: "xs" }), text: intl2.string(require("intl").t.mYt7hQ) };
    intl2 = tmp2(1126).intl;
    items1[1] = obj2;
    const obj3 = { icon: closure_6(require("GameControllerIcon").GameControllerIcon, { size: "xs" }), text: intl3.string(require("intl").t.XAsWxQ) };
    intl3 = tmp2(1126).intl;
    items1[2] = obj3;
    tmp6 = closure_6;
  }
  const obj4 = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: items2 };
  items2 = [, , , , ];
  const obj5 = { style: tmp.illustration, children: tmp6(require("WumpusCouchSpotIllustration").WumpusCouchSpotIllustration, {}) };
  items2[0] = tmp6(closure_4, obj5);
  const obj6 = { variant: "text-md/normal", color: "mobile-text-heading-primary", children: tmp2Result.getDisclosureText({ adCreativeType, gamePublisher, gameTitle, isTargetedDisclosure, isContextualDisclosure: setting, cosponsorName, isVideoQuest }) };
  const Text = tmp2(4886).Text;
  tmp2Result = require("QuestCopyUtils");
  items2[1] = tmp6(Text, obj6);
  if (isTargetedDisclosure) {
    const obj7 = {
      radius: 16,
      style: tmp.targetList,
      children: items1.map((icon, index) => {
          let items;
          const obj = { style: closure_0.targetItem, children: items };
          items = [icon.icon, ];
          items1 = [closure_0.disclosureText, ];
          let lastTargetItem = index === items1.length - 1;
          const text = icon.text;
          if (lastTargetItem) {
            lastTargetItem = closure_0.lastTargetItem;
          }
          items1[1] = lastTargetItem;
          const obj2 = { style: items1, children: metroRequire(Text_Text.Text, { variant: "text-md/semibold", children: text }) };
          items[1] = metroRequire(React3, obj2);
          return metroImportDefault(React3, obj, index);
        })
    };
    const Card = tmp2(5995).Card;
    isTargetedDisclosure = tmp6(Card, obj7);
  }
  items2[2] = isTargetedDisclosure;
  const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: format(tzq9Wa, obj9) };
  const Text2 = tmp2(4886).Text;
  const intl5 = tmp2(1126).intl;
  format = intl5.format;
  obj9 = { privacySettingsUrl: obj11.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  tzq9Wa = tmp2(1126).t.tzq9Wa;
  obj11 = items1(2115);
  items2[3] = tmp6(Text2, obj8);
  const obj10 = { style: tmp.closeButton, children: tmp6(Button, obj12) };
  obj12 = { variant: "primary", grow: true, size: "lg", text: intl6.string(require("intl").t.cpT0Cq), onPress: onClose };
  Button = tmp2(5594).Button;
  intl6 = tmp2(1126).intl;
  items2[4] = tmp6(closure_4, obj10);
  return closure_7(closure_3, obj4);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx");

export default tmp5;