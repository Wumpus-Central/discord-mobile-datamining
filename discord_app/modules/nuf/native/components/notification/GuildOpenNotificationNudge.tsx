// discord_app/modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildOnboardingUtils from "../../../../guild_onboarding/GuildOnboardingUtils.tsx";
import PushNotificationActionCreators from "../../../../../actions/native/PushNotificationActionCreators.tsx";
import NotificationNudgeBottomSheetDefault from "NotificationNudgeBottomSheet.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../../../stores/SelectedGuildStore.tsx";
import UserGuildSettingsStore from "../../../../../stores/UserGuildSettingsStore.tsx";
import PushNotificationPermissionStore from "../../../../../stores/native/PushNotificationPermissionStore.tsx";

require = fn;
const PermissionPromptType = fn(12409).PermissionPromptType;
const NotificationPermissionConstants = fn(12410);
({ EventActionLocation: closure_11, NotificationNudgeSurface: closure_12 } = NotificationPermissionConstants);
const Constants = fn(1074);
({ UserNotificationSettings: map1, ZERO_STRING_GUILD_ID: closure_14 } = Constants);
const jsx = fn(21).jsx;
let c16 = "guild-open-notification-nudge-key";
let closure_17 = { cooldownDurationMs: 5184000000 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/GuildOpenNotificationNudge.tsx");

export default function GuildOpenNotificationNudge(guildId) {
  guildId = guildId.guildId;
  ({ markAsDismissed, onHide } = guildId);
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
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
  const intl = guildId(1114).intl;
  obj.title = intl.formatToPlainString(guildId(1114).t.tyWHMY, { guildName: stateFromStores });
  const intl2 = guildId(1114).intl;
  obj.body = intl2.string(guildId(1114).t["ehJH+P"]);
  obj.actionLocation = constants.GUILD_OPEN;
  obj.surface = constants2.GUILD_OPEN_BOTTOM_SHEET;
  obj.markAsDismissed = markAsDismissed;
  obj.onHide = onHide;
  return jsx(NotificationNudgeBottomSheetDefault, {
    title: null,
    body: null,
    actionLocation: null,
    surface: null,
    markAsDismissed: null,
    onHide: null,
  });
}
export const GUILD_OPEN_NOTIFICATION_NUDGE_KEY = "guild-open-notification-nudge-key";
export const useGuildOpenNudge = function useGuildOpenNudge() {
  const items = [SelectedGuildStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    if (guildId == null) {
      guildId = null;
    }
    return guildId;
  });
  let obj = stateFromStores(504);
  let obj2 = stateFromStores3(15481);
  const canSeePushNotificationNudge = stateFromStores(12411).useCanSeePushNotificationNudge();
  const obj3 = stateFromStores(12411);
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => {
    let isMutedResult = null == stateFromStores;
    if (!isMutedResult) {
      isMutedResult = UserGuildSettingsStore.isMuted(tmp);
    }
    return isMutedResult;
  });
  const obj4 = stateFromStores(504);
  const items2 = [UserGuildSettingsStore];
  const stateFromStores2 = stateFromStores(504).useStateFromStores(items2, () => {
    if (null != stateFromStores) {
      let NO_MESSAGES = UserGuildSettingsStore.getMessageNotifications(tmp);
    } else {
      NO_MESSAGES = constants3.NO_MESSAGES;
    }
    return NO_MESSAGES;
  });
  const obj5 = stateFromStores(504);
  const items3 = [GuildStore, markAsDismissed];
  stateFromStores3 = stateFromStores(504).useStateFromStores(items3, () => {
    let result = null != stateFromStores;
    if (result) {
      const guild = GuildStore.getGuild(tmp);
      result = GuildOnboardingUtils.isBlockedByOnboarding(guild, GuildMemberStore.getSelfMember(tmp));
    }
    return result;
  });
  dependencyMap = first.useRef(stateFromStores);
  const tmp9 = _slicedToArray(first.useState(stateFromStores3), 2);
  _slicedToArray = tmp9[1];
  const items4 = [stateFromStores, stateFromStores3];
  const effect = first.useEffect(() => {
    ref.current = stateFromStores;
    if (ref.current !== stateFromStores) {
      closure_3(stateFromStores3);
    } else if (stateFromStores3) {
      closure_3(true);
    }
  }, items4);
  const obj6 = stateFromStores(504);
  const obj7 = first;
  const tmp8 = _slicedToArray;
  const items5 = [PushNotificationPermissionStore];
  let tmp12 = null != stateFromStores;
  const stateFromStores4 = stateFromStores(504).useStateFromStores(items5, () => {
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
    let tmpResult = tmp(4399);
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
  tmpResult = tmp(7388);
  let prop = null;
  if (tmp12) {
    prop = tmp(1943).DismissibleContent.NOTIFICATION_NUDGE_GUILD_OPEN_PER_GUILD;
  }
  let tmp15 = stateFromStores;
  if (stateFromStores == null) {
    tmp15 = closure_14;
  }
  const tmp8Result = tmp8(tmpResult.useSelectedTimeRecurringGuildDismissibleContent(prop, tmp15, closure_17), 2);
  first = tmp8Result[0];
  markAsDismissed = tmp18;
  const items6 = [stateFromStores, tmp8Result[1], first];
  const effect1 = obj7.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != first;
    }
    if (tmp2) {
      let obj = PushNotificationActionCreators;
      const result = obj.setPushPermissionReactivationSeen(PermissionPromptType.GUILD_OPEN_BOTTOM_SHEET);
      obj = { guildId: stateFromStores, markAsDismissed };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16524, dependencyMap.paths), c16, obj);
    }
  }, items6);
};
