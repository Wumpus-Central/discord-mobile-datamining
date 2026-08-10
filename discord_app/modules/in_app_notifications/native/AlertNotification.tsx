// discord_app/modules/in_app_notifications/native/AlertNotification.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let obj = { shape: null, x: null, y: -6, width: 24, height: 24, cornerRadius: null };
obj[0] = require("SolidCutout").CutoutShape.RoundedRect;
obj[1] = require("GuildIconSizes").ImageSizes[require("GuildIconSizes").GuildIconSizes.NORMAL] - -6 - 24;
obj[5] = require("Themes").radii.sm;
let closure_9 = createCacheKey.createStyles({ warningBadge: { position: "absolute", top: -6, right: -6, width: 24, height: 24, alignItems: "center", justifyContent: "center" }, warningIcon: { width: 16, height: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default function AlertNotification(notification) {
  notification = notification.notification;
  let channel;
  let guild;
  channel = notification.channel;
  guild = notification.guild;
  const tmp = callback3();
  let obj = channel(9772);
  const incidentData = obj.useGuildIncidentsState(notification.key).incidentData;
  let raidDetectedAt;
  if (incidentData != null) {
    raidDetectedAt = incidentData.raidDetectedAt;
  }
  if (null != raidDetectedAt) {
    const intl2 = tmp2(1236).intl;
    let stringResult = intl2.string(tmp2(1236).t.Mn3elp);
  } else {
    let intl = tmp2(1236).intl;
    stringResult = intl.string(tmp2(1236).t.evRhwg);
  }
  const items = [guild];
  const items1 = [channel.id];
  const memo = React.useMemo(() => {
    const obj = { type: "simple", text: null, secondaryText: null };
    const intl = channel(outer1_2[8]).intl;
    obj[1] = intl.string(channel(outer1_2[8]).t["2IY4YN"]);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj[2] = name;
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    channel(outer1_2[9]).transitionToChannel(channel.id, { navigationReplace: true });
  }, items1);
  obj = { icon: null, header: null, children: null, onPress: null, notification: null };
  obj = { children: null };
  const obj1 = { cutouts: items2, children: null };
  items2 = [obj];
  obj1[1] = callback(guild(5779), { guild, selected: false });
  const items3 = [callback(guild(8293), obj1), ];
  const obj2 = { style: tmp.warningBadge, children: null };
  const obj3 = { style: tmp.warningIcon, color: null };
  obj3[1] = guild(712).colors.ICON_FEEDBACK_WARNING;
  obj2[1] = callback(channel(7962).WarningIcon, obj3);
  items3[1] = callback(View, obj2);
  obj[0] = items3;
  obj[0] = callback2(closure_6, obj);
  obj[1] = memo;
  obj[2] = callback(channel(9788).SystemMessageText, { text: stringResult });
  obj[3] = callback;
  obj[4] = notification;
  return callback(channel(9852).NotificationPressable, obj);
};