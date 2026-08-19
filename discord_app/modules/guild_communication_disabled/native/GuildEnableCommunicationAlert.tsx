// discord_app/modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import getFriendlyDurationString from "../GuildDisableCommunicationConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: error, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8 } = getFriendlyDurationString);
({ AnalyticEvents: c9, Fonts } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const createCacheKey = { fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_12 = createCacheKey.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, cta: { paddingTop: 8 }, countdown: createCacheKey });
const result = require("obj132").fileFinishedImporting("modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx");

export default function GuildEnableCommunicationAlert(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const merged = Object.assign(guildId, Object.create(null));
  function _handleConfirmRemoveTimeout(arg0, arg1) {
    const self = this;
    const tmp = callback(function*() {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp4;
              obj1 = v0(11022);
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.setCommunicationDisabledDuration(closure_1_0, v0);
              return obj1;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const obj2 = { key: "GUILD_ENABLE_COMMUNICATION_SUCCESS", content: null, icon: null };
            const intl = closure_1_0(1236).intl;
            obj2[1] = intl.string(closure_1_0(1236).t["/Mmbfv"]);
            obj2[2] = v0(8764);
            v0(4094).open(obj2);
            dependencyMap = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp9) {
          dependencyMap = tmp;
          throw tmp9;
        }
      }
    });
    closure_4 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const tmp2 = callback();
  dependencyMap = tmp2;
  closure_3 = _handleConfirmRemoveTimeout(userId(8200)(userId, guildId), 1)[0];
  userId(4761)(() => {
    userId(countdown[11]);
    const obj = { type: closure_1_7, guild_id: guildId, other_user_id: userId };
    obj.track(closure_1_9.OPEN_MODAL, obj);
  });
  let obj = {};
  const merged1 = Object.assign(merged);
  let intl = guildId(1236).intl;
  obj.title = intl.string(guildId(1236).t["+ZD3ou"]);
  obj.style = tmp2.wrapper;
  const intl2 = guildId(1236).intl;
  obj.cancelText = intl2.string(guildId(1236).t["ETE/oC"]);
  let onClose;
  if (merged != null) {
    onClose = merged.onClose;
  }
  obj.onClose = onClose;
  obj.onCancel = guildId.onCancel;
  const intl3 = tmp9(1236).intl;
  obj.confirmText = intl3.string(guildId(1236).t.qXtNtS);
  obj.onConfirm = function handleConfirmRemoveTimeout() {
    const self = this;
    const apply = _handleConfirmRemoveTimeout.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj = { style: tmp2.description, variant: "text-sm/medium", children: null };
  const intl4 = tmp9(1236).intl;
  user = user.getUser(userId);
  const tmp7 = userId(4763);
  let str = userId(4796).getName(guildId, null, user);
  if (str == null) {
    str = "";
  }
  obj[2] = intl4.format(guildId(1236).t["t+abNU"], {
    username: str,
    countdown(arg0) {
      let num = 0;
      if (null != closure_3) {
        const _Date = Date;
        num = new Date(closure_3);
      }
      return closure_1_10(userId(countdown[19]), { style: countdown.countdown, deadline: num, withUnits: true });
    }
  });
  const items = [callback(guildId(4734).Text, obj), ];
  let obj2 = { style: items1, variant: "text-sm/medium", children: null };
  items1 = [, ];
  ({ cta: arr2[0], description: arr2[1] } = tmp2);
  const intl5 = tmp9(1236).intl;
  obj2[2] = intl5.format(guildId(1236).t.KtENkK, { link: closure_8 });
  items[1] = callback(guildId(4734).Text, obj2);
  obj[1] = items;
  obj.children = callback2(View, obj);
  return callback(tmp7, obj);
};