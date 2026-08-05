import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { NavScrim } from "../../../../design/components/Navigator/native/NavScrim.android.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Form } from "../../../../design/void/Form/native/index.tsx";
import { combined } from "../../../../utils/HelpdeskUtils.tsx";
import { useUserIsTeen } from "../../../self_mod/hooks/useUserIsTeen.tsx";
import { GuildSettingsActionCreators } from "../../GuildSettingsActionCreators.tsx";
// discord_app/modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx
import importAllResult from "Text";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleFormInit from "handleFormInit";
import ME from "ME";
import jsxProd from "Stack";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function GuildSettingsOwnerConfiguredContentLevel(guild) {
  guild = guild.guild;
  let DEFAULT = guild.nsfwLevel;
  if (DEFAULT == null) {
    DEFAULT = constants3.DEFAULT;
  }
  let DEFAULT2 = guild.ownerConfiguredContentLevel;
  if (DEFAULT2 == null) {
    DEFAULT2 = constants3.DEFAULT;
  }
  let obj = useUserIsTeen /* useUserIsTeen */;
  let tmp7 = DEFAULT === constants3.AGE_RESTRICTED;
  const userIsTeen = obj.useUserIsTeen();
  if (tmp7) {
    tmp7 = DEFAULT2 !== tmp6.AGE_RESTRICTED;
  }
  let tmp9 = null;
  if (!userIsTeen) {
    obj = { title: null, hasIcons: false, description: null, children: null };
    const intl = tmp3(1236).intl;
    obj[0] = intl.string(tmp3(1236).t.YJlvBM);
    const intl2 = tmp3(1236).intl;
    obj = { helpArticleLink: null };
    obj[0] = combined.getArticleURL(constants2.NSFW_SERVER_AGE_RESTRICTION);
    obj[2] = intl2.format(tmp3(1236).t.iyQQ62, obj);
    const obj1 = { label: null, value: null, onValueChange: null, disabled: null };
    const intl3 = tmp3(1236).intl;
    obj1[0] = intl3.string(tmp3(1236).t.N9xEJF);
    obj1[1] = DEFAULT2 === tmp6.AGE_RESTRICTED;
    obj1[2] = tmp8;
    obj1[3] = tmp7;
    obj[3] = callback(tmp3(5650).TableSwitchRow, obj1);
    tmp9 = callback(tmp3(5649).TableRowGroup, obj, "filter-section");
    const obj4 = combined;
  }
  return tmp9;
}
let c3 = importAllResult;
({ GuildFeatures: closure_6, HelpdeskArticles: error, Permissions: metroImportAll, GuildNSFWContentLevel: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { stack: null };
createCacheKey = { paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class GuildSettingsModalModeration extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleSaveChanges = function handleSaveChanges() {
      const guild = applyArgumentsResult.props.guild;
      let obj = outer1_1(outer1_2[8]);
      obj = { verificationLevel: guild.verificationLevel, explicitContentFilter: guild.explicitContentFilter, ownerConfiguredContentLevel: guild.ownerConfiguredContentLevel };
      obj.saveGuild(guild.id, obj);
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalModeration.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigation();
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
  this.updateNavigation(arg0);
};
prototype["updateNavigation"] = function updateNavigation(submitting) {
  let hasChanges;
  let navigation;
  const self = this;
  ({ submitting, hasChanges, navigation } = this.props);
  if (!tmp) {
    let fn;
    if (submitting) {
      fn = () => null;
    }
    let setOptionsResult = { headerLeft: null, headerRight: null };
    setOptionsResult[0] = fn;
    if (submitting) {
      let fn2 = () => callback(self(table[14]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: self.handleSaveChanges, text: null };
        const intl = self(outer1_2[10]).intl;
        obj[1] = intl.string(self(outer1_2[10]).t["R3BPH+"]);
        return outer1_10(self(outer1_2[15]).HeaderActionButton, obj);
      };
    }
    setOptionsResult[1] = fn2;
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
};
prototype["renderVerificationLevelSection"] = function renderVerificationLevelSection() {
  const self = this;
  const guild = this.props.guild;
  let obj = { hasIcons: false, title: null, description: null, value: null, onChange: null, children: null };
  const intl = self(1236).intl;
  obj[1] = intl.string(self(1236).t.DpRdYK);
  const intl2 = self(1236).intl;
  obj[2] = intl2.format(self(1236).t.iuRk2j, {});
  obj[3] = guild.verificationLevel;
  obj[4] = function onChange(verificationLevel) {
    return self.handleVerificationLevelChange(verificationLevel);
  };
  const features = guild.features;
  const verificationLevelOptions = self(13987).generateVerificationLevelOptions(features.has(constants.COMMUNITY));
  obj[5] = verificationLevelOptions.map((arg0) => {
    let color;
    let desc;
    let disabled;
    let name;
    let value;
    ({ name, color, value } = arg0);
    ({ desc, disabled } = arg0);
    let obj = { value, label: null, subLabel: null, disabled: null };
    let tmpResult = name;
    if (null != color) {
      obj = { variant: "text-md/semibold", style: null, children: null };
      obj = { color: null };
      obj[0] = color;
      obj[1] = obj;
      obj[2] = name;
      tmpResult = tmp(self(outer1_2[19]).Text, obj);
    }
    obj[1] = tmpResult;
    obj[2] = desc;
    const canManageGuild = self.props.canManageGuild;
    let tmp5 = !canManageGuild;
    if (canManageGuild) {
      tmp5 = disabled;
    }
    obj[3] = tmp5;
    return outer1_10(self(outer1_2[18]).TableRadioRow, obj, "level-" + value);
  });
  return callback(self(7795).TableRadioGroup, obj, "level-section");
};
prototype["renderExplicitContentFilter"] = function renderExplicitContentFilter() {
  const self = this;
  const guild = this.props.guild;
  let obj = { hasIcons: false, title: null, description: null, value: null, onChange: null, children: null };
  const intl = self(1236).intl;
  obj[1] = intl.string(self(1236).t.bPgfJz);
  const intl2 = self(1236).intl;
  obj = { helpdeskArticle: null };
  obj[0] = combined.getArticleURL(constants2.SAFE_DIRECT_MESSAGING);
  obj[2] = intl2.format(self(1236).t.BI4ukC, obj);
  obj[3] = guild.explicitContentFilter;
  obj[4] = function onChange(explicitContentFilter) {
    return self.handleExplicitContentFilterChange(explicitContentFilter);
  };
  const obj3 = combined;
  const features = guild.features;
  const contentFilterOptions = self(13987).generateContentFilterOptions(features.has(constants.COMMUNITY));
  obj[5] = contentFilterOptions.map((value) => {
    let desc;
    let disabled;
    let name;
    value = value.value;
    ({ name, desc, disabled } = value);
    const obj = { value, label: name, subLabel: desc, disabled: null };
    const canManageGuild = self.props.canManageGuild;
    let tmp2 = !canManageGuild;
    if (canManageGuild) {
      tmp2 = disabled;
    }
    obj[3] = tmp2;
    return outer1_10(self(outer1_2[18]).TableRadioRow, obj, "filter-" + value);
  });
  return callback(self(7795).TableRadioGroup, obj, "filter-section");
};
prototype["render"] = function render() {
  let guild;
  let hasChanges;
  const props = this.props;
  let canManageGuild = props.canManageGuild;
  ({ guild, hasChanges } = props);
  let obj = { contentContainerStyle: items, children: null };
  items = [{ paddingTop: 16 }, this.props.contentContainerStyle];
  obj = { style: createCacheKey(this.context).stack, spacing: null, children: null };
  obj[1] = Themes.space.PX_24;
  const items1 = [this.renderVerificationLevelSection(), this.renderExplicitContentFilter(), ];
  if (canManageGuild) {
    obj = { guild: null, hasChanges: null };
    obj[0] = guild;
    obj[1] = hasChanges;
    canManageGuild = tmp4(GuildSettingsOwnerConfiguredContentLevel, obj);
  }
  const obj1 = { children: null };
  items1[2] = canManageGuild;
  obj[2] = items1;
  obj[1] = closure_11(Stack /* Stack */.Stack, obj);
  const items2 = [closure_10(Form /* Form */.Form, obj), closure_10(NavScrim /* NavScrim */.NavScrim, {})];
  obj1[0] = items2;
  return closure_11(closure_12, obj1);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  if (this.props.hasChanges) {
    GuildSettingsActionCreators.cancelChanges(tmp.props.guild.id);
    const obj = GuildSettingsActionCreators;
  }
};
prototype["handleVerificationLevelChange"] = function handleVerificationLevelChange(verificationLevel) {
  let obj = GuildSettingsActionCreators;
  obj = { verificationLevel };
  obj.updateGuild(obj);
};
prototype["handleExplicitContentFilterChange"] = function handleExplicitContentFilterChange(explicitContentFilter) {
  let obj = GuildSettingsActionCreators;
  obj = { explicitContentFilter };
  obj.updateGuild(obj);
};
GuildSettingsModalModeration.contextType = require("ManaContext").ThemeContext;
const result = require("handleFormInit").fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx");

export default function ConnectedGuildSettingsModalModeration(contentContainerStyle) {
  let hasChanges;
  let submitting;
  let guild;
  let obj = guild(1480);
  const navigation = obj.useNavigation();
  const items = [handleFormInit];
  const stateFromStoresObject = guild(589).useStateFromStoresObject(items, () => {
    props = props.getProps();
    return { guild: props.guild, submitting: props.submitting, hasChanges: props.hasChanges };
  });
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  guild(589);
  [][0] = getUncachedChannelPermissions;
  let tmp5 = null;
  if (null != guild) {
    obj = { navigation: null, guild: null, submitting: null, hasChanges: null, canManageGuild: null, contentContainerStyle: null };
    obj[0] = navigation;
    obj[1] = guild;
    obj[2] = submitting;
    obj[3] = hasChanges;
    obj[4] = tmp4;
    obj[5] = contentContainerStyle.contentContainerStyle;
    tmp5 = callback(GuildSettingsModalModeration, obj);
  }
  return tmp5;
};