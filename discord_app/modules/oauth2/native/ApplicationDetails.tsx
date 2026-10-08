// === Module 12886: ApplicationDetails ===

// Module 12886 (ApplicationDetails)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import LinkIcon from "LinkIcon" /* 5039 */;
import ClockIcon2 from "ClockIcon" /* 5049 */;
import Text_Text from "Text/Text" /* 5086 */;
import LockIcon from "LockIcon" /* 8198 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8433 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9068 */;
import scopes from "scopes" /* 9132 */;
import disclosures from "disclosures" /* 9134 */;
import Utils from "Utils" /* 9136 */;
import ShieldIcon from "ShieldIcon" /* 10386 */;
import HammerIcon from "HammerIcon" /* 11466 */;
import RobotIcon from "RobotIcon" /* 12825 */;
import EmbedIcon from "EmbedIcon" /* 12887 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 }, entryIcon: null };
let size = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_MUTED };
obj2.entryIcon = size;
let closure_6 = createStyles.createStyles(obj2);
fn(558);
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationDetailsEntry(arg0) {
  const cResult = c.c(10);
  ({ iconComponent, text } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === iconComponent) {
    if (cResult[1] === tmp4.entryIcon) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.entryText) {
      if (cResult[4] === text) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.entry) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            let tmp10 = cResult[9];
          }
          return tmp10;
        }
      }
      const obj2 = { style: tmp4.entry, children: null };
      const items = [tmp5, tmp7];
      obj2.children = items;
      const tmp13 = hasOwnProperty(View, obj2);
      cResult[6] = tmp4.entry;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp4.entryText, children: text };
    const tmp9 = React4(Text_Text.Text, obj3);
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
}) : (function ApplicationDetailsEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = closure_6();
  const obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  const items = [iconComponentResult, React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: children.text })];
  obj.children = items;
  return hasOwnProperty(View, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ApplicationDetails(arg0) {
  const cResult = c.c(50);
  ({ application, scopes, redirectUri, approximateGuildCount, isEmbeddedFlow, disclosures, connectedAccount } = arg0);
  let num = closure_6();
  if (cResult[0] === application) {
    if (cResult[1] === connectedAccount) {
      if (cResult[2] === isEmbeddedFlow) {
        if (cResult[3] === redirectUri) {
          if (cResult[4] === scopes) {
            if (cResult[5] === num.applicationDetails) {
              if (cResult[29] === cResult[6]) {
                if (cResult[30] === tmp8) {
                  if (cResult[31] === tmp9) {
                    let tmp51 = cResult[32];
                  }
                  if (cResult[33] === approximateGuildCount) {
                    if (cResult[34] === scopes) {
                      let tmp54 = cResult[35];
                    }
                    if (cResult[36] !== tmp7) {
                      let obj3 = { iconComponent: ShieldIcon.ShieldIcon, text: tmp7 };
                      const tmp62 = React4(closure_7, obj3);
                      cResult[36] = tmp7;
                      cResult[37] = tmp62;
                      let tmp59 = tmp62;
                    } else {
                      tmp59 = cResult[37];
                    }
                    if (cResult[38] !== disclosures) {
                      let mapped = null;
                      if (null != disclosures) {
                        mapped = disclosures.map((toFixed) => {
                          const textForDisclosure = disclosures.getTextForDisclosure(toFixed);
                          if (disclosures.ApplicationDisclosure.IP_LOCATION === toFixed) {
                            const obj2 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
                            let tmp4 = obj2;
                          } else {
                            tmp4 = null;
                            if (disclosures.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
                              const obj3 = { iconComponent: EmbedIcon.EmbedIcon };
                              tmp4 = obj3;
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
                      let tmp63 = mapped;
                    } else {
                      tmp63 = cResult[39];
                    }
                    if (cResult[40] === tmp6) {
                      if (cResult[41] === tmp63) {
                        if (cResult[42] === tmp10) {
                          if (cResult[43] === tmp11) {
                            if (cResult[44] === tmp12) {
                              if (cResult[45] === tmp13) {
                                if (cResult[46] === tmp51) {
                                  if (cResult[47] === tmp54) {
                                    if (cResult[48] === tmp59) {
                                      let tmp65 = cResult[49];
                                    }
                                    return tmp65;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    let obj4 = { style: tmp10, children: null };
                    const items = [tmp11, tmp12, tmp13, tmp51, tmp54, tmp59, tmp63];
                    obj4.children = items;
                    const tmp67 = hasOwnProperty(tmp6, obj4);
                    cResult[40] = tmp6;
                    cResult[41] = tmp63;
                    cResult[42] = tmp10;
                    cResult[43] = tmp11;
                    cResult[44] = tmp12;
                    cResult[45] = tmp13;
                    cResult[46] = tmp51;
                    cResult[47] = tmp54;
                    cResult[48] = tmp59;
                    cResult[49] = tmp67;
                    tmp65 = tmp67;
                  }
                  let tmp56 = null;
                  if (scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT)) {
                    tmp56 = null;
                    if (null != approximateGuildCount) {
                      const obj5 = { iconComponent: RobotIcon.RobotIcon, text: null };
                      const intl4 = util.intl;
                      const obj6 = { guildCount: approximateGuildCount };
                      obj5.text = intl4.formatToPlainString(util.t.UHGHSP, obj6);
                      tmp56 = React4(closure_7, obj5);
                    }
                  }
                  cResult[33] = approximateGuildCount;
                  cResult[34] = scopes;
                  cResult[35] = tmp56;
                  tmp54 = tmp56;
                }
              }
              const obj7 = { iconComponent: cResult[9], text: cResult[10] };
              const tmp53 = React4(cResult[6], obj7);
              cResult[29] = cResult[6];
              cResult[30] = cResult[9];
              cResult[31] = cResult[10];
              cResult[32] = tmp53;
              tmp51 = tmp53;
            }
          }
        }
      }
    }
  }
  let date = new Date(SnowflakeUtilsDefault.extractTimestamp(application.id));
  if (cResult[15] !== scopes) {
    const securityMessage = scopes.getSecurityMessage(scopes);
    cResult[15] = scopes;
    cResult[16] = securityMessage;
    let tmp15 = securityMessage;
    const tmp2Result = scopes;
  } else {
    tmp15 = cResult[16];
  }
  if (cResult[17] === isEmbeddedFlow) {
    if (cResult[18] === redirectUri) {
      if (cResult[19] === num.applicationDetails) {
        let tmp17 = cResult[20];
        let tmp18 = cResult[21];
        let tmp19 = cResult[22];
      }
      if (cResult[23] !== application) {
        const applicationDetailsText = Utils.getApplicationDetailsText(application);
        cResult[23] = application;
        cResult[24] = applicationDetailsText;
        let tmp30 = applicationDetailsText;
        const tmp2Result2 = Utils;
      } else {
        tmp30 = cResult[24];
      }
      if (cResult[25] !== tmp30) {
        const obj8 = { iconComponent: LockIcon.LockIcon, text: tmp30 };
        const tmp35 = React4(closure_7, obj8);
        cResult[25] = tmp30;
        cResult[26] = tmp35;
        let tmp32 = tmp35;
      } else {
        tmp32 = cResult[26];
      }
      if (cResult[27] !== connectedAccount) {
        let tmp37 = null;
        if (null != connectedAccount) {
          const obj9 = { iconComponent: HammerIcon.HammerIcon, text: null };
          const intl2 = util.intl;
          obj9.text = intl2.string(util.t["8qui3M"]);
          tmp37 = React4(closure_7, obj9);
        }
        cResult[27] = connectedAccount;
        cResult[28] = tmp37;
        let tmp36 = tmp37;
      } else {
        tmp36 = cResult[28];
      }
      date = closure_7;
      const ClockIcon = ClockIcon2.ClockIcon;
      const intl3 = util.intl;
      const obj10 = { date };
      const formatToPlainStringResult = intl3.formatToPlainString(util.t["+1bjc8"], obj10);
      cResult[0] = application;
      cResult[1] = connectedAccount;
      cResult[2] = isEmbeddedFlow;
      cResult[3] = redirectUri;
      cResult[4] = scopes;
      cResult[5] = num.applicationDetails;
      cResult[6] = closure_7;
      cResult[7] = tmp17;
      cResult[8] = tmp15;
      cResult[9] = ClockIcon;
      cResult[10] = formatToPlainStringResult;
      cResult[11] = tmp18;
      cResult[12] = tmp19;
      cResult[13] = tmp32;
      num = 14;
      cResult[14] = tmp36;
    }
  }
  let joined = null;
  if (null != redirectUri) {
    if (!isEmbeddedFlow) {
      try {
        const _URL = URL;
        const uRL = new URL(redirectUri);
        const parts = uRL.href.split("/");
        const substr = parts.slice(0, 3);
        joined = substr.join("/");
      } catch (err) {
        joined = tmp;
      }
    }
  }
  const applicationDetails = num.applicationDetails;
  let tmp27 = null;
  if (null != joined) {
    const obj11 = { iconComponent: LinkIcon.LinkIcon, text: null };
    const intl = util.intl;
    const obj12 = { origin: joined };
    obj11.text = intl.format(util.t["5k5OKD"], obj12);
    tmp27 = React4(closure_7, obj11);
  }
  cResult[17] = isEmbeddedFlow;
  cResult[18] = redirectUri;
  cResult[19] = num.applicationDetails;
  cResult[20] = View;
  cResult[21] = applicationDetails;
  cResult[22] = tmp27;
  tmp19 = tmp27;
  tmp18 = applicationDetails;
  tmp17 = View;
}) : (function ApplicationDetails(arg0) {
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  const tmp2 = closure_6();
  const date = new Date(SnowflakeUtilsDefault.extractTimestamp(application.id));
  let joined = null;
  const securityMessage = scopes.getSecurityMessage(scopes);
  if (null != redirectUri) {
    if (!isEmbeddedFlow) {
      try {
        const _URL = URL;
        const uRL = new URL(redirectUri);
        const parts = uRL.href.split("/");
        const substr = parts.slice(0, 3);
        joined = substr.join("/");
      } catch (err) {
        joined = tmp;
      }
    }
  }
  let obj3 = { style: tmp2.applicationDetails, children: null };
  let tmp15 = null;
  if (null != joined) {
    let obj4 = { iconComponent: LinkIcon.LinkIcon, text: null };
    const intl = util.intl;
    const obj5 = { origin: joined };
    obj4.text = intl.format(util.t["5k5OKD"], obj5);
    tmp15 = React4(closure_7, obj4);
  }
  const items = [tmp15, , , , , , ];
  const obj6 = { iconComponent: LockIcon.LockIcon, text: null };
  obj6.text = Utils.getApplicationDetailsText(application);
  items[1] = React4(closure_7, obj6);
  let tmp18Result = null;
  if (null != connectedAccount) {
    const obj7 = { iconComponent: HammerIcon.HammerIcon, text: null };
    const intl2 = util.intl;
    obj7.text = intl2.string(util.t["8qui3M"]);
    tmp18Result = React4(closure_7, obj7);
  }
  items[2] = tmp18Result;
  const obj8 = { iconComponent: ClockIcon2.ClockIcon, text: null };
  const intl3 = util.intl;
  obj8.text = intl3.formatToPlainString(util.t["+1bjc8"], { date });
  items[3] = React4(closure_7, obj8);
  let tmp18Result2 = null;
  if (scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT)) {
    tmp18Result2 = null;
    if (null != approximateGuildCount) {
      const obj9 = { iconComponent: RobotIcon.RobotIcon, text: null };
      const intl4 = util.intl;
      const obj10 = { guildCount: approximateGuildCount };
      obj9.text = intl4.formatToPlainString(util.t.UHGHSP, obj10);
      tmp18Result2 = React4(closure_7, obj9);
    }
  }
  items[4] = tmp18Result2;
  const tmp5Result = Utils;
  items[5] = React4(closure_7, { iconComponent: ShieldIcon.ShieldIcon, text: securityMessage });
  let mapped = null;
  if (null != disclosures) {
    mapped = disclosures.map((toFixed) => {
      const textForDisclosure = disclosures.getTextForDisclosure(toFixed);
      if (disclosures.ApplicationDisclosure.IP_LOCATION === toFixed) {
        const obj2 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
        let tmp4 = obj2;
      } else {
        tmp4 = null;
        if (disclosures.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
          const obj3 = { iconComponent: EmbedIcon.EmbedIcon };
          tmp4 = obj3;
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
  obj3.children = items;
  return hasOwnProperty(View, obj3);
});