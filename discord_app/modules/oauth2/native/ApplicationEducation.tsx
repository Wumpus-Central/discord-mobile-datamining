// === Module 9420: ApplicationEducation ===

// Module 9420 (ApplicationEducation)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import FriendsIcon from "FriendsIcon" /* 4260 */;
import Text_Text from "Text/Text" /* 4556 */;
import SettingsIcon from "SettingsIcon" /* 7380 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8339 */;
import GameControllerIcon from "GameControllerIcon" /* 9223 */;
import useIsSocialLayerParentApplicationDefault from "useIsSocialLayerParentApplication" /* 9243 */;
import ChatSmileIcon from "ChatSmileIcon" /* 9421 */;
import AuthorizeFormSeparator from "AuthorizeFormSeparator" /* 9423 */;
import noop from "module_19" /* 19 */;

require = fn;
function ApplicationEducationEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = closure_8();
  let obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    obj = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj);
  }
  const items = [iconComponentResult, ];
  obj = { variant: "text-md/normal", style: tmp.entryText, children: children.text };
  items[1] = hasOwnProperty(Text_Text.Text, obj);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const MAX_FRIENDS = fn(1074).MAX_FRIENDS;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
fn(4560);
const createStyles = { applicationEducation: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 12 }, entryText: { flex: 1 }, entryIcon: null };
let size = { width: 20, height: 20, tintColor: nativeDefault.colors.TEXT_MUTED };
createStyles.entryIcon = size;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationEducation.tsx");

export default function ApplicationEducation(arg0) {
  ({ application, accountScopes } = arg0);
  const items = [];
  const tmp3 = useIsSocialLayerParentApplicationDefault(application);
  if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
    const intl5 = util.intl;
    if (tmp3) {
      let obj = { applicationName: application.name };
      let formatToPlainStringResult = intl5.formatToPlainString(util.t["3Mau0y"], obj);
    } else {
      formatToPlainStringResult = intl5.string(util.t.ex4sMU);
    }
    obj = { iconComponent: FriendsIcon.FriendsIcon, text: null };
    const intl6 = util.intl;
    const formatToPlainString2 = intl6.formatToPlainString;
    const t4 = util.t;
    if (tmp3) {
      const obj1 = { maxFriends: MAX_FRIENDS };
      let formatToPlainString2Result = formatToPlainString2(t4.z9peav, obj1);
    } else {
      const obj2 = { maxFriends: MAX_FRIENDS };
      formatToPlainString2Result = formatToPlainString2(t4.WNKzo9, obj2);
    }
    obj.text = formatToPlainString2Result;
    const obj3 = { iconComponent: ChatSmileIcon.ChatSmileIcon, text: null };
    const intl7 = util.intl;
    const string3 = intl7.string;
    const t5 = util.t;
    if (tmp3) {
      let string3Result = string3(t5.daY6xj);
    } else {
      string3Result = string3(t5.j7peBh);
    }
    obj3.text = string3Result;
    const obj4 = { iconComponent: GameControllerIcon.GameControllerIcon, text: null };
    const intl8 = util.intl;
    const string4 = intl8.string;
    const t6 = util.t;
    if (tmp3) {
      let string4Result = string4(t6["/bdaNN"]);
    } else {
      string4Result = string4(t6["feD3+i"]);
    }
    obj4.text = string4Result;
    let obj5 = { iconComponent: SettingsIcon.SettingsIcon, text: null };
    const intl9 = util.intl;
    const string5 = intl9.string;
    let mSqazC = util.t;
    if (tmp3) {
      mSqazC = mSqazC.mSqazC;
      let string5Result = string5(mSqazC);
    } else {
      string5Result = string5(mSqazC.YFFVM1);
    }
    obj5.text = string5Result;
    obj5 = items.push(obj, obj3, obj4, obj5);
  } else {
    if (accountScopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE)) {
      const intl = util.intl;
      if (tmp3) {
        obj = { applicationName: application.name };
        let formatToPlainStringResult1 = intl.formatToPlainString(util.t["3Mau0y"], obj);
      } else {
        formatToPlainStringResult1 = intl.string(util.t.ex4sMU);
      }
      const obj6 = { iconComponent: FriendsIcon.FriendsIcon, text: null };
      const intl2 = util.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const t = util.t;
      if (tmp3) {
        const obj7 = { maxFriends: MAX_FRIENDS };
        let formatToPlainStringResult2 = formatToPlainString(t.z9peav, obj7);
      } else {
        const obj8 = { maxFriends: MAX_FRIENDS };
        formatToPlainStringResult2 = formatToPlainString(t.WNKzo9, obj8);
      }
      obj6.text = formatToPlainStringResult2;
      const obj9 = { iconComponent: GameControllerIcon.GameControllerIcon, text: null };
      const intl3 = util.intl;
      const string = intl3.string;
      const t2 = util.t;
      if (tmp3) {
        let stringResult = string(t2["/bdaNN"]);
      } else {
        stringResult = string(t2["feD3+i"]);
      }
      obj9.text = stringResult;
      const obj10 = { iconComponent: SettingsIcon.SettingsIcon, text: null };
      const intl4 = util.intl;
      const string2 = intl4.string;
      const t3 = util.t;
      if (tmp3) {
        let string2Result = string2(t3.mSqazC);
      } else {
        string2Result = string2(t3.YFFVM1);
      }
      obj10.text = string2Result;
      items.push(obj6, obj9, obj10);
    }
    let tmp30Result = null;
    if (0 !== items.length) {
      const obj11 = { style: tmp.applicationEducation, children: null };
      let tmp27 = null;
      if (null != arr2) {
        tmp27 = null;
        if (arr2.length > 0) {
          const obj12 = { variant: "text-sm/normal", color: "text-default", children: arr2 };
          tmp27 = hasOwnProperty(Text_Text.Text, obj12);
        }
      }
      const obj13 = { children: null };
      const items1 = [tmp27, items.map((iconComponent, index) => closure_1_5(ApplicationEducationEntry, { iconComponent: iconComponent.iconComponent, text: iconComponent.text }, index))];
      obj11.children = items1;
      const items2 = [timestampProducer(View, obj11), hasOwnProperty(AuthorizeFormSeparator.AuthorizeFormSeparator, {})];
      obj13.children = items2;
      tmp30Result = timestampProducer(React5, obj13);
    }
    return tmp30Result;
  }
  tmp = closure_8();
};