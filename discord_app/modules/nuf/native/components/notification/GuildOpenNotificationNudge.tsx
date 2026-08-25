// discord_app/modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import closure_5 from "../../../../../stores/GuildMemberStore.tsx";
import closure_6 from "../../../../../stores/GuildStore.tsx";
import closure_7 from "../../../../../stores/SelectedGuildStore.tsx";
import closure_8 from "../../../../../stores/UserGuildSettingsStore.tsx";
import closure_9 from "../../../../../stores/native/PushNotificationPermissionStore.tsx";
import { PermissionPromptType } from "../../../../../stores/native/PushNotificationPermissionStore.tsx";
import EventActionType from "NotificationPermissionConstants.tsx";
import ME from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ EventActionLocation: unpackModuleId, NotificationNudgeSurface: closure_12 } = EventActionType);
({ UserNotificationSettings: map1, ZERO_STRING_GUILD_ID: closure_14 } = ME);
let c16 = "guild-open-notification-nudge-key";
let closure_17 = { cooldownDurationMs: 5184000000 };
let result = require("set").fileFinishedImporting("modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx");

export default function GuildOpenNotificationNudge(guildId) {
  guildId = guildId.guildId;
  ({ markAsDismissed, onHide } = guildId);
  let obj = guildId(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = closure_1_6.getGuild(guildId);
    let str;
    if (guild != null) {
      str = guild.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  });
  obj = { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null };
  const intl = guildId(1236).intl;
  obj[0] = intl.formatToPlainString(guildId(1236).t.tyWHMY, { guildName: stateFromStores });
  const intl2 = guildId(1236).intl;
  obj[1] = intl2.string(guildId(1236).t["ehJH+P"]);
  obj[2] = constants.GUILD_OPEN;
  obj[3] = constants2.GUILD_OPEN_BOTTOM_SHEET;
  obj[4] = markAsDismissed;
  obj[5] = onHide;
  return jsx(NotificationNudgeBottomSheetDefault, { title: null, body: null, actionLocation: null, surface: null, markAsDismissed: null, onHide: null });
};
export const GUILD_OPEN_NOTIFICATION_NUDGE_KEY = "guild-open-notification-nudge-key";
export const useGuildOpenNudge = function useGuildOpenNudge() {
  const items = [closure_7];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    return guildId;
  });
  let obj = stateFromStores(589);
  let obj2 = stateFromStores3(14883);
  const canSeePushNotificationNudge = stateFromStores(11975).useCanSeePushNotificationNudge();
  const obj3 = stateFromStores(11975);
  const items1 = [closure_8];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => {
    let isMutedResult = null == stateFromStores;
    if (!isMutedResult) {
      isMutedResult = closure_1_8.isMuted(tmp);
    }
    return isMutedResult;
  });
  const obj4 = stateFromStores(589);
  const items2 = [closure_8];
  const stateFromStores2 = stateFromStores(589).useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let NO_MESSAGES = closure_1_8.getMessageNotifications(tmp);
    } else {
      NO_MESSAGES = closure_1_13.NO_MESSAGES;
    }
    return NO_MESSAGES;
  });
  const obj5 = stateFromStores(589);
  const items3 = [closure_6, closure_5];
  stateFromStores3 = stateFromStores(589).useStateFromStores(items3, () => {
    let result = null != stateFromStores;
    if (result) {
      const guild = closure_1_6.getGuild(tmp);
      result = stateFromStores(ref[15]).isBlockedByOnboarding(guild, selfMember.getSelfMember(tmp));
      const obj = stateFromStores(ref[15]);
    }
    return result;
  });
  dependencyMap = first.useRef(stateFromStores);
  const tmp9 = callback(first.useState(stateFromStores3), 2);
  callback = tmp9[1];
  const items4 = [stateFromStores, stateFromStores3];
  const effect = first.useEffect(() => {
    ref.current = stateFromStores;
    if (ref.current !== stateFromStores) {
      callback(stateFromStores3);
    } else if (stateFromStores3) {
      callback(true);
    }
  }, items4);
  const obj6 = stateFromStores(589);
  const obj7 = first;
  const tmp8 = callback;
  const items5 = [closure_9];
  let tmp12 = null != stateFromStores;
  const stateFromStores4 = stateFromStores(589).useStateFromStores(items5, () => {
    const tmp = state.getState().promptLastSeen[constants.GUILD_OPEN_BOTTOM_SHEET];
    let tmp2 = null == tmp;
    if (!tmp2) {
      const _Date = Date;
      const _Date2 = Date;
      const timestamp = Date.now();
      const date = new Date(tmp);
      tmp2 = timestamp - date.getTime() >= 604800000;
    }
    return tmp2;
  });
  if (tmp12) {
    let tmpResult = tmp(4220);
    tmp12 = !tmpResult.isPseudoGuildId(stateFromStores);
  }
  if (tmp12) {
    tmp12 = !obj2.useConfig({ location: "useGuildOpenNudge" }).inHoldout;
  }
  if (tmp12) {
    tmp12 = canSeePushNotificationNudge;
  }
  if (tmp12) {
    tmp12 = !tmp9[0];
  }
  if (tmp12) {
    tmp12 = !stateFromStores1;
  }
  if (tmp12) {
    tmp12 = stateFromStores2 !== constants3.NO_MESSAGES;
  }
  if (tmp12) {
    tmp12 = stateFromStores4;
  }
  tmpResult = tmp(6131);
  let prop = null;
  if (tmp12) {
    prop = tmp(1377).DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD;
  }
  let tmp15 = stateFromStores;
  if (stateFromStores == null) {
    tmp15 = closure_14;
  }
  const tmp8Result = tmp8(tmpResult.useSelectedTimeRecurringGuildDismissibleContent(prop, tmp15, closure_17), 2);
  first = tmp8Result[0];
  closure_5 = tmp18;
  const items6 = [stateFromStores, tmp8Result[1], first];
  const effect1 = obj7.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != first;
    }
    if (tmp2) {
      let obj = stateFromStores(ref[19]);
      const result = obj.setPushPermissionReactivationSeen(closure_1_10.GUILD_OPEN_BOTTOM_SHEET);
      obj = { guildId: null, markAsDismissed: null };
      obj[0] = stateFromStores;
      obj[1] = closure_5;
      stateFromStores3(ref[20]).openLazy(stateFromStores(ref[22])(ref[21], ref.paths), closure_1_16, obj);
      const obj2 = stateFromStores3(ref[20]);
    }
  }, items6);
};