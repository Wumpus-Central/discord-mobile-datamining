// === Module 9430: ApplicationDetails ===

// Module 9430 (ApplicationDetails)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import LinkIcon from "LinkIcon" /* 4503 */;
import ClockIcon from "ClockIcon" /* 4523 */;
import Text_Text from "Text/Text" /* 4556 */;
import LockIcon from "LockIcon" /* 5095 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8339 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8886 */;
import scopes from "scopes" /* 9238 */;
import disclosures from "disclosures" /* 9240 */;
import Utils from "Utils" /* 9242 */;
import ShieldIcon from "ShieldIcon" /* 9402 */;
import EmbedIcon from "EmbedIcon" /* 9431 */;
import HammerIcon from "HammerIcon" /* 9433 */;
import RobotIcon from "RobotIcon" /* 9435 */;
import noop from "module_19" /* 19 */;

require = fn;
function ApplicationDetailsEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = closure_6();
  let obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    obj = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj);
  }
  const items = [iconComponentResult, ];
  obj = { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: children.text };
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
const createStyles = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 }, entryIcon: null };
let size = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_MUTED };
createStyles.entryIcon = size;
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default function ApplicationDetails(arg0) {
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  let obj = SnowflakeUtilsDefault;
  const tmp2 = closure_6();
  let obj1 = scopes;
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
      } catch (err) {
        joined = tmp;
      }
    }
  }
  obj = { style: tmp2.applicationDetails, children: null };
  let tmp15 = null;
  if (null != joined) {
    obj = { iconComponent: LinkIcon.LinkIcon, text: null };
    const intl = util.intl;
    obj1 = { origin: joined };
    obj.text = intl.format(util.t["5k5OKD"], obj1);
    tmp15 = React4(ApplicationDetailsEntry, obj);
  }
  const items = [tmp15, , , , , , ];
  const obj2 = { iconComponent: LockIcon.LockIcon, text: null };
  const date = new Date(obj.extractTimestamp(application.id));
  obj2.text = Utils.getApplicationDetailsText(application);
  items[1] = React4(ApplicationDetailsEntry, obj2);
  let tmp18Result = null;
  if (null != connectedAccount) {
    const obj3 = { iconComponent: HammerIcon.HammerIcon, text: null };
    const intl2 = util.intl;
    obj3.text = intl2.string(util.t["8qui3M"]);
    tmp18Result = React4(ApplicationDetailsEntry, obj3);
  }
  items[2] = tmp18Result;
  const obj4 = { iconComponent: ClockIcon.ClockIcon, text: null };
  const intl3 = util.intl;
  obj4.text = intl3.formatToPlainString(util.t["+1bjc8"], { date });
  items[3] = React4(ApplicationDetailsEntry, obj4);
  tmp18Result = null;
  if (scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT)) {
    tmp18Result = null;
    if (null != approximateGuildCount) {
      const obj5 = { iconComponent: RobotIcon.RobotIcon, text: null };
      const intl4 = util.intl;
      const obj6 = { guildCount: approximateGuildCount };
      obj5.text = intl4.formatToPlainString(util.t.UHGHSP, obj6);
      tmp18Result = React4(ApplicationDetailsEntry, obj5);
    }
  }
  items[4] = tmp18Result;
  const tmp5Result = Utils;
  items[5] = React4(ApplicationDetailsEntry, { iconComponent: ShieldIcon.ShieldIcon, text: securityMessage });
  let mapped = null;
  if (null != disclosures) {
    mapped = disclosures.map((toFixed) => {
      let obj = disclosures;
      const textForDisclosure = obj.getTextForDisclosure(toFixed);
      if (disclosures.ApplicationDisclosure.IP_LOCATION === toFixed) {
        obj = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
        let tmp4 = obj;
      } else {
        tmp4 = null;
        if (disclosures.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
          obj = { iconComponent: EmbedIcon.EmbedIcon };
          tmp4 = obj;
        }
      }
      let tmp5 = null;
      if (null != tmp4) {
        tmp5 = null;
        if (null != textForDisclosure) {
          const obj1 = { text: textForDisclosure };
          const merged = Object.assign(tmp4);
          tmp5 = closure_1_4(ApplicationDetailsEntry, obj1, toFixed.toFixed());
        }
      }
      return tmp5;
    });
  }
  items[6] = mapped;
  obj.children = items;
  return hasOwnProperty(View, obj);
};