// discord_app/modules/in_app_notifications/native/AlertNotification.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let obj = { shape: require("SolidCutout").CutoutShape.RoundedRect, x: require("GuildIconSizes").ImageSizes[require("GuildIconSizes").GuildIconSizes.NORMAL] - -6 - 24, y: -6, width: 24, height: 24, cornerRadius: ThemesDefault.radii.sm };
let closure_9 = createCacheKey.createStyles({ warningBadge: { position: "absolute", top: -6, right: -6, width: 24, height: 24, alignItems: "center", justifyContent: "center" }, warningIcon: { width: 16, height: 16 } });
const result = require("set").fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default function AlertNotification(notification) {
  notification = notification.notification;
  let channel;
  let guild;
  channel = notification.channel;
  guild = notification.guild;
  const tmp = callback3();
  obj = channel(9928);
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
    obj = { type: "simple", text: null, secondaryText: null };
    const intl = channel(closure_1_2[8]).intl;
    obj[1] = intl.string(channel(closure_1_2[8]).t["2IY4YN"]);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj[2] = name;
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    channel(closure_1_2[9]).transitionToChannel(channel.id, { navigationReplace: true });
  }, items1);
  obj = { icon: null, header: null, children: null, onPress: null, notification: null };
  obj = { children: null };
  obj1 = { cutouts: items2, children: callback(guild(5885), { guild, selected: false }) };
  items2 = [obj];
  const items3 = [callback(guild(8447), obj1), ];
  const obj2 = { style: tmp.warningBadge, children: null };
  const tmp8 = guild(8447);
  obj2[1] = callback(channel(8113).WarningIcon, { style: tmp.warningIcon, color: guild(712).colors.ICON_FEEDBACK_WARNING });
  items3[1] = callback(View, obj2);
  obj[0] = items3;
  obj[0] = callback2(closure_6, obj);
  obj[1] = memo;
  obj[2] = callback(channel(9943).SystemMessageText, { text: stringResult });
  obj[3] = callback;
  obj[4] = notification;
  return callback(channel(10002).NotificationPressable, obj);
};