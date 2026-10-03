// === Module 8943: ApplicationEducation ===

// Module 8943 (ApplicationEducation)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import FriendsIcon from "FriendsIcon" /* 4831 */;
import Text_Text from "Text/Text" /* 4886 */;
import SettingsIcon from "SettingsIcon" /* 6883 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8015 */;
import useIsSocialLayerParentApplicationDefault from "useIsSocialLayerParentApplication" /* 8725 */;
import GameControllerIcon from "GameControllerIcon" /* 8739 */;
import ChatSmileIcon from "ChatSmileIcon" /* 8944 */;
import AuthorizeFormSeparator from "AuthorizeFormSeparator" /* 8946 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MAX_FRIENDS = fn(1085).MAX_FRIENDS;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { applicationEducation: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 12 }, entryText: { flex: 1 }, entryIcon: null };
let size = { width: 20, height: 20, tintColor: nativeDefault.colors.TEXT_MUTED };
obj2.entryIcon = size;
let closure_8 = createStyles.createStyles(obj2);
fn(558);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ iconComponent, text } = arg0);
  const tmp4 = closure_8();
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
      const tmp13 = timestampProducer(View, obj2);
      cResult[6] = tmp4.entry;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { variant: "text-md/normal", style: tmp4.entryText, children: text };
    const tmp9 = hasOwnProperty(Text_Text.Text, obj3);
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
}) : ((children) => {
  const iconComponent = children.iconComponent;
  const tmp = closure_8();
  const obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  const items = [iconComponentResult, hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", style: tmp.entryText, children: children.text })];
  obj.children = items;
  return timestampProducer(View, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(43);
  ({ application, accountScopes } = arg0);
  const tmp4 = closure_8();
  const items = [];
  const tmp5 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    if (cResult[0] === application) {
      if (cResult[1] === tmp5) {
        if (cResult[3] !== tmp5) {
          const intl6 = util.intl;
          const formatToPlainString2 = intl6.formatToPlainString;
          let t = util.t;
          if (tmp5) {
            t = { maxFriends: MAX_FRIENDS };
            let formatToPlainString2Result = formatToPlainString2(t.z9peav, t);
          } else {
            const obj2 = { maxFriends: MAX_FRIENDS };
            formatToPlainString2Result = formatToPlainString2(t.WNKzo9, obj2);
          }
          cResult[3] = tmp5;
          cResult[4] = formatToPlainString2Result;
        } else {
          if (cResult[5] !== cResult[4]) {
            const obj3 = { iconComponent: FriendsIcon.FriendsIcon, text: tmp28 };
            cResult[5] = tmp28;
            cResult[6] = obj3;
            let tmp33 = obj3;
          } else {
            tmp33 = cResult[6];
          }
          if (cResult[7] !== tmp5) {
            const intl7 = util.intl;
            const string3 = intl7.string;
            let daY6xj = util.t;
            if (tmp5) {
              daY6xj = daY6xj.daY6xj;
              let string3Result = string3(daY6xj);
            } else {
              string3Result = string3(daY6xj.j7peBh);
            }
            cResult[7] = tmp5;
            cResult[8] = string3Result;
          } else {
            if (cResult[9] !== cResult[8]) {
              const obj4 = { iconComponent: ChatSmileIcon.ChatSmileIcon, text: tmp34 };
              cResult[9] = tmp34;
              cResult[10] = obj4;
              let tmp37 = obj4;
            } else {
              tmp37 = cResult[10];
            }
            if (cResult[11] !== tmp5) {
              const intl8 = util.intl;
              const string4 = intl8.string;
              let t1 = util.t;
              if (tmp5) {
                t1 = t1["/bdaNN"];
                let string4Result = string4(t1);
              } else {
                string4Result = string4(t1["feD3+i"]);
              }
              cResult[11] = tmp5;
              cResult[12] = string4Result;
            } else {
              if (cResult[13] !== cResult[12]) {
                const obj5 = { iconComponent: GameControllerIcon.GameControllerIcon, text: tmp38 };
                cResult[13] = tmp38;
                cResult[14] = obj5;
                let tmp42 = obj5;
              } else {
                tmp42 = cResult[14];
              }
              if (cResult[15] !== tmp5) {
                const intl9 = util.intl;
                const string5 = intl9.string;
                let mSqazC2 = util.t;
                if (tmp5) {
                  mSqazC2 = mSqazC2.mSqazC;
                  let string5Result = string5(mSqazC2);
                } else {
                  string5Result = string5(mSqazC2.YFFVM1);
                }
                cResult[15] = tmp5;
                cResult[16] = string5Result;
              } else {
                if (cResult[17] !== cResult[16]) {
                  const obj6 = { iconComponent: SettingsIcon.SettingsIcon, text: tmp43 };
                  cResult[17] = tmp43;
                  cResult[18] = obj6;
                  let tmp46 = obj6;
                } else {
                  tmp46 = cResult[18];
                }
                items.push(tmp33, tmp37, tmp42, tmp46);
              }
            }
          }
        }
      }
    }
    const intl5 = util.intl;
    if (tmp5) {
      const obj7 = { applicationName: application.name };
      let formatToPlainStringResult = intl5.formatToPlainString(util.t["3Mau0y"], obj7);
    } else {
      formatToPlainStringResult = intl5.string(util.t.ex4sMU);
    }
    cResult[0] = application;
    cResult[1] = tmp5;
    cResult[2] = formatToPlainStringResult;
  } else {
    if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      if (cResult[19] === application) {
        if (cResult[20] === tmp5) {
          if (cResult[22] !== tmp5) {
            const intl2 = util.intl;
            const formatToPlainString = intl2.formatToPlainString;
            let t2 = util.t;
            if (tmp5) {
              t2 = { maxFriends: MAX_FRIENDS };
              let formatToPlainStringResult1 = formatToPlainString(t2.z9peav, t2);
            } else {
              const obj8 = { maxFriends: MAX_FRIENDS };
              formatToPlainStringResult1 = formatToPlainString(t2.WNKzo9, obj8);
            }
            cResult[22] = tmp5;
            cResult[23] = formatToPlainStringResult1;
          } else {
            if (cResult[24] !== cResult[23]) {
              const obj9 = { iconComponent: FriendsIcon.FriendsIcon, text: tmp9 };
              cResult[24] = tmp9;
              cResult[25] = obj9;
              let tmp14 = obj9;
            } else {
              tmp14 = cResult[25];
            }
            if (cResult[26] !== tmp5) {
              const intl3 = util.intl;
              const string = intl3.string;
              let t3 = util.t;
              if (tmp5) {
                t3 = t3["/bdaNN"];
                let stringResult = string(t3);
              } else {
                stringResult = string(t3["feD3+i"]);
              }
              cResult[26] = tmp5;
              cResult[27] = stringResult;
            } else {
              if (cResult[28] !== cResult[27]) {
                const obj10 = { iconComponent: GameControllerIcon.GameControllerIcon, text: tmp15 };
                cResult[28] = tmp15;
                cResult[29] = obj10;
                let tmp19 = obj10;
              } else {
                tmp19 = cResult[29];
              }
              if (cResult[30] !== tmp5) {
                const intl4 = util.intl;
                const string2 = intl4.string;
                let mSqazC = util.t;
                if (tmp5) {
                  mSqazC = mSqazC.mSqazC;
                  let string2Result = string2(mSqazC);
                } else {
                  string2Result = string2(mSqazC.YFFVM1);
                }
                cResult[30] = tmp5;
                cResult[31] = string2Result;
              } else {
                if (cResult[32] !== cResult[31]) {
                  const obj11 = { iconComponent: SettingsIcon.SettingsIcon, text: tmp20 };
                  cResult[32] = tmp20;
                  cResult[33] = obj11;
                  let tmp23 = obj11;
                } else {
                  tmp23 = cResult[33];
                }
                items.push(tmp14, tmp19, tmp23);
              }
            }
          }
        }
      }
      const intl = util.intl;
      if (tmp5) {
        const obj12 = { applicationName: application.name };
        let formatToPlainStringResult2 = intl.formatToPlainString(util.t["3Mau0y"], obj12);
      } else {
        formatToPlainStringResult2 = intl.string(util.t.ex4sMU);
      }
      cResult[19] = application;
      cResult[20] = tmp5;
      cResult[21] = formatToPlainStringResult2;
    }
    if (0 === items.length) {
      return null;
    } else {
      if (cResult[34] !== tmp6) {
        let tmp56 = null;
        if (null != tmp6) {
          tmp56 = null;
          if (tmp6.length > 0) {
            const obj13 = { variant: "text-sm/normal", color: "text-default", children: tmp6 };
            tmp56 = hasOwnProperty(Text_Text.Text, obj13);
          }
        }
        cResult[34] = tmp6;
        cResult[35] = tmp56;
        let tmp54 = tmp56;
      } else {
        tmp54 = cResult[35];
      }
      const mapped = items.map((iconComponent, index) => closure_1_5(closure_1_9, { iconComponent: iconComponent.iconComponent, text: iconComponent.text }, index));
      if (cResult[36] === tmp4.applicationEducation) {
        if (cResult[37] === tmp54) {
          if (cResult[38] === mapped) {
            let tmp59 = cResult[39];
          }
          const _Symbol = Symbol;
          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp66 = hasOwnProperty(AuthorizeFormSeparator.AuthorizeFormSeparator, {});
            cResult[40] = tmp66;
            let tmp64 = tmp66;
          } else {
            tmp64 = cResult[40];
          }
          if (cResult[41] !== tmp59) {
            const obj14 = { children: null };
            const items1 = [tmp59, tmp64];
            obj14.children = items1;
            const tmp70 = timestampProducer(React5, obj14);
            cResult[41] = tmp59;
            cResult[42] = tmp70;
            let tmp67 = tmp70;
          } else {
            tmp67 = cResult[42];
          }
          return tmp67;
        }
      }
      const obj15 = { style: tmp4.applicationEducation, children: null };
      const items2 = [tmp54, mapped];
      obj15.children = items2;
      const tmp62 = timestampProducer(View, obj15);
      cResult[36] = tmp4.applicationEducation;
      cResult[37] = tmp54;
      cResult[38] = mapped;
      cResult[39] = tmp62;
      tmp59 = tmp62;
    }
  }
}) : ((arg0) => {
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp3 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    const intl5 = util.intl;
    if (tmp3) {
      const obj2 = { applicationName: application.name };
      let formatToPlainStringResult = intl5.formatToPlainString(util.t["3Mau0y"], obj2);
    } else {
      formatToPlainStringResult = intl5.string(util.t.ex4sMU);
    }
    const obj3 = { iconComponent: FriendsIcon.FriendsIcon, text: null };
    const intl6 = util.intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = util.t;
    if (tmp3) {
      const obj4 = { maxFriends: MAX_FRIENDS };
      let formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj4);
    } else {
      const obj5 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj5);
    }
    obj3.text = formatToPlainString2Result;
    const obj6 = { iconComponent: ChatSmileIcon.ChatSmileIcon, text: null };
    const intl7 = util.intl;
    const string3 = intl7.string;
    const t5 = util.t;
    if (tmp3) {
      let string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    obj6.text = string3Result;
    const obj7 = { iconComponent: GameControllerIcon.GameControllerIcon, text: null };
    const intl8 = util.intl;
    const string4 = intl8.string;
    const t6 = util.t;
    if (tmp3) {
      let string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    obj7.text = string4Result;
    let obj8 = { iconComponent: SettingsIcon.SettingsIcon, text: null };
    const intl9 = util.intl;
    const string5 = intl9.string;
    let mSqazC = util.t;
    if (tmp3) {
      mSqazC = mSqazC.mSqazC;
      let string5Result = string5(mSqazC);
    } else {
      string5Result = string5(mSqazC.YFFVM1);
    }
    obj8.text = string5Result;
    obj8 = items.push(obj3, obj6, obj7, obj8);
  } else {
    if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      const intl = util.intl;
      if (tmp3) {
        const obj = { applicationName: application.name };
        let formatToPlainStringResult1 = intl.formatToPlainString(util.t["3Mau0y"], obj);
      } else {
        formatToPlainStringResult1 = intl.string(util.t.ex4sMU);
      }
      const obj9 = { iconComponent: FriendsIcon.FriendsIcon, text: null };
      const intl2 = util.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = util.t;
      if (tmp3) {
        const obj10 = { maxFriends: MAX_FRIENDS };
        let formatToPlainStringResult2 = formatToPlainString(t.z9peav, obj10);
      } else {
        const obj11 = { maxFriends: MAX_FRIENDS };
        formatToPlainStringResult2 = formatToPlainString(t.WNKzo9, obj11);
      }
      obj9.text = formatToPlainStringResult2;
      const obj12 = { iconComponent: GameControllerIcon.GameControllerIcon, text: null };
      const intl3 = util.intl;
      const string = intl3.string;
      const t2 = util.t;
      if (tmp3) {
        let stringResult = string(t2["/bdaNN"]);
      } else {
        stringResult = string(t2["feD3+i"]);
      }
      obj12.text = stringResult;
      const obj13 = { iconComponent: SettingsIcon.SettingsIcon, text: null };
      const intl4 = util.intl;
      const string2 = intl4.string;
      const t3 = util.t;
      if (tmp3) {
        let string2Result = string2(t3.mSqazC);
      } else {
        string2Result = string2(t3.YFFVM1);
      }
      obj13.text = string2Result;
      items.push(obj9, obj12, obj13);
    }
    let tmp30Result = null;
    if (0 !== items.length) {
      const obj14 = { style: tmp.applicationEducation, children: null };
      let tmp27 = null;
      if (null != arr2) {
        tmp27 = null;
        if (arr2.length > 0) {
          const obj15 = { variant: "text-sm/normal", color: "text-default", children: arr2 };
          tmp27 = hasOwnProperty(Text_Text.Text, obj15);
        }
      }
      const obj16 = { children: null };
      const items1 = [tmp27, items.map((iconComponent, index) => closure_1_5(closure_1_9, { iconComponent: iconComponent.iconComponent, text: iconComponent.text }, index))];
      obj14.children = items1;
      const items2 = [timestampProducer(View, obj14), hasOwnProperty(AuthorizeFormSeparator.AuthorizeFormSeparator, {})];
      obj16.children = items2;
      tmp30Result = timestampProducer(React5, obj16);
    }
    return tmp30Result;
  }
  tmp = closure_8();
});