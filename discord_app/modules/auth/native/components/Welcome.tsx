// === Module 15908: Welcome ===

// Module 15908 (Welcome)
import _modDef38 from "module_38" /* 38 */;
import Storage2 from "Storage" /* 510 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Link from "Link" /* 1491 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import Text_Text from "Text/Text" /* 4892 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6440 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6476 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 6839 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6997 */;
import Constants2 from "Constants" /* 7239 */;
import GuildInviteIconDefault from "GuildInviteIcon" /* 12401 */;
import AssetRegistryDefault from "AssetRegistry" /* 13077 */;
import AssetRegistry from "AssetRegistry" /* 13691 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15905 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AgeGateStore from "AgeGateStore" /* 15909 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6979 */;
import MultiAccountStore from "MultiAccountStore" /* 12071 */;
import UserRecord from "UserRecord" /* 1391 */;
import InviteStore from "InviteStore" /* 4877 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8426 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_21;
let closure_22;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: closure_14, StorageKeys: closure_15, AuthStates: closure_16, InviteStates: closure_17, ThemeTypes: closure_18 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants2.InviteTypes;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let closure_23 = createStyles.createStyles((arg0) => {
  let num;
  const obj = { container: { height: "100%", flex: 1, padding: 16 }, logo: { flex: 0, width: 93, height: 70, tintColor: "white", alignSelf: "center", marginBottom: 24 }, scrollViewContainer: { flexShrink: 0, flexGrow: 1, justifyContent: "center" }, header: { textAlign: "center", marginBottom: 8, textTransform: "uppercase" }, subHeader: { fontSize: 18, textAlign: "center", alignSelf: "center", maxWidth: num, marginBottom: 24, marginHorizontal: 16 }, subHeaderWithInvite: { marginBottom: 16 }, centerpieceContainer: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, buttonContainer: { paddingHorizontal: 28, maxWidth: 480, alignSelf: "center", width: "100%" } };
  num = 300;
  const tmp = arg0;
  if (tmp) {
    num = 480;
  }
  return obj;
});
createStyles = createStyles_mod;
let obj = { container: obj2, text: { marginLeft: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, padding: 16, flexDirection: "row", borderRadius: nativeDefault.radii.sm };
let closure_24 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let guild;
  let invite;
  let inviter;
  let items;
  let items1;
  let style;
  const obj = react2;
  const cResult = obj.c(32);
  ({ invite, style } = arg0);
  const tmp4 = closure_24();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    let name;
    let tmp15;
    let tmp11;
    if (null != guild) {
      let tmp34;
      let tmp39;
      if (cResult[0] !== guild) {
        const obj2 = { guild };
        const tmp37 = closure_21(GuildInviteIconDefault, obj2);
        cResult[0] = guild;
        cResult[1] = tmp37;
        tmp34 = tmp37;
      } else {
        tmp34 = cResult[1];
      }
      const _Symbol3 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult = intl3.string(intl4.t["3rE1P8"]);
        cResult[2] = stringResult;
        tmp39 = stringResult;
      } else {
        tmp39 = cResult[2];
      }
      name = guild.name;
      tmp15 = tmp39;
      tmp11 = tmp34;
    } else if (null != tmp5) {
      let tmp21;
      let tmp26;
      let tmp30;
      let tmp32;
      _modDef38(null != inviter, "Null inviter");
      if (cResult[3] !== inviter) {
        const self3 = this;
        const self4 = this;
        const tmp24 = new UserRecord(inviter);
        cResult[3] = inviter;
        cResult[4] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[4];
      }
      if (cResult[5] !== tmp21) {
        const obj4 = { user: tmp21, guildId: "Array" };
        const tmp28 = closure_21(native.Avatar, obj4);
        cResult[5] = tmp21;
        cResult[6] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t.OsdY8B);
        cResult[7] = stringResult1;
        tmp30 = stringResult1;
      } else {
        tmp30 = cResult[7];
      }
      if (cResult[8] !== inviter) {
        const tmp19Result = UserUtilsDefault;
        const formattedName = tmp19Result.getFormattedName(inviter);
        cResult[8] = inviter;
        cResult[9] = formattedName;
        tmp32 = formattedName;
      } else {
        tmp32 = cResult[9];
      }
      name = tmp32;
      tmp15 = tmp30;
      tmp11 = tmp26;
    } else if (null == inviter) {
      return null;
    } else {
      let tmp6;
      if (cResult[10] !== inviter) {
        const self = this;
        const self2 = this;
        const tmp9 = new UserRecord(inviter);
        cResult[10] = inviter;
        cResult[11] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[11];
      }
      if (cResult[12] !== tmp6) {
        const obj5 = { user: tmp6, guildId: "Array" };
        const tmp13 = closure_21(native.Avatar, obj5);
        cResult[12] = tmp6;
        cResult[13] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[13];
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult2 = intl.string(intl4.t["+ITYkQ"]);
        cResult[14] = stringResult2;
        tmp15 = stringResult2;
      } else {
        tmp15 = cResult[14];
      }
      if (cResult[15] !== inviter) {
        const obj3 = UserUtilsDefault;
        const formattedName1 = obj3.getFormattedName(inviter, true);
        cResult[15] = inviter;
        cResult[16] = formattedName1;
        name = formattedName1;
      } else {
        name = cResult[16];
      }
    }
    if (cResult[17] === tmp4.container) {
      let tmp41;
      let tmp42;
      let tmp45;
      if (cResult[18] === style) {
        tmp41 = cResult[19];
      }
      if (cResult[20] !== tmp15) {
        const obj6 = { variant: "text-sm/medium", color: "text-subtle", children: tmp15 };
        const tmp44 = closure_21(Text_Text.Text, obj6);
        cResult[20] = tmp15;
        cResult[21] = tmp44;
        tmp42 = tmp44;
      } else {
        tmp42 = cResult[21];
      }
      if (cResult[22] !== name) {
        const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
        const tmp47 = closure_21(Text_Text.Text, obj7);
        cResult[22] = name;
        cResult[23] = tmp47;
        tmp45 = tmp47;
      } else {
        tmp45 = cResult[23];
      }
      if (cResult[24] === tmp4.text) {
        if (cResult[25] === tmp42) {
          let tmp48;
          if (cResult[26] === tmp45) {
            tmp48 = cResult[27];
          }
          if (cResult[28] === tmp11) {
            if (cResult[29] === tmp41) {
              let tmp52;
              if (cResult[30] === tmp48) {
                tmp52 = cResult[31];
              }
              return tmp52;
            }
          }
          const obj8 = { style: tmp41, children: items };
          items = [tmp11, tmp48];
          const tmp55 = afk(React3, obj8);
          cResult[28] = tmp11;
          cResult[29] = tmp41;
          cResult[30] = tmp48;
          cResult[31] = tmp55;
          tmp52 = tmp55;
        }
      }
      const obj9 = { style: tmp4.text, children: items1 };
      items1 = [tmp42, tmp45];
      const tmp51 = afk(React3, obj9);
      cResult[24] = tmp4.text;
      cResult[25] = tmp42;
      cResult[26] = tmp45;
      cResult[27] = tmp51;
      tmp48 = tmp51;
    }
    const items2 = [tmp4.container, style];
    cResult[17] = tmp4.container;
    cResult[18] = style;
    cResult[19] = items2;
    tmp41 = items2;
  }
}) : (function(invite) {
  let guild;
  let inviter;
  let items;
  let items1;
  let items2;
  let tmp10;
  let tmp29;
  invite = invite.invite;
  const style = invite.style;
  const tmp = closure_24();
  ({ guild, inviter } = invite);
  if (invite.state !== constants4.RESOLVED) {
    return null;
  } else {
    let tmp12;
    let stringResult;
    let name;
    let tmp15;
    let tmp16;
    if (null != guild) {
      const obj3 = { guild };
      tmp12 = closure_21(GuildInviteIconDefault, obj3);
      const intl2 = intl4.intl;
      stringResult = intl2.string(intl4.t["3rE1P8"]);
      name = guild.name;
      tmp15 = require;
      tmp16 = closure_21;
    } else if (null != tmp2) {
      _modDef38(null != inviter, "Null inviter");
      const self = this;
      const self2 = this;
      const obj = { user: tmp10, guildId: "Array" };
      const Avatar = native.Avatar;
      tmp10 = new UserRecord(inviter);
      tmp12 = closure_21(Avatar, obj);
      const intl = intl4.intl;
      stringResult = intl.string(intl4.t.OsdY8B);
      const obj2 = UserUtilsDefault;
      name = obj2.getFormattedName(inviter);
      tmp15 = require;
      tmp16 = closure_21;
    } else if (null == inviter) {
      return null;
    } else {
      const self3 = this;
      const self4 = this;
      const obj4 = { user: tmp29, guildId: "Array" };
      const Avatar2 = native.Avatar;
      tmp29 = new UserRecord(inviter);
      const tmp31 = closure_21(Avatar2, obj4);
      const intl3 = intl4.intl;
      stringResult = intl3.string(intl4.t["+ITYkQ"]);
      const obj9 = UserUtilsDefault;
      name = obj9.getFormattedName(inviter, true);
      tmp12 = tmp31;
      tmp15 = require;
      tmp16 = closure_21;
    }
    const obj5 = { style: items, children: items1 };
    items = [tmp.container, style];
    items1 = [tmp12, ];
    const obj6 = { style: tmp.text, children: items2 };
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: stringResult };
    items2 = [tmp16(tmp15(4892).Text, obj7), ];
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items2[1] = tmp16(tmp15(4892).Text, obj8);
    items1[1] = afk(React3, obj6);
    return afk(React3, obj5);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildTemplate;
  let intl;
  let items;
  let items1;
  let style;
  const obj = react2;
  const cResult = obj.c(13);
  ({ guildTemplate, style } = arg0);
  const tmp4 = closure_24();
  if (cResult[0] === tmp4.container) {
    let tmp5;
    let tmp7;
    let tmp12;
    let tmp15;
    if (cResult[1] === style) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: AssetRegistryDefault };
      const tmp11 = closure_21(hasOwnProperty, obj2);
      cResult[3] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(intl4.t.QzUORX) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      const tmp14 = closure_21(Text, obj3);
      cResult[4] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== guildTemplate.name) {
      const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
      const tmp17 = closure_21(Text_Text.Text, obj4);
      cResult[5] = guildTemplate.name;
      cResult[6] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[6];
    }
    if (cResult[7] === tmp4.text) {
      let tmp18;
      if (cResult[8] === tmp15) {
        tmp18 = cResult[9];
      }
      if (cResult[10] === tmp5) {
        let tmp22;
        if (cResult[11] === tmp18) {
          tmp22 = cResult[12];
        }
        return tmp22;
      }
      const obj5 = { style: tmp5, children: items };
      items = [tmp7, tmp18];
      const tmp25 = afk(React3, obj5);
      cResult[10] = tmp5;
      cResult[11] = tmp18;
      cResult[12] = tmp25;
      tmp22 = tmp25;
    }
    const obj6 = { style: tmp4.text, children: items1 };
    items1 = [tmp12, tmp15];
    const tmp21 = afk(React3, obj6);
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
}) : ((arg0) => {
  let guildTemplate;
  let intl;
  let items;
  let items1;
  let items2;
  let style;
  ({ guildTemplate, style } = arg0);
  const tmp = closure_24();
  const obj = { style: items, children: items1 };
  items = [tmp.container, style];
  items1 = [, ];
  const obj2 = { source: AssetRegistryDefault };
  items1[0] = closure_21(hasOwnProperty, obj2);
  const obj3 = { style: tmp.text, children: items2 };
  const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(intl4.t.QzUORX) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items2 = [closure_21(Text, obj4), ];
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guildTemplate.name };
  items2[1] = closure_21(Text_Text.Text, obj5);
  items1[1] = afk(React3, obj3);
  return afk(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let guildTemplate;
  let inlineButtons;
  let invite;
  let items1;
  let items2;
  let tmp12;
  let tmp13;
  const obj = react2;
  const cResult = obj.c(37);
  ({ invite, guildTemplate, inlineButtons } = arg0);
  const tmp4 = useIsWindowLargeDefault();
  const tmp5 = closure_23(tmp4);
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj2.useTypeConsolidationTextTransform("Welcome");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AssetRegistry;
    cResult[0] = tmpResult;
    first = tmpResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp5.centerpieceContainer) {
    const items = [tmp5.centerpieceContainer];
    cResult[1] = tmp5.centerpieceContainer;
    cResult[2] = items;
    tmp12 = items;
  } else {
    tmp12 = cResult[2];
  }
  const scrollViewContainer = tmp5.scrollViewContainer;
  if (cResult[3] !== tmp5.logo) {
    const obj3 = { style: tmp5.logo, source: first };
    const tmp16 = closure_21(hasOwnProperty, obj3);
    cResult[3] = tmp5.logo;
    cResult[4] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp5.header) {
    let tmp17;
    let tmp18;
    if (cResult[6] === typeConsolidationTextTransform) {
      tmp17 = cResult[7];
    }
    let num6 = 2;
    if (tmp4) {
      num6 = 1;
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl4.intl;
      const stringResult = intl.string(intl4.t["3S2xmm"]);
      cResult[8] = stringResult;
      tmp18 = stringResult;
    } else {
      tmp18 = cResult[8];
    }
    if (cResult[9] === tmp17) {
      let tmp20;
      let subHeaderWithInvite;
      if (cResult[10] === num6) {
        tmp20 = cResult[11];
      }
      if (null != invite) {
        subHeaderWithInvite = tmp5.subHeaderWithInvite;
      } else {
        subHeaderWithInvite = null;
      }
      if (cResult[12] === tmp5.subHeader) {
        let tmp24;
        let tmp25;
        let tmp27;
        if (cResult[13] === subHeaderWithInvite) {
          tmp24 = cResult[14];
        }
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl4.intl;
          const stringResult1 = intl2.string(intl4.t.Gtcthl);
          cResult[15] = stringResult1;
          tmp25 = stringResult1;
        } else {
          tmp25 = cResult[15];
        }
        if (cResult[16] !== tmp24) {
          const obj4 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp24, maxFontSizeMultiplier: 3, children: tmp25 };
          const tmp29 = closure_21(Text_Text.Text, obj4);
          cResult[16] = tmp24;
          cResult[17] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[17];
        }
        if (cResult[18] === invite) {
          let tmp30;
          if (cResult[19] === null != invite) {
            tmp30 = cResult[20];
          }
          if (cResult[21] === guildTemplate) {
            let tmp34;
            if (cResult[22] === (null != guildTemplate && guildTemplate.state === GuildTemplateStates.RESOLVED)) {
              tmp34 = cResult[23];
            }
            if (cResult[24] === tmp27) {
              if (cResult[25] === tmp30) {
                if (cResult[26] === tmp34) {
                  let tmp38;
                  if (cResult[27] === tmp20) {
                    tmp38 = cResult[28];
                  }
                  if (cResult[29] === inlineButtons) {
                    if (cResult[30] === tmp5.scrollViewContainer) {
                      if (cResult[31] === tmp38) {
                        let tmp42;
                        if (cResult[32] === tmp13) {
                          tmp42 = cResult[33];
                        }
                        if (cResult[34] === tmp42) {
                          let tmp46;
                          if (cResult[35] === tmp12) {
                            tmp46 = cResult[36];
                          }
                          return tmp46;
                        }
                        const obj5 = { style: tmp12, children: tmp42 };
                        const tmp49 = closure_21(React3, obj5);
                        cResult[34] = tmp42;
                        cResult[35] = tmp12;
                        cResult[36] = tmp49;
                        tmp46 = tmp49;
                      }
                    }
                  }
                  const obj6 = { alwaysBounceVertical: false, contentContainerStyle: scrollViewContainer, children: items1 };
                  items1 = [tmp13, tmp38, inlineButtons];
                  const tmp45 = afk(metroRequire, obj6);
                  cResult[29] = inlineButtons;
                  cResult[30] = tmp5.scrollViewContainer;
                  cResult[31] = tmp38;
                  cResult[32] = tmp13;
                  cResult[33] = tmp45;
                  tmp42 = tmp45;
                }
              }
            }
            const obj7 = { children: items2 };
            items2 = [tmp20, tmp27, tmp30, tmp34];
            const tmp41 = afk(React3, obj7);
            cResult[24] = tmp27;
            cResult[25] = tmp30;
            cResult[26] = tmp34;
            cResult[27] = tmp20;
            cResult[28] = tmp41;
            tmp38 = tmp41;
          }
          let tmp35 = null;
          if (null != guildTemplate && guildTemplate.state === GuildTemplateStates.RESOLVED) {
            const obj8 = { guildTemplate };
            tmp35 = closure_21(closure_26, obj8);
          }
          cResult[21] = guildTemplate;
          cResult[22] = null != guildTemplate && guildTemplate.state === GuildTemplateStates.RESOLVED;
          cResult[23] = tmp35;
          tmp34 = tmp35;
        }
        let tmp31 = null;
        if (null != invite) {
          const obj9 = { invite };
          tmp31 = closure_21(closure_25, obj9);
        }
        cResult[18] = invite;
        cResult[19] = null != invite;
        cResult[20] = tmp31;
        tmp30 = tmp31;
      }
      const items3 = [tmp5.subHeader, subHeaderWithInvite];
      cResult[12] = tmp5.subHeader;
      cResult[13] = subHeaderWithInvite;
      cResult[14] = items3;
      tmp24 = items3;
    }
    const obj10 = { style: tmp17, lineClamp: num6, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: tmp18 };
    const tmp22 = closure_21(Text_Text.Heading, obj10);
    cResult[9] = tmp17;
    cResult[10] = num6;
    cResult[11] = tmp22;
    tmp20 = tmp22;
  }
  const items4 = [tmp5.header, typeConsolidationTextTransform];
  cResult[5] = tmp5.header;
  cResult[6] = typeConsolidationTextTransform;
  cResult[7] = items4;
  tmp17 = items4;
}) : ((inlineButtons) => {
  let guildTemplate;
  let intl;
  let intl2;
  let invite;
  let items;
  let items1;
  let items2;
  let num;
  let obj3;
  let subHeaderWithInvite;
  ({ invite, guildTemplate } = inlineButtons);
  inlineButtons = inlineButtons.inlineButtons;
  const tmp2 = useIsWindowLargeDefault();
  const tmp3 = closure_23(tmp2);
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("Welcome");
  let tmp8 = null != guildTemplate;
  const tmp6 = AssetRegistry;
  if (tmp8) {
    tmp8 = guildTemplate.state === GuildTemplateStates.RESOLVED;
  }
  const obj2 = { style: items, children: afk(metroRequire, obj3) };
  items = [tmp3.centerpieceContainer];
  obj3 = { alwaysBounceVertical: false, contentContainerStyle: tmp3.scrollViewContainer, children: items1 };
  items1 = [, , ];
  const obj4 = { style: tmp3.logo, source: tmp6 };
  items1[0] = closure_21(hasOwnProperty, obj4);
  const obj5 = { style: items2, lineClamp: num, variant: "display-md", color: "text-overlay-light", maxFontSizeMultiplier: 1, children: intl.string(intl4.t["3S2xmm"]) };
  items2 = [tmp3.header, typeConsolidationTextTransform];
  num = 2;
  const Heading = Text_Text.Heading;
  if (tmp2) {
    num = 1;
  }
  intl = intl4.intl;
  const items3 = [closure_21(Heading, obj5), , , ];
  const items4 = [tmp3.subHeader, ];
  const Text = Text_Text.Text;
  if (null != invite) {
    subHeaderWithInvite = tmp3.subHeaderWithInvite;
  } else {
    subHeaderWithInvite = null;
  }
  items4[1] = subHeaderWithInvite;
  const obj6 = { variant: "text-md/medium", color: "text-overlay-light", style: items4, maxFontSizeMultiplier: 3, children: intl2.string(intl4.t.Gtcthl) };
  intl2 = intl4.intl;
  items3[1] = closure_21(Text, obj6);
  let tmp10Result = null;
  if (null != invite) {
    const obj7 = { invite };
    tmp10Result = closure_21(closure_25, obj7);
  }
  items3[2] = tmp10Result;
  let tmp10Result2 = null;
  if (tmp8) {
    const obj8 = { guildTemplate };
    tmp10Result2 = closure_21(closure_26, obj8);
  }
  items3[3] = tmp10Result2;
  items1[1] = afk(React3, { children: items3 });
  items1[2] = inlineButtons;
  return closure_21(React3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let displayedInviteCode;
  let items8;
  let stateFromStores;
  let stateFromStores1;
  let tmp12;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp33;
  let tmp8;
  let tmp9;
  let underageAnonymous;
  const tmp = navigation;
  let obj = navigation(stateFromStores1[16]);
  const cResult = obj.c(51);
  const tmp5 = stateFromStores(stateFromStores1[24])();
  let tmp6 = closure_23(tmp5);
  let obj2 = navigation(stateFromStores1[27]);
  navigation = obj2.useNavigation();
  const rect = stateFromStores(stateFromStores1[28])();
  const bottom = rect.bottom;
  const top = rect.top;
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
  const tmpResult = tmp(stateFromStores1[29]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [InviteStore];
    cResult[2] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    cResult[3] = stateFromStores;
    cResult[4] = N;
  } else {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
  }
  const tmpResult6 = tmp(stateFromStores1[29]);
  stateFromStores1 = tmpResult6.useStateFromStores(tmp12, N);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    const items2 = [GuildTemplateStore];
    class O {
      constructor() {
        return GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode());
      }
    }
    cResult[5] = items2;
    cResult[6] = O;
    tmp17 = O;
    tmp16 = items2;
  } else {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp17 = cResult[6];
  }
  const tmpResult7 = tmp(stateFromStores1[29]);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp16, tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    const items3 = [AgeGateStore];
    class M {
      constructor() {
        return underageAnonymous.isUnderageAnonymous();
      }
    }
    cResult[7] = items3;
    cResult[8] = M;
    tmp20 = M;
    tmp19 = items3;
  } else {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp20 = cResult[8];
  }
  const tmpResult8 = tmp(stateFromStores1[29]);
  const stateFromStores3 = tmpResult8.useStateFromStores(tmp19, tmp20);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    const items4 = [MultiAccountStore];
    class M {
      constructor() {
        return underageAnonymous.isUnderageAnonymous();
      }
    }
    cResult[9] = items4;
    cResult[10] = tmp24;
    tmp23 = tmp24;
    tmp22 = items4;
  } else {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp23 = cResult[10];
  }
  const tmpResult9 = tmp(stateFromStores1[29]);
  const stateFromStores4 = tmpResult9.useStateFromStores(tmp22, tmp23);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    const items5 = [MultiAccountStore];
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    cResult[11] = items5;
    cResult[12] = Q;
    tmp27 = Q;
    tmp26 = items5;
  } else {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    tmp27 = cResult[12];
  }
  const tmpResult10 = tmp(stateFromStores1[29]);
  const stateFromStores5 = tmpResult10.useStateFromStores(tmp26, tmp27);
  if (cResult[13] !== stateFromStores1) {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
    cResult[13] = stateFromStores1;
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    cResult[14] = tmp30;
  } else {
    class N {
      constructor() {
        let invite = null;
        if (null != stateFromStores) {
          invite = InviteStore.getInvite(tmp);
        }
        return invite;
      }
    }
  }
  stateFromStores(stateFromStores1[33])(tmp30);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        const obj = stateFromStores(stateFromStores1[34]);
        const locationMetadata = obj.getLocationMetadata();
      }
    }
    const items6 = [];
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    cResult[16] = items6;
    tmp33 = items6;
  } else {
    class X {
      constructor() {
        const obj = stateFromStores(stateFromStores1[34]);
        const locationMetadata = obj.getLocationMetadata();
      }
    }
    tmp33 = cResult[16];
  }
  const effect = stateFromStores3.useEffect(X, tmp33);
  stateFromStores(stateFromStores1[35])(ExperimentStore.hasLoadedExperiments);
  const effect1 = stateFromStores3.useEffect(() => {

  });
  const obj9 = stateFromStores3;
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class Z {
      constructor() {

      }
    }
    cResult[17] = Z;
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
  } else {
    class Z {
      constructor() {

      }
    }
  }
  const effect2 = obj9.useEffect(tmp37);
  if (stateFromStores5) {
    class Z {
      constructor() {

      }
    }
  }
  if (cResult[19] !== navigation) {
    class Z {
      constructor() {

      }
    }
    cResult[19] = navigation;
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    cResult[20] = tmp40;
  } else {
    class Z {
      constructor() {

      }
    }
  }
  if (cResult[21] === stateFromStores3) {
    class Z {
      constructor() {

      }
    }
    const _Symbol = Symbol;
    const buttonContainer = tmp6.buttonContainer;
    class Q {
      constructor() {
        return MultiAccountStore.getCanUseMultiAccountMobile();
      }
    }
    if (tmp42 === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {

        }
      }
      const stringResult = obj10.string(tmp(stateFromStores1[18]).t.pV8xeR);
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      cResult[24] = stringResult;
    } else {
      class Z {
        constructor() {

        }
      }
    }
    if (cResult[25] !== tmp41) {
      class Z {
        constructor() {

        }
      }
      let obj3 = { size: "lg", variant: "primary-overlay", onPress: tmp41, text: null };
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      cResult[25] = tmp41;
      cResult[26] = closure_21(tmp(stateFromStores1[39]).Button, obj3);
      const tmp46 = closure_21(tmp(stateFromStores1[39]).Button, obj3);
    } else {
      class Z {
        constructor() {

        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {

        }
      }
      const stringResult1 = obj12.string(tmp(stateFromStores1[18]).t.dKhVQN);
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      cResult[27] = stringResult1;
    } else {
      class Z {
        constructor() {

        }
      }
    }
    if (cResult[28] !== tmp40) {
      class Z {
        constructor() {

        }
      }
      const obj4 = { size: "lg", variant: "secondary-overlay", onPress: tmp40, text: null };
      class Q {
        constructor() {
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      cResult[28] = tmp40;
      cResult[29] = closure_21(tmp(stateFromStores1[39]).Button, obj4);
      const tmp50 = closure_21(tmp(stateFromStores1[39]).Button, obj4);
    } else {
      class Z {
        constructor() {

        }
      }
    }
    if (cResult[30] === tmp45) {
      class Z {
        constructor() {

        }
      }
      if (cResult[33] === tmp6.buttonContainer) {
        class Z {
          constructor() {

          }
        }
        const sum = top + tmp(tmp2[41]).NAV_BAR_HEIGHT;
        if (cResult[36] === bottom) {
          class Z {
            constructor() {

            }
          }
          if (cResult[39] === tmp6.container) {
            class Z {
              constructor() {

              }
            }
            if (tmp5) {
              class Z {
                constructor() {

                }
              }
            }
            class Q {
              constructor() {
                return MultiAccountStore.getCanUseMultiAccountMobile();
              }
            }
            const obj5 = { invite: stateFromStores1, guildTemplate: stateFromStores2, inlineButtons: null };
            cResult[42] = stateFromStores2;
            cResult[43] = stateFromStores1;
            cResult[44] = null;
            cResult[45] = closure_21(closure_27, obj5);
            const tmp65 = closure_21(closure_27, obj5);
          }
          const items7 = [, ];
          class Q {
            constructor() {
              return MultiAccountStore.getCanUseMultiAccountMobile();
            }
          }
          items7[1] = tmp59;
          cResult[39] = tmp6.container;
          cResult[40] = tmp59;
          cResult[41] = items7;
        }
        class Q {
          constructor() {
            return MultiAccountStore.getCanUseMultiAccountMobile();
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
          return MultiAccountStore.getCanUseMultiAccountMobile();
        }
      }
      const obj6 = { style: buttonContainer, children: tmp51 };
      cResult[33] = tmp6.buttonContainer;
      cResult[34] = tmp51;
      cResult[35] = closure_21(closure_4, obj6);
      const tmp56 = closure_21(closure_4, obj6);
    }
    const obj7 = { children: items8 };
    items8 = [tmp45, tmp49];
    cResult[30] = tmp45;
    cResult[31] = tmp49;
    cResult[32] = closure_22(tmp(stateFromStores1[40]).ButtonGroup, obj7);
    const tmp53 = closure_22(tmp(stateFromStores1[40]).ButtonGroup, obj7);
  }
  function te() {
    if (stateFromStores3) {
      navigation.navigate(constants3.AGE_GATE_UNDERAGE, { fromRegister: true });
    } else {
      const obj = RegistrationStepsUtils;
      const nextAuthState = obj.getNextAuthState(constants3.WELCOME);
      const dispatch = navigation.dispatch;
      const CommonActions = Link.CommonActions;
      dispatch(CommonActions.navigate(nextAuthState));
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(constants.REGISTER_VIEWED);
    }
  }
  cResult[21] = stateFromStores3;
  cResult[22] = navigation;
  cResult[23] = te;
}) : (() => {
  let ButtonGroup;
  let bottom;
  let closure_1;
  let closure_3;
  let displayedInviteCode;
  let intl;
  let intl2;
  let items6;
  let items7;
  let items8;
  let obj13;
  let obj9;
  let stateFromStores;
  let tmp21;
  let top;
  let underageAnonymous;
  const tmp = importDefault;
  const tmp3 = require("useIsWindowLarge")();
  const tmp4 = closure_23(tmp3);
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  let tmp6 = require("useSafeAreaInsets")();
  ({ top, bottom } = tmp6);
  let obj2 = require("get initialized");
  const items = [DisplayedInviteStore];
  importDefault = obj2.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj3 = require("get initialized");
  const items1 = [InviteStore];
  stateFromStores = obj3.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_1) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  const items2 = [GuildTemplateStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items2, () => GuildTemplateStore.getGuildTemplate(GuildTemplateStore.getDisplayedGuildTemplateCode()));
  const items3 = [AgeGateStore];
  const obj5 = require("get initialized");
  react = obj5.useStateFromStores(items3, () => underageAnonymous.isUnderageAnonymous());
  const items4 = [MultiAccountStore];
  const obj6 = require("get initialized");
  const stateFromStores2 = obj6.useStateFromStores(items4, () => MultiAccountStore.getHasLoggedInAccounts());
  const items5 = [MultiAccountStore];
  const obj7 = require("get initialized");
  const stateFromStores3 = obj7.useStateFromStores(items5, () => MultiAccountStore.getCanUseMultiAccountMobile());
  require("useMountEffect")(() => {
    let Storage;
    let code;
    let id;
    let id1;
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    const obj2 = TTIAnalyticsUtils;
    const result = obj2.trackAppLaunchCompleted();
    let tmp6 = null;
    if (null != stateFromStores) {
      tmp6 = null;
      if (null != stateFromStores.type) {
        tmp6 = InviteTypes[stateFromStores.type];
      }
    }
    const obj3 = { last_logout_ts: Storage.get(constants2.LOGOUT_TIMESTAMP_KEY), invite_type: tmp6, guild_id: id, channel_id: id1, invite_code: code };
    const track = AnalyticsUtilsDefault.track;
    const APP_LANDING_VIEWED = constants.APP_LANDING_VIEWED;
    AnalyticsUtilsDefault;
    Storage = Storage2.Storage;
    id = undefined;
    if (stateFromStores != null) {
      const guild = stateFromStores.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    id1 = undefined;
    if (stateFromStores != null) {
      const channel = stateFromStores.channel;
      if (channel != null) {
        id1 = channel.id;
      }
    }
    code = undefined;
    if (stateFromStores != null) {
      code = stateFromStores.code;
    }
    track(APP_LANDING_VIEWED, obj3);
  });
  const effect = react.useEffect(() => {
    const obj = closure_1(stateFromStores[34]);
    const locationMetadata = obj.getLocationMetadata();
  }, []);
  require("useInitialValue")(ExperimentStore.hasLoadedExperiments);
  const effect1 = react.useEffect(() => {

  });
  const effect2 = react.useEffect(() => {

  });
  if (stateFromStores3) {
    if (stateFromStores2) {
      return closure_21(tmp(stateFromStores[36]), {});
    }
  }
  const obj8 = { style: tmp4.buttonContainer, children: closure_22(ButtonGroup, obj9) };
  obj9 = { children: items6 };
  ButtonGroup = tmp5(tmp2[40]).ButtonGroup;
  const obj10 = {
    size: "lg",
    variant: "primary-overlay",
    onPress: function handlePressRegister() {
      if (closure_3) {
        navigation.navigate(constants3.AGE_GATE_UNDERAGE, { fromRegister: true });
      } else {
        const obj = RegistrationStepsUtils;
        const nextAuthState = obj.getNextAuthState(constants3.WELCOME);
        const dispatch = navigation.dispatch;
        const CommonActions = Link.CommonActions;
        dispatch(CommonActions.navigate(nextAuthState));
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(constants.REGISTER_VIEWED);
      }
    },
    text: intl.string(require("intl").t.pV8xeR)
  };
  const Button = tmp5(tmp2[39]).Button;
  intl = tmp5(tmp2[18]).intl;
  items6 = [closure_21(Button, obj10), ];
  const obj11 = {
    size: "lg",
    variant: "secondary-overlay",
    onPress: function handlePressLogin() {
      navigation.navigate(constants3.LOGIN);
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.LOGIN_VIEWED, { source: "welcome" });
    },
    text: intl2.string(require("intl").t.dKhVQN)
  };
  const Button2 = tmp5(tmp2[39]).Button;
  intl2 = tmp5(tmp2[18]).intl;
  items6[1] = closure_21(Button2, obj11);
  const tmp19 = closure_21(closure_4, obj8);
  const obj12 = { theme: constants5.DARK, children: closure_22(closure_4, obj13) };
  obj13 = { style: items7, children: items8 };
  items7 = [tmp4.container, ];
  const obj14 = { paddingTop: top + require("NavigatorConstants").NAV_BAR_HEIGHT, paddingBottom: bottom };
  const ThemeContextProvider = tmp5(tmp2[43]).ThemeContextProvider;
  items7[1] = obj14;
  const obj15 = { invite: stateFromStores, guildTemplate: stateFromStores1, inlineButtons: tmp21 };
  tmp21 = null;
  if (tmp3) {
    tmp21 = tmp19;
  }
  items8 = [closure_21(closure_27, obj15), !tmp3 && tmp19, closure_21(require("TTIFirstContentfulPaint").TTIFirstContentfulPaint, { label: "welcome" })];
  return closure_21(ThemeContextProvider, obj12);
});
let result = size.fileFinishedImporting("modules/auth/native/components/Welcome.tsx");

export default tmp5;