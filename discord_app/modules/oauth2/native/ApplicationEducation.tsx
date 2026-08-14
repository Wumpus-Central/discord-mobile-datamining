// discord_app/modules/oauth2/native/ApplicationEducation.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { MAX_FRIENDS } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { set } from "../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { useIsSocialLayerParentApplication } from "../../applications/useIsSocialLayerParentApplication.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
function ApplicationEducationEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = createCacheKey();
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
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
createCacheKey = { applicationEducation: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 12 }, entryText: { flex: 1 }, entryIcon: null };
createCacheKey = { width: 20, height: 20, tintColor: require("Themes").colors.TEXT_MUTED };
createCacheKey[3] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
  let accountScopes;
  let application;
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp3 = useIsSocialLayerParentApplication(application);
  if (accountScopes.includes(set.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    const intl5 = tmp4(1236).intl;
    if (tmp3) {
      let obj = { applicationName: null };
      obj[0] = application.name;
      let formatToPlainStringResult = intl5.formatToPlainString(tmp4(1236).t["3Mau0y"], obj);
    } else {
      formatToPlainStringResult = intl5.string(tmp4(1236).t.ex4sMU);
    }
    obj = { iconComponent: null, text: null };
    obj[0] = tmp4(4063).FriendsIcon;
    const intl6 = tmp4(1236).intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = tmp4(1236).t;
    if (tmp3) {
      const obj1 = { maxFriends: null };
      obj1[0] = MAX_FRIENDS;
      let formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj1);
    } else {
      const obj2 = { maxFriends: null };
      obj2[0] = MAX_FRIENDS;
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj2);
    }
    obj[1] = formatToPlainString2Result;
    const obj3 = { iconComponent: null, text: null };
    obj3[0] = tmp4(10505).ChatSmileIcon;
    const intl7 = tmp4(1236).intl;
    const string3 = intl7.string;
    const t5 = tmp4(1236).t;
    if (tmp3) {
      let string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    obj3[1] = string3Result;
    const obj4 = { iconComponent: null, text: null };
    obj4[0] = tmp4(8825).GameControllerIcon;
    const intl8 = tmp4(1236).intl;
    const string4 = intl8.string;
    const t6 = tmp4(1236).t;
    if (tmp3) {
      let string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    obj4[1] = string4Result;
    let obj5 = { iconComponent: null, text: null };
    obj5[0] = tmp4(6075).SettingsIcon;
    const intl9 = tmp4(1236).intl;
    const string5 = intl9.string;
    let mSqazC = tmp4(1236).t;
    if (tmp3) {
      mSqazC = mSqazC.mSqazC;
      let string5Result = string5(mSqazC);
    } else {
      string5Result = string5(mSqazC.YFFVM1);
    }
    obj5[1] = string5Result;
    obj5 = items.push(obj, obj3, obj4, obj5);
  } else {
    if (accountScopes.includes(tmp4(8965).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      const intl = tmp4(1236).intl;
      if (tmp3) {
        obj = { applicationName: null };
        obj[0] = application.name;
        let formatToPlainStringResult1 = intl.formatToPlainString(tmp4(1236).t["3Mau0y"], obj);
      } else {
        formatToPlainStringResult1 = intl.string(tmp4(1236).t.ex4sMU);
      }
      const obj6 = { iconComponent: null, text: null };
      obj6[0] = tmp4(4063).FriendsIcon;
      const intl2 = tmp4(1236).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = tmp4(1236).t;
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
      obj9[0] = tmp4(8825).GameControllerIcon;
      const intl3 = tmp4(1236).intl;
      const string = intl3.string;
      const t2 = tmp4(1236).t;
      if (tmp3) {
        let stringResult = string(t2["/bdaNN"]);
      } else {
        stringResult = string(t2["feD3+i"]);
      }
      obj9[1] = stringResult;
      const obj10 = { iconComponent: null, text: null };
      obj10[0] = tmp4(6075).SettingsIcon;
      const intl4 = tmp4(1236).intl;
      const string2 = intl4.string;
      const t3 = tmp4(1236).t;
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
          tmp27 = callback(tmp4(4338).Text, obj12);
        }
      }
      const obj13 = { children: null };
      const items1 = [tmp27, items.map((iconComponent) => callback(closure_9, { iconComponent: iconComponent.iconComponent, text: iconComponent.text }, arg1))];
      obj11[1] = items1;
      const items2 = [closure_6(View, obj11), callback(tmp4(10507).AuthorizeFormSeparator, {})];
      obj13[0] = items2;
      tmp30Result = tmp30(closure_7, obj13);
      const tmp31 = closure_7;
      const tmp32 = View;
    }
    return tmp30Result;
  }
};