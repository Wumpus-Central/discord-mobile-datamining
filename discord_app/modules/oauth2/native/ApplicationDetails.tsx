import "Text";
import { View } from "RobotIcon";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function ApplicationDetailsEntry(children) {
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
  obj = { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: children.text };
  items[1] = callback(require(4251) /* Text */.Text, obj);
  obj[1] = items;
  return closure_5(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 }, entryIcon: null };
createCacheKey = { width: 16, height: 16, tintColor: require("Themes").colors.TEXT_MUTED };
createCacheKey[3] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default function ApplicationDetails(arg0) {
  let application;
  let approximateGuildCount;
  let connectedAccount;
  let disclosures;
  let isEmbeddedFlow;
  let redirectUri;
  let scopes;
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  let obj = importDefault(11);
  const tmp2 = createCacheKey();
  let obj1 = require(9136) /* items */;
  let joined = null;
  const securityMessage = obj1.getSecurityMessage(scopes);
  if (null != redirectUri) {
    if (!isEmbeddedFlow) {
      try {
        const _URL = URL;
        const uRL = new URL(redirectUri);
        const parts = uRL.href.split("/");
        const substr = parts.slice(0, 3);
        joined = substr.join("/");
        const str = uRL.href;
      } catch (err) {
        joined = tmp;
      }
    }
  }
  obj = { style: tmp2.applicationDetails, children: null };
  let tmp15 = null;
  if (null != joined) {
    obj = { iconComponent: null, text: null };
    obj[0] = tmp5(4199).LinkIcon;
    const intl = tmp5(1236).intl;
    obj1 = { origin: null };
    obj1[0] = joined;
    obj[1] = intl.format(tmp5(1236).t["5k5OKD"], obj1);
    tmp15 = callback(ApplicationDetailsEntry, obj);
  }
  const items = [tmp15, , , , , , ];
  const obj2 = { iconComponent: require(4775) /* LockIcon */.LockIcon, text: null };
  const date = new Date(obj.extractTimestamp(application.id));
  const tmp13 = closure_5;
  const tmp14 = View;
  obj2[1] = require(9140) /* getApplicationDetailsText */.getApplicationDetailsText(application);
  items[1] = callback(ApplicationDetailsEntry, obj2);
  let tmp18Result = null;
  if (null != connectedAccount) {
    const obj3 = { iconComponent: null, text: null };
    obj3[0] = tmp5(9208).HammerIcon;
    const intl2 = tmp5(1236).intl;
    obj3[1] = intl2.string(tmp5(1236).t["8qui3M"]);
    tmp18Result = tmp18(tmp19, obj3);
  }
  items[2] = tmp18Result;
  const obj4 = { iconComponent: require(4219) /* ClockIcon */.ClockIcon, text: null };
  const intl3 = tmp5(1236).intl;
  obj4[1] = intl3.formatToPlainString(require(1236) /* getSystemLocale */.t["+1bjc8"], { date });
  items[3] = callback(ApplicationDetailsEntry, obj4);
  tmp18Result = null;
  if (scopes.includes(require(8485) /* set */.OAuth2Scopes.BOT)) {
    tmp18Result = null;
    if (null != approximateGuildCount) {
      const obj5 = { iconComponent: null, text: null };
      obj5[0] = tmp5(9210).RobotIcon;
      const intl4 = tmp5(1236).intl;
      const obj6 = { guildCount: null };
      obj6[0] = approximateGuildCount;
      obj5[1] = intl4.formatToPlainString(tmp5(1236).t.UHGHSP, obj6);
      tmp18Result = tmp18(tmp19, obj5);
    }
  }
  items[4] = tmp18Result;
  const tmp5Result = require(9140) /* getApplicationDetailsText */;
  items[5] = callback(ApplicationDetailsEntry, { iconComponent: require(8350) /* ShieldIcon */.ShieldIcon, text: securityMessage });
  let mapped = null;
  if (null != disclosures) {
    mapped = disclosures.map((toFixed) => {
      let obj = callback(9138);
      const textForDisclosure = obj.getTextForDisclosure(toFixed);
      if (callback(9138).ApplicationDisclosure.IP_LOCATION === toFixed) {
        obj = { iconComponent: null };
        obj[0] = tmp(9204).GlobeEarthIcon;
        let tmp4 = obj;
      } else {
        tmp4 = null;
        if (tmp(9138).ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
          obj = { iconComponent: null };
          obj[0] = tmp(9206).EmbedIcon;
          tmp4 = obj;
        }
      }
      let tmp5 = null;
      if (null != tmp4) {
        tmp5 = null;
        if (null != textForDisclosure) {
          const obj1 = { text: null };
          obj1[0] = textForDisclosure;
          const merged = Object.assign(tmp4);
          tmp5 = callback2(closure_7, obj1, toFixed.toFixed());
        }
      }
      return tmp5;
    });
  }
  items[6] = mapped;
  obj[1] = items;
  return tmp13(tmp14, obj);
};