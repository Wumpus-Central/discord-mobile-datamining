// === Module 17543: GuildSettingsRoleSubscriptionsGroupEdit ===

// Module 17543 (GuildSettingsRoleSubscriptionsGroupEdit)
import util from "util" /* 1115 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 17558 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildSettingsRoleSubscriptionsGroupEditInner(guildId) {
  guildId = guildId.guildId;
  let isFullServerGating;
  _slicedToArray = undefined;
  str = undefined;
  let first1;
  let loading;
  let updateSubscriptionsSettings;
  let error;
  closure_11 = undefined;
  let callback;
  const navigation = guildId(isFullServerGating[6]).useNavigation();
  let obj = guildId(isFullServerGating[6]);
  const subscriptionsSettings = guildId(isFullServerGating[7]).useSubscriptionsSettings(guildId);
  isFullServerGating = navigation(isFullServerGating[8])(guildId).isFullServerGating;
  const application = navigation(isFullServerGating[9])(guildId, loading.GUILD_ROLE_SUBSCRIPTIONS).application;
  const tmp7 = _slicedToArray(str.useState(null), 2);
  const first = tmp7[0];
  _slicedToArray = tmp9;
  let description;
  if (subscriptionsSettings != null) {
    description = subscriptionsSettings.description;
  }
  [str, obj8.setDescription] = str.useState(description);
  const tmp6Result2 = _slicedToArray(str.useState(isFullServerGating), 2);
  first1 = tmp6Result2[0];
  let obj2 = guildId(isFullServerGating[7]);
  const updateSubscriptionsSettings1 = guildId(isFullServerGating[7]).useUpdateSubscriptionsSettings();
  loading = updateSubscriptionsSettings1.loading;
  updateSubscriptionsSettings = updateSubscriptionsSettings1.updateSubscriptionsSettings;
  error = updateSubscriptionsSettings1.error;
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
        let obj4 = { application_id: application.id, image_asset: subscriptionsSettings.cover_image_asset };
        source = subscriptionsSettings(tmp2[11]).getSource(obj4);
        let obj5 = subscriptionsSettings(tmp2[11]);
      }
    }
    tmp18 = source;
  }
  const items = [str, guildId, updateSubscriptionsSettings, subscriptionsSettings, first, first1, isFullServerGating];
  callback = obj3.useCallback(first(function*() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp2;
            let tmp11 = null != str;
            if (tmp11) {
              let description;
              if (subscriptionsSettings != null) {
                description = subscriptionsSettings.description;
              }
              tmp11 = arr !== description;
            }
            if (tmp11) {
              tmp11 = 0 !== arr.length;
            }
            const obj5 = {};
            if (tmp11) {
              obj5.description = arr;
            }
            if (null != first) {
              obj5.cover_image = first.uri;
            }
            if (isFullServerGating !== first1) {
              obj5.full_server_gate = first1;
            }
            if (obj3.isEmpty(obj5)) {
              c2 = 3;
            } else {
              v1 = 1;
              c2 = 1;
              const obj6 = { value: updateSubscriptionsSettings(guildId, obj5), done: false };
              return obj6;
            }
            obj3 = v1(isFullServerGating[12]);
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_5(null);
        }
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp17) {
        c2 = tmp;
        throw tmp17;
      }
    }
  }), items);
  const items1 = [navigation, tmp15, loading, callback];
  const layoutEffect = obj3.useLayoutEffect(() => {
    if (loading) {
      let fn = () => updateSubscriptionsSettings(guildId(isFullServerGating[13]).HeaderSubmittingIndicator, {});
    } else if (closure_11) {
      fn = () => {
        const obj = { text: null, onPress: null };
        const intl = guildId(isFullServerGating[15]).intl;
        obj.text = intl.string(guildId(isFullServerGating[15]).t["R3BPH+"]);
        obj.onPress = onPress;
        return updateSubscriptionsSettings(guildId(isFullServerGating[14]).HeaderActionButton, obj);
      };
    } else {
      fn = () => null;
    }
    navigation.setOptions({ headerRight: fn });
  }, items1);
  const items2 = [error];
  const effect = obj3.useEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = util.intl;
        anyErrorMessage = intl.string(util.t.ZUEGFn);
      }
      ToastUtils.presentError(anyErrorMessage);
    }
  }, items2);
  let obj6 = { contentContainerStyle: null, children: null };
  const tmpResult = guildId(isFullServerGating[7]);
  obj6.contentContainerStyle = { paddingBottom: navigation(isFullServerGating[10])({}).insets.bottom + navigation(isFullServerGating[17]).space.PX_16 };
  const items3 = [updateSubscriptionsSettings(navigation(isFullServerGating[18]), { isFullServerGating: first1, onChange: tmp6Result2[1] }), ];
  const obj8 = { cover: tmp18, setCover: tmp7[1], description: null, setDescription: null };
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
  obj8.description = str;
  items3[1] = updateSubscriptionsSettings(guildId(isFullServerGating[19]).Content, obj8);
  obj6.children = items3;
  return error(first1, obj6);
}
const ScrollView = fn(17).ScrollView;
const ApplicationTypes = fn(1349).ApplicationTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx");

export default function GuildSettingsRoleSubscriptionsGroupEdit(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: React7(GuildSettingsRoleSubscriptionsGroupEditInner, { guildId }) };
  return React7(GuildSettingsRoleSubscriptionContainerDefault, obj);
};