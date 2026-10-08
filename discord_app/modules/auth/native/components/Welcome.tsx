// === Module 16167: Welcome ===

// Module 16167 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import Storage2 from "Storage" /* 510 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import Link from "Link" /* 1503 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6618 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6654 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7185 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12497 */;
import _modDef13355 from "module_13355" /* 13355 */;
import _mod13913 from "module_13913" /* 13913 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 16164 */;
import noop from "module_19" /* 19 */;
import AgeGateStore from "AgeGateStore" /* 16168 */;
import ExperimentStore from "ExperimentStore" /* 4976 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7168 */;
import MultiAccountStore from "MultiAccountStore" /* 12144 */;
import UserRecord from "UserRecord" /* 1403 */;
import InviteStore from "InviteStore" /* 5071 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8663 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17, ThemeTypes: closure_18 } = Constants);
const GuildTemplateStates = fn(7021).GuildTemplateStates;
const InviteTypes = fn(7418).InviteTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let createStyles = fn(5090);
let closure_23 = createStyles.createStyles((arg0) => {
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" }, subHeader: null, subHeaderWithInvite: null, centerpieceContainer: null, buttonContainer: null };
  let num = 300;
  if (arg0) {
    num = 480;
  }
  obj.subHeader = { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: num, marginBottom: 24, marginHorizontal: 16 };
  obj.subHeaderWithInvite = { marginBottom: 16 };
  obj.centerpieceContainer = { flexGrow: 1, flexShrink: 1, justifyContent: "center" };
  obj.buttonContainer = { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" };
  return obj;
});
createStyles = fn(5090);
let obj3 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: nativeDefault.radii.sm }, text: { marginLeft: 16 } };
let closure_24 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function InviteCard(arg0) {
  const cResult = c.c(32);
  ({ invite, style } = arg0);
  const tmp4 = closure_24();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else if (null != guild) {
    if (cResult[0] !== guild) {
      const obj2 = { guild };
      const tmp42 = closure_1_21(GuildInviteIconDefault, obj2);
      cResult[0] = guild;
      cResult[1] = tmp42;
    }
    const _Symbol3 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult = intl3.string(util.t["3rE1P8"]);
      cResult[2] = stringResult;
    }
    const name = guild.name;
  } else {
    if (null != tmp5) {
      _modDef38(null != inviter, "Null inviter");
      if (cResult[3] !== inviter) {
        const tmp29 = new UserRecord(inviter);
        cResult[3] = inviter;
        cResult[4] = tmp29;
        let tmp24 = tmp29;
      } else {
        tmp24 = cResult[4];
      }
      if (cResult[5] !== tmp24) {
        const obj4 = { user: tmp24, guildId: "Array" };
        const tmp33 = closure_1_21(native.Avatar, obj4);
        cResult[5] = tmp24;
        cResult[6] = tmp33;
        let tmp31 = tmp33;
      } else {
        tmp31 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.OsdY8B);
        cResult[7] = stringResult1;
        let tmp35 = stringResult1;
      } else {
        tmp35 = cResult[7];
      }
      if (cResult[8] !== inviter) {
        const formattedName = UserUtilsDefault.getFormattedName(inviter);
        cResult[8] = inviter;
        cResult[9] = formattedName;
        let tmp37 = formattedName;
        const tmp22Result = UserUtilsDefault;
      } else {
        tmp37 = cResult[9];
      }
      let tmp19 = tmp37;
      let tmp17 = tmp35;
      let tmp13 = tmp31;
    } else if (null == inviter) {
      return null;
    } else {
      if (cResult[10] !== inviter) {
        const tmp11 = new UserRecord(inviter);
        cResult[10] = inviter;
        cResult[11] = tmp11;
        let tmp6 = tmp11;
      } else {
        tmp6 = cResult[11];
      }
      if (cResult[12] !== tmp6) {
        const obj5 = { user: tmp6, guildId: "Array" };
        const tmp15 = closure_1_21(native.Avatar, obj5);
        cResult[12] = tmp6;
        cResult[13] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult2 = intl.string(util.t["+ITYkQ"]);
        cResult[14] = stringResult2;
        tmp17 = stringResult2;
      } else {
        tmp17 = cResult[14];
      }
      if (cResult[15] !== inviter) {
        const formattedName1 = UserUtilsDefault.getFormattedName(inviter, true);
        cResult[15] = inviter;
        cResult[16] = formattedName1;
        tmp19 = formattedName1;
      } else {
        tmp19 = cResult[16];
      }
    }
    if (cResult[17] === tmp4.container) {
      if (cResult[18] === style) {
        let tmp48 = cResult[19];
      }
      if (cResult[20] !== tmp17) {
        const obj6 = { variant: "text-sm/medium", color: "text-subtle", children: tmp17 };
        const tmp51 = closure_1_21(Text_Text.Text, obj6);
        cResult[20] = tmp17;
        cResult[21] = tmp51;
        let tmp49 = tmp51;
      } else {
        tmp49 = cResult[21];
      }
      if (cResult[22] !== tmp19) {
        const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp19 };
        const tmp54 = closure_1_21(Text_Text.Text, obj7);
        cResult[22] = tmp19;
        cResult[23] = tmp54;
        let tmp52 = tmp54;
      } else {
        tmp52 = cResult[23];
      }
      if (cResult[24] === tmp4.text) {
        if (cResult[25] === tmp49) {
          if (cResult[26] === tmp52) {
            let tmp55 = cResult[27];
          }
          if (cResult[28] === tmp13) {
            if (cResult[29] === tmp48) {
              if (cResult[30] === tmp55) {
                let tmp59 = cResult[31];
              }
              return tmp59;
            }
          }
          const obj8 = { style: tmp48, children: null };
          const items = [tmp13, tmp55];
          obj8.children = items;
          const tmp62 = closure_1_22(React4, obj8);
          cResult[28] = tmp13;
          cResult[29] = tmp48;
          cResult[30] = tmp55;
          cResult[31] = tmp62;
          tmp59 = tmp62;
        }
      }
      const obj9 = { style: tmp4.text, children: null };
      const items1 = [tmp49, tmp52];
      obj9.children = items1;
      const tmp58 = closure_1_22(React4, obj9);
      cResult[24] = tmp4.text;
      cResult[25] = tmp49;
      cResult[26] = tmp52;
      cResult[27] = tmp58;
      tmp55 = tmp58;
    }
    const items2 = [tmp4.container, style];
    cResult[17] = tmp4.container;
    cResult[18] = style;
    cResult[19] = items2;
    tmp48 = items2;
  }
}) : (function InviteCard(invite) {
  invite = invite.invite;
  const tmp = closure_24();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    if (null != guild) {
      const obj3 = { guild };
      let tmp14 = closure_1_21(GuildInviteIconDefault, obj3);
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["3rE1P8"]);
      let name = guild.name;
      let tmp17 = require;
      let tmp18 = closure_1_21;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const obj = { user: null, guildId: "Array" };
      const tmp12 = new UserRecord(inviter);
      obj.user = tmp12;
      tmp14 = closure_1_21(native.Avatar, obj);
      const intl = util.intl;
      stringResult = intl.string(util.t.OsdY8B);
      name = UserUtilsDefault.getFormattedName(inviter);
      tmp17 = require;
      tmp18 = closure_1_21;
    } else if (null == inviter) {
      return null;
    } else {
      const obj4 = { user: null, guildId: "Array" };
      const tmp33 = new UserRecord(inviter);
      obj4.user = tmp33;
      const intl3 = util.intl;
      stringResult = intl3.string(util.t["+ITYkQ"]);
      const tmp35 = closure_1_21(native.Avatar, obj4);
      name = UserUtilsDefault.getFormattedName(inviter, true);
      tmp14 = tmp35;
      tmp17 = require;
      tmp18 = closure_1_21;
    }
    const obj5 = { style: null, children: null };
    const items = [tmp.container, invite.style];
    obj5.style = items;
    const items1 = [tmp14, ];
    const obj6 = { style: tmp.text, children: null };
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    const items2 = [tmp18(tmp17(5086).Text, obj7), ];
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp18(tmp17(5086).Text, obj8);
    obj6.children = items2;
    items1[1] = closure_1_22(React4, obj6);
    obj5.children = items1;
    return closure_1_22(React4, obj5);
  }
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildTemplateCard(arg0) {
  const cResult = c.c(13);
  ({ guildTemplate, style } = arg0);
  const tmp4 = closure_24();
  if (cResult[0] === tmp4.container) {
    if (cResult[1] === style) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: _modDef13355 };
      const tmp11 = guild(hasOwnProperty, obj2);
      cResult[3] = tmp11;
      let tmp7 = tmp11;
    } else {
      tmp7 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.QzUORX);
      const tmp14 = guild(Text_Text.Text, obj3);
      cResult[4] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== guildTemplate.name) {
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
      const tmp17 = guild(Text_Text.Text, obj4);
      cResult[5] = guildTemplate.name;
      cResult[6] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] === tmp4.text) {
      if (cResult[8] === tmp15) {
        let tmp18 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp18) {
          let tmp22 = cResult[12];
        }
        return tmp22;
      }
      const obj5 = { style: tmp5, children: null };
      const items = [tmp7, tmp18];
      obj5.children = items;
      const tmp25 = closure_1_22(React4, obj5);
      cResult[10] = tmp5;
      cResult[11] = tmp18;
      cResult[12] = tmp25;
      tmp22 = tmp25;
    }
    const obj6 = { style: tmp4.text, children: null };
    const items1 = [tmp12, tmp15];
    obj6.children = items1;
    const tmp21 = closure_1_22(React4, obj6);
    cResult[7] = tmp4.text;
    cResult[8] = tmp15;
    cResult[9] = tmp21;
    tmp18 = tmp21;
  }
  const items2 = [tmp4.container, style];
  cResult[0] = tmp4.container;
  cResult[1] = style;
  cResult[2] = items2;
  tmp5 = items2;
}) : (function GuildTemplateCard(arg0) {
  ({ guildTemplate, style } = arg0);
  const tmp = closure_24();
  const obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const items1 = [guild(hasOwnProperty, { source: _modDef13355 }), ];
  const obj3 = { style: tmp.text, children: null };
  const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.QzUORX);
  const items2 = [guild(Text_Text.Text, obj4), guild(Text_Text.Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name })];
  obj3.children = items2;
  items1[1] = closure_1_22(React4, obj3);
  obj.children = items1;
  return closure_1_22(React4, obj);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function Centerpiece(arg0) {
  const cResult = c.c(35);
  ({ invite, guildTemplate, inlineButtons } = arg0);
  const tmp4 = useIsWindowLargeDefault();
  const tmp5 = closure_23(tmp4);
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("Welcome");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = _mod13913;
    cResult[0] = tmpResult;
    let first = tmpResult;
  } else {
    first = cResult[0];
  }
  let tmp10 = null != guildTemplate;
  if (tmp10) {
    tmp10 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  ({ centerpieceContainer, scrollViewContainer } = tmp5);
  if (cResult[1] !== tmp5.logo) {
    const obj3 = { style: tmp5.logo, source: first };
    const tmp15 = guild(hasOwnProperty, obj3);
    cResult[1] = tmp5.logo;
    cResult[2] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === tmp5.header) {
    if (cResult[4] === typeConsolidationTextTransform) {
      let tmp16 = cResult[5];
    }
    let num4 = 2;
    if (tmp4) {
      num4 = 1;
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["3S2xmm"]);
      cResult[6] = stringResult;
      let tmp17 = stringResult;
    } else {
      tmp17 = cResult[6];
    }
    if (cResult[7] === tmp16) {
      if (cResult[8] === num4) {
        let tmp19 = cResult[9];
      }
      if (tmp9) {
        let subHeaderWithInvite = tmp5.subHeaderWithInvite;
      } else {
        subHeaderWithInvite = null;
      }
      if (cResult[10] === tmp5.subHeader) {
        if (cResult[11] === subHeaderWithInvite) {
          let tmp23 = cResult[12];
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t.Gtcthl);
          cResult[13] = stringResult1;
          let tmp24 = stringResult1;
        } else {
          tmp24 = cResult[13];
        }
        if (cResult[14] !== tmp23) {
          const obj4 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp23, maxFontSizeMultiplier: 3, children: tmp24 };
          const tmp28 = guild(Text_Text.Text, obj4);
          cResult[14] = tmp23;
          cResult[15] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[15];
        }
        if (cResult[16] === invite) {
          if (cResult[17] === tmp9) {
            let tmp29 = cResult[18];
          }
          if (cResult[19] === guildTemplate) {
            if (cResult[20] === tmp10) {
              let tmp33 = cResult[21];
            }
            if (cResult[22] === tmp26) {
              if (cResult[23] === tmp29) {
                if (cResult[24] === tmp33) {
                  if (cResult[25] === tmp19) {
                    let tmp37 = cResult[26];
                  }
                  if (cResult[27] === inlineButtons) {
                    if (cResult[28] === tmp5.scrollViewContainer) {
                      if (cResult[29] === tmp37) {
                        if (cResult[30] === tmp12) {
                          let tmp41 = cResult[31];
                        }
                        if (cResult[32] === tmp5.centerpieceContainer) {
                          if (cResult[33] === tmp41) {
                            let tmp45 = cResult[34];
                          }
                          return tmp45;
                        }
                        const obj5 = { style: centerpieceContainer, children: tmp41 };
                        const tmp48 = guild(React4, obj5);
                        cResult[32] = tmp5.centerpieceContainer;
                        cResult[33] = tmp41;
                        cResult[34] = tmp48;
                        tmp45 = tmp48;
                      }
                    }
                  }
                  const obj6 = { alwaysBounceVertical: false, contentContainerStyle: scrollViewContainer, children: null };
                  const items = [tmp12, tmp37, inlineButtons];
                  obj6.children = items;
                  const tmp44 = closure_1_22(timestampProducer, obj6);
                  cResult[27] = inlineButtons;
                  cResult[28] = tmp5.scrollViewContainer;
                  cResult[29] = tmp37;
                  cResult[30] = tmp12;
                  cResult[31] = tmp44;
                  tmp41 = tmp44;
                }
              }
            }
            const obj7 = { children: null };
            const items1 = [tmp19, tmp26, tmp29, tmp33];
            obj7.children = items1;
            const tmp40 = closure_1_22(React4, obj7);
            cResult[22] = tmp26;
            cResult[23] = tmp29;
            cResult[24] = tmp33;
            cResult[25] = tmp19;
            cResult[26] = tmp40;
            tmp37 = tmp40;
          }
          let tmp34 = null;
          if (tmp10) {
            const obj8 = { guildTemplate };
            tmp34 = guild(closure_26, obj8);
          }
          cResult[19] = guildTemplate;
          cResult[20] = tmp10;
          cResult[21] = tmp34;
          tmp33 = tmp34;
        }
        let tmp30 = null;
        if (tmp9) {
          const obj9 = { invite };
          tmp30 = guild(closure_25, obj9);
        }
        cResult[16] = invite;
        cResult[17] = tmp9;
        cResult[18] = tmp30;
        tmp29 = tmp30;
      }
      const items2 = [tmp5.subHeader, subHeaderWithInvite];
      cResult[10] = tmp5.subHeader;
      cResult[11] = subHeaderWithInvite;
      cResult[12] = items2;
      tmp23 = items2;
    }
    const obj10 = { style: tmp16, lineClamp: num4, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: tmp17 };
    const tmp21 = guild(Text_Text.Heading, obj10);
    cResult[7] = tmp16;
    cResult[8] = num4;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  }
  const items3 = [tmp5.header, typeConsolidationTextTransform];
  cResult[3] = tmp5.header;
  cResult[4] = typeConsolidationTextTransform;
  cResult[5] = items3;
  tmp16 = items3;
}) : (function Centerpiece(inlineButtons) {
  ({ invite, guildTemplate } = inlineButtons);
  const tmp2 = useIsWindowLargeDefault();
  const tmp3 = closure_23(tmp2);
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("Welcome");
  let tmp8 = null != guildTemplate;
  if (tmp8) {
    tmp8 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj2 = { style: tmp3.centerpieceContainer, children: null };
  const obj3 = { alwaysBounceVertical: false, contentContainerStyle: tmp3.scrollViewContainer, children: null };
  const items = [guild(hasOwnProperty, { style: tmp3.logo, source: _mod13913 }), , ];
  const obj5 = { style: null, lineClamp: null, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: null };
  const items1 = [tmp3.header, typeConsolidationTextTransform];
  obj5.style = items1;
  let num = 2;
  if (tmp2) {
    num = 1;
  }
  obj5.lineClamp = num;
  const intl = util.intl;
  obj5.children = intl.string(util.t["3S2xmm"]);
  const items2 = [guild(Text_Text.Heading, obj5), , , ];
  const items3 = [tmp3.subHeader, ];
  if (null != invite) {
    let subHeaderWithInvite = tmp3.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  const obj6 = { variant: "text-md/medium", color: "text-overlay-light", style: items3, maxFontSizeMultiplier: 3, children: null };
  items3[1] = subHeaderWithInvite;
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.Gtcthl);
  items2[1] = guild(Text_Text.Text, obj6);
  let tmp10Result = null;
  if (null != invite) {
    const obj7 = { invite };
    tmp10Result = guild(closure_25, obj7);
  }
  items2[2] = tmp10Result;
  let tmp10Result2 = null;
  if (tmp8) {
    const obj8 = { guildTemplate };
    tmp10Result2 = guild(closure_26, obj8);
  }
  items2[3] = tmp10Result2;
  items[1] = closure_1_22(React4, { children: items2 });
  items[2] = inlineButtons.inlineButtons;
  obj3.children = items;
  obj2.children = closure_1_22(timestampProducer, obj3);
  return guild(React4, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: nativeDefault.radii.sm };
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function Welcome() {
  const cResult = navigation(stateFromStores1[16]).c(51);
  const tmp5 = stateFromStores(stateFromStores1[24])();
  let tmp6 = closure_23(tmp5);
  let obj = navigation(stateFromStores1[16]);
  navigation = navigation(stateFromStores1[27]).useNavigation();
  const rect = stateFromStores(stateFromStores1[28])();
  const bottom = rect.bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DisplayedInviteStore];
    const fn = function o() {
      return displayedInviteCode.getDisplayedInviteCode();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  let obj2 = navigation(stateFromStores1[27]);
  stateFromStores = navigation(stateFromStores1[29]).useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [InviteStore];
    cResult[2] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    cResult[3] = stateFromStores;
    cResult[4] = N;
  } else {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
  }
  const tmpResult = navigation(stateFromStores1[29]);
  stateFromStores1 = navigation(stateFromStores1[29]).useStateFromStores(tmp12, N);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    const items2 = [GuildTemplateStore];
    class O {
      constructor() {
        return closure_1_9.getGuildTemplate(closure_1_9.getDisplayedGuildTemplateCode());
      }
    }
    cResult[5] = items2;
    cResult[6] = O;
    let tmp17 = O;
    const tmp16 = items2;
  } else {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp17 = cResult[6];
  }
  const tmpResult6 = navigation(stateFromStores1[29]);
  const stateFromStores2 = navigation(stateFromStores1[29]).useStateFromStores(tmp16, tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    const items3 = [AgeGateStore];
    class H {
      constructor() {
        return closure_1_7.isUnderageAnonymous();
      }
    }
    cResult[7] = items3;
    cResult[8] = H;
    let tmp20 = H;
    const tmp19 = items3;
  } else {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp20 = cResult[8];
  }
  const tmpResult7 = navigation(stateFromStores1[29]);
  const stateFromStores3 = navigation(stateFromStores1[29]).useStateFromStores(tmp19, tmp20);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    const items4 = [MultiAccountStore];
    class H {
      constructor() {
        return closure_1_7.isUnderageAnonymous();
      }
    }
    cResult[9] = items4;
    cResult[10] = tmp24;
    let tmp23 = tmp24;
    const tmp22 = items4;
  } else {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp23 = cResult[10];
  }
  const tmpResult8 = navigation(stateFromStores1[29]);
  const stateFromStores4 = navigation(stateFromStores1[29]).useStateFromStores(tmp22, tmp23);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    const items5 = [MultiAccountStore];
    class Q {
      constructor() {
        return closure_1_10.getCanUseMultiAccountMobile();
      }
    }
    cResult[11] = items5;
    cResult[12] = Q;
    let tmp27 = Q;
    const tmp26 = items5;
  } else {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp27 = cResult[12];
  }
  const tmpResult9 = navigation(stateFromStores1[29]);
  const stateFromStores5 = navigation(stateFromStores1[29]).useStateFromStores(tmp26, tmp27);
  if (cResult[13] !== stateFromStores1) {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
    cResult[13] = stateFromStores1;
    class Q {
      constructor() {
        return closure_1_10.getCanUseMultiAccountMobile();
      }
    }
    cResult[14] = tmp30;
  } else {
    class N {
      constructor() {
        invite = null;
        if (null != closure_1) {
          tmp3 = closure_12;
          invite = closure_12.getInvite(tmp);
        }
        return invite;
      }
    }
  }
  stateFromStores(stateFromStores1[33])(tmp30);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        obj = closure_1(closure_2[34]);
        locationMetadata = obj.getLocationMetadata();
        return;
      }
    }
    const items6 = [];
    class Q {
      constructor() {
        return closure_1_10.getCanUseMultiAccountMobile();
      }
    }
    cResult[16] = items6;
    let tmp33 = items6;
  } else {
    class X {
      constructor() {
        obj = closure_1(closure_2[34]);
        locationMetadata = obj.getLocationMetadata();
        return;
      }
    }
    tmp33 = cResult[16];
  }
  const effect = stateFromStores3.useEffect(X, tmp33);
  stateFromStores(stateFromStores1[35])(ExperimentStore.hasLoadedExperiments);
  const effect1 = stateFromStores3.useEffect(() => {

  });
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class Z {
      constructor() {
        return;
      }
    }
    cResult[17] = Z;
    class Q {
      constructor() {
        return closure_1_10.getCanUseMultiAccountMobile();
      }
    }
  } else {
    class Z {
      constructor() {
        return;
      }
    }
  }
  const effect2 = stateFromStores3.useEffect(tmp37);
  if (stateFromStores5) {
    class Z {
      constructor() {
        return;
      }
    }
  }
  if (cResult[19] !== navigation) {
    class Z {
      constructor() {
        return;
      }
    }
    cResult[19] = navigation;
    class Q {
      constructor() {
        return closure_1_10.getCanUseMultiAccountMobile();
      }
    }
    cResult[20] = tmp40;
  } else {
    class Z {
      constructor() {
        return;
      }
    }
  }
  if (cResult[21] === stateFromStores3) {
    class Z {
      constructor() {
        return;
      }
    }
    const _Symbol = Symbol;
    class Q {
      constructor() {
        return closure_1_10.getCanUseMultiAccountMobile();
      }
    }
    if (tmp42 === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          return;
        }
      }
      const stringResult = obj10.string(tmp(tmp2[18]).t.pV8xeR);
      class Q {
        constructor() {
          return closure_1_10.getCanUseMultiAccountMobile();
        }
      }
      cResult[24] = stringResult;
    } else {
      class Z {
        constructor() {
          return;
        }
      }
    }
    if (cResult[25] !== tmp41) {
      class Z {
        constructor() {
          return;
        }
      }
      let obj3 = { size: "lg", variant: "primary-overlay", onPress: tmp41, text: null };
      class Q {
        constructor() {
          return closure_1_10.getCanUseMultiAccountMobile();
        }
      }
      const tmp46 = closure_21(tmp(tmp2[39]).Button, obj3);
      cResult[25] = tmp41;
      cResult[26] = tmp46;
    } else {
      class Z {
        constructor() {
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          return;
        }
      }
      const stringResult1 = obj12.string(tmp(tmp2[18]).t.dKhVQN);
      class Q {
        constructor() {
          return closure_1_10.getCanUseMultiAccountMobile();
        }
      }
      cResult[27] = stringResult1;
    } else {
      class Z {
        constructor() {
          return;
        }
      }
    }
    if (cResult[28] !== tmp40) {
      class Z {
        constructor() {
          return;
        }
      }
      let obj4 = { size: "lg", variant: "secondary-overlay", onPress: tmp40, text: null };
      class Q {
        constructor() {
          return closure_1_10.getCanUseMultiAccountMobile();
        }
      }
      const tmp50 = closure_21(tmp(tmp2[39]).Button, obj4);
      cResult[28] = tmp40;
      cResult[29] = tmp50;
    } else {
      class Z {
        constructor() {
          return;
        }
      }
    }
    if (cResult[30] === tmp45) {
      class Z {
        constructor() {
          return;
        }
      }
      if (cResult[33] === tmp6.buttonContainer) {
        class Z {
          constructor() {
            return;
          }
        }
        const sum = rect.top + tmp(tmp2[41]).NAV_BAR_HEIGHT;
        if (cResult[36] === bottom) {
          class Z {
            constructor() {
              return;
            }
          }
          if (cResult[39] === tmp6.container) {
            class Z {
              constructor() {
                return;
              }
            }
            if (tmp5) {
              class Z {
                constructor() {
                  return;
                }
              }
            }
            class Q {
              constructor() {
                return closure_1_10.getCanUseMultiAccountMobile();
              }
            }
            const obj5 = { invite: stateFromStores1, guildTemplate: stateFromStores2, inlineButtons: null };
            const tmp65 = closure_21(closure_27, obj5);
            cResult[42] = stateFromStores2;
            cResult[43] = stateFromStores1;
            cResult[44] = null;
            cResult[45] = tmp65;
          }
          const items7 = [, ];
          class Q {
            constructor() {
              return closure_1_10.getCanUseMultiAccountMobile();
            }
          }
          items7[1] = tmp59;
          cResult[39] = tmp6.container;
          cResult[40] = tmp59;
          cResult[41] = items7;
        }
        class Q {
          constructor() {
            return closure_1_10.getCanUseMultiAccountMobile();
          }
        }
        tmp59[0] = sum;
        tmp59[1] = bottom;
        cResult[36] = bottom;
        cResult[37] = sum;
        cResult[38] = tmp59;
      }
      class Q {
        constructor() {
          return closure_1_10.getCanUseMultiAccountMobile();
        }
      }
      const obj6 = { style: tmp6.buttonContainer, children: tmp51 };
      const tmp56 = closure_21(closure_4, obj6);
      cResult[33] = tmp6.buttonContainer;
      cResult[34] = tmp51;
      cResult[35] = tmp56;
    }
    const obj7 = { children: null };
    const items8 = [tmp45, tmp49];
    obj7.children = items8;
    const tmp53 = closure_22(tmp(tmp2[40]).ButtonGroup, obj7);
    cResult[30] = tmp45;
    cResult[31] = tmp49;
    cResult[32] = tmp53;
  }
  function handlePressRegister() {
    if (stateFromStores3) {
      navigation.navigate(constants3.AGE_GATE_UNDERAGE, { fromRegister: true });
    } else {
      const nextAuthState = RegistrationStepsUtils.getNextAuthState(constants3.WELCOME);
      const CommonActions = Link.CommonActions;
      navigation.dispatch(CommonActions.navigate(nextAuthState));
      AnalyticsUtilsDefault.track(constants.REGISTER_VIEWED);
    }
  }
  cResult[21] = stateFromStores3;
  cResult[22] = navigation;
  cResult[23] = handlePressRegister;
  const tmpResult10 = navigation(stateFromStores1[29]);
}) : (function Welcome() {
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_23(tmp3);
  _require = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const tmp = importDefault;
  ({ top, bottom } = require("useSafeAreaInsets")());
  let tmp6 = require("useSafeAreaInsets")();
  const items = [DisplayedInviteStore];
  importDefault = require("initialize").useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj2 = require("initialize");
  const items1 = [InviteStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  let obj3 = require("initialize");
  const items2 = [GuildTemplateStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode()));
  let obj4 = require("initialize");
  const items3 = [AgeGateStore];
  noop = require("initialize").useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  const obj5 = require("initialize");
  const items4 = [MultiAccountStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => MultiAccountStore.getHasLoggedInAccounts());
  const obj6 = require("initialize");
  const items5 = [MultiAccountStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items5, () => MultiAccountStore.getCanUseMultiAccountMobile());
  require("useMountEffect")(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    const result = TTIAnalyticsUtils.trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores.type) {
        tmp6 = InviteTypes[stateFromStores.type];
      }
    }
    const obj4 = { last_logout_ts: null, invite_type: null, guild_id: null, channel_id: null, invite_code: null };
    const Storage = Storage2.Storage;
    obj4.last_logout_ts = Storage.get(constants2.LOGOUT_TIMESTAMP_KEY);
    obj4.invite_type = tmp6;
    let id;
    if (stateFromStores != null) {
      guild = stateFromStores.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    obj4.guild_id = id;
    let id1;
    if (stateFromStores != null) {
      const channel = stateFromStores.channel;
      if (channel != null) {
        id1 = channel.id;
      }
    }
    obj4.channel_id = id1;
    let code;
    if (stateFromStores != null) {
      code = stateFromStores.code;
    }
    obj4.invite_code = code;
    AnalyticsUtilsDefault.track(constants.APP_LANDING_VIEWED, obj4);
  });
  const effect = noop.useEffect(() => {
    const locationMetadata = closure_1(stateFromStores[34]).getLocationMetadata();
  }, []);
  require("useInitialValue")(ExperimentStore.hasLoadedExperiments);
  const effect1 = noop.useEffect(() => {

  });
  const effect2 = noop.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return closure_21(tmp(tmp2[36]), {});
    }
  }
  const obj8 = { style: tmp4.buttonContainer, children: null };
  const obj9 = { children: null };
  const obj10 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      if (closure_3) {
        navigation.navigate(constants3.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        const nextAuthState = RegistrationStepsUtils.getNextAuthState(constants3.WELCOME);
        const CommonActions = Link.CommonActions;
        navigation.dispatch(CommonActions.navigate(nextAuthState));
        AnalyticsUtilsDefault.track(constants.REGISTER_VIEWED);
      }
    },
    text: null
  };
  const intl = tmp5(tmp2[18]).intl;
  obj10.text = intl.string(require("util").t.pV8xeR);
  const items6 = [closure_21(require("components/Button/Button").Button, obj10), ];
  const obj11 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(constants3.LOGIN);
      AnalyticsUtilsDefault.track(constants.LOGIN_VIEWED, { source: "welcome" });
    },
    text: null
  };
  const intl2 = tmp5(tmp2[18]).intl;
  obj11.text = intl2.string(require("util").t.dKhVQN);
  items6[1] = closure_21(require("components/Button/Button").Button, obj11);
  obj9.children = items6;
  obj8.children = closure_22(require("ButtonGroup").ButtonGroup, obj9);
  const tmp19 = closure_21(closure_4, obj8);
  const obj12 = { theme: constants5.DARK, children: null };
  const obj13 = { style: null, children: null };
  const items7 = [tmp4.container, ];
  const obj7 = require("initialize");
  items7[1] = { paddingTop: top + require("NavigatorConstants").NAV_BAR_HEIGHT, paddingBottom: bottom };
  obj13.style = items7;
  const obj15 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: null };
  let tmp21 = null;
  if (tmp3) {
    tmp21 = tmp19;
  }
  obj15.inlineButtons = tmp21;
  const items8 = [closure_21(closure_27, obj15), , ];
  let tmp22 = !tmp3;
  if (!tmp3) {
    tmp22 = tmp19;
  }
  items8[1] = tmp22;
  items8[2] = closure_21(require("TTIFirstContentfulPaint").TTIFirstContentfulPaint, { label: "welcome" });
  obj13.children = items8;
  obj12.children = closure_22(closure_4, obj13);
  return closure_21(require("native").ThemeContextProvider, obj12);
});