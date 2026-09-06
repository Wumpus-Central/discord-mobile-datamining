// === Module 9420: ApplicationEducationEntry ===

// Module 9420 (ApplicationEducationEntry)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import Text from "Text" /* 4556 */;
import set from "set" /* 8339 */;
import useIsSocialLayerParentApplicationDefault from "useIsSocialLayerParentApplication" /* 9243 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_FRIENDS } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function ApplicationEducationEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = callback2();
  let obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    obj = { style: null };
    obj[0] = tmp.entryIcon;
    iconComponentResult = iconComponent(obj);
  }
  const items = [iconComponentResult, ];
  obj = { variant: "text-md/normal", style: tmp.entryText, children: children.text };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return closure_6(View, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { applicationEducation: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 12 }, entryText: { flex: 1 }, entryIcon: null };
createCacheKey = { width: 20, height: 20, tintColor: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[3] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp3 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(set.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    const intl5 = tmp4(1114).intl;
    if (tmp3) {
      let obj = { applicationName: null };
      obj[0] = application.name;
      let formatToPlainStringResult = intl5.formatToPlainString(tmp4(1114).t["3Mau0y"], obj);
    } else {
      formatToPlainStringResult = intl5.string(tmp4(1114).t.ex4sMU);
    }
    obj = { iconComponent: null, text: null };
    obj[0] = tmp4(4260).FriendsIcon;
    const intl6 = tmp4(1114).intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = tmp4(1114).t;
    if (tmp3) {
      obj1 = { maxFriends: null };
      obj1[0] = MAX_FRIENDS;
      let formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj1);
    } else {
      const obj2 = { maxFriends: null };
      obj2[0] = MAX_FRIENDS;
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj2);
    }
    obj[1] = formatToPlainString2Result;
    const obj3 = { iconComponent: null, text: null };
    obj3[0] = tmp4(9421).ChatSmileIcon;
    const intl7 = tmp4(1114).intl;
    const string3 = intl7.string;
    const t5 = tmp4(1114).t;
    if (tmp3) {
      let string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    obj3[1] = string3Result;
    const obj4 = { iconComponent: null, text: null };
    obj4[0] = tmp4(9223).GameControllerIcon;
    const intl8 = tmp4(1114).intl;
    const string4 = intl8.string;
    const t6 = tmp4(1114).t;
    if (tmp3) {
      let string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    obj4[1] = string4Result;
    let obj5 = { iconComponent: null, text: null };
    obj5[0] = tmp4(7380).SettingsIcon;
    const intl9 = tmp4(1114).intl;
    const string5 = intl9.string;
    let mSqazC = tmp4(1114).t;
    if (tmp3) {
      mSqazC = mSqazC.mSqazC;
      let string5Result = string5(mSqazC);
    } else {
      string5Result = string5(mSqazC.YFFVM1);
    }
    obj5[1] = string5Result;
    obj5 = items.push(obj, obj3, obj4, obj5);
  } else {
    if (accountScopes.includes(tmp4(8339).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      const intl = tmp4(1114).intl;
      if (tmp3) {
        obj = { applicationName: null };
        obj[0] = application.name;
        let formatToPlainStringResult1 = intl.formatToPlainString(tmp4(1114).t["3Mau0y"], obj);
      } else {
        formatToPlainStringResult1 = intl.string(tmp4(1114).t.ex4sMU);
      }
      const obj6 = { iconComponent: null, text: null };
      obj6[0] = tmp4(4260).FriendsIcon;
      const intl2 = tmp4(1114).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = tmp4(1114).t;
      if (tmp3) {
        const obj7 = { maxFriends: null };
        obj7[0] = MAX_FRIENDS;
        let formatToPlainStringResult2 = formatToPlainString(t.z9peav, obj7);
      } else {
        const obj8 = { maxFriends: null };
        obj8[0] = MAX_FRIENDS;
        formatToPlainStringResult2 = formatToPlainString(t.WNKzo9, obj8);
      }
      obj6[1] = formatToPlainStringResult2;
      const obj9 = { iconComponent: null, text: null };
      obj9[0] = tmp4(9223).GameControllerIcon;
      const intl3 = tmp4(1114).intl;
      const string = intl3.string;
      const t2 = tmp4(1114).t;
      if (tmp3) {
        let stringResult = string(t2["/bdaNN"]);
      } else {
        stringResult = string(t2["feD3+i"]);
      }
      obj9[1] = stringResult;
      const obj10 = { iconComponent: null, text: null };
      obj10[0] = tmp4(7380).SettingsIcon;
      const intl4 = tmp4(1114).intl;
      const string2 = intl4.string;
      const t3 = tmp4(1114).t;
      if (tmp3) {
        let string2Result = string2(t3.mSqazC);
      } else {
        string2Result = string2(t3.YFFVM1);
      }
      obj10[1] = string2Result;
      items.push(obj6, obj9, obj10);
    }
    let tmp30Result = null;
    if (0 !== items.length) {
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.applicationEducation;
      let tmp27 = null;
      if (null != arr2) {
        tmp27 = null;
        if (arr2.length > 0) {
          const obj12 = { variant: "text-sm/normal", color: "text-default", children: null };
          obj12[2] = arr2;
          tmp27 = callback(tmp4(4556).Text, obj12);
        }
      }
      const obj13 = { children: null };
      const items1 = [tmp27, items.map((iconComponent) => callback(closure_9, { iconComponent: iconComponent.iconComponent, text: iconComponent.text }, arg1))];
      obj11[1] = items1;
      const items2 = [closure_6(View, obj11), callback(tmp4(9423).AuthorizeFormSeparator, {})];
      obj13[0] = items2;
      tmp30Result = tmp30(closure_7, obj13);
      const tmp31 = closure_7;
      const tmp32 = View;
    }
    return tmp30Result;
  }
};