// === Module 9385: ApplicationDetailsEntry ===

// Module 9385 (ApplicationDetailsEntry)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ClockIcon from "ClockIcon" /* 4441 */;
import Text from "Text" /* 4474 */;
import LockIcon from "LockIcon" /* 5049 */;
import ShieldIcon from "ShieldIcon" /* 8440 */;
import set from "set" /* 8629 */;
import items2 from "items" /* 9305 */;
import getApplicationDetailsText from "getApplicationDetailsText" /* 9309 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function ApplicationDetailsEntry(children) {
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
  obj = { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: children.text };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return closure_5(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 }, entryIcon: null };
createCacheKey = { width: 16, height: 16, tintColor: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[3] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default function ApplicationDetails(arg0) {
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  let obj = DISCORD_EPOCHDefault;
  const tmp2 = callback2();
  obj1 = items2;
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
    obj[0] = tmp5(4421).LinkIcon;
    const intl = tmp5(1233).intl;
    obj1 = { origin: null };
    obj1[0] = joined;
    obj[1] = intl.format(tmp5(1233).t["5k5OKD"], obj1);
    tmp15 = callback(ApplicationDetailsEntry, obj);
  }
  const items = [tmp15, , , , , , ];
  const obj2 = { iconComponent: LockIcon.LockIcon, text: null };
  const date = new Date(obj.extractTimestamp(application.id));
  const tmp13 = closure_5;
  const tmp14 = View;
  obj2[1] = getApplicationDetailsText.getApplicationDetailsText(application);
  items[1] = callback(ApplicationDetailsEntry, obj2);
  let tmp18Result = null;
  if (null != connectedAccount) {
    const obj3 = { iconComponent: null, text: null };
    obj3[0] = tmp5(9390).HammerIcon;
    const intl2 = tmp5(1233).intl;
    obj3[1] = intl2.string(tmp5(1233).t["8qui3M"]);
    tmp18Result = tmp18(tmp19, obj3);
  }
  items[2] = tmp18Result;
  const obj4 = { iconComponent: ClockIcon.ClockIcon, text: null };
  const intl3 = tmp5(1233).intl;
  obj4[1] = intl3.formatToPlainString(getSystemLocale.t["+1bjc8"], { date });
  items[3] = callback(ApplicationDetailsEntry, obj4);
  tmp18Result = null;
  if (scopes.includes(set.OAuth2Scopes.BOT)) {
    tmp18Result = null;
    if (null != approximateGuildCount) {
      const obj5 = { iconComponent: null, text: null };
      obj5[0] = tmp5(9392).RobotIcon;
      const intl4 = tmp5(1233).intl;
      const obj6 = { guildCount: null };
      obj6[0] = approximateGuildCount;
      obj5[1] = intl4.formatToPlainString(tmp5(1233).t.UHGHSP, obj6);
      tmp18Result = tmp18(tmp19, obj5);
    }
  }
  items[4] = tmp18Result;
  const tmp5Result = getApplicationDetailsText;
  items[5] = callback(ApplicationDetailsEntry, { iconComponent: ShieldIcon.ShieldIcon, text: securityMessage });
  let mapped = null;
  if (null != disclosures) {
    mapped = disclosures.map((toFixed) => {
      let obj = callback(9307);
      const textForDisclosure = obj.getTextForDisclosure(toFixed);
      if (callback(9307).ApplicationDisclosure.IP_LOCATION === toFixed) {
        obj = { iconComponent: null };
        obj[0] = tmp(9386).GlobeEarthIcon;
        let tmp4 = obj;
      } else {
        tmp4 = null;
        if (tmp(9307).ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
          obj = { iconComponent: null };
          obj[0] = tmp(9388).EmbedIcon;
          tmp4 = obj;
        }
      }
      let tmp5 = null;
      if (null != tmp4) {
        tmp5 = null;
        if (null != textForDisclosure) {
          obj1 = { text: null };
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