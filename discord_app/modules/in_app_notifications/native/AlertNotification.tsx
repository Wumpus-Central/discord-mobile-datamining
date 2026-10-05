// === Module 12540: AlertNotification ===

// Module 12540 (AlertNotification)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import ClipView from "ClipView" /* 8469 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;
let notification, transitionToChannelResult;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp3;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let size = { shape: ClipView.CutoutShape.RoundedRect, x: tmp3 - -6 - 24, y: -6, width: 24, height: 24, cornerRadius: nativeDefault.radii.sm };
tmp3 = GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.NORMAL];
let closure_9 = createStyles.createStyles({ warningBadge: { position: "absolute", top: -6, right: -6, width: 24, height: 24, alignItems: "center", justifyContent: "center" }, warningIcon: { width: 16, height: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((notification) => {
  let channel;
  let items1;
  let obj5;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp7;
  let obj = channel(576);
  const cResult = obj.c(26);
  notification = notification.notification;
  channel = notification.channel;
  const guild = notification.guild;
  const key = notification.key;
  const tmp4 = closure_9();
  const obj2 = channel(12480);
  const incidentData = obj2.useGuildIncidentsState(key).incidentData;
  let raidDetectedAt;
  const first = cResult[0];
  if (incidentData != null) {
    raidDetectedAt = incidentData.raidDetectedAt;
  }
  if (first !== raidDetectedAt) {
    let stringResult;
    let raidDetectedAt1;
    if (incidentData != null) {
      raidDetectedAt1 = incidentData.raidDetectedAt;
    }
    if (null != raidDetectedAt1) {
      const intl2 = tmp(1126).intl;
      stringResult = intl2.string(tmp(1126).t.Mn3elp);
    } else {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.evRhwg);
    }
    let raidDetectedAt2;
    if (incidentData != null) {
      raidDetectedAt2 = incidentData.raidDetectedAt;
    }
    cResult[0] = raidDetectedAt2;
    cResult[1] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(channel(1126).t["2IY4YN"]);
    cResult[2] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[2];
  }
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (cResult[3] !== name) {
    const obj3 = { type: "simple", text: tmp11, secondaryText: name };
    cResult[3] = name;
    cResult[4] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== channel.id) {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
    cResult[5] = channel.id;
    cResult[6] = C;
  } else {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
    const items = [size];
    cResult[7] = items;
    tmp16 = items;
  } else {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
  }
  if (cResult[8] !== guild) {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
    const obj4 = { cutouts: tmp16, children: closure_5(GuildIconDefault, obj5) };
    obj5 = { guild, selected: false };
    const tmp19 = ClipViewDefault;
    cResult[8] = guild;
    cResult[9] = closure_5(tmp19, obj4);
    const tmp20 = closure_5(tmp19, obj4);
  } else {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
  }
  if (cResult[10] !== tmp4.warningIcon) {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
    const obj6 = { style: tmp4.warningIcon, color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    const WarningIcon = tmp(4803).WarningIcon;
    cResult[10] = tmp4.warningIcon;
    cResult[11] = closure_5(WarningIcon, obj6);
    const tmp23 = closure_5(WarningIcon, obj6);
  } else {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
  }
  if (cResult[12] === tmp4.warningBadge) {
    class C {
      constructor() {
        obj = closure_0(closure_2[11]);
        transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
        return;
      }
    }
    if (cResult[15] === tmp17) {
      class C {
        constructor() {
          obj = closure_0(closure_2[11]);
          transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
          return;
        }
      }
      if (cResult[18] !== tmp7) {
        class C {
          constructor() {
            obj = closure_0(closure_2[11]);
            transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
            return;
          }
        }
        const obj7 = { text: tmp7 };
        cResult[18] = tmp7;
        cResult[19] = closure_5(channel(12486).SystemMessageText, obj7);
        const tmp31 = closure_5(channel(12486).SystemMessageText, obj7);
      } else {
        class C {
          constructor() {
            obj = closure_0(closure_2[11]);
            transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
            return;
          }
        }
      }
      if (cResult[20] === tmp14) {
        class C {
          constructor() {
            obj = closure_0(closure_2[11]);
            transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
            return;
          }
        }
      }
      const obj8 = { icon: tmp26, header: tmp14, children: tmp30, onPress: C, notification };
      cResult[20] = tmp14;
      cResult[21] = notification;
      cResult[22] = C;
      cResult[23] = tmp26;
      cResult[24] = tmp30;
      cResult[25] = closure_5(channel(12516).NotificationPressable, obj8);
      const tmp34 = closure_5(channel(12516).NotificationPressable, obj8);
    }
    const obj9 = { children: items1 };
    items1 = [tmp17, tmp24];
    cResult[15] = tmp17;
    cResult[16] = tmp24;
    cResult[17] = closure_7(closure_6, obj9);
    const tmp29 = closure_7(closure_6, obj9);
  }
  const obj10 = { style: tmp4.warningBadge, children: tmp21 };
  cResult[12] = tmp4.warningBadge;
  cResult[13] = tmp21;
  cResult[14] = closure_5(View, obj10);
  const tmp25 = closure_5(View, obj10);
}) : ((notification) => {
  let WarningIcon;
  let items2;
  let items3;
  let obj3;
  let obj6;
  let stringResult;
  notification = notification.notification;
  const channel = notification.channel;
  const guild = notification.guild;
  const key = notification.key;
  const tmp = closure_9();
  let obj = channel(12480);
  const incidentData = obj.useGuildIncidentsState(key).incidentData;
  let raidDetectedAt;
  if (incidentData != null) {
    raidDetectedAt = incidentData.raidDetectedAt;
  }
  if (null != raidDetectedAt) {
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t.Mn3elp);
  } else {
    let intl = tmp2(1126).intl;
    stringResult = intl.string(tmp2(1126).t.evRhwg);
  }
  const items = [guild];
  const items1 = [channel.id];
  const memo = react.useMemo(() => {
    let intl;
    let name;
    const obj = { type: "simple", text: intl.string(intl4.t["2IY4YN"]), secondaryText: name };
    intl = intl4.intl;
    name = undefined;
    if (guild != null) {
      name = guild.name;
    }
    return obj;
  }, items);
  const callback = react.useCallback(() => {
    const obj = transitionToChannel;
    obj.transitionToChannel(channel.id, { navigationReplace: true });
  }, items1);
  const obj2 = { icon: closure_7(closure_6, obj3), header: memo, children: closure_5(channel(12486).SystemMessageText, { text: stringResult }), onPress: callback, notification };
  obj3 = { children: items3 };
  const NotificationPressable = tmp2(12516).NotificationPressable;
  const obj4 = { cutouts: items2, children: closure_5(guild(5971), { guild, selected: false }) };
  items2 = [size];
  const tmp8 = guild(8469);
  items3 = [closure_5(tmp8, obj4), ];
  const obj5 = { style: tmp.warningBadge, children: closure_5(WarningIcon, obj6) };
  obj6 = { style: tmp.warningIcon, color: guild(587).colors.ICON_FEEDBACK_WARNING };
  WarningIcon = tmp2(4803).WarningIcon;
  items3[1] = closure_5(View, obj5);
  return closure_5(NotificationPressable, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default tmp4;