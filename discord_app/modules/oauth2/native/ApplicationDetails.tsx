// === Module 9584: ApplicationDetails ===

// Module 9584 (ApplicationDetails)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import LinkIcon from "LinkIcon" /* 4582 */;
import ClockIcon from "ClockIcon" /* 4602 */;
import Text_Text from "Text/Text" /* 4636 */;
import LockIcon from "LockIcon" /* 5182 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8488 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9044 */;
import scopes from "scopes" /* 9392 */;
import disclosures from "disclosures" /* 9394 */;
import Utils from "Utils" /* 9396 */;
import ShieldIcon from "ShieldIcon" /* 9556 */;
import EmbedIcon from "EmbedIcon" /* 9585 */;
import HammerIcon from "HammerIcon" /* 9587 */;
import RobotIcon from "RobotIcon" /* 9589 */;
import noop from "module_19" /* 19 */;

require = fn;
function ApplicationDetailsEntry(children) {
  const iconComponent = children.iconComponent;
  const tmp = closure_6();
  const obj = { style: tmp.entry, children: null };
  let iconComponentResult = null;
  if (null != iconComponent) {
    const obj2 = { style: tmp.entryIcon };
    iconComponentResult = iconComponent(obj2);
  }
  const items = [iconComponentResult, React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", style: tmp.entryText, children: children.text })];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
let obj2 = { applicationDetails: { flexDirection: "column", gap: 16 }, entry: { flexDirection: "row", alignItems: "center", gap: 8 }, entryText: { flex: 1 }, entryIcon: null };
let size = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_MUTED };
obj2.entryIcon = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ApplicationDetails.tsx");

export default function ApplicationDetails(arg0) {
  ({ application, scopes, redirectUri, approximateGuildCount, disclosures } = arg0);
  ({ isEmbeddedFlow, connectedAccount } = arg0);
  const tmp2 = closure_6();
  const date = new Date(SnowflakeUtilsDefault.extractTimestamp(application.id));
  let joined = null;
  const securityMessage = scopes.getSecurityMessage(scopes);
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
  let obj3 = { style: tmp2.applicationDetails, children: null };
  let tmp15 = null;
  if (null != joined) {
    let obj4 = { iconComponent: LinkIcon.LinkIcon, text: null };
    const intl = util.intl;
    const obj5 = { origin: joined };
    obj4.text = intl.format(util.t["5k5OKD"], obj5);
    tmp15 = React4(ApplicationDetailsEntry, obj4);
  }
  const items = [tmp15, , , , , , ];
  const obj6 = { iconComponent: LockIcon.LockIcon, text: null };
  obj6.text = Utils.getApplicationDetailsText(application);
  items[1] = React4(ApplicationDetailsEntry, obj6);
  let tmp18Result = null;
  if (null != connectedAccount) {
    const obj7 = { iconComponent: HammerIcon.HammerIcon, text: null };
    const intl2 = util.intl;
    obj7.text = intl2.string(util.t["8qui3M"]);
    tmp18Result = React4(ApplicationDetailsEntry, obj7);
  }
  items[2] = tmp18Result;
  const obj8 = { iconComponent: ClockIcon.ClockIcon, text: null };
  const intl3 = util.intl;
  obj8.text = intl3.formatToPlainString(util.t["+1bjc8"], { date });
  items[3] = React4(ApplicationDetailsEntry, obj8);
  let tmp18Result2 = null;
  if (scopes.includes(OAuth2Scopes.OAuth2Scopes.BOT)) {
    tmp18Result2 = null;
    if (null != approximateGuildCount) {
      const obj9 = { iconComponent: RobotIcon.RobotIcon, text: null };
      const intl4 = util.intl;
      const obj10 = { guildCount: approximateGuildCount };
      obj9.text = intl4.formatToPlainString(util.t.UHGHSP, obj10);
      tmp18Result2 = React4(ApplicationDetailsEntry, obj9);
    }
  }
  items[4] = tmp18Result2;
  const tmp5Result = Utils;
  items[5] = React4(ApplicationDetailsEntry, { iconComponent: ShieldIcon.ShieldIcon, text: securityMessage });
  let mapped = null;
  if (null != disclosures) {
    mapped = disclosures.map((toFixed) => {
      const textForDisclosure = disclosures.getTextForDisclosure(toFixed);
      if (disclosures.ApplicationDisclosure.IP_LOCATION === toFixed) {
        const obj2 = { iconComponent: GlobeEarthIcon.GlobeEarthIcon };
        let tmp4 = obj2;
      } else {
        tmp4 = null;
        if (disclosures.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS === toFixed) {
          const obj3 = { iconComponent: EmbedIcon.EmbedIcon };
          tmp4 = obj3;
        }
      }
      let tmp5 = null;
      if (null != tmp4) {
        tmp5 = null;
        if (null != textForDisclosure) {
          const obj4 = { text: textForDisclosure };
          const merged = Object.assign(tmp4);
          tmp5 = closure_1_4(ApplicationDetailsEntry, obj4, toFixed.toFixed());
        }
      }
      return tmp5;
    });
  }
  items[6] = mapped;
  obj3.children = items;
  return hasOwnProperty(View, obj3);
};