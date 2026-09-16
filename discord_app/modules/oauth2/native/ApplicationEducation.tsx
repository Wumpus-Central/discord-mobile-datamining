// discord_app/modules/oauth2/native/ApplicationEducation.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import FriendsIcon from "../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SettingsIcon from "../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import OAuth2Scopes from "../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import GameControllerIcon from "../../../design/components/Icon/native/redesign/generated/GameControllerIcon.tsx";
import useIsSocialLayerParentApplicationDefault from "../../applications/useIsSocialLayerParentApplication.tsx";
import ChatSmileIcon from "../../../design/components/Icon/native/redesign/generated/ChatSmileIcon.tsx";
import AuthorizeFormSeparator from "AuthorizeFormSeparator.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ApplicationEducationEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = closure_8();
  const obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  const items = [
    iconComponentResult,
    hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", style: tmp.entryText, children: children.text }),
  ];
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const MAX_FRIENDS = fn(1074).MAX_FRIENDS;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  applicationEducation: { flexDirection: "column", gap: 16 },
  entry: { flexDirection: "row", alignItems: "center", gap: 12 },
  entryText: { flex: 1 },
  entryIcon: null,
};
let size = { width: 20, height: 20, tintColor: nativeDefault.colors.TEXT_MUTED };
obj2.entryIcon = size;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
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
      const items1 = [
        tmp27,
        items.map((iconComponent, index) =>
          closure_1_5(
            ApplicationEducationEntry,
            { iconComponent: iconComponent.iconComponent, text: iconComponent.text },
            index,
          ),
        ),
      ];
      obj14.children = items1;
      const items2 = [
        timestampProducer(View, obj14),
        hasOwnProperty(AuthorizeFormSeparator.AuthorizeFormSeparator, {}),
      ];
      obj16.children = items2;
      tmp30Result = timestampProducer(React5, obj16);
    }
    return tmp30Result;
  }
  tmp = closure_8();
}
