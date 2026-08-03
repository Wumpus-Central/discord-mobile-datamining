// === Module 15178: ProgressBar ===

// Module 15178 (ProgressBar)
import set from "set";
import { View } from "Button";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import closure_7 from "set";
import { StaticChannelRoute } from "set";
import { GuildMemberFlags } from "GuildMemberFlags";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
function ProgressBar(percent) {
  const tmp = createCacheKey();
  let obj = { style: tmp.progressBackground, children: null };
  obj = { style: null, colors: null, useAngle: true, angle: -90 };
  const items = [tmp.progressForeground, ];
  obj = { width: null };
  obj[0] = "" + percent.percent + "%";
  items[1] = obj;
  obj[0] = items;
  obj[1] = ["rgba(103, 203, 134, 1)", "rgba(59, 165, 92, 1)"];
  obj[1] = callback(importDefault(4677), obj);
  return callback(View, obj);
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: { padding: 16 }, horizontal: { flexDirection: "row", alignItems: "center" }, spaceBetween: { justifyContent: "space-between" }, spaceBelow: { marginBottom: 8 }, progressBackground: null, progressForeground: null };
createCacheKey = { borderRadius: require("Themes").radii.round, height: 8, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { backgroundColor: require("Themes").colors.STATUS_POSITIVE_BACKGROUND, borderRadius: require("Themes").radii.round, height: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.STATUS_POSITIVE_BACKGROUND, borderRadius: require("Themes").radii.round, height: 8 };
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx");

export const NewMemberActionsProgress = function NewMemberActionsProgress(guildId) {
  guildId = guildId.guildId;
  let stateFromStores;
  let stateFromStores1;
  const tmp = createCacheKey();
  let obj = guildId(stateFromStores1[11]);
  const items = [handleSettingsLoadSuccess];
  const items1 = [guildId];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getNewMemberActions(guildId), items1);
  let obj1 = guildId(stateFromStores1[11]);
  const items2 = [closure_7];
  stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_7.getCompletedActions(guildId));
  let obj2 = guildId(stateFromStores1[11]);
  const items3 = [trackCommunicationDisabled];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => outer1_5.getSelfMember(guildId));
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.length;
  }
  if (num == null) {
    num = 0;
  }
  const items4 = [stateFromStores1, stateFromStores];
  const memo = React.useMemo(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        let c0 = 0;
        const item = stateFromStores.forEach((arg0) => {
          if (null != outer1_2[arg0.channelId]) {
            closure_0 = closure_0 + 1;
          }
        });
        return c0;
      }
    }
    return 0;
  }, items4);
  let num2;
  if (stateFromStores2 != null) {
    num2 = stateFromStores2.flags;
  }
  if (num2 == null) {
    num2 = 0;
  }
  let tmp7 = null;
  if (!tmp2Result.hasFlag(num2, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
    tmp7 = null;
    if (0 !== num) {
      tmp7 = null;
      if (memo + num !== 0) {
        obj = { accessibilityRole: "button", activeOpacity: 0.4, style: null, onPress: null, children: null };
        obj[2] = tmp.container;
        obj[3] = function onPress() {
          guildId(stateFromStores1[14]).transitionTo(constants.GUILD_HOME);
        };
        obj = { style: null, children: null };
        const items5 = [, , ];
        ({ horizontal: arr7[0], spaceBetween: arr7[1], spaceBelow: arr7[2] } = tmp);
        obj[0] = items5;
        obj1 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp2(tmp3[16]).intl;
        obj1[2] = intl.string(tmp2(tmp3[16]).t.LhlgY9);
        const items6 = [callback(tmp2(tmp3[15]).Text, obj1), ];
        obj2 = { style: null, children: null };
        obj2[0] = tmp.horizontal;
        const obj3 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: null };
        obj3[2] = memo;
        const items7 = [callback(tmp2(tmp3[15]).Text, obj3), callback(tmp2(tmp3[15]).Text, { variant: "text-xs/medium", color: "text-default", children: "/" }), , ];
        const obj4 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: null };
        obj4[2] = num;
        items7[2] = callback(tmp2(tmp3[15]).Text, obj4);
        const obj5 = { size: null, source: null };
        obj5[0] = tmp2(tmp3[17]).Icon.Sizes.REFRESH_SMALL_16;
        obj5[1] = stateFromStores(tmp3[18]);
        items7[3] = callback(tmp2(tmp3[17]).Icon, obj5);
        obj2[1] = items7;
        items6[1] = callback2(View, obj2);
        obj[1] = items6;
        const items8 = [callback2(View, obj), ];
        const obj6 = { percent: null };
        obj6[0] = memo / num * 100 + 3;
        items8[1] = callback(ProgressBar, obj6);
        obj[4] = items8;
        tmp7 = callback2(tmp2(tmp3[13]).PressableOpacity, obj);
      }
    }
  }
  return tmp7;
};