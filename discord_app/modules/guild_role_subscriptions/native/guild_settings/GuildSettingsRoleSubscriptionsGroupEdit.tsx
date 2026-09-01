// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx
import ApplicationRejectedNoticeDefault from "GuildSettingsRoleSubscriptionContainer.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ApplicationTypes } from "../../../applications/ApplicationConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function GuildSettingsRoleSubscriptionsGroupEditInner(guildId) {
  guildId = guildId.guildId;
  let navigation;
  let subscriptionsSettings;
  let isFullServerGating;
  let first;
  let callback;
  let str;
  let first1;
  let loading;
  let updateSubscriptionsSettings;
  error = undefined;
  closure_11 = undefined;
  callback = undefined;
  let obj = guildId(isFullServerGating[6]);
  navigation = obj.useNavigation();
  obj1 = guildId(isFullServerGating[7]);
  subscriptionsSettings = obj1.useSubscriptionsSettings(guildId);
  isFullServerGating = navigation(isFullServerGating[8])(guildId).isFullServerGating;
  const application = navigation(isFullServerGating[9])(guildId, loading.GUILD_ROLE_SUBSCRIPTIONS).application;
  let obj2 = str;
  const tmp7 = callback(str.useState(null), 2);
  first = tmp7[0];
  callback = tmp9;
  let description;
  if (subscriptionsSettings != null) {
    description = subscriptionsSettings.description;
  }
  let tmp6Result = tmp6(str.useState(description), 2);
  str = tmp6Result[0];
  tmp6Result = tmp6(obj2.useState(isFullServerGating), 2);
  first1 = tmp6Result[0];
  updateSubscriptionsSettings = guildId(isFullServerGating[7]).useUpdateSubscriptionsSettings();
  loading = updateSubscriptionsSettings.loading;
  updateSubscriptionsSettings = updateSubscriptionsSettings.updateSubscriptionsSettings;
  error = updateSubscriptionsSettings.error;
  let tmp15 = null != first;
  if (!tmp15) {
    let tmp16 = null != str;
    if (tmp16) {
      let description1;
      if (subscriptionsSettings != null) {
        description1 = subscriptionsSettings.description;
      }
      tmp16 = str !== description1;
    }
    if (tmp16) {
      tmp16 = 0 !== str.length;
    }
    tmp15 = tmp16;
  }
  if (!tmp15) {
    tmp15 = isFullServerGating !== first1;
  }
  closure_11 = tmp15;
  let tmp18 = first;
  if (first == null) {
    let cover_image_asset;
    if (subscriptionsSettings != null) {
      cover_image_asset = subscriptionsSettings.cover_image_asset;
    }
    let source = null;
    if (null != cover_image_asset) {
      source = null;
      if (null != application) {
        obj = { application_id: null, image_asset: null };
        obj[0] = application.id;
        obj[1] = subscriptionsSettings.cover_image_asset;
        source = subscriptionsSettings(tmp2[11]).getSource(obj);
        const obj5 = subscriptionsSettings(tmp2[11]);
      }
    }
    tmp18 = source;
  }
  const items = [str, guildId, updateSubscriptionsSettings, subscriptionsSettings, first, first1, isFullServerGating];
  callback = obj2.useCallback(
    first(function* () {
      if (description === 2) {
        description = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          description = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              description = 3;
              throw arg1;
            } else if (arg0 === 2) {
              description = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = tmp2;
              let tmp11 = null != closure_1_6;
              if (tmp11) {
                description = undefined;
                if (description != null) {
                  description = description.description;
                }
                tmp11 = arr !== description;
              }
              if (tmp11) {
                tmp11 = 0 !== arr.length;
              }
              obj1 = {};
              if (tmp11) {
                obj1.description = arr;
              }
              if (null != closure_1_4) {
                obj1.cover_image = closure_1_4.uri;
              }
              if (closure_1_3 !== closure_1_7) {
                obj1.full_server_gate = closure_1_7;
              }
              let obj2 = v0(closure_1_3[12]);
              if (obj2.isEmpty(obj1)) {
                description = 3;
              } else {
                v0 = 1;
                description = 1;
                obj2 = { value: null, done: false };
                obj2[0] = closure_1_9(closure_1_0, obj1);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            description = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            callback(null);
          }
          description = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp17) {
          description = tmp;
          throw tmp17;
        }
      }
    }),
    items,
  );
  const items1 = [navigation, tmp15, loading, callback];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (loading) {
      let fn = () => callback2(callback(table[13]).HeaderSubmittingIndicator, {});
    } else if (closure_11) {
      fn = () => {
        const obj = { text: null, onPress: null };
        const intl = closure_1_0(closure_1_3[15]).intl;
        obj[0] = intl.string(closure_1_0(closure_1_3[15]).t["R3BPH+"]);
        obj[1] = closure_12;
        return closure_1_9(closure_1_0(closure_1_3[14]).HeaderActionButton, obj);
      };
    } else {
      fn = () => null;
    }
    navigation.setOptions({ headerRight: fn });
  }, items1);
  const items2 = [error];
  const effect = obj2.useEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = tmp(tmp2[15]).intl;
        anyErrorMessage = intl.string(tmp(tmp2[15]).t.ZUEGFn);
      }
      guildId(isFullServerGating[16]).presentError(anyErrorMessage);
      const obj2 = guildId(isFullServerGating[16]);
    }
  }, items2);
  obj = { contentContainerStyle: null, children: null };
  obj1 = { paddingBottom: tmp5(tmp2[10])({}).insets.bottom + tmp5(tmp2[17]).space.PX_16 };
  obj[0] = obj1;
  const items3 = [
    updateSubscriptionsSettings(navigation(isFullServerGating[18]), {
      isFullServerGating: first1,
      onChange: tmp6Result[1],
    }),
  ];
  obj2 = { cover: tmp18, setCover: tmp9, description: null, setDescription: null };
  if (str == null) {
    let description2;
    if (subscriptionsSettings != null) {
      description2 = subscriptionsSettings.description;
    }
    str = description2;
  }
  if (str == null) {
    str = "";
  }
  obj2[2] = str;
  obj2[3] = tmp6Result[1];
  items3[1] = updateSubscriptionsSettings(guildId(isFullServerGating[19]).Content, obj2);
  obj[1] = items3;
  return error(first1, obj);
}
({ jsx: c9, jsxs: c10 } = jsxProd);
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx",
);

export default function GuildSettingsRoleSubscriptionsGroupEdit(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: callback2(GuildSettingsRoleSubscriptionsGroupEditInner, { guildId }) };
  return callback2(ApplicationRejectedNoticeDefault, obj);
}
