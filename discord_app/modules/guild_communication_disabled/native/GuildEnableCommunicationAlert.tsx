// discord_app/modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx
import closure_3 from "getFriendlyDurationString";
import _slicedToArray from "_slicedToArray";
import "componentDidMount";
import { View } from "Text";
import mergeGuildAvatar from "mergeGuildAvatar";
import getFriendlyDurationString from "getFriendlyDurationString";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let Fonts;
let c10;
let c9;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: error, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: metroImportAll } = getFriendlyDurationString);
({ AnalyticEvents: c9, Fonts } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { fontFamily: Fonts.PRIMARY_SEMIBOLD };
let closure_12 = createCacheKey.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, cta: { paddingTop: 8 }, countdown: createCacheKey });
const result = require("noop").fileFinishedImporting("modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx");

export default function GuildEnableCommunicationAlert(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const merged = Object.assign(guildId, Object.create(null));
  let dependencyMap;
  let closure_3;
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
          return { value: "HermesInternal", done: null };
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
              let closure_0 = tmp4;
              let obj1 = v0(11301);
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.setCommunicationDisabledDuration(outer1_0, v0);
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
            const intl = outer1_0(1236).intl;
            obj2[1] = intl.string(outer1_0(1236).t["/Mmbfv"]);
            obj2[2] = v0(9924);
            v0(4062).open(obj2);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          dependencyMap = tmp;
          throw tmp9;
        }
      }
    });
    const _handleConfirmRemoveTimeout = tmp;
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
  closure_3 = _handleConfirmRemoveTimeout(userId(8125)(userId, guildId), 1)[0];
  userId(4770)(() => {
    let obj = userId(_undefined[11]);
    obj = { type: outer1_7, guild_id: guildId, other_user_id: userId };
    obj.track(outer1_9.OPEN_MODAL, obj);
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
  obj = { style: tmp2.body, children: null };
  obj = { style: tmp2.description, variant: "text-sm/medium", children: null };
  const intl4 = tmp9(1236).intl;
  user = user.getUser(userId);
  const tmp11 = closure_11;
  const tmp12 = View;
  const tmp3 = userId;
  const tmp7 = userId(4772);
  let str = userId(4533).getName(guildId, null, user);
  if (str == null) {
    str = "";
  }
  obj[2] = intl4.format(guildId(1236).t["t+abNU"], {
    username: str,
    countdown(arg0) {
      let num = 0;
      if (null != closure_3) {
        const _Date = Date;
        num = new Date(tmp);
      }
      return outer1_10(userId(_undefined[19]), { style: _undefined.countdown, deadline: num, withUnits: true });
    }
  });
  const items = [closure_10(guildId(4340).Text, obj), ];
  let obj2 = { style: items1, variant: "text-sm/medium", children: null };
  items1 = [, ];
  ({ cta: arr2[0], description: arr2[1] } = tmp2);
  const intl5 = tmp9(1236).intl;
  obj2[2] = intl5.format(guildId(1236).t.KtENkK, { link: closure_8 });
  items[1] = closure_10(guildId(4340).Text, obj2);
  obj[1] = items;
  obj.children = tmp11(tmp12, obj);
  return closure_10(tmp7, obj);
};