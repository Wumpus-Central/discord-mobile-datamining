// discord_app/modules/in_app_notifications/native/AlertNotification.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import ClipViewDefault from "../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let size = {
  shape: fn(8502).CutoutShape.RoundedRect,
  x: fn(5978).ImageSizes[fn(undefined, 5978).GuildIconSizes.NORMAL] - -6 - 24,
  y: -6,
  width: 24,
  height: 24,
  cornerRadius: nativeDefault.radii.sm,
};
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({
  warningBadge: {
    position: "absolute",
    top: -6,
    right: -6,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  warningIcon: { width: 16, height: 16 },
});
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (notification) => {
      const cResult = channel(576).c(26);
      notification = notification.notification;
      channel = notification.channel;
      guild = notification.guild;
      const tmp4 = closure_9();
      const obj = channel(576);
      const incidentData = channel(12495).useGuildIncidentsState(notification.key).incidentData;
      let raidDetectedAt;
      if (incidentData != null) {
        raidDetectedAt = incidentData.raidDetectedAt;
      }
      if (cResult[0] !== raidDetectedAt) {
        let raidDetectedAt1;
        if (incidentData != null) {
          raidDetectedAt1 = incidentData.raidDetectedAt;
        }
        if (null != raidDetectedAt1) {
          const intl2 = tmp(1126).intl;
          let stringResult = intl2.string(tmp(1126).t.Mn3elp);
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
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult1 = intl3.string(tmp(1126).t["2IY4YN"]);
        cResult[2] = stringResult1;
        let tmp10 = stringResult1;
      } else {
        tmp10 = cResult[2];
      }
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (cResult[3] !== name) {
        const obj3 = { type: "simple", text: tmp10, secondaryText: name };
        cResult[3] = name;
        cResult[4] = obj3;
        let tmp13 = obj3;
      } else {
        tmp13 = cResult[4];
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
        const tmp15 = items;
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
        const obj4 = { cutouts: tmp15, children: null };
        const obj5 = { guild, selected: false };
        obj4.children = closure_5(GuildIconDefault, obj5);
        const tmp19 = closure_5(ClipViewDefault, obj4);
        cResult[8] = guild;
        cResult[9] = tmp19;
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
        const tmp22 = closure_5(tmp(4809).WarningIcon, obj6);
        cResult[10] = tmp4.warningIcon;
        cResult[11] = tmp22;
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
        if (cResult[15] === tmp16) {
          class C {
            constructor() {
              obj = closure_0(closure_2[11]);
              transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
              return;
            }
          }
          if (cResult[18] !== tmp6) {
            class C {
              constructor() {
                obj = closure_0(closure_2[11]);
                transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
                return;
              }
            }
            const obj7 = { text: tmp6 };
            const tmp30 = closure_5(tmp(12501).SystemMessageText, obj7);
            cResult[18] = tmp6;
            cResult[19] = tmp30;
          } else {
            class C {
              constructor() {
                obj = closure_0(closure_2[11]);
                transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
                return;
              }
            }
          }
          if (cResult[20] === tmp13) {
            class C {
              constructor() {
                obj = closure_0(closure_2[11]);
                transitionToChannelResult = obj.transitionToChannel(channel.id, { navigationReplace: true });
                return;
              }
            }
          }
          const obj8 = { icon: tmp25, header: tmp13, children: tmp29, onPress: C, notification };
          const tmp33 = closure_5(tmp(12531).NotificationPressable, obj8);
          cResult[20] = tmp13;
          cResult[21] = notification;
          cResult[22] = C;
          cResult[23] = tmp25;
          cResult[24] = tmp29;
          cResult[25] = tmp33;
        }
        const obj9 = { children: null };
        const items1 = [tmp16, tmp23];
        obj9.children = items1;
        const tmp28 = closure_7(closure_6, obj9);
        cResult[15] = tmp16;
        cResult[16] = tmp23;
        cResult[17] = tmp28;
      }
      const tmp24 = closure_5(View, { style: tmp4.warningBadge, children: tmp20 });
      cResult[12] = tmp4.warningBadge;
      cResult[13] = tmp20;
      cResult[14] = tmp24;
      const obj10 = { style: tmp4.warningBadge, children: tmp20 };
      const obj2 = channel(12495);
    }
  : (notification) => {
      notification = notification.notification;
      const channel = notification.channel;
      guild = notification.guild;
      const tmp = closure_9();
      const incidentData = channel(12495).useGuildIncidentsState(notification.key).incidentData;
      let raidDetectedAt;
      if (incidentData != null) {
        raidDetectedAt = incidentData.raidDetectedAt;
      }
      if (null != raidDetectedAt) {
        const intl2 = tmp2(1126).intl;
        let stringResult = intl2.string(tmp2(1126).t.Mn3elp);
      } else {
        let intl = tmp2(1126).intl;
        stringResult = intl.string(tmp2(1126).t.evRhwg);
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
      const obj2 = { icon: null, header: null, children: null, onPress: null, notification: null };
      const obj3 = { children: null };
      const obj4 = { cutouts: null, children: null };
      const items2 = [size];
      obj4.cutouts = items2;
      let obj = channel(12495);
      obj4.children = closure_5(guild(5978), { guild, selected: false });
      const items3 = [closure_5(guild(8502), obj4)];
      const obj5 = { style: tmp.warningBadge, children: null };
      const tmp8 = guild(8502);
      obj5.children = closure_5(channel(4809).WarningIcon, {
        style: tmp.warningIcon,
        color: guild(587).colors.ICON_FEEDBACK_WARNING,
      });
      items3[1] = closure_5(View, obj5);
      obj3.children = items3;
      obj2.icon = closure_7(closure_6, obj3);
      obj2.header = memo;
      obj2.children = closure_5(channel(12501).SystemMessageText, { text: stringResult });
      obj2.onPress = callback;
      obj2.notification = notification;
      return closure_5(channel(12531).NotificationPressable, obj2);
    };
