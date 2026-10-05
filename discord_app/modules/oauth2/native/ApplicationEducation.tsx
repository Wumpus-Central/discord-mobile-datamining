// === Module 8943: ApplicationEducation ===

// Module 8943 (ApplicationEducation)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl10 from "intl" /* 1126 */;
import FriendsIcon from "FriendsIcon" /* 4831 */;
import Text_Text from "Text/Text" /* 4886 */;
import SettingsIcon from "SettingsIcon" /* 6883 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8015 */;
import useIsSocialLayerParentApplicationDefault from "useIsSocialLayerParentApplication" /* 8725 */;
import GameControllerIcon from "GameControllerIcon" /* 8739 */;
import ChatSmileIcon from "ChatSmileIcon" /* 8944 */;
import AuthorizeFormSeparator from "AuthorizeFormSeparator" /* 8946 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
const MAX_FRIENDS = Constants.MAX_FRIENDS;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let obj = { applicationEducation: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 12 }, entryText: { flex: 1 }, entryIcon: size };
size = { width: 20, height: 20, tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accountScopes;
  let application;
  let arr2;
  let items1;
  let items2;
  let obj = react2;
  const cResult = obj.c(43);
  ({ application, accountScopes } = arg0);
  const tmp4 = closure_8();
  const items = [];
  const tmp5 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    let formatToPlainStringResult;
    if (cResult[0] === application) {
      let tmp20;
      let tmp22;
      let tmp26;
      let tmp27;
      let tmp29;
      let tmp30;
      let tmp32;
      let tmp33;
      let tmp35;
      if (cResult[1] === tmp5) {
        tmp20 = cResult[2];
      }
      if (cResult[3] !== tmp5) {
        let formatToPlainString2Result;
        const intl6 = intl10.intl;
        const formatToPlainString2 = intl6.formatToPlainString;
        const t4 = intl10.t;
        if (tmp5) {
          const obj2 = { maxFriends: MAX_FRIENDS };
          formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj2);
        } else {
          const obj3 = { maxFriends: MAX_FRIENDS };
          formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj3);
        }
        cResult[3] = tmp5;
        cResult[4] = formatToPlainString2Result;
        tmp22 = formatToPlainString2Result;
      } else {
        tmp22 = cResult[4];
      }
      if (cResult[5] !== tmp22) {
        const obj4 = { iconComponent: FriendsIcon.FriendsIcon, text: tmp22 };
        cResult[5] = tmp22;
        cResult[6] = obj4;
        tmp26 = obj4;
      } else {
        tmp26 = cResult[6];
      }
      if (cResult[7] !== tmp5) {
        let string3Result;
        const intl7 = intl10.intl;
        const string3 = intl7.string;
        const t5 = intl10.t;
        if (tmp5) {
          string3Result = string3(t5.daY6xj);
        } else {
          string3Result = string3(t5.j7peBh);
        }
        cResult[7] = tmp5;
        cResult[8] = string3Result;
        tmp27 = string3Result;
      } else {
        tmp27 = cResult[8];
      }
      if (cResult[9] !== tmp27) {
        const obj5 = { iconComponent: ChatSmileIcon.ChatSmileIcon, text: tmp27 };
        cResult[9] = tmp27;
        cResult[10] = obj5;
        tmp29 = obj5;
      } else {
        tmp29 = cResult[10];
      }
      if (cResult[11] !== tmp5) {
        let string4Result;
        const intl8 = intl10.intl;
        const string4 = intl8.string;
        const t6 = intl10.t;
        if (tmp5) {
          string4Result = string4(t6["/bdaNN"]);
        } else {
          string4Result = string4(t6["feD3+i"]);
        }
        cResult[11] = tmp5;
        cResult[12] = string4Result;
        tmp30 = string4Result;
      } else {
        tmp30 = cResult[12];
      }
      if (cResult[13] !== tmp30) {
        const obj6 = { iconComponent: GameControllerIcon.GameControllerIcon, text: tmp30 };
        cResult[13] = tmp30;
        cResult[14] = obj6;
        tmp32 = obj6;
      } else {
        tmp32 = cResult[14];
      }
      if (cResult[15] !== tmp5) {
        let string5Result;
        const intl9 = intl10.intl;
        const string5 = intl9.string;
        const t7 = intl10.t;
        if (tmp5) {
          string5Result = string5(t7.mSqazC);
        } else {
          string5Result = string5(t7.YFFVM1);
        }
        cResult[15] = tmp5;
        cResult[16] = string5Result;
        tmp33 = string5Result;
      } else {
        tmp33 = cResult[16];
      }
      if (cResult[17] !== tmp33) {
        const obj7 = { iconComponent: SettingsIcon.SettingsIcon, text: tmp33 };
        cResult[17] = tmp33;
        cResult[18] = obj7;
        tmp35 = obj7;
      } else {
        tmp35 = cResult[18];
      }
      items.push(tmp26, tmp29, tmp32, tmp35);
      arr2 = tmp20;
    }
    const intl5 = intl10.intl;
    if (tmp5) {
      const obj8 = { applicationName: application.name };
      formatToPlainStringResult = intl5.formatToPlainString(intl10.t["3Mau0y"], obj8);
    } else {
      formatToPlainStringResult = intl5.string(intl10.t.ex4sMU);
    }
    cResult[0] = application;
    cResult[1] = tmp5;
    cResult[2] = formatToPlainStringResult;
    tmp20 = formatToPlainStringResult;
  } else if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
    let formatToPlainStringResult2;
    if (cResult[19] === application) {
      let tmp6;
      let tmp8;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp18;
      if (cResult[20] === tmp5) {
        tmp6 = cResult[21];
      }
      if (cResult[22] !== tmp5) {
        let formatToPlainStringResult1;
        const intl2 = intl10.intl;
        const formatToPlainString = intl2.formatToPlainString;
        const t = intl10.t;
        if (tmp5) {
          const obj9 = { maxFriends: MAX_FRIENDS };
          formatToPlainStringResult1 = formatToPlainString(t.z9peav, obj9);
        } else {
          const obj10 = { maxFriends: MAX_FRIENDS };
          formatToPlainStringResult1 = formatToPlainString(t.WNKzo9, obj10);
        }
        cResult[22] = tmp5;
        cResult[23] = formatToPlainStringResult1;
        tmp8 = formatToPlainStringResult1;
      } else {
        tmp8 = cResult[23];
      }
      if (cResult[24] !== tmp8) {
        const obj11 = { iconComponent: FriendsIcon.FriendsIcon, text: tmp8 };
        cResult[24] = tmp8;
        cResult[25] = obj11;
        tmp12 = obj11;
      } else {
        tmp12 = cResult[25];
      }
      if (cResult[26] !== tmp5) {
        let stringResult;
        const intl3 = intl10.intl;
        const string = intl3.string;
        const t2 = intl10.t;
        if (tmp5) {
          stringResult = string(t2["/bdaNN"]);
        } else {
          stringResult = string(t2["feD3+i"]);
        }
        cResult[26] = tmp5;
        cResult[27] = stringResult;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[27];
      }
      if (cResult[28] !== tmp13) {
        const obj12 = { iconComponent: GameControllerIcon.GameControllerIcon, text: tmp13 };
        cResult[28] = tmp13;
        cResult[29] = obj12;
        tmp15 = obj12;
      } else {
        tmp15 = cResult[29];
      }
      if (cResult[30] !== tmp5) {
        let string2Result;
        const intl4 = intl10.intl;
        const string2 = intl4.string;
        const t3 = intl10.t;
        if (tmp5) {
          string2Result = string2(t3.mSqazC);
        } else {
          string2Result = string2(t3.YFFVM1);
        }
        cResult[30] = tmp5;
        cResult[31] = string2Result;
        tmp16 = string2Result;
      } else {
        tmp16 = cResult[31];
      }
      if (cResult[32] !== tmp16) {
        const obj13 = { iconComponent: SettingsIcon.SettingsIcon, text: tmp16 };
        cResult[32] = tmp16;
        cResult[33] = obj13;
        tmp18 = obj13;
      } else {
        tmp18 = cResult[33];
      }
      items.push(tmp12, tmp15, tmp18);
      arr2 = tmp6;
    }
    const intl = intl10.intl;
    if (tmp5) {
      const obj14 = { applicationName: application.name };
      formatToPlainStringResult2 = intl.formatToPlainString(intl10.t["3Mau0y"], obj14);
    } else {
      formatToPlainStringResult2 = intl.string(intl10.t.ex4sMU);
    }
    cResult[19] = application;
    cResult[20] = tmp5;
    cResult[21] = formatToPlainStringResult2;
    tmp6 = formatToPlainStringResult2;
  }
  if (0 === items.length) {
    return null;
  } else {
    let tmp42;
    const applicationEducation = tmp4.applicationEducation;
    if (cResult[34] !== arr2) {
      let tmp44 = null;
      if (null != arr2) {
        tmp44 = null;
        if (arr2.length > 0) {
          const obj15 = { variant: "text-sm/normal", color: "text-default", children: arr2 };
          tmp44 = hasOwnProperty(Text_Text.Text, obj15);
        }
      }
      cResult[34] = arr2;
      cResult[35] = tmp44;
      tmp42 = tmp44;
    } else {
      tmp42 = cResult[35];
    }
    const mapped = items.map((iconComponent, index) => {
      const obj = { iconComponent: iconComponent.iconComponent, text: iconComponent.text };
      return closure_1_5(closure_1_9, obj, index);
    });
    if (cResult[36] === tmp4.applicationEducation) {
      if (cResult[37] === tmp42) {
        let tmp47;
        let tmp52;
        let tmp55;
        if (cResult[38] === mapped) {
          tmp47 = cResult[39];
        }
        const _Symbol = Symbol;
        if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp54 = hasOwnProperty(AuthorizeFormSeparator.AuthorizeFormSeparator, {});
          cResult[40] = tmp54;
          tmp52 = tmp54;
        } else {
          tmp52 = cResult[40];
        }
        if (cResult[41] !== tmp47) {
          const obj16 = { children: items1 };
          items1 = [tmp47, tmp52];
          const tmp58 = metroRequire(metroImportDefault, obj16);
          cResult[41] = tmp47;
          cResult[42] = tmp58;
          tmp55 = tmp58;
        } else {
          tmp55 = cResult[42];
        }
        return tmp55;
      }
    }
    const obj17 = { style: applicationEducation, children: items2 };
    items2 = [tmp42, mapped];
    const tmp50 = metroRequire(View, obj17);
    cResult[36] = tmp4.applicationEducation;
    cResult[37] = tmp42;
    cResult[38] = mapped;
    cResult[39] = tmp50;
    tmp47 = tmp50;
  }
}) : ((arg0) => {
  let accountScopes;
  let application;
  let arr2;
  let formatToPlainString2Result;
  let formatToPlainStringResult2;
  let items1;
  let items2;
  let string2Result;
  let string3Result;
  let string4Result;
  let string5Result;
  let stringResult;
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp = closure_8();
  const tmp3 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    let formatToPlainStringResult;
    const intl5 = intl10.intl;
    if (tmp3) {
      const obj2 = { applicationName: application.name };
      formatToPlainStringResult = intl5.formatToPlainString(intl10.t["3Mau0y"], obj2);
    } else {
      formatToPlainStringResult = intl5.string(intl10.t.ex4sMU);
    }
    const push2 = items.push;
    const obj3 = { iconComponent: FriendsIcon.FriendsIcon, text: formatToPlainString2Result };
    const intl6 = intl10.intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = intl10.t;
    if (tmp3) {
      const obj4 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj4);
    } else {
      const obj5 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj5);
    }
    const obj6 = { iconComponent: ChatSmileIcon.ChatSmileIcon, text: string3Result };
    const intl7 = intl10.intl;
    const string3 = intl7.string;
    const t5 = intl10.t;
    if (tmp3) {
      string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    const obj7 = { iconComponent: GameControllerIcon.GameControllerIcon, text: string4Result };
    const intl8 = intl10.intl;
    const string4 = intl8.string;
    const t6 = intl10.t;
    if (tmp3) {
      string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    const obj8 = { iconComponent: SettingsIcon.SettingsIcon, text: string5Result };
    const intl9 = intl10.intl;
    const string5 = intl9.string;
    const t7 = intl10.t;
    if (tmp3) {
      string5Result = string5(t7.mSqazC);
    } else {
      string5Result = string5(t7.YFFVM1);
    }
    push2(obj3, obj6, obj7, obj8);
    arr2 = formatToPlainStringResult;
  } else if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
    let formatToPlainStringResult1;
    const intl = intl10.intl;
    if (tmp3) {
      let obj = { applicationName: application.name };
      formatToPlainStringResult1 = intl.formatToPlainString(intl10.t["3Mau0y"], obj);
    } else {
      formatToPlainStringResult1 = intl.string(intl10.t.ex4sMU);
    }
    const push = items.push;
    const obj9 = { iconComponent: FriendsIcon.FriendsIcon, text: formatToPlainStringResult2 };
    const intl2 = intl10.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = intl10.t;
    if (tmp3) {
      const obj10 = { maxFriends: MAX_FRIENDS };
      formatToPlainStringResult2 = formatToPlainString(t.z9peav, obj10);
    } else {
      const obj11 = { maxFriends: MAX_FRIENDS };
      formatToPlainStringResult2 = formatToPlainString(t.WNKzo9, obj11);
    }
    const obj12 = { iconComponent: GameControllerIcon.GameControllerIcon, text: stringResult };
    const intl3 = intl10.intl;
    const string = intl3.string;
    const t2 = intl10.t;
    if (tmp3) {
      stringResult = string(t2["/bdaNN"]);
    } else {
      stringResult = string(t2["feD3+i"]);
    }
    const obj13 = { iconComponent: SettingsIcon.SettingsIcon, text: string2Result };
    const intl4 = intl10.intl;
    const string2 = intl4.string;
    const t3 = intl10.t;
    if (tmp3) {
      string2Result = string2(t3.mSqazC);
    } else {
      string2Result = string2(t3.YFFVM1);
    }
    push(obj9, obj12, obj13);
    arr2 = formatToPlainStringResult1;
  }
  let tmp29Result = null;
  if (0 !== items.length) {
    let tmp26 = null;
    const obj14 = { style: tmp.applicationEducation, children: items1 };
    if (null != arr2) {
      tmp26 = null;
      if (arr2.length > 0) {
        const obj15 = { variant: "text-sm/normal", color: "text-default", children: arr2 };
        tmp26 = hasOwnProperty(Text_Text.Text, obj15);
      }
    }
    const obj16 = { children: items2 };
    items1 = [
      tmp26,
      items.map((iconComponent, index) => {
          const obj = { iconComponent: iconComponent.iconComponent, text: iconComponent.text };
          return closure_1_5(closure_1_9, obj, index);
        })
    ];
    items2 = [metroRequire(View, obj14), hasOwnProperty(AuthorizeFormSeparator.AuthorizeFormSeparator, {})];
    tmp29Result = metroRequire(metroImportDefault, obj16);
  }
  return tmp29Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let iconComponent;
  let items;
  let text;
  const obj = react2;
  const cResult = obj.c(10);
  ({ iconComponent, text } = arg0);
  const tmp4 = closure_8();
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
      const tmp13 = metroRequire(View, obj2);
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
}) : ((iconComponent) => {
  let items;
  iconComponent = iconComponent.iconComponent;
  const text = iconComponent.text;
  const tmp = closure_8();
  let iconComponentResult = null;
  const obj = { style: tmp.entry, children: items };
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  items = [iconComponentResult, ];
  const obj3 = { variant: "text-md/normal", style: tmp.entryText, children: text };
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  return metroRequire(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default tmp4;