// discord_app/modules/guild_automod/native/GuildSettingsAutoModeration.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import AutomodTriggerConfigs from "../AutomodTriggerConfigs.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const AutomodStore = fn(17940);
({ useAutomodRulesList: closure_4, useSyncAutomodRulesEffect: hasOwnProperty } = AutomodStore);
let closure_6 = fn(17942).useAutomodEditingRuleState;
const Constants = fn(1074);
({ GuildSettingsSections: closure_7, HelpdeskArticles: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  stack: { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING },
  loading: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.loading = { paddingVertical: nativeDefault.space.PX_24 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/GuildSettingsAutoModeration.tsx");

export default function GuildSettingsAutoModeration(contentContainerStyle) {
  const guildId = contentContainerStyle.guildId;
  let rulesByTriggerType;
  _slicedToArray = undefined;
  c4 = undefined;
  function renderTriggerType(guildId) {
    c0 = guildId;
    let items = rulesByTriggerType[guildId];
    if (items == null) {
      items = [];
    }
    if (0 === items.length) {
      const obj2 = { triggerType: guildId, onPress: null };
      c0 = undefined;
      obj2.onPress = () => {
        if (focused.isFocused()) {
          let GUILD_AUTOMOD_RULE = closure_0;
          if (null != closure_0) {
            c3(GUILD_AUTOMOD_RULE);
          } else {
            c4(guildId, triggerType);
          }
          GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
          const obj = { triggerType };
          focused.push(GUILD_AUTOMOD_RULE, obj);
        }
      };
      return closure_1_9(closure_1(rulesByTriggerType[11]), obj2, guildId);
    } else {
      const mapped = items.map((rule) => {
        triggerType = rule;
        return closure_2_9(
          focused(rulesByTriggerType[11]),
          {
            triggerType,
            rule,
            onPress: () => {
              if (focused.isFocused()) {
                let GUILD_AUTOMOD_RULE = closure_0;
                if (null != closure_0) {
                  c3(GUILD_AUTOMOD_RULE);
                } else {
                  c4(guildId, triggerType);
                }
                GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
                const obj = { triggerType };
                focused.push(GUILD_AUTOMOD_RULE, obj);
              }
            },
          },
          rule.id,
        );
      });
      if (items.length < guildId(rulesByTriggerType[8]).triggerConfigs[guildId].perGuildMaxCount) {
        let obj = { triggerType: guildId, onPress: null };
        c0 = undefined;
        obj.onPress = () => {
          if (focused.isFocused()) {
            let GUILD_AUTOMOD_RULE = closure_0;
            if (null != closure_0) {
              c3(GUILD_AUTOMOD_RULE);
            } else {
              c4(guildId, triggerType);
            }
            GUILD_AUTOMOD_RULE = constants.GUILD_AUTOMOD_RULE;
            const obj = { triggerType };
            focused.push(GUILD_AUTOMOD_RULE, obj);
          }
        };
        const _HermesInternal = HermesInternal;
        mapped.push(closure_1_9(closure_1(rulesByTriggerType[12]), obj, "" + guildId + "-add"));
        const tmp4 = closure_1(rulesByTriggerType[12]);
      }
      return mapped;
    }
  }
  const tmp = closure_12();
  importDefault = guildId(rulesByTriggerType[10]).useNavigation();
  rulesByTriggerType = c4(guildId).rulesByTriggerType;
  let obj = guildId(rulesByTriggerType[10]);
  ({ setEditingRule: c3, createNewEditingRule: c4 } = closure_6());
  let tmp4 = closure_6();
  const availableTriggerTypes = guildId(rulesByTriggerType[8]).useAvailableTriggerTypes(guildId);
  const obj3 = { contentContainerStyle: contentContainerStyle.contentContainerStyle, children: null };
  const obj4 = { style: tmp.stack, spacing: require("native").space.PX_24, children: null };
  const obj5 = { children: null };
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  let intl = guildId(rulesByTriggerType[9]).intl;
  obj6.children = intl.string(guildId(rulesByTriggerType[9]).t.EwuSCR);
  let items = [closure_9(guildId(rulesByTriggerType[15]).Text, obj6)];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: null };
  let intl2 = guildId(rulesByTriggerType[9]).intl;
  const obj8 = { helpUrl: null };
  let obj2 = guildId(rulesByTriggerType[8]);
  obj8.helpUrl = require("HelpdeskUtils").getArticleURL(constants2.GUILD_AUTOMOD_BLOCKED_MESSAGE);
  obj7.children = intl2.format(guildId(rulesByTriggerType[9]).t["B+sgGt"], obj8);
  items[1] = closure_9(guildId(rulesByTriggerType[15]).Text, obj7);
  obj5.children = items;
  const items1 = [closure_10(guildId(rulesByTriggerType[14]).Stack, obj5)];
  if (_slicedToArray(renderTriggerType(guildId), 1)[0]) {
    const obj10 = { style: tmp.loading };
    let mapped = closure_9(tmp2(tmp3[17]).ActivityIndicator, obj10);
  } else {
    const _Object = Object;
    const entries = Object.entries(availableTriggerTypes);
    mapped = entries.map((item) => {
      [tmp, arr] = item;
      if (0 === arr.length) {
        return null;
      } else {
        let obj = dependencyMap;
        if (AutomodTriggerConfigs.AutomodTriggerCategory.MEMBERS === tmp) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.sx4E5v);
        } else if (AutomodTriggerConfigs.AutomodTriggerCategory.CONTENT === tmp) {
          const intl = util.intl;
          stringResult = intl.string(util.t.fphZb0);
        }
        obj = { title: stringResult, hasIcons: true, children: arr.map(renderTriggerType) };
        React7(TableRowGroup.TableRowGroup, obj, tmp);
      }
    });
  }
  const obj11 = { children: null };
  items1[1] = mapped;
  obj4.children = items1;
  obj3.children = closure_10(guildId(rulesByTriggerType[14]).Stack, obj4);
  const items2 = [
    closure_9(guildId(rulesByTriggerType[13]).Form, obj3),
    closure_9(guildId(rulesByTriggerType[19]).NavScrim, {}),
  ];
  obj11.children = items2;
  return closure_10(closure_11, obj11);
}
