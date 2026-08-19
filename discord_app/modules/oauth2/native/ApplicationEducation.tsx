// discord_app/modules/oauth2/native/ApplicationEducation.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import FriendsIcon from "../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import set from "../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import SettingsIcon from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import GameControllerIcon from "../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import useIsSocialLayerParentApplicationDefault from "../../applications/useIsSocialLayerParentApplication.tsx";
import ChatSmileIcon from "../../../design/components/Icon/native/redesign/generated/ChatSmileIcon.tsx";
import AuthorizeFormSeparator from "AuthorizeFormSeparator.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_FRIENDS } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
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
  return callback(View, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
const createCacheKey = { width: 20, height: 20, tintColor: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[3] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp3 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(set.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    const intl5 = getSystemLocale.intl;
    if (tmp3) {
      let obj = { applicationName: null };
      obj[0] = application.name;
      let formatToPlainStringResult = intl5.formatToPlainString(getSystemLocale.t["3Mau0y"], obj);
    } else {
      formatToPlainStringResult = intl5.string(getSystemLocale.t.ex4sMU);
    }
    obj = { iconComponent: null, text: null };
    obj[0] = FriendsIcon.FriendsIcon;
    const intl6 = getSystemLocale.intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = getSystemLocale.t;
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
    obj3[0] = ChatSmileIcon.ChatSmileIcon;
    const intl7 = getSystemLocale.intl;
    const string3 = intl7.string;
    const t5 = getSystemLocale.t;
    if (tmp3) {
      let string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    obj3[1] = string3Result;
    const obj4 = { iconComponent: null, text: null };
    obj4[0] = GameControllerIcon.GameControllerIcon;
    const intl8 = getSystemLocale.intl;
    const string4 = intl8.string;
    const t6 = getSystemLocale.t;
    if (tmp3) {
      let string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    obj4[1] = string4Result;
    let obj5 = { iconComponent: null, text: null };
    obj5[0] = SettingsIcon.SettingsIcon;
    const intl9 = getSystemLocale.intl;
    const string5 = intl9.string;
    let mSqazC = getSystemLocale.t;
    if (tmp3) {
      mSqazC = mSqazC.mSqazC;
      let string5Result = string5(mSqazC);
    } else {
      string5Result = string5(mSqazC.YFFVM1);
    }
    obj5[1] = string5Result;
    obj5 = items.push(obj, obj3, obj4, obj5);
  } else {
    if (accountScopes.includes(set.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      const intl = getSystemLocale.intl;
      if (tmp3) {
        obj = { applicationName: null };
        obj[0] = application.name;
        let formatToPlainStringResult1 = intl.formatToPlainString(getSystemLocale.t["3Mau0y"], obj);
      } else {
        formatToPlainStringResult1 = intl.string(getSystemLocale.t.ex4sMU);
      }
      const obj6 = { iconComponent: null, text: null };
      obj6[0] = FriendsIcon.FriendsIcon;
      const intl2 = getSystemLocale.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = getSystemLocale.t;
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
      obj9[0] = GameControllerIcon.GameControllerIcon;
      const intl3 = getSystemLocale.intl;
      const string = intl3.string;
      const t2 = getSystemLocale.t;
      if (tmp3) {
        let stringResult = string(t2["/bdaNN"]);
      } else {
        stringResult = string(t2["feD3+i"]);
      }
      obj9[1] = stringResult;
      const obj10 = { iconComponent: null, text: null };
      obj10[0] = SettingsIcon.SettingsIcon;
      const intl4 = getSystemLocale.intl;
      const string2 = intl4.string;
      const t3 = getSystemLocale.t;
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
          tmp27 = callback(Text.Text, obj12);
        }
      }
      const obj13 = { children: null };
      const items1 = [tmp27, items.map((item, index) => callback(closure_9, { iconComponent: item.iconComponent, text: item.text }, index))];
      obj11[1] = items1;
      const items2 = [callback(View, obj11), callback(AuthorizeFormSeparator.AuthorizeFormSeparator, {})];
      obj13[0] = items2;
      tmp30Result = callback(closure_7, obj13);
    }
    return tmp30Result;
  }
  tmp = callback2();
};