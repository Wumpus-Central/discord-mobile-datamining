// === Module 10216: AlertNotification ===

// Module 10216 (AlertNotification)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let size = { shape: fn(8813).CutoutShape.RoundedRect, x: fn(5584).ImageSizes[fn(undefined, 5584).GuildIconSizes.NORMAL] - -6 - 24, y: -6, width: 24, height: 24, cornerRadius: nativeDefault.radii.sm };
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ warningBadge: { position: "absolute", top: -6, right: -6, width: 24, height: 24, alignItems: "center", justifyContent: "center" }, warningIcon: { width: 16, height: 16 } });
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default function AlertNotification(notification) {
  notification = notification.notification;
  const channel = notification.channel;
  const guild = notification.guild;
  const tmp = closure_9();
  let obj = channel(10098);
  const incidentData = obj.useGuildIncidentsState(notification.key).incidentData;
  let raidDetectedAt;
  if (incidentData != null) {
    raidDetectedAt = incidentData.raidDetectedAt;
  }
  if (null != raidDetectedAt) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.Mn3elp);
  } else {
    let intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.evRhwg);
  }
  const items = [guild];
  const items1 = [channel.id];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text: null, secondaryText: null };
    const intl = util.intl;
    obj.text = intl.string(util.t["2IY4YN"]);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj.secondaryText = name;
    return obj;
  }, items);
  const callback = noop.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id, { navigationReplace: true });
  }, items1);
  obj = { icon: null, header: null, children: null, onPress: null, notification: null };
  obj = { children: null };
  const obj1 = { cutouts: null, children: closure_5(guild(5584), { guild, selected: false }) };
  const items2 = [size];
  obj1.cutouts = items2;
  const items3 = [closure_5(guild(8813), obj1), ];
  const obj2 = { style: tmp.warningBadge, children: null };
  const tmp8 = guild(8813);
  obj2.children = closure_5(channel(8588).WarningIcon, { style: tmp.warningIcon, color: guild(576).colors.ICON_FEEDBACK_WARNING });
  items3[1] = closure_5(View, obj2);
  obj.children = items3;
  obj.icon = closure_7(closure_6, obj);
  obj.header = memo;
  obj.children = closure_5(channel(10107).SystemMessageText, { text: stringResult });
  obj.onPress = callback;
  obj.notification = notification;
  return closure_5(channel(10170).NotificationPressable, obj);
};