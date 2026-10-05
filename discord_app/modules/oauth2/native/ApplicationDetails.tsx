// === Module 8953: ApplicationDetails ===

// Module 8953 (ApplicationDetails)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import LinkIcon from "LinkIcon" /* 4839 */;
import ClockIcon2 from "ClockIcon" /* 4849 */;
import Text_Text from "Text/Text" /* 4886 */;
import LockIcon from "LockIcon" /* 5879 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8015 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8551 */;
import scopes from "scopes" /* 8720 */;
import disclosures from "disclosures" /* 8722 */;
import Utils from "Utils" /* 8724 */;
import ShieldIcon from "ShieldIcon" /* 8923 */;
import EmbedIcon from "EmbedIcon" /* 8954 */;
import HammerIcon from "HammerIcon" /* 8956 */;
import RobotIcon from "RobotIcon" /* 8958 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 }, entryIcon: size };
size = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let application;
  let approximateGuildCount;
  let connectedAccount;
  let disclosures;
  let intl;
  let intl2;
  let intl4;
  let isEmbeddedFlow;
  let items;
  let obj12;
  let obj6;
  let redirectUri;
  let scopes;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(50);
  ({ application, scopes, redirectUri, approximateGuildCount, isEmbeddedFlow, disclosures, connectedAccount } = arg0);
  let tmp4 = closure_6();
  if (cResult[0] === application) {
    if (cResult[1] === connectedAccount) {
      if (cResult[2] === isEmbeddedFlow) {
        if (cResult[3] === redirectUri) {
          if (cResult[4] === scopes) {
            if (cResult[5] === tmp4.applicationDetails) {
              tmp5 = cResult[6];
              tmp6 = cResult[7];
              tmp7 = cResult[8];
              tmp8 = cResult[9];
              tmp9 = cResult[10];
              tmp10 = cResult[11];
              tmp11 = cResult[12];
              tmp12 = cResult[13];
              tmp13 = cResult[14];
            }
            if (cResult[29] === tmp5) {
              if (cResult[30] === tmp8) {
                let tmp41;
                if (cResult[31] === tmp9) {
                  tmp41 = cResult[32];
                }
                if (cResult[33] === approximateGuildCount) {
                  let tmp44;
                  let tmp49;
                  let tmp53;
                  if (cResult[34] === scopes) {
                    tmp44 = cResult[35];
                  }
                  if (cResult[36] !== tmp7) {
                    let obj3 = { iconComponent: ShieldIcon.ShieldIcon, text: tmp7 };
                    const tmp52 = React3(closure_7, obj3);
                    cResult[36] = tmp7;
                    cResult[37] = tmp52;
                    tmp49 = tmp52;
                  } else {
                    tmp49 = cResult[37];
                  }
                  if (cResult[38] !== disclosures) {
                    let mapped = null;
                    if (null != disclosures) {
                      mapped = disclosures.map((toFixed) => {
                        let tmp4;
                        const obj = disclosures;
                        const textForDisclosure = obj.getTextForDisclosure(toFixed);
                        if (disclosures.ApplicationDisclosure.IP_LOCATION === toFixed) {
                          tmp4 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
                          const obj2 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
                        } else {
                          tmp4 = null;
                          if (disclosures.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
                            tmp4 = { iconComponent: EmbedIcon.EmbedIcon };
                            const obj3 = { iconComponent: EmbedIcon.EmbedIcon };
                          }
                        }
                        let tmp5 = null;
                        if (null != tmp4) {
                          tmp5 = null;
                          if (null != textForDisclosure) {
                            const obj4 = { text: textForDisclosure };
                            const merged = Object.assign(tmp4);
                            tmp5 = closure_1_4(closure_1_7, obj4, toFixed.toFixed());
                          }
                        }
                        return tmp5;
                      });
                    }
                    cResult[38] = disclosures;
                    cResult[39] = mapped;
                    tmp53 = mapped;
                  } else {
                    tmp53 = cResult[39];
                  }
                  if (cResult[40] === tmp6) {
                    if (cResult[41] === tmp53) {
                      if (cResult[42] === tmp10) {
                        if (cResult[43] === tmp11) {
                          if (cResult[44] === tmp12) {
                            if (cResult[45] === tmp13) {
                              if (cResult[46] === tmp41) {
                                if (cResult[47] === tmp44) {
                                  let tmp55;
                                  if (cResult[48] === tmp49) {
                                    tmp55 = cResult[49];
                                  }
                                  return tmp55;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  let obj4 = { style: tmp10, children: items };
                  items = [tmp11, tmp12, tmp13, tmp41, tmp44, tmp49, tmp53];
                  const tmp57 = hasOwnProperty(tmp6, obj4);
                  cResult[40] = tmp6;
                  cResult[41] = tmp53;
                  cResult[42] = tmp10;
                  cResult[43] = tmp11;
                  cResult[44] = tmp12;
                  cResult[45] = tmp13;
                  cResult[46] = tmp41;
                  cResult[47] = tmp44;
                  cResult[48] = tmp49;
                  cResult[49] = tmp57;
                  tmp55 = tmp57;
                }
                let tmp46 = null;
                if (scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT)) {
                  tmp46 = null;
                  if (null != approximateGuildCount) {
                    const obj5 = { iconComponent: RobotIcon.RobotIcon, text: intl4.formatToPlainString(intl5.t.UHGHSP, obj6) };
                    intl4 = intl5.intl;
                    obj6 = { guildCount: approximateGuildCount };
                    tmp46 = React3(closure_7, obj5);
                  }
                }
                cResult[33] = approximateGuildCount;
                cResult[34] = scopes;
                cResult[35] = tmp46;
                tmp44 = tmp46;
              }
            }
            const obj7 = { iconComponent: tmp8, text: tmp9 };
            const tmp43 = React3(tmp5, obj7);
            cResult[29] = tmp5;
            cResult[30] = tmp8;
            cResult[31] = tmp9;
            cResult[32] = tmp43;
            tmp41 = tmp43;
          }
        }
      }
    }
  }
  let obj2 = SnowflakeUtilsDefault;
  const date = new Date(obj2.extractTimestamp(application.id));
  if (cResult[15] !== scopes) {
    const tmpResult = scopes;
    const securityMessage = tmpResult.getSecurityMessage(scopes);
    cResult[15] = scopes;
    cResult[16] = securityMessage;
    tmp15 = securityMessage;
  } else {
    tmp15 = cResult[16];
  }
  if (cResult[17] === isEmbeddedFlow) {
    if (cResult[18] === redirectUri) {
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp28;
      let tmp30;
      let tmp34;
      if (cResult[19] === tmp4.applicationDetails) {
        tmp17 = cResult[20];
        tmp18 = cResult[21];
        tmp19 = cResult[22];
      }
      if (cResult[23] !== application) {
        const tmpResult2 = Utils;
        const applicationDetailsText = tmpResult2.getApplicationDetailsText(application);
        cResult[23] = application;
        cResult[24] = applicationDetailsText;
        tmp28 = applicationDetailsText;
      } else {
        tmp28 = cResult[24];
      }
      if (cResult[25] !== tmp28) {
        const obj8 = { iconComponent: LockIcon.LockIcon, text: tmp28 };
        const tmp33 = React3(closure_7, obj8);
        cResult[25] = tmp28;
        cResult[26] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[26];
      }
      if (cResult[27] !== connectedAccount) {
        let tmp35 = null;
        if (null != connectedAccount) {
          const obj9 = { iconComponent: HammerIcon.HammerIcon, text: intl2.string(intl5.t["8qui3M"]) };
          intl2 = intl5.intl;
          tmp35 = React3(closure_7, obj9);
        }
        cResult[27] = connectedAccount;
        cResult[28] = tmp35;
        tmp34 = tmp35;
      } else {
        tmp34 = cResult[28];
      }
      const ClockIcon = ClockIcon2.ClockIcon;
      const intl3 = intl5.intl;
      const obj10 = { date };
      const formatToPlainStringResult = intl3.formatToPlainString(intl5.t["+1bjc8"], obj10);
      cResult[0] = application;
      cResult[1] = connectedAccount;
      cResult[2] = isEmbeddedFlow;
      cResult[3] = redirectUri;
      cResult[4] = scopes;
      cResult[5] = tmp4.applicationDetails;
      cResult[6] = closure_7;
      cResult[7] = tmp17;
      cResult[8] = tmp15;
      cResult[9] = ClockIcon;
      cResult[10] = formatToPlainStringResult;
      cResult[11] = tmp18;
      cResult[12] = tmp19;
      cResult[13] = tmp30;
      cResult[14] = tmp34;
      tmp13 = tmp34;
      tmp12 = tmp30;
      tmp11 = tmp19;
      tmp10 = tmp18;
      tmp9 = formatToPlainStringResult;
      tmp8 = ClockIcon;
      tmp7 = tmp15;
      tmp6 = tmp17;
      tmp5 = closure_7;
    }
  }
  let joined = null;
  if (null != redirectUri) {
    if (!isEmbeddedFlow) {
      try {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(redirectUri);
        const str = uRL.href;
        const parts = str.split("/");
        const substr = parts.slice(0, 3);
        joined = substr.join("/");
      } catch (err) {
        joined = redirectUri;
      }
    }
  }
  const applicationDetails = tmp4.applicationDetails;
  let tmp25 = null;
  if (null != joined) {
    const obj11 = { iconComponent: LinkIcon.LinkIcon, text: intl.format(intl5.t["5k5OKD"], obj12) };
    intl = intl5.intl;
    obj12 = { origin: joined };
    tmp25 = React3(closure_7, obj11);
  }
  cResult[17] = isEmbeddedFlow;
  cResult[18] = redirectUri;
  cResult[19] = tmp4.applicationDetails;
  cResult[20] = View;
  cResult[21] = applicationDetails;
  cResult[22] = tmp25;
  tmp19 = tmp25;
  tmp18 = applicationDetails;
  tmp17 = View;
}) : (function(arg0) {
  let application;
  let approximateGuildCount;
  let connectedAccount;
  let disclosures;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isEmbeddedFlow;
  let items;
  let obj10;
  let obj5;
  let redirectUri;
  let scopes;
  let tmp4Result;
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  const tmp = closure_6();
  let obj = SnowflakeUtilsDefault;
  const date = new Date(obj.extractTimestamp(application.id));
  let obj2 = scopes;
  let joined = null;
  const securityMessage = obj2.getSecurityMessage(scopes);
  if (null != redirectUri) {
    if (!isEmbeddedFlow) {
      try {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const uRL = new URL(redirectUri);
        const str = uRL.href;
        const parts = str.split("/");
        const substr = parts.slice(0, 3);
        joined = substr.join("/");
      } catch (err) {
        joined = redirectUri;
      }
    }
  }
  let obj3 = { style: tmp.applicationDetails, children: items };
  let tmp12 = null;
  if (null != joined) {
    let obj4 = { iconComponent: LinkIcon.LinkIcon, text: intl.format(intl5.t["5k5OKD"], obj5) };
    intl = intl5.intl;
    obj5 = { origin: joined };
    tmp12 = React3(closure_7, obj4);
  }
  items = [tmp12, , , , , , ];
  const obj6 = { iconComponent: LockIcon.LockIcon, text: tmp4Result.getApplicationDetailsText(application) };
  tmp4Result = Utils;
  items[1] = React3(closure_7, obj6);
  let tmp15Result = null;
  if (null != connectedAccount) {
    const obj7 = { iconComponent: HammerIcon.HammerIcon, text: intl2.string(intl5.t["8qui3M"]) };
    intl2 = intl5.intl;
    tmp15Result = React3(closure_7, obj7);
  }
  items[2] = tmp15Result;
  const obj8 = { iconComponent: ClockIcon2.ClockIcon, text: intl3.formatToPlainString(intl5.t["+1bjc8"], { date }) };
  intl3 = intl5.intl;
  items[3] = React3(closure_7, obj8);
  let tmp15Result2 = null;
  if (scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT)) {
    tmp15Result2 = null;
    if (null != approximateGuildCount) {
      const obj9 = { iconComponent: RobotIcon.RobotIcon, text: intl4.formatToPlainString(intl5.t.UHGHSP, obj10) };
      intl4 = intl5.intl;
      obj10 = { guildCount: approximateGuildCount };
      tmp15Result2 = React3(closure_7, obj9);
    }
  }
  items[4] = tmp15Result2;
  const obj11 = { iconComponent: ShieldIcon.ShieldIcon, text: securityMessage };
  items[5] = React3(closure_7, obj11);
  let mapped = null;
  if (null != disclosures) {
    mapped = disclosures.map((toFixed) => {
      let tmp4;
      const obj = disclosures;
      const textForDisclosure = obj.getTextForDisclosure(toFixed);
      if (disclosures.ApplicationDisclosure.IP_LOCATION === toFixed) {
        tmp4 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
        const obj2 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
      } else {
        tmp4 = null;
        if (disclosures.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
          tmp4 = { iconComponent: EmbedIcon.EmbedIcon };
          const obj3 = { iconComponent: EmbedIcon.EmbedIcon };
        }
      }
      let tmp5 = null;
      if (null != tmp4) {
        tmp5 = null;
        if (null != textForDisclosure) {
          const obj4 = { text: textForDisclosure };
          const merged = Object.assign(tmp4);
          tmp5 = closure_1_4(closure_1_7, obj4, toFixed.toFixed());
        }
      }
      return tmp5;
    });
  }
  items[6] = mapped;
  return hasOwnProperty(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let iconComponent;
  let items;
  let text;
  const obj = react2;
  const cResult = obj.c(10);
  ({ iconComponent, text } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === iconComponent) {
    let tmp5;
    if (cResult[1] === tmp4.entryIcon) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.entryText) {
      let tmp7;
      if (cResult[4] === text) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.entry) {
        if (cResult[7] === tmp5) {
          let tmp10;
          if (cResult[8] === tmp7) {
            tmp10 = cResult[9];
          }
          return tmp10;
        }
      }
      const obj2 = { style: tmp4.entry, children: items };
      items = [tmp5, tmp7];
      const tmp13 = hasOwnProperty(View, obj2);
      cResult[6] = tmp4.entry;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp4.entryText, children: text };
    const tmp9 = React3(Text_Text.Text, obj3);
    cResult[3] = tmp4.entryText;
    cResult[4] = text;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  let iconComponentResult = null;
  if (null != iconComponent) {
    const obj4 = { style: tmp4.entryIcon };
    iconComponentResult = iconComponent(obj4);
  }
  cResult[0] = iconComponent;
  cResult[1] = tmp4.entryIcon;
  cResult[2] = iconComponentResult;
  tmp5 = iconComponentResult;
}) : ((iconComponent) => {
  let items;
  iconComponent = iconComponent.iconComponent;
  const text = iconComponent.text;
  const tmp = closure_6();
  let iconComponentResult = null;
  const obj = { style: tmp.entry, children: items };
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  items = [iconComponentResult, ];
  const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: text };
  items[1] = React3(Text_Text.Text, obj3);
  return hasOwnProperty(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default tmp4;